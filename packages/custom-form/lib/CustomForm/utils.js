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
exports.validateFields =
  exports.recursionSort =
  exports.recursionCheck =
  exports.isValidKey =
  exports.handleCheckItem =
  exports.getNames =
  exports.getInitValue =
  exports.getFieldsValue =
  exports.getFieldValue =
    void 0;
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
function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/**
 * 将xx.xx.xx 转换为数组
 * @param {*} name
 * @returns
 */
var getNames = function getNames(name) {
  var attrs = [];
  if (Array.isArray(name)) {
    var _name = _toArray(name),
      str = _name[0],
      rest = _name.slice(1);
    attrs = str.split('.').concat(rest);
  } else {
    attrs = typeof name === 'string' ? name.split('.') : [];
  }
  return attrs;
};
/**
 * 对数据进行校验
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @returns
 */
exports.getNames = getNames;
var recursionCheck = function recursionCheck(list, dataLevel, formData) {
  var errorList = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  try {
    if (Array.isArray(list)) {
      list.forEach(function (item) {
        var key = item['name'];
        var attrs = Object.keys(formData[key]);
        attrs.forEach(function (attr) {
          var _formData$item$name$a;
          var error =
            (_formData$item$name$a = formData[item.name][attr]) === null ||
            _formData$item$name$a === void 0
              ? void 0
              : _formData$item$name$a.checkItem();
          if (error) {
            errorList.push(''.concat([item.name + '.' + attr], ':'), error);
          }
        });
        if (dataLevel[key]) {
          recursionCheck(dataLevel[key], dataLevel, formData, errorList);
        }
      });
    }
    return errorList;
  } catch (e) {
    if (typeof e === 'string') {
      throw e.toUpperCase();
    } else if (e instanceof Error) {
      throw e.message;
    }
    throw e;
  }
};
/**
 * 将数据进行排序
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @param {*} errorList
 * @returns
 */
exports.recursionCheck = recursionCheck;
var recursionSort = function recursionSort(list, dataLevel, formData) {
  try {
    if (Array.isArray(list)) {
      var values = list.reduce(function (total, item, index) {
        var attrObj = {};
        var key = item['name'];
        var prefixs = key.split('.');
        var attrs = Object.keys(formData[key]);
        attrs.forEach(function (attr) {
          var _formData$key$attr;
          attrObj[attr] =
            (_formData$key$attr = formData[key][attr]) === null || _formData$key$attr === void 0
              ? void 0
              : _formData$key$attr['value'];
        });
        var children = [];
        if (dataLevel[key]) {
          children = recursionSort(dataLevel[key], dataLevel, formData);
        }
        var len = prefixs.length - 2;
        if (total[prefixs[len]]) {
          total[prefixs[len]][index] = _objectSpread(_objectSpread({}, attrObj), children || []);
        } else {
          total[prefixs[len]] = [_objectSpread(_objectSpread({}, attrObj), children || [])];
        }
        return total;
      }, {});
      return values;
    }
  } catch (e) {
    if (typeof e === 'string') {
      console.error(e.toUpperCase());
      throw e.toUpperCase();
    } else if (e instanceof Error) {
      console.error(e.message);
      throw e.message;
    }
    throw e;
  }
};
/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
exports.recursionSort = recursionSort;
var getFieldsValue = function getFieldsValue(formCurrent) {
  try {
    var formData = formCurrent.formData,
      dataLevel = formCurrent.dataLevel;
    var firstKey = '';
    // 这里不直接用Object.keys的原因是Object.keys并不能保证一定是按照属性顺序
    for (var i in dataLevel) {
      firstKey = i;
      break;
    }
    var recursionStart = dataLevel[firstKey];
    var values = recursionSort(recursionStart, dataLevel, formData);
    return values;
  } catch (e) {
    if (typeof e === 'string') {
      console.error(e.toUpperCase());
      return e.toUpperCase();
    } else if (e instanceof Error) {
      console.error(e.message);
      return e.message;
    }
    return e;
  }
};
/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
exports.getFieldsValue = getFieldsValue;
var getFieldValue = function getFieldValue(formCurrent, field) {
  try {
    var _formData$field$, _formData$field$$fiel;
    var formData = formCurrent.formData;
    return (
      formData &&
      (formData === null || formData === void 0
        ? void 0
        : (_formData$field$ = formData[field[0]]) === null || _formData$field$ === void 0
        ? void 0
        : (_formData$field$$fiel = _formData$field$[field[1]]) === null ||
          _formData$field$$fiel === void 0
        ? void 0
        : _formData$field$$fiel['value'])
    );
  } catch (e) {
    if (typeof e === 'string') {
      return e.toUpperCase();
    } else if (e instanceof Error) {
      return e.message;
    }
    return e;
  }
};
/**
 * 提交时候校验的方法
 * @param {*} formCurrent
 * @returns
 */
exports.getFieldValue = getFieldValue;
var validateFields = function validateFields(formCurrent) {
  return new Promise(function (resolve) {
    var formData = formCurrent.formData,
      dataLevel = formCurrent.dataLevel;
    var firstKey = '';
    // 这里不直接用Object.keys的原因是Object.keys并不能保证一定是按照属性顺序
    for (var i in dataLevel) {
      firstKey = i;
      break;
    }
    var recursionStart = dataLevel[firstKey];
    var errorList = recursionCheck(recursionStart, dataLevel, formData);
    if (Array.isArray(errorList) && errorList.length) {
      console.error(JSON.stringify(errorList));
    } else {
      resolve(recursionSort(recursionStart, dataLevel, formData));
    }
  });
};
/** 获取初始化的值 */
exports.validateFields = validateFields;
var getInitValue = function getInitValue(initialValues, names) {
  var keys;
  if (Array.isArray(names)) {
    var _names = _toArray(names),
      str = _names[0],
      rest = _names.slice(1);
    keys = str.split('.').concat(rest);
  }
  if (Array.isArray(keys)) {
    keys.forEach(function (i) {
      var _initialValues, _initialValues2;
      initialValues = ['', null, undefined].includes(
        (_initialValues = initialValues) === null || _initialValues === void 0
          ? void 0
          : _initialValues[i],
      )
        ? undefined
        : (_initialValues2 = initialValues) === null || _initialValues2 === void 0
        ? void 0
        : _initialValues2[i];
    });
  }
  return initialValues;
};
/** 校验表单是否正确的方法 */
exports.getInitValue = getInitValue;
var handleCheckItem = function handleCheckItem(value, rules) {
  try {
    if (Array.isArray(rules)) {
      rules.forEach(function (i) {
        // @ts-ignore
        if (i.required && ['', null, undefined].includes(value)) {
          throw new Error((i === null || i === void 0 ? void 0 : i.message) || 'error');
        }
        if (i === null || i === void 0 ? void 0 : i.validator) {
          i.validator(rules, value, function (_errorMsg) {
            throw new Error(_errorMsg);
          });
        }
      });
    }
    return;
  } catch (e) {
    if (typeof e === 'string') {
      return e.toUpperCase();
    } else if (e instanceof Error) {
      return e.message;
    }
  }
};
exports.handleCheckItem = handleCheckItem;
var isValidKey = function isValidKey(key, object) {
  return key in object;
};
exports.isValidKey = isValidKey;
