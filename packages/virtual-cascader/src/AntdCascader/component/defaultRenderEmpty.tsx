/*
 * @Descripttion:
 * @Author: 郑泳健
 * @Date: 2022-12-19 16:45:16
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-19 18:58:25
 */
import * as React from 'react';
import { ConfigConsumer } from './context';

const defaultRenderEmpty = (componentName?: string) => (
  <ConfigConsumer>
    {({ getPrefixCls }) => {
      const prefix = getPrefixCls('empty');

      return <div>空</div>;
    }}
  </ConfigConsumer>
);

export type RenderEmptyHandler = typeof defaultRenderEmpty;

export default defaultRenderEmpty;
