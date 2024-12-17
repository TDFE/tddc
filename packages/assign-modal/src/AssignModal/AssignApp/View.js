import { Input, Empty, Icon, Tooltip, Ellipsis } from 'tntd';
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';

import { debounce } from 'lodash';
import './index.less';
import { findSameCodePath, preorder } from './utils';
import { getText } from '../../locale';

let path = []; // 上级机构到当前机构的路径

const AssignModal = (props) => {
  const {
    orgList = [],
    dataItem = {},
    appList,
    orgTitle,
    appTitle,
    userTitle,
    userList = [],
    showUser,
  } = props;
  let { appCodes = [], orgCodes = [], orgCode, appCode, accounts, account } = dataItem;

  const orgMapRef = useRef({});
  const appMapRef = useRef({});
  const userMapRef = useRef({});

  const rootNode = orgList[0];

  const [allOrg, allApp, allUser] = useMemo(() => {
    let org = preorder(
      rootNode,
      (key, obj) => {
        orgMapRef.current[key] = obj;
      },
      true,
    );
    let app = appList.map((item) => {
      appMapRef.current[item.value] = item;
      return item.value;
    });
    let user =
      userList?.map((item) => {
        userMapRef.current[item.account] = item;
        return item.account;
      }) || [];

    return [org, app, user];
  }, [rootNode, appList, userList]);

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [appKeys, setAppKeys] = useState(appCodes || []);
  const [userKeys, setUserKeys] = useState(accounts || []);

  const [filterOrg, setFilterOrg] = useState();
  const [filterUser, setFilterUser] = useState();
  const [filterApp, setFilterApp] = useState();

  useEffect(() => {
    // path 和 allOrgList 赋值
    path = findSameCodePath(rootNode, orgCode);

    let initOrgs = [];
    let initApps = [];
    let initAccounts = [];
    if (orgCodes.includes('all')) {
      initOrgs = allOrg;
    } else {
      initOrgs = Array.from(new Set([...(orgCodes || []), ...path]));
    }
    if (appCodes.includes('all')) {
      initApps = allApp;
    } else {
      initApps = Array.from(new Set([...(appCodes || []), appCode]));
    }

    if (showUser) {
      if (accounts.includes('all')) {
        initAccounts = allUser;
      } else {
        initAccounts = Array.from(new Set([...(accounts || []), account]));
      }
    }
    setCheckedKeys(initOrgs);
    setAppKeys(initApps || []);
    setUserKeys(initAccounts || []);
  }, [dataItem]);

  const debouncedOrgSearch = useCallback(
    debounce((nextValue) => {
      setFilterOrg(nextValue);
    }, 200),
    [],
  );
  const debouncedUserSearch = useCallback(
    debounce((nextValue) => {
      setFilterUser(nextValue);
    }, 200),
    [],
  );
  const debouncedAppSearch = useCallback(
    debounce((nextValue) => {
      setFilterApp(nextValue);
    }, 200),
    [],
  );
  // 获取机构路径的中文显示名并拼接
  const getOrgPathDisplayName = (path = []) => {
    let displayName = '';
    if (path.length > 0) {
      displayName = path.map((item) => orgMapRef.current[item].name).join(' / ');
    }

    return displayName;
  };

  // 渲染Org列表
  let orgListDomRender = useMemo(() => {
    const renderOrgItem = (item, lang) => {
      console.log(item, 'item');

      const mapResult = {
        1: {
          cn: '职能部门',
          en: 'Func. Dept.',
          icon: 'crowd',
        },
        2: {
          icon: 'corporation',
        },
      };

      const result = mapResult[item?.orgAttribute] || {};

      return (
        <div className="org-item-wrapper" style={{ width: '100%' }}>
          <Ellipsis
            title={item.name}
            widthLimit={String(item.orgAttribute) === '1' ? 'calc(100% - 90px}' : '100%'}
          />
          {String(item.orgAttribute) === '1' && (
            <span className="org-functional-departemt-marker">{result[lang] || '职能部门'}</span>
          )}
        </div>
      );
    };

    return (
      checkedKeys
        .filter((i) => {
          let node = orgMapRef.current[i] || {};
          let { path, name } = node;
          if (!path && !name) return false;
          let pathDisplayName = getOrgPathDisplayName(path);

          if (filterOrg) {
            return (
              pathDisplayName?.toLocaleLowerCase().includes(filterOrg?.toLocaleLowerCase()) ||
              name?.toLocaleLowerCase().includes(filterOrg?.toLocaleLowerCase())
            );
          }
          return i;
        })
        .map((item, index) => {
          let node = orgMapRef.current[item] || {};
          let { path, name } = node;

          let pathDisplayName = getOrgPathDisplayName(path);
          if (!path && !name) return null;
          return (
            <li key={item.value + index} className="select-menu-list-item">
              <span className="org-name">
                <Ellipsis title={renderOrgItem(node, props?.lang)} />
              </span>
              <span className="path-name">
                <Ellipsis title={pathDisplayName} />
              </span>
            </li>
          );
        }) || <Empty />
    );
  }, [userList, checkedKeys, filterOrg]);
  // 渲染App列表
  let appListDomRender = useMemo(() => {
    return (
      appKeys
        .filter((i) => {
          let node = appMapRef.current[i] || {};
          const { label, value } = node;
          if (!value && !label) return false;

          if (filterApp) {
            return (
              label?.toLocaleLowerCase().includes(filterApp?.toLocaleLowerCase()) ||
              value?.toLocaleLowerCase().includes(filterApp?.toLocaleLowerCase())
            );
          }
          return i;
        })
        .map((item, index) => {
          let node = appMapRef.current[item] || {};
          let { value, label } = node;

          return (
            <li key={value + index} className="select-menu-list-item">
              <Tooltip title={label} key={label + index}>
                <span className="app-name">{label}</span>
              </Tooltip>
            </li>
          );
        }) || <Empty />
    );
  }, [appList, appKeys, filterApp]);

  // 渲染User列表
  let userListDomRender = useMemo(() => {
    return (
      userKeys
        ?.filter((item) => {
          let node = userMapRef.current[item] || {};
          const { account, userName } = node;
          if (!userName && !node.account) return false;
          if (filterUser) {
            return (
              account?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase()) ||
              userName?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase())
            );
          }
          return item;
        })
        .map((item, index) => {
          let node = userMapRef.current[item] || {};
          let { userName } = node;
          return (
            <li key={userName + index} className="select-menu-list-item">
              <Tooltip title={userName} key={userName + index}>
                <span className="user-name">{userName}</span>
              </Tooltip>
            </li>
          );
        }) || <Empty />
    );
  }, [userList, userKeys, filterUser]);

  return (
    <>
      <div className="assign-box-container view-mode">
        <div className="org-panel panel">
          <div className="menu-header">
            {/* 授权可用机构列表 */}
            <span className="title">{orgTitle || getText('authorizesOrgList', props?.lang)}</span>
          </div>
          <div className="panel-menu-body">
            <ul className="select-menu-list">
              <Input
                size="small"
                placeholder={getText('search', props?.lang)}
                onChange={(e) => {
                  debouncedOrgSearch(e.target.value);
                }}
                suffix={<Icon type="zoom" />}
                style={{ marginBottom: 16 }}
              />
              {orgListDomRender}
            </ul>
          </div>
        </div>
        <div className="app-panel panel">
          <div className="menu-header">
            {/* 授权可用渠道列表 */}
            <span className="title">{appTitle || getText('authorizesAppList', props?.lang)}</span>
          </div>
          <div className="panel-menu-body">
            <Input
              onChange={(e) => {
                debouncedAppSearch(e.target.value);
              }}
              placeholder={getText('enterAppName', props?.lang)}
              size="small"
              suffix={<Icon type="zoom" />}
              style={{ marginBottom: 16 }}
            />
            <ul className="select-menu-list">{appListDomRender}</ul>
          </div>
        </div>
        {!!showUser && (
          <div className="user-panel panel">
            <div className="menu-header">
              {/* 授权可用用户列表 */}
              <span className="title">
                {userTitle || getText('authorizesUserList', props?.lang)}
              </span>
            </div>
            <div className="panel-menu-body">
              <Input
                size="small"
                placeholder={getText('enterUserName', props?.lang)}
                onChange={(e) => {
                  debouncedUserSearch(e.target.value);
                }}
                suffix={<Icon type="zoom" />}
                style={{ marginBottom: 16 }}
              />
              <ul className="select-menu-list">{userListDomRender}</ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AssignModal;
