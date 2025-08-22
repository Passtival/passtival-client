import { styleVariants, style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const carouselType = styleVariants({
  details: {
    position: 'relative',

    width: '32.7rem',
    height: '21.4rem',
    margin: '0 auto',
    border: `1.5px solid ${themeVars.color.gray_500_40}`,

    borderRadius: '14px',

    overflow: 'hidden',
  },
  Apply: { width: '37.5rem' },
});

export const image = style({
  width: '15rem',
  height: '12rem',
  borderRadius: '50%',
  overflow: 'hidden',
});
