import { Drawer } from 'tntd';
import { useState } from 'react';

import AssignApp from './AssignApp';
import './index.less';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const AssignModal = (props) => {
  const {
    visible,
    close,
    disabled = false,
    title = '',
    onSubmit,
    locale,
    okText = '确定',
    cancelText = '取消',
    ...restProps
  } = props;
  const [assignData, setAssignData] = useState({});

  const submit = () => {
    onSubmit(assignData);
  };

  return (
    <Drawer
      className="modal-assign"
      title={title}
      visible={visible}
      width={900}
      onCancel={close}
      onOk={submit}
      // okText={okText}
      // cancelText={cancelText}
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
        locale={locale}
        {...restProps}
      />
    </Drawer>
  );
};

export default AssignModal;
