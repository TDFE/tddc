import { message, Modal } from 'antd';
import { getText } from './locale';
const DefaultConvert = {
  // 解析数据
  convert(data, I18N) {
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
  // 构造数据
  format(data, editor, noMessage = false, I18N) {
    const res = {
      flowNodeDefinitions: [],
      flowLineDefinitions: [],
    };
    const {
      graph: { node },
    } = editor;
    const { nodes = [], lines } = data;
    let errorMsgList = [];
    const nodesTypeMap = {};
    nodes.map((item, i) => {
      let { toLines, fromLines } = node.nodes[item.uuid];
      const nodeData = item.data || {};
      let data = {
        x: item.x,
        y: item.y,
        id: item.uuid,
        name: item.name,
        nodeType: item.type,
        attributes: { ...(nodeData || {}) },
        incomingFields: [],
        outgoingFields: [],
      };
      switch (item.type) {
        case 'start':
          if (toLines.size < 1) {
            errorMsgList.push(
              <p key={`1-${i}`}>
                {getText('startOutputMiss', I18N) || I18N.src.defaultdataconvert.kaiShiQueShaoShu}
              </p>,
            );
          }
          if (nodesTypeMap['start']) {
            errorMsgList.push(
              <p key={i}>
                {getText('startOutputOne', I18N) || I18N.src.defaultdataconvert.kaiShiKaiShiJie}
              </p>,
            );
          }
          nodesTypeMap['start'] = true;
          break;
        case 'end':
          if (fromLines.size < 1) {
            errorMsgList.push(
              <p key={`2-${i}`}>
                {getText('endNoInput', I18N) || I18N.src.defaultdataconvert.jieShuQueShaoShu}
              </p>,
            );
          }
          nodesTypeMap['end'] = true;
          break;
        default:
      }
      res.flowNodeDefinitions.push(data);
    });

    res.flowLineDefinitions = lines.map((item) => {
      const lineData = item?.data || {};
      const fromNode = node.nodes[item.from].data;

      let data = {
        id: item.uuid,
        fromPoint: item.fromPoint,
        toPoint: item.toPoint,
        attributes: { ...(lineData || {}) },
        sourceNodeId: item.from,
        targetNodeId: item.to,
      };
      switch (fromNode.type) {
        case 'ExclusiveGateway':
          break;

        default:
          break;
      }
      return data;
    });

    if (!noMessage && errorMsgList.length > 0) {
      const errorMsgListMap = {};
      errorMsgList = errorMsgList.filter((item) => {
        if (errorMsgListMap[item.props.children]) {
          return false;
        }
        errorMsgListMap[item.props.children] = true;
        return true;
      });
      Modal.warning({
        zIndex: 1100,
        title: getText('configErr', I18N) || I18N.src.defaultdataconvert.peiZhiBuHeFa, //
        content: <div>{errorMsgList}</div>,
      });
      return false;
    }
    if (!noMessage && res.flowNodeDefinitions.length === 0) {
      message.warn(getText('configEmpty', I18N) || I18N.src.defaultdataconvert.peiZhiBuNengWei);
      return false;
    }
    this.res = res;
    return res;
  },
};
export default DefaultConvert;
