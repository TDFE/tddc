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
import 'antd/es/input/style';
import _Input from 'antd/es/input';
import 'antd/es/time-picker/style';
import _TimePicker from 'antd/es/time-picker';
import 'antd/es/select/style';
import _Select from 'antd/es/select';
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
function _defineProperty(e, r, t) {
  return (
    (r = _toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
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
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return (
    _arrayWithoutHoles(r) ||
    _iterableToArray(r) ||
    _unsupportedIterableToArray(r) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _iterableToArray(r) {
  if (('undefined' != typeof Symbol && null != r[Symbol.iterator]) || null != r['@@iterator'])
    return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
import I18N from '../locale';
import React, { Fragment, useState, useCallback, useRef, useEffect } from 'react';
import moment from 'moment';
var Option = _Select.Option;
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
    label: I18N.cron.index.zhouYi,
    value: '2',
  },
  {
    label: I18N.cron.index.zhouEr,
    value: '3',
  },
  {
    label: I18N.cron.index.zhouSan,
    value: '4',
  },
  {
    label: I18N.cron.index.zhouSi,
    value: '5',
  },
  {
    label: I18N.cron.index.zhouWu,
    value: '6',
  },
  {
    label: I18N.cron.index.zhouLiu,
    value: '7',
  },
  {
    label: I18N.cron.index.zhouRi,
    value: '1',
  },
];
var minuteOfHoursList = eachNum(0, 59, I18N.cron.index.fen);
var dayOfMonthList = [].concat(_toConsumableArray(eachNum(1, 31, I18N.cron.index.hao)), [
  {
    label: I18N.cron.index.yueMo,
    value: 'L',
    exclusive: true,
  },
]);
var monthOfYearList = eachNum(1, 12, I18N.cron.index.yue);
var defaultFreqList = [
  {
    value: 'everyHours',
    label: I18N.cron.index.meiXiaoShi,
  },
  {
    value: 'everyday',
    label: I18N.cron.index.meiTian,
  },
  {
    value: 'week',
    label: I18N.cron.index.meiZhou,
  },
  {
    value: 'month',
    label: I18N.cron.index.meiYue,
  },
  {
    value: 'year',
    label: I18N.cron.index.meiNian,
  },
  {
    value: 'custom',
    label: I18N.cron.index.cRONBiao,
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
export var cornFormat = function cornFormat(corn, mode, isRange) {
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
export var validCron = function validCron(value, multiple, isRange) {
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
export default function CronForm(_ref2) {
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
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    objValue = _useState2[0],
    setObjValue = _useState2[1];
  var thisCron = useRef('');
  var changeValue = useCallback(function (newObj) {
    var cronString = cornStringify(newObj);
    thisCron.current = cronString;
    onChange && onChange(cronString);
  }, []);
  var onFreqChanged = useCallback(function (freq) {
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
  var onMonthOfYearChanged = useCallback(function (MM) {
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
  var onDayOfWeekChanged = useCallback(function (week) {
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
  var onDayOfMonthChanged = useCallback(function (dd) {
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
  var onFreqTimeChanged = useCallback(function (time) {
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
  var onMinuteOfHoursListChanged = useCallback(function (mm) {
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
  var onStringValueChanged = useCallback(function (e) {
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
  useEffect(function () {
    thisCron.current = value;
    var objValue = cornFormat(value || defaultValue, multiple, isRange);
    setObjValue(objValue);
    // 默认按天调度
    if (!value && !defaultValue) {
      changeValue(objValue);
    }
  }, []);
  useEffect(
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
  return /*#__PURE__*/ React.createElement(
    Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      _Select,
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
        return /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        _Select,
        {
          value: MM,
          onChange: onMonthOfYearChanged,
          mode: mode,
          style: mwidth80,
          placeholder: I18N.cron.index.yueFen,
          disabled: disabled,
        },
        monthOfYearList.map(function (_ref4) {
          var value = _ref4.value,
            label = _ref4.label;
          return /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        _Select,
        {
          value: dd,
          onChange: onDayOfMonthChanged,
          mode: mode,
          style: mwidth80,
          placeholder: I18N.cron.index.riQi,
          allowClear: isYear,
          disabled: disabled,
        },
        dayOfMonthList.map(function (_ref5) {
          var value = _ref5.value,
            label = _ref5.label,
            exclusive = _ref5.exclusive;
          return /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        _Select,
        {
          value: week,
          onChange: onDayOfWeekChanged,
          mode: mode,
          style: mwidth80,
          placeholder: I18N.cron.index.riQi,
          disabled: disabled,
        },
        dayOfWeekList.map(function (_ref6) {
          var value = _ref6.value,
            label = _ref6.label;
          return /*#__PURE__*/ React.createElement(
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
      /*#__PURE__*/ React.createElement(
        _Select,
        {
          value: mm,
          onChange: onMinuteOfHoursListChanged,
          mode: mode,
          style: mwidth80,
          placeholder: I18N.cron.index.fenZhong,
          disabled: disabled,
        },
        minuteOfHoursList.map(function (_ref7) {
          var value = _ref7.value,
            label = _ref7.label;
          return /*#__PURE__*/ React.createElement(
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
        ? /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            /*#__PURE__*/ React.createElement(_TimePicker, {
              value: moment({
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
            /*#__PURE__*/ React.createElement(
              'span',
              {
                style: {
                  padding: '0 4px',
                },
              },
              '-',
            ),
            /*#__PURE__*/ React.createElement(_TimePicker, {
              value: moment({
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
        : /*#__PURE__*/ React.createElement(_TimePicker, {
            value: moment({
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
      /*#__PURE__*/ React.createElement(_Input, {
        style: width150,
        value: stringValue,
        onChange: onStringValueChanged,
        disabled: disabled,
      }),
  );
}
