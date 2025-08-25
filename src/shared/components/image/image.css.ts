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
      square_lg: {
        width: '32.7rem',
        height: '21.4rem',

        borderRadius: '8px',
      },

      square_sm: {
        width: '11.9rem',
        height: '10.5rem',

        borderRadius: '5px',
      },

      circle: {
        width: '15rem',
        height: '15rem',
        borderRadius: '50%',
      },
    },
  },
});
