import { WrapLocaleReceiver } from '../../../I18N';
import { useContext } from 'react';
import { Row } from 'tntd';

import './index.less';

import { setThemeStore } from '../../storage';
import { ThemeContext } from '../../Context';

const themes = (I18N) => [
  { value: 'themeS3', label: I18N.theme.index.keJiLan },
  { value: 'themeS2', label: I18N.theme.index.anYeHei },
  { value: 'themeS1', label: I18N.theme.index.jiZhiBai },
];

export default WrapLocaleReceiver((props) => {
  const { onThemeChange, I18N } = props;

  const { theme, handleTheme } = useContext(ThemeContext);

  const changeTheme = (theme) => {
    handleTheme(theme);
    setThemeStore(theme);
    onThemeChange && onThemeChange(theme);
  };

  return (
    <Row type="flex" justify="space-between" className="user-info-body-theme-row">
      {themes(I18N).map(({ value, label }) => (
        <div className={value} onClick={changeTheme.bind(this, value)} key={value}>
          {label}
          {theme === value && <span className="icon-checked-wrap" />}
        </div>
      ))}
    </Row>
  );
});
