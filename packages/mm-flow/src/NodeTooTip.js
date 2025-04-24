import React, { memo } from 'react';
import ReactDOM from 'react-dom';
import { Tooltip } from 'tntd';

const NodeTooTip = ({ toolTipInfo, renderNodeToolTip }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        left: toolTipInfo?.textX,
        top: toolTipInfo?.textY,
        display: toolTipInfo?.textVisible ? 'block' : 'none',
      }}
    >
      {renderNodeToolTip ? (
        renderNodeToolTip(toolTipInfo)
      ) : (
        <Tooltip visible={true} title={`${toolTipInfo?.nowTextNode?.name}`} />
      )}
    </div>,
    document.body,
  );
};

export default memo(NodeTooTip);
