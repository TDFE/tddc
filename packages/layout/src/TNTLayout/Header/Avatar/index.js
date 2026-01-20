import { WrapLocaleReceiver } from '../../../I18N';
import { Popover, Row, Divider } from 'tntd';
import deleteAllCookiesFactory from 'delete-all-cookies';
import { get } from 'lodash';

import './index.less';

import images from '../../images';
import Language from '../Language';
import MenuLevel from '../MenuLevel';
import Theme from '../Theme';

const UserInfoContent = (props) => {
  const {
    userInfo,
    config = {},
    onLogout,
    onChangePassword = () => true,
    size,
    onPersonalSetting = () => true,
    onLanguageChange,
    onThemeChange,
    supportLevelChange,
    onMenuLevelChange,
    I18N,
  } = props;
  const { language = false } = config || {};

  return (
    <div className="user-info-setting-wrap">
      <div className="user-info-body">
        <div className="user-info-body-username">
          {userInfo.userName || I18N.avatar.index.zanWuNiCheng}
          <span className="user-info-body-account">{userInfo.account}</span>
        </div>
        {language && <Language size={size} onLanguageChange={onLanguageChange} />}
        <Theme onThemeChange={onThemeChange} />
        {supportLevelChange && <MenuLevel onMenuLevelChange={onMenuLevelChange} />}
      </div>
      <Row className="user-info-footer" type="flex" justify="space-between" align="middle">
        <a onClick={onPersonalSetting} href="/bridge/userCenter?currentTab=1">
          {I18N.avatar.index.geRenSheZhi}
        </a>
        <Divider type="vertical" />
        <a onClick={onChangePassword} href="/bridge/userCenter?currentTab=2">
          {I18N.avatar.index.xiuGaiMiMa}
        </a>
        <Divider type="vertical" />
        <a
          className="user-info-footer-signout"
          onClick={() => {
            if (onLogout) {
              onLogout();
              deleteAllCookiesFactory(window)();
            } else {
              deleteAllCookiesFactory(window)();
              window.location.href = `/user/login?callbackUrl=${window.encodeURI(location.href)}`;
            }
          }}
        >
          {I18N.avatar.index.tuiChuDengLu}
        </a>
      </Row>
    </div>
  );
};

export default WrapLocaleReceiver((props) => {
  const { userInfo = {} } = props;
  const { avatar } = userInfo;

  return (
    <div className="tnt-layout-header-avatar">
      <Popover
        popupClassName="tnt-layout-header-avatar-popover"
        placement="bottomRight"
        title={null}
        content={<UserInfoContent {...props} />}
        trigger="click"
      >
        {avatar ? (
          <img
            src={
              avatar.indexOf('base64') > 0 ? avatar : get(images[avatar], 'default', images[avatar])
            }
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = images.empty?.default || images.empty;
            }}
          />
        ) : (
          <img src={images.empty?.default || images.empty} />
        )}
      </Popover>
    </div>
  );
});
