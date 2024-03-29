'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
Object.defineProperty(exports, 'iconList', {
  enumerable: true,
  get: function get() {
    return _iconList.default;
  },
});
var _react = _interopRequireDefault(require('react'));
require('./fonts/iconfont');
require('./index.less');
var _iconList = _interopRequireDefault(require('./iconList'));
var _excluded = ['type', 'prefix', 'className'];
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var _default = function _default(_ref) {
  var type = _ref.type,
    _ref$prefix = _ref.prefix,
    prefix = _ref$prefix === void 0 ? 'tnt-' : _ref$prefix,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/ _react.default.createElement(
    'i',
    _extends(
      {
        className: 'tnt-icon '.concat(className),
        type: type,
      },
      props,
    ),
    /*#__PURE__*/ _react.default.createElement(
      'svg',
      {
        'aria-hidden': 'true',
      },
      /*#__PURE__*/ _react.default.createElement('use', {
        xlinkHref: '#'.concat(prefix).concat(type),
      }),
    ),
  );
};
exports.default = _default;
