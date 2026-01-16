'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = exports.EnptyContent = void 0;
var _tooltip = _interopRequireDefault(require('tntd/es/tooltip'));
var _select = _interopRequireDefault(require('tntd/es/select'));
var _ellipsis = _interopRequireDefault(require('tntd/es/ellipsis'));
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));
var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties'),
);
var _I18N = _interopRequireWildcard(require('./I18N'));
var _react = _interopRequireWildcard(require('react'));
var _lodash = require('lodash');
var _virtualCascader = _interopRequireDefault(require('@tddc/virtual-cascader'));
var _CascaderTag = _interopRequireDefault(require('./CascaderTag'));
require('./index.less');
var _excluded = ['locale', 'options', 'value', 'setTitle', 'onChange', 'allowClear', 'disabled'],
  _excluded2 = ['sourceName', 'sourceKey', 'name'];
/*
 * @Description: 指标的级联
 * @Author: 郑泳健
 * @Date: 2022-11-17 15:17:59
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-24 18:25:32
 */
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t2 in e)
      'default' !== _t2 &&
        {}.hasOwnProperty.call(e, _t2) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) &&
        (i.get || i.set)
          ? o(f, _t2, i)
          : (f[_t2] = e[_t2]));
    return f;
  })(e, t);
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
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
var EnptyContent = (exports.EnptyContent = function EnptyContent(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? I18N.indicatorscascader.index.dangQianLeiXingZan : _ref$text;
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: 'virtual-cascader-enpty-wrapper',
    },
    /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'virtual-cascader-enpty-content',
      },
      /*#__PURE__*/ _react['default'].createElement('img', {
        src: require('../../sources/images/empty/no-data-s.png'),
        width: 80,
        height: 50,
      }),
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          className: 'no-data-text',
        },
        text,
      ),
    ),
  );
});
var IndicatorsCascader = function IndicatorsCascader(_ref2) {
  var locale = _ref2.locale,
    options = _ref2.options,
    value = _ref2.value,
    setTitle = _ref2.setTitle,
    onChange = _ref2.onChange,
    allowClear = _ref2.allowClear,
    disabled = _ref2.disabled,
    rest = (0, _objectWithoutProperties2['default'])(_ref2, _excluded);
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    cascader = _useState2[0],
    setCascader = _useState2[1];
  // 被选中的节点
  var _useState3 = (0, _react.useState)({}),
    _useState4 = (0, _slicedToArray2['default'])(_useState3, 2),
    choosedItem = _useState4[0],
    setChoosedItem = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = (0, _slicedToArray2['default'])(_useState5, 2),
    filterOptions = _useState6[0],
    setFilterOptions = _useState6[1];
  var _useState7 = (0, _react.useState)({}),
    _useState8 = (0, _slicedToArray2['default'])(_useState7, 2),
    filterMapOption = _useState8[0],
    setFilterMapOption = _useState8[1];

  /** 将一维数组转为二维，为了符合Cascader组件, 同时生存一个mapOption方便后续取值  */
  (0, _react.useEffect)(
    function () {
      if (!Array.isArray(options)) {
        return;
      }
      var _options$reduce = options.reduce(
          function (total, item) {
            var sourceName = item.sourceName,
              sourceKey = item.sourceKey,
              name = item.name,
              rest = (0, _objectWithoutProperties2['default'])(item, _excluded2);
            var index = total['_filterOptions'].findIndex(function (i) {
              return i.name === sourceKey;
            });
            if (index >= 0) {
              if (Array.isArray(total['_filterOptions'][index].data)) {
                total['_filterOptions'][index].data.push(
                  _objectSpread(
                    _objectSpread({}, rest),
                    {},
                    {
                      name: name,
                      sourceName: sourceName,
                    },
                  ),
                );
              }
            } else {
              total['_filterOptions'].push({
                name: sourceKey,
                dName: sourceName,
                data: !!name
                  ? [
                      _objectSpread(
                        _objectSpread({}, rest),
                        {},
                        {
                          sourceName: sourceName,
                          name: name,
                        },
                      ),
                    ]
                  : [
                      {
                        name: '',
                        dName: '',
                      },
                    ],
              });
            }
            total['_filterMapOption'][item.name] = item;
            return total;
          },
          {
            _filterOptions: [],
            _filterMapOption: {},
          },
        ),
        _filterOptions = _options$reduce._filterOptions,
        _filterMapOption = _options$reduce._filterMapOption;
      setFilterOptions(_filterOptions);
      setFilterMapOption(_filterMapOption);
    },
    [options],
  );

  // 将value 改为cascader要求的value结构
  (0, _react.useEffect)(
    function () {
      if (value) {
        var _ref3 = filterMapOption[value] || {},
          sourceKey = _ref3.sourceKey;
        if (sourceKey) {
          setCascader([sourceKey, value]);
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
  var handleChange = (0, _react.useCallback)(
    function (value) {
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
        displayDom = /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            className: 'ant-select-selection-selected-value',
          },
          /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
            data: item,
            inputValue: inputValue,
            locale: locale,
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
      return /*#__PURE__*/ _react['default'].createElement(EnptyContent, null);
    }
    var dom = /*#__PURE__*/ _react['default'].createElement(
      'span',
      null,
      isLast &&
        level !== 0 &&
        /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
          data: data,
        }),
      data === null || data === void 0 ? void 0 : data.dName,
    );
    if (level === 0) {
      return dom;
    }
    return /*#__PURE__*/ _react['default'].createElement(
      _ellipsis['default'],
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
    var dom = /*#__PURE__*/ _react['default'].createElement(
      _react['default'].Fragment,
      null,
      /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
        data: path === null || path === void 0 ? void 0 : path[1],
      }),
      path === null || path === void 0
        ? void 0
        : (_path$ = path[1]) === null || _path$ === void 0
        ? void 0
        : _path$['dName'],
    );
    return /*#__PURE__*/ _react['default'].createElement(
      'div',
      {
        className: 'cascader-search-result-wrapper',
      },
      /*#__PURE__*/ _react['default'].createElement(
        _ellipsis['default'],
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
    return /*#__PURE__*/ _react['default'].createElement(
      _react['default'].Fragment,
      null,
      /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
        key: 1,
        data: item,
      }),
      item === null || item === void 0 ? void 0 : item.dName,
    );
  };

  // 这里这样写的原因是在级联为disabled的时候tootip不显示
  return /*#__PURE__*/ _react['default'].createElement(
    _tooltip['default'],
    {
      placement: 'top',
      title:
        !(0, _lodash.isEmpty)(choosedItem) && setTitle
          ? setTitle([
              /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
                key: 1,
                data: choosedItem,
              }),
              choosedItem === null || choosedItem === void 0 ? void 0 : choosedItem.dName,
            ])
          : getTitle(choosedItem),
    },
    disabled
      ? /*#__PURE__*/ _react['default'].createElement(
          _select['default'],
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
            return /*#__PURE__*/ _react['default'].createElement(
              _select['default'].Option,
              {
                value: i.name,
                key: i.name,
              },
              /*#__PURE__*/ _react['default'].createElement(_CascaderTag['default'], {
                data: choosedItem,
              }),
              i === null || i === void 0 ? void 0 : i.dName,
            );
          }),
        )
      : /*#__PURE__*/ _react['default'].createElement(
          _virtualCascader['default'],
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
              notFoundContent: /*#__PURE__*/ _react['default'].createElement(EnptyContent, {
                text: I18N.indicatorscascader.index.zanWuShuJu,
              }),
              showSearch: rest.showSearch || {
                render: handleSearchRender,
              },
            },
          ),
        ),
  );
};
var _default = (exports['default'] = /*#__PURE__*/ (0, _react.memo)(
  IndicatorsCascader,
  function (prevProps, nextProps) {
    return (
      (0, _lodash.isEqual)(prevProps.options, nextProps.options) &&
      (0, _lodash.isEqual)(prevProps.disabled, nextProps.disabled) &&
      prevProps.value === nextProps.value
    );
  },
));
