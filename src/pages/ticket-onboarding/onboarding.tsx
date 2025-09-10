import { useNavigate, useSearchParams } from 'react-router-dom';

import { routePath } from '@router/path';

import Button from '@shared/components/button/button';
import Header from '@shared/components/header/header';

import { ONBOARDING_STEPS } from './constatns/onboarding-text';
import * as styles from './onboarding.css';

const TicketOnBoarding = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const step = Number(searchParams.get('step') ?? 0);
  const current = ONBOARDING_STEPS[step];

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setSearchParams({ step: String(step + 1) });
    }
  };

  const handTicket = () => {
    navigate(routePath.TICKET, { replace: true });
  };

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <article className={styles.container}>
        <section className={styles.section}>
          {current.lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </section>
        <div className={styles.detail}>
          <button onClick={handleNext}>{current.buttonLabel}</button>
        </div>
      </article>
      <div className={styles.button}>
        <Button onClick={handTicket}>응모하러 가기</Button>
      </div>
    </>
  );
};
export default TicketOnBoarding;
