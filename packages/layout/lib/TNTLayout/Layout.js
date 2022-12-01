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
require('antd/lib/layout/style');
var _layout = _interopRequireDefault(require('antd/lib/layout'));
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _lodash = require('lodash');
var _Context = require('./Context');
var _Icon = _interopRequireDefault(require('./Icon'));
var _Header = _interopRequireDefault(require('./Header'));
var _Logo = _interopRequireDefault(require('./Logo'));
var _SideMenu = _interopRequireDefault(require('./SideMenu'));
var _storage = require('./storage');
var _utils = require('./utils');
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
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
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
        ) {}
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
var Content = _layout.default.Content,
  Sider = _layout.default.Sider,
  AntdHeader = _layout.default.Header;
var _default = function _default(props) {
  var className = props.className,
    _props$menus = props.menus,
    menus = _props$menus === void 0 ? [] : _props$menus,
    _props$collapseIconPl = props.collapseIconPlacement,
    collapseIconPlacement = _props$collapseIconPl === void 0 ? 'bottom' : _props$collapseIconPl,
    pathname = props.location.pathname,
    size = props.size,
    _props$siderWidth = props.siderWidth,
    siderWidth = _props$siderWidth === void 0 ? 240 : _props$siderWidth,
    isEmptyLayout = props.isEmptyLayout,
    headerTabs = props.headerTabs,
    onLanguageChange = props.onLanguageChange,
    onMenuLevelChange = props.onMenuLevelChange;
  var _useContext = (0, _react.useContext)(_Context.ThemeContext),
    theme = _useContext.theme,
    language = _useContext.language,
    menuLevel = _useContext.menuLevel;
  var _getSideMenuStore = (0, _storage.getSideMenuStore)(),
    storeCollapsed = _getSideMenuStore.collapsed,
    _getSideMenuStore$ope = _getSideMenuStore.openKeys,
    openKeys = _getSideMenuStore$ope === void 0 ? [] : _getSideMenuStore$ope;
  var _useState = (0, _react.useState)(
      (0, _lodash.isUndefined)(storeCollapsed) ? false : storeCollapsed,
    ),
    _useState2 = _slicedToArray(_useState, 2),
    collapsed = _useState2[0],
    setCollapsed = _useState2[1];
  var _useState3 = (0, _react.useState)(openKeys),
    _useState4 = _slicedToArray(_useState3, 2),
    openMenuKeys = _useState4[0],
    setOpenMenuKeys = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    mainMenu = _useState6[0],
    setMainMenu = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    siderMenu = _useState8[0],
    setSiderMenu = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    selectedKeys = _useState10[0],
    setSelectedKeys = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isHasLevel3 = _useState12[0],
    setIsHasLevel3 = _useState12[1];
  var basicMenus = function basicMenus(menus, isLevel3) {
    var cloneMenus = (0, _lodash.cloneDeep)(menus);
    var mainMenu = cloneMenus;
    if (isLevel3) {
      mainMenu = [
        {
          code: 'other',
          enName: '其它',
          groupIcon: 'system',
          groupName: '其它',
          id: Number(new Date()),
          children: [],
        },
      ];
      cloneMenus.forEach(function (element) {
        var isLevel2 = (0, _utils.hasLevel2)(element);
        if (isLevel2) {
          mainMenu.push(element);
        } else {
          mainMenu[0].children.push(element);
        }
      });
      if (mainMenu[0].children.length) {
        mainMenu.reverse();
      } else {
        mainMenu.splice(0, 1);
      }
    }
    (0, _utils.formatter)(mainMenu);
    return mainMenu;
  };
  (0, _react.useEffect)(
    function () {
      if (menus.length && pathname) {
        var isLevel3 = (0, _utils.hasLevel3)(menus);
        var _mainMenu = basicMenus(menus, isLevel3);
        var activeMenu = (0, _utils.getActiveMenu)(_mainMenu, pathname);
        var parents = [];
        if (activeMenu) {
          parents = (0, _utils.getParents)(activeMenu);
        } else {
          parents = [_mainMenu[0].code];
        }
        setIsHasLevel3(isLevel3);
        setMainMenu(_mainMenu);
      }
    },
    [menus],
  );
  (0, _react.useEffect)(
    function () {
      if (mainMenu.length && pathname) {
        var activeMenu = (0, _utils.getActiveMenu)(mainMenu, pathname);
        var parents = [];
        if (activeMenu) {
          parents = (0, _utils.getParents)(activeMenu);
        } else {
          parents = [mainMenu[0].code];
        }
        var _siderMenu = [];
        if (isHasLevel3) {
          var selectedMainMenu =
            mainMenu.find(function (m) {
              return m.code === parents[0];
            }) || {};
          _siderMenu = selectedMainMenu ? selectedMainMenu.children : [];
          onMenuLevelChange && onMenuLevelChange(menuLevel);
        } else {
          _siderMenu = mainMenu;
        }
        setSiderMenu(_siderMenu);
        setOpenMenuKeys(parents);
        setSelectedKeys(parents);
      }
    },
    [mainMenu, pathname],
  );
  var collapseChangeHandle = function collapseChangeHandle() {
    var _getSideMenuStore2 = (0, _storage.getSideMenuStore)(),
      _getSideMenuStore2$be = _getSideMenuStore2.beforeOpenKeys,
      beforeOpenKeys = _getSideMenuStore2$be === void 0 ? [] : _getSideMenuStore2$be;
    var newCollapsed = !collapsed;

    // 菜单收起：记住当前展开子菜单到store，并收起子菜单
    if (newCollapsed) {
      (0, _storage.setSideMenuStore)({
        collapsed: newCollapsed,
        beforeOpenKeys: openMenuKeys,
      });
      setOpenMenuKeys([]);
    } else {
      // 菜单展开：恢复子菜单展开项，并更新到store
      (0, _storage.setSideMenuStore)({
        collapsed: newCollapsed,
        openKeys: beforeOpenKeys,
      });
      setOpenMenuKeys(beforeOpenKeys);
    }
    setCollapsed(newCollapsed);
  };
  (0, _react.useEffect)(function () {
    onLanguageChange && onLanguageChange(language);
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    _layout.default,
    {
      className: (0, _classnames.default)(
        'tnt-layout',
        'tnt-'.concat(theme),
        {
          'large-size': size === 'large',
          isNoHasLevel3: !isHasLevel3,
          isEmptyLayout: isEmptyLayout,
          hasHeaderTabs: !!headerTabs,
        },
        className,
      ),
    },
    /*#__PURE__*/ _react.default.createElement(
      Sider,
      {
        collapsible: true,
        breakpoint: 'md',
        className: 'tnt-layout-sider',
        collapsed: collapsed,
        collapsedWidth: collapsed && isHasLevel3 ? 110 : 80,
        width: siderWidth,
        trigger: null,
      },
      /*#__PURE__*/ _react.default.createElement(
        _Logo.default,
        _extends(
          {
            siderWidth: siderWidth,
            collapsed: collapsed,
          },
          props,
        ),
      ),
      /*#__PURE__*/ _react.default.createElement(
        _SideMenu.default,
        _extends({}, props, {
          collapsed: collapsed,
          openKeys: openMenuKeys,
          isHasLevel3: isHasLevel3,
          mainMenu: mainMenu,
          siderMenu: siderMenu,
          selectedKeys: selectedKeys,
          handleMainMenu: function handleMainMenu(item) {
            setSiderMenu(item.children);
          },
          onOpenChange: function onOpenChange(keys) {
            if (!collapsed) {
              (0, _storage.setSideMenuStore)({
                openKeys: keys,
                beforeOpenKeys: keys,
              });
            }
            setOpenMenuKeys(keys);
          },
        }),
      ),
      collapseIconPlacement === 'bottom' &&
        !isHasLevel3 &&
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'tnt-layout-menu-collapse',
            onClick: collapseChangeHandle,
          },
          /*#__PURE__*/ _react.default.createElement(_Icon.default, {
            type: 'menu-'.concat(collapsed ? 'unfold' : 'fold'),
          }),
        ),
    ),
    /*#__PURE__*/ _react.default.createElement(
      _layout.default,
      null,
      /*#__PURE__*/ _react.default.createElement(
        _Header.default,
        _extends({}, props, {
          collapsed: collapsed,
          isHasLevel3: isHasLevel3,
          mainMenuCodes: selectedKeys,
          mainMenu: mainMenu,
          siderMenu: siderMenu,
          onCollapseChange: collapseChangeHandle,
          collapseIconPlacement: collapseIconPlacement,
        }),
      ),
      /*#__PURE__*/ _react.default.createElement(Content, null, props.children),
    ),
  );
};
exports.default = _default;
