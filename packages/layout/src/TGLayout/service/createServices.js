import service from 'lib-service';
import { message } from 'antd';
import { getHeader, goToLogin } from '../utils';

export default service({
    baseUrl: '/bridgeApi',
    dataType: 'formdata',
    headers: getHeader(),
    401: (res) => {
        goToLogin();
    },
    403: (res) => {
        message.warn(`【403】${res.message || res.statusText}`);
    },
    onError: (err) => {
        message.error((err && err.message) || '未知错误');
    }
});
