'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.toolBarTypeNameMap = exports.default = void 0;

require('antd/lib/row/style');

var _row = _interopRequireDefault(require('antd/lib/row'));

require('antd/lib/tooltip/style');

var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));

require('antd/lib/button/style');

var _button = _interopRequireDefault(require('antd/lib/button'));

require('antd/lib/dropdown/style');

var _dropdown = _interopRequireDefault(require('antd/lib/dropdown'));

require('antd/lib/menu/style');

var _menu = _interopRequireDefault(require('antd/lib/menu'));

require('antd/lib/icon/style');

var _icon = _interopRequireDefault(require('antd/lib/icon'));

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var toolBarTypeNameMap = {
  redo: '重做',
  undo: '撤销',
  'zoom-in': '放大',
  'zoom-out': '缩小',
  fullscreen: '适应画布',
  delete: '删除',
  'fullscreen-exit': '实际尺寸',
  'deployment-unit': '排序',
  copy: '拷贝规则流',
};
exports.toolBarTypeNameMap = toolBarTypeNameMap;

var _default = function _default(props) {
  var _commandActions;

  var _ref = props || {},
    editor = _ref.editor,
    previewMode = _ref.previewMode,
    operateGroup = _ref.operateGroup;

  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    canRedo = _useState2[0],
    setCanRedo = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    canUndo = _useState4[0],
    setCanUndo = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    canDelete = _useState6[0],
    setCanDelete = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    fullscreen = _useState8[0],
    setFullScreen = _useState8[1];

  var _ref2 = editor || {},
    history = _ref2.schema.history,
    graph = _ref2.graph,
    controller = _ref2.controller,
    paper = _ref2.paper;

  (0, _react.useEffect)(
    function () {
      if (props.editor) {
        watchHistory(props);
      }
    },
    [props.editor],
  );

  var watchHistory = function watchHistory(props) {
    if (!editor) return;
    editor.off('change');
    editor.off('node:click');
    editor.off('node:unactive');
    editor.off('paper:click');
    editor.off('node:remove');
    editor.on('change', function () {
      var canRedo = history.index < history.schemaList.length - 1;
      var canUndo = history.index > 0;
      setCanRedo(canRedo);
      setCanUndo(canUndo);
    });
    editor.graph.on('node:click', function (_ref3) {
      var _editor$graph$line;

      var node = _ref3.node;
      var canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 ||
        ((_editor$graph$line = editor.graph.line) === null || _editor$graph$line === void 0
          ? void 0
          : _editor$graph$line.activeLine);
      setCanDelete(canDelete);
    });
    editor.graph.on('node:unactive', function () {
      var _editor$graph$line2;

      var canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 ||
        ((_editor$graph$line2 = editor.graph.line) === null || _editor$graph$line2 === void 0
          ? void 0
          : _editor$graph$line2.activeLine);
      setCanDelete(canDelete);
    });
    editor.graph.on('paper:click', function () {
      var _editor$graph$line3;

      var canDelete =
        Object.keys(editor.graph.node.actives).length !== 0 ||
        ((_editor$graph$line3 = editor.graph.line) === null || _editor$graph$line3 === void 0
          ? void 0
          : _editor$graph$line3.activeLine);
      setCanDelete(canDelete);
    });
    editor.graph.on('node:remove', function () {
      setCanDelete(false);
    });
  };

  var redo = function redo() {
    editor.schema.redo();
  };

  var undo = function undo() {
    editor.schema.undo();
  };

  var deleteFun = function deleteFun() {
    var _ref4 = graph || {},
      node = _ref4.node,
      line = _ref4.line;

    var deleteKeys = [];

    for (var key in node.actives) {
      // 不触发事件
      node.deleteNode(node.actives[key]);
      delete node.actives[key];
      deleteKeys.push(key);
    }

    line.activeLine && line.deleteLine(line.activeLine);
    /**
     * @event Graph#delete
     * @type {Object}
     */

    graph.fire('delete', {
      deleteKeys: deleteKeys,
    });
  };

  var format = function format(type) {
    var lines = editor.graph.line.lines;
    var fromPoint = 1,
      toPoint = 3; // 横向排序

    if (type === 'x') {
      fromPoint = 1;
      toPoint = 3;
      editor.config.dagreOption = {
        nodesep: 90,
        ranksep: 90,
        edgesep: 40,
        rankdir: 'LR',
      };
    } // 纵向排序

    if (type === 'y') {
      fromPoint = 2;
      toPoint = 0;
      editor.config.dagreOption = {
        ranksep: 60,
      };
    }

    Object.values(lines).forEach(function (line) {
      line.data.fromPoint = fromPoint;
      line.data.toPoint = toPoint;
    });
    editor.schema.format();
    editor.controller.autoFit();
  };

  var onPrint = function onPrint() {
    var div = document.createElement('div');
    div.className = 'print-window job-editor ';
    div.innerHTML = props.editor.svg.outerSVG();
    document.body.appendChild(div);
    window.print();
    document.body.removeChild(div);
  };

  var handleScreen = function handleScreen() {
    if (fullscreen) {
      return exitFullscreen();
    }

    setFullScreen(true); // eslint-disable-next-line vars-on-top

    var element = document.documentElement;

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  }; // 退出全屏

  var exitFullscreen = function exitFullscreen() {
    setFullScreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  var clickEvent = function clickEvent(type) {
    switch (type) {
      case 'redo':
        return canRedo && redo;

      case 'undo':
        return canUndo && undo;

      case 'zoom-in':
        return function () {
          controller.zoom(1.05);
        };

      case 'zoom-out':
        return function () {
          controller.zoom(0.95);
        };

      case 'fullscreen':
        return function () {
          controller.autoFit();
        };

      case 'fullscreen-exit':
        return function () {
          var transform = paper.transform();

          var _transform$localMatri = transform.localMatrix.split(),
            scalex = _transform$localMatri.scalex;

          controller.zoom(1 / scalex);
        };

      case 'delete':
        return function () {
          canDelete && deleteFun();
        };
    }
  };

  var getClassName = function getClassName(type) {
    var disableClass = '';

    switch (type) {
      case 'redo':
        if (!canRedo) {
          disableClass = 'disable';
        }

        break;

      case 'undo':
        if (!canUndo) {
          disableClass = 'disable';
        }

        break;

      case 'delete':
        if (!canDelete) {
          disableClass = 'disable';
        }

        break;
    }

    return disableClass;
  };

  var getCommandChild = function getCommandChild(commandActions) {
    var child = [];
    commandActions === null || commandActions === void 0
      ? void 0
      : commandActions.forEach(function (type) {
          var click = null;

          if (_typeof(type) === 'object') {
            var _type = type;
            type = _type.type;
            click = _type.click;
          }

          if (type) {
            child.push(
              /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: ''.concat(getClassName(type), ' command-item'),
                  onClick: click || clickEvent(type),
                },
                /*#__PURE__*/ _react.default.createElement(_icon.default, {
                  type: type,
                }),
                toolBarTypeNameMap[type],
              ),
            );
          }
        });

    var menu = /*#__PURE__*/ _react.default.createElement(
      _menu.default,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _menu.default.Item,
        {
          onClick: function onClick() {
            return format('y');
          },
        },
        '\u7EB5\u5411\u6392\u5E8F',
      ),
      /*#__PURE__*/ _react.default.createElement(
        _menu.default.Item,
        {
          onClick: function onClick() {
            return format('x');
          },
        },
        '\u6A2A\u5411\u6392\u5E8F',
      ),
    );

    child.push(
      /*#__PURE__*/ _react.default.createElement(
        _dropdown.default,
        {
          overlay: menu,
          placement: 'bottomLeft',
        },
        /*#__PURE__*/ _react.default.createElement(
          'label',
          {
            className: 'command-item',
          },
          /*#__PURE__*/ _react.default.createElement(_icon.default, {
            type: 'deployment-unit',
          }),
          '\u683C\u5F0F\u5316\u6392\u5E8F',
        ),
      ),
    );
    return child;
  };

  var commandActions = ['zoom-out', 'zoom-in'];

  if (!previewMode) {
    commandActions = commandActions.concat([
      'fullscreen',
      'fullscreen-exit',
      'redo',
      'undo',
      'delete',
    ]);
  } else {
    commandActions = commandActions.concat(['fullscreen']);
  }

  if (!editor) return null;
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    previewMode &&
      /*#__PURE__*/ _react.default.createElement(
        _button.default.Group,
        {
          className: 'flow-btn-wrap',
          size: 'small',
        },
        (_commandActions = commandActions) === null || _commandActions === void 0
          ? void 0
          : _commandActions.map(function (type) {
              return /*#__PURE__*/ _react.default.createElement(
                _tooltip.default,
                {
                  title: toolBarTypeNameMap[type],
                  key: type,
                },
                /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    onClick: clickEvent(type),
                  },
                  /*#__PURE__*/ _react.default.createElement(_icon.default, {
                    type: type,
                  }),
                ),
              );
            }),
      ),
    !previewMode &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'job-top-bar',
        },
        /*#__PURE__*/ _react.default.createElement(
          _row.default,
          {
            type: 'flex',
            align: 'middle',
            justify: 'space-between',
            className: 'flow-editor-hd',
          },
          /*#__PURE__*/ _react.default.createElement('div', null, getCommandChild(commandActions)),
          operateGroup === null || operateGroup === void 0
            ? void 0
            : operateGroup.map(function (v) {
                return /*#__PURE__*/ _react.default.createElement(
                  _button.default,
                  {
                    loading: v === null || v === void 0 ? void 0 : v.loading,
                    type: v === null || v === void 0 ? void 0 : v.type,
                    onClick: v === null || v === void 0 ? void 0 : v.click,
                  },
                  v === null || v === void 0 ? void 0 : v.name,
                );
              }),
        ),
      ),
  );
};

exports.default = _default;