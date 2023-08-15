import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import { Tooltip, message, Row } from 'antd';
import MMEditor from 'mmeditor';
import TopBar from './Content/TopBar';
import LeftBar from './Content/LeftBar';
import initShapes, { sliceName } from './MMShapes/initShapes';
import DefaultDataConvert from './DefaultDataConvert';
import DialogHandle from './DialogHandle';
import { getText } from './locale';
import './index.less';

export { sliceName };
export default forwardRef((props, ref) => {
  const editorWrapRef = useRef();
  const editorDomRef = useRef();
  const editorRef = useRef();
  const dialogHandleRef = useRef();
  const [toolTipInfo, setToolTipInfo] = useState();
  const [dialogShowInfo, setDialogShowInfo] = useState(null);
  const [initReady, setInitReady] = useState(false);
  const {
    type,
    graphData,
    flowNodesDict = [],
    auditedNodes = [],
    className,
    showMiniMap = true,
    DataConvert,
    toolTipNameHandle,
    dialogHide,
    showType,
    dialogDom = [],
    editorStyle,
    onRef,
    checkLineExtendFn,
    showLengend,
    LengendDom,
    autoDiffAuditNodes = true,
    lang,
  } = props;
  const previewMode = type === 'view';

  const auditedNodesPre = useRef(auditedNodes);

  useImperativeHandle(ref, () => ({
    updateGraph: setGraphData,
  }));

  const checkNewLine = (data, editor) => {
    const {
      graph: {
        node: { nodes },
      },
    } = editor;
    const { from, to } = data;
    // 通组件输入输出不能连接
    if (from === to) return false;
    const fromNode = nodes[from];
    const toNode = nodes[to];
    const {
      data: { type: fromType, name: fromName },
      fromLines: sourceFromLines,
    } = fromNode || {};
    const {
      data: { type: toType, name: toName },
      toLines: targetToLines,
    } = toNode || {};

    if (['start'].includes(toType) && targetToLines && targetToLines.size) {
      message.error(toName + (getText('bunengshezhishuruliu', lang) || '不能设置输入流'));
      return false;
    }
    // 不能设置输出流
    if (['end'].includes(fromType) && sourceFromLines && sourceFromLines.size) {
      message.error(fromName + (getText('bunengshezhishuchuliu', lang) || '不能设置输出流'));
      return false;
    }
    checkLineExtendFn && checkLineExtendFn({ data, editor });
    return true;
  };

  useEffect(() => {
    const resizeBound = () => {
      const { height: jobEditorHei, width: jobEditorWid } =
        (editorWrapRef && editorWrapRef.current && editorWrapRef.current.getBoundingClientRect()) ||
        {};
      if (jobEditorHei && editorDomRef) {
        editorDomRef.current.style.height = jobEditorHei - (!previewMode ? 48 : 0) + 'px';
        editorDomRef.current.style.width = jobEditorWid - (!previewMode ? 140 : 0) + 'px';
      }
      if (editorRef.current) {
        editorRef.current.controller.autoFit();
      }
    };
    const init = async () => {
      dialogHandleRef.current = new DialogHandle(showType);
      resizeBound();
      editorRef.current = new MMEditor({
        dom: editorDomRef.current,
        showMiniMap,
        mode: previewMode ? 'view' : 'edit', // 只读模式设置 mode:"view"
      });
      // 注册节点
      initShapes(editorRef.current, flowNodesDict);
      if (graphData) {
        await setGraphData(graphData);
      }

      // 连线时校验
      if (editorRef.current.graph.line.shapes['default']) {
        editorRef.current.graph.line.shapes['default'].checkNewLine = checkNewLine;
      }

      // 注册节点⌚️
      addEditorEvent();

      onRef && onRef(this);

      setInitReady(true);
    };
    init();
    window.addEventListener('resize', resizeBound);
    return () => {
      if (editorRef.current) {
        editorRef.current.graph.clearGraph();
        editorRef.current.destroy();
        editorRef.current = null;
      }
      setInitReady(false);
      window.removeEventListener('resize', resizeBound);
    };
  }, []);

  const setGraphData = async (data) => {
    try {
      const dataFormatted = typeof data === 'object' ? data : JSON.parse(data || '{}');
      let convertFun = DefaultDataConvert;
      if (DataConvert) {
        convertFun = DataConvert;
      }
      await editorRef.current.schema.setInitData(
        convertFun?.convert(dataFormatted, editorRef.current),
      );
      await editorRef.current.controller.autoFit();
      runFlow();
    } catch (e) {
      message.error('解析数据错误,' + e?.message);
    }
  };

  useEffect(() => {
    if (editorRef.current && initReady) {
      setGraphData(graphData);
    }
  }, [graphData, initReady]);

  useEffect(() => {
    if (
      autoDiffAuditNodes &&
      editorRef.current &&
      initReady &&
      JSON.stringify(auditedNodes) !== JSON.stringify(auditedNodesPre?.current)
    ) {
      setGraphData(graphData);
      auditedNodesPre.current = auditedNodes;
    }
  }, [graphData, auditedNodes, autoDiffAuditNodes]);

  // 初始化编辑器事件
  const addEditorEvent = () => {
    let timeStamp;
    // 选中
    editorRef?.current.graph.on('node:click', ({ node }) => {
      document.getElementsByClassName('lb-workflow-header')[0]?.children[1]?.blur();
      const now = new Date().getTime();
      if (now - timeStamp < 300) {
        // 产品说这个情况下就不用弹窗
        !dialogHide &&
          dialogHandleRef.current.show(node, editorRef?.current, (data) => {
            setDialogShowInfo(data);
          });
      }
      timeStamp = now;
      props.onNodeClick && props.onNodeClick(node.data);
    });

    // 没有选中
    editorRef?.current.graph.on('node:mouseenter', ({ node }) => {
      const bbox = node.node.getBoundingClientRect();
      setToolTipInfo({
        nowTextNode: toolTipNameHandle ? toolTipNameHandle(node.data) : node.data,
        textVisible: true,
        textX: bbox.x + bbox.width / 2,
        textY: bbox.y - 5,
      });
    });

    editorRef?.current.graph.on('node:mouseleave', () => {
      setToolTipInfo(null);
    });

    // 节点删除事件
    editorRef?.current.graph.on('node:remove', () => {
      setToolTipInfo(null);
    });
  };

  // 动画效果
  const runFlow = async () => {
    if (!auditedNodes?.length) {
      return;
    }
    const { graph } = editorRef?.current || {};
    const {
      node: { nodes },
      line: { lines },
    } = graph || {};
    const [hasAuditedNodeUuids, auditedLine] = [[], []];
    auditedNodes.forEach((node) => {
      hasAuditedNodeUuids.push(node?.uuid);
    });
    auditedNodes.forEach((hasAudited) => {
      const { uuid } = hasAudited || {};
      const status = `instance ${hasAudited.status || ''}`;
      Object.values(nodes).forEach((node) => {
        if (node.data.uuid === uuid) {
          node.data.className = `${node.data.className || ''} ${status}`;
          node.addClass(status);
        }
      });

      for (let key in lines) {
        const line = lines[key];
        if (uuid === line.data.to && hasAuditedNodeUuids.indexOf(line.data.from) > -1) {
          line.data.className = `${line.data.className || ''}  ${status}`;
          line.addClass(status);
          auditedLine.push(line.data.uuid);
        }
      }
    });

    for (let key in nodes) {
      if (!hasAuditedNodeUuids.includes(key)) {
        const node = nodes[key];
        node.data.className = `${node.data.className || ''} unrun`;
        node.addClass('unrun');
      }
    }

    for (let key in lines) {
      if (!auditedLine.includes(key)) {
        const line = lines[key];
        line.data.className = `${line.data.className || ''} unrun`;
        line.addClass('unrun');
      }
    }
  };

  // 目标放置
  const onDrop = (item, e) => {
    // 增加节点
    const dom = editorRef?.current?.dom.node;
    const name = item?.initName || item?.name;
    const { size = [] } = item || {};
    const transform = editorRef?.current.paper.transform();
    const info = transform.globalMatrix.split();
    const bbox = dom.getBoundingClientRect();
    if (e.clientX - bbox.x < 0 || e.clientY - bbox.y < 0) return;
    const x = (e.clientX - bbox.x - info.dx) / info.scalex - (size[0] / 2) * info.scalex;
    const y = (e.clientY - bbox.y - info.dy) / info.scalex - (size[1] / 2) * info.scalex;
    editorRef?.current?.graph.node.addNode(
      Object.assign({}, item, {
        type: item?.type,
        data: item?.data || {},
        name,
        x,
        y,
      }),
    );
  };

  return (
    <div ref={editorWrapRef} className={`job-editor ${className || ''}`} {...editorStyle}>
      {!previewMode && initReady && editorRef?.current && (
        <LeftBar {...props} editor={editorRef.current} onDrop={onDrop} />
      )}
      <div className="job-content flow-editor-content">
        {initReady && !!editorRef?.current && (
          <TopBar {...props} previewMode={previewMode} editor={editorRef.current} />
        )}
        <div className="job-mm-editor" ref={editorDomRef} />
        {!!showLengend &&
          (LengendDom || (
            <Row type="flex" className="mm-lengend">
              <span className="success">
                <i />
                {getText('yunxingwancheng', lang) || '运行完成'}
              </span>
              <span className="running">
                <i />
                {getText('yunxingzhong', lang) || '运行中'}
              </span>
              <span className="fail">
                <i />
                {getText('yunxingshibai', lang) || '运行失败'}
              </span>
            </Row>
          ))}
      </div>

      {/* 节点hover展示 */}
      <div
        style={{
          position: 'fixed',
          left: toolTipInfo?.textX,
          top: toolTipInfo?.textY,
          display: toolTipInfo?.textVisible ? 'block' : 'none',
        }}
      >
        <Tooltip visible={true} title={`${toolTipInfo?.nowTextNode?.name}`} />
      </div>

      {dialogDom?.map((dialog) => {
        return React.cloneElement(dialog, {
          ...props,
          dialogShowInfo,
          disabled: previewMode,
          editor: editorRef?.current,
          onCancel: () => {
            setDialogShowInfo(null);
          },
        });
      })}
    </div>
  );
});
