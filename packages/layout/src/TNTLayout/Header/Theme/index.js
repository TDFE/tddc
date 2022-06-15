import { useContext } from 'react';
import { Row } from 'antd';

import './index.less';

import { setThemeStore } from '../../storage';
import { ThemeContext } from '../../Context';

const themes = [
    { value: 'themeS3', label: '科技蓝' },
    { value: 'themeS2', label: '暗夜黑' },
    { value: 'themeS1', label: '极致白' }
];

export default props => {
    const { onThemeChange } = props;

    const { theme, handleTheme } = useContext(ThemeContext);

    const changeTheme = theme => {
        handleTheme(theme);
        setThemeStore(theme);
        onThemeChange && onThemeChange(theme);
    };

    return (
        <Row type="flex" justify="space-between" className="user-info-body-theme-row">
            {
                themes.map(({ value, label }) => (
                    <div className={value} onClick={changeTheme.bind(this, value)}>
                        {label}
                        {
                            theme === value &&
                            <span className="icon-checked-wrap"></span>
                        }
                    </div>
                ))
            }
        </Row>
    );
};
