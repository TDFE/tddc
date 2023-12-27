import React, { useEffect, useMemo, memo } from 'react';
import './index.less';

// 返回一个无状态的class类组件, memo 用于优化性能
const WrapNode = memo((props) => {
  let { x, y, component } = props;

  useEffect(() => {}, []);

  let pos = useMemo(() => {
    return {
      left: y,
      top: x,
    };
  }, [x, y]);

  let style = {
    transform: `translate(${pos['left']}px, ${pos['top']}px)`,
  };

  return (
    <div
      className="wrap-node"
      style={{
        ...style,
      }}
    >
      {component(props)}
    </div>
  );
}, areEqual);

const areEqual = (prevProps, nextProps) => {
  let { x: prevX, y: prevY, unique: preUnique } = prevProps;
  let { x: nextX, y: nextY, unique: nextUnique } = nextProps;
  if (prevX === nextX && prevY === nextY && preUnique === nextUnique) {
    return true;
  }
  if (parent === null) {
    return false;
  }
  return false;
};

export default WrapNode;
