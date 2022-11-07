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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

function _defineProperty(obj, key, value) {
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

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _regeneratorRuntime() {
  'use strict';
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime =
    function _regeneratorRuntime() {
      return exports;
    };
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    $Symbol = 'function' == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || '@@iterator',
    asyncIteratorSymbol = $Symbol.asyncIterator || '@@asyncIterator',
    toStringTagSymbol = $Symbol.toStringTag || '@@toStringTag';
  function define(obj, key, value) {
    return (
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      obj[key]
    );
  }
  try {
    define({}, '');
  } catch (err) {
    define = function define(obj, key, value) {
      return (obj[key] = value);
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return (
      (generator._invoke = (function (innerFn, self, context) {
        var state = 'suspendedStart';
        return function (method, arg) {
          if ('executing' === state) throw new Error('Generator is already running');
          if ('completed' === state) {
            if ('throw' === method) throw arg;
            return doneResult();
          }
          for (context.method = method, context.arg = arg; ; ) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if ('next' === context.method) context.sent = context._sent = context.arg;
            else if ('throw' === context.method) {
              if ('suspendedStart' === state) throw ((state = 'completed'), context.arg);
              context.dispatchException(context.arg);
            } else 'return' === context.method && context.abrupt('return', context.arg);
            state = 'executing';
            var record = tryCatch(innerFn, self, context);
            if ('normal' === record.type) {
              if (
                ((state = context.done ? 'completed' : 'suspendedYield'),
                record.arg === ContinueSentinel)
              )
                continue;
              return { value: record.arg, done: context.done };
            }
            'throw' === record.type &&
              ((state = 'completed'), (context.method = 'throw'), (context.arg = record.arg));
          }
        };
      })(innerFn, self, context)),
      generator
    );
  }
  function tryCatch(fn, obj, arg) {
    try {
      return { type: 'normal', arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: 'throw', arg: err };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype &&
    NativeIteratorPrototype !== Op &&
    hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
    (IteratorPrototype = NativeIteratorPrototype);
  var Gp =
    (GeneratorFunctionPrototype.prototype =
    Generator.prototype =
      Object.create(IteratorPrototype));
  function defineIteratorMethods(prototype) {
    ['next', 'throw', 'return'].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ('throw' !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && 'object' == _typeof(value) && hasOwn.call(value, '__await')
          ? PromiseImpl.resolve(value.__await).then(
              function (value) {
                invoke('next', value, resolve, reject);
              },
              function (err) {
                invoke('throw', err, resolve, reject);
              },
            )
          : PromiseImpl.resolve(value).then(
              function (unwrapped) {
                (result.value = unwrapped), resolve(result);
              },
              function (error) {
                return invoke('throw', error, resolve, reject);
              },
            );
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return (previousPromise = previousPromise
        ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
        : callInvokeWithMethodAndArg());
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (((context.delegate = null), 'throw' === context.method)) {
        if (
          delegate.iterator.return &&
          ((context.method = 'return'),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          'throw' === context.method)
        )
          return ContinueSentinel;
        (context.method = 'throw'),
          (context.arg = new TypeError("The iterator does not provide a 'throw' method"));
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ('throw' === record.type)
      return (
        (context.method = 'throw'),
        (context.arg = record.arg),
        (context.delegate = null),
        ContinueSentinel
      );
    var info = record.arg;
    return info
      ? info.done
        ? ((context[delegate.resultName] = info.value),
          (context.next = delegate.nextLoc),
          'return' !== context.method && ((context.method = 'next'), (context.arg = undefined)),
          (context.delegate = null),
          ContinueSentinel)
        : info
      : ((context.method = 'throw'),
        (context.arg = new TypeError('iterator result is not an object')),
        (context.delegate = null),
        ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    1 in locs && (entry.catchLoc = locs[1]),
      2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
      this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    (record.type = 'normal'), delete record.arg, (entry.completion = record);
  }
  function Context(tryLocsList) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      tryLocsList.forEach(pushTryEntry, this),
      this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ('function' == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length; ) {
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
            }
            return (next.value = undefined), (next.done = !0), next;
          };
        return (next.next = next);
      }
    }
    return { next: doneResult };
  }
  function doneResult() {
    return { value: undefined, done: !0 };
  }
  return (
    (GeneratorFunction.prototype = GeneratorFunctionPrototype),
    define(Gp, 'constructor', GeneratorFunctionPrototype),
    define(GeneratorFunctionPrototype, 'constructor', GeneratorFunction),
    (GeneratorFunction.displayName = define(
      GeneratorFunctionPrototype,
      toStringTagSymbol,
      'GeneratorFunction',
    )),
    (exports.isGeneratorFunction = function (genFun) {
      var ctor = 'function' == typeof genFun && genFun.constructor;
      return (
        !!ctor &&
        (ctor === GeneratorFunction || 'GeneratorFunction' === (ctor.displayName || ctor.name))
      );
    }),
    (exports.mark = function (genFun) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
          : ((genFun.__proto__ = GeneratorFunctionPrototype),
            define(genFun, toStringTagSymbol, 'GeneratorFunction')),
        (genFun.prototype = Object.create(Gp)),
        genFun
      );
    }),
    (exports.awrap = function (arg) {
      return { __await: arg };
    }),
    defineIteratorMethods(AsyncIterator.prototype),
    define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
      return this;
    }),
    (exports.AsyncIterator = AsyncIterator),
    (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      void 0 === PromiseImpl && (PromiseImpl = Promise);
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn)
        ? iter
        : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
    }),
    defineIteratorMethods(Gp),
    define(Gp, toStringTagSymbol, 'Generator'),
    define(Gp, iteratorSymbol, function () {
      return this;
    }),
    define(Gp, 'toString', function () {
      return '[object Generator]';
    }),
    (exports.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      return (
        keys.reverse(),
        function next() {
          for (; keys.length; ) {
            var key = keys.pop();
            if (key in object) return (next.value = key), (next.done = !1), next;
          }
          return (next.done = !0), next;
        }
      );
    }),
    (exports.values = values),
    (Context.prototype = {
      constructor: Context,
      reset: function reset(skipTempReset) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = undefined),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = undefined),
          this.tryEntries.forEach(resetTryEntry),
          !skipTempReset)
        )
          for (var name in this) {
            't' === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
          }
      },
      stop: function stop() {
        this.done = !0;
        var rootRecord = this.tryEntries[0].completion;
        if ('throw' === rootRecord.type) throw rootRecord.arg;
        return this.rval;
      },
      dispatchException: function dispatchException(exception) {
        if (this.done) throw exception;
        var context = this;
        function handle(loc, caught) {
          return (
            (record.type = 'throw'),
            (record.arg = exception),
            (context.next = loc),
            caught && ((context.method = 'next'), (context.arg = undefined)),
            !!caught
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i],
            record = entry.completion;
          if ('root' === entry.tryLoc) return handle('end');
          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, 'catchLoc'),
              hasFinally = hasOwn.call(entry, 'finallyLoc');
            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            } else {
              if (!hasFinally) throw new Error('try statement without catch or finally');
              if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
            }
          }
        }
      },
      abrupt: function abrupt(type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (
            entry.tryLoc <= this.prev &&
            hasOwn.call(entry, 'finallyLoc') &&
            this.prev < entry.finallyLoc
          ) {
            var finallyEntry = entry;
            break;
          }
        }
        finallyEntry &&
          ('break' === type || 'continue' === type) &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc &&
          (finallyEntry = null);
        var record = finallyEntry ? finallyEntry.completion : {};
        return (
          (record.type = type),
          (record.arg = arg),
          finallyEntry
            ? ((this.method = 'next'), (this.next = finallyEntry.finallyLoc), ContinueSentinel)
            : this.complete(record)
        );
      },
      complete: function complete(record, afterLoc) {
        if ('throw' === record.type) throw record.arg;
        return (
          'break' === record.type || 'continue' === record.type
            ? (this.next = record.arg)
            : 'return' === record.type
            ? ((this.rval = this.arg = record.arg), (this.method = 'return'), (this.next = 'end'))
            : 'normal' === record.type && afterLoc && (this.next = afterLoc),
          ContinueSentinel
        );
      },
      finish: function finish(finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc)
            return (
              this.complete(entry.completion, entry.afterLoc),
              resetTryEntry(entry),
              ContinueSentinel
            );
        }
      },
      catch: function _catch(tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if ('throw' === record.type) {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function delegateYield(iterable, resultName, nextLoc) {
        return (
          (this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc,
          }),
          'next' === this.method && (this.arg = undefined),
          ContinueSentinel
        );
      },
    }),
    exports
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var _default = function _default(props) {
  var _toolTipInfo$nowTextN;

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
    checkLineExtendFn = props.checkLineExtendFn;
  var previewMode = type === 'view';

  var checkNewLine = function checkNewLine(data, editor) {
    var nodes = editor.graph.node.nodes;
    var from = data.from,
      to = data.to; // 通组件输入输出不能连接

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
    } // 不能设置输出流

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
    var init = /*#__PURE__*/ (function () {
      var _ref3 = _asyncToGenerator(
        /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
          var _document$querySelect, jobEditorHei, jobEditorWid;

          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  dialogHandleRef.current = new _DialogHandle.default(showType);
                  (_document$querySelect = document
                    .querySelector('.job-editor')
                    .getBoundingClientRect()),
                    (jobEditorHei = _document$querySelect.height),
                    (jobEditorWid = _document$querySelect.width);

                  if (jobEditorHei && editorDomRef) {
                    editorDomRef.current.style.height =
                      jobEditorHei - (!previewMode ? 48 : 0) + 'px';
                    editorDomRef.current.style.width =
                      jobEditorWid - (!previewMode ? 140 : 0) + 'px';
                  }

                  editorRef.current = new _mmeditor.default({
                    dom: editorDomRef.current,
                    showMiniMap: showMiniMap,
                    mode: previewMode ? 'view' : 'edit', // 只读模式设置 mode:"view"
                  }); // 注册节点

                  (0, _initShapes.default)(editorRef.current, flowNodesDict);

                  if (!graphData) {
                    _context.next = 8;
                    break;
                  }

                  _context.next = 8;
                  return setGraphData(graphData);

                case 8:
                  // 连线时校验
                  if (editorRef.current.graph.line.shapes['default']) {
                    editorRef.current.graph.line.shapes['default'].checkNewLine = checkNewLine;
                  } // 注册节点⌚️

                  addEditorEvent();
                  onRef && onRef(_this);
                  setInitReady(true);

                case 12:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }),
      );

      return function init() {
        return _ref3.apply(this, arguments);
      };
    })();

    init();
    return function () {
      if (editorRef.current) {
        editorRef.current.graph.clearGraph();
        editorRef.current.destroy();
        editorRef.current = null;
      }

      setInitReady(false);
    };
  }, []);

  var setGraphData = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(data) {
        var _convertFun, dataFormatted, convertFun;

        return _regeneratorRuntime().wrap(
          function _callee2$(_context2) {
            while (1) {
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
            }
          },
          _callee2,
          null,
          [[0, 11]],
        );
      }),
    );

    return function setGraphData(_x) {
      return _ref4.apply(this, arguments);
    };
  })();

  (0, _react.useEffect)(
    function () {
      if (editorRef.current && initReady) {
        setGraphData(graphData);
      }
    },
    [graphData, initReady],
  ); // 初始化编辑器事件

  var addEditorEvent = function addEditorEvent() {
    var timeStamp; // 选中

    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:click', function (_ref5) {
          var _document$getElements, _document$getElements2;

          var node = _ref5.node;
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
        }); // 没有选中

    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:mouseenter', function (_ref6) {
          var node = _ref6.node;
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
        }); // 节点删除事件

    editorRef === null || editorRef === void 0
      ? void 0
      : editorRef.current.graph.on('node:remove', function () {
          setToolTipInfo(null);
        });
  }; // 动画效果

  var runFlow = /*#__PURE__*/ (function () {
    var _ref7 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
        var _ref8,
          graph,
          _ref9,
          nodes,
          lines,
          hasAuditedNodeUuids,
          auditedLine,
          key,
          node,
          _key,
          line;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
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
                (_ref8 =
                  (editorRef === null || editorRef === void 0 ? void 0 : editorRef.current) || {}),
                  (graph = _ref8.graph);
                (_ref9 = graph || {}), (nodes = _ref9.node.nodes), (lines = _ref9.line.lines);
                (hasAuditedNodeUuids = []), (auditedLine = []);
                auditedNodes.forEach(function (node) {
                  hasAuditedNodeUuids.push(node === null || node === void 0 ? void 0 : node.uuid);
                });
                auditedNodes.forEach(function (hasAudited) {
                  var _ref10 = hasAudited || {},
                    uuid = _ref10.uuid;

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
          }
        }, _callee3);
      }),
    );

    return function runFlow() {
      return _ref7.apply(this, arguments);
    };
  })(); // 目标放置

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

    var _ref11 = item || {},
      _ref11$size = _ref11.size,
      size = _ref11$size === void 0 ? [] : _ref11$size;

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
};

exports.default = _default;
