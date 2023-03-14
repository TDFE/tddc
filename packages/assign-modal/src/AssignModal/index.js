import { Modal } from 'antd';
import { useState } from 'react';

import AssignApp from './AssignApp';
import './index.less';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const AssignModal = (props) => {
  const {
    visible,
    orgList,
    dataItem = {},
    close,
    disabled,
    title = '',
    onSubmit,
    appList,
    ...restProps
  } = props;
  const [assignData, setAssignData] = useState({});

  const submit = () => {
    onSubmit(assignData);
  };

  return (
    <Modal
      className="modelTool-assign"
      title={title}
      visible={visible}
      width={'65%'}
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
        lang={props?.lang || cookies.get('lang') || 'cn'}
        {...restProps}
      />
    </Modal>
  );
};

export default AssignModal;

export { AssignApp };
