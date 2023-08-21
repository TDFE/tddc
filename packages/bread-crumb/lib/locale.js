'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.zh_CN = exports.getText = exports.getLanguage = exports.en_US = exports.default = void 0;
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var cookies = new _universalCookie.default();
var zh_CN = {
  back: '返回',
};
exports.zh_CN = zh_CN;
var en_US = {
  back: 'Back',
};
exports.en_US = en_US;
var getText = function getText(key, language) {
  var _ref;
  var text =
    (_ref =
      {
        cn: zh_CN,
        en: en_US,
      }[language || getLanguage()] || zh_CN) === null || _ref === void 0
      ? void 0
      : _ref[key];
  for (
    var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
    _key < _len;
    _key++
  ) {
    params[_key - 2] = arguments[_key];
  }
  if (params === null || params === void 0 ? void 0 : params.length) {
    return params.reduce(function (acc, cur) {
      return acc.replace(/%s/, cur);
    }, text);
  }
  return text;
};
exports.getText = getText;
var getLanguage = function getLanguage() {
  return (
    cookies.get('lang', {
      path: '/',
    }) || 'cn'
  );
};
exports.getLanguage = getLanguage;
var _default = {
  en_US: en_US,
  zh_CN: zh_CN,
};
exports.default = _default;
