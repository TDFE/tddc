'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/row/style');
var _row = _interopRequireDefault(require('antd/lib/row'));
require('antd/lib/col/style');
var _col = _interopRequireDefault(require('antd/lib/col'));
require('antd/lib/radio/style');
var _radio = _interopRequireDefault(require('antd/lib/radio'));
var _react = _interopRequireDefault(require('react'));
var _lodash = require('lodash');
var _OneCondition = _interopRequireDefault(require('./OneCondition'));
var _CustomRule = _interopRequireDefault(require('./CustomRule'));
var _index = require('./utils/index');
var _Link = _interopRequireDefault(require('./Link'));
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
}
var RadioGroup = _radio.default.Group;
var RuleConditon = /*#__PURE__*/ (function (_React$PureComponent) {
  _inherits(RuleConditon, _React$PureComponent);
  var _super = _createSuper(RuleConditon);
  function RuleConditon(props) {
    var _this;
    _classCallCheck(this, RuleConditon);
    _this = _super.call(this, props);
    _this.state = {
      conditionData: {
        logicOperator: '&&',
        type: 'context',
        children: [],
      },
      addRuleTemplate: false,
    };
    _this.formatData = function (options) {
      var loop = function loop(node, parentPath) {
        var _node$data, _node$data2;
        if (
          !(node === null || node === void 0
            ? void 0
            : (_node$data = node.data) === null || _node$data === void 0
            ? void 0
            : _node$data.length)
        ) {
          return node;
        }
        node === null || node === void 0
          ? void 0
          : (_node$data2 = node.data) === null || _node$data2 === void 0
          ? void 0
          : _node$data2.forEach(function (item) {
              var sourceKey = node.name,
                sourceName = node.dName,
                bizType = node.bizType;
              item.sourceKey = sourceKey;
              item.sourceName = sourceName;
              item.bizType = bizType;
              item.path = parentPath + '/' + item.name;
              return loop(item, item.path);
            });
        return node;
      };
      return options.map(function (item) {
        return loop(item, item.name);
      });
    };
    _this.getChildOption = function () {
      var _this$props = _this.props,
        ruleAndIndexFieldList = _this$props.ruleAndIndexFieldList,
        appCode = _this$props.appCode,
        orgCode = _this$props.orgCode;
      var list = (0, _index.filterAvailableFieldList)({
        ruleAndIndexFieldList: ruleAndIndexFieldList,
        appCode: appCode,
        orgCode: orgCode,
      });
      var optionsList = _this.formatData(list);
      var childOption =
        optionsList === null || optionsList === void 0
          ? void 0
          : optionsList.reduce(
              function (total, item) {
                // 获取转换后的数据类型
                var _dataTypeSpecialConve = (0, _index.dataTypeSpecialConvert)(item),
                  convertDataType = _dataTypeSpecialConve.type;
                if (
                  Array.isArray(
                    total === null || total === void 0 ? void 0 : total[convertDataType],
                  )
                ) {
                  total[convertDataType].push(item);
                } else {
                  total[convertDataType] = [item];
                }
                total['all'].push(item);
                return total;
              },
              {
                all: [],
              },
            );
      var NOEnumChildOption = (0, _lodash.cloneDeep)(childOption);
      var EnumChildOption = (0, _lodash.cloneDeep)(childOption);
      if (NOEnumChildOption['INT']) {
        NOEnumChildOption['INT'] = NOEnumChildOption['INT'].concat(
          NOEnumChildOption['DOUBLE'] || [],
        );
      }
      NOEnumChildOption['DOUBLE'] = NOEnumChildOption['INT'];
      if (NOEnumChildOption['ENUM']) {
        NOEnumChildOption['ENUM'] = NOEnumChildOption['ENUM'].concat(
          NOEnumChildOption['STRING'] || [],
        );
      }
      if (EnumChildOption['ENUM']) {
        EnumChildOption['ENUM'] = EnumChildOption['ENUM'].concat(NOEnumChildOption['STRING'] || []);
      }
      EnumChildOption['STRING'] = NOEnumChildOption['ENUM'];
      _this.setState({
        childOption: childOption,
        NOEnumChildOption: NOEnumChildOption,
        EnumChildOption: EnumChildOption,
      });
    };
    _this.isJSON = function (str) {
      if (typeof str === 'string') {
        try {
          var obj = JSON.parse(str);
          if (_typeof(obj) === 'object' && obj) {
            return true;
          }
          return false;
        } catch (e) {
          return false;
        }
      }
    };
    _this.changeLogicOperator = _this.changeLogicOperator.bind(_assertThisInitialized(_this));
    _this.addSingleCondition = _this.addSingleCondition.bind(_assertThisInitialized(_this));
    _this.addGroupCondition = _this.addGroupCondition.bind(_assertThisInitialized(_this));
    _this.containerRef = /*#__PURE__*/ _react.default.createRef();
    return _this;
  }
  _createClass(RuleConditon, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.containerRef.current = document.querySelector('.score-rule-condition');
        var value = this.props.value;
        if (value && this.isJSON(value)) {
          value = JSON.parse(value);
        }
        if (value && Object.keys(value).length) {
          this.setState({
            conditionData: value,
          });
        }
        this.getChildOption();
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(preProps) {
        var value = this.props.value;
        if (!(0, _lodash.isEqual)(preProps.value, this.props.value)) {
          if (value && this.isJSON(value)) {
            value = JSON.parse(value);
          }
          this.setState({
            conditionData: value || {
              logicOperator: '&&',
              type: 'context',
              children: [],
            },
          });
        }
      },
    },
    {
      key: 'changeAfterAddPriority',
      value: function changeAfterAddPriority(value) {
        var _tempValue$children;
        var onChange = this.props.onChange;
        var tempValue = value;
        var priority = 1;
        tempValue === null || tempValue === void 0
          ? void 0
          : (_tempValue$children = tempValue.children) === null || _tempValue$children === void 0
          ? void 0
          : _tempValue$children.map(function (item) {
              var _item$children;
              item.priority = priority++;
              item === null || item === void 0
                ? void 0
                : (_item$children = item.children) === null || _item$children === void 0
                ? void 0
                : _item$children.map(function (item1) {
                    item1.priority = priority++;
                  });
            });
        onChange(tempValue);
      },
    },
    {
      key: 'changeLogicOperator',
      value: function changeLogicOperator(e) {
        var onChange = this.props.onChange;
        var _this$state$condition = this.state.conditionData,
          cData = _this$state$condition === void 0 ? {} : _this$state$condition;
        var conditionData = (0, _lodash.cloneDeep)(cData);
        var value = e.target.value;
        conditionData['logicOperator'] = value;
        conditionData['type'] = 'context';
        this.setState({
          conditionData: conditionData,
        });
        onChange && this.changeAfterAddPriority(conditionData);
      },
    },
    {
      key: 'addSingleCondition',
      value: function addSingleCondition() {
        var onChange = this.props.onChange;
        var _this$state$condition2 = this.state.conditionData,
          cData = _this$state$condition2 === void 0 ? {} : _this$state$condition2;
        var conditionData = (0, _lodash.cloneDeep)(cData);
        var singleConditionTemp = {
          property: null,
          op: '==',
          value: null,
          propertyDataType: null,
          type: 'context',
          rightValueType: 'context',
        };
        conditionData['children'] = conditionData['children'] || [];
        conditionData['children'].push(_objectSpread({}, singleConditionTemp));
        this.setState({
          conditionData: conditionData,
        });
        onChange && this.changeAfterAddPriority(conditionData);
      },
    },
    {
      key: 'addGroupCondition',
      value: function addGroupCondition() {
        var onChange = this.props.onChange;
        var _this$state$condition3 = this.state.conditionData,
          cData = _this$state$condition3 === void 0 ? {} : _this$state$condition3;
        var conditionData = (0, _lodash.cloneDeep)(cData);
        var groupConditionTemp = {
          logicOperator: '&&',
          type: 'context',
          children: [
            {
              property: null,
              op: '==',
              value: null,
              propertyDataType: null,
              type: 'context',
              rightValueType: 'context',
            },
          ],
        };
        conditionData['children'] = conditionData['children'] || [];
        conditionData['children'].push(_objectSpread({}, groupConditionTemp));
        this.setState({
          conditionData: conditionData,
        });
        onChange && this.changeAfterAddPriority(conditionData);
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          disabled = _this$props2.disabled,
          mode = _this$props2.mode,
          type = _this$props2.type,
          indexApp = _this$props2.appCode,
          indexOrg = _this$props2.orgCode,
          noImportWaitCommit = _this$props2.noImportWaitCommit,
          ruleSetExtendSelect = _this$props2.ruleSetExtendSelect,
          isPublish = _this$props2.isPublish,
          policyBusinessType = _this$props2.policyBusinessType,
          ruleAndIndexFieldList = _this$props2.ruleAndIndexFieldList;
        var _this$state = this.state,
          _this$state$condition4 = _this$state.conditionData,
          cData = _this$state$condition4 === void 0 ? {} : _this$state$condition4,
          EnumChildOption = _this$state.EnumChildOption,
          NOEnumChildOption = _this$state.NOEnumChildOption,
          childOption = _this$state.childOption;
        var conditionData = (0, _lodash.cloneDeep)(cData);
        return /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'score-rule-condition',
          },
          /*#__PURE__*/
          // className="mb10"
          _react.default.createElement(
            _row.default,
            {
              gutter: 10,
            },
            /*#__PURE__*/ _react.default.createElement(
              _col.default,
              {
                span: 22,
              },
              /*#__PURE__*/ _react.default.createElement(
                RadioGroup,
                {
                  onChange: this.changeLogicOperator.bind(this),
                  value:
                    conditionData && conditionData['logicOperator']
                      ? conditionData['logicOperator']
                      : null,
                  disabled: disabled,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _radio.default,
                  {
                    value: '&&',
                  },
                  '满足以下所有条件',
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _radio.default,
                  {
                    value: '||',
                  },
                  '满足以下任意条件',
                ),
                mode === 3 &&
                  /*#__PURE__*/ _react.default.createElement(
                    _radio.default,
                    {
                      value: '!||',
                    },
                    '以下条件均不满足',
                  ),
                /*#__PURE__*/ _react.default.createElement(
                  _radio.default,
                  {
                    value: '##',
                  },
                  '自定义',
                ),
              ),
            ),
            /*#__PURE__*/ _react.default.createElement(_col.default, {
              span: 2,
            }),
          ),
          /*#__PURE__*/ _react.default.createElement(
            _row.default,
            {
              gutter: 10,
            },
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'custom-condition',
              },
              conditionData &&
                conditionData.type !== 'alias' &&
                conditionData.children &&
                conditionData.children.map(function (item, index) {
                  if (item.type !== 'alias') {
                    if (
                      (item === null || item === void 0 ? void 0 : item.children) &&
                      (item === null || item === void 0 ? void 0 : item.children.length)
                    ) {
                      return /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className:
                            'custom-condition-item group-condition has-line group-index'.concat(
                              index,
                            ),
                          key: index,
                        },
                        item.children.map(function (groupItem, groupIndex) {
                          return /*#__PURE__*/ _react.default.createElement(
                            _react.default.Fragment,
                            null,
                            /*#__PURE__*/ _react.default.createElement(_Link.default, {
                              conditionArr: [index, groupIndex],
                              key: index + groupIndex,
                              container: _this2.containerRef.current,
                            }),
                            /*#__PURE__*/ _react.default.createElement(_OneCondition.default, {
                              ruleAndIndexFieldList: ruleAndIndexFieldList,
                              EnumChildOption: EnumChildOption,
                              NOEnumChildOption: NOEnumChildOption,
                              childOption: childOption,
                              policyBusinessType: policyBusinessType,
                              isPublish: isPublish,
                              ruleSetExtendSelect: ruleSetExtendSelect,
                              noImportWaitCommit: noImportWaitCommit,
                              type: type,
                              disabled: disabled,
                              appCode: indexApp,
                              orgCode: indexOrg,
                              allCondition: conditionData.children,
                              conditionData: item,
                              conditionSingleData: groupItem,
                              conditionType: 'group',
                              conditionArr: [index, groupIndex],
                              key: groupIndex,
                              setCondition: /*#__PURE__*/ (function () {
                                var _ref = _asyncToGenerator(
                                  /*#__PURE__*/ _regeneratorRuntime().mark(function _callee(item) {
                                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                                      while (1)
                                        switch ((_context.prev = _context.next)) {
                                          case 0:
                                            _context.next = 2;
                                            return _this2.setState({
                                              conditionData: _objectSpread(
                                                _objectSpread({}, conditionData),
                                                {},
                                                {
                                                  children: item || [],
                                                },
                                              ),
                                            });
                                          case 2:
                                            _context.next = 4;
                                            return onChange;
                                          case 4:
                                            _context.t0 = _context.sent;
                                            if (!_context.t0) {
                                              _context.next = 7;
                                              break;
                                            }
                                            _this2.changeAfterAddPriority(
                                              _objectSpread(
                                                _objectSpread({}, conditionData),
                                                {},
                                                {
                                                  children: item || [],
                                                },
                                              ),
                                            );
                                          case 7:
                                          case 'end':
                                            return _context.stop();
                                        }
                                    }, _callee);
                                  }),
                                );
                                return function (_x) {
                                  return _ref.apply(this, arguments);
                                };
                              })(),
                            }),
                          );
                        }),
                      );
                    }
                    return /*#__PURE__*/ _react.default.createElement(
                      'div',
                      {
                        className: 'custom-condition-item one-condition has-line',
                        key: index,
                      },
                      /*#__PURE__*/ _react.default.createElement(_OneCondition.default, {
                        ruleAndIndexFieldList: ruleAndIndexFieldList,
                        EnumChildOption: EnumChildOption,
                        NOEnumChildOption: NOEnumChildOption,
                        childOption: childOption,
                        policyBusinessType: policyBusinessType,
                        isPublish: isPublish,
                        ruleSetExtendSelect: ruleSetExtendSelect,
                        noImportWaitCommit: noImportWaitCommit,
                        type: type,
                        allCondition: conditionData.children,
                        appCode: indexApp,
                        orgCode: indexOrg,
                        conditionData: null,
                        conditionSingleData: item,
                        conditionType: 'single',
                        conditionArr: [index],
                        setCondition: /*#__PURE__*/ (function () {
                          var _ref2 = _asyncToGenerator(
                            /*#__PURE__*/ _regeneratorRuntime().mark(function _callee2(item) {
                              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                while (1)
                                  switch ((_context2.prev = _context2.next)) {
                                    case 0:
                                      _context2.next = 2;
                                      return _this2.setState({
                                        conditionData: _objectSpread(
                                          _objectSpread({}, conditionData),
                                          {},
                                          {
                                            children: item || [],
                                          },
                                        ),
                                      });
                                    case 2:
                                      _context2.next = 4;
                                      return onChange;
                                    case 4:
                                      _context2.t0 = _context2.sent;
                                      if (!_context2.t0) {
                                        _context2.next = 7;
                                        break;
                                      }
                                      _this2.changeAfterAddPriority(
                                        _objectSpread(
                                          _objectSpread({}, conditionData),
                                          {},
                                          {
                                            children: item || [],
                                          },
                                        ),
                                      );
                                    case 7:
                                    case 'end':
                                      return _context2.stop();
                                  }
                              }, _callee2);
                            }),
                          );
                          return function (_x2) {
                            return _ref2.apply(this, arguments);
                          };
                        })(),
                        disabled: disabled,
                      }),
                    );
                  }
                }),
              !disabled &&
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'custom-condition-item add-condition',
                  },
                  /*#__PURE__*/ _react.default.createElement(
                    _col.default,
                    {
                      span: 18,
                      className: 'add-condition-handle',
                    },
                    /*#__PURE__*/ _react.default.createElement(
                      'a',
                      {
                        onClick: this.addSingleCondition.bind(this),
                      },
                      '添加单条条件',
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'a',
                      {
                        onClick: this.addGroupCondition.bind(this),
                      },
                      '添加条件组',
                    ),
                  ),
                ),
              /*#__PURE__*/ _react.default.createElement(_CustomRule.default, {
                currentCondition: conditionData || {},
                disabled: true,
                onChange: /*#__PURE__*/ (function () {
                  var _ref3 = _asyncToGenerator(
                    /*#__PURE__*/ _regeneratorRuntime().mark(function _callee3(
                      value,
                      customRuleStatus,
                    ) {
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1)
                          switch ((_context3.prev = _context3.next)) {
                            case 0:
                              conditionData.customLogicOperator = value;
                              conditionData.customRuleStatus = customRuleStatus;
                              _context3.next = 4;
                              return _this2.setState({
                                conditionData: _objectSpread({}, conditionData),
                              });
                            case 4:
                              _context3.next = 6;
                              return onChange;
                            case 6:
                              _context3.t0 = _context3.sent;
                              if (!_context3.t0) {
                                _context3.next = 9;
                                break;
                              }
                              _this2.changeAfterAddPriority(_objectSpread({}, conditionData));
                            case 9:
                            case 'end':
                              return _context3.stop();
                          }
                      }, _callee3);
                    }),
                  );
                  return function (_x3, _x4) {
                    return _ref3.apply(this, arguments);
                  };
                })(),
              }),
            ),
          ),
        );
      },
    },
  ]);
  return RuleConditon;
})(_react.default.PureComponent);
var _default = RuleConditon;
exports.default = _default;
