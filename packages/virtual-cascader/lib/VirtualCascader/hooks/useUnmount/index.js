'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = require('react');
var _useLatest = _interopRequireDefault(require('../useLatest'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var useUnmount = function useUnmount(fn) {
  var fnRef = (0, _useLatest.default)(fn);
  (0, _react.useEffect)(function () {
    return function () {
      fnRef.current();
    };
  }, []);
};
var _default = useUnmount;
exports.default = _default;
