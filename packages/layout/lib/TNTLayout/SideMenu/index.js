'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
require('antd/lib/menu/style');
var _menu = _interopRequireDefault(require('antd/lib/menu'));
var _react = _interopRequireWildcard(require('react'));
require('./index.less');
var _Context = require('../Context');
var _utils = require('../utils');
var _eventEmitter = _interopRequireDefault(require('../eventEmitter'));
var _Icon = _interopRequireDefault(require('../Icon'));
var _Flicon = _interopRequireDefault(require('../Flicon'));
function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
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
function _iterableToArrayLimit(arr, i) {
  var _i =
    null == arr
      ? null
      : ('undefined' != typeof Symbol && arr[Symbol.iterator]) || arr['@@iterator'];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else
        for (
          ;
          !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i);
          _n = !0
        );
    } catch (err) {
      (_d = !0), (_e = err);
    } finally {
      try {
        if (!_n && null != _i.return && ((_r = _i.return()), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
var SubMenu = _menu.default.SubMenu,
  MenuItem = _menu.default.Item;
var hasChild = function hasChild(menu) {
  var hasChild = menu.children && menu.children.length > 0;
  return hasChild;
};
var SideMenu = function SideMenu(props) {
  var size = props.size,
    _props$openKeys = props.openKeys,
    openKeys = _props$openKeys === void 0 ? [] : _props$openKeys,
    isHasLevel3 = props.isHasLevel3,
    mainMenu = props.mainMenu,
    siderMenu = props.siderMenu,
    handleMainMenu = props.handleMainMenu,
    selectedKeys = props.selectedKeys,
    formatMenuPath = props.formatMenuPath,
    changeRouter = props.changeRouter,
    onMenuSelect = props.onMenuSelect,
    onOpenChange = props.onOpenChange,
    collapsed = props.collapsed;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    language = _useContext.language;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    mainCodes = _useState2[0],
    setMainCodes = _useState2[1];
  var headerHeight = size === 'large' ? 60 : 50;
  var onSelectMenu = function onSelectMenu(params) {
    var curItem;
    if (params.item) {
      curItem = params.item.props.curitem;
    } else {
      curItem = params;
    }
    var defaultSelect = function defaultSelect(_ref) {
      var _window$location$path;
      var data = _ref.data;
      var _ref2 = data || {},
        path = _ref2.path;
      var formatPath =
        formatMenuPath ||
        function (path) {
          return path;
        };
      if ((0, _utils.isNewTabMenu)(data)) {
        (0, _utils.openInNewTab)(
          formatPath(data === null || data === void 0 ? void 0 : data.path, data),
        );
        return;
      }
      var routerPrefix =
        (_window$location$path = window.location.pathname.match(/(^\/[^\/]+)/i)) === null ||
        _window$location$path === void 0
          ? void 0
          : _window$location$path[1];
      if (path === null || path === void 0 ? void 0 : path.startsWith(routerPrefix)) {
        var forwardPath = formatPath(path, data);
        changeRouter
          ? changeRouter(forwardPath, data)
          : window.history.pushState(
              data,
              data === null || data === void 0 ? void 0 : data.name,
              forwardPath,
            );
      } else {
        window.location.href = formatPath(path, data);
      }
    };
    var finalSelect = onMenuSelect || defaultSelect;
    finalSelect(curItem);
  };
  (0, _react.useEffect)(
    function () {
      if (selectedKeys.length) {
        setMainCodes(selectedKeys);
      }
    },
    [selectedKeys],
  );
  (0, _react.useEffect)(function () {
    _eventEmitter.default.off('menuSelectPopup', onSelectMenu);
    _eventEmitter.default.on('menuSelectPopup', onSelectMenu);
  }, []);
  var getExpandIcon = function getExpandIcon(code) {
    return openKeys.includes(code) ? 'up' : 'down';
  };
  var onMenuClick = function onMenuClick(key, menuItem) {
    var _menuItem$parent;
    var curKey = [key];
    var newOpenKeys = curKey;
    var parentCode =
      ((_menuItem$parent = menuItem.parent) === null || _menuItem$parent === void 0
        ? void 0
        : _menuItem$parent.code) || '';

    // 展开openKey
    if (openKeys.includes(parentCode)) {
      // 父子关系展开
      newOpenKeys = openKeys.includes(key) ? [parentCode] : [parentCode, key];
    } else {
      // 收起closeKey
      newOpenKeys = openKeys.includes(key) ? [] : curKey;
    }
    onOpenChange && onOpenChange(newOpenKeys);
  };
  var MenuLink = function MenuLink(_ref3) {
    var menuName = _ref3.menuName,
      enName = _ref3.enName,
      path = _ref3.path;
    return /*#__PURE__*/ _react.default.createElement(
      'a',
      {
        href: path,
        onClick: function onClick(evt) {
          return evt.preventDefault();
        },
      },
      {
        cn: menuName,
        en: enName,
      }[language],
    );
  };
  var getSubMenuProps = function getSubMenuProps(_ref4) {
    var code = _ref4.code,
      groupIcon = _ref4.groupIcon,
      groupName = _ref4.groupName,
      enName = _ref4.enName;
    return {
      key: code,
      title: !isHasLevel3
        ? /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              className: 'menu-title',
            },
            /*#__PURE__*/ _react.default.createElement(_Icon.default, {
              type: groupIcon,
            }),
            collapsed
              ? ''
              : {
                  cn: groupName,
                  en: enName,
                }[language],
          )
        : /*#__PURE__*/ _react.default.createElement(
            'span',
            {
              className: 'menu-title',
            },
            collapsed
              ? /*#__PURE__*/ _react.default.createElement(_Icon.default, {
                  type: groupIcon,
                })
              : null,
            collapsed
              ? ''
              : {
                  cn: groupName,
                  en: enName,
                }[language],
          ),
      expandIcon: collapsed
        ? null
        : /*#__PURE__*/ _react.default.createElement(_Icon.default, {
            type: getExpandIcon(code),
          }),
    };
  };
  var renderMenu = function renderMenu(menu) {
    return hasChild(menu)
      ? /*#__PURE__*/ _react.default.createElement(
          SubMenu,
          _extends(
            {
              onTitleClick: function onTitleClick(_ref5) {
                var key = _ref5.key;
                onMenuClick(key, menu);
              },
            },
            getSubMenuProps(menu),
          ),
          menu.children.map(function (item) {
            return renderMenu(item);
          }),
        )
      : /*#__PURE__*/ _react.default.createElement(
          MenuItem,
          {
            onClick: onSelectMenu,
            curitem: menu,
            key: menu === null || menu === void 0 ? void 0 : menu.code,
          },
          /*#__PURE__*/ _react.default.createElement(MenuLink, menu),
        );
  };
  var renderGroupName = function renderGroupName(groupName) {
    var len = (0, _utils.getStrLength)(groupName);
    var listStr = [];
    if (len > 6 && len < 12) {
      var startStr = groupName.slice(0, 2);
      var endStr = groupName.slice(2);
      listStr.push(startStr);
      listStr.push(endStr);
    } else if (len >= 12) {
      var _startStr = groupName.slice(0, 3);
      var _endStr = groupName.slice(3, 6);
      listStr.push(_startStr);
      listStr.push(_endStr);
    } else {
      listStr.push(groupName);
    }
    return listStr.map(function (val, i) {
      return /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          key: i,
          className: 'menu-text',
        },
        val,
      );
    });
  };
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'tnt-layout-side-menu',
      style: {
        height: 'calc(100vh - '.concat(headerHeight, 'px)'),
      },
    },
    isHasLevel3 &&
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'menu-Level1',
        },
        mainMenu.map(function (item) {
          return /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              key: item.code,
              onClick: function onClick() {
                setMainCodes([item.code]);
                handleMainMenu(item);
              },
              className: mainCodes.includes(item.code)
                ? 'menu-Level1-item active'
                : 'menu-Level1-item',
            },
            /*#__PURE__*/ _react.default.createElement(_Flicon.default, {
              type: item.groupIcon,
            }),
            renderGroupName(item.groupName),
          );
        }),
      ),
    /*#__PURE__*/ _react.default.createElement(
      _menu.default,
      {
        mode: 'inline',
        openKeys: openKeys,
        selectedKeys: selectedKeys,
      },
      siderMenu.map(function (menu) {
        return renderMenu(menu);
      }),
    ),
  );
};
var _default = SideMenu;
exports.default = _default;
