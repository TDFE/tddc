/*
 * @Descripttion: CustomForm.Item
 * @Author: 郑泳健
 * @Date: 2023-02-22 23:25:24
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-14 13:51:00
 */

import React, { useContext, memo } from 'react';
import ItemComp from './ItemComp';
import { FormContext } from '../store';
import { IFormItem, IFormContext } from '../interface';

const Item: React.FC<IFormItem> = ({
  name,
  children,
  style,
  rules,
  shouldUpdate,
  initialValue,
  dependencies,
}) => {
  const { form, initialValues, currentChangeKeys, setCurrentChangeKeys } =
    useContext<IFormContext>(FormContext);

  return (
    <ItemComp
      {...{
        style,
        rules,
        name,
        children,
        form,
        currentChangeKeys,
        setCurrentChangeKeys,
        initialValues,
        initialValue,
        shouldUpdate,
        dependencies,
      }}
    />
  );
};

export default memo(Item);
