'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
exports.flatten = flatten;
require('antd/lib/breadcrumb/style');
var _breadcrumb = _interopRequireDefault(require('antd/lib/breadcrumb'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
var _react = _interopRequireWildcard(require('react'));
var _router = require('dva/router');
var _locale = require('./locale');
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
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    var tempParamStr = encodeURIComponent(params[item]);
    if (paramStr === '') {
      paramStr = ''.concat(item, '=').concat(tempParamStr);
    } else {
      paramStr = ''.concat(paramStr, '&').concat(item, '=').concat(tempParamStr);
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
    showHeader = _ref.showHeader,
    forceNoHeader = _ref.forceNoHeader,
    lang = _ref.lang;
  return (0, _router.withRouter)(function (props) {
    var _ref2 = props || {},
      match = _ref2.match,
      location = _ref2.location,
      separator = _ref2.separator;
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
      newObj[i] = newSearchObj[i];
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
                query: props.query,
              });
            });
        var breadCrumbList =
          routerArr === null || routerArr === void 0
            ? void 0
            : routerArr.filter(function (_ref4) {
                var path = _ref4.path;
                return (0, _router.matchPath)(pathname, {
                  path: path,
                });
              });
        breadCrumbList.sort(function (a, b) {
          return a.path.length - b.path.length;
        });
        breadCrumbList === null || breadCrumbList === void 0
          ? void 0
          : breadCrumbList.map(function (item) {
              if (item === null || item === void 0 ? void 0 : item.query) {
                var _item$query;
                item.path += '?';
                (_item$query = item.query) === null || _item$query === void 0
                  ? void 0
                  : _item$query.map(function (item1, index1) {
                      item.path += Object.keys(item1)[0] + '=' + newObj[Object.values(item1)[0]];
                      if (index1 !== item.query.length - 1) {
                        item.path += '&';
                      }
                    });
              }
              if (item.path === pathname) {
                item.path = pathname + search;
              }
            });
        setBreadList(breadCrumbList);
      },
      [pathname],
    );
    var onlyTwoLevels =
      (breadList === null || breadList === void 0 ? void 0 : breadList.length) === 2;
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      ((breadList === null || breadList === void 0 ? void 0 : breadList.length) > 1 ||
        showHeader) &&
        !forceNoHeader &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'page-global-header bread-crumb-head',
          },
          BreadCrumbCustom &&
            !!(breadList === null || breadList === void 0 ? void 0 : breadList.length) &&
            BreadCrumbCustom(breadList, getParams(newObj)),
          !(BreadCrumbCustom && BreadCrumbCustom(breadList)) &&
            /*#__PURE__*/ _react.default.createElement(
              _breadcrumb.default,
              _extends(
                {
                  separator: !onlyTwoLevels ? separator || '>' : ' ',
                  className: 'c-breadcrumb',
                },
                BreadCrumbPrototype || {},
              ),
              breadList === null || breadList === void 0
                ? void 0
                : breadList.map(function (v, i) {
                    var query = v.query;
                    if (query && Array.isArray(query)) {
                      query.forEach(function (q) {
                        for (var qKey in q) {
                          var getVKey = q[qKey];
                          if (newSearchObj[getVKey]) {
                            newObj[qKey] = newSearchObj[getVKey];
                          }
                        }
                      });
                    }
                    var href = null;
                    if (
                      i <
                      (breadList === null || breadList === void 0 ? void 0 : breadList.length) - 1
                    ) {
                      href =
                        (v === null || v === void 0 ? void 0 : v.path) +
                        (getParams(newObj) ? '?'.concat(getParams(newObj)) : '');
                    }
                    if (onlyTwoLevels && i === 0) {
                      var dom = /*#__PURE__*/ _react.default.createElement(
                        _react.default.Fragment,
                        null,
                        /*#__PURE__*/ _react.default.createElement(_icon.default, {
                          type: 'left',
                          className: 'go-back',
                        }),
                        (0, _locale.getText)('back', lang) || '返回',
                      );
                      return /*#__PURE__*/ _react.default.createElement(
                        _breadcrumb.default.Item,
                        {
                          key: v === null || v === void 0 ? void 0 : v.path,
                        },
                        href
                          ? /*#__PURE__*/ _react.default.createElement(
                              _router.Link,
                              {
                                to: href,
                              },
                              dom,
                            )
                          : dom,
                      );
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      _breadcrumb.default.Item,
                      {
                        key: v === null || v === void 0 ? void 0 : v.path,
                      },
                      href
                        ? /*#__PURE__*/ _react.default.createElement(
                            _router.Link,
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
