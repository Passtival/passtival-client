import { useQuery, useMutation } from '@tanstack/react-query';

import {
  ADMIN_QUERY_OPTIONS,
  ADMIN_MUTATION_OPTIONS,
} from '@pages/admin/apis/queries';
import { TITLE } from '@pages/admin/constants/TITLE';

import Button from '@shared/components/button/button';

import * as styles from './generate-auth-key.css';

const GenerateAuthKey = () => {
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

  const handleLevel1 = () => {
    setLevelMutation.mutate(1);
  };

  const handleLevel2 = () => {
    setLevelMutation.mutate(2);
  };

  const handleLevel3 = () => {
    setLevelMutation.mutate(3);
  };

  if (error) return <div>인증키를 불러오는데 실패했습니다.</div>;

  return (
    <>
      <p className={styles.title}>{TITLE.AUTH}</p>
      <div className={styles.container}>
        <p className={styles.authKey}>
          {authKeyData?.result?.authenticationKey || ''}
        </p>

        <div className={styles.buttonContainer}>
          <Button
            size="xl"
            onClick={handleLevel1}
          >
            Level 1 인증키
          </Button>

          <Button
            size="xl"
            onClick={handleLevel2}
          >
            Level 2 인증키
          </Button>

          <Button
            size="xl"
            onClick={handleLevel3}
          >
            Level 3 인증키
          </Button>
        </div>
      </div>
    </>
  );
};

export default GenerateAuthKey;
