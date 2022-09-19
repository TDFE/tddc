/*
 * @Description: 文本对其
 * @Author: 郑泳健
 * @Date: 2022-09-16 17:04:24
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-09-19 14:27:10
 */
import React, { useMemo, useRef, memo } from 'react';
import { getTextWidth } from './utils';
import useAdjustAlign from './hooks';
import './index.less';

const AutoTextAlign = ({ list, labelFontSize = '12px', valueFontSize = '14px', itemSpace = 8, maxColumn = 10 }) => {
  const containerRef = useRef();
  // 计算每一项的宽度
  const widthList = useMemo(() => {
    return list?.map(({ label, value }) => {
      return getTextWidth(label + ':', labelFontSize) + getTextWidth(value, valueFontSize) + itemSpace + 15;
    });
  }, [list]);

  // 获取每一列的宽度
  const columns = useAdjustAlign(widthList, containerRef, maxColumn);

  if (!Array.isArray(list)) {
    return null;
  }

  return (
    <div ref={containerRef} className="auto-text-align-wrapper">
      {
        list.map(({ label, value }, index) => {
          const width = columns[index % columns?.length];

          return (
            <div key={label} className="auto-text-align-item" style={{ width: width ? width + 'px' : 'auto', paddingRight: itemSpace }}>
              <div className="auto-text-align-label" style={{ fontSize: labelFontSize }}>{label}:</div>

              <div className="auto-text-align-value" style={{ fontSize: valueFontSize }}>{value}</div>
            </div>
          )
        })
      }
    </div >
  );
};

export default memo(AutoTextAlign);
