"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

require("./index.less");

var _GlobalNavigation = _interopRequireDefault(require("../GlobalNavigation"));

var _Avatar = _interopRequireDefault(require("../Avatar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var _props$config = props.config;
  _props$config = _props$config === void 0 ? {} : _props$config;
  var _props$config$avatar = _props$config.avatar,
      avatar = _props$config$avatar === void 0 ? true : _props$config$avatar,
      _props$config$globalN = _props$config.globalNavigation,
      globalNavigation = _props$config$globalN === void 0 ? true : _props$config$globalN,
      menus = props.menus,
      headerRef = props.headerRef,
      extraHeaderActions = props.extraHeaderActions,
      AvatarCustom = props.AvatarCustom;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tnt-layout-header-actions"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "empty"
  }), extraHeaderActions, globalNavigation && /*#__PURE__*/_react.default.createElement(_GlobalNavigation.default, _extends({}, props, {
    headerRef: headerRef,
    menus: menus
  })), avatar && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    type: "vertical"
  }), AvatarCustom ? /*#__PURE__*/_react.default.createElement(AvatarCustom, _extends({}, props, {
    config: {
      theme: theme,
      language: language
    }
  })) : /*#__PURE__*/_react.default.createElement(_Avatar.default, props)));
};

exports.default = _default;