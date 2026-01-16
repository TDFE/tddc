'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _react = _interopRequireWildcard(require('react'));
var _I18N = _interopRequireWildcard(require('../I18N'));
var _treeView = _interopRequireDefault(require('@tddc/tree-view'));
var _LocaleReceiver = _interopRequireDefault(require('antd/es/locale-provider/LocaleReceiver'));
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
  var container = (0, _react.useRef)();
  var tree = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    tree.current = (0, _treeView['default'])();
    refs.current = tree.current;
    var params = {
      options: options,
      styleOptions: styleOptions,
      refs: refs,
      container: container.current,
    };
    tree.current.init(params);
  }, []);
  (0, _react.useEffect)(
    function () {
      tree.current.setData(treeData);
    },
    [treeData],
  );
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      id: 'tree',
      style: _objectSpread({}, style),
    },
    /*#__PURE__*/ _react['default'].createElement('div', {
      ref: container,
      style: {
        transformOrigin: '0 0',
      },
    }),
  );
};
var _default = (exports['default'] = function _default(props) {
  return /*#__PURE__*/ _react['default'].createElement(
    _LocaleReceiver['default'],
    {
      componentName: 'TdTreeView',
    },
    function (locale, localeCode) {
      var I18N = !!Object.keys(locale).length
        ? locale
        : _I18N['default'][localeCode] || _I18N['default'][(0, _I18N.getLang)()];
      return /*#__PURE__*/ _react['default'].createElement(
        Overview,
        (0, _extends2['default'])({}, props, {
          locale: I18N,
          lang: localeCode || (0, _I18N.getLang)(),
        }),
      );
    },
  );
});
