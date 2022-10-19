'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var DefaultConvert = {
  // 解析数据
  convert: function convert(data) {
    var res = {
      nodes: [],
      lines: [],
    };
    var nodesMap = {};
    var _data$flowNodeDefinit = data.flowNodeDefinitions,
      flowNodeDefinitions = _data$flowNodeDefinit === void 0 ? [] : _data$flowNodeDefinit,
      _data$flowLineDefinit = data.flowLineDefinitions,
      flowLineDefinitions = _data$flowLineDefinit === void 0 ? [] : _data$flowLineDefinit;
    res.nodes = flowNodeDefinitions.map(function (item) {
      nodesMap[item.id] = item;
      item.attributes = item.attributes || {};
      item.incomingFields = item.incomingFields || [];
      item.outgoingFields = item.outgoingFields || [];
      var node = {
        uuid: item.id,
        x: item.x,
        y: item.y,
        type: item.nodeType,
        name: item.name,
        data: {},
      };
      return node;
    });
    res.lines = flowLineDefinitions.map(function (item) {
      item.attributes = item.attributes || {};
      var line = {
        uuid: item.id,
        fromPoint: item.fromPoint,
        toPoint: item.toPoint,
        data: {},
        from: item.sourceNodeId,
        to: item.targetNodeId,
      };
      return line;
    });
    return res;
  },
};
var _default = DefaultConvert;
exports.default = _default;
