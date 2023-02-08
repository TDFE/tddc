import I18N from '../locale';
import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Input, Tree, Button, Icon, Checkbox } from 'antd';
import {
  isLastLevelKey,
  disabledCategoryData,
  getLastLevelData,
  filterCategoryData,
} from './utils';
import './index.less';

const { Search } = Input;

const TreeTransfer = ({
  dataSource: _dataSource,
  value: values,
  defaultValue,
  defaultExpandAll,
  onChange,
  showSearch,
  searchItems,
  searchPlaceholder,
  notFoundContent,
  disabled,
  leftDisabled,
  rightDisabled,
}) => {
  const [startCheck, setStartCheck] = useState(false);
  const [dataSource, setDataSource] = useState(_dataSource); // 全量的数据
  const [selectValues, setSelectValues] = useState(values ? values : defaultValue || []); // 最后选择到右侧的values(values的优先级高于defaultValues)
  const [leftTree, setLeftTree] = useState({
    dataSource: [], // 展示的数据
    selectDataSource: [], // 选中的产品数据
    filterSelectDataSource: [], // 去除选中的产品数据
    keys: [], // 选中的keys(包括已经选择移动到右边的keys)
    checkedKeys: [], // 受控选中的keys
    expandedKeys: [], // 展开的项
    autoExpandParent: true, // 自动展开父节点
    matchedKeys: [], // 匹配搜索内容的数据
  }); // 左侧剩余的数据
  const [rightTree, setRightTree] = useState({
    dataSource: [], // 展示的数据
    selectDataSource: [], // 选中的产品数据
    filterSelectDataSource: [], // 去除选中的产品数据
    keys: [], // 选中的keys(和checkedKeys相同)
    checkedKeys: [], // 受控选中的keys
    expandedKeys: [], // 展开的项
    autoExpandParent: true, // 自动展开父节点
    matchedKeys: [], // 匹配搜索内容的数据
  }); // 右侧已选择的数据

  useEffect(() => {
    if (startCheck) {
      onCheck(selectValues, {}, 'left', true, ({ selectValues, leftTree, rightTree }) => {
        const categoryData = JSON.stringify([leftTree.dataSource, rightTree.dataSource]);
        onChange && onChange(selectValues, categoryData);
      });
      setStartCheck(false);
    }
  }, [startCheck, selectValues]);

  // 初始的数据赋值(根据selectValues以及dataSources计算左右侧的展示数据，同时会处理disabled属性)
  const changeDataSource = useCallback(() => {
    const filterValues = values || selectValues;
    let newDataSource = _.cloneDeep(_dataSource); // 新的全量数据
    // 如果设置disabled时将数据源全部disabled(数据结构参考Tree组件)
    if (disabled) {
      newDataSource = disabledCategoryData(dataSource);
    }
    // 有value时计算两侧的dataSource
    const newLeftTreeDataSource = filterCategoryData(
      filterValues,
      newDataSource,
      'filter',
      disabled || leftDisabled,
    ); // 左侧Tree的的展示数据
    const newRightTreeDataSource = filterCategoryData(
      filterValues,
      newDataSource,
      'select',
      disabled || rightDisabled,
    ); // 右侧Tree的展示数据
    setDataSource(newDataSource);
    setSelectValues(filterValues || []);
    setLeftTree({
      ...leftTree,
      dataSource: newLeftTreeDataSource,
      expandedKeys: defaultExpandAll ? getLastLevelData(newDataSource).map((v) => v.key) : [],
    });
    setRightTree({
      ...rightTree,
      dataSource: newRightTreeDataSource,
      expandedKeys: defaultExpandAll ? getLastLevelData(newDataSource).map((v) => v.key) : [],
    });
  }, [_dataSource, values, disabled, leftDisabled, rightDisabled]);

  useEffect(() => {
    changeDataSource();
  }, [changeDataSource]);

  const changeState = (direction, data, newLeftTree, newRightTree, callback) => {
    const leftTreeV = newLeftTree || leftTree;
    const rightTreeV = newRightTree || rightTree;
    direction === 'left'
      ? setLeftTree({ ...leftTreeV, ...data })
      : setRightTree({ ...rightTreeV, ...data });

    callback &&
      callback({
        selectValues,
        leftTree: direction === 'left' ? { ...leftTreeV, ...data } : leftTreeV,
        rightTree: direction === 'left' ? rightTreeV : { ...rightTreeV, ...data },
      });
  };
  const operationOnCheck = (keys, data, direction, rightToLeft, leftTree, rightTree, callback) => {
    const newData = filterCategoryData(keys, data, 'filter', rightToLeft ? leftDisabled : false); // 去除选中的数据
    const selectDataCategory = filterCategoryData(keys, data, 'select', rightDisabled); // 选中的数据

    if (rightToLeft) {
      // rightToLeft为true时会重新计算左侧Tree的selectDataSource和filterSelectDataSource
      const { checkedKeys } = leftTree;
      const newLeftKeys = [...checkedKeys, ...keys];
      const newLeftFilterData = filterCategoryData(newLeftKeys, data, 'filter', leftDisabled);
      const newLeftSelectData = filterCategoryData(newLeftKeys, data, 'select', leftDisabled);
      // 右面选中移动到左边时生成左边的数据
      changeState(
        direction,
        {
          dataSource: newData,
          selectDataSource: newLeftSelectData,
          filterSelectDataSource: newLeftFilterData,
        },
        leftTree,
        rightTree,
        callback,
      );
    } else {
      changeState(
        direction,
        {
          filterSelectDataSource: newData,
          selectDataSource: selectDataCategory,
        },
        leftTree,
        rightTree,
        callback,
      );
    }
  };
  // 选中时的方法(rightToLeft表示右边移动到左边时调用该函数)
  const onCheck = (keys, info, direction, rightToLeft, callback) => {
    // 选择的keys中是最后一级的keys
    const lastLevelKey = keys.filter((item) => isLastLevelKey(dataSource, item));
    if (direction === 'left') {
      const newLeftTree = {
        ...leftTree,
        // 如果rightToLeft为true时checkedKeys还是原来的checkedKeys，否则为lastLevelKey
        checkedKeys: rightToLeft ? leftTree.checkedKeys : lastLevelKey,
        // 如果rightToLeft为true时keys是原来的checkedKeys加selectValues，否则为lastLevelKey加selectValues
        keys: rightToLeft
          ? _.uniq([...selectValues, ...leftTree.checkedKeys])
          : _.uniq([...selectValues, ...lastLevelKey]),
      };
      setLeftTree(newLeftTree);
      const newKeys = _.uniq([...lastLevelKey, ...selectValues]);
      operationOnCheck(
        newKeys,
        dataSource,
        direction,
        rightToLeft,
        newLeftTree,
        rightTree,
        callback,
      );
    } else {
      // 选择的是右侧的Tree时只需要改变受控的keys然后调用operationOnCheck方法
      const newRightTree = {
        ...rightTree,
        checkedKeys: lastLevelKey,
        keys: lastLevelKey,
      };
      setRightTree(newRightTree);
      operationOnCheck(
        lastLevelKey,
        newRightTree.dataSource,
        direction,
        rightToLeft,
        leftTree,
        newRightTree,
      );
    }
  };

  // 左向右的按钮(左侧Tree新的数据源是左侧Tree的filterSelectDataSource，右侧Tree新的数据源是左侧Tree的selectDataSource)
  const leftToRight = () => {
    const { selectDataSource, filterSelectDataSource } = leftTree;

    const newLeftTree = {
      ...leftTree,
      dataSource: filterSelectDataSource,
      matchedKeys: [],
      checkedKeys: [],
      filterSelectDataSource: [],
      selectDataSource: [],
    };
    const newRightTree = {
      ...rightTree,
      dataSource: selectDataSource,
    };
    setSelectValues(leftTree.keys);
    setLeftTree(newLeftTree);
    setRightTree(newRightTree);
    // 左向右按钮点击之后，重新计算右边tree的相关state(兼容点击左向右按钮时右侧有选中项的情况)
    if (!_.isEmpty(newRightTree.checkedKeys)) {
      operationOnCheck(
        newRightTree.checkedKeys,
        newRightTree.dataSource,
        'right',
        false,
        newLeftTree,
        newRightTree,
      );
    }
    // 返回给父组件数据
    const categoryData = JSON.stringify([newLeftTree.dataSource, newRightTree.dataSource]);
    onChange && onChange(leftTree.keys, categoryData);
  };
  // 右向左的按钮
  const rightToLeft = () => {
    // 已选择的keys中去除右侧新选择的keys
    const newLeftKeys = selectValues.filter((item) => !rightTree.keys.includes(item));
    const newRightTree = {
      ...rightTree,
      dataSource: rightTree.filterSelectDataSource,
      keys: [],
      matchedKeys: [],
      selectDataSource: [],
      filterSelectDataSource: [],
      checkedKeys: [],
    };
    setSelectValues(newLeftKeys);
    setRightTree(newRightTree);
    setStartCheck(true);
  };

  // 渲染transfer的全选checkBox
  const renderCheckBox = (direction) => {
    const directionDisabled = direction === 'left' ? leftDisabled : rightDisabled;
    const operationState = direction === 'left' ? leftTree : rightTree;
    const allLength = getLastLevelData(operationState.dataSource).length; // 所有最后一项的数据长度
    const selectLength = operationState.checkedKeys.length; // 所选择的数据长度
    const checkAllDisabled = disabled || directionDisabled || _.isEmpty(operationState.dataSource); // 全选的checkbox是否disabled
    // 全选或者全不选的状态
    const type = allLength === selectLength ? 'clear' : 'checkAll';
    if (selectLength === 0) {
      // 非全选状态
      return (
        <div>
          <Checkbox
            checked={false}
            indeterminate={false}
            onClick={() => checkAll(direction, type)}
            style={{ marginRight: '6px' }}
            disabled={checkAllDisabled}
          />
          {I18N.template(I18N.treetransfer.index.aLLLE, { val1: allLength })}
        </div>
      );
    } else {
      // 全选状态
      return (
        <div>
          <Checkbox
            checked={selectLength === allLength}
            indeterminate={selectLength !== allLength}
            onClick={() => checkAll(direction, type)}
            style={{ marginRight: '6px' }}
          />
          {I18N.template(I18N.treetransfer.index.sELEC, { val1: selectLength, val2: allLength })}
        </div>
      );
    }
  };

  // checkBox的全选事件
  const checkAll = (direction, type) => {
    const directionDisabled = direction === 'left' ? rightDisabled : leftDisabled;
    const operationState = direction === 'left' ? leftTree : rightTree;
    const selectAllKeys = getLastLevelData(operationState.dataSource).map((item) => item.key);
    // 全选右侧时所有的key
    const allRightTreeKeys = getLastLevelData(rightTree.dataSource).map((item) => item.key);
    // 全选左侧时所有的key
    const allKeys = getLastLevelData(dataSource).map((item) => item.key);
    // 根据选择的方向生成对应的key
    const generateKeys = direction === 'left' ? allKeys : allRightTreeKeys;

    changeState(direction, {
      selectDataSource: directionDisabled ? disabledCategoryData(dataSource) : dataSource,
      filterSelectDataSource: [],
      checkedKeys: type === 'clear' ? [] : selectAllKeys,
      keys: type === 'clear' ? [] : generateKeys,
    });
  };
  // 搜索筛选(设置expandedKeys和matchedKeys)
  const handleSearch = (e, direction) => {
    let { value } = e.target;
    const operationState = direction === 'left' ? leftTree : rightTree;
    const dataSource = operationState.dataSource;
    value = value.trim();
    if (!value) {
      changeState(direction, {
        matchedKeys: null,
        expandedKeys: [],
      });
      return;
    }
    const matchedKeys = [];
    const loop = (data) =>
      data.forEach((item) => {
        if (searchItems.some((searchItem) => String(item[searchItem] || '').indexOf(value) > -1)) {
          matchedKeys.push(item.key);
        }
        if (item.children && item.children.length) {
          loop(item.children);
        }
      });
    loop(dataSource);
    changeState(direction, {
      expandedKeys: [...matchedKeys],
      autoExpandParent: true,
      matchedKeys,
    });
  };
  // 展开或收起时操作
  const handleExpand = (keys, direction) => {
    changeState(direction, {
      expandedKeys: keys,
      autoExpandParent: false,
    });
  };
  const leftFilterTreeNode = (node) =>
    leftTree.matchedKeys && leftTree.matchedKeys.indexOf(node.props.eventKey) > -1;
  const rightFilterTreeNode = (node) =>
    rightTree.matchedKeys && rightTree.matchedKeys.indexOf(node.props.eventKey) > -1;

  return (
    <div className="td-tree-transfer">
      <div className="td-tree-transfer-box">
        <div className="td-tree-transfer-box-header">
          <div className="td-tree-transfer-box-select-all">{renderCheckBox('left')}</div>
          {showSearch && (
            <div className="td-tree-transfer-box-search">
              <Search
                // style={{ width: "95%", marginBottom: "10px" }}
                onChange={(e) => handleSearch(e, 'left')}
                placeholder={_.get(searchPlaceholder, 0, I18N.treetransfer.index.qingShuRu)}
              />
            </div>
          )}
        </div>

        {_.isEmpty(leftTree.dataSource) ? (
          <div className="td-tree-transfer-no-data">{notFoundContent}</div>
        ) : (
          <div className="td-tree-transfer-tree">
            <Tree
              expandedKeys={leftTree.expandedKeys}
              autoExpandParent={leftTree.autoExpandParent}
              filterTreeNode={leftFilterTreeNode}
              onExpand={(keys) => handleExpand(keys, 'left')}
              treeData={leftTree.dataSource}
              checkable
              onCheck={(keys, info) => onCheck(keys, info, 'left', false)}
              // checkedStrategy="child"
              checkedKeys={leftTree.checkedKeys}
            />
          </div>
        )}
      </div>
      <div className="td-tree-transfer-exchange">
        <Button
          onClick={leftToRight}
          disabled={leftTree.checkedKeys.length === 0}
          type={leftTree.checkedKeys.length !== 0 ? 'primary' : 'normal'}
        >
          <Icon type="right" />
        </Button>
        <Button
          onClick={rightToLeft}
          disabled={rightTree.checkedKeys.length === 0}
          type={rightTree.checkedKeys.length !== 0 ? 'primary' : 'normal'}
        >
          <Icon type="left" />
        </Button>
      </div>
      {/* 右侧tree */}
      <div className="td-tree-transfer-box">
        <div className="td-tree-transfer-box-header">
          <div className="td-tree-transfer-box-select-all">{renderCheckBox('right')}</div>
          {showSearch && (
            <div className="td-tree-transfer-box-search">
              <Search
                // style={{ width: "95%", marginBottom: "10px" }}
                onChange={(e) => handleSearch(e, 'right')}
                placeholder={_.get(searchPlaceholder, 1, I18N.treetransfer.index.qingShuRu)}
              />
            </div>
          )}
        </div>

        {_.isEmpty(rightTree.dataSource) ? (
          <div className="td-tree-transfer-no-data">{notFoundContent}</div>
        ) : (
          <div className="td-tree-transfer-tree">
            <Tree
              expandedKeys={rightTree.expandedKeys}
              autoExpandParent={rightTree.autoExpandParent}
              filterTreeNode={rightFilterTreeNode}
              onExpand={(keys) => handleExpand(keys, 'right')}
              treeData={rightTree.dataSource}
              checkable
              onCheck={(keys, info) => onCheck(keys, info, 'right', false)}
              // checkedStrategy="child"
              checkedKeys={rightTree.checkedKeys}
            />
          </div>
        )}
      </div>
    </div>
  );
};
TreeTransfer.propTypes = {
  dataSource: PropTypes.array.isRequired, // 全量的tree数据源
  // title: PropTypes.array.isRequired, // 穿梭框的标题
  defaultValue: PropTypes.array, // 非受控
  value: PropTypes.array, // 受控 优先级高于defaultValues
  defaultExpandAll: PropTypes.bool, // 默认展开所有树节点
  disabled: PropTypes.bool, // 是否禁用穿梭框
  leftDisabled: PropTypes.bool, // 是否禁用左侧穿梭框
  rightDisabled: PropTypes.bool, // 是否禁用右侧穿梭框
  showSearch: PropTypes.bool, // 是否显示搜索框
  searchItems: PropTypes.array, // 搜索时需要匹配的搜索项的属性
  searchPlaceholder: PropTypes.array, // 搜索框的placeholder
  notFoundContent: PropTypes.node, // 无数据时的文本
  onChange: PropTypes.func, // 左右移动时的方法
};
TreeTransfer.defaultProps = {
  dataSource: [],
  value: undefined,
  defaultValue: [],
  onChange: () => {},
  // title: ["左侧标题", "右侧标题"],
  showSearch: true,
  searchItems: ['label', 'key'],
  searchPlaceholder: [I18N.treetransfer.index.qingShuRu, I18N.treetransfer.index.qingShuRu],
  notFoundContent: I18N.treetransfer.index.zanWuShuJu,
  disabled: false,
  leftDisabled: false,
  rightDisabled: false,
  defaultExpandAll: false,
};

export default TreeTransfer;
