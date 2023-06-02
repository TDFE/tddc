'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireWildcard(require('react'));
var _lodash = require('lodash');
var _utils = require('../utils');
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
function _toArray(arr) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableRest()
  );
}
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
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
        );
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
/*
 * @Descripttion: 对CustomForm.Item进行性能优化
 * @Author: 郑泳健
 * @Date: 2023-02-23 12:47:28
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-14 14:27:16
 */
var ItemComp = function ItemComp(_ref) {
  var form = _ref.form,
    name = _ref.name,
    children = _ref.children,
    style = _ref.style,
    initialValues = _ref.initialValues,
    initialValue = _ref.initialValue,
    rules = _ref.rules,
    setCurrentChangeKeys = _ref.setCurrentChangeKeys;
  var _useState = (0, _react.useState)(undefined),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = _slicedToArray(_useState3, 2),
    errorMsg = _useState4[0],
    setErrorMsg = _useState4[1];
  // 为了给最外层提供方法去校验，比如保存的时候.
  // 这里依赖不要添加value,因为子组件的useEffect会比父组件useEffect先执行，如果添加了依赖value会导致子组件获取到的formData永远是上一次的
  (0, _react.useEffect)(
    function () {
      if (!name || !form) return;
      var _name = _toArray(name),
        str = _name[0],
        rest = _name.slice(1);
      var addItem = {
        setItemValue: function setItemValue(_val, callback) {
          var error = (0, _utils.handleCheckItem)(_val, rules);
          setValue(_val);
          setErrorMsg(error);
          callback === null || callback === void 0 ? void 0 : callback();
        },
        checkItem: function checkItem() {
          var error = (0, _utils.handleCheckItem)(value, rules);
          setErrorMsg(error);
          return error;
        },
        value: value,
        errorMsg: errorMsg,
      };
      rest.forEach(function (i) {
        if (form.formData[str]) {
          form.formData[str][i] = addItem;
        } else {
          form.formData[str] = _defineProperty({}, i, addItem);
        }
      });
    },
    [rules, name, errorMsg, form],
  );
  /** 这段代码不能删除，当增加/删除列的时候有些默认值需要更新 */
  (0, _react.useEffect)(
    function () {
      if (initialValue) {
        setValue(initialValue);
        generateFormData(name, initialValue);
      }
    },
    [initialValue],
  );
  // 初始化设置默认值,
  (0, _react.useEffect)(function () {
    var initValue = (0, _utils.getInitValue)(initialValues, name);
    // @ts-ignore
    var _value = ['', null, undefined].includes(initValue) ? initialValue : initValue;
    setValue(_value);
    generateFormData(name, _value);
    if (name) {
      var _getNames;
      setCurrentChangeKeys([
        (_getNames = (0, _utils.getNames)(name)) === null || _getNames === void 0
          ? void 0
          : _getNames.join('.'),
      ]);
    }
  }, []);
  /**
   * 动态修改form内部的值,为啥不在useEffect里面处理的原因是子组件的useEffect会比父组件useEffect先执行，需要保证在子组件useEffect监听value变化的时候获取到的formData永远是最新的
   * @param name
   * @param value
   * @returns
   */
  var generateFormData = function generateFormData(name, value) {
    if (!name || !form) return;
    var _name2 = _toArray(name),
      str = _name2[0],
      rest = _name2.slice(1);
    rest.forEach(function (i) {
      if (form.formData[str]) {
        form.formData[str][i]['value'] = value;
        form.formData[str][i].checkItem = function () {
          var error = (0, _utils.handleCheckItem)(value, rules);
          setErrorMsg(error);
          return error;
        };
      } else {
        form.formData[str] = _defineProperty({}, i, {
          value: value,
          checkItem: function checkItem() {
            var error = (0, _utils.handleCheckItem)(value, rules);
            setErrorMsg(error);
            return error;
          },
          setItemValue: function setItemValue() {},
          errorMsg: undefined,
        });
      }
    });
  };
  // 默认方法
  var handleChange = function handleChange(e) {
    var val;
    if (_typeof(e) === 'object') {
      var _e$target;
      val =
        e === null || e === void 0
          ? void 0
          : (_e$target = e.target) === null || _e$target === void 0
          ? void 0
          : _e$target.value;
    } else {
      val = e;
    }
    setValue(val);
    generateFormData(name, val);
    var error = (0, _utils.handleCheckItem)(val, rules);
    setErrorMsg(error);
    if (name) {
      var _getNames2;
      setCurrentChangeKeys([
        (_getNames2 = (0, _utils.getNames)(name)) === null || _getNames2 === void 0
          ? void 0
          : _getNames2.join('.'),
      ]);
    }
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: errorMsg ? 'has-error custom-form-item-wrapper' : 'custom-form-item-wrapper',
      style: style,
    },
    _react.default.Children.map(children, function (child) {
      if (/*#__PURE__*/ _react.default.isValidElement(child)) {
        var _getNames3;
        return /*#__PURE__*/ _react.default.cloneElement(
          child,
          _objectSpread(
            {
              value: value,
              form: form,
              onChange: handleChange,
              'data-key':
                (_getNames3 = (0, _utils.getNames)(name)) === null || _getNames3 === void 0
                  ? void 0
                  : _getNames3.join('.'),
            },
            child.props,
          ),
        );
      }
      return null;
    }),
    errorMsg &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'ant-form-explain ant-form-item-explain-error',
        },
        errorMsg,
      ),
  );
};
function arePropsEqual(prevProps, nextProps) {
  if (
    Array.isArray(nextProps.currentChangeKeys) &&
    nextProps.currentChangeKeys.length &&
    (0, _lodash.isEqual)(prevProps.initialValues, nextProps.initialValues) &&
    !nextProps.currentChangeKeys.includes((0, _utils.getNames)(nextProps.name).join('.')) &&
    !nextProps.shouldUpdate &&
    Array.isArray(nextProps.dependencies) &&
    nextProps.dependencies.every(function (i) {
      var _nextProps$currentCha;
      return !((_nextProps$currentCha = nextProps.currentChangeKeys) === null ||
      _nextProps$currentCha === void 0
        ? void 0
        : _nextProps$currentCha.includes((0, _utils.getNames)(i).join('.')));
    })
  ) {
    return true;
  }
  return false;
}
var _default = /*#__PURE__*/ (0, _react.memo)(ItemComp, arePropsEqual);
exports.default = _default;
