function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
import Cookies from 'universal-cookie';
import zhCN from './.octopus/zh-CN';
import enUS from './.octopus/en-US';
import thTH from './.octopus/th-TH';
import arEG from './.octopus/ar-EG';
import koKR from './.octopus/ko-KR';
import esES from './.octopus/es-ES';
var cookies = new Cookies();

// 语言包映射
var builtInLocales = {
  'zh-cn': zhCN,
  cn: zhCN,
  // 兼容旧的 'cn' 标识
  en: enUS,
  th: thTH,
  ar: arEG,
  ko: koKR,
  es: esES,
};

/**
 * 获取文本，支持外部传入的语言包覆盖
 * @param {string} key - 文本 key
 * @param {string} language - 语言标识
 * @param {Object} locale - 外部传入的语言包（可选），通过 createOtp 生成的扁平对象
 * @param {...any} params - 替换参数
 */
export var getText = function getText(key, language, locale) {
  var _actualLocale$key, _actualLocale, _actualParams;
  // 兼容旧的调用方式：getText(key, language, ...params)
  // 新的调用方式：getText(key, language, locale, ...params)
  var actualLocale = locale;
  for (
    var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3;
    _key < _len;
    _key++
  ) {
    params[_key - 3] = arguments[_key];
  }
  var actualParams = params;

  // 如果 locale 不是对象或为 null，则认为是旧的调用方式
  if (_typeof(locale) !== 'object' || locale === null) {
    actualLocale = null;
    actualParams = locale !== undefined ? [locale].concat(params) : params;
  }
  var lang = language || getLang();
  var builtIn = builtInLocales[lang] || builtInLocales['zh-cn'];

  // locale 是扁平对象（通过 createOtp 生成），直接覆盖内置语言包
  var text =
    (_actualLocale$key =
      (_actualLocale = actualLocale) === null || _actualLocale === void 0
        ? void 0
        : _actualLocale[key]) !== null && _actualLocale$key !== void 0
      ? _actualLocale$key
      : builtIn[key];
  if (
    (_actualParams = actualParams) === null || _actualParams === void 0
      ? void 0
      : _actualParams.length
  ) {
    return actualParams.reduce(function (acc, cur) {
      return acc === null || acc === void 0 ? void 0 : acc.replace(/%s/, cur);
    }, text);
  }
  return text;
};
export var getLang = function getLang() {
  var lang = cookies.get('lang');
  return lang !== 'cn' ? lang : 'zh-cn';
};
export default {
  'zh-cn': zhCN,
  en: enUS,
  th: thTH,
  // 泰语
  ar: arEG,
  // 阿拉伯语（埃及）
  ko: koKR,
  // 韩语
  es: esES, // 西班牙语
};
