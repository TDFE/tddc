'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.initState = exports.default = void 0;
var _utils = require('./utils');
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
var initState = function initState() {
  return {
    userInfo: {},
    menuInfo: {},
    subApps: [],
    menuTreeReady: false,
    userReady: false,
    orgList: [],
    orgUuidTree: [],
    orgUuidMap: {},
    orgCodeMap: {},
    orgAppList: [],
    appList: [],
    appMap: {},
    currentOrgCode: '',
    currentOrg: {},
    currentApp: {},
    currentUser: {},
    personalMode: {
      lang: 'cn',
      theme: 'themeS1',
      layout: 'default',
      menuLevel: '',
    },
  };
};
exports.initState = initState;
var _default = function _default(state, action) {
  switch (action.type) {
    case 'init':
      return initState();
    case 'initUserInfo': {
      var _ref = action.payload || {},
        userInfo = _ref.userInfo;
      var _ref2 = userInfo || {},
        userName = _ref2.userName,
        account = _ref2.account,
        uuid = _ref2.uuid,
        avatar = _ref2.avatar;
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          currentUser: {
            userName: userName,
            account: account,
            uuid: uuid,
            avatar: avatar,
          },
        },
        action.payload,
      );
    }
    case 'initMenuTree': {
      var menuInfo = action.payload || {};
      var _ref3 = menuInfo || {},
        extendMap = _ref3.extendMap;
      try {
        if (typeof extendMap === 'string') {
          extendMap = JSON.parse(extendMap);
        }
      } catch (e) {}
      var subApps = (0, _utils.getSubAppsFromMenus)(
        (menuInfo === null || menuInfo === void 0 ? void 0 : menuInfo.menuTree) || [],
      );
      window.localStorage.setItem('customTree', JSON.stringify(menuInfo));
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          subApps: subApps,
          menuInfo: _objectSpread(
            _objectSpread({}, menuInfo),
            {},
            {
              extendMap: extendMap,
            },
          ),
          menuTreeReady: true,
        },
      );
    }
    case 'initMenuTreeReady': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          menuTreeReady: true,
        },
      );
    }
    case 'initUserReady': {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          userReady: true,
        },
      );
    }
    case 'setOrgInfo': {
      var orgAppList = (0, _utils.formatAppList)(action.payload.orgAppList || []);
      return _objectSpread(
        _objectSpread(_objectSpread({}, state), action.payload),
        {},
        {
          orgAppList: orgAppList,
        },
      );
    }
    case 'setCurrentApp': {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }
    case 'personalMode': {
      return _objectSpread(_objectSpread({}, state), action.payload);
    }
    default:
      throw new Error();
  }
};
exports.default = _default;
