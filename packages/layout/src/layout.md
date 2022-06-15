---
title: Layout
group:
  path: /
nav:
  title: 组件
  path: /components
---
### 安装和初始化
```
npm install @tddc/layout --save
```

### 中台纯骨架，不带业务场景
```jsx
import React from "react";
import { TNTLayout } from "@tddc/layout";
export default () => {
    return (
      <TNTLayout
          name="名称"
          enName="name"
          location={window.location}
          userInfo={{
            account: "zefei.zhou",
            userName:"周泽飞",
            avatar: "male1"
          }}
          menus={[{
            code: "TD01",
            enName: "Market",
            gmtCreate: 1654498248000,
            groupIcon: "plateau",
            groupName: "大盘",
            id: "02faffadf5ce42119cf934ff397fe1be",
            children:[{
              code: "TD0101",
              enName: "runningdasborb",
              gmtCreate: 1654498248000,
              groupIcon: "tongji",
              groupName: "系统驾驶仓",
              id: "2c537ab73d19411ca19c81ea677a748c",
              children:[{
                  code: "SystemOveview",
                  enName: "SystemOveview",
                  gmtCreate: 1654498343000,
                  hasPermission: false,
                  menuName: "知识概览",
                  menuUuid: "01ab4d155a8a4e6c9d644c16e8ef6fd5",
                  path: "/noah/dashboard/overView"
              }]
            }]
          }]}
      />
    )
}
```


### 天宫中台Layout，集成用户信息，菜单，机构渠道切换等业务场景
```jsx
import React from "react";
import { TGLayout } from "@tddc/layout";
export default () => {
  return (
    <TGLayout
      location={window.location}
      isDev={true}
    /> 
  )
} 
```
