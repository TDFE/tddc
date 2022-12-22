import { ReactElement, JSXElementConstructor } from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type DirectionType = 'ltr' | 'rtl' | undefined;

export const tuple = <T extends string[]>(...args: T) => args;

const ValidateStatuses = tuple('success', 'warning', 'error', 'validating', '');

export type ValidateStatus = typeof ValidateStatuses[number];

const SelectPlacements = tuple('bottomLeft', 'bottomRight', 'topLeft', 'topRight');

export type SelectCommonPlacement = typeof SelectPlacements[number];

const InputStatuses = tuple('warning', 'error', '');

export type InputStatus = typeof InputStatuses[number];

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

export type DropdownRender = (
  menu: ReactElement<any, string | JSXElementConstructor<any>>,
) => ReactElement<any, string | JSXElementConstructor<any>>;
