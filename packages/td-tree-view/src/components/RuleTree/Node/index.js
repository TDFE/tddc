import OneCondition from '../OneCondition';
import RuleConditionTemplate from '../RuleConditionTemplate';
import './index.less';
import otp from '../otp';

const logicMap = {
  '&&': otp.qie,
  '||': otp.huo,
};

const Node = (props) => {
  let { node, IFCondition, lang, allMap, ruleTemplateListObj } = props;
  // let { node, templateStore, globalStore, IFCondition } = props;
  let { data, parent } = node;
  let { logic = '', type, name, children, logicOperator } = data;
  let logicName = logicMap[logic];
  let isRoot = !parent;

  if (isRoot && IFCondition) {
    logicName = IFCondition === '!&&' ? otp.huo : otp.qie;
  }

  let isLeaf = parent && type === 'leaf'; // 叶子节点
  let isrelation = parent && !!logic && !name; // 关系节点
  let isGroupNode = parent && !!children?.length && !!name; // 组节点
  let isParentGroupNode = !!parent?.children?.length && !!parent?.data?.name; // 父组节点
  let isTemplate = !!data.description; // 模板节点
  let groupLogicName = logicMap[logicOperator]; // 组节点的逻辑关系

  let index = null;
  if (data.name) index = data.index;

  let template = data.property;

  let style = {
    position: 'absolute',
    left: '-46px',
    zIndex: 10,
  };

  return (
    <div className="condition-tree-node">
      {isRoot && <div className="root">{logicName}</div>}

      {isGroupNode && (
        <div className="group-node">
          <span className="name">
            {name}
            <span className="node-sup">{otp.zhu}</span>
            {IFCondition && <span className="node-sup if">{otp.fei}</span>}
          </span>
          <span className="logic">{groupLogicName}</span>
        </div>
      )}
      {isrelation && (
        <div className="relation-node">
          <span className="logic">{logicName}</span>
        </div>
      )}
      {isLeaf && (
        <div className="leaf-node" style={isParentGroupNode ? style : {}}>
          {name && (
            <span className="name">
              {name}
              {isTemplate && <span className="node-sup">{otp.mo}</span>}
              {IFCondition && <span className="node-sup if">{otp.fei}</span>}
            </span>
          )}
          <span className="leaf-text">
            {isTemplate ? (
              <RuleConditionTemplate
                conditionIndex={index}
                data={data}
                template={template}
                ruleTemplateListObj={ruleTemplateListObj}
                lang={lang}
                allMap={allMap}
              />
            ) : (
              <OneCondition
                conditionData={null}
                conditionSingleData={data}
                conditionType="single"
                conditionArr={[index]}
                allMap={allMap}
              />
            )}
          </span>
        </div>
      )}
    </div>
  );
};
export default Node;
