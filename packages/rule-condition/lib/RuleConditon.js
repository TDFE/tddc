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
var _locale = _interopRequireDefault(require('./locale.js'));
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
                  _locale.default.src.ruleconditon.manZuYiXiaSuo,
                ),
                /*#__PURE__*/ _react.default.createElement(
                  _radio.default,
                  {
                    value: '||',
                  },
                  _locale.default.src.ruleconditon.manZuYiXiaRen,
                ),
                mode === 3 &&
                  /*#__PURE__*/ _react.default.createElement(
                    _radio.default,
                    {
                      value: '!||',
                    },
                    _locale.default.src.ruleconditon.yiXiaTiaoJianJun,
                  ),
                /*#__PURE__*/ _react.default.createElement(
                  _radio.default,
                  {
                    value: '##',
                  },
                  _locale.default.src.ruleconditon.ziDingYi,
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
                      _locale.default.src.ruleconditon.tianJiaDanTiaoTiao,
                    ),
                    /*#__PURE__*/ _react.default.createElement(
                      'a',
                      {
                        onClick: this.addGroupCondition.bind(this),
                      },
                      _locale.default.src.ruleconditon.tianJiaTiaoJianZu,
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
