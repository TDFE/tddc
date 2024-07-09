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
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
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
import React, { useEffect, useRef } from 'react';
import TreeView from '@tddc/tree-view';
var Overview = function Overview(props) {
  var _window, _window$propsData;
  var data = props.data,
    options = props.options,
    _props$refs = props.refs,
    refs = _props$refs === void 0 ? {} : _props$refs,
    styleOptions = props.styleOptions,
    style = props.style;
  var treeData =
    ((_window = window) === null || _window === void 0
      ? void 0
      : (_window$propsData = _window.propsData) === null || _window$propsData === void 0
      ? void 0
      : _window$propsData.data) || data;
  var container = useRef();
  var tree = useRef();
  useEffect(function () {
    tree.current = TreeView();
    refs.current = tree.current;
    var params = {
      options: options,
      styleOptions: styleOptions,
      refs: refs,
      container: container.current,
    };
    tree.current.init(params);
  }, []);
  useEffect(
    function () {
      tree.current.setData(treeData);
    },
    [treeData],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      id: 'tree',
      style: _objectSpread({}, style),
    },
    /*#__PURE__*/ React.createElement('div', {
      ref: container,
      style: {
        transformOrigin: '0 0',
      },
    }),
  );
};
export default Overview;
