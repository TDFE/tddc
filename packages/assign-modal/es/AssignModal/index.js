import _Drawer from 'tntd/es/drawer';
var _excluded = ['visible', 'close', 'disabled', 'title', 'onSubmit'];
function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
function _slicedToArray(r, e) {
  return (
    _arrayWithHoles(r) ||
    _iterableToArrayLimit(r, e) ||
    _unsupportedIterableToArray(r, e) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ('string' == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return (
      'Object' === t && r.constructor && (t = r.constructor.name),
      'Map' === t || 'Set' === t
        ? Array.from(r)
        : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
        ? _arrayLikeToArray(r, a)
        : void 0
    );
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t =
    null == r ? null : ('undefined' != typeof Symbol && r[Symbol.iterator]) || r['@@iterator'];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (((i = (t = t.call(r)).next), 0 === l)) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      (o = !0), (n = r);
    } finally {
      try {
        if (!f && null != t.return && ((u = t.return()), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (o = s[r]), t.includes(o) || ({}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]));
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (e.includes(n)) continue;
      t[n] = r[n];
    }
  return t;
}
import React from 'react';
import { useState } from 'react';
import AssignApp from './AssignApp';
import './index.less';
import Cookies from 'universal-cookie';
var cookies = new Cookies();
var AssignModal = function AssignModal(props) {
  var visible = props.visible,
    close = props.close,
    disabled = props.disabled,
    _props$title = props.title,
    title = _props$title === void 0 ? '' : _props$title,
    onSubmit = props.onSubmit,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    assignData = _useState2[0],
    setAssignData = _useState2[1];
  var submit = function submit() {
    onSubmit(assignData);
  };
  return /*#__PURE__*/ React.createElement(
    _Drawer,
    {
      className: 'modal-assign',
      title: title,
      visible: visible,
      width: 700,
      onCancel: close,
      onOk: submit,
      maskClosable: disabled,
      destroyOnClose: true,
      showFooter: !disabled,
      okButtonProps: {
        disabled: disabled,
      },
    },
    /*#__PURE__*/ React.createElement(
      AssignApp,
      _extends(
        {
          onChange: function onChange(data) {
            setAssignData(data);
          },
          disabled: disabled,
          lang:
            (props === null || props === void 0 ? void 0 : props.lang) ||
            cookies.get('lang') ||
            'cn',
        },
        restProps,
      ),
    ),
  );
};
export default AssignModal;
