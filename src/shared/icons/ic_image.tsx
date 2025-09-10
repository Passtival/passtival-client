import type { SVGProps } from 'react';

const IcSvgImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <g clipPath="url(#image_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m31 21-5.143-5.143a3.333 3.333 0 0 0-4.714 0L6 31M4.333 1h23.334A3.333 3.333 0 0 1 31 4.333v23.334A3.333 3.333 0 0 1 27.667 31H4.333A3.333 3.333 0 0 1 1 27.667V4.333A3.333 3.333 0 0 1 4.333 1m10 10a3.333 3.333 0 1 1-6.666 0 3.333 3.333 0 0 1 6.666 0"
      />
    </g>
    <defs>
      <clipPath id="image_svg__a">
        <path
          fill="currentColor"
          d="M0 0h32v32H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export default IcSvgImage;
