import type {
  BaseOptionType,
  DefaultOptionType,
  FieldNames,
  MultipleCascaderProps as RcMultipleCascaderProps,
  SingleCascaderProps as RcSingleCascaderProps,
} from '../rc-cascader';
import * as React from 'react';
import type { SizeType } from './interface';
import type { SelectCommonPlacement } from './interface';
import type { InputStatus } from './interface';
import './index.css';
export { BaseOptionType, DefaultOptionType };
export type FieldNamesType = FieldNames;
export type FilledFieldNamesType = Required<FieldNamesType>;
declare const SHOW_CHILD: 'SHOW_CHILD', SHOW_PARENT: 'SHOW_PARENT';
type SingleCascaderProps = Omit<RcSingleCascaderProps, 'checkable' | 'options'> & {
  multiple?: false;
};
type MultipleCascaderProps = Omit<RcMultipleCascaderProps, 'checkable' | 'options'> & {
  multiple: true;
};
type UnionCascaderProps = SingleCascaderProps | MultipleCascaderProps;
export type CascaderProps<DataNodeType> = UnionCascaderProps & {
  multiple?: boolean;
  size?: SizeType;
  disabled?: boolean;
  bordered?: boolean;
  placement?: SelectCommonPlacement;
  suffixIcon?: React.ReactNode;
  options?: DataNodeType[];
  status?: InputStatus;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
};
export interface CascaderRef {
  focus: () => void;
  blur: () => void;
}
declare const Cascader: (<
  OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType,
>(
  props: React.PropsWithChildren<CascaderProps<OptionType>> & {
    ref?: React.Ref<CascaderRef> | undefined;
  },
) => React.ReactElement) & {
  displayName: string;
  SHOW_PARENT: typeof SHOW_PARENT;
  SHOW_CHILD: typeof SHOW_CHILD;
};
export default Cascader;
