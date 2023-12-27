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
var _react = _interopRequireDefault(require('react'));
var _lodash = require('lodash');
var _reactDom = _interopRequireDefault(require('react-dom'));
var _Base2 = _interopRequireDefault(require('./Base'));
var _constants = _interopRequireWildcard(require('./constants'));
var _DefaultNode = _interopRequireDefault(require('./DefaultNode'));
var _Link = _interopRequireDefault(require('./Link'));
var _utils = require('./utils');
var _WrapNode = _interopRequireDefault(require('./WrapNode'));
var _GenerateDom = _interopRequireDefault(require('./GenerateDom'));
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return e;
    };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, r) {
        t[e] = r.value;
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    u = i.toStringTag || '@@toStringTag';
  function define(t, e, r) {
    return (
      Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }),
      t[e]
    );
  }
  try {
    define({}, '');
  } catch (t) {
    define = function define(t, e, r) {
      return (t[e] = r);
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, '_invoke', { value: makeInvokeMethod(t, r, c) }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return { type: 'normal', arg: t.call(e, r) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  e.wrap = wrap;
  var h = 'suspendedStart',
    l = 'suspendedYield',
    f = 'executing',
    s = 'completed',
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p));
  function defineIteratorMethods(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ('throw' !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && 'object' == _typeof(h) && n.call(h, '__await')
          ? e.resolve(h.__await).then(
              function (t) {
                invoke('next', t, i, a);
              },
              function (t) {
                invoke('throw', t, i, a);
              },
            )
          : e.resolve(h).then(
              function (t) {
                (u.value = t), i(u);
              },
              function (t) {
                return invoke('throw', t, i, a);
              },
            );
      }
      a(c.arg);
    }
    var r;
    o(this, '_invoke', {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return (r = r
          ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error('Generator is already running');
      if (o === s) {
        if ('throw' === i) throw a;
        return { value: t, done: !0 };
      }
      for (n.method = i, n.arg = a; ; ) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ('next' === n.method) n.sent = n._sent = n.arg;
        else if ('throw' === n.method) {
          if (o === h) throw ((o = s), n.arg);
          n.dispatchException(n.arg);
        } else 'return' === n.method && n.abrupt('return', n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ('normal' === p.type) {
          if (((o = n.done ? s : l), p.arg === y)) continue;
          return { value: p.arg, done: n.done };
        }
        'throw' === p.type && ((o = s), (n.method = 'throw'), (n.arg = p.arg));
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t)
      return (
        (r.delegate = null),
        ('throw' === n &&
          e.iterator.return &&
          ((r.method = 'return'), (r.arg = t), maybeInvokeDelegate(e, r), 'throw' === r.method)) ||
          ('return' !== n &&
            ((r.method = 'throw'),
            (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
        y
      );
    var i = tryCatch(o, e.iterator, r.arg);
    if ('throw' === i.type) return (r.method = 'throw'), (r.arg = i.arg), (r.delegate = null), y;
    var a = i.arg;
    return a
      ? a.done
        ? ((r[e.resultName] = a.value),
          (r.next = e.nextLoc),
          'return' !== r.method && ((r.method = 'next'), (r.arg = t)),
          (r.delegate = null),
          y)
        : a
      : ((r.method = 'throw'),
        (r.arg = new TypeError('iterator result is not an object')),
        (r.delegate = null),
        y);
  }
  function pushTryEntry(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function Context(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]), t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || '' === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ('function' == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length; )
              if (n.call(e, o)) return (next.value = e[o]), (next.done = !1), next;
            return (next.value = t), (next.done = !0), next;
          };
        return (i.next = i);
      }
    }
    throw new TypeError(_typeof(e) + ' is not iterable');
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    o(g, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
    o(GeneratorFunctionPrototype, 'constructor', { value: GeneratorFunction, configurable: !0 }),
    (GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, 'GeneratorFunction')),
    (e.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return !!e && (e === GeneratorFunction || 'GeneratorFunction' === (e.displayName || e.name));
    }),
    (e.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, GeneratorFunctionPrototype)
          : ((t.__proto__ = GeneratorFunctionPrototype), define(t, u, 'GeneratorFunction')),
        (t.prototype = Object.create(g)),
        t
      );
    }),
    (e.awrap = function (t) {
      return { __await: t };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, c, function () {
      return this;
    }),
    (e.AsyncIterator = AsyncIterator),
    (e.async = function (t, r, n, o, i) {
      void 0 === i && (i = Promise);
      var a = new AsyncIterator(wrap(t, r, n, o), i);
      return e.isGeneratorFunction(r)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    defineIteratorMethods(g),
    define(g, u, 'Generator'),
    define(g, a, function () {
      return this;
    }),
    define(g, 'toString', function () {
      return '[object Generator]';
    }),
    (e.keys = function (t) {
      var e = Object(t),
        r = [];
      for (var n in e) r.push(n);
      return (
        r.reverse(),
        function next() {
          for (; r.length; ) {
            var t = r.pop();
            if (t in e) return (next.value = t), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (e.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(e) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = t),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = t),
          this.tryEntries.forEach(resetTryEntry),
          !e)
        )
          for (var r in this)
            't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      },
      stop: function stop() {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(e) {
        if (this.done) throw e;
        var r = this;
        function handle(n, o) {
          return (
            (a.type = 'throw'),
            (a.arg = e),
            (r.next = n),
            o && ((r.method = 'next'), (r.arg = t)),
            !!o
          );
        }
        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
          var i = this.tryEntries[o],
            a = i.completion;
          if ('root' === i.tryLoc) return handle('end');
          if (i.tryLoc <= this.prev) {
            var c = n.call(i, 'catchLoc'),
              u = n.call(i, 'finallyLoc');
            if (c && u) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            } else if (c) {
              if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            } else {
              if (!u) throw new Error('try statement without catch or finally');
              if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(t, e) {
        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
          var o = this.tryEntries[r];
          if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a)
        );
      },
      complete: function complete(t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg), (this.method = 'return'), (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          y
        );
      },
      finish: function finish(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.finallyLoc === t)
            return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
        }
      },
      catch: function _catch(t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var r = this.tryEntries[e];
          if (r.tryLoc === t) {
            var n = r.completion;
            if ('throw' === n.type) {
              var o = n.arg;
              resetTryEntry(r);
            }
            return o;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(e, r, n) {
        return (
          (this.delegate = { iterator: values(e), resultName: r, nextLoc: n }),
          'next' === this.method && (this.arg = t),
          y
        );
      },
    }),
    e
  );
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }
      _next(undefined);
    });
  };
}
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
var Tree = /*#__PURE__*/ (function (_Base) {
  _inherits(Tree, _Base);
  var _super = _createSuper(Tree);
  function Tree() {
    var _this;
    _classCallCheck(this, Tree);
    _this = _super.call(this);
    _this.key = 'id';
    _this.dom = null;
    _this.nodeDom = null;
    _this.onChange = null;
    _this.customPosition = null;
    _this.fixed = true;
    _this.lineType = 2;
    _this.linkType = 'dashed';
    _this.domHeight = 0;
    _this.domWidth = 0;
    _this.Nodes = {};
    _this.interaction = true;
    _this.constant = {};
    _this.constant.COMPONENT_WIDTH = _constants.COMPONENT_WIDTH; // 节点占据的宽度
    _this.constant.COMPONENT_HEIGHT = _constants.COMPONENT_HEIGHT; // 节点占据高度
    _this.constant.COMPONENT_SPACE_VERTICAL = _constants.COMPONENT_SPACE_VERTICAL; // 节点垂直之间的间隙
    _this.constant.COMPONENT_SPACE_HORIZONTAL = _constants.COMPONENT_SPACE_HORIZONTAL; // 节点水平之间的间隙
    _this.constant.ROOT_WIDTH = _constants.ROOT_WIDTH; // 根节点宽度

    _this.isFirst = true;
    _this.linesAndDoms = [];
    _this.linesAndDomsNums = 0;
    _this.unmountBool = false;
    return _this;
  }
  _createClass(Tree, [
    {
      key: 'init',
      value: function init(props) {
        var data = props.data,
          options = props.options,
          styleOptions = props.styleOptions,
          container = props.container,
          key = props.key;
        var _ref = options || {},
          initType = _ref.initType,
          onChange = _ref.onChange,
          customPosition = _ref.customPosition,
          fixed = _ref.fixed,
          nodeDom = _ref.nodeDom,
          lineType = _ref.lineType,
          onFinish = _ref.onFinish;
        var _ref2 = styleOptions || {},
          nodeWidth = _ref2.nodeWidth,
          nodeHeight = _ref2.nodeHeight,
          spaceVertical = _ref2.spaceVertical,
          spaceHorizontal = _ref2.spaceHorizontal,
          rootWidth = _ref2.rootWidth;
        this.key = key || 'id';
        this.initType = initType || false;
        this.nodeDom = nodeDom || _DefaultNode.default || null;
        this.onChange = onChange || function () {};
        this.customPosition = customPosition;
        this.fixed = fixed;
        this.lineType = lineType || 2;
        this.linkType = 'dashed';
        this.dom = container;
        this.domHeight = 0;
        this.domWidth = 0;
        this.constant = {};
        this.constant.COMPONENT_WIDTH = nodeWidth || _constants.COMPONENT_WIDTH; // 节点占据的宽度
        this.constant.COMPONENT_HEIGHT = nodeHeight || _constants.COMPONENT_HEIGHT; // 节点占据高度
        this.constant.COMPONENT_SPACE_VERTICAL =
          spaceVertical || _constants.COMPONENT_SPACE_VERTICAL; // 节点垂直之间的间隙
        this.constant.COMPONENT_SPACE_HORIZONTAL =
          spaceHorizontal || _constants.COMPONENT_SPACE_HORIZONTAL; // 节点水平之间的间隙
        this.constant.ROOT_WIDTH = rootWidth || _constants.ROOT_WIDTH; // 根节点宽度

        this.onFinish = onFinish || function () {};
        this.setData(data || null);
        if (!this.data) return;
        this.isFirst = false;
        this.render();
      },
    },
    {
      key: 'setData',
      value: function setData(data) {
        var _this$data;
        this.pre_data_key =
          (_this$data = this.data) === null || _this$data === void 0
            ? void 0
            : _this$data[this.key];
        this.initDefault();
        this.data = data;
      },
    },
    {
      key: 'initDefault',
      value: function initDefault() {
        this.Nodes = {};
        this.linesAndDoms = [];
        this.flattenNodes = [];
        this.flattenLinks = [];
        this.hierarchyData = null;
        this.finalValue = null;
      },
    },
    {
      key: 'drawNode',
      value: function drawNode() {
        var _this$flattenNodes,
          _this2 = this;
        var result = [];
        ((_this$flattenNodes = this.flattenNodes) === null || _this$flattenNodes === void 0
          ? void 0
          : _this$flattenNodes.forEach(function (node) {
              var _this2$data;
              var data = node.data,
                x = node.x,
                y = node.y;
              var key = data.key,
                nodeName = data.nodeName;
              var isExceed =
                (0, _utils.getTextPixelWith)(nodeName) > _this2.constant.COMPONENT_WIDTH;
              var Eledom = function Eledom() {
                var NodeIns =
                  (_this2.nodeDom &&
                    _this2.nodeDom({
                      node: node,
                      nodeToggle: function nodeToggle(data) {
                        return _this2.foldingClick(data);
                      },
                      id: _this2.getHierarchyId(key, 'root') + x + y,
                      constants: _constants.default,
                      fixed: _this2.fixed,
                    })) ||
                  null;
                return NodeIns;
              };
              result.push(
                /*#__PURE__*/ _react.default.createElement(_WrapNode.default, {
                  component: function component(props) {
                    return Eledom(props);
                  },
                  unique:
                    x +
                    y +
                    ((_this2$data = _this2.data) === null || _this2$data === void 0
                      ? void 0
                      : _this2$data[_this2.key]),
                  id: _this2.getHierarchyId(key, 'root'),
                  width: !isExceed && _this2.constant.COMPONENT_WIDTH,
                  minWidth: _this2.constant.COMPONENT_WIDTH,
                  minHeight: _this2.constant.COMPONENT_HEIGHT,
                  x: x,
                  y: y,
                  parent: node.parent,
                  fixed: _this2.fixed,
                }),
              );
            })) || [];
        return result;
      },
    },
    {
      key: 'drawLine',
      value: function drawLine() {
        var _this3 = this;
        var result = [];
        var areadyRendered = new Map();
        result =
          (this === null || this === void 0
            ? void 0
            : this.flattenLinks.map(function (link) {
                var _source$data, _source$data2, _source$data3;
                var source = link.source,
                  target = link.target;
                var sourceKey = source.data.key;
                var targetKey = target.data.key;
                var x = source.y;
                var nodeNameWidth = (0, _utils.getTextPixelWith)(source.data.nodeName || ''); // 组件名称宽度

                if (!source.parent) {
                  x = source.y + _this3.constant.COMPONENT_WIDTH;
                } else {
                  if (_this3.fixed) {
                    x = source.y + _this3.constant.COMPONENT_WIDTH;
                  } else {
                    x =
                      source.y +
                      (nodeNameWidth > _this3.constant.COMPONENT_WIDTH
                        ? nodeNameWidth
                        : _this3.constant.COMPONENT_WIDTH);
                  }
                }
                var startPath = [x, source.x];
                var endPath = [target.y, target.x];
                var shuoldRender = [];
                var start = [
                  startPath[0],
                  startPath[1],
                  (startPath[0] + endPath[0]) / 2,
                  startPath[1],
                ];
                var control = [
                  (startPath[0] + endPath[0]) / 2,
                  startPath[1],
                  (startPath[0] + endPath[0]) / 2,
                  endPath[1],
                ];
                var end = [(startPath[0] + endPath[0]) / 2, endPath[1], endPath[0], endPath[1]];
                var key = start[0] + '-' + start[1];
                if (areadyRendered.has(key)) {
                  var s3 = areadyRendered.get(key);
                  if (control[3] < s3) {
                    shuoldRender = [].concat(end);
                  } else {
                    var downKey = key + '-down';
                    if (areadyRendered.has(downKey)) {
                      var downMaxY = areadyRendered.get(downKey);
                      shuoldRender = [start[2], downMaxY].concat(end);
                      areadyRendered.set(downKey, control[3]);
                    } else {
                      shuoldRender = [].concat(control, end);
                      areadyRendered.set(downKey, control[3]);
                    }
                  }
                } else {
                  shuoldRender = [].concat(start, control, end);
                  areadyRendered.set(key, start[3]);
                }
                var length =
                  (source === null || source === void 0
                    ? void 0
                    : (_source$data = source.data) === null || _source$data === void 0
                    ? void 0
                    : _source$data.children.length) ||
                  (source === null || source === void 0
                    ? void 0
                    : (_source$data2 = source.data) === null || _source$data2 === void 0
                    ? void 0
                    : _source$data2._children.length) ||
                  0;
                return /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    key: _this3.getHierarchyId(sourceKey, targetKey) + source.x + source.y,
                    'data-key': _this3.getHierarchyId(sourceKey, targetKey) + source.x + source.y,
                  },
                  /*#__PURE__*/ _react.default.createElement(_Link.default, {
                    root: !source.parent,
                    color:
                      source === null || source === void 0
                        ? void 0
                        : (_source$data3 = source.data) === null || _source$data3 === void 0
                        ? void 0
                        : _source$data3.color,
                    length: length,
                    source: {
                      x: x,
                      y: source.x,
                    },
                    target: {
                      x: target.y,
                      y: target.x,
                    },
                    shuoldRender: shuoldRender,
                    type: _this3.lineType,
                    linkType: _this3.linkType,
                  }),
                );
              })) || [];
        return result;
      },

      // 计算定位
    },
    {
      key: 'buildPosition',
      value: function buildPosition(data) {
        var _this4 = this,
          _this$Nodes,
          _this$Nodes2;
        var leafCount = 0;
        var domWidth = 0;
        var domHeight = 0;
        var Nodes =
          data === null || data === void 0
            ? void 0
            : data.eachAfter(function (node) {
                var exceedWidth = _this4.calcWidth(node) || 0;
                var children = node.children,
                  data = node.data,
                  parent = node.parent;
                if (!_this4.fixed) {
                  node.y =
                    node.depth *
                      (_this4.constant.COMPONENT_WIDTH +
                        _this4.constant.COMPONENT_SPACE_HORIZONTAL) +
                    exceedWidth;
                } else {
                  node.y =
                    node.depth *
                    (_this4.constant.COMPONENT_WIDTH + _this4.constant.COMPONENT_SPACE_HORIZONTAL);
                }
                if (_this4.customPosition) {
                  var _this4$customPosition = _this4.customPosition(node);
                  var _this4$customPosition2 = _slicedToArray(_this4$customPosition, 2);
                  node.x = _this4$customPosition2[0];
                  node.y = _this4$customPosition2[1];
                }
                if (parent === null) {
                  node.y = 0;
                  node.x =
                    children && children.length
                      ? (children[0].x + children[children.length - 1].x) / 2
                      : 0;
                } else if (data.type === 'relation') {
                  node.x =
                    children && children.length
                      ? (children[0].x + children[children.length - 1].x) / 2
                      : 0;
                } else {
                  node.x =
                    leafCount *
                    (_this4.constant.COMPONENT_HEIGHT + _this4.constant.COMPONENT_SPACE_VERTICAL);
                  leafCount += 1;
                }
                domWidth = Math.max(
                  node.y + (0, _utils.getTextPixelWith)(node.data.nodeName || ''),
                  domWidth,
                );
                domHeight = Math.max(node.x + _constants.COMPONENT_HEIGHT, domHeight);
              });

        // 设置容器宽度
        this.domWidth = domWidth;
        this.domHeight = domHeight;
        this.Nodes = Nodes;
        this.flattenLinks =
          ((_this$Nodes = this.Nodes) === null || _this$Nodes === void 0
            ? void 0
            : _this$Nodes.links()) || [];
        this.flattenNodes =
          ((_this$Nodes2 = this.Nodes) === null || _this$Nodes2 === void 0
            ? void 0
            : _this$Nodes2.descendants()) || [];
      },

      // 获取id
    },
    {
      key: 'getHierarchyId',
      value: function getHierarchyId() {
        var ids = [];
        var _len = 0;
        var _key = 0;
        for (_len = arguments.length, ids = new Array(_len); _key < _len; _key++) {
          ids[_key] = _key < 0 || arguments.length <= _key ? undefined : arguments[_key];
        }
        return ids.join('.');
      },

      // 计算节点长度
    },
    {
      key: 'calcWidth',
      value: function calcWidth(root) {
        var _this5 = this;
        var moreWidth = 0;
        if (!root) return 0;
        var dfs = function dfs(root) {
          if (!root) return;
          var nameWidth = (0, _utils.getTextPixelWith)(root.data.nodeName || '');
          if (nameWidth > _this5.constant.COMPONENT_WIDTH) {
            moreWidth += nameWidth - _this5.constant.COMPONENT_WIDTH;
          }
          if (root.parent) {
            dfs(root.parent);
          }
        };
        dfs(root.parent, 0);
        return moreWidth;
      },

      // 节点展开 闭合
    },
    {
      key: 'nodeChange',
      value: function nodeChange(data) {
        this.data.nodeName = data.nodeName;
        this.data.children = data.children;
        this.initData(this.data);
        this.render();
      },

      // 点击折叠
    },
    {
      key: 'foldingClick',
      value: function foldingClick(d) {
        var path;
        var currentNode;
        var valueTemp = {
          nodeName: this.data.nodeName,
          children: this.data.children,
        };
        if (d.children) {
          path = d.path.slice(0, d.path.length - 1);
          currentNode = (0, _lodash.get)(valueTemp, path);
          currentNode._children = currentNode.children;
          currentNode.children = null;
        } else {
          path = d.path;
          currentNode = (0, _lodash.get)(valueTemp, path);
          currentNode.children = currentNode._children || d._children;
          currentNode._children = null;
        }
        this.nodeChange && this.nodeChange(valueTemp);
      },
    },
    {
      key: 'expand',
      value: (function () {
        var _expand = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(
              function _callee$(_context) {
                while (1)
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return this.data.children.forEach(_utils.expandTree);
                    case 2:
                      this.initData(this.data);
                      this.render();
                    case 4:
                    case 'end':
                      return _context.stop();
                  }
              },
              _callee,
              this,
            );
          }),
        );
        function expand() {
          return _expand.apply(this, arguments);
        }
        return expand;
      })(),
    },
    {
      key: 'packUp',
      value: (function () {
        var _packUp = _asyncToGenerator(
          /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(
              function _callee2$(_context2) {
                while (1)
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return this.data.children.forEach(_utils.collapseTree);
                    case 2:
                      this.initData(this.data);
                      this.render();
                    case 4:
                    case 'end':
                      return _context2.stop();
                  }
              },
              _callee2,
              this,
            );
          }),
        );
        function packUp() {
          return _packUp.apply(this, arguments);
        }
        return packUp;
      })(),
    },
    {
      key: 'render',
      value: function render() {
        var _this$data2,
          _this6 = this;
        this.buildPosition(this.hierarchyData);
        if (
          this.linesAndDomsNums !== this.flattenNodes.length + this.flattenLinks.length ||
          ((_this$data2 = this.data) === null || _this$data2 === void 0
            ? void 0
            : _this$data2[this.key]) !== this.pre_data_key
        ) {
          this.onChange && this.onChange(this.data);
          var nodeDoms = this.drawNode();
          var lineDoms = this.drawLine();
          this.linesAndDomsNums = nodeDoms.length + lineDoms.length;

          // 卸载所有子元素， 确保容器内没有其他元素之后再进行渲染
          this.unmountBool = _reactDom.default.unmountComponentAtNode(this.dom);
          if (this.dom.childNodes.length === 0) {
            _reactDom.default.render(
              /*#__PURE__*/ _react.default.createElement(_GenerateDom.default, {
                doms: nodeDoms.concat(lineDoms),
                linesAndDomsNums: this.linesAndDomsNums,
                onFinish: this.onFinish,
                onChange: this.onChange,
                container: this.dom,
              }),
              this.dom,
            );
          } else {
            var requestId = requestAnimationFrame(function () {
              if (_this6.unmountBool) {
                _reactDom.default.render(
                  /*#__PURE__*/ _react.default.createElement(_GenerateDom.default, {
                    doms: nodeDoms.concat(lineDoms),
                    linesAndDomsNums: _this6.linesAndDomsNums,
                    onFinish: _this6.onFinish,
                    onChange: _this6.onChange,
                    container: _this6.dom,
                  }),
                  _this6.dom,
                );
                cancelAnimationFrame(requestId);
                _this6.unmountBool = false;
              }
            });
          }
        } else {
          this.onFinish && this.onFinish();
        }
      },
    },
  ]);
  return Tree;
})(_Base2.default);
var BaseProxy = function BaseProxy() {
  return new Proxy(new Tree(), {
    set: function set(target, propertyKey, value) {
      if (propertyKey === 'data') {
        if (!value) return true;
        if (target.initType === true || !target.interaction) {
          var _value$children;
          value === null || value === void 0
            ? void 0
            : (_value$children = value.children) === null || _value$children === void 0
            ? void 0
            : _value$children.forEach(_utils.expandTree);
        } else {
          var _value$children2;
          value === null || value === void 0
            ? void 0
            : (_value$children2 = value.children) === null || _value$children2 === void 0
            ? void 0
            : _value$children2.forEach(_utils.collapseTree);
        }
        Reflect.set(target, propertyKey, value);
        target.initData();
        target.render();
        return true;
      }
      Reflect.set(target, propertyKey, value);
      return true;
    },
    get: function get(target, propertyKey) {
      if (Reflect.has(target, propertyKey)) {
        return Reflect.get(target, propertyKey);
      }
      return -1;
    },
  });
};
var _default = (exports.default = BaseProxy);
