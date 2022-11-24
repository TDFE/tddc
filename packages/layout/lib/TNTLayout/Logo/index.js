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
var _react = _interopRequireWildcard(require('react'));
require('./index.less');
var _Context = require('../Context');
var _images = require('../images');
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
var getStrLen = function getStrLen() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    var chartLength = 2;

    // 单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
      chartLength = 1;
    }
    len += chartLength;
  }
  return len;
};
var Logo = function Logo(props) {
  var _logo$props;
  var logo = props.logo,
    name = props.name,
    enName = props.enName,
    size = props.size,
    siderWidth = props.siderWidth,
    collapsed = props.collapsed;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    language = _useContext.language;
  var productNameLen = getStrLen(language === 'cn' ? name : enName);
  var fontSize =
    {
      12: 19,
      13: 18,
      14: 17,
      15: 16,
      16: 15,
    }[Math.max(12, Math.min(productNameLen, 16))] + (size === 'large' ? 1 : 0);
  var LogoImg = function LogoImg(props) {
    return /*#__PURE__*/ _react.default.createElement(
      'img',
      _extends(
        {
          onError: function onError(e) {
            e.target.onerror = null;
            e.target.src = _images.logoImgMap.default;
          },
        },
        props,
      ),
    );
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'tnt-layout-logo',
      style: {
        fontSize: fontSize,
        width: siderWidth,
      },
    },
    typeof logo === 'string'
      ? /*#__PURE__*/ _react.default.createElement(LogoImg, {
          src: _images.logoImgMap[logo] || _images.logoImgMap.default,
        })
      : logo && logo.type === 'img'
      ? /*#__PURE__*/ _react.default.createElement(
          LogoImg,
          _extends({}, logo.props, {
            src:
              ((_logo$props = logo.props) === null || _logo$props === void 0
                ? void 0
                : _logo$props.src) || _images.logoImgMap.default,
          }),
        )
      : logo,
    collapsed
      ? ''
      : {
          cn: name,
          en: enName,
        }[language],
  );
};
var _default = Logo;
exports.default = _default;
