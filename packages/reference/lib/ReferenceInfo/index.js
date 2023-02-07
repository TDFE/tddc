'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.ReferenceInfo = void 0;
require('antd/lib/table/style');
var _table = _interopRequireDefault(require('antd/lib/table'));
require('antd/lib/row/style');
var _row = _interopRequireDefault(require('antd/lib/row'));
require('antd/lib/icon/style');
var _icon = _interopRequireDefault(require('antd/lib/icon'));
require('antd/lib/tooltip/style');
var _tooltip = _interopRequireDefault(require('antd/lib/tooltip'));
require('antd/lib/empty/style');
var _empty = _interopRequireDefault(require('antd/lib/empty'));
var _react = _interopRequireDefault(require('react'));
var _tntd = require('tntd');
var _locale = require('../locale');
var _AHref = _interopRequireDefault(require('../AHref'));
require('./index.less');
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var ReferenceInfo = function ReferenceInfo(props) {
  var from = props.from,
    _props$referenceData = props.referenceData,
    referenceData = _props$referenceData === void 0 ? [] : _props$referenceData,
    _props$orgMap = props.orgMap,
    orgMap = _props$orgMap === void 0 ? {} : _props$orgMap,
    _props$appList = props.appList,
    appList = _props$appList === void 0 ? [] : _props$appList,
    _props$description = props.description,
    description = _props$description === void 0 ? '' : _props$description,
    unmountHandle = props.unmountHandle,
    _props$imageStyle = props.imageStyle,
    imageStyle = _props$imageStyle === void 0 ? {} : _props$imageStyle;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'reference-body',
    },
    !(referenceData === null || referenceData === void 0 ? void 0 : referenceData.length) &&
      /*#__PURE__*/ _react.default.createElement(_empty.default, {
        description:
          description ||
          (0, _locale.getText)('noData', props === null || props === void 0 ? void 0 : props.lang),
        image: _empty.default.PRESENTED_IMAGE_SIMPLE,
        imageStyle: _objectSpread(
          {
            marginTop: 120,
          },
          imageStyle,
        ),
      }),
    referenceData === null || referenceData === void 0
      ? void 0
      : referenceData.map(function (d, dIndex) {
          var _renderColumns;
          var _ref = d || {},
            columns = _ref.columns,
            goName = _ref.goName;
          var renderColumns = [];
          if (columns === null || columns === void 0 ? void 0 : columns.length) {
            renderColumns =
              columns === null || columns === void 0
                ? void 0
                : columns.map(function (c, i) {
                    var newC = _objectSpread(
                      _objectSpread({}, c),
                      {},
                      {
                        width: 140,
                        ellipsis: true,
                      },
                    );
                    var fixedWidthLimit = {};
                    var fixedMaxWidth = {};
                    if (
                      i ===
                      (columns === null || columns === void 0 ? void 0 : columns.length) - 1
                    ) {
                      if ((columns === null || columns === void 0 ? void 0 : columns.length) > 4) {
                        newC.fixed = 'right';
                        fixedWidthLimit = {
                          widthLimit: 108,
                        };
                        fixedMaxWidth = {
                          'max-width': '108px',
                        };
                      }
                    }
                    if (i === 0) {
                      newC.width = 180;
                    }
                    if (from === 'ReferenceOnlineCheck' && c.dataIndex === 'status') {
                      newC.className = 'refer-warning-txt';
                    }
                    newC.render = function (t, record) {
                      var content = t;
                      if (c.dataIndex === 'org') {
                        var _orgMap$t;
                        content =
                          ((_orgMap$t = orgMap[t]) === null || _orgMap$t === void 0
                            ? void 0
                            : _orgMap$t.name) || t;
                      }
                      if (c.dataIndex === 'app') {
                        var _appList$find;
                        content =
                          ((_appList$find = appList.find(function (a) {
                            return a.key === t;
                          })) === null || _appList$find === void 0
                            ? void 0
                            : _appList$find.name) || t;
                      }
                      // 强弱引用
                      var tagInfo = null;
                      if (
                        i === 0 &&
                        (record === null || record === void 0 ? void 0 : record.referenceCheckType)
                      ) {
                        var checkObj;

                        // 能进行下一步操作
                        var isStrong = ['STRONG'].includes(
                          record === null || record === void 0 ? void 0 : record.referenceCheckType,
                        );
                        if (isStrong) {
                          checkObj = {
                            name:
                              (record === null || record === void 0
                                ? void 0
                                : record.referenceCheckTypeName) ||
                              (0, _locale.getText)(
                                'strong',
                                props === null || props === void 0 ? void 0 : props.lang,
                              ),
                            className: 'refer-tag-strong',
                          };
                        } else {
                          checkObj = {
                            name:
                              (record === null || record === void 0
                                ? void 0
                                : record.referenceCheckTypeName) ||
                              (0, _locale.getText)(
                                'weak',
                                props === null || props === void 0 ? void 0 : props.lang,
                              ),
                            className: 'refer-tag-weak',
                          };
                        }
                        tagInfo = checkObj
                          ? /*#__PURE__*/ _react.default.createElement(
                              'span',
                              {
                                className: 'refer-tag '.concat(checkObj.className),
                              },
                              checkObj.name,
                            )
                          : null;
                      }
                      if (
                        c.dataIndex === goName &&
                        (record === null || record === void 0 ? void 0 : record.goLink)
                      ) {
                        return /*#__PURE__*/ _react.default.createElement(
                          _AHref.default,
                          {
                            href: record === null || record === void 0 ? void 0 : record.goLink,
                            target: '_blank',
                            unmountHandle: unmountHandle,
                          },
                          /*#__PURE__*/ _react.default.createElement(
                            _tooltip.default,
                            {
                              placement: 'topLeft',
                              title: content || '- -',
                            },
                            /*#__PURE__*/ _react.default.createElement(
                              'span',
                              {
                                className: 'content-span',
                                style: fixedMaxWidth,
                              },
                              tagInfo,
                              content || '- -',
                            ),
                          ),
                        );
                      }
                      if (c.dataIndex === goName) {
                        return /*#__PURE__*/ _react.default.createElement(
                          _tntd.Ellipsis,
                          _extends(
                            {
                              placement: 'topLeft',
                              copyable: true,
                            },
                            fixedWidthLimit,
                            {
                              title: content || '- -',
                              prefix: tagInfo,
                            },
                          ),
                        );
                      }
                      return /*#__PURE__*/ _react.default.createElement(
                        _tooltip.default,
                        {
                          placement: 'topLeft',
                          title: content || '- -',
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          'span',
                          {
                            className: 'content-span',
                            style: fixedMaxWidth,
                          },
                          tagInfo,
                          content || '- -',
                        ),
                      );
                    };
                    return newC;
                  });
          }
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'reference-body-item',
              key: dIndex,
            },
            /*#__PURE__*/ _react.default.createElement(
              _row.default,
              {
                className: 'reference-body-title',
                type: 'flex',
                align: 'middle',
              },
              /*#__PURE__*/ _react.default.createElement(
                'span',
                {
                  className: 'body-title-content',
                },
                /*#__PURE__*/ _react.default.createElement(
                  _tooltip.default,
                  {
                    title: d === null || d === void 0 ? void 0 : d.title,
                    placement: 'topLeft',
                  },
                  d === null || d === void 0 ? void 0 : d.title,
                ),
              ),
              (d === null || d === void 0 ? void 0 : d.tips) &&
                /*#__PURE__*/ _react.default.createElement(
                  _tooltip.default,
                  {
                    title: d === null || d === void 0 ? void 0 : d.tips,
                    placement: 'topLeft',
                  },
                  /*#__PURE__*/ _react.default.createElement(_icon.default, {
                    type: 'info-circle',
                    className: 'ml-6',
                  }),
                ),
            ),
            ((_renderColumns = renderColumns) === null || _renderColumns === void 0
              ? void 0
              : _renderColumns.length) &&
              /*#__PURE__*/ _react.default.createElement(_table.default, {
                className: 'reference-table',
                bordered: false,
                dataSource: d === null || d === void 0 ? void 0 : d.rows,
                columns: renderColumns,
                pagination: false,
                scroll: {
                  x: (renderColumns.length - 1) * 140 + 40,
                },
                rowKey: function rowKey(e, i) {
                  return ''.concat(dIndex, '_').concat(i);
                },
              }),
          );
        }),
  );
};
exports.ReferenceInfo = ReferenceInfo;
