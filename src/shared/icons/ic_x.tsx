import type { SVGProps } from 'react';

const IcSvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 19 19"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m1 17.333 8.167-8.166m0 0L17.333 1M9.167 9.167 1 1m8.167 8.167 8.166 8.166"
    />
  </svg>
);
export default IcSvgX;
