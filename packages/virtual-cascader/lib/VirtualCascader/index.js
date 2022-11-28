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
var _AntCascader = _interopRequireDefault(require('./components/AntCascader'));
var _SearchDrapper = _interopRequireDefault(require('./components/SearchDrapper'));
var _NoSearchDrapper = _interopRequireDefault(require('./components/NoSearchDrapper'));
var _utils = require('./utils');
require('antd/lib/cascader/style/index.css');
require('./index.less');
var _excluded = [
  'prefixCls',
  'options',
  'changeOnSelect',
  'fieldNames',
  'defaultValue',
  'value',
  'onChange',
  'showSearch',
  'notFoundContent',
  'customRender',
];
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
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var VirtualCascader = function VirtualCascader(_ref) {
  var _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'ant-cascader' : _ref$prefixCls,
    options = _ref.options,
    changeOnSelect = _ref.changeOnSelect,
    _ref$fieldNames = _ref.fieldNames,
    fieldNames =
      _ref$fieldNames === void 0
        ? {
            label: 'label',
            value: 'value',
            children: 'children',
          }
        : _ref$fieldNames,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange,
    showSearch = _ref.showSearch,
    notFoundContent = _ref.notFoundContent,
    customRender = _ref.customRender,
    rest = _objectWithoutProperties(_ref, _excluded);
  var ref = (0, _react.useRef)();
  /** 选中的路径 */
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    activeValueCells = _useState2[0],
    setActiveValueCells = _useState2[1];

  /** 根据选中路径获取每一个路径下的list */
  var optionColumns = (0, _react.useMemo)(
    function () {
      var optionList = [
        {
          options: options,
        },
      ];
      var currentList = options;
      var _loop = function _loop(i) {
        var activeValueCell = activeValueCells[i];
        var currentOption = currentList.find(function (option) {
          return option[fieldNames.value] === activeValueCell;
        });
        var subOptions =
          currentOption === null || currentOption === void 0
            ? void 0
            : currentOption[fieldNames.children];
        if (!(subOptions === null || subOptions === void 0 ? void 0 : subOptions.length)) {
          return 'break';
        }
        currentList = subOptions;
        var maxWidth = void 0;
        subOptions === null || subOptions === void 0
          ? void 0
          : subOptions.forEach(function (i) {
              var width = (0, _utils.getTextWidth)(i[fieldNames.label]);
              if (width > maxWidth) {
                maxWidth = width;
              }
            });
        optionList.push({
          options: subOptions,
          maxWidth: maxWidth,
        });
      };
      for (var i = 0; i < activeValueCells.length; i += 1) {
        var _ret = _loop(i);
        if (_ret === 'break') break;
      }
      return optionList;
    },
    [options, activeValueCells, fieldNames],
  );

  /** 设置默认选中的路径 */
  (0, _react.useEffect)(
    function () {
      if (Array.isArray(defaultValue)) {
        setActiveValueCells(defaultValue);
      }
    },
    [defaultValue],
  );

  /** 设置选中的路径,用于回显 */
  (0, _react.useEffect)(
    function () {
      if (Array.isArray(value)) {
        setActiveValueCells(value);
      }
    },
    [value],
  );

  /** 弹窗关闭时候需要重新设置值 */
  var handleDropdownVisibleChange = function handleDropdownVisibleChange(visible) {
    if (!visible) {
      setActiveValueCells(value);
    }
  };

  /** 选中某一项 */
  var handleClick = function handleClick(value, index, isLast) {
    var tempActiveValueCells = _toConsumableArray(activeValueCells);
    tempActiveValueCells.splice(index);
    tempActiveValueCells.push(value);
    setActiveValueCells(tempActiveValueCells);
    if (isLast) {
      if (onChange) {
        onChange(tempActiveValueCells);
      } else {
        defaultOnChange(tempActiveValueCells);
      }
      ref.current.handlePopupVisibleChange(false);
    }
    if (changeOnSelect) {
      if (onChange) {
        onChange(tempActiveValueCells);
      } else {
        defaultOnChange(tempActiveValueCells);
      }
    }
  };

  /** 默认onChange事件 */
  var defaultOnChange = function defaultOnChange(value) {
    setActiveValueCells(value);
    ref.current.handlePopupVisibleChange(false);
  };

  /** 模糊搜索的时候选中某一项 */
  var handleChoosed = function handleChoosed(value) {
    setActiveValueCells(value);
    onChange(value);
    ref.current.handlePopupVisibleChange(false);
  };

  /** 自定义渲染弹窗 */
  var handleDropdownRender = function handleDropdownRender(inputValue, filterOptions) {
    var _ref$current, _ref$current$state;
    var width = undefined;
    if (
      (_ref$current = ref.current) === null || _ref$current === void 0
        ? void 0
        : (_ref$current$state = _ref$current.state) === null || _ref$current$state === void 0
        ? void 0
        : _ref$current$state.popupVisible
    ) {
      var _ref$current2, _ref$current2$input, _ref$current2$input$i, _ref$current2$input$i2;
      var _width =
        ref === null || ref === void 0
          ? void 0
          : (_ref$current2 = ref.current) === null || _ref$current2 === void 0
          ? void 0
          : (_ref$current2$input = _ref$current2.input) === null || _ref$current2$input === void 0
          ? void 0
          : (_ref$current2$input$i = _ref$current2$input.input) === null ||
            _ref$current2$input$i === void 0
          ? void 0
          : (_ref$current2$input$i2 = _ref$current2$input$i.getBoundingClientRect()) === null ||
            _ref$current2$input$i2 === void 0
          ? void 0
          : _ref$current2$input$i2.width;
      if (!isNaN(_width)) {
        width = _width;
      }
    }
    if (isNaN(width)) {
      return null;
    }
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-menus ').concat(prefixCls, '-menus-placement-bottomLeft'),
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        inputValue && Array.isArray(filterOptions) && !!filterOptions.length
          ? /*#__PURE__*/ _react.default.createElement(_SearchDrapper.default, {
              inputValue: inputValue,
              filterOptions: filterOptions,
              prefixCls: prefixCls,
              fieldNames: fieldNames,
              notFoundContent: notFoundContent,
              activeValueCells: activeValueCells,
              onChoosed: handleChoosed,
              showSearch: showSearch,
              width: width,
            })
          : /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              optionColumns === null || optionColumns === void 0
                ? void 0
                : optionColumns.map(function () {
                    var _ref2 =
                        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      options = _ref2.options,
                      maxWidth = _ref2.maxWidth;
                    var level = arguments.length > 1 ? arguments[1] : undefined;
                    return /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        key: options,
                        className: ''.concat(prefixCls, '-menu'),
                      },
                      /*#__PURE__*/ _react.default.createElement(_NoSearchDrapper.default, {
                        options: options,
                        maxWidth: maxWidth,
                        prefixCls: prefixCls,
                        fieldNames: fieldNames,
                        defaultValue:
                          (defaultValue === null || defaultValue === void 0
                            ? void 0
                            : defaultValue[level]) ||
                          (value === null || value === void 0 ? void 0 : value[level]),
                        activeValueCells: activeValueCells,
                        level: level,
                        onChoosed: handleClick,
                        customRender: customRender,
                      }),
                    );
                  }),
            ),
      ),
    );
  };
  return /*#__PURE__*/ _react.default.createElement(
    _AntCascader.default,
    _extends({}, rest, {
      changeOnSelect: changeOnSelect,
      fieldNames: fieldNames,
      prefixCls: prefixCls,
      showSearch: showSearch,
      notFoundContent: notFoundContent,
      ref: ref,
      value: value,
      onChange: onChange || defaultOnChange,
      defaultValue: defaultValue,
      options: options,
      dropdownRender: handleDropdownRender,
      onDropdownVisibleChange: handleDropdownVisibleChange,
    }),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(VirtualCascader);
exports.default = _default;
