import { useState } from 'react';

import Chip from '@shared/components/chip/chip';
import Input from '@shared/components/input/input';

import * as styles from './use-info-form.css';

const USE_INFO_FORM = {
  NAME: '이름',
  INSTAR_ID: '인스타그램 ID를 입력하세요',
  PHONE: '전화번호를 입력하세요',
};

const UseInfoForm = () => {
  const [name, setName] = useState('');
  const [instaid, setInstaid] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleInstaidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstaid(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender);
  };

  return (
    <div className={styles.container}>
      <Input
        value={name}
        onChange={handleNameChange}
        placeholder={USE_INFO_FORM.NAME}
      />
      <Input
        value={instaid}
        onChange={handleInstaidChange}
        placeholder={USE_INFO_FORM.INSTAR_ID}
      />
      <Input
        value={phone}
        onChange={handlePhoneChange}
        placeholder={USE_INFO_FORM.PHONE}
      />
      <div className={styles.chip}>
        <Chip
          label="여성"
          selected={selectedGender === '여성'}
          onChange={() => handleGenderChange('여성')}
          size="lg"
        />
        <Chip
          label="남성"
          selected={selectedGender === '남성'}
          onChange={() => handleGenderChange('남성')}
          size="lg"
        />
      </div>
    </div>
  );
};

export default UseInfoForm;
