import './index.less';
import { Button, Ellipsis } from 'tntd';
import { NODE_TYPE_MAP } from '../constants';
import SVGImage from '../components/SVGImage';
import { colorRgb } from './utils';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const Node = (props) => {
  let lang = cookies.get('lang') || 'cn';
  let {
    node,
    nodeToggle,
    nodeStyle,
    constants,
    showEye = true,
    onEyeClick,
    onClick,
    fixed,
  } = props;

  let { RELATION_WIDTH } = constants;

  const { data, x, y, parent } = node;
  const { nodeType, color = '', isGroupItem, nodeName, componentTag } = data || {};

  let isChildPolicy = componentTag === 'children';

  let nums = data?.children?.length || data?._children?.length;
  let isExpan = data?._children?.length;

  let style = {
    minWidth: RELATION_WIDTH,
    ...nodeStyle,
  };

  let rootName = '';
  if (!parent) {
    rootName = nodeName.length > 23 ? nodeName.substr(0, 23) + '...' : nodeName;
  }

  let name = nodeName;

  if (fixed) {
    name = (
      <Ellipsis
        key={String(x) + y + nodeName}
        title={nodeName}
        placement="right"
        widthLimit={110}
      />
    );
  }

  // 节点鼠标进入事件
  const itemMouseEnter = (data, id) => {
    let dom = document.getElementById(id);
    dom.classList.remove('hidden-eye');
  };

  // 节点鼠标移出事件
  const itemMouseLeave = (data, id) => {
    let dom = document.getElementById(id);
    dom.classList.add('hidden-eye');
  };

  let ele = (
    <div style={style} className="root">
      <Ellipsis
        key={String(x) + y + rootName}
        title={rootName}
        placement="right"
        widthLimit={100}
        lines={3}
      />
    </div>
  );

  let textObj = {
    text: (NODE_TYPE_MAP[nodeType] && NODE_TYPE_MAP[nodeType][lang]) || 'cn',
    color: NODE_TYPE_MAP[nodeType] && NODE_TYPE_MAP[nodeType]['color'],
  };
  // 类型 节点
  let ele1 = (
    <div
      className="relation-node node"
      style={{
        ...style,
        borderColor: colorRgb(textObj.color, 0.4),
        background: colorRgb(textObj.color, 0.1),
      }}
    >
      <SVGImage text={textObj.text} bgColor={textObj.color} />
      <span className="s1" title={nodeName}>
        {nodeName}
        <span style={{ color }}>({nums})</span>
      </span>
      <span
        className="relation-u-minus"
        onClick={() => {
          nodeToggle(data);
        }}
      >
        <img alt="" src={isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg')} />
      </span>
    </div>
  );

  // 实例 结点
  let ele2 = (
    <>
      <span className="dot" style={{ background: color }} />
      {isChildPolicy && <span className="child-policy">{'子'}</span>}
      <div
        className="leaf-node"
        style={style}
        onClick={() => {
          onClick && onClick(data);
        }}
        onMouseEnter={() => {
          showEye && itemMouseEnter(data, props.id);
        }}
        onMouseLeave={() => {
          showEye && itemMouseLeave(data, props.id);
        }}
      >
        <span className="s1">{name}</span>

        {showEye && (
          <span
            id={props.id}
            className="hidden-eye eye"
            onClick={() => {
              onEyeClick && onEyeClick(data);
            }}
          >
            <Button icon="eye" />
          </span>
        )}
      </div>
      {nums && (
        <span
          className="leaf-u-minus"
          onClick={() => {
            nodeToggle(data);
          }}
        >
          <img alt="" src={isExpan ? require('../imgs/expand.svg') : require('../imgs/up.svg')} />
        </span>
      )}
    </>
  );

  let dom = null;

  if (!parent) {
    dom = ele;
  } else {
    dom = isGroupItem ? ele1 : ele2;
  }

  return <div className="node">{dom}</div>;
};

export default Node;
