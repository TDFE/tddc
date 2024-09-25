import _Button from 'tntd/es/button';
import _Ellipsis from 'tntd/es/ellipsis';
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
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
import React from 'react';
import './index.less';
import { NODE_TYPE_MAP } from '../constants';
import SVGImage from '../components/SVGImage';
import { colorRgb } from './utils';
import Cookies from 'universal-cookie';
var cookies = new Cookies();
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
    name = /*#__PURE__*/ React.createElement(_Ellipsis, {
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
  var ele = /*#__PURE__*/ React.createElement(
    'div',
    {
      style: style,
      className: 'root',
    },
    /*#__PURE__*/ React.createElement(_Ellipsis, {
      key: String(x) + y + rootName,
      title: rootName,
      placement: 'right',
      widthLimit: 100,
      lines: 3,
    }),
  );
  var textObj = {
    text: (NODE_TYPE_MAP[nodeType] && NODE_TYPE_MAP[nodeType][lang]) || 'cn',
    color: NODE_TYPE_MAP[nodeType] && NODE_TYPE_MAP[nodeType]['color'],
  };
  // 类型 节点
  var ele1 = /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'relation-node node',
      style: _objectSpread(
        _objectSpread({}, style),
        {},
        {
          borderColor: colorRgb(textObj.color, 0.4),
          background: colorRgb(textObj.color, 0.1),
        },
      ),
    },
    /*#__PURE__*/ React.createElement(SVGImage, {
      text: textObj.text,
      bgColor: textObj.color,
    }),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 's1',
        title: nodeName,
      },
      nodeName,
      /*#__PURE__*/ React.createElement(
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
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'relation-u-minus',
        onClick: function onClick() {
          nodeToggle(data);
        },
      },
      /*#__PURE__*/ React.createElement('img', {
        alt: '',
        src: isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg'),
      }),
    ),
  );

  // 实例 结点
  var ele2 = /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement('span', {
      className: 'dot',
      style: {
        background: color,
      },
    }),
    isChildPolicy &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: 'child-policy',
        },
        '子',
      ),
    /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: 's1',
        },
        name,
      ),
      showEye &&
        /*#__PURE__*/ React.createElement(
          'span',
          {
            id: props.id,
            className: 'hidden-eye eye',
            onClick: function onClick() {
              onEyeClick && onEyeClick(data);
            },
          },
          /*#__PURE__*/ React.createElement(_Button, {
            icon: 'eye',
          }),
        ),
    ),
    nums &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: 'leaf-u-minus',
          onClick: function onClick() {
            nodeToggle(data);
          },
        },
        /*#__PURE__*/ React.createElement('img', {
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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'node',
    },
    dom,
  );
};
export default Node;
