import Cookies from 'universal-cookie';
import zhCN from './.octopus/zh-CN';
import enUS from './.octopus/en-US';
import thTH from './.octopus/th-TH';
import arEG from './.octopus/ar-EG';
import koKR from './.octopus/ko-KR';
import esES from './.octopus/es-ES';

const cookies = new Cookies();

// 语言包映射
const builtInLocales = {
  'zh-cn': zhCN,
  cn: zhCN, // 兼容旧的 'cn' 标识
  en: enUS,
  th: thTH,
  ar: arEG,
  ko: koKR,
  es: esES,
};

export const getLang = () => {
  const lang = cookies.get('lang');
  return lang !== 'cn' ? lang : 'zh-cn';
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

  const lang = language || getLang();
  const builtIn = builtInLocales[lang] || builtInLocales['zh-cn'];

  // locale 是扁平对象（通过 createOtp 生成），直接覆盖内置语言包
  const text = actualLocale?.[key] ?? builtIn[key];

  return text;
};

export default {
  'zh-cn': zhCN,
  en: enUS,
  th: thTH, // 泰语
  ar: arEG, // 阿拉伯语（埃及）
  ko: koKR, // 韩语
  es: esES, // 西班牙语
};
