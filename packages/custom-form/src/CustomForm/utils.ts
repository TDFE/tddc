import { TinitialValueType, ValidationRule, IForm, ILevel, IFormData } from './interface';

/**
 * 将xx.xx.xx 转换为数组
 * @param {*} name
 * @returns
 */
export const getNames = (name: string[] | string) => {
  let attrs = [];
  if (Array.isArray(name)) {
    const [str, ...rest] = name;
    attrs = str.split('.').concat(rest);
  } else {
    attrs = typeof name === 'string' ? name.split('.') : [];
  }
  return attrs;
};

/**
 * 对数据进行校验
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @returns
 */
export const recursionCheck = (
  list: any,
  dataLevel: ILevel[],
  formData: IFormData,
  errorList: string[] = [],
) => {
  try {
    if (Array.isArray(list)) {
      list.forEach((item) => {
        const key = item['name'];
        const attrs = Object.keys(formData[key]);

        attrs.forEach((attr) => {
          const error = formData[item.name][attr]?.checkItem();
          if (error) {
            errorList.push(`${[item.name + '.' + attr]}:`, error);
          }
        });
        if (dataLevel[key]) {
          recursionCheck(dataLevel[key], dataLevel, formData, errorList);
        }
      });
    }
    return errorList;
  } catch (e) {
    if (typeof e === 'string') {
      throw e.toUpperCase();
    } else if (e instanceof Error) {
      throw e.message;
    }
    throw e;
  }
};

/**
 * 将数据进行排序
 * @param {*} list
 * @param {*} dataLevel
 * @param {*} formData
 * @param {*} errorList
 * @returns
 */
export const recursionSort = (list: any, dataLevel: ILevel[], formData: IFormData) => {
  try {
    if (Array.isArray(list)) {
      const values = list.reduce((total, item, index) => {
        let attrObj = {};
        const key = item['name'];
        const prefixs = key.split('.');
        const attrs = Object.keys(formData[key]);

        attrs.forEach((attr) => {
          attrObj[attr] = formData[key][attr]?.['value'];
        });
        let children = [];
        if (dataLevel[key]) {
          children = recursionSort(dataLevel[key], dataLevel, formData);
        }

        const len = prefixs.length - 2;
        if (total[prefixs[len]]) {
          total[prefixs[len]][index] = {
            ...attrObj,
            ...(children || []),
          };
        } else {
          total[prefixs[len]] = [
            {
              ...attrObj,
              ...(children || []),
            },
          ];
        }
        return total;
      }, {});
      return values;
    }
  } catch (e) {
    if (typeof e === 'string') {
      console.error(e.toUpperCase());
      throw e.toUpperCase();
    } else if (e instanceof Error) {
      console.error(e.message);
      throw e.message;
    }
    throw e;
  }
};

/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
export const getFieldsValue = (formCurrent: IForm) => {
  try {
    const { formData, dataLevel } = formCurrent;
    let firstKey = '';
    // 这里不直接用Object.keys的原因是Object.keys并不能保证一定是按照属性顺序
    for (let i in dataLevel) {
      firstKey = i;
      break;
    }
    const recursionStart = dataLevel[firstKey];
    const values = recursionSort(recursionStart, dataLevel, formData);
    return values;
  } catch (e) {
    if (typeof e === 'string') {
      console.error(e.toUpperCase());
      return e.toUpperCase();
    } else if (e instanceof Error) {
      console.error(e.message);
      return e.message;
    }
    return e;
  }
};

/**
 * 获取form表单的value
 * @param {*} formCurrent
 * @returns
 */
export const getFieldValue = (formCurrent: IForm, field: string[]) => {
  try {
    const { formData } = formCurrent;
    return formData && formData?.[field[0]]?.[field[1]]?.['value'];
  } catch (e) {
    if (typeof e === 'string') {
      return e.toUpperCase();
    } else if (e instanceof Error) {
      return e.message;
    }
    return e;
  }
};

/**
 * 提交时候校验的方法
 * @param {*} formCurrent
 * @returns
 */
export const validateFields = (formCurrent: IForm) => {
  return new Promise((resolve) => {
    const { formData, dataLevel } = formCurrent;
    let firstKey = '';
    // 这里不直接用Object.keys的原因是Object.keys并不能保证一定是按照属性顺序
    for (let i in dataLevel) {
      firstKey = i;
      break;
    }
    const recursionStart = dataLevel[firstKey];
    const errorList = recursionCheck(recursionStart, dataLevel, formData);
    if (Array.isArray(errorList) && errorList.length) {
      console.error(JSON.stringify(errorList));
    } else {
      resolve(recursionSort(recursionStart, dataLevel, formData));
    }
  });
};

/** 获取初始化的值 */
export const getInitValue = (initialValues: object | undefined, names: string[] | string) => {
  let keys;
  if (Array.isArray(names)) {
    const [str, ...rest] = names;
    keys = str.split('.').concat(rest);
  }

  if (Array.isArray(keys)) {
    keys.forEach((i) => {
      initialValues = ['', null, undefined].includes(initialValues?.[i])
        ? undefined
        : initialValues?.[i];
    });
  }

  return initialValues;
};

/** 校验表单是否正确的方法 */
export const handleCheckItem = (value: TinitialValueType, rules: ValidationRule) => {
  try {
    if (Array.isArray(rules)) {
      rules.forEach((i) => {
        // @ts-ignore
        if (i.required && ['', null, undefined].includes(value)) {
          throw new Error(i?.message || 'error');
        }
        if (i?.validator) {
          i.validator(rules, value, function (_errorMsg: string) {
            throw new Error(_errorMsg);
          });
        }
      });
    }
    return;
  } catch (e) {
    if (typeof e === 'string') {
      return e.toUpperCase();
    } else if (e instanceof Error) {
      return e.message;
    }
  }
};

export const isValidKey = (
  key: string | number | symbol,
  object: object,
): key is keyof typeof object => {
  return key in object;
};
