import Cookies from 'universal-cookie';
import zhCN from './.octopus/zh-CN';
import enUS from './.octopus/en-US';

const cookies = new Cookies();

const getLang = () => {
  return cookies.get('lang') || 'cn';
};

const mapLanguage = {
  en: enUS,
  cn: zhCN,
};

const getProp = (obj, is, value) => {
  if (typeof is === 'string') {
    is = is.split('.');
  }
  if (is.length === 1 && value !== undefined) {
    return (obj[is[0]] = value);
  } else if (is.length === 0) {
    return obj;
  } else {
    const prop = is.shift();
    if (value !== undefined && obj[prop] === undefined) {
      obj[prop] = {};
    }
    return getProp(obj[prop], is, value);
  }
};

let I18N = mapLanguage[getLang()];

I18N.template = (str, args) => {
  if (!str) {
    return '';
  }
  return str.replace(/\{(.+?)\}/g, (match, p1) => {
    return getProp(
      {
        ...I18N,
        ...args,
      },
      p1,
    );
  });
};

export default I18N;
