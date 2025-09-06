import Modal from '@shared/components/modal/modal';

interface ErrorModalProps {
  onClose: () => void;
}

const ErrorModal = ({ onClose }: ErrorModalProps) => {
  return (
    <Modal.Content>
      <Modal.Body>
        <Modal.Title>인증키 불일치</Modal.Title>
        <Modal.Description>
          유효하지 않은 인증키 입니다.
          <br />
          다시 시도해 주세요.
        </Modal.Description>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close onClick={onClose}>확인</Modal.Close>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default ErrorModal;
