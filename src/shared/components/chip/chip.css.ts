import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const chipVariants = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...themeVars.fontStyles.button2_sb_14,
    cursor: 'pointer',
    padding: '0.8rem 1.2rem',
    borderRadius: '8px',
    height: '3.4rem',
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
  },
});
