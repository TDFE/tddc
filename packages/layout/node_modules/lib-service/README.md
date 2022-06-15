#### lib-service简介
主要用于生成服务（请求方法）集合，支持特性如下:
- 基于json配置生成服务,支持restfull风格动态参数处理
- 全局兜底错误（异常）处理 + 自定义错误（异常）处理
- 全局、局部拦截器配置

#### 安装
```
npm install lib-service --save
```

#### 如何使用
```js
import service from 'lib-service';

// 带全局配置的创建服务方法
const createService = service({
    baseUrl: '/api',
    redirectUrl: '/login/logout',
    dataType: 'json', // json、formdata、x-www-form-urlencoded, 默认是formdata
    // request headers
    headers: {
        csrfToken: 'csrf_token'
    },
    // 全局拦截器
    interceptors: res => ({
        success: res.code === 200,
        data: res.result
    }),
    401: res => {
        console.log('自定义401状态码处理', res);
    },
    403: res => console.log('自定义403状态码处理', res);
    // 全局通用错误处理
    onError: err => {
        // message.error(err.message || '服务器未知错误');
        console.error(err.message || err.msg || '服务器未知错误')
    }
});

const userService = createService({
    query: {
        url: '/users'
    },
    detail: {
        url: '/users/:id'
    }
    add: {
        url: '/users',
        method: 'post'
    },
    update: {
        url: '/users/:id',
        method: 'put'
    },
    remove: {
        url: '/users/:id',
        method: 'delete'
    }
});

userService.query({
    current: 1,
    pageSize: 20
}).then(data => console.log(data));

userService.detail({ id: 1 }).then(user => console.log(user));

userService.add({
    name: 'zhangsan',
    age: 22,
    job: 'developer'
}).then(
    data => console.log(data)
);

userService.update({
    id: 1,
    name: 'zhangsan',
    age: 25,
    job: 'FE'
}).then(
    data => console.log(data)
);

userService.remove({ id: 1 });

```

#### Response数据结构
目前service里面默认处理是依据报文success 字段来判断请求结果是否正常，如果是true则认为请求正常，且返回的是response的data字段，否则任务请求异常会走到catch，返回的是原始的response报文。如果服务端Response数据结构如service内部定义的骨架结构，可以通过全局interceptors来做一个Response数据结构转换成符合规则的结构。
```
{
    "success": true, // true 请求成功， false 请求异常
    "data": {} // 请求返回的主体数据
}
```

#### 拦截器interceptors配置
interceptors主要是用来对Response数据做数据处理和转换的，什么时候需要用到interceptors配置？
- 在服务端Response的数据骨架结构，不符合service内定义的通用数据骨架结构时，可以使用全局拦截器对所有Response数据进行转换。
- 对部分特定的接口需要做一些Response数据转换或处理时，可以使用局部拦截器配置，局部拦截器配置，可支持精确和正则匹配请求pathname,来决定对应请求是否使用interceptor

```js
import service from 'lib-service';

const createService = service({
    // 全局拦截器，凡是用 createService方法创建的服务都会支持这个拦截器
    interceptors: res => ({
        success: res.code === 200,
        data: res.result
    }),
    onError: err => console.err('兜底错误处理...', err)
});

const userService = createService({
    query: {
        url: '/users'
    },
    login: {
        url: '/login'
    }
}, {
    interceptors: [
        // 匹配所有请求
        '*': res => ({
            ..res,
            data: res.result
        }),
        // 匹配 /users请求
        '/users': res => ({
            ...res,
            current: res.curPage
        })
    ]
});

userService.query({
    current: 1,
    pageSize: 20
}).then(
    data => console.log(data)
).catch(err => {
    // 自定义处理
    alert(err);
    // 如果throw 出去则会继续走兜底错误处理，否则不会执行兜底错误处理
    throw err;
});
userService.login().then(data => console.log(data));
```

#### 在使用兜底错误处理时，需要额外注意的问题
- 场景一：Modal弹层创建操作，确定按钮在点击发起请求前需要设置loading, 请求成功或失败后都需要重置loading状态
```js
const [confirmLoading, setConfirmLoading] = useState(false);
const onSubmit = values => {
    setConfirmLoaindg(true);

    service.create({
        name: 'zhangsan'
    }).then(
        () => setConfirmLoading(false);
    ).catch(err => {
        // 请求失败了，需要重置loading
        setConfirmLoading(false);
        // 记住这里catch的err 需要 throw出去，不然兜底错误不会执行
        throw err;
    });
};
```
