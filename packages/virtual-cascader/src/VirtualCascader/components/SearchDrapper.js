/*
 * @Description: 搜索下拉框
 * @Author: 郑泳健
 * @Date: 2022-11-15 17:26:18
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-06 17:00:44
 */
import React, { useRef, memo, useMemo } from 'react';
import useVirtualList from '../hooks/useVirtualList';

const SearchDrapper = ({
  width,
  inputValue,
  filterOptions,
  prefixCls,
  notFoundContent,
  fieldNames,
  activeValueCells,
  onChoosed,
  showSearch,
}) => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  const [list] = useVirtualList(filterOptions, {
    containerTarget: containerRef,
    wrapperTarget: wrapperRef,
    itemHeight: 32,
    overscan: 10,
  });

  /** 搜索结果为空 */
  const isEntry = useMemo(() => {
    return (
      !Array.isArray(filterOptions) ||
      filterOptions.some((i) => i?.[fieldNames.value] === 'ANT_CASCADER_NOT_FOUND')
    );
  }, [filterOptions]);

  if (isEntry) {
    if (notFoundContent) {
      return <div style={{ width }}>{notFoundContent}</div>;
    }
    return (
      <div>
        <ul className={`${prefixCls}-menu`} style={{ height: 'auto', width: width || 190 }}>
          <li
            className={`${prefixCls}-menu-item ${prefixCls}-menu-item-disabled`}
            title=""
            role="menuitem"
          >
            <div className="ant-empty ant-empty-normal ant-empty-small">
              <div className="ant-empty-image">
                <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                  <g transform="translate(0 1)" fill="none">
                    <ellipse fill="#F5F5F5" cx="32" cy="33" rx="32" ry="7"></ellipse>
                    <g stroke="#D9D9D9">
                      <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"></path>
                      <path
                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                        fill="#FAFAFA"
                      ></path>
                    </g>
                  </g>
                </svg>
              </div>
              <p className="ant-empty-description">暂无数据</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className={`${prefixCls}-menu`}>
      <div ref={containerRef} style={{ height: 180, overflow: 'auto' }}>
        <div ref={wrapperRef}>
          {list?.map(({ data: { path } = {}, data } = {}, index) => {
            const value = data?.[fieldNames['value']];
            const labels = path?.map((i) => i?.[fieldNames['label']])?.join('/') || '';

            return (
              <div
                className={`
                ${prefixCls}-menu-item
                ${activeValueCells.includes(value) ? `${prefixCls}-menu-item-active` : ''}
                ${data?.disabled ? `${prefixCls}-menu-item-disabled` : ''}
                ${
                  path?.[path?.length - 1]?.[fieldNames['label']]
                    ? `${prefixCls}-menu-item-nodata`
                    : ''
                }
              `}
                onClick={() => {
                  if (!data?.disabled) {
                    onChoosed(value);
                  }
                }}
                key={value || index}
              >
                {showSearch?.render?.(inputValue, path) || labels}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(SearchDrapper);
