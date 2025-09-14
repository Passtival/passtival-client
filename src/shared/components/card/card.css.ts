import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',

  borderRadius: '10px',
  width: '100%',
  height: '13.3rem',
  backgroundColor: themeVars.color.gray_500_40,
  gap: '0.5rem',
});

export const titleContainer = style({
  display: 'flex',
  flexDirection: 'column',
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
});

export const title = recipe({
  base: {},
  variants: {
    type: {
      sm: {
        ...themeVars.fontStyles.title_b_18,
        color: themeVars.color.bg_white,
        padding: '1.4rem 1.1rem 0 1.5rem',
      },
      lg: {
        ...themeVars.fontStyles.title_b_20,
        color: themeVars.color.main_yellow,
        padding: '2.3rem 1.1rem 0 1.6rem',
      },
    },
  },
});

export const assignee = style({
  ...themeVars.fontStyles.title_b_14,
  color: themeVars.color.main_yellow,
  padding: '0 1.1rem 0.5rem 1.5rem',
});

export const descriptionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  height: '1.7rem',
});

export const description = recipe({
  base: {
    maxWidth: '16rem',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
  },
  variants: {
    descType: {
      sm: {
        ...themeVars.fontStyles.caption2_m_12,
        color: themeVars.color.gray_200,
        padding: '0 1.1rem 3.4rem 1.5rem',
      },
      md: {
        ...themeVars.fontStyles.caption2_m_12,
        color: themeVars.color.gray_400,
        padding: '0 1.1rem 3.4rem 1.5rem',
      },
      lg: {
        ...themeVars.fontStyles.body1_r_15,
        color: themeVars.color.gray_400,
        padding: '0 1.1rem 4.1rem 1.6rem',
      },
    },
  },
});

export const img = style({
  zIndex: themeVars.zIndex.modal,
  padding: '1.2rem 1.6rem 1.6rem 0',
  display: 'flex',
});
