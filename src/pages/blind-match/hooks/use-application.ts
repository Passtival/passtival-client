import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

import { BLIND_MATCH_QUERY_OPTIONS } from '../apis/queries';
import {
  EVENT_YEAR,
  EVENT_MONTH,
  EVENT_DAYS,
  START_HOUR,
  START_MINUTE,
  DEADLINE_HOUR,
  DEADLINE_MINUTE,
  RESULTS_HOUR,
  RESULTS_MINUTE,
} from '../constants/blind-match-time';

/**
 * 번호팅 매칭 상태 타입
 * @description 사용자가 볼 수 있는 화면 상태를 나타냄
 */
type ViewState = 'before-match' | 'entry' | 'complete' | 'closed' | 'results';

/**
 * 번호팅 신청 상태 관리 훅
 * @description 시간에 따른 상태 전환과 API 연동을 관리
 * @param currentDay - 현재 선택된 일차 ('1일차', '2일차', '3일차')
 * @returns 번호팅 관련 상태와 핸들러 함수들
 */
export const useApplication = (currentDay: string) => {
  /** 현재 화면 상태 */
  const [viewState, setViewState] = useState<ViewState>('before-match');

  /** 사용자가 매칭에 신청했는지 여부 */
  const [hasApplied, setHasApplied] = useState(false);

  /** 매칭 성공 여부 (신청 후 결과 발표 시점에 결정) */
  const [isSuccess, setIsSuccess] = useState(false);

  /** 신청 완료 상태 (서버 데이터 기반으로 관리) */
  const [isApplicationCompleted, setIsApplicationCompleted] = useState(false);

  /**
   * 매칭 결과 조회
   * @description 18시 이후 매칭 결과를 서버에서 가져옴
   */
  const { data: matchResult } = useQuery(
    BLIND_MATCH_QUERY_OPTIONS.BLIND_MATCH_RESULT(),
  );

  /**
   * 사용자 정보 조회
   * @description 현재 사용자의 번호팅 정보와 신청 여부를 확인
   */
  const { data: userInfo } = useQuery(
    BLIND_MATCH_QUERY_OPTIONS.BLIND_MATCH_INFO_STORAGE(),
  );

  /**
   * 시간에 따른 상태 전환 로직
   * @description 현재 시간과 이벤트 시간을 비교하여 적절한 화면 상태 결정
   */
  useEffect(() => {
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
        // 마감 시간 후: 신청 완료한 사람은 complete 유지, 신청 안한 사람은 closed
        if (hasApplied) {
          setViewState('complete');
        } else {
          setViewState('closed');
        }
      } else if (now.getTime() >= startTime.getTime()) {
        // 신청 시간 이후에만 신청 완료 상태 확인
        if (isApplicationCompleted) {
          setViewState('complete');
        } else {
          setViewState('entry');
        }
      } else {
        // 신청 시간 이전에는 무조건 before-match 상태
        setViewState('before-match');
      }
    };

    checkStatus();
  }, [currentDay, isApplicationCompleted, hasApplied]);

  /**
   * 매칭 결과에 따른 성공/실패 판단
   * @description 매칭 결과가 있으면 성공/실패 상태만 업데이트
   * 신청 완료 여부는 POST /api/matching 성공으로 판단
   */
  useEffect(() => {
    if (matchResult?.result) {
      // 매칭 결과가 있으면 이미 신청한 상태
      setHasApplied(true);
      // 매칭 결과에 partnerInfo가 있으면 성공, 없으면 실패
      setIsSuccess(!!matchResult.result.partnerInfo);
    }
  }, [matchResult]);

  /**
   * 사용자 정보를 통한 신청 여부 확인
   * @description 서버에서 memberApplied 필드로 신청 여부를 확인
   */
  useEffect(() => {
    if (userInfo?.result?.memberApplied) {
      setHasApplied(true);
    }
  }, [userInfo]);

  /**
   * 신청 완료 핸들러
   * @description POST /api/matching 성공 시에만 호출되어 신청 완료 상태 설정
   */
  const handleApplicationComplete = () => {
    setIsApplicationCompleted(true);
    setViewState('complete');
    setHasApplied(true);

    // 성공/실패는 매칭 결과 발표 시점에 결정
    // 여기서는 신청 완료 상태만 설정
  };

  return {
    /** 현재 화면 상태 */
    viewState,
    /** 신청 완료 핸들러 */
    handleApplicationComplete,
    /** 신청 여부 */
    hasApplied,
    /** 매칭 성공 여부 */
    isSuccess,
  };
};
