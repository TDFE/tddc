import createServices from './createServices';

export default createServices({
    getUserInfo: {
        url: '/userCenter/getUserInfo'
    },
    getMenuTree: {
        url: '/user/menuTree'
    },
    getAppByOrgId: {
        url: '/user/app'
    },
    getOrgNetworkByOrgId: {
        url: '/org/lastOrg'
    },
    signOut: {
        url: '/user/logout',
        method: 'POST',
        dataType: 'x-www-form-urlencoded'
    },
    getAuthCode: {
        url: '/user/getAuthCode',
        method: 'POST',
        dataType: 'x-www-form-urlencoded'
    },
    userLogin: {
        url: '/user/login',
        method: 'POST',
        dataType: 'x-www-form-urlencoded'
    }
});
