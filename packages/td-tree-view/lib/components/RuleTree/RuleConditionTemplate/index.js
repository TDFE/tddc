'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _tntd = require('tntd');
var _constants = require('../constants');
var _utils = require('../utils');
var _CustomRuleConfig = _interopRequireDefault(require('./CustomRuleConfig'));
require('./index.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var sourceName = function sourceName(field, lang) {
  var _params$field;
  var params = {
    field: {
      cn: '字段',
      en: 'field',
    },
    realtime: {
      cn: '实时',
      en: 'realtime',
    },
    offline: {
      cn: '离线',
      en: 'offline',
    },
  };
  return (
    ((_params$field = params[field]) === null || _params$field === void 0
      ? void 0
      : _params$field[lang]) || field
  );
};
var InputContext = {
  input: '常量',
  context: '变量',
};
var RuleConditionTemplate = function RuleConditionTemplate(props) {
  var allMap = props.allMap,
    ruleTemplateListObj = props.ruleTemplateListObj,
    data = props.data,
    _props$lang = props.lang,
    lang = _props$lang === void 0 ? 'en' : _props$lang;
  var _ref = data || {},
    description = _ref.description,
    property = _ref.property;
  var _ref2 = data || {},
    _ref2$params = _ref2.params,
    params = _ref2$params === void 0 ? [] : _ref2$params;
  if (typeof params === 'string' && (0, _utils.isJSON)(params)) {
    params = JSON.parse(params);
  }
  var currentTemplate = ruleTemplateListObj && property ? ruleTemplateListObj[property] : null;
  var cfgJson =
    currentTemplate && currentTemplate.cfgJson && (0, _utils.isJSON)(currentTemplate.cfgJson)
      ? JSON.parse(currentTemplate.cfgJson)
      : null;
  var simpleCfgList = (0, _utils.getRuleCfgList)(cfgJson, params);

  // const ifCustomTemplate = template === 'common/custom';

  // 下拉数据源为自身
  var getSelfSelectName = function getSelfSelectName(options, value, mode) {
    // 多选模式
    if (mode) {
      var optionNames = [];
      options &&
        options.length &&
        options.map(function (option) {
          if (value.includes(option.value)) {
            optionNames.push(lang === 'en' ? option.enName : option.name);
          }
        });
      return optionNames.join(lang === 'en' ? ',' : '，');
    }

    // 单选
    var selfObj =
      (options &&
        options.length &&
        options.find(function (v) {
          return v.value === value;
        })) ||
      {};
    return (lang === 'en' ? selfObj.enName : selfObj.name) || value;
  };

  // 下拉数据源为service
  var getServiceSelectName = function getServiceSelectName(options, value, serviceMapName, mode) {
    // 多选模式
    if (mode) {
      var optionNames = [];
      options &&
        options.length &&
        options.map(function (option) {
          if (value.includes(option.name)) {
            optionNames.push(lang === 'en' ? option.enDName : option.dName);
          }
        });
      return optionNames.join(lang === 'en' ? ',' : '，');
    }

    // 单选
    var serviceObj =
      (options &&
        options.length &&
        options.find(function (v) {
          return v.name === value;
        })) ||
      {};
    if (serviceMapName === 'ruleAndIndexFieldList') {
      return '['
        .concat(serviceObj.sourceName && sourceName(serviceObj.sourceName, lang), '] ')
        .concat(lang === 'en' ? serviceObj.name : serviceObj.dName);
    }
    return (lang === 'en' ? serviceObj.enDName : serviceObj.dName) || value;
  };

  // checkbox获取name
  var getCheckboxName = function getCheckboxName(options, value) {
    value = value ? value.toString().split(',') : undefined;
    var optionNames = [];
    options &&
      options.length &&
      options.map(function (option) {
        var _value;
        if (
          (_value = value) === null || _value === void 0 ? void 0 : _value.includes(option.value)
        ) {
          optionNames.push(lang === 'en' ? option.enName : option.name);
        }
      });
    return optionNames.join(lang === 'en' ? ',' : '，');
  };

  // 获取右侧context下拉展示名称
  var getContextRightName = function getContextRightName(value, includeIndex) {
    var options = [];
    if (includeIndex) {
      options = allMap.ruleAndIndexFieldList;
    } else {
      options = allMap.ruleFieldList;
    }
    var optionsObj =
      options && options.length
        ? options.find(function (v) {
            return v.name === value;
          }) || {}
        : {};
    if (includeIndex) {
      return '['
        .concat(sourceName(optionsObj.sourceName, lang), '] ')
        .concat(lang === 'en' ? optionsObj.name : optionsObj.dName);
    }
    return (lang === 'en' ? optionsObj.name : optionsObj.dName) || value;
  };
  var dom = /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    // 如果是逻辑是添加规则排除，有些规则模板无法配置出来，这就需要
    property &&
      _constants.excludeRuleTemplate.includes(property) &&
      /*#__PURE__*/ _react.default.createElement(_CustomRuleConfig.default, {
        data: data,
        simpleCfgList: simpleCfgList,
        lang: lang,
      }),
    property &&
      !_constants.excludeRuleTemplate.includes(property) &&
      (cfgJson === null || cfgJson === void 0 ? void 0 : cfgJson.params) &&
      (cfgJson === null || cfgJson === void 0
        ? void 0
        : cfgJson.params.map(function (item, index) {
            return /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                className: 'rule-condition-template',
                key: index,
              },
              lang === 'en' ? item.enLabelText : item.labelText,
              ' \uFF1A',
              item.children &&
                item.children.map(function (subItem) {
                  var _ref3 = subItem || {},
                    name = _ref3.name,
                    componentType = _ref3.componentType,
                    selectName = _ref3.selectName,
                    mapType = _ref3.mapType,
                    addonAfter = _ref3.addonAfter,
                    selectType = _ref3.selectType,
                    selectOption = _ref3.selectOption,
                    includeIndex = _ref3.includeIndex,
                    mode = _ref3.mode;
                  var param =
                    params.find(function (item) {
                      return item.name === name;
                    }) || undefined;
                  var _ref4 = param || {},
                    _ref4$type = _ref4.type,
                    type = _ref4$type === void 0 ? undefined : _ref4$type,
                    _ref4$value = _ref4.value,
                    value = _ref4$value === void 0 ? undefined : _ref4$value;
                  // 获取下拉数据源
                  var serviceMapName = null;
                  if (componentType === 'select' && selectName) {
                    if (mapType === 'static') {
                      serviceMapName = selectName;
                    } else if (mapType === 'dynamic') {
                      if (selectName === '${RuleSetUuid}_ruleSets') {
                        serviceMapName = 'rulesetVersion';
                      }
                    }
                  }
                  /*
                   * 从这里处理changeRuleForOther规则
                   * handle：指的是改变当前参数的那个值
                   * */
                  var currentSimpleObj =
                    simpleCfgList.find(function (fItem) {
                      return fItem.name === name;
                    }) || {};
                  // 得到willChangeSelf
                  var _ref5 = currentSimpleObj || {},
                    _ref5$willChangeSelf = _ref5.willChangeSelf,
                    willChangeSelf = _ref5$willChangeSelf === void 0 ? {} : _ref5$willChangeSelf;

                  // 获取handle 名称
                  var changeHandleName = willChangeSelf ? willChangeSelf.name : null;
                  // 获取handle 实体
                  var changeHandleObj = changeHandleName
                    ? simpleCfgList.find(function (fItem) {
                        return fItem.name === changeHandleName;
                      })
                    : {};
                  // 获取handle value
                  var changeHandleValue = changeHandleObj.value || null;

                  /*
                   * 预先设置如下几个变量
                   * ruleHidden 不展示
                   * */
                  var ruleHidden = false;
                  // 获取改变的变量
                  var _ref6 = willChangeSelf || {},
                    changeMode = _ref6.changeMode,
                    _ref6$caseList = _ref6.caseList,
                    caseList = _ref6$caseList === void 0 ? [] : _ref6$caseList;
                  if (changeMode === 'whenSomeValue') {
                    // 当为具体值的时候
                    caseList &&
                      caseList.map(function (caseItem) {
                        if (
                          caseItem['modeValueList'] &&
                          caseItem['modeValueList'].find(function (mvItem) {
                            return mvItem === changeHandleValue;
                          })
                        ) {
                          // 如果modeValueList列表中确实有handle value，则进行如下操作
                          if (caseItem.changeType && caseItem.changeType === 'hidden') {
                            ruleHidden = true;
                          }
                        }
                      });
                  } else if (changeMode === 'whenSomeType') {
                    // 当为具体类型的时候
                    var _type = (0, _utils.getHandleType)(changeHandleObj, allMap);
                    caseList &&
                      caseList.map(function (caseItem) {
                        if (
                          caseItem['modeValueList'] &&
                          caseItem['modeValueList'].find(function (mvItem) {
                            return mvItem.toLowerCase() === _type.toLowerCase();
                          })
                        ) {
                          // 如果modeValueList列表中确实有handle value，则进行如下操作
                          if (caseItem.changeType && caseItem.changeType === 'hidden') {
                            ruleHidden = true;
                          }
                        }
                      });
                  }
                  if (ruleHidden) {
                    return;
                  }
                  var valueByScene = ['value', 'op'].includes(name) ? data[name] : value;
                  return /*#__PURE__*/ _react.default.createElement(
                    _react.default.Fragment,
                    null,
                    componentType === 'input' && ''.concat(valueByScene).concat(addonAfter || ''),
                    componentType === 'select' &&
                      selectType === 'self' &&
                      (getSelfSelectName(selectOption, valueByScene, mode) || valueByScene),
                    componentType === 'select' &&
                      selectType === 'service' &&
                      (getServiceSelectName(
                        allMap[serviceMapName],
                        valueByScene,
                        serviceMapName,
                        mode,
                      ) ||
                        valueByScene),
                    componentType === 'checkbox' &&
                      selectType === 'self' &&
                      (getCheckboxName(selectOption, value) || value),
                    componentType === 'checkbox' &&
                      selectType === 'service' &&
                      (getCheckboxName(allMap[subItem.selectName], value) || value),
                    componentType === 'variable' &&
                      /*#__PURE__*/ _react.default.createElement(
                        _react.default.Fragment,
                        null,
                        InputContext[type],
                        type === 'input' && (value || ''),
                        type === 'context' && getContextRightName(value, includeIndex),
                      ),
                  );
                }),
            );
          })),
  );
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    currentTemplate &&
      currentTemplate.description &&
      /*#__PURE__*/ _react.default.createElement(
        _tntd.Popover,
        {
          content: dom,
          overlayClassName: 'template-node',
        },
        /*#__PURE__*/ _react.default.createElement(
          'span',
          {
            className: 'template-des',
          },
          /*#__PURE__*/ _react.default.createElement(_tntd.Ellipsis, {
            title: '\u89C4\u5219\u63CF\u8FF0\uFF1A'.concat(description),
            placement: 'bottom',
          }),
        ),
      ),
  );
};
var _default = RuleConditionTemplate;
exports.default = _default;
