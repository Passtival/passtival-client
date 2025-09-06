import Modal from '@shared/components/modal/modal';

interface DrawingModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  onCheck: () => void;
  currentDay: string;
}

const DrawingModal = ({
  isModalOpen,
  onClose,
  onCheck,
  currentDay,
}: DrawingModalProps) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <Modal.Container open={isModalOpen}>
      <Modal.Content>
        <Modal.Body>
          <Modal.Title>추첨하시겠습니까?</Modal.Title>
          <Modal.Description>
            {currentDay} 당첨자를 추첨하시겠습니까
            <br />
            <br />
          </Modal.Description>

          <Modal.Description>
            ※ 재추첨시 기존 당첨자는 삭제됩니다
          </Modal.Description>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close onClick={onClose}>취소</Modal.Close>
          <Modal.Action onClick={onCheck}>확인</Modal.Action>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default DrawingModal;
