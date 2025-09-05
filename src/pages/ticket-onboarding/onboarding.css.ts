import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0.4rem 2.4rem',
});

export const section = style({
  position: 'fixed',
  bottom: '13.1rem',
});
