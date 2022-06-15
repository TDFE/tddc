import { useContext } from 'react';

import './index.less';

import { ThemeContext } from '../Context';
import { logoImgMap } from '../images';

const getStrLen = (str = '') => {
    let len = 0;

    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        let chartLength = 2;

        // 单字节加1
        if ((c >= 0x0001 && c <= 0x007e) || (c >= 0xff60 && c <= 0xff9f)) {
            chartLength = 1;
        }

        len += chartLength;
    }

    return len;
};

const Logo = props => {
    const { logo, name, enName, size, siderWidth, collapsed } = props;

    const { language } = useContext(ThemeContext);

    const productNameLen = getStrLen(language === 'cn' ? name : enName);

    const fontSize = {
        12: 19,
        13: 18,
        14: 17,
        15: 16,
        16: 15
    }[Math.max(12, Math.min(productNameLen, 16))] + (size === 'large' ? 1 : 0);

    const LogoImg = props => (
        <img
            onError={e => {
                e.target.onerror = null;
                e.target.src = logoImgMap.default;
            }}
            {...props}
        />
    );

    return (
        <div className="tnt-layout-logo" style={{fontSize, width: siderWidth}}>
            {
                typeof logo === 'string' ? (
                    <LogoImg src={logoImgMap[logo] || logoImgMap.default} />
                ) : (
                    (logo && logo.type === 'img') ? (
                        <LogoImg {...logo.props} src={logo.props?.src || logoImgMap.default} />
                    ) : logo
                )
            }
            {
                collapsed ? '' : {
                    cn: name,
                    en: enName
                }[language]
            }
        </div>
    );
};

export default Logo;
