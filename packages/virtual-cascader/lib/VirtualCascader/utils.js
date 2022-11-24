'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.getTextWidth = void 0;
/**
 * 计算字体的宽度
 * @param {*} str
 * @param {*} fontSize
 * @returns
 */
var getTextWidth = function getTextWidth(str) {
  var fontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '12px';
  var result = 10;
  var ele = document.createElement('span');
  // 字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
  // str = str.replace(/\\n/g,' ').replace(/\\r/g,' ');
  ele.innerText = str;
  // 不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
  ele.style.fontSize = fontSize;

  // 由于父节点的样式会影响子节点，这里可按需添加到指定节点上
  document.documentElement.append(ele);
  result = ele.offsetWidth;
  document.documentElement.removeChild(ele);
  return result;
};
exports.getTextWidth = getTextWidth;
