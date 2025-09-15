import Modal from '@shared/components/modal/modal';

interface SuccessModalProps {
  name: string;
  studentNumber: string;
  onClose: () => void;
}

const SuccessModal = ({ name, studentNumber, onClose }: SuccessModalProps) => {
  return (
    <Modal.Content>
      <Modal.Body>
        <Modal.Title>응모 완료!</Modal.Title>
        <Modal.Description>
          {name}({studentNumber})님의 응모가
          <br />
          정상적으로 완료되었습니다.
        </Modal.Description>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close onClick={onClose}>확인</Modal.Close>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default SuccessModal;
