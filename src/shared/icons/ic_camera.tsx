import type { SVGProps } from 'react';

const IcSvgCamera = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15 13a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.852 5.343.01-.03C8.105 4.53 8.792 4 9.566 4h4.868c.774 0 1.46.53 1.704 1.313l.01.03c.122.392.465.657.852.657h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h1c.387 0 .73-.265.852-.657"
    />
  </svg>
);
export default IcSvgCamera;
