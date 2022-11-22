'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = require('react');
var _useUnmount = _interopRequireDefault(require('../useUnmount'));
var _depsAreSame = _interopRequireDefault(require('./depsAreSame'));
var _domTarget = require('./domTarget');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var createEffectWithTarget = function createEffectWithTarget(useEffectType) {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  var useEffectWithTarget = function useEffectWithTarget(effect, deps, target) {
    var hasInitRef = (0, _react.useRef)(false);
    var lastElementRef = (0, _react.useRef)([]);
    var lastDepsRef = (0, _react.useRef)([]);
    var unLoadRef = (0, _react.useRef)();
    useEffectType(function () {
      var targets = Array.isArray(target) ? target : [target];
      var els = targets.map(function (item) {
        return (0, _domTarget.getTargetElement)(item);
      });
      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }
      if (
        els.length !== lastElementRef.current.length ||
        !(0, _depsAreSame.default)(els, lastElementRef.current) ||
        !(0, _depsAreSame.default)(deps, lastDepsRef.current)
      ) {
        var _unLoadRef$current;
        (_unLoadRef$current = unLoadRef.current) === null || _unLoadRef$current === void 0
          ? void 0
          : _unLoadRef$current.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    (0, _useUnmount.default)(function () {
      var _unLoadRef$current2;
      (_unLoadRef$current2 = unLoadRef.current) === null || _unLoadRef$current2 === void 0
        ? void 0
        : _unLoadRef$current2.call(unLoadRef);
      // for react-refresh
      hasInitRef.current = false;
    });
  };
  return useEffectWithTarget;
};
var _default = createEffectWithTarget;
exports.default = _default;
