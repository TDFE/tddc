"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderTabs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _classnames = _interopRequireDefault(require("classnames"));
var _lodash = require("lodash");
require("./index.less");
var _Icon = _interopRequireDefault(require("../Icon"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HeaderTabs = function HeaderTabs(props) {
  var className = props.className,
    _props$tabs = props.tabs,
    tabs = _props$tabs === void 0 ? [] : _props$tabs,
    onTabChange = props.onTabChange,
    onTabSelect = props.onTabSelect,
    onTabClose = props.onTabClose,
    appListVisible = props.appListVisible,
    orgListVisible = props.orgListVisible,
    orgAppListVisible = props.orgAppListVisible;
  var _useState = (0, _react.useState)(props.selectedKey || (0, _lodash.get)(tabs, '0.key')),
    _useState2 = _slicedToArray(_useState, 2),
    selectedKey = _useState2[0],
    setSelectedKey = _useState2[1];
  var _useState3 = (0, _react.useState)(tabs || []),
    _useState4 = _slicedToArray(_useState3, 2),
    tabItems = _useState4[0],
    setTabItems = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    arrowVisible = _useState6[0],
    setArrowVisible = _useState6[1];
  var _useState7 = (0, _react.useState)({
      start: true,
      end: true
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    tabsPositionFlags = _useState8[0],
    setTabsPositionFlags = _useState8[1];
  var tabsRef = (0, _react.useRef)();
  var getTabsDom = function getTabsDom() {
    return tabsRef.current;
  };
  var onTabClick = function onTabClick(tab, index) {
    setSelectedKey(tab.key);
    onTabSelect === null || onTabSelect === void 0 ? void 0 : onTabSelect(tab);
    if (selectedKey !== tab.key) {
      onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(tab);
    }
  };
  var closeTabHandle = function closeTabHandle(tab, index, evt) {
    evt.stopPropagation();
    var newTabItems = tabItems.filter(function (_ref) {
      var key = _ref.key;
      return key !== tab.key;
    });
    var newSelectedKey = selectedKey;
    setTabItems(newTabItems);
    if (tab.key === selectedKey) {
      var _newTabItems$, _newTabItems;
      newSelectedKey = index === 0 ? (_newTabItems$ = newTabItems[0]) === null || _newTabItems$ === void 0 ? void 0 : _newTabItems$.key : (_newTabItems = newTabItems[index - 1]) === null || _newTabItems === void 0 ? void 0 : _newTabItems.key;
      setSelectedKey(newSelectedKey);
    }
    onTabClose === null || onTabClose === void 0 ? void 0 : onTabClose(tab, newTabItems, newTabItems.find(function (_ref2) {
      var key = _ref2.key;
      return key === newSelectedKey;
    }));
  };
  var onMoveToLeft = function onMoveToLeft() {
    var tabsDom = getTabsDom();
    var parentBBox = tabsDom.parentNode.getBoundingClientRect();
    var parentWidth = parentBBox.width - 32;
    var x = Math.abs(Number(tabsDom.style.transform.replace(/[^\d.-]/g, '')));
    var index = Math.ceil(x / 130);
    var trueX = index * 130;
    var newX = Math.min(0, -(trueX - parentWidth));
    tabsDom.style.transform = "translateX(".concat(newX, "px)");
    var width = tabItems.length * 130;
    setTabsPositionFlags({
      start: newX < 0,
      end: Math.abs(newX) < width - parentWidth
    });
  };
  var onMoveToRight = function onMoveToRight() {
    var tabsDom = getTabsDom();
    var parentBBox = tabsDom.parentNode.getBoundingClientRect();
    var parentWidth = parentBBox.width - 32;
    var width = tabItems.length * 130;
    var x = Math.abs(Number(tabsDom.style.transform.replace(/[^\d.-]/g, '')));
    var index = Math.floor(x / 130);
    var trueX = index * 130;
    var newX = Math.max(-(width - parentWidth), -(trueX + parentWidth));
    tabsDom.style.transform = "translateX(".concat(newX, "px)");
    setTabsPositionFlags({
      start: newX < 0,
      end: Math.abs(newX) < width - parentWidth
    });
  };
  var translateTabsDom = function translateTabsDom(tabs, selectedKey) {
    if (!selectedKey) return;
    var index = tabs.indexOf(tabs.find(function (_ref3) {
      var key = _ref3.key;
      return key === selectedKey;
    }));
    if (index === -1) return;
    var tabsDom = getTabsDom();
    var x = -Number(tabsDom.style.transform.replace(/[^\d.-]/g, ''));
    var bbox = {
      left: index * 130,
      right: (index + 1) * 130
    };
    var parentBBox = tabsDom.parentNode.getBoundingClientRect();
    var parentWidth = parentBBox.width - 36;
    var width = tabItems.length * 130;
    var tailX = x + parentWidth; // 当前滑动窗口尾部坐标
    var newX = -x;
    if (bbox.left < x) {
      newX = -bbox.left;
    } else if (bbox.right >= tailX) {
      newX = parentWidth - bbox.right;
    }
    if (newX + width < parentWidth) {
      newX = -(width - parentWidth);
    }
    newX = Math.min(0, newX);
    tabsDom.style.transform = "translateX(".concat(newX, "px)");
    setTabsPositionFlags({
      start: newX < 0,
      end: Math.abs(newX) < width - parentWidth
    });
  };
  (0, _react.useEffect)(function () {
    setSelectedKey(props.selectedKey || (0, _lodash.get)(tabs, '0.key'));
    setTabItems(tabs);
  }, [tabs, props.selectedKey]);
  (0, _react.useEffect)(function () {
    var tabsDom = getTabsDom();
    setArrowVisible(tabsDom.offsetWidth - tabsDom.parentNode.offsetWidth > 0);
  }, [tabItems]);
  (0, _react.useEffect)(function () {
    translateTabsDom(tabItems, selectedKey);
  }, [tabItems, selectedKey, appListVisible, orgListVisible, orgAppListVisible]);
  var _useState9 = (0, _react.useState)({}),
    _useState10 = _slicedToArray(_useState9, 2),
    style = _useState10[0],
    setStyle = _useState10[1];
  var nowTab = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    window.addEventListener('click', onCancel);
    return function () {
      window.removeEventListener('click', onCancel);
    };
  }, []);
  var onCancel = function onCancel() {
    setStyle({});
  };
  var _onContextMenu = function onContextMenu(e, tab) {
    e.preventDefault();
    e.stopPropagation();
    nowTab.current = tab;
    var clientX = e.clientX,
      clientY = e.clientY;
    setStyle({
      left: clientX,
      top: clientY,
      display: 'block'
    });
  };
  var onCloseNow = function onCloseNow(e) {
    var index = tabs.indexOf(nowTab.current);
    closeTabHandle(nowTab.current, index, e);
    setStyle({});
  };
  var onCloseRight = function onCloseRight(e) {
    var index = tabs.indexOf(nowTab.current);
    var current = tabs.find(function (_ref4) {
      var key = _ref4.key;
      return key === selectedKey;
    });
    var currentIndex = tabs.indexOf(current);
    var activeTab = currentIndex > index ? nowTab.current : current;
    var closeTabs = tabs.splice(index + 1, tabs.length - index);
    var newTabs = _toConsumableArray(tabs);
    setTabItems(newTabs);
    onTabClose === null || onTabClose === void 0 ? void 0 : onTabClose(undefined, newTabs, activeTab, closeTabs);
    setStyle({});
  };
  var onCloseOthers = function onCloseOthers(e) {
    var newTabs = [nowTab.current];
    var index = tabs.indexOf(nowTab.current);
    var closeTabs = tabs.filter(function (tab, i) {
      return i !== index;
    });
    setTabItems(newTabs);
    onTabClose === null || onTabClose === void 0 ? void 0 : onTabClose(undefined, newTabs, nowTab.current, closeTabs);
    setStyle({});
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)('tnt-layout-header-tabs', className)
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "tnt-layout-header-tabs-content",
    ref: tabsRef
  }, tabItems.map(function (tab, index) {
    var _tabItems;
    return /*#__PURE__*/_react.default.createElement("li", {
      onContextMenu: function onContextMenu(e) {
        _onContextMenu(e, tab);
      },
      key: tab.key,
      className: (0, _classnames.default)({
        active: selectedKey === tab.key,
        activeTabPreSibling: ((_tabItems = tabItems[index + 1]) === null || _tabItems === void 0 ? void 0 : _tabItems.key) === selectedKey
      }),
      onClick: function onClick() {
        return onTabClick(tab, index);
      }
    }, /*#__PURE__*/_react.default.createElement("a", {
      href: tab.key,
      onClick: function onClick(evt) {
        return evt.preventDefault();
      }
    }, tab.name), tabItems.length > 1 && /*#__PURE__*/_react.default.createElement(_Icon.default, {
      type: "close",
      onClick: closeTabHandle.bind(null, tab, index)
    }));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "right-menulist",
    style: _objectSpread({}, style)
  }, /*#__PURE__*/_react.default.createElement("div", {
    onClick: onCloseNow,
    className: "".concat(tabs.length === 1 ? 'disabled' : '')
  }, "\u5173\u95ED"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: onCloseOthers
  }, "\u5173\u95ED\u5176\u4ED6"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: onCloseRight
  }, "\u5173\u95ED\u53F3\u4FA7")), arrowVisible && /*#__PURE__*/_react.default.createElement("div", {
    className: "tnt-layout-header-tabs-arrows"
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    type: "left",
    onClick: onMoveToLeft,
    disabled: !tabsPositionFlags.start
  }), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    type: "right",
    onClick: onMoveToRight,
    disabled: !tabsPositionFlags.end
  })));
};
exports.HeaderTabs = HeaderTabs;
var _default = HeaderTabs;
exports.default = _default;