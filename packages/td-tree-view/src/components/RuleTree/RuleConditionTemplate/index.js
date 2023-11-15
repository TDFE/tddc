import { Fragment } from 'react';
import { Popover, Ellipsis } from 'tntd';
import { excludeRuleTemplate } from '../constants';
import { getRuleCfgList, getHandleType, isJSON } from '../utils';
import CustomRuleConfig from './CustomRuleConfig';

import './index.less';
import { Tooltip } from 'antd';

import otp from '../otp';

const sourceName = (field, lang) => {
  let params = {
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
  return params[field]?.[lang] || field;
};

const InputContext = {
  input: otp.changliang,
  context: otp.bianliang,
};

const RuleConditionTemplate = (props) => {
  const { allMap, ruleTemplateListObj, data, lang = 'cn' } = props;

  const { description, property } = data || {};
  let { params = [] } = data || {};
  if (typeof params === 'string' && isJSON(params)) {
    params = JSON.parse(params);
  }

  const currentTemplate = ruleTemplateListObj && property ? ruleTemplateListObj[property] : null;
  console.log(!!(currentTemplate && currentTemplate.description), 'currentTemplate');
  const cfgJson =
    currentTemplate && currentTemplate.cfgJson && isJSON(currentTemplate.cfgJson)
      ? JSON.parse(currentTemplate.cfgJson)
      : null;

  const simpleCfgList = getRuleCfgList(cfgJson, params);

  // const ifCustomTemplate = template === 'common/custom';

  // 下拉数据源为自身
  const getSelfSelectName = (options, value, mode) => {
    // 多选模式
    if (mode) {
      const optionNames = [];
      options &&
        options.length &&
        options.map((option) => {
          if (value.includes(option.value)) {
            optionNames.push(lang === 'en' ? option.enName : option.name);
          }
        });
      return optionNames.join(lang === 'en' ? ',' : '，');
    }

    // 单选
    const selfObj = (options && options.length && options.find((v) => v.value === value)) || {};
    return (lang === 'en' ? selfObj.enName : selfObj.name) || value;
  };

  // 下拉数据源为service
  const getServiceSelectName = (options, value, serviceMapName, mode) => {
    // 多选模式
    if (mode) {
      const optionNames = [];
      options &&
        options.length &&
        options.map((option) => {
          if (value.includes(option.name)) {
            optionNames.push(lang === 'en' ? option.enDName : option.dName);
          }
        });
      return optionNames.join(lang === 'en' ? ',' : '，');
    }

    // 单选
    const serviceObj = (options && options.length && options.find((v) => v.name === value)) || {};
    if (serviceMapName === 'ruleAndIndexFieldList') {
      return `[${serviceObj.sourceName && sourceName(serviceObj.sourceName, lang)}] ${
        lang === 'en' ? serviceObj.name : serviceObj.dName
      }`;
    }
    return (lang === 'en' ? serviceObj.enDName : serviceObj.dName) || value;
  };

  // checkbox获取name
  const getCheckboxName = (options, value) => {
    value = value ? value.toString().split(',') : undefined;
    const optionNames = [];
    options &&
      options.length &&
      options.map((option) => {
        if (value?.includes(option.value)) {
          optionNames.push(lang === 'en' ? option.enName : option.name);
        }
      });
    return optionNames.join(lang === 'en' ? ',' : '，');
  };

  // 获取右侧context下拉展示名称
  const getContextRightName = (value, includeIndex) => {
    let options = [];
    if (includeIndex) {
      options = allMap.ruleAndIndexFieldList;
    } else {
      options = allMap.ruleFieldList;
    }
    const optionsObj = options && options.length ? options.find((v) => v.name === value) || {} : {};

    if (includeIndex) {
      return `[${sourceName(optionsObj.sourceName, lang)}] ${
        lang === 'en' ? optionsObj.name : optionsObj.dName
      }`;
    }
    return (lang === 'en' ? optionsObj.name : optionsObj.dName) || value;
  };

  let dom = (
    <>
      {
        // 如果是逻辑是添加规则排除，有些规则模板无法配置出来，这就需要
        property && excludeRuleTemplate.includes(property) && (
          <CustomRuleConfig data={data} simpleCfgList={simpleCfgList} lang={lang} />
        )
      }
      {/* 判断当前指标模板不在排除列表 */}
      {property &&
        !excludeRuleTemplate.includes(property) &&
        cfgJson?.params &&
        cfgJson?.params.map((item, index) => {
          return (
            <span className="rule-condition-template" key={index}>
              {lang === 'en' ? item.enLabelText : item.labelText} ：
              {item.children &&
                item.children.map((subItem) => {
                  const {
                    name,
                    componentType,
                    selectName,
                    mapType,
                    addonAfter,
                    selectType,
                    selectOption,
                    includeIndex,
                    mode,
                  } = subItem || {};
                  const param = params.find((item) => item.name === name) || undefined;
                  const { type = undefined, value = undefined } = param || {};
                  // 获取下拉数据源
                  let serviceMapName = null;
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
                  const currentSimpleObj = simpleCfgList.find((fItem) => fItem.name === name) || {};
                  // 得到willChangeSelf
                  const { willChangeSelf = {} } = currentSimpleObj || {};

                  // 获取handle 名称
                  const changeHandleName = willChangeSelf ? willChangeSelf.name : null;
                  // 获取handle 实体
                  const changeHandleObj = changeHandleName
                    ? simpleCfgList.find((fItem) => fItem.name === changeHandleName)
                    : {};
                  // 获取handle value
                  const changeHandleValue = changeHandleObj.value || null;

                  /*
                   * 预先设置如下几个变量
                   * ruleHidden 不展示
                   * */
                  let ruleHidden = false;
                  // 获取改变的变量
                  const { changeMode, caseList = [] } = willChangeSelf || {};
                  if (changeMode === 'whenSomeValue') {
                    // 当为具体值的时候
                    caseList &&
                      caseList.map((caseItem) => {
                        if (
                          caseItem['modeValueList'] &&
                          caseItem['modeValueList'].find((mvItem) => mvItem === changeHandleValue)
                        ) {
                          // 如果modeValueList列表中确实有handle value，则进行如下操作
                          if (caseItem.changeType && caseItem.changeType === 'hidden') {
                            ruleHidden = true;
                          }
                        }
                      });
                  } else if (changeMode === 'whenSomeType') {
                    // 当为具体类型的时候
                    const type = getHandleType(changeHandleObj, allMap);
                    caseList &&
                      caseList.map((caseItem) => {
                        if (
                          caseItem['modeValueList'] &&
                          caseItem['modeValueList'].find(
                            (mvItem) => mvItem.toLowerCase() === type.toLowerCase(),
                          )
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
                  const valueByScene = ['value', 'op'].includes(name) ? data[name] : value;
                  return (
                    <>
                      {componentType === 'input' && `${valueByScene}${addonAfter || ''}`}
                      {/* 从自身获取数据源 */}
                      {componentType === 'select' &&
                        selectType === 'self' &&
                        (getSelfSelectName(selectOption, valueByScene, mode) || valueByScene)}
                      {/* 从接口获取数据源 */}
                      {componentType === 'select' &&
                        selectType === 'service' &&
                        (getServiceSelectName(
                          allMap[serviceMapName],
                          valueByScene,
                          serviceMapName,
                          mode,
                        ) ||
                          valueByScene)}
                      {/* checkbox从自身获取 */}
                      {componentType === 'checkbox' &&
                        selectType === 'self' &&
                        (getCheckboxName(selectOption, value) || value)}
                      {/* checkbox从service获取 */}
                      {componentType === 'checkbox' &&
                        selectType === 'service' &&
                        (getCheckboxName(allMap[subItem.selectName], value) || value)}
                      {componentType === 'variable' && (
                        <>
                          {InputContext[type]}
                          {type === 'input' && (value || '')}
                          {type === 'context' && getContextRightName(value, includeIndex)}
                        </>
                      )}
                    </>
                  );
                })}
            </span>
          );
        })}
    </>
  );

  return (
    <>
      {currentTemplate && currentTemplate.description && (
        <Tooltip title={dom} overlayClassName="template-node">
          <span className="template-des">
            <Ellipsis title={`${otp.guize}${description}`} placement="bottom" widthLimit={450} />
          </span>
        </Tooltip>
      )}
    </>
  );
};

export default RuleConditionTemplate;
