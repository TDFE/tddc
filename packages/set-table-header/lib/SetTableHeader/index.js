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
require('antd/lib/button/style');
var _button = _interopRequireDefault(require('antd/lib/button'));
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/alert/style');
var _alert = _interopRequireDefault(require('antd/lib/alert'));
require('antd/lib/message/style');
var _message2 = _interopRequireDefault(require('antd/lib/message'));
require('antd/lib/select/style');
var _select = _interopRequireDefault(require('antd/lib/select'));
var _react = _interopRequireWildcard(require('react'));
var _reactSortablejs = _interopRequireDefault(require('react-sortablejs'));
var _utils = require('../utils');
require('./index.less');
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
function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        ) {}
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    defineProperty =
      Object.defineProperty ||
      function (obj, key, desc) {
        obj[key] = desc.value;
      },
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
      defineProperty(generator, '_invoke', { value: makeInvokeMethod(innerFn, self, context) }),
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
    defineProperty(this, '_invoke', {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return (previousPromise = previousPromise
          ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      },
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
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
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method)
      return (
        (context.delegate = null),
        ('throw' === methodName &&
          delegate.iterator.return &&
          ((context.method = 'return'),
          (context.arg = undefined),
          maybeInvokeDelegate(delegate, context),
          'throw' === context.method)) ||
          ('return' !== methodName &&
            ((context.method = 'throw'),
            (context.arg = new TypeError(
              "The iterator does not provide a '" + methodName + "' method",
            )))),
        ContinueSentinel
      );
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
    defineProperty(Gp, 'constructor', { value: GeneratorFunctionPrototype, configurable: !0 }),
    defineProperty(GeneratorFunctionPrototype, 'constructor', {
      value: GeneratorFunction,
      configurable: !0,
    }),
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
    (exports.keys = function (val) {
      var object = Object(val),
        keys = [];
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
var Option = _select.default.Option;
var SetTableHeader = function SetTableHeader(_ref) {
  var renderItem = _ref.renderItem,
    _ref$allTableHead = _ref.allTableHead,
    allTableHead = _ref$allTableHead === void 0 ? [] : _ref$allTableHead,
    _ref$currentTableHead = _ref.currentTableHead,
    currentTableHead = _ref$currentTableHead === void 0 ? [] : _ref$currentTableHead,
    _ref$defaultTableHead = _ref.defaultTableHead,
    defaultTableHead = _ref$defaultTableHead === void 0 ? [] : _ref$defaultTableHead,
    onSetDefault = _ref.onSetDefault,
    _ref$onCancel = _ref.onCancel,
    onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
    _ref$onOk = _ref.onOk,
    onOk =
      _ref$onOk === void 0
        ? /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            }),
          )
        : _ref$onOk;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  // 当前被选中的表头
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    configItem = _useState4[0],
    setConfigItem = _useState4[1];
  (0, _react.useEffect)(
    function () {
      if (Array.isArray(currentTableHead)) {
        setConfigItem(_toConsumableArray(currentTableHead));
      }
    },
    [currentTableHead],
  );

  /** 拖拽修改排序 */
  var changeReactSortable = function changeReactSortable(order) {
    configItem.sort(function (a, b) {
      return order.indexOf(a['field']) - order.indexOf(b['field']);
    });
    setConfigItem(_toConsumableArray(configItem));
  };

  /** 新增一行 */
  var addTableHeadCustomItem = function addTableHeadCustomItem(index) {
    configItem.splice(index + 1, 0, {
      uuid: (0, _utils.makeRandomCode)(),
      field: undefined,
    });
    setConfigItem(_toConsumableArray(configItem));
  };

  /** 修改当前行选中的字段 */
  var changeTableHeadItem = function changeTableHeadItem(index, item) {
    var isExist = configItem.find(function (res) {
      return res.field === item.field;
    });
    if (!isExist) {
      configItem.splice(index, 1, item);
      setConfigItem(_toConsumableArray(configItem));
    } else {
      _message2.default.warning('表头已存在');
    }
  };

  /** 删除一行 */
  var deleteTableHeadCustomItem = function deleteTableHeadCustomItem(index) {
    configItem.splice(index, 1);
    setConfigItem(_toConsumableArray(configItem));
  };

  /** 设置默认值 */
  var handleSetDefault = /*#__PURE__*/ (function () {
    var _ref3 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2() {
        var defaultValue;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                if (!defaultTableHead) {
                  _context2.next = 4;
                  break;
                }
                setConfigItem(defaultTableHead);
                _context2.next = 9;
                break;
              case 4:
                if (!onSetDefault) {
                  _context2.next = 9;
                  break;
                }
                _context2.next = 7;
                return onSetDefault();
              case 7:
                defaultValue = _context2.sent;
                setConfigItem(defaultValue);
              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      }),
    );
    return function handleSetDefault() {
      return _ref3.apply(this, arguments);
    };
  })();

  /** 保存 */
  var handleOk = /*#__PURE__*/ (function () {
    var _ref4 = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3() {
        var hasEntry;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                hasEntry =
                  configItem === null || configItem === void 0
                    ? void 0
                    : configItem.some(function (_ref5) {
                        var field = _ref5.field;
                        return !field;
                      });
                if (!hasEntry) {
                  _context3.next = 4;
                  break;
                }
                _message2.default.error('有字段为空,请处理');
                return _context3.abrupt('return');
              case 4:
                if (!(Array.isArray(configItem) && !!configItem.length)) {
                  _context3.next = 10;
                  break;
                }
                setLoading(true);
                _context3.next = 8;
                return onOk().finally(function () {
                  setLoading(false);
                });
              case 8:
                _context3.next = 11;
                break;
              case 10:
                _message2.default.error('请至少选择一个表头');
              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      }),
    );
    return function handleOk() {
      return _ref4.apply(this, arguments);
    };
  })();
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'set-columns-wrapper',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'set-columns-body',
      },
      /*#__PURE__*/ _react.default.createElement(_alert.default, {
        style: {
          marginBottom: 10,
        },
        message: '\u8868\u5934\u5B57\u6BB5\u53EF\u62D6\u52A8\u6392\u5E8F',
        type: 'info',
        showIcon: true,
      }),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'set-col-head',
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactSortablejs.default,
          {
            options: {
              animation: 150,
              ghostClass: 'blue-background-class',
            },
            tag: 'div',
            onChange: function onChange(order) {
              changeReactSortable(order);
            },
          },
          configItem.map(function (item, index) {
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'table-item',
                key: index,
                'data-id': item === null || item === void 0 ? void 0 : item.field,
              },
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: 'left',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _select.default,
                  {
                    placeholder: '\u8BF7\u9009\u62E9\u8868\u5934\u5B57\u6BB5',
                    className: 'table-item-select',
                    onChange: function onChange(val, e) {
                      changeTableHeadItem(index, e.props.item);
                    },
                    value: item.field === ''.concat(index) ? undefined : item.field,
                    showSearch: true,
                    filterOption: function filterOption(input, option) {
                      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    },
                  },
                  allTableHead.map(function (subItem) {
                    if (renderItem) {
                      return renderItem(subItem);
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      Option,
                      {
                        key: subItem.field,
                        item: subItem,
                        value: subItem.field,
                      },
                      subItem.fieldName,
                    );
                  }),
                ),
              ),
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: 'right',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _tooltip.default,
                  {
                    title: '\u6DFB\u52A0\u4E00\u9879',
                    placement: 'left',
                  },
                  /*#__PURE__*/ _react.default.createElement(_icon.default, {
                    className: 'add',
                    type: 'plus-circle-o',
                    onClick: function onClick() {
                      addTableHeadCustomItem(index);
                    },
                  }),
                ),
                configItem.length > 3 &&
                  /*#__PURE__*/ _react.default.createElement(
                    _tooltip.default,
                    {
                      title: '\u79FB\u9664\u5F53\u524D\u884C',
                      placement: 'right',
                    },
                    /*#__PURE__*/ _react.default.createElement(_icon.default, {
                      className: 'delete',
                      type: 'delete',
                      onClick: function onClick() {
                        deleteTableHeadCustomItem(index);
                      },
                    }),
                  ),
              ),
            );
          }),
        ),
      ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'ant-modal-footer modal-footer',
      },
      /*#__PURE__*/ _react.default.createElement(
        _button.default,
        {
          type: 'primary',
          onClick: onCancel,
        },
        '\u53D6 \u6D88',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _button.default,
        {
          type: 'primary',
          onClick: handleSetDefault,
        },
        '\u6062\u590D\u9ED8\u8BA4\u8868\u5934',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _button.default,
        {
          type: 'primary',
          onClick: handleOk,
          loading: loading,
        },
        '\u786E \u5B9A',
      ),
    ),
  );
};
var _default = /*#__PURE__*/ (0, _react.memo)(SetTableHeader);
exports.default = _default;
