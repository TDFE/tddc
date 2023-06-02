"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/lib/tooltip/style");
var _tooltip = _interopRequireDefault(require("antd/lib/tooltip"));
var _react = _interopRequireWildcard(require("react"));
require("./LeftBar.less");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _default = function _default(props) {
  var _ref = props || {},
    onDrop = _ref.onDrop,
    flowNodesDict = _ref.flowNodesDict,
    showType = _ref.showType;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    dragItem = _useState2[0],
    setDargItem = _useState2[1];
  var _useState3 = (0, _react.useState)(-990),
    _useState4 = _slicedToArray(_useState3, 2),
    pageX = _useState4[0],
    setPageX = _useState4[1];
  var _useState5 = (0, _react.useState)(-990),
    _useState6 = _slicedToArray(_useState5, 2),
    pageY = _useState6[0],
    setPageY = _useState6[1];
  var _ref2 = dragItem || {},
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? [] : _ref2$size;

  // mouseDown设置目标对象
  var onDrag = function onDrag(item) {
    setDargItem(item);
    setPageX(-9990);
    setPageY(-9990);
  };

  // 开始移动
  var mousemove = (0, _react.useCallback)(function (e) {
    setPageX(e.pageX);
    setPageY(e.pageY + (document.body.getBoundingClientRect().top || 0));
  }, [dragItem]);

  // 释放
  var mouseup = (0, _react.useCallback)(function (e) {
    // 有额外的drops事件用户自定义
    onDrop && onDrop(dragItem, e);
    setDargItem(null);
    window.document.removeEventListener('mousemove', mousemove);
    window.document.removeEventListener('mouseup', mouseup);
  }, [dragItem]);

  // 有目标对象 监听事件
  (0, _react.useEffect)(function () {
    if (dragItem) {
      window.document.addEventListener('mousemove', mousemove);
      window.document.addEventListener('mouseup', mouseup);
    }
  }, [dragItem]);
  var renderItems = function renderItems() {
    var ItemMap = [];
    flowNodesDict === null || flowNodesDict === void 0 ? void 0 : flowNodesDict.map(function (item) {
      var nodeType = item.type || item.code;
      var lowNodeType = nodeType.toLowerCase();
      var shape = item.shape;
      if (['circle'].includes(shape) || ['开始', '结束'].includes(item.name)) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape || 'circle',
          iconColor: item.iconColor,
          size: [50, 50]
        });
      } else if (['rhombus'].includes(shape) || lowNodeType.includes('parallel') || lowNodeType.includes('exclusive')) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape || 'rhombus',
          size: [60, 56]
        });
      } else {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: 'ellipse',
          prefixName: (item === null || item === void 0 ? void 0 : item.iconText) || '?',
          iconColor: item.iconColor,
          size: [120, 28]
        });
      }
    });
    return ItemMap.map(function (item, index) {
      if (showType === 'subflow' && ['SubDecisionFlowNode'].indexOf(item.type) > -1) {
        return null;
      }
      var _ref3 = item || {},
        type = _ref3.type,
        help = _ref3.help;
      return /*#__PURE__*/_react.default.createElement(_tooltip.default, {
        key: index,
        placement: "right",
        overlayStyle: {
          fontSize: 12
        },
        title: help
      }, /*#__PURE__*/_react.default.createElement("div", {
        key: type,
        className: "flow-item ".concat(getShapeClass(item)),
        onMouseDown: function onMouseDown() {
          onDrag(item);
        }
      }, itemDom(item)));
    });
  };
  var getShapeClass = function getShapeClass(_ref4) {
    var type = _ref4.type,
      shape = _ref4.shape;
    var shapeClassName = shape ? "flow-".concat(shape) : '';
    var lowNodeType = type.toLowerCase();
    if (lowNodeType === null || lowNodeType === void 0 ? void 0 : lowNodeType.startsWith('start')) {
      shapeClassName += ' start';
    }
    if (lowNodeType === null || lowNodeType === void 0 ? void 0 : lowNodeType.startsWith('end')) {
      shapeClassName += ' end';
    }
    if (lowNodeType === null || lowNodeType === void 0 ? void 0 : lowNodeType.startsWith('exclusive')) {
      shapeClassName += ' exclusive';
    }
    if (lowNodeType === null || lowNodeType === void 0 ? void 0 : lowNodeType.startsWith('parallel')) {
      shapeClassName += ' parallel';
    }
    return shapeClassName;
  };
  var itemDom = function itemDom(item) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (item === null || item === void 0 ? void 0 : item.prefixName) && /*#__PURE__*/_react.default.createElement("span", {
      style: {
        backgroundColor: (item === null || item === void 0 ? void 0 : item.iconColor) || '#e6b55e'
      }
    }, item === null || item === void 0 ? void 0 : item.prefixName), item === null || item === void 0 ? void 0 : item.name);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "job-left-bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      left: (dragItem === null || dragItem === void 0 ? void 0 : dragItem.name) ? pageX - size[0] / 2 : -9999,
      top: (dragItem === null || dragItem === void 0 ? void 0 : dragItem.name) ? pageY - size[1] / 2 : -9999,
      display: (dragItem === null || dragItem === void 0 ? void 0 : dragItem.type) ? 'block' : 'none',
      zIndex: 10
    },
    className: "".concat(dragItem ? getShapeClass(dragItem) : '', " flow-item drag-item")
  }, itemDom(dragItem)), /*#__PURE__*/_react.default.createElement("div", {
    className: "item-list"
  }, renderItems()));
};
exports.default = _default;