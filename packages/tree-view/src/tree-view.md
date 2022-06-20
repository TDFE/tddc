---
title: 关联引用概览树
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/tree-view --save
```

### 关联引用概览基本使用

```jsx
import React, { useEffect, useRef } from 'react';
import Tree from '@tddc/tree-view';

let treeData = {
  componentType: 'FIELD_SYSTEM',
  componentId: 'S_S_METRICRESULT',
  componentName: '指标结果',
  componentVersion: '',
  goLink: '/bridge/fields/fieldManage?currentTab=1&name=S_S_METRICRESULT',
  isGroupItem: false,
  children: [
    {
      componentType: 'THIRD_SERVICE_VERSION',
      componentName: '三方服务',
      isGroupItem: true,
      children: [
        {
          componentType: 'THIRD_SERVICE_VERSION',
          componentId: 'SFZLWHC_1',
          componentName: '身份证联网核查服务',
          componentVersion: '1',
          goLink: '/handle/supplierManagement/dataServiceList?name=SFZLWHC',
          isGroupItem: false,
          nodeType: 'THIRD_SERVICE_VERSION',
          nodeName: '身份证联网核查服务',
        },
      ],
      nodeType: 'THIRD_SERVICE_VERSION',
      nodeName: '三方服务',
    },
    {
      componentType: 'POLICY',
      componentName: '策略',
      isGroupItem: true,
      children: [
        {
          componentType: 'POLICY',
          componentId: 'HXKD_CS',
          componentName: '华兴快贷_初审',
          componentVersion: '',
          goLink: '/noah/policyManage?currentTab=1&code=HXKD_CS',
          isGroupItem: false,
          nodeType: 'POLICY',
          nodeName: '华兴快贷_初审',
        },
      ],
      nodeType: 'POLICY',
      nodeName: '策略',
    },
    {
      componentType: 'API_SERVICE',
      componentName: '对接服务',
      isGroupItem: true,
      children: [
        {
          componentType: 'API_SERVICE',
          componentId: 'hsh',
          componentName: '指标回溯实时调用0531',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=hsh',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: '指标回溯实时调用0531',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'hsp',
          componentName: '指标回溯离线调用0531-parquet',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=hsp',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: '指标回溯离线调用0531-parquet',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'test',
          componentName: 'test',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=test',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: 'test',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'zjytest',
          componentName: 'zjytest',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=zjytest',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: 'zjytest',
        },
      ],
      nodeType: 'API_SERVICE',
      nodeName: '对接服务',
    },
  ],
  nodeType: 'FIELD_SYSTEM',
  nodeName: '指标结果',
};

const Overview = () => {
  let container = useRef();

  useEffect(() => {
    let params = {
      data: treeData,
      options: {
        fixed: true,
        initType: true,
        onChange: (data) => {
          console.log(data);
        },
      },
      styleOptions: {
        spaceHorizontal: 100,
      },
      container: container.current,
    };
    Tree().init(params);
  }, []);

  return <div ref={container} />;
};

export default Overview;
```

### 关联引用概览在中台中的使用

```jsx
import React, { useEffect, useRef } from 'react';
import Tree from '@tddc/tree-view';
import Node from '../Node';

let treeData = {
  componentType: 'FIELD_SYSTEM',
  componentId: 'S_S_METRICRESULT',
  componentName: '指标结果',
  componentVersion: '',
  goLink: '/bridge/fields/fieldManage?currentTab=1&name=S_S_METRICRESULT',
  isGroupItem: false,
  children: [
    {
      componentType: 'THIRD_SERVICE_VERSION',
      componentName: '三方服务',
      isGroupItem: true,
      children: [
        {
          componentType: 'THIRD_SERVICE_VERSION',
          componentId: 'SFZLWHC_1',
          componentName: '身份证联网核查服务',
          componentVersion: '1',
          goLink: '/handle/supplierManagement/dataServiceList?name=SFZLWHC',
          isGroupItem: false,
          nodeType: 'THIRD_SERVICE_VERSION',
          nodeName: '身份证联网核查服务',
        },
      ],
      nodeType: 'THIRD_SERVICE_VERSION',
      nodeName: '三方服务',
    },
    {
      componentType: 'POLICY',
      componentName: '策略',
      isGroupItem: true,
      children: [
        {
          componentType: 'POLICY',
          componentId: 'HXKD_CS',
          componentName: '华兴快贷_初审',
          componentVersion: '',
          goLink: '/noah/policyManage?currentTab=1&code=HXKD_CS',
          isGroupItem: false,
          nodeType: 'POLICY',
          nodeName: '华兴快贷_初审',
        },
      ],
      nodeType: 'POLICY',
      nodeName: '策略',
    },
    {
      componentType: 'API_SERVICE',
      componentName: '对接服务',
      isGroupItem: true,
      children: [
        {
          componentType: 'API_SERVICE',
          componentId: 'hsh',
          componentName: '指标回溯实时调用0531',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=hsh',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: '指标回溯实时调用0531',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'hsp',
          componentName: '指标回溯离线调用0531-parquet',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=hsp',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: '指标回溯离线调用0531-parquet',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'test',
          componentName: 'test',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=test',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: 'test',
        },
        {
          componentType: 'API_SERVICE',
          componentId: 'zjytest',
          componentName: 'zjytest',
          componentVersion: '',
          goLink: '/unite/serviceManage/setService?code=zjytest',
          isGroupItem: false,
          nodeType: 'API_SERVICE',
          nodeName: 'zjytest',
        },
      ],
      nodeType: 'API_SERVICE',
      nodeName: '对接服务',
    },
  ],
  nodeType: 'FIELD_SYSTEM',
  nodeName: '指标结果',
};

const Overview1 = () => {
  let container = useRef();

  useEffect(() => {
    let params = {
      data: treeData,
      options: {
        fixed: true,
        initType: true,
        onChange: (data) => {
          console.log(data);
        },
        nodeDom: ({ node, nodeToggle, id, constants, fixed }) => (
          <Node
            constants={constants}
            node={node}
            nodeToggle={nodeToggle}
            id={id}
            onClick={(d) => {
              console.log(d);
            }}
            onEyeClick={(d) => {
              console.log(d);
            }}
            fixed={fixed}
          />
        ),
      },
      styleOptions: {
        spaceHorizontal: 100,
      },
      container: container.current,
    };
    Tree().init(params);
  }, []);

  return <div ref={container} />;
};

export default Overview1;
```

### 入参

#### 🚀 `params`

| 参数         | 说明                                | 类型    | 默认值 |
| ------------ | ----------------------------------- | ------- | ------ |
| data         | 数据                                | Object  |        |
| options      | [配置项](#-options-配置项)          | Object  |        |
| styleOptions | [样式配置项](#-styleoptions-配置项) | Object  |        |
| container    | 挂载 dom                            | Element |        |

#### 🚀 `options 配置项`

| 参数                   | 说明             | 类型                           | 默认值 |
| ---------------------- | ---------------- | ------------------------------ | ------ |
| options.fixed          | 节点长度是否固定 | Boolean                        | true   |
| options.initType       | 树是否默认展开   | Boolean                        | false  |
| options.nodeDom        | 自定义节点       | function(options) => ReactNode |        |
| options.customPosition | 节点自定义坐标   | function(node) => [x, y]       |        |
| options.onChange       | 树结构改变回调   | function(data)                 |        |

#### 🚀 `styleOptions 配置项`

| 参数                         | 说明               | 类型   | 默认值 |
| ---------------------------- | ------------------ | ------ | ------ |
| styleOptions.nodeWidth       | 节点占据的宽度     | Number | 120    |
| styleOptions.nodeHeight      | 节点占据高度       | Number | 40     |
| styleOptions.spaceVertical   | 节点垂直之间的间隙 | Number | 20     |
| styleOptions.spaceHorizontal | 节点水平之间的间隙 | Number | 38     |
| styleOptions.rootWidth       | 根节点宽度         | Number | 130    |

### `API`

#### 🚀 `Tree`

| 参数    | 说明         | 类型     | 默认值 |
| ------- | ------------ | -------- | ------ |
| init    | 初始化配置项 | function |        |
| setData | 设置树的数据 | function |        |
| expand  | 展开树       | function |        |
| packUp  | 收起树       | function |        |
