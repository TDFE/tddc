import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const geTextName = (I18N) => {
  return {
    redo: I18N.src.locale.zhongZuo,
    undo: I18N.src.locale.cheXiao,
    'zoom-in': I18N.src.locale.fangDa,
    'zoom-out': I18N.src.locale.suoXiao,
    delete: I18N.src.locale.shanChu,
    'deployment-unit': I18N.src.locale.paiXu,
    copy: I18N.src.locale.kaoBeiGuiZeLiu,
    reset: I18N.src.locale.yuanBiLi,
    'auto-fit': I18N.src.locale.shiYingHuaBu,
    fullscreen: I18N.src.locale.zuiDaHua,
    formatSort: I18N.src.locale.geShiHuaPaiXu,
    hengXiangPaiXu: I18N.src.locale.hengXiangPaiXu,
    zongXiangPaiXu: I18N.src.locale.zongXiangPaiXu,
    yunxingwancheng: I18N.src.locale.yunXingWanCheng,
    yunxingzhong: I18N.src.locale.yunXingZhong,
    yunxingshibai: I18N.src.locale.yunXingShiBai,
    bunengshezhishuruliu: I18N.src.locale.buNengSheZhiShu2,
    bunengshezhishuchuliu: I18N.src.locale.buNengSheZhiShu,
    parseErr: I18N.src.locale.jieXiShuJuCuo,
    configErr: I18N.src.locale.peiZhiBuHeFa,
    configEmpty: I18N.src.locale.peiZhiBuNengWei,
    startOutputMiss: I18N.src.locale.kaiShiQueShaoShu,
    startOutputOne: I18N.src.locale.kaiShiKaiShiJie,
    endNoInput: I18N.src.locale.jieShuQueShaoShu,
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
