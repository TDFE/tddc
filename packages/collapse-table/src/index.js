import { useEffect, useState, useRef } from 'react';
import cn from 'classnames';
import { Spin, Table, Icon } from 'antd';

import { makeRandomCode } from '@/utils/utils';

import './index.less';

const CollapseTable = (props) => {
  let { className, ...restProps } = props;

  let expandIconColumnIndex = props?.rowSelection ? 1 : props.expandIconColumnIndex || 0;

  const [randomCode, setRandomCode] = useState(makeRandomCode());
  const activeKeyRef = useRef(null);
  const container = useRef(null);
  const observer = useRef(null);

  const ob = (className) => {
    container.current = document.querySelector(
      `.${className}.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table`,
    );

    observer.current = new MutationObserver(expand);
    observer.current.observe(container.current, {
      // childList: true // 子节点的变动
      attributes: true,
    });
  };

  useEffect(() => {
    ob(randomCode);
  }, [randomCode]);

  const expand = () => {
    let main = document.querySelector(
      `.${randomCode} .ant-table-scroll [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );
    let right = document.querySelector(
      `.${randomCode} .ant-table-fixed-right [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );
    let left = document.querySelector(
      `.${randomCode} .ant-table-fixed-left [data-row-key="${activeKeyRef.current}-extra-row"]`,
    );

    if (right) {
      right.setAttribute(
        'style',
        `display: block; height: ${main.offsetHeight || 0}px; overflow: hidden;`,
      );
    }

    if (left) {
      left.setAttribute(
        'style',
        `display: block; height: ${main.offsetHeight || 0}px; overflow: hidden;`,
      );
    }
  };

  // 自定义展开收起
  const customExpandIcon = (p) => {
    let { expanded } = p;
    if (expanded) {
      return (
        <a
          style={{
            marginLeft: !props.rowSelection && '0px',
            paddingLeft: !props.rowSelection && '0px',
          }}
          className="expand"
          onClick={(e) => {
            p?.onExpand(p.record, e);
            if (props?.onExpand) props?.onExpand(p.expanded, p.record);
          }}
        >
          <Icon type="minus-square" style={{ fontSize: 14 }} />
        </a>
      );
    }

    return (
      <a
        style={{
          marginLeft: !props.rowSelection && '0px',
          paddingLeft: !props.rowSelection && '0px',
        }}
        className="expand"
        onClick={(e) => {
          p?.onExpand(p.record, e);
          if (props?.onExpand) props?.onExpand(p.expanded, p.record);
        }}
      >
        <Icon type="plus-square" style={{ fontSize: 14 }} />
      </a>
    );
  };

  const trigger = () => {
    if (!className) return;
    let dom = document?.querySelector(
      `.${className}.ant-table-wrapper.collapse-panel > .ant-spin-nested-loading > .ant-spin-container > .ant-table`,
    );
    dom?.setAttribute('c-data', 'Mutation');
  };

  return (
    <div className="collapse-table">
      <Table
        {...restProps}
        className={`${randomCode} collapse-panel ${className}`}
        expandIconColumnIndex={expandIconColumnIndex}
        onExpandedRowsChange={(arg) => {
          let key = (arg && arg[arg.length - 1]) || null;
          activeKeyRef.current = key;
          props.onExpandedRowsChange && props.onExpandedRowsChange([key]);
          // 触发MutationObserver监听
          trigger();
        }}
        expandIconAsCell={false}
        expandable={true}
        expandRowByClick={true}
        expandIcon={(props) => customExpandIcon(props)}
      />
    </div>
  );
};

export default CollapseTable;
