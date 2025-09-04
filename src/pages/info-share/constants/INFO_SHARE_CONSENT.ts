export const CONSENT_TITLE = '개인정보 제3자 제공 동의서';

export const CONSENT_SUBTITLE = '[필수] 개인정보 제3자 제공에 대한 동의';

export const CONSENT_CONTENT = [
  {
    id: 1,
    TITLE: '1. 제공받는 자',
    TEXT: ['    • 번호팅 서비스 내 매칭된 상대방', '\n'],
  },
  {
    id: 2,
    TITLE: '2. 제공되는 항목',
    TEXT: ['    • 이름, 연락처(휴대전화 번호 또는 인스타그램 ID), 성별', '\n'],
  },
  {
    id: 3,
    TITLE: '3. 제공 목적',
    TEXT: [
      '    • 상호 간의 교류 및 연락, 서비스 본연의 기능(번호팅/소개팅 매칭) 제공',
      '\n',
    ],
  },
  {
    id: 4,
    TITLE: '4. 보유·이용 기간',
    TEXT: [
      '    • 정보 제공 시점부터 매칭 종료 또는 안양대 축제 종료 시까지',
      '    • 단, 이용자의 요청 또는 서비스 종료 시 즉시 삭제',
    ],
  },
] as const;
