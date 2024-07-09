import React from 'react';
import MultiDimList from './MultiDimList';
export default (function (props) {
  var data = props.data,
    simpleCfgList = props.simpleCfgList;
  var _ref = data || {},
    property = _ref.property;
  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    property === 'multiDimList/customList' &&
      /*#__PURE__*/ React.createElement(MultiDimList, {
        currentParamInfo: data,
        simpleCfgList: simpleCfgList,
      }),
  );
});
