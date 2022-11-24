'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireDefault(require('react'));

require('./index.less');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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

// 返回一个无状态的函数组件
function WrapNode(WrappedComponent) {
  return function (props) {
    var x = props.x,
      y = props.y,
      width = props.width,
      fixed = props.fixed,
      minWidth = props.minWidth,
      minHeight = props.minHeight;
    var s = {};

    if (fixed) {
      s = {
        width: minWidth,
      };
    } else {
      s = {
        width: width,
      };
    }

    var style = _objectSpread(
      {
        position: 'absolute',
        top: x,
        left: y,
        fontFamily: 'Segoe UI',
        fontSize: '12px',
        fontWeight: 'normal',
        background: 'white',
        height: minHeight,
      },
      s,
    );

    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'wrap-node',
        style: style,
      },
      /*#__PURE__*/ _react.default.createElement(WrappedComponent, props),
    );
  };
}

var _default = WrapNode;
exports.default = _default;
