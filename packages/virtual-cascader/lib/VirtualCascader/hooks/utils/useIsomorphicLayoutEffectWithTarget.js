'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _isBrowser = _interopRequireDefault(require('./isBrowser'));
var _useEffectWithTarget = _interopRequireDefault(require('./useEffectWithTarget'));
var _useLayoutEffectWithTarget = _interopRequireDefault(require('./useLayoutEffectWithTarget'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var useIsomorphicLayoutEffectWithTarget = _isBrowser.default
  ? _useLayoutEffectWithTarget.default
  : _useEffectWithTarget.default;
var _default = useIsomorphicLayoutEffectWithTarget;
exports.default = _default;
