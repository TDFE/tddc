'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _locale = _interopRequireDefault(require('./locale.js'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var conditionOperator = {
  STRING: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: _locale.default.src.constants.baoHan,
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: _locale.default.src.constants.buBaoHan,
      enDName: 'exclude',
    },
    {
      name: 'prefix',
      dName: _locale.default.src.constants.qianZhui,
      enDName: 'prefix',
    },
    {
      name: 'suffix',
      dName: _locale.default.src.constants.houZhui,
      enDName: 'suffix',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: _locale.default.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: _locale.default.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  DOUBLE: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: _locale.default.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: _locale.default.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: _locale.default.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: _locale.default.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  INT: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: _locale.default.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: _locale.default.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: _locale.default.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: _locale.default.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: _locale.default.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: _locale.default.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  LONG: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: _locale.default.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: _locale.default.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: _locale.default.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: _locale.default.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: _locale.default.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: _locale.default.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  DATETIME: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: '>',
      dName: _locale.default.src.constants.daYu,
      enDName: 'greater than',
    },
    {
      name: '>=',
      dName: _locale.default.src.constants.daYuDengYu,
      enDName: 'equal or greater than',
    },
    {
      name: '<',
      dName: _locale.default.src.constants.xiaoYu,
      enDName: 'less than',
    },
    {
      name: '<=',
      dName: _locale.default.src.constants.xiaoYuDengYu,
      enDName: 'equal or less than',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  BOOLEAN: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
  ],
  ENUM: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'isnull',
      dName: _locale.default.src.constants.weiKong,
      enDName: 'isnull',
    },
    {
      name: 'notnull',
      dName: _locale.default.src.constants.buWeiKong,
      enDName: 'notnull',
    },
    {
      name: 'in',
      dName: _locale.default.src.constants.cunZaiYu,
      enDName: 'in',
    },
    {
      name: 'notin',
      dName: _locale.default.src.constants.buCunZaiYu,
      enDName: 'notin',
    },
  ],
  ARRAY: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
    {
      name: 'include',
      dName: _locale.default.src.constants.baoHan,
      enDName: 'include',
    },
    {
      name: 'exclude',
      dName: _locale.default.src.constants.buBaoHan,
      enDName: 'exclude',
    },
  ],
  POLICY: [
    {
      name: '==',
      dName: _locale.default.src.constants.dengYu,
      enDName: 'equal',
    },
    {
      name: '!=',
      dName: _locale.default.src.constants.buDengYu,
      enDName: 'unequal',
    },
  ],
  // 地址规则
  ADDRESS_FIELD: [
    {
      name: 'similarityMatch',
      dName: _locale.default.src.constants.xiangSiDuPiPei,
      enDName: 'similarityMatch',
    },
    {
      name: 'similarityUnMatch',
      dName: _locale.default.src.constants.xiangSiDuBuPi,
      enDName: 'similarityUnMatch',
    },
  ],
  // 名单
  FIELD: [
    {
      name: 'match',
      dName: _locale.default.src.constants.piPei,
      enDName: 'match',
    },
    {
      name: 'unmatch',
      dName: _locale.default.src.constants.buPiPei,
      enDName: 'unmatch',
    },
  ],
};
var _default = {
  conditionOperator: conditionOperator,
};
exports.default = _default;
