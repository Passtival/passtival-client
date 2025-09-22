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
    const { value } = e.target;
    const koreanOnlyValue = value.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣·]/g, '');
    onNameChange(koreanOnlyValue);
  };

  const handleStudentNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let filteredValue = value;

    if (value.length <= 4) {
      filteredValue = value.replace(/[^0-9]/g, '');
    } else if (value.length > 4) {
      const part1 = value.substring(0, 4).replace(/[^0-9]/g, '');
      const part2 = value
        .substring(4, 5)
        .replace(/[^A-Za-z]/g, '')
        .toUpperCase();
      const part3 = value.substring(5, 9).replace(/[^0-9]/g, '');

      filteredValue = `${part1}${part2}${part3}`;
    }

    onStudentNumberChange(filteredValue);
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
