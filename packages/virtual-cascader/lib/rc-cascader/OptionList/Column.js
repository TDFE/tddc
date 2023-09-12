'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.FIX_LABEL = void 0;
exports.default = Column;
var React = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _commonUtil = require('../utils/commonUtil');
var _context = _interopRequireDefault(require('../context'));
var _Checkbox = _interopRequireDefault(require('./Checkbox'));
var _useSearchOptions = require('../hooks/useSearchOptions');
var _rcVirtualList = _interopRequireDefault(require('rc-virtual-list'));
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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
} // @ts-nocheck
var FIX_LABEL = '__cascader_fix_label__';
exports.FIX_LABEL = FIX_LABEL;
function Column(_ref) {
  var prefixCls = _ref.prefixCls,
    multiple = _ref.multiple,
    options = _ref.options,
    activeValue = _ref.activeValue,
    prevValuePath = _ref.prevValuePath,
    onToggleOpen = _ref.onToggleOpen,
    onSelect = _ref.onSelect,
    onActive = _ref.onActive,
    checkedSet = _ref.checkedSet,
    halfCheckedSet = _ref.halfCheckedSet,
    loadingKeys = _ref.loadingKeys,
    isSelectable = _ref.isSelectable,
    renderItem = _ref.renderItem,
    searchValue = _ref.searchValue,
    level = _ref.level,
    dropdownVisible = _ref.dropdownVisible;
  var ref = React.useRef(null);
  var menuPrefixCls = ''.concat(prefixCls, '-menu ').concat(prefixCls, '-menu-').concat(level);
  var menuItemPrefixCls = ''.concat(prefixCls, '-menu-item');
  var _React$useContext = React.useContext(_context.default),
    fieldNames = _React$useContext.fieldNames,
    changeOnSelect = _React$useContext.changeOnSelect,
    expandTrigger = _React$useContext.expandTrigger,
    expandIcon = _React$useContext.expandIcon,
    loadingIcon = _React$useContext.loadingIcon,
    dropdownMenuColumnStyle = _React$useContext.dropdownMenuColumnStyle;
  var hoverOpen = expandTrigger === 'hover';
  /** 单选情况下滚动到相应的位置 */
  React.useEffect(
    function () {
      var timer = null;
      if (ref.current && ref.current.scrollTo && !multiple && dropdownVisible) {
        var index = options.findIndex(function (it) {
          return it[fieldNames['value']] === activeValue;
        });
        if (index > 0 && !isNaN(index)) {
          timer = window.setTimeout(function () {
            ref.current.scrollTo(32 * index);
          }, 5);
        }
      }
      return function () {
        if (timer) {
          window.clearTimeout(timer);
        }
        timer = null;
        console.log(timer, 'timer');
      };
    },
    [multiple, activeValue, options, fieldNames, dropdownVisible],
  );
  // ============================ Option ============================
  var optionInfoList = React.useMemo(
    function () {
      return options.map(function (option) {
        var _option$FIX_LABEL;
        var disabled = option.disabled;
        var searchOptions = option[_useSearchOptions.SEARCH_MARK];
        var label =
          (_option$FIX_LABEL = option[FIX_LABEL]) !== null && _option$FIX_LABEL !== void 0
            ? _option$FIX_LABEL
            : option[fieldNames.label];
        var value = option[fieldNames.value];
        var isMergedLeaf = (0, _commonUtil.isLeaf)(option, fieldNames);
        // Get real value of option. Search option is different way.
        var fullPath = searchOptions
          ? // @ts-ignore
            searchOptions.map(function (opt) {
              return opt[fieldNames.value];
            })
          : [].concat(_toConsumableArray(prevValuePath), [value]);
        var fullPathKey = (0, _commonUtil.toPathKey)(fullPath);
        var isLoading = loadingKeys.includes(fullPathKey);
        // >>>>> checked
        var checked = checkedSet.has(fullPathKey);
        // >>>>> halfChecked
        var halfChecked = halfCheckedSet.has(fullPathKey);
        return {
          disabled: disabled,
          label: label,
          value: value,
          isLeaf: isMergedLeaf,
          isLoading: isLoading,
          checked: checked,
          halfChecked: halfChecked,
          option: option,
          fullPath: fullPath,
          fullPathKey: fullPathKey,
        };
      });
    },
    [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath],
  );
  // ============================ Render ============================
  return /*#__PURE__*/ React.createElement(
    'ul',
    {
      className: menuPrefixCls,
      role: 'menu',
    },
    /*#__PURE__*/ React.createElement(
      _rcVirtualList.default,
      {
        className:
          optionInfoList[0]['fullPathKey'] === '__EMPTY__' || !!searchValue
            ? 'rc-virtual-list-full'
            : '',
        data: optionInfoList,
        height: 180,
        itemHeight: 32,
        itemKey: 'value',
        ref: ref,
      },
      function (_ref2) {
        var _classNames;
        var disabled = _ref2.disabled,
          label = _ref2.label,
          value = _ref2.value,
          isMergedLeaf = _ref2.isLeaf,
          isLoading = _ref2.isLoading,
          checked = _ref2.checked,
          halfChecked = _ref2.halfChecked,
          option = _ref2.option,
          fullPath = _ref2.fullPath,
          fullPathKey = _ref2.fullPathKey;
        // >>>>> Open
        var triggerOpenPath = function triggerOpenPath() {
          if (!disabled && (!hoverOpen || !isMergedLeaf)) {
            onActive(fullPath);
          }
        };
        // >>>>> Selection
        var triggerSelect = function triggerSelect() {
          if (isSelectable(option)) {
            onSelect(fullPath, isMergedLeaf);
          }
        };
        // >>>>> Title
        var title;
        if (typeof option.title === 'string') {
          title = option.title;
        } else if (typeof label === 'string') {
          title = label;
        }
        return /*#__PURE__*/ React.createElement(
          'li',
          {
            key: fullPathKey,
            className: (0, _classnames.default)(
              menuItemPrefixCls,
              ((_classNames = {}),
              _defineProperty(_classNames, ''.concat(menuItemPrefixCls, '-expand'), !isMergedLeaf),
              _defineProperty(
                _classNames,
                ''.concat(menuItemPrefixCls, '-active'),
                activeValue === value,
              ),
              _defineProperty(_classNames, ''.concat(menuItemPrefixCls, '-disabled'), disabled),
              _defineProperty(_classNames, ''.concat(menuItemPrefixCls, '-loading'), isLoading),
              _classNames),
            ),
            style: dropdownMenuColumnStyle,
            role: 'menuitemcheckbox',
            // @ts-ignore
            title: title,
            'aria-checked': checked,
            'data-path-key': fullPathKey,
            onClick: function onClick() {
              triggerOpenPath();
              if (!multiple || isMergedLeaf) {
                triggerSelect();
              }
            },
            onDoubleClick: function onDoubleClick() {
              if (changeOnSelect) {
                onToggleOpen(false);
              }
            },
            onMouseEnter: function onMouseEnter() {
              if (hoverOpen) {
                triggerOpenPath();
              }
            },
            onMouseDown: function onMouseDown(e) {
              // Prevent selector from blurring
              e.preventDefault();
            },
          },
          multiple &&
            /*#__PURE__*/ React.createElement(_Checkbox.default, {
              prefixCls: ''.concat(prefixCls, '-checkbox'),
              checked: checked,
              halfChecked: halfChecked,
              disabled: disabled,
              onClick: function onClick(e) {
                e.stopPropagation();
                triggerSelect();
              },
            }),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: ''.concat(menuItemPrefixCls, '-content'),
            },
            optionInfoList[0]['fullPathKey'] !== '__EMPTY__' && renderItem
              ? renderItem(option, level)
              : label,
          ),
          !isLoading &&
            expandIcon &&
            !isMergedLeaf &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: ''.concat(menuItemPrefixCls, '-expand-icon'),
              },
              expandIcon,
            ),
          isLoading &&
            loadingIcon &&
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: ''.concat(menuItemPrefixCls, '-loading-icon'),
              },
              loadingIcon,
            ),
        );
      },
    ),
  );
}
