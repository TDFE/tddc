import { WrapLocaleReceiver } from '../../../I18N';
import { useContext } from 'react';
import { get } from 'lodash';
import cn from 'classnames';

import './index.less';

import { ThemeContext } from '../../Context';
import Iconfont from '../../Icon';
import { setLanguageStore } from '../../storage';

const languages = (I18N) => [
  { value: 'cn', name: I18N.language.index.zhongWen },
  { value: 'en', name: 'EN ' },
];
const languagesMap = (I18N) =>
  languages(I18N).reduce((acc, cur) => {
    acc[cur.value] = cur;
    return acc;
  }, {});

export default WrapLocaleReceiver((props) => {
  const { onLanguageChange, size, I18N, localeCode } = props;

  const large = size === 'large' ? 60 : 50;

  const { handleLanguage } = useContext(ThemeContext);

  const switchLanguage = () => {
    const lang = localeCode === 'cn' ? 'en' : 'cn';

    handleLanguage(lang);
    setLanguageStore(lang);
    onLanguageChange && onLanguageChange(lang);
  };

  return (
    <div className={cn('tnt-layout-header-language', `large${large}`)} onClick={switchLanguage}>
      <Iconfont type={`flag-${localeCode}`} />
      <span>{get(languagesMap(I18N)[localeCode], 'name')}</span>
    </div>
  );
});
