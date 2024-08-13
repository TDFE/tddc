import View from './View';
import Edit from './Edit';
const AssignModal = (props) => {
  return props.disabled ? <View {...props} /> : <Edit {...props} />;
};

export default AssignModal;
