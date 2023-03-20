'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.tuple = void 0;
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
exports.tuple = tuple;
var ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');
var SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');
var InputStatuses = tuple('warning', 'error', '');
