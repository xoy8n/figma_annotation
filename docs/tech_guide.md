# 📝 Figma Annotation Plugin 기능 명세서

Figma에서 주석(Annotation)을 생성/관리하기 위한 플러그인 기능 명세입니다.  
아래는 각 기능별 프론트엔드와 백엔드 구현에 대한 상세 명세입니다.

---

## ✅ 기능 1: CREATE_ANNOTATION

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: ShadCN 기반 `Input`, `Button`
- **UI 동작 흐름**:
  1. 사용자 텍스트 입력
  2. "Add Annotation" 버튼 클릭
  3. `sendMessage(Messages.CREATE_ANNOTATION, { groupId, annotations })` 전송
- **상태 관리**:
  - `annotationGroup`: 주석 그룹 상태 관리
  - 생성 후 자동으로 상태 업데이트
- **서버 통신 여부**: ✅ 있음 (`code.ts`로 메시지 전송)
- **테스트 항목**:
  - 버튼 클릭 → 메시지 전송 확인
  - 주석 추가 후 화면 반영

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/annotationHandlers.ts` → 주석 관련 핸들러
  - `src/canvas/annotationElements.ts` → 주석 요소 생성
- **수신 메시지 타입**: `CREATE_ANNOTATION`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleCreateAnnotation` 함수 호출
  2. `annotationHandlers.ts` 내 핸들러에서 그룹 ID로 해당하는 주석 그룹 찾기
  3. `annotationGroupService.ts`에서 새 주석 객체 생성 및 그룹에 추가
  4. `annotationFrameService.ts`에서 groupFrame 찾기 (groupFrameId 우선, 없으면 topFrame)
  5. `canvas/annotationElements.ts`에서 주석 UI 컴포넌트 생성 (프레임, 인덱스, 텍스트)
  6. 스타일 설정 및 그룹 프레임에 추가
  7. 필요시 배지 생성
- **Figma API 사용**:
  - `figma.getNodeById`, `figma.createFrame`, `figma.createText`
  - `loadFontAsync`, `appendChild`, `setPluginData`
- **데이터 저장 방식**:
  - 각 주석: `setPluginData("type", "annotation")`
  - 주석 ID: `setPluginData("annotationId", id)`
- **테스트 항목**:
  - 주석 추가 성공 여부
  - 인덱스 번호 정확성
  - UI 렌더링 확인

---

## ✅ 기능 2: CREATE_ANNOTATION_GROUP

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **동작 흐름**:
  - 주석 생성 시 스타일 옵션(색상, 크기, 카드 너비) 설정 후
  - `Messages.CREATE_ANNOTATION_GROUP` 메시지 전송
- **상태 관리**:
  - `defaultAnnotionColor`, `defaultAnnotionSize`, `defaultAnnotionCardWidth`
  - `annotationGroup`: 생성된 그룹 관리
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 설정된 옵션에 따른 그룹 생성
  - 응답 후 UI 업데이트

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/groupHandlers.ts` → 그룹 핸들러
  - `src/services/annotationFrameService.ts` → 그룹 프레임 생성
  - `src/canvas/annotationElements.ts` → 요소 생성
- **수신 메시지 타입**: `CREATE_ANNOTATION_GROUP`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleCreateAnnotationGroup` 함수 호출
  2. `groupHandlers.ts` 내 핸들러에서 현재 선택된 노드 확인
  3. `utils/nodeUtils.ts`에서 최상위 Frame 찾기
  4. `services/annotationGroupService.ts`에서 그룹 객체 생성 및 관리
  5. `services/annotationFrameService.ts`에서 프레임 생성
  6. `canvas/annotationElements.ts`에서 타이틀 그룹 및 배지 생성
- **Figma API 사용**:
  - `figma.currentPage.selection`, `getTopLevelFrame`
  - `createFrame`, `setPluginData`, `appendChild`
  - `createTitleGroup`, `createAnnotationBadge`
- **테스트 항목**:
  - 그룹 생성 여부
  - 중복 생성 방지 확인
  - 스타일 적용 확인

---

## ✅ 기능 3: UPDATE_ANNOTATION_ORDER (Drag & Drop)

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: `react-beautiful-dnd` (DragDropContext, Droppable, Draggable)
- **UI 동작 흐름**:
  1. 유저가 드래그하여 주석 순서 변경
  2. `handleOnDragEnd` 함수에서 상태 업데이트 및 메시지 전송
     ```ts
     sendMessage(Messages.UPDATE_ANNOTATION_ORDER, {
       pageId: currentSelection.relatedPage.id,
       groupId: currentSelection.id,
       sourceIndex: result.source.index + 1,
       destinationIndex: result.destination.index + 1,
     });
     ```
- **상태 관리**:
  - `annotationGroup`: 로컬 상태 먼저 업데이트 후 서버 전송
  - `debouncedHandleOnDragEnd`: 디바운스 적용으로 다중 호출 방지 (300ms)
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 순서 변경 시 메시지 전송
  - 드래그 처리 후 UI 정확히 반영
  - 디바운스 동작 확인

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/groupHandlers.ts` → 순서 변경 핸들러
  - `src/utils/updateUtils.ts` → 인덱스 업데이트
- **수신 메시지 타입**: `UPDATE_ANNOTATION_ORDER`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleUpdateAnnotationOrder` 호출
  2. `groupHandlers.ts` 내 핸들러에서 해당 그룹 찾기
  3. `services/annotationGroupService.ts`에서 메모리상의 주석 순서 업데이트
  4. Figma 캔버스 상의 주석 프레임들을 메모리 상태와 일치하도록 재정렬
  5. `utils/updateUtils.ts`에서 인덱스 번호와 배지 인덱스 업데이트
- **Figma API 사용**:
  - `figma.getNodeById`
  - `insertChild(index, node)`
  - `updateAnnotationIndices`, `updateBadgeIndices`
- **테스트 항목**:
  - 실제 레이어 순서 반영
  - 인덱스 번호 정확히 업데이트 (위→아래, 아래→위 이동 모두 정상 작동)
  - 배지 번호 업데이트 확인

---

## ✅ 기능 4: SEARCH_ANNOTATION (검색 기능)

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`, `src/components/SearchPopover.tsx`
- **사용 컴포넌트**:
  - `SearchPopover`: 모듈화된 검색 컴포넌트
  - `Input`, `Search` 아이콘
- **UI 동작 흐름**:
  1. 유저가 검색어 입력
  2. `Fuse.js` 라이브러리로 검색 결과 필터링
  3. 검색 결과에서 키워드 하이라이트하여 표시
  4. 화살표 키로 결과 내비게이션 지원
  5. Enter 키로 선택, Escape 키로 취소
- **상태 관리**:
  - `keyword`: 검색어
  - `searchResult`: 검색 결과
  - `focusedIndex`: 현재 포커스된 결과 인덱스
- **서버 통신 여부**: ❌ 없음 (UI 내 필터링)
- **테스트 항목**:
  - 검색 입력 시 필터링 반영
  - 하이라이트 표시 확인
  - 키보드 네비게이션 동작 확인
  - 키보드 단축키 동작 확인

---

## ✅ 기능 5: DELETE_ANNOTATION

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: 버튼 컴포넌트 (Delete 아이콘 포함)
- **UI 동작 흐름**:
  1. 주석 항목 옆의 삭제 버튼 클릭
  2. `deleteAnnoation` 함수 호출
  3. 서버로 삭제 요청 전송 및 로컬 상태 업데이트
- **상태 관리**:
  - `annotationGroup`: 배열에서 해당 항목 제거
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 삭제 후 UI 업데이트
  - 삭제 후 인덱스 재정렬

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/annotationHandlers.ts` → 삭제 핸들러
  - `src/canvas/annotationElements.ts` → 배지 삭제 함수
- **수신 메시지 타입**: `DELETE_ANNOTATION`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleDeleteAnnotation` 호출
  2. `handlers/annotationHandlers.ts`에서 해당 그룹 및 주석 찾기
  3. `services/annotationGroupService.ts`에서 메모리에서 주석 제거
  4. Figma 캔버스에서 주석 프레임 제거
  5. `utils/updateUtils.ts`에서 남아있는 주석 프레임들의 인덱스 업데이트
  6. `canvas/annotationElements.ts`에서 관련 배지 제거
  7. `utils/updateUtils.ts`에서 배지 인덱스 업데이트
- **Figma API 사용**:
  - `figma.getNodeById`
  - `remove()`
  - `removeAnnotationBadge`
- **테스트 항목**:
  - 주석 프레임 삭제 확인
  - 인덱스 번호 재정렬 확인
  - 배지 삭제 및 인덱스 업데이트 확인

---

## ✅ 기능 6: DELETE_ANNOTATION_GROUP

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: 삭제 버튼 및 확인 모달
- **UI 동작 흐름**:
  1. 그룹 삭제 버튼 클릭
  2. 확인 모달 표시
  3. 확인 시 `deleteAnnotationGroup` 함수 호출
- **상태 관리**:
  - `showDeleteModal`: 모달 표시 여부
  - `annotationGroup`: 그룹 목록에서 해당 항목 제거
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 모달 표시 및 동작 확인
  - 삭제 후 UI 업데이트

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/groupHandlers.ts` → 그룹 삭제 핸들러
  - `src/canvas/annotationElements.ts` → 배지 삭제 함수
- **수신 메시지 타입**: `DELETE_ANNOTATION_GROUP`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleDeleteAnnotationGroup` 호출
  2. `handlers/groupHandlers.ts`에서 삭제할 그룹 찾기
  3. `services/annotationGroupService.ts`에서 그룹 객체 제거
  4. Figma 캔버스에서 그룹 프레임 제거
  5. `canvas/annotationElements.ts`에서 그룹에 속한 모든 배지 제거
- **Figma API 사용**:
  - `figma.getNodeById`
  - `remove()`
  - `removeAnnotationBadge`
- **테스트 항목**:
  - 그룹 프레임 삭제 확인
  - 관련 배지 제거 확인
  - 메모리 상태 업데이트 확인

---

## ✅ 기능 7: MOVE_TO_SELECTION

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`, `src/components/sidePanel.tsx`
- **사용 컴포넌트**: Focus 아이콘 포함 버튼
- **UI 동작 흐름**:
  1. 주석 그룹 옆 Focus 버튼 클릭
  2. `moveToSelection` 함수 호출
  3. 서버로 이동 요청 전송
  4. 페이지 ID를 함께 전송하여 크로스 페이지 이동 지원
- **상태 관리**: 없음
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 버튼 클릭 시 메시지 전송
  - 페이지 ID 정확히 포함 여부 확인

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/navigationHandlers.ts` → 이동 핸들러
- **수신 메시지 타입**: `MOVE_TO_SELECTION`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleMoveToSelection` 호출
  2. `handlers/navigationHandlers.ts`에서:
     - 페이지 ID가 있으면 해당 페이지로 이동
     - `figma.root.findOne`으로 페이지 노드 찾기
     - 페이지 노드로 이동: `figma.currentPage = pageNode`
  3. 그룹 ID로 노드 찾기
  4. 해당 노드를 뷰포트에 표시
- **Figma API 사용**:
  - `figma.root.findOne`
  - `figma.currentPage = pageNode`
  - `figma.viewport.scrollAndZoomIntoView`
- **테스트 항목**:
  - 페이지 전환 동작 확인
  - 뷰포트 이동 확인
  - 다른 페이지에 있는 프레임으로 이동 가능 여부

---

## ✅ 기능 8: MOVE_TO_ANNOTATION

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: 주석 번호 배지 (클릭 가능)
- **UI 동작 흐름**:
  1. 주석 앞의 번호 배지 클릭
  2. `moveToAnnotation` 함수 호출
  3. 서버로 주석 ID와 그룹 ID, 페이지 ID 전송
- **상태 관리**: 없음
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 배지 클릭 시 메시지 전송
  - 필요한 정보 모두 포함 여부 확인

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/navigationHandlers.ts` → 주석 이동 핸들러
- **수신 메시지 타입**: `MOVE_TO_ANNOTATION`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleMoveToAnnotation` 호출
  2. `handlers/navigationHandlers.ts`에서:
     - 페이지 ID가 있으면 해당 페이지로 이동
     - 현재 페이지에서 주석 배지 찾기
     - 배지가 있으면 배지로 뷰포트 이동
     - 없으면 그룹 프레임으로 이동
- **Figma API 사용**:
  - `figma.root.findOne`
  - `figma.currentPage = pageNode`
  - `figma.currentPage.findAll`
  - `figma.viewport.scrollAndZoomIntoView`
- **테스트 항목**:
  - 배지로 정확히 이동 확인
  - 배지 없을 경우 대체 동작 확인
  - 다른 페이지로 이동 확인

---

## ✅ 기능 9: UPDATE_ANNOTATION

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: Tiptap 리치 텍스트 에디터
- **UI 동작 흐름**:
  1. 주석 텍스트 편집
  2. 디바운스된 업데이트 함수 호출
  3. `updateAnnotationDescription` 함수로 상태 및 서버 업데이트
- **상태 관리**:
  - `annotationGroup`: 로컬 상태 업데이트
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 편집 내용 저장 확인
  - 디바운스 동작 확인

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/annotationHandlers.ts` → 주석 업데이트 핸들러
  - `src/utils/textUtils.ts` → 리치 텍스트 서식 적용
  - `src/canvas/annotationElements.ts` → UI 컴포넌트 레이아웃 관리
- **수신 메시지 타입**: `UPDATE_ANNOTATION`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleUpdateAnnotation` 호출
  2. `handlers/annotationHandlers.ts`에서:
     - 그룹 및 주석 찾기
     - 메모리 상태 업데이트
     - Figma 캔버스 요소도 업데이트
  3. `utils/textUtils.ts`에서 리치 텍스트 서식 적용
  4. 레이아웃 조정을 위한 auto-layout 속성 업데이트:
     - `annotationFrame.layoutMode = "HORIZONTAL"` 확인
     - `annotationFrame.counterAxisSizingMode = "AUTO"` 설정
     - `indexContainer.layoutSizingVertical = "FILL"`로 설정하여 컨텐츠 높이에 맞춤
- **Figma API 사용**:
  - `figma.getNodeById`
  - `node.findOne`
  - 텍스트 및 스타일 업데이트
  - Figma Auto-layout 속성: `layoutMode`, `layoutSizingVertical`, `counterAxisSizingMode`
- **테스트 항목**:
  - 텍스트 내용 업데이트 확인
  - 레이아웃 적절히 조정되는지 확인
  - indexContainer와 contentGroup 높이 동기화 확인

---

## ✅ 기능 10: UPDATE_ANNOTATION_GROUP (속성 업데이트)

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: 속성별 토글 버튼 (Color, Font size, Card width)
- **UI 동작 흐름**:
  1. 속성 버튼 클릭
  2. `updateAnnotationColor`, `updateAnnotationSize`, `updateAnnotationCardWidth` 함수 호출
  3. 로컬 상태 업데이트 및 서버 전송
- **상태 관리**:
  - `annotationGroup`: 해당 그룹의 속성 업데이트
  - `showLoading`: 업데이트 중 로딩 상태 표시
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 버튼 클릭 시 속성 변경
  - 로컬 상태 및 UI 업데이트

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/groupHandlers.ts` → 그룹 속성 업데이트 핸들러
  - `src/utils/frameUtils.ts` → 프레임 스타일 업데이트
- **수신 메시지 타입**: `UPDATE_ANNOTATION_GROUP`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleUpdateAnnotationGroup` 호출
  2. `handlers/groupHandlers.ts`에서 그룹 찾기 및 메모리 상태 업데이트
  3. `utils/frameUtils.ts`에서 속성에 따라 다른 함수 호출:
     - `color`: `updateGroupFrameColor` (배지 색상 변경)
     - `size`: `updateGroupFrameSize` (글꼴 크기, 배지 크기 변경)
     - `cardWidth`: `updateGroupFrameSize` (카드 너비 변경)
  4. 모든 주석 요소들의 크기 및 위치 업데이트
- **Figma API 사용**:
  - `figma.getNodeById`
  - `updateGroupFrameColor`, `updateGroupFrameSize`
  - 다양한 레이어 속성 업데이트
- **테스트 항목**:
  - 색상 변경 확인
  - 크기 변경 확인
  - 카드 너비 변경 확인
  - 레이아웃 업데이트 확인

---

## ✅ 기능 11: SYNC_ANNOTATION_DESCRIPTIONS

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: RefreshCw 아이콘 포함 버튼
- **UI 동작 흐름**:
  1. 주석 동기화 버튼(RefreshCw 아이콘) 클릭
  2. `refreshAnnotations` 함수 호출
  3. `Messages.SYNC_ALL_ANNOTATIONS` 메시지 전송
  4. UI 상태가 업데이트되면 Tiptap 에디터 강제 리렌더링하여 내용 갱신
- **상태 관리**:
  - `refreshTime`: 동기화 타임스탬프 (Tiptap 컴포넌트 key 값에 포함하여 강제 리렌더링)
  - `annotationGroup`: 동기화 응답으로 받은 데이터로 상태 업데이트
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 버튼 클릭 시 메시지 전송
  - Figma 캔버스에서 직접 수정한 주석 내용이 UI에 반영되는지 확인
  - 서식 정보(굵게, 색상 등) 포함 여부 확인

---

### ⚙️ 백엔드 명세

- **파일 경로**:
  - `src/code.ts` → 메시지 라우팅
  - `src/handlers/annotationHandlers.ts` → 동기화 핸들러
  - `src/utils/textUtils.ts` → Figma 텍스트 노드 변환 유틸리티
- **수신 메시지 타입**: `SYNC_ALL_ANNOTATIONS`
- **처리 흐름**:
  1. `code.ts`에서 메시지 수신 및 `handleSyncAllAnnotations` 함수 호출
  2. `handlers/annotationHandlers.ts`에서:
     - 모든 주석 그룹 순회
     - 각 그룹의 모든 주석에 대해 Figma 캔버스 상의 텍스트 노드 찾기
     - 텍스트 내용과 서식 추출하여 Tiptap 호환 포맷으로 변환
     - 메모리 상태 업데이트
  3. `utils/textUtils.ts`의 `convertFigmaTextToTiptapFormat` 함수로 변환:
     - 텍스트 노드의 내용과 서식 정보 추출
     - Tiptap 문서 구조로 변환 (paragraphs, marks 등)
     - 줄바꿈 및 서식 정보 유지
  4. 업데이트된 주석 그룹 정보 응답으로 전송
- **Figma API 사용**:
  - `figma.getNodeById`
  - `node.findOne`
  - `textNode.getRangeAllFontNames`
  - `textNode.getRangeFills`
- **테스트 항목**:
  - 여러 페이지의 주석 동기화 확인
  - 텍스트 서식 정보 보존 여부 확인
  - 줄바꿈 정확히 변환 여부 확인

---

## 🔍 주요 컴포넌트 레이아웃 구현

### 주석 프레임 레이아웃 (AnnotationFrame)

주석 프레임은 Figma의 Auto-layout 기능을 활용하여 구현되었습니다. 특히 다음과 같은 구조로 설계되어 있습니다:

- **프레임 구성**:

  - `annotationFrame`: 수평(HORIZONTAL) 레이아웃의 부모 프레임
    - `indexContainer`: 인덱스 번호를 포함하는 왼쪽 컨테이너 (전체 너비의 정확히 20%)
    - `contentGroup`: 주석 내용을 포함하는 오른쪽 컨테이너 (전체 너비의 정확히 80%)

- **레이아웃 속성**:
  - `annotationFrame.layoutMode = "HORIZONTAL"`: 자식 요소들이 수평으로 배치됨
  - `annotationFrame.layoutSizingHorizontal = "FIXED"`: 너비는 고정
  - `annotationFrame.layoutSizingVertical = "HUG"`: 높이는 내용에 맞게 자동 조정
  - `contentGroup.layoutGrow = 1`: 컨텐츠 그룹이 남은 공간을 모두 차지
  - `indexContainer.layoutSizingVertical = "FILL"`: 인덱스 컨테이너가 부모 높이에 맞춤
  - `textNode.layoutSizingHorizontal = "FILL"`: 텍스트 노드가 부모 컨테이너 너비에 맞춤
  - `textNode.textAutoResize = "HEIGHT"`: 텍스트 높이만 자동 조정 (너비는 고정)

이러한 구조는 주석 내용의 길이에 따라 컨테이너의 높이가 자동으로 조정되며, 인덱스 컨테이너와 내용 컨테이너의 높이가 항상 동일하게 유지됩니다.

### 🔄 Auto-layout 순서

Auto-layout 속성 설정 시 다음 순서를 **반드시** 따라야 합니다:

1. 먼저 프레임과 컨테이너 요소 생성
2. 자식 요소들을 부모에 추가 (`appendChild`)
3. 부모 프레임의 auto-layout 속성 설정 (`layoutMode`, `primaryAxisSizingMode`, `counterAxisSizingMode`)
4. 자식 요소의 auto-layout 속성 설정 (`layoutSizingVertical`, `layoutSizingHorizontal`, `layoutGrow`)

이 순서를 지키지 않으면 "FILL can only be set on children of auto-layout frames"와 같은 오류가 발생합니다. `annotationElements.ts`의 `createAnnotationComponents` 함수는 이 순서를 정확히 따르고 있습니다.

## ⚠️ 주의사항 및 알려진 이슈

- **레이아웃 속성 설정 순서**: 요소가 부모 프레임에 추가된 이후에 `layoutSizingVertical = "FILL"`과 같은 속성을 설정해야 합니다.
- **Auto-layout 오류**: Auto-layout 프레임의 자식이 아닌 요소에 `FILL` 속성을 적용하면 오류가 발생합니다.
- **지연 적용**: 텍스트 업데이트 후 레이아웃이 올바르게 적용되도록 `setTimeout`을 사용하여 작업을 지연시킬 수 있습니다.
- **레이아웃 동기화**: 인덱스 컨테이너의 높이가 컨텐츠 그룹의 높이와 동기화되어야 하므로, 컨텐츠 변경 시 항상 부모 프레임의 레이아웃 속성을 확인해야 합니다.
- **텍스트 노드 너비**: 텍스트 노드의 `layoutSizingHorizontal` 속성은 부모 컨테이너에 추가된 후에만 설정할 수 있습니다.
- **최적 비율**: indexContainer와 contentGroup의 너비 비율은 정확히 20:80으로 설정되어 있으며, 이는 `cardWidthValue`에 따라 자동 계산됩니다.
- **텍스트 내용 길이**: 텍스트 내용이 길어질 경우 indexContainer의 높이가 자동으로 조정되어 contentGroup과 동일하게 유지됩니다.

## 🔄 동기화 기능

Figma 캔버스 상에서 직접 텍스트를 편집한 경우, 플러그인 UI에 내용을 동기화하는 기능을 제공합니다:

1. 동기화 버튼(RefreshCw 아이콘) 클릭 시 `SYNC_ALL_ANNOTATIONS` 메시지 전송
2. 서버에서 모든 주석 그룹을 순회하며 텍스트 노드 내용 추출
3. Figma 텍스트 노드의 내용과 서식을 Tiptap 호환 포맷으로 변환
4. UI 상태 업데이트 및 Tiptap 에디터 리렌더링 (Tiptap key 값에 타임스탬프 포함)

이를 통해 사용자는 Figma 캔버스 상에서 직접 텍스트를 편집하고, 플러그인 UI에서 이를 확인하고 추가 편집할 수 있습니다.

---

## ⚙️ Figma 동적 페이지 로딩 대응

Figma는 2023년부터 페이지를 동적으로 로드하는 방식으로 변경했습니다. 이에 대응하기 위해 다음과 같은 구현이 포함되어 있습니다:

- **페이지 간 이동 처리**:

  - `handlers/navigationHandlers.ts` 내 함수에서 `pageId`를 사용해 다른 페이지 노드로 이동 처리
  - 페이지 노드 찾기: `figma.root.findOne((node) => node.id === pageId)`
  - 페이지 전환: `figma.currentPage = pageNode as PageNode`

- **확장성을 위한 개선점**:
  - `figma.loadAllPagesAsync()` 호출 필요 여부 확인
  - 페이지 로드 후 작업이 필요한 함수에 `await pageNode.loadAsync()` 추가 고려
  - Plugin manifest의 `"documentAccess": "dynamic-page"` 설정 확인

---

## 📁 코드 구조 및 모듈화

코드는 다음과 같은 폴더 구조로 모듈화되어 있습니다:

- **src/components/**: React UI 컴포넌트

  - `SearchPopover.tsx`: 검색 UI 기능
  - `Tiptap.tsx`: 리치 텍스트 에디터
  - `sidePanel.tsx`: 사이드 패널 컴포넌트
  - `ui/`: Shadcn UI 기반 컴포넌트

- **src/canvas/**: Figma 캔버스 요소 생성 관련 코드

  - `annotationElements.ts`: 배지, 프레임, 텍스트 노드 등 캔버스 요소 생성 함수

- **src/services/**: 비즈니스 로직 및 데이터 관리

  - `annotationGroupService.ts`: 주석 그룹 데이터 관리
  - `annotationFrameService.ts`: 프레임 생성 및 관리 서비스
  - `messageService.ts`: UI-Plugin 메시지 통신 서비스

- **src/handlers/**: 메시지 핸들러

  - `annotationHandlers.ts`: 주석 관련 핸들러
  - `groupHandlers.ts`: 그룹 관련 핸들러
  - `dataHandlers.ts`: 데이터 저장/로드 핸들러
  - `navigationHandlers.ts`: 네비게이션 핸들러

- **src/utils/**: 유틸리티 함수

  - `colorUtils.ts`: 색상 관련 유틸리티
  - `sizeUtils.ts`: 크기 관련 유틸리티
  - `nodeUtils.ts`: Figma 노드 관련 유틸리티
  - `textUtils.ts`: 텍스트 포맷팅 유틸리티
  - `updateUtils.ts`: 인덱스 업데이트 유틸리티
  - `frameUtils.ts`: 프레임 업데이트 유틸리티
  - `messageUtils.ts`: 메시지 응답 유틸리티

- **src/interfaces/**: 타입 정의

  - `enums.ts`: 열거형 (색상, 크기 등)
  - `const.ts`: 상수 값

- **주요 파일**:
  - `code.ts`: 메시지 라우팅 및 진입점
  - `ui.tsx`: React 기반 플러그인 UI

이러한 모듈화는 코드의 가독성, 유지보수성, 테스트 용이성을 크게 향상시켰습니다.

---

## 🔍 주요 컴포넌트 레이아웃 구현

### 주석 프레임 레이아웃 (AnnotationFrame)

주석 프레임은 Figma의 Auto-layout 기능을 활용하여 구현되었습니다. 특히 다음과 같은 구조로 설계되어 있습니다:

- **프레임 구성**:

  - `annotationFrame`: 수평(HORIZONTAL) 레이아웃의 부모 프레임
    - `indexContainer`: 인덱스 번호를 포함하는 왼쪽 컨테이너 (전체 너비의 정확히 20%)
    - `contentGroup`: 주석 내용을 포함하는 오른쪽 컨테이너 (전체 너비의 정확히 80%)

- **레이아웃 속성**:
  - `annotationFrame.layoutMode = "HORIZONTAL"`: 자식 요소들이 수평으로 배치됨
  - `annotationFrame.layoutSizingHorizontal = "FIXED"`: 너비는 고정
  - `annotationFrame.layoutSizingVertical = "HUG"`: 높이는 내용에 맞게 자동 조정
  - `contentGroup.layoutGrow = 1`: 컨텐츠 그룹이 남은 공간을 모두 차지
  - `indexContainer.layoutSizingVertical = "FILL"`: 인덱스 컨테이너가 부모 높이에 맞춤
  - `textNode.layoutSizingHorizontal = "FILL"`: 텍스트 노드가 부모 컨테이너 너비에 맞춤
  - `textNode.textAutoResize = "HEIGHT"`: 텍스트 높이만 자동 조정 (너비는 고정)

이러한 구조는 주석 내용의 길이에 따라 컨테이너의 높이가 자동으로 조정되며, 인덱스 컨테이너와 내용 컨테이너의 높이가 항상 동일하게 유지됩니다.

### 🔄 Auto-layout 순서

Auto-layout 속성 설정 시 다음 순서를 **반드시** 따라야 합니다:

1. 먼저 프레임과 컨테이너 요소 생성
2. 자식 요소들을 부모에 추가 (`appendChild`)
3. 부모 프레임의 auto-layout 속성 설정 (`layoutMode`, `primaryAxisSizingMode`, `counterAxisSizingMode`)
4. 자식 요소의 auto-layout 속성 설정 (`layoutSizingVertical`, `layoutSizingHorizontal`, `layoutGrow`)

이 순서를 지키지 않으면 "FILL can only be set on children of auto-layout frames"와 같은 오류가 발생합니다. `annotationElements.ts`의 `createAnnotationComponents` 함수는 이 순서를 정확히 따르고 있습니다.

## ⚠️ 주의사항 및 알려진 이슈

- **레이아웃 속성 설정 순서**: 요소가 부모 프레임에 추가된 이후에 `layoutSizingVertical = "FILL"`과 같은 속성을 설정해야 합니다.
- **Auto-layout 오류**: Auto-layout 프레임의 자식이 아닌 요소에 `FILL` 속성을 적용하면 오류가 발생합니다.
- **지연 적용**: 텍스트 업데이트 후 레이아웃이 올바르게 적용되도록 `setTimeout`을 사용하여 작업을 지연시킬 수 있습니다.
- **레이아웃 동기화**: 인덱스 컨테이너의 높이가 컨텐츠 그룹의 높이와 동기화되어야 하므로, 컨텐츠 변경 시 항상 부모 프레임의 레이아웃 속성을 확인해야 합니다.
- **텍스트 노드 너비**: 텍스트 노드의 `layoutSizingHorizontal` 속성은 부모 컨테이너에 추가된 후에만 설정할 수 있습니다.
- **최적 비율**: indexContainer와 contentGroup의 너비 비율은 정확히 20:80으로 설정되어 있으며, 이는 `cardWidthValue`에 따라 자동 계산됩니다.
- **텍스트 내용 길이**: 텍스트 내용이 길어질 경우 indexContainer의 높이가 자동으로 조정되어 contentGroup과 동일하게 유지됩니다.

## 🔄 동기화 기능

Figma 캔버스 상에서 직접 텍스트를 편집한 경우, 플러그인 UI에 내용을 동기화하는 기능을 제공합니다:

1. 동기화 버튼(RefreshCw 아이콘) 클릭 시 `SYNC_ALL_ANNOTATIONS` 메시지 전송
2. 서버에서 모든 주석 그룹을 순회하며 텍스트 노드 내용 추출
3. Figma 텍스트 노드의 내용과 서식을 Tiptap 호환 포맷으로 변환
4. UI 상태 업데이트 및 Tiptap 에디터 리렌더링 (Tiptap key 값에 타임스탬프 포함)

이를 통해 사용자는 Figma 캔버스 상에서 직접 텍스트를 편집하고, 플러그인 UI에서 이를 확인하고 추가 편집할 수 있습니다.

---
