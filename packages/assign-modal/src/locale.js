import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
  authorizesOrgList: '机构列表',
  allOrgAvailable: '全部机构',
  authorizesAppList: '渠道列表',
  allAppAvailable: '全部渠道',
  authorizesUserList: '用户列表',
  allUserAvailable: '全部用户',
  search: '请输入机构名称',
  availableOrgs: '可用机构',
  availableApps: '可用渠道',
  availableUsers: '可用用户',
  clear: '清空',
  hasBeenSelected: '已选',
  numOfOrg: '%s 个机构',
  numOfApp: '%s 个渠道',
  numOfUser: '%s 个用户',
  enterAppName: '请输入渠道名称',
  enterUserName: '请输入用户名称',
};

export const en_US = {
  authorizesOrgList: 'Organization List',
  allOrgAvailable: 'All Organizations',
  authorizesAppList: 'Channel List',
  allAppAvailable: 'All Channels',
  authorizesUserList: 'Account List',
  allUserAvailable: 'All Accounts',
  search: 'Organization name',
  availableOrgs: 'Available Organizations',
  availableApps: 'Available Channels',
  availableUsers: 'Available Users',
  clear: 'Clear',
  hasBeenSelected: 'Selected',
  numOfOrg: '%s Organizations',
  numOfApp: '%s Channels',
  numOfUser: '%s Accounts',
  enterAppName: 'Enter Channel name',
  enterUserName: 'Enter Account name',
};

export const getText = (key, language, ...params) => {
  const text = ({
    cn: zh_CN,
    en: en_US,
  }[language || getLanguage()] || zh_CN)?.[key];

  if (params?.length) {
    return params.reduce((acc, cur) => {
      return acc.replace(/%s/, cur);
    }, text);
  }

  return text;
};

export const getLanguage = () => cookies.get('lang', { path: '/' }) || 'cn';

export default { en_US, zh_CN };
