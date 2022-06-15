import './fonts/iconfont';
import './index.less';

export { default as iconList } from './iconList';

export default ({ type, prefix = 'tnt-', className = '', ...props }) => {
    return (
        <i className={`tnt-icon ${className}`} type={type} {...props}>
            <svg aria-hidden="true">
                <use xlinkHref={`#${prefix}${type}`} />
            </svg>
        </i>
    );
};
