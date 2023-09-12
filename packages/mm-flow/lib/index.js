'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
Object.defineProperty(exports, 'sliceName', {
  enumerable: true,
  get: function get() {
    return _initShapes.sliceName;
  },
});
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/row/style');
var _row = _interopRequireDefault(require('antd/lib/row'));
require('antd/lib/message/style');
var _message2 = _interopRequireDefault(require('antd/lib/message'));
var _react = _interopRequireWildcard(require('react'));
var _mmeditor = _interopRequireDefault(require('mmeditor'));
var _TopBar = _interopRequireDefault(require('./Content/TopBar'));
var _LeftBar = _interopRequireDefault(require('./Content/LeftBar'));
var _initShapes = _interopRequireWildcard(require('./MMShapes/initShapes'));
var _DefaultDataConvert = _interopRequireDefault(require('./DefaultDataConvert'));
var _DialogHandle = _interopRequireDefault(require('./DialogHandle'));
require('./index.less');
var _this = void 0;
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
        });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
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
var _default = /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
  var _toolTipInfo$nowTextN;
  var editorWrapRef = (0, _react.useRef)();
  var editorDomRef = (0, _react.useRef)();
  var editorRef = (0, _react.useRef)();
  var dialogHandleRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    toolTipInfo = _useState2[0],
    setToolTipInfo = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    dialogShowInfo = _useState4[0],
    setDialogShowInfo = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    initReady = _useState6[0],
    setInitReady = _useState6[1];
  var type = props.type,
    graphData = props.graphData,
    _props$flowNodesDict = props.flowNodesDict,
    flowNodesDict = _props$flowNodesDict === void 0 ? [] : _props$flowNodesDict,
    _props$auditedNodes = props.auditedNodes,
    auditedNodes = _props$auditedNodes === void 0 ? [] : _props$auditedNodes,
    className = props.className,
    _props$showMiniMap = props.showMiniMap,
    showMiniMap = _props$showMiniMap === void 0 ? true : _props$showMiniMap,
    DataConvert = props.DataConvert,
    toolTipNameHandle = props.toolTipNameHandle,
    dialogHide = props.dialogHide,
    showType = props.showType,
    _props$dialogDom = props.dialogDom,
    dialogDom = _props$dialogDom === void 0 ? [] : _props$dialogDom,
    editorStyle = props.editorStyle,
    onRef = props.onRef,
    checkLineExtendFn = props.checkLineExtendFn,
    showLengend = props.showLengend,
    LengendDom = props.LengendDom,
    _props$autoDiffAuditN = props.autoDiffAuditNodes,
    autoDiffAuditNodes = _props$autoDiffAuditN === void 0 ? true : _props$autoDiffAuditN;
  var previewMode = type === 'view';
  var auditedNodesPre = (0, _react.useRef)(auditedNodes);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      updateGraph: setGraphData,
    };
  });
  var checkNewLine = function checkNewLine(data, editor) {
    var nodes = editor.graph.node.nodes;
    var from = data.from,
      to = data.to;
    // 通组件输入输出不能连接
    if (from === to) return false;
    var fromNode = nodes[from];
    var toNode = nodes[to];
    var _ref = fromNode || {},
      _ref$data = _ref.data,
      fromType = _ref$data.type,
      fromName = _ref$data.name,
      sourceFromLines = _ref.fromLines;
    var _ref2 = toNode || {},
      _ref2$data = _ref2.data,
      toType = _ref2$data.type,
      toName = _ref2$data.name,
      targetToLines = _ref2.toLines;
    if (['start'].includes(toType) && targetToLines && targetToLines.size) {
      _message2.default.error(toName + '不能设置输入流');
      return false;
    }
    // 不能设置输出流
    if (['end'].includes(fromType) && sourceFromLines && sourceFromLines.size) {
      _message2.default.error(fromName + '不能设置输出流');
      return false;
    }
    checkLineExtendFn &&
      checkLineExtendFn({
        data: data,
        editor: editor,
      });
    return true;
  };
  (0, _react.useEffect)(function () {
    var resizeBound = function resizeBound() {
      var _ref3 =
          (editorWrapRef &&
            editorWrapRef.current &&
            editorWrapRef.current.getBoundingClientRect()) ||
          {},
        jobEditorHei = _ref3.height,
        jobEditorWid = _ref3.width;
      if (jobEditorHei && editorDomRef) {
        editorDomRef.current.style.height = jobEditorHei - (!previewMode ? 48 : 0) + 'px';
        editorDomRef.current.style.width = jobEditorWid - (!previewMode ? 140 : 0) + 'px';
      }
      if (editorRef.current) {
        editorRef.current.controller.autoFit();
      }
    };
    var init = /*#__PURE__*/ (function () {
      var _ref4 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1)
              switch ((_context.prev = _context.next)) {
                case 0:
                  dialogHandleRef.current = new _DialogHandle.default(showType);
                  resizeBound();
                  editorRef.current = new _mmeditor.default({
                    dom: editorDomRef.current,
                    showMiniMap: showMiniMap,
                    mode: previewMode ? 'view' : 'edit', // 只读模式设置 mode:"view"
                  });
                  // 注册节点
                  (0, _initShapes.default)(editorRef.current, flowNodesDict);
                  if (!graphData) {
                    _context.next = 7;
                    break;
                  }
                  _context.next = 7;
                  return setGraphData(graphData);
                case 7:
                  // 连线时校验
                  if (editorRef.current.graph.line.shapes['default']) {
                    editorRef.current.graph.line.shapes['default'].checkNewLine = checkNewLine;
                  }

                  // 注册节点⌚️
                  addEditorEvent();
                  onRef && onRef(_this);
                  setInitReady(true);
                case 11:
                case 'end':
                  return _context.stop();
              }
          }, _callee);
        }),
      );
      return function init() {
        return _ref4.apply(this, arguments);
      };
    })();
    init();
    window.addEventListener('resize', resizeBound);
    return function () {
      if (editorRef.current) {
        editorRef.current.graph.clearGraph();
        editorRef.current.destroy();
        editorRef.current = null;
      }
      setInitReady(false);
      window.removeEventListener('resize', resizeBound);
    };
  }, []);
  var setGraphData = /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(data) {
        var _convertFun, dataFormatted, convertFun;
        return _regeneratorRuntime().wrap(
          function _callee2$(_context2) {
            while (1)
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  _context2.prev = 0;
                  dataFormatted = _typeof(data) === 'object' ? data : JSON.parse(data || '{}');
                  convertFun = _DefaultDataConvert.default;
                  if (DataConvert) {
                    convertFun = DataConvert;
                  }
                  _context2.next = 6;
                  return editorRef.current.schema.setInitData(
                    (_convertFun = convertFun) === null || _convertFun === void 0
                      ? void 0
                      : _convertFun.convert(dataFormatted, editorRef.current),
                  );
                case 6:
                  _context2.next = 8;
                  return editorRef.current.controller.autoFit();
                case 8:
                  runFlow();
                  _context2.next = 14;
                  break;
                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2['catch'](0);
                  _message2.default.error(
                    '解析数据错误,' +
                      (_context2.t0 === null || _context2.t0 === void 0
                        ? void 0
                        : _context2.t0.message),
                  );
                case 14:
                case 'end':
                  return _context2.stop();
              }
          },
          _callee2,
          null,
          [[0, 11]],
        );
      }),
    );
    return function setGraphData(_x) {
      return _ref5.apply(this, arguments);
    };
  })();
  (0, _react.useEffect)(
    function () {
      if (editorRef.current && initReady) {
        setGraphData(graphData);
      }
    },
    [graphData, initReady],
  );
  (0, _react.useEffect)(
    function () {
      if (
        autoDiffAuditNodes &&
        editorRef.current &&
        initReady &&
        JSON.stringify(auditedNodes) !==
          JSON.stringify(
            auditedNodesPre === null || auditedNodesPre === void 0
              ? void 0
              : auditedNodesPre.current,
          )
      ) {
        setGraphData(graphData);
        auditedNodesPre.current = auditedNodes;
      }
    },
    [graphData, auditedNodes, autoDiffAuditNodes],
  );

  // 初始化编辑器事件
  var addEditorEvent = function addEditorEvent() {
    var timeStamp;
    // 选中
    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:click', function (_ref6) {
          var _document$getElements, _document$getElements2;
          var node = _ref6.node;
          (_document$getElements = document.getElementsByClassName('lb-workflow-header')[0]) ===
            null || _document$getElements === void 0
            ? void 0
            : (_document$getElements2 = _document$getElements.children[1]) === null ||
              _document$getElements2 === void 0
            ? void 0
            : _document$getElements2.blur();
          var now = new Date().getTime();
          if (now - timeStamp < 300) {
            // 产品说这个情况下就不用弹窗
            !dialogHide &&
              dialogHandleRef.current.show(
                node,
                editorRef === null || editorRef === void 0 ? void 0 : editorRef.current,
                function (data) {
                  setDialogShowInfo(data);
                },
              );
          }
          timeStamp = now;
          props.onNodeClick && props.onNodeClick(node.data);
        });

    // 没有选中
    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:mouseenter', function (_ref7) {
          var node = _ref7.node;
          var bbox = node.node.getBoundingClientRect();
          setToolTipInfo({
            nowTextNode: toolTipNameHandle ? toolTipNameHandle(node.data) : node.data,
            textVisible: true,
            textX: bbox.x + bbox.width / 2,
            textY: bbox.y - 5,
          });
        });
    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:mouseleave', function () {
          setToolTipInfo(null);
        });

    // 节点删除事件
    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:remove', function () {
          setToolTipInfo(null);
        });
  };

  // 动画效果
  var runFlow = /*#__PURE__*/ (function () {
    var _ref8 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
        var _ref9,
          graph,
          _ref10,
          nodes,
          lines,
          hasAuditedNodeUuids,
          auditedLine,
          key,
          node,
          _key,
          line;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                if (
                  auditedNodes === null || auditedNodes === void 0 ? void 0 : auditedNodes.length
                ) {
                  _context3.next = 2;
                  break;
                }
                return _context3.abrupt('return');
              case 2:
                (_ref9 =
                  (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) || {}),
                  (graph = _ref9.graph);
                (_ref10 = graph || {}), (nodes = _ref10.node.nodes), (lines = _ref10.line.lines);
                (hasAuditedNodeUuids = []), (auditedLine = []);
                auditedNodes.forEach(function (node) {
                  hasAuditedNodeUuids.push(node === null || node === void 0 ? void 0 : node.uuid);
                });
                auditedNodes.forEach(function (hasAudited) {
                  var _ref11 = hasAudited || {},
                    uuid = _ref11.uuid;
                  var status = 'instance '.concat(hasAudited.status || '');
                  Object.values(nodes).forEach(function (node) {
                    if (node.data.uuid === uuid) {
                      node.data.className = ''
                        .concat(node.data.className || '', ' ')
                        .concat(status);
                      node.addClass(status);
                    }
                  });
                  for (var key in lines) {
                    var line = lines[key];
                    if (uuid === line.data.to && hasAuditedNodeUuids.indexOf(line.data.from) > -1) {
                      line.data.className = ''
                        .concat(line.data.className || '', '  ')
                        .concat(status);
                      line.addClass(status);
                      auditedLine.push(line.data.uuid);
                    }
                  }
                });
                for (key in nodes) {
                  if (!hasAuditedNodeUuids.includes(key)) {
                    node = nodes[key];
                    node.data.className = ''.concat(node.data.className || '', ' unrun');
                    node.addClass('unrun');
                  }
                }
                for (_key in lines) {
                  if (!auditedLine.includes(_key)) {
                    line = lines[_key];
                    line.data.className = ''.concat(line.data.className || '', ' unrun');
                    line.addClass('unrun');
                  }
                }
              case 9:
              case 'end':
                return _context3.stop();
            }
        }, _callee3);
      }),
    );
    return function runFlow() {
      return _ref8.apply(this, arguments);
    };
  })();

  // 目标放置
  var onDrop = function onDrop(item, e) {
    var _editorRef$current, _editorRef$current2;
    // 增加节点
    var dom =
      editorRef === null || editorRef === void 0
        ? void 0
        : (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0
        ? void 0
        : _editorRef$current.dom.node;
    var name =
      (item === null || item === void 0 ? void 0 : item.initName) ||
      (item === null || item === void 0 ? void 0 : item.name);
    var _ref12 = item || {},
      _ref12$size = _ref12.size,
      size = _ref12$size === void 0 ? [] : _ref12$size;
    var transform =
      editorRef === null || editorRef === void 0 ? void 0 : editorRef.current.paper.transform();
    var info = transform.globalMatrix.split();
    var bbox = dom.getBoundingClientRect();
    if (e.clientX - bbox.x < 0 || e.clientY - bbox.y < 0) return;
    var x = (e.clientX - bbox.x - info.dx) / info.scalex - (size[0] / 2) * info.scalex;
    var y = (e.clientY - bbox.y - info.dy) / info.scalex - (size[1] / 2) * info.scalex;
    editorRef === null || editorRef === void 0
      ? void 0
      : (_editorRef$current2 = editorRef.current) === null || _editorRef$current2 === void 0
      ? void 0
      : _editorRef$current2.graph.node.addNode(
          Object.assign({}, item, {
            type: item === null || item === void 0 ? void 0 : item.type,
            data: (item === null || item === void 0 ? void 0 : item.data) || {},
            name: name,
            x: x,
            y: y,
          }),
        );
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    _extends(
      {
        ref: editorWrapRef,
        className: 'job-editor '.concat(className || ''),
      },
      editorStyle,
    ),
    !previewMode &&
      initReady &&
      (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) &&
      /*#__PURE__*/ _react.default.createElement(
        _LeftBar.default,
        _extends({}, props, {
          editor: editorRef.current,
          onDrop: onDrop,
        }),
      ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'job-content flow-editor-content',
      },
      initReady &&
        !!(editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) &&
        /*#__PURE__*/ _react.default.createElement(
          _TopBar.default,
          _extends({}, props, {
            previewMode: previewMode,
            editor: editorRef.current,
          }),
        ),
      /*#__PURE__*/ _react.default.createElement('div', {
        className: 'job-mm-editor',
        ref: editorDomRef,
      }),
      !!showLengend &&
        (LengendDom ||
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              type: 'flex',
              className: 'mm-lengend',
            },
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                className: 'success',
              },
              /*#__PURE__*/ _react.default.createElement('i', null),
              '\u8FD0\u884C\u5B8C\u6210',
            ),
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                className: 'running',
              },
              /*#__PURE__*/ _react.default.createElement('i', null),
              '\u8FD0\u884C\u4E2D',
            ),
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                className: 'fail',
              },
              /*#__PURE__*/ _react.default.createElement('i', null),
              '\u8FD0\u884C\u5931\u8D25',
            ),
          )),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        style: {
          position: 'fixed',
          left: toolTipInfo === null || toolTipInfo === void 0 ? void 0 : toolTipInfo.textX,
          top: toolTipInfo === null || toolTipInfo === void 0 ? void 0 : toolTipInfo.textY,
          display: (
            toolTipInfo === null || toolTipInfo === void 0 ? void 0 : toolTipInfo.textVisible
          )
            ? 'block'
            : 'none',
        },
      },
      /*#__PURE__*/ _react.default.createElement(_tooltip.default, {
        visible: true,
        title: ''.concat(
          toolTipInfo === null || toolTipInfo === void 0
            ? void 0
            : (_toolTipInfo$nowTextN = toolTipInfo.nowTextNode) === null ||
              _toolTipInfo$nowTextN === void 0
            ? void 0
            : _toolTipInfo$nowTextN.name,
        ),
      }),
    ),
    dialogDom === null || dialogDom === void 0
      ? void 0
      : dialogDom.map(function (dialog) {
          return /*#__PURE__*/ _react.default.cloneElement(
            dialog,
            _objectSpread(
              _objectSpread({}, props),
              {},
              {
                dialogShowInfo: dialogShowInfo,
                disabled: previewMode,
                editor: editorRef === null || editorRef === void 0 ? void 0 : editorRef.current,
                onCancel: function onCancel() {
                  setDialogShowInfo(null);
                },
              },
            ),
          );
        }),
  );
});
exports.default = _default;
