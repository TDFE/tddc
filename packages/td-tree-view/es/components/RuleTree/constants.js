'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ruleOp = exports.excludeRuleTemplate = void 0;
var _otp = _interopRequireDefault(require('../RuleTree/otp'));
var ruleOp = (exports.ruleOp = {
  '==': '=',
  '<=': '<=',
  '>=': '>=',
  '!=': '!=',
  '<': '<',
  '>': '>',
  include: _otp['default'].baohan,
  prefix: _otp['default'].qianzhui,
  exclude: _otp['default'].buhan,
  suffix: _otp['default'].houzhui,
  isnull: _otp['default'].weikong,
  notnull: _otp['default'].feikong,
  in: _otp['default'].cunzai,
  notin: _otp['default'].bucunzai,
});
var excludeRuleTemplate = (exports.excludeRuleTemplate = ['multiDimList/customList']);
// const excludeRuleTemplate = ["watchlist/customList", "multiDimList/customList"];
