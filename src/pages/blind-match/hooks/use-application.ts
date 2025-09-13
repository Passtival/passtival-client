import { useEffect, useState } from 'react';

type ViewState = 'before-match' | 'entry' | 'complete' | 'closed' | 'results';

// 번호팅 이벤트 날짜 상수
const EVENT_YEAR = 2025;
const EVENT_MONTH = 8; // 9월
const EVENT_DAYS = {
  DAY_1: 23,
  DAY_2: 24,
  DAY_3: 25,
} as const;

// 시간 상수
const START_HOUR = 0; // 00:00부터 신청 가능
const START_MINUTE = 0;
const DEADLINE_HOUR = 17;
const DEADLINE_MINUTE = 30;
const RESULTS_HOUR = 18;
const RESULTS_MINUTE = 0;

export const useApplication = (currentDay: string) => {
  const [viewState, setViewState] = useState<ViewState>('before-match');
  const [hasApplied, setHasApplied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // 하드코딩된 테스트 데이터 제거하고 실제 시간 기반 로직으로 변경
    const checkStatus = () => {
      const now = new Date();
      const startTime = new Date();
      const deadline = new Date();
      const resultsTime = new Date();

      // 각 일차별 날짜 설정
      if (currentDay === '1일차') {
        startTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_1);
        deadline.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_1);
        resultsTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_1);
      } else if (currentDay === '2일차') {
        startTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_2);
        deadline.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_2);
        resultsTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_2);
      } else if (currentDay === '3일차') {
        startTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_3);
        deadline.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_3);
        resultsTime.setFullYear(EVENT_YEAR, EVENT_MONTH, EVENT_DAYS.DAY_3);
      }

      // 시간 설정
      startTime.setHours(START_HOUR, START_MINUTE, 0, 0);
      deadline.setHours(DEADLINE_HOUR, DEADLINE_MINUTE, 0, 0);
      resultsTime.setHours(RESULTS_HOUR, RESULTS_MINUTE, 0, 0);

      // 시간에 따른 상태 결정
      if (now.getTime() >= resultsTime.getTime()) {
        setViewState('results');
      } else if (now.getTime() > deadline.getTime()) {
        setViewState('closed');
      } else if (now.getTime() >= startTime.getTime()) {
        setViewState('entry');
      } else {
        setViewState('before-match');
      }
    };

    checkStatus();
  }, [currentDay]);

  const handleApplicationComplete = () => {
    setViewState('complete');
    setHasApplied(true);
    setIsSuccess(false);
  };

  return { viewState, handleApplicationComplete, hasApplied, isSuccess };
};
