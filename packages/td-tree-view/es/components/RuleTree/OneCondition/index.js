import _Tooltip from 'tntd/es/tooltip';
import React from 'react';
import { ruleOp } from '../constants';
import CascaderTag from '../../IndicatorsCascader/CascaderTag';
import './inde.less';
import otp from '../otp';
var logicOperatorMap = {
  '&&': otp.yu,
  '||': otp.huo,
};
var OneCondition = function OneCondition(props) {
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
  if (
    property &&
    ruleAndIndexFieldList &&
    (ruleAndIndexFieldList === null || ruleAndIndexFieldList === void 0
      ? void 0
      : ruleAndIndexFieldList.length)
  ) {
    // 获取左侧属性显示名称
    propertyName =
      ruleAndIndexFieldList.find(function (v) {
        return v.name === property;
      }) || {};
    propertyName =
      propertyName && propertyName.dName
        ? /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(CascaderTag, {
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
    return /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'condition-op',
      },
      ruleOp[op] || op,
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
    return /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'condition-type',
      },
      /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /*#__PURE__*/ React.createElement(CascaderTag, {
          data: valueObj,
        }),
        valueObj.dName,
      ) || value,
    );
  };

  // 枚举且非属于不属于
  var getEnumNotBlongName = function getEnumNotBlongName() {
    var _ruleAndIndexFieldLis;
    var enumObj = {};
    var enumTypeValues =
      ((_ruleAndIndexFieldLis = ruleAndIndexFieldList.find(function (item) {
        return item.name === conditionSingleData.property;
      })) === null || _ruleAndIndexFieldLis === void 0
        ? void 0
        : _ruleAndIndexFieldLis.enumTypeValues) || [];
    if (enumTypeValues === null || enumTypeValues === void 0 ? void 0 : enumTypeValues.length) {
      enumObj =
        enumTypeValues.find(function (item) {
          return item.value === value;
        }) || {};
    }
    return /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'condition-value',
      },
      enumObj.description || value,
    );
  };

  // 枚举且存在于不存在于
  var getEnumInOrNotInName = function getEnumInOrNotInName() {
    var _ruleAndIndexFieldLis2;
    var enumArr = [];
    var enumTypeValues =
      ((_ruleAndIndexFieldLis2 = ruleAndIndexFieldList.find(function (item) {
        return item.name === conditionSingleData.property;
      })) === null || _ruleAndIndexFieldLis2 === void 0
        ? void 0
        : _ruleAndIndexFieldLis2.enumTypeValues) || [];
    if (enumTypeValues === null || enumTypeValues === void 0 ? void 0 : enumTypeValues.length) {
      enumArr =
        enumTypeValues.filter(function (item) {
          return value.includes(item.value);
        }) || {};
    }
    return enumArr.map(function (item, index) {
      return /*#__PURE__*/ React.createElement(
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
    return /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'condition-op',
      },
      (lang === 'en' ? paramObj.enDName : paramObj.dName) || value,
    );
  };
  var text = /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    conditionType === 'group' &&
      ''.concat(Number(conditionArr[0]) + 1, '.').concat(Number(conditionArr[1]) + 1, '. '),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        className: 'condition-value',
      },
      propertyName,
    ),
    getOperatorName(),
    op &&
      !['isnull', 'notnull'].includes(op) &&
      /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        ifAppendIsStr &&
          /*#__PURE__*/ React.createElement(
            'span',
            {
              className: 'condition-op',
            },
            ifAppendIsStr && otp.is,
          ),
        rightValueType === 'input' &&
          propertyDataType !== 'ENUM' &&
          !operaTypeBlong &&
          /*#__PURE__*/ React.createElement(
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
  var textDom = /*#__PURE__*/ React.createElement(
    'span',
    {
      className: 'one-condition-item '.concat(
        conditionType === 'group' ? 'one-condition-group-item' : '',
      ),
    },
    text,
  );
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    conditionType === 'group' &&
      conditionArr[1] === 0 &&
      /*#__PURE__*/ React.createElement(
        'div',
        null,
        otp.tiaojian,
        '&nbsp;',
        logicOperatorMap[logicOperator] || logicOperator,
      ),
    /*#__PURE__*/ React.createElement(
      _Tooltip,
      {
        title: text,
        placement: 'topLeft',
        overlayClassName: 'node-text',
      },
      textDom,
    ),
  );
};
export default OneCondition;
