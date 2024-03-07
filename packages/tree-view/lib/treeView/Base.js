'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _d3Hierarchy = require('d3-hierarchy');
var _lodash = require('lodash');
var _constants = require('./constants');
function _typeof(o) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : String(i);
}
function _toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}
var Base = /*#__PURE__*/ (function () {
  function Base() {
    _classCallCheck(this, Base);
    this.data = null;
    this.pre_data_key = null;
    this.flattenNodes = [];
    this.flattenLinks = [];
    this.hierarchyData = null;
    this.finalValue = null;
    this.keyDefault = 0;
  }
  _createClass(Base, [
    {
      key: 'initData',
      value: function initData() {
        if (!this.data) return;
        // 设置key
        var valueTemp = (0, _lodash.cloneDeep)(this.data);
        // this.setKey(valueTemp, {});
        this.finalValue = Object.assign(
          {
            type: 'relation',
            path: ['relation'],
          },
          valueTemp,
        );

        // 格式化树
        this.finalValue.children = this.addDropAreaAndOperation(valueTemp.children, ['children']);

        // 转化为一颗标准树
        this.hierarchyData = (0, _d3Hierarchy.hierarchy)(this.finalValue);
      },

      // 设置key
      // setKey(data, keyMap) {
      //   const createKey = (v) => {
      //     if (!(v && v.key)) {
      //       v.key = this.getUniqKey(this.keyDefault, keyMap);
      //     }
      //     keyMap[v.key] = 1;
      //     if (v && v.children && v.children.length) {
      //       this.setKey(v.children, keyMap);
      //     }
      //   };
      //   if (Array.isArray(data)) {
      //     data.forEach((v, i) => {
      //       v.index = i;
      //       createKey(v);
      //     });
      //   } else {
      //     if (data) {
      //       data.index = 0;
      //       createKey(data);
      //     }
      //   }
      // }

      // getUniqKey(key, keyMap) {
      //   if (key in keyMap) {
      //     const k = key + 1;
      //     return this.getUniqKey(k, keyMap);
      //   }
      //   return key;
      // }

      // 格式化节点树
    },
    {
      key: 'addDropAreaAndOperation',
      value: function addDropAreaAndOperation(children, parentPath, level) {
        var _this = this;
        var parentColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
        if (!children) {
          children = [];
        }
        var result = [];
        if (children.length) {
          children.forEach(function (child, index) {
            var _NODE_TYPE_MAP$child$;
            var path = [].concat(parentPath, [index]);
            var _ref = child || {},
              key = _ref.key;
            var color = '';
            color =
              (_constants.NODE_TYPE_MAP &&
                ((_NODE_TYPE_MAP$child$ = _constants.NODE_TYPE_MAP[child.nodeType]) === null ||
                _NODE_TYPE_MAP$child$ === void 0
                  ? void 0
                  : _NODE_TYPE_MAP$child$.color)) ||
              parentColor;
            var node = Object.assign({}, child, {
              type: 'leaf',
              key: key,
              index: index,
              parentPath: parentPath,
              path: path,
              color: color,
            });
            if (child.children && child.children.length) {
              node.type = 'relation';
              node.children = _this.addDropAreaAndOperation(
                child.children,
                path.concat(['children']),
                level + 1,
                color,
              );
              path.push('relation');
            }
            result.push(node);
          });
        }
        return result;
      },
    },
  ]);
  return Base;
})();
var _default = (exports.default = Base);
