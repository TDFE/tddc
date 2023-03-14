### 安装和初始化

```
npm install @tddc/custom-form --save
```

### demo

[demo](https://tdfe.github.io/tddc/components/custom-form)

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
