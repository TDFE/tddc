/*
 * @Descripttion: 对CustomForm.Item进行性能优化
 * @Author: 郑泳健
 * @Date: 2023-02-23 12:47:28
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-14 14:27:16
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

  // 为了给最外层提供方法去校验，比如保存的时候.
  // 这里依赖不要添加value,因为子组件的useEffect会比父组件useEffect先执行，如果添加了依赖value会导致子组件获取到的formData永远是上一次的
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
  }, [rules, name, errorMsg, form]);

  /** 这段代码不能删除，当增加/删除列的时候有些默认值需要更新 */
  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
      generateFormData(name, initialValue);
    }
  }, [initialValue]);

  // 初始化设置默认值,
  useEffect(() => {
    const initValue = getInitValue(initialValues, name) as TinitialValueType;
    // @ts-ignore
    const _value = ['', null, undefined].includes(initValue) ? initialValue : initValue;

    setValue(_value);
    generateFormData(name, _value);
    if (name) {
      setCurrentChangeKeys([getNames(name)?.join('.')]);
    }
  }, []);

  /**
   * 动态修改form内部的值,为啥不在useEffect里面处理的原因是子组件的useEffect会比父组件useEffect先执行，需要保证在子组件useEffect监听value变化的时候获取到的formData永远是最新的
   * @param name
   * @param value
   * @returns
   */
  const generateFormData = (name: string[] | string, value: TinitialValueType) => {
    if (!name || !form) return;
    const [str, ...rest] = name;

    rest.forEach((i) => {
      if (form.formData[str]) {
        form.formData[str][i]['value'] = value;
        form.formData[str][i].checkItem = () => {
          const error = handleCheckItem(value, rules);
          setErrorMsg(error);
          return error;
        };
      } else {
        form.formData[str] = {
          [i]: {
            value,
            checkItem: () => {
              const error = handleCheckItem(value, rules);
              setErrorMsg(error);
              return error;
            },
            setItemValue: () => {},
            errorMsg: undefined,
          },
        };
      }
    });
  };

  // 默认方法
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      | string
      | number
      | undefined,
  ) => {
    let val;
    if (typeof e === 'object') {
      val = (e as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>)
        ?.target?.value;
    } else {
      val = e;
    }
    setValue(val);
    generateFormData(name, val);
    const error = handleCheckItem(val, rules);
    setErrorMsg(error);
    if (name) {
      setCurrentChangeKeys([getNames(name)?.join('.')]);
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
    !nextProps.shouldUpdate &&
    Array.isArray(nextProps.dependencies) &&
    nextProps.dependencies.every(
      (i) => !nextProps.currentChangeKeys?.includes(getNames(i).join('.')),
    )
  ) {
    return true;
  }
  return false;
}

export default memo(ItemComp, arePropsEqual);
