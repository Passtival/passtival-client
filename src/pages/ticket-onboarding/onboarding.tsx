import { useNavigate, useSearchParams } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';
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
    } else {
      tokenService.saveTicketOnboardingToken('1');
      navigate(routePath.TICKET, { replace: true });
    }
  };

  return (
    <>
      <Header
        description="Passtival"
        borderRadius="rounded"
        bgColor="gray"
      />
      <article className={styles.container}>
        <img
          src="/ticket.svg"
          className={styles.ticketImg}
        />
        <section className={styles.section}>
          {current.lines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </section>
        <div className={styles.button}>
          <Button onClick={handleNext}>{current.buttonLabel}</Button>
        </div>
      </article>
    </>
  );
};
export default TicketOnBoarding;
