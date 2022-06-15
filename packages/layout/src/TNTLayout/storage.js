import { safeParseJSON } from './utils';

export const getSideMenuStore = () => safeParseJSON(localStorage.getItem('sideMenu'), {});
export const setSideMenuStore = (params = {}) => {
    localStorage.setItem(
        'sideMenu',
        JSON.stringify({
            ...getSideMenuStore(),
            ...params
        })
    );
};

export const setCurrentAppStore = (currentApp = {}) => {
    localStorage.setItem('currentApp', JSON.stringify(currentApp));
};
export const getCurrentAppStore = () => safeParseJSON(localStorage.getItem('currentApp'), {});

export const setCurrentOrgStore = (currentOrg = {}) => {
    localStorage.setItem('currentOrg', JSON.stringify(currentOrg));
};
export const getCurrentOrgStore = () => safeParseJSON(localStorage.getItem('currentOrg'), {});

export const setLanguageStore = (lang) => localStorage.setItem('lang', lang);
export const getLanguageStore = () => localStorage.getItem('lang');

export const setThemeStore = (theme) => localStorage.setItem('theme', theme);
export const getThemeStore = () => localStorage.getItem('theme');

export const setMenuLevelStore = (menuLevel) => localStorage.setItem('menuLevel', menuLevel);
export const getMenuLevelStore = () => localStorage.getItem('menuLevel');
