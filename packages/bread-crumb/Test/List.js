import { Link } from 'react-router-dom';
import './List.less';
export default () => {
  return (
    <div>
      我是一个列表 <Link to="/components/bread-crumb/detail">查看详情</Link>
    </div>
  );
};
