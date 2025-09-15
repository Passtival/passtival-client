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
  const [day1Winner, setDay1Winner] = useState<WinnerData | null>(null);
  const [day2Winner, setDay2Winner] = useState<WinnerData | null>(null);
  const [day3Winner, setDay3Winner] = useState<WinnerData | null>(null);
  const [premiumWinner, setPremiumWinner] = useState<WinnerData | null>(null);

  const { refetch: refetchDay1 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(1),
  });

  const { refetch: refetchDay2 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(2),
  });

  const { refetch: refetchDay3 } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_WINNERS(3),
  });

  const { refetch: refetchPremium } = useQuery({
    ...ADMIN_QUERY_OPTIONS.PREMIUM_RAFFLE_WINNERS(),
  });

  const executeDay1Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      const { data: newData } = await refetchDay1();
      if (newData?.isSuccess && newData?.result) {
        setDay1Winner(newData.result);
      }
    },
  });

  const executeDay2Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      const { data: newData } = await refetchDay2();
      if (newData?.isSuccess && newData?.result) {
        setDay2Winner(newData.result);
      }
    },
  });

  const executeDay3Mutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_RAFFLE(),
    onSuccess: async () => {
      const { data: newData } = await refetchDay3();
      if (newData?.isSuccess && newData?.result) {
        setDay3Winner(newData.result);
      }
    },
  });

  const executePremiumMutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.EXECUTE_PREMIUM_RAFFLE(),
    onSuccess: async () => {
      const { data: newData } = await refetchPremium();
      if (newData?.isSuccess && newData?.result) {
        setPremiumWinner(newData.result);
      }
    },
  });

  const handleExecuteWinner = async (day: number) => {
    try {
      if (day === 4) {
        await executePremiumMutation.mutateAsync();
      } else {
        const mutation =
          day === 1
            ? executeDay1Mutation
            : day === 2
              ? executeDay2Mutation
              : executeDay3Mutation;
        await mutation.mutateAsync(day);
      }
    } catch {
      // 에러 처리
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
              onExecuteRaffle={() => handleExecuteWinner(1)}
              winner={day1Winner}
              isLoading={executeDay1Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="2">
            <DrawingMain
              currentDay="2일차"
              onExecuteRaffle={() => handleExecuteWinner(2)}
              winner={day2Winner}
              isLoading={executeDay2Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="3">
            <DrawingMain
              currentDay="3일차"
              onExecuteRaffle={() => handleExecuteWinner(3)}
              winner={day3Winner}
              isLoading={executeDay3Mutation.isPending}
            />
          </Tab.Panel>
          <Tab.Panel value="4">
            <DrawingMain
              currentDay="Premium"
              onExecuteRaffle={() => handleExecuteWinner(4)}
              winner={premiumWinner}
              isLoading={executePremiumMutation.isPending}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Container>
    </>
  );
};

export default TicketDrawing;
