/*
 * @Description: 文本对其
 * @Author: 郑泳健
 * @Date: 2022-09-16 17:04:24
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-09-19 14:27:10
 */
import React, { useMemo, useRef, memo } from 'react';
import { getTextWidth } from './utils';
import useAdjustAlign from './hooks';
import './index.less';
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
  var containerRef = useRef();
  // 计算每一项的宽度
  var widthList = useMemo(
    function () {
      return list === null || list === void 0
        ? void 0
        : list.map(function (_ref2) {
            var label = _ref2.label,
              value = _ref2.value;
            return (
              getTextWidth(label + ':', labelFontSize) +
              getTextWidth(value, valueFontSize) +
              itemSpace +
              15
            );
          });
    },
    [list],
  );

  // 获取每一列的宽度
  var columns = useAdjustAlign(widthList, containerRef, maxColumn);
  if (!Array.isArray(list)) {
    return null;
  }
  return /*#__PURE__*/ React.createElement(
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
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          key: label,
          className: 'auto-text-align-item',
          style: {
            width: width ? width + 'px' : 'auto',
            paddingRight: itemSpace,
          },
        },
        /*#__PURE__*/ React.createElement(
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
        /*#__PURE__*/ React.createElement(
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
export default /*#__PURE__*/ memo(AutoTextAlign);
