import Cookies from 'universal-cookie';
var cookies = new Cookies();
export var getLang = function getLang() {
  return cookies.get('lang') || 'cn';
};
export var createOtp = function createOtp() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var lang = getLang() || 'cn';
  return obj[lang] || {};
};
export default createOtp({
  cn: {
    is: '为',
    yu: '与',
    qie: '且',
    huo: '或',
    zhu: '组',
    fei: '非',
    mo: '模',
    changliang: '常量',
    bianliang: '变量',
    baohan: '包含',
    qianzhui: '前缀',
    buhan: '不包含',
    houzhui: '后缀',
    weikong: '为空',
    feikong: '不为空',
    cunzai: '存在',
    bucunzai: '不存在',
    fuhe: '复核名单列表：',
    pipei: '匹配字段：',
    pidu: '匹配度：',
    quanzhong: '权重：',
    tiaojian: '条件关系：',
    luoji: '逻辑关系：',
    guize: '规则描述：',
  },
  en: {
    is: 'is',
    yu: 'and',
    qie: 'and',
    huo: 'or',
    zhu: 'g',
    fei: 'n',
    mo: 't',
    changliang: 'constant',
    bianliang: 'variable',
    baohan: 'include',
    qianzhui: 'prefix',
    buhan: 'exclude',
    houzhui: 'suffix',
    weikong: 'isnull',
    feikong: 'notnull',
    cunzai: 'in',
    bucunzai: 'notin',
    fuhe: 'Review List',
    pipei: 'Match Fields：',
    pidu: 'Matching Score：',
    quanzhong: 'Weight：',
    tiaojian: 'Condition Relationship：',
    luoji: 'Logic Relationship：',
    guize: 'Rule Description：',
  },
});
