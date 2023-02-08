import I18N from '../locale';
import React, { Fragment, useState, useCallback, useRef, useEffect } from 'react';
import { Select, TimePicker, Input } from 'antd';
import moment from 'moment';

const Option = Select.Option;
const mwidth80 = { minWidth: 80, marginRight: 10 };
const width150 = { width: 150 };
const defaultTimeFormat = 'HH:mm:ss';
const eachNum = (start, end, str) => {
  const back = [];
  for (let i = start; i <= end; i++) {
    back.push({
      value: `${i}`,
      label: `${i}${str}`,
    });
  }
  return back;
};
const dayOfWeekList = [
  { label: I18N.cron.index.zhouYi, value: '2' },
  { label: I18N.cron.index.zhouEr, value: '3' },
  { label: I18N.cron.index.zhouSan, value: '4' },
  { label: I18N.cron.index.zhouSi, value: '5' },
  { label: I18N.cron.index.zhouWu, value: '6' },
  { label: I18N.cron.index.zhouLiu, value: '7' },
  { label: I18N.cron.index.zhouRi, value: '1' },
];
const minuteOfHoursList = eachNum(0, 59, I18N.cron.index.fen);
const dayOfMonthList = [
  ...eachNum(1, 31, I18N.cron.index.hao),
  {
    label: I18N.cron.index.yueMo,
    value: 'L',
    exclusive: true,
  },
];
const monthOfYearList = eachNum(1, 12, I18N.cron.index.yue);
const defaultFreqList = [
  { value: 'everyHours', label: I18N.cron.index.meiXiaoShi },
  { value: 'everyday', label: I18N.cron.index.meiTian },
  { value: 'week', label: I18N.cron.index.meiZhou },
  { value: 'month', label: I18N.cron.index.meiYue },
  { value: 'year', label: I18N.cron.index.meiNian },
  { value: 'custom', label: I18N.cron.index.cRONBiao },
];
const exclusiveDays = dayOfMonthList.filter((d) => d.exclusive).map((d) => d.value);
const checkIncludeExclusive = (dd) => {
  return !!(dd || []).find((d) => exclusiveDays.includes(d));
};
export const cornFormat = (corn, mode, isRange) => {
  const value = corn || '0 0 0 * * ? *';
  const cronElements = value.split(' ');
  let [ss, mm, HH, dd, MM, week, yyyy] = cronElements;
  let freq;
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
    freq,
    stringValue: value,
    ss: parseInt(ss) || 0,
    mm: freq === 'everyHours' && !!mode ? mm.split(',').filter((i) => !!i) : parseInt(mm) || 0,
    HH: HH || 0,
    dd: dd.split(',').filter((i) => !!i),
    MM: MM.split(',').filter((i) => !!i),
    week: week.split(',').filter((i) => !!i),
    yyyy,
  };
};
const cornStringify = ({ freq, stringValue, ss, mm, HH, dd, MM, week, yyyy }) => {
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

  return `${ss} ${mm} ${HH} ${dd} ${MM} ${week} ${yyyy}`;
};

export const validCron = (value, multiple, isRange) => {
  const cronObj = cornFormat(value, multiple, isRange);
  if (isRange) {
    const arr = cronObj.HH?.split('-') || [];
    const [left = 0, right = 0] = arr;
    if (Number(left) >= Number(right)) {
      return false;
    }
  }
  return true;
};

export default function CronForm({
  defaultValue,
  value,
  onChange,
  multiple,
  disabled,
  freqList = defaultFreqList,
  isRange = false,
  timeFormat = defaultTimeFormat,
}) {
  console.log('freqList', freqList);
  const [objValue, setObjValue] = useState({});
  const thisCron = useRef('');
  const changeValue = useCallback((newObj) => {
    const cronString = cornStringify(newObj);
    thisCron.current = cronString;
    onChange && onChange(cronString);
  }, []);
  const onFreqChanged = useCallback((freq) => {
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        freq,
        week: freq === 'week' ? ['1'] : [],
        dd: freq === 'month' || freq === 'year' ? ['1'] : [],
        mm: Array.isArray(oldObj.mm) ? 0 : oldObj.mm,
        ...(freq === 'everyHours' && multiple
          ? {
              mm: ['0'],
            }
          : {}),
        MM: freq === 'year' ? ['1'] : '*',
        ...(freq === 'custom'
          ? {
              stringValue: cornStringify(oldObj),
            }
          : {}),
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onMonthOfYearChanged = useCallback((MM) => {
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        MM,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onDayOfWeekChanged = useCallback((week) => {
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        week,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onDayOfMonthChanged = useCallback((dd) => {
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        dd,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onFreqTimeChanged = useCallback((time, isEnd = false) => {
    setObjValue((oldObj) => {
      const oldHH = oldObj?.HH || 0;
      const hhArr = oldHH?.toString()?.split('-');
      if (!isEnd) {
        hhArr[0] = time?.hour() || 0;
      } else {
        if (hhArr?.length > 1) {
          hhArr[1] = time?.hour() || 0;
        } else {
          hhArr.push(time?.hour() || 0);
        }
      }
      const newTime = time
        ? { ss: time.second(), mm: time.minute(), HH: hhArr.join('-') }
        : { ss: 0, mm: 0, HH: hhArr.join('-') };
      const newObj = {
        ...oldObj,
        ...newTime,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onMinuteOfHoursListChanged = useCallback((mm) => {
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        mm,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  const onStringValueChanged = useCallback((e) => {
    e.persist();
    setObjValue((oldObj) => {
      const newObj = {
        ...oldObj,
        stringValue: e.target.value,
      };
      changeValue(newObj);
      return newObj;
    });
  }, []);
  useEffect(() => {
    thisCron.current = value;
    const objValue = cornFormat(value || defaultValue, multiple, isRange);
    setObjValue(objValue);
    // 默认按天调度
    if (!value && !defaultValue) {
      changeValue(objValue);
    }
  }, []);
  useEffect(() => {
    if (thisCron.current !== value) {
      thisCron.current = value;
      setObjValue(cornFormat(value, multiple, isRange));
    }
  }, [value]);
  const { freq, stringValue, ss, mm, HH, dd = [], MM, week = [] } = objValue;
  const mode = multiple ? 'multiple' : undefined;
  const isYear = freq === 'year',
    isMonth = freq === 'month',
    isWeek = freq === 'week',
    isHours = freq === 'everyHours',
    isCustom = freq === 'custom';
  const isIncludeExclusive = mode && checkIncludeExclusive(dd);

  let startHH = null,
    endHH = null;
  if (isRange) {
    const hhArr = HH?.toString()?.split('-');
    startHH = hhArr?.[0] || 0;
    endHH = hhArr?.[1] || 0;
  }

  return (
    <Fragment>
      <Select
        value={freq}
        onChange={onFreqChanged}
        dropdownMatchSelectWidth={false}
        style={mwidth80}
        disabled={disabled}
      >
        {freqList.map(({ value, label }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>

      {isYear && (
        <Select
          value={MM}
          onChange={onMonthOfYearChanged}
          mode={mode}
          style={mwidth80}
          placeholder={I18N.cron.index.yueFen}
          disabled={disabled}
        >
          {monthOfYearList.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      )}

      {(isYear || isMonth) && (
        <Select
          value={dd}
          onChange={onDayOfMonthChanged}
          mode={mode}
          style={mwidth80}
          placeholder={I18N.cron.index.riQi}
          allowClear={isYear}
          disabled={disabled}
        >
          {dayOfMonthList.map(({ value, label, exclusive }) => (
            <Option
              key={value}
              value={value}
              disabled={mode && dd && dd.length > 0 && isIncludeExclusive === !exclusive}
            >
              {label}
            </Option>
          ))}
        </Select>
      )}

      {isWeek && (
        <Select
          value={week}
          onChange={onDayOfWeekChanged}
          mode={mode}
          style={mwidth80}
          placeholder={I18N.cron.index.riQi}
          disabled={disabled}
        >
          {dayOfWeekList.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      )}

      {isHours && (
        <Select
          value={mm}
          onChange={onMinuteOfHoursListChanged}
          mode={mode}
          style={mwidth80}
          placeholder={I18N.cron.index.fenZhong}
          disabled={disabled}
        >
          {minuteOfHoursList.map(({ value, label }) => (
            <Option key={value} value={value}>
              {label}
            </Option>
          ))}
        </Select>
      )}

      {!isHours &&
        !isCustom &&
        (isRange ? (
          <>
            <TimePicker
              value={moment({ h: startHH, m: mm, s: ss })}
              onChange={(time) => onFreqTimeChanged(time, false)}
              disabled={disabled}
              format={timeFormat}
              // minuteStep={60}
              showNow={false}
            />
            <span style={{ padding: '0 4px' }}>-</span>
            <TimePicker
              value={moment({ h: endHH, m: mm, s: ss })}
              onChange={(time) => onFreqTimeChanged(time, true)}
              disabled={disabled}
              format={timeFormat}
              // minuteStep={60}
              showNow={false}
            />
          </>
        ) : (
          <TimePicker
            value={moment({ h: HH, m: mm, s: ss })}
            onChange={(time) => onFreqTimeChanged(time, false)}
            disabled={disabled}
            format={timeFormat}
            showNow={false}
          />
        ))}

      {isCustom && (
        <Input
          style={width150}
          value={stringValue}
          onChange={onStringValueChanged}
          disabled={disabled}
        />
      )}
    </Fragment>
  );
}
