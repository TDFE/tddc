import React from 'react';
import type { RenderEmptyHandler } from './defaultRenderEmpty';

export interface CSPConfig {
  nonce?: string;
}

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `tntd-${suffixCls}` : 'tntd';
};

export type DirectionType = 'ltr' | 'rtl' | undefined;

export type SizeType = 'small' | 'middle' | 'large' | undefined;

export type RequiredMark = boolean | 'optional';

export const defaultIconPrefixCls = 'anticon';

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

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.
export const ConfigContext = React.createContext<ConfigConsumerProps>({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
