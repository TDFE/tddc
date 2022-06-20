import { hierarchy } from 'd3-hierarchy';
import { cloneDeep } from 'lodash';
import { NODE_TYPE_MAP } from './constants';

class Base {
  constructor() {
    this.data = null;

    this.flattenNodes = [];
    this.flattenLinks = [];
    this.hierarchyData = null;
    this.finalValue = null;

    this.keyDefault = 0;
  }

  initData() {
    if (!this.data) return;
    // 设置key
    const valueTemp = cloneDeep(this.data);
    this.setKey(valueTemp, {});
    this.finalValue = Object.assign(
      {
        type: 'relation',
        path: ['relation'],
      },
      valueTemp,
    );

    // 格式化树
    this.finalValue.children = this.addDropAreaAndOperation(valueTemp.children, ['children']);

    // 转化为一颗标准树
    this.hierarchyData = hierarchy(this.finalValue);
  }

  // 设置key
  setKey(data, keyMap) {
    const createKey = (v) => {
      if (!(v && v.key)) {
        v.key = this.getUniqKey(this.keyDefault, keyMap);
      }
      keyMap[v.key] = 1;
      if (v && v.children && v.children.length) {
        this.setKey(v.children, keyMap);
      }
    };
    if (Array.isArray(data)) {
      data.forEach((v, i) => {
        v.index = i;
        createKey(v);
      });
    } else {
      if (data) {
        data.index = 0;
        createKey(data);
      }
    }
  }

  getUniqKey(key, keyMap) {
    if (key in keyMap) {
      const k = key + 1;
      return this.getUniqKey(k, keyMap);
    }
    return key;
  }

  // 格式化节点树
  addDropAreaAndOperation(children, parentPath, level, parentColor = '') {
    if (!children) {
      children = [];
    }
    let result = [];
    if (children.length) {
      children.forEach((child, index) => {
        const path = [].concat(parentPath, [index]);
        const { key } = child || {};
        let color = '';

        color = (NODE_TYPE_MAP && NODE_TYPE_MAP[child.nodeType]?.color) || parentColor;
        const node = Object.assign({}, child, {
          type: 'leaf',
          key,
          index,
          parentPath,
          path,
          color,
        });
        if (child.children && child.children.length) {
          node.type = 'relation';
          node.children = this.addDropAreaAndOperation(
            child.children,
            path.concat(['children']),
            level + 1,
            color,
          );
          path.push('relation');
        }
        result.push(node);
      });
    }
    return result;
  }
}

export default Base;
