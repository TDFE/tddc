'use strict';

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
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactDom = _interopRequireDefault(require('react-dom'));
var _classnames = _interopRequireDefault(require('classnames'));
var _lodash = require('lodash');
require('./index.less');
var _Context = require('../../Context');
var _utils = require('../../utils');
var _Icon = _interopRequireDefault(require('../../Icon'));
var _NavigationPopup = _interopRequireDefault(require('./NavigationPopup'));
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
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
var createPopupContainer = function createPopupContainer() {
  var div = document.createElement('div');
  div.setAttribute('class', 'tnt-navigation-popup');
  return div;
};
var _default = function _default(props) {
  var headerRef = props.headerRef,
    menus = props.menus;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    visible = _useState2[0],
    setVisible = _useState2[1];
  var popupRef = (0, _react.useRef)();
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    language = _useContext.language;
  (0, _react.useEffect)(function () {
    var _headerRef$current;
    popupRef.current = createPopupContainer();
    headerRef === null || headerRef === void 0
      ? void 0
      : (_headerRef$current = headerRef.current) === null || _headerRef$current === void 0
      ? void 0
      : _headerRef$current.appendChild(popupRef.current);
    return function () {
      var _headerRef$current2;
      headerRef === null || headerRef === void 0
        ? void 0
        : (_headerRef$current2 = headerRef.current) === null || _headerRef$current2 === void 0
        ? void 0
        : _headerRef$current2.removeChild(popupRef.current);
    };
  }, []);
  (0, _react.useEffect)(
    function () {
      var classNames = popupRef.current.getAttribute('class').split(' ');
      if (visible) {
        _reactDom.default.render(
          /*#__PURE__*/ _react.default.createElement(
            _NavigationPopup.default,
            _extends({}, props, {
              language: language,
              menus: menus,
              containerRef: headerRef,
              popupRef: popupRef,
              close: function close() {
                return setVisible(false);
              },
            }),
          ),
          popupRef.current,
        );
        popupRef.current.setAttribute(
          'class',
          classNames
            .filter(function (item) {
              return item !== 'hide';
            })
            .join(' '),
        );
      } else {
        popupRef.current.setAttribute(
          'class',
          (0, _lodash.uniq)([].concat(_toConsumableArray(classNames), ['hide'])).join(' '),
        );
      }
    },
    [visible],
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      onClick: function onClick(evt) {
        var _evt$nativeEvent, _evt$nativeEvent2;
        evt.stopPropagation();
        (_evt$nativeEvent = evt.nativeEvent) === null || _evt$nativeEvent === void 0
          ? void 0
          : _evt$nativeEvent.stopImmediatePropagation();
        (_evt$nativeEvent2 = evt.nativeEvent) === null || _evt$nativeEvent2 === void 0
          ? void 0
          : _evt$nativeEvent2.stopPropagation();
        setVisible(!visible);
      },
      className: (0, _classnames.default)('tnt-navigation', {
        active: visible,
      }),
    },
    /*#__PURE__*/ _react.default.createElement(_Icon.default, {
      type: 'unordered-list',
    }),
    /*#__PURE__*/ _react.default.createElement('span', null, '\u5168\u5C40\u5BFC\u822A'),
  );
};
exports.default = _default;
