import { COMPONENT_HEIGHT } from './constants';

export default (props) => {
  const { source, target, root, color, type, linkType, shuoldRender } = props;
  let keyMap = {};

  const drawLine = (x1, y1, x2, y2) => {
    const isH = isHorizontal(x1, x2);
    const width = isH ? x2 - x1 : Math.abs(y1 - y2);
    const highlight = props.highlight;
    const style = {
      position: 'absolute',
      height: isH ? 0 : width,
      width: isH ? width : 0,
      // left: x1,
      // top: (isH ? y1 : Math.min(y1, y2)) + COMPONENT_HEIGHT / 2,
      transform: `translate(${x1}px, ${(isH ? y1 : Math.min(y1, y2)) + COMPONENT_HEIGHT / 2}px)`,
      zIndex: highlight ? 1 : 0,
      borderBottom: `1px ${linkType || 'solid'} ${color || '#c7d0d9'}`,
      borderLeft: `1px ${linkType || 'solid'} ${color || '#c7d0d9'}`,
    };
    const clsNames = 'link ' + (highlight ? ['link-highlight'] : '');

    let lineKey = genKey([x1, y1, x2, y2]);
    if (keyMap[lineKey]) {
      return null;
    }
    keyMap[lineKey] = true;
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
    return x1 + ',' + y1 + '-' + x2 + ',' + y2;
  };

  let lines = [];

  let arr = shuoldRender;

  if (arr.length === 12) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[4], arr[5], arr[6], arr[7]));
    lines.push(drawLine(arr[8], arr[9], arr[10], arr[11]));
  } else if (arr.length === 8) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[4], arr[5], arr[6], arr[7]));
  } else if (arr.length === 6) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
    lines.push(drawLine(arr[2], arr[3], arr[4], arr[5]));
  } else if (arr.length === 4) {
    lines.push(drawLine(arr[0], arr[1], arr[2], arr[3]));
  }

  return <>{lines}</>;
};
