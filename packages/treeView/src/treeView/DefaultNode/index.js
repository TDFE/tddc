import './index.less';

export default (props) => {
  let { node = {} } = props;
  let { data } = node;
  return <div className="common">{data?.nodeName || '默认节点'}</div>;
};
