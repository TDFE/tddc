'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.defaultIconPrefixCls = exports.ConfigContext = exports.ConfigConsumer = void 0;
var _react = _interopRequireDefault(require('react'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? 'tntd-'.concat(suffixCls) : 'tntd';
};
var defaultIconPrefixCls = 'anticon';
// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.
exports.defaultIconPrefixCls = defaultIconPrefixCls;
var ConfigContext = /*#__PURE__*/ _react.default.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;
