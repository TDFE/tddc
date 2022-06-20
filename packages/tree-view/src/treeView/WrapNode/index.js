import React from 'react';
import './index.less';

// 返回一个无状态的函数组件
function WrapNode(WrappedComponent) {
  return (props) => {
    let { x, y, width, fixed, minWidth, minHeight } = props;

    let s = {};
    if (fixed) {
      s = {
        width: minWidth,
      };
    } else {
      s = {
        width,
      };
    }
    let style = {
      position: 'absolute',
      top: x,
      left: y,
      fontFamily: 'Segoe UI',
      fontSize: '12px',
      fontWeight: 'normal',
      background: 'white',
      height: minHeight,
      ...s,
    };
    return (
      <div className="wrap-node" style={style}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default WrapNode;
