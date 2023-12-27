'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _constants = require('./constants');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var _default = (exports.default = function _default(props) {
  var source = props.source,
    target = props.target,
    root = props.root,
    color = props.color,
    type = props.type,
    linkType = props.linkType,
    shuoldRender = props.shuoldRender;
  var keyMap = {};
  var drawLine = function drawLine(x1, y1, x2, y2) {
    var isH = isHorizontal(x1, x2);
    var width = isH ? x2 - x1 : Math.abs(y1 - y2);
    var highlight = props.highlight;
    var style = {
      position: 'absolute',
      height: isH ? 0 : width,
      width: isH ? width : 0,
      // left: x1,
      // top: (isH ? y1 : Math.min(y1, y2)) + COMPONENT_HEIGHT / 2,
      transform: 'translate('
        .concat(x1, 'px, ')
        .concat((isH ? y1 : Math.min(y1, y2)) + _constants.COMPONENT_HEIGHT / 2, 'px)'),
      zIndex: highlight ? 1 : 0,
      borderBottom: '1px '.concat(linkType || 'solid', ' ').concat(color || '#c7d0d9'),
      borderLeft: '1px '.concat(linkType || 'solid', ' ').concat(color || '#c7d0d9'),
    };
    var clsNames = 'link ' + (highlight ? ['link-highlight'] : '');
    var lineKey = genKey([x1, y1, x2, y2]);
    if (keyMap[lineKey]) {
      return null;
    }
    keyMap[lineKey] = true;
    return /*#__PURE__*/ _react.default.createElement('div', {
      className: clsNames,
      style: style,
      'data-key': genKey([x1, y1, x2, y2]),
      key: genKey([x1, y1, x2, y2]),
    });
  };
  var isHorizontal = function isHorizontal(x1, x2) {
    if (x1 === x2) {
      return false;
    }
    return true;
  };
  var genKey = function genKey(value) {
    if (value === void 0) {
      value = [];
    }
    var _value = value;
    var x1 = _value[0];
    var y1 = _value[1];
    var x2 = _value[2];
    var y2 = _value[3];
    return x1 + ',' + y1 + '-' + x2 + ',' + y2;
  };
  var lines = [];
  var arr = shuoldRender;
  if (arr.length === 12) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[4], arr[5], arr[6], arr[7]));
    lines.push(drawLine(arr[8], arr[9], arr[10], arr[11]));
  } else if (arr.length === 8) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[4], arr[5], arr[6], arr[7]));
  } else if (arr.length === 6) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[2], arr[3], arr[4], arr[5]));
  } else if (arr.length === 4) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
  }
  return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, lines);
});
