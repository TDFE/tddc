function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
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
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
import { useState, useEffect } from 'react';
import { getColumnWidth } from './utils';
var useAdjustAlign = function useAdjustAlign(widthList, containerRef, initColumnLen) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    colomns = _useState2[0],
    setColomns = _useState2[1];
  // 容器宽度
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    containerWidth = _useState4[0],
    setContainerWidth = _useState4[1];
  useEffect(
    function () {
      var dom = containerRef.current;
      var getContainerWidth = function getContainerWidth() {
        var _containerRef$current, _containerRef$current2;
        var containerWidth =
          (_containerRef$current = containerRef.current) === null ||
          _containerRef$current === void 0
            ? void 0
            : (_containerRef$current2 = _containerRef$current.getBoundingClientRect()) === null ||
              _containerRef$current2 === void 0
            ? void 0
            : _containerRef$current2.width;
        setContainerWidth(containerWidth);
      };
      if (dom) {
        var _dom$getBoundingClien;
        var _containerWidth =
          dom === null || dom === void 0
            ? void 0
            : (_dom$getBoundingClien = dom.getBoundingClientRect()) === null ||
              _dom$getBoundingClien === void 0
            ? void 0
            : _dom$getBoundingClien.width;
        console.log(_containerWidth, 'containerWidth');
        setContainerWidth(_containerWidth);
      }
      window.addEventListener('resize', getContainerWidth, false);
      return function () {
        window.removeEventListener('resize', getContainerWidth, false);
      };
    },
    [containerRef],
  );
  useEffect(
    function () {
      // 计算出每一列的宽度以及列数
      var column = getColumnWidth(widthList, initColumnLen, containerWidth);
      setColomns(column);
    },
    [widthList, containerRef, initColumnLen, containerWidth],
  );
  return colomns;
};
export default useAdjustAlign;
