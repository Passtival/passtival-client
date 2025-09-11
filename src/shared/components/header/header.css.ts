import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const HEADER_HEIGHT = '6rem';

export const container = recipe({
  base: {
    display: 'flex',
    position: 'fixed',
    padding: '1.8rem 1.6rem',
    zIndex: themeVars.zIndex.overlay,
    width: '100%',
    gap: '0.4rem',
  },
  variants: {
    borderRadius: {
      rounded: {
        borderRadius: '0 0 2rem 2rem',
      },
      square: {
        borderRadius: 0,
      },
    },
    bgColor: {
      white: {
        backgroundColor: themeVars.color.bg_white,
        color: themeVars.color.gray_900,
      },
      gray: {
        backgroundColor: themeVars.color.gray_800,
        color: themeVars.color.bg_white,
      },
    },
  },
});

export const description = style({
  ...themeVars.fontStyles.title_b_16,
  color: 'inherit',
});
