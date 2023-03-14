/*
 * @Descripttion: FormList
 * @Author: 郑泳健
 * @Date: 2023-03-06 18:42:08
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-09 21:53:21
 */

import React, { useState, useEffect, useRef, useContext, memo } from 'react';
import { cloneDeep, isEqual } from 'lodash';
import { getNames } from '../utils';
import { FormContext } from '../store';
import { IFormListProps, IFormContext, ILevel, TAddOrRemove } from '../interface';

const List: React.FC<IFormListProps> = ({ name, children }) => {
  const maxRef = useRef(-1);
  const { form, initialValues } = useContext<IFormContext>(FormContext);
  const [dataLevel, setDataLevel] = useState<ILevel[]>([]);

  useEffect(() => {
    const key: string = Array.isArray(name) ? name?.[0] : name;
    if (form && form.dataLevel) {
      form.dataLevel[key] = dataLevel;
    }
  }, [form, dataLevel, name]);

  /** 根据默认数值自动生成dataLevel */
  useEffect(() => {
    let dataSource = initialValues;
    const attrs = getNames(name);

    for (const key of attrs) {
      dataSource = dataSource?.[key] || [{}];
    }

    if (Array.isArray(dataSource)) {
      const _level = dataSource.map((i, index) => {
        return {
          key: index,
          name: `${attrs.join('.')}.${index}`,
        };
      });
      setDataLevel(_level);
      maxRef.current = dataSource.length - 1;
    }
  }, [initialValues, name]);

  /** 新增一列 */
  const handleAdd: TAddOrRemove = (index) => {
    const tempDataLevel = cloneDeep(dataLevel);
    maxRef.current++;
    const attrs = getNames(name);
    tempDataLevel.splice(index + 1, 0, {
      key: maxRef.current,
      name: `${attrs?.join('.')}.${maxRef.current}`,
    });
    setDataLevel(tempDataLevel);
  };

  /** 删除一列 */
  const handleDel: TAddOrRemove = (index) => {
    const temp = cloneDeep(dataLevel);
    temp.splice(index, 1);
    setDataLevel(temp);
  };

  return <>{children?.(dataLevel, { add: handleAdd, remove: handleDel })}</>;
};

// name 没有改变就不需要重复render
export default memo(List, (nextProps, prevProps) => {
  if (isEqual(nextProps.name, prevProps.name) && !!prevProps.name) {
    return true;
  }
  return false;
});
