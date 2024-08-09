import { message, Modal } from 'tntd';
import { getText } from './locale';
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
  // 构造数据
  format(data, editor, noMessage = false) {
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
              <p key={`1-${i}`}>{getText('startOutputMiss') || '[开始]缺少输出流'}</p>,
            );
          }
          if (nodesTypeMap['start']) {
            errorMsgList.push(
              <p key={i}>{getText('startOutputOne') || '[开始]开始节点只能有一个'}</p>,
            );
          }
          nodesTypeMap['start'] = true;
          break;
        case 'end':
          if (fromLines.size < 1) {
            errorMsgList.push(<p key={`2-${i}`}>{getText('endNoInput') || '[结束]缺少输入流'}</p>);
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
        title: getText('configErr') || '配置不合法，原因如下：', //
        content: <div>{errorMsgList}</div>,
      });
      return false;
    }
    if (!noMessage && res.flowNodeDefinitions.length === 0) {
      message.warn(getText('configEmpty') || '配置不能为空');
      return false;
    }
    this.res = res;
    return res;
  },
};
export default DefaultConvert;
