import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const size = recipe({
  base: {
    textAlign: 'center',
    height: '3.6rem',
    borderRadius: '12px',

    ...themeVars.fontStyles.button2_sb_14,
    backgroundColor: themeVars.color.bg_white,
    color: themeVars.color.gray_900,
    outline: 'none',
    selectors: {
      '&:placeholder-shown': {
        backgroundColor: themeVars.color.gray_500_40,
        color: themeVars.color.bg_white,
      },
      '&::placeholder': {
        color: themeVars.color.bg_white,
      },
    },
  },

  variants: {
    size: {
      sm: {
        width: '8.5rem',
      },
      lg: {
        width: '12.7rem',
      },
    },
  },
});
