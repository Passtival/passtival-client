import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
});

export const img = recipe({
  base: {
    border: `1.5px solid ${themeVars.color.gray_500_40}`,
    objectFit: 'cover',
  },
  variants: {
    type: {
      square: {
        width: '32.7rem',
        height: '21.4rem',

        borderRadius: '8px',
      },
      circle: {
        width: '15rem',
        height: '15rem',
        borderRadius: '50%',
      },
    },
  },
});
