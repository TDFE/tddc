import JSEncrypt from 'jsencrypt';
import Cookies from 'universal-cookie';
import { uniq, cloneDeep } from 'lodash';
const cookies = new Cookies();
const pubKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDNpMKIVmt0u5lx62tRD1O/15EyNLN0lNi3++ytnvLalkQNSrrqU2w3uD5NwdVE/v4OrDznTpBdTl6N1ryXAILU5GDu0bLATC46RKxDlH52LIvaRBU7BZkEGqllEqRJFmwtvtNCVeZD6ekJWc67MLUh4LNa1yMQ9V6Zsf64uY2lgwIDAQAB';

export const rsaPwd = (pwd) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(pubKey);
  return encrypt.encrypt(pwd); // 加密
};

export const goToLogin = () => {
  if (window.isInLightBox) {
    window.location.href = '/user/login';
  }
};

export const getHeader = () => ({
  'X-Cf-Random': sessionStorage.getItem('_csrf_'),
});

export function getStrLength(str) {
  // 先把中文替换成两个字节的英文，再计算长度
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}

export const isNewTabMenu = (menu) => {
  const { target, path } = menu || {};

  return target === '_blank' || (/^http/i.test(path) && /blankType=newTarget/.test(path));
};

export const openInNewTab = (menu) => {
  window.open(menu?.path, '_blank');
};

export const traverseTree = (treeData, callback, pnode, pnodes = []) => {
  (treeData || []).every((node, index) => {
    let result;
    if (callback) {
      result = callback(
        node,
        pnode,
        pnodes?.length ? pnodes : [pnode].filter((item) => !!item),
        index,
      );
    }
    if (result !== false) {
      node && traverseTree(node.children || [], callback, node, [node, ...pnodes]);
    }

    return result !== false;
  });
  return treeData;
};

export const isJSON = (str) => {
  if (typeof str === 'string') {
    try {
      let obj = JSON.parse(str);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
};

export const formatAppList = (apps) => [
  { key: '', name: '全部渠道' },
  ...(apps || []).map((item) => ({ ...item, key: item.name, name: item.displayName })),
];

export const formatOrgApp = (orgGroup, apps = []) => {
  let [orgUuidMap, orgCodeMap, appMap] = [{}, {}, {}];
  const orgList = traverseTree([cloneDeep(orgGroup)], (item) => {
    item.title = item.name;
    item.value = item.code;
    item.key = item.code;
    orgCodeMap[item.code] = item;
    orgUuidMap[item.uuid] = {
      ...item,
      children: undefined,
    };
    return item;
  });
  const orgUuidTree = traverseTree([cloneDeep(orgGroup)], (item) => {
    item.title = item.name;
    item.value = item.uuid;
    item.key = item.uuid;
    return item;
  });

  // 用户下有权限的全渠道
  const appList = [
    {
      key: '',
      name: '全部渠道',
    },
  ].concat(
    apps.map((app) => {
      appMap[app.name] = app.displayName;
      return {
        key: app.name,
        name: app.displayName,
      };
    }),
  );
  const allTempObj = {
    name: '全部渠道',
    key: '',
  };
  let currentApp = allTempObj;
  if (localStorage.hasOwnProperty('currentApp_new')) {
    // 缓存中是否存在currentApp
    let currentAppObjStr = localStorage.getItem('currentApp_new');
    if (currentAppObjStr && isJSON(currentAppObjStr)) {
      // 存在的currentApp是否是标准JSON
      let currentAppJson = JSON.parse(currentAppObjStr);
      if (currentAppJson.name && currentAppJson.key) {
        // 判断currentApp是否是标准格式
        currentApp = currentAppJson;
      }
      if (currentAppJson.name && currentAppJson.dName) {
        // 判断currentApp是否是标准格式
        currentApp = {
          key: currentAppJson.name,
          name: currentAppJson.dName,
        };
      }
    } else {
      currentApp = allTempObj;
    }
  } else {
    currentApp = allTempObj;
  }

  return {
    orgList,
    orgUuidTree,
    orgUuidMap,
    orgCodeMap,
    currentApp,
    appList,
    appMap,
  };
};

export const getSubAppsFromMenus = (menus) => {
  const subapps = [];
  const walkThroughMenus = (menus) => {
    (menus || []).forEach((menu) => {
      const { path, children } = menu;

      if (path) {
        const appKey = !/^http/i.test(path) ? path.match(/\/([^\/]+)/)[1] : '';

        if (appKey) {
          subapps.push(appKey);
        }
      }
      walkThroughMenus(children);
    });
  };

  walkThroughMenus(menus);

  return uniq(subapps);
};

export const getLang = () => {
  return cookies.get('lang') || 'cn';
};

// 获取页面标题
export const getLayoutPageTitle = (menuTree) => {
  let title;
  const { pathname } = window.location;
  const changeTitle = () => {
    const taskList = JSON.parse(JSON.stringify(menuTree));
    while (taskList.length > 0) {
      [...taskList].forEach((item) => {
        taskList.shift();

        if (item.path) {
          if (pathname.includes(item.path)) {
            title = getLang() === 'cn' ? item['menuName'] : item['enName'];
          }
        }
        if (item.children) {
          taskList.push(...item.children);
        }
      });
    }
  };
  changeTitle();
  return title;
};
