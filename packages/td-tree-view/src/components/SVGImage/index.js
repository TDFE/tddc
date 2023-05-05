import React from 'react';

const SVGImage = ({ text, bgColor }) => {
  return (
    <svg
      width="22px"
      height="22px"
      viewBox="0 0 22 22"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="shape" fill={bgColor} cx="11" cy="11" r="11" />
      <text
        fontFamily="PingFangSC-Regular, PingFang SC"
        fontSize="12"
        fontWeight="normal"
        fill="#FFFFFF"
      >
        <tspan x="5" y="15">
          {text}
        </tspan>
      </text>
    </svg>
  );
};

export default SVGImage;
