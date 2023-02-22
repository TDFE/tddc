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
function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
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
  key = _toPropertyKey(key);
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
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
    en: 'P',
    cn: '策',
    color: '#D97B4E',
  },
  POLICY_VERSION: {
    en: 'P',
    cn: '策',
    color: '#D97B4E',
  },
  POLICY_PIBLISH_HIS: {
    en: 'P',
    cn: '策',
    color: '#C78F58',
  },
  DECISION_TOOL: {
    en: 'D',
    cn: '决',
    color: '#357BEB',
  },
  DECISION_TOOL_VERSION: {
    en: 'D',
    cn: '决',
    color: '#357BEB',
  },
  THIRD_SERVICE: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
  },
  THIRD_SERVICE_VERSION: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
  },
  DATASOURCE_SERVICE: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
  },
  MODEL: {
    en: 'M',
    cn: '模',
    color: '#91B53B',
  },
  MODEL_VERSION: {
    en: 'M',
    cn: '模',
    color: '#91B53B',
  },
  RULE: {
    en: 'R',
    cn: '规',
    color: '#126BFB',
  },
  RULE_SET: {
    en: 'R',
    cn: '规',
    color: '#1DA3DA',
  },
  RULE_SET_VERSION: {
    en: 'R',
    cn: '规',
    color: '#1DA3DA',
  },
  INDEX_OFFLINE: {
    en: 'O',
    cn: '离',
    color: '#BC6BC6',
  },
  INDEX_OFFLINE_VERSION: {
    en: 'O',
    cn: '离',
    color: '#BC6BC6',
  },
  INDEX_REALTIME: {
    en: 'R',
    cn: '实',
    color: '#0BBBD1',
  },
  INDEX_REALTIME_VERSION: {
    en: 'R',
    cn: '实',
    color: '#0BBBD1',
  },
  FIELD_SYSTEM: {
    en: 'S',
    cn: '系',
    color: '#6776CF',
  },
  FIELD_SCRIPT: {
    en: 'D',
    cn: '动',
    color: '#5B8FF9 ',
  },
  DEAL_TYPE: {
    en: 'R',
    cn: '风',
    color: '#CF6867',
  },
  EVENT_TYPE: {
    en: 'E',
    cn: '事',
    color: '#D5A142',
  },
  FUNCTION: {
    en: 'F',
    cn: '函',
    color: '#DB6595',
  },
  FUNCTION_VERSION: {
    en: 'F',
    cn: '函',
    color: '#DB6595',
  },
  NAME_LIST: {
    en: 'L',
    cn: '名单集',
    color: '#E6A133',
  },
  FLOW_TEMPLATE: {
    en: 'P',
    cn: '流',
    color: '#72A768',
  },
  RULE_IMMUNE: {
    en: 'R',
    cn: '规',
    color: '#565ED5',
  },
  NO_DISTURB: {
    en: 'D',
    cn: '免',
    color: '#7ABD87',
  },
  API_SERVICE: {
    en: 'D',
    cn: '对',
    color: '#945FB9',
  },
  ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#5681B0',
  },
  DATASOURCE_ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#5681B0',
  },
  INDEX_DATASOURCE: {
    en: 'E',
    cn: '外',
    color: '#BC6BC6',
  },
  INDEX_YUNTU: {
    en: 'G',
    cn: '图',
    color: '#BC6BC6',
  },
  INDEX_YUNTU_VERSION: {
    en: 'G',
    cn: '图',
    color: '#BC6BC6',
  },
};

// 天座
exports.tiance = tiance;
var tianzuo = {
  DATASOURCE_PARTNER: {
    en: 'P',
    name: '合',
    color: '#357BEB',
  },
  DATASOURCE_CONTRACT: {
    en: 'C',
    name: '合',
    color: '#1068f5',
  },
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
  EXECUTE_MODE_SERIAL: {
    en: 'S',
    name: '串',
    color: '#72A768',
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
