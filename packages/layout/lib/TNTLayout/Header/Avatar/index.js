"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _deleteAllCookies = _interopRequireDefault(require("delete-all-cookies"));

var _lodash = require("lodash");

require("./index.less");

var _images = _interopRequireDefault(require("../../images"));

var _Language = _interopRequireDefault(require("../Language"));

var _MenuLevel = _interopRequireDefault(require("../MenuLevel"));

var _Theme = _interopRequireDefault(require("../Theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserInfoContent = function UserInfoContent(props) {
  var userInfo = props.userInfo,
      _props$config = props.config,
      config = _props$config === void 0 ? {} : _props$config,
      onLogout = props.onLogout,
      _props$onChangePasswo = props.onChangePassword,
      onChangePassword = _props$onChangePasswo === void 0 ? function () {
    return true;
  } : _props$onChangePasswo,
      size = props.size,
      _props$onPersonalSett = props.onPersonalSetting,
      onPersonalSetting = _props$onPersonalSett === void 0 ? function () {
    return true;
  } : _props$onPersonalSett,
      onLanguageChange = props.onLanguageChange,
      onThemeChange = props.onThemeChange,
      supportLevelChange = props.supportLevelChange,
      onMenuLevelChange = props.onMenuLevelChange;

  var _ref = config || {},
      _ref$language = _ref.language,
      language = _ref$language === void 0 ? false : _ref$language;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info-setting-wrap"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "user-info-body-username"
  }, userInfo.userName || '暂无昵称', /*#__PURE__*/_react.default.createElement("span", {
    className: "user-info-body-account"
  }, userInfo.account)), language && /*#__PURE__*/_react.default.createElement(_Language.default, {
    size: size,
    onLanguageChange: onLanguageChange
  }), /*#__PURE__*/_react.default.createElement(_Theme.default, {
    onThemeChange: onThemeChange
  }), supportLevelChange && /*#__PURE__*/_react.default.createElement(_MenuLevel.default, {
    onMenuLevelChange: onMenuLevelChange
  })), /*#__PURE__*/_react.default.createElement(_antd.Row, {
    className: "user-info-footer",
    type: "flex",
    justify: "space-between",
    align: "middle"
  }, /*#__PURE__*/_react.default.createElement("a", {
    onClick: onPersonalSetting,
    href: "/bridge/userCenter?currentTab=1"
  }, "\u4E2A\u4EBA\u8BBE\u7F6E"), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    type: "vertical"
  }), /*#__PURE__*/_react.default.createElement("a", {
    onClick: onChangePassword,
    href: "/bridge/userCenter?currentTab=2"
  }, "\u4FEE\u6539\u5BC6\u7801"), /*#__PURE__*/_react.default.createElement(_antd.Divider, {
    type: "vertical"
  }), /*#__PURE__*/_react.default.createElement("a", {
    className: "user-info-footer-signout",
    onClick: function onClick() {
      if (onLogout) {
        onLogout();
        (0, _deleteAllCookies.default)(window)();
      } else {
        (0, _deleteAllCookies.default)(window)();
        window.location.href = "/user/login?callbackUrl=".concat(window.encodeURI(location.href));
      }
    }
  }, "\u9000\u51FA\u767B\u5F55")));
};

var _default = function _default(props) {
  var _images$empty2;

  var _props$userInfo = props.userInfo,
      userInfo = _props$userInfo === void 0 ? {} : _props$userInfo;
  var avatar = userInfo.avatar;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tnt-layout-header-avatar"
  }, /*#__PURE__*/_react.default.createElement(_antd.Popover, {
    popupClassName: "tnt-layout-header-avatar-popover",
    placement: "bottomRight",
    title: null,
    content: /*#__PURE__*/_react.default.createElement(UserInfoContent, props),
    trigger: "click"
  }, avatar ? /*#__PURE__*/_react.default.createElement("img", {
    src: avatar.indexOf('base64') > 0 ? avatar : (0, _lodash.get)(_images.default[avatar], 'default', _images.default[avatar]),
    onError: function onError(e) {
      var _images$empty;

      e.target.onerror = null;
      e.target.src = ((_images$empty = _images.default.empty) === null || _images$empty === void 0 ? void 0 : _images$empty.default) || _images.default.empty;
    }
  }) : /*#__PURE__*/_react.default.createElement("img", {
    src: ((_images$empty2 = _images.default.empty) === null || _images$empty2 === void 0 ? void 0 : _images$empty2.default) || _images.default.empty
  })));
};

exports.default = _default;