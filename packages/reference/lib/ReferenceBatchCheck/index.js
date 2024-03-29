'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ReferenceBatchCheck = void 0;
require('antd/lib/message/style');
var _message2 = _interopRequireDefault(require('antd/lib/message'));
require('antd/lib/tag/style');
var _tag = _interopRequireDefault(require('antd/lib/tag'));
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/alert/style');
var _alert = _interopRequireDefault(require('antd/lib/alert'));
require('antd/lib/button/style');
var _button = _interopRequireDefault(require('antd/lib/button'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/collapse/style');
var _collapse = _interopRequireDefault(require('antd/lib/collapse'));
var _react = _interopRequireDefault(require('react'));
var _reactDom = _interopRequireDefault(require('react-dom'));
var _tntd = require('tntd');
var _locale = require('../locale');
var _ReferenceInfo = require('../ReferenceInfo');
require('./index.less');
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
var Panel = _collapse.default.Panel;
var ReferenceBatchCheck = function ReferenceBatchCheck(props) {
  var _ref = props || {},
    _ref$title = _ref.title,
    title =
      _ref$title === void 0
        ? /*#__PURE__*/ _react.default.createElement(
            _react.default.Fragment,
            null,
            /*#__PURE__*/ _react.default.createElement(_icon.default, {
              type: 'warning',
              style: {
                marginRight: '4px',
                color: '#EF6555',
              },
            }),
            (0, _locale.getText)(
              'onLineFail',
              props === null || props === void 0 ? void 0 : props.lang,
            ),
          )
        : _ref$title,
    rq = _ref.rq,
    checkReferResponse = _ref.checkReferResponse,
    _ref$orgMap = _ref.orgMap,
    orgMap = _ref$orgMap === void 0 ? {} : _ref$orgMap,
    _ref$appList = _ref.appList,
    appList = _ref$appList === void 0 ? [] : _ref$appList,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? undefined : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    cancelText = _ref.cancelText,
    okText = _ref.okText,
    _ref$weakMsg = _ref.weakMsg,
    weakMsg =
      _ref$weakMsg === void 0
        ? (0, _locale.getText)('weakMsg', props === null || props === void 0 ? void 0 : props.lang)
        : _ref$weakMsg,
    _ref$strongMsg = _ref.strongMsg,
    strongMsg =
      _ref$strongMsg === void 0
        ? (0, _locale.getText)(
            'strongMsg',
            props === null || props === void 0 ? void 0 : props.lang,
          )
        : _ref$strongMsg;
  var appendModal = function appendModal(reject, resolve) {
    var _referenceData, _referenceData4, _referenceData5, _referenceData6;
    var referenceData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var type = '';
    if (
      !Array.isArray(referenceData) &&
      ((_referenceData = referenceData) === null || _referenceData === void 0
        ? void 0
        : _referenceData.type)
    ) {
      var _referenceData2, _referenceData3;
      type =
        (_referenceData2 = referenceData) === null || _referenceData2 === void 0
          ? void 0
          : _referenceData2.type;
      referenceData =
        ((_referenceData3 = referenceData) === null || _referenceData3 === void 0
          ? void 0
          : _referenceData3.result) || [];
    }
    var modalWrap = document.createElement('div');
    modalWrap.setAttribute('id', 'tddc-reference-online-check-modal');
    var removeModal = function removeModal() {
      var _modalWrap$parentNode;
      var tddcModal = document.querySelectorAll('#tddc-reference-online-check-modal');
      if (tddcModal) {
        tddcModal.forEach(function (ele) {
          var _ele$parentNode;
          return ele === null || ele === void 0
            ? void 0
            : (_ele$parentNode = ele.parentNode) === null || _ele$parentNode === void 0
            ? void 0
            : _ele$parentNode.removeChild(ele);
        });
      }
      modalWrap &&
        (modalWrap === null || modalWrap === void 0
          ? void 0
          : (_modalWrap$parentNode = modalWrap.parentNode) === null ||
            _modalWrap$parentNode === void 0
          ? void 0
          : _modalWrap$parentNode.removeChild(modalWrap));
      !type && reject && reject(referenceData);
      if (document.body.getAttribute('style')) {
        document.body.removeAttribute('style');
      }
    };
    removeModal();

    // 能进行下一步操作
    var canNextOpera = !['STRONG'].includes(type);
    _reactDom.default.render(
      /*#__PURE__*/ _react.default.createElement(
        _tntd.Modal,
        {
          title: title,
          visible: true,
          width: 1000,
          destroyOnClose: true,
          getContainer: modalWrap,
          onCancel: removeModal,
          footer: [
            /*#__PURE__*/ _react.default.createElement(
              _button.default,
              {
                key: 'back',
                onClick: removeModal,
              },
              cancelText ||
                (0, _locale.getText)(
                  'cancel',
                  props === null || props === void 0 ? void 0 : props.lang,
                ),
            ),
            canNextOpera &&
              /*#__PURE__*/ _react.default.createElement(
                _button.default,
                {
                  key: 'submit',
                  type: 'primary',
                  onClick: function onClick() {
                    removeModal();
                    resolve(type);
                  },
                },
                okText ||
                  (0, _locale.getText)(
                    'next',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
              ),
          ],
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'reference-online-check-modal',
          },
          type &&
            canNextOpera &&
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'mb10',
              },
              /*#__PURE__*/ _react.default.createElement(_alert.default, {
                type: 'warning',
                message:
                  weakMsg ||
                  ((_referenceData4 = referenceData) === null || _referenceData4 === void 0
                    ? void 0
                    : _referenceData4.message) ||
                  (0, _locale.getText)(
                    'weakMsg',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
                // '存在弱引用（被下线、禁用、待提交/上线、导入待提交/上线、暂存、保存等相关状态组件引用）关系，谨慎操作'
              }),
            ),
          !canNextOpera &&
            /*#__PURE__*/ _react.default.createElement(
              'div',
              {
                className: 'mb10',
              },
              /*#__PURE__*/ _react.default.createElement(_alert.default, {
                type: 'error',
                message:
                  strongMsg ||
                  ((_referenceData5 = referenceData) === null || _referenceData5 === void 0
                    ? void 0
                    : _referenceData5.message) ||
                  (0, _locale.getText)(
                    'strongMsg',
                    props === null || props === void 0 ? void 0 : props.lang,
                  ),
                // '存在强引用（被上线、启用、上下线审批中和指标初始化等相关状态组件引用）关系，禁止操作'
              }),
            ),
          /*#__PURE__*/ _react.default.createElement(
            _collapse.default,
            {
              defaultActiveKey: value || [0],
              onChange: onChange,
            },
            (_referenceData6 = referenceData) === null || _referenceData6 === void 0
              ? void 0
              : _referenceData6.map(function (d, i) {
                  var headerTxt = d === null || d === void 0 ? void 0 : d.componentName;
                  if (d === null || d === void 0 ? void 0 : d.componentCode) {
                    headerTxt += '['.concat(
                      d === null || d === void 0 ? void 0 : d.componentCode,
                      ']',
                    );
                  }
                  return /*#__PURE__*/ _react.default.createElement(
                    Panel,
                    {
                      header: /*#__PURE__*/ _react.default.createElement(
                        'div',
                        {
                          className: 'refer-panel-head',
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          _tooltip.default,
                          {
                            title: headerTxt,
                            placement: 'topLeft',
                          },
                          /*#__PURE__*/ _react.default.createElement('span', null, headerTxt),
                        ),
                        (d === null || d === void 0 ? void 0 : d.componentVersion) &&
                          /*#__PURE__*/ _react.default.createElement(
                            _tag.default,
                            {
                              color: 'green',
                            },
                            'V',
                            d === null || d === void 0 ? void 0 : d.componentVersion,
                          ),
                        (d === null || d === void 0 ? void 0 : d.type) === 'STRONG' &&
                          /*#__PURE__*/ _react.default.createElement(
                            _tag.default,
                            {
                              color: '#D96156',
                            },
                            (0, _locale.getText)(
                              'exist',
                              props === null || props === void 0 ? void 0 : props.lang,
                            ),
                            (d === null || d === void 0 ? void 0 : d.typeName) ||
                              (0, _locale.getText)(
                                'strong',
                                props === null || props === void 0 ? void 0 : props.lang,
                              ),
                          ),
                      ),
                      key: i,
                    },
                    /*#__PURE__*/ _react.default.createElement(_ReferenceInfo.ReferenceInfo, {
                      from: 'ReferenceBatchCheck',
                      unmountHandle: removeModal,
                      referenceData: (d === null || d === void 0 ? void 0 : d.result) || [],
                      orgMap: orgMap,
                      appList: appList,
                    }),
                  );
                }),
          ),
        ),
      ),
      modalWrap,
    );
    document.body.appendChild(modalWrap);
  };
  if (rq && typeof rq === 'function') {
    return new Promise(function (resolve, reject) {
      return rq().then(function (res) {
        var _ref2 = res || {},
          success = _ref2.success,
          data = _ref2.data;
        if (success) {
          if (Array.isArray(data) && !!(data === null || data === void 0 ? void 0 : data.length)) {
            appendModal(reject, resolve, data);
          } else if (
            !Array.isArray(data) &&
            (data === null || data === void 0 ? void 0 : data.type) !== 'NO_EXIST'
          ) {
            appendModal(reject, resolve, data);
          } else {
            resolve(data);
          }
        } else {
          reject(
            (0, _locale.getText)(
              'relationFail',
              props === null || props === void 0 ? void 0 : props.lang,
            ),
          );
        }
      });
    });
  } else {
    _message2.default.error(
      (0, _locale.getText)(
        'reliableQuery',
        props === null || props === void 0 ? void 0 : props.lang,
      ),
    ); // '请提供一个可靠的查询请求!!!'
  }
};
exports.ReferenceBatchCheck = ReferenceBatchCheck;
