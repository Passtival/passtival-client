import {
  EVENT_YEAR,
  EVENT_MONTH,
  EVENT_DAYS,
} from '../constants/blind-match-time';

/**
 * 현재 날짜에 따라 적절한 일차를 결정하는 훅
 * @param urlDay - URL 파라미터로 전달된 일차 값
 * @returns 현재 날짜에 맞는 일차 문자열 ('1', '2', '3')
 */
export const useCurrentDay = (urlDay?: string) => {
  const getCurrentDay = () => {
    const now = new Date();
    const currentDate = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    // 이벤트 날짜와 비교
    if (currentYear === EVENT_YEAR && currentMonth === EVENT_MONTH) {
      if (currentDate === EVENT_DAYS.DAY_1) {
        return '1';
      } else if (currentDate === EVENT_DAYS.DAY_2) {
        return '2';
      } else if (currentDate === EVENT_DAYS.DAY_3) {
        return '3';
      }
    }

    // URL 파라미터가 있으면 우선 사용, 없으면 기본값 1
    return urlDay || '1';
  };

  return getCurrentDay();
};
