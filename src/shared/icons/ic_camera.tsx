import type { SVGProps } from 'react';

const IcSvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 8.498a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.044 2.12.007-.026C5.254 1.441 5.827 1 6.471 1h4.057c.645 0 1.217.44 1.42 1.094l.008.025a.75.75 0 0 0 .71.547h.834a2.5 2.5 0 0 1 2.5 2.5v6.665a2.5 2.5 0 0 1-2.5 2.499h-10a2.5 2.5 0 0 1-2.5-2.5V5.167a2.5 2.5 0 0 1 2.5-2.5h.833c.323 0 .609-.22.71-.547"
    />
  </svg>
);
export default IcSvgCamera;
