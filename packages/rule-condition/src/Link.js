import { useState, useEffect } from 'react';

export default (props) => {
  const { conditionArr, container } = props;
  const [position, setPositions] = useState({
    from: {
      x: 0,
      y: 0,
    },
    to: {
      x: 0,
      y: 0,
    },
  });

  let { from, to } = position;

  let linkFrom;
  let linkTo;
  let parent;
  const bulidPositons = (fromDom, toDom, parentDom) => {
    // 设置 组 的各个子条件的坐标
    let { conditionArr } = props;
    // 线起点
    fromDom = fromDom || document.querySelector('.link-from' + conditionArr[0]);
    // 线终点
    toDom = toDom || document.querySelector('.link-to' + conditionArr[0] + conditionArr[1]);
    // 父元素
    parentDom = parentDom || document.querySelector('.group-index' + conditionArr[0]);

    if (!!fromDom && !!toDom) {
      let toPosition = {
        x: toDom.getBoundingClientRect().x - parentDom.getBoundingClientRect().x + 5, // 5 为padding
        y: toDom.getBoundingClientRect().y - parentDom.getBoundingClientRect().y,
      };
      let fromPosition = {
        x:
          fromDom.getBoundingClientRect().x -
          parentDom.getBoundingClientRect().x +
          fromDom.getBoundingClientRect().width -
          5, // 5 为padding
        y: fromDom.getBoundingClientRect().y - parentDom.getBoundingClientRect().y,
      };
      setPositions({
        from: fromPosition,
        to: toPosition,
      });
    }
  };

  useEffect(() => {
    if (container && conditionArr.length) {
      // 线起点
      linkFrom = linkFrom || document.querySelector('.link-from' + conditionArr[0]);
      // 线终点
      linkTo = linkTo || document.querySelector('.link-to' + conditionArr[0] + conditionArr[1]);
      // 父元素
      parent = parent || document.querySelector('.group-index' + conditionArr[0]);

      //建立坐标
      bulidPositons(linkFrom, linkTo, parent);
      if (conditionArr.length > 1) {
        const observer = new ResizeObserver(() => bulidPositons(linkFrom, linkTo, parent));
        observer.observe(container);
      }
    }
  }, [container, conditionArr]);

  const drawLine = (x1, y1, x2, y2) => {
    const isH = isHorizontal(x1, x2);
    const width = isH ? x2 - x1 : Math.abs(y1 - y2);
    const highlight = props.highlight;
    const style = {
      position: 'absolute',
      height: isH ? 0 : width,
      width: isH ? width : 0,
      left: x1,
      top: (isH ? y1 : Math.min(y1, y2)) + 14,
      zIndex: highlight ? 1 : 0,
      borderBottom: '1px solid #c7d0d9',
      borderLeft: '1px  solid  #c7d0d9',
    };
    const clsNames = 'link ' + (highlight ? ['link-highlight'] : '');
    return (
      <div
        className={clsNames}
        style={style}
        data-key={genKey([x1, y1, x2, y2])}
        key={genKey([x1, y1, x2, y2])}
      />
    );
  };

  const isHorizontal = (x1, x2) => {
    if (x1 === x2) {
      return false;
    }
    return true;
  };

  const genKey = (value) => {
    if (value === void 0) {
      value = [];
    }
    const _value = value;
    const x1 = _value[0];
    const y1 = _value[1];
    const x2 = _value[2];
    const y2 = _value[3];
    return ',' + x1 + ',' + y1 + '-' + x2 + ',' + y2;
  };

  const { x: x1, y: y1 } = from;
  const { x: x2, y: y2 } = to;
  let lines = [];
  console.log(Math.abs(y1 - y2), 'abs');
  if (x1 === x2 || y1 === y2 || Math.abs(y1 - y2) < 1) {
    // 一条直线
    lines = [drawLine(x1, y1, x2, y2)];
  } else {
    // 一条折线，找到转折点，左(x1,y1) -> 右(x2,y2)
    let xm = (x1 + x2) / 2;
    let ym = y1;
    let xn = xm;
    let yn = y2;

    lines.push(drawLine(x1, y1, xm, ym));
    lines.push(drawLine(xm, ym, xn, yn));
    lines.push(drawLine(xn, yn, x2, y2));
  }
  return <>{lines}</>;
};
