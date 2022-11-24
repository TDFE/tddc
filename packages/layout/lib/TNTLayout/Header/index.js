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

require('antd/lib/layout/style');

var _layout = _interopRequireDefault(require('antd/lib/layout'));

var _react = _interopRequireWildcard(require('react'));

require('./index.less');

var _Actions = _interopRequireDefault(require('./Actions'));

var _AppList = _interopRequireDefault(require('./AppList'));

var _OrgAppList = _interopRequireDefault(require('./OrgAppList'));

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

var AntdHeader = _layout.default.Header;

var _default = function _default(props) {
  var orgList = props.orgList,
    appList = props.appList,
    headerTabs = props.headerTabs;
  var headerRef = (0, _react.useRef)();
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'tnt-layout-header',
      ref: headerRef,
    },
    headerTabs,
    orgList && /*#__PURE__*/ _react.default.createElement(_OrgAppList.default, props),
    appList && !orgList && /*#__PURE__*/ _react.default.createElement(_AppList.default, props),
    /*#__PURE__*/ _react.default.createElement(
      _Actions.default,
      _extends({}, props, {
        headerRef: headerRef,
      }),
    ),
  );
};

exports.default = _default;
