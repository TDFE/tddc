---
title: 文本自适应对其
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/auto-text-align --save
```

### 说明
- 组件会根据后端返回的值长度动态计算出每一行最多能放几个以及每一列的宽度（让文案正常展示，不用...显示），切换窗口尺寸的时候也会动态变化

### 文本自适应对其的使用

```jsx
import React, { useState } from 'react';
import { Button, message } from 'antd';
import AutoTextAlign from '@tddc/auto-text-align';

const list = [
  {
    "label":"预警信号总数",
    "value":"0"
  },
  {
    "label":"系统生成预警信号数",
    "value":"0"
  },
  {
    "label":"人工生成预警信号数",
    "value":"0"
  },
  {
    "label":"拒绝",
    "value":"0"
  },
  {
    "label":"线下核查",
    "value":"0"
  },
  {
    "label":"策略专用",
    "value":"0"
  },
  {
    "label":"警告",
    "value":"0"
  },
  {
    "label":"人工检查",
    "value":"0"
  },
  {
    "label":"人工审核",
    "value":"0"
  },
  {
    "label":"人工核查",
    "value":"0"
  },
  {
    "label":"待处置预警数",
    "value":"0"
  },
  {
    "label":"处置审批中预警数",
    "value":"0"
  },
  {
    "label":"处置退回数",
    "value":"0"
  },
  {
    "label":"已处置预警数",
    "value":"0"
  },
  {
    "label":"反馈审批中数",
    "value":"0"
  },
  {
    "label":"反馈退回数",
    "value":"0"
  },
  {
    "label":"待审批解除预警数",
    "value":"0"
  },
  {
    "label":"已解除预警数",
    "value":"0"
  },
  {
    "label":"解除退回数",
    "value":"0"
  },
  {
    "label":"已完成处置数",
    "value":"0"
  },
  {
    "label":"已完成处置率",
    "value":"0.0%"
  },
  {
    "label":"待处置率",
    "value":"0.0%"
  },
  {
    "label":"处置审批中预警率",
    "value":"0.0%"
  },
  {
    "label":"待审批解除预警率",
    "value":"0.0%"
  },
  {
    "label":"已解除预警率",
    "value":"0.0%"
  },
  {
    "label":"误警数",
    "value":"0"
  },
  {
    "label":"误警率",
    "value":"0.0%"
  }
]

const TextAlign = () => {
  return <AutoTextAlign {...{ list, labelFontSize: '12px', valueFontSize: '14px', itemSpace: 8, maxColumn: 10 }} />;
};

export default TextAlign;
```

#### 🚀 `入参`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| list | 后端返回的数据key/value | Array<label, value> | [] |
| labelFontSize | 标题的font-size | String | 12px |
| valueFontSize | 值的font-size | String | 14px |
| itemSpace | 每一项之间自定义调整的宽度 | Number | 8 |
| maxColumn | 最多有几列 | Number | 10 |


#### 🚀 `文本自适应对其数据结构`

```javascript

```
