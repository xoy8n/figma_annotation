# Annotation System Plugin 정의서

## 플러그인 개요

- **이름**: Annotation System
- **설명**: 기획자가 선택한 Figma의 특정 프레임에 주석(Annotation)을 추가할 수 있도록 도와주는 도구입니다.
  - 프레임에 숫자 뱃지를 자동으로 붙이고, 해당 주석은 시각적으로 구분 가능한 그룹으로 생성됩니다.
  - 플러그인 내에서는 WYSIWYG 에디터를 통해 주석 내용을 작성할 수 있습니다.
  - 페이지 내 모든 주석을 한 곳에서 관리하고 볼 수 있습니다.

## 🎯 주요 기능 및 목표

| 기능                        | 설명                                                                               | 구현 상태 |
| --------------------------- | ---------------------------------------------------------------------------------- | --------- |
| **Frame 선택**              | 사용자가 Figma에서 프레임을 선택하면 해당 프레임 이름을 UI에 표시                  | ✅ 완료   |
| **주석 추가**               | 선택된 프레임에 대해 title과 description이 포함된 주석 작성 가능                   | ✅ 완료   |
| **UI 기반 주석 작성**       | Bold, Underline, List 등 텍스트 편집이 가능한 WYSIWYG 에디터 제공                  | ✅ 완료   |
| **뱃지 시스템**             | 선택된 layer 및 생성된 group에 동일한 숫자 뱃지를 붙여 시각적으로 연결             | ✅ 완료   |
| **주석 UI 구조**            | 플러그인 내 리스트 구조로 주석 관리 (좌측: 전체 목록, 우측: 선택된 주석 상세 보기) | ✅ 완료   |
| **다중 주석 지원**          | 동일한 프레임에 여러 주석 추가 가능 (번호는 순차적으로 증가)                       | ✅ 완료   |
| **Group 자동 생성**         | 주석 추가 시 해당 프레임 내부에 title과 description이 포함된 그룹 자동 생성        | ✅ 완료   |
| **주석 삭제**               | 주석 삭제 시 해당 뱃지 및 그룹 자동 삭제, 후속 주석의 번호 재조정                  | ✅ 완료   |
| **배지 레이어 분리**        | 배지가 프레임 내부가 아닌 별도 레이어에 생성되도록 개선                            | ✅ 완료   |
| **전체 주석 표시**          | 프레임 선택 여부와 관계없이 모든 주석을 표시                                       | ✅ 완료   |
| **자동 저장**               | 주석 내용 변경 시 자동으로 저장                                                    | ✅ 완료   |
| **주석 항목 스크롤**        | 특정 주석을 클릭하면 해당 주석 아이템으로 스크롤                                   | ✅ 완료   |
| **리치 텍스트 개별 스타일** | 텍스트 범위별로 개별 스타일(Bold, Underline, 색상) 적용                            | ✅ 완료   |
| **줄바꿈 개선**             | 상위 레벨 컨텐츠 항목 간, bulletList 항목 간 줄바꿈 자동 처리                      | ✅ 완료   |
| **드래그 앤 드롭 개선**     | 드래그 앤 드롭 시 다중 호출 방지 및 안정적인 인덱스 업데이트                       | ✅ 완료   |

## 🧑‍💼 사용자

- **주 사용자**: 기획자
- **목적**: 디자인 파일 내 각 요소에 대한 설명, 기능, 목적 등을 구조적으로 정리

## 🧱 플러그인 구조

### 🔧 기술 스택

- **Figma Plugin 환경**: Webpack + React Plugin 구조
- **Frontend Framework**: React 18
- **UI 라이브러리**: Shadcn UI + Tailwind CSS
- **컴파일 결과물**: `ui.html` + `code.js`
- **에디터**: Tiptap 리치 텍스트 에디터

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
│     ├── Tiptap.tsx          // Tiptap 리치 텍스트 에디터 컴포넌트
│     ├── Settings.tsx        // 설정 컴포넌트
│     └── ui/                 // Shadcn UI 컴포넌트
└── interfaces/
      ├── enums.ts            // 열거형 정의
      ├── const.ts            // 상수 정의
      └── types.ts            // 인터페이스 및 타입 정의
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
  - Tiptap 리치 텍스트 에디터 (Bold, Underline, List 등 지원)
  - 개별 텍스트 범위별 스타일 적용 가능
  - **+Add 버튼** (주석 추가)
- **주석 목록**: 프레임별 그룹화된 주석 목록 표시
- **드래그 앤 드롭**: 주석 순서 변경 (디바운스 적용으로 안정성 개선)

## 🖱️ 동작 흐름

1. 사용자가 Figma에서 특정 frame을 선택합니다.
2. 플러그인 내 UI에 선택된 프레임명이 표시됩니다.
3. **+Add 버튼**을 눌러 주석을 추가합니다.
4. Figma canvas에 다음 작업이 수행됩니다:
   - 선택된 프레임 위치에 숫자 뱃지 추가 (예: ①)
   - 선택된 프레임 주변에 주석 그룹 생성
     - **그룹 구조**:
       - 인덱스 번호 (색상 설정 적용)
       - 설명 텍스트 (리치 텍스트 서식 적용)
5. 추가 주석 작성 시 숫자 (예: ②, ③, …)가 순차적으로 증가합니다.
6. 주석을 삭제하면 해당 주석의 배지와 그룹이 모두 삭제되고, 이후 번호의 주석들이 재정렬됩니다.
7. 주석을 드래그하여 순서를 변경하면 인덱스 번호와 배지가 자동으로 업데이트됩니다.
8. 주석을 클릭하면 해당 주석으로 캔버스가 스크롤됩니다.
9. 주석 내용을 수정하면 자동으로 저장됩니다.
10. 리치 텍스트 편집 시 각 텍스트 범위별로 개별 스타일이 적용됩니다.

## 🎨 Figma Layer 생성 구조

```plaintext
[Figma Page]
├── [프레임]
│     └── [기존 요소들]
├── [배지 컨테이너]           // 프레임 외부에 생성된 배지
└── [주석 그룹 컨테이너]      // 주석 그룹화를 위한 컨테이너
      ├── Annotation #1      // 주석 그룹
      │     ├── Annotation Content
      │     │     ├── Index        // 인덱스 번호 텍스트 레이어
      │     │     └── Description  // 설명 텍스트 레이어 (리치 텍스트 서식)
      └── Annotation #2
            ├── Annotation Content
                  ├── Index
                  └── Description
```

- **배지 이름**: "Badge {number}" 형식
- **그룹 이름**: "ANNOTATION_GROUP" 형식
- **주석 항목 이름**: "Annotation #{number}" 형식
- **콘텐츠 그룹 이름**: "Annotation Content" 형식

## 🧩 플러그인 내 데이터 구조

### Annotation 인터페이스

```typescript
interface Annotation {
  id: string;
  description: {
    type: "doc";
    content: Array<{
      type: string;
      content?: Array<{
        type: string;
        text?: string;
        marks?: Array<{
          type: string;
          attrs?: {
            color?: string;
          };
        }>;
      }>;
    }>;
  };
}

interface AnnotationGroup {
  id: string;
  name: string;
  relatedPage: {
    id: string;
    name: string;
  };
  annotations: Annotation[];
  obsolete: boolean;
  groupFrameId: string;
  color?: number;
  size?: number;
  cardWidth?: number;
}
```

### 텍스트 서식 처리

```typescript
interface FormattingRange {
  text: string;
  isBold?: boolean;
  isUnderline?: boolean;
  isItalic?: boolean;
  fontStyle?: string;
  color?: string;
  addNewLine?: boolean;
}
```

## 💡 구현된 기능 및 확장 사항

- **주석 삭제**: 주석 삭제 시 해당 뱃지 및 그룹 자동 삭제, 후속 주석 번호 재조정
- **배지 최적화**: 배지가 프레임 내부가 아닌 페이지 레벨에 직접 생성되도록 개선
- **모든 주석 표시**: 프레임 선택 여부와 관계없이 모든 주석을 UI에 표시
- **주석 자동 저장**: 내용 변경 시 자동으로 저장되어 작업 효율성 향상
- **주석 스크롤**: 주석 클릭 시 해당 주석으로 캔버스 스크롤 기능
- **리치 텍스트 개선**:
  - 텍스트 범위별 개별 스타일 적용 (볼드, 밑줄, 색상)
  - 상위 레벨 콘텐츠 항목 간 줄바꿈 자동 처리
  - bulletList 항목 간 줄바꿈 자동 처리
- **드래그 앤 드롭 개선**:
  - 디바운스 적용으로 다중 호출 방지 (300ms)
  - 위→아래, 아래→위 모든 방향 드래그 시 인덱스 정확히 업데이트
  - 메모리 순서에 맞게 모든 노드 재정렬하는 방식으로 개선
- **기본 텍스트 색상**: 모든 텍스트의 기본 색상을 검은색(#000000)으로 통일
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
    "@radix-ui/react-slot": "^1.1.2",
    "@tiptap/react": "^2.0.0-beta.114",
    "@tiptap/extension-text-style": "^2.0.0-beta.114",
    "react-beautiful-dnd": "^13.1.0",
    "use-debounce": "^9.0.0"
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

| 항목          | 내용                                                               |
| ------------- | ------------------------------------------------------------------ |
| **이름**      | Annotation System                                                  |
| **목적**      | Figma 내 주석 작성 및 시각화 도구                                  |
| **기술**      | React 18, Tailwind CSS, Shadcn UI, Tiptap, Figma Plugin API        |
| **대상**      | 기획자                                                             |
| **주요 기능** | 주석 작성/편집/삭제, 뱃지 표시, 주석 그룹 관리, 리치 텍스트 에디터 |
| **출력 형식** | UI에서 작성한 주석 → Figma 캔버스에 시각화                         |
| **확장 기능** | 리치 텍스트 개별 스타일, 드래그 앤 드롭 개선, 줄바꿈 처리 최적화   |
