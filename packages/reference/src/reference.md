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
import { Button } from 'tntd';
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
        fetchReference={() => {
          return new Promise((resolve) => {
            resolve({
              code: 200,
              message: '成功',
              success: true,
              data: [
                {
                  type: 'FUNCTION_VERSION_ONLINE',
                  title: '被引用函数[运行区]',
                  goName: 'code',
                  columns: [
                    {
                      title: '函数名称',
                      dataIndex: 'name',
                    },
                    {
                      title: '函数标识',
                      dataIndex: 'code',
                    },
                    {
                      title: '函数版本',
                      dataIndex: 'functionVersion',
                    },
                    {
                      title: '函数类型',
                      dataIndex: 'typeName',
                    },
                  ],
                  rows: [
                    {
                      name: '额度计算_利润率',
                      code: 'F4796386976',
                      functionVersion: 'V1[已上线]',
                      typeName: '计算公式',
                      SORT_GMTCREATE: 1692611690000,
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/formula?currentTab=1&code=F4796386976',
                    },
                    {
                      name: '额度计算_利润',
                      code: 'F4040900718',
                      functionVersion: 'V1[已上线]',
                      typeName: '计算公式',
                      SORT_GMTCREATE: 1692610580000,
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/formula?currentTab=1&code=F4040900718',
                    },
                  ],
                },
                {
                  type: 'POLICY_VERSION_RUN',
                  title: '被引用策略版本[运行区]',
                  tips: '注意流模式策略判断体现在过程判断的适配的字段',
                  goName: 'code',
                  columns: [
                    {
                      title: '策略名称',
                      dataIndex: 'policyName',
                    },
                    {
                      title: '策略标识',
                      dataIndex: 'code',
                    },
                    {
                      title: '策略版本',
                      dataIndex: 'version',
                    },
                    {
                      title: '所属机构',
                      dataIndex: 'org',
                    },
                    {
                      title: '所属渠道',
                      dataIndex: 'app',
                    },
                  ],
                  rows: [
                    {
                      policyName: '额度计算',
                      code: 'edjs',
                      version: 'V1[已上线]',
                      org: 'TongDun',
                      app: 'test',
                      SORT_GMTCREATE: 1692690056000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=edjs',
                    },
                  ],
                },
                {
                  type: 'API_SERVICE',
                  title: '被引用对接服务',
                  goName: 'id',
                  columns: [
                    {
                      title: '服务名称',
                      dataIndex: 'name',
                    },
                    {
                      title: '服务标识',
                      dataIndex: 'id',
                    },
                    {
                      title: '服务状态',
                      dataIndex: 'statusName',
                    },
                    {
                      title: '服务类型',
                      dataIndex: 'typeName',
                    },
                  ],
                  rows: [
                    {
                      name: '额度计算服务接口',
                      id: 'edjs_test',
                      statusName: '启用',
                      typeName: '信贷决策',
                      SORT_GMTCREATE: 1692691201000,
                      referenceCheckType: 'STRONG',
                      goLink: '/unite/serviceManage/setService?code=edjs_test',
                    },
                  ],
                },
              ],
            });
          });
        }}
      />
    </>
  );
};
```

### 单个检查是否有强弱引用

```jsx
import React from 'react';
import { Button } from 'tntd';
import { ReferenceCheck } from '@tddc/reference';
export default () => {
  const confirmClick = () => {
    ReferenceCheck({
      okText: '确定删除',
      cancelText: '关闭',
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            success: true,
            data: {
              type: 'STRONG',
              result: [
                {
                  type: 'POLICY_VERSION_EDIT',
                  title: 'Referenced policy version [edit area]',
                  tips: 'Note that the flow mode strategy judgment is reflected in the process judgment Adapted fields',
                  goName: 'code',
                  columns: [
                    {
                      title: 'Policy Name',
                      dataIndex: 'policyEditName',
                    },
                    {
                      title: 'Policy Identification',
                      dataIndex: 'code',
                    },
                    {
                      title: 'Policy Version',
                      dataIndex: 'version',
                    },
                    {
                      title: 'Affiliation',
                      dataIndex: 'org',
                    },
                    {
                      title: 'Affiliated channel',
                      dataIndex: 'app',
                    },
                  ],
                  rows: [
                    {
                      policyEditName: 'lduffy_flow_policy',
                      code: 'lduffy_flow_policy',
                      version: 'V1[Offline]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1695877249000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'WEAK',
                      goLink: '/noah/policyManage?currentTab=2&code=lduffy_flow_policy',
                    },
                    {
                      policyEditName: 'lduffy',
                      code: 'lduffy',
                      version: 'V1[Already saved]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1695794607000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'WEAK',
                      goLink: '/noah/policyManage?currentTab=2&code=lduffy',
                    },
                  ],
                },
                {
                  type: 'POLICY_VERSION_RUN',
                  title: 'Referenced policy version [Run area]',
                  tips: 'Note that flow mode policy judgment is reflected in the adaptation field of process judgment',
                  goName: 'code',
                  columns: [
                    {
                      title: 'Policy name',
                      dataIndex: 'policyName',
                    },
                    {
                      title: 'policy identification',
                      dataIndex: 'code',
                    },
                    {
                      title: 'Strategy version',
                      dataIndex: 'version',
                    },
                    {
                      title: 'Affiliated institution',
                      dataIndex: 'org',
                    },
                    {
                      title: 'Affiliated channel',
                      dataIndex: 'app',
                    },
                  ],
                  rows: [
                    {
                      policyName: 'xyzTradeTest2',
                      code: 'xyzTradeTest2',
                      version: 'V3[Online]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1697091261000,
                      SORT_VERSION: 'V3',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=xyzTradeTest2',
                    },
                    {
                      policyName: 'xyzTradeTest2',
                      code: 'xyzTradeTest2',
                      version: 'V1[Online]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1696829871000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=xyzTradeTest2',
                    },
                    {
                      policyName: 'xyz子策略',
                      code: 'xyzChTest',
                      version: 'V1[Online]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1696816315000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=xyzChTest',
                    },
                    {
                      policyName: 'xyz信贷测试',
                      code: 'xyzAtreusTest',
                      version: 'V1[Online]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1695462832000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=xyzAtreusTest',
                    },
                    {
                      policyName: 'xyz交易测试',
                      code: 'xyzTradeTest',
                      version: 'V1[Online]',
                      org: 'TongDun',
                      app: 'test_app',
                      SORT_GMTCREATE: 1695203024000,
                      SORT_VERSION: 'V1',
                      referenceCheckType: 'STRONG',
                      goLink: '/noah/policyManage?currentTab=1&code=xyzTradeTest',
                    },
                  ],
                },
                {
                  type: 'RULE_IMMUNE',
                  title: 'Referenced rule immunity',
                  goName: 'name',
                  columns: [
                    {
                      title: 'Identification',
                      dataIndex: 'id',
                    },
                    {
                      title: 'Rule immunity name',
                      dataIndex: 'name',
                    },
                    {
                      title: 'Rule Set Name',
                      dataIndex: 'ruleSetName',
                    },
                    {
                      title: 'Rule Name',
                      dataIndex: 'ruleName',
                    },
                    {
                      title: 'Create Type',
                      dataIndex: 'createTypeName',
                    },
                  ],
                  rows: [
                    {
                      id: '384635ca',
                      name: '实时指标_384635ca',
                      ruleSetName: 'xyz交易测试',
                      ruleName: '实时指标',
                      createTypeName: 'Event History',
                      SORT_GMTCREATE: 1697093842000,
                      referenceCheckType: 'WEAK',
                      goLink: '/noah/immune/config?currentTab=1&ruleName=实时指标',
                    },
                    {
                      id: 'a089ea96',
                      name: '实时指标_a089ea96',
                      ruleSetName: 'xyz交易测试',
                      ruleName: '实时指标',
                      createTypeName: 'Event History',
                      SORT_GMTCREATE: 1697078360000,
                      referenceCheckType: 'WEAK',
                      goLink: '/noah/immune/config?currentTab=1&ruleName=实时指标',
                    },
                  ],
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
import { Button } from 'tntd';
import { ReferenceBatchCheck } from '@tddc/reference';
export default () => {
  const confirmClick = () => {
    ReferenceBatchCheck({
      okText: '确定删除',
      cancelText: '关闭',
      rq: () => {
        return new Promise((resolve) => {
          resolve({
            code: '20000',
            success: true,
            message: '执行成功',
            data: {
              type: 'WEAK',
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
                        {
                          title: '指标名称指标名称指标名称指标名称指标名称指标名称指标名称指标名称',
                          dataIndex: 'name',
                          expression: null,
                        },
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
