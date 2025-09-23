import Modal from '@shared/components/modal/modal';

interface ErrorModalProps {
  onClose: () => void;
  isNameError?: boolean;
}

const ErrorModal = ({ onClose, isNameError = false }: ErrorModalProps) => {
  return (
    <Modal.Content>
      <Modal.Body>
        <Modal.Title>
          {isNameError ? '입력 정보 오류' : '인증키 불일치'}
        </Modal.Title>
        <Modal.Description>
          {isNameError ? (
            <>
              이름과 학번을 다시 확인해주세요.
              <br />
              이름은 한글만 입력 가능합니다.
            </>
          ) : (
            <>
              유효하지 않은 인증키 입니다.
              <br />
              다시 시도해 주세요.
            </>
          )}
        </Modal.Description>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close onClick={onClose}>확인</Modal.Close>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default ErrorModal;
