export const isGroupMenu = (menu) => menu?.children && !menu?.path;

export const getSelectedMenuInfo = (selectedKey, menus = []) => {
    let subMenu;
    let menu;
    let parentMenus = [];

    if (selectedKey) {
        traverseTree(menus, (node, pnode, pnodes) => {
            if (!isGroupMenu(node) && node.code === selectedKey) {
                subMenu = node;
                menu = pnode;
                parentMenus = pnodes;
                return false;
            }
        });
    } else {
        // 默认找到第一个菜单项
        traverseTree(menus, (node, pnode, pnodes) => {
            if (!isGroupMenu(node)) {
                subMenu = node;
                menu = pnode;
                parentMenus = pnodes;
                return false;
            }
        });
    }

    return {
        subMenu,
        menu,
        parentMenus
    };
};

export const findMenuInfoByPath = (menuTree, path, matchFunc) => {
    let menu;
    let subMenu;
    let matchedSubMenu;
    let parentMenus;

    if (path) {
        traverseTree(menuTree, (menu, pnode, pnodes) => {
            if (!isGroupMenu(menu)) {
                if (menu?.path === path) {
                    subMenu = menu;
                    menu = pnode;
                    parentMenus = pnodes;
                    return false;
                }

                if (!matchedSubMenu && matchFunc && matchFunc(menu)) {
                    matchedSubMenu = menu;
                    menu = pnode;
                    parentMenus = pnodes;
                }
            }
        });

        return {
            subMenu,
            matchedSubMenu,
            menu,
            parentMenus
        };
    }

    return { subMenu, menu, parentMenus };
};

export const hasLevel3 = (menus) => {
    return menus?.some((menu) => menu?.children?.some((item) => item?.children?.length));
};

export const hasLevel2 = (menu) => {
    return menu?.children?.some((item) => item?.children?.length);
};

export const isNewTabMenu = (menu) => {
    const { target, path } = menu || {};

    return target === '_blank' || (/^http/i.test(path) && /blankType=newTarget/.test(path));
};

export const openInNewTab = (path) => {
    window.open(path, '_blank');
};

export const traverseTree = (treeData, callback, pnode, pnodes = []) => {
    (treeData || []).every((node, index) => {
        let result;

        if (callback) {
            result = callback(node, pnode, pnodes?.length ? pnodes : [pnode].filter((item) => !!item), index);
        }

        // 回调函数返回false则终止遍历
        if (result !== false) {
            node && traverseTree(node.children || [], callback, node, [node, ...pnodes]);
        }

        return result !== false;
    });

    return treeData;
};

// 深度优先树遍历
const traverseDown = (trees = [], cb) => {
    for (const tree of trees) {
        if (cb(tree) === false) break;
        traverseDown(tree.children, cb);
    }
};

// 获取匹配的菜单
export const getActiveMenu = (menus, pathname) => {
    let menu;

    traverseDown(menus, (item) => {
        // 路径完全匹配
        if (pathname.startsWith(item.path)) {
            menu = item;
            return false;
        }
    });

    return menu;
};

// 获取选中的菜单列表
export const getParents = (menu) => {
    const arr = [];
    let m = menu;
    while (m) {
        arr.push(m.code);
        m = m.parent;
    }
    return arr.reverse();
};

export const formatter = (data = [], parent) => {
    data.forEach((data, index) => {
        data.parent = parent;
        formatter(data.children, data);
    });

    return data;
};

export const safeParseJSON = (str, defaultObj) => {
    let result;

    try {
        result = JSON.parse(str);
    } catch (err) {
        console.warn('json parse error:', err);
        result = typeof defaultObj === 'undefined' ? str : defaultObj;
    }

    return result || defaultObj;
};

export const formatLevel2Menu = (treeData = []) => {
    return treeData?.reduce((pre, cur) => {
        pre = pre.concat(cur.children || []);
        return pre;
    }, []);
};


export function getStrLength(str) {
  // 先把中文替换成两个字节的英文，再计算长度
  return str.replace(/[\u0391-\uFFE5]/g, 'aa').length;
}
