import _Modal from 'tntd/es/modal';
var _excluded = [
  'visible',
  'orgList',
  'dataItem',
  'close',
  'disabled',
  'title',
  'onSubmit',
  'appList',
  'userList',
  'showUser',
];
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
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
import React from 'react';
import { useState } from 'react';
import AssignApp from './AssignApp';
import './index.less';
import Cookies from 'universal-cookie';
var cookies = new Cookies();
var AssignModal = function AssignModal(props) {
  var visible = props.visible,
    orgList = props.orgList,
    _props$dataItem = props.dataItem,
    dataItem = _props$dataItem === void 0 ? {} : _props$dataItem,
    close = props.close,
    disabled = props.disabled,
    _props$title = props.title,
    title = _props$title === void 0 ? '' : _props$title,
    onSubmit = props.onSubmit,
    appList = props.appList,
    userList = props.userList,
    showUser = props.showUser,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    assignData = _useState2[0],
    setAssignData = _useState2[1];
  var submit = function submit() {
    console.log({
      assignData: assignData,
    });
    onSubmit(assignData);
  };
  return /*#__PURE__*/ React.createElement(
    _Modal,
    {
      className: 'modelTool-assign',
      title: title,
      visible: visible,
      width: showUser ? '80%' : '65%',
      onCancel: close,
      onOk: submit,
      maskClosable: false,
      destroyOnClose: true,
      okButtonProps: {
        disabled: disabled,
      },
    },
    /*#__PURE__*/ React.createElement(
      AssignApp,
      _extends(
        {
          dataItem: dataItem,
          orgList: orgList,
          appList: appList,
          userList: userList,
          onChange: function onChange(data) {
            setAssignData(data);
          },
          disabled: disabled,
          lang:
            (props === null || props === void 0 ? void 0 : props.lang) ||
            cookies.get('lang') ||
            'cn',
          showUser: showUser,
        },
        restProps,
      ),
    ),
  );
};
export default AssignModal;
export { AssignApp };
