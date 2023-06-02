"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("antd/lib/spin/style");
var _spin = _interopRequireDefault(require("antd/lib/spin"));
require("antd/lib/empty/style");
var _empty = _interopRequireDefault(require("antd/lib/empty"));
require("antd/lib/message/style");
var _message2 = _interopRequireDefault(require("antd/lib/message"));
var _react = _interopRequireWildcard(require("react"));
var _tntd = require("tntd");
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _TNTLayout = _interopRequireDefault(require("../TNTLayout"));
var _reducer = _interopRequireWildcard(require("./reducer"));
var _utils = require("./utils");
var _index = _interopRequireDefault(require("./service/index"));
require("./index.less");
var _excluded = ["eventEmitter", "actions", "syncGlobalState", "children", "appListVisible", "orgListVisible", "orgAppListVisible", "onOrgChange", "onLanguageChange", "onAppChange", "onMenuSelect", "onMenuLevelChange", "isDev"]; // import zhCN from 'antd/es/locale/zh_CN';
// import enUS from 'antd/es/locale/en_US';
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
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
  var _useState3 = (0, _react.useState)(pathname === null || pathname === void 0 ? void 0 : pathname.split('/')[1]),
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
  var getAppByOrgId = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(org) {
      var orgAppList;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index.default.getAppByOrgId({
              orgUuid: org === null || org === void 0 ? void 0 : org.uuid
            });
          case 2:
            orgAppList = _context.sent;
            _context.next = 5;
            return dispatch({
              type: 'setOrgInfo',
              payload: {
                currentOrgCode: org === null || org === void 0 ? void 0 : org.code,
                orgAppList: orgAppList
              }
            });
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function getAppByOrgId(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

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
  (0, _react.useEffect)(function () {
    if (state) {
      if ((state === null || state === void 0 ? void 0 : state.menuTreeReady) && (state === null || state === void 0 ? void 0 : state.userReady)) {
        // 子应用同步数据
        syncGlobalState && syncGlobalState(state);
        // 同步基座数据
        (actions === null || actions === void 0 ? void 0 : actions.setGlobalState) && (actions === null || actions === void 0 ? void 0 : actions.setGlobalState(state));
      }
    }
  }, [state]);
  (0, _react.useEffect)(function () {
    var _state$currentApp;
    if ((_state$currentApp = state.currentApp) === null || _state$currentApp === void 0 ? void 0 : _state$currentApp.name) {
      actions === null || actions === void 0 ? void 0 : actions.setCurrentApp(state.currentApp);
    }
  }, [(_state$currentApp2 = state.currentApp) === null || _state$currentApp2 === void 0 ? void 0 : _state$currentApp2.name]);
  (0, _react.useEffect)(function () {
    var _state$currentOrg;
    if ((_state$currentOrg = state.currentOrg) === null || _state$currentOrg === void 0 ? void 0 : _state$currentOrg.name) {
      actions === null || actions === void 0 ? void 0 : actions.setCurrentOrg(_objectSpread(_objectSpread({}, state.currentOrg), {}, {
        uuid: state.currentOrg.key
      }));
    }
  }, [(_state$currentOrg2 = state.currentOrg) === null || _state$currentOrg2 === void 0 ? void 0 : _state$currentOrg2.name]);
  (0, _react.useEffect)(function () {
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
      _index.default.getUserInfo().then( /*#__PURE__*/function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
          var _ref6, _ref6$orgGroup, orgGroup, apps, _formatOrgApp, orgList, orgUuidTree, orgUuidMap, orgCodeMap, currentApp, appList, appMap, _ref7, uuid, code, currentOrg;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                // 获取机构树
                _ref6 = data || {}, _ref6$orgGroup = _ref6.orgGroup, orgGroup = _ref6$orgGroup === void 0 ? {} : _ref6$orgGroup, apps = _ref6.apps;
                _formatOrgApp = (0, _utils.formatOrgApp)(orgGroup, apps), orgList = _formatOrgApp.orgList, orgUuidTree = _formatOrgApp.orgUuidTree, orgUuidMap = _formatOrgApp.orgUuidMap, orgCodeMap = _formatOrgApp.orgCodeMap, currentApp = _formatOrgApp.currentApp, appList = _formatOrgApp.appList, appMap = _formatOrgApp.appMap;
                _ref7 = orgGroup || {}, uuid = _ref7.uuid, code = _ref7.code;
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
                  code: code
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
                      code: orgGroup.code
                    }
                  }
                });
              case 7:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x3) {
          return _ref5.apply(this, arguments);
        };
      }()).catch(function (e) {
        dispatch({
          type: 'initUserReady'
        });
        setErrorMsg(e.message || '加载用户失败');
      });
      // 获取菜单信息
      _index.default.getMenuTree().then(function (data) {
        document.title = (data === null || data === void 0 ? void 0 : data.name) || '';
        dispatch({
          type: 'initMenuTree',
          payload: data
        });
      }).catch(function (e) {
        dispatch({
          type: 'initMenuTreeReady'
        });
        setErrorMsg(e.message || '加载用户失败');
      });
    }
  }, [routerPrefix]);
  (0, _react.useEffect)(function () {
    // 切换应用的时候重新获取用户信息和解决方案接口
    var curPathName = pathname === null || pathname === void 0 ? void 0 : pathname.split('/')[1];
    if (curPathName !== routerPrefix && routerPrefix) {
      setRouterPrefix(curPathName);
    }
  }, [pathname]);

  // 模拟登陆
  var mockLogin = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(p) {
      var _ref9, account, password, params, _ref10, tempRandom, authMessage, authResult, res, csrfToken;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _ref9 = p || {}, account = _ref9.account, password = _ref9.password;
            params = {
              account: account,
              password: (0, _utils.rsaPwd)(password)
            };
            _ref10 = ['', false, ''], tempRandom = _ref10.tempRandom, authMessage = _ref10.authMessage; // 获取加盐随机数
            _context3.next = 5;
            return _index.default.getAuthCode(params);
          case 5:
            authResult = _context3.sent;
            tempRandom = authResult;
            authMessage = authResult === null || authResult === void 0 ? void 0 : authResult.message;
            if (!tempRandom) {
              _context3.next = 23;
              break;
            }
            _context3.next = 11;
            return _index.default.userLogin(_objectSpread(_objectSpread({}, params), {}, {
              tempRandom: tempRandom
            }));
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
            return _context3.abrupt("return", Promise.reject(res.message));
          case 22:
            return _context3.abrupt("return");
          case 23:
            _message2.default.error(authMessage || '账号或者密码错误');
            return _context3.abrupt("return", Promise.reject(authMessage || '账号或者密码错误'));
          case 25:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function mockLogin(_x4) {
      return _ref8.apply(this, arguments);
    };
  }();

  // 监听机构变更
  var orgChange = function orgChange(curOrgTree) {
    onOrgChange && onOrgChange(curOrgTree);
    eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit('appChange', true);
    getAppByOrgId(curOrgTree);
  };

  // 渠道切换
  var appChange = function appChange(app) {
    onAppChange && onAppChange(app);
    eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit('appChange', true);
    dispatch({
      type: 'setCurrentApp',
      payload: {
        currentApp: app
      }
    });
  };

  // 语言切换
  var languageChange = function languageChange(language) {
    onLanguageChange && onLanguageChange(language);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: _objectSpread(_objectSpread({}, personalMode), {}, {
          lang: language
        })
      }
    });
    var cookies = new _universalCookie.default();
    cookies.set('lang', language, {
      path: '/'
    });
  };

  // 菜单级别切换
  var menuLevelChange = function menuLevelChange(menuLevel) {
    onMenuLevelChange && onMenuLevelChange(menuLevel);
    dispatch({
      type: 'personalMode',
      payload: {
        personalMode: _objectSpread(_objectSpread({}, personalMode), {}, {
          menuLevel: menuLevel
        })
      }
    });
  };
  return (
    /*#__PURE__*/
    // <ConfigProvider locale={personalMode?.lang === 'en' ? enUS : zhCN}>
    _react.default.createElement(_TNTLayout.default, _extends({
      key: !actions && "".concat(currentOrgCode, "_").concat(currentApp.name),
      type: "enterprise",
      logo: logo && /*#__PURE__*/_react.default.createElement("img", {
        className: "logo",
        style: {
          opacity: logo && logo.indexOf('white') ? 0.85 : 1
        },
        src: logo
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
        if (data === null || data === void 0 ? void 0 : (_data$path = data.path) === null || _data$path === void 0 ? void 0 : _data$path.startsWith("/".concat(routerPrefix))) {
          eventEmitter === null || eventEmitter === void 0 ? void 0 : eventEmitter.emit('menuClick', true);
        }
        _onMenuSelect && _onMenuSelect(data);
      }
    }, rest, {
      // 开发模式增加登录
      extraHeaderActions: [process.env.NODE_ENV === 'development' && !actions && /*#__PURE__*/_react.default.createElement(HeaderActionItem, {
        key: "help"
      }, /*#__PURE__*/_react.default.createElement(_tntd.DevelopmentLogin, {
        signIn: mockLogin
      }))]
    }), userReady && menuTreeReady ? errorMsg ? /*#__PURE__*/_react.default.createElement(_empty.default, {
      description: errorMsg,
      imageStyle: {
        marginTop: '150px'
      }
    }) : children : /*#__PURE__*/_react.default.createElement(_spin.default, {
      className: "subapp-loading"
    }))
    // </ConfigProvider>
  );
};

TGLayout.getLayoutPageTitle = _utils.getLayoutPageTitle;
TGLayout.HeaderTabs = HeaderTabs;
TGLayout.AuthContext = AuthContext;
TGLayout.HeaderActionItem = HeaderActionItem;
var _default = TGLayout;
exports.default = _default;