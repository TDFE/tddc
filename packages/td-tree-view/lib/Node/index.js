'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
require('./index.less');
var _tntd = require('tntd');
var _constants = require('../constants');
var _SVGImage = _interopRequireDefault(require('../components/SVGImage'));
var _utils = require('./utils');
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
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
var cookies = new _universalCookie.default();
var Node = function Node(props) {
  var _data$children, _data$_children, _data$_children2;
  var lang = cookies.get('lang') || 'cn';
  var node = props.node,
    nodeToggle = props.nodeToggle,
    nodeStyle = props.nodeStyle,
    constants = props.constants,
    _props$showEye = props.showEye,
    showEye = _props$showEye === void 0 ? true : _props$showEye,
    onEyeClick = props.onEyeClick,
    _onClick = props.onClick,
    fixed = props.fixed;
  var RELATION_WIDTH = constants.RELATION_WIDTH;
  var data = node.data,
    x = node.x,
    y = node.y,
    parent = node.parent;
  var _ref = data || {},
    nodeType = _ref.nodeType,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? '' : _ref$color,
    isGroupItem = _ref.isGroupItem,
    nodeName = _ref.nodeName,
    componentTag = _ref.componentTag;
  var isChildPolicy = componentTag === 'children';
  var nums =
    (data === null || data === void 0
      ? void 0
      : (_data$children = data.children) === null || _data$children === void 0
      ? void 0
      : _data$children.length) ||
    (data === null || data === void 0
      ? void 0
      : (_data$_children = data._children) === null || _data$_children === void 0
      ? void 0
      : _data$_children.length);
  var isExpan =
    data === null || data === void 0
      ? void 0
      : (_data$_children2 = data._children) === null || _data$_children2 === void 0
      ? void 0
      : _data$_children2.length;
  var style = _objectSpread(
    {
      minWidth: RELATION_WIDTH,
    },
    nodeStyle,
  );
  var rootName = '';
  if (!parent) {
    rootName = nodeName.length > 23 ? nodeName.substr(0, 23) + '...' : nodeName;
  }
  var name = nodeName;
  if (fixed) {
    name = /*#__PURE__*/ _react.default.createElement(_tntd.Ellipsis, {
      key: String(x) + y + nodeName,
      title: nodeName,
      placement: 'right',
      widthLimit: 110,
    });
  }

  // 节点鼠标进入事件
  var itemMouseEnter = function itemMouseEnter(data, id) {
    var dom = document.getElementById(id);
    dom.classList.remove('hidden-eye');
  };

  // 节点鼠标移出事件
  var itemMouseLeave = function itemMouseLeave(data, id) {
    var dom = document.getElementById(id);
    dom.classList.add('hidden-eye');
  };
  var ele = /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      style: style,
      className: 'root',
    },
    /*#__PURE__*/ _react.default.createElement(_tntd.Ellipsis, {
      key: String(x) + y + rootName,
      title: rootName,
      placement: 'right',
      widthLimit: 100,
      lines: 3,
    }),
  );
  var textObj = {
    text: (_constants.NODE_TYPE_MAP[nodeType] && _constants.NODE_TYPE_MAP[nodeType][lang]) || 'cn',
    color: _constants.NODE_TYPE_MAP[nodeType] && _constants.NODE_TYPE_MAP[nodeType]['color'],
  };
  // 类型 节点
  var ele1 = /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'relation-node node',
      style: _objectSpread(
        _objectSpread({}, style),
        {},
        {
          borderColor: (0, _utils.colorRgb)(textObj.color, 0.4),
          background: (0, _utils.colorRgb)(textObj.color, 0.1),
        },
      ),
    },
    /*#__PURE__*/ _react.default.createElement(_SVGImage.default, {
      text: textObj.text,
      bgColor: textObj.color,
    }),
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 's1',
        title: nodeName,
      },
      nodeName,
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          style: {
            color: color,
          },
        },
        '(',
        nums,
        ')',
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'relation-u-minus',
        onClick: function onClick() {
          nodeToggle(data);
        },
      },
      /*#__PURE__*/ _react.default.createElement('img', {
        alt: '',
        src: isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg'),
      }),
    ),
  );

  // 实例 结点
  var ele2 = /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement('span', {
      className: 'dot',
      style: {
        background: color,
      },
    }),
    isChildPolicy &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'child-policy',
        },
        '子',
      ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'leaf-node',
        style: style,
        onClick: function onClick() {
          _onClick && _onClick(data);
        },
        onMouseEnter: function onMouseEnter() {
          showEye && itemMouseEnter(data, props.id);
        },
        onMouseLeave: function onMouseLeave() {
          showEye && itemMouseLeave(data, props.id);
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 's1',
        },
        name,
      ),
      showEye &&
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            id: props.id,
            className: 'hidden-eye eye',
            onClick: function onClick() {
              onEyeClick && onEyeClick(data);
            },
          },
          /*#__PURE__*/ _react.default.createElement(_tntd.Button, {
            icon: 'eye',
          }),
        ),
    ),
    nums &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'leaf-u-minus',
          onClick: function onClick() {
            nodeToggle(data);
          },
        },
        /*#__PURE__*/ _react.default.createElement('img', {
          alt: '',
          src: isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg'),
        }),
      ),
  );
  var dom = null;
  if (!parent) {
    dom = ele;
  } else {
    dom = isGroupItem ? ele1 : ele2;
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'node',
    },
    dom,
  );
};
var _default = Node;
exports.default = _default;
