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
exports.cornFormat = void 0;
exports.default = CronForm;
exports.validCron = void 0;
require('antd/lib/input/style');
var _input = _interopRequireDefault(require('antd/lib/input'));
require('antd/lib/time-picker/style');
var _timePicker = _interopRequireDefault(require('antd/lib/time-picker'));
require('antd/lib/select/style');
var _select = _interopRequireDefault(require('antd/lib/select'));
var _locale = _interopRequireDefault(require('../locale'));
var _react = _interopRequireWildcard(require('react'));
var _moment = _interopRequireDefault(require('moment'));
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
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
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
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
var Option = _select.default.Option;
var mwidth80 = {
  minWidth: 80,
  marginRight: 10,
};
var width150 = {
  width: 150,
};
var defaultTimeFormat = 'HH:mm:ss';
var eachNum = function eachNum(start, end, str) {
  var back = [];
  for (var i = start; i <= end; i++) {
    back.push({
      value: ''.concat(i),
      label: ''.concat(i).concat(str),
    });
  }
  return back;
};
var dayOfWeekList = [
  {
    label: _locale.default.cron.index.zhouYi,
    value: '2',
  },
  {
    label: _locale.default.cron.index.zhouEr,
    value: '3',
  },
  {
    label: _locale.default.cron.index.zhouSan,
    value: '4',
  },
  {
    label: _locale.default.cron.index.zhouSi,
    value: '5',
  },
  {
    label: _locale.default.cron.index.zhouWu,
    value: '6',
  },
  {
    label: _locale.default.cron.index.zhouLiu,
    value: '7',
  },
  {
    label: _locale.default.cron.index.zhouRi,
    value: '1',
  },
];
var minuteOfHoursList = eachNum(0, 59, _locale.default.cron.index.fen);
var dayOfMonthList = [].concat(_toConsumableArray(eachNum(1, 31, _locale.default.cron.index.hao)), [
  {
    label: _locale.default.cron.index.yueMo,
    value: 'L',
    exclusive: true,
  },
]);
var monthOfYearList = eachNum(1, 12, _locale.default.cron.index.yue);
var defaultFreqList = [
  {
    value: 'everyHours',
    label: _locale.default.cron.index.meiXiaoShi,
  },
  {
    value: 'everyday',
    label: _locale.default.cron.index.meiTian,
  },
  {
    value: 'week',
    label: _locale.default.cron.index.meiZhou,
  },
  {
    value: 'month',
    label: _locale.default.cron.index.meiYue,
  },
  {
    value: 'year',
    label: _locale.default.cron.index.meiNian,
  },
  {
    value: 'custom',
    label: _locale.default.cron.index.cRONBiao,
  },
];
var exclusiveDays = dayOfMonthList
  .filter(function (d) {
    return d.exclusive;
  })
  .map(function (d) {
    return d.value;
  });
var checkIncludeExclusive = function checkIncludeExclusive(dd) {
  return !!(dd || []).find(function (d) {
    return exclusiveDays.includes(d);
  });
};
var cornFormat = function cornFormat(corn, mode, isRange) {
  var value = corn || '0 0 0 * * ? *';
  var cronElements = value.split(' ');
  var _cronElements = _slicedToArray(cronElements, 7),
    ss = _cronElements[0],
    mm = _cronElements[1],
    HH = _cronElements[2],
    dd = _cronElements[3],
    MM = _cronElements[4],
    week = _cronElements[5],
    yyyy = _cronElements[6];
  var freq;
  if (yyyy !== '*' || (!isRange && /[-\/#]/.test(value)) || (!mode && /[,]/.test(value))) {
    freq = 'custom';
  } else if (week !== '?') {
    freq = 'week';
  } else if (MM === '*' && dd === '*' && HH === '*' && mm !== '*' && ss === '0') {
    freq = 'everyHours';
  } else if (MM === '*' && dd === '*') {
    freq = 'everyday';
  } else if (MM === '*') {
    freq = 'month';
  } else if (MM !== '*') {
    freq = 'year';
  }
  return {
    freq: freq,
    stringValue: value,
    ss: parseInt(ss) || 0,
    mm:
      freq === 'everyHours' && !!mode
        ? mm.split(',').filter(function (i) {
            return !!i;
          })
        : parseInt(mm) || 0,
    HH: HH || 0,
    dd: dd.split(',').filter(function (i) {
      return !!i;
    }),
    MM: MM.split(',').filter(function (i) {
      return !!i;
    }),
    week: week.split(',').filter(function (i) {
      return !!i;
    }),
    yyyy: yyyy,
  };
};
exports.cornFormat = cornFormat;
var cornStringify = function cornStringify(_ref) {
  var freq = _ref.freq,
    stringValue = _ref.stringValue,
    ss = _ref.ss,
    mm = _ref.mm,
    HH = _ref.HH,
    dd = _ref.dd,
    MM = _ref.MM,
    week = _ref.week,
    yyyy = _ref.yyyy;
  if (freq === 'custom') {
    return stringValue;
  } else if (freq === 'year') {
    week = '?';
    if (!dd || dd.length <= 0) {
      dd = '*';
    }
  } else if (freq === 'month') {
    MM = '*';
    week = '?';
  } else if (freq === 'week') {
    MM = '*';
    dd = '?';
  } else if (freq === 'everyday') {
    MM = '*';
    week = '?';
    dd = '*';
  } else if (freq === 'everyHours') {
    MM = '*';
    week = '?';
    dd = '*';
    HH = '*';
    ss = '0';
  }
  return ''
    .concat(ss, ' ')
    .concat(mm, ' ')
    .concat(HH, ' ')
    .concat(dd, ' ')
    .concat(MM, ' ')
    .concat(week, ' ')
    .concat(yyyy);
};
var validCron = function validCron(value, multiple, isRange) {
  var cronObj = cornFormat(value, multiple, isRange);
  if (isRange) {
    var _cronObj$HH;
    var arr =
      ((_cronObj$HH = cronObj.HH) === null || _cronObj$HH === void 0
        ? void 0
        : _cronObj$HH.split('-')) || [];
    var _arr = _slicedToArray(arr, 2),
      _arr$ = _arr[0],
      left = _arr$ === void 0 ? 0 : _arr$,
      _arr$2 = _arr[1],
      right = _arr$2 === void 0 ? 0 : _arr$2;
    if (Number(left) >= Number(right)) {
      return false;
    }
  }
  return true;
};
exports.validCron = validCron;
function CronForm(_ref2) {
  var defaultValue = _ref2.defaultValue,
    value = _ref2.value,
    onChange = _ref2.onChange,
    multiple = _ref2.multiple,
    disabled = _ref2.disabled,
    _ref2$freqList = _ref2.freqList,
    freqList = _ref2$freqList === void 0 ? defaultFreqList : _ref2$freqList,
    _ref2$isRange = _ref2.isRange,
    isRange = _ref2$isRange === void 0 ? false : _ref2$isRange,
    _ref2$timeFormat = _ref2.timeFormat,
    timeFormat = _ref2$timeFormat === void 0 ? defaultTimeFormat : _ref2$timeFormat;
  console.log('freqList', freqList);
  var _useState = (0, _react.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    objValue = _useState2[0],
    setObjValue = _useState2[1];
  var thisCron = (0, _react.useRef)('');
  var changeValue = (0, _react.useCallback)(function (newObj) {
    var cronString = cornStringify(newObj);
    thisCron.current = cronString;
    onChange && onChange(cronString);
  }, []);
  var onFreqChanged = (0, _react.useCallback)(function (freq) {
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread(
          _objectSpread({}, oldObj),
          {},
          {
            freq: freq,
            week: freq === 'week' ? ['1'] : [],
            dd: freq === 'month' || freq === 'year' ? ['1'] : [],
            mm: Array.isArray(oldObj.mm) ? 0 : oldObj.mm,
          },
          freq === 'everyHours' && multiple
            ? {
                mm: ['0'],
              }
            : {},
        ),
        {},
        {
          MM: freq === 'year' ? ['1'] : '*',
        },
        freq === 'custom'
          ? {
              stringValue: cornStringify(oldObj),
            }
          : {},
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onMonthOfYearChanged = (0, _react.useCallback)(function (MM) {
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread({}, oldObj),
        {},
        {
          MM: MM,
        },
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onDayOfWeekChanged = (0, _react.useCallback)(function (week) {
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread({}, oldObj),
        {},
        {
          week: week,
        },
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onDayOfMonthChanged = (0, _react.useCallback)(function (dd) {
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread({}, oldObj),
        {},
        {
          dd: dd,
        },
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onFreqTimeChanged = (0, _react.useCallback)(function (time) {
    var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    setObjValue(function (oldObj) {
      var _oldHH$toString;
      var oldHH = (oldObj === null || oldObj === void 0 ? void 0 : oldObj.HH) || 0;
      var hhArr =
        oldHH === null || oldHH === void 0
          ? void 0
          : (_oldHH$toString = oldHH.toString()) === null || _oldHH$toString === void 0
          ? void 0
          : _oldHH$toString.split('-');
      if (!isEnd) {
        hhArr[0] = (time === null || time === void 0 ? void 0 : time.hour()) || 0;
      } else {
        if ((hhArr === null || hhArr === void 0 ? void 0 : hhArr.length) > 1) {
          hhArr[1] = (time === null || time === void 0 ? void 0 : time.hour()) || 0;
        } else {
          hhArr.push((time === null || time === void 0 ? void 0 : time.hour()) || 0);
        }
      }
      var newTime = time
        ? {
            ss: time.second(),
            mm: time.minute(),
            HH: hhArr.join('-'),
          }
        : {
            ss: 0,
            mm: 0,
            HH: hhArr.join('-'),
          };
      var newObj = _objectSpread(_objectSpread({}, oldObj), newTime);
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onMinuteOfHoursListChanged = (0, _react.useCallback)(function (mm) {
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread({}, oldObj),
        {},
        {
          mm: mm,
        },
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  var onStringValueChanged = (0, _react.useCallback)(function (e) {
    e.persist();
    setObjValue(function (oldObj) {
      var newObj = _objectSpread(
        _objectSpread({}, oldObj),
        {},
        {
          stringValue: e.target.value,
        },
      );
      changeValue(newObj);
      return newObj;
    });
  }, []);
  (0, _react.useEffect)(function () {
    thisCron.current = value;
    var objValue = cornFormat(value || defaultValue, multiple, isRange);
    setObjValue(objValue);
    // 默认按天调度
    if (!value && !defaultValue) {
      changeValue(objValue);
    }
  }, []);
  (0, _react.useEffect)(
    function () {
      if (thisCron.current !== value) {
        thisCron.current = value;
        setObjValue(cornFormat(value, multiple, isRange));
      }
    },
    [value],
  );
  var freq = objValue.freq,
    stringValue = objValue.stringValue,
    ss = objValue.ss,
    mm = objValue.mm,
    HH = objValue.HH,
    _objValue$dd = objValue.dd,
    dd = _objValue$dd === void 0 ? [] : _objValue$dd,
    MM = objValue.MM,
    _objValue$week = objValue.week,
    week = _objValue$week === void 0 ? [] : _objValue$week;
  var mode = multiple ? 'multiple' : undefined;
  var isYear = freq === 'year',
    isMonth = freq === 'month',
    isWeek = freq === 'week',
    isHours = freq === 'everyHours',
    isCustom = freq === 'custom';
  var isIncludeExclusive = mode && checkIncludeExclusive(dd);
  var startHH = null,
    endHH = null;
  if (isRange) {
    var _HH$toString;
    var hhArr =
      HH === null || HH === void 0
        ? void 0
        : (_HH$toString = HH.toString()) === null || _HH$toString === void 0
        ? void 0
        : _HH$toString.split('-');
    startHH = (hhArr === null || hhArr === void 0 ? void 0 : hhArr[0]) || 0;
    endHH = (hhArr === null || hhArr === void 0 ? void 0 : hhArr[1]) || 0;
  }
  return /*#__PURE__*/ _react.default.createElement(
    _react.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _select.default,
      {
        value: freq,
        onChange: onFreqChanged,
        dropdownMatchSelectWidth: false,
        style: mwidth80,
        disabled: disabled,
      },
      freqList.map(function (_ref3) {
        var value = _ref3.value,
          label = _ref3.label;
        return /*#__PURE__*/ _react.default.createElement(
          Option,
          {
            key: value,
            value: value,
          },
          label,
        );
      }),
    ),
    isYear &&
      /*#__PURE__*/ _react.default.createElement(
        _select.default,
        {
          value: MM,
          onChange: onMonthOfYearChanged,
          mode: mode,
          style: mwidth80,
          placeholder: _locale.default.cron.index.yueFen,
          disabled: disabled,
        },
        monthOfYearList.map(function (_ref4) {
          var value = _ref4.value,
            label = _ref4.label;
          return /*#__PURE__*/ _react.default.createElement(
            Option,
            {
              key: value,
              value: value,
            },
            label,
          );
        }),
      ),
    (isYear || isMonth) &&
      /*#__PURE__*/ _react.default.createElement(
        _select.default,
        {
          value: dd,
          onChange: onDayOfMonthChanged,
          mode: mode,
          style: mwidth80,
          placeholder: _locale.default.cron.index.riQi,
          allowClear: isYear,
          disabled: disabled,
        },
        dayOfMonthList.map(function (_ref5) {
          var value = _ref5.value,
            label = _ref5.label,
            exclusive = _ref5.exclusive;
          return /*#__PURE__*/ _react.default.createElement(
            Option,
            {
              key: value,
              value: value,
              disabled: mode && dd && dd.length > 0 && isIncludeExclusive === !exclusive,
            },
            label,
          );
        }),
      ),
    isWeek &&
      /*#__PURE__*/ _react.default.createElement(
        _select.default,
        {
          value: week,
          onChange: onDayOfWeekChanged,
          mode: mode,
          style: mwidth80,
          placeholder: _locale.default.cron.index.riQi,
          disabled: disabled,
        },
        dayOfWeekList.map(function (_ref6) {
          var value = _ref6.value,
            label = _ref6.label;
          return /*#__PURE__*/ _react.default.createElement(
            Option,
            {
              key: value,
              value: value,
            },
            label,
          );
        }),
      ),
    isHours &&
      /*#__PURE__*/ _react.default.createElement(
        _select.default,
        {
          value: mm,
          onChange: onMinuteOfHoursListChanged,
          mode: mode,
          style: mwidth80,
          placeholder: _locale.default.cron.index.fenZhong,
          disabled: disabled,
        },
        minuteOfHoursList.map(function (_ref7) {
          var value = _ref7.value,
            label = _ref7.label;
          return /*#__PURE__*/ _react.default.createElement(
            Option,
            {
              key: value,
              value: value,
            },
            label,
          );
        }),
      ),
    !isHours &&
      !isCustom &&
      (isRange
        ? /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(_timePicker.default, {
              value: (0, _moment.default)({
                h: startHH,
                m: mm,
                s: ss,
              }),
              onChange: function onChange(time) {
                return onFreqTimeChanged(time, false);
              },
              disabled: disabled,
              format: timeFormat,
              // minuteStep={60}
              showNow: false,
            }),
            /*#__PURE__*/ _react.default.createElement(
              'span',
              {
                style: {
                  padding: '0 4px',
                },
              },
              '-',
            ),
            /*#__PURE__*/ _react.default.createElement(_timePicker.default, {
              value: (0, _moment.default)({
                h: endHH,
                m: mm,
                s: ss,
              }),
              onChange: function onChange(time) {
                return onFreqTimeChanged(time, true);
              },
              disabled: disabled,
              format: timeFormat,
              // minuteStep={60}
              showNow: false,
            }),
          )
        : /*#__PURE__*/ _react.default.createElement(_timePicker.default, {
            value: (0, _moment.default)({
              h: HH,
              m: mm,
              s: ss,
            }),
            onChange: function onChange(time) {
              return onFreqTimeChanged(time, false);
            },
            disabled: disabled,
            format: timeFormat,
            showNow: false,
          })),
    isCustom &&
      /*#__PURE__*/ _react.default.createElement(_input.default, {
        style: width150,
        value: stringValue,
        onChange: onStringValueChanged,
        disabled: disabled,
      }),
  );
}
