'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getMergedStatus = void 0;
exports.getStatusClassNames = getStatusClassNames;
exports.getTransitionName = exports.getTransitionDirection = void 0;
var _classnames = _interopRequireDefault(require('classnames'));
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
var getTransitionDirection = function getTransitionDirection(placement) {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return 'slide-down';
  }
  return 'slide-up';
};
exports.getTransitionDirection = getTransitionDirection;
var getTransitionName = function getTransitionName(rootPrefixCls, motion, transitionName) {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return ''.concat(rootPrefixCls, '-').concat(motion);
};
exports.getTransitionName = getTransitionName;
function getStatusClassNames(prefixCls, status, hasFeedback) {
  var _classNames;
  return (0, _classnames.default)(
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-status-success'), status === 'success'),
    _defineProperty(_classNames, ''.concat(prefixCls, '-status-warning'), status === 'warning'),
    _defineProperty(_classNames, ''.concat(prefixCls, '-status-error'), status === 'error'),
    _defineProperty(
      _classNames,
      ''.concat(prefixCls, '-status-validating'),
      status === 'validating',
    ),
    _defineProperty(_classNames, ''.concat(prefixCls, '-has-feedback'), hasFeedback),
    _classNames),
  );
}
var getMergedStatus = function getMergedStatus(contextStatus, customStatus) {
  return customStatus || contextStatus;
};
exports.getMergedStatus = getMergedStatus;
