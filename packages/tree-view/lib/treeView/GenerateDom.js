"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var time = Date.now();
function chunkRender(dataArr, callback) {
  var delay = 100;
  var chunkSize = 50; // 设置切割大小

  var chunks = Array(Math.ceil(dataArr.length / chunkSize)).fill().map(function (_, index) {
    return index * chunkSize;
  }).map(function (begin) {
    return dataArr.slice(begin, begin + chunkSize);
  }); // 将原数组 B 切割成若干个小数组

  var currentIndex = 0;
  function renderChunk(currentTime) {
    var start = performance.now();
    while (currentIndex < chunks.length && performance.now() - start < 16) {
      callback(chunks[currentIndex], currentIndex === chunks.length - 1); // 第二个参数为 true 时，表示已经处理完所有小数组
      currentIndex++;
    }
    if (currentIndex < chunks.length) {
      setTimeout(function () {
        requestAnimationFrame(renderChunk); // 如果还有未处理完的小数组，则继续请求下一帧
      }, delay);
    }
  }
  setTimeout(function () {
    requestAnimationFrame(renderChunk); // 先让浏览器渲染一次
  }, 0);
}
var HugeArray = /*#__PURE__*/function (_Component) {
  _inherits(HugeArray, _Component);
  var _super = _createSuper(HugeArray);
  function HugeArray(props) {
    var _this;
    _classCallCheck(this, HugeArray);
    _this = _super.call(this, props);
    _this.handleChunk = function (chunk, bool) {
      var elements = chunk; // 根据当前小数组生成 DOM 元素

      _this.elements = _this.elements.concat(elements); // 将元素添加到元素数组中
      _reactDom.default.render(_this.elements, _this.container); // 渲染所有元素

      if (bool) {
        _this.props.onFinish && _this.props.onFinish();
      }
    };
    _this.container = null;
    _this.elements = [];
    return _this;
  }
  _createClass(HugeArray, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var doms = this.props.doms;
      chunkRender(doms, this.handleChunk); // 初始化分块渲染功能
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.linesAndDomsNums.length !== this.props.doms.length) {
        var doms = this.props.doms;
        this.elements = [];
        chunkRender(doms, this.handleChunk); // 初始化分块渲染功能
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: function ref(_ref) {
          return _this2.container = _ref;
        }
      }); // 绑定空的 div 元素
    }
  }]);
  return HugeArray;
}(_react.Component);
var _default = HugeArray;
exports.default = _default;