'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
exports.flatten = flatten;
require('antd/lib/breadcrumb/style');
var _breadcrumb = _interopRequireDefault(require('antd/lib/breadcrumb'));
var _react = _interopRequireWildcard(require('react'));
var _reactRouter = require('react-router');
var _reactRouterDom = require('react-router-dom');
require('./index.less');
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
var searchToObject = function searchToObject(search) {
  var pairs = search.substring(1).split('&');
  var obj = {};
  var pair;
  var i;
  for (i in pairs) {
    if (pairs[i] === '') {
      continue;
    }
    pair = pairs[i].split('=');
    obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }
  return obj;
};
var getParams = function getParams(params) {
  var paramStr = '';
  Object.keys(params).forEach(function (item) {
    if (paramStr === '') {
      paramStr = ''.concat(item, '=').concat(params[item]);
    } else {
      paramStr = ''.concat(paramStr, '&').concat(item, '=').concat(params[item]);
    }
  });
  return paramStr;
};
function flatten(arr) {
  var _arr$props;
  var res = [];
  var curArr =
    arr === null || arr === void 0
      ? void 0
      : (_arr$props = arr.props) === null || _arr$props === void 0
      ? void 0
      : _arr$props.children;
  for (
    var i = 0, length = curArr === null || curArr === void 0 ? void 0 : curArr.length;
    i < length;
    i++
  ) {
    var _curArr$i, _curArr$i$props;
    if (
      Array.isArray(
        (_curArr$i = curArr[i]) === null || _curArr$i === void 0
          ? void 0
          : (_curArr$i$props = _curArr$i.props) === null || _curArr$i$props === void 0
          ? void 0
          : _curArr$i$props.children,
      )
    ) {
      res = res.concat(flatten(curArr[i]));
    } else {
      var _curArr$i2;
      res.push(
        (_curArr$i2 = curArr[i]) === null || _curArr$i2 === void 0 ? void 0 : _curArr$i2.props,
      );
    }
  }
  return res;
}
var _default = function _default(WrapperComponent, rest) {
  var _ref = rest || {},
    _ref$includesSearch = _ref.includesSearch,
    includesSearch = _ref$includesSearch === void 0 ? ['currentTab'] : _ref$includesSearch,
    BreadCrumbCustom = _ref.BreadCrumbCustom,
    _ref$BreadCrumbProtot = _ref.BreadCrumbPrototype,
    BreadCrumbPrototype = _ref$BreadCrumbProtot === void 0 ? {} : _ref$BreadCrumbProtot,
    showHeader = _ref.showHeader;
  return (0, _reactRouter.withRouter)(function (props) {
    var _ref2 = props || {},
      match = _ref2.match,
      location = _ref2.location;
    var _ref3 = location || {},
      pathname = _ref3.pathname,
      search = _ref3.search;
    var children = WrapperComponent(_objectSpread({}, props));
    var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      breadList = _useState2[0],
      setBreadList = _useState2[1];

    // 记录链接上需要保留的query参数
    var newSearchObj = searchToObject(search);
    var newObj = {};
    for (var i in newSearchObj) {
      if (includesSearch.includes(i)) {
        newObj[i] = newSearchObj[i];
      }
    }
    (0, _react.useEffect)(
      function () {
        var _flatten;
        var routerArr = [];
        (_flatten = flatten(children)) === null || _flatten === void 0
          ? void 0
          : _flatten.forEach(function (props) {
              routerArr.push({
                path:
                  props.path === '/'
                    ? match === null || match === void 0
                      ? void 0
                      : match.path
                    : props.path,
                name: props.name,
              });
            });
        var breadCrumbList =
          routerArr === null || routerArr === void 0
            ? void 0
            : routerArr.filter(function (_ref4) {
                var path = _ref4.path;
                return (0, _reactRouter.matchPath)(pathname, {
                  path: path,
                });
              });
        breadCrumbList.sort(function (a, b) {
          return a.path.length - b.path.length;
        });
        setBreadList(breadCrumbList);
      },
      [pathname],
    );
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      ((breadList === null || breadList === void 0 ? void 0 : breadList.length) > 1 ||
        showHeader) &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'page-global-header bread-crumb-head',
          },
          BreadCrumbCustom &&
            !!(breadList === null || breadList === void 0 ? void 0 : breadList.length) &&
            BreadCrumbCustom(breadList),
          !BreadCrumbCustom &&
            /*#__PURE__*/ _react.default.createElement(
              _breadcrumb.default,
              _extends(
                {
                  separator: '>',
                  className: 'c-breadcrumb',
                },
                BreadCrumbPrototype || {},
              ),
              breadList === null || breadList === void 0
                ? void 0
                : breadList.map(function (v, i) {
                    var href = null;
                    if (
                      i <
                      (breadList === null || breadList === void 0 ? void 0 : breadList.length) - 1
                    ) {
                      href =
                        (v === null || v === void 0 ? void 0 : v.path) +
                        (getParams(newObj) ? '?'.concat(getParams(newObj)) : '');
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      _breadcrumb.default.Item,
                      {
                        key: v === null || v === void 0 ? void 0 : v.path,
                      },
                      href
                        ? /*#__PURE__*/ _react.default.createElement(
                            _reactRouterDom.Link,
                            {
                              to: href,
                            },
                            v === null || v === void 0 ? void 0 : v.name,
                          )
                        : v === null || v === void 0
                        ? void 0
                        : v.name,
                    );
                  }),
            ),
        ),
      children || null,
    );
  });
};
exports.default = _default;
