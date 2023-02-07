---
title: 树形穿梭框组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/tree-transfer --save
```

### 说明

- tree 形式的穿梭框支持左右 tree 形式的数据展示

### 使用

```jsx
import React, { Component } from 'react';
import TreeTransfer from '@tddc/tree-transfer';

const mockData = [
  {
    title: '1',
    key: '1',
    children: [
      {
        title: '1-0',
        key: '1-0',
        children: [
          {
            title: '1-0-0',
            key: '1-0-0',
          },
          {
            title: '1-0-1',
            key: '1-0-1',
          },
        ],
      },
      {
        title: '1-1',
        key: '1-1',
        children: [
          {
            title: '1-1-0',
            key: '1-1-0',
          },
          {
            title: '1-1-1',
            key: '1-1-1',
          },
        ],
      },
    ],
  },
  {
    title: '2',
    key: '2',
    children: [
      {
        title: '2-0',
        key: '2-0',
        children: [
          {
            title: '2-0-0',
            key: '2-0-0',
          },
          {
            title: '2-0-1',
            key: '2-0-1',
          },
        ],
      },
      {
        title: '2-1',
        key: '2-1',
        children: [
          {
            title: '2-1-0',
            key: '2-1-0',
          },
          {
            title: '2-1-1',
            key: '2-1-1',
          },
        ],
      },
    ],
  },
];

class App extends Component {
  onMove = (keys, info) => {
    console.log(keys);
    console.log(JSON.parse(info));
  };

  render() {
    return <TreeTransfer dataSource={mockData} onChange={this.onMove} />;
  }
}
export default App;
```

#### 🚀 `入参`

| api | 类型 | 是否必选 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| dataSource | array | true | [] | 完整的数据源遵循 Tree 的数据结构 |
| defaultValue | array | false | [] | 默认的初始值只在组件第一次渲染时生效 |
| value | array | false | [] | 受控选择的 values |
| defaultExpandAll | boolean | false | false | 默认展开所有树节点 |
| disabled | boolean | false | false | 是否禁用 |
| leftDisabled | boolean | false | false | 左侧 Tree 是否禁用 |
| rightDisabled | boolean | false | false | 右侧 Tree 是否禁用 |
| showSearch | boolean | false | true | 是否有搜索框 |
| searchItems | array | false | ['label', 'key'] | 搜索时匹配的属性（数据源的属性要与此同步） |
| searchPlaceholder | array | false | ['请输入', '请输入'] | 搜索框的 placeHolder |
| notFoundContent | string | false | 暂无数据 | 无数据时的显示文本 |
| onChange | function | false | - | 数据移动时触发的函数， 默认参数一为选择的 keys，参数二为数组形式的 JSON 字符串数据为为选择之后左侧的数据源和右侧的数据源 |
