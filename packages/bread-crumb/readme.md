### 安装和初始化

```
npm install @tddc/bread-crumb --save
```

### 面包屑

```jsx
import React, { memo } from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import BreadCrumb from '@tddc/bread-crumb';
import Detail from '../Test/Detail';
import List from '../Test/List';

const BreadCrumbDefault = BreadCrumb(
  (props) => {
    return (
      <Switch>
        <Route name="面包屑" path={`/components/bread-crumb`} exact component={Detail} />
        <Route
          name="组件总览"
          component={List}
          path="/components"
          query={[{ token: 'parentToken' }]}
        />
      </Switch>
    );
  },
  {
    // BreadCrumbCustom:(breadList)=>{
    //   console.log(breadList)
    //   return <div>{breadList?.map(v=>v?.name)}</div>
    // },
    // BreadCrumbPrototype:{
    //   separator:"->",
    //   className:"z-c-breadcrumb"
    // }
  },
);

export default memo(BreadCrumbDefault);
```

#### 🚀 高阶组件

```javascript
BreadCrumb(
  (props) => {
    return (
      <Switch>
        <Route name="面包屑" path={`/components/bread-crumb`} exact component={Detail} />
        <Route name="组件总览" component={List} path="/components" />
      </Switch>
    );
  },
  {
    breadCrumbCustomName: ({ breadList, path }) => {
      return 'aa';
    },
    // BreadCrumbCustom:(breadList)=>{
    //   console.log(breadList)
    //   return <div>{breadList?.map(v=>v?.name)}</div>
    // },
    // BreadCrumbPrototype:{
    //   separator:"->",
    //   className:"z-c-breadcrumb"
    // }
  },
);
```

| 参数                | 说明                                       | 类型            | 默认值 |
| ------------------- | ------------------------------------------ | --------------- | ------ |
| component           | 子路由定义，可嵌套                         |                 |        |
| BreadCrumbCustom    | 自定义面包屑                               | (breadList)=>{} | null   |
| BreadCrumbPrototype | 面包屑属性，同 antd 的 BreadCrumb 组件参数 | Object          | {}     |
| useCache            | 开启缓存模式，记录页面跳转地址             | false           | {}     |

| Route 参数     | 说明                   | 类型                        | 默认值 |
| -------------- | ---------------------- | --------------------------- | ------ |
| query          | 需要往下传递的参数     |                             |        |
| routerItemHide | 当前页不需要展示面包屑 | (location)=>{} 或者 Boolean | false  |
