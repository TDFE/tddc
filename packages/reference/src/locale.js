import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
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

export const en_US = {
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
