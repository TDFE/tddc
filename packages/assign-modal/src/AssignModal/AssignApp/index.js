import { Checkbox, Tree } from 'antd';
import { useEffect, useState } from 'react';
import { Ellipsis } from 'tntd';

import { cloneDeep } from 'lodash';
import './index.less';
import { addPath, findSameCodePath, preorder } from './utils';

const { TreeNode } = Tree;

let path = []; // 上级机构到当前机构的路径

const AssignModal = (props) => {
  const { orgList = [], dataItem = {}, disabled, appList, onChange } = props;
  let { appCodes = [], orgCodes = [], orgCode, appCode } = dataItem;

  let allOrg = preorder(orgList[0]);
  let allApp = appList.map((item) => item.value);

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [appKeys, setAppKeys] = useState(appCodes || []);

  const [allOrgChecked, setAllOrgChecked] = useState(false);
  const [allAppChecked, setAllAppChecked] = useState(false);

  if (!orgList[0].path) {
    addPath(orgList[0], []); // 添加 上级机构到子机构的路径
  }

  useEffect(() => {
    // path 和 allOrgList 赋值
    path = findSameCodePath(orgList[0], orgCode);

    let initOrgs = [];
    let initApps = [];
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

    setCheckedKeys(initOrgs);
    setAppKeys(initApps || []);

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
      checkData: {
        apps: appKeys,
        orgs: checked,
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
      checkData: {
        apps: newAppKeys,
        orgs: checkedKeys,
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
        checkData: {
          apps: appKeys,
          orgs: checkedKeys,
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
        checkData: {
          apps: appKeys,
          orgs: orgChecks,
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
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
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
        checkData: {
          apps: appChecks,
          orgs: checkedKeys,
        },
      });
    }
  };

  return (
    <div className="assign-box-container">
      <div className="left">
        <div className="menu-header">
          授权可用机构列表
          <div className="menu-all-checked">
            <Checkbox onChange={checkAllOrg} checked={allOrgChecked} disabled={disabled}>
              全局
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
          授权可用渠道列表
          <div className="menu-all-checked">
            <Checkbox onChange={checkedAllApp} checked={allAppChecked} disabled={disabled}>
              全局
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
    </div>
  );
};

export default AssignModal;
