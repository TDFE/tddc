import { useState, useEffect } from 'react';
import { Select } from 'antd';

import './index.less';

import { getCurrentAppStore, setCurrentAppStore } from '../../storage';

const { Option } = Select;

export default (props) => {
    const { appList = [], onAppChange } = props;

    const getInitialSelectedApp = () => {
        const currentAppStore = getCurrentAppStore();
        let temp = appList[0];
        const findAppByKey = (selectedKey) => {
            let findApp;

            for (let index = 0; index < appList.length; index++) {
                const item = appList[index];
                if (item.key === selectedKey) {
                    findApp = item;
                    break;
                }
            }

            return findApp;
        };
        if (currentAppStore.name) {
            const curApp = findAppByKey(currentAppStore.key);
            if (curApp) {
                temp = currentAppStore;
            } else {
                setCurrentAppStore(temp);
            }
        }

        return temp;
    };

    const [selectedApp, setSelectedApp] = useState({});
    const { key } = selectedApp || {};

    const handleChangeApp = (app) => {
        if (key !== app.key) {
            setSelectedApp(app);
            setCurrentAppStore(app);
            onAppChange && onAppChange(app);
        }
    };

    useEffect(() => {
        if (appList.length > 1) {
            setSelectedApp(getInitialSelectedApp());
        }
    }, [appList]);

    return (
        <div className="tnt-layout-header-app-select">
            <Select
                placeholder="请选择"
                showSearch
                optionFilterProp="children"
                value={key}
                onChange={(appKey, e) => {
                    handleChangeApp(e.props.item);
                }}
                style={{ minWidth: 160, height: 28, lineHeight: 28 }}>
                {appList.map((item) => (
                    <Option key={item.key} value={item.key} item={item}>
                        {item.name}
                    </Option>
                ))}
            </Select>
        </div>
    );
};
