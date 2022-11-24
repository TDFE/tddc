'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = require('react');
var _createEffectWithTarget = _interopRequireDefault(require('./createEffectWithTarget'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var useEffectWithTarget = (0, _createEffectWithTarget.default)(_react.useLayoutEffect);
var _default = useEffectWithTarget;
exports.default = _default;
