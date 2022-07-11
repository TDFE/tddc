import { Checkbox, Tree } from 'antd';
import { useEffect, useState } from 'react';
import { Ellipsis } from 'tntd';

import { cloneDeep } from 'lodash';
import './index.less';
import { addPath, findSameCodePath, preorder } from './utils';

const { TreeNode } = Tree;

let path = []; // 上级机构到当前机构的路径
let allOrgList = [];

const AssignModal = (props) => {
  const { orgList = [], dataItem = {}, disabled, appList, onChange } = props;

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [appKeys, setAppKeys] = useState(dataItem?.appCodes?.split(',') || []);

  const [allOrgChecked, setAllOrgChecked] = useState(false);
  const [allAppChecked, setAllAppChecked] = useState(false);

  if (!orgList[0].path) {
    addPath(orgList[0], []); // 添加 上级机构到子机构的路径
  }

  useEffect(() => {
    // path 和 allOrgList 赋值
    path = findSameCodePath(orgList[0], dataItem.orgCode);
    allOrgList = preorder(orgList[0]);

    let initKeys = Array.from(new Set([...(dataItem?.orgCodes?.split(',') || []), ...path]));
    setCheckedKeys(initKeys);
    setAppKeys(dataItem?.appCodes?.split(',') || []);
  }, [dataItem]);

  useEffect(() => {
    // 机构和应用 全选
    if (appList.length > 0) {
      let allApp = appList.map((item) => item.value);
      // 判断当前用户是否具有 该机构或应用 权限
      let app = appKeys.filter((item) => allApp.includes(item));
      let org = checkedKeys.filter((item) => allOrgList.includes(item));

      setAllAppChecked(app.length === appList.length);
      setAllOrgChecked(org.length === allOrgList.length);
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
    onChange &&
      onChange({
        appKeys,
        checkedKeys: checked,
      });
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

    onChange &&
      onChange({
        checkedKeys,
        appKeys: newAppKeys,
      });
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

    onChange &&
      onChange({
        appKeys,
        checkedKeys: orgKeys,
      });
  };

  const checkedAllApp = (e) => {
    let appKeys = [];
    if (e.target.checked) {
      appKeys = appList.map((item) => item.value);
      setAppKeys(appKeys);
    } else {
      appKeys = [dataItem?.appCode];
      setAppKeys(appKeys);
    }

    onChange &&
      onChange({
        appKeys,
        checkedKeys,
      });
  };
  return (
    <div className="assign-box-container">
      <div className="left">
        <div className="menu-header">
          授权可用机构列表
          <div className="menu-all-checked">
            <Checkbox onChange={checkAllOrg} checked={allOrgChecked} disabled={disabled}>
              全选
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
              全选
            </Checkbox>
          </div>
        </div>
        <div className="menu-body">
          {appList.map((item, index) => {
            const isCheck = appKeys?.includes(item.value);
            const isOwnAppCode = dataItem?.appCode === item.value;
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
