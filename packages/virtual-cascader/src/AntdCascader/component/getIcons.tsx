import type { ReactNode } from 'react';
import * as React from 'react';
import { Icon } from 'tntd';

type RenderNode = React.ReactNode | ((props: any) => React.ReactNode);

export default function getIcons({
  suffixIcon,
  clearIcon,
  menuItemSelectedIcon,
  removeIcon,
  loading,
  multiple,
  hasFeedback,
  prefixCls,
  showArrow,
  feedbackIcon,
}: {
  suffixIcon?: React.ReactNode;
  clearIcon?: RenderNode;
  menuItemSelectedIcon?: RenderNode;
  removeIcon?: RenderNode;
  loading?: boolean;
  multiple?: boolean;
  hasFeedback?: boolean;
  feedbackIcon?: ReactNode;
  prefixCls: string;
  showArrow?: boolean;
}) {
  // Clear Icon
  const mergedClearIcon = clearIcon ?? <Icon type="close-circle" />;

  // Validation Feedback Icon
  const getSuffixIconNode = (arrowIcon?: ReactNode) => (
    <>
      {showArrow !== false && arrowIcon}
      {hasFeedback && feedbackIcon}
    </>
  );

  // Arrow item icon
  let mergedSuffixIcon = null;
  if (suffixIcon !== undefined) {
    mergedSuffixIcon = getSuffixIconNode(suffixIcon);
  } else if (loading) {
    mergedSuffixIcon = getSuffixIconNode(<Icon type="loading" />);
  } else {
    const iconCls = `${prefixCls}-suffix`;
    mergedSuffixIcon = ({ open, showSearch }: { open: boolean; showSearch: boolean }) => {
      if (open && showSearch) {
        return getSuffixIconNode(<Icon className={iconCls} type="search" />);
      }
      return getSuffixIconNode(<Icon className={iconCls} type="down" />);
    };
  }

  // Checked item icon
  let mergedItemIcon = null;
  if (menuItemSelectedIcon !== undefined) {
    mergedItemIcon = menuItemSelectedIcon;
  } else if (multiple) {
    mergedItemIcon = <Icon type="check" />;
  } else {
    mergedItemIcon = null;
  }

  let mergedRemoveIcon = null;
  if (removeIcon !== undefined) {
    mergedRemoveIcon = removeIcon;
  } else {
    mergedRemoveIcon = <Icon type="close" />;
  }

  return {
    clearIcon: mergedClearIcon,
    suffixIcon: mergedSuffixIcon,
    itemIcon: mergedItemIcon,
    removeIcon: mergedRemoveIcon,
  };
}
