/*
 * @Descripttion: 高性能动态增删form表单
 * @Author: 郑泳健
 * @Date: 2023-02-16 10:43:03
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-10 13:49:36
 */
import React, { useState, useRef } from 'react';
import { validateFields, getFieldsValue, getFieldValue } from './utils';
import { FormContext } from './store';
import { IForm, ICustomFormProps } from './interface';
import List from './components/List';
import Item from './components/Item';

const CustomForm = ({ form, initialValues, children }: ICustomFormProps) => {
  // 这个是为了获取当前是哪一个单元格在输入
  const [currentChangeKeys, setCurrentChangeKeys] = useState<string[]>([]);

  return (
    <FormContext.Provider
      value={{
        form,
        initialValues,
        currentChangeKeys,
        setCurrentChangeKeys,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

CustomForm.useForm = () => {
  const form: { current: IForm } = useRef<IForm>({
    dataLevel: [],
    formData: {},
    validateFields: () => validateFields(form.current),
    getFieldsValue: () => getFieldsValue(form.current),
    getFieldValue: (field: Array<string>) => getFieldValue(form.current, field),
    setFieldsValue: (obj: string[][]) => {
      for (let i in obj) {
        for (let attr in obj[i]) {
          form.current.formData[i][attr].setItemValue(obj[i][attr]);
        }
      }
    },
  });

  return [form.current];
};

CustomForm.List = List;
CustomForm.Item = Item;

export default CustomForm;
