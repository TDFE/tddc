import { WrapLocaleReceiver } from '../../../I18N';
import { useState, useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import cn from 'classnames';
import { uniq } from 'lodash';

import './index.less';

import { ThemeContext } from '../../Context';
import { hasLevel3 } from '../../utils';
import Icon from '../../Icon';
import NavigationPopup from './NavigationPopup';

const createPopupContainer = () => {
  const div = document.createElement('div');

  div.setAttribute('class', 'tnt-navigation-popup');

  return div;
};

export default WrapLocaleReceiver((props) => {
  const { headerRef, menus, I18N, localeCode } = props;
  const [visible, setVisible] = useState(false);
  const popupRef = useRef();

  useEffect(() => {
    popupRef.current = createPopupContainer();
    headerRef?.current?.appendChild(popupRef.current);

    return () => {
      headerRef?.current?.removeChild(popupRef.current);
    };
  }, []);

  useEffect(() => {
    const classNames = popupRef.current.getAttribute('class').split(' ');

    if (visible) {
      ReactDOM.render(
        <NavigationPopup
          {...props}
          language={localeCode}
          menus={menus}
          containerRef={headerRef}
          popupRef={popupRef}
          close={() => setVisible(false)}
        />,
        popupRef.current,
      );
      popupRef.current.setAttribute(
        'class',
        classNames.filter((item) => item !== 'hide').join(' '),
      );
    } else {
      popupRef.current.setAttribute('class', uniq([...classNames, 'hide']).join(' '));
    }
  }, [visible]);

  return (
    <div
      onClick={(evt) => {
        evt.stopPropagation();
        evt.nativeEvent?.stopImmediatePropagation();
        evt.nativeEvent?.stopPropagation();
        setVisible(!visible);
      }}
      className={cn('tnt-navigation', { active: visible })}
    >
      <Icon type="unordered-list" />
      <span>{I18N.globalnavigation.index.quanJuDaoHang}</span>
    </div>
  );
});
