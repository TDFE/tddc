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
    let allOrg = preorder(orgList[0]);
    let allApp = appList.map((item) => item.name) || [];
    let initOrgs = [];
    let initApps = [];
    if (orgCodes.includes('all')) {
      initOrgs = allOrg;
    } else {
      initOrgs = Array.from(new Set([...(orgCodes || []), ...path]));
    }
    if (appCodes.includes('all')) {
      initApps = allApp;
    } else {
      initApps = appCodes;
    }

    setCheckedKeys(initOrgs);
    setAppKeys(initApps || []);
  }, [dataItem]);

  useEffect(() => {
    // 机构和应用 全选
    let allOrg = preorder(orgList[0]);
    if (appList.length > 0) {
      let allApp = appList.map((item) => item.value);
      // 判断当前用户是否具有 该机构或应用 权限
      let app = appKeys.filter((item) => allApp.includes(item));
      let org = checkedKeys.filter((item) => allOrg.includes(item));

      if (app.length === appList.length || org.length === allOrg.length) {
      }
      onChange &&
        onChange({
          appKeys: app.length === appList.length ? ['all'] : appKeys,
          checkedKeys: org.length === allOrg.length ? ['all'] : checkedKeys,
          appCheckAll: app.length === allApp.length,
          orgCheckAll: org.length === allOrg.length,
          checkData: {
            apps: app.length === allApp.length ? allApp : appKeys,
            orgs: org.length === allOrg.length ? allOrg : checkedKeys,
          },
        });

      setAllAppChecked(app.length === appList.length);
      setAllOrgChecked(org.length === allOrg.length);
    }
  }, [checkedKeys, appKeys, appList]);

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
            disabled={orgDisabled || disabled}
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
  };

  const assignApp = (e) => {
    let value = '';
    let newAppKeys = [];
    if (e.target.checked) {
      value = e.target.value;
      newAppKeys = [...appKeys, value];
      setAppKeys(newAppKeys);
    } else {
      value = e.target.value;
      newAppKeys = cloneDeep(appKeys);
      newAppKeys.map((item, index) => {
        if (value === item) {
          newAppKeys.splice(index, 1);
        }
      });
      setAppKeys(newAppKeys);
    }
  };

  const checkAllOrg = (e) => {
    let orgKeys = [];
    if (e.target.checked) {
      orgKeys = preorder(orgList[0]);
      setCheckedKeys(orgKeys);
    } else {
      orgKeys = [...path];
      setCheckedKeys(orgKeys);
    }
  };

  const checkedAllApp = (e) => {
    let appKeys = [];
    if (e.target.checked) {
      appKeys = appList.map((item) => item.value);
      setAppKeys(appKeys);
    } else {
      appKeys = [appCode];
      setAppKeys(appKeys);
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
          disabled={disabled}
        >
          {loopTreeNodes(orgList)}
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
                disabled={disabled || isOwnAppCode}
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
