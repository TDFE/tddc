---
title: 引用关系
group:
  path: /
nav:
  title: 组件
  path: /components
---
### 安装和初始化
```
npm install @tddc/reference --save
```


### 抽屉方式进行引用关系查看
```jsx
import { useState } from "react";
import React from "react";
import { Button } from "antd";
import { ReferenceDrawer } from "@tddc/reference";
export default () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Button onClick={() => setVisible(true)}>查看引用</Button>
      <ReferenceDrawer
        title="查看关联引用"
        visible={visible}
        onClose={() => setVisible(false)}
        data={[
          {
            columns: [
              {
                title: '策略名称',
                dataIndex: 'name',
              },
              {
                title: '策略标识',
                dataIndex: 'code',
              },
              {
                title: '策略名称',
                dataIndex: 'version',
              },
              {
                title: '所属机构',
                dataIndex: 'org',
              },
              {
                title: '所属应用',
                dataIndex: 'app',
              },
            ],
            goName: 'code',
            rows: [
              {
                name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                code: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                version: 'v2',
                org: 'TongDun',
                app: 'TEST',
                goLink: '',
                referenceCheckType: 'STRONG',
              },
              {
                name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                code: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                version: 'v2',
                org: 'TongDun',
                app: '注意流模式策略判断体现在过程判断的适配的字段注意流模式策略判断体现在过程判断的适配的字段',
                goLink: '',
                referenceCheckType: 'WEAK',
              },
            ],
            tips: '注意流模式策略判断体现在过程判断的适配的字段',
            title: '被应用策略【运行区】',
          },
        ]}
      />
    </>
  );
};
```

### 单个检查是否有强弱引用
```jsx 
import React from "react";
import { Button } from "antd";
import { ReferenceCheck } from "@tddc/reference";
export default () => {
  const confirmClick = () => {
      ReferenceCheck({
        rq: () => {
          return new Promise((resolve) => {
            resolve({
              success: true,
              data: {
                type: 'WEAK',
                result: [
                  {
                    columns: [
                      {
                        title: '策略名称',
                        dataIndex: 'name',
                      },
                      {
                        title: '策略标识',
                        dataIndex: 'code',
                      },
                      {
                        title: '策略名称',
                        dataIndex: 'org',
                      },
                      {
                        title: '所属机构',
                        dataIndex: 'app',
                      },
                      {
                        title: '所属应用',
                        dataIndex: 'version',
                      },
                    ],
                    goName: 'code',
                    rows: [
                      {
                        name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                        version: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                        code: 'v2',
                        org: 'TongDun',
                        app: 'TEST',
                        goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
                      },
                    ],
                    tips: '注意流模式策略判断体现在过程判断的适配的字段',
                    title: '被应用策略【运行区】',
                  },{
                    columns: [
                      {
                        title: '策略名称',
                        dataIndex: 'name',
                      },
                      {
                        title: '策略标识',
                        dataIndex: 'code',
                      },
                      {
                        title: '策略名称',
                        dataIndex: 'org',
                      },
                      {
                        title: '所属机构',
                        dataIndex: 'app',
                      },
                      {
                        title: '所属应用',
                        dataIndex: 'version',
                      },
                    ],
                    goName: 'code',
                    rows: [
                      {
                        name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                        version: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                        code: 'v2',
                        org: 'TongDun',
                        app: 'TEST',
                        goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
                      },
                    ],
                    tips: '注意流模式策略判断体现在过程判断的适配的字段',
                    title: '被应用策略【运行区】',
                  },
                ],
              },
            });
          });
        },
        appList: [],
      }).catch(e=>{
        console.log(e)
      });
  };
  return <Button onClick={confirmClick}>单个强弱校验</Button>;
}
```

### 批量检查支持数组以及对象
```jsx
import React from "react";
import { Button } from "antd";
import { ReferenceBatchCheck } from "@tddc/reference";
export default () => {
   const confirmClick = () => {
    ReferenceBatchCheck({
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            success: true,
            data: {
              type:"STRONG",
              result:[
              {
                componentId: 'fafdasfa',
                componentCode: '123',
                componentVersion: 1,
                componentName: '规则集1',
                result: [
                  {
                    title: '规则',
                    goName: 'code',
                    columns: [
                      {
                        title: '规则UUID',
                        dataIndex: 'id',
                      },
                      {
                        title: '规则名称',
                        dataIndex: 'name',
                      },
                      {
                        title: '校验结果',
                        dataIndex: 'status',
                      },
                    ],
                    rows: [
                      {
                        id: 'f51896fa8f8c4960bfb547bbc41bf208',
                        status: '1111',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f51896fa8f8c4960bfb547bbc41bf208',
                      },
                      {
                        id: 'f6439ab025d04f009d585232f8fff095',
                        status: '1111',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f6439ab025d04f009d585232f8fff095',
                      },
                      {
                        id: 'f97a5727dc454b79b17d94f9852a445b',
                        status: '1111',
                        name: '名单规则',
                        goLink: '/noah/ruleSet/allRules?currentTab=1&uuid=f97a5727dc454b79b17d94f9852a445b',
                      },
                    ],
                  },
                ],
              }
            ]
            },
          });
        });
      },
      appList: [],
      onChange: (d) => {
        console.log('d', d);
      },
    });
  };
  return <Button onClick={confirmClick}>批量校验</Button>;
};
```

### API

#### 👼 `ReferenceDrawer`
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 抽屉的标题 | String | 查看关联引用 |
| visible | 抽屉是否可见 | Boo | false |
| onClose | 关闭函数 | Function | |
| data | 数据 | Array | []|


#### 🚀 `ReferenceCheck` 为Promise函数，若检测通过将下一步之行操作写入回调中，否则将默认弹窗
```javascript
ReferenceCheck({
  rq:()=>{
    api.referenceCheck({
      id:"1"
    })
  },
  allList,
  orgMap
}).then(()=>{
  //success操作
})
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rq | 查询的接口函数 | Function |  |
| appList | 渠道列表 | Array | [] |
| orgMap | 机构树 | Object | {}|


#### 🚀 `ReferenceBatchCheck` 为Promise函数，若检测通过将下一步之行操作写入回调中，否则将默认弹窗
```javascript
ReferenceBatchCheck({
  rq:()=>{
    api.onlineValidate({
      id:"1"
    })
  },
  allList,
  orgMap
}).then(()=>{
  //success操作
})
```
| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rq | 查询的接口函数 | Function |  |
| appList | 渠道列表 | Array | [] |
| orgMap | 机构树 | Object | {}|
