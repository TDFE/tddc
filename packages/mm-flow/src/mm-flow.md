---
title: 决策流/任务流/审批流
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/mm-flow --save
```

### 流在决策流/任务流/审批流中的使用

```jsx
import React, { useState, useEffect, useRef } from 'react';
import { Button, message } from 'antd';
import MMFlow from '@tddc/mm-flow';
import DialogTest from './DialogTest';
const MMFlowComponent = () => {
  const mmFlow = useRef();
  const [auditedNodes, setAuditedNodes] = useState([
    {
      uuid: '3e9bf4004ad911eda9df3f68e8b34c19',
      status: 'success',
    },
    {
      uuid: '3f8012704ad911eda9df3f68e8b34c19',
      status: 'error',
    },
  ]);

  const save = () => {
    setAuditedNodes([
      {
        uuid: '3e9bf4004ad911eda9df3f68e8b34c19',
        status: 'success',
      },
      {
        uuid: '3f8012704ad911eda9df3f68e8b34c19',
        status: 'success',
      },
    ]);

    return new Promise((resolve) => {
      setTimeout(() => {
        mmFlow.current.updateGraph(
          '{"code":"23","flowLineDefinitions":[{"attributes":{},"fromPoint":"1","id":"415372e0-4ad9-11ed-a9df-3f68e8b34c19","sourceNodeId":"3e9bf4004ad911eda9df3f68e8b34c19","targetNodeId":"3f8012704ad911eda9df3f68e8b34c19","toPoint":"3"},{"attributes":{},"fromPoint":"1","id":"42afce90-4ad9-11ed-a9df-3f68e8b34c19","sourceNodeId":"3f8012704ad911eda9df3f68e8b34c19","targetNodeId":"404fbe804ad911eda9df3f68e8b34c19","toPoint":"2"}],"flowNodeDefinitions":[{"attributes":{},"id":"3e9bf4004ad911eda9df3f68e8b34c19","incomingFields":[],"name":"开始","nodeType":"StartFlowNode","outgoingFields":[],"x":"489","y":"-280"},{"attributes":{"code":"TREE22092811250675234","decisionType":"D_TREE","decisionName":"tree_index_yctest","decisionUuid":"TREE22092811250675234","version":11},"id":"3f8012704ad911eda9df3f68e8b34c19","incomingFields":[{"fieldName":"salaxyzb_d259lvdteo","fieldType":"index"}],"name":"tree_index_yctest","nodeType":"DecisionToolServiceNode","outgoingFields":[{"fieldName":"S_S_DETOOLRESULT","fieldType":"field","mappingName":"dealType"}],"x":"689","y":"-287"},{"attributes":{},"id":"404fbe804ad911eda9df3f68e8b34c19","incomingFields":[],"name":"结束","nodeType":"EndFlowNode","outgoingFields":[],"x":"981","y":"-287"}],"id":"5fa3cef2404d480b96734c2ffbe5785a","name":"232","version":1}',
        );
        resolve();
      }, 400);
    });
  };

  useEffect(() => {
    setInterval(() => {
      setAuditedNodes([
        {
          uuid: '3e9bf4004ad911eda9df3f68e8b34c19',
          status: 'success',
        },
        {
          uuid: '3f8012704ad911eda9df3f68e8b34c19',
          status: 'success',
        },
      ]);
    }, 1000);
  });
  return (
    <>
      <MMFlow
        ref={mmFlow}
        className="test"
        // editorStyle={{
        //    style:{
        //       height:600
        //    }
        // }}
        graphData={
          '{"code":"23","flowLineDefinitions":[{"attributes":{},"fromPoint":"1","id":"415372e0-4ad9-11ed-a9df-3f68e8b34c19","sourceNodeId":"3e9bf4004ad911eda9df3f68e8b34c19","targetNodeId":"3f8012704ad911eda9df3f68e8b34c19","toPoint":"3"},{"attributes":{},"fromPoint":"1","id":"42afce90-4ad9-11ed-a9df-3f68e8b34c19","sourceNodeId":"3f8012704ad911eda9df3f68e8b34c19","targetNodeId":"404fbe804ad911eda9df3f68e8b34c19","toPoint":"2"}],"flowNodeDefinitions":[{"attributes":{},"id":"3e9bf4004ad911eda9df3f68e8b34c19","incomingFields":[],"name":"开始","nodeType":"StartFlowNode","outgoingFields":[],"x":"489","y":"-280"},{"attributes":{"code":"TREE22092811250675234","decisionType":"D_TREE","decisionName":"tree_index_yctest","decisionUuid":"TREE22092811250675234","version":11},"id":"3f8012704ad911eda9df3f68e8b34c19","incomingFields":[{"fieldName":"salaxyzb_d259lvdteo","fieldType":"index"}],"name":"tree_index_yctest","nodeType":"DecisionToolServiceNode","outgoingFields":[{"fieldName":"S_S_DETOOLRESULT","fieldType":"field","mappingName":"dealType"}],"x":"689","y":"-287"},{"attributes":{},"id":"404fbe804ad911eda9df3f68e8b34c19","incomingFields":[],"name":"结束","nodeType":"EndFlowNode","outgoingFields":[],"x":"981","y":"-287"}],"id":"5fa3cef2404d480b96734c2ffbe5785a","name":"232","version":1}'
        }
        flowNodesDict={[
          {
            name: '开始',
            type: 'StartFlowNode',
            shape: 'circle',
            iconText: '开',
            iconColor: '#628fe4',
          },
          {
            name: '结束',
            type: 'EndFlowNode',
            shape: 'circle',
            iconText: '结',
            iconColor: '#869FBE',
          },
          {
            name: '判断',
            shape: 'rhombus',
            type: 'ExclusiveGateway',
          },
          {
            name: '并行',
            shape: 'rhombus',
            type: 'ParallelGateway',
          },
          {
            name: '继续补充',
            type: 'SuspendFlowNode',
            iconText: '继',
            iconColor: '#E6B55E',
          },
          {
            name: '规则集',
            type: 'RuleSetServiceNode',
            iconText: '规',
            iconColor: '#628fe4',
          },
          {
            name: '三方服务',
            type: 'ThirdServiceNode',
            iconText: '三',
            iconColor: '#CFAB67',
          },
          {
            name: '决策工具',
            type: 'DecisionToolServiceNode',
            iconText: '决',
            iconColor: '#CF6767',
          },
          {
            name: '模型',
            type: 'ModelServiceNode',
            iconText: '模',
            iconColor: '#4DA9C9',
          },
          {
            name: '函数',
            type: 'FunctionServiceNode',
            iconText: '函',
            iconColor: '#D97B4E',
          },
          {
            name: '冠军挑战者',
            type: 'ChampionServiceNode',
            iconText: '冠',
            iconColor: '#9367c6',
          },
          {
            name: '动作',
            type: 'ActionServiceNode',
            iconText: '动',
            iconColor: '#8390DB',
          },
        ]}
        // type="view"
        operateGroup={[
          {
            key: 'save',
            name: '保存',
            type: 'primary',
            click: save,
            clickType: 'async',
            permission: true,
          },
        ]}
        auditedNodes={auditedNodes}
        dialogDom={[<DialogTest />]}
        showMiniMap={false}
        showLengend={true}
        autoDiffAuditNodes={false}
        // commandAction={{
        //   fullscreen: ()=>{
        //     console.log("zzz")
        //   }
        // }}
      />
    </>
  );
};
export default MMFlowComponent;
```
