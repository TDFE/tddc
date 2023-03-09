import { Tooltip, Icon, Table, Row, Empty } from 'tntd';
import { Ellipsis } from 'tntd';
import { getText } from '../locale';
import AHref from '../AHref';
import './index.less';

export const ReferenceInfo = (props) => {
  const {
    from,
    referenceData = [],
    orgMap = {},
    appList = [],
    description = '',
    unmountHandle,
    imageStyle = {},
    type,
  } = props;
  return (
    <div className="reference-body">
      {!referenceData?.length && (
        <Empty
          description={description || getText('noData', props?.lang)}
          type={type || 'no-result'}
          imageStyle={{ marginTop: 120, ...imageStyle }}
        />
      )}
      {referenceData?.map((d, dIndex) => {
        const { columns, goName } = d || {};
        let renderColumns = [];
        if (columns?.length) {
          renderColumns = columns?.map((c, i) => {
            const newC = {
              ...c,
              title: (
                <Tooltip title={c?.title} placement="topLeft">
                  {c?.title}
                </Tooltip>
              ),
              width: 140,
              ellipsis: true,
            };
            let fixedWidthLimit = {};
            let fixedMaxWidth = {};
            if (i === columns?.length - 1) {
              if (columns?.length > 4) {
                newC.fixed = 'right';
                fixedWidthLimit = {
                  widthLimit: 108,
                };
                fixedMaxWidth = {
                  'max-width': '108px',
                };
              }
            }
            if (i === 0) {
              newC.width = 180;
            }
            if (from === 'ReferenceOnlineCheck' && c.dataIndex === 'status') {
              newC.className = 'refer-warning-txt';
            }
            newC.render = (t, record) => {
              let content = t;
              if (c.dataIndex === 'org') {
                content = orgMap[t]?.name || t;
              }
              if (c.dataIndex === 'app') {
                content = appList.find((a) => a.key === t)?.name || t;
              }
              // 强弱引用
              let tagInfo = null;
              if (i === 0 && record?.referenceCheckType) {
                let checkObj;

                // 能进行下一步操作
                const isStrong = ['STRONG'].includes(record?.referenceCheckType);
                if (isStrong) {
                  checkObj = {
                    name: record?.referenceCheckTypeName || getText('strong', props?.lang),
                    className: 'refer-tag-strong',
                  };
                } else {
                  checkObj = {
                    name: record?.referenceCheckTypeName || getText('weak', props?.lang),
                    className: 'refer-tag-weak',
                  };
                }
                tagInfo = checkObj ? (
                  <span className={`refer-tag ${checkObj.className}`}>{checkObj.name}</span>
                ) : null;
              }

              if (c.dataIndex === goName && record?.goLink) {
                return (
                  <AHref href={record?.goLink} target="_blank" unmountHandle={unmountHandle}>
                    <Tooltip placement="topLeft" title={content || '- -'}>
                      <span className="content-span" style={fixedMaxWidth}>
                        {tagInfo}
                        {content || '- -'}
                      </span>
                    </Tooltip>
                  </AHref>
                );
              }
              if (c.dataIndex === goName) {
                return (
                  <Ellipsis
                    placement="topLeft"
                    copyable={true}
                    {...fixedWidthLimit}
                    title={content || '- -'}
                    prefix={tagInfo}
                  />
                );
              }
              return (
                <Tooltip placement="topLeft" title={content || '- -'}>
                  <span className="content-span" style={fixedMaxWidth}>
                    {tagInfo}
                    {content || '- -'}
                  </span>
                </Tooltip>
              );
            };

            return newC;
          });
        }
        return (
          <div className="reference-body-item" key={dIndex}>
            <Row className="reference-body-title" type="flex" align="middle">
              <span className="body-title-content">
                <Tooltip title={d?.title} placement="topLeft">
                  {d?.title}
                </Tooltip>
              </span>
              {d?.tips && (
                <Tooltip title={d?.tips} placement="topLeft">
                  <Icon type="info-circle" className="ml-6" />
                </Tooltip>
              )}
            </Row>
            {renderColumns?.length && (
              <Table
                className="reference-table"
                bordered={false}
                dataSource={d?.rows}
                columns={renderColumns}
                pagination={false}
                scroll={{
                  x: (renderColumns.length - 1) * 140 + 40,
                }}
                rowKey={(e, i) => `${dIndex}_${i}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
