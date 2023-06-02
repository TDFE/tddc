"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _lodash = require("lodash");
var _classnames = _interopRequireDefault(require("classnames"));
require("./index.less");
var _Context = require("../../Context");
var _Icon = _interopRequireDefault(require("../../Icon"));
var _storage = require("../../storage");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var languages = [{
  value: 'cn',
  name: '中文'
}, {
  value: 'en',
  name: 'EN '
}];
var languagesMap = languages.reduce(function (acc, cur) {
  acc[cur.value] = cur;
  return acc;
}, {});
var _default = function _default(props) {
  var onLanguageChange = props.onLanguageChange,
    size = props.size;
  var large = size === 'large' ? 60 : 50;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    language = _useContext.language,
    handleLanguage = _useContext.handleLanguage;
  var switchLanguage = function switchLanguage() {
    var lang = language === 'cn' ? 'en' : 'cn';
    handleLanguage(lang);
    (0, _storage.setLanguageStore)(lang);
    onLanguageChange && onLanguageChange(lang);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('tnt-layout-header-language', "large".concat(large)),
    onClick: switchLanguage
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    type: "flag-".concat(language)
  }), /*#__PURE__*/_react.default.createElement("span", null, (0, _lodash.get)(languagesMap[language], 'name')));
};
exports.default = _default;