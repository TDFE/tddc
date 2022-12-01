import { useEffect, useState } from 'react';
import { Drawer, Spin, Tooltip, message, Collapse, Tag, Empty } from 'antd';
import PropTypes from 'prop-types';
import { ReferenceInfo } from '../ReferenceInfo';
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
            message.error(res.message || '查询引用关系失败');
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
      {referenceLoad && <Spin className="globalSpin" tip="查询中..." />}
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
                    from="ReferenceBatchCheck"
                    unmountHandle={() => {}}
                    referenceData={d?.result || []}
                    orgMap={orgMap}
                    appList={appList}
                  />
                </Panel>
              );
            })}
          </Collapse>
        </div>
      )) || (
        <Empty
          description={'暂无数据'}
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
