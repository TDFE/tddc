import FlowExclusivity from '../Images/flow-exclusivity.svg';
import FlowParallel from '../Images/flow-parallel.svg';
import Judgment from '../NodeIcon/images/judgment-color.svg';
import ParallelGateway from '../NodeIcon/images/parallel-color.svg';

// 获取单行文本的像素宽度
export const getTextPixelWith = (text, fontStyle = 'normal 12px Robot') => {
  const canvas = document.createElement('canvas'); // 创建 canvas 画布
  const context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境
  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度
  const dimension = context.measureText(text); // 测量文字
  return dimension.width;
};

// JS判断字符串长度（英文占1个字符，中文汉字占2个字符）
export const sliceName = (str, defaultWidth = 80) => {
  let sliceIndex = '';
  if (str && str?.length > 6) {
    for (let i = 6; i < str?.length; i++) {
      const sumWid = getTextPixelWith(str.slice(0, i + 1));
      if (sumWid > defaultWidth) {
        sliceIndex = i;
        break;
      }
    }
  }

  if (sliceIndex) {
    return str.slice(0, sliceIndex) + '...';
  }
  return str;
};
export default function initShapes(editor, flowNodes) {
  const { config = {} } = editor || {};
  const { showMiniMap } = config || {};
  // 渲染策略类节点
  const renderNode = (data, snapPaper, opt) => {
    const { name: namePre } = data;
    let name = namePre;
    if (name) {
      name = sliceName(name);
    }
    let circleInfo;
    if (opt.icon) {
      circleInfo = snapPaper.image(opt.icon, 0, 0, 16, 16);
      circleInfo.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      circleInfo.attr({
        x: 7,
        y: 6,
      });
    } else {
      circleInfo = snapPaper.text(15, 15, opt.iconText);
      circleInfo.attr({
        fill: '#fff',
        fontSize: 12,
      });
    }
    const circle = snapPaper.circle(15, 14, 11);
    circle.attr({
      fill: opt.color,
    });

    const circleGroup = snapPaper.group(circle, circleInfo);

    const text = snapPaper.text(30, 15, name);

    const { w: textW } = text.getBBox();

    const node = snapPaper.rect(0, 0, Math.max(textW + 40, 120), 28, 15, 15);
    node.attr({
      fill: '#ECF0FA',
      stroke: '#fff',
      class: 'flow-icon-node',
      strokeWidth: 2,
      filter: 'url(#mm-editor-node-shadow)',
    });
    text.attr({
      fill: '#454f64',
      textAnchor: 'start',
      data: name,
      class: 'flow-txt-node',
      fontSize: 12,
    });

    if (!showMiniMap) {
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
    }
    return snapPaper.group(node, circleGroup, text);
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
              const node = snapPaper.circle(24, 24, 24);
              const text = snapPaper.text(24, 24, data.name);
              node.attr({
                fill: '#20BD9F',
                class: 'flow-icon-node',
                filter: 'url(#mm-editor-node-shadow)',
                stroke: '#fff',
                strokeWidth: 2,
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
              const node = snapPaper.circle(24, 24, 24);
              const text = snapPaper.text(24, 24, data.name);
              node.attr({
                fill: '#8B919E',
                class: 'flow-icon-node',
                filter: 'url(#mm-editor-node-shadow)',
                stroke: '#fff',
                strokeWidth: 2,
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
          nodeType,
          {
            render: (data, snapPaper) => {
              const image = snapPaper.image(FlowParallel, 0, 0, 120, 52);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              image.attr({
                filter: 'url(#mm-editor-node-shadow)',
              });
              let dName = data.name;
              if (dName.length > 5) {
                dName = dName.slice(0, 5) + '...';
              }
              const text = snapPaper.text(62, 28, dName);
              text.attr({
                fill: '#7A5AF8',
                class: 'flow-txt-node',
              });
              text?.node?.setAttribute('font-size', '12px');

              const iconImg = Snap(18, 18);
              Snap.load(ParallelGateway, (f) => {
                // 将加载的图片添加到 Snap.svg 的实例中
                iconImg.append(f);
              });
              iconImg.attr({
                width: 16,
                height: 16,
                x: 20,
                y: 18,
                class: 'parallel-node-icon',
                filter: 'url(#mm-editor-node-shadow)',
              });

              return snapPaper.group(image, iconImg, text);
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
          nodeType,
          {
            render: (data, snapPaper) => {
              const image = snapPaper.image(FlowExclusivity, 0, 0, 120, 52);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              image.attr({
                filter: 'url(#mm-editor-node-shadow)',
              });
              let dName = data.name;
              if (dName.length > 5) {
                dName = dName.slice(0, 5) + '...';
              }
              const text = snapPaper.text(62, 28, dName);
              text.attr({
                fill: '#F47345',
                class: 'flow-txt-node',
              });
              text?.node?.setAttribute('font-size', '12px');

              const iconImg = Snap(16, 16);
              Snap.load(Judgment, (f) => {
                // 将加载的图片添加到 Snap.svg 的实例中
                iconImg.append(f);
              });
              iconImg.attr({
                x: 20,
                y: 18,
                class: 'exclusive-node-icon',
              });

              return snapPaper.group(image, iconImg, text);
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
                icon: node.icon,
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
