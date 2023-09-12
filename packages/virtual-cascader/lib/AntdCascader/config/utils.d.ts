import { SelectCommonPlacement, ValidateStatus, InputStatus } from '../interface';
export declare const getTransitionDirection: (
  placement: SelectCommonPlacement | undefined,
) => 'slide-down' | 'slide-up';
export declare const getTransitionName: (
  rootPrefixCls: string,
  motion: string,
  transitionName?: string,
) => string;
export declare function getStatusClassNames(
  prefixCls: string,
  status?: ValidateStatus,
  hasFeedback?: boolean,
): string;
export declare const getMergedStatus: (
  contextStatus?: ValidateStatus,
  customStatus?: InputStatus,
) => '' | 'success' | 'warning' | 'error' | 'validating' | undefined;
