import * as React from 'react';
import type { SVGProps } from 'react';

const SvgHome = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="m3.445 8.703 8-5.333a1 1 0 0 1 1.11 0l8 5.333a1 1 0 0 1 .445.832V20a1 1 0 0 1-1 1h-4.222a.78.78 0 0 1-.778-.778V17a3 3 0 1 0-6 0v3.222c0 .43-.348.778-.778.778H4a1 1 0 0 1-1-1V9.535a1 1 0 0 1 .445-.832Z"
    />
  </svg>
);
export default SvgHome;
