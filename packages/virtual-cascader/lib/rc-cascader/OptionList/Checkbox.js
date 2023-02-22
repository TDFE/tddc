'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = Checkbox;
var React = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _context = _interopRequireDefault(require('../context'));
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
function Checkbox(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    checked = _ref.checked,
    halfChecked = _ref.halfChecked,
    disabled = _ref.disabled,
    onClick = _ref.onClick;
  // @ts-ignore
  var _React$useContext = React.useContext(_context.default),
    checkable = _React$useContext.checkable;
  var customCheckbox = typeof checkable !== 'boolean' ? checkable : null;
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: (0, _classnames.default)(
        ''.concat(prefixCls),
        ((_classNames = {}),
        _defineProperty(_classNames, ''.concat(prefixCls, '-checked'), checked),
        _defineProperty(
          _classNames,
          ''.concat(prefixCls, '-indeterminate'),
          !checked && halfChecked,
        ),
        _defineProperty(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
        _classNames),
      ),
      onClick: onClick,
    },
    customCheckbox,
  );
}
