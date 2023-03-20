/*
 * @Descripttion: 空状态
 * @Author: 郑泳健
 * @Date: 2022-12-19 16:45:16
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-03-17 14:47:56
 */
// @ts-ignore
import I18N from '../../locale';
import * as React from 'react';
import { ConfigConsumer } from './context';

const defaultRenderEmpty = (componentName?: string) => (
  <ConfigConsumer>
    {({ getPrefixCls }) => {
      const prefix = getPrefixCls('empty');

      return (
        <div className={`tntd-cascader-no-data-wrapper ${prefix}`}>
          <img
            style={{ width: 80, height: 50, marginTop: 35 }}
            src={require('../../img/no-data-s.png')}
          />
          <div>{I18N.component.defaultrenderempty.zanWuShuJu}</div>
        </div>
      );
    }}
  </ConfigConsumer>
);

export type RenderEmptyHandler = typeof defaultRenderEmpty;

export default defaultRenderEmpty;
