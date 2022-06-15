import { formatAppList, getSubAppsFromMenus } from './utils';
export const initState = () => ({
    userInfo: {},
    menuInfo: {},
    subApps: [],
    menuTreeReady: false,
    multiUserModal: false,
    userReady: false,
    orgList: [],
    orgUuidTree: [],
    orgUuidMap: {},
    orgCodeMap: {},
    orgAppList: [],
    appList: [],
    appMap: {},
    currentOrgCode: '',
    currentOrg: {},
    currentApp: {},
    currentUser: {},
    personalMode: {
        lang: 'cn',
        theme: 'themeS1',
        layout: 'default'
    }
});

export default (state, action) => {
    switch (action.type) {
        case 'init':
            return initState();
        case 'initUserInfo': {
            const { userInfo, orgList, orgUuidTree, orgUuidMap, orgCodeMap, currentApp, appList, appMap } = action.payload || {};
            const { userName, account, uuid, avatar } = userInfo || {};
            return {
                ...state,
                currentUser: {
                    userName,
                    account,
                    uuid,
                    avatar
                },
                userInfo,
                orgList,
                orgUuidTree,
                orgUuidMap,
                orgCodeMap,
                currentApp,
                appList,
                appMap,
                userReady: true
            };
        }
        case 'initMenuTree': {
            const menuInfo = action.payload || {};
            let { extendMap } = menuInfo || {};
            try {
                if (typeof extendMap === 'string') {
                    extendMap = JSON.parse(extendMap);
                }
            } catch (e) {}
            const subApps = getSubAppsFromMenus(menuInfo?.menuTree || []);
            window.localStorage.setItem('customTree', JSON.stringify(menuInfo));
            return {
                ...state,
                subApps,
                menuInfo: {
                    ...menuInfo,
                    extendMap
                },
                menuTreeReady: true
            };
        }
        case 'initMenuTreeReady': {
            return {
                ...state,
                menuTreeReady: true
            };
        }
        case 'initUserReady': {
            return {
                ...state,
                userReady: true
            };
        }
        case 'setOrgInfo': {
            const orgAppList = formatAppList(action.payload.orgAppList || []);
            return {
                ...state,
                ...action.payload,
                orgAppList
            };
        }
        case 'setCurrentApp': {
            return { ...state, ...action.payload };
        }
        case 'personalMode': {
            return { ...state, ...action.payload };
        }
        default:
            throw new Error();
    }
};
