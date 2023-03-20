---
title: 同盾级联组件
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

- 1.x 版本只支持虚拟滚动，不支持多选，基于 antd3 cascader
- 2.x 版本增加多选功能,基于 antd4 cascader

### 1w+下拉数据

```jsx
import React, { useState, useEffect } from 'react';
import { Tooltip, Icon } from 'antd';
import TdCascader from '@tddc/virtual-cascader';

const getChildren = (key) => {
  const children = [];
  for (let i = 0; i < 10000; i++) {
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
    children: getChildren('nanjing'),
  },
];

const Demo = () => {
  const [value, setValue] = useState([]);
  const fieldNames = { label: 'dName', value: 'name', children: 'children' };

  useEffect(() => {
    setTimeout(() => {
      setValue(['zhejiang', 'hangzhou187']);
    }, 500);
  }, []);

  /** 多选自定义显示 */
  const tagRender = (props) => {
    const { label, closable, onClose, disabled } = props;

    return (
      <span
        className={`tntd-select-selection-item ${
          disabled && 'tntd-select-selection-item-disabled'
        }`}
      >
        <span className="tntd-select-selection-item-content">{label}</span>
        {closable ? (
          <span className="tntd-select-selection-item-remove">
            <Icon type="close" />
          </span>
        ) : null}
      </span>
    );
  };

  /** 多选超过maxTagCount后自定义显示 */
  const maxTagPlaceholder = (arr) => {
    const str = Array.isArray(arr) ? arr.map((i) => i.label).join(',') : '';

    if (str) {
      return (
        <Tooltip title={str}>
          <span>+ {arr.length} ...</span>
        </Tooltip>
      );
    }
    return null;
  };

  return (
    <div>
      <div>
        <span>多选默认显示:</span>
        <TdCascader
          {...{
            style: { width: 300 },
            options,
            multiple: true,
            maxTagCount: 3,
            fieldNames,
            value,
            showSearch: true,
            onChange: (val) => setValue(val),
            renderItem: (item, level) => {
              return (
                <Tooltip title={`${item.name}${level}`}>
                  {item.dName}
                  {level}
                </Tooltip>
              );
            },
          }}
        />
      </div>
      <div>
        <span>多选自定义显示:</span>
        <TdCascader
          {...{
            style: { width: 300 },
            options,
            multiple: true,
            maxTagCount: 'responsive',
            fieldNames,
            value,
            showSearch: true,
            onChange: (val) => setValue(val),
            tagRender,
            maxTagPlaceholder,
            renderItem: (item, level) => {
              return (
                <Tooltip title={`${item.name}${level}`}>
                  {item.dName}
                  {level}
                </Tooltip>
              );
            },
          }}
        />
      </div>
      <div>
        <span>单选:</span>
        <TdCascader
          {...{
            showSearch: true,
            options,
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

1.x 版本新增 api 如下, 其余参照 antd3 
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| customRender | 自定义渲染下拉, 自带三个参数为当前节点数据/是否最后一级/当前层级 
| fun(current: number, isLast: boolean, level: number) | |

2.x 版本新增 api 如下, 其余参照 antd4 
| 参数 | 说明 | 类型 | 默认值 | 
| --- | --- | --- | --- | 
| renderItem | 自定义渲染每一条数据 | fun({item: Option}, level: number) | label |

#### 注意

- 默认每一列宽度设置为 140px，这是因为用了虚拟滚动，如果不设置固定宽度列就会忽大忽小。考虑过动态计算每一列最大宽度，但是如果数据量太大的情况下会有性能问题，所以暂时就不考虑了
