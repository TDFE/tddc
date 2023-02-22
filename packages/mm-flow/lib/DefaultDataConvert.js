'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/message/style');
var _message2 = _interopRequireDefault(require('antd/lib/message'));
require('antd/lib/modal/style');
var _modal = _interopRequireDefault(require('antd/lib/modal'));
var _react = _interopRequireDefault(require('react'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
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
  // 构造数据
  format: function format(data, editor) {
    var noMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var res = {
      flowNodeDefinitions: [],
      flowLineDefinitions: [],
    };
    var node = editor.graph.node;
    var _data$nodes = data.nodes,
      nodes = _data$nodes === void 0 ? [] : _data$nodes,
      lines = data.lines;
    var errorMsgList = [];
    var nodesTypeMap = {};
    nodes.map(function (item, i) {
      var _node$nodes$item$uuid = node.nodes[item.uuid],
        toLines = _node$nodes$item$uuid.toLines,
        fromLines = _node$nodes$item$uuid.fromLines;
      var nodeData = item.data || {};
      var data = {
        x: item.x,
        y: item.y,
        id: item.uuid,
        name: item.name,
        nodeType: item.type,
        attributes: _objectSpread({}, nodeData || {}),
        incomingFields: [],
        outgoingFields: [],
      };
      switch (item.type) {
        case 'start':
          if (toLines.size < 1) {
            errorMsgList.push(
              /*#__PURE__*/ _react.default.createElement(
                'p',
                {
                  key: '1-'.concat(i),
                },
                '[\u5F00\u59CB]\u7F3A\u5C11\u8F93\u51FA\u6D41',
              ),
            );
          }
          if (nodesTypeMap['start']) {
            errorMsgList.push(
              /*#__PURE__*/ _react.default.createElement(
                'p',
                {
                  key: i,
                },
                '[\u5F00\u59CB]\u5F00\u59CB\u8282\u70B9\u53EA\u80FD\u6709\u4E00\u4E2A',
              ),
            );
          }
          nodesTypeMap['start'] = true;
          break;
        case 'end':
          if (fromLines.size < 1) {
            errorMsgList.push(
              /*#__PURE__*/ _react.default.createElement(
                'p',
                {
                  key: '2-'.concat(i),
                },
                '[\u7ED3\u675F]\u7F3A\u5C11\u8F93\u5165\u6D41',
              ),
            );
          }
          nodesTypeMap['end'] = true;
          break;
        default:
      }
      res.flowNodeDefinitions.push(data);
    });
    res.flowLineDefinitions = lines.map(function (item) {
      var lineData = (item === null || item === void 0 ? void 0 : item.data) || {};
      var fromNode = node.nodes[item.from].data;
      var data = {
        id: item.uuid,
        fromPoint: item.fromPoint,
        toPoint: item.toPoint,
        attributes: _objectSpread({}, lineData || {}),
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
      var errorMsgListMap = {};
      errorMsgList = errorMsgList.filter(function (item) {
        if (errorMsgListMap[item.props.children]) {
          return false;
        }
        errorMsgListMap[item.props.children] = true;
        return true;
      });
      _modal.default.warning({
        zIndex: 1100,
        title: '配置不合法，原因如下：',
        //
        content: /*#__PURE__*/ _react.default.createElement('div', null, errorMsgList),
      });
      return false;
    }
    if (!noMessage && res.flowNodeDefinitions.length === 0) {
      _message2.default.warn('配置不能为空');
      return false;
    }
    this.res = res;
    return res;
  },
};
var _default = DefaultConvert;
exports.default = _default;
