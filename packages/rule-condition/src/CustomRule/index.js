import I18N from '../locale.js';
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
      // hitLogicHasEmpty = true;
    }

    if (hitLogicHasEmpty) {
      setErrorMessage(I18N.customrule.index.mingZhongLuoJiWei);
      setError(true);

      return false;
    }
    if (hitLogicError) {
      setErrorMessage(I18N.customrule.index.mingZhongLuoJiGe);
      setError(true);

      return false;
    }
    setError(false);
    setErrorMessage(null);
    return true;
  };

  const expressionOnchange = (e) => {
    onChange(e.target.value, checkExpression(e?.target.value));
  };

  let value = !isCustom ? translationStr() : customLogicOperator || null;

  return (
    <>
      <div className="custom-condition-item add-condition" style={{ marginTop: '20px' }}>
        <Row gutter={10}>
          <Col span={3} className="basic-info-title">
            {I18N.customrule.index.mingZhongLuoJi}
          </Col>
          <Col span={10} className="add-condition-handle">
            <Input value={value} onChange={expressionOnchange} disabled={disabled && !isCustom} />
          </Col>
          <Col span={1}>
            <Popover
              popupClassName="custom-pop-tip"
              placement="top"
              title={I18N.customrule.index.luoJiPanDuanFu}
              content={
                <div>
                  {I18N.customrule.index.duoGeTiaoJianJun}
                  <br />
                  {I18N.customrule.index.duoGeTiaoJianRen}
                  <br />
                  {I18N.customrule.index.guiZeZhiXingShi}
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
