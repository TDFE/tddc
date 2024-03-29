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
exports.default = void 0;
require('antd/lib/button/style');
var _button = _interopRequireDefault(require('antd/lib/button'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/tree/style');
var _tree = _interopRequireDefault(require('antd/lib/tree'));
require('antd/lib/checkbox/style');
var _checkbox = _interopRequireDefault(require('antd/lib/checkbox'));
require('antd/lib/input/style');
var _input = _interopRequireDefault(require('antd/lib/input'));
var _locale = _interopRequireDefault(require('../locale'));
var _react = _interopRequireWildcard(require('react'));
var _propTypes = _interopRequireDefault(require('prop-types'));
var _lodash = _interopRequireDefault(require('lodash'));
var _utils = require('./utils');
require('./index.less');
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
var Search = _input.default.Search;
var TreeTransfer = function TreeTransfer(_ref) {
  var _dataSource = _ref.dataSource,
    values = _ref.value,
    defaultValue = _ref.defaultValue,
    defaultExpandAll = _ref.defaultExpandAll,
    onChange = _ref.onChange,
    showSearch = _ref.showSearch,
    searchItems = _ref.searchItems,
    searchPlaceholder = _ref.searchPlaceholder,
    notFoundContent = _ref.notFoundContent,
    disabled = _ref.disabled,
    leftDisabled = _ref.leftDisabled,
    rightDisabled = _ref.rightDisabled;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    startCheck = _useState2[0],
    setStartCheck = _useState2[1];
  var _useState3 = (0, _react.useState)(_dataSource),
    _useState4 = _slicedToArray(_useState3, 2),
    dataSource = _useState4[0],
    setDataSource = _useState4[1]; // 全量的数据
  var _useState5 = (0, _react.useState)(values ? values : defaultValue || []),
    _useState6 = _slicedToArray(_useState5, 2),
    selectValues = _useState6[0],
    setSelectValues = _useState6[1]; // 最后选择到右侧的values(values的优先级高于defaultValues)
  var _useState7 = (0, _react.useState)({
      dataSource: [],
      // 展示的数据
      selectDataSource: [],
      // 选中的产品数据
      filterSelectDataSource: [],
      // 去除选中的产品数据
      keys: [],
      // 选中的keys(包括已经选择移动到右边的keys)
      checkedKeys: [],
      // 受控选中的keys
      expandedKeys: [],
      // 展开的项
      autoExpandParent: true,
      // 自动展开父节点
      matchedKeys: [], // 匹配搜索内容的数据
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    leftTree = _useState8[0],
    setLeftTree = _useState8[1]; // 左侧剩余的数据
  var _useState9 = (0, _react.useState)({
      dataSource: [],
      // 展示的数据
      selectDataSource: [],
      // 选中的产品数据
      filterSelectDataSource: [],
      // 去除选中的产品数据
      keys: [],
      // 选中的keys(和checkedKeys相同)
      checkedKeys: [],
      // 受控选中的keys
      expandedKeys: [],
      // 展开的项
      autoExpandParent: true,
      // 自动展开父节点
      matchedKeys: [], // 匹配搜索内容的数据
    }),
    _useState10 = _slicedToArray(_useState9, 2),
    rightTree = _useState10[0],
    setRightTree = _useState10[1]; // 右侧已选择的数据

  (0, _react.useEffect)(
    function () {
      if (startCheck) {
        _onCheck(selectValues, {}, 'left', true, function (_ref2) {
          var selectValues = _ref2.selectValues,
            leftTree = _ref2.leftTree,
            rightTree = _ref2.rightTree;
          var categoryData = JSON.stringify([leftTree.dataSource, rightTree.dataSource]);
          onChange && onChange(selectValues, categoryData);
        });
        setStartCheck(false);
      }
    },
    [startCheck, selectValues],
  );

  // 初始的数据赋值(根据selectValues以及dataSources计算左右侧的展示数据，同时会处理disabled属性)
  var changeDataSource = (0, _react.useCallback)(
    function () {
      var filterValues = values || selectValues;
      var newDataSource = _lodash.default.cloneDeep(_dataSource); // 新的全量数据
      // 如果设置disabled时将数据源全部disabled(数据结构参考Tree组件)
      if (disabled) {
        newDataSource = (0, _utils.disabledCategoryData)(dataSource);
      }
      // 有value时计算两侧的dataSource
      var newLeftTreeDataSource = (0, _utils.filterCategoryData)(
        filterValues,
        newDataSource,
        'filter',
        disabled || leftDisabled,
      ); // 左侧Tree的的展示数据
      var newRightTreeDataSource = (0, _utils.filterCategoryData)(
        filterValues,
        newDataSource,
        'select',
        disabled || rightDisabled,
      ); // 右侧Tree的展示数据
      setDataSource(newDataSource);
      setSelectValues(filterValues || []);
      setLeftTree(
        _objectSpread(
          _objectSpread({}, leftTree),
          {},
          {
            dataSource: newLeftTreeDataSource,
            expandedKeys: defaultExpandAll
              ? (0, _utils.getLastLevelData)(newDataSource).map(function (v) {
                  return v.key;
                })
              : [],
          },
        ),
      );
      setRightTree(
        _objectSpread(
          _objectSpread({}, rightTree),
          {},
          {
            dataSource: newRightTreeDataSource,
            expandedKeys: defaultExpandAll
              ? (0, _utils.getLastLevelData)(newDataSource).map(function (v) {
                  return v.key;
                })
              : [],
          },
        ),
      );
    },
    [_dataSource, values, disabled, leftDisabled, rightDisabled],
  );
  (0, _react.useEffect)(
    function () {
      changeDataSource();
    },
    [changeDataSource],
  );
  var changeState = function changeState(direction, data, newLeftTree, newRightTree, callback) {
    var leftTreeV = newLeftTree || leftTree;
    var rightTreeV = newRightTree || rightTree;
    direction === 'left'
      ? setLeftTree(_objectSpread(_objectSpread({}, leftTreeV), data))
      : setRightTree(_objectSpread(_objectSpread({}, rightTreeV), data));
    callback &&
      callback({
        selectValues: selectValues,
        leftTree:
          direction === 'left' ? _objectSpread(_objectSpread({}, leftTreeV), data) : leftTreeV,
        rightTree:
          direction === 'left' ? rightTreeV : _objectSpread(_objectSpread({}, rightTreeV), data),
      });
  };
  var operationOnCheck = function operationOnCheck(
    keys,
    data,
    direction,
    rightToLeft,
    leftTree,
    rightTree,
    callback,
  ) {
    var newData = (0, _utils.filterCategoryData)(
      keys,
      data,
      'filter',
      rightToLeft ? leftDisabled : false,
    ); // 去除选中的数据
    var selectDataCategory = (0, _utils.filterCategoryData)(keys, data, 'select', rightDisabled); // 选中的数据

    if (rightToLeft) {
      // rightToLeft为true时会重新计算左侧Tree的selectDataSource和filterSelectDataSource
      var checkedKeys = leftTree.checkedKeys;
      var newLeftKeys = [].concat(_toConsumableArray(checkedKeys), _toConsumableArray(keys));
      var newLeftFilterData = (0, _utils.filterCategoryData)(
        newLeftKeys,
        data,
        'filter',
        leftDisabled,
      );
      var newLeftSelectData = (0, _utils.filterCategoryData)(
        newLeftKeys,
        data,
        'select',
        leftDisabled,
      );
      // 右面选中移动到左边时生成左边的数据
      changeState(
        direction,
        {
          dataSource: newData,
          selectDataSource: newLeftSelectData,
          filterSelectDataSource: newLeftFilterData,
        },
        leftTree,
        rightTree,
        callback,
      );
    } else {
      changeState(
        direction,
        {
          filterSelectDataSource: newData,
          selectDataSource: selectDataCategory,
        },
        leftTree,
        rightTree,
        callback,
      );
    }
  };
  // 选中时的方法(rightToLeft表示右边移动到左边时调用该函数)
  var _onCheck = function onCheck(keys, info, direction, rightToLeft, callback) {
    // 选择的keys中是最后一级的keys
    var lastLevelKey = keys.filter(function (item) {
      return (0, _utils.isLastLevelKey)(dataSource, item);
    });
    if (direction === 'left') {
      var newLeftTree = _objectSpread(
        _objectSpread({}, leftTree),
        {},
        {
          // 如果rightToLeft为true时checkedKeys还是原来的checkedKeys，否则为lastLevelKey
          checkedKeys: rightToLeft ? leftTree.checkedKeys : lastLevelKey,
          // 如果rightToLeft为true时keys是原来的checkedKeys加selectValues，否则为lastLevelKey加selectValues
          keys: rightToLeft
            ? _lodash.default.uniq(
                [].concat(
                  _toConsumableArray(selectValues),
                  _toConsumableArray(leftTree.checkedKeys),
                ),
              )
            : _lodash.default.uniq(
                [].concat(_toConsumableArray(selectValues), _toConsumableArray(lastLevelKey)),
              ),
        },
      );
      setLeftTree(newLeftTree);
      var newKeys = _lodash.default.uniq(
        [].concat(_toConsumableArray(lastLevelKey), _toConsumableArray(selectValues)),
      );
      operationOnCheck(
        newKeys,
        dataSource,
        direction,
        rightToLeft,
        newLeftTree,
        rightTree,
        callback,
      );
    } else {
      // 选择的是右侧的Tree时只需要改变受控的keys然后调用operationOnCheck方法
      var newRightTree = _objectSpread(
        _objectSpread({}, rightTree),
        {},
        {
          checkedKeys: lastLevelKey,
          keys: lastLevelKey,
        },
      );
      setRightTree(newRightTree);
      operationOnCheck(
        lastLevelKey,
        newRightTree.dataSource,
        direction,
        rightToLeft,
        leftTree,
        newRightTree,
      );
    }
  };

  // 左向右的按钮(左侧Tree新的数据源是左侧Tree的filterSelectDataSource，右侧Tree新的数据源是左侧Tree的selectDataSource)
  var leftToRight = function leftToRight() {
    var selectDataSource = leftTree.selectDataSource,
      filterSelectDataSource = leftTree.filterSelectDataSource;
    var newLeftTree = _objectSpread(
      _objectSpread({}, leftTree),
      {},
      {
        dataSource: filterSelectDataSource,
        matchedKeys: [],
        checkedKeys: [],
        filterSelectDataSource: [],
        selectDataSource: [],
      },
    );
    var newRightTree = _objectSpread(
      _objectSpread({}, rightTree),
      {},
      {
        dataSource: selectDataSource,
      },
    );
    setSelectValues(leftTree.keys);
    setLeftTree(newLeftTree);
    setRightTree(newRightTree);
    // 左向右按钮点击之后，重新计算右边tree的相关state(兼容点击左向右按钮时右侧有选中项的情况)
    if (!_lodash.default.isEmpty(newRightTree.checkedKeys)) {
      operationOnCheck(
        newRightTree.checkedKeys,
        newRightTree.dataSource,
        'right',
        false,
        newLeftTree,
        newRightTree,
      );
    }
    // 返回给父组件数据
    var categoryData = JSON.stringify([newLeftTree.dataSource, newRightTree.dataSource]);
    onChange && onChange(leftTree.keys, categoryData);
  };
  // 右向左的按钮
  var rightToLeft = function rightToLeft() {
    // 已选择的keys中去除右侧新选择的keys
    var newLeftKeys = selectValues.filter(function (item) {
      return !rightTree.keys.includes(item);
    });
    var newRightTree = _objectSpread(
      _objectSpread({}, rightTree),
      {},
      {
        dataSource: rightTree.filterSelectDataSource,
        keys: [],
        matchedKeys: [],
        selectDataSource: [],
        filterSelectDataSource: [],
        checkedKeys: [],
      },
    );
    setSelectValues(newLeftKeys);
    setRightTree(newRightTree);
    setStartCheck(true);
  };

  // 渲染transfer的全选checkBox
  var renderCheckBox = function renderCheckBox(direction) {
    var directionDisabled = direction === 'left' ? leftDisabled : rightDisabled;
    var operationState = direction === 'left' ? leftTree : rightTree;
    var allLength = (0, _utils.getLastLevelData)(operationState.dataSource).length; // 所有最后一项的数据长度
    var selectLength = operationState.checkedKeys.length; // 所选择的数据长度
    var checkAllDisabled =
      disabled || directionDisabled || _lodash.default.isEmpty(operationState.dataSource); // 全选的checkbox是否disabled
    // 全选或者全不选的状态
    var type = allLength === selectLength ? 'clear' : 'checkAll';
    if (selectLength === 0) {
      // 非全选状态
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
          checked: false,
          indeterminate: false,
          onClick: function onClick() {
            return checkAll(direction, type);
          },
          style: {
            marginRight: '6px',
          },
          disabled: checkAllDisabled,
        }),
        _locale.default.template(_locale.default.treetransfer.index.aLLLE, {
          val1: allLength,
        }),
      );
    } else {
      // 全选状态
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        null,
        /*#__PURE__*/ _react.default.createElement(_checkbox.default, {
          checked: selectLength === allLength,
          indeterminate: selectLength !== allLength,
          onClick: function onClick() {
            return checkAll(direction, type);
          },
          style: {
            marginRight: '6px',
          },
        }),
        _locale.default.template(_locale.default.treetransfer.index.sELEC, {
          val1: selectLength,
          val2: allLength,
        }),
      );
    }
  };

  // checkBox的全选事件
  var checkAll = function checkAll(direction, type) {
    var directionDisabled = direction === 'left' ? rightDisabled : leftDisabled;
    var operationState = direction === 'left' ? leftTree : rightTree;
    var selectAllKeys = (0, _utils.getLastLevelData)(operationState.dataSource).map(function (
      item,
    ) {
      return item.key;
    });
    // 全选右侧时所有的key
    var allRightTreeKeys = (0, _utils.getLastLevelData)(rightTree.dataSource).map(function (item) {
      return item.key;
    });
    // 全选左侧时所有的key
    var allKeys = (0, _utils.getLastLevelData)(dataSource).map(function (item) {
      return item.key;
    });
    // 根据选择的方向生成对应的key
    var generateKeys = direction === 'left' ? allKeys : allRightTreeKeys;
    changeState(direction, {
      selectDataSource: directionDisabled
        ? (0, _utils.disabledCategoryData)(dataSource)
        : dataSource,
      filterSelectDataSource: [],
      checkedKeys: type === 'clear' ? [] : selectAllKeys,
      keys: type === 'clear' ? [] : generateKeys,
    });
  };
  // 搜索筛选(设置expandedKeys和matchedKeys)
  var handleSearch = function handleSearch(e, direction) {
    var value = e.target.value;
    var operationState = direction === 'left' ? leftTree : rightTree;
    var dataSource = operationState.dataSource;
    value = value.trim();
    if (!value) {
      changeState(direction, {
        matchedKeys: null,
        expandedKeys: [],
      });
      return;
    }
    var matchedKeys = [];
    var loop = function loop(data) {
      return data.forEach(function (item) {
        if (
          searchItems.some(function (searchItem) {
            return String(item[searchItem] || '').indexOf(value) > -1;
          })
        ) {
          matchedKeys.push(item.key);
        }
        if (item.children && item.children.length) {
          loop(item.children);
        }
      });
    };
    loop(dataSource);
    changeState(direction, {
      expandedKeys: [].concat(matchedKeys),
      autoExpandParent: true,
      matchedKeys: matchedKeys,
    });
  };
  // 展开或收起时操作
  var handleExpand = function handleExpand(keys, direction) {
    changeState(direction, {
      expandedKeys: keys,
      autoExpandParent: false,
    });
  };
  var leftFilterTreeNode = function leftFilterTreeNode(node) {
    return leftTree.matchedKeys && leftTree.matchedKeys.indexOf(node.props.eventKey) > -1;
  };
  var rightFilterTreeNode = function rightFilterTreeNode(node) {
    return rightTree.matchedKeys && rightTree.matchedKeys.indexOf(node.props.eventKey) > -1;
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'td-tree-transfer',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'td-tree-transfer-box',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'td-tree-transfer-box-header',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'td-tree-transfer-box-select-all',
          },
          renderCheckBox('left'),
        ),
        showSearch &&
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-box-search',
            },
            /*#__PURE__*/ _react.default.createElement(
              Search,
              // style={{ width: "95%", marginBottom: "10px" }}
              {
                onChange: function onChange(e) {
                  return handleSearch(e, 'left');
                },
                placeholder: _lodash.default.get(
                  searchPlaceholder,
                  0,
                  _locale.default.treetransfer.index.qingShuRu,
                ),
              },
            ),
          ),
      ),
      _lodash.default.isEmpty(leftTree.dataSource)
        ? /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-no-data',
            },
            notFoundContent,
          )
        : /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-tree',
            },
            /*#__PURE__*/ _react.default.createElement(_tree.default, {
              expandedKeys: leftTree.expandedKeys,
              autoExpandParent: leftTree.autoExpandParent,
              filterTreeNode: leftFilterTreeNode,
              onExpand: function onExpand(keys) {
                return handleExpand(keys, 'left');
              },
              treeData: leftTree.dataSource,
              checkable: true,
              onCheck: function onCheck(keys, info) {
                return _onCheck(keys, info, 'left', false);
              },
              // checkedStrategy="child"
              checkedKeys: leftTree.checkedKeys,
            }),
          ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'td-tree-transfer-exchange',
      },
      /*#__PURE__*/ _react.default.createElement(
        _button.default,
        {
          onClick: leftToRight,
          disabled: leftTree.checkedKeys.length === 0,
          type: leftTree.checkedKeys.length !== 0 ? 'primary' : 'normal',
        },
        /*#__PURE__*/ _react.default.createElement(_icon.default, {
          type: 'right',
        }),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _button.default,
        {
          onClick: rightToLeft,
          disabled: rightTree.checkedKeys.length === 0,
          type: rightTree.checkedKeys.length !== 0 ? 'primary' : 'normal',
        },
        /*#__PURE__*/ _react.default.createElement(_icon.default, {
          type: 'left',
        }),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'td-tree-transfer-box',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'td-tree-transfer-box-header',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'td-tree-transfer-box-select-all',
          },
          renderCheckBox('right'),
        ),
        showSearch &&
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-box-search',
            },
            /*#__PURE__*/ _react.default.createElement(
              Search,
              // style={{ width: "95%", marginBottom: "10px" }}
              {
                onChange: function onChange(e) {
                  return handleSearch(e, 'right');
                },
                placeholder: _lodash.default.get(
                  searchPlaceholder,
                  1,
                  _locale.default.treetransfer.index.qingShuRu,
                ),
              },
            ),
          ),
      ),
      _lodash.default.isEmpty(rightTree.dataSource)
        ? /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-no-data',
            },
            notFoundContent,
          )
        : /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'td-tree-transfer-tree',
            },
            /*#__PURE__*/ _react.default.createElement(_tree.default, {
              expandedKeys: rightTree.expandedKeys,
              autoExpandParent: rightTree.autoExpandParent,
              filterTreeNode: rightFilterTreeNode,
              onExpand: function onExpand(keys) {
                return handleExpand(keys, 'right');
              },
              treeData: rightTree.dataSource,
              checkable: true,
              onCheck: function onCheck(keys, info) {
                return _onCheck(keys, info, 'right', false);
              },
              // checkedStrategy="child"
              checkedKeys: rightTree.checkedKeys,
            }),
          ),
    ),
  );
};
TreeTransfer.propTypes = {
  dataSource: _propTypes.default.array.isRequired,
  // 全量的tree数据源
  // title: PropTypes.array.isRequired, // 穿梭框的标题
  defaultValue: _propTypes.default.array,
  // 非受控
  value: _propTypes.default.array,
  // 受控 优先级高于defaultValues
  defaultExpandAll: _propTypes.default.bool,
  // 默认展开所有树节点
  disabled: _propTypes.default.bool,
  // 是否禁用穿梭框
  leftDisabled: _propTypes.default.bool,
  // 是否禁用左侧穿梭框
  rightDisabled: _propTypes.default.bool,
  // 是否禁用右侧穿梭框
  showSearch: _propTypes.default.bool,
  // 是否显示搜索框
  searchItems: _propTypes.default.array,
  // 搜索时需要匹配的搜索项的属性
  searchPlaceholder: _propTypes.default.array,
  // 搜索框的placeholder
  notFoundContent: _propTypes.default.node,
  // 无数据时的文本
  onChange: _propTypes.default.func, // 左右移动时的方法
};

TreeTransfer.defaultProps = {
  dataSource: [],
  value: undefined,
  defaultValue: [],
  onChange: function onChange() {},
  // title: ["左侧标题", "右侧标题"],
  showSearch: true,
  searchItems: ['label', 'key'],
  searchPlaceholder: [
    _locale.default.treetransfer.index.qingShuRu,
    _locale.default.treetransfer.index.qingShuRu,
  ],
  notFoundContent: _locale.default.treetransfer.index.zanWuShuJu,
  disabled: false,
  leftDisabled: false,
  rightDisabled: false,
  defaultExpandAll: false,
};
var _default = TreeTransfer;
exports.default = _default;
