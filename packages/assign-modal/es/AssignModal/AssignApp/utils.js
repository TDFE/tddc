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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
// 遍历机构树 添加 path属性 （上级机构到子机构的路径）
export var addPath = function addPath(root) {
  var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (!root) {
    return;
  }
  var path = [].concat(_toConsumableArray(parent), [root.code]);
  root.path = _toConsumableArray(path);
  for (var i = 0; i < root.children.length; i++) {
    addPath(root.children[i], path);
  }
};

// 遍历寻找 当前规则集所属机构
export var findSameCodePath = function findSameCodePath(orgList, code) {
  var loop = function loop(list, code) {
    for (var i = 0; i < list.length; i++) {
      var _root$children;
      var root = list[i];
      if (root.code === code) {
        return root;
      }
      if (
        ((_root$children = root.children) === null || _root$children === void 0
          ? void 0
          : _root$children.length) > 0
      ) {
        var _back = loop(root.children, code);
        if (_back) {
          return _back;
        }
      }
    }
    return false;
  };
  var back = loop(orgList, code);
  return (back === null || back === void 0 ? void 0 : back.path) || [];
};

// 遍历输出 orgCode；
export var preorder = function preorder(root) {
  var res = [];
  var dfs = function dfs(root) {
    var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    if (!root) {
      return;
    }
    res.push(root.code || root.key);
    for (var i = 0; i < root.children.length; i++) {
      dfs(root.children[i], res);
    }
  };
  dfs(root, res);
  return res;
};
