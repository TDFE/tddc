"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/lib/row/style");
var _row = _interopRequireDefault(require("antd/lib/row"));
var _react = _interopRequireWildcard(require("react"));
require("./index.less");
var _storage = require("../../storage");
var _Context = require("../../Context");
var _this = void 0;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var menuLevelList = [{
  value: '2',
  label: '二级导航'
}, {
  value: '3',
  label: '三级导航'
}];
var _default = function _default(props) {
  var onMenuLevelChange = props.onMenuLevelChange;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    menuLevel = _useContext.menuLevel,
    handleMenuLevel = _useContext.handleMenuLevel;
  var changeMenuLevel = function changeMenuLevel(v) {
    (0, _storage.setMenuLevelStore)(v);
    handleMenuLevel(v);
    onMenuLevelChange && onMenuLevelChange(v);
  };
  return /*#__PURE__*/_react.default.createElement(_row.default, {
    type: "flex",
    className: "user-info-body-menu-row"
  }, menuLevelList.map(function (_ref) {
    var value = _ref.value,
      label = _ref.label;
    var isChecked = menuLevel === value;
    return /*#__PURE__*/_react.default.createElement(_row.default, {
      type: "flex",
      align: "middle",
      justify: "center",
      className: "menu menu-".concat(value, " ").concat(isChecked ? 'checked' : ''),
      key: value,
      onClick: changeMenuLevel.bind(_this, value)
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "menu-icon"
    }), label, isChecked && /*#__PURE__*/_react.default.createElement("span", {
      className: "icon-checked-wrap"
    }));
  }));
};
exports.default = _default;