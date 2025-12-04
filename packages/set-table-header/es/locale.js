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
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
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
var _getProp = function getProp(obj, is, value) {
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
    return _getProp(obj[prop], is, value);
  }
};
var I18N = mapLanguage[getLang()];
I18N.template = function (str, args) {
  if (!str) {
    return '';
  }
  return str.replace(/\{(.+?)\}/g, function (match, p1) {
    return _getProp(_objectSpread(_objectSpread({}, I18N), args), p1);
  });
};
export default I18N;
