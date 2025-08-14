import type { SVGProps } from 'react';

const IcSvgMain = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeWidth={1.5}
      d="M11.245 14.248c-1.656 0-3 1.344-3 3v6h-3c-1.24 0-2.25-1.01-2.25-2.25v-9h-1.5a.745.745 0 0 1-.693-.476.75.75 0 0 1 .19-.824H.99L11.488.95h.002a.75.75 0 0 1 .903-.088l.115.09L23.007 10.7v.001a.75.75 0 0 1-.512 1.297h-1.5v9c0 1.24-1.01 2.25-2.25 2.25h-3v-6a3 3 0 0 0-3-3z"
    />
  </svg>
);
export default IcSvgMain;
