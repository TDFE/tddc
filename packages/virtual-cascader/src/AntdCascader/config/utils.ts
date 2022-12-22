/*
 * @Descripttion:
 * @Author: 郑泳健
 * @Date: 2022-12-19 19:08:25
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-19 19:11:27
 */
import { SelectCommonPlacement, ValidateStatus, InputStatus } from '../interface';
import classNames from 'classnames';

export const getTransitionDirection = (placement: SelectCommonPlacement | undefined) => {
  if (placement !== undefined && (placement === 'topLeft' || placement === 'topRight')) {
    return `slide-down`;
  }
  return `slide-up`;
};

export const getTransitionName = (
  rootPrefixCls: string,
  motion: string,
  transitionName?: string,
) => {
  if (transitionName !== undefined) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};

export function getStatusClassNames(
  prefixCls: string,
  status?: ValidateStatus,
  hasFeedback?: boolean,
) {
  return classNames({
    [`${prefixCls}-status-success`]: status === 'success',
    [`${prefixCls}-status-warning`]: status === 'warning',
    [`${prefixCls}-status-error`]: status === 'error',
    [`${prefixCls}-status-validating`]: status === 'validating',
    [`${prefixCls}-has-feedback`]: hasFeedback,
  });
}

export const getMergedStatus = (contextStatus?: ValidateStatus, customStatus?: InputStatus) =>
  customStatus || contextStatus;
