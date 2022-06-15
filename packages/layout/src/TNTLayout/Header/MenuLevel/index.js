import { useContext } from 'react';
import { Row } from 'antd';

import './index.less';
import { setMenuLevelStore } from '../../storage';
import { ThemeContext } from '../../Context';

const menuLevelList = [
    { value: '2', label: '二级导航' },
    { value: '3', label: '三级导航' }
];

export default (props) => {
    const { onMenuLevelChange } = props;

    const { menuLevel, handleMenuLevel } = useContext(ThemeContext);

    const changeMenuLevel = (v) => {
        setMenuLevelStore(v);
        handleMenuLevel(v);
        onMenuLevelChange && onMenuLevelChange(v);
    };

    return (
        <Row type="flex" className="user-info-body-menu-row">
            {menuLevelList.map(({ value, label }) => {
                const isChecked = menuLevel === value;
                return (
                    <Row
                        type="flex"
                        align="center"
                        justify="middle"
                        className={`menu menu-${value} ${isChecked ? 'checked' : ''}`}
                        key={value}
                        onClick={changeMenuLevel.bind(this, value)}>
                        <span className="menu-icon" />
                        {label}
                        {isChecked && <span className="icon-checked-wrap" />}
                    </Row>
                );
            })}
        </Row>
    );
};
