import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
  back: '返回',
};

export const en_US = {
  back: 'Back',
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
