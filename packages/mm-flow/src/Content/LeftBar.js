import { useState, useEffect, useCallback } from 'react';
import { Tooltip, Icon, Ellipsis } from 'tntd';
import { nodeIconMap } from '../NodeIcon';
import './LeftBar.less';

export default (props) => {
  const { onDrop, flowNodesDict, showType, lang } = props || {};
  const [dragItem, setDargItem] = useState(null);
  const [pageX, setPageX] = useState(-990);
  const [pageY, setPageY] = useState(-990);

  const { size = [] } = dragItem || {};
  const [collapse, setCollapse] = useState(true);

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
      if (item?.hidden && item?.hidden !== 'false') {
        return;
      }
      if (['circle'].includes(shape) || ['start', 'end'].includes(lowNodeType)) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape || 'circle',
          iconColor: item.iconColor,
          icon: item.icon,
          size: [50, 50],
          data: item.data,
        });
      } else if (['rhombus'].includes(shape) || ['parallel', 'exclusive'].includes(lowNodeType)) {
        ItemMap.push({
          type: nodeType,
          name: item.name,
          shape: shape || 'rhombus',
          size: [60, 56],
          data: item.data,
        });
      } else {
        ItemMap.push({
          type: nodeType,
          _nodeType: item.nodeType,
          name: item.name,
          shape: 'ellipse',
          prefixName: item?.iconText || '?',
          iconColor: item.iconColor,
          icon: item.icon,
          size: [120, 28],
          data: item.data,
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
    const lowNodeType = item?.type.toLowerCase();
    console.log('item', item);
    // 开始/结束/判断/并行
    if (
      [
        'start',
        'startflownode',
        'end',
        'endflownode',
        'parallel',
        'parallelgateway',
        'exclusive',
        'exclusivegateway',
      ].includes(lowNodeType)
    ) {
      const IconMap = {
        start: <img src={nodeIconMap.start} />,
        startflownode: <img src={nodeIconMap.start} />,

        end: <img src={nodeIconMap.end} />,
        endflownode: <img src={nodeIconMap.end} />,

        parallel: <img src={nodeIconMap.parallel} />,
        parallelgateway: <img src={nodeIconMap.parallel} />,

        exclusive: <img src={nodeIconMap.judgment} />,
        exclusivegateway: <img src={nodeIconMap.judgment} />,
      };

      // 收起模式
      if (collapse) {
        return (
          <Tooltip title={item?.name} placement="right">
            <div className="icon-wrap">{IconMap[lowNodeType]}</div>
          </Tooltip>
        );
      }

      // 展开的并行
      if (['parallel', 'parallelgateway'].includes(lowNodeType)) {
        return (
          <Tooltip placement="right" title={item?.name}>
            <span className="rhombus-node">
              <span>
                <img src={nodeIconMap.parallelColor} />
              </span>
              {item?.name}
            </span>
          </Tooltip>
        );
      }

      // 展开的判断
      if (['exclusive', 'exclusivegateway'].includes(lowNodeType)) {
        return (
          <Tooltip placement="right" title={item?.name}>
            <span className="rhombus-node">
              <span>
                <img src={nodeIconMap.judgmentColor} />
              </span>
              {item?.name}
            </span>
          </Tooltip>
        );
      }

      return (
        <Tooltip title={item?.name}>
          {item?.prefixName && (
            <span style={{ backgroundColor: item?.iconColor || '#e6b55e' }}>
              {item?.prefixName}
            </span>
          )}
          {collapse ? IconMap[lowNodeType] : item?.name}
        </Tooltip>
      );
    }

    let { prefixName, icon } = item || {};
    if (lang !== 'cn' && prefixName) {
      prefixName = prefixName.substring(0, 1);
    }

    if (collapse) {
      return (
        <Tooltip title={item?.name}>
          <span style={{ backgroundColor: item?.iconColor || '#e6b55e' }}>
            {icon ? <img src={icon} /> : prefixName}
          </span>
        </Tooltip>
      );
    }

    return (
      <Ellipsis
        style={{ alignItems: 'center', width: '120px', lineHeight: '24px' }}
        prefix={
          !!prefixName && (
            <span style={{ backgroundColor: item?.iconColor || '#e6b55e' }}>
              {icon ? <img src={icon} /> : prefixName}
            </span>
          )
        }
        title={<Ellipsis title={item?.name} widthLimit={80} />}
      />
    );
  };

  return (
    <>
      <div className="job-left-bar">
        <div className={`drag-list ${collapse ? 'collapse' : ''}`}>
          <div
            style={{
              left: dragItem?.name ? pageX - size[0] / 2 : -9999,
              top: dragItem?.name ? pageY - size[1] / 2 : -9999,
              display: dragItem?.type ? 'flex' : 'none',
              zIndex: 10,
            }}
            className={`${dragItem ? getShapeClass(dragItem) : ''} flow-item drag-item`}
          >
            {itemDom(dragItem)}
          </div>
        </div>
        <div className={`item-list ${collapse ? 'collapse' : ''}`}>{renderItems()}</div>
      </div>
      <div className={`collapse-btn ${collapse ? 'collapse' : ''}`}>
        <Icon type={collapse ? 'right' : 'left'} onClick={() => setCollapse(!collapse)} />
      </div>
    </>
  );
};
