/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
import { Tooltip } from 'tntd';
import './index.less';

const TYPE_MAP = (I18N) => {
  if (!I18N) {
    return {};
  }
  return {
    INT: {
      displayName: I18N.cascadertag.index.zhengShu,
      enDisplayName: 'Integer',
      color: '#5262C7',
    },
    DOUBLE: {
      displayName: I18N.cascadertag.index.xiaoShu,
      enDisplayName: 'Float',
      color: '#00D2C2',
    },
    STRING: {
      displayName: I18N.cascadertag.index.ziFu,
      enDisplayName: 'String',
      color: '#826AF9',
    },
    ENUM: {
      displayName: I18N.cascadertag.index.meiJu,
      enDisplayName: 'Enum',
      color: '#00C5DC',
    },
    BOOLEAN: {
      displayName: I18N.cascadertag.index.buEr,
      enDisplayName: 'Boolean',
      color: '#4A9AF7',
    },
    DATETIME: {
      displayName: I18N.cascadertag.index.riQi,
      enDisplayName: 'Date',
      color: '#826AF9',
    },
    INTEGER: {
      displayName: I18N.cascadertag.index.zhengShu,
      enDisplayName: 'Integer',
      color: '#5262C7',
    },
    FLOAT: {
      displayName: I18N.cascadertag.index.xiaoShu,
      enDisplayName: 'Float',
      color: '#00D2C2',
    },
    BOOL: {
      displayName: I18N.cascadertag.index.buEr,
      enDisplayName: 'Boolean',
      color: '#4A9AF7',
    },
    DATE: {
      displayName: I18N.cascadertag.index.riQi,
      enDisplayName: 'Date',
      color: '#826AF9',
    },
    ARRAY: {
      displayName: I18N.cascadertag.index.shuZu,
      enDisplayName: 'Array',
      color: '#00D2C2',
    },
  };
};

const Tag = (props) => {
  let { data = {}, showSourceName = true, bool = true, inputValue, locale: I18N, ...rest } = props;
  let showImg = false;
  let filedType;
  let dataTypeObj = {};
  let status = data?.status || data?.ruleSetStatus;
  data?.metricArea && data.metricArea === 'EDIT' && (showImg = true); // 指标显示导入待提交
  status === 'import_wait_commit' && (showImg = true); // 规则集显示导入待提交

  if (bool) {
    filedType = data.dataType || data.datatype || data.type || '';
    dataTypeObj = TYPE_MAP(I18N)[filedType.toUpperCase()]
      ? TYPE_MAP(I18N)[filedType.toUpperCase()]
      : {}; // 字段和指标的类型和颜色
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
      {showSourceName && !!data?.sourceName && `[${data?.sourceName}]`}
    </div>
  );
};

export default Tag;
