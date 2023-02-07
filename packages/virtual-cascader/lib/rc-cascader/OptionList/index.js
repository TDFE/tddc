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
var _classnames = _interopRequireDefault(require('classnames'));
var _rcSelect = require('rc-select');
var React = _interopRequireWildcard(require('react'));
var _context = _interopRequireDefault(require('../context'));
var _commonUtil = require('../utils/commonUtil');
var _treeUtil = require('../utils/treeUtil');
var _Column = _interopRequireWildcard(require('./Column'));
var _useActive3 = _interopRequireDefault(require('./useActive'));
var _useKeyboard = _interopRequireDefault(require('./useKeyboard'));
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
var RefOptionList = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _optionColumns$, _optionColumns$$optio, _ref3, _classNames;
  var _useBaseProps = (0, _rcSelect.useBaseProps)(),
    prefixCls = _useBaseProps.prefixCls,
    multiple = _useBaseProps.multiple,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    direction = _useBaseProps.direction;
  var containerRef = React.useRef();
  var rtl = direction === 'rtl';
  var _React$useContext = React.useContext(_context.default),
    options = _React$useContext.options,
    values = _React$useContext.values,
    halfValues = _React$useContext.halfValues,
    fieldNames = _React$useContext.fieldNames,
    changeOnSelect = _React$useContext.changeOnSelect,
    onSelect = _React$useContext.onSelect,
    searchOptions = _React$useContext.searchOptions,
    dropdownPrefixCls = _React$useContext.dropdownPrefixCls,
    loadData = _React$useContext.loadData,
    expandTrigger = _React$useContext.expandTrigger,
    renderItem = _React$useContext.renderItem,
    dropdownVisible = _React$useContext.dropdownVisible;
  var mergedPrefixCls = dropdownPrefixCls || prefixCls;
  // ========================= loadData =========================
  var _React$useState = React.useState([]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    loadingKeys = _React$useState2[0],
    setLoadingKeys = _React$useState2[1];
  var internalLoadData = function internalLoadData(valueCells) {
    // Do not load when search
    if (!loadData || searchValue) {
      return;
    }
    var optionList = (0, _treeUtil.toPathOptions)(valueCells, options, fieldNames);
    var rawOptions = optionList.map(function (_ref) {
      var option = _ref.option;
      return option;
    });
    var lastOption = rawOptions[rawOptions.length - 1];
    if (lastOption && !(0, _commonUtil.isLeaf)(lastOption, fieldNames)) {
      var pathKey = (0, _commonUtil.toPathKey)(valueCells);
      setLoadingKeys(function (keys) {
        return [].concat(_toConsumableArray(keys), [pathKey]);
      });
      loadData(rawOptions);
    }
  };
  // zombieJ: This is bad. We should make this same as `rc-tree` to use Promise instead.
  React.useEffect(
    function () {
      if (loadingKeys.length) {
        loadingKeys.forEach(function (loadingKey) {
          var valueStrCells = (0, _commonUtil.toPathValueStr)(loadingKey);
          var optionList = (0, _treeUtil.toPathOptions)(
            valueStrCells,
            options,
            fieldNames,
            true,
          ).map(function (_ref2) {
            var option = _ref2.option;
            return option;
          });
          var lastOption = optionList[optionList.length - 1];
          if (
            !lastOption ||
            lastOption[fieldNames.children] ||
            (0, _commonUtil.isLeaf)(lastOption, fieldNames)
          ) {
            setLoadingKeys(function (keys) {
              return keys.filter(function (key) {
                return key !== loadingKey;
              });
            });
          }
        });
      }
    },
    [options, loadingKeys, fieldNames],
  );
  // ========================== Values ==========================
  var checkedSet = React.useMemo(
    function () {
      return new Set((0, _commonUtil.toPathKeys)(values));
    },
    [values],
  );
  var halfCheckedSet = React.useMemo(
    function () {
      return new Set((0, _commonUtil.toPathKeys)(halfValues));
    },
    [halfValues],
  );
  // ====================== Accessibility =======================
  var _useActive = (0, _useActive3.default)(),
    _useActive2 = _slicedToArray(_useActive, 2),
    activeValueCells = _useActive2[0],
    setActiveValueCells = _useActive2[1];
  // =========================== Path ===========================
  var onPathOpen = function onPathOpen(nextValueCells) {
    setActiveValueCells(nextValueCells);
    // Trigger loadData
    internalLoadData(nextValueCells);
  };
  var isSelectable = function isSelectable(option) {
    var disabled = option.disabled;
    var isMergedLeaf = (0, _commonUtil.isLeaf)(option, fieldNames);
    return !disabled && (isMergedLeaf || changeOnSelect || multiple);
  };
  var onPathSelect = function onPathSelect(valuePath, leaf) {
    var fromKeyboard = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    onSelect(valuePath);
    if (!multiple && (leaf || (changeOnSelect && (expandTrigger === 'hover' || fromKeyboard)))) {
      toggleOpen(false);
    }
  };
  // ========================== Option ==========================
  var mergedOptions = React.useMemo(
    function () {
      if (searchValue) {
        return searchOptions;
      }
      return options;
    },
    [searchValue, searchOptions, options],
  );
  // ========================== Column ==========================
  var optionColumns = React.useMemo(
    function () {
      var optionList = [
        {
          options: mergedOptions,
        },
      ];
      var currentList = mergedOptions;
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
        optionList.push({
          options: subOptions,
        });
      };
      for (var i = 0; i < activeValueCells.length; i += 1) {
        var _ret = _loop(i);
        if (_ret === 'break') break;
      }
      return optionList;
    },
    [mergedOptions, activeValueCells, fieldNames],
  );
  // ========================= Keyboard =========================
  var onKeyboardSelect = function onKeyboardSelect(selectValueCells, option) {
    if (isSelectable(option)) {
      onPathSelect(selectValueCells, (0, _commonUtil.isLeaf)(option, fieldNames), true);
    }
  };
  (0,
  _useKeyboard.default)(ref, mergedOptions, fieldNames, activeValueCells, onPathOpen, onKeyboardSelect);
  // >>>>> Active Scroll
  React.useEffect(
    function () {
      for (var i = 0; i < activeValueCells.length; i += 1) {
        var _containerRef$current;
        var cellPath = activeValueCells.slice(0, i + 1);
        var cellKeyPath = (0, _commonUtil.toPathKey)(cellPath);
        var ele =
          (_containerRef$current = containerRef.current) === null ||
          _containerRef$current === void 0
            ? void 0
            : _containerRef$current.querySelector(
                'li[data-path-key="'.concat(cellKeyPath.replace(/\\{0,2}"/g, '\\"'), '"]'),
              );
        if (ele) {
          (0, _commonUtil.scrollIntoParentView)(ele);
        }
      }
    },
    [activeValueCells],
  );
  // ========================== Render ==========================
  // >>>>> Empty
  var isEmpty = !((_optionColumns$ = optionColumns[0]) === null || _optionColumns$ === void 0
    ? void 0
    : (_optionColumns$$optio = _optionColumns$.options) === null || _optionColumns$$optio === void 0
    ? void 0
    : _optionColumns$$optio.length);
  var emptyList = [
    ((_ref3 = {}),
    _defineProperty(_ref3, fieldNames.value, '__EMPTY__'),
    _defineProperty(_ref3, _Column.FIX_LABEL, notFoundContent),
    _defineProperty(_ref3, 'disabled', true),
    _ref3),
  ];
  var columnProps = _objectSpread(
    _objectSpread({}, props),
    {},
    {
      multiple: !isEmpty && multiple,
      onSelect: onPathSelect,
      onActive: onPathOpen,
      onToggleOpen: toggleOpen,
      checkedSet: checkedSet,
      halfCheckedSet: halfCheckedSet,
      loadingKeys: loadingKeys,
      isSelectable: isSelectable,
    },
  );
  // >>>>> Columns
  var mergedOptionColumns = isEmpty
    ? [
        {
          options: emptyList,
        },
      ]
    : optionColumns;
  var columnNodes = mergedOptionColumns.map(function (col, index) {
    var prevValuePath = activeValueCells.slice(0, index);
    var activeValue = activeValueCells[index];
    return /*#__PURE__*/ React.createElement(
      _Column.default,
      _objectSpread(
        _objectSpread(
          {
            key: index,
            level: index,
            dropdownVisible: dropdownVisible,
          },
          columnProps,
        ),
        {},
        {
          prefixCls: mergedPrefixCls,
          options: col.options,
          searchValue: searchValue,
          prevValuePath: prevValuePath,
          activeValue: activeValue,
          renderItem: renderItem,
        },
      ),
    );
  });
  // >>>>> Render
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: (0, _classnames.default)(
        ''.concat(mergedPrefixCls, '-menus'),
        ((_classNames = {}),
        _defineProperty(_classNames, ''.concat(mergedPrefixCls, '-menu-empty'), isEmpty),
        _defineProperty(_classNames, ''.concat(mergedPrefixCls, '-rtl'), rtl),
        _classNames),
      ),
      ref: containerRef,
    },
    columnNodes,
  );
});
var _default = RefOptionList;
exports.default = _default;
