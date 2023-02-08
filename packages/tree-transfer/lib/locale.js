'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
var _zhCN = _interopRequireDefault(require('../.octopus/zh-CN'));
var _enUS = _interopRequireDefault(require('../.octopus/en-US'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var cookies = new _universalCookie.default();
var getLang = function getLang() {
  return cookies.get('lang') || 'cn';
};
var mapLanguage = {
  en: _enUS.default,
  cn: _zhCN.default,
};
var getProp = function getProp(obj, is, value) {
  if (typeof is === 'string') {
    is = is.split('.');
  }
  if (is.length === 1 && value !== undefined) {
    return (obj[is[0]] = value);
  } else if (is.length === 0) {
    return obj;
  } else {
    var prop = is.shift();
    if (value !== undefined && obj[prop] === undefined) {
      obj[prop] = {};
    }
    return getProp(obj[prop], is, value);
  }
};
var I18N = mapLanguage[getLang()];
I18N.template = function (str, args) {
  if (!str) {
    return '';
  }
  return str.replace(/\{(.+?)\}/g, function (match, p1) {
    return getProp(_objectSpread(_objectSpread({}, I18N), args), p1);
  });
};
var _default = I18N;
exports.default = _default;
