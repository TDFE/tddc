import { TinitialValueType, ValidationRule, IForm, ILevel, IFormData } from './interface';
/**
 * 将xx.xx.xx 转换为数组
 * @param {*} name
 * @returns
 */
export declare const getNames: (name: string[] | string) => string[];
/**
 * 对数据进行校验
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @returns
 */
export declare const recursionCheck: (list: any, dataLevel: ILevel[], formData: IFormData, errorList?: string[]) => string[];
/**
 * 将数据进行排序
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @param {*} errorList
 * @returns
 */
export declare const recursionSort: (list: any, dataLevel: ILevel[], formData: IFormData) => any;
/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
export declare const getFieldsValue: (formCurrent: IForm) => any;
/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
export declare const getFieldValue: (formCurrent: IForm, field: string[]) => unknown;
/**
 * 提交时候校验的方法
 * @param {*} formCurrent
 * @returns
 */
export declare const validateFields: (formCurrent: IForm) => Promise<unknown>;
/** 获取初始化的值 */
export declare const getInitValue: (initialValues: object | undefined, names: string[] | string) => object | undefined;
/** 校验表单是否正确的方法 */
export declare const handleCheckItem: (value: TinitialValueType, rules: ValidationRule) => string | undefined;
export declare const isValidKey: (key: string | number | symbol, object: object) => key is never;
