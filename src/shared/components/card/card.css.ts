import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',

    backgroundColor: themeVars.color.sub_blue_40,
    boxShadow: '2px 2px 5px rgba(24, 118, 250, 0.20)',

    borderRadius: '10px',
  },

  variants: {
    type: {
      details: {
        width: '32.1rem',
        height: '13.3rem',
      },
      apply: {
        width: '34.5rem',
        height: '13.3rem',
      },
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '16rem',

  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const title = recipe({
  base: {
    display: '-webkit-box',

    ...themeVars.fontStyles.title_b_18,
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  },
  variants: {
    type: {
      details: {
        margin: '1.4rem 1.1rem 0 1.5rem',
      },
      apply: {
        margin: '2.3rem 1.1rem 0 1.5rem',
      },
    },
  },
});

export const major = style({
  display: '-webkit-box',

  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_blue,
  margin: '0 1.1rem 0.5rem 1.5rem',

  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const description = recipe({
  base: {
    display: '-webkit-box',

    color: themeVars.color.gray_600,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  variants: {
    type: {
      details: {
        ...themeVars.fontStyles.caption2_m_12,

        margin: '0 1.1rem 3.4rem 1.5rem',
      },
      apply: {
        ...themeVars.fontStyles.body1_r_15,
        color: themeVars.color.gray_600,

        margin: '0 1.1rem 4.1rem 1.6rem',
      },
    },
  },
});

export const img = style({
  width: '11.9rem',
  height: '10.5rem',
  margin: '1.2rem 1.6rem 0 0',
});
