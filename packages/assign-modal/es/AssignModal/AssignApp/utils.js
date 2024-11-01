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
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
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
function _iterableToArray(r) {
  if (('undefined' != typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

// 遍历机构树 添加 path属性 （上级机构到子机构的路径）
var _dataFormat = function dataFormat(root, cb) {
  if (!root) {
    return;
  }
  var path = [].concat(_toConsumableArray(parent), [root.code]);
  root.path = _toConsumableArray(path);
  root.path = _toConsumableArray(path);
  root.show = true;
  cb && cb(root.key, root);
  for (var i = 0; i < root.children.length; i++) {
    _dataFormat(root.children[i], path, cb);
  }
};

// 遍历寻找 当前规则集所属机构
export { _dataFormat as dataFormat };
export var findSameCodePath = function findSameCodePath(root, code) {
  var res = {};
  var _dfs = function dfs(root, code) {
    if (!root) {
      return;
    }
    if (root.code === code) res = root;
    for (var i = 0; i < root.children.length; i++) {
      _dfs(root.children[i], code);
    }
  };
  _dfs(root, code);
  return res.path || [];
};

// 遍历输出 orgCode；
export var preorder = function preorder(root, cb) {
  var isAddPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var res = [];
  var _dfs2 = function dfs(root) {
    var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var cb = arguments.length > 3 ? arguments[3] : undefined;
    if (!root) {
      return;
    }
    var path = [];
    if (isAddPath) {
      path = [].concat(_toConsumableArray(parent), [root.code]);
      root.path = _toConsumableArray(path);
      root.path = _toConsumableArray(path);
      root.show = true;
    }
    res.push(root.code || root.key);
    cb && cb(root.key, root);
    for (
      var i = 0;
      i <
      (root === null || root === void 0
        ? void 0
        : (_root$children = root.children) === null || _root$children === void 0
        ? void 0
        : _root$children.length);
      i++
    ) {
      var _root$children;
      _dfs2(root.children[i], res, path, cb);
    }
  };
  _dfs2(root, res, [], cb);
  return res;
};
export var mergeAndDeduplicate = function mergeAndDeduplicate(arr1, arr2) {
  // 合并两个数组
  var combined = [].concat(_toConsumableArray(arr1), _toConsumableArray(arr2));

  // 用 Set 对象来追踪已经遇到过的元素
  var seen = new Set();

  // 使用 filter 方法去重并保持顺序
  var uniqueCombined = combined.filter(function (item) {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });
  return uniqueCombined;
};
export var doSearch = function doSearch() {
  var fileterKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var flattenTreeMap = arguments.length > 1 ? arguments[1] : undefined;
  var cb = arguments.length > 2 ? arguments[2] : undefined;
  var treeNodeArr = Object.keys(flattenTreeMap);
  var areadyHandled = [];
  for (var i = 0; i < treeNodeArr.length; i++) {
    var key = treeNodeArr[i];
    var node = flattenTreeMap[key];
    if (!fileterKeys) {
      flattenTreeMap[key].show = true;
    }
    var name = node.name,
      value = node.value,
      path = node.path;
    var filteredStr = name.toLowerCase() + value.toLowerCase();
    if (filteredStr.includes(fileterKeys.toLowerCase())) {
      path
        .filter(function (i) {
          return !areadyHandled.includes(i);
        })
        .map(function (i) {
          areadyHandled.push(i);
          flattenTreeMap[i].show = true;
        });
    } else {
      !areadyHandled.includes(key) && (flattenTreeMap[key].show = false);
    }
  }
  cb && cb();
};
export var useWindowHeight = function useWindowHeight(gap) {
  var _useState = useState(window.innerHeight - gap),
    _useState2 = _slicedToArray(_useState, 2),
    windowHeight = _useState2[0],
    setWindowHeight = _useState2[1];
  useEffect(
    function () {
      var handleResize = debounce(function () {
        setWindowHeight(window.innerHeight - gap);
      });
      window.addEventListener('resize', handleResize);
      // 清理事件监听器
      return function () {
        window.removeEventListener('resize', handleResize);
      };
    },
    [gap],
  );
  return windowHeight;
};
