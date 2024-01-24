"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _utils = require("../../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = function _default(props) {
  var params = props.params,
    allMap = props.allMap,
    lang = props.lang;
  // const { params, globalStore: { allMap } } = props;
  var _ref = allMap || {},
    _ref$ruleAndIndexFiel = _ref.ruleAndIndexFieldList,
    ruleAndIndexFieldList = _ref$ruleAndIndexFiel === void 0 ? [] : _ref$ruleAndIndexFiel,
    _ref$multiDimCustomLi = _ref.multiDimCustomListBusiTypeSelect,
    multiDimCustomListBusiTypeSelect = _ref$multiDimCustomLi === void 0 ? [] : _ref$multiDimCustomLi,
    _ref$multiDimCustomLi2 = _ref.multiDimCustomListTypeSelect,
    multiDimCustomListTypeSelect = _ref$multiDimCustomLi2 === void 0 ? [] : _ref$multiDimCustomLi2,
    _ref$multiDimCustomLi3 = _ref.multiDimCustomListSelect,
    multiDimCustomListSelect = _ref$multiDimCustomLi3 === void 0 ? [] : _ref$multiDimCustomLi3;
  var paramsObj = {};
  params && params.map(function (param) {
    if (param.name) {
      paramsObj[param.name] = param.value;
    }
  });
  var customList = [];
  var _ref2 = paramsObj || {},
    defineType = _ref2.defineType,
    _ref2$definitionList = _ref2.definitionList,
    definitionList = _ref2$definitionList === void 0 ? null : _ref2$definitionList,
    _ref2$conditions = _ref2.conditions,
    conditions = _ref2$conditions === void 0 ? [] : _ref2$conditions,
    score = _ref2.score;
  if (defineType) {
    customList = multiDimCustomListSelect.filter(function (listItem) {
      var type = listItem.type ? listItem.type.toString() : null;
      if (type) {
        return type === defineType;
      }
    });
  }
  var fieldList = ruleAndIndexFieldList.filter(function (field) {
    return field.type === 'STRING';
  });
  var customObj = {};
  if (customList && definitionList) {
    customObj = customList.find(function (customItem) {
      return customItem.uuid === definitionList;
    });
  }
  var _ref3 = customObj || {},
    _ref3$columnBOList = _ref3.columnBOList,
    columnBOList = _ref3$columnBOList === void 0 ? [] : _ref3$columnBOList;
  var defineTypeName = (multiDimCustomListTypeSelect.find(function (v) {
    return v.name === defineType;
  }) || {}).dName || defineType;
  var definitionListName = (customList.find(function (v) {
    return v.uuid === definitionList;
  }) || {}).name || defineType;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", null, '复核名单列表：', defineTypeName, " ", definitionListName), /*#__PURE__*/_react.default.createElement("span", null, '匹配字段：', conditions && conditions.map(function (conditionItem, index) {
    var _ref4 = conditionItem || {},
      leftValue = _ref4.leftValue,
      right = _ref4.right,
      weight = _ref4.weight;
    var multiDimCustomListBusiTypeObj = null,
      busiTypeObj = null;
    if (columnBOList && right) {
      busiTypeObj = columnBOList.find(function (boItem) {
        return boItem.uuid === right;
      });
    }
    if (busiTypeObj) {
      multiDimCustomListBusiTypeObj = multiDimCustomListBusiTypeSelect.find(function (typeItem) {
        return typeItem.name === busiTypeObj.busiType.toString();
      });
    }

    // 左侧展示名称
    var leftSourceName = '',
      leftDName = '';
    if (fieldList && fieldList.length) {
      var leftValueNameObj = fieldList.find(function (v) {
        return v.name === leftValue;
      }) || {};
      leftSourceName = "[".concat((0, _utils.sourceName)(leftValueNameObj.sourceName, lang), "]");
      leftDName = leftValueNameObj.dName || leftValue;
    }

    // 右侧展示名称
    var rightDName = '';
    if (columnBOList && columnBOList.length) {
      rightDName = (columnBOList.find(function (v) {
        return v.uuid === right;
      }) || {}).name || right;
    }
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index
    }, leftSourceName, leftDName, rightDName, (weight || weight === 0) && "\u6743\u91CD".concat(weight, "%"), multiDimCustomListBusiTypeObj && multiDimCustomListBusiTypeObj.dName);
  })), /*#__PURE__*/_react.default.createElement("span", null, '匹配度：', score || score === 0 ? score : ''));
};