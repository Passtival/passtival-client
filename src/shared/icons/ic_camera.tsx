import type { SVGProps } from 'react';

const IcSvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.852 2.343.01-.03C6.105 1.53 6.792 1 7.566 1h4.868c.774 0 1.46.53 1.704 1.313l.01.03c.122.392.465.657.852.657h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h1c.387 0 .73-.265.852-.657"
    />
  </svg>
);
export default IcSvgCamera;
