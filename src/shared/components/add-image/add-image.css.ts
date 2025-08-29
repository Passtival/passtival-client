import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  gap: '1rem',
  height: '9.4rem',
  padding: '2.4rem 2.4rem 1rem 2.4rem',
});

export const addButton = style({
  width: '6rem',
  height: '6rem',
  border: `1px solid ${themeVars.color.gray_400}`,
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
});
export const countText = style({
  marginTop: '0.25rem',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
});

export const current = style({
  color: themeVars.color.main_blue,
});

export const max = style({
  color: themeVars.color.gray_400,
});

export const uploadContainer = style({
  position: 'relative',
  width: '6rem',
  height: '6rem',
  overflow: 'hidden',
  border: `1.5px solid ${themeVars.color.gray_500_40}`,
  borderRadius: '5px',
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const removeButton = style({
  position: 'absolute',
  top: '0.3rem',
  right: '0.3rem',
  backgroundColor: themeVars.color.gray_600,
  borderRadius: '42px',
  width: '1rem',
  height: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
