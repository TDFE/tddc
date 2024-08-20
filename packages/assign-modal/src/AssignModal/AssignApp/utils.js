import { debounce } from 'lodash';
import { useState, useEffect } from 'react';

// 遍历机构树 添加 path属性 （上级机构到子机构的路径）
export const dataFormat = function (root, cb) {
  if (!root) {
    return;
  }
  let path = [...parent, root.code];
  root.path = [...path];
  root.path = [...path];
  root.show = true;

  cb && cb(root.key, root);
  for (let i = 0; i < root.children.length; i++) {
    dataFormat(root.children[i], path, cb);
  }
};

// 遍历寻找 当前规则集所属机构
export const findSameCodePath = (root, code) => {
  let res = {};
  const dfs = (root, code) => {
    if (!root) {
      return;
    }
    if (root.code === code) res = root;
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i], code);
    }
  };
  dfs(root, code);
  return res.path || [];
};

// 遍历输出 orgCode；
export const preorder = (root, cb, isAddPath = false) => {
  let res = [];
  const dfs = (root, res = [], parent = [], cb) => {
    if (!root) {
      return;
    }

    let path = [];
    if (isAddPath) {
      path = [...parent, root.code];
      root.path = [...path];
      root.path = [...path];
      root.show = true;
    }

    res.push(root.code || root.key);
    cb && cb(root.key, root);

    for (let i = 0; i < root?.children?.length; i++) {
      dfs(root.children[i], res, path, cb);
    }
  };
  dfs(root, res, [], cb);
  return res;
};

export const mergeAndDeduplicate = (arr1, arr2) => {
  // 合并两个数组
  const combined = [...arr1, ...arr2];

  // 用 Set 对象来追踪已经遇到过的元素
  const seen = new Set();

  // 使用 filter 方法去重并保持顺序
  const uniqueCombined = combined.filter((item) => {
    if (seen.has(item)) {
      return false;
    }
    seen.add(item);
    return true;
  });

  return uniqueCombined;
};

export const doSearch = (fileterKeys = '', flattenTreeMap, cb) => {
  let treeNodeArr = Object.keys(flattenTreeMap);
  let areadyHandled = [];
  for (let i = 0; i < treeNodeArr.length; i++) {
    let key = treeNodeArr[i];
    let node = flattenTreeMap[key];

    if (!fileterKeys) {
      flattenTreeMap[key].show = true;
    }

    const { name, value, path } = node;
    let filteredStr = name.toLowerCase() + value.toLowerCase();
    if (filteredStr.includes(fileterKeys.toLowerCase())) {
      path
        .filter((i) => !areadyHandled.includes(i))
        .map((i) => {
          areadyHandled.push(i);
          flattenTreeMap[i].show = true;
        });
    } else {
      !areadyHandled.includes(key) && (flattenTreeMap[key].show = false);
    }
  }

  cb && cb();
};

export const useWindowHeight = (gap) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight - gap);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowHeight(window.innerHeight - gap);
    });

    window.addEventListener('resize', handleResize);
    // 清理事件监听器
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gap]);

  return windowHeight;
};
