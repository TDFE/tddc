---
title: collapse-table表格
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/collapse-table --save
```

### 说明

- 此组件是为了解决 antd3.x 版本的`columns.fixed` 和`expandedRowRender`不能共用的问题；

### 使用

```jsx
import CollapseTable from '@tddc/collapse-table';
import React from 'react';

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
  },
  // ...
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
    width: 150,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    width: 200,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: 300,
  },
  {
    title: 'Action',
    key: 'action',
    fixed: 'right',
    width: 150,
    render: () => <a>Delete</a>,
  },
];

const expandedRowRender = (record) => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ flex: 1 }}>
        My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John
        Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32
        years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old,
        living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New
        York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake
        Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is
        John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I
        am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years
        old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in
        New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1
        Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My
        name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John
        Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32
        years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old,
        living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New
        York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake
        Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is
        John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I
        am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years
        old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in
        New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1
        Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My
        name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John
        Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32
        years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old,
        living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New
        York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake
        Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is
        John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I
        am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years
        old, living in New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in
        New York No. 1 Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1
        Lake Park.My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My
        name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John
        Brown, I am 32 years old, living in New York No. 1 Lake Park.My name is John Brown, I am 32
        years old, living in New York No. 1 Lake Park.
      </div>
    </div>
  );
};

const Demo = () => {
  return (
    <CollapseTable
      rowKey="key"
      dataSource={dataSource}
      columns={columns}
      expandedRowRender={expandedRowRender}
      scroll={{ x: 1300 }}
    />
  );
};

export default Demo;
```

| 参数       | 说明              | 是否必填 | 类型 | 默认值 |
| ---------- | ----------------- | -------- | ---- | ------ |
| dataSource |                   |          |      |
| columns    | expandedRowRender |
