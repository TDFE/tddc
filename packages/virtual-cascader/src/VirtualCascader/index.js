/*
 * @Description: 自定义弹窗
 * @Author: 郑泳健
 * @Date: 2022-11-14 15:18:00
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-11-16 15:04:54
 */
import React, { memo, useState, useMemo, useRef, useEffect } from 'react';
import AntCascader from './components/AntCascader';
import SearchDrapper from './components/SearchDrapper';
import NoSearchDrapper from './components/NoSearchDrapper';
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
      optionList.push({ options: subOptions });
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

  /** 选中某一项 */
  const handleClick = (value, index, isLast) => {
    const tempActiveValueCells = [...activeValueCells];
    tempActiveValueCells.splice(index);
    tempActiveValueCells.push(value);

    setActiveValueCells(tempActiveValueCells);
    if (isLast) {
      onChange(tempActiveValueCells);
      ref.current.handlePopupVisibleChange(false);
    }

    if (changeOnSelect) {
      onChange(tempActiveValueCells);
    }
  };

  /** 模糊搜索的时候选中某一项 */
  const handleChoosed = (value) => {
    setActiveValueCells(value);
    onChange(value);
    ref.current.handlePopupVisibleChange(false);
  };

  /** 自定义渲染弹窗 */
  const handleDropdownRender = (inputValue, filterOptions) => {
    let positionLeft = undefined;
    if (ref.current?.state?.popupVisible) {
      const left = ref?.current?.input?.input?.getBoundingClientRect()?.left;
      if (!isNaN(left)) {
        positionLeft = left;
      }
    }

    if (isNaN(positionLeft)) {
      return null;
    }

    return (
      <div
        className={`${prefixCls}-menus ${prefixCls}-menus-placement-bottomLeft`}
        style={{ left: positionLeft }}
      >
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
              }}
            />
          ) : (
            <div>
              {optionColumns?.map(({ options } = {}, level) => {
                return (
                  <div key={options} className={`${prefixCls}-menu`}>
                    <NoSearchDrapper
                      {...{
                        options,
                        prefixCls,
                        fieldNames,
                        defaultValue: defaultValue?.[level] || value?.[level],
                        activeValueCells,
                        level,
                        onChoosed: handleClick,
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
      onChange={onChange}
      defaultValue={defaultValue}
      options={options}
      dropdownRender={handleDropdownRender}
    />
  );
};

export default memo(VirtualCascader);
