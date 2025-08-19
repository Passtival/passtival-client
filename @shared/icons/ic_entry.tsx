import type { SVGProps } from 'react';

const IcSvgEntry = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 18"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.333 1v2.286m0 4.571v2.286m0 4.571V17M3.223 1h15.555c.59 0 1.154.24 1.571.67.417.428.651 1.01.651 1.616v3.428c-.59 0-1.155.241-1.571.67A2.32 2.32 0 0 0 18.778 9c0 .606.234 1.188.65 1.616s.983.67 1.572.67v3.428c0 .606-.234 1.188-.65 1.617-.418.428-.983.669-1.572.669H3.222c-.59 0-1.154-.24-1.571-.67A2.32 2.32 0 0 1 1 14.715v-3.428c.59 0 1.155-.241 1.571-.67.417-.428.651-1.01.651-1.616a2.32 2.32 0 0 0-.65-1.616A2.2 2.2 0 0 0 1 6.714V3.286c0-.606.234-1.188.65-1.617C2.069 1.241 2.634 1 3.223 1"
    />
  </svg>
);
export default IcSvgEntry;
