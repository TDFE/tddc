import { useState, useEffect } from 'react';
import { Row, Col, Popover, Icon, Input } from 'antd';

import './index.less';

const CustomRule = (props) => {
  let { onChange, disabled, currentCondition } = props;
  let { customLogicOperator, logicOperator, children = [] } = currentCondition;
  let len = children?.length || 0;
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  let isCustom = logicOperator === '##';

  useEffect(() => {
    if (logicOperator === '##') {
      // let { currentCondition } = props;
      // let { customLogicOperator } = currentCondition;
      checkExpression(customLogicOperator);
    } else if (logicOperator === '!&&' || logicOperator === '!||') {
      let text = translationStr();
      let arr = children.map((i, index) => '!' + (index + 1)); // 加 ！表示 非运算
      let link = logicOperator === '!&&' ? '|' : '&';
      let IFLogicText = arr.join(link);

      setErrorMessage(null);
    } else {
      setErrorMessage(null);
    }
  }, [logicOperator, len]);

  const evalFunction = (obj) => {
    return Function('return (' + obj + ')')();
  };
  const translationStr = () => {
    let arr = children.map((i, index) => index + 1);
    let link = '';

    switch (logicOperator) {
      case '&&':
        link = '&';
        break;
      case '||':
        link = '|';
        break;
      case '!&&':
        link = '&';
        break;
      case '!||':
        link = '|';
        break;
      default:
        null;
        break;
    }
    let checkedStr = arr.join(link);
    return checkedStr;
  };
  const checkExpression = (customLogicOperator) => {
    // let { currentCondition } = props;
    // let { customLogicOperator } = currentCondition;
    let hitLogicHasEmpty = false;
    let hitLogicError = false;
    if (customLogicOperator) {
      let len = children.length;
      let checkedStr = customLogicOperator;

      // 排除一些特殊的能进行eval计算的字符
      if (!/^[\&\|\(\)1-9\d]+$/.test(checkedStr)) {
        hitLogicError = true;
      }

      // 获取表达式所有的数字 并去重
      let numArr = checkedStr.match(/[\d]{1,3}/g, '');
      numArr = Array.from(new Set(numArr));

      if (Math.max(...numArr) <= 0) hitLogicError = true;
      if (Math.max(...numArr) > len) {
        hitLogicError = true;
      }
      // 去除字符串内多余空格  将& 替换为 &&，| 替换为 ||
      checkedStr = checkedStr.replace(/\s*/g, '').replace(/&/g, '&&').replace(/\|/g, '||');
      try {
        evalFunction(checkedStr);
      } catch (error) {
        hitLogicError = true;
      }
    } else {
      hitLogicHasEmpty = true;
    }

    if (hitLogicHasEmpty) {
      setErrorMessage('命中逻辑为空！');
      setError(true);

      return;
    }
    if (hitLogicError) {
      setErrorMessage('命中逻辑格式错误！');
      setError(true);

      return;
    }
    setError(false);
    setErrorMessage(null);
  };

  const expressionOnchange = (e) => {
    onChange(e.target.value);
    checkExpression(e?.target.value);
  };

  let value = !isCustom ? translationStr() : customLogicOperator || null;

  return (
    <>
      <div className="custom-condition-item add-condition" style={{ marginTop: '20px' }}>
        <Row gutter={10}>
          <Col span={3} className="basic-info-title">
            {'命中逻辑'}
          </Col>
          <Col span={10} className="add-condition-handle">
            <Input value={value} onChange={expressionOnchange} disabled={disabled && !isCustom} />
          </Col>
          <Col span={1}>
            <Popover
              popupClassName="custom-pop-tip"
              placement="top"
              title={'逻辑判断符使用说明：'}
              content={
                <div>
                  {'·多个条件均满足：“&”，如A&B&C；'}
                  <br />
                  {'·多个条件任意一个满足：“|”，如A|B|C；'}
                  <br />
                  {
                    '·规则执行时，按从左往右的顺序进行条件判断，若需先判断某几条条件，可使用“()“进行框选，如A&(B|C)'
                  }
                </div>
              }
            >
              <Icon type="question-circle-o" className="param-tip-icon" />
            </Popover>
          </Col>
        </Row>
        <Row>
          <Col span={3} style={{ marginRight: 15 }} />
          {error && <span style={{ color: 'red' }}>{errorMessage}</span>}
        </Row>
      </div>
    </>
  );
};

export default CustomRule;
