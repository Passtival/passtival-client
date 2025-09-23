import {
  START_HOUR,
  START_MINUTE,
  DEADLINE_HOUR,
  DEADLINE_MINUTE,
} from '../constants/blind-match-time';

/**
 * 시간 포맷팅 유틸리티 함수
 * @param hour - 시간 (0-23)
 * @param minute - 분 (0-59)
 * @returns 포맷된 시간 문자열 (HH:MM)
 */
export const formatTime = (hour: number, minute: number): string => {
  return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
};

/**
 * 신청 가능 시간 문자열
 */
export const APPLICATION_TIME_RANGE = `[신청 가능 시간: ${formatTime(START_HOUR, START_MINUTE)} ~ ${formatTime(DEADLINE_HOUR, DEADLINE_MINUTE)}]`;
