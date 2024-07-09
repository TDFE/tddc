export function transform(string, child, childMap) {
  let tree = child || {
    logic: '',
    children: [],
  };
  let openBrackets = 0;
  let i = 0;

  let strObj = {
    logic: '&&',
    children: [],
  };

  let hasAnd = false;
  let hasOr = false;

  // 或条件 分割成数组
  while (i < string.length) {
    if (string.charAt(i) === '(') {
      openBrackets++;
    } else if (string.charAt(i) === ')') {
      openBrackets--;
    } else if (string.charAt(i) === '|' && openBrackets === 0) {
      let str = string.substr(0, i);

      strObj.logic = '||';
      strObj.children.push(str);

      string = string.substr(i + 1);
      i = -1;
      hasOr = true;
    } else if (string.charAt(i) === '&' && openBrackets === 0) {
      hasAnd = true;
    }
    i++;
    if (!(i < string.length) && openBrackets === 0) {
      strObj.children.push(string);
    }
  }
  // 确定运算符
  tree.logic = strObj.logic;

  // 且条件 分割成数组
  if (!hasOr && hasAnd) {
    let string = strObj.children[0];
    let openBrackets = 0;
    let i = 0;
    strObj.children = [];
    while (i < string.length) {
      if (string.charAt(i) === '(') {
        openBrackets++;
      } else if (string.charAt(i) === ')') {
        openBrackets--;
      } else if (string.charAt(i) === '&' && openBrackets === 0) {
        let str = string.substr(0, i);
        strObj.logic = '||';
        strObj.children.push(str);
        string = string.substr(i + 1);
        i = -1;
      }

      if (string !== '' && i + 1 >= string.length) {
        if (string !== '' && string.charAt(0) === '(' && string.charAt(string.length - 1) === ')') {
          if (bracesStatus(string.substr(1, string.length - 2))) {
            string = string.substr(1, string.length - 2);
          }
        }
        strObj.children.push(string);
      }
      i++;
    }
  }

  // 循环处理数组
  strObj.children = strObj.children.map((item) => {
    if (item.indexOf('&') > -1 || item.indexOf('|') > -1) {
      let str = item;
      let child = {
        logic: '&&',
        children: [],
      };
      if (str !== '' && str.charAt(0) === '(' && str.charAt(str.length - 1) === ')') {
        if (bracesStatus(str.substr(1, str.length - 2))) {
          str = str.substr(1, str.length - 2);
        }
      }

      tree.children.push(child);
      transform(str, child, childMap);
    } else {
      let obj = {};
      obj = {
        name: item,
        ...childMap[item],
      };
      if (childMap[item] && childMap[item].children) {
        obj.isGroup = true;
      }
      tree.children.push(obj);
    }
  });
  return tree;
}

function bracesStatus(string) {
  string = string.replace(/[^\(\)]/g, '');
  while (/\(\)/.test(string)) {
    string = string.replace(/\(\)/g, '');
  }
  return string === '';
}

export const getTextPixelWith = (text, fontStyle = 'normal 14px Robot') => {
  let canvas = document.createElement('canvas'); // 创建 canvas 画布
  let context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境
  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度
  let dimension = context.measureText(text); // 测量文字
  return dimension.width;
};

export function getRuleCfgList(cfgJson, params) {
  let list = [];
  cfgJson &&
    cfgJson['params'] &&
    cfgJson['params'].map((item, index) => {
      item.children &&
        item.children.map((subItem, subIndex) => {
          let param = params.find((pItem) => pItem.name === subItem.name);
          let obj = {
            name: subItem.name,
            componentType: subItem.componentType,
            type: subItem.type ? subItem.type : 'string',
            value: param && param.value ? param.value : subItem.defaultValue,
            mapType: subItem.mapType ? subItem.mapType : null,
            selectName: subItem.selectName ? subItem.selectName : null,
            selectType: subItem.selectType ? subItem.selectType : null,
            selectOption: subItem.selectOption ? subItem.selectOption : null,
            willChangeOther: subItem['willChangeOther'] ? subItem['willChangeOther'] : [],
            willChangeSelf: subItem['willChangeSelf'] ? subItem['willChangeSelf'] : null,
            willChangeParent: subItem['willChangeParent'] ? subItem['willChangeParent'] : [],
          };
          list.push(obj);
        });
    });
  return list;
}

export function getHandleType(handleObj, allMap) {
  let type = 'string';
  if (handleObj && handleObj.selectType) {
    if (handleObj.selectType === 'service') {
      if (handleObj.value && handleObj.selectName) {
        let mapItem =
          allMap &&
          allMap[handleObj.selectName] &&
          handleObj.value &&
          allMap[handleObj.selectName].filter((item) => item.name === handleObj.value)[0];
        type = mapItem && mapItem['type'] ? mapItem['type'].toLowerCase() : 'string';
      }
    }
  }
  return type;
}

export const isJSON = (str) => {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      // console.log("error：" + str + "!!!" + e);
      return false;
    }
  } else {
    // console.log("It is not a string!", str);
  }
};

export const sourceName = (field, lang) => {
  let params = {
    field: {
      cn: '字段',
      en: 'field',
    },
    realtime: {
      cn: '实时',
      en: 'realtime',
    },
    offline: {
      cn: '离线',
      en: 'offline',
    },
  };
  return params[field]?.[lang] || field;
};
