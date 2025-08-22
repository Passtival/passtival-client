import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const card = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: themeVars.color.sub_blue_40,
    boxShadow: '2px 2px 5px rgba(24, 118, 250, 0.20)',

    borderRadius: '10px',
  },

  variants: {
    size: {
      sm: {
        width: '32.1rem',
        height: '13.3rem',
      },
      lg: {
        width: '34.5rem',
        height: '13.3rem',
      },
    },
  },
});

export const contentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '16rem',

  overflow: 'hidden',

  textOverflow: 'ellipsis',
});

export const titlesm = style({
  width: '16rem',
  height: '2.7rem',
  ...themeVars.fontStyles.title_b_18,
  margin: '1.4rem 1.1rem 0 1.5rem',

  whiteSpace: 'nowrap',
});

export const titlelg = style({
  ...themeVars.fontStyles.title_b_18,
  margin: '1.4rem 1.1rem 0 1.5rem',

  whiteSpace: 'nowrap',
});

export const major = style({
  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_blue,
  margin: '0 1.1rem 0.5rem 1.5rem',

  whiteSpace: 'nowrap',
});

export const majortxt = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.gray_600,
  height: '5.3rem',
  margin: '0 1.1rem 3.4rem 1.5rem',
});

export const losttxt = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
  height: '6.4rem',
  margin: '0 1.1rem 4.1rem 1.6rem',
  overflow: 'hidden',
});

export const img = style({
  width: '11.9rem',
  height: '10.5rem',
  margin: '1.2rem 1.6rem 0 0',
});
