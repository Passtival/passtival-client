import { style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center', // body를 세로 중앙에 고정
  flex: 1,
  textAlign: 'center',
  position: 'relative', // 버튼 위치 제어 위해 relative
});

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.8rem', // 제목-설명 간격
});

export const kakaoButton = style({
  marginTop: '17.1rem', // body 기준으로 여백
});

export const title = style({
  ...themeVars.fontStyles.title_b_22,
  color: themeVars.color.gray_900,
});

export const description = style({
  ...themeVars.fontStyles.body1_r_15,
  color: themeVars.color.gray_600,
  whiteSpace: 'pre-wrap',
  padding: '0 3.3rem',
});
