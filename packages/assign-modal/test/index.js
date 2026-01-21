import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, message, Radio } from 'tntd';
import AssignModal from '../src';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const Demo = () => {
  const [visible, setVisible] = useState(false);

  // 机构列表（树形结构）
  const orgList = [
    {
      uuid: 'org-1',
      code: 'ROOT',
      name: '总公司',
      level: 1,
      children: [
        {
          uuid: 'org-2',
          code: 'BRANCH_A',
          name: '分公司A',
          level: 2,
          children: [],
        },
      ],
    },
  ];

  // 应用列表
  const appList = [
    { uuid: 'app-1', name: 'APP1', value: 'APP1', label: '应用系统1' },
    { uuid: 'app-2', name: 'APP2', value: 'APP2', label: '应用系统2' },
  ];

  // 用户列表（可选）
  const userList = [
    { uuid: 'user-1', account: 'user1', userName: '用户A', orgCode: 'ROOT' },
    { uuid: 'user-2', account: 'user2', userName: '用户B', orgCode: 'BRANCH_A' },
  ];

  // 授权数据
  const dataItem = {
    orgCode: 'ROOT',
    appCode: 'APP1',
    account: 'user1',
    orgCodes: ['ROOT'],
    appCodes: ['APP1'],
    accounts: ['user1'],
  };

  const handleSubmit = (data) => {
    console.log('授权数据:', data);
    message.success('授权成功');
    setVisible(false);
  };

  return (
    <>
      <Button onClick={() => setVisible(true)}>配置权限</Button>
      {/* 切换语言 */}
      <Radio.Group onChange={(e) => cookies.set('lang', e.target.value)}>
        <Radio value="zh-cn">中文</Radio>
        <Radio value="en">English</Radio>
      </Radio.Group>
      <AssignModal
        visible={visible}
        title="权限配置"
        orgList={orgList}
        appList={appList}
        userList={userList}
        dataItem={dataItem}
        showUser={true}
        onSubmit={handleSubmit}
        close={() => setVisible(false)}
      />
    </>
  );
};

ReactDOM.render(<Demo />, document.getElementById('app'));
