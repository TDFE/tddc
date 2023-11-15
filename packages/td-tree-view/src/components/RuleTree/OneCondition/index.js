import { ruleOp } from '../constants';
import CascaderTag from '../../IndicatorsCascader/CascaderTag';
import './inde.less';
import { Tooltip } from 'antd';

import otp from '../otp';

const logicOperatorMap = {
  '&&': otp.yu,
  '||': otp.huo,
};

const OneCondition = (props) => {
  // const { globalStore, conditionData, conditionSingleData, conditionType, conditionArr, keyMap = {} } = props;
  // const { allMap, personalMode } = globalStore;
  // const { lang } = personalMode;

  const {
    allMap,
    lang,
    conditionData,
    conditionSingleData,
    conditionType,
    conditionArr,
    keyMap = {},
  } = props;
  const { fieldParamListSelect = [], ruleAndIndexFieldList = [] } = allMap;

  const operaTypeInOrNot =
    conditionSingleData['op'] === 'in' || conditionSingleData['op'] === 'notin';

  const { logicOperator } = conditionData || {};
  let { property, propertyDataType, op, rightValueType, value } = ['', '', '', '', ''];
  property = conditionSingleData[keyMap.property || 'property'];
  propertyDataType = conditionSingleData[keyMap.propertyDataType || 'propertyDataType'];
  op = conditionSingleData[keyMap.op || 'op'];
  rightValueType = conditionSingleData[keyMap.rightValueType || 'rightValueType'];
  value = conditionSingleData[keyMap.value || 'value'];

  const operaTypeBlong = ['belong', 'notbelong'].includes(op);
  const ifAppendIsStr = ['prefix', 'suffix'].includes(op);

  // 获取左侧
  let [propertyName] = ['', ''];
  if (property && ruleAndIndexFieldList && ruleAndIndexFieldList.length) {
    // 获取左侧属性显示名称
    propertyName = ruleAndIndexFieldList.find((v) => v.name === property) || {};

    propertyName =
      propertyName && propertyName.dName ? (
        <>
          <CascaderTag data={propertyName} />
          {propertyName.dName}
        </>
      ) : (
        property
      );
    // 枚举值
    // enumField = (
    // 	(ruleAndIndexFieldList.find(v=>(
    // 		v.name === property
    // 	)) || {}).enumField
    // ) || property;
  }

  // 获取操作符 中文名称
  const getOperatorName = () => {
    // const OperatorObj = PolicyConstants.conditionOperator[propertyDataType || 'STRING'].find((v) => v.name === op) || {};
    return <span className="condition-op">{ruleOp[op] || op}</span>;
  };

  // 变量且非枚举 获取右侧属性显示名称
  const getContextNotEnumName = () => {
    const valueObj =
      ruleAndIndexFieldList
        .filter((fItem) => {
          return (
            fItem.type &&
            (fItem.type === propertyDataType ||
              (['DOUBLE', 'INT'].includes(fItem.type) &&
                ['DOUBLE', 'INT'].includes(propertyDataType)))
          );
        })
        .find((v) => v.name === value) || {};
    return (
      <span className="condition-type">
        {(
          <>
            <CascaderTag data={valueObj} />
            {valueObj.dName}
          </>
        ) || value}
      </span>
    );
  };

  // 枚举且非属于不属于
  const getEnumNotBlongName = () => {
    let enumObj = {};
    if (conditionSingleData['enumTypeValues'].length) {
      enumObj = conditionSingleData['enumTypeValues'].find((item) => item.value === value) || {};
    }
    return <span className="condition-value">{enumObj.description || value}</span>;
  };

  // 枚举且存在于不存在于
  const getEnumInOrNotInName = () => {
    let enumArr = [];
    let enumTypeValues =
      ruleAndIndexFieldList.find((item) => item.name === conditionSingleData.property)
        ?.enumTypeValues || [];
    if (enumTypeValues.length) {
      enumArr =
        enumTypeValues.filter((item) => {
          return value.includes(item.value);
        }) || {};
    }

    return enumArr.map((item, index) => {
      return (
        <span className="condition-value" key={index}>
          {item.description || ''}
        </span>
      );
    });
  };

  // 属于不属于
  const getBlongParamName = () => {
    const paramObj = fieldParamListSelect.find((item) => item.name === value) || {};
    return (
      <span className="condition-op">
        {(lang === 'en' ? paramObj.enDName : paramObj.dName) || value}
      </span>
    );
  };

  let text = (
    <>
      {conditionType === 'group' &&
        `${Number(conditionArr[0]) + 1}.${Number(conditionArr[1]) + 1}. `}
      <span className="condition-value">{propertyName}</span>
      {getOperatorName()}
      {/* 在非 为空 or 不为空的条件下 */}
      {op && !['isnull', 'notnull'].includes(op) && (
        <>
          {/* {propertyDataType !== 'ENUM' && <span className="condition-type">{InputContext[rightValueType]}</span>} */}
          {/* 前缀后缀添加为 */}
          {ifAppendIsStr && <span className="condition-op">{ifAppendIsStr && otp.is}</span>}
          {/* 常量且非枚举场景 */}
          {rightValueType === 'input' && propertyDataType !== 'ENUM' && !operaTypeBlong && (
            <span className="condition-value">{value || value === 0 ? value : ''}</span>
          )}
          {/* 变量且非枚举 */}
          {rightValueType === 'context' &&
            propertyDataType !== 'ENUM' &&
            !operaTypeBlong &&
            getContextNotEnumName()}
          {/* 枚举 非 属于不属于 */}
          {propertyDataType === 'ENUM' &&
            !operaTypeBlong &&
            !operaTypeInOrNot &&
            getEnumNotBlongName()}
          {/* 属于不属于 */}
          {operaTypeBlong && getBlongParamName()}
          {/* 存在于不存在于 */}
          {operaTypeInOrNot && getEnumInOrNotInName()}
        </>
      )}
    </>
  );

  let textDom = (
    <span
      className={`one-condition-item ${
        conditionType === 'group' ? 'one-condition-group-item' : ''
      }`}
    >
      {text}
    </span>
  );

  return (
    <>
      {conditionType === 'group' && conditionArr[1] === 0 && (
        <div>
          {otp.tiaojian}
          {'&nbsp;'}
          {logicOperatorMap[logicOperator] || logicOperator}
        </div>
      )}
      <Tooltip title={text} placement="topLeft" overlayClassName="node-text">
        {textDom}
      </Tooltip>
    </>
  );
};

export default OneCondition;
