// 授权过滤ruleAndIndexFieldList
const filterAvailableFieldList = ({
  ruleAndIndexFieldList = {},
  appCode,
  orgCode,
  exclude = [],
}) => {
  if (!ruleAndIndexFieldList) {
    return [];
  }
  let newFieldList = [];
  newFieldList = ruleAndIndexFieldList?.filter((item) => {
    // 排除的字段或指标
    if (exclude.includes(item.name)) {
      return false;
    }
    let showOption = !item.apps;
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
const dataTypeSpecialConvert = (item = {}) => {
  const rightValueType = item?.rightValueType;
  let type = item?.dataType || item?.datatype || item?.type || '';
  if (item?.hasOwnProperty('propertyDataType')) {
    type = item?.propertyDataType;
  }
  let customPlaceholder;
  if (['ARRAY'].includes(type)) {
    type = 'STRING';
    if (rightValueType !== 'context') {
      customPlaceholder = '请输入指标结果，英文逗号分隔';
    }
  }
  return {
    type,
    customPlaceholder,
  };
};

export { filterAvailableFieldList, dataTypeSpecialConvert };
