"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeContext = exports.AuthContext = void 0;

var _react = require("react");

var ThemeContext = /*#__PURE__*/(0, _react.createContext)({
  theme: 'default',
  language: 'cn',
  menuLevel: '3',
  handleTheme: function handleTheme() {},
  handleLanguage: function handleLanguage() {},
  handleMenuLevel: function handleMenuLevel() {}
});
exports.ThemeContext = ThemeContext;
var AuthContext = /*#__PURE__*/(0, _react.createContext)(function () {
  return true;
});
exports.AuthContext = AuthContext;