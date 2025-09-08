import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
});

export const message = style({
  ...themeVars.fontStyles.title_b_16,
  color: themeVars.color.bg_white,
  textAlign: 'center',
});

export const lottieVariants = recipe({
  variants: {
    size: {
      small: {
        width: '10rem',
        height: '10rem',
      },
      medium: {
        width: '20.5rem',
        height: '20.5rem',
      },
      large: {
        width: '30rem',
        height: '30rem',
      },
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
