import otp from '../RuleTree/otp';

export const ruleOp = {
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

export const excludeRuleTemplate = ['multiDimList/customList'];
// const excludeRuleTemplate = ["watchlist/customList", "multiDimList/customList"];
