# Annotation System Plugin 정의서

## 플러그인 개요

- **이름**: Annotation System
- **설명**: 기획자가 선택한 Figma의 특정 프레임에 주석(Annotation)을 추가할 수 있도록 도와주는 도구입니다.
  - 프레임에 숫자 뱃지를 자동으로 붙이고, 해당 주석은 시각적으로 구분 가능한 그룹으로 생성됩니다.
  - 플러그인 내에서는 WYSIWYG 에디터를 통해 주석 내용을 작성할 수 있습니다.
  - 페이지 내 모든 주석을 한 곳에서 관리하고 볼 수 있습니다.

## 🎯 주요 기능 및 목표

| 기능                  | 설명                                                                               | 구현 상태 |
| --------------------- | ---------------------------------------------------------------------------------- | --------- |
| **Frame 선택**        | 사용자가 Figma에서 프레임을 선택하면 해당 프레임 이름을 UI에 표시                  | ✅ 완료   |
| **주석 추가**         | 선택된 프레임에 대해 title과 description이 포함된 주석 작성 가능                   | ✅ 완료   |
| **UI 기반 주석 작성** | Bold, Underline, List 등 텍스트 편집이 가능한 WYSIWYG 에디터 제공                  | ✅ 완료   |
| **뱃지 시스템**       | 선택된 layer 및 생성된 group에 동일한 숫자 뱃지를 붙여 시각적으로 연결             | ✅ 완료   |
| **주석 UI 구조**      | 플러그인 내 리스트 구조로 주석 관리 (좌측: 전체 목록, 우측: 선택된 주석 상세 보기) | ✅ 완료   |
| **다중 주석 지원**    | 동일한 프레임에 여러 주석 추가 가능 (번호는 순차적으로 증가)                       | ✅ 완료   |
| **Group 자동 생성**   | 주석 추가 시 해당 프레임 내부에 title과 description이 포함된 그룹 자동 생성        | ✅ 완료   |
| **주석 삭제**         | 주석 삭제 시 해당 뱃지 및 그룹 자동 삭제, 후속 주석의 번호 재조정                  | ✅ 완료   |
| **배지 레이어 분리**  | 배지가 프레임 내부가 아닌 별도 레이어에 생성되도록 개선                            | ✅ 완료   |
| **전체 주석 표시**    | 프레임 선택 여부와 관계없이 모든 주석을 표시                                       | ✅ 완료   |
| **자동 저장**         | 주석 내용 변경 시 자동으로 저장                                                    | ✅ 완료   |
| **주석 항목 스크롤**  | 특정 주석을 클릭하면 해당 주석 아이템으로 스크롤                                   | ✅ 완료   |

## 🧑‍💼 사용자

- **주 사용자**: 기획자
- **목적**: 디자인 파일 내 각 요소에 대한 설명, 기능, 목적 등을 구조적으로 정리

## 🧱 플러그인 구조

### 🔧 기술 스택

- **Figma Plugin 환경**: Webpack + React Plugin 구조
- **Frontend Framework**: React 18
- **UI 라이브러리**: Shadcn UI + Tailwind CSS
- **컴파일 결과물**: `ui.html` + `code.js`
- **에디터**: WYSIWYG 에디터 (자체 구현)

### 📂 폴더 구조

```plaintext
/src
├── ui.tsx                    // React 기반 플러그인 UI
├── code.ts                   // Figma API 상호작용
├── types.ts                  // 타입 정의
├── ui.css                    // 스타일시트
├── components/
│     ├── AnnotationCard.tsx  // 주석 카드 컴포넌트
│     ├── Button.tsx          // 버튼 컴포넌트
│     ├── Editor.tsx          // WYSIWYG 에디터 컴포넌트
│     ├── Settings.tsx        // 설정 컴포넌트
│     └── ui/                 // Shadcn UI 컴포넌트
└── utils/
      └── figmaUtils.ts       // Figma API 유틸리티 함수
```

## 🖼️ UI 상세 구성 (Tailwind CSS + Shadcn UI 적용)

### ➤ 초기 화면 (프레임 선택 전)

- **안내 문구**: "Please select a frame and create your annotations"
- **설정 옵션**:
  - Color toggle
  - Font size (small/medium)
  - Card width (small/medium)
- **파일/페이지 구조**: 현재 Figma 파일 및 페이지 정보 표시
- **좌측 패널**: 페이지 및 프레임 트리 구조 표시

### ➤ 프레임 선택 후

- **상단 제목**: 현재 Figma 파일명 표시
- **좌측 패널**: 페이지/프레임/주석 계층 구조 표시
- **우측 에디터**:
  - Title 입력 필드
  - WYSIWYG Description (Bold, Underline, List 등 지원)
  - **+Add 버튼** (주석 추가)
- **주석 목록**: 프레임별 그룹화된 주석 목록 표시

## 🖱️ 동작 흐름

1. 사용자가 Figma에서 특정 frame을 선택합니다.
2. 플러그인 내 UI에 선택된 프레임명이 표시됩니다.
3. **+Add 버튼**을 눌러 주석을 추가합니다.
4. Figma canvas에 다음 작업이 수행됩니다:
   - 선택된 프레임 위치에 숫자 뱃지 추가 (예: ①)
   - 선택된 프레임 주변에 주석 그룹 생성
     - **그룹 구조**:
       - Title (Text Layer)
       - Description (Text Layer)
5. 추가 주석 작성 시 숫자 (예: ②, ③, …)가 순차적으로 증가합니다.
6. 주석을 삭제하면 해당 주석의 배지와 그룹이 모두 삭제되고, 이후 번호의 주석들이 재정렬됩니다.
7. 주석을 클릭하면 해당 주석으로 캔버스가 스크롤됩니다.
8. 주석 내용을 수정하면 자동으로 저장됩니다.

## 🎨 Figma Layer 생성 구조

```plaintext
[Figma Page]
├── [프레임]
│     └── [기존 요소들]
├── [배지 컨테이너]           // 프레임 외부에 생성된 배지
└── [주석 그룹 컨테이너]      // 주석 그룹화를 위한 컨테이너
      ├── Annotation #1      // 주석 그룹
      │     ├── Title        // 제목 텍스트 레이어
      │     └── Description  // 설명 텍스트 레이어
      └── Annotation #2
            ├── Title
            └── Description
```

- **배지 이름**: "Badge {number}" 형식
- **그룹 이름**: "Annotation Group {number}" 형식
- **주석 항목 이름**: "Annotation #{number}" 형식

## 🧩 플러그인 내 데이터 구조

### Annotation 인터페이스

```typescript
interface Annotation {
  id: string;
  number: number; // 뱃지 번호
  title: string; // 주석 제목
  description: string; // 주석 설명 (HTML 형식)
  frameId: string; // 관련 프레임 ID
  frameName: string; // 관련 프레임 이름
  createdAt: number; // 생성 시간
  updatedAt: number; // 업데이트 시간
}
```

### 플러그인-UI 간 메시지 타입

```typescript
type MessageToUI =
  | {
      type: "FRAME_SELECTED";
      frameId: string;
      frameName: string;
      annotations: Annotation[];
      fileTitle: string;
      pageName: string;
      parentFrameName?: string;
    }
  | {
      type: "NO_FRAME_SELECTED";
      annotations: Annotation[];
      fileTitle: string;
      pageName: string;
    }
  | {
      type: "ANNOTATION_CREATED";
      annotation: Annotation;
      fileTitle: string;
      pageName: string;
      parentFrameName?: string;
    }
  | { type: "ANNOTATION_UPDATED"; annotation: Annotation }
  | { type: "ANNOTATIONS_LOADED"; annotations: Annotation[] }
  | {
      type: "ALL_ANNOTATIONS_LOADED";
      annotations: Annotation[];
      fileTitle: string;
      pageName: string;
    };

type MessageToPlugin =
  | { type: "GET_SELECTED_FRAME" }
  | {
      type: "CREATE_ANNOTATION";
      annotation: Partial<Annotation>;
      settings: AnnotationSettings;
    }
  | { type: "UPDATE_ANNOTATION"; annotation: Annotation }
  | { type: "DELETE_ANNOTATION"; id: string }
  | { type: "SCROLL_TO_FRAME"; frameId: string }
  | { type: "SCROLL_TO_ANNOTATION_GROUP"; frameId: string }
  | {
      type: "SCROLL_TO_ANNOTATION";
      annotationId: string;
      frameId: string;
      number: number;
    };
```

## 💡 구현된 기능 및 확장 사항

- **주석 삭제**: 주석 삭제 시 해당 뱃지 및 그룹 자동 삭제, 후속 주석 번호 재조정
- **배지 최적화**: 배지가 프레임 내부가 아닌 페이지 레벨에 직접 생성되도록 개선
- **모든 주석 표시**: 프레임 선택 여부와 관계없이 모든 주석을 UI에 표시
- **주석 자동 저장**: 내용 변경 시 자동으로 저장되어 작업 효율성 향상
- **주석 스크롤**: 주석 클릭 시 해당 주석으로 캔버스 스크롤 기능
- **WYSIWYG 에디터**: 텍스트 서식 지원
- **프레임별 주석 그룹화**: 좌측 패널에서 프레임별로 주석을 그룹화하여 표시
- **React 18 지원**: 최신 React 기능 활용 (createRoot API 등)
- **Tailwind CSS**: 현대적인 UI 스타일링 적용

## ⚙️ 환경 설정 파일

### package.json 주요 의존성

```json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "tailwindcss": "^3.4.1",
    "@radix-ui/react-slot": "^1.1.2"
  },
  "devDependencies": {
    "typescript": "^4.3.5",
    "webpack": "^5.82.0"
  }
}
```

### tsconfig.json 설정

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "esModuleInterop": true
  }
}
```

## ✅ 요약

| 항목          | 내용                                                           |
| ------------- | -------------------------------------------------------------- |
| **이름**      | Annotation System                                              |
| **목적**      | Figma 내 주석 작성 및 시각화 도구                              |
| **기술**      | React 18, Tailwind CSS, Shadcn UI, Figma Plugin API            |
| **대상**      | 기획자                                                         |
| **주요 기능** | 주석 작성/편집/삭제, 뱃지 표시, 주석 그룹 관리, WYSIWYG 편집기 |
| **출력 형식** | UI에서 작성한 주석 → Figma 캔버스에 시각화                     |
| **확장 기능** | 프레임별 주석 그룹화, 주석 자동 저장, 주석 스크롤, 배지 최적화 |
