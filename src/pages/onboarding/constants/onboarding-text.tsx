import * as styles from '../onboarding.css';

export const ONBOARDING_STEPS = [
  {
    id: 1,
    lines: [
      <>
        오래전, 이 세계엔 정보와 시간의 공간인 아카이브가
        <br />
        있었고, 그 곳의 동력원이자 세계의 시간선을 관장하는
        <br />
        <span className={styles.highlight}>"CHRONICLE"</span>
        이라는 책이 있었다.
        <br />
      </>,
      <>
        <br />
        책에는 세계의
        <span className={styles.highlight}> 과거, 현재, 미래</span>가 모두
        기록되어 있었고 이<br />
        책이 존재함으로써 세계는 균형을 맞추었다.
        <br />
      </>,
      <>
        <br />
        그러나 어느 날, 책의 마지막 페이지가 사라졌고, 세계는
        <br />
        기억을 잃으며 시간을 멈추었다.
        <br />
      </>,
    ],
    buttonLabel: 'NEXT',
  },
  {
    id: 2,
    lines: [
      <>
        조각나 세계의 시간선에 흩뿌려진 마지막 페이지를 찾아
        <br />
        세상의 균형을 되돌리기 위해 한 무리의
        <span className={styles.highlight}>'기억 수호자'</span>가
        <br />
        아카이브의 부름을 받는다.
      </>,
      <>
        <br />
        <span className={styles.highlight}>축제에 참여하는 당신.</span>
      </>,
      <>
        <br />
        '기억 수호자'가 되어 아카이브의 시공간 게이트를 통해
        <br />
        <span className={styles.highlight}>세계의 시간선을 탐험하라.</span>
      </>,
    ],
    buttonLabel: '입장하기',
  },
];
