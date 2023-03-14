// 生成随机数，首位是字母

export function makeRandomCode(num = 10) {
  const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const charArr = [
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
  const arr = [...numArr, ...charArr];
  let code = charArr[Math.floor(Math.random() * charArr.length)];
  for (let i = 0; i < num - 1; i++) {
    code += `${arr[Math.floor(Math.random() * arr.length)]}`;
  }
  return code;
}
