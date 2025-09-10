import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { routePath } from '@router/path';

import { tokenService } from '@shared/auth/services/token-service';
import Button from '@shared/components/button/button';

import { ONBOARDING_STEPS } from './constants/onboarding-text';
import * as styles from './onboarding.css';

const OnBoarding = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const step = Number(searchParams.get('step') ?? 0);
  const current = ONBOARDING_STEPS[step];

  useEffect(() => {
    const token = tokenService.getGoToOnboardingToken();
    if (token) {
      navigate(routePath.HOME, { replace: true });
    }
  }, [navigate]);

  const handleNext = () => {
    if (step < ONBOARDING_STEPS.length - 1) {
      setSearchParams({ step: String(step + 1) });
    } else {
      tokenService.saveGoToOnboardingToken('1');
      navigate(routePath.HOME);
    }
  };

  const isLastStep = step === ONBOARDING_STEPS.length - 1;

  return (
    <article className={styles.container}>
      <section className={styles.contentWrapper}>
        {current.lines.map((line, idx) => (
          <p
            key={idx}
            className={styles.content}
          >
            {line}
          </p>
        ))}
        <div
          className={styles.buttonWrapper({
            step: isLastStep ? 'goToHome' : 'next',
          })}
        >
          <Button
            color={isLastStep ? 'yellow' : 'gray'}
            size={isLastStep ? 'lg' : 'icon'}
            onClick={handleNext}
          >
            {current.buttonLabel}
          </Button>
        </div>
      </section>
    </article>
  );
};

export default OnBoarding;
