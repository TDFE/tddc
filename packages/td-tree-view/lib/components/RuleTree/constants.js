'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ruleOp = exports.excludeRuleTemplate = void 0;
var ruleOp = {
  '==': '=',
  '<=': '<=',
  '>=': '>=',
  '!=': '!=',
  '<': '<',
  '>': '>',
  include: '包含',
  prefix: '前缀',
  exclude: '不包含',
  suffix: '后缀',
  isnull: '为空',
  notnull: '不为空',
  in: '存在',
  notin: '不存在',
};
exports.ruleOp = ruleOp;
var excludeRuleTemplate = ['multiDimList/customList'];
// const excludeRuleTemplate = ["watchlist/customList", "multiDimList/customList"];
exports.excludeRuleTemplate = excludeRuleTemplate;
