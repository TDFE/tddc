"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedMenuInfo = exports.getParents = exports.getActiveMenu = exports.formatter = exports.formatLevel2Menu = exports.findMenuInfoByPath = void 0;
exports.getStrLength = getStrLength;
exports.traverseTree = exports.safeParseJSON = exports.openInNewTab = exports.isNewTabMenu = exports.isGroupMenu = exports.hasLevel3 = exports.hasLevel2 = void 0;
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var isGroupMenu = function isGroupMenu(menu) {
  return (menu === null || menu === void 0 ? void 0 : menu.children) && !(menu === null || menu === void 0 ? void 0 : menu.path);
};
exports.isGroupMenu = isGroupMenu;
var getSelectedMenuInfo = function getSelectedMenuInfo(selectedKey) {
  var menus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var subMenu;
  var menu;
  var parentMenus = [];
  if (selectedKey) {
    traverseTree(menus, function (node, pnode, pnodes) {
      if (!isGroupMenu(node) && node.code === selectedKey) {
        subMenu = node;
        menu = pnode;
        parentMenus = pnodes;
        return false;
      }
    });
  } else {
    // 默认找到第一个菜单项
    traverseTree(menus, function (node, pnode, pnodes) {
      if (!isGroupMenu(node)) {
        subMenu = node;
        menu = pnode;
        parentMenus = pnodes;
        return false;
      }
    });
  }
  return {
    subMenu: subMenu,
    menu: menu,
    parentMenus: parentMenus
  };
};
exports.getSelectedMenuInfo = getSelectedMenuInfo;
var findMenuInfoByPath = function findMenuInfoByPath(menuTree, path, matchFunc) {
  var menu;
  var subMenu;
  var matchedSubMenu;
  var parentMenus;
  if (path) {
    traverseTree(menuTree, function (menu, pnode, pnodes) {
      if (!isGroupMenu(menu)) {
        var _menu;
        if (((_menu = menu) === null || _menu === void 0 ? void 0 : _menu.path) === path) {
          subMenu = menu;
          menu = pnode;
          parentMenus = pnodes;
          return false;
        }
        if (!matchedSubMenu && matchFunc && matchFunc(menu)) {
          matchedSubMenu = menu;
          menu = pnode;
          parentMenus = pnodes;
        }
      }
    });
    return {
      subMenu: subMenu,
      matchedSubMenu: matchedSubMenu,
      menu: menu,
      parentMenus: parentMenus
    };
  }
  return {
    subMenu: subMenu,
    menu: menu,
    parentMenus: parentMenus
  };
};
exports.findMenuInfoByPath = findMenuInfoByPath;
var hasLevel3 = function hasLevel3(menus) {
  return menus === null || menus === void 0 ? void 0 : menus.some(function (menu) {
    var _menu$children;
    return menu === null || menu === void 0 ? void 0 : (_menu$children = menu.children) === null || _menu$children === void 0 ? void 0 : _menu$children.some(function (item) {
      var _item$children;
      return item === null || item === void 0 ? void 0 : (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.length;
    });
  });
};
exports.hasLevel3 = hasLevel3;
var hasLevel2 = function hasLevel2(menu) {
  var _menu$children2;
  return menu === null || menu === void 0 ? void 0 : (_menu$children2 = menu.children) === null || _menu$children2 === void 0 ? void 0 : _menu$children2.some(function (item) {
    var _item$children2;
    return item === null || item === void 0 ? void 0 : (_item$children2 = item.children) === null || _item$children2 === void 0 ? void 0 : _item$children2.length;
  });
};
exports.hasLevel2 = hasLevel2;
var isNewTabMenu = function isNewTabMenu(menu) {
  var _ref = menu || {},
    target = _ref.target,
    path = _ref.path;
  return target === '_blank' || /^http/i.test(path) && /blankType=newTarget/.test(path);
};
exports.isNewTabMenu = isNewTabMenu;
var openInNewTab = function openInNewTab(path) {
  window.open(path, '_blank');
};
exports.openInNewTab = openInNewTab;
var traverseTree = function traverseTree(treeData, callback, pnode) {
  var pnodes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  (treeData || []).every(function (node, index) {
    var result;
    if (callback) {
      result = callback(node, pnode, (pnodes === null || pnodes === void 0 ? void 0 : pnodes.length) ? pnodes : [pnode].filter(function (item) {
        return !!item;
      }), index);
    }

    // 回调函数返回false则终止遍历
    if (result !== false) {
      node && traverseTree(node.children || [], callback, node, [node].concat(_toConsumableArray(pnodes)));
    }
    return result !== false;
  });
  return treeData;
};

// 深度优先树遍历
exports.traverseTree = traverseTree;
var traverseDown = function traverseDown() {
  var trees = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var cb = arguments.length > 1 ? arguments[1] : undefined;
  var _iterator = _createForOfIteratorHelper(trees),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var tree = _step.value;
      if (cb(tree) === false) break;
      traverseDown(tree.children, cb);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

// 获取匹配的菜单
var getActiveMenu = function getActiveMenu(menus, pathname) {
  var menu;
  traverseDown(menus, function (item) {
    // 路径完全匹配
    if (pathname.startsWith(item.path)) {
      menu = item;
      return false;
    }
  });
  return menu;
};

// 获取选中的菜单列表
exports.getActiveMenu = getActiveMenu;
var getParents = function getParents(menu) {
  var arr = [];
  var m = menu;
  while (m) {
    arr.push(m.code);
    m = m.parent;
  }
  return arr.reverse();
};
exports.getParents = getParents;
var formatter = function formatter() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var parent = arguments.length > 1 ? arguments[1] : undefined;
  data.forEach(function (data, index) {
    data.parent = parent;
    formatter(data.children, data);
  });
  return data;
};
exports.formatter = formatter;
var safeParseJSON = function safeParseJSON(str, defaultObj) {
  var result;
  try {
    result = JSON.parse(str);
  } catch (err) {
    console.warn('json parse error:', err);
    result = typeof defaultObj === 'undefined' ? str : defaultObj;
  }
  return result || defaultObj;
};
exports.safeParseJSON = safeParseJSON;
var formatLevel2Menu = function formatLevel2Menu() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return treeData === null || treeData === void 0 ? void 0 : treeData.reduce(function (pre, cur) {
    pre = pre.concat(cur.children || []);
    return pre;
  }, []);
};
exports.formatLevel2Menu = formatLevel2Menu;
function getStrLength(str) {
  // 先把中文替换成两个字节的英文，再计算长度
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}