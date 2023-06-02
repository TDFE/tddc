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
var _react = _interopRequireWildcard(require('react'));
var _utils = require('./utils');
var _store = require('./store');
var _List = _interopRequireDefault(require('./components/List'));
var _Item = _interopRequireDefault(require('./components/Item'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
 * @Descripttion: 高性能动态增删form表单
 * @Author: 郑泳健
 * @Date: 2023-02-16 10:43:03
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-10 13:49:36
 */
var CustomForm = function CustomForm(_ref) {
  var form = _ref.form,
    initialValues = _ref.initialValues,
    children = _ref.children;
  // 这个是为了获取当前是哪一个单元格在输入
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    currentChangeKeys = _useState2[0],
    setCurrentChangeKeys = _useState2[1];
  return /*#__PURE__*/ _react.default.createElement(
    _store.FormContext.Provider,
    {
      value: {
        form: form,
        initialValues: initialValues,
        currentChangeKeys: currentChangeKeys,
        setCurrentChangeKeys: setCurrentChangeKeys,
      },
    },
    children,
  );
};
CustomForm.useForm = function () {
  var form = (0, _react.useRef)({
    dataLevel: [],
    formData: {},
    validateFields: function validateFields() {
      return (0, _utils.validateFields)(form.current);
    },
    getFieldsValue: function getFieldsValue() {
      return (0, _utils.getFieldsValue)(form.current);
    },
    getFieldValue: function getFieldValue(field) {
      return (0, _utils.getFieldValue)(form.current, field);
    },
    setFieldsValue: function setFieldsValue(obj) {
      for (var i in obj) {
        for (var attr in obj[i]) {
          form.current.formData[i][attr].setItemValue(obj[i][attr]);
        }
      }
    },
  });
  return [form.current];
};
CustomForm.List = _List.default;
CustomForm.Item = _Item.default;
var _default = CustomForm;
exports.default = _default;
