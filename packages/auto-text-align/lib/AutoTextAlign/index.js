'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _utils = require('./utils');
var _hooks = _interopRequireDefault(require('./hooks'));
require('./index.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
/*
 * @Description: 文本对其
 * @Author: 郑泳健
 * @Date: 2022-09-16 17:04:24
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-09-19 14:27:10
 */

var AutoTextAlign = function AutoTextAlign(_ref) {
  var list = _ref.list,
    _ref$labelFontSize = _ref.labelFontSize,
    labelFontSize = _ref$labelFontSize === void 0 ? '12px' : _ref$labelFontSize,
    _ref$valueFontSize = _ref.valueFontSize,
    valueFontSize = _ref$valueFontSize === void 0 ? '14px' : _ref$valueFontSize,
    _ref$itemSpace = _ref.itemSpace,
    itemSpace = _ref$itemSpace === void 0 ? 8 : _ref$itemSpace,
    _ref$maxColumn = _ref.maxColumn,
    maxColumn = _ref$maxColumn === void 0 ? 10 : _ref$maxColumn;
  var containerRef = (0, _react.useRef)();
  // 计算每一项的宽度
  var widthList = (0, _react.useMemo)(
    function () {
      return list === null || list === void 0
        ? void 0
        : list.map(function (_ref2) {
            var label = _ref2.label,
              value = _ref2.value;
            return (
              (0, _utils.getTextWidth)(label + ':', labelFontSize) +
              (0, _utils.getTextWidth)(value, valueFontSize) +
              itemSpace +
              15
            );
          });
    },
    [list],
  );

  // 获取每一列的宽度
  var columns = (0, _hooks.default)(widthList, containerRef, maxColumn);
  if (!Array.isArray(list)) {
    return null;
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      ref: containerRef,
      className: 'auto-text-align-wrapper',
    },
    list.map(function (_ref3, index) {
      var label = _ref3.label,
        value = _ref3.value;
      var width =
        columns[index % (columns === null || columns === void 0 ? void 0 : columns.length)];
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          key: label,
          className: 'auto-text-align-item',
          style: {
            width: width ? width + 'px' : 'auto',
            paddingRight: itemSpace,
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'auto-text-align-label',
            style: {
              fontSize: labelFontSize,
            },
          },
          label,
          ':',
        ),
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'auto-text-align-value',
            style: {
              fontSize: valueFontSize,
            },
          },
          value,
        ),
      );
    }),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(AutoTextAlign);
exports.default = _default;
