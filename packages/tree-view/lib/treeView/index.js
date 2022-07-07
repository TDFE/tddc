'use strict';

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
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
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

    return _this;
  }

  _createClass(Tree, [
    {
      key: 'init',
      value: function init(props) {
        var data = props.data,
          options = props.options,
          styleOptions = props.styleOptions,
          container = props.container;

        var _ref = options || {},
          initType = _ref.initType,
          onChange = _ref.onChange,
          customPosition = _ref.customPosition,
          fixed = _ref.fixed,
          nodeDom = _ref.nodeDom,
          lineType = _ref.lineType;

        var _ref2 = styleOptions || {},
          nodeWidth = _ref2.nodeWidth,
          nodeHeight = _ref2.nodeHeight,
          spaceVertical = _ref2.spaceVertical,
          spaceHorizontal = _ref2.spaceHorizontal,
          rootWidth = _ref2.rootWidth;

        this.initType = initType || false;
        this.nodeDom = nodeDom || _DefaultNode.default || null;
        this.onChange = onChange;
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
        // this.data = data || null;

        this.setData(data || null);
        if (!this.data) return;
        this.render();
      },
    },
    {
      key: 'setData',
      value: function setData(data) {
        this.data = data;
      },
    },
    {
      key: 'drawNode',
      value: function drawNode() {
        var _this$Nodes,
          _this$flattenNodes,
          _this2 = this;

        var result = []; // 扁平化树

        this.flattenNodes =
          ((_this$Nodes = this.Nodes) === null || _this$Nodes === void 0
            ? void 0
            : _this$Nodes.descendants()) || [];
        ((_this$flattenNodes = this.flattenNodes) === null || _this$flattenNodes === void 0
          ? void 0
          : _this$flattenNodes.forEach(function (node) {
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

              var Ele = (0, _WrapNode.default)(Eledom);
              result.push(
                /*#__PURE__*/ _react.default.createElement(Ele, {
                  key: _this2.getHierarchyId(key, 'root') + x + y,
                  id: _this2.getHierarchyId(key, 'root'),
                  width: !isExceed && _this2.constant.COMPONENT_WIDTH,
                  minWidth: _this2.constant.COMPONENT_WIDTH,
                  minHeight: _this2.constant.COMPONENT_HEIGHT,
                  x: x,
                  y: y,
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
        var _this$Nodes2,
          _this3 = this;

        this.flattenLinks =
          ((_this$Nodes2 = this.Nodes) === null || _this$Nodes2 === void 0
            ? void 0
            : _this$Nodes2.links()) || [];
        var result = [];
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
                    type: _this3.lineType,
                    linkType: _this3.linkType,
                  }),
                );
              })) || [];
        return result;
      }, // 计算定位
    },
    {
      key: 'buildPosition',
      value: function buildPosition(data) {
        var _this4 = this;

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
              }); // 设置容器宽度

        this.domWidth = domWidth;
        this.domHeight = domHeight;
        this.Nodes = Nodes;
      }, // 获取id
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
      }, // 计算节点长度
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
      }, // 节点展开 闭合
    },
    {
      key: 'nodeChange',
      value: function nodeChange(data) {
        this.data.nodeName = data.nodeName;
        this.data.children = data.children;
        this.initData(this.data);
        this.render();
      }, // 点击折叠
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
          currentNode.children = currentNode._children;
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
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      _context.next = 2;
                      return this.data.children.forEach(_utils.expandTree);

                    case 2:
                      _context.next = 4;
                      return this.initData();

                    case 4:
                      _context.next = 6;
                      return this.render();

                    case 6:
                    case 'end':
                      return _context.stop();
                  }
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
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return this.data.children.forEach(_utils.collapseTree);

                    case 2:
                      _context2.next = 4;
                      return this.initData();

                    case 4:
                      _context2.next = 6;
                      return this.render();

                    case 6:
                    case 'end':
                      return _context2.stop();
                  }
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
        this.buildPosition(this.hierarchyData);

        _reactDom.default.render(
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              style: {
                position: 'relative',
                zIndex: 9,
                width: this.domWidth + 100,
                height: this.domHeight,
                margin: '80px 0 0 20px',
              },
            },
            this.drawNode(),
            this.drawLine(),
          ),
          this.dom,
        );
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

var _default = BaseProxy;
exports.default = _default;
