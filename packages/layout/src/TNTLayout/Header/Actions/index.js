import { Divider } from 'antd';

import './index.less';

import GlobalNavigation from '../GlobalNavigation';
import Avatar from '../Avatar';

export default props => {
    const {
        config: { avatar = true,  globalNavigation = true } = {},
        menus,
        headerRef,
        extraHeaderActions,
        AvatarCustom
    } = props;

    return (
        <div className="tnt-layout-header-actions">
            <div className="empty"></div>
            {extraHeaderActions}
            {
                globalNavigation && (
                    <GlobalNavigation
                        {...props}
                        headerRef={headerRef}
                        menus={menus}
                    />
                )
            }
            {
                avatar && (
                    <>
                        <Divider type="vertical" />
                        {
                            AvatarCustom ? <AvatarCustom
                                {...props}
                                config={{
                                    theme,
                                    language
                                }}
                            /> : <Avatar {...props} />
                        }
                    </>
                )
            }
        </div>
    );
};
