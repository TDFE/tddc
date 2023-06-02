// 系统指标数据类型 特殊场景处理， 例如指标增加Array场景，除了展示之外，处理为字符串
export const dataTypeSpecialConvert = (item = {}) => {
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
