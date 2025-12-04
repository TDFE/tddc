import _Input from 'tntd/es/input';
import _Icon from 'tntd/es/icon';
import _Segmented from 'tntd/es/segmented';
import _Empty from 'tntd/es/empty';
import _Checkbox from 'tntd/es/checkbox';
import _Ellipsis from 'tntd/es/ellipsis';
import _Tree from 'tntd/es/tree';
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(r) {
  if (('undefined' != typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
import React from 'react';
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';
import { cloneDeep, debounce } from 'lodash';
import './index.less';
import { findSameCodePath, preorder, mergeAndDeduplicate, doSearch } from './utils';
import { getText } from '../../locale';
var TreeNode = _Tree.TreeNode;
var path = []; // 上级机构到当前机构的路径

var AssignModal = function AssignModal(props) {
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
    userList = props.userList,
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
  var orgMapRef = useRef({});
  var appMapRef = useRef({});
  var userMapRef = useRef({});
  var rootNode = orgList[0];
  var _useMemo = useMemo(
      function () {
        var org = preorder(
          rootNode,
          function (key, root) {
            orgMapRef.current[key] = root;
          },
          true,
        );
        var app = appList.map(function (item) {
          appMapRef.current[item.value] = item;
          return item.value;
        });
        var user =
          (userList === null || userList === void 0
            ? void 0
            : userList.map(function (item) {
                userMapRef.current[item.account] = item;
                return item.account;
              })) || [];
        return [org, app, user];
      },
      [rootNode, appList, userList],
    ),
    _useMemo2 = _slicedToArray(_useMemo, 3),
    allOrg = _useMemo2[0],
    allApp = _useMemo2[1],
    allUser = _useMemo2[2];
  var titleOptions = [
    ''.concat(
      orgTitle ||
        getText('availableOrgs', props === null || props === void 0 ? void 0 : props.lang),
    ),
    ''.concat(
      appTitle ||
        getText('availableApps', props === null || props === void 0 ? void 0 : props.lang),
    ),
    ''.concat(
      userTitle ||
        getText('availableUsers', props === null || props === void 0 ? void 0 : props.lang),
    ),
  ];
  if (!showUser) {
    titleOptions.pop();
  }
  var _useState = useState(orgList),
    _useState2 = _slicedToArray(_useState, 2),
    treeData = _useState2[0],
    setTreeData = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    curIndex = _useState4[0],
    setCurIndex = _useState4[1];
  var _useState5 = useState(titleOptions[0]),
    _useState6 = _slicedToArray(_useState5, 2),
    curValue = _useState6[0],
    setCurValue = _useState6[1];
  var _useState7 = useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    checkedKeys = _useState8[0],
    setCheckedKeys = _useState8[1];
  var _useState9 = useState(appCodes || []),
    _useState10 = _slicedToArray(_useState9, 2),
    appKeys = _useState10[0],
    setAppKeys = _useState10[1];
  var _useState11 = useState(accounts || []),
    _useState12 = _slicedToArray(_useState11, 2),
    userKeys = _useState12[0],
    setUserKeys = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    allOrgChecked = _useState14[0],
    setAllOrgChecked = _useState14[1];
  var _useState15 = useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    allAppChecked = _useState16[0],
    setAllAppChecked = _useState16[1];
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    allUserChecked = _useState18[0],
    setAllUserChecked = _useState18[1];
  var _useState19 = useState(),
    _useState20 = _slicedToArray(_useState19, 2),
    filterOrg = _useState20[0],
    setFilterOrg = _useState20[1];
  var _useState21 = useState(),
    _useState22 = _slicedToArray(_useState21, 2),
    filterUser = _useState22[0],
    setFilterUser = _useState22[1];
  var _useState23 = useState(),
    _useState24 = _slicedToArray(_useState23, 2),
    filterApp = _useState24[0],
    setFilterApp = _useState24[1];
  useEffect(
    function () {
      // path 和 allOrgList 赋值
      path = findSameCodePath(rootNode, orgCode);
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
  useEffect(
    function () {
      doSearch(filterOrg, orgMapRef.current, function () {
        var newData = cloneDeep([orgMapRef.current[orgList[0].value]]);
        setTreeData(newData);
      });
    },
    [filterOrg],
  );
  var _loopTreeNodes = function loopTreeNodes(data) {
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
      var _ref2 = item || {},
        code = _ref2.code,
        show = _ref2.show;
      if (!show) return null;
      var orgDisabled = path.includes(code);
      if (item.children) {
        return /*#__PURE__*/ React.createElement(
          TreeNode,
          {
            key: code,
            title: /*#__PURE__*/ React.createElement(NodeTitle, {
              node: item,
            }),
            item: item,
            disabled: orgDisabled || disabled || allOrgChecked,
          },
          _loopTreeNodes(item.children, level + 1),
        );
      }
      return /*#__PURE__*/ React.createElement(TreeNode, {
        style: {
          paddingLeft: ''.concat((level + 1) * 14, 'px'),
          marginLeft: '-'.concat(level * 14, 'px'),
        },
        key: code,
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
      checked.pop();
      checked = mergeAndDeduplicate(checked, path);
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
      orgChecks = preorder(rootNode);
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
  var debouncedOrgSearch = useCallback(
    debounce(function (nextValue) {
      setFilterOrg(nextValue);
    }, 200),
    [],
  );
  var debouncedUserSearch = useCallback(
    debounce(function (nextValue) {
      setFilterUser(nextValue);
    }, 200),
    [],
  );
  var debouncedAppSearch = useCallback(
    debounce(function (nextValue) {
      setFilterApp(nextValue);
    }, 200),
    [],
  );
  // 拼接机构路径显示名
  var getOrgPathDisplayName = function getOrgPathDisplayName() {
    var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var displayName = '';
    if (path.length > 0) {
      displayName = path
        .map(function (item) {
          return orgMapRef.current[item].name;
        })
        .join(' / ');
    }
    return displayName;
  };
  // 移除单个机构
  var onRemoveSingleOrg = function onRemoveSingleOrg(node) {
    var del_arr = preorder(node);
    var checked = checkedKeys.filter(function (item) {
      return !del_arr.includes(item);
    });
    setCheckedKeys(checked);
    setAllOrgChecked(false);
    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: checked,
      appCheckAll: allAppChecked,
      orgCheckAll: false,
      userKeys: allUserChecked ? ['all'] : userKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: appKeys,
        orgs: checked,
        accounts: userKeys,
      },
    });
  };
  // 移除全部机构
  var onRemoveAllOrg = function onRemoveAllOrg() {
    var checked = [rootNode.key];
    setCheckedKeys(checked);
    setAllOrgChecked(false);
    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: checked,
      appCheckAll: allAppChecked,
      orgCheckAll: false,
      userKeys: allUserChecked ? ['all'] : userKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: appKeys,
        orgs: checked,
        accounts: userKeys,
      },
    });
  };
  // 移除单个应用
  var onRemoveSingleApp = function onRemoveSingleApp(value) {
    var newAppKeys = cloneDeep(appKeys);
    newAppKeys.map(function (item, index) {
      if (value === item) {
        newAppKeys.splice(index, 1);
      }
    });
    setAppKeys(newAppKeys);
    setAllAppChecked(false);
    onChange({
      appKeys: newAppKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      appCheckAll: false,
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
  // 移除全部应用
  var onRemoveAllApp = function onRemoveAllApp() {
    var newAppKeys = [appCode];
    setAppKeys(newAppKeys);
    setAllAppChecked(false);
    onChange({
      appKeys: newAppKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      appCheckAll: false,
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
  // 移除全部用户
  var onRemoveAllUser = function onRemoveAllUser() {
    var newUserKeys = [account];
    setUserKeys(newUserKeys);
    setAllUserChecked(false);
    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      userKeys: newUserKeys,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      userCheckAll: false,
      checkData: {
        apps: appKeys,
        orgs: checkedKeys,
        accounts: newUserKeys,
      },
    });
  };
  // 移除单个用户
  var onRemoveSingleUser = function onRemoveSingleUser(value) {
    var newUserKeys = cloneDeep(userKeys);
    newUserKeys.map(function (item, index) {
      if (value === item) {
        newUserKeys.splice(index, 1);
      }
    });
    setUserKeys(newUserKeys);
    setAllUserChecked(false);
    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: allOrgChecked ? ['all'] : checkedKeys,
      userKeys: newUserKeys,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      userCheckAll: false,
      checkData: {
        apps: appKeys,
        orgs: checkedKeys,
        accounts: newUserKeys,
      },
    });
  };

  // 已选择的机构列表
  var areadySelectOrg = useMemo(
    function () {
      return (
        checkedKeys.filter(function (i) {
          return allOrg.includes(i);
        }) || []
      );
    },
    [checkedKeys, allOrg],
  );
  // 已选择的渠道列表
  var areadySelectApp = useMemo(
    function () {
      return (
        appKeys.filter(function (i) {
          return allApp.includes(i);
        }) || []
      );
    },
    [appKeys, allApp],
  );
  // 已选择的用户列表
  var areadySelectUser = useMemo(
    function () {
      return (
        userKeys.filter(function (i) {
          return allUser.includes(i);
        }) || []
      );
    },
    [userKeys, allUser],
  );

  // 渲染App列表
  var appListDomRender = useMemo(
    function () {
      return appList
        .filter(function (i) {
          var label = i.label,
            value = i.value;
          if (filterApp) {
            return (
              (label === null || label === void 0
                ? void 0
                : label
                    .toLocaleLowerCase()
                    .includes(
                      filterApp === null || filterApp === void 0
                        ? void 0
                        : filterApp.toLocaleLowerCase(),
                    )) ||
              (value === null || value === void 0
                ? void 0
                : value
                    .toLocaleLowerCase()
                    .includes(
                      filterApp === null || filterApp === void 0
                        ? void 0
                        : filterApp.toLocaleLowerCase(),
                    ))
            );
          }
          return i;
        })
        .map(function (item, index) {
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
                title: item.label,
              }),
            ),
          );
        });
    },
    [appList, appKeys, filterApp],
  );

  // 渲染User列表
  var userListDomRender = useMemo(
    function () {
      return (
        (userList === null || userList === void 0
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
                }
                return item;
              })
              .map(function (item, index) {
                var isCheck =
                  userKeys === null || userKeys === void 0
                    ? void 0
                    : userKeys.includes(item.account);
                var isOwnAccount = account === item.account;
                return /*#__PURE__*/ React.createElement(
                  _Checkbox,
                  {
                    key: item + index,
                    checked: isCheck,
                    disabled: disabled || isOwnAccount || allUserChecked,
                    onChange: assignUser,
                    value: item.account,
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
                );
              })) || /*#__PURE__*/ React.createElement(_Empty, null)
      );
    },
    [userList, userKeys, filterUser],
  );
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(_Segmented, {
      className: 'menu-title',
      value: curValue,
      options: titleOptions,
      onChange: function onChange(index) {
        setCurValue(index);
        setCurIndex(
          titleOptions.findIndex(function (i) {
            return i === index;
          }),
        );
      },
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'assign-box-container',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'slider panel-'.concat(curIndex),
          style: {
            width: !!showUser ? '300%' : '200%',
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'org-panel panel',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'menu-header',
            },
            /*#__PURE__*/ React.createElement(
              'span',
              {
                className: 'title',
              },
              orgTitle ||
                getText(
                  'authorizesOrgList',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
            ),
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
                  getText(
                    'allOrgAvailable',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'panel-menu-body',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'panel-left',
              },
              /*#__PURE__*/ React.createElement(_Input, {
                size: 'small',
                allowClear: true,
                placeholder: getText(
                  'search',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
                onChange: function onChange(e) {
                  debouncedOrgSearch(e.target.value);
                },
                suffix: /*#__PURE__*/ React.createElement(_Icon, {
                  type: 'zoom',
                }),
                style: {
                  marginBottom: 16,
                  width: 'calc(100% - 16px)',
                },
              }),
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
                },
                _loopTreeNodes(treeData, 0),
              ),
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'panel-right',
              },
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'select-menu-header',
                },
                getText(
                  'hasBeenSelected',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
                ':',
                ' ',
                getText(
                  'numOfOrg',
                  props === null || props === void 0 ? void 0 : props.lang,
                  areadySelectOrg.length || 0,
                ),
                /*#__PURE__*/ React.createElement(
                  'a',
                  {
                    onClick: function onClick() {
                      return onRemoveAllOrg();
                    },
                  },
                  getText('clear', props === null || props === void 0 ? void 0 : props.lang),
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'ul',
                {
                  className: 'select-menu-list',
                },
                checkedKeys.map(function (item, index) {
                  var node = orgMapRef.current[item] || {};
                  var path = node.path,
                    name = node.name;
                  var pathDisplayName = getOrgPathDisplayName(path);
                  var disabled = rootNode.key === item;
                  return /*#__PURE__*/ React.createElement(
                    'li',
                    {
                      key: item.value + index,
                      className: 'select-menu-list-item',
                    },
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        className: 'org-name',
                      },
                      /*#__PURE__*/ React.createElement(_Ellipsis, {
                        title: name,
                      }),
                    ),
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        className: 'path-name',
                      },
                      /*#__PURE__*/ React.createElement(_Ellipsis, {
                        title: pathDisplayName,
                      }),
                    ),
                    !disabled &&
                      /*#__PURE__*/ React.createElement(_Icon, {
                        type: 'close',
                        className: 'close-icon',
                        onClick: function onClick() {
                          return onRemoveSingleOrg(node);
                        },
                      }),
                  );
                }) || /*#__PURE__*/ React.createElement(_Empty, null),
              ),
            ),
          ),
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'app-panel panel',
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'menu-header',
            },
            /*#__PURE__*/ React.createElement(
              'span',
              {
                className: 'title',
              },
              appTitle ||
                getText(
                  'authorizesAppList',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
            ),
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
                  getText(
                    'allAppAvailable',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
              ),
            ),
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'panel-menu-body',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'panel-left',
              },
              /*#__PURE__*/ React.createElement(_Input, {
                onChange: function onChange(e) {
                  debouncedAppSearch(e.target.value);
                },
                size: 'small',
                allowClear: true,
                placeholder: getText(
                  'search',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
                suffix: /*#__PURE__*/ React.createElement(_Icon, {
                  type: 'zoom',
                }),
                style: {
                  marginBottom: 16,
                  width: 'calc(100% - 16px)',
                },
              }),
              appListDomRender,
            ),
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'panel-right',
              },
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'select-menu-header',
                },
                /*#__PURE__*/ React.createElement(
                  'span',
                  null,
                  getText(
                    'hasBeenSelected',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
                  ':',
                  ' ',
                  getText(
                    'numOfApp',
                    props === null || props === void 0 ? void 0 : props.lang,
                    areadySelectApp.length || 0,
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  'a',
                  {
                    onClick: function onClick() {
                      return onRemoveAllApp();
                    },
                  },
                  getText('clear', props === null || props === void 0 ? void 0 : props.lang),
                ),
              ),
              /*#__PURE__*/ React.createElement(
                'ul',
                {
                  className: 'select-menu-list',
                },
                appKeys.map(function (item, index) {
                  var node = appMapRef.current[item] || {};
                  var value = node.value,
                    label = node.label;
                  var isOwnAppCode = appCode === value;
                  if (!value && !label) return null; // 不显示多余数据
                  return /*#__PURE__*/ React.createElement(
                    'li',
                    {
                      key: value + index,
                      className: 'select-menu-list-item',
                    },
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        className: 'app-name',
                      },
                      /*#__PURE__*/ React.createElement(_Ellipsis, {
                        title: label,
                      }),
                    ),
                    !isOwnAppCode &&
                      /*#__PURE__*/ React.createElement(_Icon, {
                        type: 'close',
                        className: 'close-icon',
                        onClick: function onClick() {
                          return onRemoveSingleApp(value);
                        },
                      }),
                  );
                }) || /*#__PURE__*/ React.createElement(_Empty, null),
              ),
            ),
          ),
        ),
        !!showUser &&
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'user-panel panel',
            },
            /*#__PURE__*/ React.createElement(
              'div',
              {
                className: 'menu-header',
              },
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'title',
                },
                userTitle ||
                  getText(
                    'authorizesUserList',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
              ),
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
                className: 'panel-menu-body',
              },
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'panel-left',
                },
                /*#__PURE__*/ React.createElement(_Input, {
                  size: 'small',
                  allowClear: true,
                  placeholder: getText(
                    'search',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
                  onChange: function onChange(e) {
                    debouncedUserSearch(e.target.value);
                  },
                  suffix: /*#__PURE__*/ React.createElement(_Icon, {
                    type: 'zoom',
                  }),
                  style: {
                    marginBottom: 16,
                    width: 'calc(100% - 16px)',
                  },
                }),
                userListDomRender,
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: 'panel-right',
                },
                /*#__PURE__*/ React.createElement(
                  'div',
                  {
                    className: 'select-menu-header',
                  },
                  getText(
                    'hasBeenSelected',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
                  ':',
                  ' ',
                  getText(
                    'numOfUser',
                    props === null || props === void 0 ? void 0 : props.lang,
                    areadySelectUser.length || 0,
                  ),
                  /*#__PURE__*/ React.createElement(
                    'a',
                    {
                      onClick: function onClick() {
                        return onRemoveAllUser();
                      },
                    },
                    getText('clear', props === null || props === void 0 ? void 0 : props.lang),
                  ),
                ),
                /*#__PURE__*/ React.createElement(
                  'ul',
                  {
                    className: 'select-menu-list',
                  },
                  userKeys.map(function (item, index) {
                    var node = userMapRef.current[item] || {};
                    var userName = node.userName;
                    var isOwnAppCode = accounts === node.account;
                    if (!userName && !node.account) return null; // 不显示多余数据
                    return /*#__PURE__*/ React.createElement(
                      'li',
                      {
                        key: userName + index,
                        className: 'select-menu-list-item',
                      },
                      /*#__PURE__*/ React.createElement(
                        'span',
                        {
                          className: 'app-name',
                        },
                        /*#__PURE__*/ React.createElement(_Ellipsis, {
                          title: userName,
                        }),
                      ),
                      !isOwnAppCode &&
                        /*#__PURE__*/ React.createElement(_Icon, {
                          type: 'close',
                          className: 'close-icon',
                          onClick: function onClick() {
                            return onRemoveSingleUser(node.account);
                          },
                        }),
                    );
                  }) || /*#__PURE__*/ React.createElement(_Empty, null),
                ),
              ),
            ),
          ),
      ),
    ),
  );
};
export default AssignModal;
