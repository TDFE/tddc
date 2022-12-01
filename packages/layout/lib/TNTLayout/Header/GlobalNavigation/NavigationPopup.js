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
var _react = _interopRequireWildcard(require('react'));
var _classnames = _interopRequireDefault(require('classnames'));
var _lodash = require('lodash');
var _eventEmitter = _interopRequireDefault(require('../../eventEmitter'));
var _utils = require('../../utils');
var _Icon = _interopRequireDefault(require('../../Icon'));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
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
  key = _toPropertyKey(key);
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
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
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
var SearchList = function SearchList(_ref) {
  var items = _ref.items,
    onSelectMenu = _ref.onSelectMenu;
  return /*#__PURE__*/ _react.default.createElement(
    'ul',
    null,
    items === null || items === void 0
      ? void 0
      : items.map(function (item) {
          return /*#__PURE__*/ _react.default.createElement(
            'li',
            {
              onClick: function onClick() {
                return onSelectMenu(item);
              },
            },
            item === null || item === void 0 ? void 0 : item.menuName,
          );
        }),
  );
};
var _default = function _default(_ref2) {
  var _ref2$menus = _ref2.menus,
    menus = _ref2$menus === void 0 ? [] : _ref2$menus,
    close = _ref2.close,
    popupRef = _ref2.popupRef,
    selectedMenuKey = _ref2.selectedMenuKey,
    language = _ref2.language,
    isHasLevel3 = _ref2.isHasLevel3,
    _ref2$mainMenuCodes = _ref2.mainMenuCodes,
    mainMenuCodes = _ref2$mainMenuCodes === void 0 ? [] : _ref2$mainMenuCodes,
    mainMenu = _ref2.mainMenu,
    siderMenu = _ref2.siderMenu;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    searchValue = _useState4[0],
    setSearchValue = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    searchedMenus = _useState6[0],
    setSearchedMenus = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    mainCodes = _useState8[0],
    setMainCodes = _useState8[1];
  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    menuList = _useState10[0],
    setMenuList = _useState10[1];
  (0, _react.useEffect)(
    function () {
      if (siderMenu.length) {
        setMainCodes(mainMenuCodes);
        setMenuList(siderMenu);
      }
    },
    [siderMenu],
  );
  var onMenuClick = function onMenuClick(menu) {
    _eventEmitter.default.emit(
      'menuSelectPopup',
      _objectSpread(
        {
          key: menu.code,
        },
        menu,
      ),
    );
    setSearchValue('');
    setSearchedMenus([]);
    close();
  };
  var debounceSearch = (0, _lodash.debounce)(function (evt) {
    var _evt$target$value;
    var value =
      (_evt$target$value = evt.target.value) === null || _evt$target$value === void 0
        ? void 0
        : _evt$target$value.trim();
    var matchedMenus = [];
    if (value) {
      (0, _utils.traverseTree)(menus, function (node) {
        var _node$menuName;
        if (
          node.path &&
          (node === null || node === void 0
            ? void 0
            : (_node$menuName = node.menuName) === null || _node$menuName === void 0
            ? void 0
            : _node$menuName.includes(value))
        ) {
          matchedMenus.push(node);
        }
      });
    }
    setSearchedMenus(matchedMenus);
  }, 100);
  var onSearchChange = function onSearchChange(evt) {
    evt.persist();
    setSearchValue(evt.target.value);
    debounceSearch(evt);
  };
  var handleMainMenu = function handleMainMenu(item) {
    setMainCodes([item.code]);
    setMenuList(item.children);
  };
  (0, _react.useEffect)(function () {
    var clickOutside = function clickOutside(evt) {
      var clientX = evt.clientX,
        clientY = evt.clientY,
        pageX = evt.pageX,
        pageY = evt.pageY;
      var isOutside = function isOutside(evt, popup) {
        if (popup === null || popup === void 0 ? void 0 : popup.contains) {
          return !(popup === null || popup === void 0 ? void 0 : popup.contains(evt.target));
        }
        var _popup$getBoundingCli = popup.getBoundingClientRect(),
          x = _popup$getBoundingCli.x,
          y = _popup$getBoundingCli.y,
          height = _popup$getBoundingCli.height,
          width = _popup$getBoundingCli.width;
        console.log('clickOutside...', [x, y], [clientX, clientY], [pageX, pageY]);
        x += window.scrollX;
        y += window.scrollY;
        return pageX < x || pageX > x + width || pageY < y || pageY > y + height;
      };
      if (isOutside(evt, popupRef.current)) {
        setSearchValue('');
        setSearchedMenus([]);
        close();
      }
    };
    document.addEventListener('click', clickOutside);
    return function () {
      return document.removeEventListener('click', clickOutside);
    };
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: (0, _classnames.default)('search-area', {
          active: active,
        }),
      },
      /*#__PURE__*/ _react.default.createElement(_Icon.default, {
        type: 'search',
      }),
      /*#__PURE__*/ _react.default.createElement('input', {
        placeholder: '\u83DC\u5355\u641C\u7D22',
        value: searchValue,
        onChange: onSearchChange,
        onFocus: function onFocus() {
          return setActive(true);
        },
        onBlur: function onBlur() {
          return setActive(false);
        },
      }),
      /*#__PURE__*/ _react.default.createElement(_Icon.default, {
        type: 'close',
        onClick: close,
      }),
      (searchedMenus === null || searchedMenus === void 0 ? void 0 : searchedMenus.length) > 0 &&
        /*#__PURE__*/ _react.default.createElement(SearchList, {
          items: searchedMenus,
          onSelectMenu: onMenuClick,
        }),
    ),
    isHasLevel3 &&
      /*#__PURE__*/ _react.default.createElement(
        'ul',
        {
          className: 'main-menu',
        },
        mainMenu === null || mainMenu === void 0
          ? void 0
          : mainMenu.map(function (menu) {
              return /*#__PURE__*/ _react.default.createElement(
                'li',
                {
                  className: (0, _classnames.default)({
                    active: mainCodes.includes(menu.code),
                  }),
                  onClick: function onClick() {
                    return handleMainMenu(menu);
                  },
                },
                menu === null || menu === void 0
                  ? void 0
                  : menu[language === 'cn' ? 'groupName' : 'enName'],
              );
            }),
      ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'group-menus',
      },
      menuList === null || menuList === void 0
        ? void 0
        : menuList.map(function (groups) {
            return /*#__PURE__*/ _react.default.createElement(
              'div',
              null,
              /*#__PURE__*/ _react.default.createElement(
                'h5',
                null,
                groups === null || groups === void 0
                  ? void 0
                  : groups[language === 'cn' ? 'groupName' : 'enName'],
              ),
              /*#__PURE__*/ _react.default.createElement(
                'ul',
                {
                  className: 'menu-list',
                },
                groups === null || groups === void 0
                  ? void 0
                  : groups.children.map(function (menu) {
                      return /*#__PURE__*/ _react.default.createElement(
                        'li',
                        {
                          key: menu.code,
                          className: (0, _classnames.default)('menu-list-item', {
                            active: selectedMenuKey === menu.code,
                          }),
                          onClick: function onClick() {
                            return onMenuClick(menu);
                          },
                        },
                        /*#__PURE__*/ _react.default.createElement(
                          'a',
                          {
                            href: menu.path,
                            onClick: function onClick(evt) {
                              return evt.preventDefault();
                            },
                          },
                          menu === null || menu === void 0
                            ? void 0
                            : menu[language === 'cn' ? 'menuName' : 'enName'],
                        ),
                      );
                    }),
              ),
            );
          }),
    ),
  );
};
exports.default = _default;
