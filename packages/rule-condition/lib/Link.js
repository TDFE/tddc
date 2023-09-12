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
var _react = _interopRequireWildcard(require('react'));
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
var _default = function _default(props) {
  var conditionArr = props.conditionArr,
    container = props.container;
  var _useState = (0, _react.useState)({
      from: {
        x: 0,
        y: 0,
      },
      to: {
        x: 0,
        y: 0,
      },
    }),
    _useState2 = _slicedToArray(_useState, 2),
    position = _useState2[0],
    setPositions = _useState2[1];
  var from = position.from,
    to = position.to;
  var linkFrom;
  var linkTo;
  var parent;
  var bulidPositons = function bulidPositons(fromDom, toDom, parentDom) {
    // 设置 组 的各个子条件的坐标
    var conditionArr = props.conditionArr;
    // 线起点
    fromDom = fromDom || document.querySelector('.link-from' + conditionArr[0]);
    // 线终点
    toDom = toDom || document.querySelector('.link-to' + conditionArr[0] + conditionArr[1]);
    // 父元素
    parentDom = parentDom || document.querySelector('.group-index' + conditionArr[0]);
    if (!!fromDom && !!toDom) {
      var toPosition = {
        x: toDom.getBoundingClientRect().x - parentDom.getBoundingClientRect().x + 5,
        // 5 为padding
        y: toDom.getBoundingClientRect().y - parentDom.getBoundingClientRect().y,
      };
      var fromPosition = {
        x:
          fromDom.getBoundingClientRect().x -
          parentDom.getBoundingClientRect().x +
          fromDom.getBoundingClientRect().width -
          5,
        // 5 为padding
        y: fromDom.getBoundingClientRect().y - parentDom.getBoundingClientRect().y,
      };
      setPositions({
        from: fromPosition,
        to: toPosition,
      });
    }
  };
  (0, _react.useEffect)(
    function () {
      if (container && conditionArr.length) {
        // 线起点
        linkFrom = linkFrom || document.querySelector('.link-from' + conditionArr[0]);
        // 线终点
        linkTo = linkTo || document.querySelector('.link-to' + conditionArr[0] + conditionArr[1]);
        // 父元素
        parent = parent || document.querySelector('.group-index' + conditionArr[0]);

        //建立坐标
        bulidPositons(linkFrom, linkTo, parent);
        if (conditionArr.length > 1) {
          var observer = new ResizeObserver(function () {
            return bulidPositons(linkFrom, linkTo, parent);
          });
          observer.observe(container);
        }
      }
    },
    [container, conditionArr],
  );
  var drawLine = function drawLine(x1, y1, x2, y2) {
    var isH = isHorizontal(x1, x2);
    var width = isH ? x2 - x1 : Math.abs(y1 - y2);
    var highlight = props.highlight;
    var style = {
      position: 'absolute',
      height: isH ? 0 : width,
      width: isH ? width : 0,
      left: x1,
      top: (isH ? y1 : Math.min(y1, y2)) + 14,
      zIndex: highlight ? 1 : 0,
      borderBottom: '1px solid #c7d0d9',
      borderLeft: '1px  solid  #c7d0d9',
    };
    var clsNames = 'link ' + (highlight ? ['link-highlight'] : '');
    return /*#__PURE__*/ _react.default.createElement('div', {
      className: clsNames,
      style: style,
      'data-key': genKey([x1, y1, x2, y2]),
      key: genKey([x1, y1, x2, y2]),
    });
  };
  var isHorizontal = function isHorizontal(x1, x2) {
    if (x1 === x2) {
      return false;
    }
    return true;
  };
  var genKey = function genKey(value) {
    if (value === void 0) {
      value = [];
    }
    var _value = value;
    var x1 = _value[0];
    var y1 = _value[1];
    var x2 = _value[2];
    var y2 = _value[3];
    return ',' + x1 + ',' + y1 + '-' + x2 + ',' + y2;
  };
  var x1 = from.x,
    y1 = from.y;
  var x2 = to.x,
    y2 = to.y;
  var lines = [];
  console.log(Math.abs(y1 - y2), 'abs');
  if (x1 === x2 || y1 === y2 || Math.abs(y1 - y2) < 1) {
    // 一条直线
    lines = [drawLine(x1, y1, x2, y2)];
  } else {
    // 一条折线，找到转折点，左(x1,y1) -> 右(x2,y2)
    var xm = (x1 + x2) / 2;
    var ym = y1;
    var xn = xm;
    var yn = y2;
    lines.push(drawLine(x1, y1, xm, ym));
    lines.push(drawLine(xm, ym, xn, yn));
    lines.push(drawLine(xn, yn, x2, y2));
  }
  return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, lines);
};
exports.default = _default;
