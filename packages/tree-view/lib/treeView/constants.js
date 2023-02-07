'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.tianzuo =
  exports.tiance =
  exports.default =
  exports.ROOT_WIDTH =
  exports.ROOT_HEIGHT =
  exports.RELATION_WIDTH =
  exports.NODE_TYPE_MAP =
  exports.MARGIN_LEFT =
  exports.EXPAND_WIDTH =
  exports.DOT_WIDTH =
  exports.CONTENT_WIDTH =
  exports.COMPONENT_WIDTH =
  exports.COMPONENT_SPACE_VERTICAL =
  exports.COMPONENT_SPACE_HORIZONTAL =
  exports.COMPONENT_MARGIN =
  exports.COMPONENT_HEIGHT =
    void 0;
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var RELATION_WIDTH = 120;
exports.RELATION_WIDTH = RELATION_WIDTH;
var COMPONENT_HEIGHT = 40;
exports.COMPONENT_HEIGHT = COMPONENT_HEIGHT;
var COMPONENT_WIDTH = 120;
exports.COMPONENT_WIDTH = COMPONENT_WIDTH;
var COMPONENT_SPACE_VERTICAL = 20;
exports.COMPONENT_SPACE_VERTICAL = COMPONENT_SPACE_VERTICAL;
var COMPONENT_SPACE_HORIZONTAL = 38;
exports.COMPONENT_SPACE_HORIZONTAL = COMPONENT_SPACE_HORIZONTAL;
var COMPONENT_MARGIN = 5;
exports.COMPONENT_MARGIN = COMPONENT_MARGIN;
var ROOT_WIDTH = 130;
exports.ROOT_WIDTH = ROOT_WIDTH;
var ROOT_HEIGHT = 60;
exports.ROOT_HEIGHT = ROOT_HEIGHT;
var MARGIN_LEFT = 60;
exports.MARGIN_LEFT = MARGIN_LEFT;
var CONTENT_WIDTH = 100;
exports.CONTENT_WIDTH = CONTENT_WIDTH;
var DOT_WIDTH = 20;
exports.DOT_WIDTH = DOT_WIDTH;
var EXPAND_WIDTH = 16;
exports.EXPAND_WIDTH = EXPAND_WIDTH;
var constant = {
  RELATION_WIDTH: RELATION_WIDTH,
  COMPONENT_HEIGHT: COMPONENT_HEIGHT,
  COMPONENT_WIDTH: COMPONENT_WIDTH,
  COMPONENT_SPACE_VERTICAL: COMPONENT_SPACE_VERTICAL,
  COMPONENT_SPACE_HORIZONTAL: COMPONENT_SPACE_HORIZONTAL,
  COMPONENT_MARGIN: COMPONENT_MARGIN,
  ROOT_HEIGHT: ROOT_HEIGHT,
  MARGIN_LEFT: MARGIN_LEFT,
  CONTENT_WIDTH: CONTENT_WIDTH,
  DOT_WIDTH: DOT_WIDTH,
  EXPAND_WIDTH: EXPAND_WIDTH,
};

// 天策
var tiance = {
  POLICY: {
    name: '策略',
    color: '#D97B4E',
    img: require('./static/imgs/1.svg'),
  },
  POLICY_VERSION: {
    name: '策略版本',
    color: '#D97B4E',
    img: require('./static/imgs/1.svg'),
  },
  POLICY_PIBLISH_HIS: {
    name: '策略发布历史',
    color: '#C78F58',
    img: require('./static/imgs/1.svg'),
  },
  DECISION_TOOL: {
    name: '决策工具',
    color: '#357BEB',
    img: require('./static/imgs/2.svg'),
  },
  DECISION_TOOL_VERSION: {
    name: '决策工具版本',
    color: '#357BEB',
    img: require('./static/imgs/2.svg'),
  },
  THIRD_SERVICE: {
    name: '三方服务',
    color: '#3BA99E',
    img: require('./static/imgs/3.svg'),
  },
  THIRD_SERVICE_VERSION: {
    name: '三方服务版本',
    color: '#3BA99E',
    img: require('./static/imgs/3.svg'),
  },
  DATASOURCE_SERVICE: {
    name: '三方服务',
    color: '#3BA99E',
    img: require('./static/imgs/3.svg'),
  },
  INDEX_DATASOURCE_SET: {
    name: '三方指标集',
    color: '#3BA99E',
    img: require('./static/imgs/3.svg'),
  },
  MODEL: {
    name: '模型',
    color: '#91B53B',
    img: require('./static/imgs/4.svg'),
  },
  MODEL_VERSION: {
    name: '模型版本',
    color: '#91B53B',
    img: require('./static/imgs/4.svg'),
  },
  RULE: {
    name: '规则',
    color: '#126BFB',
    img: require('./static/imgs/6.svg'),
  },
  RULE_SET: {
    name: '规则集',
    color: '#1DA3DA',
    img: require('./static/imgs/5.svg'),
  },
  RULE_SET_VERSION: {
    name: '规则集版本',
    color: '#1DA3DA',
    img: require('./static/imgs/6.svg'),
  },
  INDEX_OFFLINE: {
    name: '离线指标',
    color: '#BC6BC6',
    img: require('./static/imgs/7.svg'),
  },
  INDEX_OFFLINE_VERSION: {
    name: '离线指标版本',
    color: '#BC6BC6',
    img: require('./static/imgs/7.svg'),
  },
  INDEX_REALTIME: {
    name: '实时指标',
    color: '#0BBBD1',
    img: require('./static/imgs/8.svg'),
  },
  INDEX_REALTIME_VERSION: {
    name: '实时指标版本',
    color: '#0BBBD1',
    img: require('./static/imgs/8.svg'),
  },
  FIELD_SYSTEM: {
    name: '系统字段',
    color: '#6776CF',
    img: require('./static/imgs/9.svg'),
  },
  FIELD_SCRIPT: {
    name: '动态字段',
    color: '#5B8FF9 ',
    img: require('./static/imgs/10.svg'),
  },
  DEAL_TYPE: {
    name: '风险决策',
    color: '#CF6867',
    img: require('./static/imgs/11.svg'),
  },
  EVENT_TYPE: {
    name: '事件类型',
    color: '#D5A142',
    img: require('./static/imgs/12.svg'),
  },
  FUNCTION: {
    name: '函数',
    color: '#DB6595',
    img: require('./static/imgs/13.svg'),
  },
  FUNCTION_VERSION: {
    name: '函数版本',
    color: '#DB6595',
    img: require('./static/imgs/13.svg'),
  },
  NAME_LIST: {
    name: '名单集',
    color: '#E6A133',
    img: require('./static/imgs/14.svg'),
  },
  FLOW_TEMPLATE: {
    name: '流程模板',
    color: '#72A768',
    img: require('./static/imgs/15.svg'),
  },
  RULE_IMMUNE: {
    name: '规则免疫',
    color: '#565ED5',
    img: require('./static/imgs/16.svg'),
  },
  NO_DISTURB: {
    name: '免打扰',
    color: '#7ABD87',
    img: require('./static/imgs/17.svg'),
  },
  API_SERVICE: {
    name: '对接服务',
    color: '#945FB9',
    img: require('./static/imgs/18.svg'),
  },
  ETL_HANDLER: {
    name: 'ETL处理器',
    color: '#5681B0',
    img: require('./static/imgs/19.svg'),
  },
  DATASOURCE_ETL_HANDLER: {
    name: 'ETL处理器',
    color: '#5681B0',
    img: require('./static/imgs/19.svg'),
  },
  INDEX_DATASOURCE: {
    name: '外数指标',
    color: '#BC6BC6',
    img: require('./static/imgs/22.svg'),
  },
  INDEXDATASOURCE_SET: {
    name: '外数指标集',
    color: '#BC6BC6',
    img: require('./static/imgs/22.svg'),
  },
  INDEX_YUNTU: {
    name: '图谱指标',
    color: '#BC6BC6',
    img: require('./static/imgs/23.svg'),
  },
  INDEX_YUNTU_VERSION: {
    name: '图谱指标',
    color: '#BC6BC6',
    img: require('./static/imgs/23.svg'),
  },
};

// 天座
exports.tiance = tiance;
var tianzuo = {
  DATASOURCE_PARTNER: {
    name: '合作方',
    color: '#357BEB',
    img: require('./static/imgs/24.svg'),
  },
  DATASOURCE_CONTRACT: {
    name: '合同',
    color: '#1068f5',
    img: require('./static/imgs/25.svg'),
  },
  DATASOURCE_ETL_HANDLER: {
    name: 'ETL处理器',
    color: '#D5A142',
    img: require('./static/imgs/26.svg'),
  },
  DATASOURCE_ETL_HANDLER_POST: {
    name: '后置处理器',
    color: '#3BA99E',
    img: require('./static/imgs/27.svg'),
  },
  DATASOURCE_ETL_HANDLER_PRE: {
    name: '前置处理器',
    color: '#1DA3DA',
    img: require('./static/imgs/28.svg'),
  },
  DATASOURCE_CHANNEL_SERVICE: {
    name: '调用方',
    color: '#945FB9',
    img: require('./static/imgs/29.svg'),
  },
  DATASOURCE_SERVICE_SHUNT: {
    name: '分流接口',
    color: '#6776CF',
    img: require('./static/imgs/30.svg'),
  },
  DATASOURCE_SERVICE_EXCEPTION: {
    name: '异常切换接口',
    color: '#D97B4E',
    img: require('./static/imgs/31.svg'),
  },
  DATASOURCE_CHANNEL_SERVICE_GROUP: {
    name: '调用方组',
    color: '#DB6595',
    img: require('./static/imgs/32.svg'),
  },
  EXECUTE_MODE_PARALLEL: {
    name: '并联方式',
    color: '#91B53B',
    img: require('./static/imgs/33.svg'),
  },
  EXECUTE_MODE_SERIAL: {
    name: '串联方式',
    color: '#72A768',
    img: require('./static/imgs/34.svg'),
  },
};
exports.tianzuo = tianzuo;
var NODE_TYPE_MAP = _objectSpread(
  _objectSpread(_objectSpread({}, tiance), tianzuo),
  {},
  {
    tiance: _objectSpread({}, tiance),
    tianzuo: _objectSpread({}, tianzuo),
  },
);
exports.NODE_TYPE_MAP = NODE_TYPE_MAP;
var _default = constant;
exports.default = _default;
