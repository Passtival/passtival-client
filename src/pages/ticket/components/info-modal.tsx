import Modal from '@shared/components/modal/modal';

interface InfoModalProps {
  onClose: () => void;
}

const InfoModal = ({ onClose }: InfoModalProps) => {
  return (
    <Modal.Content>
      <Modal.Body>
        <Modal.Title>중복 응모 안내</Modal.Title>
        <Modal.Description>
          해당 학번은 이미 응모를 완료하였습니다.
        </Modal.Description>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close onClick={onClose}>확인</Modal.Close>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default InfoModal;
