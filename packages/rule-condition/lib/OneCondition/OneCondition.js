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
var _locale = _interopRequireDefault(require('../locale.js'));
var _react = _interopRequireDefault(require('react'));
var _lodash = require('lodash');
var _IndicatorsCascader = _interopRequireDefault(require('../IndicatorsCascader'));
var _index = require('../utils/index');
require('./index.less');
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
} // import IndicatorsCascader from '@tddc/virtual-cascader';
// import conditionOperator from '../constants';
var Option = _select.default.Option;
var InputGroup = _input.default.Group;
var OneCondition = /*#__PURE__*/ (function (_React$PureComponent) {
  _inherits(OneCondition, _React$PureComponent);
  var _super = _createSuper(OneCondition);
  function OneCondition(props) {
    var _this;
    _classCallCheck(this, OneCondition);
    _this = _super.call(this, props);
    _this.state = {
      mapOption: {},
    };
    _this.formatData = function (options) {
      var map = {};
      var loop = function loop(node) {
        var _node$data;
        if (!(node === null || node === void 0 ? void 0 : node.data)) {
          return;
        }
        node === null || node === void 0
          ? void 0
          : (_node$data = node.data) === null || _node$data === void 0
          ? void 0
          : _node$data.forEach(function (item) {
              var sourceKey = node.name,
                sourceName = node.dName,
                bizType = node.bizType;
              item.sourceKey = sourceKey;
              item.sourceName = sourceName;
              item.bizType = bizType;
              map[item.name] = item;
              return loop(item);
            });
      };
      options.map(function (item) {
        map[item.name] = item;
        return loop(item);
      });
      return map;
    };
    _this.deleteCondition = _this.deleteCondition.bind(_assertThisInitialized(_this));
    _this.addCondition = _this.addCondition.bind(_assertThisInitialized(_this));
    _this.changeLogicOperator = _this.changeLogicOperator.bind(_assertThisInitialized(_this));
    _this.changeConditionField = _this.changeConditionField.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(OneCondition, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var ruleAndIndexFieldList = this.props.ruleAndIndexFieldList;
        var _filterMapOption = this.formatData(ruleAndIndexFieldList);
        this.setState({
          mapOption: _filterMapOption,
        });
      },
    },
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
        var mapOption = this.state.mapOption;
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
            mapItem = mapOption[value];
          } else {
            mapItem = mapOption[value];
          }
          if (!value) {
            return;
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
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: 'include',
              dName: _locale.default.onecondition.baoHan,
              enDName: 'include',
            },
            {
              name: 'exclude',
              dName: _locale.default.onecondition.buBaoHan,
              enDName: 'exclude',
            },
            {
              name: 'prefix',
              dName: _locale.default.onecondition.qianZhui,
              enDName: 'prefix',
            },
            {
              name: 'suffix',
              dName: _locale.default.onecondition.houZhui,
              enDName: 'suffix',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: _locale.default.onecondition.cunZaiYu,
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: _locale.default.onecondition.buCunZaiYu,
              enDName: 'notin',
            },
          ],
          DOUBLE: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: _locale.default.onecondition.daYu,
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: _locale.default.onecondition.daYuDengYu,
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: _locale.default.onecondition.xiaoYu,
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: _locale.default.onecondition.xiaoYuDengYu,
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
          ],
          INT: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: _locale.default.onecondition.daYu,
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: _locale.default.onecondition.daYuDengYu,
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: _locale.default.onecondition.xiaoYu,
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: _locale.default.onecondition.xiaoYuDengYu,
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: _locale.default.onecondition.cunZaiYu,
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: _locale.default.onecondition.buCunZaiYu,
              enDName: 'notin',
            },
          ],
          LONG: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: _locale.default.onecondition.daYu,
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: _locale.default.onecondition.daYuDengYu,
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: _locale.default.onecondition.xiaoYu,
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: _locale.default.onecondition.xiaoYuDengYu,
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: _locale.default.onecondition.cunZaiYu,
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: _locale.default.onecondition.buCunZaiYu,
              enDName: 'notin',
            },
          ],
          DATETIME: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: '>',
              dName: _locale.default.onecondition.daYu,
              enDName: 'greater than',
            },
            {
              name: '>=',
              dName: _locale.default.onecondition.daYuDengYu,
              enDName: 'equal or greater than',
            },
            {
              name: '<',
              dName: _locale.default.onecondition.xiaoYu,
              enDName: 'less than',
            },
            {
              name: '<=',
              dName: _locale.default.onecondition.xiaoYuDengYu,
              enDName: 'equal or less than',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
          ],
          BOOLEAN: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
          ],
          ENUM: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: 'isnull',
              dName: _locale.default.onecondition.weiKong,
              enDName: 'isnull',
            },
            {
              name: 'notnull',
              dName: _locale.default.onecondition.buWeiKong,
              enDName: 'notnull',
            },
            {
              name: 'in',
              dName: _locale.default.onecondition.cunZaiYu,
              enDName: 'in',
            },
            {
              name: 'notin',
              dName: _locale.default.onecondition.buCunZaiYu,
              enDName: 'notin',
            },
          ],
          ARRAY: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
            {
              name: 'include',
              dName: _locale.default.onecondition.baoHan,
              enDName: 'include',
            },
            {
              name: 'exclude',
              dName: _locale.default.onecondition.buBaoHan,
              enDName: 'exclude',
            },
          ],
          POLICY: [
            {
              name: '==',
              dName: _locale.default.onecondition.dengYu,
              enDName: 'equal',
            },
            {
              name: '!=',
              dName: _locale.default.onecondition.buDengYu,
              enDName: 'unequal',
            },
          ],
          // 地址规则
          ADDRESS_FIELD: [
            {
              name: 'similarityMatch',
              dName: _locale.default.onecondition.xiangSiDuPiPei,
              enDName: 'similarityMatch',
            },
            {
              name: 'similarityUnMatch',
              dName: _locale.default.onecondition.xiangSiDuBuPi,
              enDName: 'similarityUnMatch',
            },
          ],
          // 名单
          FIELD: [
            {
              name: 'match',
              dName: _locale.default.onecondition.piPei,
              enDName: 'match',
            },
            {
              name: 'unmatch',
              dName: _locale.default.onecondition.buPiPei,
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
        var optionsData = NOEnumChildOption['all'] || [];
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
                    title: _locale.default.onecondition.yu,
                  },
                  _locale.default.onecondition.yu,
                ),
                /*#__PURE__*/ _react.default.createElement(
                  Option,
                  {
                    value: '||',
                    title: _locale.default.onecondition.huo,
                  },
                  _locale.default.onecondition.huo,
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
            /*#__PURE__*/ _react.default.createElement(_IndicatorsCascader.default, {
              options: childOption['all'],
              style: {
                width: '100%',
              },
              fieldNames: {
                label: 'dName',
                value: 'name',
                children: 'data',
              },
              value:
                conditionSingleData && conditionSingleData['property']
                  ? conditionSingleData['property']
                  : undefined,
              placeholder: _locale.default.onecondition.qingXuanZe,
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
                  placeholder: _locale.default.onecondition.qingXuanZe,
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
                          title: _locale.default.onecondition.changLiang,
                        },
                        _locale.default.onecondition.changLiang,
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: _locale.default.onecondition.bianLiang,
                        },
                        _locale.default.onecondition.bianLiang,
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
                          placeholder: customPlaceholder || _locale.default.onecondition.qingXuanZe, // 请选择
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
                          _locale.default.onecondition.shiTRUE,
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'false',
                          },
                          _locale.default.onecondition.fouFALS,
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
                          placeholder: customPlaceholder || _locale.default.onecondition.qingXuanZe, // lang:请选择
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
                          title: _locale.default.onecondition.changLiang,
                        },
                        _locale.default.onecondition.changLiang,
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: _locale.default.onecondition.bianLiang,
                        },
                        _locale.default.onecondition.bianLiang,
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
                          placeholder: customPlaceholder || _locale.default.onecondition.qingXuanZe, // 请选择
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
                          _locale.default.onecondition.shiTRUE,
                        ),
                        /*#__PURE__*/ _react.default.createElement(
                          Option,
                          {
                            value: 'false',
                          },
                          _locale.default.onecondition.fouFALS,
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
                          (operaTypeInOrNot
                            ? _locale.default.onecondition.yingWenDouHaoFen
                            : _locale.default.onecondition.qingShuRuChangLiang), // 请输入常量内容
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
                          title: _locale.default.onecondition.changLiang,
                        },
                        _locale.default.onecondition.changLiang,
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: _locale.default.onecondition.bianLiang,
                        },
                        _locale.default.onecondition.bianLiang,
                      ),
                    ),
                    /*#__PURE__*/ _react.default.createElement(_IndicatorsCascader.default, {
                      style: {
                        width: '70%',
                      },
                      options: optionsData || [],
                      fieldNames: {
                        label: 'dName',
                        value: 'name',
                        children: 'data',
                      },
                      value:
                        conditionSingleData && conditionSingleData['value']
                          ? conditionSingleData['value']
                          : undefined,
                      placeholder: customPlaceholder || _locale.default.onecondition.qingXuanZe, // 请选择
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
                          title: _locale.default.onecondition.changLiang,
                        },
                        _locale.default.onecondition.changLiang,
                      ),
                      /*#__PURE__*/ _react.default.createElement(
                        Option,
                        {
                          value: 'context',
                          title: _locale.default.onecondition.bianLiang,
                        },
                        _locale.default.onecondition.bianLiang,
                      ),
                    ),
                    /*#__PURE__*/ _react.default.createElement(_IndicatorsCascader.default, {
                      style: {
                        width: '70%',
                      },
                      options: optionsData || [],
                      fieldNames: {
                        label: 'dName',
                        value: 'name',
                        children: 'data',
                      },
                      value:
                        conditionSingleData && conditionSingleData['value']
                          ? conditionSingleData['value']
                          : undefined,
                      placeholder: customPlaceholder || _locale.default.onecondition.qingXuanZe, // 请选择
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
                  title: _locale.default.onecondition.tianJiaYiXiang,
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
                  title: _locale.default.onecondition.shanChuDangQianXing,
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
