import _Drawer from 'tntd/es/drawer';
var _excluded = [
  'lang',
  'visible',
  'close',
  'disabled',
  'title',
  'onSubmit',
  'okText',
  'cancelText',
];
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
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++)
      (o = n[r]), -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r)
    if ({}.hasOwnProperty.call(r, n)) {
      if (-1 !== e.indexOf(n)) continue;
      t[n] = r[n];
    }
  return t;
}
import React from 'react';
import mapLocale, { getLang } from '../I18N';
import { useState } from 'react';
import AssignApp from './AssignApp';
import './index.less';
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver';
var AssignModal = function AssignModal(props) {
  var locale = props.locale;
  var lang = props.lang,
    visible = props.visible,
    close = props.close,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$title = props.title,
    title = _props$title === void 0 ? '' : _props$title,
    onSubmit = props.onSubmit,
    _props$okText = props.okText,
    okText =
      _props$okText === void 0
        ? locale === null || locale === void 0
          ? void 0
          : locale.okText
        : _props$okText,
    _props$cancelText = props.cancelText,
    cancelText =
      _props$cancelText === void 0
        ? locale === null || locale === void 0
          ? void 0
          : locale.cancelText
        : _props$cancelText,
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
      width: 900,
      onCancel: close,
      onOk: submit,
      // okText={okText}
      // cancelText={cancelText}
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
          lang: lang,
          locale: locale,
        },
        restProps,
      ),
    ),
  );
};
export default (function (props) {
  return /*#__PURE__*/ React.createElement(
    LocaleReceiver,
    {
      componentName: 'AssignModal',
    },
    function (locale, localeCode) {
      var I18N = !!Object.keys(locale).length
        ? locale
        : mapLocale[localeCode] || mapLocale[getLang()];
      return /*#__PURE__*/ React.createElement(
        AssignModal,
        _extends({}, props, {
          locale: I18N,
          lang: localeCode || getLang(),
        }),
      );
    },
  );
});
