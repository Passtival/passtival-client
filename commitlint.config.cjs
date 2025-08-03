module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 허용할 type 설정
    'type-enum': [
      2,
      'always',
      [
        'feat', // 새로운 기능 추가
        'fix', // 버그 수정
        'bug', // 버그 관련 작업 (fix와 별도로 사용 가능)
        'refactor', // 코드 리팩토링
        'design', // 디자인 관련 변경
        'style', // CSS 스타일, 포맷팅 변경
        'docs', // 문서 수정
        'test', // 테스트 코드 추가/수정
        'settings', // 설정 변경
        'chore', // 빌드 업무, 패키지 매니저 수정
        'init', // 프로젝트 초기화
        'rename', // 파일/폴더 이름 변경
        'remove', // 파일/폴더 삭제
        'build', // 빌드 관련 작업
        'deploy', // 배포 관련 작업
        'merge', // 소문자 merge 허용
      ],
    ],
    // type은 항상 소문자
    'type-case': [2, 'always', 'lower-case'],
    // type 비워두면 안됨
    'type-empty': [2, 'never'],
    // subject 비워두면 안됨
    'subject-empty': [2, 'never'],
    // subject 대소문자 제한 없음
    'subject-case': [0],
  },
};
