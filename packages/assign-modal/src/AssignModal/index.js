import mapLocale, { getLang } from '../I18N';
import { Drawer } from 'tntd';
import { useState } from 'react';
import AssignApp from './AssignApp';
import './index.less';
import LocaleReceiver from 'antd/es/locale-provider/LocaleReceiver';

const AssignModal = (props) => {
  const { locale } = props;
  const {
    lang,
    visible,
    close,
    disabled = false,
    title = '',
    onSubmit,
    okText = locale?.okText,
    cancelText = locale?.cancelText,
    ...restProps
  } = props;
  const [assignData, setAssignData] = useState({});

  const submit = () => {
    onSubmit(assignData);
  };

  return (
    <Drawer
      className="modal-assign"
      title={title}
      visible={visible}
      width={900}
      onCancel={close}
      onOk={submit}
      // okText={okText}
      // cancelText={cancelText}
      maskClosable={disabled}
      destroyOnClose
      showFooter={!disabled}
      okButtonProps={{ disabled }}
    >
      <AssignApp
        onChange={(data) => {
          setAssignData(data);
        }}
        disabled={disabled}
        lang={lang}
        locale={locale}
        {...restProps}
      />
    </Drawer>
  );
};

export default (props) => (
  <LocaleReceiver componentName="AssignModal">
    {(locale, localeCode) => {
      const I18N = !!Object.keys(locale).length
        ? locale
        : mapLocale[localeCode] || mapLocale[getLang()];
      return <AssignModal {...props} locale={I18N} lang={localeCode || getLang()} />;
    }}
  </LocaleReceiver>
);
