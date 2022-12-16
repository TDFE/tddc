---
title: antd3级联增加虚拟滚动
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/virtual-cascader --save
```

### 说明

- 该组件基于 antd3，增加了弹窗的虚拟滚动，支持 2w+下拉数据

### 老旧组件对比

```jsx
import React, { useState, useEffect } from 'react';
import { Cascader } from 'antd';
import VirtualCascader from '@tddc/virtual-cascader';
import 'antd/dist/antd.css';

const getChildren = (key) => {
  const children = [];
  for (let i = 0; i < 200; i++) {
    children.push({
      name: key + String(i),
      dName: key + String(i),
    });
  }
  return children;
};

const options = [
  {
    name: 'zhejiang',
    dName: 'zhejiang',
    children: getChildren('hangzhou'),
  },
  {
    name: 'jiangsu',
    dName: 'jiangsu',
    disabled: true,
    children: getChildren('nanjing'),
  },
];

const Demo = () => {
  const [value, setValue] = useState([]);
  const fieldNames = { label: 'dName', value: 'name', children: 'children' };

  useEffect(() => {
    setTimeout(() => {
      setValue(['jiangsu', 'nanjing91']);
    }, 500);
  }, []);

  return (
    <div>
      <div>
        无虚拟滚动：
        <Cascader
          {...{ options, fieldNames, showSearch: true, value, onChange: (val) => setValue(val) }}
        />
      </div>
      <div>
        增加虚拟滚动：
        <VirtualCascader
          {...{
            options,
            multiple: true,
            fieldNames,
            value,
            onChange: (val) => setValue(val),
          }}
        />
      </div>
    </div>
  );
};

export default Demo;
```

#### 🚀 `入参`

新增 api 如下, 其余参照 antd3 | 参数 | 说明 | 类型 | 默认值 | | --- | --- | --- | --- | | customRender | 自定义渲染下拉, 自带三个参数为当前节点数据/是否最后一级/当前层级 | fun(current, isLast, level) | | | multiple | 支持多选节点 | boolean | - |

#### 注意

- 需要自定义给每一列都设置个宽度，要不然列宽会忽大忽小。这是因为用了虚拟滚动，考虑到性能暂时不去计算每一个节点的宽度，所以得不到本列最大的宽度。
