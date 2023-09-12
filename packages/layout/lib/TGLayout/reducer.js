'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.initState = exports.default = void 0;
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
