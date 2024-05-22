import _Ellipsis from 'tntd/es/ellipsis';
import _Checkbox from 'tntd/es/checkbox';
import _Input from 'tntd/es/input';
import _Tree from 'tntd/es/tree';
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
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { cloneDeep, debounce } from 'lodash';
import './index.less';
import { addPath, findSameCodePath, preorder } from './utils';
import { getText } from '../../locale';
var TreeNode = _Tree.TreeNode;
var Search = _Input.Search;
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
    userTitle = props.userTitle,
    orgCheckboxTitle = props.orgCheckboxTitle,
    appCheckboxTitle = props.appCheckboxTitle,
    userCheckboxTitle = props.userCheckboxTitle,
    _props$userList = props.userList,
    userList = _props$userList === void 0 ? [] : _props$userList,
    showUser = props.showUser;
  var _dataItem$appCodes = dataItem.appCodes,
    appCodes = _dataItem$appCodes === void 0 ? [] : _dataItem$appCodes,
    _dataItem$orgCodes = dataItem.orgCodes,
    orgCodes = _dataItem$orgCodes === void 0 ? [] : _dataItem$orgCodes,
    orgCode = dataItem.orgCode,
    appCode = dataItem.appCode,
    _dataItem$accounts = dataItem.accounts,
    accounts = _dataItem$accounts === void 0 ? [] : _dataItem$accounts,
    account = dataItem.account;
  var allOrg = preorder(orgList[0]);
  var allApp = appList.map(function (item) {
    return item.value;
  });
  var allUser =
    (userList === null || userList === void 0
      ? void 0
      : userList.map(function (item) {
          return item.account;
        })) || [];
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    checkedKeys = _useState2[0],
    setCheckedKeys = _useState2[1];
  var _useState3 = useState(appCodes || []),
    _useState4 = _slicedToArray(_useState3, 2),
    appKeys = _useState4[0],
    setAppKeys = _useState4[1];
  var _useState5 = useState(accounts || []),
    _useState6 = _slicedToArray(_useState5, 2),
    userKeys = _useState6[0],
    setUserKeys = _useState6[1];
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    allOrgChecked = _useState8[0],
    setAllOrgChecked = _useState8[1];
  var _useState9 = useState(false),
    _useState10 = _slicedToArray(_useState9, 2),
    allAppChecked = _useState10[0],
    setAllAppChecked = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    allUserChecked = _useState12[0],
    setAllUserChecked = _useState12[1];
  var _useState13 = useState(),
    _useState14 = _slicedToArray(_useState13, 2),
    filterUser = _useState14[0],
    setFilterUser = _useState14[1];
  if (!((_orgList$ = orgList[0]) === null || _orgList$ === void 0 ? void 0 : _orgList$.path)) {
    addPath(orgList[0], []); // 添加 上级机构到子机构的路径
  }
  useEffect(
    function () {
      // path 和 allOrgList 赋值
      path = findSameCodePath(orgList[0], orgCode);
      var initOrgs = [];
      var initApps = [];
      var initAccounts = [];
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
      if (showUser) {
        if (accounts.includes('all')) {
          setAllUserChecked(true);
          initAccounts = allUser;
        } else {
          initAccounts = Array.from(
            new Set([].concat(_toConsumableArray(accounts || []), [account])),
          );
        }
      }
      setCheckedKeys(initOrgs);
      setAppKeys(initApps || []);
      setUserKeys(initAccounts || []);
      onChange &&
        onChange({
          appKeys: appCodes.includes('all') ? ['all'] : initApps,
          checkedKeys: orgCodes.includes('all') ? ['all'] : initOrgs,
          userKeys: accounts.includes('all') ? ['all'] : initAccounts,
          appCheckAll: appCodes.includes('all'),
          orgCheckAll: orgCodes.includes('all'),
          userCheckAll: accounts.includes('all'),
          checkData: {
            apps: initApps,
            orgs: initOrgs,
            accounts: initAccounts,
          },
        });
    },
    [dataItem],
  );
  var loopTreeNodes = function loopTreeNodes(data) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var NodeTitle = function NodeTitle(_ref) {
      var node = _ref.node;
      return /*#__PURE__*/ React.createElement(
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
        return /*#__PURE__*/ React.createElement(
          TreeNode,
          {
            key: item.code,
            title: /*#__PURE__*/ React.createElement(NodeTitle, {
              node: item,
            }),
            item: item,
            disabled: orgDisabled || disabled || allOrgChecked,
          },
          loopTreeNodes(item.children, level + 1),
        );
      }
      return /*#__PURE__*/ React.createElement(TreeNode, {
        style: {
          paddingLeft: ''.concat((level + 1) * 14, 'px'),
          marginLeft: '-'.concat(level * 14, 'px'),
        },
        key: item.code,
        title: /*#__PURE__*/ React.createElement(NodeTitle, {
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
      var arr = preorder(info.node.props.item);
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
      userKeys: allUserChecked ? ['all'] : userKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: appKeys,
        orgs: checked,
        accounts: userKeys,
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
      newAppKeys = cloneDeep(appKeys);
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
      userKeys: allUserChecked ? ['all'] : userKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: newAppKeys,
        orgs: checkedKeys,
        accounts: userKeys,
      },
    });
  };
  var assignUser = function assignUser(e) {
    var value = '';
    var newUserKeys = [];
    if (e.target.checked) {
      value = e.target.value;
      newUserKeys = [].concat(_toConsumableArray(userKeys), [value]);
    } else {
      value = e.target.value;
      newUserKeys = cloneDeep(userKeys);
      newUserKeys.map(function (item, index) {
        if (value === item) {
          newUserKeys.splice(index, 1);
        }
      });
    }
    setUserKeys(newUserKeys);
    onChange({
      appKeys: appKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      userKeys: newUserKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: appKeys,
        orgs: checkedKeys,
        accounts: newUserKeys,
      },
    });
  };

  // org全局授权
  var checkAllOrg = function checkAllOrg(e) {
    var orgChecks = [];
    if (e.target.checked) {
      setAllOrgChecked(true);
      orgChecks = preorder(orgList[0]);
      setCheckedKeys(orgChecks);
      onChange({
        appKeys: allAppChecked ? ['all'] : appKeys,
        checkedKeys: ['all'],
        appCheckAll: allAppChecked,
        orgCheckAll: true,
        userKeys: allUserChecked ? ['all'] : userKeys,
        userCheckAll: allUserChecked,
        checkData: {
          apps: appKeys,
          orgs: checkedKeys,
          accounts: accounts,
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
        userKeys: allUserChecked ? ['all'] : userKeys,
        userCheckAll: allUserChecked,
        checkData: {
          apps: appKeys,
          orgs: orgChecks,
          accounts: accounts,
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
        userKeys: allUserChecked ? ['all'] : userKeys,
        userCheckAll: allUserChecked,
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
          accounts: accounts,
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
        userKeys: allUserChecked ? ['all'] : userKeys,
        userCheckAll: allUserChecked,
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
          accounts: accounts,
        },
      });
    }
  };

  // account全局授权
  var checkedAllUser = function checkedAllUser(e) {
    var userChecks = [];
    if (e.target.checked) {
      setAllUserChecked(true);
      userChecks = userList.map(function (item) {
        return item.account;
      });
      setUserKeys(userChecks);
      onChange({
        appKeys: allAppChecked ? ['all'] : appKeys,
        appCheckAll: allAppChecked,
        checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
        orgCheckAll: allOrgChecked,
        userKeys: ['all'],
        userCheckAll: true,
        checkData: {
          apps: appKeys,
          orgs: checkedKeys,
          accounts: userChecks,
        },
      });
    } else {
      setAllUserChecked(false);
      var arr = accounts.includes('all') ? allUser : accounts;
      userChecks = Array.from(new Set([].concat(_toConsumableArray(arr || []), [account])));
      setUserKeys(userChecks);
      onChange({
        appKeys: allAppChecked ? ['all'] : appKeys,
        appCheckAll: allAppChecked,
        checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
        orgCheckAll: allOrgChecked,
        userKeys: userChecks,
        userCheckAll: false,
        checkData: {
          apps: appKeys,
          orgs: checkedKeys,
          accounts: userChecks,
        },
      });
    }
  };
  var debouncedSearch = useCallback(
    debounce(function (nextValue) {
      setFilterUser(nextValue);
    }, 200),
    [],
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'assign-box-container',
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'left',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'menu-header',
        },
        orgTitle ||
          getText('authorizesOrgList', props === null || props === void 0 ? void 0 : props.lang),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'menu-all-checked',
          },
          /*#__PURE__*/ React.createElement(
            _Checkbox,
            {
              onChange: checkAllOrg,
              checked: allOrgChecked,
              disabled: disabled,
            },
            orgCheckboxTitle ||
              getText('allOrgAvailable', props === null || props === void 0 ? void 0 : props.lang),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        _Tree,
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
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'right',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'menu-header',
        },
        appTitle ||
          getText('authorizesAppList', props === null || props === void 0 ? void 0 : props.lang),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'menu-all-checked',
          },
          /*#__PURE__*/ React.createElement(
            _Checkbox,
            {
              onChange: checkedAllApp,
              checked: allAppChecked,
              disabled: disabled,
            },
            appCheckboxTitle ||
              getText('allAppAvailable', props === null || props === void 0 ? void 0 : props.lang),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'menu-body',
        },
        appList.map(function (item, index) {
          var isCheck =
            appKeys === null || appKeys === void 0 ? void 0 : appKeys.includes(item.value);
          var isOwnAppCode = appCode === item.value;
          return /*#__PURE__*/ React.createElement(
            _Checkbox,
            {
              checked: isCheck,
              disabled: disabled || isOwnAppCode || allAppChecked,
              onChange: assignApp,
              value: item.value,
              key: index,
            },
            /*#__PURE__*/ React.createElement(
              'span',
              {
                style: {
                  display: 'inline-block',
                },
              },
              /*#__PURE__*/ React.createElement(_Ellipsis, {
                widthLimit: 100,
                title: item.label,
              }),
            ),
          );
        }),
      ),
    ),
    !!showUser &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'user',
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'menu-header',
          },
          userTitle ||
            getText('authorizesUserList', props === null || props === void 0 ? void 0 : props.lang),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'menu-all-checked',
            },
            /*#__PURE__*/ React.createElement(
              _Checkbox,
              {
                onChange: checkedAllUser,
                checked: allUserChecked,
                disabled: disabled,
              },
              userCheckboxTitle ||
                getText(
                  'allUserAvailable',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'menu-body',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'assign-search-wrap',
            },
            /*#__PURE__*/ React.createElement(Search, {
              size: 'small',
              allowClear: true,
              placeholder: getText(
                'search',
                props === null || props === void 0 ? void 0 : props.lang,
              ),
              onChange: function onChange(e) {
                debouncedSearch(e.target.value);
              },
              onSearch: function onSearch(v) {
                setFilterUser(v);
              },
              style: {
                width: '90%',
              },
            }),
          ),
          userList === null || userList === void 0
            ? void 0
            : userList
                .filter(function (item) {
                  if (filterUser) {
                    var _item$account, _item$userName;
                    return (
                      (item === null || item === void 0
                        ? void 0
                        : (_item$account = item.account) === null || _item$account === void 0
                        ? void 0
                        : _item$account
                            .toLocaleLowerCase()
                            .includes(
                              filterUser === null || filterUser === void 0
                                ? void 0
                                : filterUser.toLocaleLowerCase(),
                            )) ||
                      (item === null || item === void 0
                        ? void 0
                        : (_item$userName = item.userName) === null || _item$userName === void 0
                        ? void 0
                        : _item$userName
                            .toLocaleLowerCase()
                            .includes(
                              filterUser === null || filterUser === void 0
                                ? void 0
                                : filterUser.toLocaleLowerCase(),
                            ))
                    );
                  } else {
                    return item;
                  }
                })
                .map(function (item, index) {
                  var isCheck =
                    userKeys === null || userKeys === void 0
                      ? void 0
                      : userKeys.includes(item.account);
                  var isOwnAccount = account === item.account;
                  return /*#__PURE__*/ React.createElement(
                    'div',
                    null,
                    /*#__PURE__*/ React.createElement(
                      _Checkbox,
                      {
                        checked: isCheck,
                        disabled: disabled || isOwnAccount || allUserChecked,
                        onChange: assignUser,
                        value: item.account,
                        key: index,
                      },
                      /*#__PURE__*/ React.createElement(
                        'span',
                        {
                          style: {
                            display: 'inline-block',
                          },
                        },
                        /*#__PURE__*/ React.createElement(_Ellipsis, {
                          widthLimit: 240,
                          title: item.userName,
                        }),
                      ),
                    ),
                  );
                }),
        ),
      ),
  );
};
export default AssignModal;
