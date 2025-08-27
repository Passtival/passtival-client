import type { SVGProps } from 'react';

const IcSvgTime = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 9 9"
    {...props}
  >
    <g
      fill="currentColor"
      clipPath="url(#time_svg__a)"
    >
      <path d="M8.1 4.5a3.6 3.6 0 1 0-3.6 3.6l.177-.004A3.6 3.6 0 0 0 8.1 4.5m.9 0a4.5 4.5 0 0 1-4.279 4.495L4.5 9A4.5 4.5 0 1 1 9 4.5" />
      <path d="M3.6 2.25c0-.249.241-.45.54-.45.298 0 .54.201.54.45v2.064L6.14 5.532a.4.4 0 0 1 0 .636.62.62 0 0 1-.763 0l-1.62-1.35A.42.42 0 0 1 3.6 4.5z" />
    </g>
    <defs>
      <clipPath id="time_svg__a">
        <path
          fill="currentColor"
          d="M0 0h9v9H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default IcSvgTime;
