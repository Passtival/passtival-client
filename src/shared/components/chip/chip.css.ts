import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const chipVariants = recipe({
  base: {
    display: 'inline-flex',
    height: '3.4rem',
    alignItems: 'center',
    ...themeVars.fontStyles.button_r_14,
    cursor: 'pointer',
    borderRadius: '8px',
  },

  variants: {
    selected: {
      false: {
        backgroundColor: themeVars.color.bg_white,
        color: themeVars.color.gray_900,
        border: `1px solid ${themeVars.color.gray_400}`,
      },
      true: {
        backgroundColor: themeVars.color.sub_blue,
        color: themeVars.color.main_blue,
        border: `1px solid ${themeVars.color.main_blue}`,
      },
    },
    size: {
      sm: {
        padding: '0.8rem 1.2rem',
      },
      lg: {
        width: '16.1rem',
        justifyContent: 'center',
        backgroundColor: themeVars.color.bg_white_70,
      },
    },
  },
});
