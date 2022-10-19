// 数据加工
import { useEffect } from 'react';
import { Modal, Button, Select, Input, Form } from 'antd';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};
export default Form.create({ name: 'data_process' })((props) => {
  const { form, onCancel, dmConfig = {}, dialogShowInfo, editor, disabled } = props;
  const { dataMachine = [] } = dmConfig || {};
  const { getFieldDecorator, setFieldsValue, resetFields, validateFields } = form;
  const { type, nodeId } = dialogShowInfo || {};
  const visible = type === 'DecisionToolServiceNode';
  useEffect(() => {
    if (visible) {
      initData();
    }
  }, [type]);

  const initData = async () => {
    await resetFields();
    const { data } = editor.schema.data.nodesMap[nodeId];
    setFieldsValue(data || {});
  };

  const commitModal = () => {
    validateFields((errors, data) => {
      if (!errors) {
        const { nodeName } = data || {};
        editor.schema.data.nodesMap[nodeId].name = nodeName;
        editor.schema.data.nodesMap[nodeId].data = data;
        editor.graph.node.nodes[nodeId].shape.select('text.flow-txt-node').node.innerHTML =
          nodeName.length > 6 ? nodeName.substring(0, 6) + '...' : nodeName;
        onCancel();
      }
    });
  };

  const footerDom = [
    <Button onClick={onCancel} key="cancel">
      取消
    </Button>,
    <Button type="primary" onClick={commitModal} key="ok">
      确定
    </Button>,
  ];
  const footerCancelDom = [
    <Button onClick={onCancel} key="cancel">
      关闭
    </Button>,
  ];
  return (
    <Modal
      title="数据加工"
      visible={visible}
      maskClosable={false}
      zIndex={1002}
      width={600}
      onCancel={onCancel}
      footer={disabled ? footerCancelDom : footerDom}
    >
      <Form {...formItemLayout}>
        <Form.Item label="节点名称">
          {getFieldDecorator('nodeName', {
            rules: [
              {
                required: true,
                message: '请输入节点名称',
              },
              {
                max: 50,
                message: '最多50个字符',
              },
              {
                pattern: /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,
                message: '节点名称只支持中英文、数字、下划线的输入组合',
              },
            ],
          })(<Input placeholder="请输入节点名称" disabled={disabled} />)}
        </Form.Item>
        <Form.Item label="数据加工任务">
          {getFieldDecorator('dataProcessId', {
            rules: [
              {
                required: true,
                message: '请选择数据加工任务',
              },
            ],
          })(
            <Select
              isVirtual
              placeholder="请选择数据加工任务"
              allowClear
              optionFilterProp="children"
              showSearch
              disabled={disabled}
            >
              {[
                {
                  id: 'zzf',
                  name: '周泽飞',
                },
                {
                  id: 'fmk',
                  name: '放光明',
                },
              ]?.map((item) => {
                return (
                  <Option key={item?.id} value={item?.id}>
                    {item?.name}
                  </Option>
                );
              })}
            </Select>,
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
});
