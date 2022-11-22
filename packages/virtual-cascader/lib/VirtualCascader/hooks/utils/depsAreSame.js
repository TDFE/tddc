'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = depsAreSame;
function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;
  for (var i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}
