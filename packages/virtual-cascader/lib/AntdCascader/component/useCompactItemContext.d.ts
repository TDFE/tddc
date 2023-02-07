import * as React from 'react';
import { DirectionType, SpaceCompactItemContextType } from '../interface';
export declare const SpaceCompactItemContext: React.Context<SpaceCompactItemContextType | null>;
export declare const useCompactItemContext: (
  prefixCls: string,
  direction: DirectionType,
) => {
  compactSize: import('../interface').SizeType;
  compactDirection: 'horizontal' | 'vertical' | undefined;
  compactItemClassnames: string;
};
