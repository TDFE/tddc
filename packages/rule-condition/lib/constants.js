'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var conditionOperator = {
  STRING: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: '包含',
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: '不包含',
      enDName: 'exclude',
    },
    {
      name: 'prefix',
      dName: '前缀',
      enDName: 'prefix',
    },
    {
      name: 'suffix',
      dName: '后缀',
      enDName: 'suffix',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: '存在于',
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: '不存在于',
      enDName: 'notin',
    },
  ],
  DOUBLE: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: '大于',
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: '大于等于',
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: '小于',
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: '小于等于',
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
  ],
  INT: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: '大于',
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: '大于等于',
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: '小于',
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: '小于等于',
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: '存在于',
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: '不存在于',
      enDName: 'notin',
    },
  ],
  LONG: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: '大于',
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: '大于等于',
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: '小于',
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: '小于等于',
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: '存在于',
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: '不存在于',
      enDName: 'notin',
    },
  ],
  DATETIME: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: '大于',
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: '大于等于',
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: '小于',
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: '小于等于',
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
  ],
  BOOLEAN: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
  ],
  ENUM: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: '为空',
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: '不为空',
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: '存在于',
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: '不存在于',
      enDName: 'notin',
    },
  ],
  ARRAY: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: '包含',
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: '不包含',
      enDName: 'exclude',
    },
  ],
  POLICY: [
    {
      name: '==',
      dName: '等于',
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: '不等于',
      enDName: 'unequal',
    },
  ],
  // 地址规则
  ADDRESS_FIELD: [
    {
      name: 'similarityMatch',
      dName: '相似度匹配',
      enDName: 'similarityMatch',
    },
    {
      name: 'similarityUnMatch',
      dName: '相似度不匹配',
      enDName: 'similarityUnMatch',
    },
  ],
  // 名单
  FIELD: [
    {
      name: 'match',
      dName: '匹配',
      enDName: 'match',
    },
    {
      name: 'unmatch',
      dName: '不匹配',
      enDName: 'unmatch',
    },
  ],
};
var _default = {
  conditionOperator: conditionOperator,
};
exports.default = _default;
