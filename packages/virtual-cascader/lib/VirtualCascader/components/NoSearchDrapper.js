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
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
var _react = _interopRequireWildcard(require('react'));
var _useVirtualList3 = _interopRequireDefault(require('../hooks/useVirtualList'));
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var NoSearchDrapper = function NoSearchDrapper(_ref) {
  var options = _ref.options,
    maxWidth = _ref.maxWidth,
    prefixCls = _ref.prefixCls,
    fieldNames = _ref.fieldNames,
    defaultValue = _ref.defaultValue,
    activeValueCells = _ref.activeValueCells,
    onChoosed = _ref.onChoosed,
    customRender = _ref.customRender,
    level = _ref.level;
  var containerRef = (0, _react.useRef)(null);
  var wrapperRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    init = _useState2[0],
    setInit = _useState2[1];
  var _useVirtualList = (0, _useVirtualList3.default)(options, {
      containerTarget: containerRef,
      wrapperTarget: wrapperRef,
      itemHeight: 32,
      overscan: 10,
    }),
    _useVirtualList2 = _slicedToArray(_useVirtualList, 2),
    list = _useVirtualList2[0],
    scrollTo = _useVirtualList2[1];

  // 默认滚动到相应位置
  (0, _react.useEffect)(
    function () {
      var timer;
      if (!!defaultValue && Array.isArray(options) && init) {
        var index =
          options === null || options === void 0
            ? void 0
            : options.findIndex(function (i) {
                return i[fieldNames.value] === defaultValue;
              });
        if (index >= 0) {
          timer = setTimeout(function () {
            scrollTo(index);
            setInit(false);
          }, 100);
        }
      }
      return function () {
        clearTimeout(timer);
      };
    },
    [defaultValue, options, init, scrollTo],
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      ref: containerRef,
      style: {
        height: 180,
        overflow: 'auto',
      },
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        ref: wrapperRef,
      },
      list === null || list === void 0
        ? void 0
        : list.map(function () {
            var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              data = _ref2.data;
            var isLast = !Array.isArray(
              data === null || data === void 0 ? void 0 : data[fieldNames.children],
            );
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: '\n               '
                  .concat(prefixCls, '-menu-item\n               ')
                  .concat(isLast ? '' : ''.concat(prefixCls, '-menu-item-expand'), ' ')
                  .concat(
                    (data === null || data === void 0 ? void 0 : data.disabled)
                      ? ''.concat(prefixCls, '-menu-item-disabled')
                      : '',
                    '\n               ',
                  )
                  .concat(
                    (
                      activeValueCells === null || activeValueCells === void 0
                        ? void 0
                        : activeValueCells.includes(data[fieldNames.value])
                    )
                      ? ''.concat(prefixCls, '-menu-item-active')
                      : '',
                    '\n               ',
                  )
                  .concat(
                    level !== 0
                      ? ''.concat(prefixCls, '-not-fist-level')
                      : ''.concat(prefixCls, '-fist-level'),
                    '\n              ',
                  ),
                key: data === null || data === void 0 ? void 0 : data[fieldNames.value],
                style: {
                  width: maxWidth || 'auto',
                },
                value: data === null || data === void 0 ? void 0 : data[fieldNames.value],
                onClick: function onClick() {
                  if (!(data === null || data === void 0 ? void 0 : data.disabled)) {
                    onChoosed(
                      data === null || data === void 0 ? void 0 : data[fieldNames.value],
                      level,
                      isLast,
                    );
                  }
                },
              },
              customRender
                ? customRender(data, isLast, level)
                : /*#__PURE__*/ _react.default.createElement(
                    'span',
                    null,
                    data === null || data === void 0 ? void 0 : data[fieldNames.label],
                    !isLast
                      ? /*#__PURE__*/ _react.default.createElement(
                          'span',
                          {
                            className: ''.concat(prefixCls, '-menu-item-expand-icon'),
                          },
                          /*#__PURE__*/ _react.default.createElement(_icon.default, {
                            type: 'right',
                          }),
                        )
                      : '',
                  ),
            );
          }),
    ),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(NoSearchDrapper);
exports.default = _default;
