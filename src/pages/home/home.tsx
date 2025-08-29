import { useState } from 'react';
import type { ChangeEvent } from 'react';

import Input from '@shared/components/input/input'; // 파일 경로에 맞게 수정해주세요.

const HomePage = () => {
  const [email, setEmail] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // 간단한 이메일 유효성 검사 (예: '@'가 포함되어 있는지)
    setHasError(!value.includes('@'));
  };

  return (
    <div style={{ padding: '20px', backgroundColor: 'red' }}>
      <h2>이메일 주소를 입력해주세요.</h2>
      <Input
        value={email}
        errorState={hasError}
        onChange={handleEmailChange}
        placeholder="example@email.com"
      />
      {hasError && (
        <p style={{ color: 'red', marginTop: '8px' }}>
          올바른 이메일 형식을 입력해주세요.
        </p>
      )}
    </div>
  );
};

export default HomePage;
