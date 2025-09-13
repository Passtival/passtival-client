import Modal from '@shared/components/modal/modal';

import ConfirmModal from './modal-type/confirm-modal';
import ErrorModal from './modal-type/error-modal';
import PremiumModal from './modal-type/premium-modal';
import SuccessModal from './modal-type/success-modal';

interface TicketModalProps {
  modalType: 'confirm' | 'success' | 'error' | 'premium' | 'auth_error' | null;
  name: string;
  studentNumber: string;
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
    const sharedProps = {
      name,
      studentNumber,
      onClose,
      onConfirm,
    };

    switch (modalType) {
      case 'confirm':
        return <ConfirmModal {...sharedProps} />;
      case 'success':
        return (
          <SuccessModal
            name={name}
            studentNumber={studentNumber}
            onClose={onClose}
          />
        );
      case 'error':
        return <ErrorModal onClose={onClose} />;
      case 'auth_error':
        return (
          <ErrorModal
            onClose={onClose}
            message="인증키가 올바르지 않습니다. 해당 레벨의 인증키를 확인해주세요."
          />
        );
      case 'premium':
        return <PremiumModal {...sharedProps} />;
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
