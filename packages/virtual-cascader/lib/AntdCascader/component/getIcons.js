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
exports.default = getIcons;
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
var React = _interopRequireWildcard(require('react'));
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
function getIcons(_ref) {
  var suffixIcon = _ref.suffixIcon,
    clearIcon = _ref.clearIcon,
    menuItemSelectedIcon = _ref.menuItemSelectedIcon,
    removeIcon = _ref.removeIcon,
    loading = _ref.loading,
    multiple = _ref.multiple,
    hasFeedback = _ref.hasFeedback,
    prefixCls = _ref.prefixCls,
    showArrow = _ref.showArrow,
    feedbackIcon = _ref.feedbackIcon;
  // Clear Icon
  var mergedClearIcon =
    clearIcon !== null && clearIcon !== void 0
      ? clearIcon
      : /*#__PURE__*/ React.createElement(_icon.default, {
          type: 'close-circle',
        });
  // Validation Feedback Icon
  var getSuffixIconNode = function getSuffixIconNode(arrowIcon) {
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      showArrow !== false && arrowIcon,
      hasFeedback && feedbackIcon,
    );
  };
  // Arrow item icon
  var mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(
      /*#__PURE__*/ React.createElement(_icon.default, {
        type: 'loading',
      }),
    );
  } else {
    var iconCls = ''.concat(prefixCls, '-suffix');
    mergedSuffixIcon = function mergedSuffixIcon(_ref2) {
      var open = _ref2.open,
        showSearch = _ref2.showSearch;
      if (open && showSearch) {
        return getSuffixIconNode(
          /*#__PURE__*/ React.createElement(_icon.default, {
            className: iconCls,
            type: 'search',
          }),
        );
      }
      return getSuffixIconNode(
        /*#__PURE__*/ React.createElement(_icon.default, {
          className: iconCls,
          type: 'down',
        }),
      );
    };
  }
  // Checked item icon
  var mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = /*#__PURE__*/ React.createElement(_icon.default, {
      type: 'check',
    });
  } else {
    mergedItemIcon = null;
  }
  var mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = /*#__PURE__*/ React.createElement(_icon.default, {
      type: 'close',
    });
  }
  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
