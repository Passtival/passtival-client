import Input from '@shared/components/input/input';

import * as styles from './input-section.css';

interface InputSectionProps {
  name: string;
  studentNum: string;
  accessKey: string;
  isErrorState: boolean;
  onNameChange: (value: string) => void;
  onStudentNumberChange: (value: string) => void;
  onKeyChange: (value: string) => void;
}

const InputSection = ({
  name,
  studentNum,
  accessKey,
  isErrorState,
  onNameChange,
  onStudentNumberChange,
  onKeyChange,
}: InputSectionProps) => {
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNameChange(e.target.value);
  };

  const handleStudentNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onStudentNumberChange(e.target.value);
  };

  const handleKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onKeyChange(e.target.value);
  };

  return (
    <div className={styles.input}>
      <Input
        value={name}
        onChange={handleNameChange}
        placeholder="이름"
        errorState={isErrorState}
      />
      <Input
        value={studentNum}
        onChange={handleStudentNumChange}
        placeholder="학번"
        errorState={isErrorState}
      />
      <Input
        value={accessKey}
        onChange={handleKeyChange}
        placeholder="인증키"
        errorState={isErrorState}
      />
    </div>
  );
};

export default InputSection;
