/*
 * @Description: copy from TdTag,  有部分逻辑改动
 * @Author: 郑泳健
 * @Date: 2022-11-17 17:31:31
 * @LastEditors: 郑泳健
 * @LastEditTime: 2022-12-29 19:55:37
 */
import { Tooltip } from 'tntd';
import Cookies from 'universal-cookie';
import './index.less';

const TYPE_MAP = {
  INT: {
    displayName: '整数',
    enDisplayName: 'Integer',
    color: '#5262C7',
  },
  DOUBLE: {
    displayName: '小数',
    enDisplayName: 'Float',
    color: '#00D2C2',
  },
  STRING: {
    displayName: '字符',
    enDisplayName: 'String',
    color: '#826AF9',
  },
  ENUM: {
    displayName: '枚举',
    enDisplayName: 'Enum',
    color: '#00C5DC',
  },
  BOOLEAN: {
    displayName: '布尔',
    enDisplayName: 'Boolean',
    color: '#4A9AF7',
  },
  DATETIME: {
    displayName: '日期',
    enDisplayName: 'Date',
    color: '#826AF9',
  },
  INTEGER: {
    displayName: '整数',
    enDisplayName: 'Integer',
    color: '#5262C7',
  },
  FLOAT: {
    displayName: '小数',
    enDisplayName: 'Float',
    color: '#00D2C2',
  },
  BOOL: {
    displayName: '布尔',
    enDisplayName: 'Boolean',
    color: '#4A9AF7',
  },
  DATE: {
    displayName: '日期',
    enDisplayName: 'Date',
    color: '#826AF9',
  },
  ARRAY: {
    displayName: '数组',
    enDisplayName: 'Array',
    color: '#00D2C2',
  },
};

const cookies = new Cookies();
export const getLang = () => {
  return cookies.get('lang') || 'cn';
};

const Tag = (props) => {
  let { data = {}, showSourceName = true, bool = true, inputValue, ...rest } = props;
  const lang = getLang();
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
        <sup style={{ color: dataTypeObj.color }}>
          {lang === 'en' ? dataTypeObj.enDisplayName : dataTypeObj.displayName}{' '}
        </sup>
      )}
      {showImg && (
        <Tooltip title={'导入待提交'} placement="top">
          <img src={require('./imgs/import_export.svg')} className="tag-img" />
        </Tooltip>
      )}
      {showSourceName && `[${data?.sourceName}]`}
    </div>
  );
};

export default Tag;
