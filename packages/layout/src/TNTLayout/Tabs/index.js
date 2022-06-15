import { useState, useEffect, useRef } from 'react';
import cn from 'classnames';
import { get } from 'lodash';

import './index.less';

import Icon from '../Icon';

export const HeaderTabs = (props) => {
    const { className, tabs = [], onTabChange, onTabSelect, onTabClose, appListVisible, orgListVisible, orgAppListVisible } = props;

    const [selectedKey, setSelectedKey] = useState(props.selectedKey || get(tabs, '0.key'));
    const [tabItems, setTabItems] = useState(tabs || []);
    const [arrowVisible, setArrowVisible] = useState(false);
    const [tabsPositionFlags, setTabsPositionFlags] = useState({ start: true, end: true });
    const tabsRef = useRef();

    const getTabsDom = () => tabsRef.current;

    const onTabClick = (tab, index) => {
        setSelectedKey(tab.key);
        onTabSelect?.(tab);

        if (selectedKey !== tab.key) {
            onTabChange?.(tab);
        }
    };
    const closeTabHandle = (tab, index, evt) => {
        evt.stopPropagation();
        const newTabItems = tabItems.filter(({ key }) => key !== tab.key);
        let newSelectedKey = selectedKey;

        setTabItems(newTabItems);
        if (tab.key === selectedKey) {
            newSelectedKey = index === 0 ? newTabItems[0]?.key : newTabItems[index - 1]?.key;
            setSelectedKey(newSelectedKey);
        }
        onTabClose?.(
            tab,
            newTabItems,
            newTabItems.find(({ key }) => key === newSelectedKey)
        );
    };
    const onMoveToLeft = () => {
        const tabsDom = getTabsDom();
        const parentBBox = tabsDom.parentNode.getBoundingClientRect();
        const parentWidth = parentBBox.width - 32;
        let x = Math.abs(Number(tabsDom.style.transform.replace(/[^\d.-]/g, '')));
        const index = Math.ceil(x / 130);
        const trueX = index * 130;
        let newX = Math.min(0, -(trueX - parentWidth));
        tabsDom.style.transform = `translateX(${newX}px)`;

        const width = tabItems.length * 130;
        setTabsPositionFlags({
            start: newX < 0,
            end: Math.abs(newX) < width - parentWidth
        });
    };
    const onMoveToRight = () => {
        const tabsDom = getTabsDom();
        const parentBBox = tabsDom.parentNode.getBoundingClientRect();
        const parentWidth = parentBBox.width - 32;
        const width = tabItems.length * 130;

        let x = Math.abs(Number(tabsDom.style.transform.replace(/[^\d.-]/g, '')));
        const index = Math.floor(x / 130);
        const trueX = index * 130;
        let newX = Math.max(-(width - parentWidth), -(trueX + parentWidth));
        tabsDom.style.transform = `translateX(${newX}px)`;

        setTabsPositionFlags({
            start: newX < 0,
            end: Math.abs(newX) < width - parentWidth
        });
    };

    const translateTabsDom = (tabs, selectedKey) => {
        if (!selectedKey) return;
        const index = tabs.indexOf(tabs.find(({ key }) => key === selectedKey));
        if (index === -1) return;
        const tabsDom = getTabsDom();
        let x = -Number(tabsDom.style.transform.replace(/[^\d.-]/g, ''));
        const bbox = {
            left: index * 130,
            right: (index + 1) * 130
        };
        const parentBBox = tabsDom.parentNode.getBoundingClientRect();
        const parentWidth = parentBBox.width - 36;
        const width = tabItems.length * 130;

        let tailX = x + parentWidth; // 当前滑动窗口尾部坐标
        let newX = -x;
        if (bbox.left < x) {
            newX = -bbox.left;
        } else if (bbox.right >= tailX) {
            newX = parentWidth - bbox.right;
        }
        if (newX + width < parentWidth) {
            newX = -(width - parentWidth);
        }
        newX = Math.min(0, newX);
        tabsDom.style.transform = `translateX(${newX}px)`;

        setTabsPositionFlags({
            start: newX < 0,
            end: Math.abs(newX) < width - parentWidth
        });
    };

    useEffect(() => {
        setSelectedKey(props.selectedKey || get(tabs, '0.key'));
        setTabItems(tabs);
    }, [tabs, props.selectedKey]);

    useEffect(() => {
        const tabsDom = getTabsDom();

        setArrowVisible(tabsDom.offsetWidth - tabsDom.parentNode.offsetWidth > 0);
    }, [tabItems]);

    useEffect(() => {
        translateTabsDom(tabItems, selectedKey);
    }, [tabItems, selectedKey, appListVisible, orgListVisible, orgAppListVisible]);

    const [style, setStyle] = useState({});
    const nowTab = useRef();
    useEffect(() => {
        window.addEventListener('click', onCancel);
        return () => {
            window.removeEventListener('click', onCancel);
        };
    }, []);
    const onCancel = () => {
        setStyle({});
    };
    const onContextMenu = (e, tab) => {
        e.preventDefault();
        e.stopPropagation();
        nowTab.current = tab;
        const { clientX, clientY } = e;
        setStyle({
            left: clientX,
            top: clientY,
            display: 'block'
        });
    };

    const onCloseNow = (e) => {
        const index = tabs.indexOf(nowTab.current);
        closeTabHandle(nowTab.current, index, e);
        setStyle({});
    };

    const onCloseRight = (e) => {
        const index = tabs.indexOf(nowTab.current);
        const current = tabs.find(({ key }) => key === selectedKey);
        const currentIndex = tabs.indexOf(current);
        const activeTab = currentIndex > index ? nowTab.current : current;
        const closeTabs = tabs.splice(index + 1, tabs.length - index);
        const newTabs = [...tabs];
        setTabItems(newTabs);
        onTabClose?.(undefined, newTabs, activeTab, closeTabs);
        setStyle({});
    };

    const onCloseOthers = (e) => {
        const newTabs = [nowTab.current];
        const index = tabs.indexOf(nowTab.current);
        const closeTabs = tabs.filter((tab, i) => i !== index);
        setTabItems(newTabs);
        onTabClose?.(undefined, newTabs, nowTab.current, closeTabs);
        setStyle({});
    };

    return (
        <div className={cn('tnt-layout-header-tabs', className)}>
            <ul className="tnt-layout-header-tabs-content" ref={tabsRef}>
                {tabItems.map((tab, index) => (
                    <li
                        onContextMenu={(e) => {
                            onContextMenu(e, tab);
                        }}
                        key={tab.key}
                        className={cn({
                            active: selectedKey === tab.key,
                            activeTabPreSibling: tabItems[index + 1]?.key === selectedKey
                        })}
                        onClick={() => onTabClick(tab, index)}>
                        <a href={tab.key} onClick={(evt) => evt.preventDefault()}>
                            {tab.name}
                        </a>
                        {tabItems.length > 1 && <Icon type="close" onClick={closeTabHandle.bind(null, tab, index)} />}
                    </li>
                ))}
            </ul>
            <div className="right-menulist" style={{ ...style }}>
                <div onClick={onCloseNow} className={`${tabs.length === 1 ? 'disabled' : ''}`}>
                    关闭
                </div>
                <div onClick={onCloseOthers}>关闭其他</div>
                <div onClick={onCloseRight}>关闭右侧</div>
            </div>
            {arrowVisible && (
                <div className="tnt-layout-header-tabs-arrows">
                    <Icon type="left" onClick={onMoveToLeft} disabled={!tabsPositionFlags.start} />
                    <Icon type="right" onClick={onMoveToRight} disabled={!tabsPositionFlags.end} />
                </div>
            )}
        </div>
    );
};

export default HeaderTabs;
