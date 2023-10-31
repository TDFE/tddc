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
exports.default = void 0;
require('antd/lib/row/style');
var _row = _interopRequireDefault(require('antd/lib/row'));
var _react = _interopRequireWildcard(require('react'));
require('./index.less');
var _storage = require('../../storage');
var _Context = require('../../Context');
var _this = void 0;
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var themes = [
  {
    value: 'themeS3',
    label: '科技蓝',
  },
  {
    value: 'themeS2',
    label: '暗夜黑',
  },
  {
    value: 'themeS1',
    label: '极致白',
  },
];
var _default = function _default(props) {
  var onThemeChange = props.onThemeChange;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    theme = _useContext.theme,
    handleTheme = _useContext.handleTheme;
  var changeTheme = function changeTheme(theme) {
    handleTheme(theme);
    (0, _storage.setThemeStore)(theme);
    onThemeChange && onThemeChange(theme);
  };
  return /*#__PURE__*/ _react.default.createElement(
    _row.default,
    {
      type: 'flex',
      justify: 'space-between',
      className: 'user-info-body-theme-row',
    },
    themes.map(function (_ref) {
      var value = _ref.value,
        label = _ref.label;
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: value,
          onClick: changeTheme.bind(_this, value),
          key: value,
        },
        label,
        theme === value &&
          /*#__PURE__*/ _react.default.createElement('span', {
            className: 'icon-checked-wrap',
          }),
      );
    }),
  );
};
exports.default = _default;
