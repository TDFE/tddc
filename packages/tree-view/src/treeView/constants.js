import { SVGImage } from './utils';

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
  POLICY: { en: 'P', cn: '策', color: '#D97B4E', img: SVGImage('策', '#D97B4E') },
  POLICY_VERSION: { en: 'P', cn: '策', color: '#D97B4E', img: SVGImage('策', '#D97B4E') },
  POLICY_PIBLISH_HIS: { en: 'P', cn: '策', color: '#C78F58', img: SVGImage('策', '#D97B4E') },

  DECISION_TOOL: { en: 'D', cn: '决', color: '#357BEB', img: SVGImage('决', '#357BEB') },
  DECISION_TOOL_VERSION: { en: 'D', cn: '决', color: '#357BEB', img: SVGImage('决', '#357BEB') },

  THIRD_SERVICE: { en: 'T', cn: '三', color: '#3BA99E', img: SVGImage('三', '#3BA99E') },
  THIRD_SERVICE_VERSION: { en: 'T', cn: '三', color: '#3BA99E', img: SVGImage('三', '#3BA99E') },
  DATASOURCE_SERVICE: { en: 'T', cn: '三', color: '#3BA99E', img: SVGImage('三', '#3BA99E') },

  MODEL: { en: 'M', cn: '模', color: '#91B53B', img: SVGImage('模', '#91B53B') },
  MODEL_VERSION: { en: 'M', cn: '模', color: '#91B53B', img: SVGImage('模', '#91B53B') },

  RULE: { en: 'R', cn: '规', color: '#126BFB', img: SVGImage('规', '#126BFB') },

  RULE_SET: { en: 'R', cn: '规', color: '#1DA3DA', img: SVGImage('规', '#1DA3DA') },
  RULE_SET_VERSION: { en: 'R', cn: '规', color: '#1DA3DA', img: SVGImage('规', '#1DA3DA') },

  INDEX_OFFLINE: { en: 'O', cn: '离', color: '#BC6BC6', img: SVGImage('离', '#BC6BC6') },
  INDEX_OFFLINE_VERSION: { en: 'O', cn: '离', color: '#BC6BC6', img: SVGImage('离', '#BC6BC6') },

  INDEX_REALTIME: { en: 'R', cn: '实', color: '#0BBBD1', img: SVGImage('实', '#0BBBD1') },
  INDEX_REALTIME_VERSION: { en: 'R', cn: '实', color: '#0BBBD1', img: SVGImage('实', '#0BBBD1') },

  FIELD_SYSTEM: { en: 'S', cn: '系', color: '#6776CF', img: SVGImage('系', '#6776CF') },
  FIELD_SCRIPT: { en: 'D', cn: '动', color: '#5B8FF9 ', img: SVGImage('动', '#5B8FF9') },

  DEAL_TYPE: { en: 'R', cn: '风', color: '#CF6867', img: SVGImage('风', '#CF6867') },
  EVENT_TYPE: { en: 'E', cn: '事', color: '#D5A142', img: SVGImage('系', '#D5A142') },
  FUNCTION: { en: 'F', cn: '函', color: '#DB6595', img: SVGImage('函', '#DB6595') },
  FUNCTION_VERSION: { en: 'F', cn: '函', color: '#DB6595', img: SVGImage('函', '#DB6595') },
  NAME_LIST: { en: 'L', cn: '名', color: '#E6A133', img: SVGImage('名', '#E6A133') },
  FLOW_TEMPLATE: { en: 'P', cn: '流', color: '#72A768', img: SVGImage('流', '#72A768') },
  RULE_IMMUNE: { en: 'R', cn: '规', color: '#565ED5', img: SVGImage('规', '#565ED5') },
  NO_DISTURB: { en: 'D', cn: '免', color: '#7ABD87', img: SVGImage('免', '#7ABD87') },
  API_SERVICE: { en: 'D', cn: '对', color: '#945FB9', img: SVGImage('对', '#945FB9') },

  ETL_HANDLER: { en: 'E', cn: 'E', color: '#5681B0', img: SVGImage('E', '#5681B0') },
  DATASOURCE_ETL_HANDLER: { en: 'E', cn: 'E', color: '#5681B0', img: SVGImage('E', '#5681B0') },

  INDEX_DATASOURCE: { en: 'E', cn: '外', color: '#BC6BC6', img: SVGImage('外', '#BC6BC6') },
  INDEX_YUNTU: { en: 'G', cn: '图', color: '#BC6BC6', img: SVGImage('图', '#BC6BC6') },
  INDEX_YUNTU_VERSION: { en: 'G', cn: '图', color: '#BC6BC6', img: SVGImage('图', '#BC6BC6') },
  SCORE_CARD: { en: 'S', cn: '评', color: '#DB6595', img: SVGImage('评', '#DB6595') },
};

// 天座
export const tianzuo = {
  DATASOURCE_PARTNER: { en: 'P', name: '合', color: '#357BEB' },
  DATASOURCE_CONTRACT: { en: 'C', name: '合', color: '#1068f5' },
  DATASOURCE_ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#D5A142',
    img: SVGImage('E', '#D5A142'),
  },

  DATASOURCE_ETL_HANDLER_POST: {
    en: 'P',
    name: '后',
    color: '#3BA99E',
    img: SVGImage('后', '#3BA99E'),
  },
  DATASOURCE_ETL_HANDLER_PRE: {
    en: 'P',
    name: '前',
    color: '#1DA3DA',
    img: SVGImage('前', '#1DA3DA'),
  },
  DATASOURCE_CHANNEL_SERVICE: {
    en: 'C',
    name: '调',
    color: '#945FB9',
    img: SVGImage('调', '#945FB9'),
  },
  DATASOURCE_SERVICE_SHUNT: {
    en: 'S',
    name: '分',
    color: '#6776CF',
    img: SVGImage('分', '#6776CF'),
  },
  DATASOURCE_SERVICE_EXCEPTION: {
    en: 'A',
    name: '异',
    color: '#D97B4E',
    img: SVGImage('异', '#D97B4E'),
  },
  DATASOURCE_CHANNEL_SERVICE_GROUP: {
    en: 'C',
    name: '调',
    color: '#DB6595',
    img: SVGImage('调', '#DB6595'),
  },
  EXECUTE_MODE_PARALLEL: {
    en: 'P',
    name: '并',
    color: '#91B53B',
    img: SVGImage('并', '#91B53B'),
  },
  EXECUTE_MODE_SERIAL: { en: 'S', name: '串', color: '#72A768', img: SVGImage('并', '#91B53B') },
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
