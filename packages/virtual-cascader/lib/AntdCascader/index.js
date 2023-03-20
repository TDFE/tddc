'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
var _classnames = _interopRequireDefault(require('classnames'));
var _rcCascader = _interopRequireDefault(require('../rc-cascader'));
var _omit = _interopRequireDefault(require('rc-util/lib/omit'));
var React = _interopRequireWildcard(require('react'));
var _context = require('./component/context');
var _defaultRenderEmpty = _interopRequireDefault(require('./component/defaultRenderEmpty'));
var _DisabledContext = _interopRequireDefault(require('./component/DisabledContext'));
var _SizeContext = require('./component/SizeContext');
var _useCompactItemContext = require('./component/useCompactItemContext');
var _FormItemInputContext = require('./component/FormItemInputContext');
var _getIcons2 = _interopRequireDefault(require('./component/getIcons'));
var _utils = require('./config/utils');
var _warning = _interopRequireDefault(require('./config/warning'));
require('./index.less');
var _excluded = [
  'prefixCls',
  'size',
  'disabled',
  'className',
  'multiple',
  'bordered',
  'transitionName',
  'choiceTransitionName',
  'popupClassName',
  'dropdownClassName',
  'expandIcon',
  'placement',
  'showSearch',
  'allowClear',
  'notFoundContent',
  'direction',
  'getPopupContainer',
  'status',
  'showArrow',
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var SHOW_CHILD = _rcCascader.default.SHOW_CHILD,
  SHOW_PARENT = _rcCascader.default.SHOW_PARENT;
function highlightKeyword(str, lowerKeyword, prefixCls) {
  var cells = str
    .toLowerCase()
    .split(lowerKeyword)
    .reduce(function (list, cur, index) {
      return index === 0 ? [cur] : [].concat(_toConsumableArray(list), [lowerKeyword, cur]);
    }, []);
  var fillCells = [];
  var start = 0;
  cells.forEach(function (cell, index) {
    var end = start + cell.length;
    var originWorld = str.slice(start, end);
    start = end;
    if (index % 2 === 1) {
      originWorld =
        /*#__PURE__*/
        // eslint-disable-next-line react/no-array-index-key
        React.createElement(
          'span',
          {
            className: ''.concat(prefixCls, '-menu-item-keyword'),
            key: 'seperator-'.concat(index),
          },
          originWorld,
        );
    }
    fillCells.push(originWorld);
  });
  return fillCells;
}
var defaultSearchRender = function defaultSearchRender(inputValue, path, prefixCls, fieldNames) {
  var optionList = [];
  // We do lower here to save perf
  var lower = inputValue.toLowerCase();
  path.forEach(function (node, index) {
    if (index !== 0) {
      optionList.push(' / ');
    }
    var label = node[fieldNames.label];
    var type = _typeof(label);
    if (type === 'string' || type === 'number') {
      label = highlightKeyword(String(label), lower, prefixCls);
    }
    optionList.push(label);
  });
  return optionList;
};
var Cascader = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _classNames2;
  var customizePrefixCls = props.prefixCls,
    customizeSize = props.size,
    customDisabled = props.disabled,
    className = props.className,
    multiple = props.multiple,
    _props$bordered = props.bordered,
    bordered = _props$bordered === void 0 ? true : _props$bordered,
    transitionName = props.transitionName,
    _props$choiceTransiti = props.choiceTransitionName,
    choiceTransitionName = _props$choiceTransiti === void 0 ? '' : _props$choiceTransiti,
    popupClassName = props.popupClassName,
    dropdownClassName = props.dropdownClassName,
    expandIcon = props.expandIcon,
    placement = props.placement,
    showSearch = props.showSearch,
    _props$allowClear = props.allowClear,
    allowClear = _props$allowClear === void 0 ? true : _props$allowClear,
    notFoundContent = props.notFoundContent,
    direction = props.direction,
    getPopupContainer = props.getPopupContainer,
    customStatus = props.status,
    showArrow = props.showArrow,
    rest = _objectWithoutProperties(props, _excluded);
  var restProps = (0, _omit.default)(rest, ['suffixIcon']);
  var _useContext = (0, React.useContext)(_context.ConfigContext),
    getContextPopupContainer = _useContext.getPopupContainer,
    getPrefixCls = _useContext.getPrefixCls,
    renderEmpty = _useContext.renderEmpty,
    rootDirection = _useContext.direction;
  var mergedDirection = direction || rootDirection;
  var isRtl = mergedDirection === 'rtl';
  // =================== Form =====================
  var _useContext2 = (0, React.useContext)(_FormItemInputContext.FormItemInputContext),
    contextStatus = _useContext2.status,
    hasFeedback = _useContext2.hasFeedback,
    isFormItemInput = _useContext2.isFormItemInput,
    feedbackIcon = _useContext2.feedbackIcon;
  var mergedStatus = (0, _utils.getMergedStatus)(contextStatus, customStatus);
  // =================== Warning =====================
  (0,
  _warning.default)(!dropdownClassName, 'Cascader', '`dropdownClassName` is deprecated which will be removed in next major version. Please use `popupClassName` instead.');
  (0,
  _warning.default)(!multiple || !props.displayRender, 'Cascader', '`displayRender` not work on `multiple`. Please use `tagRender` instead.');
  // =================== No Found ====================
  var mergedNotFoundContent =
    notFoundContent || (renderEmpty || _defaultRenderEmpty.default)('Cascader');
  // ==================== Prefix =====================
  var rootPrefixCls = getPrefixCls();
  var prefixCls = getPrefixCls('select', customizePrefixCls);
  var cascaderPrefixCls = getPrefixCls('cascader', customizePrefixCls);
  var _useCompactItemContex = (0, _useCompactItemContext.useCompactItemContext)(
      prefixCls,
      direction,
    ),
    compactSize = _useCompactItemContex.compactSize,
    compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  // =================== Dropdown ====================
  var mergedDropdownClassName = (0, _classnames.default)(
    popupClassName || dropdownClassName,
    ''.concat(cascaderPrefixCls, '-dropdown'),
    _defineProperty({}, ''.concat(cascaderPrefixCls, '-dropdown-rtl'), mergedDirection === 'rtl'),
  );
  // ==================== Search =====================
  var mergedShowSearch = React.useMemo(
    function () {
      if (!showSearch) {
        return showSearch;
      }
      var searchConfig = {
        render: defaultSearchRender,
      };
      if (_typeof(showSearch) === 'object') {
        searchConfig = _objectSpread(_objectSpread({}, searchConfig), showSearch);
      }
      return searchConfig;
    },
    [showSearch],
  );
  // ===================== Size ======================
  var size = React.useContext(_SizeContext.SizeContext);
  var mergedSize = compactSize || customizeSize || size;
  // ===================== Disabled =====================
  var disabled = React.useContext(_DisabledContext.default);
  var mergedDisabled =
    customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  // ===================== Icon ======================
  var mergedExpandIcon = expandIcon;
  if (!expandIcon) {
    mergedExpandIcon = isRtl
      ? /*#__PURE__*/ React.createElement(_icon.default, {
          type: 'left',
        })
      : /*#__PURE__*/ React.createElement(_icon.default, {
          type: 'right',
        });
  }
  var loadingIcon = /*#__PURE__*/ React.createElement(
    'span',
    {
      className: ''.concat(prefixCls, '-menu-item-loading-icon'),
    },
    /*#__PURE__*/ React.createElement(_icon.default, {
      type: 'loading',
    }),
  );
  // =================== Multiple ====================
  var checkable = React.useMemo(
    function () {
      return multiple
        ? /*#__PURE__*/ React.createElement('span', {
            className: ''.concat(cascaderPrefixCls, '-checkbox-inner'),
          })
        : false;
    },
    [multiple],
  );
  // ===================== Icons =====================
  var mergedShowArrow = showArrow !== undefined ? showArrow : props.loading || !multiple;
  var _getIcons = (0, _getIcons2.default)(
      _objectSpread(
        _objectSpread({}, props),
        {},
        {
          hasFeedback: hasFeedback,
          feedbackIcon: feedbackIcon,
          showArrow: mergedShowArrow,
          multiple: multiple,
          prefixCls: prefixCls,
        },
      ),
    ),
    suffixIcon = _getIcons.suffixIcon,
    removeIcon = _getIcons.removeIcon,
    clearIcon = _getIcons.clearIcon;
  // ===================== Placement =====================
  var getPlacement = function getPlacement() {
    if (placement !== undefined) {
      return placement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  // ==================== Render =====================
  return /*#__PURE__*/ React.createElement(
    _rcCascader.default,
    _objectSpread(
      _objectSpread(
        {
          prefixCls: prefixCls,
          className: (0, _classnames.default)(
            !customizePrefixCls && cascaderPrefixCls,
            ((_classNames2 = {}),
            _defineProperty(_classNames2, ''.concat(prefixCls, '-lg'), mergedSize === 'large'),
            _defineProperty(_classNames2, ''.concat(prefixCls, '-sm'), mergedSize === 'small'),
            _defineProperty(_classNames2, ''.concat(prefixCls, '-rtl'), isRtl),
            _defineProperty(_classNames2, ''.concat(prefixCls, '-borderless'), !bordered),
            _defineProperty(_classNames2, ''.concat(prefixCls, '-in-form-item'), isFormItemInput),
            _classNames2),
            (0, _utils.getStatusClassNames)(prefixCls, mergedStatus, hasFeedback),
            compactItemClassnames,
            className,
          ),
          disabled: mergedDisabled,
        },
        restProps,
      ),
      {},
      {
        direction: mergedDirection,
        placement: getPlacement(),
        notFoundContent: mergedNotFoundContent,
        allowClear: allowClear,
        showSearch: mergedShowSearch,
        expandIcon: mergedExpandIcon,
        inputIcon: suffixIcon,
        removeIcon: removeIcon,
        clearIcon: clearIcon,
        loadingIcon: loadingIcon,
        checkable: checkable,
        dropdownClassName: mergedDropdownClassName,
        dropdownPrefixCls: customizePrefixCls || cascaderPrefixCls,
        choiceTransitionName: (0, _utils.getTransitionName)(
          rootPrefixCls,
          '',
          choiceTransitionName,
        ),
        transitionName: (0, _utils.getTransitionName)(
          rootPrefixCls,
          (0, _utils.getTransitionDirection)(placement),
          transitionName,
        ),
        getPopupContainer: getPopupContainer || getContextPopupContainer,
        ref: ref,
        showArrow: hasFeedback || showArrow,
      },
    ),
  );
});
if (process.env.NODE_ENV !== 'production') {
  Cascader.displayName = 'Cascader';
}
Cascader.SHOW_PARENT = SHOW_PARENT;
Cascader.SHOW_CHILD = SHOW_CHILD;
var _default = Cascader;
exports.default = _default;
