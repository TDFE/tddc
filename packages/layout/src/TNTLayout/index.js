import { useState, useEffect } from 'react';

import './index.less';

import { ThemeContext, AuthContext } from './Context';
import getCheckAuth from './checkAuth';
import HeaderTabs from './Tabs';
import { findMenuInfoByPath, formatLevel2Menu, hasLevel3 } from './utils';

import Layout from './Layout';

import { getThemeStore, getLanguageStore, getMenuLevelStore } from './storage';

export const HeaderActionItem = (props) => <div {...props}>{props.children}</div>;

const TNTLayout = (props) => {
    const { userInfo = {}, extendMap = {}, menus = [] } = props;
    const [level2Menus, setLevel2Menus] = useState([]);
    const [supportLevelChange, setSupportLevelChange] = useState(false);

    let theme = getThemeStore() || extendMap?.defaultTheme || userInfo.theme || 'themeS3';
    theme = theme === 'default' ? 'themeS3' : theme;
    const language = getLanguageStore() || userInfo.lang || 'cn';

    const menuLevel = getMenuLevelStore() || '3';

    const [curTheme, setCurTheme] = useState(theme);
    const [curLanguage, setCurLanguage] = useState(language);
    const [curMenuLevel, setCurMenuLevel] = useState(menuLevel);

    const handleTheme = (value) => {
        setCurTheme(value);
    };
    const handleLanguage = (value) => {
        setCurLanguage(value);
    };
    const handleMenuLevel = (value) => {
        setCurMenuLevel(value);
    };

    useEffect(() => {
        if (menus?.length && hasLevel3(menus)) {
            setLevel2Menus(formatLevel2Menu(menus));
            setSupportLevelChange(true);
        } else {
            setSupportLevelChange(false);
        }
    }, [menus]);
    return (
        <ThemeContext.Provider
            value={{
                theme: curTheme,
                handleTheme,
                language: curLanguage,
                handleLanguage,
                menuLevel,
                handleMenuLevel
            }}>
            <AuthContext.Provider value={getCheckAuth(menus)}>
                <Layout
                    {...props}
                    menus={curMenuLevel === '2' && level2Menus?.length ? level2Menus : menus}
                    supportLevelChange={supportLevelChange}
                />
            </AuthContext.Provider>
        </ThemeContext.Provider>
    );
};

TNTLayout.HeaderActionItem = HeaderActionItem;
TNTLayout.ThemeContext = ThemeContext;
TNTLayout.AuthContext = AuthContext;
TNTLayout.HeaderTabs = HeaderTabs;

TNTLayout.findMenuInfoByPath = findMenuInfoByPath;
export default TNTLayout;
