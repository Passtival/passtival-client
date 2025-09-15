/**
 * 번호팅 이벤트 날짜 상수
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
 * 번호팅 시간 상수
 * @description 신청 시작, 마감, 결과 발표 시간
 */
export const START_HOUR = 0; // 00:00부터 신청 가능
export const START_MINUTE = 0;
export const DEADLINE_HOUR = 17;
export const DEADLINE_MINUTE = 30;
export const RESULTS_HOUR = 18;
export const RESULTS_MINUTE = 0;

/**
 * 시간 포맷팅 유틸리티 함수
 */
export const formatTime = (hour: number, minute: number): string => {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

/**
 * 신청 가능 시간 문자열
 */
export const APPLICATION_TIME_RANGE = `[신청 가능 시간: ${formatTime(START_HOUR, START_MINUTE)} ~ ${formatTime(DEADLINE_HOUR, DEADLINE_MINUTE)}]`;
