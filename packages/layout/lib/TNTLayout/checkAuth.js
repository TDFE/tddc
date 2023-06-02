"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _default = function _default(menus) {
  var getAuthMap = function getAuthMap() {
    var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var authMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return menus.reduce(function (acc, _ref) {
      var code = _ref.code,
        groupName = _ref.groupName,
        functionList = _ref.functionList,
        children = _ref.children;
      if (groupName) {
        return getAuthMap(children, acc);
      } else {
        acc[code] = acc[code] || {};
        acc[code] = (functionList || []).reduce(function (acc, curFunc) {
          acc[curFunc.code] = curFunc.hasPermission;
          return acc;
        }, acc[code]);
        return acc;
      }
    }, authMap);
  };
  var authMap = getAuthMap(menus);
  return function (menuCode, funCode) {
    return !!(0, _lodash.get)(authMap, "".concat(menuCode).concat(funCode ? ".".concat(funCode) : ''));
  };
};
exports.default = _default;