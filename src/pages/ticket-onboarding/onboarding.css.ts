import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ticketImg = style({
  width: '24.3rem',
  height: '25.3rem',
});

export const section = style({
  position: 'fixed',
  bottom: '13.1rem',
  padding: '0 2.4rem',
});
