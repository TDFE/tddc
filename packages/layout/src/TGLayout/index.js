import { useState, useEffect, useReducer, useMemo } from 'react';
import { Spin, Empty, message } from 'tntd';
// import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
import { DevelopmentLogin } from 'tntd';
import Cookies from 'universal-cookie';
import Layout from '../TNTLayout';
import reducer, { initState } from './reducer';
import { rsaPwd, formatOrgApp, getLayoutPageTitle } from './utils';
import service from './service/index';
import './index.less';
const { HeaderTabs, HeaderActionItem, AuthContext } = Layout;

const TGLayout = (props) => {
  const { origin, pathname, search } = window.location || {};
  const {
    directRender,
    noAuth,
    noMenu,
    eventEmitter,
    actions,
    syncGlobalState,
    children,
    appListVisible,
    orgListVisible,
    orgAppListVisible,
    onOrgChange,
    onLanguageChange,
    onAppChange,
    onMenuSelect,
    onMenuLevelChange,
    isDev,
    ...rest
  } = props;
  const [errorMsg, setErrorMsg] = useState('');
  const [state, dispatch] = useReducer(reducer, initState());
  const [routerPrefix, setRouterPrefix] = useState(pathname?.split('/')[1]);
  const needAuth = useMemo(
    () => !(['/user/login'].indexOf(window.location.pathname) > -1 || noAuth),
    [noAuth],
  ); // , '/user/startup'
  const needMenu = useMemo(
    () => !(['/user/startup'].indexOf(window.location.pathname) > -1 || noMenu),
    [noMenu],
  );

  const {
    userReady,
    menuTreeReady,
    menuInfo = {},
    userInfo = {},
    orgUuidTree = [],
    orgAppList = [],
    appList = [],
    currentOrgCode,
    currentApp = {},
    personalMode = {},
  } = state || {};
  const { menuTree = [], name, enName, logo, extendMap } = menuInfo || {};

  // 根据机构获取渠道
  const getAppByOrgId = async (org) => {
    const orgAppList = await service.getAppByOrgId({ orgUuid: org?.uuid });
    await dispatch({
      type: 'setOrgInfo',
      payload: {
        currentOrgCode: org?.code,
        orgAppList,
      },
    });
  };

  // 退出登陆
  const onLogout = () => {
    service.signOut().then(() => {
      sessionStorage.setItem('_csrf_', '');
      sessionStorage.clear();
      localStorage.clear();
      if (pathname !== '/user/login') {
        window.location.href = '/user/login';
      }
    });
  };

  useEffect(() => {
    if (state) {
      if (state?.menuTreeReady && state?.userReady) {
        // 子应用同步数据
        syncGlobalState && syncGlobalState(state);
        // 同步基座数据
        actions?.setGlobalState && actions?.setGlobalState(state);
      }
    }
  }, [state]);

  useEffect(() => {
    if (state.currentApp?.name) {
      actions?.setCurrentApp(state.currentApp);
    }
  }, [state.currentApp?.name]);

  useEffect(() => {
    if (state.currentOrg?.name) {
      actions?.setCurrentOrg({
        ...state.currentOrg,
        uuid: state.currentOrg.key,
      });
    }
  }, [state.currentOrg?.name]);

  useEffect(() => {
    if (needAuth) {
      // 如果没有csrf则默认跳转到登录页面
      if (!sessionStorage.getItem('_csrf_') && process.env.NODE_ENV !== 'development' && !isDev) {
        if (search) {
          const callbackUrl = origin + pathname + encodeURIComponent(search);
          window.location = '/user/login?callbackUrl=' + callbackUrl;
        } else {
          window.location = '/user/login';
        }
      }
      // 获取用户信息
      service
        .getUserInfo()
        .then(async (data) => {
          // 获取机构树
          const { orgGroup = {}, apps } = data || {};
          const { orgList, orgUuidTree, orgUuidMap, orgCodeMap, currentApp, appList, appMap } =
            formatOrgApp(orgGroup, apps);
          let { uuid, code } = orgGroup || {};
          if (localStorage.hasOwnProperty('currentOrg_new') && orgGroup) {
            try {
              const currentOrg = JSON.parse(localStorage.getItem('currentOrg_new'));
              if (orgCodeMap[currentOrg.code]) {
                uuid = currentOrg.key;
                code = currentOrg.code;
              }
            } catch (e) {}
          }
          await getAppByOrgId({ uuid, code });
          dispatch({
            type: 'initUserInfo',
            payload: {
              userInfo: data,
              orgList,
              orgUuidTree,
              orgUuidMap,
              orgCodeMap,
              currentApp,
              appList,
              appMap,
              userReady: true,
              currentOrg: {
                key: orgGroup.uuid,
                name: orgGroup.name,
                code: orgGroup.code,
              },
            },
          });
        })
        .catch((e) => {
          dispatch({
            type: 'initUserReady',
          });
          setErrorMsg(e.message || '加载用户失败');
        });
      if (needMenu) {
        // 获取菜单信息
        service
          .getMenuTree()
          .then((data) => {
            document.title = data?.name || '';
            dispatch({
              type: 'initMenuTree',
              payload: data,
            });
          })
          .catch((e) => {
            dispatch({
              type: 'initMenuTreeReady',
            });
            setErrorMsg(e.message || '加载用户失败');
          });
      }
    }
  }, [routerPrefix]);

  useEffect(() => {
    // 切换应用的时候重新获取用户信息和解决方案接口
    const curPathName = pathname?.split('/')[1];
    if (curPathName !== routerPrefix && routerPrefix) {
      setRouterPrefix(curPathName);
    }
  }, [pathname]);

  // 模拟登陆
  const mockLogin = async (p) => {
    const { account, password } = p || {};
    const params = { account, password: rsaPwd(password) };
    let { tempRandom, authMessage } = ['', false, ''];
    // 获取加盐随机数
    const authResult = await service.getAuthCode(params);
    tempRandom = authResult;
    authMessage = authResult?.message;
    if (tempRandom) {
      const res = await service.userLogin({ ...params, tempRandom });
      if (res) {
        const csrfToken = res.csrfToken;
        sessionStorage.setItem('_csrf_', csrfToken);
        localStorage.setItem('_sync_qjt_csrf_', csrfToken); // 新的csrf同步到其他页面
        localStorage.setItem('developmentLoginData', JSON.stringify(params));
        location.reload();
      } else {
        message.error(res.message);
        return Promise.reject(res.message);
      }
      return;
    }
    message.error(authMessage || '账号或者密码错误');
    return Promise.reject(authMessage || '账号或者密码错误');
  };

  // 监听机构变更
  const orgChange = (curOrgTree) => {
    onOrgChange && onOrgChange(curOrgTree);
    eventEmitter?.emit('appChange', true);
    getAppByOrgId(curOrgTree);
  };

  // 渠道切换
  const appChange = (app) => {
    onAppChange && onAppChange(app);
    eventEmitter?.emit('appChange', true);
    dispatch({
      type: 'setCurrentApp',
      payload: { currentApp: app },
    });
  };

  // 语言切换
  const languageChange = (language) => {
    onLanguageChange && onLanguageChange(language);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: {
          ...personalMode,
          lang: language,
        },
      },
    });
    const cookies = new Cookies();
    cookies.set('lang', language, { path: '/' });
  };

  // 菜单级别切换
  const menuLevelChange = (menuLevel) => {
    onMenuLevelChange && onMenuLevelChange(menuLevel);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: {
          ...personalMode,
          menuLevel,
        },
      },
    });
  };
  return (
    // <ConfigProvider locale={personalMode?.lang === 'en' ? enUS : zhCN}>
    <Layout
      key={!actions && `${currentOrgCode}_${currentApp.name}`}
      type="enterprise"
      logo={
        logo && (
          <img
            className="logo"
            style={{ opacity: logo && logo.indexOf('white') ? 0.85 : 1 }}
            src={logo}
          />
        )
      }
      name={name}
      enName={enName}
      userInfo={userInfo}
      menus={menuTree}
      extendMap={extendMap}
      onLogout={onLogout}
      appList={appListVisible && appList}
      onAppChange={appChange}
      orgList={orgListVisible && orgUuidTree[0]}
      onOrgChange={orgChange}
      onMenuLevelChange={menuLevelChange}
      orgAppShow={orgAppListVisible}
      orgAppList={orgAppList}
      onLanguageChange={languageChange}
      onMenuSelect={(data) => {
        if (data?.path?.startsWith(`/${routerPrefix}`)) {
          eventEmitter?.emit('menuClick', true);
        }
        onMenuSelect && onMenuSelect(data);
      }}
      {...rest}
      // 开发模式增加登录
      extraHeaderActions={[
        process.env.NODE_ENV === 'development' && !actions && (
          <HeaderActionItem key="help">
            <DevelopmentLogin signIn={mockLogin} />
          </HeaderActionItem>
        ),
      ]}
    >
      {!needAuth || directRender || (userReady && (menuTreeReady || !needMenu)) ? (
        errorMsg ? (
          <Empty description={errorMsg} imageStyle={{ marginTop: '150px' }} />
        ) : (
          children
        )
      ) : (
        <Spin className="subapp-loading" />
      )}
    </Layout>
    // </ConfigProvider>
  );
};
TGLayout.getLayoutPageTitle = getLayoutPageTitle;
TGLayout.HeaderTabs = HeaderTabs;
TGLayout.AuthContext = AuthContext;
TGLayout.HeaderActionItem = HeaderActionItem;
export default TGLayout;
