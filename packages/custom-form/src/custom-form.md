---
title: 动态增删表单
group:
  path: /
nav:
  title: 组件
  path: /components
---

### 安装和初始化

```
npm install @tddc/custom-form --save
```

### 二层级动态增删表单

```jsx
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input, Icon } from 'antd';
import CustomForm from '@tddc/custom-form';

const data = [
  {
    score: 10,
    name: '浙江',
    children: [
      {
        score: 5,
        name: '杭州',
      },
      {
        score: 5,
        name: '宁波',
      },
    ],
  },
  {
    score: 20,
    name: '江苏',
    children: [
      {
        score: 10,
        name: '南京',
      },
      {
        score: 10,
        name: '苏州',
      },
    ],
  },
];

const Demo = () => {
  const [initialValues, setInitialValues] = useState([]);
  const [form] = CustomForm.useForm();

  useEffect(() => {
    setTimeout(() => {
      setInitialValues(data);
    }, 100);
  }, []);

  const handleSave = () => {
    form.validateFields().then((values) => {
      console.log(values, 'values');
    });
  };

  return (
    <CustomForm form={form} initialValues={{ content: initialValues }}>
      <CustomForm.List name="content">
        {(fields, { add, remove }) => {
          return (
            <div className="content-wrapper">
              {fields.map(({ key, name: fName }, fIndex) => {
                return (
                  <Row key={key} style={{ marginBottom: 15 }}>
                    <Col span={4}>
                      <CustomForm.Item
                        name={[fName, 'name']}
                        rules={[
                          {
                            required: true,
                            message: '请输入请输入请输入请输入请输入请输入请输入',
                          },
                          {
                            validator: (rules, value, callback) => {
                              if (value.length > 20) {
                                return callback('20个字符');
                              }

                              return callback();
                            },
                          },
                        ]}
                      >
                        <Input placeholder="第一层name" />
                      </CustomForm.Item>
                    </Col>
                    <Col span={4}>
                      <CustomForm.Item
                        name={[fName, 'score']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                        ]}
                      >
                        <Input placeholder="第一层分数" />
                      </CustomForm.Item>
                    </Col>

                    <Col span={2}>
                      <Icon type="plus-circle" onClick={() => add(fIndex)} />
                      <Icon type="delete" onClick={() => remove(fIndex)} />
                    </Col>

                    <Col span={12}>
                      <CustomForm.List name={[fName, 'children']}>
                        {(sFields, { add: sAdd, remove: sRemove }) => {
                          return (
                            <div style={{ display: 'flex', flexFlow: 'nowrap column' }}>
                              {sFields.map(({ key: sKey, name: sName }, sIndex) => {
                                return (
                                  <Row key={sKey}>
                                    <Col span={10}>
                                      <CustomForm.Item
                                        name={[sName, 'name']}
                                        rules={[
                                          {
                                            required: true,
                                            message: '请输入',
                                          },
                                        ]}
                                      >
                                        <Input placeholder="第二层name" />
                                      </CustomForm.Item>
                                    </Col>
                                    <Col span={10}>
                                      <CustomForm.Item
                                        name={[sName, 'score']}
                                        rules={[
                                          {
                                            required: true,
                                            message: '请输入',
                                          },
                                        ]}
                                      >
                                        <Input placeholder="第二层分数" />
                                      </CustomForm.Item>
                                    </Col>
                                    <Col span={4}>
                                      <Icon type="plus-circle" onClick={() => sAdd(sIndex)} />
                                      <Icon type="delete" onClick={() => sRemove(sIndex)} />
                                    </Col>
                                  </Row>
                                );
                              })}
                            </div>
                          );
                        }}
                      </CustomForm.List>
                    </Col>
                  </Row>
                );
              })}

              <Button onClick={handleSave} style={{ marginRight: 8 }}>
                提交
              </Button>
            </div>
          );
        }}
      </CustomForm.List>
    </CustomForm>
  );
};

export default Demo;
```

#### 🚀 `入参`

| 参数          | 说明                       | 类型                | 默认值 |
| ------------- | -------------------------- | ------------------- | ------ |
| list          | 后端返回的数据 key/value   | Array<label, value> | []     |
| labelFontSize | 标题的 font-size           | String              | 12px   |
| valueFontSize | 值的 font-size             | String              | 14px   |
| itemSpace     | 每一项之间自定义调整的宽度 | Number              | 8      |
| maxColumn     | 最多有几列                 | Number              | 10     |
