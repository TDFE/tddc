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
var _useVirtualList3 = _interopRequireDefault(require('../hooks/useVirtualList'));
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
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        ) {}
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var SearchDrapper = function SearchDrapper(_ref) {
  var width = _ref.width,
    inputValue = _ref.inputValue,
    filterOptions = _ref.filterOptions,
    prefixCls = _ref.prefixCls,
    notFoundContent = _ref.notFoundContent,
    fieldNames = _ref.fieldNames,
    activeValueCells = _ref.activeValueCells,
    onChoosed = _ref.onChoosed,
    showSearch = _ref.showSearch;
  var containerRef = (0, _react.useRef)(null);
  var wrapperRef = (0, _react.useRef)(null);
  var _useVirtualList = (0, _useVirtualList3.default)(filterOptions, {
      containerTarget: containerRef,
      wrapperTarget: wrapperRef,
      itemHeight: 32,
      overscan: 10,
    }),
    _useVirtualList2 = _slicedToArray(_useVirtualList, 1),
    list = _useVirtualList2[0];

  /** 搜索结果为空 */
  var isEntry = (0, _react.useMemo)(
    function () {
      return (
        !Array.isArray(filterOptions) ||
        filterOptions.some(function (i) {
          return (
            (i === null || i === void 0 ? void 0 : i[fieldNames.value]) === 'ANT_CASCADER_NOT_FOUND'
          );
        })
      );
    },
    [filterOptions],
  );
  if (isEntry) {
    if (notFoundContent) {
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          style: {
            width: width,
          },
        },
        notFoundContent,
      );
    }
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      null,
      /*#__PURE__*/ _react.default.createElement(
        'ul',
        {
          className: ''.concat(prefixCls, '-menu'),
          style: {
            height: 'auto',
            width: width || 190,
          },
        },
        /*#__PURE__*/ _react.default.createElement(
          'li',
          {
            className: ''.concat(prefixCls, '-menu-item ').concat(prefixCls, '-menu-item-disabled'),
            title: '',
            role: 'menuitem',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'ant-empty ant-empty-normal ant-empty-small',
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'ant-empty-image',
              },
              /*#__PURE__*/ _react.default.createElement(
                'svg',
                {
                  width: '64',
                  height: '41',
                  viewBox: '0 0 64 41',
                  xmlns: 'http://www.w3.org/2000/svg',
                },
                /*#__PURE__*/ _react.default.createElement(
                  'g',
                  {
                    transform: 'translate(0 1)',
                    fill: 'none',
                  },
                  /*#__PURE__*/ _react.default.createElement('ellipse', {
                    fill: '#F5F5F5',
                    cx: '32',
                    cy: '33',
                    rx: '32',
                    ry: '7',
                  }),
                  /*#__PURE__*/ _react.default.createElement(
                    'g',
                    {
                      stroke: '#D9D9D9',
                    },
                    /*#__PURE__*/ _react.default.createElement('path', {
                      d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
                    }),
                    /*#__PURE__*/ _react.default.createElement('path', {
                      d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
                      fill: '#FAFAFA',
                    }),
                  ),
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(
              'p',
              {
                className: 'ant-empty-description',
              },
              '\u6682\u65E0\u6570\u636E',
            ),
          ),
        ),
      ),
    );
  }
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-menu'),
    },
    /*#__PURE__*/ _react.default.createElement(
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
              var _path$map, _path, _showSearch$render;
              var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                _ref2$data = _ref2.data;
              _ref2$data = _ref2$data === void 0 ? {} : _ref2$data;
              var path = _ref2$data.path,
                data = _ref2.data;
              var index = arguments.length > 1 ? arguments[1] : undefined;
              var value = data === null || data === void 0 ? void 0 : data[fieldNames['value']];
              var labels =
                (path === null || path === void 0
                  ? void 0
                  : (_path$map = path.map(function (i) {
                      return i === null || i === void 0 ? void 0 : i[fieldNames['label']];
                    })) === null || _path$map === void 0
                  ? void 0
                  : _path$map.join('/')) || '';
              return /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: '\n                '
                    .concat(prefixCls, '-menu-item\n                ')
                    .concat(
                      activeValueCells.includes(value)
                        ? ''.concat(prefixCls, '-menu-item-active')
                        : '',
                      '\n                ',
                    )
                    .concat(
                      (data === null || data === void 0 ? void 0 : data.disabled)
                        ? ''.concat(prefixCls, '-menu-item-disabled')
                        : '',
                      '\n                ',
                    )
                    .concat(
                      (
                        path === null || path === void 0
                          ? void 0
                          : (_path =
                              path[
                                (path === null || path === void 0 ? void 0 : path.length) - 1
                              ]) === null || _path === void 0
                          ? void 0
                          : _path[fieldNames['label']]
                      )
                        ? ''.concat(prefixCls, '-menu-item-nodata')
                        : '',
                      '\n              ',
                    ),
                  onClick: function onClick() {
                    if (!(data === null || data === void 0 ? void 0 : data.disabled)) {
                      onChoosed(value);
                    }
                  },
                  key: value || index,
                },
                (showSearch === null || showSearch === void 0
                  ? void 0
                  : (_showSearch$render = showSearch.render) === null ||
                    _showSearch$render === void 0
                  ? void 0
                  : _showSearch$render.call(showSearch, inputValue, path)) || labels,
              );
            }),
      ),
    ),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(SearchDrapper);
exports.default = _default;
