import otp from '../RuleTree/otp';
export var ruleOp = {
  '==': '=',
  '<=': '<=',
  '>=': '>=',
  '!=': '!=',
  '<': '<',
  '>': '>',
  include: otp.baohan,
  prefix: otp.qianzhui,
  exclude: otp.buhan,
  suffix: otp.houzhui,
  isnull: otp.weikong,
  notnull: otp.feikong,
  in: otp.cunzai,
  notin: otp.bucunzai,
};
export var excludeRuleTemplate = ['multiDimList/customList'];
// const excludeRuleTemplate = ["watchlist/customList", "multiDimList/customList"];
