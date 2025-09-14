import * as styles from './onboarding-text.css';

export const ONBOARDING_STEPS = [
  {
    id: 1,
    lines: [
      <div className={styles.container}>
        <img
          src="/ticket.svg"
          className={styles.ticketImg}
        />
        <div>
          <h1 className={styles.title}>경품 응모 참여하는 법</h1>
          <p className={styles.description}>
            1. 조각 = 레벨업 (핀볼처럼 추첨함에 쌓임)
            <br />
            2. 최대 일반 3회 + Premium 1회
            <br />
            3. 일찍, 많이 모을수록 → 이름이 더 들어가서 당첨 확률 상승⬆
          </p>
          <p className={styles.point}>자세한 내용은 하단에서 확인해 주세요!</p>
        </div>
      </div>,
    ],
    buttonLabel: '자세한 내용 보기',
  },
  {
    id: 2,
    lines: [
      <>
        <h1 className={styles.title}>경품 응모 참여하는 법</h1>
        <h2 className={styles.header}>1. 조각은 누적! 리셋 X</h2>
        <p className={styles.description}>
          리플렛 1장 = 퍼즐 12조각
          <br />
          일차가 바뀌어도 조각 개수는
          <span className={styles.point}> 누적 </span>
          (리셋되지 않음)
          <br />
          조각 개수에 따라 레벨이 올라가고, 응모권 증가
        </p>
        <h2 className={styles.header}>2. 응모 방식 = 이름 넣기</h2>
        <p className={styles.description}>
          조각 4개(LV. 1) → 응모함에 이름 1번 넣기
          <br />
          조각 8개(LV. 2) → 이름 2번 넣기
          <br />
          조각 12개(LV. 3) → 이름 3번 넣기 + Premium 응모권 1개 <br />
          <span className={styles.point}>
            즉, 최대 일반 응모 3번 + Premium 1번까지 가능!
          </span>
        </p>
        <h2 className={styles.header}>3.응모는 누적 유지</h2>
        <p className={styles.description}>
          2일차, 3일차에도 이 응모권들은 그대로 추첨함에 남아{' '}
          <span className={styles.point}>자동 반영</span>
          <br />
          추가로 조각을 더 모으면, 그만큼 이름이 더 들어가{' '}
          <span className={styles.point}>당첨 확률 UP ⬆</span>
        </p>
        <div className={styles.section}>
          <h2 className={styles.header}>4. 추첨 일정</h2>
          <p className={styles.description}>
            1일차 추첨 : 9월 23일 20:30
            <br />
            2일차 추첨 : 9월 24일 17:30
            <br />
            3일차 추첨 : 9월 25일 20:30
            <br />
            Premium 추첨 : 9월 25일 20:30
          </p>
        </div>
      </>,
    ],
  },
];
