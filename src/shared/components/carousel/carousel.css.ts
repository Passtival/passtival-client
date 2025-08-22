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
  Apply: { width: 'auto' },
});

export const img = style({
  width: '15rem',
  height: '14rem',

  borderRadius: '50%',

  overflow: 'hidden',
});
