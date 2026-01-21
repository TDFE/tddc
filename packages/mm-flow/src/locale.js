import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const geTextName = (I18N) => {
  return {
    redo: I18N.content.topbar.zhongZuo,
    undo: I18N.content.topbar.cheXiao,
    'zoom-in': I18N.content.topbar.fangDa,
    'zoom-out': I18N.content.topbar.suoXiao,
    delete: I18N.content.topbar.shanChu,
    'deployment-unit': I18N.content.topbar.paiXu,
    copy: I18N.content.topbar.kaoBeiGuiZeLiu,
    reset: I18N.content.topbar.yuanBiLi,
    'auto-fit': I18N.content.topbar.shiYingHuaBu,
    fullscreen: I18N.content.topbar.zuiDaHua,
    formatSort: I18N.content.topbar.geShiHuaPaiXu,
    hengXiangPaiXu: I18N.content.topbar.hengXiangPaiXu,
    zongXiangPaiXu: I18N.content.topbar.zongXiangPaiXu,
    yunxingwancheng: I18N.src.index.yunXingWanCheng,
    yunxingzhong: I18N.src.index.yunXingZhong,
    yunxingshibai: I18N.src.index.yunXingShiBai,
    bunengshezhishuruliu: I18N.src.index.buNengSheZhiShu2,
    bunengshezhishuchuliu: I18N.src.index.buNengSheZhiShu,
    parseErr: I18N.src.index.jieXiShuJuCuo,
    configErr: I18N.src.defaultdataconvert.peiZhiBuHeFa,
    configEmpty: I18N.src.defaultdataconvert.peiZhiBuNengWei,
    startOutputMiss: I18N.src.defaultdataconvert.kaiShiQueShaoShu,
    startOutputOne: I18N.src.defaultdataconvert.kaiShiKaiShiJie,
    endNoInput: I18N.src.defaultdataconvert.jieShuQueShaoShu,
  };
};

export const getText = (key, I18N) => {
  const text = geTextName(I18N);

  // if (params?.length) {
  //   return params.reduce((acc, cur) => {
  //     return acc.replace(/%s/, cur);
  //   }, text);
  // }

  return text?.[key];
};

export const getLanguage = () => cookies.get('lang', { path: '/' }) || 'cn';
