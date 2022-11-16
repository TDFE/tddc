'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.isUndef =
  exports.isString =
  exports.isObject =
  exports.isNumber =
  exports.isFunction =
  exports.isBoolean =
    void 0;

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

var isObject = function isObject(value) {
  return value !== null && _typeof(value) === 'object';
};

exports.isObject = isObject;

var isFunction = function isFunction(value) {
  return typeof value === 'function';
};

exports.isFunction = isFunction;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isBoolean = function isBoolean(value) {
  return typeof value === 'boolean';
};

exports.isBoolean = isBoolean;

var isNumber = function isNumber(value) {
  return typeof value === 'number';
};

exports.isNumber = isNumber;

var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};

exports.isUndef = isUndef;
