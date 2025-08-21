import { styleVariants, style } from '@vanilla-extract/css';

import { themeVars } from '@shared/styles/theme.css';

export const carouselType = styleVariants({
  details: {
    position: 'relative',

    width: '32.7rem',
    height: '21.4rem',
    margin: '0 auto',
    border: `1.5px solid ${themeVars.color.gray_500_40}`,

    borderRadius: '14px',

    overflow: 'hidden',
  },
  Apply: { position: 'relative', width: '37.5rem' },
});

export const image = style({
  width: '15rem',
  height: '12rem',
  borderRadius: '50%',
  overflow: 'hidden', // 이미지가 래퍼 밖으로 벗어나지 않도록 합니다.
});

export const slideContainer = style({
  padding: '0 1.5rem', // 각 슬라이드 좌우에 패딩을 줘서 총 3rem 간격 생성
});
