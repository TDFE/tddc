// @ts-nocheck
import * as React from 'react';
import classNames from 'classnames';
import { isLeaf, toPathKey } from '../utils/commonUtil';
import CascaderContext from '../context';
import Checkbox from './Checkbox';
import type { DefaultOptionType, SingleValueType } from '../Cascader';
import { SEARCH_MARK } from '../hooks/useSearchOptions';
import List, { ListRef } from 'rc-virtual-list';
import type { RenderItem } from '../context';

export const FIX_LABEL = '__cascader_fix_label__';

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
}: ColumnProps) {
  const ref = React.useRef<ListRef>(null);
  const menuPrefixCls = `${prefixCls}-menu ${prefixCls}-menu-${level}`;
  const menuItemPrefixCls = `${prefixCls}-menu-item`;

  const {
    fieldNames,
    changeOnSelect,
    expandTrigger,
    expandIcon,
    loadingIcon,
    dropdownMenuColumnStyle,
  } = React.useContext(CascaderContext);

  const hoverOpen = expandTrigger === 'hover';

  /** 单选情况下滚动到相应的位置 */
  React.useEffect(() => {
    let timer = null;
    if (ref.current && ref.current.scrollTo && !multiple && dropdownVisible) {
      const index = options.findIndex((it) => it[fieldNames['value']] === activeValue);

      if (index > 0 && !isNaN(index)) {
        timer = window.setTimeout(() => {
          ref.current.scrollTo(32 * index);
        }, 5);
      }
    }

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
      timer = null;
      console.log(timer, 'timer');
    };
  }, [multiple, activeValue, options, fieldNames, dropdownVisible]);

  // ============================ Option ============================
  const optionInfoList = React.useMemo(
    () =>
      options.map((option) => {
        const { disabled } = option;
        const searchOptions = option[SEARCH_MARK];
        const label = option[FIX_LABEL] ?? option[fieldNames.label];
        const value = option[fieldNames.value];

        const isMergedLeaf = isLeaf(option, fieldNames);

        // Get real value of option. Search option is different way.
        const fullPath = searchOptions
          ? // @ts-ignore
            searchOptions.map((opt) => opt[fieldNames.value])
          : [...prevValuePath, value];
        const fullPathKey = toPathKey(fullPath);

        const isLoading = loadingKeys.includes(fullPathKey);

        // >>>>> checked
        const checked = checkedSet.has(fullPathKey);

        // >>>>> halfChecked
        const halfChecked = halfCheckedSet.has(fullPathKey);

        return {
          disabled,
          label,
          value,
          isLeaf: isMergedLeaf,
          isLoading,
          checked,
          halfChecked,
          option,
          fullPath,
          fullPathKey,
        };
      }),
    [options, checkedSet, fieldNames, halfCheckedSet, loadingKeys, prevValuePath],
  );
  // ============================ Render ============================
  return (
    <ul className={menuPrefixCls} role="menu">
      <List
        className={
          optionInfoList[0]['fullPathKey'] === '__EMPTY__' || !!searchValue
            ? 'rc-virtual-list-full'
            : ''
        }
        data={optionInfoList}
        height={180}
        itemHeight={32}
        itemKey="value"
        ref={ref}
      >
        {({
          disabled,
          label,
          value,
          isLeaf: isMergedLeaf,
          isLoading,
          checked,
          halfChecked,
          option,
          fullPath,
          fullPathKey,
        }) => {
          // >>>>> Open
          const triggerOpenPath = () => {
            if (!disabled && (!hoverOpen || !isMergedLeaf)) {
              onActive(fullPath);
            }
          };

          // >>>>> Selection
          const triggerSelect = () => {
            if (isSelectable(option)) {
              onSelect(fullPath, isMergedLeaf);
            }
          };

          // >>>>> Title
          let title: string;
          if (typeof option.title === 'string') {
            title = option.title;
          } else if (typeof label === 'string') {
            title = label;
          }
          return (
            <li
              key={fullPathKey}
              className={classNames(menuItemPrefixCls, {
                [`${menuItemPrefixCls}-expand`]: !isMergedLeaf,
                [`${menuItemPrefixCls}-active`]: activeValue === value,
                [`${menuItemPrefixCls}-disabled`]: disabled,
                [`${menuItemPrefixCls}-loading`]: isLoading,
              })}
              style={dropdownMenuColumnStyle}
              role="menuitemcheckbox"
              // @ts-ignore
              title={title}
              aria-checked={checked}
              data-path-key={fullPathKey}
              onClick={() => {
                triggerOpenPath();
                if (!multiple || isMergedLeaf) {
                  triggerSelect();
                }
              }}
              onDoubleClick={() => {
                if (changeOnSelect) {
                  onToggleOpen(false);
                }
              }}
              onMouseEnter={() => {
                if (hoverOpen) {
                  triggerOpenPath();
                }
              }}
              onMouseDown={(e) => {
                // Prevent selector from blurring
                e.preventDefault();
              }}
            >
              {multiple && (
                <Checkbox
                  prefixCls={`${prefixCls}-checkbox`}
                  checked={checked}
                  halfChecked={halfChecked}
                  disabled={disabled}
                  onClick={(e: React.MouseEvent<HTMLSpanElement>) => {
                    e.stopPropagation();
                    triggerSelect();
                  }}
                />
              )}
              <div className={`${menuItemPrefixCls}-content`}>
                {optionInfoList[0]['fullPathKey'] !== '__EMPTY__' && renderItem
                  ? renderItem(option, level)
                  : label}
              </div>
              {!isLoading && expandIcon && !isMergedLeaf && (
                <div className={`${menuItemPrefixCls}-expand-icon`}>{expandIcon}</div>
              )}
              {isLoading && loadingIcon && (
                <div className={`${menuItemPrefixCls}-loading-icon`}>{loadingIcon}</div>
              )}
            </li>
          );
        }}
      </List>
    </ul>
  );
}
