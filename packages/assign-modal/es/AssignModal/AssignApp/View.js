import _Input from 'tntd/es/input';
import _Icon from 'tntd/es/icon';
import _Tooltip from 'tntd/es/tooltip';
import _Empty from 'tntd/es/empty';
import _Ellipsis from 'tntd/es/ellipsis';
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
import { debounce } from 'lodash';
import './index.less';
import { findSameCodePath, preorder } from './utils';
import { getText } from '../../locale';
var path = []; // 上级机构到当前机构的路径

var AssignModal = function AssignModal(props) {
  var _props$orgList = props.orgList,
    orgList = _props$orgList === void 0 ? [] : _props$orgList,
    _props$dataItem = props.dataItem,
    dataItem = _props$dataItem === void 0 ? {} : _props$dataItem,
    appList = props.appList,
    orgTitle = props.orgTitle,
    appTitle = props.appTitle,
    userTitle = props.userTitle,
    _props$userList = props.userList,
    userList = _props$userList === void 0 ? [] : _props$userList,
    showUser = props.showUser;
  var _dataItem$appCodes = dataItem.appCodes,
    appCodes = _dataItem$appCodes === void 0 ? [] : _dataItem$appCodes,
    _dataItem$orgCodes = dataItem.orgCodes,
    orgCodes = _dataItem$orgCodes === void 0 ? [] : _dataItem$orgCodes,
    orgCode = dataItem.orgCode,
    appCode = dataItem.appCode,
    accounts = dataItem.accounts,
    account = dataItem.account;
  var orgMapRef = useRef({});
  var appMapRef = useRef({});
  var userMapRef = useRef({});
  var rootNode = orgList[0];
  var _useMemo = useMemo(
      function () {
        var org = preorder(
          rootNode,
          function (key, obj) {
            orgMapRef.current[key] = obj;
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
  var _useState7 = useState(),
    _useState8 = _slicedToArray(_useState7, 2),
    filterOrg = _useState8[0],
    setFilterOrg = _useState8[1];
  var _useState9 = useState(),
    _useState10 = _slicedToArray(_useState9, 2),
    filterUser = _useState10[0],
    setFilterUser = _useState10[1];
  var _useState11 = useState(),
    _useState12 = _slicedToArray(_useState11, 2),
    filterApp = _useState12[0],
    setFilterApp = _useState12[1];
  useEffect(
    function () {
      // path 和 allOrgList 赋值
      path = findSameCodePath(rootNode, orgCode);
      var initOrgs = [];
      var initApps = [];
      var initAccounts = [];
      if (orgCodes.includes('all')) {
        initOrgs = allOrg;
      } else {
        initOrgs = Array.from(
          new Set([].concat(_toConsumableArray(orgCodes || []), _toConsumableArray(path))),
        );
      }
      if (appCodes.includes('all')) {
        initApps = allApp;
      } else {
        initApps = Array.from(new Set([].concat(_toConsumableArray(appCodes || []), [appCode])));
      }
      if (showUser) {
        if (accounts.includes('all')) {
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
    },
    [dataItem],
  );
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
  // 获取机构路径的中文显示名并拼接
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

  // 渲染Org列表
  var orgListDomRender = useMemo(
    function () {
      return (
        checkedKeys
          .filter(function (i) {
            var node = orgMapRef.current[i] || {};
            var path = node.path,
              name = node.name;
            if (!path && !name) return false;
            var pathDisplayName = getOrgPathDisplayName(path);
            if (filterOrg) {
              return (
                (pathDisplayName === null || pathDisplayName === void 0
                  ? void 0
                  : pathDisplayName
                      .toLocaleLowerCase()
                      .includes(
                        filterOrg === null || filterOrg === void 0
                          ? void 0
                          : filterOrg.toLocaleLowerCase(),
                      )) ||
                (name === null || name === void 0
                  ? void 0
                  : name
                      .toLocaleLowerCase()
                      .includes(
                        filterOrg === null || filterOrg === void 0
                          ? void 0
                          : filterOrg.toLocaleLowerCase(),
                      ))
              );
            }
            return i;
          })
          .map(function (item, index) {
            var node = orgMapRef.current[item] || {};
            var path = node.path,
              name = node.name;
            var pathDisplayName = getOrgPathDisplayName(path);
            if (!path && !name) return null;
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
            );
          }) || /*#__PURE__*/ React.createElement(_Empty, null)
      );
    },
    [userList, checkedKeys, filterOrg],
  );
  // 渲染App列表
  var appListDomRender = useMemo(
    function () {
      return (
        appKeys
          .filter(function (i) {
            var node = appMapRef.current[i] || {};
            var label = node.label,
              value = node.value;
            if (!value && !label) return false;
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
            var node = appMapRef.current[item] || {};
            var value = node.value,
              label = node.label;
            return /*#__PURE__*/ React.createElement(
              'li',
              {
                key: value + index,
                className: 'select-menu-list-item',
              },
              /*#__PURE__*/ React.createElement(
                _Tooltip,
                {
                  title: label,
                  key: label + index,
                },
                /*#__PURE__*/ React.createElement(
                  'span',
                  {
                    className: 'app-name',
                  },
                  label,
                ),
              ),
            );
          }) || /*#__PURE__*/ React.createElement(_Empty, null)
      );
    },
    [appList, appKeys, filterApp],
  );

  // 渲染User列表
  var userListDomRender = useMemo(
    function () {
      return (
        (userKeys === null || userKeys === void 0
          ? void 0
          : userKeys
              .filter(function (item) {
                var node = userMapRef.current[item] || {};
                var account = node.account,
                  userName = node.userName;
                if (!userName && !node.account) return false;
                if (filterUser) {
                  return (
                    (account === null || account === void 0
                      ? void 0
                      : account
                          .toLocaleLowerCase()
                          .includes(
                            filterUser === null || filterUser === void 0
                              ? void 0
                              : filterUser.toLocaleLowerCase(),
                          )) ||
                    (userName === null || userName === void 0
                      ? void 0
                      : userName
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
                var node = userMapRef.current[item] || {};
                var userName = node.userName;
                return /*#__PURE__*/ React.createElement(
                  'li',
                  {
                    key: userName + index,
                    className: 'select-menu-list-item',
                  },
                  /*#__PURE__*/ React.createElement(
                    _Tooltip,
                    {
                      title: userName,
                      key: userName + index,
                    },
                    /*#__PURE__*/ React.createElement(
                      'span',
                      {
                        className: 'user-name',
                      },
                      userName,
                    ),
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
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'assign-box-container view-mode',
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
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'panel-menu-body',
          },
          /*#__PURE__*/ React.createElement(
            'ul',
            {
              className: 'select-menu-list',
            },
            /*#__PURE__*/ React.createElement(_Input, {
              size: 'small',
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
              },
            }),
            orgListDomRender,
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
        ),
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: 'panel-menu-body',
          },
          /*#__PURE__*/ React.createElement(_Input, {
            onChange: function onChange(e) {
              debouncedAppSearch(e.target.value);
            },
            size: 'small',
            suffix: /*#__PURE__*/ React.createElement(_Icon, {
              type: 'zoom',
            }),
            style: {
              marginBottom: 16,
            },
          }),
          /*#__PURE__*/ React.createElement(
            'ul',
            {
              className: 'select-menu-list',
            },
            appListDomRender,
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
          ),
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: 'panel-menu-body',
            },
            /*#__PURE__*/ React.createElement(_Input, {
              size: 'small',
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
              },
            }),
            /*#__PURE__*/ React.createElement(
              'ul',
              {
                className: 'select-menu-list',
              },
              userListDomRender,
            ),
          ),
        ),
    ),
  );
};
export default AssignModal;
