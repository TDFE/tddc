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

// 天策
export const tiance = {
  POLICY: { en: 'P', cn: '策', color: '#D97B4E' },
  POLICY_VERSION: { en: 'P', cn: '策', color: '#D97B4E' },
  POLICY_PIBLISH_HIS: { en: 'P', cn: '策', color: '#C78F58' },

  DECISION_TOOL: { en: 'D', cn: '决', color: '#357BEB' },
  DECISION_TOOL_VERSION: { en: 'D', cn: '决', color: '#357BEB' },

  THIRD_SERVICE: { en: 'T', cn: '三', color: '#3BA99E' },
  THIRD_SERVICE_VERSION: { en: 'T', cn: '三', color: '#3BA99E' },
  DATASOURCE_SERVICE: { en: 'T', cn: '三', color: '#3BA99E' },

  MODEL: { en: 'M', cn: '模', color: '#91B53B' },
  MODEL_VERSION: { en: 'M', cn: '模', color: '#91B53B' },

  RULE: { en: 'R', cn: '规', color: '#126BFB' },

  RULE_SET: { en: 'R', cn: '规', color: '#1DA3DA' },
  RULE_SET_VERSION: { en: 'R', cn: '规', color: '#1DA3DA' },

  INDEX_OFFLINE: { en: 'O', cn: '离', color: '#BC6BC6' },
  INDEX_OFFLINE_VERSION: { en: 'O', cn: '离', color: '#BC6BC6' },

  INDEX_REALTIME: { en: 'R', cn: '实', color: '#0BBBD1' },
  INDEX_REALTIME_VERSION: { en: 'R', cn: '实', color: '#0BBBD1' },

  FIELD_SYSTEM: { en: 'S', cn: '系', color: '#6776CF' },
  FIELD_SCRIPT: { en: 'D', cn: '动', color: '#5B8FF9 ' },

  DEAL_TYPE: { en: 'R', cn: '风', color: '#CF6867' },
  EVENT_TYPE: { en: 'E', cn: '事', color: '#D5A142' },
  FUNCTION: { en: 'F', cn: '函', color: '#DB6595' },
  FUNCTION_VERSION: { en: 'F', cn: '函', color: '#DB6595' },
  NAME_LIST: { en: 'L', cn: '名单集', color: '#E6A133' },
  FLOW_TEMPLATE: { en: 'P', cn: '流', color: '#72A768' },
  RULE_IMMUNE: { en: 'R', cn: '规', color: '#565ED5' },
  NO_DISTURB: { en: 'D', cn: '免', color: '#7ABD87' },
  API_SERVICE: { en: 'D', cn: '对', color: '#945FB9' },

  ETL_HANDLER: { en: 'E', cn: 'E', color: '#5681B0' },
  DATASOURCE_ETL_HANDLER: { en: 'E', cn: 'E', color: '#5681B0' },

  INDEX_DATASOURCE: { en: 'E', cn: '外', color: '#BC6BC6' },
  INDEX_YUNTU: { en: 'G', cn: '图', color: '#BC6BC6' },
  INDEX_YUNTU_VERSION: { en: 'G', cn: '图', color: '#BC6BC6' },
};

// 天座
export const tianzuo = {
  DATASOURCE_PARTNER: { en: 'P', name: '合', color: '#357BEB' },
  DATASOURCE_CONTRACT: { en: 'C', name: '合', color: '#1068f5' },
  DATASOURCE_ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#D5A142',
  },

  DATASOURCE_ETL_HANDLER_POST: {
    en: 'P',
    name: '后',
    color: '#3BA99E',
  },
  DATASOURCE_ETL_HANDLER_PRE: {
    en: 'P',
    name: '前',
    color: '#1DA3DA',
  },
  DATASOURCE_CHANNEL_SERVICE: {
    en: 'C',
    name: '调',
    color: '#945FB9',
  },
  DATASOURCE_SERVICE_SHUNT: {
    en: 'S',
    name: '分',
    color: '#6776CF',
  },
  DATASOURCE_SERVICE_EXCEPTION: {
    en: 'A',
    name: '异常切换接口',
    color: '#D97B4E',
  },
  DATASOURCE_CHANNEL_SERVICE_GROUP: {
    en: 'C',
    name: '调',
    color: '#DB6595',
  },
  EXECUTE_MODE_PARALLEL: {
    en: 'P',
    name: '并',
    color: '#91B53B',
  },
  EXECUTE_MODE_SERIAL: { en: 'S', name: '串', color: '#72A768' },
};

export const NODE_TYPE_MAP = {
  ...tiance,
  ...tianzuo,
  tiance: {
    ...tiance,
  },
  tianzuo: {
    ...tianzuo,
  },
};

export default constant;
