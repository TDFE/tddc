'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _MultiDimList = _interopRequireDefault(require('./MultiDimList'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _default = function _default(props) {
  var data = props.data,
    simpleCfgList = props.simpleCfgList;
  var _ref = data || {},
    property = _ref.property;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    property === 'multiDimList/customList' &&
      /*#__PURE__*/ _react.default.createElement(_MultiDimList.default, {
        currentParamInfo: data,
        simpleCfgList: simpleCfgList,
      }),
  );
};
exports.default = _default;
