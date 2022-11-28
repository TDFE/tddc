/*
 * @Description: 自定义弹窗
 * @Author: 郑泳健
 * @Date: 2022-11-14 15:18:00
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-11-22 17:26:23
 */
import React, { memo, useState, useMemo, useRef, useEffect } from 'react';
import AntCascader from './components/AntCascader';
import SearchDrapper from './components/SearchDrapper';
import NoSearchDrapper from './components/NoSearchDrapper';
import { getTextWidth } from './utils';
import 'antd/lib/cascader/style/index.css';
import './index.less';

const VirtualCascader = ({
  prefixCls = 'ant-cascader',
  options,
  changeOnSelect,
  fieldNames = { label: 'label', value: 'value', children: 'children' },
  defaultValue,
  value,
  onChange,
  showSearch,
  notFoundContent,
  customRender,
  ...rest
}) => {
  const ref = useRef();
  /** 选中的路径 */
  const [activeValueCells, setActiveValueCells] = useState([]);

  /** 根据选中路径获取每一个路径下的list */
  const optionColumns = useMemo(() => {
    const optionList = [{ options: options }];
    let currentList = options;

    for (let i = 0; i < activeValueCells.length; i += 1) {
      const activeValueCell = activeValueCells[i];
      const currentOption = currentList.find(
        (option) => option[fieldNames.value] === activeValueCell,
      );

      const subOptions = currentOption?.[fieldNames.children];
      if (!subOptions?.length) {
        break;
      }

      currentList = subOptions;
      let maxWidth;

      subOptions?.forEach((i) => {
        const width = getTextWidth(i[fieldNames.label]);
        if (width > maxWidth) {
          maxWidth = width;
        }
      });
      optionList.push({ options: subOptions, maxWidth });
    }

    return optionList;
  }, [options, activeValueCells, fieldNames]);

  /** 设置默认选中的路径 */
  useEffect(() => {
    if (Array.isArray(defaultValue)) {
      setActiveValueCells(defaultValue);
    }
  }, [defaultValue]);

  /** 设置选中的路径,用于回显 */
  useEffect(() => {
    if (Array.isArray(value)) {
      setActiveValueCells(value);
    }
  }, [value]);

  /** 弹窗关闭时候需要重新设置值 */
  const handleDropdownVisibleChange = (visible) => {
    if (!visible) {
      setActiveValueCells(value);
    }
  };

  /** 选中某一项 */
  const handleClick = (value, index, isLast) => {
    const tempActiveValueCells = [...activeValueCells];
    tempActiveValueCells.splice(index);
    tempActiveValueCells.push(value);

    setActiveValueCells(tempActiveValueCells);
    if (isLast) {
      if (onChange) {
        onChange(tempActiveValueCells);
      } else {
        defaultOnChange(tempActiveValueCells);
      }

      ref.current.handlePopupVisibleChange(false);
    }

    if (changeOnSelect) {
      if (onChange) {
        onChange(tempActiveValueCells);
      } else {
        defaultOnChange(tempActiveValueCells);
      }
    }
  };

  /** 默认onChange事件 */
  const defaultOnChange = (value) => {
    setActiveValueCells(value);
    ref.current.handlePopupVisibleChange(false);
  };

  /** 模糊搜索的时候选中某一项 */
  const handleChoosed = (value) => {
    setActiveValueCells(value);
    onChange(value);
    ref.current.handlePopupVisibleChange(false);
  };

  /** 自定义渲染弹窗 */
  const handleDropdownRender = (inputValue, filterOptions) => {
    let width = undefined;
    if (ref.current?.state?.popupVisible) {
      const _width = ref?.current?.input?.input?.getBoundingClientRect()?.width;
      if (!isNaN(_width)) {
        width = _width;
      }
    }

    if (isNaN(width)) {
      return null;
    }

    return (
      <div className={`${prefixCls}-menus ${prefixCls}-menus-placement-bottomLeft`}>
        <div>
          {inputValue && Array.isArray(filterOptions) && !!filterOptions.length ? (
            <SearchDrapper
              {...{
                inputValue,
                filterOptions,
                prefixCls,
                fieldNames,
                notFoundContent,
                activeValueCells,
                onChoosed: handleChoosed,
                showSearch,
                width,
              }}
            />
          ) : (
            <div>
              {optionColumns?.map(({ options, maxWidth } = {}, level) => {
                return (
                  <div key={options} className={`${prefixCls}-menu`}>
                    <NoSearchDrapper
                      {...{
                        options,
                        maxWidth,
                        prefixCls,
                        fieldNames,
                        defaultValue: defaultValue?.[level] || value?.[level],
                        activeValueCells,
                        level,
                        onChoosed: handleClick,
                        customRender,
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <AntCascader
      {...rest}
      changeOnSelect={changeOnSelect}
      fieldNames={fieldNames}
      prefixCls={prefixCls}
      showSearch={showSearch}
      notFoundContent={notFoundContent}
      ref={ref}
      value={value}
      onChange={onChange || defaultOnChange}
      defaultValue={defaultValue}
      options={options}
      dropdownRender={handleDropdownRender}
      onDropdownVisibleChange={handleDropdownVisibleChange}
    />
  );
};

export default memo(VirtualCascader);
