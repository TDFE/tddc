import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
  authorizesOrgList: '授权可用机构列表',
  allOrgAvailable: '全部机构可用',
  authorizesAppList: '授权可用渠道列表',
  allAppAvailable: '全部渠道可用',
  authorizesUserList: '全部可用用户列表',
  allUserAvailable: '全部用户可用',
};

export const en_US = {
  authorizesOrgList: 'Authorizes the list of organization available',
  allOrgAvailable: 'All organizations are available',
  authorizesAppList: 'Authorizes the list of application available',
  allAppAvailable: 'All applications are available',
  authorizesUserList: 'Authorizes the list of account available',
  allUserAvailable: 'All accounts are available',
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
