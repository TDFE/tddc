'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.setThemeStore =
  exports.setSideMenuStore =
  exports.setMenuLevelStore =
  exports.setLanguageStore =
  exports.setCurrentOrgStore =
  exports.setCurrentAppStore =
  exports.getThemeStore =
  exports.getSideMenuStore =
  exports.getMenuLevelStore =
  exports.getLanguageStore =
  exports.getCurrentOrgStore =
  exports.getCurrentAppStore =
    void 0;
var _utils = require('./utils');
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
var getSideMenuStore = function getSideMenuStore() {
  return (0, _utils.safeParseJSON)(localStorage.getItem('sideMenu'), {});
};
exports.getSideMenuStore = getSideMenuStore;
var setSideMenuStore = function setSideMenuStore() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  localStorage.setItem(
    'sideMenu',
    JSON.stringify(_objectSpread(_objectSpread({}, getSideMenuStore()), params)),
  );
};
exports.setSideMenuStore = setSideMenuStore;
var setCurrentAppStore = function setCurrentAppStore() {
  var currentApp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  localStorage.setItem('currentApp_new', JSON.stringify(currentApp));
  localStorage.setItem('currentApp', JSON.stringify(currentApp));
};
exports.setCurrentAppStore = setCurrentAppStore;
var getCurrentAppStore = function getCurrentAppStore() {
  return (0, _utils.safeParseJSON)(localStorage.getItem('currentApp_new'), {});
};
exports.getCurrentAppStore = getCurrentAppStore;
var setCurrentOrgStore = function setCurrentOrgStore() {
  var currentOrg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  localStorage.setItem('currentOrg_new', JSON.stringify(currentOrg));
  localStorage.setItem('currentOrg', JSON.stringify(currentOrg));
};
exports.setCurrentOrgStore = setCurrentOrgStore;
var getCurrentOrgStore = function getCurrentOrgStore() {
  return (0, _utils.safeParseJSON)(localStorage.getItem('currentOrg_new'), {});
};
exports.getCurrentOrgStore = getCurrentOrgStore;
var setLanguageStore = function setLanguageStore(lang) {
  return localStorage.setItem('lang', lang);
};
exports.setLanguageStore = setLanguageStore;
var getLanguageStore = function getLanguageStore() {
  return localStorage.getItem('lang');
};
exports.getLanguageStore = getLanguageStore;
var setThemeStore = function setThemeStore(theme) {
  return localStorage.setItem('theme', theme);
};
exports.setThemeStore = setThemeStore;
var getThemeStore = function getThemeStore() {
  return localStorage.getItem('theme');
};
exports.getThemeStore = getThemeStore;
var setMenuLevelStore = function setMenuLevelStore(menuLevel) {
  return localStorage.setItem('menuLevel', menuLevel);
};
exports.setMenuLevelStore = setMenuLevelStore;
var getMenuLevelStore = function getMenuLevelStore() {
  return localStorage.getItem('menuLevel');
};
exports.getMenuLevelStore = getMenuLevelStore;
