import _Tooltip from 'tntd/es/tooltip';
var _excluded = ['data', 'showSourceName', 'bool', 'inputValue'];
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
  return t;
}
import React from 'react';
/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
import Cookies from 'universal-cookie';
import './index.less';
var TYPE_MAP = {
  INT: {
    displayName: '整数',
    enDisplayName: 'Integer',
    color: '#5262C7',
  },
  DOUBLE: {
    displayName: '小数',
    enDisplayName: 'Float',
    color: '#00D2C2',
  },
  STRING: {
    displayName: '字符',
    enDisplayName: 'String',
    color: '#826AF9',
  },
  ENUM: {
    displayName: '枚举',
    enDisplayName: 'Enum',
    color: '#00C5DC',
  },
  BOOLEAN: {
    displayName: '布尔',
    enDisplayName: 'Boolean',
    color: '#4A9AF7',
  },
  DATETIME: {
    displayName: '日期',
    enDisplayName: 'Date',
    color: '#826AF9',
  },
  INTEGER: {
    displayName: '整数',
    enDisplayName: 'Integer',
    color: '#5262C7',
  },
  FLOAT: {
    displayName: '小数',
    enDisplayName: 'Float',
    color: '#00D2C2',
  },
  BOOL: {
    displayName: '布尔',
    enDisplayName: 'Boolean',
    color: '#4A9AF7',
  },
  DATE: {
    displayName: '日期',
    enDisplayName: 'Date',
    color: '#826AF9',
  },
  ARRAY: {
    displayName: '数组',
    enDisplayName: 'Array',
    color: '#00D2C2',
  },
};
var cookies = new Cookies();
export var getLang = function getLang() {
  return cookies.get('lang') || 'cn';
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
  var lang = getLang();
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
        lang === 'en' ? dataTypeObj.enDisplayName : dataTypeObj.displayName,
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
