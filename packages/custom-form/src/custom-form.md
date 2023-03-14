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

### 多层动态增删表单

```jsx
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input, Icon } from 'antd';
import CustomForm from '@tddc/custom-form';
import 'antd/dist/antd.css';

const data = [
  {
    id: 'zhejiang',
    name: '浙江',
    children: [
      {
        id: 'hangzhou',
        name: '杭州',
      },
      {
        id: 'ningbo',
        name: '宁波',
      },
    ],
  },
  {
    id: 'jiangsu',
    name: '江苏',
    children: [
      {
        id: 'nanjing',
        name: '南京',
      },
      {
        id: 'suzhou',
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
                            message: '请输入',
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
                        name={[fName, 'id']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                        ]}
                      >
                        <Input placeholder="第一层id" />
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
                                        name={[sName, 'id']}
                                        rules={[
                                          {
                                            required: true,
                                            message: '请输入',
                                          },
                                        ]}
                                      >
                                        <Input placeholder="第二层id" />
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

### shouldUpdate,当设置为 true 的时候表单的任意值改动的时候都会触发该单元格 render

```jsx
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input, InputNumber, Icon } from 'antd';
import CustomForm from '@tddc/custom-form';
import 'antd/dist/antd.css';

const data = [
  {
    score: 10,
    name: '数学',
  },
  {
    score: 20,
    name: '语文',
  },
];

const ScoreSum = ({ form, value }) => {
  const { content } = form.getFieldsValue() || {};

  return (
    <div>
      总分：
      {form.getFieldsValue()?.content?.reduce((total, item) => {
        return total + (isNaN(Number(item.score)) ? 0 : Number(item.score));
      }, 0)}
    </div>
  );
};

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
      <CustomForm.Item shouldUpdate>
        <ScoreSum {...{ form }} />
      </CustomForm.Item>
      <CustomForm.List name="content">
        {(fields, { add, remove }) => {
          return (
            <div className="content-wrapper">
              {fields.map(({ key, name }, index) => {
                return (
                  <Row key={key} style={{ marginBottom: 15 }}>
                    <Col span={4}>
                      <CustomForm.Item
                        name={[name, 'name']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                          {
                            validator: (rules, value, callback) => {
                              if (value.length > 5) {
                                return callback('5个字符');
                              }

                              return callback();
                            },
                          },
                        ]}
                      >
                        <Input placeholder="name" />
                      </CustomForm.Item>
                    </Col>
                    <Col span={4}>
                      <CustomForm.Item
                        name={[name, 'score']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                        ]}
                      >
                        <InputNumber placeholder="得分" />
                      </CustomForm.Item>
                    </Col>

                    <Col span={2}>
                      <Icon type="plus-circle" onClick={() => add(index)} />
                      <Icon type="delete" onClick={() => remove(index)} />
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

### dependencies,当依赖的字段更新时候，该字段也会同步更新

```jsx
import React, { useState, useEffect } from 'react';
import { Button, Row, Col, Input, InputNumber, Icon } from 'antd';
import CustomForm from '@tddc/custom-form';
import 'antd/dist/antd.css';

const data = [
  {
    score: 10,
    name: '数学',
    tt: 11,
  },
  {
    score: 20,
    name: '语文',
    tt: 2,
  },
];

const Score = ({ form, value, onChange }) => {
  console.log('依赖修改,触发render了');

  return <InputNumber value={value} onChange={onChange} placeholder="得分" />;
};

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
              {fields.map(({ key, name }, index) => {
                return (
                  <Row key={key} style={{ marginBottom: 15 }}>
                    <Col span={4}>
                      <CustomForm.Item
                        name={[name, 'name']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                          {
                            validator: (rules, value, callback) => {
                              if (value.length > 5) {
                                return callback('5个字符');
                              }

                              return callback();
                            },
                          },
                        ]}
                      >
                        <Input placeholder="name" />
                      </CustomForm.Item>
                    </Col>
                    <Col span={4}>
                      <CustomForm.Item
                        dependencies={[[name, 'name']]}
                        name={[name, 'score']}
                        rules={[
                          {
                            required: true,
                            message: '请输入',
                          },
                        ]}
                      >
                        <Score />
                      </CustomForm.Item>
                    </Col>
                    <Col span={2}>
                      <Icon type="plus-circle" onClick={() => add(index)} />
                      <Icon type="delete" onClick={() => remove(index)} />
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

- CustomForm

| 参数          | 说明           | 类型       | 默认值 |
| ------------- | -------------- | ---------- | ------ |
| initialValues | 初始化设置的值 | Array<any> | []     |

- CustomForm.List

| 参数 | 说明                  | 类型              | 默认值 |
| ---- | --------------------- | ----------------- | ------ |
| name | 当前 formList 的 name | string / string[] | []     |

- CustomForm.Item

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 当前 formItem 的 name | string[] | [] |
| initialValue | 当前 formItem 的初始化值 | string / number / boolean / null / undefined |
| style | 自定义样式 |  |
| rules | 规则校验 | [] | [] ｜ |
| shouldUpdate | 当前字段是否每次 form 修改都更新(与 dependencies 二选一) | boolean | false |
| dependencies | 依赖字段改动导致本字段改动(与 dependencies 二选一) | namePath[] | false |

- CustomFormInstance

| 参数           | 说明                   | 类型 | 默认值                         |
| -------------- | ---------------------- | ---- | ------------------------------ |
| getFieldsValue | 获取当前所有单元格的值 | Fun  | () => {}                       |
| getFieldValue  | 获取某个单元格的值     | Fun  | (field: Array<string>) => any; |
| setFieldsValue | 给某些单元格设置值     | Fun  | (fileds: string[][]) => void;  |
| validateFields | 触发表单验证           | Fun  | () => Promise<any>;            |
