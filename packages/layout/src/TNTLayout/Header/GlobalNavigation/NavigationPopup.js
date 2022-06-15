import { useState, useEffect } from 'react';
import cn from 'classnames';
import { debounce, cloneDeep } from 'lodash';

import eventEmitter from '../../eventEmitter';
import { traverseTree } from '../../utils';
import Icon from '../../Icon';

const SearchList = ({ items, onSelectMenu }) => (
    <ul>
        {
            items?.map(item => (
                <li onClick={() => onSelectMenu(item)}>
                    {item?.menuName}
                </li>
            ))
        }
    </ul>
);

export default ({ menus = [], close, popupRef, selectedMenuKey, language, isHasLevel3, mainMenuCodes = [], mainMenu, siderMenu }) => {
    const [active, setActive] = useState(false);
    const [searchValue, setSearchValue] = useState();

    const [searchedMenus, setSearchedMenus] = useState([]);
    const [mainCodes, setMainCodes] = useState([]);
    const [menuList, setMenuList] = useState([]);

    useEffect(() => {
        if (siderMenu.length) {
            setMainCodes(mainMenuCodes)
            setMenuList(siderMenu)
        }
    }, [siderMenu]);

    const onMenuClick = menu => {
        eventEmitter.emit('menuSelectPopup', { key: menu.code, ...menu });
        setSearchValue('');
        setSearchedMenus([]);
        close();
    };
    const debounceSearch = debounce(evt => {
        const value = evt.target.value?.trim();
        const matchedMenus = [];

        if (value) {
            traverseTree(menus, node => {
                if (node.path && node?.menuName?.includes(value)) {
                    matchedMenus.push(node);
                }
            });
        }

        setSearchedMenus(matchedMenus);
    }, 100);

    const onSearchChange = evt => {
        evt.persist();
        setSearchValue(evt.target.value);
        debounceSearch(evt);
    };

    const handleMainMenu = (item) => {
        setMainCodes([item.code]);
        setMenuList(item.children);
    };

    useEffect(() => {
        const clickOutside = evt => {
            const { clientX, clientY, pageX, pageY } = evt;
            const isOutside = (evt, popup) => {
                if (popup?.contains) {
                    return !popup?.contains(evt.target);
                }

                let { x, y, height, width } = popup.getBoundingClientRect();
                console.log('clickOutside...', [x, y], [clientX, clientY], [pageX, pageY]);
                x += window.scrollX;
                y += window.scrollY;

                return pageX < x || pageX > x + width || pageY < y || pageY > y + height;
            };

            if (isOutside(evt, popupRef.current)) {
                setSearchValue('');
                setSearchedMenus([]);
                close();
            }
        };

        document.addEventListener('click', clickOutside);
        return () => document.removeEventListener('click', clickOutside);
    }, []);

    return (
        <>
            <div className={cn("search-area", { active })}>
                <Icon type="search" />
                <input
                    placeholder="菜单搜索"
                    value={searchValue}
                    onChange={onSearchChange}
                    onFocus={() => setActive(true)}
                    onBlur={() => setActive(false)}
                />
                <Icon type="close" onClick={close} />
                {
                    searchedMenus?.length > 0 && (
                        <SearchList
                            items={searchedMenus}
                            onSelectMenu={onMenuClick}
                        />
                    )
                }
            </div>
            {
                isHasLevel3 && (
                    <ul className="main-menu">
                        {
                            mainMenu?.map(menu => (
                                <li
                                    className={cn({ active: mainCodes.includes(menu.code) })}
                                    onClick={() => handleMainMenu(menu)}
                                >
                                    {menu?.[language === 'cn' ? 'groupName' : 'enName']}
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            <div className="group-menus">
                {
                    menuList?.map(groups => {
                        return (
                            <div>
                                <h5>{groups?.[language === 'cn' ? 'groupName' : 'enName']}</h5>
                                <ul className="menu-list">
                                    {
                                        groups?.children.map(menu => {
                                            return (
                                                <li
                                                    key={menu.code}
                                                    className={cn('menu-list-item', { active: selectedMenuKey === menu.code })}
                                                    onClick={() => onMenuClick(menu)}
                                                >
                                                    <a
                                                        href={menu.path}
                                                        onClick={evt => evt.preventDefault()}
                                                    >
                                                        {menu?.[language === 'cn' ? 'menuName' : 'enName']}
                                                    </a>
                                                </li>

                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
};
