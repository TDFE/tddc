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
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        ) {}
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
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
    : props.expandIconColumnIndex || 0;
  var _useState = (0, _react.useState)((0, _utils.makeRandomCode)()),
    _useState2 = _slicedToArray(_useState, 2),
    randomCode = _useState2[0],
    setRandomCode = _useState2[1];
  var activeKeyRef = (0, _react.useRef)(null);
  var container = (0, _react.useRef)(null);
  var observer = (0, _react.useRef)(null);
  var ob = function ob(className) {
    container.current = document.querySelector(
      '.'.concat(
        className,
        '.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table',
      ),
    );
    observer.current = new MutationObserver(expand);
    observer.current.observe(container.current, {
      childList: true,
      // 子节点的变动
      attributes: true,
    });
  };
  (0, _react.useEffect)(
    function () {
      ob(randomCode);
    },
    [randomCode],
  );
  var expand = function expand() {
    var main = document.querySelector(
      '.'
        .concat(randomCode, ' .ant-table-scroll [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    var right = document.querySelector(
      '.'
        .concat(randomCode, ' .ant-table-fixed-right [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    var left = document.querySelector(
      '.'
        .concat(randomCode, ' .ant-table-fixed-left [data-row-key="')
        .concat(activeKeyRef.current, '-extra-row"]'),
    );
    if (right) {
      right.setAttribute(
        'style',
        'display: block; height: '.concat(main.offsetHeight || 0, 'px; overflow: hidden;'),
      );
    }
    if (left) {
      left.setAttribute(
        'style',
        'display: block; height: '.concat(main.offsetHeight || 0, 'px; overflow: hidden;'),
      );
    }
  };

  // 自定义展开收起
  var customExpandIcon = function customExpandIcon(p) {
    var expanded = p.expanded;
    if (expanded) {
      return /*#__PURE__*/ _react.default.createElement(
        'a',
        {
          style: {
            marginLeft: !props.rowSelection && '0px',
            paddingLeft: !props.rowSelection && '0px',
          },
          className: 'expand',
          onClick: function onClick(e) {
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
      'a',
      {
        style: {
          marginLeft: !props.rowSelection && '0px',
          paddingLeft: !props.rowSelection && '0px',
        },
        className: 'expand',
        onClick: function onClick(e) {
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
  var trigger = function trigger() {
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
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'collapse-table',
    },
    /*#__PURE__*/ _react.default.createElement(
      _table.default,
      _extends({}, restProps, {
        className: ''.concat(randomCode, ' collapse-panel ').concat(className),
        expandIconColumnIndex: expandIconColumnIndex,
        onExpandedRowsChange: function onExpandedRowsChange(arg) {
          var key = (arg && arg[arg.length - 1]) || null;
          activeKeyRef.current = key;
          props.onExpandedRowsChange && props.onExpandedRowsChange([key]);
          // 触发MutationObserver监听
          trigger();
        },
        expandIconAsCell: false,
        expandable: true,
        expandRowByClick: true,
        expandIcon: function expandIcon(props) {
          return customExpandIcon(props);
        },
      }),
    ),
  );
};
var _default = CollapseTable;
exports.default = _default;
