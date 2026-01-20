import { WrapLocaleReceiver } from '../../../I18N';
import { useContext } from 'react';
import { Row } from 'tntd';

import './index.less';
import { setMenuLevelStore } from '../../storage';
import { ThemeContext } from '../../Context';

const menuLevelList = (I18N) => [
  { value: '2', label: I18N.menulevel.index.erJiDaoHang },
  { value: '3', label: I18N.menulevel.index.sanJiDaoHang },
];

export default WrapLocaleReceiver((props) => {
  const { onMenuLevelChange, I18N } = props;

  const { menuLevel, handleMenuLevel } = useContext(ThemeContext);

  const changeMenuLevel = (v) => {
    setMenuLevelStore(v);
    handleMenuLevel(v);
    onMenuLevelChange && onMenuLevelChange(v);
  };

  return (
    <Row type="flex" className="user-info-body-menu-row">
      {menuLevelList(I18N).map(({ value, label }) => {
        const isChecked = menuLevel === value;
        return (
          <Row
            type="flex"
            align="middle"
            justify="center"
            className={`menu menu-${value} ${isChecked ? 'checked' : ''}`}
            key={value}
            onClick={changeMenuLevel.bind(this, value)}
          >
            <span className="menu-icon" />
            {label}
            {isChecked && <span className="icon-checked-wrap" />}
          </Row>
        );
      })}
    </Row>
  );
});
