'use strict';

function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _reactDom = _interopRequireDefault(require('react-dom'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _getRequireWildcardCache(e) {
  if ('function' != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ('object' != _typeof(e) && 'function' != typeof e)) return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ('default' !== u && Object.prototype.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, 'prototype', { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
function chunkRender(dataArr, callback) {
  var delay = 100;
  var chunkSize = 50; // 设置切割大小

  var chunks = Array(Math.ceil(dataArr.length / chunkSize))
    .fill()
    .map(function (_, index) {
      return index * chunkSize;
    })
    .map(function (begin) {
      return dataArr.slice(begin, begin + chunkSize);
    }); // 将原数组 B 切割成若干个小数组

  var currentIndex = 0;
  function renderChunk() {
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
var HugeArray = /*#__PURE__*/ (function (_Component) {
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
    _this.container = props.container || /*#__PURE__*/ _react.default.createElement('div', null);
    _this.elements = [];
    return _this;
  }
  _createClass(HugeArray, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var doms = this.props.doms;
        chunkRender(doms, this.handleChunk); // 初始化分块渲染功能
      },
    },
    {
      key: 'render',
      value: function render() {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null);
      },
    },
  ]);
  return HugeArray;
})(_react.Component);
var _default = (exports.default = HugeArray);
