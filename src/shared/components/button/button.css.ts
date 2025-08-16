import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles/theme.css';

export const buttonVariants = recipe({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
  },

  variants: {
    color: {
      blue: {
        backgroundColor: themeVars.color.main_blue,
        color: themeVars.color.bg_white,
      },
      yellow: {
        backgroundColor: themeVars.color.kakao_yellow,
        color: themeVars.color.gray_900,
        gap: '0.6rem',
      },
      gray: {
        backgroundColor: themeVars.color.gray_400,
        color: themeVars.color.gray_900,
      },
    },
    size: {
      small: {
        height: '3.5rem',
        width: '9.6rem',
        ...themeVars.fontStyles.button2_sb_12,
      },
      middle: {
        height: '5.2rem',
        width: '32.7rem',
        ...themeVars.fontStyles.button2_sb_16,
      },
      big: {
        height: '5.4rem',
        width: '32.7rem',
        ...themeVars.fontStyles.button2_sb_16,
      },
    },
  },
});
