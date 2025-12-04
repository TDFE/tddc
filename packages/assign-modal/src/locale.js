import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
  authorizesOrgList: '机构列表',
  allOrgAvailable: '全部机构',
  authorizesAppList: '渠道列表',
  allAppAvailable: '全部渠道',
  authorizesUserList: '用户列表',
  allUserAvailable: '全部用户',
  search: '请输入机构名称',
  availableOrgs: '可用机构',
  availableApps: '可用渠道',
  availableUsers: '可用用户',
  clear: '清空',
  hasBeenSelected: '已选',
  numOfOrg: '%s 个机构',
  numOfApp: '%s 个渠道',
  numOfUser: '%s 个用户',
  enterAppName: '请输入渠道名称',
  enterUserName: '请输入用户名称',
};

export const en_US = {
  authorizesOrgList: 'Organization List',
  allOrgAvailable: 'All Organizations',
  authorizesAppList: 'Channel List',
  allAppAvailable: 'All Channels',
  authorizesUserList: 'Account List',
  allUserAvailable: 'All Accounts',
  search: 'Organization name',
  availableOrgs: 'Available Organizations',
  availableApps: 'Available Channels',
  availableUsers: 'Available Users',
  clear: 'Clear',
  hasBeenSelected: 'Selected',
  numOfOrg: '%s Organizations',
  numOfApp: '%s Channels',
  numOfUser: '%s Accounts',
  enterAppName: 'Enter Channel name',
  enterUserName: 'Enter Account name',
};

// 内置语言包
const builtInLocales = {
  cn: zh_CN,
  en: en_US,
};

/**
 * 获取文本，支持外部传入的语言包覆盖
 * @param {string} key - 文本 key
 * @param {string} language - 语言标识
 * @param {Object} locale - 外部传入的语言包（可选），通过 createOtp 生成的扁平对象
 * @param {...any} params - 替换参数
 */
export const getText = (key, language, locale, ...params) => {
  // 兼容旧的调用方式：getText(key, language, ...params)
  // 新的调用方式：getText(key, language, locale, ...params)
  let actualLocale = locale;
  let actualParams = params;

  // 如果 locale 不是对象或为 null，则认为是旧的调用方式
  if (typeof locale !== 'object' || locale === null) {
    actualLocale = null;
    actualParams = locale !== undefined ? [locale, ...params] : params;
  }

  const lang = language || getLanguage();
  const builtIn = builtInLocales[lang] || zh_CN;

  // locale 是扁平对象（通过 createOtp 生成），直接覆盖内置语言包
  const text = actualLocale?.[key] ?? builtIn[key];

  if (actualParams?.length) {
    return actualParams.reduce((acc, cur) => {
      return acc?.replace(/%s/, cur);
    }, text);
  }

  return text;
};

export const getLanguage = () => cookies.get('lang', { path: '/' }) || 'cn';

export default { en_US, zh_CN };
