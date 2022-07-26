"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceDrawer = void 0;

require("antd/lib/drawer/style");

var _drawer = _interopRequireDefault(require("antd/lib/drawer"));

require("antd/lib/spin/style");

var _spin = _interopRequireDefault(require("antd/lib/spin"));

require("antd/lib/tooltip/style");

var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));

require("antd/lib/message/style");

var _message2 = _interopRequireDefault(require("antd/lib/message"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReferenceInfo = require("../ReferenceInfo");

require("./index.less");

var _excluded = ["fetchReference", "data", "orgMap", "appList", "title", "visible", "onClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ReferenceDrawer = function ReferenceDrawer(props) {
  var fetchReference = props.fetchReference,
      _props$data = props.data,
      data = _props$data === void 0 ? null : _props$data,
      _props$orgMap = props.orgMap,
      orgMap = _props$orgMap === void 0 ? {} : _props$orgMap,
      _props$appList = props.appList,
      appList = _props$appList === void 0 ? [] : _props$appList,
      title = props.title,
      visible = props.visible,
      onClose = props.onClose,
      rest = _objectWithoutProperties(props, _excluded);

  var _useState = (0, _react.useState)(data),
      _useState2 = _slicedToArray(_useState, 2),
      referenceData = _useState2[0],
      setReferenceData = _useState2[1];

  var _useState3 = (0, _react.useState)(!data),
      _useState4 = _slicedToArray(_useState3, 2),
      referenceLoad = _useState4[0],
      setReferenceLoad = _useState4[1];

  (0, _react.useEffect)(function () {
    if (visible && fetchReference) {
      fetchReference().then(function (res) {
        if ((res === null || res === void 0 ? void 0 : res.success) && (res === null || res === void 0 ? void 0 : res.data)) {
          setReferenceData((res === null || res === void 0 ? void 0 : res.data) || []);
        }

        if (!(res === null || res === void 0 ? void 0 : res.success)) {
          _message2.default.error(res.message || '查询引用关系失败');
        }
      }).finally(function () {
        setReferenceLoad(false);
      });
    }
  }, [visible, fetchReference]);
  return /*#__PURE__*/_react.default.createElement(_drawer.default, _extends({
    className: "reference-drawer",
    width: 650,
    title: /*#__PURE__*/_react.default.createElement(_tooltip.default, {
      title: title
    }, title || ''),
    onClose: onClose,
    visible: visible
  }, rest), referenceLoad && /*#__PURE__*/_react.default.createElement(_spin.default, {
    className: "globalSpin",
    tip: "\u67E5\u8BE2\u4E2D..."
  }), !referenceLoad && /*#__PURE__*/_react.default.createElement("div", {
    className: "drawer-reference-body"
  }, /*#__PURE__*/_react.default.createElement(_ReferenceInfo.ReferenceInfo, {
    referenceData: referenceData || [],
    appList: appList || [],
    orgMap: orgMap || {},
    unmountHandle: onClose
  })));
};

exports.ReferenceDrawer = ReferenceDrawer;
ReferenceDrawer.propTypes = {
  title: _propTypes.default.string,
  data: _propTypes.default.array,
  visible: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  fetchReference: _propTypes.default.func,
  orgMap: _propTypes.default.object,
  appList: _propTypes.default.array
};
ReferenceDrawer.defaultProps = {
  title: '',
  data: null,
  visible: false,
  orgMap: {},
  appList: []
};