# apiBasicTest

## 기술 스펙

### 주요 기술내역

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white">

- React
- Next.js
- Typescript
- yarn : 노드 모듈 패키지 관리자

### 세부 Library 내역

<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=Tailwind CSS&logoColor=white"/> 
<img src="https://img.shields.io/badge/Recoil-000000?style=for-the-badge&logo=Recoil&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/i18next-26A69A?style=for-the-badge&logo=i18next&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=MUI&logoColor=white">

- TailwindCSS : CSS library
- recoil : 전역 state
- axios : http request 관리

## 폴더 구조

```bash
├── .next             (빌드 결과물)
├── .vscode           (IDE 설정 파일)
├── public            (정적 파일 관리)
│   ├── icons
│   ├── images
│   └── logos
├── src               (실제 소스 영역)
│   ├── biz           (서버 호출 관리 / 비즈니스별 폴더구조)
│   ├── components    (화면에서 쓰이는 컴포넌트 / 컴포넌트명 폴더구조)
│   ├── constants     (상수 정의 파일)
│   └── layouts       (페이지 레이아웃 관리)
│   └── model         (데이터 type 관리)
│   └── pages         (page 단위 소스)
│   └── atom         (recoil 전역 state 관리)
│   └── util          (api 호출 등 util 관리)
├── .env.development  (yarn dev 실행시 환경변수 : 개발환경 환경변수)
├── next.config.js    (nextjs 구성파일 : Image 태그 주소 등 관리)
├── tailwind.config.js(tailwindcss 구성파일)
├── tsconfig.json     (typescript 구성파일)
└── package.json      (npm 모듈 관리 및 프로젝트 구성파일)
```

## 소스 실행

### 개발환경세팅

```bash
npm i -g yarn

프로젝트 내부에서
yarn
```

### 개발환경

```bash
yarn dev
```

### 운영환경 빌드

```bash
yarn build
```

## 기술 부채 (to-be 진행사항)

- comment 부분 컴포넌트 분리 및 책임 분리 -> 현재 게시글 상세 코드에 같이 있어 매우 복잡해짐
