import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const dropdownWrapper = style({
  display: 'flex',
  width: '100%',
  gap: '0.6rem',
  position: 'relative',
  ...themeVars.fontStyles.button2_sb_12,
});

export const dropdownContainer = style({
  display: 'flex',
  width: '100%',
  height: '4rem',
  padding: '1rem 0.6rem',
  border: `1px solid ${themeVars.color.gray_600}`,
  borderRadius: '8px',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  backgroundColor: themeVars.color.gray_200,
});

export const contentWrapper = style({
  display: 'flex',
  width: '100%',
  height: '2rem',
  alignItems: 'center',
  gap: '0.7rem',
});

export const iconWrapper = style({
  display: 'flex',
  width: '2rem',
  height: '2rem',
  padding: '0.2rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: themeVars.color.gray_900,
});

export const dropdownPlaceholder = style({
  flex: 1,
  minWidth: 0,
  textAlign: 'center',
  color: themeVars.color.gray_600,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const rightIcon = style({
  width: '1.2rem',
  height: '1.2rem',
  flexShrink: 0,
  transition: 'transform 0.2s ease',
});

export const dropdownList = style({
  position: 'absolute',
  top: 'calc(100% + 1.1rem)',
  left: 0,
  right: 0,
  backgroundColor: themeVars.color.gray_200,
  boxShadow: `0 0 0.2rem ${themeVars.color.gray_600}`,
  borderRadius: '0.8rem',
  zIndex: themeVars.zIndex.dropdown,
  maxHeight: '21rem',
  overflowY: 'auto',
});

export const optionItem = style({
  display: 'flex',
  width: '100%',
  height: '3.5rem',
  padding: '0 1rem',
  alignItems: 'center',
  borderBottom: `0.5px solid ${themeVars.color.gray_600}`,
  cursor: 'pointer',
  color: themeVars.color.gray_600,
  selectors: {
    '&:last-of-type': { borderBottom: 'none' },
    '&:hover': { backgroundColor: themeVars.color.gray_400 },
  },
});
