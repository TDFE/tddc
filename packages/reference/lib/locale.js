'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.zh_CN = exports.getText = exports.getLanguage = exports.en_US = exports.default = void 0;

var _universalCookie = _interopRequireDefault(require('universal-cookie'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var cookies = new _universalCookie.default();
var zh_CN = {
  onLineFail: '上线校验失败',
  weakMsg:
    '存在弱引用（被下线、禁用、待提交/上线、导入待提交/上线、暂存、保存等相关状态组件引用）关系，谨慎操作',
  strongMsg: '存在强引用（被上线、启用、上下线审批中和指标初始化等相关状态组件引用）关系，禁止操作',
  cancel: '取消',
  next: '下一步',
  exist: '存在',
  strong: '强引用',
  weak: '弱引用',
  relationFail: '查询关联关系失败',
  reliableQuery: '请提供一个可靠的查询请求',
  referenceFail: '查询引用关系失败',
  inQuery: '查询中...',
  noData: '暂无数据',
  viewReference: '引用关系查看',
};
exports.zh_CN = zh_CN;
var en_US = {
  onLineFail: 'On-line verification failure',
  weakMsg:
    'Caution When performing this operation, weak references exist for status components, such as offline, disabled, to be submitted/online, Import to be submitted/online, temporary, and save',
  strongMsg:
    'A strong reference relationship exists (referenced by status components such as online, enabled, online and offline approval, and indicator initialization). Therefore, no operation is allowed',
  cancel: 'Cancel',
  next: 'Next',
  exist: 'Exist',
  strong: 'Strong',
  weak: 'Weak',
  relationFail: 'Description Failed to query the association relationship',
  reliableQuery: 'Please provide a reliable query request',
  referenceFail: 'Description Failed to query the reference relationship',
  inQuery: 'In query...',
  noData: 'No data',
  viewReference: 'Reference relationship viewing',
};
exports.en_US = en_US;

var getText = function getText(key, language) {
  var _ref;

  var text =
    (_ref =
      {
        cn: zh_CN,
        en: en_US,
      }[language || getLanguage()] || zh_CN) === null || _ref === void 0
      ? void 0
      : _ref[key];

  for (
    var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
    _key < _len;
    _key++
  ) {
    params[_key - 2] = arguments[_key];
  }

  if (params === null || params === void 0 ? void 0 : params.length) {
    return params.reduce(function (acc, cur) {
      return acc.replace(/%s/, cur);
    }, text);
  }

  return text;
};

exports.getText = getText;

var getLanguage = function getLanguage() {
  return (
    cookies.get('lang', {
      path: '/',
    }) || 'cn'
  );
};

exports.getLanguage = getLanguage;
var _default = {
  en_US: en_US,
  zh_CN: zh_CN,
};
exports.default = _default;
