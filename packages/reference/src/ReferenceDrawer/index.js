import { useEffect, useState } from 'react';
import { Drawer, Spin, Tooltip, message } from 'tntd';
import PropTypes from 'prop-types';
import { ReferenceInfo } from '../ReferenceInfo';
import { getText } from '../locale';
import './index.less';

const ReferenceDrawer = (props) => {
  const {
    fetchReference,
    data = null,
    orgMap = {},
    appList = [],
    title,
    visible,
    onClose,
    emptyType,
    ...rest
  } = props;
  const [referenceData, setReferenceData] = useState(data);
  const [referenceLoad, setReferenceLoad] = useState(!data);
  useEffect(() => {
    if (visible && fetchReference) {
      fetchReference()
        .then((res) => {
          if (res?.success && res?.data) {
            setReferenceData(res?.data || []);
          }
          if (!res?.success) {
            message.error(res.message || getText('referenceFail', props?.lang)); // '查询引用关系失败'
          }
        })
        .finally(() => {
          setReferenceLoad(false);
        });
    }
  }, [visible, fetchReference]);

  return (
    <Drawer
      className="reference-drawer"
      width={650}
      title={<Tooltip title={title}>{title || ''}</Tooltip>}
      onClose={onClose}
      visible={visible}
      {...rest}
    >
      {referenceLoad && <Spin className="globalSpin" tip={getText('inQuery', props?.lang)}></Spin>}
      {!referenceLoad && (
        <div className="drawer-reference-body">
          <ReferenceInfo
            emptyType={emptyType}
            referenceData={referenceData || []}
            appList={appList || []}
            orgMap={orgMap || {}}
            unmountHandle={onClose}
          />
        </div>
      )}
    </Drawer>
  );
};
ReferenceDrawer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  fetchReference: PropTypes.func,
  orgMap: PropTypes.object,
  appList: PropTypes.array,
};
ReferenceDrawer.defaultProps = {
  title: '',
  data: null,
  visible: false,
  orgMap: {},
  appList: [],
};
export { ReferenceDrawer };
