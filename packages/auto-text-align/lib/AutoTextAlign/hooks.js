'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = require('react');

var _utils = require('./utils');

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
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var useAdjustAlign = function useAdjustAlign(widthList, containerRef, initColumnLen) {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    colomns = _useState2[0],
    setColomns = _useState2[1]; // 容器宽度

  var _useState3 = (0, _react.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    containerWidth = _useState4[0],
    setContainerWidth = _useState4[1];

  (0, _react.useEffect)(
    function () {
      var dom = containerRef.current;

      var getContainerWidth = function getContainerWidth() {
        var _containerRef$current, _containerRef$current2;

        var containerWidth =
          (_containerRef$current = containerRef.current) === null ||
          _containerRef$current === void 0
            ? void 0
            : (_containerRef$current2 = _containerRef$current.getBoundingClientRect()) === null ||
              _containerRef$current2 === void 0
            ? void 0
            : _containerRef$current2.width;
        setContainerWidth(containerWidth);
      };

      if (dom) {
        var _dom$getBoundingClien;

        var _containerWidth =
          dom === null || dom === void 0
            ? void 0
            : (_dom$getBoundingClien = dom.getBoundingClientRect()) === null ||
              _dom$getBoundingClien === void 0
            ? void 0
            : _dom$getBoundingClien.width;

        console.log(_containerWidth, 'containerWidth');
        setContainerWidth(_containerWidth);
      }

      window.addEventListener('resize', getContainerWidth, false);
      return function () {
        window.removeEventListener('resize', getContainerWidth, false);
      };
    },
    [containerRef],
  );
  (0, _react.useEffect)(
    function () {
      // 计算出每一列的宽度以及列数
      var column = (0, _utils.getColumnWidth)(widthList, initColumnLen, containerWidth);
      setColomns(column);
    },
    [widthList, containerRef, initColumnLen, containerWidth],
  );
  return colomns;
};

var _default = useAdjustAlign;
exports.default = _default;
