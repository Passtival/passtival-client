import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ticketImg = style({
  width: '100%',
  padding: '3.9rem 8.8rem 1.8rem 8.8rem',
});

export const section = style({
  position: 'fixed',
  width: '100%',
  bottom: '13.1rem',
  padding: '0 2.4rem',
});
