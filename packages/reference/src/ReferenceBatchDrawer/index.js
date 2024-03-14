import { useEffect, useState } from 'react';
import { Drawer, Spin, Tooltip, message, Collapse, Tag, Empty } from 'tntd';
import PropTypes from 'prop-types';
import { ReferenceInfo } from '../ReferenceInfo';
import { getText } from '../locale';
import './index.js';

const { Panel } = Collapse;

const ReferenceBatchDrawer = (props) => {
  const {
    fetchReference,
    data = null,
    orgMap = {},
    appList = [],
    title,
    visible,
    onClose,
    value = undefined,
    onChange = () => {},
    emptyType,
    showPagination,
    destroyOnClose = true,
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
      destroyOnClose={destroyOnClose}
      {...rest}
    >
      {referenceLoad && <Spin className="globalSpin" tip={getText('inQuery', props?.lang)} />}
      {(!referenceLoad && referenceData.length && (
        <div className="drawer-reference-body">
          <Collapse defaultActiveKey={value || [0]} onChange={onChange}>
            {referenceData?.map((d, i) => {
              let headerTxt = d?.componentName;
              if (d?.componentCode) {
                headerTxt += `[${d?.componentCode}]`;
              }
              return (
                <Panel
                  header={
                    <div className="refer-panel-head">
                      <Tooltip title={headerTxt} placement="topLeft">
                        <span>{headerTxt}</span>
                      </Tooltip>
                      {d?.componentVersion && <Tag color="green">V{d?.componentVersion}</Tag>}
                    </div>
                  }
                  key={i}
                >
                  <ReferenceInfo
                    emptyType={emptyType}
                    from="ReferenceBatchCheck"
                    unmountHandle={() => {}}
                    referenceData={d?.result || []}
                    orgMap={orgMap}
                    appList={appList}
                    showPagination={showPagination}
                  />
                </Panel>
              );
            })}
          </Collapse>
        </div>
      )) || (
        <Empty
          description={getText('noData', props?.lang)}
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          imageStyle={{ marginTop: 120 }}
        />
      )}
    </Drawer>
  );
};
ReferenceBatchDrawer.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  fetchReference: PropTypes.func,
  orgMap: PropTypes.object,
  appList: PropTypes.array,
};
ReferenceBatchDrawer.defaultProps = {
  title: '',
  data: null,
  visible: false,
  orgMap: {},
  appList: [],
};
export { ReferenceBatchDrawer };
