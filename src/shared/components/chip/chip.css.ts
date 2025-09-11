import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const chipVariants = recipe({
  base: {
    display: 'inline-flex',
    height: '3.4rem',
    alignItems: 'center',
    justifyContent: 'center',
    ...themeVars.fontStyles.button_r_14,
    cursor: 'pointer',
    borderRadius: '8px',
    width: 'auto',
    padding: '0.8rem 1.2rem',
    textAlign: 'center',
  },

  variants: {
    selected: {
      false: {
        backgroundColor: themeVars.color.gray_500_40,
        color: themeVars.color.bg_white,
        border: `1px solid ${themeVars.color.gray_400}`,
      },
      true: {
        backgroundColor: themeVars.color.main_yellow,
        color: themeVars.color.bg_white,
        border: `1px solid ${themeVars.color.bg_white}`,
      },
    },
    fullWidth: {
      true: {
        flex: 1,
      },
      false: {},
    },
  },
});
