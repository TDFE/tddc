import { useState, useEffect } from 'react';
import { Input, Select, TreeSelect } from 'antd';

import './index.less';

import { getCurrentAppStore, setCurrentAppStore, getCurrentOrgStore, setCurrentOrgStore } from '../../storage';
import { traverseTree } from '../../utils';

const { Group: InputGroup } = Input;
const { Option } = Select;

export default (props) => {
    const { orgAppShow, orgList, onOrgChange, orgAppList = [], onAppChange } = props;

    const orgListFormatData = traverseTree([orgList], (item) => {
        item.title = item.name;
        item.value = item.uuid;
        item.key = item.uuid;
    });

    const getInitialSelectedOrg = () => {
        const currentOrgStore = getCurrentOrgStore();
        let temp = orgListFormatData[0];
        const findOrgByKey = (selectedKey) => {
            let curOrg;

            traverseTree(orgListFormatData, (item) => {
                if (item.key === selectedKey) {
                    curOrg = item;
                    return false;
                }
            });

            return curOrg;
        };
        if (currentOrgStore.name) {
            const curOrg = findOrgByKey(currentOrgStore.key);
            if (curOrg) {
                temp = currentOrgStore;
            } else {
                setCurrentOrgStore(temp);
            }
        }
        return temp;
    };

    const getInitialSelectedApp = () => {
        const currentAppStore = getCurrentAppStore();
        let temp = orgAppList[0];
        const findAppByKey = (selectedKey) => {
            let findApp;

            for (let index = 0; index < orgAppList.length; index++) {
                const item = orgAppList[index];
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

    useEffect(() => {
        if (orgAppList.length) {
            setSelectedApp(getInitialSelectedApp());
        }
    }, [orgAppList]);

    const [selectedOrg, setSelectedOrg] = useState(getInitialSelectedOrg());
    const [selectedApp, setSelectedApp] = useState({});

    const { key: orgKey } = selectedOrg || {};
    const { key: appKey = '' } = selectedApp || {};

    const handleChangeApp = (app) => {
        if (appKey !== app.key) {
            setSelectedApp(app);
            setCurrentAppStore(app);
            onAppChange && onAppChange(app);
        }
    };

    // org变化事件
    const handleChangeOrg = (org = {}) => {
        setSelectedOrg(org);
        setCurrentOrgStore(org);
        handleChangeApp(orgAppList[0]);
        onOrgChange && onOrgChange(org);
    };

    return (
        <div className="tnt-layout-header-org-app">
            <InputGroup compact>
                <TreeSelect
                    placeholder="选择机构"
                    searchPlaceholder="机构名称"
                    treeNodeFilterProp="title"
                    showSearch
                    treeData={orgListFormatData}
                    treeDefaultExpandAll
                    style={{ width: orgAppShow ? 130 : 160, height: 28, lineHeight: 28 }}
                    dropdownStyle={{ maxHeight: 300, overflow: 'auto', width: 320 }}
                    dropdownClassName="org-tree-select"
                    onChange={(orgKey, labels, item) => {
                        const curItem = item.triggerNode.props;
                        const findItem = {
                            uuid: orgKey,
                            name: curItem.name,
                            key: orgKey,
                            code: curItem.code
                        };
                        handleChangeOrg(findItem);
                    }}
                    value={orgKey}
                />
                {orgAppShow && (
                    <Select
                        placeholder="请选择"
                        className="org-app-select"
                        showSearch
                        optionFilterProp="children"
                        onChange={(appKey, e) => {
                            handleChangeApp(e.props.item);
                        }}
                        value={appKey}
                        style={{ width: 130, height: 28, lineHeight: 28 }}>
                        {orgAppList.map((item) => (
                            <Option key={item.key} value={item.key} item={item}>
                                {item.name}
                            </Option>
                        ))}
                    </Select>
                )}
            </InputGroup>
        </div>
    );
};
