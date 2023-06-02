"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.colorRgb = void 0;
var colorRgb = function colorRgb(str, opacity) {
  var sColor = str === null || str === void 0 ? void 0 : str.toLowerCase();
  if (sColor) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(_i, _i + 2), 16));
    }
    return 'rgba(' + sColorChange.join(',') + ',' + opacity + ')';
  }
  return sColor;
};
exports.colorRgb = colorRgb;