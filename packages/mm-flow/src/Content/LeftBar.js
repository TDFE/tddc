import { useState, useEffect, useCallback } from 'react';
import { Tooltip } from 'antd';
import './LeftBar.less';

export default (props) => {
  const { onDrop, flowNodesDict, showType } = props || {};
  const [dragItem, setDargItem] = useState(null);
  const [pageX, setPageX] = useState(-990);
  const [pageY, setPageY] = useState(-990);

  const { size = [] } = dragItem || {};

  // mouseDown设置目标对象
  const onDrag = (item) => {
    setDargItem(item);
    setPageX(-9990);
    setPageY(-9990);
  };

  // 开始移动
  const mousemove = useCallback(
    (e) => {
      setPageX(e.pageX);
      setPageY(e.pageY + (document.body.getBoundingClientRect().top || 0));
    },
    [dragItem],
  );

  // 释放
  const mouseup = useCallback(
    (e) => {
      // 有额外的drops事件用户自定义
      onDrop && onDrop(dragItem, e);
      setDargItem(null);
      window.document.removeEventListener('mousemove', mousemove);
      window.document.removeEventListener('mouseup', mouseup);
    },
    [dragItem],
  );

  // 有目标对象 监听事件
  useEffect(() => {
    if (dragItem) {
      window.document.addEventListener('mousemove', mousemove);
      window.document.addEventListener('mouseup', mouseup);
    }
  }, [dragItem]);

  const renderItems = () => {
    const ItemMap = [];
    flowNodesDict?.map((item) => {
      const nodeType = item.type || item.code;
      const lowNodeType = nodeType.toLowerCase();
      const shape = item.shape;
      if (['circle'].includes(shape)) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape,
          iconColor: item.iconColor,
          size: [50, 50],
        });
      } else if (['rhombus'].includes(shape)) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape,
          size: [60, 56],
        });
      } else {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: 'ellipse',
          prefixName: item?.iconText || '?',
          iconColor: item.iconColor,
          size: [120, 28],
        });
      }
    });

    return ItemMap.map((item, index) => {
      if (showType === 'subflow' && ['SubDecisionFlowNode'].indexOf(item.type) > -1) {
        return null;
      }
      const { type, help } = item || {};
      return (
        <Tooltip key={index} placement="right" overlayStyle={{ fontSize: 12 }} title={help}>
          <div
            key={type}
            className={`flow-item ${getShapeClass(item)}`}
            onMouseDown={() => {
              onDrag(item);
            }}
          >
            {itemDom(item)}
          </div>
        </Tooltip>
      );
    });
  };

  const getShapeClass = ({ type, shape }) => {
    let shapeClassName = shape ? `flow-${shape}` : '';
    const lowNodeType = type.toLowerCase();
    if (lowNodeType?.startsWith('start')) {
      shapeClassName += ' start';
    }
    if (lowNodeType?.startsWith('end')) {
      shapeClassName += ' end';
    }
    if (lowNodeType?.startsWith('exclusive')) {
      shapeClassName += ' exclusive';
    }
    if (lowNodeType?.startsWith('parallel')) {
      shapeClassName += ' parallel';
    }
    return shapeClassName;
  };

  const itemDom = (item) => {
    return (
      <>
        {item?.prefixName && (
          <span style={{ backgroundColor: item?.iconColor || '#e6b55e' }}>{item?.prefixName}</span>
        )}
        {item?.name}
      </>
    );
  };

  return (
    <div className="job-left-bar">
      <div
        style={{
          left: dragItem?.name ? pageX - size[0] / 2 : -9999,
          top: dragItem?.name ? pageY - size[1] / 2 : -9999,
          display: dragItem?.type ? 'block' : 'none',
          zIndex: 10,
        }}
        className={`${dragItem ? getShapeClass(dragItem) : ''} flow-item drag-item`}
      >
        {itemDom(dragItem)}
      </div>
      <div className="item-list">{renderItems()}</div>
    </div>
  );
};
