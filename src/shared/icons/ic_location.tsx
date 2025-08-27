import type { SVGProps } from 'react';

const IcSvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 12"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M5 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.8}
      d="M5 1a4 4 0 0 0-4 4c0 .946.201 1.565.75 2.25L5 11l3.25-3.75C8.799 6.565 9 5.946 9 5a4 4 0 0 0-4-4"
    />
  </svg>
);
export default IcSvgLocation;
