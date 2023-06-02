'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.dataTypeSpecialConvert = void 0;
// 系统指标数据类型 特殊场景处理， 例如指标增加Array场景，除了展示之外，处理为字符串
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
      customPlaceholder = '请输入指标结果，英文逗号分隔';
    }
  }
  return {
    type: type,
    customPlaceholder: customPlaceholder,
  };
};
exports.dataTypeSpecialConvert = dataTypeSpecialConvert;
