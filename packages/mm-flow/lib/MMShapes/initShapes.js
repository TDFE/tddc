'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = initShapes;
exports.sliceName = exports.getTextPixelWith = void 0;

var _flowExclusivity = _interopRequireDefault(require('../Images/flow-exclusivity.svg'));

var _flowParallel = _interopRequireDefault(require('../Images/flow-parallel.svg'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

// 获取单行文本的像素宽度
var getTextPixelWith = function getTextPixelWith(text) {
  var fontStyle =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'normal 12px Robot';
  var canvas = document.createElement('canvas'); // 创建 canvas 画布

  var context = canvas.getContext('2d'); // 获取 canvas 绘图上下文环境

  context.font = fontStyle; // 设置字体样式，使用前设置好对应的 font 样式才能准确获取文字的像素长度

  var dimension = context.measureText(text); // 测量文字

  return dimension.width;
}; // JS判断字符串长度（英文占1个字符，中文汉字占2个字符）

exports.getTextPixelWith = getTextPixelWith;

var sliceName = function sliceName(str) {
  var defaultWidth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  var sliceIndex = '';

  if (str && (str === null || str === void 0 ? void 0 : str.length) > 6) {
    for (var i = 6; i < (str === null || str === void 0 ? void 0 : str.length); i++) {
      var sumWid = getTextPixelWith(str.slice(0, i + 1));

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

exports.sliceName = sliceName;

function initShapes(editor, flowNodes) {
  var _ref = editor || {},
    _ref$config = _ref.config,
    config = _ref$config === void 0 ? {} : _ref$config;

  var _ref2 = config || {},
    showMiniMap = _ref2.showMiniMap; // 渲染策略类节点

  var renderNode = function renderNode(data, snapPaper, opt) {
    var namePre = data.name;
    var name = namePre;

    if (name) {
      name = sliceName(name);
    }

    var text1 = snapPaper.text(15, 15, opt.iconText);
    var circle = snapPaper.circle(15, 14, 11);
    text1.attr({
      fill: '#fff',
      fontSize: 12,
    });
    circle.attr({
      fill: opt.color,
    });
    var circleGroup = snapPaper.group(circle, text1);
    var text = snapPaper.text(30, 15, name);

    var _text$getBBox = text.getBBox(),
      textW = _text$getBBox.w;

    var node = snapPaper.rect(0, 0, Math.max(textW + 40, 120), 28, 15, 15);
    node.attr({
      fill: '#eaeefa',
      stroke: '#d0dcfd',
      class: 'flow-icon-node',
      strokeWidth: 1,
    });
    text.attr({
      fill: '#454f64',
      textAnchor: 'start',
      data: name,
      class: 'flow-txt-node',
      fontSize: 12,
    });

    if (!showMiniMap) {
      var obj = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
      obj.innerHTML = '<span xmlns="http://www.w3.org/1999/xhtml" class="task-status"></span>';
      var statusIcon = window.Snap(obj);
      statusIcon.attr({
        width: 14,
        height: 14,
        x: node.getBBox().width - 14,
        y: 0,
      });
      return snapPaper.group(node, circleGroup, text, statusIcon);
    }

    return snapPaper.group(node, circleGroup, text);
  }; // 初始化组件

  var initEditorShape = function initEditorShape() {
    var _loop = function _loop(i) {
      var node = flowNodes[i];
      var nodeType =
        (node === null || node === void 0 ? void 0 : node.type) ||
        (node === null || node === void 0 ? void 0 : node.code);
      var typeLow = nodeType === null || nodeType === void 0 ? void 0 : nodeType.toLowerCase();

      if (typeLow.startsWith('start')) {
        // 开始
        editor.graph.node.registeNode(
          nodeType,
          {
            render: function render(data, snapPaper) {
              var node = snapPaper.circle(25, 25, 25);
              var text = snapPaper.text(25, 25, data.name);
              node.attr({
                fill: '#628FE4',
                class: 'flow-icon-node',
              });
              text.attr({
                fill: '#fff',
                class: 'flow-txt-node',
              });
              return snapPaper.group(node, text);
            },
            linkPoints: [
              {
                x: 0.5,
                y: 0,
              },
              {
                x: 1,
                y: 0.5,
              },
              {
                x: 0.5,
                y: 1,
              },
              {
                x: 0,
                y: 0.5,
              },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('end')) {
        //  结束
        editor.graph.node.registeNode(
          nodeType,
          {
            render: function render(data, snapPaper) {
              var node = snapPaper.circle(25, 25, 25);
              var text = snapPaper.text(25, 25, data.name);
              node.attr({
                fill: '#869FBE',
                class: 'flow-icon-node',
              });
              text.attr({
                fill: '#fff',
                class: 'flow-txt-node',
              });
              return snapPaper.group(node, text);
            },
            linkPoints: [
              {
                x: 0.5,
                y: 0,
              },
              {
                x: 1,
                y: 0.5,
              },
              {
                x: 0.5,
                y: 1,
              },
              {
                x: 0,
                y: 0.5,
              },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('parallel')) {
        // 并行
        editor.graph.node.registeNode(
          nodeType,
          {
            render: function render(data, snapPaper) {
              var _text$node;

              var image = snapPaper.image(_flowParallel.default, 0, 0, 60, 56);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              var text = snapPaper.text(30, 28, data.name);
              text.attr({
                fill: '#24AF95',
                class: 'flow-txt-node',
              });
              text === null || text === void 0
                ? void 0
                : (_text$node = text.node) === null || _text$node === void 0
                ? void 0
                : _text$node.setAttribute('font-size', '12px');
              return snapPaper.group(image, text);
            },
            linkPoints: [
              {
                x: 0.5,
                y: 0,
              },
              {
                x: 1,
                y: 0.5,
              },
              {
                x: 0.5,
                y: 1,
              },
              {
                x: 0,
                y: 0.5,
              },
            ],
          },
          'default',
        );
      } else if (typeLow.startsWith('exclusive')) {
        // 判断
        editor.graph.node.registeNode(
          nodeType,
          {
            render: function render(data, snapPaper) {
              var _text$node2;

              var image = snapPaper.image(_flowExclusivity.default, 0, 0, 60, 56);
              image.node.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              var text = snapPaper.text(30, 28, data.name);
              text.attr({
                fill: '#F67613',
                class: 'flow-txt-node',
              });
              text === null || text === void 0
                ? void 0
                : (_text$node2 = text.node) === null || _text$node2 === void 0
                ? void 0
                : _text$node2.setAttribute('font-size', '12px');
              return snapPaper.group(image, text);
            },
            linkPoints: [
              {
                x: 0.5,
                y: 0,
              },
              {
                x: 1,
                y: 0.5,
              },
              {
                x: 0.5,
                y: 1,
              },
              {
                x: 0,
                y: 0.5,
              },
            ],
          },
          'default',
        );
      } else {
        editor.graph.node.registeNode(
          nodeType,
          {
            render: function render(data, snapPaper) {
              return renderNode(data, snapPaper, {
                iconText: node.iconText || '?',
                color: node.iconColor || '#E6B55E',
              });
            },
            linkPoints: [
              {
                x: 0.5,
                y: 0,
              },
              {
                x: 1,
                y: 0.5,
              },
              {
                x: 0.5,
                y: 1,
              },
              {
                x: 0,
                y: 0.5,
              },
            ],
          },
          'iconNode',
        );
      }
    };

    for (var i in flowNodes) {
      _loop(i);
    }
  };

  initEditorShape();
}
