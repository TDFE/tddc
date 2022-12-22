/*
 * @Descripttion: 空状态
 * @Author: 郑泳健
 * @Date: 2022-12-19 16:45:16
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-22 15:48:27
 */
import * as React from 'react';
import { ConfigConsumer } from './context';

const defaultRenderEmpty = (componentName?: string) => (
  <ConfigConsumer>
    {({ getPrefixCls }) => {
      const prefix = getPrefixCls('empty');

      return (
        <div>
          <img
            style={{ width: 80, height: 50, marginTop: 35 }}
            src={require('../../img/no-data-s.png')}
          />
          <div>暂无数据</div>
        </div>
      );
    }}
  </ConfigConsumer>
);

export type RenderEmptyHandler = typeof defaultRenderEmpty;

export default defaultRenderEmpty;
