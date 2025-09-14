import { useState, useCallback, useEffect } from 'react';

import { getCurrentEventDay } from '../constants/ticket-time';

export type EventDay = '1일차' | '2일차' | '3일차';

export interface DateSelectionState {
  selectedDate: EventDay;
  selectedDayNumber: number; // API 호출용 숫자 (1, 2, 3)
  setSelectedDate: (date: EventDay) => void;
  isCurrentEventDay: boolean; // 현재 날짜가 이벤트 날짜인지 여부
}

/**
 * 티켓 페이지에서 날짜 선택을 관리하는 훅
 * @description 현재 날짜를 기반으로 자동으로 이벤트 날짜를 설정하고, API 호출용 숫자도 제공
 */
export const useDateSelection = (): DateSelectionState => {
  // 현재 날짜가 이벤트 날짜인지 확인
  const currentEventDay = getCurrentEventDay();
  const isCurrentEventDay = currentEventDay !== null;

  // 현재 이벤트 날짜가 있으면 해당 날짜를, 없으면 1일차를 기본값으로 설정
  const getInitialDate = (): EventDay => {
    if (currentEventDay === 1) return '1일차';
    if (currentEventDay === 2) return '2일차';
    if (currentEventDay === 3) return '3일차';
    return '1일차';
  };

  const [selectedDate, setSelectedDate] = useState<EventDay>(getInitialDate());

  // selectedDate를 기반으로 API 호출용 숫자 계산
  const selectedDayNumber =
    selectedDate === '1일차' ? 1 : selectedDate === '2일차' ? 2 : 3;

  const handleSetSelectedDate = useCallback((date: EventDay) => {
    setSelectedDate(date);
  }, []);

  // 현재 날짜가 변경되면 자동으로 업데이트
  useEffect(() => {
    const newCurrentEventDay = getCurrentEventDay();
    if (newCurrentEventDay !== null) {
      const newDate: EventDay =
        newCurrentEventDay === 1
          ? '1일차'
          : newCurrentEventDay === 2
            ? '2일차'
            : '3일차';
      setSelectedDate(newDate);
    }
  }, []);

  return {
    selectedDate,
    selectedDayNumber,
    setSelectedDate: handleSetSelectedDate,
    isCurrentEventDay,
  };
};
