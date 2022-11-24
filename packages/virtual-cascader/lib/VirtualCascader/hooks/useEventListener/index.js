'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _useLatest = _interopRequireDefault(require('../useLatest'));

var _domTarget = require('../utils/domTarget');

var _useEffectWithTarget = _interopRequireDefault(require('../utils/useEffectWithTarget'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function useEventListener(eventName, handler) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var handlerRef = (0, _useLatest.default)(handler);
  (0, _useEffectWithTarget.default)(
    function () {
      var targetElement = (0, _domTarget.getTargetElement)(options.target, window);

      if (
        !(targetElement === null || targetElement === void 0
          ? void 0
          : targetElement.addEventListener)
      ) {
        return;
      }

      var eventListener = function eventListener(event) {
        return handlerRef.current(event);
      };

      targetElement.addEventListener(eventName, eventListener, {
        capture: options.capture,
        once: options.once,
        passive: options.passive,
      });
      return function () {
        targetElement.removeEventListener(eventName, eventListener, {
          capture: options.capture,
        });
      };
    },
    [eventName, options.capture, options.once, options.passive],
    options.target,
  );
}

var _default = useEventListener;
exports.default = _default;
