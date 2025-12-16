---
title: 机构应用授权
group:
  path: /
nav:
  title: 组件
  path: /components
---

# AssignModal 授权弹窗组件

用于管理机构、应用（渠道）、用户授权的复杂业务组件，支持树形机构选择、多选应用和用户，以及全局授权等功能。

## 特性

- 🌲 **树形机构选择**：支持多级机构树形结构，带有智能联动逻辑
- 🔄 **智能联动**：选中子机构自动勾选上级，取消上级自动取消下级
- 🌐 **全局授权**：支持一键授权所有机构/应用/用户
- 👁 **双模式**：编辑模式和查看模式自动切换
- 🔍 **搜索过滤**：支持对机构、应用、用户进行实时搜索
- 🌍 **国际化**：内置中英文支持，可自定义语言包
- 🎨 **自定义禁用**：支持自定义机构和应用的禁用规则

## 安装

```bash
npm install @tddc/assign-modal --save
# 或
yarn add @tddc/assign-modal
```

## 基础用法

```jsx
import React, { useState } from 'react';
import { Button, message } from 'tntd';
import AssignModal from '@tddc/assign-modal';

const Example = () => {
  const [visible, setVisible] = useState(false);

  // 机构列表（树形结构）
  const orgList = [
    {
      uuid: 'org-1',
      code: 'ROOT',
      name: '总公司',
      level: 1,
      children: [
        {
          uuid: 'org-2',
          code: 'BRANCH_A',
          name: '分公司A',
          level: 2,
          children: [],
        },
      ],
    },
  ];

  // 应用列表
  const appList = [
    { uuid: 'app-1', name: 'APP1', value: 'APP1', label: '应用系统1' },
    { uuid: 'app-2', name: 'APP2', value: 'APP2', label: '应用系统2' },
  ];

  // 用户列表（可选）
  const userList = [
    { uuid: 'user-1', account: 'user1', userName: '用户A', orgCode: 'ROOT' },
    { uuid: 'user-2', account: 'user2', userName: '用户B', orgCode: 'BRANCH_A' },
  ];

  // 授权数据
  const dataItem = {
    orgCode: 'ROOT',
    appCode: 'APP1',
    account: 'user1',
    orgCodes: ['ROOT'],
    appCodes: ['APP1'],
    accounts: ['user1'],
  };

  const handleSubmit = (data) => {
    console.log('授权数据:', data);
    message.success('授权成功');
    setVisible(false);
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>配置权限</Button>
      <AssignModal
        visible={visible}
        title="权限配置"
        orgList={orgList}
        appList={appList}
        userList={userList}
        dataItem={dataItem}
        showUser={true}
        onSubmit={handleSubmit}
        close={() => setVisible(false)}
      />
    </>
  );
};

export default Example;
```

## 授权逻辑说明

### 机构树联动规则

- **选中子机构**：点击授权某下级机构时，该机构的所有上级机构会自动一起授权
- **取消上级机构**：点击取消某上级机构授权时，该机构的所有下级机构会自动一起取消授权
- **所属机构保护**：组件所属机构及其上级机构默认授权勾选且置灰，不得修改
- **全局授权**：勾选全局时，系统内所有机构都被授权，返回数据中 `checkedKeys = ['all']`

### 渠道授权规则

- **多选模式**：支持选择多个渠道
- **所属渠道保护**：组件所属渠道默认授权勾选且置灰，不得修改
- **全局授权**：勾选全局时，系统内所有渠道都被授权，返回数据中 `appKeys = ['all']`

### 用户授权规则

- **多选模式**：支持选择多个用户
- **所属用户保护**：组件所属用户默认授权勾选且置灰，不得修改
- **全局授权**：勾选全局时，系统内所有用户都被授权，返回数据中 `userKeys = ['all']`

## API

### Props

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| visible | 弹窗是否可见 | `boolean` | `false` | - |
| disabled | 是否禁用编辑（开启后为查看模式） | `boolean` | `false` | - |
| title | 弹窗标题 | `string` | - | - |
| okText | 确定按钮文字 | `string` | `'确定'` | - |
| cancelText | 取消按钮文字 | `string` | `'取消'` | - |
| orgList | 机构列表，见下方 [orgList 数据结构](#orglist-数据结构) | `Array<OrgNode>` | `[]` | - |
| appList | 应用列表，见下方 [appList 数据结构](#applist-数据结构) | `Array<AppNode>` | `[]` | - |
| userList | 用户列表，见下方 [userList 数据结构](#userlist-数据结构) | `Array<UserNode>` | `[]` | - |
| dataItem | 授权数据项，见下方 [dataItem 数据结构](#dataitem-数据结构) | `DataItem` | - | - |
| showUser | 是否展示用户授权面板 | `boolean` | `false` | - |
| onSubmit | 确定操作回调 | `(data: SubmitData) => void` | - | - |
| close | 关闭操作回调 | `() => void` | - | - |
| lang | 语言设置，支持 `cn`、`en` | `string` | `'cn'` | - |
| locale | 自定义语言包（会覆盖内置语言包） | `object` | - | - |
| orgTitle | 机构列表面板标题 | `string` | `'可用机构'` | - |
| appTitle | 应用列表面板标题 | `string` | `'可用渠道'` | - |
| userTitle | 用户列表面板标题 | `string` | `'可用用户'` | - |
| orgCheckboxTitle | 机构全局授权复选框标题 | `string` | `'全部机构可用'` | - |
| appCheckboxTitle | 应用全局授权复选框标题 | `string` | `'全部渠道可用'` | - |
| userCheckboxTitle | 用户全局授权复选框标题 | `string` | `'全部用户可用'` | - |
| customOrgDisabled | 自定义机构禁用规则 | `(org: OrgNode) => boolean` | - | - |
| customAppDisabled | 自定义应用禁用规则 | `(app: AppNode) => boolean` | - | - |

### orgList 数据结构

机构列表为树形结构数组，每个节点包含以下字段：

```javascript
[
  {
    uuid: 'org-1',
    code: 'ROOT',
    level: 1,
    name: '总公司',
    children: [
      {
        uuid: 'org-2',
        code: 'BRANCH_A',
        level: 2,
        parentUuid: 'org-1',
        name: '分公司A',
        children: [
          {
            uuid: 'org-3',
            code: 'DEPT_A1',
            level: 3,
            parentUuid: 'org-2',
            name: '部门A1',
            children: [],
          },
        ],
      },
      {
        uuid: 'org-4',
        code: 'BRANCH_B',
        level: 2,
        parentUuid: 'org-1',
        name: '分公司B',
        children: [],
      },
    ],
  },
];
```

**字段说明：**

- `uuid`：机构唯一标识
- `code`：机构编码（**必需**）
- `name`：机构名称（**必需**）
- `level`：机构层级
- `children`：子机构数组（**必需**，即使为空也要提供空数组）
- `orgAttribute`：机构属性（`1` 为职能部门，会显示特殊标签）

### appList 数据结构

应用列表为扁平数组，每个应用包含以下字段：

```javascript
[
  {
    uuid: 'app-1',
    name: 'APP1',
    displayName: '应用系统1',
    label: '应用系统1',
    value: 'APP1',
  },
  {
    uuid: 'app-2',
    name: 'APP2',
    displayName: '应用系统2',
    label: '应用系统2',
    value: 'APP2',
  },
  {
    uuid: 'app-3',
    name: 'APP3',
    displayName: '应用系统3',
    label: '应用系统3',
    value: 'APP3',
  },
];
```

**字段说明：**

- `uuid`：应用唯一标识
- `name`：应用编码
- `value`：应用值（**必需**）
- `label` / `displayName`：应用显示名称（**必需**）

### userList 数据结构

用户列表为扁平数组，每个用户包含以下字段：

```javascript
[
  {
    uuid: 'user-1',
    account: 'user1',
    userName: '用户A',
    orgCode: 'ROOT',
    status: 0,
  },
  {
    uuid: 'user-2',
    account: 'user2',
    userName: '用户B',
    orgCode: 'BRANCH_A',
    status: 0,
  },
];
```

**字段说明：**

- `uuid`：用户唯一标识
- `account`：用户账号（**必需**）
- `userName`：用户名称（**必需**）
- `orgCode`：所属机构编码
- `status`：用户状态

### dataItem 数据结构

授权数据项，用于初始化组件的授权状态：

```javascript
{
  // 所属信息（会被自动选中且禁用）
  orgCode: 'ROOT',             // 所属机构编码
  appCode: 'APP1',             // 所属应用编码
  account: 'user1',            // 所属用户账号

  // 已授权列表
  orgCodes: ['ROOT', 'BRANCH_A'],   // 已授权的机构编码列表，['all'] 表示全局授权
  appCodes: ['APP1', 'APP2'],       // 已授权的应用编码列表，['all'] 表示全局授权
  accounts: ['user1', 'user2']      // 已授权的用户账号列表，['all'] 表示全局授权
}
```

### onSubmit 回调数据格式

点击确定按钮时，会触发 `onSubmit` 回调，返回的数据格式如下：

```javascript
{
  // 授权的编码列表
  checkedKeys: ['ROOT', 'BRANCH_A'] | ['all'],  // 机构编码列表
  appKeys: ['APP1', 'APP2'] | ['all'],          // 应用编码列表
  userKeys: ['user1', 'user2'] | ['all'],       // 用户账号列表

  // 是否全局授权标识
  orgCheckAll: false,   // 机构是否全局授权
  appCheckAll: false,   // 应用是否全局授权
  userCheckAll: false,  // 用户是否全局授权

  // 实际数据（包含全部的具体编码，不使用 'all'）
  checkData: {
    orgs: ['ROOT', 'BRANCH_A', ...],    // 所有被授权的机构编码
    apps: ['APP1', 'APP2', ...],        // 所有被授权的应用编码
    accounts: ['user1', 'user2', ...]   // 所有被授权的用户账号
  }
}
```

**数据说明：**

- 当选择全局授权时，`checkedKeys`/`appKeys`/`userKeys` 的值为 `['all']`
- `checkData` 中始终包含具体的编码列表，即使选择了全局授权
- 使用 `orgCheckAll`/`appCheckAll`/`userCheckAll` 可以判断是否为全局授权

## 高级用法

### 查看模式

将 `disabled` 设置为 `true` 即可切换为查看模式，此时不显示操作按钮，所有选项为只读状态：

```jsx
<AssignModal
  visible={true}
  disabled={true} // 查看模式
  orgList={orgList}
  appList={appList}
  dataItem={dataItem}
  close={() => setVisible(false)}
/>
```

### 自定义禁用规则

可以通过 `customOrgDisabled` 和 `customAppDisabled` 自定义禁用规则：

```jsx
<AssignModal
  visible={true}
  orgList={orgList}
  appList={appList}
  dataItem={dataItem}
  // 自定义机构禁用规则：禁用 3 级以下机构
  customOrgDisabled={(org) => org.level > 3}
  // 自定义应用禁用规则：禁用非激活状态的应用
  customAppDisabled={(app) => app.status !== 'active'}
  onSubmit={(data) => console.log(data)}
  close={() => setVisible(false)}
/>
```

### 国际化配置

#### 使用内置语言

组件内置中英文支持，通过 `lang` 属性切换：

```jsx
<AssignModal
  visible={true}
  lang="en" // 'cn' | 'en'
  orgList={orgList}
  appList={appList}
  dataItem={dataItem}
  onSubmit={(data) => console.log(data)}
  close={() => setVisible(false)}
/>
```

#### 自定义语言包

可以通过 `locale` 属性传入自定义语言包，会覆盖内置语言包：

```jsx
const customLocale = {
  authorizesOrgList: '自定义机构列表',
  allOrgAvailable: '自定义全部机构',
  search: '自定义搜索提示',
  // ... 更多文案
};

<AssignModal
  visible={true}
  locale={customLocale}
  orgList={orgList}
  appList={appList}
  dataItem={dataItem}
  onSubmit={(data) => console.log(data)}
  close={() => setVisible(false)}
/>;
```

### 自定义标题

可以自定义各个面板的标题：

```jsx
<AssignModal
  visible={true}
  title="权限配置"
  orgTitle="授权机构"
  appTitle="授权渠道"
  userTitle="授权账号"
  orgCheckboxTitle="授权全部机构"
  appCheckboxTitle="授权全部渠道"
  userCheckboxTitle="授权全部账号"
  orgList={orgList}
  appList={appList}
  userList={userList}
  dataItem={dataItem}
  showUser={true}
  onSubmit={(data) => console.log(data)}
  close={() => setVisible(false)}
/>
```

### 只使用机构和应用

如果不需要用户授权功能，不传 `showUser` 或设置为 `false` 即可：

```jsx
<AssignModal
  visible={true}
  orgList={orgList}
  appList={appList}
  dataItem={dataItem}
  showUser={false} // 或不传此属性
  onSubmit={(data) => console.log(data)}
  close={() => setVisible(false)}
/>
```

## 常见问题

### 1. 机构树不显示？

确保每个机构节点包含必需字段：`code`（机构编码）、`name`（机构名称）、`children`（子机构数组）

### 2. 所属机构/应用无法取消？

这是保护机制，`dataItem` 中的 `orgCode`、`appCode`、`account` 会被自动选中且禁用，确保组件至少有基本的授权。

### 3. 如何判断全局授权？

通过 `orgCheckAll`/`appCheckAll`/`userCheckAll` 字段或判断 `checkedKeys`/`appKeys`/`userKeys` 是否为 `['all']`

### 4. 如何预填充授权数据？

通过 `dataItem` 传入已有的授权数据：

```javascript
const dataItem = {
  orgCode: 'ROOT', // 所属机构（必填）
  appCode: 'APP1', // 所属应用（必填）
  orgCodes: ['ROOT', 'BRANCH_A'], // 已授权的机构列表
  appCodes: ['APP1', 'APP2'], // 已授权的应用列表
};
```

## 依赖

- `react`: >= 16.8.0
- `tntd`：组件库
- `universal-cookie`：Cookie 管理
- `lodash`：工具函数库

## 注意事项

1. **数据格式**：务必确保 `orgList`、`appList`、`userList` 的数据格式正确，特别是必需字段
2. **联动逻辑**：选中子机构会自动选中父机构，取消父机构会自动取消子机构
3. **全局授权**：使用全局授权时，返回的 `checkedKeys`/`appKeys`/`userKeys` 为 `['all']`，但 `checkData` 中包含实际的完整列表
4. **性能优化**：对于大量机构数据，组件内部使用了虚拟滚动优化

## 语言包配置

组件支持通过 `locale` 属性自定义文案：

```jsx
<AssignModal
  locale={{
    authorizesOrgList: '组织架构',
    allOrgAvailable: '授权全部组织',
    search: '搜索组织...',
    // 更多字段...
  }}
  // 其他属性...
/>
```

## License

ISC
