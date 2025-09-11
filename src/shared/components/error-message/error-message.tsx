import * as styles from './error-message.css';

interface ErrorMessageProps {
  message?: string;
  subMessage?: string;
}

const ErrorMessage = ({
  message = '정보를 불러올 수 없습니다.',
  subMessage = '잠시 후 다시 시도해주세요.',
}: ErrorMessageProps) => {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <p>{subMessage}</p>
    </div>
  );
};

export default ErrorMessage;
