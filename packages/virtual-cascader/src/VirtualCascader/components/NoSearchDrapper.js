/*
 * @Description: 非搜索的下拉
 * @Author: 郑泳健
 * @Date: 2022-11-15 17:32:40
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-11-22 17:26:40
 */
import React, { useRef, memo, useEffect, useState } from 'react';
import { Icon } from 'antd';
import useVirtualList from '../hooks/useVirtualList';

const NoSearchDrapper = ({
  options,
  maxWidth,
  prefixCls,
  fieldNames,
  defaultValue,
  activeValueCells,
  onChoosed,
  customRender,
  level,
}) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const [init, setInit] = useState(true);

  const [list, scrollTo] = useVirtualList(options, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 32,
    overscan: 10,
  });

  // 默认滚动到相应位置
  useEffect(() => {
    let timer;
    if (!!defaultValue && Array.isArray(options) && init) {
      const index = options?.findIndex((i) => i[fieldNames.value] === defaultValue);
      if (index >= 0) {
        timer = setTimeout(() => {
          scrollTo(index);
          setInit(false);
        }, 100);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [defaultValue, options, init, scrollTo]);
  return (
    <div ref={containerRef} style={{ height: 180, overflow: 'auto' }}>
      <div ref={wrapperRef}>
        {list?.map(({ data } = {}) => {
          const isLast =
            !Array.isArray(data?.[fieldNames.children]) || !data[fieldNames.children].length;
          return (
            <div
              className={`
               ${prefixCls}-menu-item
               ${isLast ? '' : `${prefixCls}-menu-item-expand`} ${
                data?.disabled ? `${prefixCls}-menu-item-disabled` : ''
              }
               ${
                 activeValueCells?.includes(data[fieldNames.value])
                   ? `${prefixCls}-menu-item-active`
                   : ''
               }
               ${level !== 0 ? `${prefixCls}-not-fist-level` : `${prefixCls}-fist-level`}
              `}
              key={data?.[fieldNames.value]}
              style={{ width: maxWidth || 'auto' }}
              value={data?.[fieldNames.value]}
              onClick={() => {
                if (!data?.disabled) {
                  onChoosed(data?.[fieldNames.value], level, isLast);
                }
              }}
            >
              {customRender ? (
                customRender(data, isLast, level)
              ) : (
                <span>
                  {data?.[fieldNames.label]}
                  {!isLast ? (
                    <span className={`${prefixCls}-menu-item-expand-icon`}>
                      <Icon type="right" />
                    </span>
                  ) : (
                    ''
                  )}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(NoSearchDrapper);
