'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _tdTreeView = _interopRequireDefault(require('@tddc/td-tree-view'));
var _react = _interopRequireWildcard(require('react'));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Demo = function Demo() {
  var treeData = {
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
  var formatTreeData = function formatTreeData(data) {
    if (data.children && data.children.length) {
      data.children = data.children.map(function (item) {
        item.nodeType = item.componentType;
        item.nodeName = item.componentName;
        return formatTreeData(item);
      });
    }
    data.nodeType = data.componentType;
    data.nodeName = data.componentName;
    return data;
  };
  (0, _react.useEffect)(function () {
    treeData = formatTreeData(treeData);
  }, []);
  return /*#__PURE__*/ _react.default.createElement(_tdTreeView.default, {
    data: treeData,
  });
};
var _default = Demo;
exports.default = _default;
