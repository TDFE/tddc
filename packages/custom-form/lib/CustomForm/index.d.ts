import React from 'react';
import { IForm, ICustomFormProps } from './interface';
declare const CustomForm: {
  ({ form, initialValues, children }: ICustomFormProps): JSX.Element;
  useForm(): IForm[];
  List: React.NamedExoticComponent<import('./interface').IFormListProps>;
  Item: React.NamedExoticComponent<import('./interface').IFormItem>;
};
export default CustomForm;
