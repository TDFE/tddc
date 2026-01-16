import { sourceName } from '../../utils';

export default (props) => {
  const { params, allMap, lang } = props;
  // const { params, globalStore: { allMap } } = props;
  const {
    ruleAndIndexFieldList = [],
    multiDimCustomListBusiTypeSelect = [],
    multiDimCustomListTypeSelect = [],
    multiDimCustomListSelect = [],
  } = allMap || {};

  const paramsObj = {};
  params &&
    params.map((param) => {
      if (param.name) {
        paramsObj[param.name] = param.value;
      }
    });

  let customList = [];
  let { defineType, definitionList = null, conditions = [], score } = paramsObj || {};

  if (defineType) {
    customList = multiDimCustomListSelect.filter((listItem) => {
      let type = listItem.type ? listItem.type.toString() : null;
      if (type) {
        return type === defineType;
      }
    });
  }

  const fieldList = ruleAndIndexFieldList.filter((field) => field.type === 'STRING');

  let customObj = {};
  if (customList && definitionList) {
    customObj = customList.find((customItem) => customItem.uuid === definitionList);
  }
  const { columnBOList = [] } = customObj || {};

  const defineTypeName =
    (multiDimCustomListTypeSelect.find((v) => v.name === defineType) || {}).dName || defineType;
  const definitionListName =
    (customList.find((v) => v.uuid === definitionList) || {}).name || defineType;

  return (
    <>
      <span>
        {I18N.customruleconfig.multidimlist.fuHeMingDanLie}
        {defineTypeName} {definitionListName}
      </span>
      <span>
        {I18N.customruleconfig.multidimlist.piPeiZiDuan}
        {conditions &&
          conditions.map((conditionItem, index) => {
            const { leftValue, right, weight } = conditionItem || {};
            let [multiDimCustomListBusiTypeObj, busiTypeObj] = [null, null];

            if (columnBOList && right) {
              busiTypeObj = columnBOList.find((boItem) => boItem.uuid === right);
            }
            if (busiTypeObj) {
              multiDimCustomListBusiTypeObj = multiDimCustomListBusiTypeSelect.find(
                (typeItem) => typeItem.name === busiTypeObj.busiType.toString(),
              );
            }

            // 左侧展示名称
            let [leftSourceName, leftDName] = ['', ''];
            if (fieldList && fieldList.length) {
              const leftValueNameObj = fieldList.find((v) => v.name === leftValue) || {};
              leftSourceName = `[${sourceName(leftValueNameObj.sourceName, lang)}]`;
              leftDName = leftValueNameObj.dName || leftValue;
            }

            // 右侧展示名称
            let rightDName = '';
            if (columnBOList && columnBOList.length) {
              rightDName = (columnBOList.find((v) => v.uuid === right) || {}).name || right;
            }

            return (
              <span key={index}>
                {leftSourceName}
                {leftDName}
                {rightDName}
                {(weight || weight === 0) &&
                  I18N.template(I18N.customruleconfig.multidimlist.quanZhongWEI, { val1: weight })}
                {multiDimCustomListBusiTypeObj && multiDimCustomListBusiTypeObj.dName}
              </span>
            );
          })}
      </span>
      <span>
        {I18N.customruleconfig.multidimlist.piPeiDu}
        {score || score === 0 ? score : ''}
      </span>
    </>
  );
};
