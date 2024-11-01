import React from 'react';
import View from './View';
import Edit from './Edit';
var AssignModal = function AssignModal(props) {
  return props.disabled
    ? /*#__PURE__*/ React.createElement(View, props)
    : /*#__PURE__*/ React.createElement(Edit, props);
};
export default AssignModal;
