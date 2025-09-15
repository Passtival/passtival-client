import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',

    borderRadius: '10px',
    width: '100%',
    height: '13.3rem',
    backgroundColor: themeVars.color.gray_500_40,
    gap: '1rem',
  },
  variants: {
    type: {
      sm: {
        padding: '1.4rem 1.1rem 0 1.5rem',
      },
      lg: {
        padding: '1.2rem 1.6rem 1.6rem 1.6rem',
      },
    },
  },
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flex: '1 1 auto',
  alignItems: 'flex-start',
  minWidth: 0,
});

export const title = recipe({
  base: {},
  variants: {
    type: {
      sm: {
        ...themeVars.fontStyles.title_b_18,
        color: themeVars.color.bg_white,
      },
      lg: {
        width: '100%',
        paddingTop: '1.1rem',

        ...themeVars.fontStyles.title_b_20,
        color: themeVars.color.main_yellow,
        WebkitLineClamp: 1,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
    },
  },
});

export const assignee = style({
  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_yellow,
});

export const description = recipe({
  base: {
    maxWidth: '16rem',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 3,
    overflow: 'hidden',
  },
  variants: {
    descType: {
      sm: {
        ...themeVars.fontStyles.caption2_m_12,
        color: themeVars.color.gray_200,
        paddingTop: '0.5rem',
      },
      md: {
        ...themeVars.fontStyles.caption2_m_12,
        color: themeVars.color.gray_400,
        paddingTop: '0.5rem',
      },
      lg: {
        ...themeVars.fontStyles.body1_r_15,
        color: themeVars.color.gray_400,
      },
    },
  },
});
