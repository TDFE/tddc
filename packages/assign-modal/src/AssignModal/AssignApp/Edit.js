import { Checkbox, Input, Ellipsis, Segmented, Empty, Icon, TntdVirtualTree as Tree } from 'tntd';
import { useEffect, useState, useCallback, useRef, useMemo } from 'react';

import { cloneDeep, debounce } from 'lodash';
import './index.less';
import { findSameCodePath, preorder, mergeAndDeduplicate, useWindowHeight } from './utils';
import { getText } from '../../locale';

let path = []; // 上级机构到当前机构的路径

const AssignModal = (props) => {
  const {
    onChange,
    orgList = [],
    dataItem = {},
    disabled,
    appList,
    orgTitle,
    appTitle,
    userTitle,
    orgCheckboxTitle,
    appCheckboxTitle,
    userCheckboxTitle,
    userList = [],
    showUser,
    customOrgDisabled,
    customAppDisabled,
  } = props;

  let { appCodes = [], orgCodes = [], orgCode, appCode, accounts = [], account } = dataItem;

  const orgMapRef = useRef({});
  const appMapRef = useRef({});
  const userMapRef = useRef({});

  const rootNode = orgList[0];

  const [allOrg, allApp, allUser] = useMemo(() => {
    let org = preorder(
      rootNode,
      (key, node) => {
        orgMapRef.current[key] = node;
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

  const titleOptions = [
    `${orgTitle || getText('availableOrgs', props?.lang)}`,
    `${appTitle || getText('availableApps', props?.lang)}`,
    `${userTitle || getText('availableUsers', props?.lang)}`,
  ];

  if (!showUser) {
    titleOptions.pop();
  }

  const [treeData, setTreeData] = useState(orgList[0]);

  const [curIndex, setCurIndex] = useState(0);
  const [curValue, setCurValue] = useState(titleOptions[0]);

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [appKeys, setAppKeys] = useState(appCodes || []);
  const [userKeys, setUserKeys] = useState(accounts || []);

  const [allOrgChecked, setAllOrgChecked] = useState(false);
  const [allAppChecked, setAllAppChecked] = useState(false);
  const [allUserChecked, setAllUserChecked] = useState(false);

  const [filterOrg, setFilterOrg] = useState();
  const [filterUser, setFilterUser] = useState();
  const [filterApp, setFilterApp] = useState();

  let gap = 335;
  const windowHeight = useWindowHeight(gap);

  useEffect(() => {
    if (dataItem && Object.keys(dataItem)?.length) {
      // path 和 allOrgList 赋值
      path = findSameCodePath(rootNode, orgCode);

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
    }
  }, [dataItem]);

  useEffect(() => {
    if (orgList) {
      const loopTreeNodes = (nodes, level = 0) => {
        return nodes?.map((item) => {
          let orgDisabled = path.includes(item.code);

          if (item.children && item.children.length > 0) {
            return {
              ...item,
              key: item.code,
              title: item.name,
              value: item.code,
              disabled:
                orgDisabled ||
                disabled ||
                allOrgChecked ||
                (customOrgDisabled && customOrgDisabled(item)),
              children: loopTreeNodes(item.children, level + 1),
            };
          }
          return {
            ...item,
            key: item.code,
            value: item.code,
            title: item.name,
            disabled:
              orgDisabled ||
              disabled ||
              allOrgChecked ||
              (customOrgDisabled && customOrgDisabled(item)),
          };
        });
      };

      setTreeData(loopTreeNodes(orgList, 0));
    }
  }, [orgList, allOrgChecked, allAppChecked, allUserChecked]);

  const onCheck = (...rest) => {
    const [checked, node, isChecked] = rest;
    const isLeaf = !node?.childrenValues?.length;
    const curNode = orgMapRef.current[node.value] || {};
    let { path } = curNode;

    let newChecked = cloneDeep(checked);

    if (!isLeaf && !isChecked) {
      let arr = preorder(node);
      arr.splice(0, 1);
      arr.map((item) => {
        let i = newChecked.findIndex((i) => i === item);
        if (i !== -1) newChecked.splice(i, 1);
      });
    }
    if (isChecked) {
      newChecked.pop();
      newChecked = mergeAndDeduplicate(newChecked, path);
    }

    setCheckedKeys(newChecked);

    onChange({
      appKeys: allAppChecked ? ['all'] : appKeys,
      checkedKeys: newChecked,
      appCheckAll: allAppChecked,
      orgCheckAll: allOrgChecked,
      userKeys: allUserChecked ? ['all'] : userKeys,
      userCheckAll: allUserChecked,
      checkData: {
        apps: appKeys,
        orgs: newChecked,
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
      appKeys,
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
          accounts,
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
          accounts,
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
          accounts,
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
          accounts,
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

  // 拼接机构路径显示名
  const getOrgPathDisplayName = (path = []) => {
    let displayName = '';
    if (path.length > 0) {
      displayName = path.map((item) => orgMapRef.current[item].name).join(' / ');
    }

    return displayName;
  };

  // 移除单个机构
  const onRemoveSingleOrg = (node) => {
    let del_arr = preorder(node);
    let checked = checkedKeys.filter((item) => !del_arr.includes(item));
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
  const onRemoveAllOrg = () => {
    let checked = [rootNode.key];
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
  const onRemoveSingleApp = (value) => {
    let newAppKeys = cloneDeep(appKeys);
    newAppKeys.map((item, index) => {
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
  const onRemoveAllApp = () => {
    let newAppKeys = [appCode];
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
  let onRemoveAllUser = () => {
    let newUserKeys = [account];
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
  let onRemoveSingleUser = (value) => {
    let newUserKeys = cloneDeep(userKeys);
    newUserKeys.map((item, index) => {
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
  let areadySelectOrg = useMemo(() => {
    return checkedKeys.filter((i) => allOrg.includes(i)) || [];
  }, [checkedKeys, allOrg]);
  // 已选择的渠道列表
  let areadySelectApp = useMemo(() => {
    return appKeys.filter((i) => allApp.includes(i)) || [];
  }, [appKeys, allApp]);
  // 已选择的用户列表
  let areadySelectUser = useMemo(() => {
    return userKeys.filter((i) => allUser.includes(i)) || [];
  }, [userKeys, allUser]);

  // 渲染App列表
  let appListDomRender = useMemo(() => {
    return appList
      .filter((i) => {
        const { label, value } = i;
        if (filterApp) {
          return (
            label?.toLocaleLowerCase().includes(filterApp?.toLocaleLowerCase()) ||
            value?.toLocaleLowerCase().includes(filterApp?.toLocaleLowerCase())
          );
        }

        return i;
      })
      .map((item, index) => {
        const isCheck = appKeys?.includes(item.value);
        const isOwnAppCode = appCode === item.value;
        return (
          <Checkbox
            checked={isCheck}
            disabled={
              disabled ||
              isOwnAppCode ||
              allAppChecked ||
              (customAppDisabled && customAppDisabled(item))
            }
            onChange={assignApp}
            value={item.value}
            key={index}
          >
            <span style={{ display: 'inline-block' }}>
              <Ellipsis title={item.label} />
            </span>
          </Checkbox>
        );
      });
  }, [appList, appKeys, filterApp]);

  // 渲染User列表
  let userListDomRender = useMemo(() => {
    return (
      userList
        ?.filter((item) => {
          if (filterUser) {
            return (
              item?.account?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase()) ||
              item?.userName?.toLocaleLowerCase().includes(filterUser?.toLocaleLowerCase())
            );
          }
          return item;
        })
        .map((item, index) => {
          const isCheck = userKeys?.includes(item.account);
          const isOwnAccount = account === item.account;
          return (
            <Checkbox
              key={item + index}
              checked={isCheck}
              disabled={disabled || isOwnAccount || allUserChecked}
              onChange={assignUser}
              value={item.account}
            >
              <span style={{ display: 'inline-block' }}>
                <Ellipsis widthLimit={240} title={item.userName} />
              </span>
            </Checkbox>
          );
        }) || <Empty />
    );
  }, [userList, userKeys, filterUser]);

  const renderOrgItem = (item, lang) => {
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
      <div className="org-item-wrapper" style={{ width: 'calc(100% - 32px)' }}>
        <Ellipsis
          title={item.title}
          widthLimit={String(item.orgAttribute) === '1' ? 'calc(100% - 90px}' : '100%'}
        />
        {String(item.orgAttribute) === '1' && (
          <span className="org-functional-departemt-marker">{result[lang] || '职能部门'}</span>
        )}
      </div>
    );
  };

  const defaultRenderItem = (item, isOrg = true) => {
    if (isOrg) {
      return renderOrgItem(item, props?.lang);
    }
    return <Ellipsis title={item.title} widthLimit={'100%'} />;
  };

  const canNotRemoveOrg = useMemo(() => {
    return checkedKeys?.length === 1 && orgMapRef.current?.[checkedKeys[0]]?.key === rootNode?.key;
  }, [checkedKeys]);

  const canNotRemoveApp = useMemo(() => {
    return appKeys?.length === 1 && appMapRef.current?.[appKeys[0]]?.name === appCode;
  }, [appKeys]);

  console.log(canNotRemoveOrg, 'canNotRemove');

  return (
    <>
      <Segmented
        className="menu-title"
        value={curValue}
        options={titleOptions}
        onChange={(index) => {
          setCurValue(index);
          setCurIndex(titleOptions.findIndex((i) => i === index));
        }}
      />
      <div className="assign-box-container">
        <div className={`slider panel-${curIndex}`} style={{ width: !!showUser ? '300%' : '200%' }}>
          <div className="org-panel panel">
            <div className="menu-header">
              {/* 授权可用机构列表 */}
              <span className="title">{orgTitle || getText('authorizesOrgList', props?.lang)}</span>
              <div className="menu-all-checked">
                <Checkbox onChange={checkAllOrg} checked={allOrgChecked} disabled={disabled}>
                  {/* 全部机构可用 */}
                  {orgCheckboxTitle || getText('allOrgAvailable', props?.lang)}
                </Checkbox>
              </div>
            </div>
            <div className="panel-menu-body">
              <div className="panel-left" style={{ width: '60%' }}>
                <Input
                  size="small"
                  placeholder={getText('search', props?.lang)}
                  onChange={(e) => {
                    debouncedOrgSearch(e.target.value);
                  }}
                  suffix={<Icon type="zoom" />}
                  style={{ marginBottom: 16, width: 'calc(100% - 16px)' }}
                />
                <Tree
                  style={{ overflowX: 'auto' }}
                  isOrg={true}
                  treeData={treeData}
                  filterKey={filterOrg}
                  blockNode
                  checkable
                  checkStrictly={true}
                  checkedKeys={checkedKeys}
                  defaultExpandAll
                  onCheck={onCheck}
                  height={windowHeight}
                  titleRender={defaultRenderItem}
                />
              </div>
              <div className="panel-right" style={{ width: '40%' }}>
                <div className="select-menu-header">
                  <span>
                    {getText('hasBeenSelected', props?.lang)}:{' '}
                    {getText('numOfOrg', props?.lang, areadySelectOrg.length || 0)}
                  </span>
                  <a className={canNotRemoveOrg ? 'disabeld' : ''} onClick={() => onRemoveAllOrg()}>
                    {getText('clear', props?.lang)}
                  </a>
                </div>
                <ul className="select-menu-list">
                  {checkedKeys
                    .filter((i) => {
                      return !!orgMapRef.current[i];
                    })
                    .map((item, index) => {
                      let node = orgMapRef.current[item] || {};
                      let { path, name } = node;

                      let pathDisplayName = getOrgPathDisplayName(path);
                      let disabled = rootNode.key === item;
                      return (
                        <li key={item.value + index} className="select-menu-list-item">
                          <span className="org-name">
                            <Ellipsis title={name} />
                          </span>
                          <span className="path-name">
                            <Ellipsis title={pathDisplayName} />
                          </span>
                          {!disabled && (
                            <Icon
                              type="close"
                              className="close-icon"
                              onClick={() => onRemoveSingleOrg(node)}
                            />
                          )}
                        </li>
                      );
                    }) || <Empty />}
                </ul>
              </div>
            </div>
          </div>
          <div className="app-panel panel">
            <div className="menu-header">
              {/* 授权可用渠道列表 */}
              <span className="title">{appTitle || getText('authorizesAppList', props?.lang)}</span>
              <div className="menu-all-checked">
                <Checkbox onChange={checkedAllApp} checked={allAppChecked} disabled={disabled}>
                  {/* 全部渠道可用 */}
                  {appCheckboxTitle || getText('allAppAvailable', props?.lang)}
                </Checkbox>
              </div>
            </div>
            <div className="panel-menu-body">
              <div className="panel-left">
                <Input
                  onChange={(e) => {
                    debouncedAppSearch(e.target.value);
                  }}
                  placeholder={getText('enterAppName', props?.lang)}
                  size="small"
                  suffix={<Icon type="zoom" />}
                  style={{ marginBottom: 16, width: 'calc(100% - 16px)' }}
                />
                {appListDomRender}
              </div>
              <div className="panel-right">
                <div className="select-menu-header">
                  <span>
                    {getText('hasBeenSelected', props?.lang)}:{' '}
                    {getText('numOfApp', props?.lang, areadySelectApp.length || 0)}
                  </span>
                  <a className={canNotRemoveApp ? 'disabeld' : ''} onClick={() => onRemoveAllApp()}>
                    {/* 清空 */}
                    {getText('clear', props?.lang)}
                  </a>
                </div>
                <ul className="select-menu-list">
                  {appKeys.map((item, index) => {
                    let node = appMapRef.current[item] || {};
                    let { value, label } = node;

                    const isOwnAppCode = appCode === value;
                    if (!value && !label) return null; // 不显示多余数据
                    return (
                      <li key={value + index} className="select-menu-list-item">
                        <span className="app-name">
                          <Ellipsis title={label} />
                        </span>
                        {!isOwnAppCode && (
                          <Icon
                            type="close"
                            className="close-icon"
                            onClick={() => onRemoveSingleApp(value)}
                          />
                        )}
                      </li>
                    );
                  }) || <Empty />}
                </ul>
              </div>
            </div>
          </div>
          {!!showUser && (
            <div className="user-panel panel">
              <div className="menu-header">
                {/* 授权可用用户列表 */}
                <span className="title">
                  {userTitle || getText('authorizesUserList', props?.lang)}
                </span>
                <div className="menu-all-checked">
                  <Checkbox onChange={checkedAllUser} checked={allUserChecked} disabled={disabled}>
                    {/* 全部用户可用 */}
                    {userCheckboxTitle || getText('allUserAvailable', props?.lang)}
                  </Checkbox>
                </div>
              </div>
              <div className="panel-menu-body">
                <div className="panel-left">
                  <Input
                    size="small"
                    placeholder={getText('enterUserName', props?.lang)}
                    onChange={(e) => {
                      debouncedUserSearch(e.target.value);
                    }}
                    suffix={<Icon type="zoom" />}
                    style={{ marginBottom: 16, width: 'calc(100% - 16px)' }}
                  />

                  {userListDomRender}
                </div>
                <div className="panel-right">
                  <div className="select-menu-header">
                    <span>
                      {getText('hasBeenSelected', props?.lang)}:{' '}
                      {getText('numOfUser', props?.lang, areadySelectUser.length || 0)}
                    </span>
                    <a onClick={() => onRemoveAllOrg()}>{getText('clear', props?.lang)}</a>
                  </div>
                  <ul className="select-menu-list">
                    {userKeys.map((item, index) => {
                      let node = userMapRef.current[item] || {};
                      let { userName } = node;

                      const isOwnAppCode = accounts === node.account;
                      if (!userName && !node.account) return null; // 不显示多余数据
                      return (
                        <li key={userName + index} className="select-menu-list-item">
                          <span className="app-name">
                            <Ellipsis title={userName} />
                          </span>
                          {!isOwnAppCode && (
                            <Icon
                              type="close"
                              className="close-icon"
                              onClick={() => onRemoveSingleUser(node.account)}
                            />
                          )}
                        </li>
                      );
                    }) || <Empty />}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AssignModal;
