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
import { useState } from 'react';
import React from 'react';
import { Button } from 'antd';
import { ReferenceDrawer } from '@tddc/reference';
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
            goName: 'name',
            rows: [
              {
                name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                code: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                version: 'v2',
                org: 'TongDun',
                app: 'TEST',
                goLink: 'name',
                referenceCheckType: 'STRONG',
              },
              {
                name: '策略A策略A策略A策略A策略A策略A策略A策略A策略A',
                code: 'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                version: 'v2',
                org: 'TongDun',
                app: '注意流模式策略判断体现在过程判断的适配的字段注意流模式策略判断体现在过程判断的适配的字段',
                goLink: 'name',
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
import React from 'react';
import { Button } from 'antd';
import { ReferenceCheck } from '@tddc/reference';
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
                      version:
                        'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
                      code: 'v2',
                      org: 'TongDun',
                      app: 'TEST',
                      goLink: 'noah/policyManage?currentTab=2&uuid=policy_phone',
                    },
                  ],
                  tips: '注意流模式策略判断体现在过程判断的适配的字段',
                  title: '被应用策略【运行区】',
                },
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
                      version:
                        'policy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phonepolicy_phone',
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
    }).catch((e) => {
      console.log(e);
    });
  };
  return <Button onClick={confirmClick}>单个强弱校验</Button>;
};
```

### 批量检查支持数组以及对象

```jsx
import React from 'react';
import { Button } from 'antd';
import { ReferenceBatchCheck } from '@tddc/reference';
export default () => {
  const confirmClick = () => {
    ReferenceBatchCheck({
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            code: '20000',
            success: true,
            message: '执行成功',
            data: {
              type: 'STRONG',
              typeName: '强引用',
              message:
                '存在强引用（被上线、启用、上下线审批中和指标初始化等相关状态组件引用）关系，禁止操作',
              result: [
                {
                  componentId: '9a735d5e1e974668bd5b4dbca83e7c34',
                  componentName: '测试11111',
                  componentCode: 'rm50r5kwnm',
                  componentVersion: '2',
                  type: 'STRONG',
                  typeName: '强引用',
                  result: [
                    {
                      type: 'INDEX_OFFLINE_VERSION_ONLINE',
                      title: '被引用离线指标[运行区]',
                      tips: null,
                      goName: 'code',
                      columns: [
                        { title: '指标名称', dataIndex: 'name', expression: null },
                        { title: '指标标识', dataIndex: 'code', expression: null },
                        { title: '指标版本', dataIndex: 'version', expression: null },
                        { title: '所属指标集标识', dataIndex: 'featureSetCode', expression: null },
                        { title: '所属指标集名称', dataIndex: 'featureSetName', expression: null },
                      ],
                      rows: [
                        {
                          name: '公式指标_gkukx',
                          code: 'pyveo4p110',
                          version: 'V2[已上线]',
                          featureSetCode: 'q93fsb1ohl',
                          featureSetName: '阿尔法指标集_peaow',
                          SORT_GMTCREATE: null,
                          referenceCheckType: 'INNER_STRONG',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=1&type=view&from=run&metricCodes=pyveo4p110&featureSetVersionUuid=c00e0702e80b4bf98bedaf79dc92ff5e&featureSetUuid=898032e11e4645288dad1a901eab439c',
                          referenceCheckTypeName: '内部强引用',
                        },
                        {
                          name: '公式指标_oiwxk',
                          code: 'po8fmg7ert',
                          version: 'V1[已上线]',
                          featureSetCode: 'wf4r12l7nb',
                          featureSetName: '阿尔法指标集_euzut',
                          SORT_GMTCREATE: null,
                          referenceCheckType: 'STRONG',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=1&type=view&from=run&metricCodes=po8fmg7ert&featureSetVersionUuid=048ec1a1151347608ec02c97406f1bf0&featureSetUuid=a87f5e5c05914df5b53e2782d0dba1a8',
                          referenceCheckTypeName: '强引用',
                        },
                      ],
                    },
                    {
                      type: 'INDEX_OFFLINE_VERSION_EDIT',
                      title: '被引用离线指标[编辑区]',
                      tips: null,
                      goName: 'code',
                      columns: [
                        { title: '指标名称', dataIndex: 'name', expression: null },
                        { title: '指标标识', dataIndex: 'code', expression: null },
                        { title: '指标版本', dataIndex: 'version', expression: null },
                        { title: '所属指标集标识', dataIndex: 'featureSetCode', expression: null },
                        { title: '所属指标集名称', dataIndex: 'featureSetName', expression: null },
                      ],
                      rows: [
                        {
                          name: '公式指标_oiwxk',
                          code: 'po8fmg7ert',
                          version: 'V1[已上线]',
                          featureSetCode: 'wf4r12l7nb',
                          featureSetName: '阿尔法指标集_euzut',
                          SORT_CODE: 'po8fmg7ert',
                          SORT_VERSION: 'V1',
                          referenceCheckType: 'STRONG',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=2&type=view&from=edit&metricCodes=po8fmg7ert&featureSetVersionUuid=048ec1a1151347608ec02c97406f1bf0&featureSetUuid=a87f5e5c05914df5b53e2782d0dba1a8',
                          referenceCheckTypeName: '强引用',
                        },
                        {
                          name: '公式指标_oiwxk',
                          code: 'po8fmg7ert',
                          version: 'V3[初始化完成]',
                          featureSetCode: 'wf4r12l7nb',
                          featureSetName: '阿尔法指标集_euzut',
                          SORT_CODE: 'po8fmg7ert',
                          SORT_VERSION: 'V3',
                          referenceCheckType: 'STRONG',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=2&type=view&from=edit&metricCodes=po8fmg7ert&featureSetVersionUuid=57997d16a9504013880508e2b2a611ac&featureSetUuid=a87f5e5c05914df5b53e2782d0dba1a8',
                          referenceCheckTypeName: '强引用',
                        },
                        {
                          name: '公式指标_gkukx',
                          code: 'pyveo4p110',
                          version: 'V1[已下线]',
                          featureSetCode: 'q93fsb1ohl',
                          featureSetName: '阿尔法指标集_peaow',
                          SORT_CODE: 'pyveo4p110',
                          SORT_VERSION: 'V1',
                          referenceCheckType: 'WEAK',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=2&type=view&from=edit&metricCodes=pyveo4p110&featureSetVersionUuid=4893180eb89349d9925b91ee5635a4c7&featureSetUuid=898032e11e4645288dad1a901eab439c',
                          referenceCheckTypeName: '弱引用',
                        },
                        {
                          name: '公式指标_gkukx',
                          code: 'pyveo4p110',
                          version: 'V2[已上线]',
                          featureSetCode: 'q93fsb1ohl',
                          featureSetName: '阿尔法指标集_peaow',
                          SORT_CODE: 'pyveo4p110',
                          SORT_VERSION: 'V2',
                          referenceCheckType: 'INNER_STRONG',
                          goLink:
                            '/index/offIndexManage/detail?currentTab=2&type=view&from=edit&metricCodes=pyveo4p110&featureSetVersionUuid=c00e0702e80b4bf98bedaf79dc92ff5e&featureSetUuid=898032e11e4645288dad1a901eab439c',
                          referenceCheckTypeName: '内部强引用',
                        },
                      ],
                    },
                  ],
                },
              ],
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

| 参数    | 说明         | 类型     | 默认值       |
| ------- | ------------ | -------- | ------------ |
| title   | 抽屉的标题   | String   | 查看关联引用 |
| visible | 抽屉是否可见 | Boo      | false        |
| onClose | 关闭函数     | Function |              |
| data    | 数据         | Array    | []           |

#### 🚀 `ReferenceCheck` 为 Promise 函数，若检测通过将下一步之行操作写入回调中，否则将默认弹窗

```javascript
ReferenceCheck({
  rq: () => {
    api.referenceCheck({
      id: '1',
    });
  },
  allList,
  orgMap,
}).then(() => {
  //success操作
});
```

| 参数    | 说明           | 类型     | 默认值 |
| ------- | -------------- | -------- | ------ |
| rq      | 查询的接口函数 | Function |        |
| appList | 渠道列表       | Array    | []     |
| orgMap  | 机构树         | Object   | {}     |

#### 🚀 `ReferenceBatchCheck` 为 Promise 函数，若检测通过将下一步之行操作写入回调中，否则将默认弹窗

```javascript
ReferenceBatchCheck({
  rq: () => {
    api.onlineValidate({
      id: '1',
    });
  },
  allList,
  orgMap,
}).then(() => {
  //success操作
});
```

| 参数    | 说明           | 类型     | 默认值 |
| ------- | -------------- | -------- | ------ |
| rq      | 查询的接口函数 | Function |        |
| appList | 渠道列表       | Array    | []     |
| orgMap  | 机构树         | Object   | {}     |
