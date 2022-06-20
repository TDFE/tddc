import { COMPONENT_HEIGHT } from './constants';

export default (props) => {
  const { source, target, root, color, type, linkType } = props;
  const drawLine = (x1, y1, x2, y2) => {
    const isH = isHorizontal(x1, x2);
    const width = isH ? x2 - x1 : Math.abs(y1 - y2);
    const highlight = props.highlight;
    const style = {
      position: 'absolute',
      height: isH ? 0 : width,
      width: isH ? width : 0,
      left: x1,
      top: (isH ? y1 : Math.min(y1, y2)) + COMPONENT_HEIGHT / 2,
      zIndex: highlight ? 1 : 0,
      borderBottom: `1px ${linkType || 'solid'} ${color || '#c7d0d9'}`,
      borderLeft: `1px ${linkType || 'solid'} ${color || '#c7d0d9'}`,
    };
    const clsNames = 'link ' + (highlight ? ['link-highlight'] : '');
    return (
      <div
        className={clsNames}
        style={style}
        data-key={genKey([x1, y1, x2, y2])}
        key={genKey([x1, y1, x2, y2])}
      ></div>
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

  const { x: x1, y: y1 } = source;
  const { x: x2, y: y2 } = target;
  let lines = [];
  if (x1 === x2 || y1 === y2) {
    // 一条直线
    lines = [drawLine(x1, y1, x2, y2)];
  } else {
    // 一条折线，找到转折点，左(x1,y1) -> 右(x2,y2)
    var xm = (x1 + x2) / 2;
    var ym = y1;
    var xn = xm;
    var yn = y2;

    if (type === 1) {
      // 样式1
      lines.push(drawLine(x1, y1, xm, ym));
      lines.push(drawLine(xm, ym, xn, yn));
      lines.push(drawLine(xn, yn, x2, y2));
    } else if (type === 2) {
      if (root) {
        lines.push(drawLine(x1, y1, xm, ym));
        lines.push(drawLine(xm, ym, xn, yn));
        lines.push(drawLine(xn, yn, x2, y2));
      } else {
        lines.push(drawLine(x1, y1, x2, y1));
        lines.push(drawLine(x2, y1, x2, y2));
      }
    }
  }
  return <>{lines}</>;
};
