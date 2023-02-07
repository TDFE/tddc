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
exports.useCompactItemContext = exports.SpaceCompactItemContext = void 0;
var React = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
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
var SpaceCompactItemContext = /*#__PURE__*/ React.createContext(null);
exports.SpaceCompactItemContext = SpaceCompactItemContext;
var useCompactItemContext = function useCompactItemContext(prefixCls, direction) {
  var compactItemContext = React.useContext(SpaceCompactItemContext);
  var compactItemClassnames = React.useMemo(
    function () {
      var _classNames;
      if (!compactItemContext) return '';
      var compactDirection = compactItemContext.compactDirection,
        isFirstItem = compactItemContext.isFirstItem,
        isLastItem = compactItemContext.isLastItem;
      var separator = compactDirection === 'vertical' ? '-vertical-' : '-';
      return (0, _classnames.default)(
        ((_classNames = {}),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-compact').concat(separator, 'item'),
          true,
        ),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-compact').concat(separator, 'first-item'),
          isFirstItem,
        ),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-compact').concat(separator, 'last-item'),
          isLastItem,
        ),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-compact').concat(separator, 'item-rtl'),
          direction === 'rtl',
        ),
        _classNames),
      );
    },
    [prefixCls, direction, compactItemContext],
  );
  return {
    compactSize:
      compactItemContext === null || compactItemContext === void 0
        ? void 0
        : compactItemContext.compactSize,
    compactDirection:
      compactItemContext === null || compactItemContext === void 0
        ? void 0
        : compactItemContext.compactDirection,
    compactItemClassnames: compactItemClassnames,
  };
};
exports.useCompactItemContext = useCompactItemContext;