import _Tooltip from 'tntd/es/tooltip';
var _excluded = ['data', 'showSourceName', 'bool', 'inputValue'];
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
import React from 'react';
/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
import './index.less';
var TYPE_MAP = {
  INT: {
    displayName: '整数',
    color: '#5262C7',
  },
  DOUBLE: {
    displayName: '小数',
    color: '#00D2C2',
  },
  STRING: {
    displayName: '字符',
    color: '#826AF9',
  },
  ENUM: {
    displayName: '枚举',
    color: '#00C5DC',
  },
  BOOLEAN: {
    displayName: '布尔',
    color: '#4A9AF7',
  },
  DATETIME: {
    displayName: '日期',
    color: '#826AF9',
  },
  INTEGER: {
    displayName: '整数',
    color: '#5262C7',
  },
  FLOAT: {
    displayName: '小数',
    color: '#00D2C2',
  },
  BOOL: {
    displayName: '布尔',
    color: '#4A9AF7',
  },
  DATE: {
    displayName: '日期',
    color: '#826AF9',
  },
  ARRAY: {
    displayName: '数组',
    color: '#00D2C2',
  },
};
var Tag = function Tag(props) {
  var _props$data = props.data,
    data = _props$data === void 0 ? {} : _props$data,
    _props$showSourceName = props.showSourceName,
    showSourceName = _props$showSourceName === void 0 ? true : _props$showSourceName,
    _props$bool = props.bool,
    bool = _props$bool === void 0 ? true : _props$bool,
    inputValue = props.inputValue,
    rest = _objectWithoutProperties(props, _excluded);
  var showImg = false;
  var filedType;
  var dataTypeObj = {};
  var status =
    (data === null || data === void 0 ? void 0 : data.status) ||
    (data === null || data === void 0 ? void 0 : data.ruleSetStatus);
  (data === null || data === void 0 ? void 0 : data.metricArea) &&
    data.metricArea === 'EDIT' &&
    (showImg = true); // 指标显示导入待提交
  status === 'import_wait_commit' && (showImg = true); // 规则集显示导入待提交

  if (bool) {
    filedType = data.dataType || data.datatype || data.type || '';
    dataTypeObj = TYPE_MAP[filedType.toUpperCase()] ? TYPE_MAP[filedType.toUpperCase()] : {}; // 字段和指标的类型和颜色
  }
  return /*#__PURE__*/ React.createElement(
    'div',
    _extends(
      {
        className: 'td-tag',
      },
      rest,
      {
        style: {
          lineHeight: '22px',
        },
      },
    ),
    bool &&
      !inputValue &&
      /*#__PURE__*/ React.createElement(
        'sup',
        {
          style: {
            color: dataTypeObj.color,
          },
        },
        dataTypeObj.displayName,
        ' ',
      ),
    showImg &&
      /*#__PURE__*/ React.createElement(
        _Tooltip,
        {
          title: '导入待提交',
          placement: 'top',
        },
        /*#__PURE__*/ React.createElement('img', {
          src: require('./imgs/import_export.svg'),
          className: 'tag-img',
        }),
      ),
    showSourceName && '['.concat(data === null || data === void 0 ? void 0 : data.sourceName, ']'),
  );
};
export default Tag;
