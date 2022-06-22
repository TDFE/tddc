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

require('antd/lib/checkbox/style');

var _checkbox = _interopRequireDefault(require('antd/lib/checkbox'));

require('antd/lib/tree/style');

var _tree = _interopRequireDefault(require('antd/lib/tree'));

var _react = _interopRequireWildcard(require('react'));

var _tntd = require('tntd');

var _lodash = require('lodash');

require('./index.less');

var _utils = require('./utils');

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

var TreeNode = _tree.default.TreeNode;
var path = []; // 上级机构到当前机构的路径

var allOrgList = [];

var AssignModal = function AssignModal(props) {
  var _props$orgList = props.orgList,
    orgList = _props$orgList === void 0 ? [] : _props$orgList,
    _props$dataItem = props.dataItem,
    dataItem = _props$dataItem === void 0 ? {} : _props$dataItem,
    disabled = props.disabled,
    appList = props.appList,
    onChange = props.onChange;

  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];

  var _useState3 = (0, _react.useState)(
      (dataItem === null || dataItem === void 0 ? void 0 : dataItem.appCodes) || [],
    ),
    _useState4 = _slicedToArray(_useState3, 2),
    appKeys = _useState4[0],
    setAppKeys = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    allOrgChecked = _useState6[0],
    setAllOrgChecked = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    allAppChecked = _useState8[0],
    setAllAppChecked = _useState8[1];

  if (!orgList[0].path) {
    (0, _utils.addPath)(orgList[0], []); // 添加 上级机构到子机构的路径
  }

  (0, _react.useEffect)(
    function () {
      // path 和 allOrgList 赋值
      path = (0, _utils.findSameCodePath)(orgList[0], dataItem.orgCode);
      allOrgList = (0, _utils.preorder)(orgList[0]);
      var initKeys = Array.from(
        new Set(
          [].concat(
            _toConsumableArray(
              (dataItem === null || dataItem === void 0 ? void 0 : dataItem.orgCodes) || [],
            ),
            _toConsumableArray(path),
          ),
        ),
      );
      setCheckedKeys(initKeys);
    },
    [dataItem.orgCode],
  );
  (0, _react.useEffect)(
    function () {
      // 机构和应用 全选
      if (appList.length > 0) {
        var allApp = appList.map(function (item) {
          return item.value;
        }); // 判断当前用户是否具有 该机构或应用 权限

        var app = appKeys.filter(function (item) {
          return allApp.includes(item);
        });
        var org = checkedKeys.filter(function (item) {
          return allOrgList.includes(item);
        });
        setAllAppChecked(app.length === appList.length);
        setAllOrgChecked(org.length === allOrgList.length);
      }
    },
    [checkedKeys, appKeys, appList],
  );

  var loopTreeNodes = function loopTreeNodes(data) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var NodeTitle = function NodeTitle(_ref) {
      var node = _ref.node;
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'node-title',
        },
        node.title,
      );
    };

    return data.map(function (item) {
      var orgDisabled = path.includes(item.code);

      if (item.children) {
        return /*#__PURE__*/ _react.default.createElement(
          TreeNode,
          {
            key: item.code,
            title: /*#__PURE__*/ _react.default.createElement(NodeTitle, {
              node: item,
            }),
            item: item,
            disabled: orgDisabled || disabled,
          },
          loopTreeNodes(item.children, level + 1),
        );
      }

      return /*#__PURE__*/ _react.default.createElement(TreeNode, {
        style: {
          paddingLeft: ''.concat((level + 1) * 14, 'px'),
          marginLeft: '-'.concat(level * 14, 'px'),
        },
        key: item.code,
        title: /*#__PURE__*/ _react.default.createElement(NodeTitle, {
          node: item,
        }),
        item: item,
        disabled: orgDisabled || disabled,
      });
    });
  };

  var onCheck = function onCheck(keys, info) {
    var props = info.node.props;
    var item = props.item;
    var path = item.path;
    var checked = keys.checked;

    if (!info.node.isLeaf() && !info.node.checked) {
      var arr = (0, _utils.preorder)(info.node.props.item);
      arr.map(function (item) {
        var i = checked.findIndex(function (i) {
          return i === item;
        });
        if (i !== -1) checked.splice(i, 1);
      });
    }

    if (info.checked) {
      checked = Array.from(
        new Set([].concat(_toConsumableArray(checked), _toConsumableArray(path))),
      );
    }

    setCheckedKeys(checked);
    onChange &&
      onChange({
        appKeys: appKeys,
        checkedKeys: keys.checked,
      });
  };

  var assignApp = function assignApp(e) {
    var value = '';
    var newAppKeys = [];

    if (e.target.checked) {
      value = e.target.value;
      newAppKeys = [].concat(_toConsumableArray(appKeys), [value]);
      setAppKeys(newAppKeys);
    } else {
      value = e.target.value;
      newAppKeys = (0, _lodash.cloneDeep)(appKeys);
      newAppKeys.map(function (item, index) {
        if (value === item) {
          newAppKeys.splice(index, 1);
        }
      });
      setAppKeys(newAppKeys);
    }

    onChange &&
      onChange({
        checkedKeys: checkedKeys,
        appKeys: newAppKeys,
      });
  };

  var checkAllOrg = function checkAllOrg(e) {
    var orgKeys = [];

    if (e.target.checked) {
      orgKeys = (0, _utils.preorder)(orgList[0]);
      setCheckedKeys(orgKeys);
    } else {
      orgKeys = _toConsumableArray(path);
      setCheckedKeys(orgKeys);
    }

    onChange &&
      onChange({
        appKeys: appKeys,
        checkedKeys: orgKeys,
      });
  };

  var checkedAllApp = function checkedAllApp(e) {
    var appKeys = [];

    if (e.target.checked) {
      appKeys = appList.map(function (item) {
        return item.value;
      });
      setAppKeys(appKeys);
    } else {
      appKeys = [dataItem === null || dataItem === void 0 ? void 0 : dataItem.appCode];
      setAppKeys(appKeys);
    }

    onChange &&
      onChange({
        appKeys: appKeys,
        checkedKeys: checkedKeys,
      });
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'assign-box-container',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'left',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-header',
        },
        '\u6388\u6743\u53EF\u7528\u673A\u6784',
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-header',
        },
        '\u673A\u6784\u5217\u8868',
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'menu-all-checked',
          },
          /*#__PURE__*/ _react.default.createElement(
            _checkbox.default,
            {
              onChange: checkAllOrg,
              checked: allOrgChecked,
              disabled: disabled,
            },
            '\u5168\u9009',
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _tree.default,
        {
          checkable: true,
          defaultExpandedKeys: ['0-0-0', '0-0-1'],
          defaultSelectedKeys: ['0-0-0', '0-0-1'],
          defaultCheckedKeys: ['0-0-0', '0-0-1'],
        },
        /*#__PURE__*/ _react.default.createElement(
          TreeNode,
          {
            title: 'parent 1',
            key: '0-0',
          },
          /*#__PURE__*/ _react.default.createElement(
            TreeNode,
            {
              title: 'parent 1-0',
              key: '0-0-0',
              disabled: true,
            },
            /*#__PURE__*/ _react.default.createElement(TreeNode, {
              title: 'leaf',
              key: '0-0-0-0',
            }),
            /*#__PURE__*/ _react.default.createElement(TreeNode, {
              title: 'leaf',
              key: '0-0-0-1',
            }),
          ),
          /*#__PURE__*/ _react.default.createElement(
            TreeNode,
            {
              title: 'parent 1-1',
              key: '0-0-1',
            },
            /*#__PURE__*/ _react.default.createElement(TreeNode, {
              title: /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  style: {
                    color: '#1890ff',
                  },
                },
                'sss',
              ),
              key: '0-0-1-0',
            }),
          ),
        ),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'right',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-header',
        },
        '\u6388\u6743\u53EF\u7528\u6E20\u9053',
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-header',
        },
        '\u6E20\u9053\u5217\u8868',
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'menu-all-checked',
          },
          /*#__PURE__*/ _react.default.createElement(
            _checkbox.default,
            {
              onChange: checkedAllApp,
              checked: allAppChecked,
              disabled: disabled,
            },
            '\u5168\u9009',
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-body',
        },
        appList.map(function (item, index) {
          var isCheck =
            appKeys === null || appKeys === void 0 ? void 0 : appKeys.includes(item.value);
          var isOwnAppCode =
            (dataItem === null || dataItem === void 0 ? void 0 : dataItem.appCode) === item.value;
          return /*#__PURE__*/ _react.default.createElement(
            _checkbox.default,
            {
              checked: isCheck,
              disabled: disabled || isOwnAppCode,
              onChange: assignApp,
              value: item.value,
              key: index,
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                style: {
                  display: 'inline-block',
                },
              },
              /*#__PURE__*/ _react.default.createElement(_tntd.Ellipsis, {
                widthLimit: 100,
                title: item.label,
              }),
            ),
          );
        }),
      ),
    ),
  );
};

var _default = AssignModal;
exports.default = _default;
