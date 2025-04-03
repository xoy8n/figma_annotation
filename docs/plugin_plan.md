# 🔖 Annotation System Plugin 개요

## 📝 설명

Figma 플러그인 제작 중 Annotation(주석) 시스템을 준비합니다.

이 플러그인은 기획자가 특정 프레임에 주석을 추가할 수 있게 도와줍니다.

주석 작성 시 프레임에 위치 지정 및 주석 작성이 가능합니다.

## 🔆 주요 기능 및 목표

- 주석을 달고 싶은 프레임을 선택할 수 있습니다.
- 선택한 프레임에 주석을 추가할 수 있습니다.
- 주석 그룹의 이름을 직접 편집할 수 있습니다.
- 주석 작성 시 WYSIWYG 에디터를 지원합니다. (굵게, 기울기, 밑줄, 링크 등)
- 메인 프레임은 순서대로 번호가 표시되는 배지 시스템을 지원합니다.
- 한 번에 여러 프레임에 대한 주석을 관리합니다.
- 검색 기능을 통해 주석을 찾을 수 있습니다.
- 노트를 드래그 앤 드롭으로 순서 재배열이 가능합니다.
- 각 주석은 선택된 노드를 참조하고, 참조된 노드를 삭제하면 배지도 함께 삭제됩니다.
- 주석 색상과 크기를 변경할 수 있습니다.
- Figma 캔버스에서 직접 수정한 텍스트를 플러그인 UI에 동기화할 수 있습니다.

## 👱‍♂️ 사용자 정보

주요 사용자는 기획자입니다.

## 🔍 기술 스택 및 구성

- React 18
- Tailwind CSS + ShadCN
- WYSIWYG 에디터 라이브러리 (TipTap)
- 검색 기능: Fuse.js
- Figma Plugin API

## 📁 코드 구조

플러그인 코드는 다음과 같은 모듈화된 구조로 구성되어 있습니다:

```
figma_annotation/
  ├─ src/
  │   ├─ code.ts               # 플러그인 메인 로직 (메시지 라우팅 진입점)
  │   ├─ ui.tsx                # React UI 컴포넌트 (프론트엔드 진입점)
  │   ├─ ui.html               # HTML 진입점
  │   ├─ ui.css                # 스타일시트
  │   ├─ types.ts              # 공통 타입 정의
  │   ├─ components/           # React UI 컴포넌트
  │   │   ├─ SearchPopover.tsx # 검색 UI 컴포넌트
  │   │   ├─ Tiptap.tsx        # 리치텍스트 에디터
  │   │   ├─ sidePanel.tsx     # 사이드 패널 컴포넌트
  │   │   └─ ui/               # ShadCN UI 컴포넌트
  │   ├─ canvas/               # Figma 캔버스 요소 생성 관련 코드
  │   │   └─ annotationElements.ts  # 배지, 프레임, 텍스트 노드 등 생성 함수
  │   ├─ services/             # 비즈니스 로직 및 데이터 관리
  │   │   ├─ annotationGroupService.ts  # 주석 그룹 데이터 관리
  │   │   ├─ annotationFrameService.ts  # 프레임 생성 및 관리
  │   │   └─ messageService.ts          # 메시지 통신 서비스
  │   ├─ handlers/             # 메시지 핸들러
  │   │   ├─ annotationHandlers.ts      # 주석 관련 핸들러
  │   │   ├─ groupHandlers.ts           # 그룹 관련 핸들러
  │   │   ├─ dataHandlers.ts            # 데이터 관리 핸들러
  │   │   └─ navigationHandlers.ts      # 네비게이션 핸들러
  │   ├─ utils/                # 유틸리티 함수
  │   │   ├─ colorUtils.ts     # 색상 관련 유틸
  │   │   ├─ sizeUtils.ts      # 크기 관련 유틸
  │   │   ├─ nodeUtils.ts      # Figma 노드 관련 유틸
  │   │   ├─ textUtils.ts      # 텍스트 포맷팅 유틸
  │   │   ├─ updateUtils.ts    # 인덱스 업데이트 유틸
  │   │   ├─ frameUtils.ts     # 프레임 업데이트 유틸
  │   │   └─ messageUtils.ts   # 메시지 응답 유틸
  │   ├─ interfaces/           # 타입 및 인터페이스
  │   │   ├─ enums.ts          # 열거형 (색상, 크기 등)
  │   │   └─ const.ts          # 상수 값
  │   └─ lib/                  # 외부 라이브러리
  ├─ manifest.json             # 플러그인 매니페스트
  ├─ package.json              # NPM 패키지 정보
  ├─ tsconfig.json             # TypeScript 설정
  ├─ webpack.config.js         # 웹팩 설정
  └─ docs/                     # 문서화
      ├─ tech_guide.md         # 기술 가이드
      └─ plugin_plan.md        # 플러그인 계획
```

### 📋 주요 모듈 역할 설명

#### 1. 핵심 구성 요소

- **code.ts**: 모든 메시지를 받아서 적절한 핸들러로 라우팅하는 진입점
- **handlers/**: 각 메시지 타입별 처리 로직을 모듈화한 핸들러
- **services/**: 데이터 모델 관리 및 비즈니스 로직 제공
- **canvas/**: Figma 캔버스에 UI 요소를 생성하고 관리하는 함수 모음
- **utils/**: 다양한 유틸리티 함수 모음

#### 2. UI 컴포넌트

- **ui.tsx**: React 기반 UI의 진입점
- **components/**: 모듈화된 UI 컴포넌트들

## 📐 UI 및 레이아웃 설계

### 메인 화면 (ui.tsx)

- 상단 영역: 현재 선택된 프레임 표시 및 새 주석 추가 버튼
- 중앙 영역: 주석 목록 (번호, 내용, 조작 버튼)
- 하단 영역: 설정 영역 (색상, 크기 선택 등)
- 동기화 기능: 주석 내용 동기화 버튼 (RefreshCw 아이콘)

### 주석 컴포넌트 레이아웃

주석은 다음과 같은 계층 구조로 구성됩니다:

```
annotationFrame (HORIZONTAL layout)
├─ indexContainer (VERTICAL layout, 정확히 10% 너비)
│   └─ indexNode (번호 텍스트)
└─ contentGroup (VERTICAL layout, 정확히 90% 너비)
    └─ descriptionNode (리치 텍스트)
```

레이아웃 특징:

- Auto-layout을 활용하여 콘텐츠 크기에 따라 자동 조정
- indexContainer는 contentGroup 높이와 동기화되도록 FILL 모드 사용
- contentGroup은 layoutGrow=1 속성으로 남은 공간을 모두 차지하도록 설정
- textNode는 부모 너비에 맞게 layoutSizingHorizontal="FILL" 설정
- textNode는 높이만 자동 조정되도록 textAutoResize="HEIGHT" 설정
- indexContainer와 contentGroup의 너비 비율을 정확히 20:80으로 유지

### 검색 기능 (SearchPopover)

- 검색어 입력 영역
- 검색 결과 표시 영역 (하이라이트 포함)
- 키보드 네비게이션 지원 (화살표 키, Enter 및 Escape)

## 🔄 사용자 상호작용 흐름

1. 프레임 선택

   - 사용자가 주석을 달고 싶은 Figma 프레임 선택
   - UI에 선택된 프레임 정보 표시

2. 주석 생성

   - "Add Annotation" 버튼 클릭
   - 리치 텍스트 에디터로 내용 입력
   - 저장 시 프레임에 배지 생성, UI에 주석 추가

3. 주석 그룹 관리

   - 그룹 이름 클릭하여 편집 모드 전환
   - 새로운 이름 입력 후 Enter 키 또는 외부 클릭으로 저장
   - Escape 키로 편집 취소

4. 주석 관리

   - 주석 목록에서 내용 편집, 삭제, 순서 조정
   - 배지 클릭 시 해당 프레임으로 화면 이동

5. 스타일 설정

   - 주석 색상, 크기, 카드 너비 조정 가능
   - 변경 사항 실시간 반영

6. 동기화 기능
   - Figma 캔버스에서 직접 텍스트 수정
   - 동기화 버튼을 클릭하여 텍스트 내용 및 서식 정보 UI에 반영
   - Tiptap 에디터에서 추가 편집 가능

## 🔧 핵심 기술 구현

### 1. 메시지 처리 아키텍처

플러그인은 UI와 Figma 백엔드 간의 메시지 기반 통신을 사용합니다:

1. UI에서 `sendMessage()` 함수로 메시지 전송
2. `code.ts`의 메시지 라우터가 해당 메시지를 적절한 핸들러로 전달
3. 핸들러가 처리 후 `sendResponse()` 함수로 UI에 결과 전송
4. UI가 응답을 받아 상태 업데이트 및 화면 반영

### 2. 주석 그룹 이름 편집

주석 그룹의 이름을 직접 편집할 수 있는 기능을 제공합니다:

1. 그룹 이름을 클릭하면 인라인 편집 모드로 전환
2. 이름 변경 후 Enter 키나 포커스 손실 시 저장
3. Escape 키 입력 시 변경 취소
4. 디바운스 적용으로 빈번한 저장 호출 방지
5. 새 그룹 생성 시 항상 해당 프레임의 원래 이름 사용

### 3. 레이아웃 관리

Figma의 Auto-layout 기능을 활용하여 주석 레이아웃을 관리합니다:

- 컨테이너 생성 → 자식 요소 추가 → 레이아웃 속성 설정 순서 **반드시** 준수
- 속성 설정 순서: 요소 생성 → 부모에 추가 → 부모 레이아웃 설정 → 자식 레이아웃 설정
- `layoutMode`, `layoutGrow`, `layoutSizingVertical` 등의 속성 활용
- 텍스트 내용 길이에 따라 레이아웃 자동 조정
- indexContainer와 contentGroup의 너비 비율을 cardWidthValue에 따라 정확히 20:80으로 계산
- 텍스트 노드의 너비는 부모 컨테이너에 추가된 후에만 설정 가능

### 4. 동기화 기능

Figma 캔버스 상에서 직접 텍스트를 편집한 내용을 UI에 동기화합니다:

1. 동기화 버튼 클릭 시 모든 주석 그룹의 텍스트 노드 내용 추출
2. Figma 텍스트 노드의 내용과 서식을 Tiptap 문서 포맷으로 변환
3. 변환 과정에서 텍스트 스타일, 컬러, 줄바꿈 정보 유지
4. UI 상태 업데이트 및 Tiptap 에디터 리렌더링 (key 값 활용)

### 5. 데이터 구조 및 저장

주석 데이터는 플러그인 데이터 저장소에 JSON 형태로 저장됩니다:

## 🗄️ 데이터 구조

### AnnotationGroup

```typescript
interface AnnotationGroup {
  id: string; // 고유 ID
  name: string; // 그룹 이름 (편집 가능)
  relatedPage: {
    // 연결된 페이지 정보
    id: string;
    name: string;
  };
  selectionId: string; // 선택된 노드 ID
  groupFrameId?: string; // 그룹 프레임 ID (없을 수 있음)
  color: string; // 주석 색상 (red, blue, green, yellow)
  size: string; // 크기 (small, medium, large)
  cardWidth: number; // 카드 너비 (픽셀)
  annotations: Annotation[]; // 주석 배열
}
```

### Annotation

```typescript
interface Annotation {
  id: string; // 고유 ID
  description: string; // 주석 내용 (리치 텍스트 HTML)
  index: number; // 표시 순서
  annotationFrameId?: string; // 주석 프레임 ID (없을 수 있음)
  badgeNodes?: string[]; // 배지 노드 ID 배열 (없을 수 있음)
}
```

### 서식 지원

- 리치 텍스트 서식 (Tiptap 활용)
  - **Bold**
  - _Italic_
  - <u>Underline</u>
  - 텍스트 색상 지정
  - 줄바꿈 및 단락 구분
