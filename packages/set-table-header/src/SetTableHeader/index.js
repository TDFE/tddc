/*
 * @Description: 自定义表头设置
 * @Author: 郑泳健
 * @Date: 2022-09-29 10:24:28
 * @LastEditors: 郑泳健
 * @LastEditTime: 2023-01-31 16:51:05
 */
import I18N from '../locale';
import React, { useState, useEffect, memo } from 'react';
import { Alert, Select, Button, Tooltip, Icon, message } from 'antd';
import Sortable from 'react-sortablejs';
import { makeRandomCode } from '../utils';
import './index.less';

const { Option } = Select;

const SetTableHeader = ({
  renderItem,
  allTableHead = [],
  currentTableHead = [],
  defaultTableHead = [],
  onSetDefault,
  onCancel = () => {},
  onOk = async () => {},
}) => {
  const [loading, setLoading] = useState(false);
  // 当前被选中的表头
  const [configItem, setConfigItem] = useState([]);

  useEffect(() => {
    if (Array.isArray(currentTableHead)) {
      setConfigItem([...currentTableHead]);
    }
  }, [currentTableHead]);

  /** 拖拽修改排序 */
  const changeReactSortable = (order) => {
    configItem.sort((a, b) => {
      return order.indexOf(a['field']) - order.indexOf(b['field']);
    });

    setConfigItem([...configItem]);
  };

  /** 新增一行 */
  const addTableHeadCustomItem = (index) => {
    configItem.splice(index + 1, 0, {
      uuid: makeRandomCode(),
      field: undefined,
    });

    setConfigItem([...configItem]);
  };

  /** 修改当前行选中的字段 */
  const changeTableHeadItem = (index, item) => {
    const isExist = configItem.find((res) => res.field === item.field);
    if (!isExist) {
      configItem.splice(index, 1, item);
      setConfigItem([...configItem]);
    } else {
      message.warning(I18N.settableheader.index.biaoTouYiCunZai);
    }
  };

  /** 删除一行 */
  const deleteTableHeadCustomItem = (index) => {
    configItem.splice(index, 1);
    setConfigItem([...configItem]);
  };

  /** 设置默认值 */
  const handleSetDefault = async () => {
    if (defaultTableHead) {
      setConfigItem(defaultTableHead);
    } else if (onSetDefault) {
      const defaultValue = await onSetDefault();
      setConfigItem(defaultValue);
    }
  };

  /** 保存 */
  const handleOk = async () => {
    const hasEntry = configItem?.some(({ field }) => !field);

    if (hasEntry) {
      message.error(I18N.settableheader.index.youZiDuanWeiKong);
      return;
    }

    if (Array.isArray(configItem) && !!configItem.length) {
      setLoading(true);
      await onOk().finally(() => {
        setLoading(false);
      });
    } else {
      message.error(I18N.settableheader.index.qingZhiShaoXuanZe);
    }
  };

  return (
    <div className="set-columns-wrapper">
      <div className="set-columns-body">
        <Alert
          style={{ marginBottom: 10 }}
          message={I18N.settableheader.index.biaoTouZiDuanKe}
          type="info"
          showIcon
        />

        <div className="set-col-head">
          <Sortable
            options={{
              animation: 150,
              ghostClass: 'blue-background-class',
            }}
            tag="div"
            onChange={(order) => {
              changeReactSortable(order);
            }}
          >
            {configItem.map((item, index) => {
              return (
                <div className="table-item" key={index} data-id={item?.field}>
                  <div className="left">
                    <Select
                      placeholder={I18N.settableheader.index.qingXuanZeBiaoTou}
                      className="table-item-select"
                      onChange={(val, e) => {
                        changeTableHeadItem(index, e.props.item);
                      }}
                      value={item.field === `${index}` ? undefined : item.field}
                      showSearch
                      filterOption={(input, option) => {
                        return (
                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        );
                      }}
                    >
                      {allTableHead.map((subItem) => {
                        if (renderItem) {
                          return renderItem(subItem);
                        }
                        return (
                          <Option key={subItem.field} item={subItem} value={subItem.field}>
                            {subItem.fieldName}
                          </Option>
                        );
                      })}
                    </Select>
                  </div>
                  <div className="right">
                    <Tooltip title={I18N.settableheader.index.tianJiaYiXiang} placement="left">
                      <Icon
                        className="add"
                        type="plus-circle-o"
                        onClick={() => {
                          addTableHeadCustomItem(index);
                        }}
                      />
                    </Tooltip>
                    {configItem.length > 3 && (
                      <Tooltip
                        title={I18N.settableheader.index.yiChuDangQianXing}
                        placement="right"
                      >
                        <Icon
                          className="delete"
                          type="delete"
                          onClick={() => {
                            deleteTableHeadCustomItem(index);
                          }}
                        />
                      </Tooltip>
                    )}
                  </div>
                </div>
              );
            })}
          </Sortable>
        </div>
      </div>
      <div className="ant-modal-footer modal-footer">
        <Button type="primary" onClick={onCancel}>
          {I18N.settableheader.index.quXiao}
        </Button>
        <Button type="primary" onClick={handleSetDefault}>
          {I18N.settableheader.index.huiFuMoRenBiao}
        </Button>
        <Button type="primary" onClick={handleOk} loading={loading}>
          {I18N.settableheader.index.queDing}
        </Button>
      </div>
    </div>
  );
};

export default memo(SetTableHeader);
