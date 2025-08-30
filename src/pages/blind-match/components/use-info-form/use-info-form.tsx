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
  onNameChange: (value: string) => void;
  onInstaIdChange: (value: string) => void;
  onPhoneNumberChange: (value: string) => void;
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
  const formatPhoneNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');

    let formattedNumber = '';
    if (digitsOnly.length > 3) {
      formattedNumber += digitsOnly.slice(0, 3) + '-';
      if (digitsOnly.length > 7) {
        formattedNumber += digitsOnly.slice(3, 7) + '-';
        formattedNumber += digitsOnly.slice(7, 11);
      } else {
        formattedNumber += digitsOnly.slice(3);
      }
    } else {
      formattedNumber = digitsOnly;
    }
    return formattedNumber;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

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
        value={name}
        onChange={handleNameChange}
        placeholder={USE_INFO_FORM.NAME}
      />
      <Input
        value={instaId}
        onChange={handleInstaIdChange}
        placeholder={USE_INFO_FORM.INSTAR_ID}
      />
      <Input
        value={phoneNumber}
        onChange={handlePhoneChange}
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
