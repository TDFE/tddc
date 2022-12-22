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
exports.default = exports.SEARCH_MARK = void 0;
var React = _interopRequireWildcard(require('react'));
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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
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
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
var SEARCH_MARK = '__rc_cascader_search_mark__';
exports.SEARCH_MARK = SEARCH_MARK;
var defaultFilter = function defaultFilter(search, options, _ref) {
  var label = _ref.label;
  return options.some(function (opt) {
    return String(opt[label]).toLowerCase().includes(search.toLowerCase());
  });
};
var defaultRender = function defaultRender(inputValue, path, prefixCls, fieldNames) {
  return path
    .map(function (opt) {
      return opt[fieldNames.label];
    })
    .join(' / ');
};
var _default = function _default(search, options, fieldNames, prefixCls, config, changeOnSelect) {
  var _config$filter = config.filter,
    filter = _config$filter === void 0 ? defaultFilter : _config$filter,
    _config$render = config.render,
    render = _config$render === void 0 ? defaultRender : _config$render,
    _config$limit = config.limit,
    limit = _config$limit === void 0 ? 50 : _config$limit,
    sort = config.sort;
  return React.useMemo(
    function () {
      var filteredOptions = [];
      if (!search) {
        return [];
      }
      function dig(list, pathOptions) {
        list.forEach(function (option) {
          // Perf saving when `sort` is disabled and `limit` is provided
          if (!sort && limit > 0 && filteredOptions.length >= limit) {
            return;
          }
          var connectedPathOptions = [].concat(_toConsumableArray(pathOptions), [option]);
          var children = option[fieldNames.children];
          // If current option is filterable
          if (
            // If is leaf option
            !children ||
            children.length === 0 ||
            // If is changeOnSelect
            changeOnSelect
          ) {
            if (
              filter(search, connectedPathOptions, {
                label: fieldNames.label,
              })
            ) {
              var _objectSpread2;
              filteredOptions.push(
                _objectSpread(
                  _objectSpread({}, option),
                  {},
                  ((_objectSpread2 = {}),
                  _defineProperty(
                    _objectSpread2,
                    fieldNames.label,
                    render(search, connectedPathOptions, prefixCls, fieldNames),
                  ),
                  _defineProperty(_objectSpread2, SEARCH_MARK, connectedPathOptions),
                  _objectSpread2),
                ),
              );
            }
          }
          if (children) {
            dig(option[fieldNames.children], connectedPathOptions);
          }
        });
      }
      dig(options, []);
      // Do sort
      if (sort) {
        filteredOptions.sort(function (a, b) {
          return sort(a[SEARCH_MARK], b[SEARCH_MARK], search, fieldNames);
        });
      }
      return limit > 0 ? filteredOptions.slice(0, limit) : filteredOptions;
    },
    [search, options, fieldNames, prefixCls, render, changeOnSelect, filter, sort, limit],
  );
};
exports.default = _default;
