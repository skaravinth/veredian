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
      id="mask0_841_1008"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={470}
      height={540}
    >
      <path d="M0 0H470V540H0V0Z" fill="#006547" />
    </mask>
    <g mask="url(#mask0_841_1008)">
      <rect
        x={602.139}
        y={-205}
        width={141}
        height={633.764}
        transform="rotate(45 602.139 -205)"
        fill="url(#paint0_linear_841_1008)"
      />
      <rect
        x={591.39}
        y={88}
        width={141}
        height={779.783}
        transform="rotate(45 591.39 88)"
        fill="url(#paint1_linear_841_1008)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_841_1008"
        x1={672.639}
        y1={-205}
        x2={672.639}
        y2={428.764}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0B0B" stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_841_1008"
        x1={661.89}
        y1={88}
        x2={661.89}
        y2={867.783}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0B0B0B" stopOpacity={0.23} />
        <stop offset={1} stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
export default SVGComponent;
