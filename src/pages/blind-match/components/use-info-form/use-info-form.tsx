import Chip from '@shared/components/chip/chip';
import Input from '@shared/components/input/input';

import * as styles from './use-info-form.css';

const USE_INFO_FORM = {
  NAME: '이름',
  INSTAR_ID: '인스타그램 ID를 입력하세요',
  PHONE: '전화번호를 입력하세요',
};

interface UseInfoFormProps {
  name: string;
  instaId: string;
  phoneNumber: string;
  gender: string;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInstaIdChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPhoneNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onGenderChange: (value: string) => void;
}

const UseInfoForm = ({
  name,
  instaId,
  phoneNumber,
  gender,
  onNameChange,
  onInstaIdChange,
  onPhoneNumberChange,
  onGenderChange,
}: UseInfoFormProps) => {
  return (
    <div className={styles.container}>
      <Input
        value={name}
        onChange={onNameChange}
        placeholder={USE_INFO_FORM.NAME}
      />
      <Input
        value={instaId}
        onChange={onInstaIdChange}
        placeholder={USE_INFO_FORM.INSTAR_ID}
      />
      <Input
        value={phoneNumber}
        onChange={onPhoneNumberChange}
        placeholder={USE_INFO_FORM.PHONE}
      />
      <div className={styles.chip}>
        <Chip
          label="여성"
          selected={gender === '여성'}
          onChange={() => onGenderChange('여성')}
          size="lg"
        />
        <Chip
          label="남성"
          selected={gender === '남성'}
          onChange={() => onGenderChange('남성')}
          size="lg"
        />
      </div>
    </div>
  );
};

export default UseInfoForm;
