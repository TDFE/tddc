import React from 'react';
import OneCondition from '../OneCondition';
import RuleConditionTemplate from '../RuleConditionTemplate';
import './index.less';
import otp from '../otp';
var logicMap = {
  '&&': otp.qie,
  '||': otp.huo,
};
var Node = function Node(props) {
  var _parent$children, _parent$data;
  var node = props.node,
    IFCondition = props.IFCondition,
    lang = props.lang,
    allMap = props.allMap,
    ruleTemplateListObj = props.ruleTemplateListObj;
  // let { node, templateStore, globalStore, IFCondition } = props;
  var data = node.data,
    parent = node.parent;
  var _data$logic = data.logic,
    logic = _data$logic === void 0 ? '' : _data$logic,
    type = data.type,
    name = data.name,
    children = data.children,
    logicOperator = data.logicOperator;
  var logicName = logicMap[logic];
  var isRoot = !parent;
  if (isRoot && IFCondition) {
    logicName = IFCondition === '!&&' ? otp.huo : otp.qie;
  }
  var isLeaf = parent && type === 'leaf'; // 叶子节点
  var isrelation = parent && !!logic && !name; // 关系节点
  var isGroupNode =
    parent && !!(children === null || children === void 0 ? void 0 : children.length) && !!name; // 组节点
  var isParentGroupNode =
    !!(parent === null || parent === void 0
      ? void 0
      : (_parent$children = parent.children) === null || _parent$children === void 0
      ? void 0
      : _parent$children.length) &&
    !!(parent === null || parent === void 0
      ? void 0
      : (_parent$data = parent.data) === null || _parent$data === void 0
      ? void 0
      : _parent$data.name); // 父组节点
  var isTemplate = !!data.description; // 模板节点
  var groupLogicName = logicMap[logicOperator]; // 组节点的逻辑关系

  var index = null;
  if (data.name) index = data.index;
  var template = data.property;
  var style = {
    position: 'absolute',
    left: '-46px',
    zIndex: 10,
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'condition-tree-node',
    },
    isRoot &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'root',
        },
        logicName,
      ),
    isGroupNode &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'group-node',
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: 'name',
          },
          name,
          /*#__PURE__*/ React.createElement(
            'span',
            {
              className: 'node-sup',
            },
            otp.zhu,
          ),
          IFCondition &&
            /*#__PURE__*/ React.createElement(
              'span',
              {
                className: 'node-sup if',
              },
              otp.fei,
            ),
        ),
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: 'logic',
          },
          groupLogicName,
        ),
      ),
    isrelation &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'relation-node',
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: 'logic',
          },
          logicName,
        ),
      ),
    isLeaf &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'leaf-node',
          style: isParentGroupNode ? style : {},
        },
        name &&
          /*#__PURE__*/ React.createElement(
            'span',
            {
              className: 'name',
            },
            name,
            isTemplate &&
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'node-sup',
                },
                otp.mo,
              ),
            IFCondition &&
              /*#__PURE__*/ React.createElement(
                'span',
                {
                  className: 'node-sup if',
                },
                otp.fei,
              ),
          ),
        /*#__PURE__*/ React.createElement(
          'span',
          {
            className: 'leaf-text',
          },
          isTemplate
            ? /*#__PURE__*/ React.createElement(RuleConditionTemplate, {
                conditionIndex: index,
                data: data,
                template: template,
                ruleTemplateListObj: ruleTemplateListObj,
                lang: lang,
                allMap: allMap,
              })
            : /*#__PURE__*/ React.createElement(OneCondition, {
                conditionData: null,
                conditionSingleData: data,
                conditionType: 'single',
                conditionArr: [index],
                allMap: allMap,
              }),
        ),
      ),
  );
};
export default Node;
