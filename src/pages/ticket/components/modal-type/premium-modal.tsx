import Modal from '@shared/components/modal/modal';

interface ConfirmModalProps {
  name: string;
  studentNumber: string;
  onClose: () => void;
  onConfirm: () => void;
}

const PremiumModal = ({
  name,
  studentNumber,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  return (
    <Modal.Content>
      <Modal.Body>
        <Modal.Title>응모하시겠습니까?</Modal.Title>
        <Modal.Summary>
          <Modal.InfoSection>
            <Modal.Info
              label="이름"
              value={name}
            />
            <Modal.Info
              label="학번"
              value={studentNumber}
            />
          </Modal.InfoSection>
          <Modal.Description>
            * Lv.3은 Premium도 자동 응모됩니다.
          </Modal.Description>
        </Modal.Summary>
      </Modal.Body>
      <Modal.Footer>
        <Modal.Close onClick={onClose}>취소</Modal.Close>
        <Modal.Action onClick={onConfirm}>신청하기</Modal.Action>
      </Modal.Footer>
    </Modal.Content>
  );
};

export default PremiumModal;
