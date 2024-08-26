import { Drawer } from 'tntd';
import { useState } from 'react';

import AssignApp from './AssignApp';
import './index.less';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const AssignModal = (props) => {
  const { visible, close, disabled, title = '', onSubmit, ...restProps } = props;
  const [assignData, setAssignData] = useState({});

  const submit = () => {
    onSubmit(assignData);
  };

  return (
    <Drawer
      className="modal-assign"
      title={title}
      visible={visible}
      width={700}
      onCancel={close}
      onOk={submit}
      maskClosable={disabled}
      destroyOnClose
      showFooter={!disabled}
      okButtonProps={{ disabled }}
    >
      <AssignApp
        onChange={(data) => {
          setAssignData(data);
        }}
        disabled={disabled}
        lang={props?.lang || cookies.get('lang') || 'cn'}
        {...restProps}
      />
    </Drawer>
  );
};

export default AssignModal;
