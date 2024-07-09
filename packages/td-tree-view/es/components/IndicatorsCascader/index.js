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
import _Tooltip from 'tntd/es/tooltip';
import _Select from 'tntd/es/select';
import _Ellipsis from 'tntd/es/ellipsis';
var _excluded = ['options', 'value', 'setTitle', 'onChange', 'allowClear', 'disabled'],
  _excluded2 = ['sourceName', 'sourceKey', 'name'];
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
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
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
/*
 * @Description: 指标的级联
 * @Author: 郑泳健
 * @Date: 2022-11-17 15:17:59
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-24 18:25:32
 */
import React, { memo, useEffect, useState, useCallback } from 'react';
import { isEmpty, isEqual } from 'lodash';
import VirtualCascader from '@tddc/virtual-cascader';
import TdTag from './CascaderTag';
import './index.less';
export var EnptyContent = function EnptyContent(_ref) {
  var _ref$text = _ref.text,
    text = _ref$text === void 0 ? '当前类型暂无可选变量,若有需要请联系管理员添加。' : _ref$text;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'virtual-cascader-enpty-wrapper',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'virtual-cascader-enpty-content',
      },
      /*#__PURE__*/ React.createElement('img', {
        src: require('../../sources/images/empty/no-data-s.png'),
        width: 80,
        height: 50,
      }),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'no-data-text',
        },
        text,
      ),
    ),
  );
};
var IndicatorsCascader = function IndicatorsCascader(_ref2) {
  var options = _ref2.options,
    value = _ref2.value,
    setTitle = _ref2.setTitle,
    onChange = _ref2.onChange,
    allowClear = _ref2.allowClear,
    disabled = _ref2.disabled,
    rest = _objectWithoutProperties(_ref2, _excluded);
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    cascader = _useState2[0],
    setCascader = _useState2[1];
  // 被选中的节点
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    choosedItem = _useState4[0],
    setChoosedItem = _useState4[1];
  var _useState5 = useState([]),
    _useState6 = _slicedToArray(_useState5, 2),
    filterOptions = _useState6[0],
    setFilterOptions = _useState6[1];
  var _useState7 = useState({}),
    _useState8 = _slicedToArray(_useState7, 2),
    filterMapOption = _useState8[0],
    setFilterMapOption = _useState8[1];

  /** 将一维数组转为二维，为了符合Cascader组件, 同时生存一个mapOption方便后续取值  */
  useEffect(
    function () {
      if (!Array.isArray(options)) {
        return;
      }
      var _options$reduce = options.reduce(
          function (total, item) {
            var sourceName = item.sourceName,
              sourceKey = item.sourceKey,
              name = item.name,
              rest = _objectWithoutProperties(item, _excluded2);
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
  useEffect(
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
  var handleChange = useCallback(
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
        displayDom = /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'ant-select-selection-selected-value',
          },
          /*#__PURE__*/ React.createElement(TdTag, {
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
      return /*#__PURE__*/ React.createElement(EnptyContent, null);
    }
    var dom = /*#__PURE__*/ React.createElement(
      'span',
      null,
      isLast &&
        level !== 0 &&
        /*#__PURE__*/ React.createElement(TdTag, {
          data: data,
        }),
      data === null || data === void 0 ? void 0 : data.dName,
    );
    if (level === 0) {
      return dom;
    }
    return /*#__PURE__*/ React.createElement(
      _Ellipsis,
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
    var dom = /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      /*#__PURE__*/ React.createElement(TdTag, {
        data: path === null || path === void 0 ? void 0 : path[1],
      }),
      path === null || path === void 0
        ? void 0
        : (_path$ = path[1]) === null || _path$ === void 0
        ? void 0
        : _path$['dName'],
    );
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'cascader-search-result-wrapper',
      },
      /*#__PURE__*/ React.createElement(
        _Ellipsis,
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
    if (!item || isEmpty(item)) {
      return '';
    }
    return /*#__PURE__*/ React.createElement(
      React.Fragment,
      null,
      /*#__PURE__*/ React.createElement(TdTag, {
        key: 1,
        data: item,
      }),
      item === null || item === void 0 ? void 0 : item.dName,
    );
  };

  // 这里这样写的原因是在级联为disabled的时候tootip不显示
  return /*#__PURE__*/ React.createElement(
    _Tooltip,
    {
      placement: 'top',
      title:
        !isEmpty(choosedItem) && setTitle
          ? setTitle([
              /*#__PURE__*/ React.createElement(TdTag, {
                key: 1,
                data: choosedItem,
              }),
              choosedItem === null || choosedItem === void 0 ? void 0 : choosedItem.dName,
            ])
          : getTitle(choosedItem),
    },
    disabled
      ? /*#__PURE__*/ React.createElement(
          _Select,
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
            return /*#__PURE__*/ React.createElement(
              _Select.Option,
              {
                value: i.name,
                key: i.name,
              },
              /*#__PURE__*/ React.createElement(TdTag, {
                data: choosedItem,
              }),
              i === null || i === void 0 ? void 0 : i.dName,
            );
          }),
        )
      : /*#__PURE__*/ React.createElement(
          VirtualCascader,
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
              notFoundContent: /*#__PURE__*/ React.createElement(EnptyContent, {
                text: '暂无数据',
              }),
              showSearch: rest.showSearch || {
                render: handleSearchRender,
              },
            },
          ),
        ),
  );
};
export default /*#__PURE__*/ memo(IndicatorsCascader, function (prevProps, nextProps) {
  return (
    isEqual(prevProps.options, nextProps.options) &&
    isEqual(prevProps.disabled, nextProps.disabled) &&
    prevProps.value === nextProps.value
  );
});
