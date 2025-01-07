// 获取单行文本的像素宽度
export const getTextPixelWith = (text, fontStyle = 'normal 12px Segoe UI') => {
  let canvas = document.createElement('canvas'); // 创建 canvas 画布
  let context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境
  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度
  let dimension = context.measureText(text); // 测量文字
  return dimension.width;
};

export const colorRgb = (str, opacity) => {
  let sColor = str?.toLowerCase();
  if (sColor) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2), 16));
    }
    return 'rgba(' + sColorChange.join(',') + ',' + opacity + ')';
  }
  return sColor;
};

// 折叠树
export const collapseTree = (d) => {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapseTree);
    d.children = null;
  }
  return d;
};

// 展开树
export const expandTree = (d) => {
  if (d._children) {
    d.children = d._children;
    d.children.forEach(expandTree);
    d._children = null;
  }
  return d;
};
