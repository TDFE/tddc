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
