import { Checkbox, Tree, Input } from 'antd';
import { useEffect, useState, useCallback } from 'react';
import { Ellipsis } from 'tntd';

import { cloneDeep, debounce } from 'lodash';
import './index.less';
import { addPath, findSameCodePath, preorder } from './utils';
import { getText } from '../../locale';

const { TreeNode } = Tree;
const { Search } = Input;
let path = []; // 上级机构到当前机构的路径

const AssignModal = (props) => {
  const {
    orgList = [],
    dataItem = {},
    disabled,
    appList,
    onChange,
    orgTitle,
    appTitle,
    userTitle,
    orgCheckboxTitle,
    appCheckboxTitle,
    userCheckboxTitle,
    userList = [],
    showUser,
  } = props;
  let { appCodes = [], orgCodes = [], orgCode, appCode, accounts = [], account } = dataItem;

  let allOrg = preorder(orgList[0]);
  let allApp = appList.map((item) => item.value);
  let allUser = userList?.map((item) => item.account) || [];

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [appKeys, setAppKeys] = useState(appCodes || []);
  const [userKeys, setUserKeys] = useState(accounts || []);

  const [allOrgChecked, setAllOrgChecked] = useState(false);
  const [allAppChecked, setAllAppChecked] = useState(false);
  const [allUserChecked, setAllUserChecked] = useState(false);

  const [filterUser, setFilterUser] = useState();

  if (!orgList[0]?.path) {
    addPath(orgList[0], []); // 添加 上级机构到子机构的路径
  }

  useEffect(() => {
    // path 和 allOrgList 赋值
    path = findSameCodePath(orgList[0], orgCode);

    let initOrgs = [];
    let initApps = [];
    let initAccounts = [];
    if (orgCodes.includes('all')) {
      setAllOrgChecked(orgCodes.includes('all'));
      initOrgs = allOrg;
    } else {
      initOrgs = Array.from(new Set([...(orgCodes || []), ...path]));
    }
    if (appCodes.includes('all')) {
      setAllAppChecked(appCodes.includes('all'));
      initApps = allApp;
    } else {
      initApps = Array.from(new Set([...(appCodes || []), appCode]));
    }

    if (showUser) {
      if (accounts.includes('all')) {
        setAllUserChecked(true);
        initAccounts = allUser;
      } else {
        initAccounts = Array.from(new Set([...(accounts || []), account]));
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
  }, [dataItem]);

  const loopTreeNodes = (data, level = 0) => {
    const NodeTitle = ({ node }) => {
      return <div className="node-title">{node.title}</div>;
    };

    return data.map((item) => {
      let orgDisabled = path.includes(item.code);

      if (item.children) {
        return (
          <TreeNode
            key={item.code}
            title={<NodeTitle node={item} />}
            item={item}
            disabled={orgDisabled || disabled || allOrgChecked}
          >
            {loopTreeNodes(item.children, level + 1)}
          </TreeNode>
        );
      }
      return (
        <TreeNode
          style={{
            paddingLeft: `${(level + 1) * 14}px`,
            marginLeft: `-${level * 14}px`,
          }}
          key={item.code}
          title={<NodeTitle node={item} />}
          item={item}
          disabled={orgDisabled || disabled}
        />
      );
    });
  };

  const onCheck = (keys, info) => {
    let {
      node: { props },
    } = info;
    let { item } = props;
    let { path } = item;
    let { checked } = keys;

    if (!info.node.isLeaf() && !info.node.checked) {
      let arr = preorder(info.node.props.item);
      arr.splice(0, 1);
      arr.map((item) => {
        let i = checked.findIndex((i) => i === item);
        if (i !== -1) checked.splice(i, 1);
      });
    }
    if (info.checked) {
      checked = Array.from(new Set([...checked, ...path]));
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

  const assignApp = (e) => {
    let value = '';
    let newAppKeys = [];
    if (e.target.checked) {
      value = e.target.value;
      newAppKeys = [...appKeys, value];
    } else {
      value = e.target.value;
      newAppKeys = cloneDeep(appKeys);
      newAppKeys.map((item, index) => {
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

  const assignUser = (e) => {
    let value = '';
    let newUserKeys = [];
    if (e.target.checked) {
      value = e.target.value;
      newUserKeys = [...userKeys, value];
    } else {
      value = e.target.value;
      newUserKeys = cloneDeep(userKeys);
      newUserKeys.map((item, index) => {
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
  const checkAllOrg = (e) => {
    let orgChecks = [];
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
      let arr = orgCodes.includes('all') ? allOrg : orgCodes;
      orgChecks = Array.from(new Set([...(arr || []), ...path]));

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
  const checkedAllApp = (e) => {
    let appChecks = [];
    if (e.target.checked) {
      setAllAppChecked(true);
      appChecks = appList.map((item) => item.value);
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
      let arr = appCodes.includes('all') ? allApp : appCodes;
      appChecks = Array.from(new Set([...(arr || []), appCode]));

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
  const checkedAllUser = (e) => {
    let userChecks = [];
    if (e.target.checked) {
      setAllUserChecked(true);
      userChecks = userList.map((item) => item.account);
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
      const arr = accounts.includes('all') ? allUser : accounts;
      userChecks = Array.from(new Set([...(arr || []), account]));

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

  const debouncedSearch = useCallback(
    debounce((nextValue) => {
      setFilterUser(nextValue);
    }, 200),
    [],
  );

  return (
    <div className="assign-box-container">
      <div className="left">
        <div className="menu-header">
          {/* 授权可用机构列表 */}
          {orgTitle || getText('authorizesOrgList', props?.lang)}
          <div className="menu-all-checked">
            <Checkbox onChange={checkAllOrg} checked={allOrgChecked} disabled={disabled}>
              {/* 全部机构可用 */}
              {orgCheckboxTitle || getText('allOrgAvailable', props?.lang)}
            </Checkbox>
          </div>
        </div>
        <Tree
          blockNode
          className="tree-list"
          checkable
          checkStrictly={true}
          checkedKeys={checkedKeys}
          defaultExpandAll
          onCheck={onCheck}
          disabled={true}
        >
          {loopTreeNodes(orgList, 0)}
        </Tree>
      </div>
      <div className="right">
        <div className="menu-header">
          {/* 授权可用渠道列表 */}
          {appTitle || getText('authorizesAppList', props?.lang)}
          <div className="menu-all-checked">
            <Checkbox onChange={checkedAllApp} checked={allAppChecked} disabled={disabled}>
              {/* 全部渠道可用 */}
              {appCheckboxTitle || getText('allAppAvailable', props?.lang)}
            </Checkbox>
          </div>
        </div>
        <div className="menu-body">
          {appList.map((item, index) => {
            const isCheck = appKeys?.includes(item.value);
            const isOwnAppCode = appCode === item.value;
            return (
              <Checkbox
                checked={isCheck}
                disabled={disabled || isOwnAppCode || allAppChecked}
                onChange={assignApp}
                value={item.value}
                key={index}
              >
                <span style={{ display: 'inline-block' }}>
                  <Ellipsis widthLimit={100} title={item.label} />
                </span>
              </Checkbox>
            );
          })}
        </div>
      </div>
      {!!showUser && (
        <div className="user">
          <div className="menu-header">
            {/* 授权可用用户列表 */}
            {userTitle || getText('authorizesUserList', props?.lang)}
            <div className="menu-all-checked">
              <Checkbox onChange={checkedAllUser} checked={allUserChecked} disabled={disabled}>
                {/* 全部用户可用 */}
                {userCheckboxTitle || getText('allUserAvailable', props?.lang)}
              </Checkbox>
            </div>
          </div>
          <div className="menu-body">
            <div className="assign-search-wrap">
              <Search
                size="small"
                allowClear
                placeholder={getText('search', props?.lang)}
                onChange={(e) => {
                  debouncedSearch(e.target.value);
                }}
                onSearch={(v) => {
                  setFilterUser(v);
                }}
                style={{ width: '90%' }}
              />
            </div>
            {userList
              ?.filter((item) => {
                if (filterUser) {
                  return (
                    item?.account?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase()) ||
                    item?.userName?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase())
                  );
                } else {
                  return item;
                }
              })
              .map((item, index) => {
                const isCheck = userKeys?.includes(item.account);
                const isOwnAccount = account === item.account;
                return (
                  <div>
                    <Checkbox
                      checked={isCheck}
                      disabled={disabled || isOwnAccount || allUserChecked}
                      onChange={assignUser}
                      value={item.account}
                      key={index}
                    >
                      <span style={{ display: 'inline-block' }}>
                        <Ellipsis widthLimit={240} title={item.userName} />
                      </span>
                    </Checkbox>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignModal;
