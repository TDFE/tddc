'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.filterAvailableFieldList = exports.dataTypeSpecialConvert = void 0;
var _locale = _interopRequireDefault(require('../locale.js'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
// 授权过滤ruleAndIndexFieldList

var filterAvailableFieldList = function filterAvailableFieldList(_ref) {
  var _ref$ruleAndIndexFiel = _ref.ruleAndIndexFieldList,
    ruleAndIndexFieldList = _ref$ruleAndIndexFiel === void 0 ? {} : _ref$ruleAndIndexFiel,
    appCode = _ref.appCode,
    orgCode = _ref.orgCode,
    _ref$exclude = _ref.exclude,
    exclude = _ref$exclude === void 0 ? [] : _ref$exclude;
  if (!ruleAndIndexFieldList) {
    return [];
  }
  var newFieldList = [];
  newFieldList =
    ruleAndIndexFieldList === null || ruleAndIndexFieldList === void 0
      ? void 0
      : ruleAndIndexFieldList.filter(function (item) {
          // 排除的字段或指标
          if (exclude.includes(item.name)) {
            return false;
          }
          var showOption = !item.apps;
          if (!showOption && item.apps) {
            showOption =
              item.apps.indexOf(appCode) > -1 ||
              item.apps.includes('all') ||
              [null, undefined, ''].includes(appCode);
          }
          if (showOption && orgCode && item.orgs && Array.isArray(item.orgs)) {
            showOption = item.orgs.includes(orgCode);
          }
          if (showOption) {
            return item;
          }
        });
  return newFieldList;
};

// 系统指标数据类型 特殊场景处理， 例如指标增加Array场景，除了展示之外，处理为字符串
exports.filterAvailableFieldList = filterAvailableFieldList;
var dataTypeSpecialConvert = function dataTypeSpecialConvert() {
  var item = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var rightValueType = item === null || item === void 0 ? void 0 : item.rightValueType;
  var type =
    (item === null || item === void 0 ? void 0 : item.dataType) ||
    (item === null || item === void 0 ? void 0 : item.datatype) ||
    (item === null || item === void 0 ? void 0 : item.type) ||
    '';
  if (item === null || item === void 0 ? void 0 : item.hasOwnProperty('propertyDataType')) {
    type = item === null || item === void 0 ? void 0 : item.propertyDataType;
  }
  var customPlaceholder;
  if (['ARRAY'].includes(type)) {
    type = 'STRING';
    if (rightValueType !== 'context') {
      customPlaceholder = _locale.default.utils.index.qingShuRuZhiBiao;
    }
  }
  return {
    type: type,
    customPlaceholder: customPlaceholder,
  };
};
exports.dataTypeSpecialConvert = dataTypeSpecialConvert;
