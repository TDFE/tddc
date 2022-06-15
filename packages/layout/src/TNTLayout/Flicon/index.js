import './fonts/iconfont';
import './index.less';

import { firstLevelIcons } from './iconList'

// const randomNum = (min, max) => {
//     if (max === undefined || min === undefined) {
//         console.log('必须传入max和min');
//         return false;
//     }
//     const num = Math.floor(Math.random() * (max - min + 1) + min);
//     return num;
// }

export default ({ type, prefix = 'icon-fl-', className = '', ...props }) => {
    type  = firstLevelIcons.includes(type) ? type : 'product'
   
    return (
        <i className={`tnt-fl-icon ${className}`} type={type} {...props}>
            <svg aria-hidden="true">
                <use xlinkHref={`#${prefix}${type}`} />
            </svg>
        </i>
    );
};
