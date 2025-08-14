import type { SVGProps } from 'react';

const IcSvgTrashcan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5h16M2 5l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M6 5V2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3m-5 5 4 4m0-4-4 4"
    />
  </svg>
);
export default IcSvgTrashcan;
