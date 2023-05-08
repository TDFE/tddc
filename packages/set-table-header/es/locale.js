function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
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
  key = _toPropertyKey(key);
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
import Cookies from 'universal-cookie';
import zhCN from './.octopus/zh-CN';
import enUS from './.octopus/en-US';
var cookies = new Cookies();
var getLang = function getLang() {
  return cookies.get('lang') || 'cn';
};
var mapLanguage = {
  en: enUS,
  cn: zhCN,
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
export default I18N;
