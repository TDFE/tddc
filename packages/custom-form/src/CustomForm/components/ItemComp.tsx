/*
 * @Descripttion: 对CustomForm.Item进行性能优化
 * @Author: 郑泳健
 * @Date: 2023-02-23 12:47:28
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-10 14:22:57
 */

import React, { useState, memo, useEffect } from 'react';
import { isEqual } from 'lodash';
import { getNames, handleCheckItem, getInitValue } from '../utils';
import { IFormItem, IFormItemData, TinitialValueType } from '../interface';

const ItemComp: React.FC<IFormItem> = ({
  form,
  name,
  children,
  style,
  initialValues,
  initialValue,
  rules,
  setCurrentChangeKeys,
}) => {
  const [value, setValue] = useState<TinitialValueType>(undefined);
  const [errorMsg, setErrorMsg] = useState<string | undefined>(undefined);
  const [refresh, setRefresh] = useState<boolean>(false);

  // 这样是为了form.formData能获取到最新的数据
  useEffect(() => {
    setCurrentChangeKeys([getNames(name)?.join('.')]);
  }, [refresh]);

  /** 这段代码不能删除，当增加/删除列的时候有些默认值需要更新 */
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  // 初始化设置默认值,
  useEffect(() => {
    const initValue = getInitValue(initialValues, name) as TinitialValueType;
    // @ts-ignore
    const _value = ['', null, undefined].includes(initValue) ? initialValue : initValue;

    setValue(_value);

    if (name) {
      setRefresh(!refresh);
    }
    // 这里依赖不要添加name，因为name是一个数组，会造成死循环
  }, []);

  // 为了给最外层提供方法去校验，比如保存的时候
  useEffect(() => {
    if (!name || !form) return;
    const [str, ...rest] = name;

    const addItem: IFormItemData = {
      setItemValue: (_val, callback) => {
        const error = handleCheckItem(_val, rules);
        setValue(_val);
        setErrorMsg(error);
        callback?.();
      },
      checkItem: () => {
        const error = handleCheckItem(value, rules);
        setErrorMsg(error);
        return error;
      },
      value,
      errorMsg,
    };
    rest.forEach((i) => {
      if (form.formData[str]) {
        form.formData[str][i] = addItem;
      } else {
        form.formData[str] = {
          [i]: addItem,
        };
      }
    });
  }, [value, rules, name, errorMsg, form]);

  // 默认方法
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | string,
  ) => {
    let val = e;
    if (typeof e !== 'string') {
      val = e?.target?.value;
    }
    setValue(val as TinitialValueType);
    const error = handleCheckItem(val as TinitialValueType, rules);
    setErrorMsg(error);
    if (name) {
      setRefresh(!refresh);
    }
  };

  return (
    <div
      className={errorMsg ? 'has-error custom-form-item-wrapper' : 'custom-form-item-wrapper'}
      style={style}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            value,
            form,
            onChange: handleChange,
            'data-key': getNames(name)?.join('.'),
            ...child.props,
          });
        }
        return null;
      })}
      {errorMsg && <div className="ant-form-explain ant-form-item-explain-error">{errorMsg}</div>}
    </div>
  );
};

function arePropsEqual(prevProps: IFormItem, nextProps: IFormItem) {
  if (
    Array.isArray(nextProps.currentChangeKeys) &&
    nextProps.currentChangeKeys.length &&
    isEqual(prevProps.initialValues, nextProps.initialValues) &&
    !nextProps.currentChangeKeys.includes(getNames(nextProps.name).join('.')) &&
    !nextProps.shouldUpdate
  ) {
    return true;
  }
  return false;
}

export default memo(ItemComp, arePropsEqual);
