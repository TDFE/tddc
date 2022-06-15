export default {
    baseUrl: '/api',
    redirectUrl: '/login/logout',
    dataType: 'formdata', // json、formdata、x-www-form-urlencoded
    401: () => {},
    onError: err => {
        // message.error(err.message || '服务器未知错误');
        console.error(err.message || err.msg || '服务器未知错误')
    }
};