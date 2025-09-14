/**
 * 티켓 이벤트 날짜 상수
 * @description 2025년 9월 23, 24, 25일 3일간 진행
 */
export const EVENT_YEAR = 2025;
export const EVENT_MONTH = 8; // 9월 (0-based index)
export const EVENT_DAYS = {
  DAY_1: 23,
  DAY_2: 24,
  DAY_3: 25,
} as const;

/**
 * 현재 날짜가 이벤트 날짜 중 어느 날인지 확인하는 함수
 * @returns 해당하는 DAY 값 (1, 2, 3) 또는 null
 */
export const getCurrentEventDay = (): number | null => {
  // 실제 현재 날짜 사용
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  // 이벤트 연도와 월이 맞는지 확인
  if (currentYear !== EVENT_YEAR || currentMonth !== EVENT_MONTH) {
    return null;
  }

  // 현재 날짜가 이벤트 날짜 중 어느 것인지 확인
  if (currentDay === EVENT_DAYS.DAY_1) {
    return 1;
  } else if (currentDay === EVENT_DAYS.DAY_2) {
    return 2;
  } else if (currentDay === EVENT_DAYS.DAY_3) {
    return 3;
  }

  return null;
};
