import { ReactElement, JSXElementConstructor } from 'react';
export declare type SizeType = 'small' | 'middle' | 'large' | undefined;
export declare type DirectionType = 'ltr' | 'rtl' | undefined;
export declare const tuple: <T extends string[]>(...args: T) => T;
declare const ValidateStatuses: ['success', 'warning', 'error', 'validating', ''];
export declare type ValidateStatus = typeof ValidateStatuses[number];
declare const SelectPlacements: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
export declare type SelectCommonPlacement = typeof SelectPlacements[number];
declare const InputStatuses: ['warning', 'error', ''];
export declare type InputStatus = typeof InputStatuses[number];
export interface SpaceCompactItemContextType {
  compactSize?: SizeType;
  compactDirection?: 'horizontal' | 'vertical';
  isFirstItem?: boolean;
  isLastItem?: boolean;
}
export interface FormItemStatusContextProps {
  isFormItemInput?: boolean;
  status?: ValidateStatus;
  hasFeedback?: boolean;
  feedbackIcon?: React.ReactNode;
}
export declare type DropdownRender = (
  menu: ReactElement<any, string | JSXElementConstructor<any>>,
) => ReactElement<any, string | JSXElementConstructor<any>>;
export {};
