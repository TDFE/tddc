'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');
var _typeof = require('@babel/runtime/helpers/typeof');
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;
var _extends2 = _interopRequireDefault(require('@babel/runtime/helpers/extends'));
var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));
var _slicedToArray2 = _interopRequireDefault(require('@babel/runtime/helpers/slicedToArray'));
var _react = _interopRequireWildcard(require('react'));
var _lodash = require('lodash');
var _referenceTree = _interopRequireDefault(require('../referenceTree'));
var _utils = require('./utils');
var _Node = _interopRequireDefault(require('./Node'));
require('./index.less');
var _I18N = _interopRequireWildcard(require('../../I18N'));
var _LocaleReceiver = _interopRequireDefault(require('antd/es/locale-provider/LocaleReceiver'));
function _interopRequireWildcard(e, t) {
  if ('function' == typeof WeakMap)
    var r = new WeakMap(),
      n = new WeakMap();
  return (_interopRequireWildcard = function _interopRequireWildcard(e, t) {
    if (!t && e && e.__esModule) return e;
    var o,
      i,
      f = { __proto__: null, default: e };
    if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return f;
    if ((o = t ? n : r)) {
      if (o.has(e)) return o.get(e);
      o.set(e, f);
    }
    for (var _t2 in e)
      'default' !== _t2 &&
        {}.hasOwnProperty.call(e, _t2) &&
        ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) &&
        (i.get || i.set)
          ? o(f, _t2, i)
          : (f[_t2] = e[_t2]));
    return f;
  })(e, t);
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
          (0, _defineProperty2['default'])(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
var RuleTreeComponent = function RuleTreeComponent(props) {
  var locale = props.locale,
    rules = props.rules,
    value = props.value,
    allMap = props.allMap,
    ruleTemplateList = props.ruleTemplateList,
    logicOperator = props.logicOperator,
    lang = props.lang,
    _props$options = props.options,
    options = _props$options === void 0 ? {} : _props$options,
    _props$styleOptions = props.styleOptions,
    styleOptions = _props$styleOptions === void 0 ? {} : _props$styleOptions,
    _props$showLogic = props.showLogic,
    showLogic = _props$showLogic === void 0 ? false : _props$showLogic;
  lang = lang || (0, _I18N.getLang)() || 'cn';
  var logicText = value;
  var IFCondition = ['!&&', '!||'].includes(logicOperator) && logicOperator; // IF规则模板会多两个逻辑运算： 以下条件均不满足、以下条件至少一条不满足，需要转换一下逻辑关系显示

  if (IFCondition) {
    var arr = rules.map(function (i, index) {
      return '!' + (index + 1);
    }); // 加 ！表示 非运算
    var link = logicOperator === '!&&' ? '|' : '&';
    logicText = arr.join(link);
  }
  var _useState = (0, _react.useState)(),
    _useState2 = (0, _slicedToArray2['default'])(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var initData = function initData(value) {
    var rulesArr = (0, _lodash.cloneDeep)(rules);
    var ruleMap = {};
    rulesArr.forEach(function (item, index) {
      ruleMap[index + 1] = item;
    });
    var treeData = null;
    if (value) {
      treeData = (0, _utils.transform)(value, null, ruleMap);
    }
    setData(treeData);
  };
  (0, _react.useEffect)(
    function () {
      initData(value);
    },
    [value, rules],
  );
  var NodeDom = function NodeDom(d) {
    var node = d.node;
    return /*#__PURE__*/ _react['default'].createElement(_Node['default'], {
      locale: locale,
      node: node,
      lang: lang,
      allMap: allMap,
      ruleTemplateListObj: ruleTemplateList,
      IFCondition: IFCondition,
    });
  };
  var customPosition = function customPosition(node) {
    var _parent$children, _parent$data;
    var x = node.x,
      y = node.y,
      data = node.data,
      parent = node.parent;
    var type = data.type;
    var isLeaf = parent && type === 'leaf';
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
        : _parent$data.name);
    if (isLeaf && isParentGroupNode) {
      return [x, y + 95];
    }
    return [x, y];
  };
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      className: 'custom-rule-tree',
    },
    showLogic &&
      /*#__PURE__*/ _react['default'].createElement(
        'span',
        {
          className: 'logic-text',
        },
        locale.luoji,
        logicText,
      ),
    /*#__PURE__*/ _react['default'].createElement(_referenceTree['default'], {
      locale: locale,
      data: data,
      options: _objectSpread(
        {
          fixed: false,
          initType: true,
          linkType: 'solid',
          lineType: 1,
          nodeDom: NodeDom,
          customPosition: customPosition,
        },
        options,
      ),
      styleOptions: _objectSpread(
        {
          nodeWidth: 30,
          spaceHorizontal: 60,
          spaceVertical: 12,
        },
        styleOptions,
      ),
    }),
  );
};

// export default RuleTreeComponent;
var _default = (exports['default'] = function _default(props) {
  return /*#__PURE__*/ _react['default'].createElement(
    _LocaleReceiver['default'],
    {
      componentName: 'TdTreeView',
    },
    function (locale, localeCode) {
      var I18N = !!Object.keys(locale).length
        ? locale
        : _I18N['default'][localeCode] || _I18N['default'][(0, _I18N.getLang)()];
      return /*#__PURE__*/ _react['default'].createElement(
        RuleTreeComponent,
        (0, _extends2['default'])({}, props, {
          locale: I18N,
          lang: localeCode || (0, _I18N.getLang)(),
        }),
      );
    },
  );
});
