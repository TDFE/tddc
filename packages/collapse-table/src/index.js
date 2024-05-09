import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { Spin, Table, Icon } from 'tntd';

import { makeRandomCode } from './utils';

import './index.less';

const CollapseTable = (props) => {
  let { className, ...restProps } = props;

  const randomCode = useRef(makeRandomCode());
  const activeKeyRef = useRef(null);
  const container = useRef(null);
  const observer = useRef(null);

  useEffect(() => {
    ob(randomCode.current);
  }, [randomCode.current]);

  useEffect(() => {
    if (props.expandedRowKeys && props.expandedRowKeys.length > 0) {
      activeKeyRef.current = props.expandedRowKeys[0];
    }
  }, [props.expandedRowKeys]);

  const ob = (className) => {
    container.current = document.querySelector(
      `.${className}.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table`,
    );
    console.log(2);
    observer.current = new MutationObserver(expand);
    observer.current.observe(container.current, {
      childList: true, // 子节点的变动
      attributes: true,
    });
  };

  const trigger = (className) => {
    if (!className) return;
    console.log({ className });
    let dom = document?.querySelector(
      `.${className}.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table`,
    );
    dom?.setAttribute('c-data', 'Mutation');
  };

  const expand = () => {
    let main = document.querySelector(
      `.${randomCode.current} .ant-table-scroll [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );
    let right = document.querySelector(
      `.${randomCode.current} .ant-table-fixed-right [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );
    let left = document.querySelector(
      `.${randomCode.current} .ant-table-fixed-left [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );
    console.log(1);

    if (right) {
      right.setAttribute(
        'style',
        `display: inline-block; height: ${main.offsetHeight || 0}px; overflow: hidden;`,
      );
    }

    if (left) {
      left.setAttribute(
        'style',
        `display: inline-block; height: ${main.offsetHeight || 0}px; overflow: hidden;`,
      );
    }
  };

  // 自定义展开收起
  const customExpandIcon = (p) => {
    let { expanded } = p;
    if (expanded) {
      return (
        <span
          style={{
            marginLeft: !props.rowSelection && '0px',
            paddingLeft: !props.rowSelection && '0px',
          }}
          className="expand"
          onClick={(e) => {
            e.stopPropagation();
            p?.onExpand(p.record, e);
            if (props?.onExpand) props?.onExpand(p.expanded, p.record);
          }}
        >
          <Icon type="minus-square" style={{ fontSize: 14 }} />
        </span>
      );
    }

    return (
      <span
        style={{
          marginLeft: !props.rowSelection && '0px',
          paddingLeft: !props.rowSelection && '0px',
        }}
        className="expand"
        onClick={(e) => {
          e.stopPropagation();
          p?.onExpand(p.record, e);
          if (props?.onExpand) props?.onExpand(p.expanded, p.record);
        }}
      >
        <Icon type="plus-square" style={{ fontSize: 14 }} />
      </span>
    );
  };

  let expandIconColumnIndex = props?.rowSelection ? 1 : props.expandIconColumnIndex || 0; // 确定checkbox框位置
  // 设置expandIcon的默认值
  let expandIcon = props.expandIcon;
  if (props.expandedRowRender && !restProps.expandIcon) {
    expandIcon = (props) => customExpandIcon(props);
  } else if (!props.expandedRowRender) {
    expandIcon = null;
  }

  return (
    <div className="collapse-table">
      <Table
        // antd.Table 部分props的默认值 expandIcon, expandIconColumnIndex, expandRowByClick
        expandIconColumnIndex={expandIconColumnIndex}
        expandRowByClick={true}
        expandIconAsCell={false}
        // antd.Table props
        {...restProps}
        //  antd.Table 改动过的props
        expandIcon={expandIcon}
        className={`${randomCode.current} collapse-panel ${className}`}
        onExpandedRowsChange={(arg) => {
          let key = (arg && arg[arg.length - 1]) || null;
          activeKeyRef.current = key;
          props.onExpandedRowsChange && props.onExpandedRowsChange([key]);
          // 触发MutationObserver监听
          trigger(randomCode.current);
        }}
      />
    </div>
  );
};

export default CollapseTable;
