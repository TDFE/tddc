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
var _utils = require('./utils');
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
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
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
var RELATION_WIDTH = (exports.RELATION_WIDTH = 120);
var COMPONENT_HEIGHT = (exports.COMPONENT_HEIGHT = 40);
var COMPONENT_WIDTH = (exports.COMPONENT_WIDTH = 120);
var COMPONENT_SPACE_VERTICAL = (exports.COMPONENT_SPACE_VERTICAL = 20);
var COMPONENT_SPACE_HORIZONTAL = (exports.COMPONENT_SPACE_HORIZONTAL = 38);
var COMPONENT_MARGIN = (exports.COMPONENT_MARGIN = 5);
var ROOT_WIDTH = (exports.ROOT_WIDTH = 130);
var ROOT_HEIGHT = (exports.ROOT_HEIGHT = 60);
var MARGIN_LEFT = (exports.MARGIN_LEFT = 60);
var CONTENT_WIDTH = (exports.CONTENT_WIDTH = 100);
var DOT_WIDTH = (exports.DOT_WIDTH = 20);
var EXPAND_WIDTH = (exports.EXPAND_WIDTH = 16);
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
var tiance = (exports.tiance = {
  POLICY: {
    en: 'P',
    cn: '策',
    color: '#D97B4E',
    img: (0, _utils.SVGImage)('策', '#D97B4E'),
  },
  POLICY_VERSION: {
    en: 'P',
    cn: '策',
    color: '#D97B4E',
    img: (0, _utils.SVGImage)('策', '#D97B4E'),
  },
  POLICY_PIBLISH_HIS: {
    en: 'P',
    cn: '策',
    color: '#C78F58',
    img: (0, _utils.SVGImage)('策', '#D97B4E'),
  },
  DECISION_TOOL: {
    en: 'D',
    cn: '决',
    color: '#357BEB',
    img: (0, _utils.SVGImage)('决', '#357BEB'),
  },
  DECISION_TOOL_VERSION: {
    en: 'D',
    cn: '决',
    color: '#357BEB',
    img: (0, _utils.SVGImage)('决', '#357BEB'),
  },
  THIRD_SERVICE: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
    img: (0, _utils.SVGImage)('三', '#3BA99E'),
  },
  THIRD_SERVICE_VERSION: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
    img: (0, _utils.SVGImage)('三', '#3BA99E'),
  },
  DATASOURCE_SERVICE: {
    en: 'T',
    cn: '三',
    color: '#3BA99E',
    img: (0, _utils.SVGImage)('三', '#3BA99E'),
  },
  MODEL: {
    en: 'M',
    cn: '模',
    color: '#91B53B',
    img: (0, _utils.SVGImage)('模', '#91B53B'),
  },
  MODEL_VERSION: {
    en: 'M',
    cn: '模',
    color: '#91B53B',
    img: (0, _utils.SVGImage)('模', '#91B53B'),
  },
  RULE: {
    en: 'R',
    cn: '规',
    color: '#126BFB',
    img: (0, _utils.SVGImage)('规', '#126BFB'),
  },
  RULE_SET: {
    en: 'R',
    cn: '规',
    color: '#1DA3DA',
    img: (0, _utils.SVGImage)('规', '#1DA3DA'),
  },
  RULE_SET_VERSION: {
    en: 'R',
    cn: '规',
    color: '#1DA3DA',
    img: (0, _utils.SVGImage)('规', '#1DA3DA'),
  },
  INDEX_OFFLINE: {
    en: 'O',
    cn: '离',
    color: '#BC6BC6',
    img: (0, _utils.SVGImage)('离', '#BC6BC6'),
  },
  INDEX_OFFLINE_VERSION: {
    en: 'O',
    cn: '离',
    color: '#BC6BC6',
    img: (0, _utils.SVGImage)('离', '#BC6BC6'),
  },
  INDEX_REALTIME: {
    en: 'R',
    cn: '实',
    color: '#0BBBD1',
    img: (0, _utils.SVGImage)('实', '#0BBBD1'),
  },
  INDEX_REALTIME_VERSION: {
    en: 'R',
    cn: '实',
    color: '#0BBBD1',
    img: (0, _utils.SVGImage)('实', '#0BBBD1'),
  },
  FIELD_SYSTEM: {
    en: 'S',
    cn: '系',
    color: '#6776CF',
    img: (0, _utils.SVGImage)('系', '#6776CF'),
  },
  FIELD_SCRIPT: {
    en: 'D',
    cn: '动',
    color: '#5B8FF9 ',
    img: (0, _utils.SVGImage)('动', '#5B8FF9'),
  },
  DEAL_TYPE: {
    en: 'R',
    cn: '风',
    color: '#CF6867',
    img: (0, _utils.SVGImage)('风', '#CF6867'),
  },
  EVENT_TYPE: {
    en: 'E',
    cn: '事',
    color: '#D5A142',
    img: (0, _utils.SVGImage)('系', '#D5A142'),
  },
  FUNCTION: {
    en: 'F',
    cn: '函',
    color: '#DB6595',
    img: (0, _utils.SVGImage)('函', '#DB6595'),
  },
  FUNCTION_VERSION: {
    en: 'F',
    cn: '函',
    color: '#DB6595',
    img: (0, _utils.SVGImage)('函', '#DB6595'),
  },
  NAME_LIST: {
    en: 'L',
    cn: '名',
    color: '#E6A133',
    img: (0, _utils.SVGImage)('名', '#E6A133'),
  },
  FLOW_TEMPLATE: {
    en: 'P',
    cn: '流',
    color: '#72A768',
    img: (0, _utils.SVGImage)('流', '#72A768'),
  },
  RULE_IMMUNE: {
    en: 'R',
    cn: '规',
    color: '#565ED5',
    img: (0, _utils.SVGImage)('规', '#565ED5'),
  },
  NO_DISTURB: {
    en: 'D',
    cn: '免',
    color: '#7ABD87',
    img: (0, _utils.SVGImage)('免', '#7ABD87'),
  },
  API_SERVICE: {
    en: 'D',
    cn: '对',
    color: '#945FB9',
    img: (0, _utils.SVGImage)('对', '#945FB9'),
  },
  ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#5681B0',
    img: (0, _utils.SVGImage)('E', '#5681B0'),
  },
  DATASOURCE_ETL_HANDLER: {
    en: 'E',
    cn: 'E',
    color: '#5681B0',
    img: (0, _utils.SVGImage)('E', '#5681B0'),
  },
  INDEX_DATASOURCE: {
    en: 'E',
    cn: '外',
    color: '#BC6BC6',
    img: (0, _utils.SVGImage)('外', '#BC6BC6'),
  },
  INDEX_YUNTU: {
    en: 'G',
    cn: '图',
    color: '#BC6BC6',
    img: (0, _utils.SVGImage)('图', '#BC6BC6'),
  },
  INDEX_YUNTU_VERSION: {
    en: 'G',
    cn: '图',
    color: '#BC6BC6',
    img: (0, _utils.SVGImage)('图', '#BC6BC6'),
  },
  SCORE_CARD: {
    en: 'S',
    cn: '评',
    color: '#DB6595',
    img: (0, _utils.SVGImage)('评', '#DB6595'),
  },
});

// 天座
var tianzuo = (exports.tianzuo = {
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
    img: (0, _utils.SVGImage)('E', '#D5A142'),
  },
  DATASOURCE_ETL_HANDLER_POST: {
    en: 'P',
    name: '后',
    color: '#3BA99E',
    img: (0, _utils.SVGImage)('后', '#3BA99E'),
  },
  DATASOURCE_ETL_HANDLER_PRE: {
    en: 'P',
    name: '前',
    color: '#1DA3DA',
    img: (0, _utils.SVGImage)('前', '#1DA3DA'),
  },
  DATASOURCE_CHANNEL_SERVICE: {
    en: 'C',
    name: '调',
    color: '#945FB9',
    img: (0, _utils.SVGImage)('调', '#945FB9'),
  },
  DATASOURCE_SERVICE_SHUNT: {
    en: 'S',
    name: '分',
    color: '#6776CF',
    img: (0, _utils.SVGImage)('分', '#6776CF'),
  },
  DATASOURCE_SERVICE_EXCEPTION: {
    en: 'A',
    name: '异',
    color: '#D97B4E',
    img: (0, _utils.SVGImage)('异', '#D97B4E'),
  },
  DATASOURCE_CHANNEL_SERVICE_GROUP: {
    en: 'C',
    name: '调',
    color: '#DB6595',
    img: (0, _utils.SVGImage)('调', '#DB6595'),
  },
  EXECUTE_MODE_PARALLEL: {
    en: 'P',
    name: '并',
    color: '#91B53B',
    img: (0, _utils.SVGImage)('并', '#91B53B'),
  },
  EXECUTE_MODE_SERIAL: {
    en: 'S',
    name: '串',
    color: '#72A768',
    img: (0, _utils.SVGImage)('并', '#91B53B'),
  },
});
var NODE_TYPE_MAP = (exports.NODE_TYPE_MAP = _objectSpread(
  _objectSpread(_objectSpread({}, tiance), tianzuo),
  {},
  {
    tiance: _objectSpread({}, tiance),
    tianzuo: _objectSpread({}, tianzuo),
  },
));
var _default = (exports.default = constant);
