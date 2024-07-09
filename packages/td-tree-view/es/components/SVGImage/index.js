import React from 'react';
var SVGImage = function SVGImage(_ref) {
  var text = _ref.text,
    bgColor = _ref.bgColor;
  return /*#__PURE__*/ React.createElement(
    'svg',
    {
      width: '22px',
      height: '22px',
      viewBox: '0 0 22 22',
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg',
    },
    /*#__PURE__*/ React.createElement('circle', {
      id: 'shape',
      fill: bgColor,
      cx: '11',
      cy: '11',
      r: '11',
    }),
    /*#__PURE__*/ React.createElement(
      'text',
      {
        fontFamily: 'PingFangSC-Regular, PingFang SC',
        fontSize: '12',
        fontWeight: 'normal',
        fill: '#FFFFFF',
      },
      /*#__PURE__*/ React.createElement(
        'tspan',
        {
          x: '5',
          y: '15',
        },
        text,
      ),
    ),
  );
};
export default SVGImage;
