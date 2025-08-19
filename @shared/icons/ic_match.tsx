import type { SVGProps } from 'react';

const IcSvgMatch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 23 21"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.29 16.473H3.21A2.21 2.21 0 0 1 1 14.263V3.21A2.21 2.21 0 0 1 3.21 1h15.474a2.21 2.21 0 0 1 2.21 2.21v4.421"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 3.21 9.947 6.632 3.297-2.198 6.65-4.433m-3.316 16.578 3.703-3.63a2.37 2.37 0 0 0 .005-3.394 2.476 2.476 0 0 0-3.458-.006l-.247.243-.247-.243a2.477 2.477 0 0 0-3.457-.007 2.37 2.37 0 0 0-.007 3.394z"
    />
  </svg>
);
export default IcSvgMatch;
