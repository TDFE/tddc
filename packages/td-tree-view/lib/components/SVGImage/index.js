"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var SVGImage = function SVGImage(_ref) {
  var text = _ref.text,
    bgColor = _ref.bgColor;
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: "22px",
    height: "22px",
    viewBox: "0 0 22 22",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    id: "shape",
    fill: bgColor,
    cx: "11",
    cy: "11",
    r: "11"
  }), /*#__PURE__*/_react.default.createElement("text", {
    fontFamily: "PingFangSC-Regular, PingFang SC",
    fontSize: "12",
    fontWeight: "normal",
    fill: "#FFFFFF"
  }, /*#__PURE__*/_react.default.createElement("tspan", {
    x: "5",
    y: "15"
  }, text)));
};
var _default = exports.default = SVGImage;