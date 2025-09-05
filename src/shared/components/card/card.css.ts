import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',

    borderRadius: '10px',
    position: 'relative',
    width: '100%',
    height: '13.3rem',
    backgroundColor: themeVars.color.gray_500_40,

    marginLeft: '0.8rem',
  },

  variants: {
    type: {
      sm: {
        height: '13.3rem',
      },
      lg: {
        height: '13.3rem',
      },
    },
  },
});

export const content = style({
  zIndex: themeVars.zIndex.modal,
  display: 'flex',
  flexDirection: 'column',
  minWidth: '16rem',
});

export const title = recipe({
  base: {
    display: '-webkit-box',

    ...themeVars.fontStyles.title_b_18,
    color: themeVars.color.bg_white,
    overflow: 'hidden',
    WebkitLineClamp: 1,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
  },
  variants: {
    type: {
      sm: {
        margin: '1.4rem 1.1rem 0 1.5rem',
      },
      lg: {
        margin: '2.3rem 1.1rem 0 1.5rem',
      },
    },
  },
});

export const assignee = style({
  display: '-webkit-box',

  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_yellow,
  margin: '0 1.1rem 0.5rem 1.5rem',

  overflow: 'hidden',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
});

export const description = recipe({
  base: {
    display: '-webkit-box',

    color: themeVars.color.gray_200,
    overflow: 'hidden',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  variants: {
    type: {
      sm: {
        ...themeVars.fontStyles.caption2_m_12,

        margin: '0 1.1rem 3.4rem 1.5rem',
      },
      lg: {
        ...themeVars.fontStyles.body1_r_15,

        margin: '0 1.1rem 4.1rem 1.6rem',
      },
    },
  },
});

export const img = style({
  zIndex: themeVars.zIndex.modal,
  margin: '1.2rem 1.6rem 0 0',

  objectFit: 'cover',
});
