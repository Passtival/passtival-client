import Input from '@shared/components/input/input';

import * as styles from './input-section.css';

interface InputSectionProps {
  name: string;
  studentNumber: string;
  accessKey: string;
  isErrorState: boolean;
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStudentNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputSection = ({
  name,
  studentNumber,
  accessKey,
  isErrorState,
  onNameChange,
  onStudentNumberChange,
  onKeyChange,
}: InputSectionProps) => {
  return (
    <div className={styles.input}>
      <Input
        value={name}
        onChange={onNameChange}
        placeholder="이름"
        errorState={isErrorState}
      />
      <Input
        value={studentNumber}
        onChange={onStudentNumberChange}
        placeholder="학번"
        errorState={isErrorState}
      />
      <Input
        value={accessKey}
        onChange={onKeyChange}
        placeholder="인증키"
        errorState={isErrorState}
      />
    </div>
  );
};

export default InputSection;
