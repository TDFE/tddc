'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
var _react = _interopRequireDefault(require('react'));
var _constants = require('../constants');
var _CascaderTag = _interopRequireDefault(require('../../IndicatorsCascader/CascaderTag'));
require('./inde.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var logicOperatorMap = {
  '&&': '与',
  '||': '或',
};
var InputContext = {
  input: '常量',
  context: '变量',
};
var OneCondition = function OneCondition(props) {
  // const { globalStore, conditionData, conditionSingleData, conditionType, conditionArr, keyMap = {} } = props;
  // const { allMap, personalMode } = globalStore;
  // const { lang } = personalMode;

  var allMap = props.allMap,
    lang = props.lang,
    conditionData = props.conditionData,
    conditionSingleData = props.conditionSingleData,
    conditionType = props.conditionType,
    conditionArr = props.conditionArr,
    _props$keyMap = props.keyMap,
    keyMap = _props$keyMap === void 0 ? {} : _props$keyMap;
  var _allMap$fieldParamLis = allMap.fieldParamListSelect,
    fieldParamListSelect = _allMap$fieldParamLis === void 0 ? [] : _allMap$fieldParamLis,
    _allMap$ruleAndIndexF = allMap.ruleAndIndexFieldList,
    ruleAndIndexFieldList = _allMap$ruleAndIndexF === void 0 ? [] : _allMap$ruleAndIndexF;
  var operaTypeInOrNot =
    conditionSingleData['op'] === 'in' || conditionSingleData['op'] === 'notin';
  var _ref = conditionData || {},
    logicOperator = _ref.logicOperator;
  var _ref2 = ['', '', '', '', ''],
    property = _ref2.property,
    propertyDataType = _ref2.propertyDataType,
    op = _ref2.op,
    rightValueType = _ref2.rightValueType,
    value = _ref2.value;
  property = conditionSingleData[keyMap.property || 'property'];
  propertyDataType = conditionSingleData[keyMap.propertyDataType || 'propertyDataType'];
  op = conditionSingleData[keyMap.op || 'op'];
  rightValueType = conditionSingleData[keyMap.rightValueType || 'rightValueType'];
  value = conditionSingleData[keyMap.value || 'value'];
  var operaTypeBlong = ['belong', 'notbelong'].includes(op);
  var ifAppendIsStr = ['prefix', 'suffix'].includes(op);

  // 获取左侧
  var _ref3 = ['', ''],
    propertyName = _ref3[0];
  if (property && ruleAndIndexFieldList && ruleAndIndexFieldList.length) {
    // 获取左侧属性显示名称
    propertyName =
      ruleAndIndexFieldList.find(function (v) {
        return v.name === property;
      }) || {};
    propertyName =
      propertyName && propertyName.dName
        ? /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
              data: propertyName,
            }),
            propertyName.dName,
          )
        : property;
    // 枚举值
    // enumField = (
    // 	(ruleAndIndexFieldList.find(v=>(
    // 		v.name === property
    // 	)) || {}).enumField
    // ) || property;
  }

  // 获取操作符 中文名称
  var getOperatorName = function getOperatorName() {
    // const OperatorObj = PolicyConstants.conditionOperator[propertyDataType || 'STRING'].find((v) => v.name === op) || {};
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'condition-op',
      },
      _constants.ruleOp[op] || op,
    );
  };

  // 变量且非枚举 获取右侧属性显示名称
  var getContextNotEnumName = function getContextNotEnumName() {
    var valueObj =
      ruleAndIndexFieldList
        .filter(function (fItem) {
          return (
            fItem.type &&
            (fItem.type === propertyDataType ||
              (['DOUBLE', 'INT'].includes(fItem.type) &&
                ['DOUBLE', 'INT'].includes(propertyDataType)))
          );
        })
        .find(function (v) {
          return v.name === value;
        }) || {};
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'condition-type',
      },
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
          data: valueObj,
        }),
        valueObj.dName,
      ) || value,
    );
  };

  // 枚举且非属于不属于
  var getEnumNotBlongName = function getEnumNotBlongName() {
    var enumObj = {};
    if (conditionSingleData['enumTypeValues'].length) {
      enumObj =
        conditionSingleData['enumTypeValues'].find(function (item) {
          return item.value === value;
        }) || {};
    }
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'condition-value',
      },
      enumObj.description || value,
    );
  };

  // 枚举且存在于不存在于
  var getEnumInOrNotInName = function getEnumInOrNotInName() {
    var _ruleAndIndexFieldLis;
    var enumArr = [];
    var enumTypeValues =
      ((_ruleAndIndexFieldLis = ruleAndIndexFieldList.find(function (item) {
        return item.name === conditionSingleData.property;
      })) === null || _ruleAndIndexFieldLis === void 0
        ? void 0
        : _ruleAndIndexFieldLis.enumTypeValues) || [];
    if (enumTypeValues.length) {
      enumArr =
        enumTypeValues.filter(function (item) {
          return value.includes(item.value);
        }) || {};
    }
    return enumArr.map(function (item, index) {
      return /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'condition-value',
          key: index,
        },
        item.description || '',
      );
    });
  };

  // 属于不属于
  var getBlongParamName = function getBlongParamName() {
    var paramObj =
      fieldParamListSelect.find(function (item) {
        return item.name === value;
      }) || {};
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'condition-op',
      },
      (lang === 'en' ? paramObj.enDName : paramObj.dName) || value,
    );
  };
  var text = /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    conditionType === 'group' &&
      ''.concat(Number(conditionArr[0]) + 1, '.').concat(Number(conditionArr[1]) + 1, '. '),
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'condition-value',
      },
      propertyName,
    ),
    getOperatorName(),
    op &&
      !['isnull', 'notnull'].includes(op) &&
      /*#__PURE__*/ _react.default.createElement(
        _react.default.Fragment,
        null,
        ifAppendIsStr &&
          /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              className: 'condition-op',
            },
            ifAppendIsStr && (lang === 'en' ? ' is ' : '为'),
          ),
        rightValueType === 'input' &&
          propertyDataType !== 'ENUM' &&
          !operaTypeBlong &&
          /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              className: 'condition-value',
            },
            value || value === 0 ? value : '',
          ),
        rightValueType === 'context' &&
          propertyDataType !== 'ENUM' &&
          !operaTypeBlong &&
          getContextNotEnumName(),
        propertyDataType === 'ENUM' &&
          !operaTypeBlong &&
          !operaTypeInOrNot &&
          getEnumNotBlongName(),
        operaTypeBlong && getBlongParamName(),
        operaTypeInOrNot && getEnumInOrNotInName(),
      ),
  );
  var textDom = /*#__PURE__*/ _react.default.createElement(
    'span',
    {
      className: 'one-condition-item '.concat(
        conditionType === 'group' ? 'one-condition-group-item' : '',
      ),
    },
    text,
  );
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    conditionType === 'group' &&
      conditionArr[1] === 0 &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        '条件关系：&nbsp;',
        logicOperatorMap[logicOperator] || logicOperator,
      ),
    /*#__PURE__*/ _react.default.createElement(
      _tooltip.default,
      {
        title: text,
        placement: 'topLeft',
        overlayClassName: 'node-text',
      },
      textDom,
    ),
  );
};
var _default = OneCondition;
exports.default = _default;
