import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';

import './index.less';

import { ThemeContext } from '../Context';
import { isNewTabMenu, openInNewTab, getStrLength } from '../utils';
import eventEmitter from '../eventEmitter'

import Iconfont from '../Icon';
import Flicon from '../Flicon';

const { SubMenu, Item: MenuItem } = Menu;

const hasChild = (menu) => {
    const hasChild = menu.children && menu.children.length > 0;
    return hasChild;
};

const SideMenu = props => {
    const { size, openKeys = [], isHasLevel3, mainMenu, siderMenu, handleMainMenu, selectedKeys,
        formatMenuPath, changeRouter, onMenuSelect, onOpenChange, collapsed } = props;

    const { language } = useContext(ThemeContext);
    const [mainCodes, setMainCodes] = useState([]);

    const headerHeight = size === 'large' ? 60 : 50;

    const onSelectMenu = params => {
        let curItem
        if (params.item) {
            curItem = params.item.props.curitem
        } else {
            curItem = params;
        }

        const defaultSelect = ({ data }) => {
            const { path } = data || {};
            const formatPath = formatMenuPath || (path => path);

            if (isNewTabMenu(data)) {
                openInNewTab(formatPath(data?.path, data));
                return;
            }

            const routerPrefix = window.location.pathname.match(/(^\/[^\/]+)/i)?.[1];

            if (path?.startsWith(routerPrefix)) {
                const forwardPath = formatPath(path, data);
                changeRouter ? changeRouter(forwardPath, data) : window.history.pushState(data, data?.name, forwardPath);
            } else {
                window.location.href = formatPath(path, data);
            }
        };
        const finalSelect = onMenuSelect || defaultSelect;

        finalSelect(curItem);
    };

    useEffect(() => {
        if (selectedKeys.length) {
            setMainCodes(selectedKeys)
        }
    }, [selectedKeys]);

    useEffect(() => {
        eventEmitter.off('menuSelectPopup', onSelectMenu);
        eventEmitter.on('menuSelectPopup',  onSelectMenu);
    }, []);

    const getExpandIcon = code => {
        return openKeys.includes(code) ? 'up' : 'down';
    };

    const onMenuClick = (key, menuItem) => {
        const curKey = [key];
        let newOpenKeys = curKey;
        const parentCode = menuItem.parent?.code || '';

        // 展开openKey
        if (openKeys.includes(parentCode)) {
            // 父子关系展开
            newOpenKeys = openKeys.includes(key) ? [parentCode] : [parentCode, key];
        } else { // 收起closeKey
            newOpenKeys = openKeys.includes(key) ? [] : curKey;
        }
        onOpenChange && onOpenChange(newOpenKeys);
    };

    const MenuLink = ({ menuName, enName, path }) => (
        <a href={path} onClick={evt => evt.preventDefault()}>
            {{ cn: menuName, en: enName }[language]}
        </a>
    );

    const getSubMenuProps = ({ code, groupIcon, groupName, enName }) => ({
        key: code,
        title: !isHasLevel3 ? (
            <span className="menu-title">
                <Iconfont type={groupIcon} />
                { collapsed ? '' : {cn: groupName, en: enName}[language] }
            </span>
        ): (
            <span className="menu-title">
                { collapsed ? <Iconfont type={groupIcon} /> : null}
                { collapsed ? '' : {cn: groupName, en: enName}[language] }
            </span>
        ),
        expandIcon: collapsed ? null : <Iconfont type={getExpandIcon(code)} />
    });

    const renderMenu = (menu) => {
        return hasChild(menu) ? (
            <SubMenu onTitleClick={({ key }) => { onMenuClick(key, menu); }} {...getSubMenuProps(menu)}>
                {menu.children.map((item) => {return renderMenu(item);})}
            </SubMenu>
        ) : (
            <MenuItem onClick={onSelectMenu} curitem={menu} key={menu?.code}>
                <MenuLink {...menu} />
            </MenuItem>
        );
    };

    const renderGroupName = (groupName) => {
       const len =  getStrLength(groupName);
       let listStr = [];
        if (len > 6 && len < 12) {
            const startStr = groupName.slice(0, 2);
            const endStr = groupName.slice(2);
            listStr.push(startStr);
            listStr.push(endStr);
        } else if (len >= 12) {
            const startStr = groupName.slice(0, 3);
            const endStr = groupName.slice(3, 6);
            listStr.push(startStr);
            listStr.push(endStr);
        } else {
            listStr.push(groupName)
        }

        return (listStr.map((val, i) => {
            return <div key={i} className="menu-text">{val}</div>
        }))
    }

    return (
        <div className="tnt-layout-side-menu" style={{ height: `calc(100vh - ${headerHeight}px)` }}>
            {isHasLevel3 && (
                <div className="menu-Level1">
                    {mainMenu.map(item => {
                        return (
                            <div key={item.code} onClick={() => {
                                setMainCodes([item.code]);
                                handleMainMenu(item);
                            }} className={mainCodes.includes(item.code) ? 'menu-Level1-item active' : 'menu-Level1-item'} >
                                <Flicon type={item.groupIcon} />
                                {renderGroupName(item.groupName)}
                            </div>
                        );
                    })}
                </div>
            )}
            <Menu mode="inline" openKeys={openKeys} selectedKeys={selectedKeys}>
                {siderMenu.map(menu => {
                    return renderMenu(menu);
                })}
            </Menu>
        </div>
    );
};

export default SideMenu;
