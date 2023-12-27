'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
require('./index.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _default = (exports.default = function _default(props) {
  var _props$node = props.node,
    node = _props$node === void 0 ? {} : _props$node;
  var data = node.data;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'common',
    },
    (data === null || data === void 0 ? void 0 : data.nodeName) || '默认节点',
  );
});
