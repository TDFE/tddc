import { message, Modal } from 'antd';
const DefaultConvert = {
  // 解析数据
  convert(data) {
    const res = {
      nodes: [],
      lines: [],
    };
    const nodesMap = {};
    const { flowNodeDefinitions = [], flowLineDefinitions = [] } = data;
    res.nodes = flowNodeDefinitions.map((item) => {
      nodesMap[item.id] = item;
      item.attributes = item.attributes || {};
      item.incomingFields = item.incomingFields || [];
      item.outgoingFields = item.outgoingFields || [];
      const node = {
        uuid: item.id,
        x: item.x,
        y: item.y,
        type: item.nodeType,
        name: item.name,
        data: {},
      };
      return node;
    });
    res.lines = flowLineDefinitions.map((item) => {
      item.attributes = item.attributes || {};
      const line = {
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
export default DefaultConvert;
