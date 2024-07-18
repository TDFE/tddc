import ReactDOM from 'react-dom';
import { Modal, Button, Collapse, message, Tag, Tooltip, Icon, Alert } from 'tntd';
import { getText } from '../locale';
import { ReferenceInfo } from '../ReferenceInfo';
import './index.less';

const { Panel } = Collapse;

const ReferenceBatchCheck = (props) => {
  const {
    title = (
      <>
        <Icon type="warning" style={{ marginRight: '4px', color: '#EF6555' }} />
        {/* 上线校验失败 */}
        {getText('onLineFail', props?.lang)}
      </>
    ),
    rq,
    checkReferResponse,
    showPagination,
    destroyOnClose = true,
    orgMap = {},
    appList = [],
    value = undefined,
    onChange = () => {},
    cancelText,
    okText,
    emptyType,
    weakMsg = getText('weakMsg', props?.lang),
    strongMsg = getText('strongMsg', props?.lang),
  } = props || {};

  const appendModal = (reject, resolve, referenceData = []) => {
    let type = '';
    if (!Array.isArray(referenceData) && referenceData?.type) {
      type = referenceData?.type;
      referenceData = referenceData?.result || [];
    }
    const modalWrap = document.createElement('div');
    modalWrap.setAttribute('id', 'tddc-reference-online-check-modal');
    const removeModal = () => {
      const tddcModal = document.querySelectorAll('#tddc-reference-online-check-modal');
      if (tddcModal) {
        tddcModal.forEach((ele) => ele?.parentNode?.removeChild(ele));
      }
      modalWrap && modalWrap?.parentNode?.removeChild(modalWrap);
      !type && reject && reject(referenceData);
      if (document.body.getAttribute('style')) {
        document.body.removeAttribute('style');
      }
    };
    removeModal();
    document.body.appendChild(modalWrap);
    // 能进行下一步操作
    const canNextOpera = !['STRONG'].includes(type);
    ReactDOM.render(
      <Modal
        title={title}
        visible={true}
        width={1000}
        destroyOnClose={destroyOnClose}
        getContainer={modalWrap}
        onCancel={removeModal}
        footer={[
          <Button key="back" onClick={removeModal}>
            {cancelText || getText('cancel', props?.lang)}
          </Button>,
          canNextOpera && (
            <Button
              key="submit"
              type="primary"
              onClick={() => {
                removeModal();
                resolve(type);
              }}
            >
              {okText || getText('next', props?.lang)}
            </Button>
          ),
        ]}
      >
        <div className="reference-online-check-modal">
          {type && canNextOpera && (
            <div className="mb10">
              <Alert
                type="warning"
                message={
                  weakMsg || referenceData?.message || getText('weakMsg', props?.lang)
                  // '存在弱引用（被下线、禁用、待提交/上线、导入待提交/上线、暂存、保存等相关状态组件引用）关系，谨慎操作'
                }
              />
            </div>
          )}
          {!canNextOpera && (
            <div className="mb10">
              <Alert
                type="error"
                message={
                  strongMsg || referenceData?.message || getText('strongMsg', props?.lang)
                  // '存在强引用（被上线、启用、上下线审批中和指标初始化等相关状态组件引用）关系，禁止操作'
                }
              />
            </div>
          )}

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
                      {d?.type === 'STRONG' && (
                        <Tag color="#D96156">
                          {getText('exist', props?.lang)}
                          {d?.typeName || getText('strong', props?.lang)}
                        </Tag>
                      )}
                    </div>
                  }
                  key={i}
                >
                  <ReferenceInfo
                    emptyType={emptyType}
                    from="ReferenceBatchCheck"
                    unmountHandle={removeModal}
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
      </Modal>,
      modalWrap,
    );
  };
  if (rq && typeof rq === 'function') {
    return new Promise((resolve, reject) => {
      return rq().then((res) => {
        const { success, data } = res || {};
        if (success) {
          if (Array.isArray(data) && !!data?.length) {
            appendModal(reject, resolve, data);
          } else if (!Array.isArray(data) && data?.type !== 'NO_EXIST') {
            appendModal(reject, resolve, data);
          } else {
            resolve(data);
          }
        } else {
          reject(getText('relationFail', props?.lang));
        }
      });
    });
  } else {
    message.error(getText('reliableQuery', props?.lang)); // '请提供一个可靠的查询请求!!!'
  }
};
export { ReferenceBatchCheck };
