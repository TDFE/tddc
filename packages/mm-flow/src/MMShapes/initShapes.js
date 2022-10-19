import FlowExclusivity from '../images/flow-exclusivity.svg';
import FlowParallel from '../images/flow-parallel.svg';

export default function initShapes(editor, flowNodes) {
  // JS判断字符串长度（英文占1个字符，中文汉字占2个字符）
  const getStrLen = (str, max) => {
    let len = [];
    for (let i = 0; i < str.length; i++) {
      let c = str.charCodeAt(i);
      if (i < max) {
        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
          len.push('0.5', '0.5');
        } else {
          len.push('1');
        }
      }
    }
    return len;
  };
  // 渲染策略类节点
  const renderNode = (data, snapPaper, opt) => {
    const { name: namePre } = data;
    let name = namePre;
    if (name) {
      console.log('getStrLen(name) ', getStrLen(name, 6));
      name = name.slice(0, getStrLen(name, 6)?.length) + '...';
    }
    const text1 = snapPaper.text(15, 15, opt.iconText);
    const circle = snapPaper.circle(15, 14, 11);
    text1.attr({
      fill: '#fff',
      fontSize: 12,
    });
    circle.attr({
      fill: opt.color,
    });
    const circleGroup = snapPaper.group(circle, text1);

    const text = snapPaper.text(30, 15, name);

    const { w: textW } = text.getBBox();

    const node = snapPaper.rect(0, 0, Math.max(textW + 40, 120), 28, 15, 15);
    node.attr({
      fill: '#eaeefa',
      stroke: '#d0dcfd',
      class: 'flow-icon-node',
      strokeWidth: 1,
    });
    text.attr({
      fill: '#454f64',
      textAnchor: 'start',
      data: name,
      class: 'flow-txt-node',
      fontSize: 12,
    });

    const obj = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    obj.innerHTML = '<span xmlns="http://www.w3.org/1999/xhtml" class="task-status"></span>';
    const statusIcon = window.Snap(obj);
    statusIcon.attr({
      width: 14,
      height: 14,
      x: node.getBBox().width - 14,
      y: 0,
    });
    return snapPaper.group(node, circleGroup, text, statusIcon);
  };

  // 初始化组件
  const initEditorShape = () => {
    for (let i in flowNodes) {
      const node = flowNodes[i];
      const nodeType = node?.type || node?.code;
      const typeLow = nodeType?.toLowerCase();
      if (typeLow.startsWith('start')) {
        // 开始
        editor.graph.node.registeNode(
          nodeType,
          {
            render: (data, snapPaper) => {
              const node = snapPaper.circle(25, 25, 25);
              const text = snapPaper.text(25, 25, data.name);
              node.attr({
                fill: '#628FE4',
                class: 'flow-icon-node',
              });
              text.attr({
                fill: '#fff',
                class: 'flow-txt-node',
              });
              return snapPaper.group(node, text);
            },
            linkPoints: [
              { x: 0.5, y: 0 },
              { x: 1, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 0, y: 0.5 },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('end')) {
        //  结束
        editor.graph.node.registeNode(
          nodeType,
          {
            render: (data, snapPaper) => {
              const node = snapPaper.circle(25, 25, 25);
              const text = snapPaper.text(25, 25, data.name);
              node.attr({
                fill: '#869FBE',
                class: 'flow-icon-node',
              });
              text.attr({
                fill: '#fff',
                class: 'flow-txt-node',
              });
              return snapPaper.group(node, text);
            },
            linkPoints: [
              { x: 0.5, y: 0 },
              { x: 1, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 0, y: 0.5 },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('parallel')) {
        // 并行
        editor.graph.node.registeNode(
          'ParallelGateway',
          {
            render: (data, snapPaper) => {
              const image = snapPaper.image(FlowParallel, 0, 0, 60, 56);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              const text = snapPaper.text(30, 28, data.name);
              text.attr({
                fill: '#24AF95',
                class: 'flow-txt-node',
              });
              text?.node?.setAttribute('font-size', '12px');
              return snapPaper.group(image, text);
            },
            linkPoints: [
              { x: 0.5, y: 0 },
              { x: 1, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 0, y: 0.5 },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('exclusive')) {
        // 判断
        editor.graph.node.registeNode(
          'ExclusiveGateway',
          {
            render: (data, snapPaper) => {
              const image = snapPaper.image(FlowExclusivity, 0, 0, 60, 56);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              const text = snapPaper.text(30, 28, data.name);
              text.attr({
                fill: '#F67613',
                class: 'flow-txt-node',
              });
              text?.node?.setAttribute('font-size', '12px');
              return snapPaper.group(image, text);
            },
            linkPoints: [
              { x: 0.5, y: 0 },
              { x: 1, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 0, y: 0.5 },
            ],
          },
          'default',
        );
      } else {
        editor.graph.node.registeNode(
          nodeType,
          {
            render: (data, snapPaper) => {
              return renderNode(data, snapPaper, {
                iconText: node.iconText || '?',
                color: node.iconColor || '#E6B55E',
              });
            },
            linkPoints: [
              { x: 0.5, y: 0 },
              { x: 1, y: 0.5 },
              { x: 0.5, y: 1 },
              { x: 0, y: 0.5 },
            ],
          },
          'iconNode',
        );
      }
    }
  };
  initEditorShape();
}
