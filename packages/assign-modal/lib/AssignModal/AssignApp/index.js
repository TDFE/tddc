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
require('antd/lib/checkbox/style');
var _checkbox = _interopRequireDefault(require('antd/lib/checkbox'));
require('antd/lib/tree/style');
var _tree = _interopRequireDefault(require('antd/lib/tree'));
var _react = _interopRequireWildcard(require('react'));
var _tntd = require('tntd');
var _lodash = require('lodash');
require('./index.less');
var _utils = require('./utils');
var _locale = require('../../locale');
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
var TreeNode = _tree.default.TreeNode;
var path = []; // 上级机构到当前机构的路径

var AssignModal = function AssignModal(props) {
  var _orgList$;
  var _props$orgList = props.orgList,
    orgList = _props$orgList === void 0 ? [] : _props$orgList,
    _props$dataItem = props.dataItem,
    dataItem = _props$dataItem === void 0 ? {} : _props$dataItem,
    disabled = props.disabled,
    appList = props.appList,
    onChange = props.onChange,
    orgTitle = props.orgTitle,
    appTitle = props.appTitle,
    orgCheckboxTitle = props.orgCheckboxTitle,
    appCheckboxTitle = props.appCheckboxTitle;
  var _dataItem$appCodes = dataItem.appCodes,
    appCodes = _dataItem$appCodes === void 0 ? [] : _dataItem$appCodes,
    _dataItem$orgCodes = dataItem.orgCodes,
    orgCodes = _dataItem$orgCodes === void 0 ? [] : _dataItem$orgCodes,
    orgCode = dataItem.orgCode,
    appCode = dataItem.appCode;
  var allOrg = (0, _utils.preorder)(orgList[0]);
  var allApp = appList.map(function (item) {
    return item.value;
  });
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];
  var _useState3 = (0, _react.useState)(appCodes || []),
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
  if (!((_orgList$ = orgList[0]) === null || _orgList$ === void 0 ? void 0 : _orgList$.path)) {
    (0, _utils.addPath)(orgList[0], []); // 添加 上级机构到子机构的路径
  }

  (0, _react.useEffect)(
    function () {
      // path 和 allOrgList 赋值
      path = (0, _utils.findSameCodePath)(orgList[0], orgCode);
      var initOrgs = [];
      var initApps = [];
      if (orgCodes.includes('all')) {
        setAllOrgChecked(orgCodes.includes('all'));
        initOrgs = allOrg;
      } else {
        initOrgs = Array.from(
          new Set([].concat(_toConsumableArray(orgCodes || []), _toConsumableArray(path))),
        );
      }
      if (appCodes.includes('all')) {
        setAllAppChecked(appCodes.includes('all'));
        initApps = allApp;
      } else {
        initApps = Array.from(new Set([].concat(_toConsumableArray(appCodes || []), [appCode])));
      }
      setCheckedKeys(initOrgs);
      setAppKeys(initApps || []);
      console.log({
        initApps: initApps,
      });
      onChange &&
        onChange({
          appKeys: appCodes.includes('all') ? ['all'] : initApps,
          checkedKeys: orgCodes.includes('all') ? ['all'] : initOrgs,
          appCheckAll: appCodes.includes('all'),
          orgCheckAll: orgCodes.includes('all'),
          checkData: {
            apps: initApps,
            orgs: initOrgs,
          },
        });
    },
    [dataItem],
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
            disabled: orgDisabled || disabled || allOrgChecked,
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
      arr.splice(0, 1);
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
    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: checked,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      checkData: {
        apps: appKeys,
        orgs: checked,
      },
    });
  };
  var assignApp = function assignApp(e) {
    var value = '';
    var newAppKeys = [];
    if (e.target.checked) {
      value = e.target.value;
      newAppKeys = [].concat(_toConsumableArray(appKeys), [value]);
    } else {
      value = e.target.value;
      newAppKeys = (0, _lodash.cloneDeep)(appKeys);
      newAppKeys.map(function (item, index) {
        if (value === item) {
          newAppKeys.splice(index, 1);
        }
      });
    }
    setAppKeys(newAppKeys);
    onChange({
      appKeys: newAppKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      checkData: {
        apps: newAppKeys,
        orgs: checkedKeys,
      },
    });
  };

  // org全局授权
  var checkAllOrg = function checkAllOrg(e) {
    var orgChecks = [];
    if (e.target.checked) {
      setAllOrgChecked(true);
      orgChecks = (0, _utils.preorder)(orgList[0]);
      setCheckedKeys(orgChecks);
      onChange({
        appKeys: allAppChecked ? ['all'] : appKeys,
        checkedKeys: ['all'],
        appCheckAll: allAppChecked,
        orgCheckAll: true,
        checkData: {
          apps: appKeys,
          orgs: checkedKeys,
        },
      });
    } else {
      setAllOrgChecked(false);
      var arr = orgCodes.includes('all') ? allOrg : orgCodes;
      orgChecks = Array.from(
        new Set([].concat(_toConsumableArray(arr || []), _toConsumableArray(path))),
      );
      setCheckedKeys(orgChecks);
      onChange({
        appKeys: allAppChecked ? ['all'] : appKeys,
        checkedKeys: orgChecks,
        appCheckAll: allAppChecked,
        orgCheckAll: false,
        checkData: {
          apps: appKeys,
          orgs: orgChecks,
        },
      });
    }
  };

  // app全局授权
  var checkedAllApp = function checkedAllApp(e) {
    var appChecks = [];
    if (e.target.checked) {
      setAllAppChecked(true);
      appChecks = appList.map(function (item) {
        return item.value;
      });
      setAppKeys(appChecks);
      onChange({
        appKeys: ['all'],
        checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
        appCheckAll: true,
        orgCheckAll: allOrgChecked,
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
        },
      });
    } else {
      setAllAppChecked(false);
      var arr = appCodes.includes('all') ? allApp : appCodes;
      appChecks = Array.from(new Set([].concat(_toConsumableArray(arr || []), [appCode])));
      setAppKeys(appChecks);
      onChange({
        appKeys: appChecks,
        checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
        appCheckAll: false,
        orgCheckAll: allOrgChecked,
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
        },
      });
    }
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
        orgTitle ||
          (0, _locale.getText)(
            'authorizesOrgList',
            props === null || props === void 0 ? void 0 : props.lang,
          ),
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
            orgCheckboxTitle ||
              (0, _locale.getText)(
                'allOrgAvailable',
                props === null || props === void 0 ? void 0 : props.lang,
              ),
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _tree.default,
        {
          blockNode: true,
          className: 'tree-list',
          checkable: true,
          checkStrictly: true,
          checkedKeys: checkedKeys,
          defaultExpandAll: true,
          onCheck: onCheck,
          disabled: true,
        },
        loopTreeNodes(orgList, 0),
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
        appTitle ||
          (0, _locale.getText)(
            'authorizesAppList',
            props === null || props === void 0 ? void 0 : props.lang,
          ),
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
            appCheckboxTitle ||
              (0, _locale.getText)(
                'allAppAvailable',
                props === null || props === void 0 ? void 0 : props.lang,
              ),
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
          var isOwnAppCode = appCode === item.value;
          return /*#__PURE__*/ _react.default.createElement(
            _checkbox.default,
            {
              checked: isCheck,
              disabled: disabled || isOwnAppCode || allAppChecked,
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
