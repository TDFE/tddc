'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _button = _interopRequireDefault(require('tntd/es/button'));
var _ellipsis = _interopRequireDefault(require('tntd/es/ellipsis'));
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _react = _interopRequireDefault(require('react'));
var _I18N = _interopRequireWildcard(require('./I18N'));
require('./index.less');
var _constants = require('../constants');
var _SVGImage = _interopRequireDefault(require('../components/SVGImage'));
var _utils = require('./utils');
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t2 in e)
      'default' !== _t2 &&
        {}.hasOwnProperty.call(e, _t2) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) &&
        (i.get || i.set)
          ? o(f, _t2, i)
          : (f[_t2] = e[_t2]));
    return f;
  })(e, t);
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
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
var cookies = new _universalCookie['default']();
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
    name = /*#__PURE__*/ _react['default'].createElement(_ellipsis['default'], {
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
  var ele = /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      style: style,
      className: 'root',
    },
    /*#__PURE__*/ _react['default'].createElement(_ellipsis['default'], {
      key: String(x) + y + rootName,
      title: rootName,
      placement: 'right',
      widthLimit: 100,
      lines: 3,
    }),
  );
  var textObj = {
    text: (_constants.NODE_[locale][nodeType] && _constants.NODE_[locale][nodeType][lang]) || 'cn',
    color: _constants.NODE_[locale][nodeType] && _constants.NODE_[locale][nodeType]['color'],
  };
  // 类型 节点
  var ele1 = /*#__PURE__*/ _react['default'].createElement(
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
    /*#__PURE__*/ _react['default'].createElement(_SVGImage['default'], {
      text: textObj.text,
      bgColor: textObj.color,
    }),
    /*#__PURE__*/ _react['default'].createElement(
      'span',
      {
        className: 's1',
        title: nodeName,
      },
      nodeName,
      /*#__PURE__*/ _react['default'].createElement(
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
    /*#__PURE__*/ _react['default'].createElement(
      'span',
      {
        className: 'relation-u-minus',
        onClick: function onClick() {
          nodeToggle(data);
        },
      },
      /*#__PURE__*/ _react['default'].createElement('img', {
        alt: '',
        src: isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg'),
      }),
    ),
  );

  // 实例 结点
  var ele2 = /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement('span', {
      className: 'dot',
      style: {
        background: color,
      },
    }),
    isChildPolicy &&
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'child-policy',
        },
        I18N.node.index.zi,
      ),
    /*#__PURE__*/ _react['default'].createElement(
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
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 's1',
        },
        name,
      ),
      showEye &&
        /*#__PURE__*/ _react['default'].createElement(
          'span',
          {
            id: props.id,
            className: 'hidden-eye eye',
            onClick: function onClick() {
              onEyeClick && onEyeClick(data);
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_button['default'], {
            icon: 'eye',
          }),
        ),
    ),
    nums &&
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'leaf-u-minus',
          onClick: function onClick() {
            nodeToggle(data);
          },
        },
        /*#__PURE__*/ _react['default'].createElement('img', {
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
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: 'node',
    },
    dom,
  );
};
var _default = (exports['default'] = Node);
