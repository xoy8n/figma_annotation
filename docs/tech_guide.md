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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `CREATE_ANNOTATION`
- **처리 흐름**:
  1. 그룹 ID로 해당하는 주석 그룹 찾기
  2. 새 주석 객체 생성 및 그룹에 추가
  3. groupFrame 찾기 (groupFrameId 우선, 없으면 topFrame, 부모 등에서 찾기)
  4. 주석 UI 컴포넌트 생성 (프레임, 내용 그룹, 인덱스, 텍스트)
  5. 스타일 설정 및 그룹 프레임에 추가
  6. 필요시 배지 생성
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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `CREATE_ANNOTATION_GROUP`
- **처리 흐름**:
  1. 현재 선택된 노드 확인
  2. 최상위 Frame 찾기
  3. 기존 그룹 확인 및 없으면 새 그룹 생성
  4. `ANNOTATION_GROUP` Frame 생성 및 설정
  5. 기본 주석 생성
  6. 배지 생성
- **Figma API 사용**:
  - `figma.currentPage.selection`, `getTopLevelFrame`
  - `createFrame`, `setPluginData`, `appendChild`
  - `createAnnotationBadge`, `figma.viewport.scrollAndZoomIntoView`
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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `UPDATE_ANNOTATION_ORDER`
- **처리 흐름**:
  1. 해당 그룹 찾기
  2. 메모리상의 주석 순서 업데이트
  3. Figma 캔버스 상의 주석 순서 업데이트
     - 기존 방식: `insertChild(index, node)` 호출로 단일 요소 이동
     - 개선 방식: 메모리의 주석 순서에 맞게 모든 노드 재정렬
  4. 인덱스 번호와 배지 인덱스 업데이트
- **Figma API 사용**:
  - `figma.getNodeById`
  - `insertChild(index, node)`
  - `updateAnnotationIndices`, `updateBadgeIndices`
- **테스트 항목**:
  - 실제 레이어 순서 반영
  - 인덱스 번호 정확히 업데이트 (위→아래, 아래→위 이동 모두 정상 작동)
  - 배지 번호 업데이트 확인

---

## ✅ 기능 4: FILTER_ANNOTATION_LIST (검색 기능)

### 📁 프론트엔드 명세

- **파일 경로**: `src/ui.tsx`
- **사용 컴포넌트**: ShadCN `Popover`, `PopoverContent`, `PopoverTrigger`
- **UI 동작 흐름**:
  1. 유저가 검색어 입력
  2. `Fuse.js` 라이브러리로 검색 결과 필터링
  3. 검색 결과에서 키워드 하이라이트하여 표시
- **상태 관리**:
  - `keyword`: 검색어
  - `searchResult`: 검색 결과
  - `focusedIndex`: 현재 포커스된 결과 인덱스
- **서버 통신 여부**: ❌ 없음 (UI 내 필터링)
- **테스트 항목**:
  - 검색 입력 시 필터링 반영
  - 하이라이트 표시 확인
  - 키보드 네비게이션 동작 확인

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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `DELETE_ANNOTATION`
- **처리 흐름**:
  1. 해당 그룹 및 주석 찾기
  2. 메모리에서 주석 제거
  3. Figma 캔버스에서 주석 프레임 제거
  4. 남아있는 주석 프레임들의 인덱스 업데이트 (`updateAnnotationIndices`)
  5. 관련 배지 제거 및 배지 인덱스 업데이트 (`updateBadgeIndices`)
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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `DELETE_ANNOTATION_GROUP`
- **처리 흐름**:
  1. 삭제할 그룹 찾기
  2. 그룹 프레임 제거
  3. 그룹에 속한 모든 배지 제거
  4. 메모리에서 그룹 제거
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
- **상태 관리**: 없음
- **서버 통신 여부**: ✅ 있음
- **테스트 항목**:
  - 버튼 클릭 시 메시지 전송

---

### ⚙️ 백엔드 명세

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `MOVE_TO_SELECTION`
- **처리 흐름**:
  1. 페이지 ID가 있으면 해당 페이지로 이동
  2. 그룹 ID로 노드 찾기
  3. 해당 노드를 뷰포트에 표시
- **Figma API 사용**:
  - `figma.root.findOne`
  - `figma.currentPage = pageNode`
  - `figma.getNodeById`
  - `figma.viewport.scrollAndZoomIntoView`
- **테스트 항목**:
  - 페이지 전환 동작 확인
  - 뷰포트 이동 확인
  - 다른 페이지에 있는 프레임으로 이동 가능 여부

---

## ✅ 기능 8: UPDATE_ANNOTATION

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

- **파일 경로**: `src/code.ts`
- **수신 메시지 타입**: `UPDATE_ANNOTATION`
- **처리 흐름**:
  1. 그룹 및 주석 찾기
  2. 메모리 상태 업데이트
  3. Figma 캔버스 요소도 업데이트
     - 그룹 프레임 찾기
     - 주석 프레임 찾기
     - 내용 그룹 찾기
     - 텍스트 노드 업데이트 (`applyRichTextFormatting`)
- **Figma API 사용**:
  - `figma.getNodeById`
  - `node.findOne`
  - 텍스트 및 스타일 업데이트
- **테스트 항목**:
  - 텍스트 내용 업데이트 확인
  - 레이아웃 적절히 조정되는지 확인

---
