'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getTextPixelWith = exports.expandTree = exports.colorRgb = exports.collapseTree = void 0;

// 获取单行文本的像素宽度
var getTextPixelWith = function getTextPixelWith(text) {
  var fontStyle =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal 12px Segoe UI';
  var canvas = document.createElement('canvas'); // 创建 canvas 画布

  var context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境

  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度

  var dimension = context.measureText(text); // 测量文字

  return dimension.width;
};

exports.getTextPixelWith = getTextPixelWith;

var colorRgb = function colorRgb(str, opacity) {
  var sColor = str === null || str === void 0 ? void 0 : str.toLowerCase();

  if (sColor) {
    if (sColor.length === 4) {
      var sColorNew = '#';

      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }

      sColor = sColorNew;
    } // 处理六位的颜色值

    var sColorChange = [];

    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i, _i + 2), 16));
    }

    return 'rgba(' + sColorChange.join(',') + ',' + opacity + ')';
  }

  return sColor;
}; // 折叠树

exports.colorRgb = colorRgb;

var collapseTree = function collapseTree(d) {
  if (d.children) {
    d._children = d.children;

    d._children.forEach(collapseTree);

    d.children = null;
  }

  return d;
}; // 展开树

exports.collapseTree = collapseTree;

var expandTree = function expandTree(d) {
  if (d._children) {
    d.children = d._children;
    d.children.forEach(expandTree);
    d._children = null;
  }

  return d;
};

exports.expandTree = expandTree;
