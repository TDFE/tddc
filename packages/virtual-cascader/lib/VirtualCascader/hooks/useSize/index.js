'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _resizeObserverPolyfill = _interopRequireDefault(require('resize-observer-polyfill'));
var _useRafState3 = _interopRequireDefault(require('../useRafState'));
var _domTarget = require('../utils/domTarget');
var _useIsomorphicLayoutEffectWithTarget = _interopRequireDefault(
  require('../utils/useIsomorphicLayoutEffectWithTarget'),
);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        ) {}
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function useSize(target) {
  var _useRafState = (0, _useRafState3.default)(),
    _useRafState2 = _slicedToArray(_useRafState, 2),
    state = _useRafState2[0],
    setState = _useRafState2[1];
  (0, _useIsomorphicLayoutEffectWithTarget.default)(
    function () {
      var el = (0, _domTarget.getTargetElement)(target);
      if (!el) {
        return;
      }
      var resizeObserver = new _resizeObserverPolyfill.default(function (entries) {
        entries.forEach(function (entry) {
          var _entry$target = entry.target,
            clientWidth = _entry$target.clientWidth,
            clientHeight = _entry$target.clientHeight;
          setState({
            width: clientWidth,
            height: clientHeight,
          });
        });
      });
      resizeObserver.observe(el);
      return function () {
        resizeObserver.disconnect();
      };
    },
    [],
    target,
  );
  return state;
}
var _default = useSize;
exports.default = _default;
