"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/lib/message/style");
var _message2 = _interopRequireDefault(require("antd/lib/message"));
var _libService = _interopRequireDefault(require("lib-service"));
var _utils = require("../utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = (0, _libService.default)({
  baseUrl: '/bridgeApi',
  dataType: 'formdata',
  headers: (0, _utils.getHeader)(),
  401: function _(res) {
    (0, _utils.goToLogin)();
  },
  403: function _(res) {
    _message2.default.warn("\u3010403\u3011".concat(res.message || res.statusText));
  },
  onError: function onError(err) {
    _message2.default.error(err && err.message || '未知错误');
  }
});
exports.default = _default;