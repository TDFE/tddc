import { useState, useEffect, useReducer } from 'react';
import { ConfigProvider, Spin, Empty } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import { DevelopmentLogin } from 'tntd';
import Cookies from 'universal-cookie';
import EventEmitter from 'eventemitter3';
import Layout from '../TNTLayout';
import reducer, { initState } from './reducer';
import { rsaPwd, formatOrgApp, getLayoutPageTitle } from './utils';
import service from './service/index';
import './index.less';

const layoutEventEmitter = window?.lightBoxActions || new EventEmitter();
const { HeaderTabs, HeaderActionItem, AuthContext } = Layout;

export { HeaderTabs, AuthContext };

const TGLayout = (props) => {
    const { origin, pathname, search } = window.location || {};
    const {
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
        ...rest
    } = props;
    const [locale, setLocale] = useState(zhCN);
    const [errorMsg, setErrorMsg] = useState('');
    const [state, dispatch] = useReducer(reducer, initState());
    const [routerPrefix, setRouterPrefix] = useState(pathname?.split('/')[1]);
    const needAuth = !(['/user/login', '/user/startup'].includes(pathname)) ;
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
        personalMode = {}
    } = state || {};
    const { menuTree = [], name, enName, logo, extendMap } = menuInfo || {};

    // 根据机构获取渠道
    const getAppByOrgId = async (org) => {
        const orgAppList = await service.getAppByOrgId({ orgUuid: org?.uuid });
        dispatch({
            type: 'setOrgInfo',
            payload: {
                currentOrgCode: org?.code,
                orgAppList
            }
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
        if (needAuth) {
            // 如果没有csrf则默认跳转到登录页面
            if (!sessionStorage.getItem('_csrf_') && process.env.NODE_ENV !== 'development') {
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
                    const { orgList, orgUuidTree, orgUuidMap, orgCodeMap, currentApp, appList, appMap } = formatOrgApp(orgGroup, apps);
                    let { uuid, code } = orgGroup || {};
                    if (localStorage.hasOwnProperty('currentOrg') && orgGroup) {
                        try {
                            const currentOrg = JSON.parse(localStorage.getItem('currentOrg'));
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
                            appMap
                        }
                    });
                })
                .finally(() => {
                    dispatch({
                        type: 'initUserReady'
                    });
                })
                .catch((e) => {
                    setErrorMsg(e.message || '加载用户失败');
                });
            // 获取菜单信息
            service
                .getMenuTree()
                .then((data) => {
                    document.title = data?.name || '';
                    dispatch({
                        type: 'initMenuTree',
                        payload: data
                    });
                })
                .finally(() => {
                    dispatch({
                        type: 'initMenuTreeReady'
                    });
                })
                .catch((e) => {
                    setErrorMsg(e.message || '加载用户失败');
                });
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
        // 获取加盐随机数
        const tempRandom = await service.getAuthCode(params);
        if (tempRandom) {
            service.userLogin({ ...params, tempRandom }).then((data) => {
                const csrfToken = data.csrfToken;
                sessionStorage.setItem('_csrf_', csrfToken);
                localStorage.setItem('_sync_qjt_csrf_', csrfToken); // 新的csrf同步到其他页面
                localStorage.setItem('developmentLoginData', JSON.stringify(params));
                window.location.reload();
            });
        }
    };

    // 监听机构变更
    const orgChange = (curOrgTree) => {
        onOrgChange && onOrgChange(curOrgTree);
        layoutEventEmitter.emit('appChange', true);
        getAppByOrgId(curOrgTree);
    };

    // 渠道切换
    const appChange = (app) => {
        onAppChange && onAppChange(app);
        layoutEventEmitter.emit('appChange', true);
        dispatch({
            type: 'setCurrentApp',
            payload: { currentApp: app }
        });
    };

    // 语言切换
    const languageChange = (language) => {
        onLanguageChange && onLanguageChange(language);
        setLocale(language === 'cn' ? zhCN : enUS);
        dispatch({
            type: 'personalMode',
            payload: {
                personalMode: {
                    ...personalMode,
                    lang: language
                }
            }
        });
        localStorage.setItem('lang', language);
        const cookies = new Cookies();
        cookies.set('lang', language, { path: '/' });
    };

    return (
        <ConfigProvider locale={locale}>
            <Layout
                key={!actions && `${currentOrgCode}_${currentApp.name}`}
                type="enterprise"
                logo={logo && <img className="logo" style={{ opacity: logo && logo.indexOf('white') ? 0.85 : 1 }} src={logo} />}
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
                orgAppShow={orgAppListVisible}
                orgAppList={orgAppList}
                onLanguageChange={languageChange}
                onMenuSelect={(data) => {
                    if (data?.path?.startsWith(`/${routerPrefix}`)) {
                        layoutEventEmitter?.emit('menuClick', true);
                    }
                    onMenuSelect && onMenuSelect(data);
                }}
                {...rest}
                // 开发模式增加登录
                extraHeaderActions={[
                    process.env.NODE_ENV === 'development' && !actions && (
                        <HeaderActionItem key="help" onClick={() => {}}>
                            <DevelopmentLogin signIn={mockLogin} />
                        </HeaderActionItem>
                    )
                ]}>
                {userReady && menuTreeReady ? (
                    errorMsg ? (
                        <Empty description={errorMsg} imageStyle={{ marginTop: '150px' }} />
                    ) : (
                        children
                    )
                ) : (
                    <Spin className="subapp-loading" />
                )}
            </Layout>
        </ConfigProvider>
    );
};
TGLayout.getLayoutPageTitle = getLayoutPageTitle;
TGLayout.layoutEventEmitter = layoutEventEmitter;
export default TGLayout;
