import { useQuery, useMutation } from '@tanstack/react-query';
import { useState, useEffect } from 'react';

import {
  ADMIN_QUERY_OPTIONS,
  ADMIN_MUTATION_OPTIONS,
} from '@pages/admin/apis/queries';

import Tab from '@shared/components/tab/tab';

import DrawingMain from './components/drawing-main/drawing-main';
import type { WinnerData } from './types/winner-data';

// localStorage 키 상수
const STORAGE_KEYS = {
  DAY1: 'ticket-drawing-day1-winners',
  DAY2: 'ticket-drawing-day2-winners',
  DAY3: 'ticket-drawing-day3-winners',
  PREMIUM: 'ticket-drawing-premium-winners',
};

const TicketDrawing = () => {
  // localStorage에서 데이터를 로드하는 함수
  const loadWinnersFromStorage = (key: string): WinnerData[] => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error(
        `Failed to load winners from localStorage for key ${key}:`,
        error,
      );
      return [];
    }
  };

  // localStorage에 데이터를 저장하는 함수
  const saveWinnersToStorage = (key: string, winners: WinnerData[]) => {
    try {
      localStorage.setItem(key, JSON.stringify(winners));
    } catch (error) {
      console.error(
        `Failed to save winners to localStorage for key ${key}:`,
        error,
      );
    }
  };

  const [day1Winners, setDay1Winners] = useState<WinnerData[]>([]);
  const [day2Winners, setDay2Winners] = useState<WinnerData[]>([]);
  const [day3Winners, setDay3Winners] = useState<WinnerData[]>([]);
  const [premiumWinners, setPremiumWinners] = useState<WinnerData[]>([]);

  // 컴포넌트 마운트 시 localStorage에서 데이터 로드
  useEffect(() => {
    setDay1Winners(loadWinnersFromStorage(STORAGE_KEYS.DAY1));
    setDay2Winners(loadWinnersFromStorage(STORAGE_KEYS.DAY2));
    setDay3Winners(loadWinnersFromStorage(STORAGE_KEYS.DAY3));
    setPremiumWinners(loadWinnersFromStorage(STORAGE_KEYS.PREMIUM));
  }, []);

  const { data: day1Data, refetch: refetchDay1 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(1),
  });

  const { data: day2Data, refetch: refetchDay2 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(2),
  });

  const { data: day3Data, refetch: refetchDay3 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(3),
  });

  const { data: premiumData, refetch: refetchPremium } = useQuery({
    ...ADMIN_QUERY_OPTIONS.PREMIUM_RAFFLE_WINNERS(),
  });

  const executeDay1Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      await refetchDay1();
      if (day1Data?.isSuccess && day1Data?.result) {
        setDay1Winners((prev) => {
          const newWinners = [...prev, day1Data.result!];
          saveWinnersToStorage(STORAGE_KEYS.DAY1, newWinners);
          return newWinners;
        });
      }
    },
  });

  const executeDay2Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      await refetchDay2();
      if (day2Data?.isSuccess && day2Data?.result) {
        setDay2Winners((prev) => {
          const newWinners = [...prev, day2Data.result!];
          saveWinnersToStorage(STORAGE_KEYS.DAY2, newWinners);
          return newWinners;
        });
      }
    },
  });

  const executeDay3Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      await refetchDay3();
      if (day3Data?.isSuccess && day3Data?.result) {
        setDay3Winners((prev) => {
          const newWinners = [...prev, day3Data.result!];
          saveWinnersToStorage(STORAGE_KEYS.DAY3, newWinners);
          return newWinners;
        });
      }
    },
  });

  const executePremiumMutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_PREMIUM_RAFFLE(),
    onSuccess: async () => {
      await refetchPremium();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => {
          const newWinners = [...prev, premiumData.result!];
          saveWinnersToStorage(STORAGE_KEYS.PREMIUM, newWinners);
          return newWinners;
        });
      }
    },
  });

  const handleReExecuteWinner1 = async (day: number) => {
    if (day === 4) {
      await executePremiumMutation.mutateAsync();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => {
          const newWinners =
            prev.length === 0
              ? [premiumData.result!]
              : [premiumData.result!, prev[1]];
          saveWinnersToStorage(STORAGE_KEYS.PREMIUM, newWinners);
          return newWinners;
        });
      }
    } else {
      const mutation =
        day === 1
          ? executeDay1Mutation
          : day === 2
            ? executeDay2Mutation
            : executeDay3Mutation;
      await mutation.mutateAsync(day);

      const data = day === 1 ? day1Data : day === 2 ? day2Data : day3Data;
      if (data?.isSuccess && data?.result) {
        const setter =
          day === 1
            ? setDay1Winners
            : day === 2
              ? setDay2Winners
              : setDay3Winners;
        const storageKey =
          day === 1
            ? STORAGE_KEYS.DAY1
            : day === 2
              ? STORAGE_KEYS.DAY2
              : STORAGE_KEYS.DAY3;

        setter((prev) => {
          const newWinners =
            prev.length === 0 ? [data.result!] : [data.result!, prev[1]];
          saveWinnersToStorage(storageKey, newWinners);
          return newWinners;
        });
      }
    }
  };

  const handleReExecuteWinner2 = async (day: number) => {
    if (day === 4) {
      await executePremiumMutation.mutateAsync();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => {
          const newWinners =
            prev.length === 0
              ? [premiumData.result!]
              : prev.length === 1
                ? [...prev, premiumData.result!]
                : [prev[0], premiumData.result!];
          saveWinnersToStorage(STORAGE_KEYS.PREMIUM, newWinners);
          return newWinners;
        });
      }
    } else {
      const mutation =
        day === 1
          ? executeDay1Mutation
          : day === 2
            ? executeDay2Mutation
            : executeDay3Mutation;
      await mutation.mutateAsync(day);

      const data = day === 1 ? day1Data : day === 2 ? day2Data : day3Data;
      if (data?.isSuccess && data?.result) {
        const setter =
          day === 1
            ? setDay1Winners
            : day === 2
              ? setDay2Winners
              : setDay3Winners;
        const storageKey =
          day === 1
            ? STORAGE_KEYS.DAY1
            : day === 2
              ? STORAGE_KEYS.DAY2
              : STORAGE_KEYS.DAY3;

        setter((prev) => {
          const newWinners =
            prev.length === 0
              ? [data.result!]
              : prev.length === 1
                ? [...prev, data.result!]
                : [prev[0], data.result!];
          saveWinnersToStorage(storageKey, newWinners);
          return newWinners;
        });
      }
    }
  };

  return (
    <>
      <Tab.Container initialValue="1">
        <Tab.List>
          <Tab.Item value="1">1일차</Tab.Item>
          <Tab.Item value="2">2일차</Tab.Item>
          <Tab.Item value="3">3일차</Tab.Item>
          <Tab.Item value="4">Premium</Tab.Item>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel value="1">
            <DrawingMain
              currentDay="1일차"
              onExecuteRaffle={() => handleReExecuteWinner1(1)}
              onExecuteSecondRaffle={() => handleReExecuteWinner2(1)}
              winners={day1Winners}
              isLoading={executeDay1Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="2">
            <DrawingMain
              currentDay="2일차"
              onExecuteRaffle={() => handleReExecuteWinner1(2)}
              onExecuteSecondRaffle={() => handleReExecuteWinner2(2)}
              winners={day2Winners}
              isLoading={executeDay2Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="3">
            <DrawingMain
              currentDay="3일차"
              onExecuteRaffle={() => handleReExecuteWinner1(3)}
              onExecuteSecondRaffle={() => handleReExecuteWinner2(3)}
              winners={day3Winners}
              isLoading={executeDay3Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="4">
            <DrawingMain
              currentDay="Premium"
              onExecuteRaffle={() => handleReExecuteWinner1(4)}
              onExecuteSecondRaffle={() => handleReExecuteWinner2(4)}
              winners={premiumWinners}
              isLoading={executePremiumMutation.isPending}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default TicketDrawing;
