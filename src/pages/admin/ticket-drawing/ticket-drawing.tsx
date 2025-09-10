import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import {
  ADMIN_QUERY_OPTIONS,
  ADMIN_MUTATION_OPTIONS,
} from '@pages/admin/apis/queries';

import Tab from '@shared/components/tab/tab';

import DrawingMain from './components/drawing-main/drawing-main';
import type { WinnerData } from './types/winner-data';

const TicketDrawing = () => {
  const [day1Winners, setDay1Winners] = useState<WinnerData[]>([]);
  const [day2Winners, setDay2Winners] = useState<WinnerData[]>([]);
  const [day3Winners, setDay3Winners] = useState<WinnerData[]>([]);
  const [premiumWinners, setPremiumWinners] = useState<WinnerData[]>([]);

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
        setDay1Winners((prev) => [...prev, day1Data.result!]);
      }
    },
  });

  const executeDay2Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      await refetchDay2();
      if (day2Data?.isSuccess && day2Data?.result) {
        setDay2Winners((prev) => [...prev, day2Data.result!]);
      }
    },
  });

  const executeDay3Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      await refetchDay3();
      if (day3Data?.isSuccess && day3Data?.result) {
        setDay3Winners((prev) => [...prev, day3Data.result!]);
      }
    },
  });

  const executePremiumMutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_PREMIUM_RAFFLE(),
    onSuccess: async () => {
      await refetchPremium();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => [...prev, premiumData.result!]);
      }
    },
  });

  const handleReExecuteWinner1 = async (day: number) => {
    if (day === 4) {
      await executePremiumMutation.mutateAsync();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => {
          if (prev.length === 0) {
            return [premiumData.result!];
          }
          return [premiumData.result!, prev[1]];
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
        setter((prev) => {
          if (prev.length === 0) {
            return [data.result!];
          }
          return [data.result!, prev[1]];
        });
      }
    }
  };

  const handleReExecuteWinner2 = async (day: number) => {
    if (day === 4) {
      await executePremiumMutation.mutateAsync();
      if (premiumData?.isSuccess && premiumData?.result) {
        setPremiumWinners((prev) => {
          if (prev.length === 0) return [premiumData.result!];
          if (prev.length === 1) return [...prev, premiumData.result!];
          return [prev[0], premiumData.result!];
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
        setter((prev) => {
          if (prev.length === 0) return [data.result!];
          if (prev.length === 1) return [...prev, data.result!];
          return [prev[0], data.result!];
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
