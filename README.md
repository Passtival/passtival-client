# Passtival

<img width="9451" height="4815" alt="passtival" src="https://github.com/user-attachments/assets/e25c466d-548e-4010-bfa9-09d58e3a26e5" />

---

<strong>안양대 축제를 한눈에 담은 단 하나의 서비스. Passtival과 함께!<strong/>

1. **개인 맞춤 추천** : 꼭 필요한 정보 중심으로 객관적인 축제 정보 제공
2. **쉬운 이해를 위한 리포트** : 복잡한 축제 정보를 시각화하고 친절한 설명을 담은 리포트 제공

---

## 📌 서비스 소개

### 🎪 축제 정보

- **홈**: 축제 개요 및 주요 정보
- **부스 정보**: 푸드존 및 각종 부스의 상세 정보, 메뉴, 체험 활동
- **공연 정보**: 공연 상세 정보 및 일정
- **지도**: 행사장 안내 및 위치 정보

### 🎫 티켓 시스템

- **응모권 신청**: 일자별 응모권 신청
- **추첨 시스템**: 응모권 추첨 및 당첨 확인
- **온보딩**: 티켓 사용법 안내

### 👥 소셜 기능

- **번호팅**: 익명 매칭 시스템

### 🔍 분실물 관리

- **분실물 신고**: 분실물 신고 및 등록
- **분실물 조회**: 분실물 목록 조회 및 상세 정보
- **분실물 정보**: 분실물 관련 안내

### 👨‍💼 관리자 기능

- **분실물 관리**: 분실물 등록 및 관리
- **인증키 관리**: 관리자 인증키 생성 및 관리
- **응모권 추첨**: 응모권 추첨 시스템 관리

---

## TEAM-PASSTIVAL

<table>
  <tr>
    <td align="center" style="padding:10px">
      <img src="https://avatars.githubusercontent.com/u/113702672?v=4" width="180"/><br/>
      <a href="https://github.com/jeonghoon11">장정훈</a>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://avatars.githubusercontent.com/u/201346724?v=4" width="180"/><br/>
      <a href="https://github.com/twossu">최윤하</a>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://avatars.githubusercontent.com/u/188864281?v=4" width="180"/><br/>
      <a href="https://github.com/winchoose">오승택</a>
    </td>
    <td align="center" style="padding:10px">
      <img src="https://avatars.githubusercontent.com/u/131990545?v=4" width="180"/><br/>
      <a href="https://github.com/h2st0ry">박연희</a>
    </td>
  </tr>
</table>

---

## 🚀 PASSTIVAL 팀 기술 스택

| 카테고리                    | 기술 스택                                                                                                                         |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **UI Library**              | ![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge)                                |
| **Server State Management** | ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?logo=reactquery&logoColor=white&style=for-the-badge)       |
| **Language**                | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge)                 |
| **Build Tool**              | ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)                                   |
| **Styling**                 | ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-FF69B4?logo=vanillaextract&logoColor=white&style=for-the-badge) |
| **Package Manager**         | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?logo=pnpm&logoColor=white&style=for-the-badge)                                   |
| **CI/CD**                   | ![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)                             |
| **Animation**               | ![Lottie](https://img.shields.io/badge/Lottie-00D4FF?logo=lottie&logoColor=white&style=for-the-badge)                             |

---

## TEAM-PASSTIVAL Convention

## 📭 Git Convention

### Git Flow

- **main branch**  
  `main` 브랜치는 언제나 배포 가능한 안정된 상태만 관리합니다.

- **develop branch**  
  `develop` 브랜치는 통합 브랜치로, 모든 기능 개발이 이곳을 기반으로 진행됩니다.  
  평소에는 `develop`에서 기능별 `Feature branch`를 분기하고, 개발이 완료된 후 다시 `develop`으로 병합합니다.  
  `develop` 브랜치는 항상 안정적인 상태를 유지하며, 배포 가능한 상태가 되면 `main` 브랜치로 병합하여 CI/CD를 통해 배포를 진행합니다.

- **Feature branch**
  `develop` 브랜치에서 분기하여 기능별 개발을 진행하고, 완료 후 다시 `develop` 브랜치로 병합합니다.

---

### 💻 Coding Convention

<details>
<summary>✅ 컴포넌트</summary>

> 💡 **컴포넌트 작성 시 핵심 원칙**
> 재사용 가능한 구조로 설계하며, 비즈니스 로직과 UI 로직을 분리합니다.

#### 📋 네이밍 규칙

- **Interface**: 반드시 `Props` 접미사 사용
  - ✅ `CardProps`, `ChipProps`
  - ❌ `Card`, `ChipInterface`

#### 🏗️ 구조화 원칙

- **Fragment 사용**: 의미 없는 `<div>` 지양, 컴포넌트 최상단은 `Fragment` (`<>...</>`) 사용

```tsx
const InfoText = () => {
  return (
    <>
      <h1>페스티벌에 오신 여러분!</h1>
      <p>환영합니다!</p>
    </>
  );
};
```

- **Self-closing**: Children이 불필요할 때는 `<Component />` 사용
- **Headless UI**: 공통 컴포넌트는 비즈니스 로직 최소화
- **도메인 분리**: 특정 도메인 의존 컴포넌트는 shared가 아닌 해당 도메인 내부에 작성

</details>

<details>
<summary>📁 폴더명</summary>

> 🎯 **일관된 폴더 구조로 프로젝트 관리**

| 규칙            | 설명                        | 예시                      |
| --------------- | --------------------------- | ------------------------- |
| **소문자 시작** | 모든 폴더명은 소문자로 시작 | `components`, `utils`     |
| **복수형**      | 항상 복수형으로 s 붙이기    | `pages`, `hooks`          |
| **케밥 케이스** | 단어 연결 시 하이픈 사용    | `user-pages`, `api-utils` |

</details>

<details>
<summary>📝 타입</summary>

> 🔧 **TypeScript 타입 정의 가이드**

#### 🎯 선택 기준

| 타입          | 사용 시기   | 특징                      |
| ------------- | ----------- | ------------------------- |
| **interface** | 기본 권장   | 병합 가능, 확장성 좋음    |
| **type**      | 특수한 경우 | 유니언, 튜플, 리터럴 타입 |

```tsx
// ✅ 권장: interface 사용
interface UserProps {
  name: string;
  age: number;
}

// ✅ 특수한 경우: type 사용
type AuthType = 'user' | 'admin';
type Status = 'loading' | 'success' | 'error';
```

</details>

<details>
<summary>🔑 변수</summary>

> 📌 **명확하고 일관된 변수 선언**

#### 🚫 금지 사항

- **var 사용 금지**: `const` → `let` 순서로 선언
- **문자열 연결 금지**: `+` 대신 템플릿 리터럴 사용

#### ✅ 네이밍 규칙

| 타입          | 규칙                         | 예시                    |
| ------------- | ---------------------------- | ----------------------- |
| **상수**      | 대문자 스네이크 케이스       | `API_KEY`, `MAX_COUNT`  |
| **Boolean**   | `is` 접두사                  | `isActive`, `isLoading` |
| **일반 변수** | 의미 명확한 이름 (길어도 OK) | `userProfileData`       |

#### 🔑 Key 사용 규칙

- **정적 리스트**: index 사용 가능
- **동적 리스트**: 고유한 id 사용 필수
- **랜덤 값**: key로 사용 금지

</details>

<details>
<summary>⚙️ 함수</summary>

> 🎯 **명확한 함수 네이밍과 구조**

#### 📋 네이밍 패턴

| 접두사        | 용도          | 예시                                  |
| ------------- | ------------- | ------------------------------------- |
| **get**       | 값 반환       | `getUserData`                         |
| **create**    | 새 값 생성    | `createUser`                          |
| **check**     | 로직 검증     | `checkAuth`                           |
| **convert**   | 변환          | `convertToString`                     |
| **add/minus** | 연산          | `addToCart`, `minusCount`             |
| **filter**    | 배열 필터링   | `filterActiveUsers`                   |
| **handle**    | 이벤트 핸들러 | `handleSubmitClick`                   |
| **use**       | 커스텀 훅     | `useAuthRefresh`, `usePersistedState` |

#### 🏗️ 구조 규칙

- **함수 형태**: 동사+명사 조합
- **이벤트 핸들러**: `handle` 접두사 필수
  - 예: `handleResetClick`, `handleSubmitClick`
- **유틸 함수**: 반환값 기준 네이밍 (ex. `hasEmail`)
- **재사용**: 2개 이상 도메인에서 사용 시 utils 폴더로 이동
- **선언 방식**: 화살표 함수 사용

</details>

<details>
<summary>🧩 메소드</summary>

> 🔄 **효율적인 데이터 처리 방법**

#### 📊 배열 처리

```tsx
// ✅ 스프레드 연산자 사용
const copies = [...originals];

// ✅ 함수형 메소드 사용 (for 대신)
items.forEach((item) => processItem(item));
items.map((item) => transformItem(item));
```

#### 🎯 구조 분해 할당 적극 활용

```tsx
interface InputProps {
  value: string;
  errorState?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

interface AuthCheckProps {
  authType: 'user' | 'admin';
}

// Props 구조 분해
const Input = ({ value, errorState, onChange, placeholder }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // 컴포넌트 로직
};

// 함수 매개변수 구조 분해
const useAuthRefresh = ({ authType }: AuthCheckProps) => {
  // 인증 로직
};
```

</details>

<details>
<summary>🎨 스타일</summary>

> 🏗️ **의미 있는 HTML 구조**

#### 📋 핵심 원칙

| 원칙                 | 설명                        | 예시                               |
| -------------------- | --------------------------- | ---------------------------------- |
| **시맨틱 태그**      | 의미에 맞는 태그 사용       | `<header>`, `<nav>`, `<main>`      |
| **div 지양**         | 의미 없는 div 사용 금지     | `<section>`, `<article>` 활용      |
| **Container 네이밍** | Wrapper 필요 시 명확한 이름 | `UserContainer`, `LayoutContainer` |

📖 **참고 자료**: [MDN HTML 시맨틱 태그 가이드](https://developer.mozilla.org/ko/docs/Web/HTML/Element)

</details>

## 🚀 시작하기

### 필수 요구사항

- Node.js (18.x 이상)
- pnpm

### 설치 및 실행

1. **의존성 설치**

   ```bash
   pnpm install
   ```

2. **개발 서버 실행**

   ```bash
   pnpm dev
   ```

3. **빌드**

   ```bash
   pnpm build
   ```

### 추가 스크립트

- **아이콘 빌드**: `pnpm build:icons`
- **API 타입 생성**: `pnpm generate:types`
- **린팅**: `pnpm lint`

---

### 🗂️ 폴더구조

```
└── src/
    ├── app/                    // route VIEW
    │   ├── index.html
    │   └── App.tsx
    ├── pages/                  // VIEW -> 화면의 구조를 파악
    │   ├── home/
    │   ├── admin/
    │   ├── blind-match/
    │   ├── booth/
    │   ├── booth-detail/
    │   ├── login/
    │   ├── lost-item-*/
    │   ├── onboarding/
    │   ├── show-detail/
    │   └── ticket/
    ├── router/                 // 라우팅 설정
    └── shared/                 // 공통 컴포넌트 및 유틸리티
        ├── components/         // 재사용 가능한 컴포넌트
        ├── hooks/              // 커스텀 훅
        ├── styles/             // 스타일 관련
        ├── api/                // API 관련
        └── utils/              // 유틸리티 함수
```

---

**Passtival** - 안양대 축제를 한눈에 담은 단 하나의 서비스
