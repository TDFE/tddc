'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getText = exports.getLang = exports['default'] = void 0;
var _typeof2 = _interopRequireDefault(require('@babel/runtime/helpers/typeof'));
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
var _zhCN = _interopRequireDefault(require('./.octopus/zh-CN'));
var _enUS = _interopRequireDefault(require('./.octopus/en-US'));
var _thTH = _interopRequireDefault(require('./.octopus/th-TH'));
var _arEG = _interopRequireDefault(require('./.octopus/ar-EG'));
var _koKR = _interopRequireDefault(require('./.octopus/ko-KR'));
var _esES = _interopRequireDefault(require('./.octopus/es-ES'));
var cookies = new _universalCookie['default']();

// 语言包映射
var builtInLocales = {
  'zh-cn': _zhCN['default'],
  cn: _zhCN['default'],
  // 兼容旧的 'cn' 标识
  en: _enUS['default'],
  th: _thTH['default'],
  ar: _arEG['default'],
  ko: _koKR['default'],
  es: _esES['default'],
};
var getLang = (exports.getLang = function getLang() {
  var lang = cookies.get('lang');
  return lang !== 'cn' ? lang : 'zh-cn';
});

/**
 * 获取文本，支持外部传入的语言包覆盖
 * @param {string} key - 文本 key
 * @param {string} language - 语言标识
 * @param {Object} locale - 外部传入的语言包（可选），通过 createOtp 生成的扁平对象
 * @param {...any} params - 替换参数
 */
var getText = (exports.getText = function getText(key, language, locale) {
  var _actualLocale$key, _actualLocale;
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
  if ((0, _typeof2['default'])(locale) !== 'object' || locale === null) {
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
  return text;
});
var _default = (exports['default'] = {
  'zh-cn': _zhCN['default'],
  en: _enUS['default'],
  th: _thTH['default'],
  // 泰语
  ar: _arEG['default'],
  // 阿拉伯语（埃及）
  ko: _koKR['default'],
  // 韩语
  es: _esES['default'], // 西班牙语
});
