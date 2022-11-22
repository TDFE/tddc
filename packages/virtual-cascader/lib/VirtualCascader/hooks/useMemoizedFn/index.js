'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = require('react');
function useMemoizedFn(fn) {
  var fnRef = (0, _react.useRef)(fn);
  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = (0, _react.useMemo)(
    function () {
      return fn;
    },
    [fn],
  );
  var memoizedFn = (0, _react.useRef)();
  if (!memoizedFn.current) {
    memoizedFn.current = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return fnRef.current.apply(this, args);
    };
  }
  return memoizedFn.current;
}
var _default = useMemoizedFn;
exports.default = _default;
