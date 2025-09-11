import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { BLIND_MATCH_QUERY_OPTIONS } from '@pages/blind-match/apis/queries';
import { formatPhoneNumber } from '@pages/blind-match/utils/formattied-number';

import Chip from '@shared/components/chip/chip';
import Input from '@shared/components/input/input';

import * as styles from './use-info-form.css';

const USE_INFO_FORM = {
  PHONE: '전화번호를 입력하세요 (필수)',
  INSTAR_ID: '인스타그램 ID를 입력하세요 (선택)',
};

interface UseInfoFormProps {
  instaId: string;
  phoneNumber: string;
  gender: string;
  onInstaIdChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
  onGenderChange: (value: string) => void;
}

const UseInfoForm = ({
  instaId,
  phoneNumber,
  gender,
  onInstaIdChange,
  onPhoneNumberChange,
  onGenderChange,
}: UseInfoFormProps) => {
  const { data } = useQuery(
    BLIND_MATCH_QUERY_OPTIONS.BLIND_MATCH_INFO_STORAGE(),
  );
  useEffect(() => {
    const apiGender = data?.result?.memberGender as
      | 'FEMALE'
      | 'MALE'
      | undefined;
    if (!gender && apiGender) {
      onGenderChange(apiGender === 'FEMALE' ? '여성' : '남성');
    }
  }, [data?.result?.memberGender, gender, onGenderChange]);

  const handleInstaIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onInstaIdChange(e.target.value);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    onPhoneNumberChange(formattedValue);
  };
  return (
    <div className={styles.container}>
      <Input
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder={USE_INFO_FORM.PHONE}
      />
      <Input
        value={instaId}
        onChange={handleInstaIdChange}
        placeholder={USE_INFO_FORM.INSTAR_ID}
      />
      <Input
        value={instaId}
        onChange={handleInstaIdChange}
        placeholder={USE_INFO_FORM.INSTAR_ID}
      />
      <div className={styles.chip}>
        <Chip
          label="여성"
          selected={gender === '여성'}
          onChange={() => onGenderChange('여성')}
          fullWidth
        />
        <Chip
          label="남성"
          selected={gender === '남성'}
          onChange={() => onGenderChange('남성')}
          fullWidth
        />
      </div>
    </div>
  );
};

export default UseInfoForm;
