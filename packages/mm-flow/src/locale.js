import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const zh_CN = {
  redo: '重做',
  undo: '撤销',
  'zoom-in': '放大',
  'zoom-out': '缩小',
  delete: '删除',
  'deployment-unit': '排序',
  copy: '拷贝规则流',
  reset: '原比例',
  'auto-fit': '适应画布',
  fullscreen: '最大化',
  formatSort: '格式化排序',
  hengXiangPaiXu: '横向排序',
  zongXiangPaiXu: '纵向排序',
  yunxingwancheng: '运行完成',
  yunxingzhong: '运行中',
  yunxingshibai: '运行失败',
  bunengshezhishuruliu: '不能设置输入流',
  bunengshezhishuchuliu: '不能设置输出流',
  parseErr: '解析数据错误，',
  configErr: '配置不合法，原因如下：',
  configEmpty: '配置不能为空',
  startOutputMiss: '[开始]缺少输出流',
  startOutputOne: '[开始]开始节点只能有一个',
  endNoInput: '[结束]缺少输入流',
};

export const en_US = {
  redo: 'Redo',
  undo: 'Undo',
  'zoom-in': 'Zoom In',
  'zoom-out': 'Zoom Out',
  delete: 'Delete',
  'deployment-unit': 'Sort',
  copy: 'Copy',
  reset: 'Original Scale',
  'auto-fit': 'Adapt to canvas',
  fullscreen: 'Maximize',
  formatSort: 'Format Sort',
  hengXiangPaiXu: 'Sort horizontally',
  zongXiangPaiXu: 'Sort Vertically',
  yunxingwancheng: 'success',
  yunxingzhong: 'running',
  yunxingshibai: 'fail',
  bunengshezhishuruliu: 'input stream cannot be set',
  bunengshezhishuchuliu: 'output stream cannot be set',
  parseErr: 'Parsing data error,',
  configErr: 'The configuration is invalid because of the following reasons:',
  configEmpty: 'he configuration cannot be empty',
  startOutputMiss: '[Start] The output stream is missing',
  startOutputOne: '[Start] There can be only one start node',
  endNoInput: '[End] The input stream is missing',
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
