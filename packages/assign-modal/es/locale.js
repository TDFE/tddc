import Cookies from 'universal-cookie';
var cookies = new Cookies();
export var zh_CN = {
  authorizesOrgList: '机构列表',
  allOrgAvailable: '全部机构',
  authorizesAppList: '渠道列表',
  allAppAvailable: '全部渠道',
  authorizesUserList: '用户列表',
  allUserAvailable: '全部用户',
  search: '查询',
  availableOrgs: '可用机构',
  availableApps: '可用渠道',
  availableUsers: '可用用户',
  clear: '清空',
  hasBeenSelected: '已选',
  numOfOrg: '%s 机构',
  numOfApp: '%s 渠道',
  numOfUser: '%s 用户',
};
export var en_US = {
  authorizesOrgList: 'Organization List',
  allOrgAvailable: 'All Organizations',
  authorizesAppList: 'Channel List',
  allAppAvailable: 'All Channels',
  authorizesUserList: 'Account List',
  allUserAvailable: 'All Accounts',
  search: 'Search',
  availableOrgs: 'Available Organizations',
  availableApps: 'Available Channels',
  availableUsers: 'Available Users',
  clear: 'Clear',
  hasBeenSelected: 'Selected',
  numOfOrg: '%s Organizations',
  numOfApp: '%s Channels',
  numOfUser: '%s Accounts',
};
export var getText = function getText(key, language) {
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
export var getLanguage = function getLanguage() {
  return (
    cookies.get('lang', {
      path: '/',
    }) || 'cn'
  );
};
export default {
  en_US: en_US,
  zh_CN: zh_CN,
};
