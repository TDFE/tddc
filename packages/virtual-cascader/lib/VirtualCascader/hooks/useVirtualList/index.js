'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = require('react');
var _useEventListener = _interopRequireDefault(require('../useEventListener'));
var _useLatest = _interopRequireDefault(require('../useLatest'));
var _useMemoizedFn = _interopRequireDefault(require('../useMemoizedFn'));
var _useSize = _interopRequireDefault(require('../useSize'));
var _domTarget = require('../utils/domTarget');
var _utils = require('../utils');
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
var useVirtualList = function useVirtualList(list, options) {
  var containerTarget = options.containerTarget,
    wrapperTarget = options.wrapperTarget,
    itemHeight = options.itemHeight,
    _options$overscan = options.overscan,
    overscan = _options$overscan === void 0 ? 5 : _options$overscan;
  var itemHeightRef = (0, _useLatest.default)(itemHeight);
  var size = (0, _useSize.default)(containerTarget);
  var scrollTriggerByScrollToFunc = (0, _react.useRef)(false);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    targetList = _useState2[0],
    setTargetList = _useState2[1];
  var getVisibleCount = function getVisibleCount(containerHeight, fromIndex) {
    if ((0, _utils.isNumber)(itemHeightRef.current)) {
      return Math.ceil(containerHeight / itemHeightRef.current);
    }
    var sum = 0;
    var endIndex = 0;
    for (var i = fromIndex; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;
      endIndex = i;
      if (sum >= containerHeight) {
        break;
      }
    }
    return endIndex - fromIndex;
  };
  var getOffset = function getOffset(scrollTop) {
    if ((0, _utils.isNumber)(itemHeightRef.current)) {
      return Math.floor(scrollTop / itemHeightRef.current) + 1;
    }
    var sum = 0;
    var offset = 0;
    for (var i = 0; i < list.length; i++) {
      var height = itemHeightRef.current(i, list[i]);
      sum += height;
      if (sum >= scrollTop) {
        offset = i;
        break;
      }
    }
    return offset + 1;
  };
  // 获取上部高度
  var getDistanceTop = function getDistanceTop(index) {
    if ((0, _utils.isNumber)(itemHeightRef.current)) {
      var _height = index * itemHeightRef.current;
      return _height;
    }
    var height = list.slice(0, index).reduce(function (sum, _, i) {
      return sum + itemHeightRef.current(i, list[i]);
    }, 0);
    return height;
  };
  var totalHeight = (0, _react.useMemo)(
    function () {
      if ((0, _utils.isNumber)(itemHeightRef.current)) {
        return list.length * itemHeightRef.current;
      }
      return list.reduce(function (sum, _, index) {
        return sum + itemHeightRef.current(index, list[index]);
      }, 0);
    },
    [list],
  );
  var calculateRange = function calculateRange() {
    var container = (0, _domTarget.getTargetElement)(containerTarget);
    var wrapper = (0, _domTarget.getTargetElement)(wrapperTarget);
    if (container && wrapper) {
      var scrollTop = container.scrollTop,
        clientHeight = container.clientHeight;
      var offset = getOffset(scrollTop);
      var visibleCount = getVisibleCount(clientHeight, offset);
      var start = Math.max(0, offset - overscan);
      var end = Math.min(list.length, offset + visibleCount + overscan);
      var offsetTop = getDistanceTop(start);
      wrapper.style.height = totalHeight - offsetTop + 'px';
      wrapper.style.marginTop = offsetTop + 'px';
      setTargetList(
        list.slice(start, end).map(function (ele, index) {
          return {
            data: ele,
            index: index + start,
          };
        }),
      );
    }
  };
  (0, _react.useEffect)(
    function () {
      if (
        !(size === null || size === void 0 ? void 0 : size.width) ||
        !(size === null || size === void 0 ? void 0 : size.height)
      ) {
        return;
      }
      calculateRange();
    },
    [
      size === null || size === void 0 ? void 0 : size.width,
      size === null || size === void 0 ? void 0 : size.height,
      list,
    ],
  );
  (0, _useEventListener.default)(
    'scroll',
    function (e) {
      if (scrollTriggerByScrollToFunc.current) {
        scrollTriggerByScrollToFunc.current = false;
        return;
      }
      e.preventDefault();
      calculateRange();
    },
    {
      target: containerTarget,
    },
  );
  var scrollTo = function scrollTo(index) {
    var container = (0, _domTarget.getTargetElement)(containerTarget);
    if (container) {
      scrollTriggerByScrollToFunc.current = true;
      container.scrollTop = getDistanceTop(index);
      calculateRange();
    }
  };
  return [targetList, (0, _useMemoizedFn.default)(scrollTo)];
};
var _default = useVirtualList;
exports.default = _default;
