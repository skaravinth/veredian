import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={470}
    height={540}
    viewBox="0 0 470 540"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_841_1002"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={470}
      height={540}
    >
      <path d="M470 0H0V540H470V0Z" fill="#006547" />
    </mask>
    <g mask="url(#mask0_841_1002)">
      <rect
        width={141}
        height={633.764}
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 -132.138 -205)"
        fill="url(#paint0_linear_841_1002)"
      />
      <rect
        width={141}
        height={779.783}
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 -121.389 88)"
        fill="url(#paint1_linear_841_1002)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_841_1002"
        x1={70.5}
        y1={0}
        x2={70.5}
        y2={633.764}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0B0B" stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_841_1002"
        x1={70.5}
        y1={0}
        x2={70.5}
        y2={779.783}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0B0B" stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SVGComponent;
