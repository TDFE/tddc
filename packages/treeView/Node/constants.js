export const RELATION_WIDTH = 120;
export const COMPONENT_HEIGHT = 40;
export const COMPONENT_WIDTH = 120;
export const COMPONENT_SPACE_VERTICAL = 20;
export const COMPONENT_SPACE_HORIZONTAL = 38;
export const COMPONENT_MARGIN = 5;
export const ROOT_WIDTH = 130;
export const ROOT_HEIGHT = 60;
export const MARGIN_LEFT = 60;
export const CONTENT_WIDTH = 100;
export const DOT_WIDTH = 20;
export const EXPAND_WIDTH = 16;

let constant = {
  RELATION_WIDTH,
  COMPONENT_HEIGHT,
  COMPONENT_WIDTH,
  COMPONENT_SPACE_VERTICAL,
  COMPONENT_SPACE_HORIZONTAL,
  COMPONENT_MARGIN,
  ROOT_HEIGHT,
  MARGIN_LEFT,
  CONTENT_WIDTH,
  DOT_WIDTH,
  EXPAND_WIDTH,
};

export const NODE_TYPE_MAP = {
  POLICY: { name: '策略', color: '#D97B4E', img: require('./imgs/1.svg') },
  POLICY_VERSION: { name: '策略版本', color: '#D97B4E', img: require('./imgs/1.svg') },
  POLICY_PIBLISH_HIS: { name: '策略发布历史', color: '#C78F58', img: require('./imgs/1.svg') },

  DECISION_TOOL: { name: '决策工具', color: '#357BEB', img: require('./imgs/2.svg') },
  DECISION_TOOL_VERSION: { name: '决策工具版本', color: '#357BEB', img: require('./imgs/2.svg') },

  THIRD_SERVICE: { name: '三方服务', color: '#3BA99E', img: require('./imgs/3.svg') },
  THIRD_SERVICE_VERSION: { name: '三方服务版本', color: '#3BA99E', img: require('./imgs/3.svg') },

  MODEL: { name: '模型', color: '#91B53B', img: require('./imgs/4.svg') },
  MODEL_VERSION: { name: '模型版本', color: '#91B53B', img: require('./imgs/4.svg') },

  RULE: { name: '规则', color: '#126BFB', img: require('./imgs/6.svg') },

  RULE_SET: { name: '规则集', color: '#1DA3DA', img: require('./imgs/5.svg') },
  RULE_SET_VERSION: { name: '规则集版本', color: '#1DA3DA', img: require('./imgs/6.svg') },

  INDEX_OFFLINE: { name: '离线指标', color: '#BC6BC6', img: require('./imgs/7.svg') },
  INDEX_OFFLINE_VERSION: { name: '离线指标版本', color: '#BC6BC6', img: require('./imgs/7.svg') },

  INDEX_REALTIME: { name: '实时指标', color: '#0BBBD1', img: require('./imgs/8.svg') },
  INDEX_REALTIME_VERSION: { name: '实时指标版本', color: '#0BBBD1', img: require('./imgs/8.svg') },

  FIELD_SYSTEM: { name: '系统字段', color: '#6776CF', img: require('./imgs/9.svg') },
  FIELD_SCRIPT: { name: '动态字段', color: '#5B8FF9 ', img: require('./imgs/10.svg') },

  DEAL_TYPE: { name: '风险决策', color: '#CF6867', img: require('./imgs/11.svg') },
  EVENT_TYPE: { name: '事件类型', color: '#D5A142', img: require('./imgs/12.svg') },
  FUNCTION: { name: '函数', color: '#DB6595', img: require('./imgs/13.svg') },
  FUNCTION_VERSION: { name: '函数版本', color: '#DB6595', img: require('./imgs/13.svg') },
  NAME_LIST: { name: '名单集', color: '#E6A133', img: require('./imgs/14.svg') },
  FLOW_TEMPLATE: { name: '流程模板', color: '#72A768', img: require('./imgs/15.svg') },
  RULE_IMMUNE: { name: '规则免疫', color: '#565ED5', img: require('./imgs/16.svg') },
  NO_DISTURB: { name: '免打扰', color: '#7ABD87', img: require('./imgs/17.svg') },
  API_SERVICE: { name: '对接服务', color: '#945FB9', img: require('./imgs/18.svg') },
  ETL_HANDLER: { name: 'ETL处理器', color: '#5681B0', img: require('./imgs/19.svg') },
};

export default constant;
