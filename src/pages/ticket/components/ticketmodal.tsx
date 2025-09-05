import Modal from '@shared/components/modal/modal';

import ConfirmModal from './modal-type/confirm-modal';
import ErrorModal from './modal-type/error-modal';
import SuccessModal from './modal-type/success-modal';

interface TicketModalProps {
  modalType: 'confirm' | 'success' | 'error' | null;
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
    switch (modalType) {
      case 'confirm':
        return (
          <ConfirmModal
            name={name}
            studentNumber={studentNumber}
            onClose={onClose}
            onConfirm={onConfirm}
          />
        );
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
