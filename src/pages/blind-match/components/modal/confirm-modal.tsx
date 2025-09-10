import Modal from '@shared/components/modal/modal';

interface ConfirmModalProps {
  isModalOpen: boolean;
  instaId: string;
  phoneNumber: string;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmModal = ({
  isModalOpen,
  instaId,
  phoneNumber,
  onClose,
  onConfirm,
}: ConfirmModalProps) => {
  if (!isModalOpen) {
    return null;
  }
  return (
    <Modal.Container open={isModalOpen}>
      <Modal.Content>
        <Modal.Body>
          <Modal.Title>신청하시겠습니까?</Modal.Title>
          <Modal.Summary>
            <Modal.InfoSection>
              {instaId && (
                <Modal.Info
                  label="인스타그램ID"
                  value={instaId}
                />
              )}

              <Modal.Info
                label="전화번호"
                value={phoneNumber}
              />
            </Modal.InfoSection>
            <Modal.Description>
              ※ 18시에 매칭결과가 제공됩니다.
            </Modal.Description>
          </Modal.Summary>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Close onClick={onClose}>취소</Modal.Close>
          <Modal.Action onClick={onConfirm}>신청하기</Modal.Action>
        </Modal.Footer>
      </Modal.Content>
    </Modal.Container>
  );
};

export default ConfirmModal;
