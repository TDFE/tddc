import React from 'react';
import type { RenderEmptyHandler } from './defaultRenderEmpty';
export interface CSPConfig {
  nonce?: string;
}
export type DirectionType = 'ltr' | 'rtl' | undefined;
export type SizeType = 'small' | 'middle' | 'large' | undefined;
export type RequiredMark = boolean | 'optional';
export declare const defaultIconPrefixCls = 'anticon';
export interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  pagination?: {
    showSizeChanger?: boolean;
  };
  locale?: object;
  pageHeader?: {
    ghost: boolean;
  };
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
  form?: {
    requiredMark?: RequiredMark;
    colon?: boolean;
  };
}
export declare const ConfigContext: React.Context<ConfigConsumerProps>;
export declare const ConfigConsumer: React.Consumer<ConfigConsumerProps>;
