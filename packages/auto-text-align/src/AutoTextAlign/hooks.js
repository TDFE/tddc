import { useState, useEffect } from 'react';
import { getColumnWidth } from './utils';

const useAdjustAlign = (widthList, containerRef, initColumnLen) => {
  const [colomns, setColomns] = useState([]);
  // 容器宽度
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const dom = containerRef.current;

    const getContainerWidth = function () {
      const containerWidth = containerRef.current?.getBoundingClientRect()?.width;
      setContainerWidth(containerWidth);
    };

    if (dom) {
      const containerWidth = dom?.getBoundingClientRect()?.width;

      console.log(containerWidth, 'containerWidth')
      setContainerWidth(containerWidth);
    }

    window.addEventListener('resize', getContainerWidth, false);

    return () => {
      window.removeEventListener('resize', getContainerWidth, false);
    };
  }, [containerRef]);

  useEffect(() => {
    // 计算出每一列的宽度以及列数
    const column = getColumnWidth(widthList, initColumnLen, containerWidth);
    setColomns(column);
  }, [widthList, containerRef, initColumnLen, containerWidth]);

  return colomns;
};

export default useAdjustAlign;
