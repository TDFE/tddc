'use strict';

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
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/table/style');
var _table = _interopRequireDefault(require('antd/lib/table'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _utils = require('./utils');
require('./index.less');
var _excluded = ['className'];
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
function _extends() {
  _extends = Object.assign
    ? Object.assign.bind()
    : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
var CollapseTable = function CollapseTable(props) {
  var className = props.className,
    restProps = _objectWithoutProperties(props, _excluded);
  var expandIconColumnIndex = (props === null || props === void 0 ? void 0 : props.rowSelection)
    ? 1
    : props.expandIconColumnIndex || 0; // 确定checkbox框位置

  var randomCode = (0, _react.useRef)((0, _utils.makeRandomCode)());
  var activeKeyRef = (0, _react.useRef)(null);
  var container = (0, _react.useRef)(null);
  var observer = (0, _react.useRef)(null);
  (0, _react.useEffect)(
    function () {
      ob(randomCode.current);
    },
    [randomCode.current],
  );
  var ob = function ob(className) {
    container.current = document.querySelector(
      '.'.concat(
        className,
        '.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table',
      ),
    );
    console.log(2);
    observer.current = new MutationObserver(expand);
    observer.current.observe(container.current, {
      childList: true,
      // 子节点的变动
      attributes: true,
    });
  };
  var trigger = function trigger(className) {
    var _document;
    if (!className) return;
    console.log({
      className: className,
    });
    var dom =
      (_document = document) === null || _document === void 0
        ? void 0
        : _document.querySelector(
            '.'.concat(
              className,
              '.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table',
            ),
          );
    dom === null || dom === void 0 ? void 0 : dom.setAttribute('c-data', 'Mutation');
  };
  var expand = function expand() {
    var main = document.querySelector(
      '.'
        .concat(randomCode.current, ' .ant-table-scroll [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    var right = document.querySelector(
      '.'
        .concat(randomCode.current, ' .ant-table-fixed-right [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    var left = document.querySelector(
      '.'
        .concat(randomCode.current, ' .ant-table-fixed-left [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    console.log(1);
    if (right) {
      right.setAttribute(
        'style',
        'display: inline-block; height: '.concat(main.offsetHeight || 0, 'px; overflow: hidden;'),
      );
    }
    if (left) {
      left.setAttribute(
        'style',
        'display: inline-block; height: '.concat(main.offsetHeight || 0, 'px; overflow: hidden;'),
      );
    }
  };

  // 自定义展开收起
  var customExpandIcon = function customExpandIcon(p) {
    var expanded = p.expanded;
    if (expanded) {
      return /*#__PURE__*/ _react.default.createElement(
        'span',
        {
          style: {
            marginLeft: !props.rowSelection && '0px',
            paddingLeft: !props.rowSelection && '0px',
          },
          className: 'expand',
          onClick: function onClick(e) {
            e.stopPropagation();
            p === null || p === void 0 ? void 0 : p.onExpand(p.record, e);
            if (props === null || props === void 0 ? void 0 : props.onExpand)
              props === null || props === void 0 ? void 0 : props.onExpand(p.expanded, p.record);
          },
        },
        /*#__PURE__*/ _react.default.createElement(_icon.default, {
          type: 'minus-square',
          style: {
            fontSize: 14,
          },
        }),
      );
    }
    return /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        style: {
          marginLeft: !props.rowSelection && '0px',
          paddingLeft: !props.rowSelection && '0px',
        },
        className: 'expand',
        onClick: function onClick(e) {
          e.stopPropagation();
          p === null || p === void 0 ? void 0 : p.onExpand(p.record, e);
          if (props === null || props === void 0 ? void 0 : props.onExpand)
            props === null || props === void 0 ? void 0 : props.onExpand(p.expanded, p.record);
        },
      },
      /*#__PURE__*/ _react.default.createElement(_icon.default, {
        type: 'plus-square',
        style: {
          fontSize: 14,
        },
      }),
    );
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'collapse-table',
    },
    /*#__PURE__*/ _react.default.createElement(
      _table.default,
      _extends(
        {
          // antd.Table 部分props的默认值 expandIcon, expandIconColumnIndex, expandRowByClick
          expandIcon: function expandIcon(props) {
            return customExpandIcon(props);
          },
          expandIconColumnIndex: expandIconColumnIndex,
          expandRowByClick: true,
          expandIconAsCell: false,
          // antd.Table props
        },
        restProps,
        {
          //  antd.Table 改动过的props
          className: ''.concat(randomCode.current, ' collapse-panel ').concat(className),
          onExpandedRowsChange: function onExpandedRowsChange(arg) {
            var key = (arg && arg[arg.length - 1]) || null;
            activeKeyRef.current = key;
            props.onExpandedRowsChange && props.onExpandedRowsChange([key]);
            // 触发MutationObserver监听
            trigger(randomCode.current);
          },
        },
      ),
    ),
  );
};
var _default = CollapseTable;
exports.default = _default;
