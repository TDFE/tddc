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
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
import React from 'react';
import { useState, useEffect } from 'react';
import { cloneDeep } from 'lodash';
import OverView from '../referenceTree';
import { transform } from './utils';
import Node from './Node';
import './index.less';
import otp, { getLang } from './otp';
var RuleTreeComponent = function RuleTreeComponent(props) {
  var rules = props.rules,
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
  lang = lang || getLang() || 'cn';
  var logicText = value;
  var IFCondition = ['!&&', '!||'].includes(logicOperator) && logicOperator; // IF规则模板会多两个逻辑运算： 以下条件均不满足、以下条件至少一条不满足，需要转换一下逻辑关系显示

  if (IFCondition) {
    var arr = rules.map(function (i, index) {
      return '!' + (index + 1);
    }); // 加 ！表示 非运算
    var link = logicOperator === '!&&' ? '|' : '&';
    logicText = arr.join(link);
  }
  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var initData = function initData(value) {
    var rulesArr = cloneDeep(rules);
    var ruleMap = {};
    rulesArr.forEach(function (item, index) {
      ruleMap[index + 1] = item;
    });
    var treeData = null;
    if (value) {
      treeData = transform(value, null, ruleMap);
    }
    setData(treeData);
  };
  useEffect(
    function () {
      initData(value);
    },
    [value, rules],
  );
  var NodeDom = function NodeDom(d) {
    var node = d.node;
    return /*#__PURE__*/ React.createElement(Node, {
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
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: 'custom-rule-tree',
    },
    showLogic &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          className: 'logic-text',
        },
        otp.luoji,
        logicText,
      ),
    /*#__PURE__*/ React.createElement(OverView, {
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
export default RuleTreeComponent;
