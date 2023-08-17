import I18N from '../locale.js';
import React from 'react';
import { cloneDeep } from 'lodash';
import { Input, Icon, Tooltip, Row, Col, Select } from 'antd';
import IndicatorsCascader from '../IndicatorsCascader';
// import IndicatorsCascader from '@tddc/virtual-cascader';

// import conditionOperator from '../constants';
import { dataTypeSpecialConvert } from '../utils/index';

import './index.less';

const Option = Select.Option;
const InputGroup = Input.Group;

class OneCondition extends React.PureComponent {
  state = {
    mapOption: {},
  };
  constructor(props) {
    super(props);
    this.deleteCondition = this.deleteCondition.bind(this);
    this.addCondition = this.addCondition.bind(this);
    this.changeLogicOperator = this.changeLogicOperator.bind(this);
    this.changeConditionField = this.changeConditionField.bind(this);
  }

  componentDidMount() {
    let { ruleAndIndexFieldList } = this.props;

    const _filterMapOption = this.formatData(ruleAndIndexFieldList);
    this.setState({ mapOption: _filterMapOption });
  }
  formatData = (options) => {
    let map = {};
    const loop = (node) => {
      if (!node?.data) {
        return;
      }

      node?.data?.forEach((item) => {
        let { name: sourceKey, dName: sourceName, bizType } = node;
        item.sourceKey = sourceKey;
        item.sourceName = sourceName;
        item.bizType = bizType;
        map[item.name] = item;
        return loop(item);
      });
    };
    options.map((item) => {
      map[item.name] = item;
      return loop(item);
    });
    return map;
  };

  addCondition() {
    let { conditionArr, setCondition, allCondition } = this.props;
    let newAllCondition = cloneDeep(allCondition);

    let singleConditionTemp = {
      property: null,
      op: '==',
      enumTypeValues: null,
      value: null,
      propertyDataType: null,
      type: 'context',
      rightValueType: 'context',
    };

    newAllCondition[conditionArr[0]]['children'].splice(
      conditionArr[1] + 1,
      0,
      singleConditionTemp,
    );
    setCondition(newAllCondition);
  }

  deleteCondition() {
    let { conditionArr, setCondition, allCondition } = this.props;
    let newAllCondition = cloneDeep(allCondition);
    if (conditionArr.length === 1) {
      newAllCondition.splice(conditionArr[0], 1);

      newAllCondition = newAllCondition.map((v, index) => {
        v['priority'] = index + 1;
        return v;
      });
      setCondition(newAllCondition);
    } else if (conditionArr.length === 2) {
      // 如果是条件组，还需要判断是否只有一条数据了
      let groupList = newAllCondition[conditionArr[0]]['children'];
      if (groupList.length === 1) {
        newAllCondition.splice(conditionArr[0], 1);

        newAllCondition = newAllCondition.map((v, index) => {
          v['priority'] = index + 1;
          return v;
        });
      } else {
        groupList.splice(conditionArr[1], 1);
      }
      setCondition(newAllCondition);
    }
  }

  changeLogicOperator(e) {
    let { conditionArr, setCondition, allCondition } = this.props;
    let newAllCondition = cloneDeep(allCondition);

    newAllCondition[conditionArr[0]]['logicOperator'] = e;

    setCondition(newAllCondition);
  }

  changeConditionField(field, type, e) {
    let {
      conditionArr,
      conditionSingleData: cgDada,
      setCondition,
      globalStore,
      allCondition,
      conditionSelectOptions,
      ruleSetExtendSelect,
      ruleAndIndexFieldList,
    } = this.props;
    const { mapOption } = this.state;
    let newAllCondition = cloneDeep(allCondition);
    let conditionSingleData = cloneDeep(cgDada);

    let value = '';
    if (type === 'input') {
      value = e.target.value;
    } else if (type === 'select') {
      value = e;
    }

    let currentLine = null; // 当前设置的条件line

    if (conditionArr.length === 1) {
      currentLine = conditionSingleData;
    } else if (conditionArr.length === 2) {
      // 如果是条件组
      let groupList = newAllCondition[conditionArr[0]];
      currentLine = groupList['children'][conditionArr[1]];
    }
    currentLine[field] = value;

    if (
      currentLine['propertyDataType'] === 'ENUM' ||
      currentLine['propertyDataType'] === 'BOOLEAN'
    ) {
      currentLine['rightValueType'] = 'input';
    }

    if (field === 'property') {
      let mapItem;
      if (this.props.type === 'link') {
        mapItem = mapOption[value];
      } else {
        mapItem = mapOption[value];
      }
      if (!value) {
        return;
      }
      if (value.startsWith('salaxyzb')) {
        currentLine['type'] = 'gaea_indicatrix';
      } else if (value.startsWith('offlinezb')) {
        currentLine['type'] = 'gaea_indicatrix';
      } else {
        currentLine['type'] = 'context';
      }
      if (currentLine.propertyDataType !== mapItem.type) {
        currentLine.op = null;
      }
      currentLine['propertyDataType'] = mapItem.type;
      currentLine['value'] = null;
    } else if (field === 'rightValueType') {
      currentLine['value'] = null;
    } else if (field === 'op') {
      currentLine['value'] = null;
    }

    if (conditionArr.length === 1) {
      newAllCondition[conditionArr[0]] = { ...newAllCondition[conditionArr[0]], ...currentLine };
      setCondition(newAllCondition);
    } else if (conditionArr.length === 2) {
      // 如果是条件组
      newAllCondition[conditionArr[0]]['children'][conditionArr[1]] = {
        ...newAllCondition[conditionArr[0]]['children'][conditionArr[1]],
        ...currentLine,
      };
      setCondition(newAllCondition);
    }
  }

  render() {
    let {
      globalStore,
      conditionData,
      conditionSingleData,
      conditionType,
      conditionArr,
      disabled,
      type,
      appCode,
      orgCode,
      isPublish,
      noImportWaitCommit = false,
      ruleSetExtendSelect,
      EnumChildOption,
      NOEnumChildOption,
      childOption,
    } = this.props;

    let conditionOperator = {
      STRING: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: 'include',
          dName: I18N.onecondition.baoHan,
          enDName: 'include',
        },
        {
          name: 'exclude',
          dName: I18N.onecondition.buBaoHan,
          enDName: 'exclude',
        },
        {
          name: 'prefix',
          dName: I18N.onecondition.qianZhui,
          enDName: 'prefix',
        },
        {
          name: 'suffix',
          dName: I18N.onecondition.houZhui,
          enDName: 'suffix',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
        {
          name: 'in',
          dName: I18N.onecondition.cunZaiYu,
          enDName: 'in',
        },
        {
          name: 'notin',
          dName: I18N.onecondition.buCunZaiYu,
          enDName: 'notin',
        },
      ],
      DOUBLE: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: '>',
          dName: I18N.onecondition.daYu,
          enDName: 'greater than',
        },
        {
          name: '>=',
          dName: I18N.onecondition.daYuDengYu,
          enDName: 'equal or greater than',
        },
        {
          name: '<',
          dName: I18N.onecondition.xiaoYu,
          enDName: 'less than',
        },
        {
          name: '<=',
          dName: I18N.onecondition.xiaoYuDengYu,
          enDName: 'equal or less than',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
      ],
      INT: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: '>',
          dName: I18N.onecondition.daYu,
          enDName: 'greater than',
        },
        {
          name: '>=',
          dName: I18N.onecondition.daYuDengYu,
          enDName: 'equal or greater than',
        },
        {
          name: '<',
          dName: I18N.onecondition.xiaoYu,
          enDName: 'less than',
        },
        {
          name: '<=',
          dName: I18N.onecondition.xiaoYuDengYu,
          enDName: 'equal or less than',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
        {
          name: 'in',
          dName: I18N.onecondition.cunZaiYu,
          enDName: 'in',
        },
        {
          name: 'notin',
          dName: I18N.onecondition.buCunZaiYu,
          enDName: 'notin',
        },
      ],
      LONG: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: '>',
          dName: I18N.onecondition.daYu,
          enDName: 'greater than',
        },
        {
          name: '>=',
          dName: I18N.onecondition.daYuDengYu,
          enDName: 'equal or greater than',
        },
        {
          name: '<',
          dName: I18N.onecondition.xiaoYu,
          enDName: 'less than',
        },
        {
          name: '<=',
          dName: I18N.onecondition.xiaoYuDengYu,
          enDName: 'equal or less than',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
        {
          name: 'in',
          dName: I18N.onecondition.cunZaiYu,
          enDName: 'in',
        },
        {
          name: 'notin',
          dName: I18N.onecondition.buCunZaiYu,
          enDName: 'notin',
        },
      ],
      DATETIME: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: '>',
          dName: I18N.onecondition.daYu,
          enDName: 'greater than',
        },
        {
          name: '>=',
          dName: I18N.onecondition.daYuDengYu,
          enDName: 'equal or greater than',
        },
        {
          name: '<',
          dName: I18N.onecondition.xiaoYu,
          enDName: 'less than',
        },
        {
          name: '<=',
          dName: I18N.onecondition.xiaoYuDengYu,
          enDName: 'equal or less than',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
      ],
      BOOLEAN: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
      ],
      ENUM: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: 'isnull',
          dName: I18N.onecondition.weiKong,
          enDName: 'isnull',
        },
        {
          name: 'notnull',
          dName: I18N.onecondition.buWeiKong,
          enDName: 'notnull',
        },
        {
          name: 'in',
          dName: I18N.onecondition.cunZaiYu,
          enDName: 'in',
        },
        {
          name: 'notin',
          dName: I18N.onecondition.buCunZaiYu,
          enDName: 'notin',
        },
      ],

      ARRAY: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
        {
          name: 'include',
          dName: I18N.onecondition.baoHan,
          enDName: 'include',
        },
        {
          name: 'exclude',
          dName: I18N.onecondition.buBaoHan,
          enDName: 'exclude',
        },
      ],
      POLICY: [
        {
          name: '==',
          dName: I18N.onecondition.dengYu,
          enDName: 'equal',
        },
        {
          name: '!=',
          dName: I18N.onecondition.buDengYu,
          enDName: 'unequal',
        },
      ],
      // 地址规则
      ADDRESS_FIELD: [
        {
          name: 'similarityMatch',
          dName: I18N.onecondition.xiangSiDuPiPei,
          enDName: 'similarityMatch',
        },
        {
          name: 'similarityUnMatch',
          dName: I18N.onecondition.xiangSiDuBuPi,
          enDName: 'similarityUnMatch',
        },
      ],
      // 名单
      FIELD: [
        {
          name: 'match',
          dName: I18N.onecondition.piPei,
          enDName: 'match',
        },
        {
          name: 'unmatch',
          dName: I18N.onecondition.buPiPei,
          enDName: 'unmatch',
        },
      ],
    };
    const operaTypeInOrNot =
      conditionSingleData['op'] === 'in' || conditionSingleData['op'] === 'notin';

    let enumValue = conditionSingleData['value'] || undefined;
    // op为存在于，select为多选

    if (operaTypeInOrNot && !(enumValue instanceof Array)) {
      enumValue = (conditionSingleData['value'] && conditionSingleData['value'].split(',')) || [];
    }
    const { type: leftOptionDataType, customPlaceholder } =
      dataTypeSpecialConvert(conditionSingleData);

    let style = {
      display: 'inline-block',
      width: 60,
      marginRight: 70,
    };

    if (conditionType === 'group') {
      style = {
        ...style,
        position: 'absolute',
        top: 'calc(50% - 17px)',
      };
    }

    let optionsData = NOEnumChildOption['all'] || [];

    return (
      <div className={`${conditionType === 'group' ? 'group-item' : ''} condition-group-item`}>
        {(conditionArr[1] === 0 || !conditionArr[1]) && (
          <Col style={style}>
            <span className="letters">{conditionArr[0] + 1}</span>
          </Col>
        )}

        {/* <Row gutter={4} style={{ width: 800, display: 'flex' }}> */}
        {conditionType === 'group' && conditionArr[1] === 0 && (
          <Col className={`link-from${conditionArr[0]} link-line`}>
            <Select
              value={conditionData.logicOperator || undefined}
              onChange={this.changeLogicOperator.bind(this)}
              dropdownMatchSelectWidth={false}
              disabled={disabled}
            >
              <Option value="&&" title={I18N.onecondition.yu}>
                {I18N.onecondition.yu}
              </Option>
              <Option value="||" title={I18N.onecondition.huo}>
                {I18N.onecondition.huo}
              </Option>
            </Select>
          </Col>
        )}
        {conditionType === 'group' && <div className="group-placeholder" />}
        <Col style={{ width: 200 }} className={'link-to' + conditionArr[0] + conditionArr[1]}>
          <IndicatorsCascader
            options={childOption['all']}
            style={{ width: '100%' }}
            fieldNames={{ label: 'dName', value: 'name', children: 'data' }}
            value={
              conditionSingleData && conditionSingleData['property']
                ? conditionSingleData['property']
                : undefined
            }
            placeholder={I18N.onecondition.qingXuanZe}
            onChange={async (value, selectObj) => {
              const { enumTypeValues, name } = selectObj;

              await this.changeConditionField('property', 'select', name);

              if (enumTypeValues && enumTypeValues.length) {
                await this.changeConditionField('enumTypeValues', 'select', enumTypeValues || name);
              }
              if (selectObj.type === 'ENUM' || selectObj.type === 'BOOLEAN') {
                await this.changeConditionField('rightValueType', 'select', 'input');
              }
            }}
            showSearch
            setTitle={(option = []) => {
              let isLink = false;
              let value = conditionSingleData?.property;
              isLink = value?.includes('offlinezb') || value?.includes('salaxyzb');
              let dom = option;
              let tab = option && option[0].props?.data?.metricArea === 'EDIT' ? 2 : 1;
              if (isLink) {
                let text = option[1];
                let url = value.includes('offlinezb')
                  ? `/index/offIndexManage?currentTab=${tab}&featureSetName=${text}`
                  : `/index/realtime?currentTab=${tab}&metricName=${text}`;
                dom = (
                  <a
                    className="link-zb"
                    onClick={() => {
                      history.push(url);
                    }}
                  >
                    {dom}
                  </a>
                );
              }
              return dom;
            }}
          />
        </Col>
        <Col className="gutter-row" style={{ width: 100 }}>
          <div className="gutter-box">
            <Select
              value={
                conditionSingleData && conditionSingleData['op']
                  ? conditionSingleData['op']
                  : undefined
              }
              placeholder={I18N.onecondition.qingXuanZe}
              onChange={this.changeConditionField.bind(this, 'op', 'select')}
              dropdownMatchSelectWidth={false}
            >
              {conditionOperator[
                conditionSingleData?.propertyDataType
                  ? conditionSingleData?.propertyDataType.toUpperCase()
                  : 'STRING'
              ].map((item, index) => {
                return (
                  <Option value={item.name} key={index} title={item.dName}>
                    {item.dName}
                  </Option>
                );
              })}
            </Select>
          </div>
        </Col>
        {conditionSingleData &&
          conditionSingleData['op'] &&
          conditionSingleData['op'] !== 'isnull' &&
          conditionSingleData['op'] !== 'notnull' && (
            <Col className="gutter-row" style={{ width: 375 }}>
              <div className="gutter-box">
                {conditionSingleData['rightValueType'] === 'input' &&
                  leftOptionDataType === 'ENUM' && (
                    <InputGroup compact>
                      <Select
                        value={
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined
                        }
                        style={{ width: '30%' }}
                        onChange={this.changeConditionField.bind(this, 'rightValueType', 'select')}
                        dropdownMatchSelectWidth={false}
                      >
                        <Option value="input" title={I18N.onecondition.changLiang}>
                          {/* 常量 */}
                          {I18N.onecondition.changLiang}
                        </Option>
                        <Option value="context" title={I18N.onecondition.bianLiang}>
                          {/* 变量 */}
                          {I18N.onecondition.bianLiang}
                        </Option>
                      </Select>
                      {(leftOptionDataType === 'BOOLEAN' && (
                        <Select
                          style={{ width: '70%' }}
                          value={
                            conditionSingleData && conditionSingleData['value']
                              ? conditionSingleData['value']
                              : undefined
                          }
                          placeholder={customPlaceholder || I18N.onecondition.qingXuanZe} // 请选择
                          onChange={this.changeConditionField.bind(this, 'value', 'select')}
                          showSearch
                          optionFilterProp="children"
                          dropdownMatchSelectWidth={false}
                        >
                          <Option value="true">{I18N.onecondition.shiTRUE}</Option>
                          <Option value="false">{I18N.onecondition.fouFALS}</Option>
                        </Select>
                      )) || (
                        <Select
                          // conditionSingleData["value"] || undefined
                          value={enumValue || undefined}
                          style={{ width: '70%' }}
                          placeholder={customPlaceholder || I18N.onecondition.qingXuanZe} // lang:请选择
                          onChange={this.changeConditionField.bind(this, 'value', 'select')}
                          showSearch
                          optionFilterProp="children"
                          dropdownMatchSelectWidth={false}
                          mode={operaTypeInOrNot ? 'multiple' : null}
                        >
                          {conditionSingleData &&
                            conditionSingleData['enumTypeValues']?.map((item, index) => {
                              return (
                                <Option
                                  value={item.value}
                                  key={index}
                                  title={`${item.description} [${item.value}]`}
                                >
                                  {item.description} [{item.value}]
                                </Option>
                              );
                            })}
                        </Select>
                      )}
                    </InputGroup>
                  )}
                {conditionSingleData['rightValueType'] === 'input' &&
                  leftOptionDataType !== 'ENUM' && (
                    <InputGroup compact>
                      <Select
                        value={
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined
                        }
                        style={{ width: '30%' }}
                        onChange={this.changeConditionField.bind(this, 'rightValueType', 'select')}
                        dropdownMatchSelectWidth={false}
                      >
                        <Option value="input" title={I18N.onecondition.changLiang}>
                          {/* 常量 */}
                          {I18N.onecondition.changLiang}
                        </Option>
                        <Option value="context" title={I18N.onecondition.bianLiang}>
                          {/* 变量 */}
                          {I18N.onecondition.bianLiang}
                        </Option>
                      </Select>
                      {(leftOptionDataType === 'BOOLEAN' && (
                        <Select
                          style={{ width: '70%' }}
                          value={
                            conditionSingleData && conditionSingleData['value']
                              ? conditionSingleData['value']
                              : undefined
                          }
                          placeholder={customPlaceholder || I18N.onecondition.qingXuanZe} // 请选择
                          onChange={this.changeConditionField.bind(this, 'value', 'select')}
                          showSearch
                          optionFilterProp="children"
                          dropdownMatchSelectWidth={false}
                        >
                          <Option value="true">{I18N.onecondition.shiTRUE}</Option>
                          <Option value="false">{I18N.onecondition.fouFALS}</Option>
                        </Select>
                      )) || (
                        <Input
                          style={{ width: '70%' }}
                          value={
                            conditionSingleData && conditionSingleData['value']
                              ? conditionSingleData['value']
                              : undefined
                          }
                          placeholder={
                            customPlaceholder ||
                            (operaTypeInOrNot
                              ? I18N.onecondition.yingWenDouHaoFen
                              : I18N.onecondition.qingShuRuChangLiang)
                          } // 请输入常量内容
                          onChange={this.changeConditionField.bind(this, 'value', 'input')}
                        />
                      )}
                    </InputGroup>
                  )}
                {conditionSingleData &&
                  conditionSingleData['rightValueType'] === 'context' &&
                  leftOptionDataType !== 'ENUM' && (
                    <InputGroup compact>
                      <Select
                        value={
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined
                        }
                        style={{ width: '30%' }}
                        onChange={this.changeConditionField.bind(this, 'rightValueType', 'select')}
                        dropdownMatchSelectWidth={false}
                      >
                        <Option value="input" title={I18N.onecondition.changLiang}>
                          {/* 常量 */}
                          {I18N.onecondition.changLiang}
                        </Option>
                        <Option value="context" title={I18N.onecondition.bianLiang}>
                          {/* 变量 */}
                          {I18N.onecondition.bianLiang}
                        </Option>
                      </Select>
                      <IndicatorsCascader
                        style={{ width: '70%' }}
                        options={optionsData || []}
                        fieldNames={{ label: 'dName', value: 'name', children: 'data' }}
                        value={
                          conditionSingleData && conditionSingleData['value']
                            ? conditionSingleData['value']
                            : undefined
                        }
                        placeholder={customPlaceholder || I18N.onecondition.qingXuanZe} // 请选择
                        onChange={this.changeConditionField.bind(this, 'value', 'select')}
                        showSearch
                        setTitle={(option = []) => {
                          let isLink = false;
                          let value = conditionSingleData?.property;
                          isLink = value?.includes('offlinezb') || value?.includes('salaxyzb');
                          let dom = option;
                          let tab = option && option[0].props?.data?.metricArea === 'EDIT' ? 2 : 1;
                          if (isLink) {
                            let text = option[1];
                            let url = value.includes('offlinezb')
                              ? `/index/offIndexManage?currentTab=${tab}&featureSetName=${text}`
                              : `/index/realtime?currentTab=${tab}&metricName=${text}`;
                            dom = (
                              <a
                                className="link-zb"
                                onClick={() => {
                                  history.push(url);
                                }}
                              >
                                {dom}
                              </a>
                            );
                          }
                          return dom;
                        }}
                      />
                      {/* <TooltipSelect
                                                    groupIndex={this.props.groupIndex}
                                                    updateIndex={this.props.updateIndex}
                                                    isMemo={true}
                                                    style={{ width: '70%' }}
                                                    field="value"
                                                    // conditionSingleData && conditionSingleData["value"] ? conditionSingleData["value"] : undefined
                                                    value={
                                                        conditionSingleData && conditionSingleData['value']
                                                            ? conditionSingleData['value']
                                                            : undefined
                                                    }
                                                    placeholder={customPlaceholder || "请选择"} // 请选择
                                                    onChange={this.changeConditionField.bind(this, 'value', 'select')}
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => {
                                                        const { sourceName, dName } = option?.props?.children[0].props.data || {};
                                                        return (
                                                            PolicyConstants.sourceMap[sourceName]
                                                                ?.toLowerCase()
                                                                .includes(input.toLowerCase()) ||
                                                            dName?.toLowerCase().includes(input.toLowerCase())
                                                        );
                                                    }}
                                                    dropdownMatchSelectWidth={false}
                                                    maxWidth={200}
                                                    dropdownStyle={{ width: 200 }}
                                                    setTitle={(option = []) => {
                                                        let isLink = false;
                                                        let value = conditionSingleData?.value;
                                                        isLink = value.includes('offlinezb') || value.includes('salaxyzb');
                                                        let dom = option;
                                                        let tab = option && option[0].props?.data?.metricArea === 'EDIT' ? 2 : 1;
                                                        if (isLink) {
                                                            let text = option[1];
                                                            let url = value.includes('offlinezb')
                                                                ? `/index/offIndexManage?currentTab=${tab}&featureSetName=${text}`
                                                                : `/index/realtime?currentTab=${tab}&metricName=${text}`;
                                                            dom = (
                                                                <a href={url} className="link-zb">
                                                                    {dom}
                                                                </a>
                                                            );
                                                        }
                                                        return dom;
                                                    }}
                                                    isVirtual={true}>
                                                    {NOEnumChildOption && NOEnumChildOption[leftOptionDataType]}
                                                </TooltipSelect> */}
                    </InputGroup>
                  )}
                {conditionSingleData &&
                  conditionSingleData['rightValueType'] === 'context' &&
                  leftOptionDataType === 'ENUM' && (
                    <InputGroup compact>
                      <Select
                        value={
                          conditionSingleData && conditionSingleData['rightValueType']
                            ? conditionSingleData['rightValueType']
                            : undefined
                        }
                        style={{ width: '30%' }}
                        onChange={this.changeConditionField.bind(this, 'rightValueType', 'select')}
                        dropdownMatchSelectWidth={false}
                      >
                        <Option value="input" title={I18N.onecondition.changLiang}>
                          {/* 常量 */}
                          {I18N.onecondition.changLiang}
                        </Option>
                        <Option value="context" title={I18N.onecondition.bianLiang}>
                          {/* 变量 */}
                          {I18N.onecondition.bianLiang}
                        </Option>
                      </Select>
                      <IndicatorsCascader
                        style={{ width: '70%' }}
                        options={optionsData || []}
                        fieldNames={{ label: 'dName', value: 'name', children: 'data' }}
                        value={
                          conditionSingleData && conditionSingleData['value']
                            ? conditionSingleData['value']
                            : undefined
                        }
                        placeholder={customPlaceholder || I18N.onecondition.qingXuanZe} // 请选择
                        onChange={this.changeConditionField.bind(this, 'value', 'select')}
                        showSearch
                        setTitle={(option = []) => {
                          let isLink = false;
                          let value = conditionSingleData?.value;
                          isLink = value?.includes('offlinezb') || value?.includes('salaxyzb');
                          let dom = option;
                          let tab = option && option[0].props?.data?.metricArea === 'EDIT' ? 2 : 1;
                          if (isLink) {
                            let text = option[1];
                            let url = value.includes('offlinezb')
                              ? `/index/offIndexManage?currentTab=${tab}&featureSetName=${text}`
                              : `/index/realtime?currentTab=${tab}&metricName=${text}`;
                            dom = (
                              <a href={url} className="link-zb">
                                {dom}
                              </a>
                            );
                          }
                          return dom;
                        }}
                      />

                      {/* <TooltipSelect
                                                    groupIndex={this.props.groupIndex}
                                                    updateIndex={this.props.updateIndex}
                                                    isMemo={true}
                                                    style={{ width: '70%' }}
                                                    field="value"
                                                    // conditionSingleData && conditionSingleData["value"] ? conditionSingleData["value"] : undefined
                                                    value={
                                                        conditionSingleData && conditionSingleData['value']
                                                            ? conditionSingleData['value']
                                                            : undefined
                                                    }
                                                    placeholder={customPlaceholder || "请选择"} // 请选择
                                                    onChange={this.changeConditionField.bind(this, 'value', 'select')}
                                                    showSearch
                                                    optionFilterProp="children"
                                                    filterOption={(input, option) => {
                                                        // return option.props.children[1].toLowerCase().indexOf(input.toLowerCase()) >= 0;
                                                        const { sourceName, dName } = option?.props?.children[0].props.data || {};
                                                        return (
                                                            PolicyConstants.sourceMap[sourceName]
                                                                ?.toLowerCase()
                                                                .includes(input.toLowerCase()) ||
                                                            dName?.toLowerCase().includes(input.toLowerCase())
                                                        );
                                                    }}
                                                    dropdownMatchSelectWidth={false}
                                                    maxWidth={200}
                                                    dropdownStyle={{ width: 200 }}
                                                    setTitle={(option = []) => {
                                                        let isLink = false;
                                                        let value = conditionSingleData?.value;
                                                        isLink = value.includes('offlinezb') || value.includes('salaxyzb');
                                                        let dom = option;
                                                        let tab = option && option[0].props?.data?.metricArea === 'EDIT' ? 2 : 1;
                                                        if (isLink) {
                                                            let text = option[1];
                                                            let url = value.includes('offlinezb')
                                                                ? `/index/offIndexManage?currentTab=${tab}&featureSetName=${text}`
                                                                : `/index/realtime?currentTab=${tab}&metricName=${text}`;
                                                            dom = (
                                                                <a href={url} className="link-zb">
                                                                    {dom}
                                                                </a>
                                                            );
                                                        }
                                                        return dom;
                                                    }}
                                                    isVirtual={true}>
                                                    {conditionSingleData &&
                                                        leftOptionDataType &&
                                                        EnumChildOption &&
                                                        EnumChildOption[leftOptionDataType]}
                                                </TooltipSelect> */}
                    </InputGroup>
                  )}
              </div>
            </Col>
          )}
        {/* marginTop: 5, */}
        <Col
          className="basic-info-oper"
          style={{ width: 50 }}
          // style={{ width: 50, display: 'flex', alignItems: 'center' }}
        >
          {conditionType === 'group' && !disabled && (
            // 添加一项
            <Tooltip title={I18N.onecondition.tianJiaYiXiang} placement="left">
              <Icon
                className="add"
                type="plus-circle-o"
                onClick={this.addCondition.bind(this)}
                style={{ marginRight: '5px' }}
              />
            </Tooltip>
          )}
          {/* 删除当前行 */}
          {!disabled && (
            <Tooltip title={I18N.onecondition.shanChuDangQianXing} placement="right">
              <Icon className="delete" type="delete" onClick={this.deleteCondition.bind(this)} />
            </Tooltip>
          )}
        </Col>
        {/* </Row> */}
      </div>
    );
  }
}

export default OneCondition;
