"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayoutPageTitle = exports.getHeader = exports.formatOrgApp = exports.formatAppList = void 0;
exports.getStrLength = getStrLength;
exports.traverseTree = exports.rsaPwd = exports.openInNewTab = exports.isNewTabMenu = exports.isJSON = exports.goToLogin = exports.getSubAppsFromMenus = void 0;

var _jsencrypt = _interopRequireDefault(require("jsencrypt"));

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var pubKey = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNpMKIVmt0u5lx62tRD1O/15EyNLN0lNi3++ytnvLalkQNSrrqU2w3uD5NwdVE/v4OrDznTpBdTl6N1ryXAILU5GDu0bLATC46RKxDlH52LIvaRBU7BZkEGqllEqRJFmwtvtNCVeZD6ekJWc67MLUh4LNa1yMQ9V6Zsf64uY2lgwIDAQAB';

var rsaPwd = function rsaPwd(pwd) {
  var encrypt = new _jsencrypt.default();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(pwd); // 加密
};

exports.rsaPwd = rsaPwd;

var goToLogin = function goToLogin() {
  if (window.isInLightBox) {
    window.location.href = '/user/login';
  }
};

exports.goToLogin = goToLogin;

var getHeader = function getHeader() {
  return {
    'X-Cf-Random': sessionStorage.getItem('_csrf_')
  };
};

exports.getHeader = getHeader;

function getStrLength(str) {
  // 先把中文替换成两个字节的英文，再计算长度
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}

var isNewTabMenu = function isNewTabMenu(menu) {
  var _ref = menu || {},
      target = _ref.target,
      path = _ref.path;

  return target === '_blank' || /^http/i.test(path) && /blankType=newTarget/.test(path);
};

exports.isNewTabMenu = isNewTabMenu;

var openInNewTab = function openInNewTab(menu) {
  window.open(menu === null || menu === void 0 ? void 0 : menu.path, '_blank');
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

    if (result !== false) {
      node && traverseTree(node.children || [], callback, node, [node].concat(_toConsumableArray(pnodes)));
    }

    return result !== false;
  });
  return treeData;
};

exports.traverseTree = traverseTree;

var isJSON = function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str);

      if (_typeof(obj) === 'object' && obj) {
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }
};

exports.isJSON = isJSON;

var formatAppList = function formatAppList(apps) {
  return [{
    key: '',
    name: '全部渠道'
  }].concat(_toConsumableArray((apps || []).map(function (item) {
    return _objectSpread(_objectSpread({}, item), {}, {
      key: item.name,
      name: item.displayName
    });
  })));
};

exports.formatAppList = formatAppList;

var formatOrgApp = function formatOrgApp(orgGroup) {
  var apps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var orgUuidMap = {},
      orgCodeMap = {},
      appMap = {};
  var orgList = traverseTree([(0, _lodash.cloneDeep)(orgGroup)], function (item) {
    item.title = item.name;
    item.value = item.code;
    item.key = item.code;
    orgCodeMap[item.code] = item;
    orgUuidMap[item.uuid] = _objectSpread(_objectSpread({}, item), {}, {
      children: undefined
    });
    return item;
  });
  var orgUuidTree = traverseTree([(0, _lodash.cloneDeep)(orgGroup)], function (item) {
    item.title = item.name;
    item.value = item.uuid;
    item.key = item.uuid;
    return item;
  }); // 用户下有权限的全渠道

  var appList = [{
    key: '',
    name: '全部渠道'
  }].concat(apps.map(function (app) {
    appMap[app.name] = app.displayName;
    return {
      key: app.name,
      name: app.displayName
    };
  }));
  var allTempObj = {
    name: '全部渠道',
    key: ''
  };
  var currentApp = allTempObj;

  if (localStorage.hasOwnProperty('currentApp_new')) {
    // 缓存中是否存在currentApp
    var currentAppObjStr = localStorage.getItem('currentApp_new');

    if (currentAppObjStr && isJSON(currentAppObjStr)) {
      // 存在的currentApp是否是标准JSON
      var currentAppJson = JSON.parse(currentAppObjStr);

      if (currentAppJson.name && currentAppJson.key) {
        // 判断currentApp是否是标准格式
        currentApp = currentAppJson;
      }

      if (currentAppJson.name && currentAppJson.dName) {
        // 判断currentApp是否是标准格式
        currentApp = {
          key: currentAppJson.name,
          name: currentAppJson.dName
        };
      }
    } else {
      currentApp = allTempObj;
    }
  } else {
    currentApp = allTempObj;
  }

  return {
    orgList: orgList,
    orgUuidTree: orgUuidTree,
    orgUuidMap: orgUuidMap,
    orgCodeMap: orgCodeMap,
    currentApp: currentApp,
    appList: appList,
    appMap: appMap
  };
};

exports.formatOrgApp = formatOrgApp;

var getSubAppsFromMenus = function getSubAppsFromMenus(menus) {
  var subapps = [];

  var walkThroughMenus = function walkThroughMenus(menus) {
    (menus || []).forEach(function (menu) {
      var path = menu.path,
          children = menu.children;

      if (path) {
        var appKey = !/^http/i.test(path) ? path.match(/\/([^\/]+)/)[1] : '';

        if (appKey) {
          subapps.push(appKey);
        }
      }

      walkThroughMenus(children);
    });
  };

  walkThroughMenus(menus);
  return (0, _lodash.uniq)(subapps);
}; // 获取页面标题


exports.getSubAppsFromMenus = getSubAppsFromMenus;

var getLayoutPageTitle = function getLayoutPageTitle(menuTree) {
  var title;
  var pathname = window.location.pathname;

  var changeTitle = function changeTitle() {
    var taskList = JSON.parse(JSON.stringify(menuTree));

    while (taskList.length > 0) {
      _toConsumableArray(taskList).forEach(function (item) {
        taskList.shift();

        if (item.path) {
          if (item.path.includes(pathname)) {
            title = item['menuName'];
          }
        }

        if (item.children) {
          taskList.push.apply(taskList, _toConsumableArray(item.children));
        }
      });
    }
  };

  changeTitle();
  return title;
};

exports.getLayoutPageTitle = getLayoutPageTitle;