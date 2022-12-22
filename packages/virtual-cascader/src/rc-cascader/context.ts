import * as React from 'react';
import type {
  CascaderProps,
  InternalFieldNames,
  DefaultOptionType,
  SingleValueType,
} from './Cascader';

export interface RenderItem {
  label: any;
  value: any;
}

export interface CascaderContextProps {
  options: CascaderProps['options'];
  fieldNames: InternalFieldNames;
  values: SingleValueType[];
  halfValues: SingleValueType[];
  changeOnSelect?: boolean;
  onSelect: (valuePath: SingleValueType) => void;
  checkable?: boolean | React.ReactNode;
  searchOptions: DefaultOptionType[];
  dropdownPrefixCls?: string;
  loadData?: (selectOptions: DefaultOptionType[]) => void;
  expandTrigger?: 'hover' | 'click';
  expandIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
  dropdownMenuColumnStyle?: React.CSSProperties;
  renderItem?: (item: RenderItem) => React.ReactNode;
}

const CascaderContext = React.createContext<CascaderContextProps>(null);

export default CascaderContext;
