import { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import OverView from '../referenceTree';
import { transform } from './utils';
import Node from './Node';
import './index.less';

const RuleTreeComponent = (props) => {
  let {
    rules,
    value,
    dataSourceList,
    ruleTemplateList,
    logicOperator,
    lang,
    options = {},
    styleOptions = {},
    showLogic = false,
  } = props;

  let logicText = value;
  let IFCondition = ['!&&', '!||'].includes(logicOperator) && logicOperator; // IF规则模板会多两个逻辑运算： 以下条件均不满足、以下条件至少一条不满足，需要转换一下逻辑关系显示

  if (IFCondition) {
    let arr = rules.map((i, index) => '!' + (index + 1)); // 加 ！表示 非运算
    let link = logicOperator === '!&&' ? '|' : '&';
    logicText = arr.join(link);
  }
  const [data, setData] = useState();
  const initData = (value) => {
    let rulesArr = cloneDeep(rules);
    let ruleMap = {};
    rulesArr.forEach((item, index) => {
      ruleMap[index + 1] = item;
    });
    let treeData = null;
    if (value) {
      treeData = transform(value, null, ruleMap);
    }
    setData(treeData);
  };

  useEffect(() => {
    initData(value);
  }, [value, rules]);

  let NodeDom = (d) => {
    let { node } = d;
    return (
      <Node
        node={node}
        lang={lang}
        allMap={dataSourceList}
        ruleTemplateListObj={ruleTemplateList}
        IFCondition={IFCondition}
      />
    );
  };

  let customPosition = (node) => {
    let { x, y, data, parent } = node;
    let { type } = data;
    let isLeaf = parent && type === 'leaf';
    let isParentGroupNode = !!parent?.children?.length && !!parent?.data?.name;
    if (isLeaf && isParentGroupNode) {
      return [x, y + 95];
    }
    return [x, y];
  };

  return (
    <div className="custom-rule-tree">
      {showLogic && (
        <span className="logic-text">
          {'逻辑关系：'}
          {logicText}
        </span>
      )}
      <OverView
        data={data}
        options={{
          fixed: false,
          initType: true,
          linkType: 'solid',
          lineType: 1,
          nodeDom: NodeDom,
          customPosition,
          ...options,
        }}
        styleOptions={{
          nodeWidth: 30,
          spaceHorizontal: 60,
          spaceVertical: 12,
          ...styleOptions,
        }}
      />
    </div>
  );
};

export default RuleTreeComponent;
