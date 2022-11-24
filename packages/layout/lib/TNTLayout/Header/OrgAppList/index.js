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

require('antd/lib/tree-select/style');

var _treeSelect = _interopRequireDefault(require('antd/lib/tree-select'));

require('antd/lib/select/style');

var _select = _interopRequireDefault(require('antd/lib/select'));

require('antd/lib/input/style');

var _input = _interopRequireDefault(require('antd/lib/input'));

var _react = _interopRequireWildcard(require('react'));

require('./index.less');

var _storage = require('../../storage');

var _utils = require('../../utils');

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

var InputGroup = _input.default.Group;
var Option = _select.default.Option;

var _default = function _default(props) {
  var orgAppShow = props.orgAppShow,
    orgList = props.orgList,
    onOrgChange = props.onOrgChange,
    _props$orgAppList = props.orgAppList,
    orgAppList = _props$orgAppList === void 0 ? [] : _props$orgAppList,
    onAppChange = props.onAppChange;
  var orgListFormatData = (0, _utils.traverseTree)([orgList], function (item) {
    item.title = item.name;
    item.value = item.uuid;
    item.key = item.uuid;
  });

  var getInitialSelectedOrg = function getInitialSelectedOrg() {
    var currentOrgStore = (0, _storage.getCurrentOrgStore)();
    var temp = orgListFormatData[0];

    var findOrgByKey = function findOrgByKey(selectedKey) {
      var curOrg;
      (0, _utils.traverseTree)(orgListFormatData, function (item) {
        if (item.key === selectedKey) {
          curOrg = item;
          return false;
        }
      });
      return curOrg;
    };

    if (currentOrgStore.name) {
      var curOrg = findOrgByKey(currentOrgStore.key);

      if (curOrg) {
        temp = currentOrgStore;
      } else {
        (0, _storage.setCurrentOrgStore)(temp);
      }
    }

    return temp;
  };

  var getInitialSelectedApp = function getInitialSelectedApp() {
    var currentAppStore = (0, _storage.getCurrentAppStore)();
    var temp = orgAppList[0];

    var findAppByKey = function findAppByKey(selectedKey) {
      var findApp;

      for (var index = 0; index < orgAppList.length; index++) {
        var item = orgAppList[index];

        if (item.key === selectedKey) {
          findApp = item;
          break;
        }
      }

      return findApp;
    };

    if (currentAppStore.name) {
      var curApp = findAppByKey(currentAppStore.key);

      if (curApp) {
        temp = currentAppStore;
      } else {
        (0, _storage.setCurrentAppStore)(temp);
      }
    }

    return temp;
  };

  (0, _react.useEffect)(
    function () {
      var _Object$keys;

      if (
        orgList &&
        ((_Object$keys = Object.keys(orgList)) === null || _Object$keys === void 0
          ? void 0
          : _Object$keys.length)
      ) {
        setSelectedOrg(getInitialSelectedOrg());
      }
    },
    [orgList],
  );
  (0, _react.useEffect)(
    function () {
      if (orgAppList === null || orgAppList === void 0 ? void 0 : orgAppList.length) {
        setSelectedApp(getInitialSelectedApp());
      }
    },
    [orgAppList],
  );

  var _useState = (0, _react.useState)(getInitialSelectedOrg()),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOrg = _useState2[0],
    setSelectedOrg = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedApp = _useState4[0],
    setSelectedApp = _useState4[1];

  var _ref = selectedOrg || {},
    orgKey = _ref.key;

  var _ref2 = selectedApp || {},
    _ref2$key = _ref2.key,
    appKey = _ref2$key === void 0 ? '' : _ref2$key;

  var handleChangeApp = function handleChangeApp(app) {
    if (appKey !== (app === null || app === void 0 ? void 0 : app.key)) {
      setSelectedApp(app);
      (0, _storage.setCurrentAppStore)(app);
      onAppChange && onAppChange(app);
    }
  }; // org变化事件

  var handleChangeOrg = function handleChangeOrg() {
    var org = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    setSelectedOrg(org);
    (0, _storage.setCurrentOrgStore)(org);
    handleChangeApp(orgAppList[0]);
    onOrgChange && onOrgChange(org);
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'tnt-layout-header-org-app',
    },
    /*#__PURE__*/ _react.default.createElement(
      InputGroup,
      {
        compact: true,
      },
      /*#__PURE__*/ _react.default.createElement(_treeSelect.default, {
        placeholder: '\u9009\u62E9\u673A\u6784',
        searchPlaceholder: '\u673A\u6784\u540D\u79F0',
        treeNodeFilterProp: 'title',
        showSearch: true,
        treeData: orgListFormatData,
        treeDefaultExpandAll: true,
        style: {
          width: orgAppShow ? 130 : 160,
          height: 28,
          lineHeight: 28,
        },
        dropdownStyle: {
          maxHeight: 300,
          overflow: 'auto',
          width: 320,
        },
        dropdownClassName: 'org-tree-select',
        onChange: function onChange(orgKey, labels, item) {
          var curItem = item.triggerNode.props;
          var findItem = {
            uuid: orgKey,
            name: curItem.name,
            key: orgKey,
            code: curItem.code,
          };
          handleChangeOrg(findItem);
        },
        value: orgKey,
      }),
      orgAppShow &&
        /*#__PURE__*/ _react.default.createElement(
          _select.default,
          {
            placeholder: '\u8BF7\u9009\u62E9',
            className: 'org-app-select',
            showSearch: true,
            optionFilterProp: 'children',
            onChange: function onChange(appKey, e) {
              handleChangeApp(e.props.item);
            },
            value: appKey,
            style: {
              width: 130,
              height: 28,
              lineHeight: 28,
            },
          },
          orgAppList.map(function (item) {
            return /*#__PURE__*/ _react.default.createElement(
              Option,
              {
                key: item.key,
                value: item.key,
                item: item,
              },
              item.name,
            );
          }),
        ),
    ),
  );
};

exports.default = _default;
