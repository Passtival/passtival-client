import { useState } from 'react';

import Input from '@shared/components/input/input';

const USE_INFO_FORM = {
  NAME: '이름',
  INSTAR_ID: '인스타그램 ID를 입력하세요',
  PHONE: '전화번호를 입력하세요',
};

const UseInfoForm = () => {
  const [name, setName] = useState('');
  const [instaid, setInstaid] = useState('');
  const [phone, setPhone] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleInstaidChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstaid(e.target.value);
  };
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  return (
    <>
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
    </>
  );
};

export default UseInfoForm;
