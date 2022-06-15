import { useRef } from 'react';
import { Layout } from 'antd';
const { Header: AntdHeader } = Layout;

import './index.less';

import Icon from '../Icon';
import Actions from './Actions';
import AppList from './AppList';
import OrgAppList from './OrgAppList';

export default props => {
        const { orgList, appList, headerTabs } = props;

        const headerRef = useRef();

        return (
            <div className="tnt-layout-header" ref={headerRef}>
                 {headerTabs}
                {
                    orgList && (
                        <OrgAppList {...props} />
                    )
                }

                {
                    appList &&
                    !orgList && (
                        <AppList {...props} />
                    )
                }
                <Actions {...props} headerRef={headerRef} />
            </div>
        );
    };
