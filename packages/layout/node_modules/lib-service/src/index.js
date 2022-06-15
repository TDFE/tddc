/**
 * @file create services by config
 * @author zhangyou
 */
import jsonToFormData from 'json-form-data';
import { stringify } from 'query-string';
import checkStatus from './checkStatus';
import { getFullUrl, buildURL } from './utils';
import defaultConfig from './config';


/**
 * 给请求添加拦截器
 * @param {Promise} promise 请求promise实例
 * @param {Array} interceptors 拦截器数组
 * @param {String} url 当前请求的地址
 * 
 * @return {Promise} 返回添加拦截器后新的promise对象
 */
export const addInterceptors = (promise, interceptors, url) => {
    interceptors.forEach(interceptor => {
        if (interceptor instanceof Function) {
            promise = promise.then(interceptor);
        }
        if (Object.prototype.toString.call(interceptor) === '[object Object]') {
            Object.entries(interceptor).forEach(([urlPattern, fun]) => {
                if (new RegExp(urlPattern).test(url) && fun instanceof Function) {
                    promise = promise.then(fun);
                }
            });
        }
    });
    return promise;
};

/**
 * 组装最终请求的options对象
 * 
 * @param {Object} options 请求配置信息对象
 * @params {Object} params 请求参数
 * 
 * @return {Object} 最终发送请求的options对象 
 */
export const generateOptions = (options, params, globalConfig = defaultConfig) => {
    const {
        url,
        method = 'GET',
        headers = {},
        ...rest
    } = options;
    const resultOptions = {
        credentials: 'include',
        method: method.toUpperCase()
    };
    const dataType = options.dataType || globalConfig.dataType;
    const formatBody = (options, params) => {
        if (params instanceof FormData) {
            return params;
        }

        if (dataType === 'json') {
            return JSON.stringify(params);
        }

        if (dataType === 'formdata') {
            return jsonToFormData(params, { mapping: value => value });
        }

        return stringify(params);
    };

    if (method.toUpperCase() !== 'GET') {
        const defaultHeaders = {
            json: {
                'Content-Type': 'application/json'
            },
            'x-www-form-urlencoded': {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }[dataType] || {};

        Object.assign(resultOptions, {
            headers: defaultHeaders,
            ...rest
        });

        resultOptions.body = formatBody(resultOptions, params);
    }

    Object.assign(resultOptions, {
        headers: {
            ...(resultOptions.headers || {}),
            ...((globalConfig.headers instanceof Function ? globalConfig.headers() : globalConfig.headers) || {}),
            ...((headers instanceof Function ? headers() : headers) || {})
        }
    });

    return resultOptions;
};

/**
 * 依据json配置生成services 方法集合对象
 *
 * @param {Object} config 接口方法配置对象
 * @param {Object} options 额外配置，如： { interceptors: [] }
 * @param {Object} globalConfig 全局配置对象，如错误处理(onError)、baseUrl、请求报文类型(dataType: formdata, json)
 * 
 * @return {Object} 接口方法对象如： { getUsers: params => { ... }, ...}
 */
export const createServices = (config, options = {}, globalConfig = defaultConfig) => {
    const services = {};
    const {
        baseUrl = '',
        redirectUrl,
        onError
    } = globalConfig;
    let {
        interceptors = []
    } = options;
    interceptors = interceptors instanceof Array ? interceptors : [interceptors];

    if (globalConfig.interceptors) {
        interceptors = [
            globalConfig.interceptors,
            ...interceptors
        ];
    }

    for (const key in config) {
        const { url } = config[key];

        services[key] = params => {
            let promise = fetch(
                buildURL(config[key], params, baseUrl),
                generateOptions(config[key], params, globalConfig)
            ).then(
                res => checkStatus(res, globalConfig)
            ).then(
                response => {
                    const contentType = response?.headers?.get('content-type');

                    if (contentType && contentType.indexOf('application/json') > -1) {
                        return response.json();
                    }

                    return response;
                }
            );

            if (interceptors && interceptors.length) {
                promise = addInterceptors(promise, interceptors, url);
            }

            promise = promise.then((res = {}) => {
                if (!res.success && +res.status === 302) {
                    location.href = typeof redirectUrl === 'function' ? redirectUrl(res) : redirectUrl;
                }
                if (res && res.success) {
                    return res.data;
                } else {
                    throw res;
                }
            }).finally(() => {
                const { errorHandle } = options;
                promise.catch(onError || errorHandle || (err => {
                    console.warn(`request ${url} exception`, err);
                    // message.error(err.message || '服务器未知错误');
                    return;
                }));
            });

            // 包装promise实例，重写then、catch方法，用来获取链式调用最后一个promise实例
            // 从而实现错误处理的链式冒泡处理机制
            const wrapPromise = () => {
                let originalThen = promise.then;
                let originalCatch = promise.catch;
                let originalFinally = promise.finally;

                promise.then = (...args) => {
                    promise = originalThen.apply(promise, args);
                    return wrapPromise();
                };

                promise.catch = (...args) => {
                    promise = originalCatch.apply(promise, args);
                    return wrapPromise();
                };

                promise.finally = (...args) => {
                    promise = originalFinally.apply(promise, args);
                    return wrapPromise();
                };

                return promise;
            };
            promise = wrapPromise();

            return promise;
        };
        services[key].URL = new URL(getFullUrl(url, baseUrl));
    }

    return services;
};

/**
 * 设置全局配置，并返回createServices方法
 *
 * @param {Object} globalConfig 全局配置会与defaultConfig进行merge
 * 
 * @return {Function} 返回createServices方法
 */
export default globalConfig => (
    (config = {}, options = {}) => (
        createServices(
            config,
            options,
            Object.assign({}, defaultConfig, globalConfig)
        )
    )
);
