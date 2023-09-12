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
var _lodash = require('lodash');
var _utils = require('../utils');
var _store = require('../store');
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
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return { done: true };
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    },
  };
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
/*
 * @Descripttion: FormList
 * @Author: 郑泳健
 * @Date: 2023-03-06 18:42:08
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-09 21:53:21
 */
var List = function List(_ref) {
  var name = _ref.name,
    children = _ref.children;
  var maxRef = (0, _react.useRef)(-1);
  var _useContext = (0, _react.useContext)(_store.FormContext),
    form = _useContext.form,
    initialValues = _useContext.initialValues;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    dataLevel = _useState2[0],
    setDataLevel = _useState2[1];
  (0, _react.useEffect)(
    function () {
      var key = Array.isArray(name) ? (name === null || name === void 0 ? void 0 : name[0]) : name;
      if (form && form.dataLevel) {
        form.dataLevel[key] = dataLevel;
      }
    },
    [form, dataLevel, name],
  );
  /** 根据默认数值自动生成dataLevel */
  (0, _react.useEffect)(
    function () {
      var dataSource = initialValues;
      var attrs = (0, _utils.getNames)(name);
      var _iterator = _createForOfIteratorHelper(attrs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done; ) {
          var _dataSource;
          var key = _step.value;
          dataSource = ((_dataSource = dataSource) === null || _dataSource === void 0
            ? void 0
            : _dataSource[key]) || [{}];
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (Array.isArray(dataSource)) {
        var _level = dataSource.map(function (i, index) {
          return {
            key: index,
            name: ''.concat(attrs.join('.'), '.').concat(index),
          };
        });
        setDataLevel(_level);
        maxRef.current = dataSource.length - 1;
      }
    },
    [initialValues, name],
  );
  /** 新增一列 */
  var handleAdd = function handleAdd(index) {
    var tempDataLevel = (0, _lodash.cloneDeep)(dataLevel);
    maxRef.current++;
    var attrs = (0, _utils.getNames)(name);
    tempDataLevel.splice(index + 1, 0, {
      key: maxRef.current,
      name: ''
        .concat(attrs === null || attrs === void 0 ? void 0 : attrs.join('.'), '.')
        .concat(maxRef.current),
    });
    setDataLevel(tempDataLevel);
  };
  /** 删除一列 */
  var handleDel = function handleDel(index) {
    var temp = (0, _lodash.cloneDeep)(dataLevel);
    temp.splice(index, 1);
    setDataLevel(temp);
  };
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    children === null || children === void 0
      ? void 0
      : children(dataLevel, {
          add: handleAdd,
          remove: handleDel,
        }),
  );
};
// name 没有改变就不需要重复render
var _default = /*#__PURE__*/ (0, _react.memo)(List, function (nextProps, prevProps) {
  if ((0, _lodash.isEqual)(nextProps.name, prevProps.name) && !!prevProps.name) {
    return true;
  }
  return false;
});
exports.default = _default;
