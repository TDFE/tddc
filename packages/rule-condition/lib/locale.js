'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
var _zhCN = _interopRequireDefault(require('./octopus/zh-CN'));
var _enUS = _interopRequireDefault(require('./octopus/en-US'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
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
