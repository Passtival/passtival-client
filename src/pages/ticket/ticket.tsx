import InputSection from '@pages/ticket/components/inpur-section/input-section';
import Complete from '@pages/ticket-complete/ticket-complete';

import Button from '@shared/components/button/button';
import Header from '@shared/components/header/header';
import Title from '@shared/components/title/title';

import Caption from './components/caption/caption';
import TicketCarousel from './components/carousel/carousel';
import TicketChip from './components/chip/chip';
import TicketModal from './components/ticketmodal';
import { useTicketForm } from './hooks/use-ticket-form';
import * as styles from './ticket.css';

const Ticket = () => {
  const {
    form,
    modalType,
    selectedLevel,
    completedLevel,
    isFormValid,
    isErrorState,
    handleFormChange,
    handleApplyClick,
    handleConfirm,
    handleCloseModal,
    setSelectedLevel,
  } = useTicketForm();

  if (completedLevel >= 3) {
    return <Complete />;
  }

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <div className={styles.container}>
        <div className={styles.title}>
          <Title
            mainTitle="상품 응모권"
            subTitle="상품 당첨의 기회를 잡아보세요!"
          />
        </div>

        <TicketCarousel selectedLevel={selectedLevel} />
        <div className={styles.inputsection}>
          <TicketChip
            selectedLevel={selectedLevel}
            setSelectedLevel={setSelectedLevel}
            completedLevel={completedLevel}
          />
          <InputSection
            name={form.name}
            studentNum={form.studentNum}
            accessKey={form.key}
            isErrorState={isErrorState}
            onNameChange={(value) => handleFormChange('name', value)}
            onStudentNumberChange={(value) =>
              handleFormChange('studentNum', value)
            }
            onKeyChange={(value) => handleFormChange('key', value)}
          />
        </div>
        <Button
          onClick={handleApplyClick}
          disabled={!isFormValid}
        >
          응모하기
        </Button>
        <Caption />
        <TicketModal
          modalType={modalType}
          name={form.name}
          studentNumber={form.studentNum}
          onClose={handleCloseModal}
          onConfirm={handleConfirm}
        />
      </div>
    </>
  );
};

export default Ticket;
