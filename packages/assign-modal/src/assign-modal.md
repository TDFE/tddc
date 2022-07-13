---
title: 机构应用授权
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/assign-modal --save
```

### 授权组件在中台中的使用

```jsx
import React, { useState } from 'react';
import { Button, message } from 'antd';
import AssignModal from '@tddc/assign-modal';

const Assign = () => {
  let org = [
    {
      uuid: 'a8202aea546f48979754bdd45c471b08',
      gmtCreate: 1534236485000,
      gmtModified: 1652357658000,
      code: 'TongDun',
      level: 1,
      name: '同盾科技',
      enName: 'Tongdun',
      children: [
        {
          uuid: 'eb4ead032843421cae09764086a22385',
          gmtCreate: 1640674771000,
          gmtModified: 1653892116000,
          code: 'second',
          level: 2,
          parentUuid: 'a8202aea546f48979754bdd45c471b08',
          name: '二级机构',
          children: [
            {
              uuid: '950dd630dd894a388bd9643a8cb81d91',
              gmtCreate: 1653892154000,
              gmtModified: 1653892154000,
              code: 'third',
              level: 3,
              parentUuid: 'eb4ead032843421cae09764086a22385',
              name: '三级机构',
              children: [],
              title: '三级机构',
              value: 'third',
              key: 'third',
            },
          ],
          title: '二级机构',
          value: 'second',
          key: 'second',
        },
        {
          uuid: '6ab67ec5e4694cb3b0eaf45b940dd249',
          gmtCreate: 1653892195000,
          gmtModified: 1653892195000,
          code: 'secondB',
          level: 2,
          parentUuid: 'a8202aea546f48979754bdd45c471b08',
          name: '二级机构B',
          children: [
            {
              uuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',
              gmtCreate: 1653892213000,
              gmtModified: 1653892213000,
              code: 'thirdB',
              level: 3,
              parentUuid: '6ab67ec5e4694cb3b0eaf45b940dd249',
              name: '三级机构B',
              children: [
                {
                  uuid: '39a54700c0e44addae4955090c820136',
                  gmtCreate: 1655795757000,
                  gmtModified: 1655795757000,
                  code: '4jijigou',
                  level: 4,
                  parentUuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',
                  name: '四级机构C',
                  children: [
                    {
                      uuid: '96889aebc042482a928601338534fa48',
                      gmtCreate: 1655795781000,
                      gmtModified: 1655795781000,
                      code: 'wujijigou',
                      level: 5,
                      parentUuid: '39a54700c0e44addae4955090c820136',
                      name: '五级机构D',
                      children: [],
                      title: '五级机构D',
                      value: 'wujijigou',
                      key: 'wujijigou',
                    },
                  ],
                  title: '四级机构C',
                  value: '4jijigou',
                  key: '4jijigou',
                },
              ],
              title: '三级机构B',
              value: 'thirdB',
              key: 'thirdB',
            },
          ],
          title: '二级机构B',
          value: 'secondB',
          key: 'secondB',
        },
      ],
      title: '同盾科技',
      value: 'TongDun',
      key: 'TongDun',
    },
  ];

  let app = [
    {
      uuid: '1601fa112a7042a0a665ced5bb38145f',
      gmtCreate: 1629357194000,
      gmtModified: 1640593395000,
      name: 'TG01',
      displayName: '天策_交易',
      partnerCode: 'kratos',
      have: true,
      description: 'TG01',
      signForSwitch: false,
      signForWrite: false,
      label: '天策_交易',
      value: 'TG01',
    },
    {
      uuid: 'ee3fb41440f04c558c49dbd3ba832883',
      gmtCreate: 1629357212000,
      gmtModified: 1640593385000,
      name: 'TG02',
      displayName: '天策_信贷',
      partnerCode: 'kratos',
      have: true,
      description: 'TG02',
      signForSwitch: false,
      signForWrite: false,
      label: '天策_信贷',
      value: 'TG02',
    },
    {
      uuid: '4740e7e4c5454819a93ba61265de0f95',
      gmtCreate: 1640676527000,
      gmtModified: 1640676527000,
      name: 'sbh',
      displayName: '随便花',
      partnerCode: 'kratos',
      have: true,
      description: '随便花机器人支持随便花',
      signForSwitch: false,
      signForWrite: false,
      label: '随便花',
      value: 'sbh',
    },
  ];

  let dataItem = {
    appCode: 'TG01',
    appCodes: ['TG01'],
    orgCode: 'TongDun',
    orgCodes: ['TongDun'],
  };
  let title = 'XX授权';

  const [assignVisible, setAssignVisible] = useState(false);

  const onSubmit = (data) => {
    setTimeout(() => {
      console.log(data);
      message.success('授权成功');
      setAssignVisible(false);
    }, 500);
  };
  return (
    <>
      <Button onClick={() => setAssignVisible(true)}>授权</Button>
      <AssignModal
        visible={assignVisible}
        orgList={org} // 机构列表
        title={title} // 弹框标题
        dataItem={dataItem} // 授权列表，从列表接口拿的
        close={() => {
          setAssignVisible(false);
        }} // 关闭回调
        appList={app} // 应用列表
        onSubmit={onSubmit} // 提交回调
      />
    </>
  );
};
export default Assign;
```

##### 机构树联动逻辑

- 机构授权时，点击授权某下级机构，该机构的上级机构默认一起授权上
- 取消授权时，点击取消某上级机构授权，该机构的下级机构默认一起取消授权
- 创建时，该指标/规则集的所属机构及其上级机构默认授权勾选且置灰不得修改
- 机构授权勾选全局时，系统内所有机构都被授权可使用该组件，且当前用户所在机构树下所有机构都勾上授权关系, 此时 `checkedKeys = ['all'] // 机构字段`

##### 渠道联动逻辑

- 渠道授权勾选全局时，系统内所有渠道都被授权可使用该组件，且当前用户所在机构树下所有机构都勾上授权关系， 此时 `appKeys = ['all'] // 渠道字段`

#### 🚀 `入参`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 弹窗是否可见 | Boo | false |
| disabled | 是否禁用编辑 | Boo | false |
| [orgList](#-orglist-决策中台数据结构) | 机构列表 | Object | [] |
| [appList](#-applist-决策中台数据结构) | 应用列表 | Object | [] |
| title | 标题 | String |  |
| [dataItem](#-dataitem-决策中台数据结构) | 授权列表项({ appCode, appCodes, orgCode, orgCodes}) | Object |  |
| onSubmit | 确定操作回调 | function(data) |  |
| close | 关闭操作回调 | function |  |

#### 🚀 `orgList 决策中台数据结构`

```javascript
[
  {
    uuid: 'a8202aea546f48979754bdd45c471b08',
    gmtCreate: 1534236485000,
    gmtModified: 1652357658000,
    code: 'TongDun',
    level: 1,
    name: '同盾科技',
    enName: 'Tongdun',
    children: [
      {
        uuid: 'eb4ead032843421cae09764086a22385',
        gmtCreate: 1640674771000,
        gmtModified: 1653892116000,
        code: 'second',
        level: 2,
        parentUuid: 'a8202aea546f48979754bdd45c471b08',
        name: '二级机构',
        children: [
          {
            uuid: '950dd630dd894a388bd9643a8cb81d91',
            gmtCreate: 1653892154000,
            gmtModified: 1653892154000,
            code: 'third',
            level: 3,
            parentUuid: 'eb4ead032843421cae09764086a22385',
            name: '三级机构',
            children: [],
            title: '三级机构',
            value: 'third',
            key: 'third',
          },
        ],
        title: '二级机构',
        value: 'second',
        key: 'second',
      },
      {
        uuid: '6ab67ec5e4694cb3b0eaf45b940dd249',
        gmtCreate: 1653892195000,
        gmtModified: 1653892195000,
        code: 'secondB',
        level: 2,
        parentUuid: 'a8202aea546f48979754bdd45c471b08',
        name: '二级机构B',
        children: [
          {
            uuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',
            gmtCreate: 1653892213000,
            gmtModified: 1653892213000,
            code: 'thirdB',
            level: 3,
            parentUuid: '6ab67ec5e4694cb3b0eaf45b940dd249',
            name: '三级机构B',
            children: [
              {
                uuid: '39a54700c0e44addae4955090c820136',
                gmtCreate: 1655795757000,
                gmtModified: 1655795757000,
                code: '4jijigou',
                level: 4,
                parentUuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',
                name: '四级机构C',
                children: [],
                title: '四级机构C',
                value: '4jijigou',
                key: '4jijigou',
              },
            ],
            title: '三级机构B',
            value: 'thirdB',
            key: 'thirdB',
          },
        ],
        title: '二级机构B',
        value: 'secondB',
        key: 'secondB',
      },
    ],
    title: '同盾科技',
    value: 'TongDun',
    key: 'TongDun',
  },
];
```

#### 🚀 `appList 决策中台数据结构`

```javascript
[
  {
    uuid: '1601fa112a7042a0a665ced5bb38145f',
    gmtCreate: 1629357194000,
    gmtModified: 1640593395000,
    name: 'TG01',
    displayName: '天策_交易',
    partnerCode: 'kratos',
    have: true,
    description: 'TG01',
    signForSwitch: false,
    signForWrite: false,
    label: '天策_交易',
    value: 'TG01',
  },
  {
    uuid: 'ee3fb41440f04c558c49dbd3ba832883',
    gmtCreate: 1629357212000,
    gmtModified: 1640593385000,
    name: 'TG02',
    displayName: '天策_信贷',
    partnerCode: 'kratos',
    have: true,
    description: 'TG02',
    signForSwitch: false,
    signForWrite: false,
    label: '天策_信贷',
    value: 'TG02',
  },
  {
    uuid: '4740e7e4c5454819a93ba61265de0f95',
    gmtCreate: 1640676527000,
    gmtModified: 1640676527000,
    name: 'sbh',
    displayName: '随便花',
    partnerCode: 'kratos',
    have: true,
    description: '随便花机器人支持随便花',
    signForSwitch: false,
    signForWrite: false,
    label: '随便花',
    value: 'sbh',
  },
];
```

#### 🚀 `dataItem 决策中台数据结构`

```javascript
    {
        appCode: 'app1', // 所属应用
        orgCode: 'TongDun', // 所属机构
        appCodes: ['app1', 'app2'], // 具有权限的应用
        orgCodes: ['TongDun', 'JiGou1'], // 具有权限的机构
    }
```
