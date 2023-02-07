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
var React = _interopRequireWildcard(require('react'));
var _rcSelect = require('rc-select');
var _KeyCode = _interopRequireDefault(require('rc-util/lib/KeyCode'));
var _useSearchOptions = require('../hooks/useSearchOptions');
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var _default = function _default(
  ref,
  options,
  fieldNames,
  activeValueCells,
  setActiveValueCells,
  onKeyBoardSelect,
) {
  var _useBaseProps = (0, _rcSelect.useBaseProps)(),
    direction = _useBaseProps.direction,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    open = _useBaseProps.open;
  var rtl = direction === 'rtl';
  var _React$useMemo = React.useMemo(
      function () {
        var activeIndex = -1;
        var currentOptions = options;
        var mergedActiveIndexes = [];
        var mergedActiveValueCells = [];
        var len = activeValueCells.length;
        // Fill validate active value cells and index
        var _loop = function _loop(i) {
          // Mark the active index for current options
          var nextActiveIndex = currentOptions.findIndex(function (option) {
            return option[fieldNames.value] === activeValueCells[i];
          });
          if (nextActiveIndex === -1) {
            return 'break';
          }
          activeIndex = nextActiveIndex;
          mergedActiveIndexes.push(activeIndex);
          mergedActiveValueCells.push(activeValueCells[i]);
          currentOptions = currentOptions[activeIndex][fieldNames.children];
        };
        for (var i = 0; i < len && currentOptions; i += 1) {
          var _ret = _loop(i);
          if (_ret === 'break') break;
        }
        // Fill last active options
        var activeOptions = options;
        for (var _i2 = 0; _i2 < mergedActiveIndexes.length - 1; _i2 += 1) {
          activeOptions = activeOptions[mergedActiveIndexes[_i2]][fieldNames.children];
        }
        return [mergedActiveValueCells, activeIndex, activeOptions];
      },
      [activeValueCells, fieldNames, options],
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
    validActiveValueCells = _React$useMemo2[0],
    lastActiveIndex = _React$useMemo2[1],
    lastActiveOptions = _React$useMemo2[2];
  // Update active value cells and scroll to target element
  var internalSetActiveValueCells = function internalSetActiveValueCells(next) {
    setActiveValueCells(next);
  };
  // Same options offset
  var offsetActiveOption = function offsetActiveOption(offset) {
    var len = lastActiveOptions.length;
    var currentIndex = lastActiveIndex;
    if (currentIndex === -1 && offset < 0) {
      currentIndex = len;
    }
    for (var i = 0; i < len; i += 1) {
      currentIndex = (currentIndex + offset + len) % len;
      var option = lastActiveOptions[currentIndex];
      if (option && !option.disabled) {
        var value = option[fieldNames.value];
        var nextActiveCells = validActiveValueCells.slice(0, -1).concat(value);
        internalSetActiveValueCells(nextActiveCells);
        return;
      }
    }
  };
  // Different options offset
  var prevColumn = function prevColumn() {
    if (validActiveValueCells.length > 1) {
      var nextActiveCells = validActiveValueCells.slice(0, -1);
      internalSetActiveValueCells(nextActiveCells);
    } else {
      toggleOpen(false);
    }
  };
  var nextColumn = function nextColumn() {
    var _lastActiveOptions$la;
    var nextOptions =
      ((_lastActiveOptions$la = lastActiveOptions[lastActiveIndex]) === null ||
      _lastActiveOptions$la === void 0
        ? void 0
        : _lastActiveOptions$la[fieldNames.children]) || [];
    var nextOption = nextOptions.find(function (option) {
      return !option.disabled;
    });
    if (nextOption) {
      var nextActiveCells = [].concat(_toConsumableArray(validActiveValueCells), [
        nextOption[fieldNames.value],
      ]);
      internalSetActiveValueCells(nextActiveCells);
    }
  };
  React.useImperativeHandle(ref, function () {
    return {
      // scrollTo: treeRef.current?.scrollTo,
      onKeyDown: function onKeyDown(event) {
        var which = event.which;
        switch (which) {
          // >>> Arrow keys
          case _KeyCode.default.UP:
          case _KeyCode.default.DOWN: {
            var offset = 0;
            if (which === _KeyCode.default.UP) {
              offset = -1;
            } else if (which === _KeyCode.default.DOWN) {
              offset = 1;
            }
            if (offset !== 0) {
              offsetActiveOption(offset);
            }
            break;
          }
          case _KeyCode.default.LEFT: {
            if (rtl) {
              nextColumn();
            } else {
              prevColumn();
            }
            break;
          }
          case _KeyCode.default.RIGHT: {
            if (rtl) {
              prevColumn();
            } else {
              nextColumn();
            }
            break;
          }
          case _KeyCode.default.BACKSPACE: {
            if (!searchValue) {
              prevColumn();
            }
            break;
          }
          // >>> Select
          case _KeyCode.default.ENTER: {
            if (validActiveValueCells.length) {
              var option = lastActiveOptions[lastActiveIndex];
              // Search option should revert back of origin options
              var originOptions =
                (option === null || option === void 0
                  ? void 0
                  : option[_useSearchOptions.SEARCH_MARK]) || [];
              if (originOptions.length) {
                onKeyBoardSelect(
                  originOptions.map(function (opt) {
                    return opt[fieldNames.value];
                  }),
                  originOptions[originOptions.length - 1],
                );
              } else {
                onKeyBoardSelect(validActiveValueCells, lastActiveOptions[lastActiveIndex]);
              }
            }
            break;
          }
          // >>> Close
          case _KeyCode.default.ESC: {
            toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyUp: function onKeyUp() {},
    };
  });
};
exports.default = _default;
