import { get } from 'lodash';
import ReactDOM from 'react-dom';
import Base from './Base';
import constants, {
  COMPONENT_HEIGHT,
  COMPONENT_SPACE_HORIZONTAL,
  COMPONENT_SPACE_VERTICAL,
  COMPONENT_WIDTH,
  ROOT_WIDTH,
} from './constants';
import DefaultNode from './DefaultNode';
import Link from './Link';
import { collapseTree, expandTree, getTextPixelWith } from './utils';
import WrapNode from './WrapNode';

class Tree extends Base {
  constructor() {
    super();

    this.dom = null;
    this.nodeDom = null;
    this.onChange = null;
    this.customPosition = null;
    this.fixed = true;
    this.lineType = 2;
    this.linkType = 'dashed';
    this.domHeight = 0;
    this.domWidth = 0;

    this.Nodes = {};
    this.interaction = true;

    this.constant = {};
    this.constant.COMPONENT_WIDTH = COMPONENT_WIDTH; // 节点占据的宽度
    this.constant.COMPONENT_HEIGHT = COMPONENT_HEIGHT; // 节点占据高度
    this.constant.COMPONENT_SPACE_VERTICAL = COMPONENT_SPACE_VERTICAL; // 节点垂直之间的间隙
    this.constant.COMPONENT_SPACE_HORIZONTAL = COMPONENT_SPACE_HORIZONTAL; // 节点水平之间的间隙
    this.constant.ROOT_WIDTH = ROOT_WIDTH; // 根节点宽度
  }

  init(props) {
    let { data, options, styleOptions, container } = props;
    let { initType, onChange, customPosition, fixed, nodeDom, lineType } = options || {};
    let { nodeWidth, nodeHeight, spaceVertical, spaceHorizontal, rootWidth } = styleOptions || {};

    this.initType = initType || false;
    this.nodeDom = nodeDom || DefaultNode || null;
    this.onChange = onChange;
    this.customPosition = customPosition;
    this.fixed = fixed;
    this.lineType = lineType || 2;
    this.linkType = 'dashed';
    this.dom = container;
    this.domHeight = 0;
    this.domWidth = 0;

    this.constant = {};
    this.constant.COMPONENT_WIDTH = nodeWidth || COMPONENT_WIDTH; // 节点占据的宽度
    this.constant.COMPONENT_HEIGHT = nodeHeight || COMPONENT_HEIGHT; // 节点占据高度
    this.constant.COMPONENT_SPACE_VERTICAL = spaceVertical || COMPONENT_SPACE_VERTICAL; // 节点垂直之间的间隙
    this.constant.COMPONENT_SPACE_HORIZONTAL = spaceHorizontal || COMPONENT_SPACE_HORIZONTAL; // 节点水平之间的间隙
    this.constant.ROOT_WIDTH = rootWidth || ROOT_WIDTH; // 根节点宽度

    // this.data = data || null;
    this.setData(data || null);
    if (!this.data) return;

    this.render();
  }

  setData(data) {
    this.data = data;
  }

  drawNode() {
    const result = [];
    // 扁平化树
    this.flattenNodes = this.Nodes?.descendants() || [];
    this.flattenNodes?.forEach((node) => {
      let { data, x, y } = node;
      let { key, nodeName } = data;
      let isExceed = getTextPixelWith(nodeName) > this.constant.COMPONENT_WIDTH;
      let Eledom = () => {
        let NodeIns =
          (this.nodeDom &&
            this.nodeDom({
              node,
              nodeToggle: (data) => this.foldingClick(data),
              id: this.getHierarchyId(key, 'root') + x + y,
              constants,
              fixed: this.fixed,
            })) ||
          null;
        return NodeIns;
      };
      let Ele = WrapNode(Eledom);
      result.push(
        <Ele
          key={this.getHierarchyId(key, 'root') + x + y}
          id={this.getHierarchyId(key, 'root')}
          width={!isExceed && this.constant.COMPONENT_WIDTH}
          minWidth={this.constant.COMPONENT_WIDTH}
          minHeight={this.constant.COMPONENT_HEIGHT}
          x={x}
          y={y}
          fixed={this.fixed}
        />,
      );
    }) || [];
    return result;
  }

  drawLine() {
    this.flattenLinks = this.Nodes?.links() || [];
    let result = [];
    result =
      this?.flattenLinks.map((link) => {
        const { source, target } = link;
        const sourceKey = source.data.key;
        const targetKey = target.data.key;

        let x = source.y;

        let nodeNameWidth = getTextPixelWith(source.data.nodeName || ''); // 组件名称宽度

        if (!source.parent) {
          x = source.y + this.constant.COMPONENT_WIDTH;
        } else {
          if (this.fixed) {
            x = source.y + this.constant.COMPONENT_WIDTH;
          } else {
            x =
              source.y +
              (nodeNameWidth > this.constant.COMPONENT_WIDTH
                ? nodeNameWidth
                : this.constant.COMPONENT_WIDTH);
          }
        }

        let length = source?.data?.children.length || source?.data?._children.length || 0;

        return (
          <div
            key={this.getHierarchyId(sourceKey, targetKey) + source.x + source.y}
            data-key={this.getHierarchyId(sourceKey, targetKey) + source.x + source.y}
          >
            <Link
              root={!source.parent}
              color={source?.data?.color}
              length={length}
              source={{
                x,
                y: source.x,
              }}
              target={{
                x: target.y,
                y: target.x,
              }}
              type={this.lineType}
              linkType={this.linkType}
            />
          </div>
        );
      }) || [];

    return result;
  }

  // 计算定位
  buildPosition(data) {
    let leafCount = 0;
    let domWidth = 0;
    let domHeight = 0;
    const Nodes = data?.eachAfter((node) => {
      let exceedWidth = this.calcWidth(node) || 0;

      let { children, data, parent } = node;
      if (!this.fixed) {
        node.y =
          node.depth * (this.constant.COMPONENT_WIDTH + this.constant.COMPONENT_SPACE_HORIZONTAL) +
          exceedWidth;
      } else {
        node.y =
          node.depth * (this.constant.COMPONENT_WIDTH + this.constant.COMPONENT_SPACE_HORIZONTAL);
      }

      if (this.customPosition) {
        [node.x, node.y] = this.customPosition(node);
      }

      if (parent === null) {
        node.y = 0;
        node.x =
          children && children.length ? (children[0].x + children[children.length - 1].x) / 2 : 0;
      } else if (data.type === 'relation') {
        node.x =
          children && children.length ? (children[0].x + children[children.length - 1].x) / 2 : 0;
      } else {
        node.x =
          leafCount * (this.constant.COMPONENT_HEIGHT + this.constant.COMPONENT_SPACE_VERTICAL);
        leafCount += 1;
      }
      domWidth = Math.max(node.y + getTextPixelWith(node.data.nodeName || ''), domWidth);
      domHeight = Math.max(node.x + COMPONENT_HEIGHT, domHeight);
    });

    // 设置容器宽度
    this.domWidth = domWidth;
    this.domHeight = domHeight;

    this.Nodes = Nodes;
  }

  // 获取id
  getHierarchyId(...args) {
    let ids = [];
    let _len = 0;
    let _key = 0;
    for (_len = args.length, ids = new Array(_len); _key < _len; _key++) {
      ids[_key] = args[_key];
    }
    return ids.join('.');
  }

  // 计算节点长度
  calcWidth(root) {
    let moreWidth = 0;
    if (!root) return 0;
    let dfs = (root) => {
      if (!root) return;
      let nameWidth = getTextPixelWith(root.data.nodeName || '');
      if (nameWidth > this.constant.COMPONENT_WIDTH) {
        moreWidth += nameWidth - this.constant.COMPONENT_WIDTH;
      }
      if (root.parent) {
        dfs(root.parent);
      }
    };
    dfs(root.parent, 0);
    return moreWidth;
  }

  // 节点展开 闭合
  nodeChange(data) {
    this.data.nodeName = data.nodeName;
    this.data.children = data.children;
    this.initData(this.data);
    this.render();
  }

  // 点击折叠
  foldingClick(d) {
    let path;
    let currentNode;
    let valueTemp = { nodeName: this.data.nodeName, children: this.data.children };

    if (d.children) {
      path = d.path.slice(0, d.path.length - 1);
      currentNode = get(valueTemp, path);
      currentNode._children = currentNode.children;
      currentNode.children = null;
    } else {
      path = d.path;
      currentNode = get(valueTemp, path);
      currentNode.children = currentNode._children;
      currentNode._children = null;
    }
    this.nodeChange && this.nodeChange(valueTemp);
  }

  async expand() {
    await this.data.children.forEach(expandTree);
    await this.initData();
    await this.render();
  }

  async packUp() {
    await this.data.children.forEach(collapseTree);
    await this.initData();
    await this.render();
  }

  render() {
    this.buildPosition(this.hierarchyData);
    ReactDOM.render(
      <div
        style={{
          position: 'relative',
          zIndex: 9,
          width: this.domWidth + 100,
          height: this.domHeight,
          margin: '80px 0 0 20px',
        }}
      >
        {this.drawNode()}
        {this.drawLine()}
      </div>,
      this.dom,
    );
  }
}

let BaseProxy = () =>
  new Proxy(new Tree(), {
    set(target, propertyKey, value) {
      if (propertyKey === 'data') {
        if (!value) return true;
        if (target.initType === true || !target.interaction) {
          value?.children?.forEach(expandTree);
        } else {
          value?.children?.forEach(collapseTree);
        }
        Reflect.set(target, propertyKey, value);
        target.initData();
        target.render();
        return true;
      }
      Reflect.set(target, propertyKey, value);
      return true;
    },
    get(target, propertyKey) {
      if (Reflect.has(target, propertyKey)) {
        return Reflect.get(target, propertyKey);
      }
      return -1;
    },
  });

export default BaseProxy;
