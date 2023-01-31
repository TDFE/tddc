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
var _locale = _interopRequireDefault(require('../../locale'));
var React = _interopRequireWildcard(require('react'));
var _context = require('./context');
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
/*
 * @Descripttion: 空状态
 * @Author: 郑泳健
 * @Date: 2022-12-19 16:45:16
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-01-31 17:36:32
 */
// @ts-ignore

var defaultRenderEmpty = function defaultRenderEmpty(componentName) {
  return /*#__PURE__*/ React.createElement(_context.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');
    return /*#__PURE__*/ React.createElement(
      'div',
      null,
      /*#__PURE__*/ React.createElement('img', {
        style: {
          width: 80,
          height: 50,
          marginTop: 35,
        },
        src: require('../../img/no-data-s.png'),
      }),
      /*#__PURE__*/ React.createElement(
        'div',
        null,
        _locale.default.component.defaultrenderempty.zanWuShuJu,
      ),
    );
  });
};
var _default = defaultRenderEmpty;
exports.default = _default;
