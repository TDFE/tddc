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
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/col/style');
var _col = _interopRequireDefault(require('antd/lib/col'));
require('antd/lib/input/style');
var _input = _interopRequireDefault(require('antd/lib/input'));
require('antd/lib/select/style');
var _select = _interopRequireDefault(require('antd/lib/select'));
var _react = _interopRequireDefault(require('react'));
var _lodash = require('lodash');
var _virtualCascader = _interopRequireDefault(require('@tddc/virtual-cascader'));
var _index = require('../utils/index');
require('./index.less');
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
            for (; ++i < iterable.length; )
              if (hasOwn.call(iterable, i))
                return (next.value = iterable[i]), (next.done = !1), next;
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
      for (var key in object) keys.push(key);
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
          for (var name in this)
            't' === name.charAt(0) &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1)) &&
              (this[name] = undefined);
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
} // import conditionOperator from '../constants';
var Option = _select.default.Option;
var InputGroup = _input.default.Group;
var OneCondition = /*#__PURE__*/ (function (_React$PureComponent) {
  _inherits(OneCondition, _React$PureComponent);
  var _super = _createSuper(OneCondition);
  function OneCondition(props) {
    var _this;
    _classCallCheck(this, OneCondition);
    _this = _super.call(this, props);
    _this.deleteCondition = _this.deleteCondition.bind(_assertThisInitialized(_this));
    _this.addCondition = _this.addCondition.bind(_assertThisInitialized(_this));
    _this.changeLogicOperator = _this.changeLogicOperator.bind(_assertThisInitialized(_this));
    _this.changeConditionField = _this.changeConditionField.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(OneCondition, [
    {
      key: 'addCondition',
      value: function addCondition() {
        var _this$props = this.props,
          conditionArr = _this$props.conditionArr,
          setCondition = _this$props.setCondition,
          allCondition = _this$props.allCondition;
        var newAllCondition = (0, _lodash.cloneDeep)(allCondition);
        var singleConditionTemp = {
          property: null,
          op: '==',
          enumTypeValues: null,
          value: null,
          propertyDataType: null,
          type: 'context',
          rightValueType: 'context',
        };
        newAllCondition[conditionArr[0]]['children'].splice(
          conditionArr[1] + 1,
          0,
          singleConditionTemp,
        );
        setCondition(newAllCondition);
      },
    },
    {
      key: 'deleteCondition',
      value: function deleteCondition() {
        var _this$props2 = this.props,
          conditionArr = _this$props2.conditionArr,
          setCondition = _this$props2.setCondition,
          allCondition = _this$props2.allCondition;
        var newAllCondition = (0, _lodash.cloneDeep)(allCondition);
        if (conditionArr.length === 1) {
          newAllCondition.splice(conditionArr[0], 1);
          newAllCondition = newAllCondition.map(function (v, index) {
            v['priority'] = index + 1;
            return v;
          });
          setCondition(newAllCondition);
        } else if (conditionArr.length === 2) {
          // 如果是条件组，还需要判断是否只有一条数据了
          var groupList = newAllCondition[conditionArr[0]]['children'];
          if (groupList.length === 1) {
            newAllCondition.splice(conditionArr[0], 1);
            newAllCondition = newAllCondition.map(function (v, index) {
              v['priority'] = index + 1;
              return v;
            });
          } else {
            groupList.splice(conditionArr[1], 1);
          }
          setCondition(newAllCondition);
        }
      },
    },
    {
      key: 'changeLogicOperator',
      value: function changeLogicOperator(e) {
        var _this$props3 = this.props,
          conditionArr = _this$props3.conditionArr,
          setCondition = _this$props3.setCondition,
          allCondition = _this$props3.allCondition;
        var newAllCondition = (0, _lodash.cloneDeep)(allCondition);
        newAllCondition[conditionArr[0]]['logicOperator'] = e;
        setCondition(newAllCondition);
      },
    },
    {
      key: 'changeConditionField',
      value: function changeConditionField(field, type, e) {
        var _this$props4 = this.props,
          conditionArr = _this$props4.conditionArr,
          cgDada = _this$props4.conditionSingleData,
          setCondition = _this$props4.setCondition,
          globalStore = _this$props4.globalStore,
          allCondition = _this$props4.allCondition,
          conditionSelectOptions = _this$props4.conditionSelectOptions,
          ruleSetExtendSelect = _this$props4.ruleSetExtendSelect,
          ruleAndIndexFieldList = _this$props4.ruleAndIndexFieldList;
        var newAllCondition = (0, _lodash.cloneDeep)(allCondition);
        var conditionSingleData = (0, _lodash.cloneDeep)(cgDada);
        var value = '';
        if (type === 'input') {
          value = e.target.value;
        } else if (type === 'select') {
          value = e;
        }
        var currentLine = null; // 当前设置的条件line

        if (conditionArr.length === 1) {
          currentLine = conditionSingleData;
        } else if (conditionArr.length === 2) {
          // 如果是条件组
          var groupList = newAllCondition[conditionArr[0]];
          currentLine = groupList['children'][conditionArr[1]];
        }
        currentLine[field] = value;
        if (
          currentLine['propertyDataType'] === 'ENUM' ||
          currentLine['propertyDataType'] === 'BOOLEAN'
        ) {
          currentLine['rightValueType'] = 'input';
        }
        if (field === 'property') {
          var mapItem;
          if (this.props.type === 'link') {
            mapItem = ruleAndIndexFieldList.concat(ruleSetExtendSelect).filter(function (item) {
              return item.name === value;
            })[0];
          } else {
            mapItem = ruleAndIndexFieldList.filter(function (item) {
              return item.name === value;
            })[0];
          }
          if (value.startsWith('salaxyzb')) {
            currentLine['type'] = 'gaea_indicatrix';
          } else if (value.startsWith('offlinezb')) {
            currentLine['type'] = 'gaea_indicatrix';
          } else {
            currentLine['type'] = 'context';
          }
          if (currentLine.propertyDataType !== mapItem.type) {
            currentLine.op = null;
          }
          currentLine['propertyDataType'] = mapItem.type;
          currentLine['value'] = null;
        } else if (field === 'rightValueType') {
          currentLine['value'] = null;
        } else if (field === 'op') {
          currentLine['value'] = null;
        }
        if (conditionArr.length === 1) {
          newAllCondition[conditionArr[0]] = _objectSpread(
            _objectSpread({}, newAllCondition[conditionArr[0]]),
            currentLine,
          );
          setCondition(newAllCondition);
        } else if (conditionArr.length === 2) {
          // 如果是条件组
          newAllCondition[conditionArr[0]]['children'][conditionArr[1]] = _objectSpread(
            _objectSpread({}, newAllCondition[conditionArr[0]]['children'][conditionArr[1]]),
            currentLine,
          );
          setCondition(newAllCondition);
        }
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this,
          _conditionSingleData$;
        var _this$props5 = this.props,
          globalStore = _this$props5.globalStore,
          conditionData = _this$props5.conditionData,
          conditionSingleData = _this$props5.conditionSingleData,
          conditionType = _this$props5.conditionType,
          conditionArr = _this$props5.conditionArr,
          disabled = _this$props5.disabled,
          type = _this$props5.type,
          appCode = _this$props5.appCode,
          orgCode = _this$props5.orgCode,
          isPublish = _this$props5.isPublish,
          _this$props5$noImport = _this$props5.noImportWaitCommit,
          noImportWaitCommit = _this$props5$noImport === void 0 ? false : _this$props5$noImport,
          ruleSetExtendSelect = _this$props5.ruleSetExtendSelect,
          EnumChildOption = _this$props5.EnumChildOption,
          NOEnumChildOption = _this$props5.NOEnumChildOption,
          childOption = _this$props5.childOption;
        var conditionOperator = {
          STRING: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: 'include',
              dName: '包含',
              enDName: 'include',
            },
            {
              name: 'exclude',
              dName: '不包含',
              enDName: 'exclude',
            },
            {
              name: 'prefix',
              dName: '前缀',
              enDName: 'prefix',
            },
            {
              name: 'suffix',
              dName: '后缀',
              enDName: 'suffix',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: '存在于',
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: '不存在于',
              enDName: 'notin',
            },
          ],
          DOUBLE: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: '大于',
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: '大于等于',
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: '小于',
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: '小于等于',
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
          ],
          INT: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: '大于',
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: '大于等于',
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: '小于',
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: '小于等于',
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: '存在于',
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: '不存在于',
              enDName: 'notin',
            },
          ],
          LONG: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: '大于',
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: '大于等于',
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: '小于',
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: '小于等于',
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: '存在于',
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: '不存在于',
              enDName: 'notin',
            },
          ],
          DATETIME: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: '大于',
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: '大于等于',
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: '小于',
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: '小于等于',
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
          ],
          BOOLEAN: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
          ],
          ENUM: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: 'isnull',
              dName: '为空',
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: '不为空',
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: '存在于',
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: '不存在于',
              enDName: 'notin',
            },
          ],
          ARRAY: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
            {
              name: 'include',
              dName: '包含',
              enDName: 'include',
            },
            {
              name: 'exclude',
              dName: '不包含',
              enDName: 'exclude',
            },
          ],
          POLICY: [
            {
              name: '==',
              dName: '等于',
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: '不等于',
              enDName: 'unequal',
            },
          ],
          // 地址规则
          ADDRESS_FIELD: [
            {
              name: 'similarityMatch',
              dName: '相似度匹配',
              enDName: 'similarityMatch',
            },
            {
              name: 'similarityUnMatch',
              dName: '相似度不匹配',
              enDName: 'similarityUnMatch',
            },
          ],
          // 名单
          FIELD: [
            {
              name: 'match',
              dName: '匹配',
              enDName: 'match',
            },
            {
              name: 'unmatch',
              dName: '不匹配',
              enDName: 'unmatch',
            },
          ],
        };
        var operaTypeInOrNot =
          conditionSingleData['op'] === 'in' || conditionSingleData['op'] === 'notin';
        var enumValue = conditionSingleData['value'] || undefined;
        // op为存在于，select为多选

        if (operaTypeInOrNot && !(enumValue instanceof Array)) {
          enumValue =
            (conditionSingleData['value'] && conditionSingleData['value'].split(',')) || [];
        }
        var _dataTypeSpecialConve = (0, _index.dataTypeSpecialConvert)(conditionSingleData),
          leftOptionDataType = _dataTypeSpecialConve.type,
          customPlaceholder = _dataTypeSpecialConve.customPlaceholder;
        var style = {
          display: 'inline-block',
          width: 60,
          marginRight: 70,
        };
        if (conditionType === 'group') {
          style = _objectSpread(
            _objectSpread({}, style),
            {},
            {
              position: 'absolute',
              top: 'calc(50% - 17px)',
            },
          );
        }
        console.log(conditionArr[1], 'conditionArr[1]');
        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: ''.concat(
              conditionType === 'group' ? 'group-item' : '',
              ' condition-group-item',
            ),
          },
          (conditionArr[1] === 0 || !conditionArr[1]) &&
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                style: style,
              },
              /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'letters',
                },
                conditionArr[0] + 1,
              ),
            ),
          conditionType === 'group' &&
            conditionArr[1] === 0 &&
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                className: 'link-from'.concat(conditionArr[0], ' link-line'),
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
                {
                  value: conditionData.logicOperator || undefined,
                  onChange: this.changeLogicOperator.bind(this),
                  dropdownMatchSelectWidth: false,
                  disabled: disabled,
                },
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: '&&',
                    title: '与',
                  },
                  '与',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: '||',
                    title: '或',
                  },
                  '或',
                ),
              ),
            ),
          conditionType === 'group' &&
            /*#__PURE__*/ _react.default.createElement('div', {
              className: 'group-placeholder',
            }),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              style: {
                width: 200,
              },
              className: 'link-to' + conditionArr[0] + conditionArr[1],
            },
            /*#__PURE__*/ _react.default.createElement(_virtualCascader.default, {
              options: childOption['all'],
              fieldNames: {
                label: 'dName',
                value: 'name',
                children: 'data',
              },
              value:
                conditionSingleData && conditionSingleData['property']
                  ? conditionSingleData['property']
                  : undefined,
              placeholder: '\u8BF7\u9009\u62E9',
              onChange: /*#__PURE__*/ (function () {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(value, selectObj) {
                    var enumTypeValues, name;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1)
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            (enumTypeValues = selectObj.enumTypeValues), (name = selectObj.name);
                            _context.next = 3;
                            return _this2.changeConditionField('property', 'select', name);
                          case 3:
                            if (!(enumTypeValues && enumTypeValues.length)) {
                              _context.next = 6;
                              break;
                            }
                            _context.next = 6;
                            return _this2.changeConditionField(
                              'enumTypeValues',
                              'select',
                              enumTypeValues || name,
                            );
                          case 6:
                            if (!(selectObj.type === 'ENUM' || selectObj.type === 'BOOLEAN')) {
                              _context.next = 9;
                              break;
                            }
                            _context.next = 9;
                            return _this2.changeConditionField('rightValueType', 'select', 'input');
                          case 9:
                          case 'end':
                            return _context.stop();
                        }
                    }, _callee);
                  }),
                );
                return function (_x, _x2) {
                  return _ref.apply(this, arguments);
                };
              })(),
              showSearch: true,
              setTitle: function setTitle() {
                var _option$0$props, _option$0$props$data;
                var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var isLink = false;
                var value =
                  conditionSingleData === null || conditionSingleData === void 0
                    ? void 0
                    : conditionSingleData.property;
                isLink =
                  (value === null || value === void 0 ? void 0 : value.includes('offlinezb')) ||
                  (value === null || value === void 0 ? void 0 : value.includes('salaxyzb'));
                var dom = option;
                var tab =
                  option &&
                  ((_option$0$props = option[0].props) === null || _option$0$props === void 0
                    ? void 0
                    : (_option$0$props$data = _option$0$props.data) === null ||
                      _option$0$props$data === void 0
                    ? void 0
                    : _option$0$props$data.metricArea) === 'EDIT'
                    ? 2
                    : 1;
                if (isLink) {
                  var text = option[1];
                  var url = value.includes('offlinezb')
                    ? '/index/offIndexManage?currentTab='
                        .concat(tab, '&featureSetName=')
                        .concat(text)
                    : '/index/realtime?currentTab='.concat(tab, '&metricName=').concat(text);
                  dom = /*#__PURE__*/ _react.default.createElement(
                    'a',
                    {
                      className: 'link-zb',
                      onClick: function onClick() {
                        history.push(url);
                      },
                    },
                    dom,
                  );
                }
                return dom;
              },
            }),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              className: 'gutter-row',
              style: {
                width: 100,
              },
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'gutter-box',
              },
              /*#__PURE__*/ _react.default.createElement(
                _select.default,
                {
                  value:
                    conditionSingleData && conditionSingleData['op']
                      ? conditionSingleData['op']
                      : undefined,
                  placeholder: '\u8BF7\u9009\u62E9',
                  onChange: this.changeConditionField.bind(this, 'op', 'select'),
                  dropdownMatchSelectWidth: false,
                },
                conditionOperator[
                  (
                    conditionSingleData === null || conditionSingleData === void 0
                      ? void 0
                      : conditionSingleData.propertyDataType
                  )
                    ? conditionSingleData === null || conditionSingleData === void 0
                      ? void 0
                      : conditionSingleData.propertyDataType.toUpperCase()
                    : 'STRING'
                ].map(function (item, index) {
                  return /*#__PURE__*/ _react.default.createElement(
                    Option,
                    {
                      value: item.name,
                      key: index,
                      title: item.dName,
                    },
                    item.dName,
                  );
                }),
              ),
            ),
          ),
          conditionSingleData &&
            conditionSingleData['op'] &&
            conditionSingleData['op'] !== 'isnull' &&
            conditionSingleData['op'] !== 'notnull' &&
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                className: 'gutter-row',
                style: {
                  width: 375,
                },
              },
              /*#__PURE__*/ _react.default.createElement(
                'div',
                {
                  className: 'gutter-box',
                },
                conditionSingleData['rightValueType'] === 'input' &&
                  leftOptionDataType === 'ENUM' &&
                  /*#__PURE__*/ _react.default.createElement(
                    InputGroup,
                    {
                      compact: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        value:
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined,
                        style: {
                          width: '30%',
                        },
                        onChange: this.changeConditionField.bind(this, 'rightValueType', 'select'),
                        dropdownMatchSelectWidth: false,
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'input',
                          title: '常量',
                        },
                        '常量',
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: '变量',
                        },
                        '变量',
                      ),
                    ),
                    (leftOptionDataType === 'BOOLEAN' &&
                      /*#__PURE__*/ _react.default.createElement(
                        _select.default,
                        {
                          style: {
                            width: '70%',
                          },
                          value:
                            conditionSingleData && conditionSingleData['value']
                              ? conditionSingleData['value']
                              : undefined,
                          placeholder: customPlaceholder || '请选择', // 请选择
                          onChange: this.changeConditionField.bind(this, 'value', 'select'),
                          showSearch: true,
                          optionFilterProp: 'children',
                          dropdownMatchSelectWidth: false,
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'true',
                          },
                          '是[true]',
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'false',
                          },
                          '否[false]',
                        ),
                      )) ||
                      /*#__PURE__*/ _react.default.createElement(
                        _select.default,
                        {
                          // conditionSingleData["value"] || undefined
                          value: enumValue || undefined,
                          style: {
                            width: '70%',
                          },
                          placeholder: customPlaceholder || '请选择', // lang:请选择
                          onChange: this.changeConditionField.bind(this, 'value', 'select'),
                          showSearch: true,
                          optionFilterProp: 'children',
                          dropdownMatchSelectWidth: false,
                          mode: operaTypeInOrNot ? 'multiple' : null,
                        },
                        conditionSingleData &&
                          ((_conditionSingleData$ = conditionSingleData['enumTypeValues']) ===
                            null || _conditionSingleData$ === void 0
                            ? void 0
                            : _conditionSingleData$.map(function (item, index) {
                                return /*#__PURE__*/ _react.default.createElement(
                                  Option,
                                  {
                                    value: item.value,
                                    key: index,
                                    title: ''
                                      .concat(item.description, ' [')
                                      .concat(item.value, ']'),
                                  },
                                  item.description,
                                  ' [',
                                  item.value,
                                  ']',
                                );
                              })),
                      ),
                  ),
                conditionSingleData['rightValueType'] === 'input' &&
                  leftOptionDataType !== 'ENUM' &&
                  /*#__PURE__*/ _react.default.createElement(
                    InputGroup,
                    {
                      compact: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        value:
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined,
                        style: {
                          width: '30%',
                        },
                        onChange: this.changeConditionField.bind(this, 'rightValueType', 'select'),
                        dropdownMatchSelectWidth: false,
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'input',
                          title: '常量',
                        },
                        '常量',
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: '变量',
                        },
                        '变量',
                      ),
                    ),
                    (leftOptionDataType === 'BOOLEAN' &&
                      /*#__PURE__*/ _react.default.createElement(
                        _select.default,
                        {
                          style: {
                            width: '70%',
                          },
                          value:
                            conditionSingleData && conditionSingleData['value']
                              ? conditionSingleData['value']
                              : undefined,
                          placeholder: customPlaceholder || '请选择', // 请选择
                          onChange: this.changeConditionField.bind(this, 'value', 'select'),
                          showSearch: true,
                          optionFilterProp: 'children',
                          dropdownMatchSelectWidth: false,
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'true',
                          },
                          '是[true]',
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'false',
                          },
                          '否[false]',
                        ),
                      )) ||
                      /*#__PURE__*/ _react.default.createElement(_input.default, {
                        style: {
                          width: '70%',
                        },
                        value:
                          conditionSingleData && conditionSingleData['value']
                            ? conditionSingleData['value']
                            : undefined,
                        placeholder:
                          customPlaceholder ||
                          (operaTypeInOrNot ? '英文逗号分隔，例如1,2' : '请输入常量内容'), // 请输入常量内容
                        onChange: this.changeConditionField.bind(this, 'value', 'input'),
                      }),
                  ),
                conditionSingleData &&
                  conditionSingleData['rightValueType'] === 'context' &&
                  leftOptionDataType !== 'ENUM' &&
                  /*#__PURE__*/ _react.default.createElement(
                    InputGroup,
                    {
                      compact: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        value:
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined,
                        style: {
                          width: '30%',
                        },
                        onChange: this.changeConditionField.bind(this, 'rightValueType', 'select'),
                        dropdownMatchSelectWidth: false,
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'input',
                          title: '常量',
                        },
                        '常量',
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: '变量',
                        },
                        '变量',
                      ),
                    ),
                    /*#__PURE__*/ _react.default.createElement(_virtualCascader.default, {
                      style: {
                        width: '70%',
                      },
                      options: NOEnumChildOption[leftOptionDataType] || [],
                      fieldNames: {
                        label: 'dName',
                        value: 'name',
                        children: 'data',
                      },
                      value:
                        conditionSingleData && conditionSingleData['value']
                          ? conditionSingleData['value']
                          : undefined,
                      placeholder: customPlaceholder || '请选择', // 请选择
                      onChange: this.changeConditionField.bind(this, 'value', 'select'),
                      showSearch: true,
                      setTitle: function setTitle() {
                        var _option$0$props2, _option$0$props2$data;
                        var option =
                          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var isLink = false;
                        var value =
                          conditionSingleData === null || conditionSingleData === void 0
                            ? void 0
                            : conditionSingleData.property;
                        isLink =
                          (value === null || value === void 0
                            ? void 0
                            : value.includes('offlinezb')) ||
                          (value === null || value === void 0
                            ? void 0
                            : value.includes('salaxyzb'));
                        var dom = option;
                        var tab =
                          option &&
                          ((_option$0$props2 = option[0].props) === null ||
                          _option$0$props2 === void 0
                            ? void 0
                            : (_option$0$props2$data = _option$0$props2.data) === null ||
                              _option$0$props2$data === void 0
                            ? void 0
                            : _option$0$props2$data.metricArea) === 'EDIT'
                            ? 2
                            : 1;
                        if (isLink) {
                          var text = option[1];
                          var url = value.includes('offlinezb')
                            ? '/index/offIndexManage?currentTab='
                                .concat(tab, '&featureSetName=')
                                .concat(text)
                            : '/index/realtime?currentTab='
                                .concat(tab, '&metricName=')
                                .concat(text);
                          dom = /*#__PURE__*/ _react.default.createElement(
                            'a',
                            {
                              className: 'link-zb',
                              onClick: function onClick() {
                                history.push(url);
                              },
                            },
                            dom,
                          );
                        }
                        return dom;
                      },
                    }),
                  ),
                conditionSingleData &&
                  conditionSingleData['rightValueType'] === 'context' &&
                  leftOptionDataType === 'ENUM' &&
                  /*#__PURE__*/ _react.default.createElement(
                    InputGroup,
                    {
                      compact: true,
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      _select.default,
                      {
                        value:
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined,
                        style: {
                          width: '30%',
                        },
                        onChange: this.changeConditionField.bind(this, 'rightValueType', 'select'),
                        dropdownMatchSelectWidth: false,
                      },
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'input',
                          title: '常量',
                        },
                        '常量',
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: '变量',
                        },
                        '变量',
                      ),
                    ),
                    /*#__PURE__*/ _react.default.createElement(_virtualCascader.default, {
                      style: {
                        width: '70%',
                      },
                      options: EnumChildOption[leftOptionDataType] || [],
                      fieldNames: {
                        label: 'dName',
                        value: 'name',
                        children: 'data',
                      },
                      value:
                        conditionSingleData && conditionSingleData['value']
                          ? conditionSingleData['value']
                          : undefined,
                      placeholder: customPlaceholder || '请选择', // 请选择
                      onChange: this.changeConditionField.bind(this, 'value', 'select'),
                      showSearch: true,
                      setTitle: function setTitle() {
                        var _option$0$props3, _option$0$props3$data;
                        var option =
                          arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var isLink = false;
                        var value =
                          conditionSingleData === null || conditionSingleData === void 0
                            ? void 0
                            : conditionSingleData.value;
                        isLink =
                          (value === null || value === void 0
                            ? void 0
                            : value.includes('offlinezb')) ||
                          (value === null || value === void 0
                            ? void 0
                            : value.includes('salaxyzb'));
                        var dom = option;
                        var tab =
                          option &&
                          ((_option$0$props3 = option[0].props) === null ||
                          _option$0$props3 === void 0
                            ? void 0
                            : (_option$0$props3$data = _option$0$props3.data) === null ||
                              _option$0$props3$data === void 0
                            ? void 0
                            : _option$0$props3$data.metricArea) === 'EDIT'
                            ? 2
                            : 1;
                        if (isLink) {
                          var text = option[1];
                          var url = value.includes('offlinezb')
                            ? '/index/offIndexManage?currentTab='
                                .concat(tab, '&featureSetName=')
                                .concat(text)
                            : '/index/realtime?currentTab='
                                .concat(tab, '&metricName=')
                                .concat(text);
                          dom = /*#__PURE__*/ _react.default.createElement(
                            'a',
                            {
                              href: url,
                              className: 'link-zb',
                            },
                            dom,
                          );
                        }
                        return dom;
                      },
                    }),
                  ),
              ),
            ),
          /*#__PURE__*/ _react.default.createElement(
            _col.default,
            {
              className: 'basic-info-oper',
              style: {
                width: 50,
              },
              // style={{ width: 50, display: 'flex', alignItems: 'center' }}
            },
            conditionType === 'group' &&
              !disabled &&
              /*#__PURE__*/
              // 添加一项
              _react.default.createElement(
                _tooltip.default,
                {
                  title: '添加一项',
                  placement: 'left',
                },
                /*#__PURE__*/ _react.default.createElement(_icon.default, {
                  className: 'add',
                  type: 'plus-circle-o',
                  onClick: this.addCondition.bind(this),
                  style: {
                    marginRight: '5px',
                  },
                }),
              ),
            !disabled &&
              /*#__PURE__*/ _react.default.createElement(
                _tooltip.default,
                {
                  title: '删除当前行',
                  placement: 'right',
                },
                /*#__PURE__*/ _react.default.createElement(_icon.default, {
                  className: 'delete',
                  type: 'delete',
                  onClick: this.deleteCondition.bind(this),
                }),
              ),
          ),
        );
      },
    },
  ]);
  return OneCondition;
})(_react.default.PureComponent);
var _default = OneCondition;
exports.default = _default;
