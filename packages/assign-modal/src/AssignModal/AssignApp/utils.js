// 遍历机构树 添加 path属性 （上级机构到子机构的路径）
export const addPath = function (root, parent = []) {
  if (!root) {
    return;
  }
  let path = [...parent, root.code];
  root.path = [...path];
  for (let i = 0; i < root.children.length; i++) {
    addPath(root.children[i], path);
  }
};

// 遍历寻找 当前规则集所属机构
export const findSameCodePath = (orgList, code) => {
  const loop = (list, code) => {
    for (let i = 0; i < list.length; i++) {
      const root = list[i];
      if (root.code === code) {
        return root;
      }
      if (root.children?.length > 0) {
        const back = loop(root.children, code);
        if (back) {
          return back;
        }
      }
    }
    return false;
  };
  const back = loop(orgList, code);
  return back?.path || [];
};

// 遍历输出 orgCode；
export const preorder = (root) => {
  let res = [];
  const dfs = (root, res = []) => {
    if (!root) {
      return;
    }
    res.push(root.code || root.key);
    for (let i = 0; i < root.children.length; i++) {
      dfs(root.children[i], res);
    }
  };
  dfs(root, res);
  return res;
};
