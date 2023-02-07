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
var _rcSelect = require('rc-select');
var _useId = _interopRequireDefault(require('rc-select/lib/hooks/useId'));
var _conductUtil = require('rc-tree/lib/utils/conductUtil');
var _useMergedState5 = _interopRequireDefault(require('rc-util/lib/hooks/useMergedState'));
var React = _interopRequireWildcard(require('react'));
var _context = _interopRequireDefault(require('./context'));
var _useDisplayValues = _interopRequireDefault(require('./hooks/useDisplayValues'));
var _useEntities = _interopRequireDefault(require('./hooks/useEntities'));
var _useMissingValues = _interopRequireDefault(require('./hooks/useMissingValues'));
var _useRefFunc = _interopRequireDefault(require('./hooks/useRefFunc'));
var _useSearchConfig3 = _interopRequireDefault(require('./hooks/useSearchConfig'));
var _useSearchOptions = _interopRequireDefault(require('./hooks/useSearchOptions'));
var _OptionList = _interopRequireDefault(require('./OptionList'));
var _commonUtil = require('./utils/commonUtil');
var _treeUtil = require('./utils/treeUtil');
var _warningPropsUtil = _interopRequireWildcard(require('./utils/warningPropsUtil'));
require('./index.less');
var _excluded = [
  'id',
  'prefixCls',
  'fieldNames',
  'defaultValue',
  'value',
  'changeOnSelect',
  'onChange',
  'displayRender',
  'checkable',
  'searchValue',
  'onSearch',
  'showSearch',
  'expandTrigger',
  'options',
  'dropdownPrefixCls',
  'loadData',
  'popupVisible',
  'open',
  'popupClassName',
  'dropdownClassName',
  'dropdownMenuColumnStyle',
  'popupPlacement',
  'placement',
  'onDropdownVisibleChange',
  'onPopupVisibleChange',
  'renderItem',
  'expandIcon',
  'loadingIcon',
  'children',
  'dropdownMatchSelectWidth',
  'showCheckedStrategy',
];
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
function isMultipleValue(value) {
  return Array.isArray(value) && Array.isArray(value[0]);
}
function toRawValues(value) {
  if (!value) {
    return [];
  }
  if (isMultipleValue(value)) {
    return value;
  }
  return (value.length === 0 ? [] : [value]).map(function (val) {
    return Array.isArray(val) ? val : [val];
  });
}
var Cascader = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var id = props.id,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-cascader' : _props$prefixCls,
    fieldNames = props.fieldNames,
    defaultValue = props.defaultValue,
    value = props.value,
    changeOnSelect = props.changeOnSelect,
    onChange = props.onChange,
    displayRender = props.displayRender,
    checkable = props.checkable,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    showSearch = props.showSearch,
    expandTrigger = props.expandTrigger,
    options = props.options,
    dropdownPrefixCls = props.dropdownPrefixCls,
    loadData = props.loadData,
    popupVisible = props.popupVisible,
    open = props.open,
    popupClassName = props.popupClassName,
    dropdownClassName = props.dropdownClassName,
    dropdownMenuColumnStyle = props.dropdownMenuColumnStyle,
    popupPlacement = props.popupPlacement,
    placement = props.placement,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    onPopupVisibleChange = props.onPopupVisibleChange,
    renderItem = props.renderItem,
    _props$expandIcon = props.expandIcon,
    expandIcon = _props$expandIcon === void 0 ? '>' : _props$expandIcon,
    loadingIcon = props.loadingIcon,
    children = props.children,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? false : _props$dropdownMatchS,
    _props$showCheckedStr = props.showCheckedStrategy,
    showCheckedStrategy =
      _props$showCheckedStr === void 0 ? _commonUtil.SHOW_PARENT : _props$showCheckedStr,
    restProps = _objectWithoutProperties(props, _excluded);
  var mergedId = (0, _useId.default)(id);
  var multiple = !!checkable;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    dropdownVisible = _React$useState2[0],
    setDropdownVisible = _React$useState2[1];
  // =========================== Values ===========================
  var _useMergedState = (0, _useMergedState5.default)(defaultValue, {
      value: value,
      postState: toRawValues,
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    rawValues = _useMergedState2[0],
    setRawValues = _useMergedState2[1];
  // ========================= FieldNames =========================
  var mergedFieldNames = React.useMemo(
    function () {
      return (0, _commonUtil.fillFieldNames)(fieldNames);
    } /* eslint-disable react-hooks/exhaustive-deps */,
    [JSON.stringify(fieldNames)],
  );
  // =========================== Option ===========================
  var mergedOptions = React.useMemo(
    function () {
      return options || [];
    },
    [options],
  );
  // Only used in multiple mode, this fn will not call in single mode
  var getPathKeyEntities = (0, _useEntities.default)(mergedOptions, mergedFieldNames);
  /** Convert path key back to value format */
  var getValueByKeyPath = React.useCallback(
    function (pathKeys) {
      var keyPathEntities = getPathKeyEntities();
      return pathKeys.map(function (pathKey) {
        var nodes = keyPathEntities[pathKey].nodes;
        return nodes.map(function (node) {
          return node[mergedFieldNames.value];
        });
      });
    },
    [getPathKeyEntities, mergedFieldNames],
  );
  // =========================== Search ===========================
  var _useMergedState3 = (0, _useMergedState5.default)('', {
      value: searchValue,
      postState: function postState(search) {
        return search || '';
      },
    }),
    _useMergedState4 = _slicedToArray(_useMergedState3, 2),
    mergedSearchValue = _useMergedState4[0],
    setSearchValue = _useMergedState4[1];
  var onInternalSearch = function onInternalSearch(searchText, info) {
    setSearchValue(searchText);
    if (info.source !== 'blur' && onSearch) {
      onSearch(searchText);
    }
  };
  var _useSearchConfig = (0, _useSearchConfig3.default)(showSearch),
    _useSearchConfig2 = _slicedToArray(_useSearchConfig, 2),
    mergedShowSearch = _useSearchConfig2[0],
    searchConfig = _useSearchConfig2[1];
  var searchOptions = (0, _useSearchOptions.default)(
    mergedSearchValue,
    mergedOptions,
    mergedFieldNames,
    dropdownPrefixCls || prefixCls,
    searchConfig,
    changeOnSelect,
  );
  // =========================== Values ===========================
  var getMissingValues = (0, _useMissingValues.default)(mergedOptions, mergedFieldNames);
  // Fill `rawValues` with checked conduction values
  var _React$useMemo = React.useMemo(
      function () {
        var _getMissingValues = getMissingValues(rawValues),
          _getMissingValues2 = _slicedToArray(_getMissingValues, 2),
          existValues = _getMissingValues2[0],
          missingValues = _getMissingValues2[1];
        if (!multiple || !rawValues.length) {
          return [existValues, [], missingValues];
        }
        var keyPathValues = (0, _commonUtil.toPathKeys)(existValues);
        var keyPathEntities = getPathKeyEntities();
        var _conductCheck = (0, _conductUtil.conductCheck)(keyPathValues, true, keyPathEntities),
          checkedKeys = _conductCheck.checkedKeys,
          halfCheckedKeys = _conductCheck.halfCheckedKeys;
        // Convert key back to value cells
        return [getValueByKeyPath(checkedKeys), getValueByKeyPath(halfCheckedKeys), missingValues];
      },
      [multiple, rawValues, getPathKeyEntities, getValueByKeyPath, getMissingValues],
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
    checkedValues = _React$useMemo2[0],
    halfCheckedValues = _React$useMemo2[1],
    missingCheckedValues = _React$useMemo2[2];
  var deDuplicatedValues = React.useMemo(
    function () {
      var checkedKeys = (0, _commonUtil.toPathKeys)(checkedValues);
      var deduplicateKeys = (0, _treeUtil.formatStrategyValues)(
        checkedKeys,
        getPathKeyEntities,
        showCheckedStrategy,
      );
      return [].concat(
        _toConsumableArray(missingCheckedValues),
        _toConsumableArray(getValueByKeyPath(deduplicateKeys)),
      );
    },
    [
      checkedValues,
      getPathKeyEntities,
      getValueByKeyPath,
      missingCheckedValues,
      showCheckedStrategy,
    ],
  );
  var displayValues = (0, _useDisplayValues.default)(
    deDuplicatedValues,
    mergedOptions,
    mergedFieldNames,
    multiple,
    displayRender,
  );
  // =========================== Change ===========================
  var triggerChange = (0, _useRefFunc.default)(function (nextValues) {
    setRawValues(nextValues);
    // Save perf if no need trigger event
    if (onChange) {
      var nextRawValues = toRawValues(nextValues);
      var valueOptions = nextRawValues.map(function (valueCells) {
        return (0, _treeUtil.toPathOptions)(valueCells, mergedOptions, mergedFieldNames).map(
          function (valueOpt) {
            return valueOpt.option;
          },
        );
      });
      var triggerValues = multiple ? nextRawValues : nextRawValues[0];
      var triggerOptions = multiple ? valueOptions : valueOptions[0];
      onChange(triggerValues, triggerOptions);
    }
  });
  // =========================== Select ===========================
  var onInternalSelect = (0, _useRefFunc.default)(function (valuePath) {
    setSearchValue('');
    if (!multiple) {
      triggerChange(valuePath);
    } else {
      // Prepare conduct required info
      var pathKey = (0, _commonUtil.toPathKey)(valuePath);
      var checkedPathKeys = (0, _commonUtil.toPathKeys)(checkedValues);
      var halfCheckedPathKeys = (0, _commonUtil.toPathKeys)(halfCheckedValues);
      var existInChecked = checkedPathKeys.includes(pathKey);
      var existInMissing = missingCheckedValues.some(function (valueCells) {
        return (0, _commonUtil.toPathKey)(valueCells) === pathKey;
      });
      // Do update
      var nextCheckedValues = checkedValues;
      var nextMissingValues = missingCheckedValues;
      if (existInMissing && !existInChecked) {
        // Missing value only do filter
        nextMissingValues = missingCheckedValues.filter(function (valueCells) {
          return (0, _commonUtil.toPathKey)(valueCells) !== pathKey;
        });
      } else {
        // Update checked key first
        var nextRawCheckedKeys = existInChecked
          ? checkedPathKeys.filter(function (key) {
              return key !== pathKey;
            })
          : [].concat(_toConsumableArray(checkedPathKeys), [pathKey]);
        var pathKeyEntities = getPathKeyEntities();
        // Conduction by selected or not
        var checkedKeys;
        if (existInChecked) {
          var _conductCheck2 = (0, _conductUtil.conductCheck)(
            nextRawCheckedKeys,
            {
              checked: false,
              halfCheckedKeys: halfCheckedPathKeys,
            },
            pathKeyEntities,
          );
          checkedKeys = _conductCheck2.checkedKeys;
        } else {
          var _conductCheck3 = (0, _conductUtil.conductCheck)(
            nextRawCheckedKeys,
            true,
            pathKeyEntities,
          );
          checkedKeys = _conductCheck3.checkedKeys;
        }
        // Roll up to parent level keys
        var deDuplicatedKeys = (0, _treeUtil.formatStrategyValues)(
          checkedKeys,
          getPathKeyEntities,
          showCheckedStrategy,
        );
        nextCheckedValues = getValueByKeyPath(deDuplicatedKeys);
      }
      triggerChange(
        [].concat(_toConsumableArray(nextMissingValues), _toConsumableArray(nextCheckedValues)),
      );
    }
  });
  // Display Value change logic
  var onDisplayValuesChange = function onDisplayValuesChange(_, info) {
    if (info.type === 'clear') {
      triggerChange([]);
      return;
    }
    // Cascader do not support `add` type. Only support `remove`
    var valueCells = info.values[0].valueCells;
    onInternalSelect(valueCells);
  };
  // ============================ Open ============================
  var mergedOpen = open !== undefined ? open : popupVisible;
  var mergedDropdownClassName = dropdownClassName || popupClassName;
  var mergedPlacement = placement || popupPlacement;
  var onInternalDropdownVisibleChange = function onInternalDropdownVisibleChange(nextVisible) {
    onDropdownVisibleChange === null || onDropdownVisibleChange === void 0
      ? void 0
      : onDropdownVisibleChange(nextVisible);
    onPopupVisibleChange === null || onPopupVisibleChange === void 0
      ? void 0
      : onPopupVisibleChange(nextVisible);
    setDropdownVisible(nextVisible);
  };
  // ========================== Warning ===========================
  if (process.env.NODE_ENV !== 'production') {
    (0, _warningPropsUtil.default)(props);
    (0, _warningPropsUtil.warningNullOptions)(mergedOptions, mergedFieldNames);
  }
  // ========================== Context ===========================
  var cascaderContext = React.useMemo(
    function () {
      return {
        options: mergedOptions,
        fieldNames: mergedFieldNames,
        values: checkedValues,
        halfValues: halfCheckedValues,
        changeOnSelect: changeOnSelect,
        onSelect: onInternalSelect,
        checkable: checkable,
        searchOptions: searchOptions,
        dropdownPrefixCls: dropdownPrefixCls,
        loadData: loadData,
        expandTrigger: expandTrigger,
        expandIcon: expandIcon,
        loadingIcon: loadingIcon,
        dropdownMenuColumnStyle: dropdownMenuColumnStyle,
        renderItem: renderItem,
        dropdownVisible: dropdownVisible,
      };
    },
    [
      mergedOptions,
      mergedFieldNames,
      checkedValues,
      halfCheckedValues,
      changeOnSelect,
      onInternalSelect,
      checkable,
      searchOptions,
      dropdownPrefixCls,
      loadData,
      expandTrigger,
      expandIcon,
      loadingIcon,
      dropdownMenuColumnStyle,
      renderItem,
      dropdownVisible,
    ],
  );
  // ==============================================================
  // ==                          Render                          ==
  // ==============================================================
  var emptyOptions = !(mergedSearchValue ? searchOptions : mergedOptions).length;
  var dropdownStyle =
    // Search to match width
    (mergedSearchValue && searchConfig.matchInputWidth) ||
    // Empty keep the width
    emptyOptions
      ? {}
      : {
          minWidth: 'auto',
        };
  return /*#__PURE__*/ React.createElement(
    _context.default.Provider,
    {
      value: cascaderContext,
    },
    /*#__PURE__*/ React.createElement(
      _rcSelect.BaseSelect,
      _objectSpread(
        _objectSpread({}, restProps),
        {},
        {
          // MISC
          ref: ref,
          id: mergedId,
          prefixCls: prefixCls,
          dropdownMatchSelectWidth: dropdownMatchSelectWidth,
          dropdownStyle: dropdownStyle,
          // Value
          displayValues: displayValues,
          onDisplayValuesChange: onDisplayValuesChange,
          mode: multiple ? 'multiple' : undefined,
          // Search
          searchValue: mergedSearchValue,
          onSearch: onInternalSearch,
          showSearch: mergedShowSearch,
          // Options
          OptionList: _OptionList.default,
          emptyOptions: emptyOptions,
          // Open
          open: mergedOpen,
          dropdownClassName: mergedDropdownClassName,
          placement: mergedPlacement,
          onDropdownVisibleChange: onInternalDropdownVisibleChange,
          // Children
          getRawInputElement: function getRawInputElement() {
            return children;
          },
        },
      ),
    ),
  );
});
if (process.env.NODE_ENV !== 'production') {
  Cascader.displayName = 'Cascader';
}
Cascader.SHOW_PARENT = _commonUtil.SHOW_PARENT;
Cascader.SHOW_CHILD = _commonUtil.SHOW_CHILD;
var _default = Cascader;
exports.default = _default;
