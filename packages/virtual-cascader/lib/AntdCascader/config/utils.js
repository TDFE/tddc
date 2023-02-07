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
