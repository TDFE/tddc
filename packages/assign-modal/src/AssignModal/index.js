import { Modal } from 'antd';
import { useState } from 'react';

import AssignApp from './AssignApp';
import './index.less';

const AssignModal = (props) => {
  const { visible, orgList, dataItem = {}, close, disabled, title = '', onSubmit, appList } = props;
  const [assignData, setAssignData] = useState({});

  const submit = () => {
    onSubmit(assignData);
  };

  return (
    <Modal
      className="modelTool-assign"
      title={title}
      visible={visible}
      width={'60%'}
      onCancel={close}
      onOk={submit}
      maskClosable={false}
      destroyOnClose
      okButtonProps={{ disabled }}
    >
      <AssignApp
        dataItem={dataItem}
        orgList={orgList}
        appList={appList}
        onChange={(data) => {
          setAssignData(data);
        }}
        disabled={disabled}
      />
    </Modal>
  );
};

export default AssignModal;

export { AssignApp };
