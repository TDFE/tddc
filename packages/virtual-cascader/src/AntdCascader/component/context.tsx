/*
 * @Descripttion:
 * @Author: 郑泳健
 * @Date: 2022-12-19 17:09:41
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-20 16:51:45
 */
import React from 'react';

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
  if (customizePrefixCls) return customizePrefixCls;

  return suffixCls ? `tntd-${suffixCls}` : 'tntd';
};

export const defaultIconPrefixCls = 'anticon';

// zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.
export const ConfigContext = React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigConsumer = ConfigContext.Consumer;
