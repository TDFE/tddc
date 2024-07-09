import React, { useEffect, useRef } from 'react';
import TreeView from '@tddc/tree-view';

const Overview = (props) => {
  let { data, options, refs = {}, styleOptions, style } = props;
  let treeData = window?.propsData?.data || data;
  let container = useRef();
  let tree = useRef();

  useEffect(() => {
    tree.current = TreeView();
    refs.current = tree.current;
    let params = {
      options,
      styleOptions,
      refs,
      container: container.current,
    };
    tree.current.init(params);
  }, []);

  useEffect(() => {
    tree.current.setData(treeData);
  }, [treeData]);

  return (
    <div
      id="tree"
      style={{
        ...style,
      }}
    >
      <div ref={container} style={{ transformOrigin: '0 0' }} />
    </div>
  );
};

export default Overview;
