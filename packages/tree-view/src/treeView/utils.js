import React from 'react';
import { renderToString } from 'react-dom/server';

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

export const SVGImage = (text, bgColor) => {
  // 使用 renderToString 方法将 SVGImage 组件渲染为字符串
  const svgString = renderToString(
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="shape" fill={bgColor} cx="11" cy="11" r="11" />
      <text
        fontFamily="PingFangSC-Regular, PingFang SC"
        fontSize="12"
        fontWeight="normal"
        fill="#FFFFFF"
      >
        <tspan x="5" y="15">
          {text}
        </tspan>
      </text>
    </svg>,
  );

  // 对 svgString 进行 URL 编码
  const encodedSvgString = encodeURIComponent(svgString);
  // 使用 btoa 函数将 SVG 字符串转换为 base64 编码的字符串
  const base64 = btoa(encodedSvgString);
  // 生成base64
  const imgSrc = `data:image/svg+xml;base64,${base64}`;

  return imgSrc;
};
