"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHandleType = getHandleType;
exports.getRuleCfgList = getRuleCfgList;
exports.sourceName = exports.isJSON = exports.getTextPixelWith = void 0;
exports.transform = transform;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function transform(string, child, childMap) {
  var tree = child || {
    logic: '',
    children: []
  };
  var openBrackets = 0;
  var i = 0;
  var strObj = {
    logic: '&&',
    children: []
  };
  var hasAnd = false;
  var hasOr = false;

  // 或条件 分割成数组
  while (i < string.length) {
    if (string.charAt(i) === '(') {
      openBrackets++;
    } else if (string.charAt(i) === ')') {
      openBrackets--;
    } else if (string.charAt(i) === '|' && openBrackets === 0) {
      var str = string.substr(0, i);
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
    var _string = strObj.children[0];
    var _openBrackets = 0;
    var _i = 0;
    strObj.children = [];
    while (_i < _string.length) {
      if (_string.charAt(_i) === '(') {
        _openBrackets++;
      } else if (_string.charAt(_i) === ')') {
        _openBrackets--;
      } else if (_string.charAt(_i) === '&' && _openBrackets === 0) {
        var _str = _string.substr(0, _i);
        strObj.logic = '||';
        strObj.children.push(_str);
        _string = _string.substr(_i + 1);
        _i = -1;
      }
      if (_string !== '' && _i + 1 >= _string.length) {
        if (_string !== '' && _string.charAt(0) === '(' && _string.charAt(_string.length - 1) === ')') {
          if (bracesStatus(_string.substr(1, _string.length - 2))) {
            _string = _string.substr(1, _string.length - 2);
          }
        }
        strObj.children.push(_string);
      }
      _i++;
    }
  }

  // 循环处理数组
  strObj.children = strObj.children.map(function (item) {
    if (item.indexOf('&') > -1 || item.indexOf('|') > -1) {
      var _str2 = item;
      var _child = {
        logic: '&&',
        children: []
      };
      if (_str2 !== '' && _str2.charAt(0) === '(' && _str2.charAt(_str2.length - 1) === ')') {
        if (bracesStatus(_str2.substr(1, _str2.length - 2))) {
          _str2 = _str2.substr(1, _str2.length - 2);
        }
      }
      tree.children.push(_child);
      transform(_str2, _child, childMap);
    } else {
      var obj = {};
      obj = _objectSpread({
        name: item
      }, childMap[item]);
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
var getTextPixelWith = exports.getTextPixelWith = function getTextPixelWith(text) {
  var fontStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal 14px Robot';
  var canvas = document.createElement('canvas'); // 创建 canvas 画布
  var context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境
  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度
  var dimension = context.measureText(text); // 测量文字
  return dimension.width;
};
function getRuleCfgList(cfgJson, params) {
  var list = [];
  cfgJson && cfgJson['params'] && cfgJson['params'].map(function (item, index) {
    item.children && item.children.map(function (subItem, subIndex) {
      var param = params.find(function (pItem) {
        return pItem.name === subItem.name;
      });
      var obj = {
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
        willChangeParent: subItem['willChangeParent'] ? subItem['willChangeParent'] : []
      };
      list.push(obj);
    });
  });
  return list;
}
function getHandleType(handleObj, allMap) {
  var type = 'string';
  if (handleObj && handleObj.selectType) {
    if (handleObj.selectType === 'service') {
      if (handleObj.value && handleObj.selectName) {
        var mapItem = allMap && allMap[handleObj.selectName] && handleObj.value && allMap[handleObj.selectName].filter(function (item) {
          return item.name === handleObj.value;
        })[0];
        type = mapItem && mapItem['type'] ? mapItem['type'].toLowerCase() : 'string';
      }
    }
  }
  return type;
}
var isJSON = exports.isJSON = function isJSON(str) {
  if (typeof str === 'string') {
    try {
      var obj = JSON.parse(str);
      if (_typeof(obj) === 'object' && obj) {
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
var sourceName = exports.sourceName = function sourceName(field, lang) {
  var _params$field;
  var params = {
    field: {
      cn: '字段',
      en: 'field'
    },
    realtime: {
      cn: '实时',
      en: 'realtime'
    },
    offline: {
      cn: '离线',
      en: 'offline'
    }
  };
  return ((_params$field = params[field]) === null || _params$field === void 0 ? void 0 : _params$field[lang]) || field;
};