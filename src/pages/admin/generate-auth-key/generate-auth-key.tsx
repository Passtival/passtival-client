import { useQuery, useMutation } from '@tanstack/react-query';
import { useState } from 'react';

import {
  ADMIN_QUERY_OPTIONS,
  ADMIN_MUTATION_OPTIONS,
} from '@pages/admin/apis/queries';
import { TITLE } from '@pages/admin/constants/TITLE';

import Button from '@shared/components/button/button';
import DropDown from '@shared/components/drop-down/drop-down';
import { IcSvgEntry } from '@shared/icons';

import * as styles from './generate-auth-key.css';

// Level 선택 옵션 정의
const LEVEL_OPTIONS = [
  { displayName: 'Level 1 인증키', value: '1' },
  { displayName: 'Level 2 인증키', value: '2' },
  { displayName: 'Level 3 인증키', value: '3' },
];

const GenerateAuthKey = () => {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  const {
    data: authKeyData,
    error,
    refetch,
  } = useQuery({
    ...ADMIN_QUERY_OPTIONS.RAFFLE_AUTH_KEY(),
    enabled: false,
  });

  const setLevelMutation = useMutation({
    ...ADMIN_MUTATION_OPTIONS.SET_RAFFLE_AUTH_KEY_LEVEL(),
    onSuccess: () => {
      refetch();
    },
  });

  const handleLevelSelect = (level: string) => {
    setSelectedLevel(level);
    setLevelMutation.mutate(Number(level));
  };

  const handleRefreshAuthKey = () => {
    refetch();
  };

  if (error) return <div>인증키를 불러오는데 실패했습니다.</div>;

  return (
    <>
      <p className={styles.title}>{TITLE.AUTH}</p>
      <div className={styles.container}>
        <p className={styles.authKey}>
          {authKeyData?.result?.authenticationKey || ''}
        </p>

        <div>
          <DropDown
            selected={selectedLevel}
            onSelect={handleLevelSelect}
            options={LEVEL_OPTIONS}
            placeholder="레벨을 선택하세요"
            icon={
              <IcSvgEntry
                width="1.6rem"
                height="1.6rem"
              />
            }
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button onClick={handleRefreshAuthKey}>인증키 새로고침</Button>
        </div>
      </div>
    </>
  );
};

export default GenerateAuthKey;
