'use strict';

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

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = exports.HeaderActionItem = void 0;

var _react = _interopRequireWildcard(require('react'));

require('./index.less');

var _Context = require('./Context');

var _checkAuth = _interopRequireDefault(require('./checkAuth'));

var _Tabs = _interopRequireDefault(require('./Tabs'));

var _utils = require('./utils');

var _Layout = _interopRequireDefault(require('./Layout'));

var _storage = require('./storage');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var HeaderActionItem = function HeaderActionItem(props) {
  return /*#__PURE__*/ _react.default.createElement('div', props, props.children);
};

exports.HeaderActionItem = HeaderActionItem;

var TNTLayout = function TNTLayout(props) {
  var _props$userInfo = props.userInfo,
    userInfo = _props$userInfo === void 0 ? {} : _props$userInfo,
    _props$extendMap = props.extendMap,
    extendMap = _props$extendMap === void 0 ? {} : _props$extendMap,
    _props$menus = props.menus,
    menus = _props$menus === void 0 ? [] : _props$menus;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    level2Menus = _useState2[0],
    setLevel2Menus = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    supportLevelChange = _useState4[0],
    setSupportLevelChange = _useState4[1];

  var theme =
    (0, _storage.getThemeStore)() ||
    (extendMap === null || extendMap === void 0 ? void 0 : extendMap.defaultTheme) ||
    userInfo.theme ||
    'themeS3';
  theme = theme === 'default' ? 'themeS3' : theme;
  var language = (0, _storage.getLanguageStore)() || userInfo.lang || 'cn';
  var menuLevel = (0, _storage.getMenuLevelStore)() || '3';

  var _useState5 = (0, _react.useState)(theme),
    _useState6 = _slicedToArray(_useState5, 2),
    curTheme = _useState6[0],
    setCurTheme = _useState6[1];

  var _useState7 = (0, _react.useState)(language),
    _useState8 = _slicedToArray(_useState7, 2),
    curLanguage = _useState8[0],
    setCurLanguage = _useState8[1];

  var _useState9 = (0, _react.useState)(menuLevel),
    _useState10 = _slicedToArray(_useState9, 2),
    curMenuLevel = _useState10[0],
    setCurMenuLevel = _useState10[1];

  var handleTheme = function handleTheme(value) {
    setCurTheme(value);
  };

  var handleLanguage = function handleLanguage(value) {
    setCurLanguage(value);
  };

  var handleMenuLevel = function handleMenuLevel(value) {
    setCurMenuLevel(value);
  };

  (0, _react.useEffect)(
    function () {
      if (
        (menus === null || menus === void 0 ? void 0 : menus.length) &&
        (0, _utils.hasLevel3)(menus)
      ) {
        setLevel2Menus((0, _utils.formatLevel2Menu)(menus));
        setSupportLevelChange(true);
      } else {
        setSupportLevelChange(false);
      }
    },
    [menus],
  );
  return /*#__PURE__*/ _react.default.createElement(
    _Context.ThemeContext.Provider,
    {
      value: {
        theme: curTheme,
        handleTheme: handleTheme,
        language: curLanguage,
        handleLanguage: handleLanguage,
        menuLevel: menuLevel,
        handleMenuLevel: handleMenuLevel,
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      _Context.AuthContext.Provider,
      {
        value: (0, _checkAuth.default)(menus),
      },
      /*#__PURE__*/ _react.default.createElement(
        _Layout.default,
        _extends({}, props, {
          menus:
            curMenuLevel === '2' &&
            (level2Menus === null || level2Menus === void 0 ? void 0 : level2Menus.length)
              ? level2Menus
              : menus,
          supportLevelChange: supportLevelChange,
        }),
      ),
    ),
  );
};

TNTLayout.HeaderActionItem = HeaderActionItem;
TNTLayout.ThemeContext = _Context.ThemeContext;
TNTLayout.AuthContext = _Context.AuthContext;
TNTLayout.HeaderTabs = _Tabs.default;
TNTLayout.findMenuInfoByPath = _utils.findMenuInfoByPath;
var _default = TNTLayout;
exports.default = _default;
