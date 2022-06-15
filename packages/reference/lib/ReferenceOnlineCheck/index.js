"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReferenceOnlineCheck = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _antd = require("antd");

var _tntd = require("tntd");

var _ReferenceInfo = require("../ReferenceInfo");

require("./index.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Panel = _antd.Collapse.Panel;

var ReferenceOnlineCheck = function ReferenceOnlineCheck(props) {
  var _ref = props || {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Icon, {
    type: "warning",
    style: {
      marginRight: '4px',
      color: '#EF6555'
    }
  }), "\u4E0A\u7EBF\u6821\u9A8C\u5931\u8D25") : _ref$title,
      rq = _ref.rq,
      checkReferResponse = _ref.checkReferResponse,
      _ref$orgMap = _ref.orgMap,
      orgMap = _ref$orgMap === void 0 ? {} : _ref$orgMap,
      _ref$appList = _ref.appList,
      appList = _ref$appList === void 0 ? [] : _ref$appList,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? undefined : _ref$value,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange;

  var appendModal = function appendModal(reject) {
    var referenceData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var modalWrap = document.createElement('div');
    modalWrap.setAttribute('id', 'tddc-reference-online-check-modal');

    var removeModal = function removeModal() {
      var _modalWrap$parentNode;

      var tddcModal = document.querySelectorAll('#tddc-reference-online-check-modal');

      if (tddcModal) {
        tddcModal.forEach(function (ele) {
          var _ele$parentNode;

          return ele === null || ele === void 0 ? void 0 : (_ele$parentNode = ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(ele);
        });
      }

      modalWrap && (modalWrap === null || modalWrap === void 0 ? void 0 : (_modalWrap$parentNode = modalWrap.parentNode) === null || _modalWrap$parentNode === void 0 ? void 0 : _modalWrap$parentNode.removeChild(modalWrap));
      reject && reject(referenceData);

      if (document.body.getAttribute("style")) {
        document.body.removeAttribute("style");
      }
    };

    removeModal();

    _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_tntd.Modal, {
      title: title,
      visible: true,
      width: 1000,
      destroyOnClose: true,
      getContainer: modalWrap,
      onCancel: removeModal,
      footer: [/*#__PURE__*/_react.default.createElement(_antd.Button, {
        key: "back",
        onClick: removeModal
      }, "\u53D6\u6D88")]
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "reference-online-check-modal"
    }, /*#__PURE__*/_react.default.createElement(_antd.Collapse, {
      defaultActiveKey: value || [0],
      onChange: onChange
    }, referenceData === null || referenceData === void 0 ? void 0 : referenceData.map(function (d, i) {
      var headerTxt = d === null || d === void 0 ? void 0 : d.componentName;

      if (d === null || d === void 0 ? void 0 : d.componentCode) {
        headerTxt += "[".concat(d === null || d === void 0 ? void 0 : d.componentCode, "]");
      }

      return /*#__PURE__*/_react.default.createElement(Panel, {
        header: /*#__PURE__*/_react.default.createElement("div", {
          className: "refer-panel-head"
        }, /*#__PURE__*/_react.default.createElement(_antd.Tooltip, {
          title: headerTxt,
          placement: "topLeft"
        }, /*#__PURE__*/_react.default.createElement("span", null, headerTxt)), (d === null || d === void 0 ? void 0 : d.componentVersion) && /*#__PURE__*/_react.default.createElement(_antd.Tag, {
          color: "green"
        }, "V", d === null || d === void 0 ? void 0 : d.componentVersion)),
        key: i
      }, /*#__PURE__*/_react.default.createElement(_ReferenceInfo.ReferenceInfo, {
        from: "ReferenceOnlineCheck",
        unmountHandle: removeModal,
        referenceData: (d === null || d === void 0 ? void 0 : d.result) || [],
        orgMap: orgMap,
        appList: appList
      }));
    })))), modalWrap);

    document.body.appendChild(modalWrap);
  };

  if (rq && typeof rq === 'function') {
    return new Promise(function (resolve, reject) {
      return rq().then(function (res) {
        var _ref2 = res || {},
            success = _ref2.success,
            data = _ref2.data;

        if (success) {
          if (!!(data === null || data === void 0 ? void 0 : data.length)) {
            appendModal(reject, data);
          } else {
            resolve(data);
          }
        } else {
          reject('查询关联关系失败');
        }
      });
    });
  } else {
    _antd.message.error('请提供一个可靠的查询请求!!!');
  }
};

exports.ReferenceOnlineCheck = ReferenceOnlineCheck;