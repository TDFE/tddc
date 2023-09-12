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
exports.default = exports.EnptyContent = void 0;
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/select/style');
var _select = _interopRequireDefault(require('antd/lib/select'));
var _locale = _interopRequireDefault(require('../locale'));
var _react = _interopRequireWildcard(require('react'));
var _tntd = require('tntd');
var _lodash = require('lodash');
var _virtualCascader = _interopRequireDefault(require('@tddc/virtual-cascader'));
var _CascaderTag = _interopRequireDefault(require('./CascaderTag'));
require('./index.less');
var _excluded = ['options', 'value', 'setTitle', 'onChange', 'allowClear', 'disabled'];
/*
 * @Description: 指标的级联
 * @Author: 郑泳健
 * @Date: 2022-11-17 15:17:59
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-24 18:25:32
 */
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
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
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
var EnptyContent = function EnptyContent(_ref) {
  var _ref$text = _ref.text,
    text =
      _ref$text === void 0
        ? _locale.default.indicatorscascader.index.dangQianLeiXingZan
        : _ref$text;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'virtual-cascader-enpty-wrapper',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'virtual-cascader-enpty-content',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'no-data-text',
        },
        text,
      ),
    ),
  );
};
exports.EnptyContent = EnptyContent;
var IndicatorsCascader = function IndicatorsCascader(_ref2) {
  var options = _ref2.options,
    value = _ref2.value,
    setTitle = _ref2.setTitle,
    onChange = _ref2.onChange,
    allowClear = _ref2.allowClear,
    disabled = _ref2.disabled,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    cascader = _useState2[0],
    setCascader = _useState2[1];
  // 被选中的节点
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    choosedItem = _useState4[0],
    setChoosedItem = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filterOptions = _useState6[0],
    setFilterOptions = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = _slicedToArray(_useState7, 2),
    filterMapOption = _useState8[0],
    setFilterMapOption = _useState8[1];

  /** 将一维数组转为二维，为了符合Cascader组件, 同时生存一个mapOption方便后续取值  */
  (0, _react.useEffect)(
    function () {
      if (!Array.isArray(options)) {
        return;
      }
      if (
        (filterOptions === null || filterOptions === void 0 ? void 0 : filterOptions.length) === 0
      ) {
        formatData(options);
      }
    },
    [options],
  );

  // 将value 改为cascader要求的value结构
  (0, _react.useEffect)(
    function () {
      if (value) {
        var _ref3 = filterMapOption[value] || {},
          sourceKey = _ref3.sourceKey,
          path = _ref3.path;
        if (path) {
          var pathArr = path.split('/');
          setCascader(pathArr);
          setChoosedItem(filterMapOption[value]);
        } else {
          setCascader(['', value]);
          setChoosedItem({});
        }
      } else {
        setCascader([]);
        setChoosedItem({});
      }
    },
    [value, filterMapOption],
  );
  var formatData = function formatData(options) {
    var map = {};
    var loop = function loop(node, parentPath) {
      var _node$data;
      if (!(node === null || node === void 0 ? void 0 : node.data)) {
        return;
      }
      node === null || node === void 0
        ? void 0
        : (_node$data = node.data) === null || _node$data === void 0
        ? void 0
        : _node$data.forEach(function (item) {
            var sourceKey = node.name,
              sourceName = node.dName,
              bizType = node.bizType;
            item.sourceKey = sourceKey;
            item.sourceName = sourceName;
            item.bizType = bizType;
            item.path = parentPath + '/' + item.name;
            map[item.name] = item;
            return loop(item, item.path);
          });
    };
    options.map(function (item) {
      map[item.name] = item;
      return loop(item, item.name);
    });
    setFilterOptions(options);
    setFilterMapOption(map);
  };
  var handleChange = (0, _react.useCallback)(
    function (value, sl) {
      // 一定要选中第二个才会修改回显
      if (Array.isArray(value) && value.length > 1) {
        var lastValue = value[value.length - 1];
        var item = filterMapOption[lastValue] || {};
        onChange(lastValue, item);
      }
      if ((value === null || value === void 0 ? void 0 : value.length) === 0) {
        onChange('', {});
      }
    },
    [value, filterMapOption],
  );
  var displayRender = function displayRender(label, selectedOptions, inputValue) {
    var displayDom = null;
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      var item = selectedOptions[1];
      if (!item) {
        displayDom = (cascader === null || cascader === void 0 ? void 0 : cascader[1]) || undefined;
      } else {
        displayDom = /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'ant-select-selection-selected-value',
          },
          /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
            data: item,
            inputValue: inputValue,
          }),
          item === null || item === void 0 ? void 0 : item.dName,
        );
      }
    } else {
      // 有些指标被删除，要求显示id;
      displayDom = (cascader === null || cascader === void 0 ? void 0 : cascader[1]) || '';
    }
    return displayDom;
  };
  var renderItem = function renderItem(data, level) {
    var _data$children;
    var isLast = !(data === null || data === void 0
      ? void 0
      : (_data$children = data.children) === null || _data$children === void 0
      ? void 0
      : _data$children.length);
    if (!data.dName) {
      return /*#__PURE__*/ _react.default.createElement(EnptyContent, null);
    }
    var dom = /*#__PURE__*/ _react.default.createElement(
      'span',
      null,
      isLast &&
        level !== 0 &&
        /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
          data: data,
        }),
      data === null || data === void 0 ? void 0 : data.dName,
    );
    if (level === 0) {
      return dom;
    }
    return /*#__PURE__*/ _react.default.createElement(
      _tntd.Ellipsis,
      {
        widthLimit: '100%',
        title: dom,
      },
      dom,
    );
  };

  /** 搜索的时候查询 */
  var handleSearchRender = function handleSearchRender(inputValue, path) {
    var _path$;
    var dom = /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
        data: path === null || path === void 0 ? void 0 : path[1],
      }),
      path === null || path === void 0
        ? void 0
        : (_path$ = path[1]) === null || _path$ === void 0
        ? void 0
        : _path$['dName'],
    );
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'cascader-search-result-wrapper',
      },
      /*#__PURE__*/ _react.default.createElement(
        _tntd.Ellipsis,
        {
          widthLimit: '100%',
          title: dom,
        },
        dom,
      ),
    );
  };

  /** 默认tooltip展示 */
  var getTitle = function getTitle(item) {
    if (!item || (0, _lodash.isEmpty)(item)) {
      return '';
    }
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
        key: 1,
        data: item,
      }),
      item === null || item === void 0 ? void 0 : item.dName,
    );
  };

  // 这里这样写的原因是在级联为disabled的时候tootip不显示
  return /*#__PURE__*/ _react.default.createElement(
    _tooltip.default,
    {
      placement: 'top',
      title:
        !(0, _lodash.isEmpty)(choosedItem) && setTitle
          ? setTitle([
              /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
                key: 1,
                data: choosedItem,
              }),
              choosedItem === null || choosedItem === void 0 ? void 0 : choosedItem.dName,
            ])
          : getTitle(choosedItem),
    },
    disabled
      ? /*#__PURE__*/ _react.default.createElement(
          _select.default,
          {
            value: value,
            disabled: true,
            style: _objectSpread(
              {
                minWidth: '200px',
              },
              rest.style,
            ),
          },
          options.map(function (i) {
            return /*#__PURE__*/ _react.default.createElement(
              _select.default.Option,
              {
                value: i.name,
                key: i.name,
              },
              /*#__PURE__*/ _react.default.createElement(_CascaderTag.default, {
                data: choosedItem,
              }),
              i === null || i === void 0 ? void 0 : i.dName,
            );
          }),
        )
      : /*#__PURE__*/ _react.default.createElement(
          _virtualCascader.default,
          _objectSpread(
            _objectSpread(
              {
                displayRender: displayRender,
              },
              rest,
            ),
            {},
            {
              className: ''.concat(
                (rest === null || rest === void 0 ? void 0 : rest.className) || '',
                ' virtual-indicators-cascader',
              ),
              options: filterOptions,
              value: cascader,
              onChange: handleChange,
              renderItem: renderItem,
              allowClear: allowClear || false,
              notFoundContent: /*#__PURE__*/ _react.default.createElement(EnptyContent, {
                text: _locale.default.indicatorscascader.index.zanWuShuJu,
              }),
              showSearch: rest.showSearch || {
                render: handleSearchRender,
              },
            },
          ),
        ),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(IndicatorsCascader, function (prevProps, nextProps) {
  return (
    (0, _lodash.isEqual)(prevProps.options, nextProps.options) &&
    (0, _lodash.isEqual)(prevProps.disabled, nextProps.disabled) &&
    prevProps.value === nextProps.value
  );
});
exports.default = _default;
