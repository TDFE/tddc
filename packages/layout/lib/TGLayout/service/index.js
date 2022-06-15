"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createServices = _interopRequireDefault(require("./createServices"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _createServices.default)({
  getUserInfo: {
    url: '/userCenter/getUserInfo'
  },
  getMenuTree: {
    url: '/user/menuTree'
  },
  getAppByOrgId: {
    url: '/user/app'
  },
  getOrgNetworkByOrgId: {
    url: '/org/lastOrg'
  },
  signOut: {
    url: '/user/logout',
    method: 'POST',
    dataType: 'x-www-form-urlencoded'
  },
  getAuthCode: {
    url: '/user/getAuthCode',
    method: 'POST',
    dataType: 'x-www-form-urlencoded'
  },
  userLogin: {
    url: '/user/login',
    method: 'POST',
    dataType: 'x-www-form-urlencoded'
  }
});

exports.default = _default;