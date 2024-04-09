import { useState, useEffect, useContext } from 'react';
import cn from 'classnames';
import { isUndefined, cloneDeep } from 'lodash';
import { Layout } from 'tntd';

import { ThemeContext } from './Context';
import Icon from './Icon';
import Header from './Header';
import Logo from './Logo';
import SideMenu from './SideMenu';

import { getSideMenuStore, setSideMenuStore } from './storage';
import { formatter, getActiveMenu, getParents, hasLevel2, hasLevel3 } from './utils';

const { Content, Sider, Header: AntdHeader } = Layout;

export default (props) => {
  const {
    className,
    menus = [],
    collapseIconPlacement = 'bottom',
    location: { pathname },
    size,
    siderWidth = 240,
    isEmptyLayout,
    headerTabs,
    onLanguageChange,
    onMenuLevelChange,
  } = props;

  const { theme, language, menuLevel } = useContext(ThemeContext);
  let { collapsed: storeCollapsed, openKeys = [] } = getSideMenuStore();

  const [collapsed, setCollapsed] = useState(isUndefined(storeCollapsed) ? false : storeCollapsed);
  const [openMenuKeys, setOpenMenuKeys] = useState(openKeys);
  const [mainMenu, setMainMenu] = useState([]);
  const [siderMenu, setSiderMenu] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
  const [isHasLevel3, setIsHasLevel3] = useState(false);

  const basicMenus = (menus, isLevel3) => {
    const cloneMenus = cloneDeep(menus);
    let mainMenu = cloneMenus;
    if (isLevel3) {
      mainMenu = [
        {
          code: 'other',
          enName: '其它',
          groupIcon: 'system',
          groupName: '其它',
          id: Number(new Date()),
          children: [],
        },
      ];

      cloneMenus.forEach((element) => {
        const isLevel2 = hasLevel2(element);
        if (isLevel2) {
          mainMenu.push(element);
        } else {
          mainMenu[0].children.push(element);
        }
      });

      if (mainMenu[0].children.length) {
        mainMenu.reverse();
      } else {
        mainMenu.splice(0, 1);
      }
    }
    formatter(mainMenu);

    return mainMenu;
  };

  useEffect(() => {
    if (menus.length && pathname) {
      const isLevel3 = hasLevel3(menus);

      const mainMenu = basicMenus(menus, isLevel3);
      const activeMenu = getActiveMenu(mainMenu, pathname);
      let parents = [];
      if (activeMenu) {
        parents = getParents(activeMenu);
      } else {
        parents = [mainMenu[0].code];
      }

      setIsHasLevel3(isLevel3);
      setMainMenu(mainMenu);
    }
  }, [menus]);

  useEffect(() => {
    if (mainMenu.length && pathname) {
      const activeMenu = getActiveMenu(mainMenu, pathname);
      let parents = [];
      if (activeMenu) {
        parents = getParents(activeMenu);
      } else {
        parents = [mainMenu[0].code];
      }
      let siderMenu = [];
      if (isHasLevel3) {
        const selectedMainMenu = mainMenu.find((m) => m.code === parents[0]) || {};
        siderMenu = selectedMainMenu ? selectedMainMenu.children : [];

        onMenuLevelChange && onMenuLevelChange(menuLevel);
      } else {
        siderMenu = mainMenu;
      }
      setSiderMenu(siderMenu);
      setOpenMenuKeys(parents);
      setSelectedKeys(parents);
    }
  }, [mainMenu, pathname]);

  const collapseChangeHandle = () => {
    const { beforeOpenKeys = [] } = getSideMenuStore();
    const newCollapsed = !collapsed;

    // 菜单收起：记住当前展开子菜单到store，并收起子菜单
    if (newCollapsed) {
      setSideMenuStore({
        collapsed: newCollapsed,
        beforeOpenKeys: openMenuKeys,
      });
      setOpenMenuKeys([]);
    } else {
      // 菜单展开：恢复子菜单展开项，并更新到store
      setSideMenuStore({
        collapsed: newCollapsed,
        openKeys: beforeOpenKeys,
      });
      setOpenMenuKeys(beforeOpenKeys);
    }

    setCollapsed(newCollapsed);
  };

  useEffect(() => {
    onLanguageChange && onLanguageChange(language);
  }, []);
  return (
    <Layout
      className={cn(
        'tnt-layout',
        `tnt-${theme}`,
        {
          'large-size': size === 'large',
          isNoHasLevel3: !isHasLevel3,
          isEmptyLayout,
          hasHeaderTabs: !!headerTabs,
        },
        className,
      )}
    >
      <Sider
        collapsible
        breakpoint="md"
        className="tnt-layout-sider"
        collapsed={collapsed}
        collapsedWidth={collapsed && isHasLevel3 ? 110 : 80}
        width={siderWidth}
        trigger={null}
      >
        <Logo siderWidth={siderWidth} collapsed={collapsed} {...props} />
        <SideMenu
          {...props}
          collapsed={collapsed}
          openKeys={openMenuKeys}
          isHasLevel3={isHasLevel3}
          mainMenu={mainMenu}
          siderMenu={siderMenu}
          selectedKeys={selectedKeys}
          handleMainMenu={(item) => {
            setSiderMenu(item.children);
          }}
          onOpenChange={(keys) => {
            if (!collapsed) {
              setSideMenuStore({
                openKeys: keys,
                beforeOpenKeys: keys,
              });
            }
            setOpenMenuKeys(keys);
          }}
        />
        {collapseIconPlacement === 'bottom' && !isHasLevel3 && (
          <div className="tnt-layout-menu-collapse" onClick={collapseChangeHandle}>
            <Icon type={`menu-${collapsed ? 'unfold' : 'fold'}`} />
          </div>
        )}
      </Sider>
      <Layout>
        <Header
          {...props}
          collapsed={collapsed}
          isHasLevel3={isHasLevel3}
          mainMenuCodes={selectedKeys}
          mainMenu={mainMenu}
          siderMenu={siderMenu}
          onCollapseChange={collapseChangeHandle}
          collapseIconPlacement={collapseIconPlacement}
        />
        <Content>{props.children}</Content>
      </Layout>
    </Layout>
  );
};
