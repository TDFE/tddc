import I18N from './locale.js';
const conditionOperator = {
  STRING: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: I18N.src.constants.baoHan,
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: I18N.src.constants.buBaoHan,
      enDName: 'exclude',
    },
    {
      name: 'prefix',
      dName: I18N.src.constants.qianZhui,
      enDName: 'prefix',
    },
    {
      name: 'suffix',
      dName: I18N.src.constants.houZhui,
      enDName: 'suffix',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: I18N.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: I18N.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  DOUBLE: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: I18N.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: I18N.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: I18N.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: I18N.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  INT: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: I18N.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: I18N.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: I18N.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: I18N.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: I18N.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: I18N.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  LONG: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: I18N.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: I18N.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: I18N.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: I18N.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: I18N.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: I18N.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  DATETIME: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: I18N.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: I18N.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: I18N.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: I18N.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  BOOLEAN: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  ENUM: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: I18N.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: I18N.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: I18N.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: I18N.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],

  ARRAY: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: I18N.src.constants.baoHan,
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: I18N.src.constants.buBaoHan,
      enDName: 'exclude',
    },
  ],
  POLICY: [
    {
      name: '==',
      dName: I18N.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: I18N.src.constants.buDengYu,
      enDName: 'unequal',
    },
  ],
  // 地址规则
  ADDRESS_FIELD: [
    {
      name: 'similarityMatch',
      dName: I18N.src.constants.xiangSiDuPiPei,
      enDName: 'similarityMatch',
    },
    {
      name: 'similarityUnMatch',
      dName: I18N.src.constants.xiangSiDuBuPi,
      enDName: 'similarityUnMatch',
    },
  ],
  // 名单
  FIELD: [
    {
      name: 'match',
      dName: I18N.src.constants.piPei,
      enDName: 'match',
    },
    {
      name: 'unmatch',
      dName: I18N.src.constants.buPiPei,
      enDName: 'unmatch',
    },
  ],
};

export default {
  conditionOperator,
};
