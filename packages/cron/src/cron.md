---
title: cron表达式组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/cron --save
```

### 说明

- 目前市面上的 Cron 表达式相对复杂，可是实际场景中用不到太过复杂的，故开发此组件。

### 使用

```jsx
import React, { Fragment, useState } from 'react';
import { Button } from 'antd';
import Corn from '@tddc/cron';

const ml10 = { marginLeft: 10 };
const mt20 = { marginTop: 20 };

export default function CornDemo() {
  const [value, setValue] = useState('6 6 14 ? * 6 *');
  const [value2, setValue2] = useState('0 0 0 1,6 * ? *');
  const [value3, setValue3] = useState('0 0 0 L * ? *');
  const [value4, setValue4] = useState('0 0 0 L 4/12 ? *');
  return (
    <Fragment>
      <h4>普通：</h4>
      <Corn
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
      />
      <Button
        style={ml10}
        onClick={() => {
          setValue('0 0 0 2 * ? *');
        }}
        type="primary"
      >
        重置
      </Button>
      {value}

      <div style={mt20}>多选：</div>
      <Corn
        value={value2}
        onChange={(value) => {
          setValue2(value);
        }}
        multiple
      />
      <Button
        style={ml10}
        onClick={() => {
          setValue2('6 4 4 ? * 1,3,5 *');
        }}
        type="primary"
      >
        重置
      </Button>
      {value2}

      <h4 style={mt20}>非受控组件：</h4>
      <Corn
        defaultValue={value3}
        onChange={(value) => {
          setValue3(value);
        }}
      />
      {value3}

      <h4 style={mt20}>自定义表达式：</h4>
      <Corn
        value={value4}
        onChange={(value) => {
          setValue4(value);
        }}
      />
      {value4}
    </Fragment>
  );
}
```

#### 🚀 `入参`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 指定默认值 | String | - |
| value | 指定当前 Cron 值 | String | - |
| onChange | 修改 Cron 调用此函数 | function(value) | - |
| multiple | 是否可以多选 | Boolean | - |
| isRange | 是否是时间范围选择 | Boolean | false |
| timeFormat | 时间格式 | String | HH:mm:ss |
| freqList | 可选频率列表 | Array | [{"value":"everyHours","label":"每小时"},{"value":"everyday","label":"每天"},{"value":"week","label":"每周"},{"value":"month","label":"每月"},{"value":"year","label":"每年"},{"value":"custom","label":"Cron 表达式"}] |
