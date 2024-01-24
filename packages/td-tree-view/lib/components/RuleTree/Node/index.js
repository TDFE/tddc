"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _OneCondition = _interopRequireDefault(require("../OneCondition"));
var _RuleConditionTemplate = _interopRequireDefault(require("../RuleConditionTemplate"));
require("./index.less");
var _otp = _interopRequireDefault(require("../otp"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var logicMap = {
  '&&': _otp.default.qie,
  '||': _otp.default.huo
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
    logicName = IFCondition === '!&&' ? _otp.default.huo : _otp.default.qie;
  }
  var isLeaf = parent && type === 'leaf'; // 叶子节点
  var isrelation = parent && !!logic && !name; // 关系节点
  var isGroupNode = parent && !!(children === null || children === void 0 ? void 0 : children.length) && !!name; // 组节点
  var isParentGroupNode = !!(parent === null || parent === void 0 ? void 0 : (_parent$children = parent.children) === null || _parent$children === void 0 ? void 0 : _parent$children.length) && !!(parent === null || parent === void 0 ? void 0 : (_parent$data = parent.data) === null || _parent$data === void 0 ? void 0 : _parent$data.name); // 父组节点
  var isTemplate = !!data.description; // 模板节点
  var groupLogicName = logicMap[logicOperator]; // 组节点的逻辑关系

  var index = null;
  if (data.name) index = data.index;
  var template = data.property;
  var style = {
    position: 'absolute',
    left: '-46px',
    zIndex: 10
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "condition-tree-node"
  }, isRoot && /*#__PURE__*/_react.default.createElement("div", {
    className: "root"
  }, logicName), isGroupNode && /*#__PURE__*/_react.default.createElement("div", {
    className: "group-node"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, name, /*#__PURE__*/_react.default.createElement("span", {
    className: "node-sup"
  }, _otp.default.zhu), IFCondition && /*#__PURE__*/_react.default.createElement("span", {
    className: "node-sup if"
  }, _otp.default.fei)), /*#__PURE__*/_react.default.createElement("span", {
    className: "logic"
  }, groupLogicName)), isrelation && /*#__PURE__*/_react.default.createElement("div", {
    className: "relation-node"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "logic"
  }, logicName)), isLeaf && /*#__PURE__*/_react.default.createElement("div", {
    className: "leaf-node",
    style: isParentGroupNode ? style : {}
  }, name && /*#__PURE__*/_react.default.createElement("span", {
    className: "name"
  }, name, isTemplate && /*#__PURE__*/_react.default.createElement("span", {
    className: "node-sup"
  }, _otp.default.mo), IFCondition && /*#__PURE__*/_react.default.createElement("span", {
    className: "node-sup if"
  }, _otp.default.fei)), /*#__PURE__*/_react.default.createElement("span", {
    className: "leaf-text"
  }, isTemplate ? /*#__PURE__*/_react.default.createElement(_RuleConditionTemplate.default, {
    conditionIndex: index,
    data: data,
    template: template,
    ruleTemplateListObj: ruleTemplateListObj,
    lang: lang,
    allMap: allMap
  }) : /*#__PURE__*/_react.default.createElement(_OneCondition.default, {
    conditionData: null,
    conditionSingleData: data,
    conditionType: "single",
    conditionArr: [index],
    allMap: allMap
  }))));
};
var _default = exports.default = Node;