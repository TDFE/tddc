import { Tooltip, Icon, Table, Row, Empty, Ellipsis, Tag, Title } from 'tntd';
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
    showPagination = true,
    type,
  } = props;

  let paginationInfo = {
    pagination: {
      hideOnSinglePage: true,
      size: 'small',
    },
  };

  if (!showPagination) {
    paginationInfo = {
      pagination: false,
    };
  }
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
              width: 160,
              ellipsis: true,
            };
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
                    color: 'red',
                  };
                } else {
                  checkObj = {
                    name: record?.referenceCheckTypeName || getText('weak', props?.lang),
                    color: 'grey',
                  };
                }
                tagInfo = checkObj ? (
                  <Tag size="small" color={checkObj.color}>
                    {checkObj.name}
                  </Tag>
                ) : null;
              }

              if (c.dataIndex === goName && record?.goLink) {
                return (
                  <AHref href={record?.goLink} target="_blank" unmountHandle={unmountHandle}>
                    <Tooltip placement="topLeft" title={content || '- -'}>
                      <span className="content-span">
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
                    title={content || '- -'}
                    prefix={tagInfo}
                  />
                );
              }
              return (
                <Tooltip placement="topLeft" title={content || '- -'}>
                  <span className="content-span">
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
            <Title
              className="reference-body-title"
              size="small"
              title={d?.title}
              tooltip={d?.title}
              subTitle={
                d?.tips && (
                  <Tooltip title={d?.tips} placement="topLeft">
                    <Icon type="info-circle" />
                  </Tooltip>
                )
              }
            />

            {renderColumns?.length && (
              <Table
                size="small"
                bordered
                className="reference-table"
                striped={true}
                dataSource={d?.rows}
                columns={renderColumns}
                scroll={
                  renderColumns.length > 4
                    ? {
                        x: renderColumns.length * 160,
                      }
                    : {}
                }
                {...paginationInfo}
                rowKey={(e, i) => `${dIndex}_${i}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
