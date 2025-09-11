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
    objectFit: 'fill',
    width: '100%',
    backgroundColor: themeVars.color.gray_600,
  },

  variants: {
    type: {
      square_lg: {
        height: '21.4rem',
        borderRadius: '8px',
      },

      square_md: {
        height: '10.5rem',
        width: '11.9rem',
        borderRadius: '5px',
      },

      square_sm: {
        height: '10rem',
        width: '10rem',
        borderRadius: '5px',
      },
    },
  },
});
