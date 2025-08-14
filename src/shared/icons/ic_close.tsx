import type { SVGProps } from 'react';

const IcSvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5 19 7-7m0 0 7-7m-7 7L5 5m7 7 7 7"
    />
  </svg>
);
export default IcSvgClose;
