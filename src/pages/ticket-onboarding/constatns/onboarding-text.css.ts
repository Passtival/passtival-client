import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  paddingBottom: '0.8rem',
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.main_yellow,
  paddingBottom: '0.6rem',
});

export const section = style({ gap: '0.4rem', paddingBottom: '0.8rem' });

export const header = style({
  ...themeVars.fontStyles.caption2_m_15,
  color: themeVars.color.main_yellow,
});

export const nottitle = style({
  paddingTop: '4rem',
});

export const description = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.bg_white,
});

export const point = style({
  ...themeVars.fontStyles.caption2_m_12,
  color: themeVars.color.main_yellow,
});
