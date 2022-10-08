---
title: 自定义表头
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/set-table-header --save
```

### 说明
- 自定义表头设置

### 自定义表头demo

```jsx
import React, { useState } from 'react';
import { Tooltip, Select, Modal, Icon } from 'antd';
import SetTableHeader from '@tddc/set-table-header';
import { omit } from 'lodash';

const { Option } = Select;

const allTableHead = [ 
  {
    "fieldName" : "客户编号",
    "field" : "S_S_CUSTNO",
    "enFieldName" : "Account",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "客户名称",
    "field" : "S_S_CUSTNAME",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "账户当前风险评级",
    "field" : "C_S_ACCTCURRRATING",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "账户当前评级更新时间",
    "field" : "C_S_ACCTCURRTIME",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "交易账号",
    "field" : "S_S_ACCTNO",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "机构编号",
    "field" : "S_S_ORGCODE",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "账户本期风险评级",
    "field" : "C_S_CURRPERIODRATING",
    "fieldType" : "ENUM"
  }, 
  {
    "fieldName" : "账户本期评级时间",
    "field" : "C_S_ACCTCURRPERIODTIME",
    "fieldType" : "STRING"
  }, 
  {
    "fieldName" : "风险标签",
    "field" : "S_S_RISKLABEL",
    "fieldType" : "ENUM"
  }, 
  {
    "fieldName" : "账户管控措施",
    "field" : "C_S_CONTROLMEASURE",
    "fieldType" : "ENUM"
  }, 
  {
    "fieldName" : "客户类型",
    "field" : "S_E_CUSTTYPE",
    "fieldType" : "ENUM"
  }
]

const currentTableHead = [ 
 {
    "fieldName" : "机构编号",
    "field" : "S_S_ORGCODE",
    "fieldType" : "STRING"
  },
  {
    "fieldName" : "客户编号",
    "field" : "S_S_CUSTNO",
    "enFieldName" : "Account",
    "fieldType" : "STRING"
  },
  {
    "fieldName" : "账户管控措施",
    "field" : "C_S_CONTROLMEASURE",
    "fieldType" : "ENUM"
  }, 
  {
    "fieldName" : "客户类型",
    "field" : "S_E_CUSTTYPE",
    "fieldType" : "ENUM"
  }
]

const defaultTableHead = [
  {
    "fieldName" : "机构编号",
    "field" : "S_S_ORGCODE",
    "fieldType" : "STRING"
  },
  {
    "fieldName" : "客户编号",
    "field" : "S_S_CUSTNO",
    "enFieldName" : "Account",
    "fieldType" : "STRING"
  },
  {
    "fieldName" : "账户管控措施",
    "field" : "C_S_CONTROLMEASURE",
    "fieldType" : "ENUM"
  }
]

const Demo = () => {
  const [customModal, setCustomModal] = useState({
    visible: false
  });

  const renderItem = (item) => {
    return (
      <Option key={item.field} item={item} value={item.field}>
          {item.fieldName}
        </Option>
      )
  }

  const onSetDefault = () => {
    return []
  }

  const onOk = async () => {}

  const handleSetCustomHead = () => {
    setCustomModal({
      visible: true,
      width: 600,
      footer: null,
      title: '表头设置',
      Content: <SetTableHeader {...{ renderItem, allTableHead,  currentTableHead, defaultTableHead, onSetDefault, onCancel: handleCloseModal, onOk }} />
    });
  }

  const handleCloseModal = () => {
    setCustomModal({ visible: false });
  };

  return (
    <>
      <Tooltip title="定制表头">
        <Icon type="setting"  onClick={handleSetCustomHead} />
      </Tooltip>
      <Modal
          {...{
              width: 580,
              destroyOnClose: true,
              bodyStyle: {
                  paddingBottom: 0
              },
              maskClosable: false,
              onCancel: handleCloseModal
          }}
          {...omit(customModal, 'Content')}>
          {customModal.Content}
      </Modal>
    </>
  );
};

export default Demo;
```

#### 🚀 `入参`

| 参数 | 说明 | 类型 | 默认值 | 是否必填 |
| --- | --- | --- | --- | --- |
| allTableHead | table的所有列 | Array<field, fieldName> | [] | 是 |
| currentTableHead | 当前选中的列 | Array<field, fieldName> | [] | 是 |
| defaultTableHead | 默认选中的列,用于点击默认列 | Array<field, fieldName> | [] | 和onSetDefault必须有一个 |
| onSetDefault | 选中默认列后的回调 | Promise<field, fieldName>[] | async () => [] | 和defaultTableHead必须有一个 |
| renderItem | 每一项的渲染 | FN | (item) => <div> key={item.field} item={item} value={item.field}>{item.fieldName}</div> | 否 |
| onCancel | 取消弹窗的回调 | FN | () => { } | 否 |
| onOk | 点击确认后的回调 | Promise | async () => {} | 否 |
