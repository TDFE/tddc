import * as React from 'react';
import type { DefaultOptionType, SingleValueType } from '../Cascader';
import type { RenderItem } from '../context';
export declare const FIX_LABEL = '__cascader_fix_label__';
export interface ColumnProps {
  prefixCls: string;
  multiple?: boolean;
  options: DefaultOptionType[];
  /** Current Column opened item key */
  activeValue?: React.Key;
  /** The value path before current column */
  prevValuePath: React.Key[];
  onToggleOpen: (open: boolean) => void;
  onSelect: (valuePath: SingleValueType, leaf: boolean) => void;
  onActive: (valuePath: SingleValueType) => void;
  checkedSet: Set<React.Key>;
  halfCheckedSet: Set<React.Key>;
  loadingKeys: React.Key[];
  isSelectable: (option: DefaultOptionType) => boolean;
  renderItem?: (item: RenderItem) => React.ReactNode;
  searchValue?: string;
  level?: number;
  dropdownVisible?: boolean;
}
export default function Column({
  prefixCls,
  multiple,
  options,
  activeValue,
  prevValuePath,
  onToggleOpen,
  onSelect,
  onActive,
  checkedSet,
  halfCheckedSet,
  loadingKeys,
  isSelectable,
  renderItem,
  searchValue,
  level,
  dropdownVisible,
}: ColumnProps): React.JSX.Element;
