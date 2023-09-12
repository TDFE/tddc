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
require('antd/lib/spin/style');
var _spin = _interopRequireDefault(require('antd/lib/spin'));
require('antd/lib/empty/style');
var _empty = _interopRequireDefault(require('antd/lib/empty'));
require('antd/lib/message/style');
var _message2 = _interopRequireDefault(require('antd/lib/message'));
var _react = _interopRequireWildcard(require('react'));
var _tntd = require('tntd');
var _universalCookie = _interopRequireDefault(require('universal-cookie'));
var _TNTLayout = _interopRequireDefault(require('../TNTLayout'));
var _reducer = _interopRequireWildcard(require('./reducer'));
var _utils = require('./utils');
var _index = _interopRequireDefault(require('./service/index'));
require('./index.less');
var _excluded = [
  'eventEmitter',
  'actions',
  'syncGlobalState',
  'children',
  'appListVisible',
  'orgListVisible',
  'orgAppListVisible',
  'onOrgChange',
  'onLanguageChange',
  'onAppChange',
  'onMenuSelect',
  'onMenuLevelChange',
  'isDev',
]; // import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
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
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var HeaderTabs = _TNTLayout.default.HeaderTabs,
  HeaderActionItem = _TNTLayout.default.HeaderActionItem,
  AuthContext = _TNTLayout.default.AuthContext;
var TGLayout = function TGLayout(props) {
  var _state$currentApp2, _state$currentOrg2;
  var _ref = window.location || {},
    origin = _ref.origin,
    pathname = _ref.pathname,
    search = _ref.search;
  var eventEmitter = props.eventEmitter,
    actions = props.actions,
    syncGlobalState = props.syncGlobalState,
    children = props.children,
    appListVisible = props.appListVisible,
    orgListVisible = props.orgListVisible,
    orgAppListVisible = props.orgAppListVisible,
    onOrgChange = props.onOrgChange,
    onLanguageChange = props.onLanguageChange,
    onAppChange = props.onAppChange,
    _onMenuSelect = props.onMenuSelect,
    onMenuLevelChange = props.onMenuLevelChange,
    isDev = props.isDev,
    rest = _objectWithoutProperties(props, _excluded);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    errorMsg = _useState2[0],
    setErrorMsg = _useState2[1];
  var _useReducer = (0, _react.useReducer)(_reducer.default, (0, _reducer.initState)()),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var _useState3 = (0, _react.useState)(
      pathname === null || pathname === void 0 ? void 0 : pathname.split('/')[1],
    ),
    _useState4 = _slicedToArray(_useState3, 2),
    routerPrefix = _useState4[0],
    setRouterPrefix = _useState4[1];
  var needAuth = !['/user/login', '/user/startup'].includes(pathname);
  var _ref2 = state || {},
    userReady = _ref2.userReady,
    menuTreeReady = _ref2.menuTreeReady,
    _ref2$menuInfo = _ref2.menuInfo,
    menuInfo = _ref2$menuInfo === void 0 ? {} : _ref2$menuInfo,
    _ref2$userInfo = _ref2.userInfo,
    userInfo = _ref2$userInfo === void 0 ? {} : _ref2$userInfo,
    _ref2$orgUuidTree = _ref2.orgUuidTree,
    orgUuidTree = _ref2$orgUuidTree === void 0 ? [] : _ref2$orgUuidTree,
    _ref2$orgAppList = _ref2.orgAppList,
    orgAppList = _ref2$orgAppList === void 0 ? [] : _ref2$orgAppList,
    _ref2$appList = _ref2.appList,
    appList = _ref2$appList === void 0 ? [] : _ref2$appList,
    currentOrgCode = _ref2.currentOrgCode,
    _ref2$currentApp = _ref2.currentApp,
    currentApp = _ref2$currentApp === void 0 ? {} : _ref2$currentApp,
    _ref2$personalMode = _ref2.personalMode,
    personalMode = _ref2$personalMode === void 0 ? {} : _ref2$personalMode;
  var _ref3 = menuInfo || {},
    _ref3$menuTree = _ref3.menuTree,
    menuTree = _ref3$menuTree === void 0 ? [] : _ref3$menuTree,
    name = _ref3.name,
    enName = _ref3.enName,
    logo = _ref3.logo,
    extendMap = _ref3.extendMap;

  // 根据机构获取渠道
  var getAppByOrgId = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(org) {
        var orgAppList;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1)
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return _index.default.getAppByOrgId({
                  orgUuid: org === null || org === void 0 ? void 0 : org.uuid,
                });
              case 2:
                orgAppList = _context.sent;
                _context.next = 5;
                return dispatch({
                  type: 'setOrgInfo',
                  payload: {
                    currentOrgCode: org === null || org === void 0 ? void 0 : org.code,
                    orgAppList: orgAppList,
                  },
                });
              case 5:
              case 'end':
                return _context.stop();
            }
        }, _callee);
      }),
    );
    return function getAppByOrgId(_x) {
      return _ref4.apply(this, arguments);
    };
  })();

  // 退出登陆
  var onLogout = function onLogout() {
    _index.default.signOut().then(function () {
      sessionStorage.setItem('_csrf_', '');
      sessionStorage.clear();
      localStorage.clear();
      if (pathname !== '/user/login') {
        window.location.href = '/user/login';
      }
    });
  };
  (0, _react.useEffect)(
    function () {
      if (state) {
        if (
          (state === null || state === void 0 ? void 0 : state.menuTreeReady) &&
          (state === null || state === void 0 ? void 0 : state.userReady)
        ) {
          // 子应用同步数据
          syncGlobalState && syncGlobalState(state);
          // 同步基座数据
          (actions === null || actions === void 0 ? void 0 : actions.setGlobalState) &&
            (actions === null || actions === void 0 ? void 0 : actions.setGlobalState(state));
        }
      }
    },
    [state],
  );
  (0, _react.useEffect)(
    function () {
      var _state$currentApp;
      if (
        (_state$currentApp = state.currentApp) === null || _state$currentApp === void 0
          ? void 0
          : _state$currentApp.name
      ) {
        actions === null || actions === void 0 ? void 0 : actions.setCurrentApp(state.currentApp);
      }
    },
    [
      (_state$currentApp2 = state.currentApp) === null || _state$currentApp2 === void 0
        ? void 0
        : _state$currentApp2.name,
    ],
  );
  (0, _react.useEffect)(
    function () {
      var _state$currentOrg;
      if (
        (_state$currentOrg = state.currentOrg) === null || _state$currentOrg === void 0
          ? void 0
          : _state$currentOrg.name
      ) {
        actions === null || actions === void 0
          ? void 0
          : actions.setCurrentOrg(
              _objectSpread(
                _objectSpread({}, state.currentOrg),
                {},
                {
                  uuid: state.currentOrg.key,
                },
              ),
            );
      }
    },
    [
      (_state$currentOrg2 = state.currentOrg) === null || _state$currentOrg2 === void 0
        ? void 0
        : _state$currentOrg2.name,
    ],
  );
  (0, _react.useEffect)(
    function () {
      if (needAuth) {
        // 如果没有csrf则默认跳转到登录页面
        if (!sessionStorage.getItem('_csrf_') && process.env.NODE_ENV !== 'development' && !isDev) {
          if (search) {
            var callbackUrl = origin + pathname + encodeURIComponent(search);
            window.location = '/user/login?callbackUrl=' + callbackUrl;
          } else {
            window.location = '/user/login';
          }
        }
        // 获取用户信息
        _index.default
          .getUserInfo()
          .then(
            /*#__PURE__*/ (function () {
              var _ref5 = _asyncToGenerator(
                /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(data) {
                  var _ref6,
                    _ref6$orgGroup,
                    orgGroup,
                    apps,
                    _formatOrgApp,
                    orgList,
                    orgUuidTree,
                    orgUuidMap,
                    orgCodeMap,
                    currentApp,
                    appList,
                    appMap,
                    _ref7,
                    uuid,
                    code,
                    currentOrg;
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1)
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          // 获取机构树
                          (_ref6 = data || {}),
                            (_ref6$orgGroup = _ref6.orgGroup),
                            (orgGroup = _ref6$orgGroup === void 0 ? {} : _ref6$orgGroup),
                            (apps = _ref6.apps);
                          (_formatOrgApp = (0, _utils.formatOrgApp)(orgGroup, apps)),
                            (orgList = _formatOrgApp.orgList),
                            (orgUuidTree = _formatOrgApp.orgUuidTree),
                            (orgUuidMap = _formatOrgApp.orgUuidMap),
                            (orgCodeMap = _formatOrgApp.orgCodeMap),
                            (currentApp = _formatOrgApp.currentApp),
                            (appList = _formatOrgApp.appList),
                            (appMap = _formatOrgApp.appMap);
                          (_ref7 = orgGroup || {}), (uuid = _ref7.uuid), (code = _ref7.code);
                          if (localStorage.hasOwnProperty('currentOrg_new') && orgGroup) {
                            try {
                              currentOrg = JSON.parse(localStorage.getItem('currentOrg_new'));
                              if (orgCodeMap[currentOrg.code]) {
                                uuid = currentOrg.key;
                                code = currentOrg.code;
                              }
                            } catch (e) {}
                          }
                          _context2.next = 6;
                          return getAppByOrgId({
                            uuid: uuid,
                            code: code,
                          });
                        case 6:
                          dispatch({
                            type: 'initUserInfo',
                            payload: {
                              userInfo: data,
                              orgList: orgList,
                              orgUuidTree: orgUuidTree,
                              orgUuidMap: orgUuidMap,
                              orgCodeMap: orgCodeMap,
                              currentApp: currentApp,
                              appList: appList,
                              appMap: appMap,
                              userReady: true,
                              currentOrg: {
                                key: orgGroup.uuid,
                                name: orgGroup.name,
                                code: orgGroup.code,
                              },
                            },
                          });
                        case 7:
                        case 'end':
                          return _context2.stop();
                      }
                  }, _callee2);
                }),
              );
              return function (_x2) {
                return _ref5.apply(this, arguments);
              };
            })(),
          )
          .catch(function (e) {
            dispatch({
              type: 'initUserReady',
            });
            setErrorMsg(e.message || '加载用户失败');
          });
        // 获取菜单信息
        _index.default
          .getMenuTree()
          .then(function (data) {
            document.title = (data === null || data === void 0 ? void 0 : data.name) || '';
            dispatch({
              type: 'initMenuTree',
              payload: data,
            });
          })
          .catch(function (e) {
            dispatch({
              type: 'initMenuTreeReady',
            });
            setErrorMsg(e.message || '加载用户失败');
          });
      }
    },
    [routerPrefix],
  );
  (0, _react.useEffect)(
    function () {
      // 切换应用的时候重新获取用户信息和解决方案接口
      var curPathName = pathname === null || pathname === void 0 ? void 0 : pathname.split('/')[1];
      if (curPathName !== routerPrefix && routerPrefix) {
        setRouterPrefix(curPathName);
      }
    },
    [pathname],
  );

  // 模拟登陆
  var mockLogin = /*#__PURE__*/ (function () {
    var _ref8 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(p) {
        var _ref9,
          account,
          password,
          params,
          _ref10,
          tempRandom,
          authMessage,
          authResult,
          res,
          csrfToken;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1)
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (_ref9 = p || {}), (account = _ref9.account), (password = _ref9.password);
                params = {
                  account: account,
                  password: (0, _utils.rsaPwd)(password),
                };
                (_ref10 = ['', false, '']),
                  (tempRandom = _ref10.tempRandom),
                  (authMessage = _ref10.authMessage); // 获取加盐随机数
                _context3.next = 5;
                return _index.default.getAuthCode(params);
              case 5:
                authResult = _context3.sent;
                tempRandom = authResult;
                authMessage =
                  authResult === null || authResult === void 0 ? void 0 : authResult.message;
                if (!tempRandom) {
                  _context3.next = 23;
                  break;
                }
                _context3.next = 11;
                return _index.default.userLogin(
                  _objectSpread(
                    _objectSpread({}, params),
                    {},
                    {
                      tempRandom: tempRandom,
                    },
                  ),
                );
              case 11:
                res = _context3.sent;
                if (!res) {
                  _context3.next = 20;
                  break;
                }
                csrfToken = res.csrfToken;
                sessionStorage.setItem('_csrf_', csrfToken);
                localStorage.setItem('_sync_qjt_csrf_', csrfToken); // 新的csrf同步到其他页面
                localStorage.setItem('developmentLoginData', JSON.stringify(params));
                location.reload();
                _context3.next = 22;
                break;
              case 20:
                _message2.default.error(res.message);
                return _context3.abrupt('return', Promise.reject(res.message));
              case 22:
                return _context3.abrupt('return');
              case 23:
                _message2.default.error(authMessage || '账号或者密码错误');
                return _context3.abrupt(
                  'return',
                  Promise.reject(authMessage || '账号或者密码错误'),
                );
              case 25:
              case 'end':
                return _context3.stop();
            }
        }, _callee3);
      }),
    );
    return function mockLogin(_x3) {
      return _ref8.apply(this, arguments);
    };
  })();

  // 监听机构变更
  var orgChange = function orgChange(curOrgTree) {
    onOrgChange && onOrgChange(curOrgTree);
    eventEmitter === null || eventEmitter === void 0
      ? void 0
      : eventEmitter.emit('appChange', true);
    getAppByOrgId(curOrgTree);
  };

  // 渠道切换
  var appChange = function appChange(app) {
    onAppChange && onAppChange(app);
    eventEmitter === null || eventEmitter === void 0
      ? void 0
      : eventEmitter.emit('appChange', true);
    dispatch({
      type: 'setCurrentApp',
      payload: {
        currentApp: app,
      },
    });
  };

  // 语言切换
  var languageChange = function languageChange(language) {
    onLanguageChange && onLanguageChange(language);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: _objectSpread(
          _objectSpread({}, personalMode),
          {},
          {
            lang: language,
          },
        ),
      },
    });
    var cookies = new _universalCookie.default();
    cookies.set('lang', language, {
      path: '/',
    });
  };

  // 菜单级别切换
  var menuLevelChange = function menuLevelChange(menuLevel) {
    onMenuLevelChange && onMenuLevelChange(menuLevel);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: _objectSpread(
          _objectSpread({}, personalMode),
          {},
          {
            menuLevel: menuLevel,
          },
        ),
      },
    });
  };
  return (
    /*#__PURE__*/
    // <ConfigProvider locale={personalMode?.lang === 'en' ? enUS : zhCN}>
    _react.default.createElement(
      _TNTLayout.default,
      _extends(
        {
          key: !actions && ''.concat(currentOrgCode, '_').concat(currentApp.name),
          type: 'enterprise',
          logo:
            logo &&
            /*#__PURE__*/ _react.default.createElement('img', {
              className: 'logo',
              style: {
                opacity: logo && logo.indexOf('white') ? 0.85 : 1,
              },
              src: logo,
            }),
          name: name,
          enName: enName,
          userInfo: userInfo,
          menus: menuTree,
          extendMap: extendMap,
          onLogout: onLogout,
          appList: appListVisible && appList,
          onAppChange: appChange,
          orgList: orgListVisible && orgUuidTree[0],
          onOrgChange: orgChange,
          onMenuLevelChange: menuLevelChange,
          orgAppShow: orgAppListVisible,
          orgAppList: orgAppList,
          onLanguageChange: languageChange,
          onMenuSelect: function onMenuSelect(data) {
            var _data$path;
            if (
              data === null || data === void 0
                ? void 0
                : (_data$path = data.path) === null || _data$path === void 0
                ? void 0
                : _data$path.startsWith('/'.concat(routerPrefix))
            ) {
              eventEmitter === null || eventEmitter === void 0
                ? void 0
                : eventEmitter.emit('menuClick', true);
            }
            _onMenuSelect && _onMenuSelect(data);
          },
        },
        rest,
        {
          // 开发模式增加登录
          extraHeaderActions: [
            process.env.NODE_ENV === 'development' &&
              !actions &&
              /*#__PURE__*/ _react.default.createElement(
                HeaderActionItem,
                {
                  key: 'help',
                },
                /*#__PURE__*/ _react.default.createElement(_tntd.DevelopmentLogin, {
                  signIn: mockLogin,
                }),
              ),
          ],
        },
      ),
      userReady && menuTreeReady
        ? errorMsg
          ? /*#__PURE__*/ _react.default.createElement(_empty.default, {
              description: errorMsg,
              imageStyle: {
                marginTop: '150px',
              },
            })
          : children
        : /*#__PURE__*/ _react.default.createElement(_spin.default, {
            className: 'subapp-loading',
          }),
    )
    // </ConfigProvider>
  );
};

TGLayout.getLayoutPageTitle = _utils.getLayoutPageTitle;
TGLayout.HeaderTabs = HeaderTabs;
TGLayout.AuthContext = AuthContext;
TGLayout.HeaderActionItem = HeaderActionItem;
var _default = TGLayout;
exports.default = _default;
