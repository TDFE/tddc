---
title: 规则树预览业务组件
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/td-tree-view --save
```

### 说明

- `@tddc/tree-view` 组件的业务封装，用于树型 JSON 数据的预览；例如天策引用关系树，规则树等；

### 使用

```jsx
import TdTreeView from '@tddc/td-tree-view';
import React, { useEffect } from 'react';

const Demo = () => {
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

  // 处理成你想要的数据结构， 这里需要：componentType => nodeType, componentName => nodeName
  const formatTreeData = (data) => {
    if (data.children && data.children.length) {
      data.children = data.children.map((item) => {
        item.nodeType = item.componentType;
        item.nodeName = item.componentName;
        return formatTreeData(item);
      });
    }
    data.nodeType = data.componentType;
    data.nodeName = data.componentName;
    return data;
  };

  useEffect(() => {
    treeData = formatTreeData(treeData);
  }, []);

  return <TdTreeView data={treeData} />;
};

export default Demo;
```

```jsx
import { RuleTree } from '@tddc/td-tree-view';
import React, { useEffect } from 'react';

let data = {
  logicCondition: '1&2&3',

  logicOperator: '&&',
  children: [
    {
      id: 64262,
      uuid: 'ec66362f255840a88b76684fa401aa95',
      parentUuid: '4539c8793d454483a88fcc700007e75e',
      logicOperator: '&&',
      type: 'context',
      priority: 1,
      creator: 'fowen.pan',
      operator: 'fowen.pan',
      fkRuleUuid: '3e195782a4ed4091a49364c19ff421d2',
      params: '',
      children: [
        {
          id: 64263,
          uuid: 'e89de180156a4eff9d3a8a439b322bcc',
          parentUuid: 'ec66362f255840a88b76684fa401aa95',
          property: 'S_F_TRANSFERLIMIT',
          op: '>=',
          value: '100000',
          type: 'context',
          propertyDataType: 'DOUBLE',
          rightValueType: 'input',
          priority: 2,
          creator: 'fowen.pan',
          operator: 'fowen.pan',
          fkRuleUuid: '3e195782a4ed4091a49364c19ff421d2',
          params: '',
          iterateType: 'any',
          gmtCreate: '2023-04-26 18:29:28',
          gmtModify: '2023-04-26 18:29:28',
        },
        {
          id: 64264,
          uuid: 'd3a34a50190d4b1e857c9e2bee49805b',
          parentUuid: 'ec66362f255840a88b76684fa401aa95',
          property: 'salaxyzb_yony0uqtpw',
          op: '==',
          value: 'true',
          type: 'gaea_indicatrix',
          propertyDataType: 'BOOLEAN',
          rightValueType: 'input',
          priority: 3,
          creator: 'fowen.pan',
          operator: 'fowen.pan',
          fkRuleUuid: '3e195782a4ed4091a49364c19ff421d2',
          params: '',
          iterateType: 'any',
          gmtCreate: '2023-04-26 18:29:28',
          gmtModify: '2023-04-26 18:29:28',
        },
      ],
      iterateType: 'any',
      gmtCreate: '2023-04-26 18:29:28',
      gmtModify: '2023-04-26 18:29:28',
    },
    {
      logicOperator: '&&',
      type: 'context',
      children: [
        {
          property: 'C_B_OIGPAYMENTOWINGSTOCKOUTORNOT',
          op: 'isnull',
          value: null,
          propertyDataType: 'BOOLEAN',
          type: 'context',
          rightValueType: 'input',
          randomCount: 0.7376526231339333,
        },
      ],
    },
    {
      logicOperator: '&&',
      type: 'context',
      children: [
        {
          property: 'tianzuo_query_time_info_gen_0032',
          op: '>=',
          value: 'salaxyzb_kkif5bk54r',
          propertyDataType: 'DOUBLE',
          type: 'gaea_indicatrix',
          rightValueType: 'context',
          randomCount: 0.29755420443018266,
        },
      ],
    },
  ],
};

const Demo1 = () => {
  return (
    <RuleTree
      value={data.logicCondition} // 逻辑表达式
      rules={data.children || []} // 规则列表
      logicOperator={data.logicOperator} // 逻辑运算符
      allMap={{
        // 数据源列表
        ruleAndIndexFieldList: [
          {
            name: 'salaxyzb_yony0uqtpw',
            dName: '最近1天_当前设备ID_网贷_普通策略等_手机号_是否在前3名_xfjpw',
            apps: [
              'Pmbk',
              'xyd',
              'beck',
              'weifeng',
              'xdqd',
              'beerworld',
              'harbin',
              'WarrantyService',
              'bluegirl',
              'FS',
              'XJTH',
              'TG02',
              'TG01',
              'XJNX',
              'function',
              'TG_ATREUS',
              'sedrinclub',
              'ginsber',
              'atm',
              'GYL',
              'credit',
              'xiaodun',
              'perf',
              'TKRS',
              'XTBank_CHNL',
              'stress',
              'xinblue',
              'coupang',
              'test',
              'gyljr',
              'mobile',
              'DY01D01E01',
              'budspace',
              'hpcommunity',
              'chuanyi',
              'CCT',
              'daifu',
              'phone',
              'gbank',
            ],
            orgs: ['TongDun'],
            indexType: 'REALTIME',
            metricArea: 'RUN',
            type: 'BOOLEAN',
            source: 'SALAXY',
            selectType: 'INDEX_REALTIME',
            sourceName: '实时指标',
          },
          {
            name: 'salaxyzb_kkif5bk54r',
            dName: '最近1月同一客户经理进件次数',
            apps: [
              'stress',
              'TG02',
              'TG01',
              'test',
              'CCT',
              'XJNX',
              'function',
              'CITIC',
              'FS',
              'test_app',
            ],
            orgs: ['TongDun'],
            indexType: 'REALTIME',
            metricArea: 'RUN',
            type: 'INT',
            source: 'SALAXY',
            selectType: 'INDEX_REALTIME',
            sourceName: '实时指标',
          },
          {
            name: 'S_F_TRANSFERLIMIT',
            dName: '非同名转账日累计限额',
            type: 'DOUBLE',
            index: 0,
            enumTypeValues: [],
            systemField: true,
            selectType: 'FIELD_SYSTEM',
            sourceName: '系统字段',
          },
          {
            name: 'C_B_OIGPAYMENTOWINGSTOCKOUTORNOT',
            dName: '优合是否有已出库未结清货款订单',
            type: 'BOOLEAN',
            index: 0,
            enumTypeValues: [],
            systemField: true,
            selectType: 'FIELD_SYSTEM',
            sourceName: '系统字段',
          },
        ],
        ruleTemplateList: {
          // 规则模板列表
          'common/custom': {
            uuid: '6f9ae83a096a11ec9f3efa6532887f00',
            name: 'common/custom',
            parentUuid: '6f9af145096a11ec9f3efa6532887f00',
            advanceConfig: {},
            cfgJson: '{"description":"","type":"alias","params":[]}',
            description: '这是通用模板规则描述',
            displayName: '自定义规则',
            enDescription: 'Description of general rules.',
            enDisplayName: 'generalRule',
            gmtCreate: '2021-08-30 16:15:28',
            gmtModify: '2022-02-10 15:40:16',
            sort: 1,
            type: 1,
          },
          'pattern/terminated': {
            uuid: '6f9af776096a11ec9f3efa6532887f00',
            name: 'pattern/terminated',
            parentUuid: '6f9af279096a11ec9f3efa6532887f00',
            advanceConfig: {},
            cfgJson: '{"description":"","type":"alias","params":[]}',
            description:
              '在满足if规则的条件下，执行中断规则，则后边的规则都将不执行。Terminated与IF绑定使用，单独使用无效。',
            displayName: 'Terminated',
            enDescription:
              'Execute the Terminate Rule when IF Rule was met and rules behind will not be executed.Terminated is used in combination with if. It is invalid to use it alone.',
            enDisplayName: 'Terminate',
            gmtCreate: '2021-08-30 16:15:28',
            gmtModify: '2023-04-13 12:13:33',
            sort: 2,
            type: 1,
          },
        },
      }}
      lang={'cn'} // 语言
      showLogic={true} // 是否显示逻辑运算符
    />
  );
};
export default Demo1;
```

| 参数 | 说明   | 是否必填 | 类型   | 默认值 |
| ---- | ------ | -------- | ------ | ------ |
| data | 数据源 | 必填     | object | -      |
