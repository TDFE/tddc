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
