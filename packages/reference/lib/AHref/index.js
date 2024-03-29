'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _react = _interopRequireDefault(require('react'));
var _excluded = ['children', 'href', 'unmountHandle'];
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
var _default = function _default(props) {
  var children = props.children,
    href = props.href,
    unmountHandle = props.unmountHandle,
    rest = _objectWithoutProperties(props, _excluded);
  if (window.__isMultiTab__) {
    return /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        onClick: function onClick(evt) {
          evt.preventDefault();
          if (unmountHandle && typeof unmountHandle === 'function') {
            unmountHandle();
          }
          var pathName = href;
          if (href && href.includes('?')) {
            pathName = href === null || href === void 0 ? void 0 : href.split('?')[0];
          }
          if (pathName === window.location.pathname) {
            window.location.href = href;
          } else {
            window.push(href);
          }
        },
      },
      children,
    );
  }
  return /*#__PURE__*/ _react.default.createElement(
    'a',
    _extends(
      {
        href: href,
      },
      rest,
    ),
    children,
  );
};
exports.default = _default;
