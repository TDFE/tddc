'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _tooltip = _interopRequireDefault(require('tntd/es/tooltip'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);
var _react = _interopRequireDefault(require('react'));
require('./index.less');
var _excluded = ['data', 'showSourceName', 'bool', 'inputValue', 'locale'];
/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
var TYPE_MAP = function TYPE_MAP(I18N) {
  if (!I18N) {
    return {};
  }
  return {
    INT: {
      displayName: I18N.cascadertag.index.zhengShu,
      enDisplayName: 'Integer',
      color: '#5262C7',
    },
    DOUBLE: {
      displayName: I18N.cascadertag.index.xiaoShu,
      enDisplayName: 'Float',
      color: '#00D2C2',
    },
    STRING: {
      displayName: I18N.cascadertag.index.ziFu,
      enDisplayName: 'String',
      color: '#826AF9',
    },
    ENUM: {
      displayName: I18N.cascadertag.index.meiJu,
      enDisplayName: 'Enum',
      color: '#00C5DC',
    },
    BOOLEAN: {
      displayName: I18N.cascadertag.index.buEr,
      enDisplayName: 'Boolean',
      color: '#4A9AF7',
    },
    DATETIME: {
      displayName: I18N.cascadertag.index.riQi,
      enDisplayName: 'Date',
      color: '#826AF9',
    },
    INTEGER: {
      displayName: I18N.cascadertag.index.zhengShu,
      enDisplayName: 'Integer',
      color: '#5262C7',
    },
    FLOAT: {
      displayName: I18N.cascadertag.index.xiaoShu,
      enDisplayName: 'Float',
      color: '#00D2C2',
    },
    BOOL: {
      displayName: I18N.cascadertag.index.buEr,
      enDisplayName: 'Boolean',
      color: '#4A9AF7',
    },
    DATE: {
      displayName: I18N.cascadertag.index.riQi,
      enDisplayName: 'Date',
      color: '#826AF9',
    },
    ARRAY: {
      displayName: I18N.cascadertag.index.shuZu,
      enDisplayName: 'Array',
      color: '#00D2C2',
    },
  };
};
var Tag = function Tag(props) {
  var _props$data = props.data,
    data = _props$data === void 0 ? {} : _props$data,
    _props$showSourceName = props.showSourceName,
    showSourceName = _props$showSourceName === void 0 ? true : _props$showSourceName,
    _props$bool = props.bool,
    bool = _props$bool === void 0 ? true : _props$bool,
    inputValue = props.inputValue,
    I18N = props.locale,
    rest = (0, _objectWithoutProperties2['default'])(props, _excluded);
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
    dataTypeObj = TYPE_MAP(I18N)[filedType.toUpperCase()]
      ? TYPE_MAP(I18N)[filedType.toUpperCase()]
      : {}; // 字段和指标的类型和颜色
  }
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    (0, _extends2['default'])(
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
      /*#__PURE__*/ _react['default'].createElement(
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
      /*#__PURE__*/ _react['default'].createElement(
        _tooltip['default'],
        {
          title: I18N.cascadertag.index.daoRuDaiTiJiao,
          placement: 'top',
        },
        /*#__PURE__*/ _react['default'].createElement('img', {
          src: require('./imgs/import_export.svg'),
          className: 'tag-img',
        }),
      ),
    showSourceName &&
      !!(data === null || data === void 0 ? void 0 : data.sourceName) &&
      '['.concat(data === null || data === void 0 ? void 0 : data.sourceName, ']'),
  );
};
var _default = (exports['default'] = Tag);
