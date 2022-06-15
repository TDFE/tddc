import { createContext } from 'react';

export const ThemeContext = createContext({
    theme: 'default',
    language: 'cn',
    menuLevel: '3',
    handleTheme: () => {},
    handleLanguage: () => {},
    handleMenuLevel: () => {}
});
export const AuthContext = createContext(() => true);
