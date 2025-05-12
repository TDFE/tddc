import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { Tooltip } from 'antd';

const NodeTooTip = ({ toolTipInfo, renderNodeToolTip }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        left: toolTipInfo?.textX,
        top: toolTipInfo?.textY,
        zIndex: 1000,
      }}
    >
      <Tooltip
        overlayClassName={renderNodeToolTip ? 'custom-node-tootip' : ''}
        overlayStyle={renderNodeToolTip ? { top: 10, style: { top: 10 } } : {}}
        visible={true}
        title={
          renderNodeToolTip ? renderNodeToolTip(toolTipInfo) : `${toolTipInfo?.nowTextNode?.name}`
        }
      />
    </div>,
    document.body,
  );
};

export default memo(NodeTooTip);
