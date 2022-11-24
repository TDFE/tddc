'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.makeRandomCode = makeRandomCode;

// 生成随机数，首位是字母
function makeRandomCode() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var charArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var arr = [].concat(numArr, charArr);
  var code = charArr[Math.floor(Math.random() * charArr.length)];

  for (var i = 0; i < num - 1; i++) {
    code += ''.concat(arr[Math.floor(Math.random() * arr.length)]);
  }

  return code;
}
