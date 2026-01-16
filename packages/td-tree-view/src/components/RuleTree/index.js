import { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import OverView from '../referenceTree';
import { transform } from './utils';
import Node from './Node';
import './index.less';
import mapLocale, { getLang } from '../../I18N';

import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver';

const RuleTreeComponent = (props) => {
  let {
    locale,
    rules,
    value,
    allMap,
    ruleTemplateList,
    logicOperator,
    lang,
    options = {},
    styleOptions = {},
    showLogic = false,
  } = props;

  lang = lang || getLang() || 'cn';

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
        locale={locale}
        node={node}
        lang={lang}
        allMap={allMap}
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
          {locale.luoji}
          {logicText}
        </span>
      )}
      <OverView
        locale={locale}
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

// export default RuleTreeComponent;
export default (props) => (
  <LocaleReceiver componentName="TdTreeView">
    {(locale, localeCode) => {
      const I18N = !!Object.keys(locale).length
        ? locale
        : mapLocale[localeCode] || mapLocale[getLang()];
      return <RuleTreeComponent {...props} locale={I18N} lang={localeCode || getLang()} />;
    }}
  </LocaleReceiver>
);
