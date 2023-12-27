'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
require('./index.less');
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
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
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
// 返回一个无状态的class类组件, memo 用于优化性能
var WrapNode = /*#__PURE__*/ (0, _react.memo)(function (props) {
  var x = props.x,
    y = props.y,
    component = props.component;
  (0, _react.useEffect)(function () {}, []);
  var pos = (0, _react.useMemo)(
    function () {
      return {
        left: y,
        top: x,
      };
    },
    [x, y],
  );
  var style = {
    transform: 'translate('.concat(pos['left'], 'px, ').concat(pos['top'], 'px)'),
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'wrap-node',
      style: _objectSpread({}, style),
    },
    component(props),
  );
}, areEqual);
var areEqual = function areEqual(prevProps, nextProps) {
  var prevX = prevProps.x,
    prevY = prevProps.y,
    preUnique = prevProps.unique;
  var nextX = nextProps.x,
    nextY = nextProps.y,
    nextUnique = nextProps.unique;
  if (prevX === nextX && prevY === nextY && preUnique === nextUnique) {
    return true;
  }
  if (parent === null) {
    return false;
  }
  return false;
};
var _default = (exports.default = WrapNode);
