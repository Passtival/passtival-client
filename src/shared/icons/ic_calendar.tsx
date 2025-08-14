import type { SVGProps } from 'react';

const IcSvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M1 8h18M6 1v4m8-4v4M4 19h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3Z"
    />
  </svg>
);
export default IcSvgCalendar;
