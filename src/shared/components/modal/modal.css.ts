import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { themeVars } from '@shared/styles';

export const container = recipe({
  base: {
    position: 'fixed',
    inset: 0,
    zIndex: themeVars.zIndex.modal,

    background: 'var(--bg_white_10, rgba(255, 255, 255, 0.10))',
    backdropFilter: 'blur(2.5px)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0rem 5.3rem',
  },

  variants: {
    open: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
  },

  defaultVariants: {
    open: false,
  },
});

export const buttonBase = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '1.2rem 0',

  flex: 1,
  color: themeVars.color.main_yellow,
});

export const alignText = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const content = style({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: themeVars.color.gray_200,
  borderRadius: '14px',
  boxShadow: '0 0 32px 0 rgba(0, 0, 0, 0.20)',
  backdropFilter: 'blur(25px)',
});

export const body = style([
  alignText,
  { padding: '2rem 1.6rem', gap: '0.4rem' },
]);

export const summary = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',
});

export const infoSection = style([alignText]);

export const title = style({
  ...themeVars.fontStyles.button2_sb_16,
  color: themeVars.color.gray_900,
});

export const modalBodyText = style({
  ...themeVars.fontStyles.button_r_14,
  color: themeVars.color.gray_600,
});

export const footer = style({
  display: 'flex',
  width: '100%',

  borderTop: `0.333px solid ${themeVars.color.gray_600}`,
});

export const closeButton = style([
  buttonBase,
  themeVars.fontStyles.button_r_14,
]);

export const actionButton = style([
  buttonBase,
  themeVars.fontStyles.button2_sb_14,
  { borderLeft: `0.333px solid ${themeVars.color.gray_600}` },
]);
