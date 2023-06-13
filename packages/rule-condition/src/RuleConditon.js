import React from 'react';
import { Radio, Row, Col } from 'antd';
import { cloneDeep, isEqual } from 'lodash';
import OneCondition from './OneCondition';
import CustomRule from './CustomRule';
import { filterAvailableFieldList, dataTypeSpecialConvert } from './utils/index';
import Link from './Link';

const RadioGroup = Radio.Group;

class RuleConditon extends React.PureComponent {
  state = {
    conditionData: {
      logicOperator: '&&',
      type: 'context',
      children: [],
    },
    addRuleTemplate: false,
  };

  constructor(props) {
    super(props);
    this.changeLogicOperator = this.changeLogicOperator.bind(this);
    this.addSingleCondition = this.addSingleCondition.bind(this);
    this.addGroupCondition = this.addGroupCondition.bind(this);
    this.containerRef = React.createRef();
  }
  componentDidMount() {
    this.containerRef.current = document.querySelector('.score-rule-condition');
    let { value } = this.props;
    if (value && this.isJSON(value)) {
      value = JSON.parse(value);
    }
    if (value && Object.keys(value).length) {
      this.setState({
        conditionData: value,
      });
    }
    this.getChildOption();
  }

  formatData = (options) => {
    const loop = (node, parentPath) => {
      if (!node?.data?.length) {
        return node;
      }
      node?.data?.forEach((item) => {
        let { name: sourceKey, dName: sourceName, bizType } = node;
        item.sourceKey = sourceKey;
        item.sourceName = sourceName;
        item.bizType = bizType;
        item.path = parentPath + '/' + item.name;
        return loop(item, item.path);
      });

      return node;
    };
    return options.map((item) => {
      return loop(item, item.name);
    });
  };

  getChildOption = () => {
    const { ruleAndIndexFieldList, appCode, orgCode } = this.props;
    const list = filterAvailableFieldList({ ruleAndIndexFieldList, appCode, orgCode });
    let optionsList = this.formatData(list);
    const childOption = optionsList?.reduce(
      (total, item) => {
        // 获取转换后的数据类型
        const { type: convertDataType } = dataTypeSpecialConvert(item);
        if (Array.isArray(total?.[convertDataType])) {
          total[convertDataType].push(item);
        } else {
          total[convertDataType] = [item];
        }
        total['all'].push(item);
        return total;
      },
      { all: [] },
    );

    let NOEnumChildOption = cloneDeep(childOption);
    let EnumChildOption = cloneDeep(childOption);
    if (NOEnumChildOption['INT']) {
      NOEnumChildOption['INT'] = NOEnumChildOption['INT'].concat(NOEnumChildOption['DOUBLE'] || []);
    }
    NOEnumChildOption['DOUBLE'] = NOEnumChildOption['INT'];
    if (NOEnumChildOption['ENUM']) {
      NOEnumChildOption['ENUM'] = NOEnumChildOption['ENUM'].concat(
        NOEnumChildOption['STRING'] || [],
      );
    }
    if (EnumChildOption['ENUM']) {
      EnumChildOption['ENUM'] = EnumChildOption['ENUM'].concat(NOEnumChildOption['STRING'] || []);
    }

    EnumChildOption['STRING'] = NOEnumChildOption['ENUM'];
    this.setState({ childOption, NOEnumChildOption, EnumChildOption });
  };

  componentDidUpdate(preProps) {
    let { value } = this.props;
    if (!isEqual(preProps.value, this.props.value)) {
      if (value && this.isJSON(value)) {
        value = JSON.parse(value);
      }
      this.setState({
        conditionData: value || {
          logicOperator: '&&',
          type: 'context',
          children: [],
        },
      });
    }
  }
  changeAfterAddPriority(value) {
    let { onChange } = this.props;
    let tempValue = value;
    let priority = 1;
    tempValue?.children?.map((item) => {
      item.priority = priority++;
      item?.children?.map((item1) => {
        item1.priority = priority++;
      });
    });
    onChange(tempValue);
  }
  changeLogicOperator(e) {
    let { onChange } = this.props;
    let { conditionData: cData = {} } = this.state;
    let conditionData = cloneDeep(cData);
    let value = e.target.value;

    conditionData['logicOperator'] = value;
    conditionData['type'] = 'context';

    this.setState({
      conditionData,
    });
    onChange && this.changeAfterAddPriority(conditionData);
  }

  isJSON = (str) => {
    if (typeof str === 'string') {
      try {
        let obj = JSON.parse(str);
        if (typeof obj === 'object' && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
  };

  addSingleCondition() {
    let { onChange } = this.props;
    let { conditionData: cData = {} } = this.state;
    let conditionData = cloneDeep(cData);

    let singleConditionTemp = {
      property: null,
      op: '==',
      value: null,
      propertyDataType: null,
      type: 'context',
      rightValueType: 'context',
    };
    conditionData['children'] = conditionData['children'] || [];
    conditionData['children'].push({ ...singleConditionTemp });

    this.setState({
      conditionData,
    });

    onChange && this.changeAfterAddPriority(conditionData);
  }

  addGroupCondition() {
    let { onChange } = this.props;
    let { conditionData: cData = {} } = this.state;
    let conditionData = cloneDeep(cData);

    let groupConditionTemp = {
      logicOperator: '&&',
      type: 'context',
      children: [
        {
          property: null,
          op: '==',
          value: null,
          propertyDataType: null,
          type: 'context',
          rightValueType: 'context',
        },
      ],
    };
    conditionData['children'] = conditionData['children'] || [];
    conditionData['children'].push({ ...groupConditionTemp });

    this.setState({
      conditionData,
    });

    onChange && this.changeAfterAddPriority(conditionData);
  }

  render() {
    let {
      onChange,
      disabled,
      mode,
      type,
      appCode: indexApp,
      orgCode: indexOrg,
      noImportWaitCommit,
      ruleSetExtendSelect,
      isPublish,
      policyBusinessType,
      ruleAndIndexFieldList,
    } = this.props;

    let { conditionData: cData = {}, EnumChildOption, NOEnumChildOption, childOption } = this.state;
    let conditionData = cloneDeep(cData);

    return (
      <div className="score-rule-condition">
        {
          // className="mb10"
          <Row gutter={10}>
            <Col span={22}>
              <RadioGroup
                onChange={this.changeLogicOperator.bind(this)}
                value={
                  conditionData && conditionData['logicOperator']
                    ? conditionData['logicOperator']
                    : null
                }
                disabled={disabled}
              >
                <Radio value="&&">{'满足以下所有条件'}</Radio>
                <Radio value="||">{'满足以下任意条件'}</Radio>
                {mode === 3 && <Radio value="!||">{'以下条件均不满足'}</Radio>}
                <Radio value="##">{'自定义'}</Radio>
              </RadioGroup>
            </Col>
            <Col span={2} />
          </Row>
        }
        {
          <Row gutter={10}>
            <div className="custom-condition">
              {conditionData &&
                conditionData.type !== 'alias' &&
                conditionData.children &&
                conditionData.children.map((item, index) => {
                  if (item.type !== 'alias') {
                    if (item?.children && item?.children.length) {
                      return (
                        <div
                          className={`custom-condition-item group-condition has-line group-index${index}`}
                          key={index}
                        >
                          {item.children.map((groupItem, groupIndex) => {
                            return (
                              <>
                                <Link
                                  conditionArr={[index, groupIndex]}
                                  key={index + groupIndex}
                                  container={this.containerRef.current}
                                />
                                <OneCondition
                                  ruleAndIndexFieldList={ruleAndIndexFieldList}
                                  EnumChildOption={EnumChildOption}
                                  NOEnumChildOption={NOEnumChildOption}
                                  childOption={childOption}
                                  policyBusinessType={policyBusinessType}
                                  isPublish={isPublish}
                                  ruleSetExtendSelect={ruleSetExtendSelect}
                                  noImportWaitCommit={noImportWaitCommit}
                                  type={type}
                                  disabled={disabled}
                                  appCode={indexApp}
                                  orgCode={indexOrg}
                                  allCondition={conditionData.children}
                                  conditionData={item}
                                  conditionSingleData={groupItem}
                                  conditionType="group"
                                  conditionArr={[index, groupIndex]}
                                  key={groupIndex}
                                  setCondition={async (item) => {
                                    await this.setState({
                                      conditionData: {
                                        ...conditionData,
                                        children: item || [],
                                      },
                                    });
                                    (await onChange) &&
                                      this.changeAfterAddPriority({
                                        ...conditionData,
                                        children: item || [],
                                      });
                                  }}
                                />
                              </>
                            );
                          })}
                        </div>
                      );
                    }
                    return (
                      <div className="custom-condition-item one-condition has-line" key={index}>
                        <OneCondition
                          ruleAndIndexFieldList={ruleAndIndexFieldList}
                          EnumChildOption={EnumChildOption}
                          NOEnumChildOption={NOEnumChildOption}
                          childOption={childOption}
                          policyBusinessType={policyBusinessType}
                          isPublish={isPublish}
                          ruleSetExtendSelect={ruleSetExtendSelect}
                          noImportWaitCommit={noImportWaitCommit}
                          type={type}
                          allCondition={conditionData.children}
                          appCode={indexApp}
                          orgCode={indexOrg}
                          conditionData={null}
                          conditionSingleData={item}
                          conditionType="single"
                          conditionArr={[index]}
                          setCondition={async (item) => {
                            await this.setState({
                              conditionData: {
                                ...conditionData,
                                children: item || [],
                              },
                            });
                            (await onChange) &&
                              this.changeAfterAddPriority({
                                ...conditionData,
                                children: item || [],
                              });
                          }}
                          disabled={disabled}
                        />
                      </div>
                    );
                  }
                })}
              {!disabled && (
                <div className="custom-condition-item add-condition">
                  <Col span={18} className="add-condition-handle">
                    <a onClick={this.addSingleCondition.bind(this)}>{'添加单条条件'}</a>
                    <a onClick={this.addGroupCondition.bind(this)}>{'添加条件组'}</a>
                  </Col>
                </div>
              )}
              <CustomRule
                currentCondition={conditionData || {}}
                disabled={true}
                onChange={async (value, customRuleStatus) => {
                  conditionData.customLogicOperator = value;
                  conditionData.customRuleStatus = customRuleStatus;
                  await this.setState({
                    conditionData: {
                      ...conditionData,
                    },
                  });
                  (await onChange) &&
                    this.changeAfterAddPriority({
                      ...conditionData,
                    });
                }}
              />
            </div>
          </Row>
        }
      </div>
    );
  }
}

export default RuleConditon;
