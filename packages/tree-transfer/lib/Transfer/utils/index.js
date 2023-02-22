'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isLastLevelKey =
  exports.getLastLevelData =
  exports.filterCategoryData =
  exports.disabledCategoryData =
    void 0;
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
// 判断选择的key是否为最后一层的key
var isLastLevelKey = function isLastLevelKey(dataSource, key) {
  var flag = false;
  var deep = function deep(data) {
    return data.some(function (item) {
      if (item.key === key) {
        if (!item.children || item.children.length <= 0) {
          flag = true;
          return true;
        } else {
          return deep(item.children);
        }
      } else if (item.children && item.children.length > 0) {
        return deep(item.children);
      }
    });
  };
  deep(dataSource);
  return flag;
};

// 对dataSource进行操作(主要用于disabled)
exports.isLastLevelKey = isLastLevelKey;
var disabledCategoryData = function disabledCategoryData(categoryData) {
  var newData = [];
  categoryData.forEach(function (item) {
    var obj = {};
    if (Array.isArray(item.children) && item.children.length > 0) {
      var tempData = disabledCategoryData(item.children);
      obj = _objectSpread(
        _objectSpread({}, item),
        {},
        {
          // 保留原来信息
          children: tempData,
          disabled: true,
        },
      );
    } else {
      obj = _objectSpread(
        _objectSpread({}, item),
        {},
        {
          // 保留原来信息
          disabled: true,
        },
      );
    }
    newData.push(obj);
  });
  return newData;
};

// 多层级数据获得最后一层的所有数据
exports.disabledCategoryData = disabledCategoryData;
var getLastLevelData = function getLastLevelData(categoryData) {
  var newData = [];
  function deep(data) {
    data.forEach(function (item) {
      if (!item.children || _.isEmpty(item.children)) {
        newData.push(item);
      } else {
        deep(item.children);
      }
    });
  }
  deep(categoryData);
  return newData;
};

// 根据选择的keys(最后一级)生成类目结构数据的方法(type为select时为选择的数据，type为filter为过滤掉选择的数据)
exports.getLastLevelData = getLastLevelData;
var filterCategoryData = function filterCategoryData() {
  var selectKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var data = arguments.length > 1 ? arguments[1] : undefined;
  var type = arguments.length > 2 ? arguments[2] : undefined;
  var disabled = arguments.length > 3 ? arguments[3] : undefined;
  var newData = [];
  data.forEach(function (item) {
    var obj = {};
    if (item.children && item.children.length > 0) {
      var tempData = filterCategoryData(selectKeys, item.children, type, disabled);
      obj = _objectSpread(
        _objectSpread({}, item),
        {},
        {
          children: tempData,
          disabled: disabled,
        },
      );
      if (!_.isEmpty(obj.children)) {
        newData.push(obj);
      }
    } else if (type === 'select' ? selectKeys.includes(item.key) : !selectKeys.includes(item.key)) {
      obj = _objectSpread(
        _objectSpread({}, item),
        {},
        {
          disabled: disabled,
        },
      );
      newData.push(obj);
    }
  });
  return newData;
};
exports.filterCategoryData = filterCategoryData;
