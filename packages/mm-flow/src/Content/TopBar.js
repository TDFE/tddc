import { useState, useEffect } from 'react';
import { Row, Button, Icon, Menu, Dropdown, Tooltip } from 'antd';
export const toolBarTypeNameMap = {
  redo: '重做',
  undo: '撤销',
  'zoom-in': '放大',
  'zoom-out': '缩小',
  fullscreen: '适应画布',
  delete: '删除',
  'fullscreen-exit': '实际尺寸',
  'deployment-unit': '排序',
  copy: '拷贝规则流',
};
export default (props) => {
  const { editor, previewMode, operateGroup } = props || {};
  const [canRedo, setCanRedo] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canDelete, setCanDelete] = useState(false);
  const [fullscreen, setFullScreen] = useState(false);
  const {
    schema: { history },
    graph,
    controller,
    paper,
  } = editor || {};

  useEffect(() => {
    if (props.editor) {
      watchHistory(props);
    }
  }, [props.editor]);

  const watchHistory = (props) => {
    if (!editor) return;
    editor.off('change');
    editor.off('node:click');
    editor.off('node:unactive');
    editor.off('paper:click');
    editor.off('node:remove');

    editor.on('change', () => {
      const canRedo = history.index < history.schemaList.length - 1;
      const canUndo = history.index > 0;
      setCanRedo(canRedo);
      setCanUndo(canUndo);
    });
    editor.graph.on('node:click', ({ node }) => {
      const canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 || editor.graph.line?.activeLine;
      setCanDelete(canDelete);
    });
    editor.graph.on('node:unactive', () => {
      const canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 || editor.graph.line?.activeLine;
      setCanDelete(canDelete);
    });
    editor.graph.on('paper:click', () => {
      const canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 || editor.graph.line?.activeLine;
      setCanDelete(canDelete);
    });
    editor.graph.on('node:remove', () => {
      setCanDelete(false);
    });
  };

  const redo = () => {
    editor.schema.redo();
  };

  const undo = () => {
    editor.schema.undo();
  };

  const deleteFun = () => {
    const { node, line } = graph || {};
    const deleteKeys = [];
    for (let key in node.actives) {
      // 不触发事件
      node.deleteNode(node.actives[key]);
      delete node.actives[key];
      deleteKeys.push(key);
    }
    line.activeLine && line.deleteLine(line.activeLine);
    /**
     * @event Graph#delete
     * @type {Object}
     */
    graph.fire('delete', { deleteKeys });
  };

  const format = (type) => {
    const {
      graph: {
        line: { lines },
      },
    } = editor;
    let [fromPoint, toPoint] = [1, 3];
    // 横向排序
    if (type === 'x') {
      [fromPoint, toPoint] = [1, 3];
      editor.config.dagreOption = {
        nodesep: 90,
        ranksep: 90,
        edgesep: 40,
        rankdir: 'LR',
      };
    }
    // 纵向排序
    if (type === 'y') {
      [fromPoint, toPoint] = [2, 0];
      editor.config.dagreOption = {
        ranksep: 60,
      };
    }

    Object.values(lines).forEach((line) => {
      line.data.fromPoint = fromPoint;
      line.data.toPoint = toPoint;
    });

    editor.schema.format();
    editor.controller.autoFit();
  };

  const onPrint = () => {
    const div = document.createElement('div');
    div.className = 'print-window job-editor ';
    div.innerHTML = props.editor.svg.outerSVG();
    document.body.appendChild(div);
    window.print();
    document.body.removeChild(div);
  };

  const handleScreen = () => {
    if (fullscreen) {
      return exitFullscreen();
    }
    setFullScreen(true);

    // eslint-disable-next-line vars-on-top
    var element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  // 退出全屏
  const exitFullscreen = () => {
    setFullScreen(false);
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  const clickEvent = (type) => {
    switch (type) {
      case 'redo':
        return canRedo && redo;
      case 'undo':
        return canUndo && undo;
      case 'zoom-in':
        return () => {
          controller.zoom(1.05);
        };
      case 'zoom-out':
        return () => {
          controller.zoom(0.95);
        };
      case 'fullscreen':
        return () => {
          controller.autoFit();
        };
      case 'fullscreen-exit':
        return () => {
          const transform = paper.transform();
          const { scalex } = transform.localMatrix.split();
          controller.zoom(1 / scalex);
        };
      case 'delete':
        return () => {
          canDelete && deleteFun();
        };
    }
  };

  const getClassName = (type) => {
    let disableClass = '';
    switch (type) {
      case 'redo':
        if (!canRedo) {
          disableClass = 'disable';
        }
        break;
      case 'undo':
        if (!canUndo) {
          disableClass = 'disable';
        }
        break;
      case 'delete':
        if (!canDelete) {
          disableClass = 'disable';
        }
        break;
    }
    return disableClass;
  };

  const getCommandChild = (commandActions) => {
    let child = [];
    commandActions?.forEach((type) => {
      let click = null;
      if (typeof type === 'object') {
        ({ type, click } = type);
      }

      if (type) {
        child.push(
          <span
            className={`${getClassName(type)} command-item`}
            onClick={click || clickEvent(type)}
          >
            <Icon type={type} />
            {toolBarTypeNameMap[type]}
          </span>,
        );
      }
    });
    const menu = (
      <Menu>
        <Menu.Item onClick={() => format('y')}>纵向排序</Menu.Item>
        <Menu.Item onClick={() => format('x')}>横向排序</Menu.Item>
      </Menu>
    );
    child.push(
      <Dropdown overlay={menu} placement="bottomLeft">
        <label className="command-item">
          <Icon type="deployment-unit" />
          格式化排序
        </label>
      </Dropdown>,
    );
    return child;
  };

  let commandActions = ['zoom-out', 'zoom-in'];
  if (!previewMode) {
    commandActions = commandActions.concat([
      'fullscreen',
      'fullscreen-exit',
      'redo',
      'undo',
      'delete',
    ]);
  } else {
    commandActions = commandActions.concat(['fullscreen']);
  }

  if (!editor) return null;
  return (
    <>
      {previewMode && (
        <Button.Group className="flow-btn-wrap" size="small">
          {commandActions?.map((type) => {
            return (
              <Tooltip title={toolBarTypeNameMap[type]} key={type}>
                <Button onClick={clickEvent(type)}>
                  <Icon type={type} />
                </Button>
              </Tooltip>
            );
          })}
        </Button.Group>
      )}
      {!previewMode && (
        <div className="job-top-bar">
          <Row type="flex" align="middle" justify="space-between" className="flow-editor-hd">
            <div>{getCommandChild(commandActions)}</div>
            {operateGroup?.map((v) => {
              return (
                <Button loading={v?.loading} type={v?.type} onClick={v?.click}>
                  {v?.name}
                </Button>
              );
            })}
          </Row>
        </div>
      )}
    </>
  );
};
