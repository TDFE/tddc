'use strict';

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
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/row/style');
var _row = _interopRequireDefault(require('antd/lib/row'));
require('antd/lib/popover/style');
var _popover = _interopRequireDefault(require('antd/lib/popover'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/input/style');
var _input = _interopRequireDefault(require('antd/lib/input'));
require('antd/lib/col/style');
var _col = _interopRequireDefault(require('antd/lib/col'));
var _react = _interopRequireWildcard(require('react'));
var _locale = _interopRequireDefault(require('../locale.js'));
require('./index.less');
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
var CustomRule = function CustomRule(props) {
  var onChange = props.onChange,
    disabled = props.disabled,
    currentCondition = props.currentCondition;
  var customLogicOperator = currentCondition.customLogicOperator,
    logicOperator = currentCondition.logicOperator,
    _currentCondition$chi = currentCondition.children,
    children = _currentCondition$chi === void 0 ? [] : _currentCondition$chi;
  var len = (children === null || children === void 0 ? void 0 : children.length) || 0;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    error = _useState2[0],
    setError = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMessage = _useState4[0],
    setErrorMessage = _useState4[1];
  var isCustom = logicOperator === '##';
  (0, _react.useEffect)(
    function () {
      if (logicOperator === '##') {
        // let { currentCondition } = props;
        // let { customLogicOperator } = currentCondition;
        checkExpression(customLogicOperator);
      } else if (logicOperator === '!&&' || logicOperator === '!||') {
        var text = translationStr();
        var arr = children.map(function (i, index) {
          return '!' + (index + 1);
        }); // 加 ！表示 非运算
        var link = logicOperator === '!&&' ? '|' : '&';
        var IFLogicText = arr.join(link);
        setErrorMessage(null);
      } else {
        setErrorMessage(null);
      }
    },
    [logicOperator, len],
  );
  var evalFunction = function evalFunction(obj) {
    return Function('return (' + obj + ')')();
  };
  var translationStr = function translationStr() {
    var arr = children.map(function (i, index) {
      return index + 1;
    });
    var link = '';
    switch (logicOperator) {
      case '&&':
        link = '&';
        break;
      case '||':
        link = '|';
        break;
      case '!&&':
        link = '&';
        break;
      case '!||':
        link = '|';
        break;
      default:
        null;
        break;
    }
    var checkedStr = arr.join(link);
    return checkedStr;
  };
  var checkExpression = function checkExpression(customLogicOperator) {
    // let { currentCondition } = props;
    // let { customLogicOperator } = currentCondition;
    var hitLogicHasEmpty = false;
    var hitLogicError = false;
    if (customLogicOperator) {
      var _len = children.length;
      var checkedStr = customLogicOperator;

      // 排除一些特殊的能进行eval计算的字符
      if (!/^[\&\|\(\)1-9\d]+$/.test(checkedStr)) {
        hitLogicError = true;
      }

      // 获取表达式所有的数字 并去重
      var numArr = checkedStr.match(/[\d]{1,3}/g, '');
      numArr = Array.from(new Set(numArr));
      if (Math.max.apply(Math, _toConsumableArray(numArr)) <= 0) hitLogicError = true;
      if (Math.max.apply(Math, _toConsumableArray(numArr)) > _len) {
        hitLogicError = true;
      }
      // 去除字符串内多余空格  将& 替换为 &&，| 替换为 ||
      checkedStr = checkedStr.replace(/\s*/g, '').replace(/&/g, '&&').replace(/\|/g, '||');
      try {
        evalFunction(checkedStr);
      } catch (error) {
        hitLogicError = true;
      }
    } else {
      // hitLogicHasEmpty = true;
    }
    if (hitLogicHasEmpty) {
      setErrorMessage(_locale.default.customrule.index.mingZhongLuoJiWei);
      setError(true);
      return false;
    }
    if (hitLogicError) {
      setErrorMessage(_locale.default.customrule.index.mingZhongLuoJiGe);
      setError(true);
      return false;
    }
    setError(false);
    setErrorMessage(null);
    return true;
  };
  var expressionOnchange = function expressionOnchange(e) {
    onChange(e.target.value, checkExpression(e === null || e === void 0 ? void 0 : e.target.value));
  };
  var value = !isCustom ? translationStr() : customLogicOperator || null;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'custom-condition-item add-condition',
        style: {
          marginTop: '20px',
        },
      },
      /*#__PURE__*/ _react.default.createElement(
        _row.default,
        {
          gutter: 10,
        },
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 3,
            className: 'basic-info-title',
          },
          _locale.default.customrule.index.mingZhongLuoJi,
        ),
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 10,
            className: 'add-condition-handle',
          },
          /*#__PURE__*/ _react.default.createElement(_input.default, {
            value: value,
            onChange: expressionOnchange,
            disabled: disabled && !isCustom,
          }),
        ),
        /*#__PURE__*/ _react.default.createElement(
          _col.default,
          {
            span: 1,
          },
          /*#__PURE__*/ _react.default.createElement(
            _popover.default,
            {
              popupClassName: 'custom-pop-tip',
              placement: 'top',
              title: _locale.default.customrule.index.luoJiPanDuanFu,
              content: /*#__PURE__*/ _react.default.createElement(
                'div',
                null,
                _locale.default.customrule.index.duoGeTiaoJianJun,
                /*#__PURE__*/ _react.default.createElement('br', null),
                _locale.default.customrule.index.duoGeTiaoJianRen,
                /*#__PURE__*/ _react.default.createElement('br', null),
                _locale.default.customrule.index.guiZeZhiXingShi,
              ),
            },
            /*#__PURE__*/ _react.default.createElement(_icon.default, {
              type: 'question-circle-o',
              className: 'param-tip-icon',
            }),
          ),
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _row.default,
        null,
        /*#__PURE__*/ _react.default.createElement(_col.default, {
          span: 3,
          style: {
            marginRight: 15,
          },
        }),
        error &&
          /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              style: {
                color: 'red',
              },
            },
            errorMessage,
          ),
      ),
    ),
  );
};
var _default = CustomRule;
exports.default = _default;
