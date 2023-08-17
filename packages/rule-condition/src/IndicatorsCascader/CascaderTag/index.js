/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
import I18N from '../../locale.js';
import { Tooltip } from 'antd';
import './index.less';

const TYPE_MAP = {
  INT: {
    displayName: I18N.cascadertag.index.zhengShu,
    color: '#5262C7',
  },
  DOUBLE: {
    displayName: I18N.cascadertag.index.xiaoShu,
    color: '#00D2C2',
  },
  STRING: {
    displayName: I18N.cascadertag.index.ziFu,
    color: '#826AF9',
  },
  ENUM: {
    displayName: I18N.cascadertag.index.meiJu,
    color: '#00C5DC',
  },
  BOOLEAN: {
    displayName: I18N.cascadertag.index.buEr,
    color: '#4A9AF7',
  },
  DATETIME: {
    displayName: I18N.cascadertag.index.riQi,
    color: '#826AF9',
  },
  INTEGER: {
    displayName: I18N.cascadertag.index.zhengShu,
    color: '#5262C7',
  },
  FLOAT: {
    displayName: I18N.cascadertag.index.xiaoShu,
    color: '#00D2C2',
  },
  BOOL: {
    displayName: I18N.cascadertag.index.buEr,
    color: '#4A9AF7',
  },
  DATE: {
    displayName: I18N.cascadertag.index.riQi,
    color: '#826AF9',
  },
  ARRAY: {
    displayName: I18N.cascadertag.index.shuZu,
    color: '#00D2C2',
  },
};

const Tag = (props) => {
  let { data = {}, showSourceName = true, bool = true, inputValue, ...rest } = props;
  let showImg = false;
  let filedType;
  let dataTypeObj = {};
  let status = data?.status || data?.ruleSetStatus;
  data?.metricArea && data.metricArea === 'EDIT' && (showImg = true); // 指标显示导入待提交
  status === 'import_wait_commit' && (showImg = true); // 规则集显示导入待提交

  if (bool) {
    filedType = data.dataType || data.datatype || data.type || '';
    dataTypeObj = TYPE_MAP[filedType.toUpperCase()] ? TYPE_MAP[filedType.toUpperCase()] : {}; // 字段和指标的类型和颜色
  }

  return (
    <div className="td-tag" {...rest} style={{ lineHeight: '22px' }}>
      {bool && !inputValue && (
        <sup style={{ color: dataTypeObj.color }}>{dataTypeObj.displayName} </sup>
      )}
      {showImg && (
        <Tooltip title={I18N.cascadertag.index.daoRuDaiTiJiao} placement="top">
          <img src={require('./imgs/import_export.svg')} className="tag-img" />
        </Tooltip>
      )}
      {showSourceName && `[${data?.sourceName}]`}
    </div>
  );
};

export default Tag;
