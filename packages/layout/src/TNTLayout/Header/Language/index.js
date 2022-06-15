import { useContext } from 'react';
import { get } from 'lodash';
import cn from 'classnames';

import './index.less';

import { ThemeContext } from '../../Context';
import Iconfont from '../../Icon';
import { setLanguageStore } from '../../storage';

const languages = [
    { value: 'cn', name: '中文' },
    { value: 'en', name: 'EN ' }
];
const languagesMap = languages.reduce((acc, cur) => {
    acc[cur.value] = cur;
    return acc;
}, {});

export default props => {
    const { onLanguageChange, size } = props;

    const large = size === 'large' ? 60 : 50;

    const { language, handleLanguage } = useContext(ThemeContext);

    const switchLanguage = () => {
        const lang = language === 'cn' ? 'en' : 'cn';

        handleLanguage(lang);
        setLanguageStore(lang);
        onLanguageChange && onLanguageChange(lang);
    };

    return (
        <div className={cn('tnt-layout-header-language', `large${large}`)} onClick={switchLanguage}>
            <Iconfont type={`flag-${language}`} />
            <span>
                {get(languagesMap[language], 'name')}
            </span>
        </div>
    );
};
