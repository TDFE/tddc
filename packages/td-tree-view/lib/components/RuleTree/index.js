'use strict';

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
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _lodash = require('lodash');
var _referenceTree = _interopRequireDefault(require('../referenceTree'));
var _utils = require('./utils');
var _Node = _interopRequireDefault(require('./Node'));
require('./index.less');
var _otp = _interopRequireWildcard(require('./otp'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
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
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
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
  lang = lang || (0, _otp.getLang)() || 'cn';
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
    _useState2 = _slicedToArray(_useState, 2),
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
    return /*#__PURE__*/ _react.default.createElement(_Node.default, {
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
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'custom-rule-tree',
    },
    showLogic &&
      /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          className: 'logic-text',
        },
        _otp.default.luoji,
        logicText,
      ),
    /*#__PURE__*/ _react.default.createElement(_referenceTree.default, {
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
var _default = RuleTreeComponent;
exports.default = _default;
