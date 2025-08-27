import Modal from '@shared/components/modal/modal';

interface TicketModalProps {
  modalType: 'confirm' | 'success' | null;
  name: string;
  studentNumber: string;
  key: string;
  onClose: () => void;
  onConfirm: () => void;
}

const TicketModal = ({
  modalType,
  name,
  studentNumber,
  onClose,
  onConfirm,
}: TicketModalProps) => {
  const renderContent = () => {
    switch (modalType) {
      case 'confirm':
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
                  * 응모 조건을 반드시 확인해주세요!
                </Modal.Description>
              </Modal.Summary>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close onClick={onClose}>취소</Modal.Close>
              <Modal.Action onClick={onConfirm}>신청하기</Modal.Action>
            </Modal.Footer>
          </Modal.Content>
        );
      case 'success':
        return (
          <Modal.Content>
            <Modal.Body>
              <Modal.Title>응모 완료!</Modal.Title>
              <Modal.Description>
                {name}
                {studentNumber}님의 응모가 정상적으로 완료되었습니다.
              </Modal.Description>
            </Modal.Body>
            <Modal.Footer>
              <Modal.Close onClick={onClose}>확인</Modal.Close>
            </Modal.Footer>
          </Modal.Content>
        );
      default:
        return null;
    }
  };

  if (!modalType) return null;

  return (
    <Modal.Container open={!!modalType}>{renderContent()}</Modal.Container>
  );
};

export default TicketModal;
