/*
 * @Description: 指标的级联
 * @Author: 郑泳健
 * @Date: 2022-11-17 15:17:59
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-24 18:25:32
 */
import React, { memo, useEffect, useState, useCallback } from 'react';
import { Tooltip, Select, Ellipsis } from 'tntd';
import { isEmpty, isEqual } from 'lodash';
import VirtualCascader from '@tddc/virtual-cascader';
import TdTag from './CascaderTag';
import './index.less';

export const EnptyContent = ({ text = '当前类型暂无可选变量,若有需要请联系管理员添加。' }) => {
  return (
    <div className="virtual-cascader-enpty-wrapper">
      <div className="virtual-cascader-enpty-content">
        {/* <img src={require('../img/no-data-s.png')} width={80} height={50} /> */}
        <div className="no-data-text">{text}</div>
      </div>
    </div>
  );
};

const IndicatorsCascader = ({
  options,
  value,
  setTitle,
  onChange,
  allowClear,
  disabled,
  ...rest
}) => {
  const [cascader, setCascader] = useState([]);
  // 被选中的节点
  const [choosedItem, setChoosedItem] = useState({});
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterMapOption, setFilterMapOption] = useState({});

  /** 将一维数组转为二维，为了符合Cascader组件, 同时生存一个mapOption方便后续取值  */
  useEffect(() => {
    if (!Array.isArray(options)) {
      return;
    }
    const { _filterOptions, _filterMapOption } = options.reduce(
      (total, item) => {
        const { sourceName, sourceKey, name, ...rest } = item;

        const index = total['_filterOptions'].findIndex((i) => i.name === sourceKey);
        if (index >= 0) {
          if (Array.isArray(total['_filterOptions'][index].data)) {
            total['_filterOptions'][index].data.push({ ...rest, name, sourceName });
          }
        } else {
          total['_filterOptions'].push({
            name: sourceKey,
            dName: sourceName,
            data: !!name ? [{ ...rest, sourceName, name }] : [{ name: '', dName: '' }],
          });
        }
        total['_filterMapOption'][item.name] = item;
        return total;
      },
      { _filterOptions: [], _filterMapOption: {} },
    );

    setFilterOptions(_filterOptions);
    setFilterMapOption(_filterMapOption);
  }, [options]);

  // 将value 改为cascader要求的value结构
  useEffect(() => {
    if (value) {
      const { sourceKey } = filterMapOption[value] || {};
      if (sourceKey) {
        setCascader([sourceKey, value]);
        setChoosedItem(filterMapOption[value]);
      } else {
        setCascader(['', value]);
        setChoosedItem({});
      }
    } else {
      setCascader([]);
      setChoosedItem({});
    }
  }, [value, filterMapOption]);

  const handleChange = useCallback(
    (value) => {
      // 一定要选中第二个才会修改回显
      if (Array.isArray(value) && value.length > 1) {
        const lastValue = value[value.length - 1];
        const item = filterMapOption[lastValue] || {};
        onChange(lastValue, item);
      }
      if (value?.length === 0) {
        onChange('', {});
      }
    },
    [value, filterMapOption],
  );

  const displayRender = (label, selectedOptions, inputValue) => {
    let displayDom = null;
    if (Array.isArray(selectedOptions) && selectedOptions.length) {
      const item = selectedOptions[1];
      if (!item) {
        displayDom = cascader?.[1] || undefined;
      } else {
        displayDom = (
          <div className="ant-select-selection-selected-value">
            <TdTag data={item} inputValue={inputValue} />
            {item?.dName}
          </div>
        );
      }
    } else {
      // 有些指标被删除，要求显示id;
      displayDom = cascader?.[1] || '';
    }

    return displayDom;
  };

  const renderItem = (data, level) => {
    const isLast = !data?.children?.length;
    if (!data.dName) {
      return <EnptyContent />;
    }
    const dom = (
      <span>
        {isLast && level !== 0 && <TdTag data={data} />}
        {data?.dName}
      </span>
    );
    if (level === 0) {
      return dom;
    }
    return (
      <Ellipsis widthLimit={'100%'} title={dom}>
        {dom}
      </Ellipsis>
    );
  };

  /** 搜索的时候查询 */
  const handleSearchRender = (inputValue, path) => {
    const dom = (
      <>
        <TdTag data={path?.[1]} />
        {path?.[1]?.['dName']}
      </>
    );
    return (
      <div className="cascader-search-result-wrapper">
        <Ellipsis widthLimit={'100%'} title={dom}>
          {dom}
        </Ellipsis>
      </div>
    );
  };

  /** 默认tooltip展示 */
  const getTitle = (item) => {
    if (!item || isEmpty(item)) {
      return '';
    }
    return (
      <>
        <TdTag key={1} data={item} />
        {item?.dName}
      </>
    );
  };

  // 这里这样写的原因是在级联为disabled的时候tootip不显示
  return (
    <Tooltip
      placement="top"
      title={
        !isEmpty(choosedItem) && setTitle
          ? setTitle([<TdTag key={1} data={choosedItem} />, choosedItem?.dName])
          : getTitle(choosedItem)
      }
    >
      {disabled ? (
        <Select value={value} disabled style={{ minWidth: '200px', ...rest.style }}>
          {options.map((i) => {
            return (
              <Select.Option value={i.name} key={i.name}>
                <TdTag data={choosedItem} />
                {i?.dName}
              </Select.Option>
            );
          })}
        </Select>
      ) : (
        <VirtualCascader
          {...{
            displayRender,
            ...rest,
            className: `${rest?.className || ''} virtual-indicators-cascader`,
            options: filterOptions,
            value: cascader,
            onChange: handleChange,
            renderItem,
            allowClear: allowClear || false,
            notFoundContent: <EnptyContent text={'暂无数据'} />,
            showSearch: rest.showSearch || {
              render: handleSearchRender,
            },
          }}
        />
      )}
    </Tooltip>
  );
};

export default memo(IndicatorsCascader, (prevProps, nextProps) => {
  return (
    isEqual(prevProps.options, nextProps.options) &&
    isEqual(prevProps.disabled, nextProps.disabled) &&
    prevProps.value === nextProps.value
  );
});
