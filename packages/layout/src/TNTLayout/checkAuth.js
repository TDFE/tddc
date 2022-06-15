import { get } from 'lodash';

export default menus => {
    const getAuthMap = (menus = [], authMap = {}) => {
        return menus.reduce(
            (acc, { code, groupName, functionList, children }) => {
                if (groupName) {
                    return getAuthMap(children, acc);
                } else {
                    acc[code] = acc[code] || {};
                    acc[code] = (functionList || []).reduce((acc, curFunc) => {
                        acc[curFunc.code] = curFunc.hasPermission;
                        return acc;
                    }, acc[code]);

                    return acc;
                }
            },
            authMap
        );
    };
    const authMap = getAuthMap(menus);

    return (menuCode, funCode) => !!get(authMap, `${menuCode}${funCode ? `.${funCode}` : ''}`);
};
