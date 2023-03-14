/**
 * 层级
 */
export type ILevel = {
  key?: number;
  name?: string;
};

export type TinitialValueType = null | undefined | string | number | boolean;

/**
 * 每一个单元格的信息
 */
export type IFormItemData = {
  /** 每个formItem的值 */
  value: TinitialValueType;
  /** 每个formItem的错误信息 */
  errorMsg: string | undefined;
  /** 每个formItem的校验方法, 返回值为该formItem的错误信息，同时会在formItem下面显示错误信息 */
  checkItem: () => string | undefined;
  /** 给某个formItem设置值 */
  setItemValue: (value: string | undefined, callback?: () => void) => void;
};

export interface IForm {
  /** 记录每一层级的顺序 */
  dataLevel: ILevel[];
  /** 整个form的数据，{content.0: { id: IFormItemData, value: IFormItemData }} */
  formData: IFormData;
  /** 先校验，并将结果返回 */
  validateFields: () => Promise<any>;
  /** 获取form表单的数据 */
  getFieldsValue: () => [];
  /** 获取formItem的数据 */
  getFieldValue: (field: Array<string>) => any;
  /** 给某些formItem设置数据 */
  setFieldsValue: (fileds: string[][]) => void;
}

/**
 * CustomForm的props
 */
export interface ICustomFormProps {
  form: IForm;
  initialValues: object;
  children: React.ReactNode;
}

export type IFormContext = {
  form?: IForm;
  initialValues?: object;
  currentChangeKeys?: Array<string>;
  setCurrentChangeKeys: React.Dispatch<React.SetStateAction<Array<string>>>;
};

/** formList的props */
export interface IFormListProps {
  name: string[] | string;
  children: (
    dataLevel: ILevel[],
    { add, remove }: { add: TAddOrRemove; remove: TAddOrRemove },
  ) => void;
}

/** 增删事件 */
export type TAddOrRemove = (index: number) => void;

export type IFormItem = {
  name: string[] | string;
  children: React.ReactChild | React.ReactChild[];
  style: React.CSSProperties;
  rules: ValidationRule;
  shouldUpdate: boolean;
  initialValue: TinitialValueType;
  dependencies?: Array<string[] | string>;
} & CustomRequired<IFormContext, 'setCurrentChangeKeys'>;

/** 将某个不可选属性变成必选 */
type CustomRequired<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>;

export type ValidationRule = {
  /** validation error message */
  message?: React.ReactNode;
  /** indicates whether field is required */
  required?: boolean;
  /** custom validate function (Note: callback must be called) */
  validator?: (rule: any, value: any, callback: any) => any;
};

export interface IFormData {
  [name: string]: {
    [attr: string]: IFormItemData;
  };
}
