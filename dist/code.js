/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/annotation.model.ts":
/*!****************************************!*\
  !*** ./src/models/annotation.model.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnnotation: () => (/* binding */ addAnnotation),
/* harmony export */   annotationGroups: () => (/* binding */ annotationGroups),
/* harmony export */   annotations: () => (/* binding */ annotations),
/* harmony export */   clearAnnotations: () => (/* binding */ clearAnnotations),
/* harmony export */   frameAnnotationCounters: () => (/* binding */ frameAnnotationCounters),
/* harmony export */   frameBadges: () => (/* binding */ frameBadges),
/* harmony export */   getAllAnnotations: () => (/* binding */ getAllAnnotations),
/* harmony export */   getAnnotationsByFrameId: () => (/* binding */ getAnnotationsByFrameId),
/* harmony export */   removeAnnotation: () => (/* binding */ removeAnnotation),
/* harmony export */   removeAnnotationsByFrameId: () => (/* binding */ removeAnnotationsByFrameId),
/* harmony export */   removeAnnotationsByNumber: () => (/* binding */ removeAnnotationsByNumber),
/* harmony export */   setAnnotations: () => (/* binding */ setAnnotations),
/* harmony export */   updateAnnotation: () => (/* binding */ updateAnnotation)
/* harmony export */ });
// 주석 데이터를 저장하는 배열
let annotations = [];
// 전역 주석 카운터 대신 프레임별 주석 번호 관리
let frameAnnotationCounters = {};
// 현재 선택된 프레임 ID와 해당 프레임의 주석 그룹을 저장
let annotationGroups = {};
// 프레임에 추가된 뱃지를 추적하기 위한 맵
let frameBadges = {};
// 주석 배열 업데이트 함수
function updateAnnotation(updatedAnnotation) {
    const index = annotations.findIndex((a) => a.id === updatedAnnotation.id);
    if (index !== -1) {
        annotations[index] = updatedAnnotation;
    }
}
// 주석 추가 함수
function addAnnotation(annotation) {
    annotations.push(annotation);
}
// 주석 제거 함수
function removeAnnotation(annotationId) {
    const index = annotations.findIndex((a) => a.id === annotationId);
    if (index !== -1) {
        const removed = annotations[index];
        annotations.splice(index, 1);
        return removed;
    }
    return undefined;
}
// 프레임 ID로 주석 필터링
function getAnnotationsByFrameId(frameId) {
    return annotations.filter((a) => a.frameId === frameId);
}
// 주석 모두 가져오기
function getAllAnnotations() {
    return [...annotations];
}
// 주석 초기화
function clearAnnotations() {
    annotations = [];
    frameAnnotationCounters = {};
    annotationGroups = {};
    frameBadges = {};
}
// 프레임 ID로 주석 필터링하여 제거
function removeAnnotationsByFrameId(frameId) {
    annotations = annotations.filter((a) => a.frameId !== frameId);
}
// 주석 번호로 주석 필터링하여 제거
function removeAnnotationsByNumber(number) {
    annotations = annotations.filter((a) => a.number !== number);
}
// 주석 배열 직접 설정
function setAnnotations(newAnnotations) {
    annotations = [...newAnnotations];
}


/***/ }),

/***/ "./src/services/annotation.service.ts":
/*!********************************************!*\
  !*** ./src/services/annotation.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnnotation: () => (/* binding */ createAnnotation),
/* harmony export */   deleteAnnotation: () => (/* binding */ deleteAnnotation),
/* harmony export */   reorderAnnotations: () => (/* binding */ reorderAnnotations),
/* harmony export */   scanDocumentForAnnotations: () => (/* binding */ scanDocumentForAnnotations),
/* harmony export */   updateAnnotation: () => (/* binding */ updateAnnotation)
/* harmony export */ });
/* harmony import */ var _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/annotation.model */ "./src/models/annotation.model.ts");
/* harmony import */ var _badge_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.service */ "./src/services/badge.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


// 주석 생성 함수
function createAnnotation(annotationData, settings) {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedNode = figma.currentPage.selection[0];
        console.log();
        if (!selectedNode) {
            figma.notify("Please select a frame first");
            return;
        }
        // 최상위 프레임 찾기
        let currentNode = selectedNode;
        let rootFrameNode = null;
        while (currentNode.parent) {
            if (currentNode.parent.type === "FRAME") {
                rootFrameNode = currentNode.parent;
            }
            currentNode = currentNode.parent;
        }
        if (!rootFrameNode) {
            figma.notify("No parent frame found");
            return;
        }
        // 다음 주석 번호 계산
        const nextAnnotationNumber = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.length + 1;
        // 새로운 주석 객체 생성
        const newAnnotation = {
            id: `annotation-${Date.now()}`,
            number: nextAnnotationNumber,
            frameId: rootFrameNode.id,
            frameName: rootFrameNode.name,
            pageName: figma.currentPage.name,
            description: annotationData.description || `Annotation ${nextAnnotationNumber}`,
            settings: settings,
        };
        // 부모 주석 프레임 확인 또는 생성
        let parentAnnotationFrame = null;
        const annotationFrameName = `${rootFrameNode.name} Annotations`;
        // 이미 존재하는 부모 주석 프레임 찾기
        const existingParentFrame = rootFrameNode.children.find((node) => node.type === "FRAME" && node.name === annotationFrameName);
        if (existingParentFrame) {
            // 기존 부모 프레임 사용
            parentAnnotationFrame = existingParentFrame;
        }
        else {
            // 새로운 부모 주석 프레임 생성
            parentAnnotationFrame = figma.createFrame();
            parentAnnotationFrame.name = annotationFrameName;
            parentAnnotationFrame.layoutMode = "VERTICAL";
            parentAnnotationFrame.primaryAxisAlignItems = "MIN";
            parentAnnotationFrame.counterAxisAlignItems = "MIN";
            parentAnnotationFrame.itemSpacing = 5;
            parentAnnotationFrame.fills = [];
            parentAnnotationFrame.strokes = [];
            parentAnnotationFrame.resize(320, 220);
            parentAnnotationFrame.x = rootFrameNode.width - parentAnnotationFrame.width;
            parentAnnotationFrame.y = rootFrameNode.y + parentAnnotationFrame.height;
            // Description 텍스트 헤더 추가
            const descriptionHeader = figma.createText();
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            descriptionHeader.fontName = { family: "Inter", style: "Bold" };
            descriptionHeader.characters = "Description";
            descriptionHeader.fontSize = 16;
            descriptionHeader.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
            descriptionHeader.textAlignHorizontal = "CENTER";
            // 헤더를 부모 프레임에 추가
            parentAnnotationFrame.appendChild(descriptionHeader);
            // 부모 주석 프레임을 최상위 프레임에 추가
            rootFrameNode.appendChild(parentAnnotationFrame);
        }
        // 주석 그룹 프레임 생성
        const annotationGroupFrame = figma.createFrame();
        annotationGroupFrame.name = `Annotation Group ${nextAnnotationNumber}`;
        annotationGroupFrame.layoutMode = "HORIZONTAL";
        annotationGroupFrame.primaryAxisAlignItems = "MIN";
        annotationGroupFrame.counterAxisAlignItems = "CENTER";
        annotationGroupFrame.itemSpacing = 12;
        annotationGroupFrame.paddingTop = 12;
        annotationGroupFrame.paddingRight = 16;
        annotationGroupFrame.paddingBottom = 12;
        annotationGroupFrame.paddingLeft = 16;
        annotationGroupFrame.fills = [];
        annotationGroupFrame.strokes = [];
        annotationGroupFrame.resize(300, 50); // 최소 높이로 시작
        // 번호 텍스트 노드 생성
        const numberText = figma.createText();
        yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
        numberText.fontName = { family: "Inter", style: "Bold" };
        numberText.characters = nextAnnotationNumber.toString();
        numberText.fontSize = 16;
        numberText.fills = [{ type: "SOLID", color: { r: 0.43, g: 0.33, b: 0.81 } }]; // #6E56CF
        numberText.textAlignHorizontal = "CENTER";
        numberText.textAlignVertical = "CENTER";
        numberText.resize(24, 24);
        // 번호 노드를 그룹 프레임에 추가
        annotationGroupFrame.appendChild(numberText);
        // 주석 텍스트를 담을 컨테이너 생성
        const textContainer = figma.createFrame();
        textContainer.name = "Text Container";
        textContainer.layoutMode = "VERTICAL";
        textContainer.primaryAxisAlignItems = "MIN";
        textContainer.counterAxisAlignItems = "MIN";
        textContainer.itemSpacing = 0;
        textContainer.fills = [];
        textContainer.layoutGrow = 1;
        // 주석 텍스트 노드 생성
        const annotationText = figma.createText();
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        annotationText.characters = newAnnotation.description;
        annotationText.fontSize = settings.fontSize === "small" ? 12 : 14;
        annotationText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        annotationText.textAutoResize = "HEIGHT";
        annotationText.textAlignHorizontal = "LEFT";
        annotationText.textAlignVertical = "TOP";
        annotationText.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        annotationText.layoutAlign = "STRETCH";
        // 주석 텍스트를 컨테이너에 추가
        textContainer.appendChild(annotationText);
        // 텍스트 컨테이너를 그룹 프레임에 추가
        annotationGroupFrame.appendChild(textContainer);
        // 텍스트 길이에 따라 프레임 높이 조정
        const paddingVertical = annotationGroupFrame.paddingTop + annotationGroupFrame.paddingBottom;
        const textWidth = 300 - paddingVertical - 24 - 12 - 16; // 전체 너비 - 패딩 - 번호 너비 - 간격 - 여유 공간
        annotationText.resize(textWidth, annotationText.height);
        // 텍스트 높이에 맞게 그룹 프레임 높이 조정
        setTimeout(() => {
            const newHeight = annotationText.height + paddingVertical;
            annotationGroupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px
        }, 50);
        // 주석 그룹 프레임을 부모 주석 프레임에 추가
        parentAnnotationFrame.appendChild(annotationGroupFrame);
        newAnnotation.groupFrameId = annotationGroupFrame.id;
        // 뱃지 생성
        (0,_badge_service__WEBPACK_IMPORTED_MODULE_1__.createBadgeOnFrame)(selectedNode, nextAnnotationNumber, settings.color);
        // 주석 목록에 추가
        (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.addAnnotation)(newAnnotation);
        // UI에 새 주석 생성 알림
        figma.ui.postMessage({
            type: "ANNOTATION_CREATED",
            annotation: newAnnotation,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
            parentFrameName: rootFrameNode.name,
        });
    });
}
// 주석 삭제 함수
function deleteAnnotation(annotationId) {
    return __awaiter(this, void 0, void 0, function* () {
        const removedAnnotation = (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.removeAnnotation)(annotationId);
        if (!removedAnnotation)
            return;
        // 주석 그룹 프레임 삭제
        const groupFrame = figma.getNodeById(removedAnnotation.groupFrameId);
        if (groupFrame) {
            // 그룹 프레임의 부모(Annotations 프레임) 찾기
            const parentFrame = groupFrame.parent;
            // 그룹 프레임 삭제
            groupFrame.remove();
            // 부모 프레임에 자식이 1개 이하(Description 헤더만 있을 때)면 부모 프레임도 삭제
            if (parentFrame && parentFrame.children.length <= 1) {
                parentFrame.remove();
            }
        }
        // 삭제할 주석의 뱃지 삭제
        const badgeNode = figma.currentPage.findChild((n) => n.type === "FRAME" && n.name === `Badge ${removedAnnotation.number}`);
        if (badgeNode) {
            badgeNode.remove();
        }
        // 프레임 위에 있는 뱃지 삭제
        const targetFrame = figma.currentPage.findChild((n) => n.type === "FRAME" && n.name === removedAnnotation.frameName);
        if (targetFrame) {
            (0,_badge_service__WEBPACK_IMPORTED_MODULE_1__.deleteBadgeOnFrame)(targetFrame, removedAnnotation.number);
        }
        else {
            // 프레임을 찾지 못한 경우, 현재 페이지의 모든 프레임에서 해당 뱃지 확인
            figma.currentPage.findAll((node) => {
                if (node.type === "FRAME" &&
                    !node.name.includes("Annotations") &&
                    !node.name.startsWith("Badge")) {
                    // 해당 프레임 ID에 관련된 뱃지가 있는지 확인
                    if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[node.id] &&
                        _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[node.id][removedAnnotation.number]) {
                        (0,_badge_service__WEBPACK_IMPORTED_MODULE_1__.deleteBadgeOnFrame)(node, removedAnnotation.number);
                        return true;
                    }
                }
                return false;
            });
        }
        // 남은 주석들의 번호 재정렬
        const remainingAnnotations = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.sort((a, b) => a.number - b.number);
        const updatedAnnotations = [];
        // 각 주석의 번호를 1부터 순차적으로 재할당
        remainingAnnotations.forEach((annotation, index) => {
            const newNumber = index + 1;
            const oldNumber = annotation.number;
            if (oldNumber !== newNumber) {
                console.log(`주석 번호 변경: ${oldNumber} -> ${newNumber}`);
                // 주석 번호 업데이트
                annotation.number = newNumber;
                // 주석 그룹 프레임 업데이트
                const annotationGroupFrame = figma.getNodeById(annotation.groupFrameId);
                if (annotationGroupFrame) {
                    // 그룹 프레임 이름 업데이트
                    annotationGroupFrame.name = `Annotation Group ${newNumber}`;
                    console.log(`주석 그룹 프레임 이름 변경: ${annotationGroupFrame.name}`);
                    // 그룹 프레임 안의 번호 텍스트 업데이트
                    const numberText = annotationGroupFrame.findChild((n) => n.type === "TEXT" &&
                        n.fontSize === 16 &&
                        !n.name.includes("Container"));
                    if (numberText) {
                        numberText.characters = newNumber.toString();
                        console.log(`그룹 프레임 내 번호 텍스트 변경: ${oldNumber} -> ${newNumber}`);
                    }
                    else {
                        console.log(`그룹 프레임 내 번호 텍스트를 찾을 수 없음`);
                    }
                }
                // 독립 뱃지 프레임 찾기 (이전 번호로 찾아야 함)
                const badgeFrame = figma.currentPage.findChild((n) => n.type === "FRAME" && n.name === `Badge ${oldNumber}`);
                if (badgeFrame) {
                    // 뱃지 이름 업데이트
                    badgeFrame.name = `Badge ${newNumber}`;
                    console.log(`뱃지 이름 변경: Badge ${oldNumber} -> Badge ${newNumber}`);
                    // 뱃지 텍스트 업데이트
                    const badgeText = badgeFrame.findChild((n) => n.type === "TEXT" && n.name === "BadgeText");
                    if (badgeText) {
                        badgeText.characters = newNumber.toString();
                        console.log(`뱃지 텍스트 변경: ${oldNumber} -> ${newNumber}`);
                    }
                }
                else {
                    console.log(`뱃지를 찾을 수 없음: Badge ${oldNumber}`);
                }
                // 프레임 위에 있는 뱃지 업데이트 (frameBadges 맵 사용)
                const frameId = annotation.frameId;
                if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId] && _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][oldNumber]) {
                    // 뱃지 프레임 참조 가져오기
                    const frameBadge = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][oldNumber];
                    // 뱃지 이름 업데이트
                    frameBadge.name = `Badge ${newNumber}`;
                    // 뱃지 내부 텍스트 찾기 및 업데이트
                    const badgeText = frameBadge.findChild((n) => n.type === "TEXT" && n.name === "BadgeText");
                    if (badgeText) {
                        badgeText.characters = newNumber.toString();
                        console.log(`프레임 위 뱃지 텍스트 변경: ${oldNumber} -> ${newNumber}`);
                    }
                    // 새 번호로 뱃지 맵 업데이트
                    _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][newNumber] = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][oldNumber];
                    delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][oldNumber];
                    console.log(`프레임 뱃지 맵 업데이트: ${oldNumber} -> ${newNumber}`);
                }
                // 업데이트된 주석 추가
                updatedAnnotations.push(annotation);
            }
        });
        // UI에 주석 삭제 알림
        figma.ui.postMessage({
            type: "ANNOTATION_DELETED",
            id: annotationId,
        });
        // 변경된 주석들에 대한 정보도 UI에 전송
        updatedAnnotations.forEach((annotation) => {
            figma.ui.postMessage({
                type: "ANNOTATION_UPDATED",
                annotation: annotation,
            });
        });
    });
}
// 주석 업데이트 함수
function updateAnnotation(updatedAnnotation) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 폰트 로드 - 텍스트 변경 전 필요
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            // 주석 정보 업데이트
            (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.updateAnnotation)(updatedAnnotation);
            // 주석 그룹 프레임 찾기
            const groupFrame = figma.getNodeById(updatedAnnotation.groupFrameId);
            if (groupFrame) {
                // 텍스트 컨테이너 찾기
                const textContainer = groupFrame.findChild((n) => n.type === "FRAME" && n.name === "Text Container");
                if (textContainer) {
                    // 텍스트 컨테이너 내의 텍스트 노드 찾기
                    const textNode = textContainer.findChild((n) => n.type === "TEXT");
                    // 텍스트 노드를 찾았다면 텍스트 내용 업데이트
                    if (textNode) {
                        textNode.characters = updatedAnnotation.description;
                        // 텍스트 내용이 업데이트된 후, 텍스트를 기반으로 그룹 프레임 크기 조정
                        // 텍스트 노드의 높이에 패딩 값을 고려하여 그룹 프레임 높이 계산
                        const paddingVertical = groupFrame.paddingTop + groupFrame.paddingBottom;
                        const numberWidth = 24; // 번호 텍스트 너비
                        const itemSpacing = groupFrame.itemSpacing || 12;
                        const textWidth = 300 - paddingVertical - numberWidth - itemSpacing - 16; // 여유 공간 제외
                        // 텍스트 너비 설정
                        textNode.resize(textWidth, textNode.height);
                        // 텍스트 자동 리사이즈가 적용될 시간을 주기 위해 약간의 지연
                        setTimeout(() => {
                            // 텍스트 높이에 맞춰 그룹 프레임 높이 조정
                            const newHeight = textNode.height + paddingVertical;
                            groupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px 유지
                        }, 50);
                    }
                    else {
                        console.warn("텍스트 컨테이너에서 텍스트 노드를 찾을 수 없음");
                    }
                }
                else {
                    // 이전 구조의 경우 직접 텍스트 노드 찾기
                    const textNode = groupFrame.findChild((n) => n.type === "TEXT" && n.fontSize !== 16 // 번호 텍스트는 16px, 설명 텍스트는 아님
                    );
                    if (textNode) {
                        textNode.characters = updatedAnnotation.description;
                        // 이전 구조에서도 텍스트 기반 높이 조정
                        const paddingVertical = groupFrame.paddingTop + groupFrame.paddingBottom;
                        // 텍스트 자동 리사이즈가 적용될 시간을 주기 위해 약간의 지연
                        setTimeout(() => {
                            // 텍스트 높이에 맞춰 그룹 프레임 높이 조정
                            const newHeight = textNode.height + paddingVertical;
                            groupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px 유지
                        }, 50);
                    }
                    else {
                        console.warn("주석 그룹 프레임에서 텍스트 노드를 찾을 수 없음");
                    }
                }
            }
            else {
                console.warn(`주석 그룹 프레임을 찾을 수 없음: ${updatedAnnotation.groupFrameId}`);
            }
            // 업데이트된 주석 정보를 UI에 알림
            figma.ui.postMessage({
                type: "ANNOTATION_UPDATED",
                annotation: updatedAnnotation,
            });
            console.log(`주석 ID ${updatedAnnotation.id} 업데이트 완료`, updatedAnnotation);
        }
        catch (error) {
            console.error(`주석 업데이트 중 오류 발생:`, error);
        }
    });
}
// 도큐먼트에서 기존 주석 정보 가져오기
function scanDocumentForAnnotations() {
    // 프레임별 주석 번호 맵
    let frameMaxAnnotationNumbers = {};
    // 모든 페이지를 대상으로 주석 스캔
    function scanAllPages() {
        // 기존 주석 데이터 초기화
        (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.clearAnnotations)();
        // 모든 페이지를 순회하며 스캔
        figma.root.children.forEach((page) => {
            scanPage(page);
        });
        console.log(`전체 ${figma.root.children.length}개 페이지에서 ${_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.length}개 주석 발견`);
    }
    // 페이지 내 주석 스캔
    function scanPage(page) {
        console.log(`페이지 '${page.name}' 스캔 중...`);
        // 페이지의 모든 노드 스캔
        function scanNode(node) {
            // 부모 주석 프레임이면 처리 (예: "프레임이름 Annotations")
            if (node.type === "FRAME" && node.name.includes("Annotations")) {
                // 주석 그룹 이름에서 원본 프레임 이름 추출
                const frameName = node.name.replace(" Annotations", "");
                // 원본 프레임 찾기 시도
                let targetFrameId = "";
                page.findAll((n) => {
                    if (n.type === "FRAME" && n.name === frameName) {
                        targetFrameId = n.id;
                        return true;
                    }
                    return false;
                });
                // 프레임 ID를 찾은 경우에만 매핑
                if (targetFrameId) {
                    // 주석 그룹을 관리 맵에 추가 (원본 프레임 ID로 매핑)
                    _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[targetFrameId] = node;
                    // 해당 프레임에 대한 최대 주석 번호 초기화
                    if (!frameMaxAnnotationNumbers[targetFrameId]) {
                        frameMaxAnnotationNumbers[targetFrameId] = 0;
                    }
                }
                // 자식 노드에서 주석 그룹 찾기 (새로운 구조 지원)
                node.children.forEach((child) => {
                    // Description 텍스트 헤더는 건너뛰기
                    if (child.type === "TEXT" && child.characters === "Description") {
                        return;
                    }
                    if (child.type === "FRAME" &&
                        child.name.includes("Annotation Group ")) {
                        // 주석 번호 추출
                        const numberMatch = child.name.match(/Annotation Group (\d+)/);
                        if (numberMatch && targetFrameId) {
                            const annotationNumber = parseInt(numberMatch[1]);
                            // 해당 프레임의 최대 주석 번호 업데이트
                            if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
                                frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
                            }
                            // 주석 설명 추출 (새 구조 - 텍스트 컨테이너 내부의 텍스트 노드)
                            let description = "";
                            // 텍스트 컨테이너 찾기
                            const textContainer = child.findChild((n) => n.type === "FRAME" && n.name === "Text Container");
                            if (textContainer) {
                                // 텍스트 컨테이너 내의 텍스트 노드 찾기
                                const textNode = textContainer.findChild((n) => n.type === "TEXT");
                                if (textNode) {
                                    description = textNode.characters;
                                }
                            }
                            else {
                                // 이전 구조의 직접 텍스트 노드 지원
                                child.children.forEach((node) => {
                                    if (node.type === "TEXT") {
                                        description = node.characters;
                                    }
                                });
                            }
                            // annotations 배열에 주석 추가
                            if (description) {
                                (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.addAnnotation)({
                                    id: Date.now() + "-" + annotationNumber,
                                    number: annotationNumber,
                                    description: description,
                                    frameId: targetFrameId,
                                    frameName: frameName,
                                    pageName: page.name,
                                    groupFrameId: child.id,
                                    settings: {
                                        color: "#6E56CF",
                                        fontSize: "small",
                                        cardWidth: "small",
                                    },
                                });
                            }
                        }
                    }
                });
                return; // 부모 주석 프레임은 처리했으므로 여기서 반환
            }
            // 기존 구조 지원 (직접적인 주석 항목인 경우 - 이전 버전과의 호환성 유지)
            if (node.type === "FRAME" && node.name.includes("Annotation ")) {
                // 주석이 속한 프레임 찾기 (부모가 프레임인 경우)
                if (node.parent && node.parent.type === "FRAME") {
                    const parentFrame = node.parent;
                    let targetFrameId = "";
                    let frameName = "";
                    // 부모 프레임이 Annotations 그룹인지 확인
                    if (parentFrame.name.includes("Annotations")) {
                        // 원본 프레임 이름 추출
                        frameName = parentFrame.name.replace(" Annotations", "");
                        // 원본 프레임 찾기
                        page.findAll((n) => {
                            if (n.type === "FRAME" && n.name === frameName) {
                                targetFrameId = n.id;
                                return true;
                            }
                            return false;
                        });
                    }
                    if (targetFrameId) {
                        // 주석 번호 추출
                        const numberMatch = node.name.match(/Annotation (\d+)/);
                        if (numberMatch) {
                            const annotationNumber = parseInt(numberMatch[1]);
                            // 해당 프레임의 최대 주석 번호 업데이트
                            if (!frameMaxAnnotationNumbers[targetFrameId]) {
                                frameMaxAnnotationNumbers[targetFrameId] = 0;
                            }
                            if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
                                frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
                            }
                            // 주석 제목과 설명 추출
                            let description = "";
                            node.children.forEach((annotationItem) => {
                                if (annotationItem.type === "TEXT") {
                                    if (annotationItem.name === "description") {
                                        description = annotationItem.characters;
                                    }
                                }
                            });
                            // annotations 배열에 주석 추가
                            if (description) {
                                (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.addAnnotation)({
                                    id: Date.now() + "-" + annotationNumber,
                                    number: annotationNumber,
                                    description: description,
                                    frameId: targetFrameId,
                                    frameName: frameName,
                                    pageName: page.name,
                                    groupFrameId: node.id,
                                    settings: {
                                        color: "#6E56CF",
                                        fontSize: "small",
                                        cardWidth: "small",
                                    },
                                });
                            }
                        }
                    }
                }
            }
            // 뱃지인지 확인 (현재 페이지에 직접 추가된 뱃지)
            if (node.type === "FRAME" && node.name.startsWith("Badge ")) {
                const numberMatch = node.name.match(/Badge (\d+)/);
                if (numberMatch) {
                    const badgeNumber = parseInt(numberMatch[1]);
                    // 위치 기반으로 가장 가까운 프레임 찾기
                    let closestFrame = null;
                    let minDistance = Infinity;
                    page.findAll((n) => {
                        if (n.type === "FRAME" &&
                            !n.name.includes("Annotations") &&
                            !n.name.startsWith("Badge")) {
                            // 뱃지와 프레임 간의 거리 계산
                            const distance = Math.sqrt(Math.pow(node.x - n.x, 2) + Math.pow(node.y - n.y, 2));
                            // 가장 가까운 프레임 업데이트
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestFrame = n;
                            }
                            return false;
                        }
                        return false;
                    });
                    // 가장 가까운 프레임이 있고, 거리가 충분히 가까우면 매핑
                    if (closestFrame && minDistance < 100) {
                        // 거리 임계값은 조정 가능
                        const frameId = closestFrame.id;
                        if (!_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId]) {
                            _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId] = {};
                        }
                        _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][badgeNumber] = node;
                        // 프레임별 주석 번호 카운터 초기화
                        if (!frameMaxAnnotationNumbers[frameId]) {
                            frameMaxAnnotationNumbers[frameId] = 0;
                        }
                        // 최대 주석 번호 업데이트
                        if (badgeNumber > frameMaxAnnotationNumbers[frameId]) {
                            frameMaxAnnotationNumbers[frameId] = badgeNumber;
                        }
                    }
                }
            }
            // 재귀적으로 자식 노드 스캔
            if ("children" in node) {
                node.children.forEach(scanNode);
            }
        }
        // 페이지의 모든 노드 스캔 시작
        scanNode(page);
    }
    // 모든 페이지 스캔 시작
    scanAllPages();
}
// 주석 재정렬 함수
function reorderAnnotations(updatedAnnotations, frameId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // 폰트 로드
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            console.log(`재정렬 시작: ${updatedAnnotations.length}개 주석`);
            // 모든 주석 업데이트
            for (const annotation of updatedAnnotations) {
                // 기존 모델 데이터 업데이트
                (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.updateAnnotation)(annotation);
                // 주석 그룹 프레임 업데이트
                const annotationGroupFrame = figma.getNodeById(annotation.groupFrameId);
                if (annotationGroupFrame) {
                    // 그룹 프레임 이름 업데이트
                    annotationGroupFrame.name = `Annotation Group ${annotation.number}`;
                    // 그룹 프레임 안의 번호 텍스트 업데이트
                    const numberText = annotationGroupFrame.findChild((n) => n.type === "TEXT" &&
                        n.fontSize === 16 &&
                        !n.name.includes("Container"));
                    if (numberText) {
                        numberText.characters = annotation.number.toString();
                        console.log(`그룹 프레임 내 번호 텍스트 변경: ${annotation.number}`);
                    }
                }
                // 독립 뱃지 프레임 찾기
                const badgeFrame = figma.currentPage.findChild((n) => n.type === "FRAME" && n.name === `Badge ${annotation.number}`);
                if (badgeFrame) {
                    // 뱃지 텍스트 업데이트
                    const badgeText = badgeFrame.findChild((n) => n.type === "TEXT" && n.name === "BadgeText");
                    if (badgeText) {
                        badgeText.characters = annotation.number.toString();
                        console.log(`뱃지 텍스트 변경: ${annotation.number}`);
                    }
                }
                // 프레임 위에 있는 뱃지 업데이트
                if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId] && _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][annotation.number]) {
                    const frameBadge = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][annotation.number];
                    // 뱃지 내부 텍스트 찾기 및 업데이트
                    const badgeText = frameBadge.findChild((n) => n.type === "TEXT" && n.name === "BadgeText");
                    if (badgeText) {
                        badgeText.characters = annotation.number.toString();
                        console.log(`프레임 위 뱃지 텍스트 변경: ${annotation.number}`);
                    }
                }
            }
            // UI에 업데이트된 주석 전체 전송
            figma.ui.postMessage({
                type: "ANNOTATIONS_LOADED",
                annotations: _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations, // getAllAnnotations 함수 대신 annotations 배열 직접 사용
            });
            console.log("주석 재정렬 완료");
        }
        catch (error) {
            console.error("주석 재정렬 중 오류 발생:", error);
        }
    });
}


/***/ }),

/***/ "./src/services/badge.service.ts":
/*!***************************************!*\
  !*** ./src/services/badge.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBadgeOnFrame: () => (/* binding */ createBadgeOnFrame),
/* harmony export */   deleteBadgeOnFrame: () => (/* binding */ deleteBadgeOnFrame)
/* harmony export */ });
/* harmony import */ var _utils_color_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/color.util */ "./src/utils/color.util.ts");
/* harmony import */ var _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/annotation.model */ "./src/models/annotation.model.ts");


// 프레임에 뱃지 추가 함수 - 항상 최상위 프레임을 기준으로 생성
function createBadgeOnFrame(frameNode, annotationNumber, color) {
    // 최상위 프레임 찾기
    let rootFrameNode = frameNode;
    let currentNode = frameNode;
    // 부모 체인을 끝까지 올라가며 가장 상위의 프레임 찾기
    while (currentNode.parent) {
        if (currentNode.parent.type === "FRAME") {
            rootFrameNode = currentNode.parent;
        }
        currentNode = currentNode.parent;
    }
    // 뱃지 컨테이너 생성
    const badgeContainer = figma.createFrame();
    badgeContainer.name = `Badge ${annotationNumber}`;
    badgeContainer.layoutMode = "NONE";
    badgeContainer.resize(24, 24);
    badgeContainer.fills = [];
    // 선택된 노드의 절대 위치를 계산
    const selectedNode = figma.currentPage.selection[0];
    let nodeX = 0;
    let nodeY = 0;
    if (selectedNode) {
        // 선택된 노드의 절대 위치 계산
        nodeX = selectedNode.absoluteTransform[0][2];
        nodeY = selectedNode.absoluteTransform[1][2];
        // 최상위 프레임 기준으로 상대 위치 계산
        const rootAbsoluteX = rootFrameNode.absoluteTransform[0][2];
        const rootAbsoluteY = rootFrameNode.absoluteTransform[1][2];
        // 뱃지 위치 설정 (선택된 레이어의 위치에 맞게 조정)
        badgeContainer.x = nodeX - rootAbsoluteX + 10;
        badgeContainer.y = nodeY - rootAbsoluteY + 10;
    }
    else {
        // selectedNode가 없는 경우 프레임의 좌상단에 배치
        badgeContainer.x = 10;
        badgeContainer.y = 10;
    }
    // 뱃지 원형 배경 생성
    const badgeCircle = figma.createEllipse();
    badgeCircle.name = `BadgeCircle`;
    badgeCircle.resize(24, 24);
    // 색상 설정 적용
    const colorValues = (0,_utils_color_util__WEBPACK_IMPORTED_MODULE_0__.hexToRgb)(color);
    badgeCircle.fills = [
        {
            type: "SOLID",
            color: {
                r: colorValues.r / 255,
                g: colorValues.g / 255,
                b: colorValues.b / 255,
            },
        },
    ];
    // 뱃지 텍스트 생성
    const badgeText = figma.createText();
    badgeText.characters = annotationNumber.toString();
    badgeText.fontSize = 12;
    badgeText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
    badgeText.textAlignHorizontal = "CENTER";
    // 뱃지 컨테이너에 원형과 텍스트 추가
    badgeContainer.appendChild(badgeCircle);
    badgeContainer.appendChild(badgeText);
    // 원과 텍스트의 위치 설정
    badgeCircle.x = 0;
    badgeCircle.y = 0;
    // 숫자에 따라 위치 조정
    if (annotationNumber < 10) {
        badgeText.x = 8.5;
        badgeText.y = 6;
    }
    else if (annotationNumber < 100) {
        badgeText.x = 4.5;
        badgeText.y = 6;
    }
    else {
        badgeText.fontSize = 10;
        badgeText.x = 2;
        badgeText.y = 7;
    }
    // 최상위 프레임에 뱃지 추가
    rootFrameNode.appendChild(badgeContainer);
    // 프레임에 있는 다른 뱃지들의 위치 조정
    const frameId = rootFrameNode.id; // 최상위 프레임 ID 사용
    if (!_models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId]) {
        _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId] = {};
    }
    // 이미 존재하는 뱃지 개수 확인하고 위치 조정
    const badgeCount = Object.keys(_models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId]).length;
    if (badgeCount > 0) {
        if (selectedNode) {
            // 선택된 노드 기준으로 위치 계산
            const rootAbsoluteX = rootFrameNode.absoluteTransform[0][2];
            const nodeX = selectedNode.absoluteTransform[0][2];
            // 기존 뱃지 옆에 간격을 두고 배치
            badgeContainer.x = nodeX - rootAbsoluteX + 10 + badgeCount * 28;
        }
        else {
            badgeContainer.x = 10 + badgeCount * 28;
        }
    }
    // 뱃지 맵에 저장 (최상위 프레임 ID 사용)
    _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId][annotationNumber] = badgeContainer;
    return badgeContainer;
}
function deleteBadgeOnFrame(frameNode, annotationNumber) {
    const frameId = frameNode.id;
    // 프레임에 해당 뱃지가 있는지 확인
    if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId] && _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId][annotationNumber]) {
        const badgeContainer = _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId][annotationNumber];
        // 뱃지 존재 여부 확인 (이미 삭제됐을 수도 있음)
        const isNodeInDocument = figma.getNodeById(badgeContainer.id);
        if (isNodeInDocument) {
            // 뱃지 삭제
            badgeContainer.remove();
            console.log(`프레임 ${frameNode.name}의 뱃지 ${annotationNumber} 삭제 완료`);
        }
        else {
            console.log(`프레임 ${frameNode.name}의 뱃지 ${annotationNumber}는 이미 삭제됨`);
        }
        // 뱃지 맵에서 삭제
        delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId][annotationNumber];
        // 프레임에 더 이상 뱃지가 없으면 맵에서 프레임 ID 삭제
        if (Object.keys(_models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId]).length === 0) {
            delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId];
        }
        return true;
    }
    // 현재 프레임의 모든 자식 노드에서 뱃지 프레임 찾기 시도
    const badgeNode = frameNode.findChild((n) => n.type === "FRAME" && n.name === `Badge ${annotationNumber}`);
    if (badgeNode) {
        // 뱃지 삭제
        badgeNode.remove();
        // 프레임 뱃지 맵에 없다면 추가
        if (!_models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId]) {
            _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId] = {};
        }
        // 뱃지 맵에서 삭제 (이미 맵에 등록된 경우에 대비)
        delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_1__.frameBadges[frameId][annotationNumber];
        console.log(`프레임 내부 검색으로 찾은 뱃지 ${annotationNumber} 삭제 완료`);
        return true;
    }
    return false;
}


/***/ }),

/***/ "./src/services/document.service.ts":
/*!******************************************!*\
  !*** ./src/services/document.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleNodeRemoval: () => (/* binding */ handleNodeRemoval)
/* harmony export */ });
/* harmony import */ var _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/annotation.model */ "./src/models/annotation.model.ts");
/* harmony import */ var _frame_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frame.service */ "./src/services/frame.service.ts");


// 노드 삭제 이벤트 감지 함수
function handleNodeRemoval(event) {
    // 문서가 변경되었을 때만 처리
    if (!event.documentChanges)
        return;
    let dataChanged = false;
    // 문서 변경 내용 중 삭제된 노드가 있는지 확인
    event.documentChanges.forEach((change) => {
        if (change.type === "DELETE" && change.node) {
            const deletedNode = change.node;
            const deletedNodeId = deletedNode.id;
            // 삭제된 노드 정보 가져오기
            // RemovedNode는 제한된 정보만 있으므로, id를 기반으로 작업해야 함
            // 1. 삭제된 노드의 ID가 프레임 ID와 일치하는지 확인
            // 프레임에 대한 주석이 있는지 확인
            const annotationsToRemove = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.filter((a) => a.frameId === deletedNodeId);
            if (annotationsToRemove.length > 0) {
                // 주석 삭제
                (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.removeAnnotationsByFrameId)(deletedNodeId);
                dataChanged = true;
                console.log(`프레임 ID ${deletedNodeId} 관련 주석 ${annotationsToRemove.length}개 삭제됨`);
                // 프레임별 주석 카운터에서도 제거
                if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameAnnotationCounters[deletedNodeId]) {
                    delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameAnnotationCounters[deletedNodeId];
                }
            }
            // 주석 그룹 맵에서 삭제
            if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[deletedNodeId]) {
                delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[deletedNodeId];
                dataChanged = true;
            }
            // 뱃지 맵에서 삭제
            if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[deletedNodeId]) {
                delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[deletedNodeId];
                dataChanged = true;
            }
            // 2. 주석 그룹 맵에서 ID가 일치하는 노드가 있는지 확인
            Object.keys(_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups).forEach((frameId) => {
                var _a;
                if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[frameId].id === deletedNodeId) {
                    // 해당 프레임 관련 주석 삭제
                    const frameName = (_a = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.find((a) => a.frameId === frameId)) === null || _a === void 0 ? void 0 : _a.frameName;
                    if (frameName) {
                        (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.removeAnnotationsByFrameId)(frameId);
                        dataChanged = true;
                        console.log(`프레임 '${frameName}'에 대한 주석 그룹이 삭제됨`);
                    }
                    delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[frameId];
                    dataChanged = true;
                }
            });
            // 3. 주석 번호로 매핑된 뱃지가 있는지 확인
            for (const frameId in _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges) {
                for (const badgeNumber in _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId]) {
                    if (_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][badgeNumber].id === deletedNodeId) {
                        // 해당 뱃지 번호를 가진 주석이 있는지 확인하고 삭제
                        const annotationNumber = parseInt(badgeNumber);
                        const annotationToRemove = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.find((a) => a.number === annotationNumber);
                        if (annotationToRemove) {
                            // 주석 배열에서 삭제
                            (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.removeAnnotationsByNumber)(annotationNumber);
                            dataChanged = true;
                            console.log(`뱃지 번호 ${annotationNumber}에 해당하는 주석 삭제됨`);
                        }
                        // 뱃지 맵에서 삭제
                        delete _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.frameBadges[frameId][badgeNumber];
                        dataChanged = true;
                    }
                }
            }
        }
    });
    // 데이터가 변경되었으면 UI 업데이트
    if (dataChanged) {
        // 모든 주석 다시 전송
        figma.ui.postMessage({
            type: "ALL_ANNOTATIONS_LOADED",
            annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
        });
        // 현재 선택된 프레임이 있으면 해당 프레임의 주석도 업데이트
        const { selected, frameId, frameName, parentFrameId, parentFrameName } = (0,_frame_service__WEBPACK_IMPORTED_MODULE_1__.checkSelectedFrame)();
        if (selected && frameId) {
            const targetFrameId = parentFrameId || frameId;
            const frameAnnotations = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotations.filter((a) => a.frameId === targetFrameId);
            figma.ui.postMessage({
                type: "FRAME_SELECTED",
                frameId: targetFrameId,
                frameName,
                annotations: frameAnnotations,
                fileTitle: figma.root.name,
                pageName: figma.currentPage.name,
                parentFrameName: parentFrameName || frameName,
            });
        }
    }
}


/***/ }),

/***/ "./src/services/frame.service.ts":
/*!***************************************!*\
  !*** ./src/services/frame.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSelectedFrame: () => (/* binding */ checkSelectedFrame),
/* harmony export */   scrollToFrame: () => (/* binding */ scrollToFrame)
/* harmony export */ });
// 현재 선택된 프레임이 있는지 확인하고, 최상위 프레임 정보도 반환
function checkSelectedFrame() {
    const selection = figma.currentPage.selection;
    if (selection.length !== 1) {
        return { selected: false };
    }
    const node = selection[0];
    let frameNode = null;
    let rootFrameNode = null;
    // 선택된 노드가 직접 프레임인 경우
    if (node.type === "FRAME") {
        frameNode = node;
    }
    // 프레임이 아닌 다른 레이어를 선택한 경우 부모 프레임 찾기
    else {
        // 부모 노드 체인을 따라가면서 가장 가까운 프레임 찾기
        let parent = node.parent;
        while (parent) {
            if (parent.type === "FRAME") {
                frameNode = parent;
                break;
            }
            parent = parent.parent;
        }
        // 프레임을 찾지 못한 경우
        if (!frameNode) {
            return { selected: false, selectedNode: node };
        }
    }
    // 찾은 프레임의 부모 프레임 찾기
    let parentFrame = null;
    // 부모 노드가 프레임인지 확인
    if (frameNode.parent && frameNode.parent.type === "FRAME") {
        parentFrame = frameNode.parent;
    }
    // 최상위 프레임 찾기 - 부모가 페이지인 프레임
    rootFrameNode = frameNode;
    let currentNode = frameNode;
    // 부모 체인을 따라 올라가며 최상위 프레임 찾기
    while (currentNode.parent && currentNode.parent.type === "FRAME") {
        currentNode = currentNode.parent;
        rootFrameNode = currentNode;
    }
    return {
        selected: true,
        frameNode: frameNode,
        frameId: frameNode.id,
        frameName: frameNode.name,
        parentFrameNode: parentFrame,
        parentFrameId: parentFrame === null || parentFrame === void 0 ? void 0 : parentFrame.id,
        parentFrameName: parentFrame === null || parentFrame === void 0 ? void 0 : parentFrame.name,
        selectedNode: node,
        rootFrameNode: rootFrameNode,
        rootFrameId: rootFrameNode === null || rootFrameNode === void 0 ? void 0 : rootFrameNode.id,
        rootFrameName: rootFrameNode === null || rootFrameNode === void 0 ? void 0 : rootFrameNode.name,
    };
}
// 특정 프레임으로 뷰포트 이동
function scrollToFrame(frameId) {
    try {
        const frame = figma.getNodeById(frameId);
        if (frame &&
            (frame.type === "FRAME" ||
                frame.type === "COMPONENT" ||
                frame.type === "INSTANCE")) {
            // 해당 프레임으로 뷰포트 이동
            figma.viewport.scrollAndZoomIntoView([frame]);
            // 해당 프레임 선택 (선택적)
            figma.currentPage.selection = [frame];
        }
    }
    catch (error) {
        console.error("Error scrolling to frame:", error);
    }
}


/***/ }),

/***/ "./src/utils/color.util.ts":
/*!*********************************!*\
  !*** ./src/utils/color.util.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)
/* harmony export */ });
// Hex 색상값을 RGB로 변환하는 함수
function hexToRgb(hex) {
    // #을 제거하고 6자리 색상 코드를 추출
    const cleanHex = hex.charAt(0) === "#" ? hex.substring(1) : hex;
    // RGB 값 추출
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return { r, g, b };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/annotation.model */ "./src/models/annotation.model.ts");
/* harmony import */ var _services_annotation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/annotation.service */ "./src/services/annotation.service.ts");
/* harmony import */ var _services_frame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/frame.service */ "./src/services/frame.service.ts");
/* harmony import */ var _services_document_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/document.service */ "./src/services/document.service.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 모델 및 서비스 불러오기




// 플러그인 UI 크기 설정
figma.showUI(__html__, {
    width: 800,
    height: 600,
    themeColors: true,
});
// 폰트 로드 (폰트 관련 오류 방지를 위해 미리 로드)
figma.loadFontAsync({ family: "Inter", style: "Regular" });
// 선택 변경 이벤트 리스너
figma.on("selectionchange", () => {
    const selectionInfo = (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.checkSelectedFrame)();
    if (selectionInfo.selected &&
        selectionInfo.frameId &&
        selectionInfo.frameName) {
        // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
        const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
        figma.ui.postMessage({
            type: "FRAME_SELECTED",
            frameId: targetFrameId,
            frameName: selectionInfo.frameName,
            annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
            parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName,
        });
    }
    else {
        // 선택이 없어도 모든 주석 데이터 전송
        figma.ui.postMessage({
            type: "NO_FRAME_SELECTED",
            annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
        });
    }
});
// UI로부터 메시지 수신
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (msg.type) {
        case "CREATE_ANNOTATION":
            yield (0,_services_annotation_service__WEBPACK_IMPORTED_MODULE_1__.createAnnotation)(msg.annotation, msg.settings);
            break;
        case "GET_SELECTED_FRAME":
            const selectionInfo = (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.checkSelectedFrame)();
            if (selectionInfo.selected &&
                selectionInfo.frameId &&
                selectionInfo.frameName) {
                // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
                const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
                figma.ui.postMessage({
                    type: "FRAME_SELECTED",
                    frameId: targetFrameId,
                    frameName: selectionInfo.frameName,
                    annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
                    fileTitle: figma.root.name,
                    pageName: figma.currentPage.name,
                    parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName,
                });
            }
            else {
                // 선택이 없어도 모든 주석 데이터 전송
                figma.ui.postMessage({
                    type: "NO_FRAME_SELECTED",
                    annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
                    fileTitle: figma.root.name,
                    pageName: figma.currentPage.name,
                });
            }
            break;
        case "DELETE_ANNOTATION":
            yield (0,_services_annotation_service__WEBPACK_IMPORTED_MODULE_1__.deleteAnnotation)(msg.id);
            break;
        case "UPDATE_ANNOTATION":
            yield (0,_services_annotation_service__WEBPACK_IMPORTED_MODULE_1__.updateAnnotation)(msg.annotation);
            break;
        case "REORDER_ANNOTATIONS":
            // 주석 재정렬 처리
            yield (0,_services_annotation_service__WEBPACK_IMPORTED_MODULE_1__.reorderAnnotations)(msg.annotations, msg.frameId);
            break;
        case "SCROLL_TO_FRAME":
            (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.scrollToFrame)(msg.frameId);
            break;
        case "SCROLL_TO_ANNOTATION_GROUP":
            // frameId에 해당하는 주석 그룹 프레임으로 뷰포트 이동
            const annotationGroupFrame = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[msg.frameId];
            if (annotationGroupFrame) {
                // 주석 그룹 프레임이 존재하면 해당 프레임으로 뷰포트 이동
                figma.viewport.scrollAndZoomIntoView([annotationGroupFrame]);
                // 선택적으로 해당 프레임 선택
                figma.currentPage.selection = [annotationGroupFrame];
            }
            else {
                // 주석 그룹 프레임이 없는 경우, 원본 프레임으로 이동
                (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.scrollToFrame)(msg.frameId);
            }
            break;
        case "SCROLL_TO_ANNOTATION":
            // 특정 주석 아이템으로 이동하는 기능
            const annotationFrame = _models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.annotationGroups[msg.frameId];
            if (annotationFrame) {
                // 주석 그룹 프레임 안에서 해당 번호의 주석 아이템 찾기
                const annotationItem = annotationFrame.findChild((n) => n.type === "FRAME" && n.name === `Annotation ${msg.number}`);
                if (annotationItem) {
                    // 찾은 주석 아이템으로 뷰포트 이동
                    figma.viewport.scrollAndZoomIntoView([annotationItem]);
                    // 해당 주석 아이템 선택
                    figma.currentPage.selection = [annotationItem];
                }
                else {
                    // 주석 아이템을 찾지 못한 경우, 그룹 프레임으로 이동
                    figma.viewport.scrollAndZoomIntoView([annotationFrame]);
                    figma.currentPage.selection = [annotationFrame];
                }
            }
            else {
                // 주석 그룹 프레임이 없는 경우, 원본 프레임으로 이동
                (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.scrollToFrame)(msg.frameId);
            }
            break;
    }
});
// 노드 삭제 이벤트 리스너 등록
figma.on("documentchange", _services_document_service__WEBPACK_IMPORTED_MODULE_3__.handleNodeRemoval);
// 초기화 함수
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        // 도큐먼트에서 직접 주석 정보 스캔
        (0,_services_annotation_service__WEBPACK_IMPORTED_MODULE_1__.scanDocumentForAnnotations)();
        // 항상 먼저 모든 주석 전송 (프레임 선택과 관계없이)
        figma.ui.postMessage({
            type: "ALL_ANNOTATIONS_LOADED",
            annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
        });
        // 선택된 프레임이 있는 경우, 해당 프레임 정보도 전송
        const { selected, frameId, frameName, parentFrameId, parentFrameName } = (0,_services_frame_service__WEBPACK_IMPORTED_MODULE_2__.checkSelectedFrame)();
        if (selected && frameId && frameName) {
            // 타겟 프레임 ID 결정 (부모가 있으면 부모, 없으면 현재 프레임)
            const targetFrameId = parentFrameId || frameId;
            figma.ui.postMessage({
                type: "FRAME_SELECTED",
                frameId: targetFrameId,
                frameName,
                annotations: (0,_models_annotation_model__WEBPACK_IMPORTED_MODULE_0__.getAllAnnotations)(),
                fileTitle: figma.root.name,
                pageName: figma.currentPage.name,
                parentFrameName: parentFrameName || frameName,
            });
        }
        else {
            figma.ui.postMessage({
                type: "NO_FRAME_SELECTED",
            });
        }
    });
}
// 플러그인 시작 시 초기화 함수 호출
initialize();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW9kZWxzL2Fubm90YXRpb24ubW9kZWwudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9zZXJ2aWNlcy9hbm5vdGF0aW9uLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9zZXJ2aWNlcy9iYWRnZS5zZXJ2aWNlLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvc2VydmljZXMvZG9jdW1lbnQuc2VydmljZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3NlcnZpY2VzL2ZyYW1lLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy91dGlscy9jb2xvci51dGlsLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8g7KO87ISdIOuNsOydtO2EsOulvCDsoIDsnqXtlZjripQg67Cw7Je0XG5leHBvcnQgbGV0IGFubm90YXRpb25zID0gW107XG4vLyDsoITsl60g7KO87ISdIOy5tOyatO2EsCDrjIDsi6Ag7ZSE66CI7J6E67OEIOyjvOyEnSDrsojtmLgg6rSA66asXG5leHBvcnQgbGV0IGZyYW1lQW5ub3RhdGlvbkNvdW50ZXJzID0ge307XG4vLyDtmITsnqwg7ISg7YOd65CcIO2UhOugiOyehCBJROyZgCDtlbTri7kg7ZSE66CI7J6E7J2YIOyjvOyEnSDqt7jro7nsnYQg7KCA7J6lXG5leHBvcnQgbGV0IGFubm90YXRpb25Hcm91cHMgPSB7fTtcbi8vIO2UhOugiOyehOyXkCDstpTqsIDrkJwg67GD7KeA66W8IOy2lOygge2VmOq4sCDsnITtlZwg66e1XG5leHBvcnQgbGV0IGZyYW1lQmFkZ2VzID0ge307XG4vLyDso7zshJ0g67Cw7Je0IOyXheuNsOydtO2KuCDtlajsiJhcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9uKHVwZGF0ZWRBbm5vdGF0aW9uKSB7XG4gICAgY29uc3QgaW5kZXggPSBhbm5vdGF0aW9ucy5maW5kSW5kZXgoKGEpID0+IGEuaWQgPT09IHVwZGF0ZWRBbm5vdGF0aW9uLmlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGFubm90YXRpb25zW2luZGV4XSA9IHVwZGF0ZWRBbm5vdGF0aW9uO1xuICAgIH1cbn1cbi8vIOyjvOyEnSDstpTqsIAg7ZWo7IiYXG5leHBvcnQgZnVuY3Rpb24gYWRkQW5ub3RhdGlvbihhbm5vdGF0aW9uKSB7XG4gICAgYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcbn1cbi8vIOyjvOyEnSDsoJzqsbAg7ZWo7IiYXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5ub3RhdGlvbihhbm5vdGF0aW9uSWQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZWQgPSBhbm5vdGF0aW9uc1tpbmRleF07XG4gICAgICAgIGFubm90YXRpb25zLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIHJldHVybiByZW1vdmVkO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLy8g7ZSE66CI7J6EIElE66GcIOyjvOyEnSDtlYTthLDrp4FcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbm5vdGF0aW9uc0J5RnJhbWVJZChmcmFtZUlkKSB7XG4gICAgcmV0dXJuIGFubm90YXRpb25zLmZpbHRlcigoYSkgPT4gYS5mcmFtZUlkID09PSBmcmFtZUlkKTtcbn1cbi8vIOyjvOyEnSDrqqjrkZAg6rCA7KC47Jik6riwXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsQW5ub3RhdGlvbnMoKSB7XG4gICAgcmV0dXJuIFsuLi5hbm5vdGF0aW9uc107XG59XG4vLyDso7zshJ0g7LSI6riw7ZmUXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbm5vdGF0aW9ucygpIHtcbiAgICBhbm5vdGF0aW9ucyA9IFtdO1xuICAgIGZyYW1lQW5ub3RhdGlvbkNvdW50ZXJzID0ge307XG4gICAgYW5ub3RhdGlvbkdyb3VwcyA9IHt9O1xuICAgIGZyYW1lQmFkZ2VzID0ge307XG59XG4vLyDtlITroIjsnoQgSUTroZwg7KO87ISdIO2VhO2EsOunge2VmOyXrCDsoJzqsbBcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uc0J5RnJhbWVJZChmcmFtZUlkKSB7XG4gICAgYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoKGEpID0+IGEuZnJhbWVJZCAhPT0gZnJhbWVJZCk7XG59XG4vLyDso7zshJ0g67KI7Zi466GcIOyjvOyEnSDtlYTthLDrp4HtlZjsl6wg7KCc6rGwXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5ub3RhdGlvbnNCeU51bWJlcihudW1iZXIpIHtcbiAgICBhbm5vdGF0aW9ucyA9IGFubm90YXRpb25zLmZpbHRlcigoYSkgPT4gYS5udW1iZXIgIT09IG51bWJlcik7XG59XG4vLyDso7zshJ0g67Cw7Je0IOyngeygkSDshKTsoJVcbmV4cG9ydCBmdW5jdGlvbiBzZXRBbm5vdGF0aW9ucyhuZXdBbm5vdGF0aW9ucykge1xuICAgIGFubm90YXRpb25zID0gWy4uLm5ld0Fubm90YXRpb25zXTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgYW5ub3RhdGlvbnMsIGFubm90YXRpb25Hcm91cHMsIGZyYW1lQmFkZ2VzLCBhZGRBbm5vdGF0aW9uLCByZW1vdmVBbm5vdGF0aW9uLCB1cGRhdGVBbm5vdGF0aW9uIGFzIHVwZGF0ZUFubm90YXRpb25Nb2RlbCwgY2xlYXJBbm5vdGF0aW9ucywgfSBmcm9tIFwiLi4vbW9kZWxzL2Fubm90YXRpb24ubW9kZWxcIjtcbmltcG9ydCB7IGNyZWF0ZUJhZGdlT25GcmFtZSwgZGVsZXRlQmFkZ2VPbkZyYW1lIH0gZnJvbSBcIi4vYmFkZ2Uuc2VydmljZVwiO1xuLy8g7KO87ISdIOyDneyEsSDtlajsiJhcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uKGFubm90YXRpb25EYXRhLCBzZXR0aW5ncykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkTm9kZSA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgICAgaWYgKCFzZWxlY3RlZE5vZGUpIHtcbiAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIlBsZWFzZSBzZWxlY3QgYSBmcmFtZSBmaXJzdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBzZWxlY3RlZE5vZGU7XG4gICAgICAgIGxldCByb290RnJhbWVOb2RlID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICByb290RnJhbWVOb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyb290RnJhbWVOb2RlKSB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJObyBwYXJlbnQgZnJhbWUgZm91bmRcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g64uk7J2MIOyjvOyEnSDrsojtmLgg6rOE7IKwXG4gICAgICAgIGNvbnN0IG5leHRBbm5vdGF0aW9uTnVtYmVyID0gYW5ub3RhdGlvbnMubGVuZ3RoICsgMTtcbiAgICAgICAgLy8g7IOI66Gc7Jq0IOyjvOyEnSDqsJ3ssrQg7IOd7ISxXG4gICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBudW1iZXI6IG5leHRBbm5vdGF0aW9uTnVtYmVyLFxuICAgICAgICAgICAgZnJhbWVJZDogcm9vdEZyYW1lTm9kZS5pZCxcbiAgICAgICAgICAgIGZyYW1lTmFtZTogcm9vdEZyYW1lTm9kZS5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYW5ub3RhdGlvbkRhdGEuZGVzY3JpcHRpb24gfHwgYEFubm90YXRpb24gJHtuZXh0QW5ub3RhdGlvbk51bWJlcn1gLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzLFxuICAgICAgICB9O1xuICAgICAgICAvLyDrtoDrqqgg7KO87ISdIO2UhOugiOyehCDtmZXsnbgg65iQ64qUIOyDneyEsVxuICAgICAgICBsZXQgcGFyZW50QW5ub3RhdGlvbkZyYW1lID0gbnVsbDtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lTmFtZSA9IGAke3Jvb3RGcmFtZU5vZGUubmFtZX0gQW5ub3RhdGlvbnNgO1xuICAgICAgICAvLyDsnbTrr7gg7KG07J6s7ZWY64qUIOu2gOuqqCDso7zshJ0g7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBleGlzdGluZ1BhcmVudEZyYW1lID0gcm9vdEZyYW1lTm9kZS5jaGlsZHJlbi5maW5kKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLm5hbWUgPT09IGFubm90YXRpb25GcmFtZU5hbWUpO1xuICAgICAgICBpZiAoZXhpc3RpbmdQYXJlbnRGcmFtZSkge1xuICAgICAgICAgICAgLy8g6riw7KG0IOu2gOuqqCDtlITroIjsnoQg7IKs7JqpXG4gICAgICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUgPSBleGlzdGluZ1BhcmVudEZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g7IOI66Gc7Jq0IOu2gOuqqCDso7zshJ0g7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICAgICAgcGFyZW50QW5ub3RhdGlvbkZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS5uYW1lID0gYW5ub3RhdGlvbkZyYW1lTmFtZTtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgcGFyZW50QW5ub3RhdGlvbkZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiTUlOXCI7XG4gICAgICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJNSU5cIjtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS5pdGVtU3BhY2luZyA9IDU7XG4gICAgICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS5zdHJva2VzID0gW107XG4gICAgICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUucmVzaXplKDMyMCwgMjIwKTtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS54ID0gcm9vdEZyYW1lTm9kZS53aWR0aCAtIHBhcmVudEFubm90YXRpb25GcmFtZS53aWR0aDtcbiAgICAgICAgICAgIHBhcmVudEFubm90YXRpb25GcmFtZS55ID0gcm9vdEZyYW1lTm9kZS55ICsgcGFyZW50QW5ub3RhdGlvbkZyYW1lLmhlaWdodDtcbiAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uIO2FjeyKpO2KuCDtl6TrjZQg7LaU6rCAXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkhlYWRlciA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25IZWFkZXIuZm9udE5hbWUgPSB7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSGVhZGVyLmNoYXJhY3RlcnMgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbkhlYWRlci5mb250U2l6ZSA9IDE2O1xuICAgICAgICAgICAgZGVzY3JpcHRpb25IZWFkZXIuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uSGVhZGVyLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICAgICAgLy8g7Zek642U66W8IOu2gOuqqCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25IZWFkZXIpO1xuICAgICAgICAgICAgLy8g67aA66qoIOyjvOyEnSDtlITroIjsnoTsnYQg7LWc7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIHJvb3RGcmFtZU5vZGUuYXBwZW5kQ2hpbGQocGFyZW50QW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5uYW1lID0gYEFubm90YXRpb24gR3JvdXAgJHtuZXh0QW5ub3RhdGlvbk51bWJlcn1gO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiTUlOXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLml0ZW1TcGFjaW5nID0gMTI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0ID0gMTY7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxNjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc3Ryb2tlcyA9IFtdO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoMzAwLCA1MCk7IC8vIOy1nOyGjCDrhpLsnbTroZwg7Iuc7J6RXG4gICAgICAgIC8vIOuyiO2YuCDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCBudW1iZXJUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgbnVtYmVyVGV4dC5mb250TmFtZSA9IHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9O1xuICAgICAgICBudW1iZXJUZXh0LmNoYXJhY3RlcnMgPSBuZXh0QW5ub3RhdGlvbk51bWJlci50b1N0cmluZygpO1xuICAgICAgICBudW1iZXJUZXh0LmZvbnRTaXplID0gMTY7XG4gICAgICAgIG51bWJlclRleHQuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAuNDMsIGc6IDAuMzMsIGI6IDAuODEgfSB9XTsgLy8gIzZFNTZDRlxuICAgICAgICBudW1iZXJUZXh0LnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgICAgICBudW1iZXJUZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjtcbiAgICAgICAgbnVtYmVyVGV4dC5yZXNpemUoMjQsIDI0KTtcbiAgICAgICAgLy8g67KI7Zi4IOuFuOuTnOulvCDqt7jro7kg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChudW1iZXJUZXh0KTtcbiAgICAgICAgLy8g7KO87ISdIO2FjeyKpO2KuOulvCDri7TsnYQg7Luo7YWM7J2064SIIOyDneyEsVxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5uYW1lID0gXCJUZXh0IENvbnRhaW5lclwiO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIHRleHRDb250YWluZXIucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJNSU5cIjtcbiAgICAgICAgdGV4dENvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIk1JTlwiO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLml0ZW1TcGFjaW5nID0gMDtcbiAgICAgICAgdGV4dENvbnRhaW5lci5maWxscyA9IFtdO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmxheW91dEdyb3cgPSAxO1xuICAgICAgICAvLyDso7zshJ0g7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvblRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC5jaGFyYWN0ZXJzID0gbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbjtcbiAgICAgICAgYW5ub3RhdGlvblRleHQuZm9udFNpemUgPSBzZXR0aW5ncy5mb250U2l6ZSA9PT0gXCJzbWFsbFwiID8gMTIgOiAxNDtcbiAgICAgICAgYW5ub3RhdGlvblRleHQuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgYW5ub3RhdGlvblRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJMRUZUXCI7XG4gICAgICAgIGFubm90YXRpb25UZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgYW5ub3RhdGlvblRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU0NBTEVcIiwgdmVydGljYWw6IFwiU0NBTEVcIiB9O1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAvLyDso7zshJ0g7YWN7Iqk7Yq466W8IOy7qO2FjOydtOuEiOyXkCDstpTqsIBcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChhbm5vdGF0aW9uVGV4dCk7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDsu6jthYzsnbTrhIjrpbwg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDquLjsnbTsl5Ag65Sw6528IO2UhOugiOyehCDrhpLsnbQg7KGw7KCVXG4gICAgICAgIGNvbnN0IHBhZGRpbmdWZXJ0aWNhbCA9IGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgKyBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nQm90dG9tO1xuICAgICAgICBjb25zdCB0ZXh0V2lkdGggPSAzMDAgLSBwYWRkaW5nVmVydGljYWwgLSAyNCAtIDEyIC0gMTY7IC8vIOyghOyytCDrhIjruYQgLSDtjKjrlKkgLSDrsojtmLgg64SI67mEIC0g6rCE6rKpIC0g7Jes7JygIOqzteqwhFxuICAgICAgICBhbm5vdGF0aW9uVGV4dC5yZXNpemUodGV4dFdpZHRoLCBhbm5vdGF0aW9uVGV4dC5oZWlnaHQpO1xuICAgICAgICAvLyDthY3siqTtirgg64aS7J207JeQIOunnuqyjCDqt7jro7kg7ZSE66CI7J6EIOuGkuydtCDsobDsoJVcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSBhbm5vdGF0aW9uVGV4dC5oZWlnaHQgKyBwYWRkaW5nVmVydGljYWw7XG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoMzAwLCBNYXRoLm1heCg1MCwgbmV3SGVpZ2h0KSk7IC8vIOy1nOyGjCDrhpLsnbQgNTBweFxuICAgICAgICB9LCA1MCk7XG4gICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7J2EIOu2gOuqqCDso7zshJ0g7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBwYXJlbnRBbm5vdGF0aW9uRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkdyb3VwRnJhbWUpO1xuICAgICAgICBuZXdBbm5vdGF0aW9uLmdyb3VwRnJhbWVJZCA9IGFubm90YXRpb25Hcm91cEZyYW1lLmlkO1xuICAgICAgICAvLyDrsYPsp4Ag7IOd7ISxXG4gICAgICAgIGNyZWF0ZUJhZGdlT25GcmFtZShzZWxlY3RlZE5vZGUsIG5leHRBbm5vdGF0aW9uTnVtYmVyLCBzZXR0aW5ncy5jb2xvcik7XG4gICAgICAgIC8vIOyjvOyEnSDrqqnroZ3sl5Ag7LaU6rCAXG4gICAgICAgIGFkZEFubm90YXRpb24obmV3QW5ub3RhdGlvbik7XG4gICAgICAgIC8vIFVJ7JeQIOyDiCDso7zshJ0g7IOd7ISxIOyVjOumvFxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIkFOTk9UQVRJT05fQ1JFQVRFRFwiLFxuICAgICAgICAgICAgYW5ub3RhdGlvbjogbmV3QW5ub3RhdGlvbixcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICBwYXJlbnRGcmFtZU5hbWU6IHJvb3RGcmFtZU5vZGUubmFtZSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyDso7zshJ0g7IKt7KCcIO2VqOyImFxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUFubm90YXRpb24oYW5ub3RhdGlvbklkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlZEFubm90YXRpb24gPSByZW1vdmVBbm5vdGF0aW9uKGFubm90YXRpb25JZCk7XG4gICAgICAgIGlmICghcmVtb3ZlZEFubm90YXRpb24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6EIOyCreygnFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQocmVtb3ZlZEFubm90YXRpb24uZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIC8vIOq3uOujuSDtlITroIjsnoTsnZgg67aA66qoKEFubm90YXRpb25zIO2UhOugiOyehCkg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRGcmFtZSA9IGdyb3VwRnJhbWUucGFyZW50O1xuICAgICAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDsgq3soJxcbiAgICAgICAgICAgIGdyb3VwRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICAvLyDrtoDrqqgg7ZSE66CI7J6E7JeQIOyekOyLneydtCAx6rCcIOydtO2VmChEZXNjcmlwdGlvbiDtl6TrjZTrp4wg7J6I7J2EIOuVjCnrqbQg67aA66qoIO2UhOugiOyehOuPhCDsgq3soJxcbiAgICAgICAgICAgIGlmIChwYXJlbnRGcmFtZSAmJiBwYXJlbnRGcmFtZS5jaGlsZHJlbi5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIHBhcmVudEZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOyCreygnO2VoCDso7zshJ3snZgg67GD7KeAIOyCreygnFxuICAgICAgICBjb25zdCBiYWRnZU5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQ2hpbGQoKG4pID0+IG4udHlwZSA9PT0gXCJGUkFNRVwiICYmIG4ubmFtZSA9PT0gYEJhZGdlICR7cmVtb3ZlZEFubm90YXRpb24ubnVtYmVyfWApO1xuICAgICAgICBpZiAoYmFkZ2VOb2RlKSB7XG4gICAgICAgICAgICBiYWRnZU5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g7ZSE66CI7J6EIOychOyXkCDsnojripQg67GD7KeAIOyCreygnFxuICAgICAgICBjb25zdCB0YXJnZXRGcmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIkZSQU1FXCIgJiYgbi5uYW1lID09PSByZW1vdmVkQW5ub3RhdGlvbi5mcmFtZU5hbWUpO1xuICAgICAgICBpZiAodGFyZ2V0RnJhbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZUJhZGdlT25GcmFtZSh0YXJnZXRGcmFtZSwgcmVtb3ZlZEFubm90YXRpb24ubnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIO2UhOugiOyehOydhCDssL7sp4Ag66q77ZWcIOqyveyasCwg7ZiE7J6sIO2OmOydtOyngOydmCDrqqjrk6Ag7ZSE66CI7J6E7JeQ7IScIO2VtOuLuSDrsYPsp4Ag7ZmV7J24XG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICFub2RlLm5hbWUuaW5jbHVkZXMoXCJBbm5vdGF0aW9uc1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAhbm9kZS5uYW1lLnN0YXJ0c1dpdGgoXCJCYWRnZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDtlbTri7kg7ZSE66CI7J6EIElE7JeQIOq0gOugqOuQnCDrsYPsp4DqsIAg7J6I64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVCYWRnZXNbbm9kZS5pZF0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQmFkZ2VzW25vZGUuaWRdW3JlbW92ZWRBbm5vdGF0aW9uLm51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhZGdlT25GcmFtZShub2RlLCByZW1vdmVkQW5ub3RhdGlvbi5udW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g64Ko7J2AIOyjvOyEneuTpOydmCDrsojtmLgg7J6s7KCV66CsXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ0Fubm90YXRpb25zID0gYW5ub3RhdGlvbnMuc29ydCgoYSwgYikgPT4gYS5udW1iZXIgLSBiLm51bWJlcik7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRBbm5vdGF0aW9ucyA9IFtdO1xuICAgICAgICAvLyDqsIEg7KO87ISd7J2YIOuyiO2YuOulvCAx67aA7YSwIOyInOywqOyggeycvOuhnCDsnqztlaDri7lcbiAgICAgICAgcmVtYWluaW5nQW5ub3RhdGlvbnMuZm9yRWFjaCgoYW5ub3RhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld051bWJlciA9IGluZGV4ICsgMTtcbiAgICAgICAgICAgIGNvbnN0IG9sZE51bWJlciA9IGFubm90YXRpb24ubnVtYmVyO1xuICAgICAgICAgICAgaWYgKG9sZE51bWJlciAhPT0gbmV3TnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOyjvOyEnSDrsojtmLgg67OA6rK9OiAke29sZE51bWJlcn0gLT4gJHtuZXdOdW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgLy8g7KO87ISdIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uLm51bWJlciA9IG5ld051bWJlcjtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb24uZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDsnbTrpoQg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBgQW5ub3RhdGlvbiBHcm91cCAke25ld051bWJlcn1gO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg7KO87ISdIOq3uOujuSDtlITroIjsnoQg7J2066aEIOuzgOqyvTogJHthbm5vdGF0aW9uR3JvdXBGcmFtZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6EIOyViOydmCDrsojtmLgg7YWN7Iqk7Yq4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJUZXh0ID0gYW5ub3RhdGlvbkdyb3VwRnJhbWUuZmluZENoaWxkKChuKSA9PiBuLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmZvbnRTaXplID09PSAxNiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIW4ubmFtZS5pbmNsdWRlcyhcIkNvbnRhaW5lclwiKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXJUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJUZXh0LmNoYXJhY3RlcnMgPSBuZXdOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDqt7jro7kg7ZSE66CI7J6EIOuCtCDrsojtmLgg7YWN7Iqk7Yq4IOuzgOqyvTogJHtvbGROdW1iZXJ9IC0+ICR7bmV3TnVtYmVyfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOq3uOujuSDtlITroIjsnoQg64K0IOuyiO2YuCDthY3siqTtirjrpbwg7LC+7J2EIOyImCDsl4bsnYxgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrj4Xrpr0g67GD7KeAIO2UhOugiOyehCDssL7quLAgKOydtOyghCDrsojtmLjroZwg7LC+7JWE7JW8IO2VqClcbiAgICAgICAgICAgICAgICBjb25zdCBiYWRnZUZyYW1lID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZENoaWxkKChuKSA9PiBuLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBuLm5hbWUgPT09IGBCYWRnZSAke29sZE51bWJlcn1gKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFkZ2VGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDrsYPsp4Ag7J2066aEIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBiYWRnZUZyYW1lLm5hbWUgPSBgQmFkZ2UgJHtuZXdOdW1iZXJ9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuxg+yngCDsnbTrpoQg67OA6rK9OiBCYWRnZSAke29sZE51bWJlcn0gLT4gQmFkZ2UgJHtuZXdOdW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuxg+yngCDthY3siqTtirgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhZGdlVGV4dCA9IGJhZGdlRnJhbWUuZmluZENoaWxkKChuKSA9PiBuLnR5cGUgPT09IFwiVEVYVFwiICYmIG4ubmFtZSA9PT0gXCJCYWRnZVRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiYWRnZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5jaGFyYWN0ZXJzID0gbmV3TnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg67GD7KeAIO2FjeyKpO2KuCDrs4Dqsr06ICR7b2xkTnVtYmVyfSAtPiAke25ld051bWJlcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuxg+yngOulvCDssL7snYQg7IiYIOyXhuydjDogQmFkZ2UgJHtvbGROdW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2UhOugiOyehCDsnITsl5Ag7J6I64qUIOuxg+yngCDsl4XrjbDsnbTtirggKGZyYW1lQmFkZ2VzIOuntSDsgqzsmqkpXG4gICAgICAgICAgICAgICAgY29uc3QgZnJhbWVJZCA9IGFubm90YXRpb24uZnJhbWVJZDtcbiAgICAgICAgICAgICAgICBpZiAoZnJhbWVCYWRnZXNbZnJhbWVJZF0gJiYgZnJhbWVCYWRnZXNbZnJhbWVJZF1bb2xkTnVtYmVyXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDrsYPsp4Ag7ZSE66CI7J6EIOywuOyhsCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVCYWRnZSA9IGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW29sZE51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgIC8vIOuxg+yngCDsnbTrpoQg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lQmFkZ2UubmFtZSA9IGBCYWRnZSAke25ld051bWJlcn1gO1xuICAgICAgICAgICAgICAgICAgICAvLyDrsYPsp4Ag64K067aAIO2FjeyKpO2KuCDssL7quLAg67CPIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWRnZVRleHQgPSBmcmFtZUJhZGdlLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIlRFWFRcIiAmJiBuLm5hbWUgPT09IFwiQmFkZ2VUZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuY2hhcmFjdGVycyA9IG5ld051bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2UhOugiOyehCDsnIQg67GD7KeAIO2FjeyKpO2KuCDrs4Dqsr06ICR7b2xkTnVtYmVyfSAtPiAke25ld051bWJlcn1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDsg4gg67KI7Zi466GcIOuxg+yngCDrp7Ug7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW25ld051bWJlcl0gPSBmcmFtZUJhZGdlc1tmcmFtZUlkXVtvbGROdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZnJhbWVCYWRnZXNbZnJhbWVJZF1bb2xkTnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2UhOugiOyehCDrsYPsp4Ag66e1IOyXheuNsOydtO2KuDogJHtvbGROdW1iZXJ9IC0+ICR7bmV3TnVtYmVyfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDsl4XrjbDsnbTtirjrkJwg7KO87ISdIOy2lOqwgFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRBbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVUnsl5Ag7KO87ISdIOyCreygnCDslYzrprxcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJBTk5PVEFUSU9OX0RFTEVURURcIixcbiAgICAgICAgICAgIGlkOiBhbm5vdGF0aW9uSWQsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDrs4Dqsr3rkJwg7KO87ISd65Ok7JeQIOuMgO2VnCDsoJXrs7Trj4QgVUnsl5Ag7KCE7IahXG4gICAgICAgIHVwZGF0ZWRBbm5vdGF0aW9ucy5mb3JFYWNoKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJBTk5PVEFUSU9OX1VQREFURURcIixcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uOiBhbm5vdGF0aW9uLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8g7KO87ISdIOyXheuNsOydtO2KuCDtlajsiJhcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9uKHVwZGF0ZWRBbm5vdGF0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIO2PsO2KuCDroZzrk5wgLSDthY3siqTtirgg67OA6rK9IOyghCDtlYTsmpRcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgLy8g7KO87ISdIOygleuztCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25Nb2RlbCh1cGRhdGVkQW5ub3RhdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZCh1cGRhdGVkQW5ub3RhdGlvbi5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHRDb250YWluZXIgPSBncm91cEZyYW1lLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIkZSQU1FXCIgJiYgbi5uYW1lID09PSBcIlRleHQgQ29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDsu6jthYzsnbTrhIgg64K07J2YIO2FjeyKpO2KuCDrhbjrk5wg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gdGV4dENvbnRhaW5lci5maW5kQ2hpbGQoKG4pID0+IG4udHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465Oc66W8IOywvuyVmOuLpOuptCDthY3siqTtirgg64K07JqpIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSB1cGRhdGVkQW5ub3RhdGlvbi5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrgrTsmqnsnbQg7JeF642w7J207Yq465CcIO2bhCwg7YWN7Iqk7Yq466W8IOq4sOuwmOycvOuhnCDqt7jro7kg7ZSE66CI7J6EIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5zsnZgg64aS7J207JeQIO2MqOuUqSDqsJLsnYQg6rOg66Ck7ZWY7JesIOq3uOujuSDtlITroIjsnoQg64aS7J20IOqzhOyCsFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFkZGluZ1ZlcnRpY2FsID0gZ3JvdXBGcmFtZS5wYWRkaW5nVG9wICsgZ3JvdXBGcmFtZS5wYWRkaW5nQm90dG9tO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyV2lkdGggPSAyNDsgLy8g67KI7Zi4IO2FjeyKpO2KuCDrhIjruYRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1TcGFjaW5nID0gZ3JvdXBGcmFtZS5pdGVtU3BhY2luZyB8fCAxMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRXaWR0aCA9IDMwMCAtIHBhZGRpbmdWZXJ0aWNhbCAtIG51bWJlcldpZHRoIC0gaXRlbVNwYWNpbmcgLSAxNjsgLy8g7Jes7JygIOqzteqwhCDsoJzsmbhcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhIjruYQg7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5yZXNpemUodGV4dFdpZHRoLCB0ZXh0Tm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOyekOuPmSDrpqzsgqzsnbTspojqsIAg7KCB7Jqp65CgIOyLnOqwhOydhCDso7zquLAg7JyE7ZW0IOyVveqwhOydmCDsp4Dsl7BcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhpLsnbTsl5Ag66ee7LawIOq3uOujuSDtlITroIjsnoQg64aS7J20IOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0hlaWdodCA9IHRleHROb2RlLmhlaWdodCArIHBhZGRpbmdWZXJ0aWNhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEZyYW1lLnJlc2l6ZSgzMDAsIE1hdGgubWF4KDUwLCBuZXdIZWlnaHQpKTsgLy8g7LWc7IaMIOuGkuydtCA1MHB4IOycoOyngFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi7YWN7Iqk7Yq4IOy7qO2FjOydtOuEiOyXkOyEnCDthY3siqTtirgg64W465Oc66W8IOywvuydhCDsiJgg7JeG7J2MXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbTsoIQg6rWs7KGw7J2YIOqyveyasCDsp4HsoJEg7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBncm91cEZyYW1lLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIlRFWFRcIiAmJiBuLmZvbnRTaXplICE9PSAxNiAvLyDrsojtmLgg7YWN7Iqk7Yq464qUIDE2cHgsIOyEpOuqhSDthY3siqTtirjripQg7JWE64uYXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHVwZGF0ZWRBbm5vdGF0aW9uLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J207KCEIOq1rOyhsOyXkOyEnOuPhCDthY3siqTtirgg6riw67CYIOuGkuydtCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZGRpbmdWZXJ0aWNhbCA9IGdyb3VwRnJhbWUucGFkZGluZ1RvcCArIGdyb3VwRnJhbWUucGFkZGluZ0JvdHRvbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDsnpDrj5kg66as7IKs7J207KaI6rCAIOyggeyaqeuQoCDsi5zqsITsnYQg7KO86riwIOychO2VtCDslb3qsITsnZgg7KeA7JewXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64aS7J207JeQIOunnuy2sCDqt7jro7kg7ZSE66CI7J6EIOuGkuydtCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdIZWlnaHQgPSB0ZXh0Tm9kZS5oZWlnaHQgKyBwYWRkaW5nVmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5yZXNpemUoMzAwLCBNYXRoLm1heCg1MCwgbmV3SGVpZ2h0KSk7IC8vIOy1nOyGjCDrhpLsnbQgNTBweCDsnKDsp4BcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7JeQ7IScIO2FjeyKpO2KuCDrhbjrk5zrpbwg7LC+7J2EIOyImCDsl4bsnYxcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYOyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7J2EIOywvuydhCDsiJgg7JeG7J2MOiAke3VwZGF0ZWRBbm5vdGF0aW9uLmdyb3VwRnJhbWVJZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyXheuNsOydtO2KuOuQnCDso7zshJ0g7KCV67O066W8IFVJ7JeQIOyVjOumvFxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiQU5OT1RBVElPTl9VUERBVEVEXCIsXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbjogdXBkYXRlZEFubm90YXRpb24sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDso7zshJ0gSUQgJHt1cGRhdGVkQW5ub3RhdGlvbi5pZH0g7JeF642w7J207Yq4IOyZhOujjGAsIHVwZGF0ZWRBbm5vdGF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOyjvOyEnSDsl4XrjbDsnbTtirgg7KSRIOyYpOulmCDrsJzsg506YCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDrj4TtgZDrqLztirjsl5DshJwg6riw7KG0IOyjvOyEnSDsoJXrs7Qg6rCA7KC47Jik6riwXG5leHBvcnQgZnVuY3Rpb24gc2NhbkRvY3VtZW50Rm9yQW5ub3RhdGlvbnMoKSB7XG4gICAgLy8g7ZSE66CI7J6E67OEIOyjvOyEnSDrsojtmLgg66e1XG4gICAgbGV0IGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnMgPSB7fTtcbiAgICAvLyDrqqjrk6Ag7Y6Y7J207KeA66W8IOuMgOyDgeycvOuhnCDso7zshJ0g7Iqk7LqUXG4gICAgZnVuY3Rpb24gc2NhbkFsbFBhZ2VzKCkge1xuICAgICAgICAvLyDquLDsobQg7KO87ISdIOuNsOydtO2EsCDstIjquLDtmZRcbiAgICAgICAgY2xlYXJBbm5vdGF0aW9ucygpO1xuICAgICAgICAvLyDrqqjrk6Ag7Y6Y7J207KeA66W8IOyInO2ajO2VmOupsCDsiqTsupRcbiAgICAgICAgZmlnbWEucm9vdC5jaGlsZHJlbi5mb3JFYWNoKChwYWdlKSA9PiB7XG4gICAgICAgICAgICBzY2FuUGFnZShwYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGDsoITssrQgJHtmaWdtYS5yb290LmNoaWxkcmVuLmxlbmd0aH3qsJwg7Y6Y7J207KeA7JeQ7IScICR7YW5ub3RhdGlvbnMubGVuZ3RofeqwnCDso7zshJ0g67Cc6rKsYCk7XG4gICAgfVxuICAgIC8vIO2OmOydtOyngCDrgrQg7KO87ISdIOyKpOy6lFxuICAgIGZ1bmN0aW9uIHNjYW5QYWdlKHBhZ2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coYO2OmOydtOyngCAnJHtwYWdlLm5hbWV9JyDsiqTsupQg7KSRLi4uYCk7XG4gICAgICAgIC8vIO2OmOydtOyngOydmCDrqqjrk6Ag64W465OcIOyKpOy6lFxuICAgICAgICBmdW5jdGlvbiBzY2FuTm9kZShub2RlKSB7XG4gICAgICAgICAgICAvLyDrtoDrqqgg7KO87ISdIO2UhOugiOyehOydtOuptCDsspjrpqwgKOyYiDogXCLtlITroIjsnoTsnbTrpoQgQW5ub3RhdGlvbnNcIilcbiAgICAgICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLm5hbWUuaW5jbHVkZXMoXCJBbm5vdGF0aW9uc1wiKSkge1xuICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7J2066aE7JeQ7IScIOybkOuzuCDtlITroIjsnoQg7J2066aEIOy2lOy2nFxuICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lTmFtZSA9IG5vZGUubmFtZS5yZXBsYWNlKFwiIEFubm90YXRpb25zXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgIC8vIOybkOuzuCDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRGcmFtZUlkID0gXCJcIjtcbiAgICAgICAgICAgICAgICBwYWdlLmZpbmRBbGwoKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4udHlwZSA9PT0gXCJGUkFNRVwiICYmIG4ubmFtZSA9PT0gZnJhbWVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZUlkID0gbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDtlITroIjsnoQgSUTrpbwg7LC+7J2AIOqyveyasOyXkOunjCDrp6TtlZFcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RnJhbWVJZCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O57J2EIOq0gOumrCDrp7Xsl5Ag7LaU6rCAICjsm5Drs7gg7ZSE66CI7J6EIElE66GcIOunpO2VkSlcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3Vwc1t0YXJnZXRGcmFtZUlkXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoTsl5Ag64yA7ZWcIOy1nOuMgCDso7zshJ0g67KI7Zi4IOy0iOq4sO2ZlFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbdGFyZ2V0RnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbdGFyZ2V0RnJhbWVJZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOyekOyLnSDrhbjrk5zsl5DshJwg7KO87ISdIOq3uOujuSDssL7quLAgKOyDiOuhnOyatCDqtazsobAg7KeA7JuQKVxuICAgICAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IO2XpOuNlOuKlCDqsbTrhIjrm7DquLBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiVEVYVFwiICYmIGNoaWxkLmNoYXJhY3RlcnMgPT09IFwiRGVzY3JpcHRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLm5hbWUuaW5jbHVkZXMoXCJBbm5vdGF0aW9uIEdyb3VwIFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7KO87ISdIOuyiO2YuCDstpTstpxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gY2hpbGQubmFtZS5tYXRjaCgvQW5ub3RhdGlvbiBHcm91cCAoXFxkKykvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCAmJiB0YXJnZXRGcmFtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbk51bWJlciA9IHBhcnNlSW50KG51bWJlck1hdGNoWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDtlbTri7kg7ZSE66CI7J6E7J2YIOy1nOuMgCDso7zshJ0g67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uTnVtYmVyID4gZnJhbWVNYXhBbm5vdGF0aW9uTnVtYmVyc1t0YXJnZXRGcmFtZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW3RhcmdldEZyYW1lSWRdID0gYW5ub3RhdGlvbk51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7KO87ISdIOyEpOuqhSDstpTstpwgKOyDiCDqtazsobAgLSDthY3siqTtirgg7Luo7YWM7J2064SIIOuCtOu2gOydmCDthY3siqTtirgg64W465OcKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gY2hpbGQuZmluZENoaWxkKChuKSA9PiBuLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBuLm5hbWUgPT09IFwiVGV4dCBDb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHRDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOy7qO2FjOydtOuEiCDrgrTsnZgg7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSB0ZXh0Q29udGFpbmVyLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSB0ZXh0Tm9kZS5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbTsoIQg6rWs7KGw7J2YIOyngeygkSDthY3siqTtirgg64W465OcIOyngOybkFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jaGlsZHJlbi5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIlRFWFRcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uID0gbm9kZS5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5ub3RhdGlvbnMg67Cw7Je07JeQIOyjvOyEnSDstpTqsIBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkQW5ub3RhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogRGF0ZS5ub3coKSArIFwiLVwiICsgYW5ub3RhdGlvbk51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogYW5ub3RhdGlvbk51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSWQ6IHRhcmdldEZyYW1lSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZU5hbWU6IGZyYW1lTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lOiBwYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cEZyYW1lSWQ6IGNoaWxkLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjNkU1NkNGXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkV2lkdGg6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjsgLy8g67aA66qoIOyjvOyEnSDtlITroIjsnoTsnYAg7LKY66as7ZaI7Jy866+A66GcIOyXrOq4sOyEnCDrsJjtmZhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOq4sOyhtCDqtazsobAg7KeA7JuQICjsp4HsoJHsoIHsnbgg7KO87ISdIO2VreuqqeyduCDqsr3smrAgLSDsnbTsoIQg67KE7KCE6rO87J2YIO2YuO2ZmOyEsSDsnKDsp4ApXG4gICAgICAgICAgICBpZiAobm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5uYW1lLmluY2x1ZGVzKFwiQW5ub3RhdGlvbiBcIikpIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ3snbQg7IaN7ZWcIO2UhOugiOyehCDssL7quLAgKOu2gOuqqOqwgCDtlITroIjsnoTsnbgg6rK97JqwKVxuICAgICAgICAgICAgICAgIGlmIChub2RlLnBhcmVudCAmJiBub2RlLnBhcmVudC50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50RnJhbWUgPSBub2RlLnBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldEZyYW1lSWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVOYW1lID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgLy8g67aA66qoIO2UhOugiOyehOydtCBBbm5vdGF0aW9ucyDqt7jro7nsnbjsp4Ag7ZmV7J24XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRGcmFtZS5uYW1lLmluY2x1ZGVzKFwiQW5ub3RhdGlvbnNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOybkOuzuCDtlITroIjsnoQg7J2066aEIOy2lOy2nFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVOYW1lID0gcGFyZW50RnJhbWUubmFtZS5yZXBsYWNlKFwiIEFubm90YXRpb25zXCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7JuQ67O4IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2UuZmluZEFsbCgobikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBuLm5hbWUgPT09IGZyYW1lTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZUlkID0gbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRGcmFtZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g67KI7Zi4IOy2lOy2nFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSBub2RlLm5hbWUubWF0Y2goL0Fubm90YXRpb24gKFxcZCspLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uTnVtYmVyID0gcGFyc2VJbnQobnVtYmVyTWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoTsnZgg7LWc64yAIOyjvOyEnSDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW3RhcmdldEZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbdGFyZ2V0RnJhbWVJZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbk51bWJlciA+IGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbdGFyZ2V0RnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVNYXhBbm5vdGF0aW9uTnVtYmVyc1t0YXJnZXRGcmFtZUlkXSA9IGFubm90YXRpb25OdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDsoJzrqqnqs7wg7ISk66qFIOy2lOy2nFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChhbm5vdGF0aW9uSXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkl0ZW0udHlwZSA9PT0gXCJURVhUXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uSXRlbS5uYW1lID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiA9IGFubm90YXRpb25JdGVtLmNoYXJhY3RlcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbm5vdGF0aW9ucyDrsLDsl7Tsl5Ag7KO87ISdIOy2lOqwgFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRBbm5vdGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpICsgXCItXCIgKyBhbm5vdGF0aW9uTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBhbm5vdGF0aW9uTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTmFtZTogZnJhbWVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU6IHBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwRnJhbWVJZDogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzZFNTZDRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFdpZHRoOiBcInNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDrsYPsp4Dsnbjsp4Ag7ZmV7J24ICjtmITsnqwg7Y6Y7J207KeA7JeQIOyngeygkSDstpTqsIDrkJwg67GD7KeAKVxuICAgICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUubmFtZS5zdGFydHNXaXRoKFwiQmFkZ2UgXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbnVtYmVyTWF0Y2ggPSBub2RlLm5hbWUubWF0Y2goL0JhZGdlIChcXGQrKS8pO1xuICAgICAgICAgICAgICAgIGlmIChudW1iZXJNYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWRnZU51bWJlciA9IHBhcnNlSW50KG51bWJlck1hdGNoWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7JyE7LmYIOq4sOuwmOycvOuhnCDqsIDsnqUg6rCA6rmM7Jq0IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNsb3Nlc3RGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW5EaXN0YW5jZSA9IEluZmluaXR5O1xuICAgICAgICAgICAgICAgICAgICBwYWdlLmZpbmRBbGwoKG4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFuLm5hbWUuaW5jbHVkZXMoXCJBbm5vdGF0aW9uc1wiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFuLm5hbWUuc3RhcnRzV2l0aChcIkJhZGdlXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g67GD7KeA7JmAIO2UhOugiOyehCDqsITsnZgg6rGw66asIOqzhOyCsFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KE1hdGgucG93KG5vZGUueCAtIG4ueCwgMikgKyBNYXRoLnBvdyhub2RlLnkgLSBuLnksIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDqsIDsnqUg6rCA6rmM7Jq0IO2UhOugiOyehCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBtaW5EaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RnJhbWUgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyDqsIDsnqUg6rCA6rmM7Jq0IO2UhOugiOyehOydtCDsnojqs6AsIOqxsOumrOqwgCDstqnrtoTtnogg6rCA6rmM7Jqw66m0IOunpO2VkVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdEZyYW1lICYmIG1pbkRpc3RhbmNlIDwgMTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDqsbDrpqwg7J6E6rOE6rCS7J2AIOyhsOyglSDqsIDriqVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lSWQgPSBjbG9zZXN0RnJhbWUuaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lQmFkZ2VzW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVCYWRnZXNbZnJhbWVJZF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW2JhZGdlTnVtYmVyXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDtlITroIjsnoTrs4Qg7KO87ISdIOuyiO2YuCDsubTsmrTthLAg7LSI6riw7ZmUXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbZnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW2ZyYW1lSWRdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOy1nOuMgCDso7zshJ0g67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlTnVtYmVyID4gZnJhbWVNYXhBbm5vdGF0aW9uTnVtYmVyc1tmcmFtZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbZnJhbWVJZF0gPSBiYWRnZU51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyerOq3gOyggeycvOuhnCDsnpDsi50g64W465OcIOyKpOy6lFxuICAgICAgICAgICAgaWYgKFwiY2hpbGRyZW5cIiBpbiBub2RlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKHNjYW5Ob2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDtjpjsnbTsp4DsnZgg66qo65OgIOuFuOuTnCDsiqTsupQg7Iuc7J6RXG4gICAgICAgIHNjYW5Ob2RlKHBhZ2UpO1xuICAgIH1cbiAgICAvLyDrqqjrk6Ag7Y6Y7J207KeAIOyKpOy6lCDsi5zsnpFcbiAgICBzY2FuQWxsUGFnZXMoKTtcbn1cbi8vIOyjvOyEnSDsnqzsoJXroKwg7ZWo7IiYXG5leHBvcnQgZnVuY3Rpb24gcmVvcmRlckFubm90YXRpb25zKHVwZGF0ZWRBbm5vdGF0aW9ucywgZnJhbWVJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYOyerOygleugrCDsi5zsnpE6ICR7dXBkYXRlZEFubm90YXRpb25zLmxlbmd0aH3qsJwg7KO87ISdYCk7XG4gICAgICAgICAgICAvLyDrqqjrk6Ag7KO87ISdIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIHVwZGF0ZWRBbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDrqqjrjbgg642w7J207YSwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25Nb2RlbChhbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGFubm90YXRpb24uZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDsnbTrpoQg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBgQW5ub3RhdGlvbiBHcm91cCAke2Fubm90YXRpb24ubnVtYmVyfWA7XG4gICAgICAgICAgICAgICAgICAgIC8vIOq3uOujuSDtlITroIjsnoQg7JWI7J2YIOuyiO2YuCDthY3siqTtirgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlclRleHQgPSBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maW5kQ2hpbGQoKG4pID0+IG4udHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uZm9udFNpemUgPT09IDE2ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAhbi5uYW1lLmluY2x1ZGVzKFwiQ29udGFpbmVyXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlclRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclRleHQuY2hhcmFjdGVycyA9IGFubm90YXRpb24ubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg6re466O5IO2UhOugiOyehCDrgrQg67KI7Zi4IO2FjeyKpO2KuCDrs4Dqsr06ICR7YW5ub3RhdGlvbi5udW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g64+F66a9IOuxg+yngCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgICAgICAgICAgY29uc3QgYmFkZ2VGcmFtZSA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIkZSQU1FXCIgJiYgbi5uYW1lID09PSBgQmFkZ2UgJHthbm5vdGF0aW9uLm51bWJlcn1gKTtcbiAgICAgICAgICAgICAgICBpZiAoYmFkZ2VGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDrsYPsp4Ag7YWN7Iqk7Yq4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWRnZVRleHQgPSBiYWRnZUZyYW1lLmZpbmRDaGlsZCgobikgPT4gbi50eXBlID09PSBcIlRFWFRcIiAmJiBuLm5hbWUgPT09IFwiQmFkZ2VUZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2VUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWRnZVRleHQuY2hhcmFjdGVycyA9IGFubm90YXRpb24ubnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg67GD7KeAIO2FjeyKpO2KuCDrs4Dqsr06ICR7YW5ub3RhdGlvbi5udW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7ZSE66CI7J6EIOychOyXkCDsnojripQg67GD7KeAIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGlmIChmcmFtZUJhZGdlc1tmcmFtZUlkXSAmJiBmcmFtZUJhZGdlc1tmcmFtZUlkXVthbm5vdGF0aW9uLm51bWJlcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVCYWRnZSA9IGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW2Fubm90YXRpb24ubnVtYmVyXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g67GD7KeAIOuCtOu2gCDthY3siqTtirgg7LC+6riwIOuwjyDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFkZ2VUZXh0ID0gZnJhbWVCYWRnZS5maW5kQ2hpbGQoKG4pID0+IG4udHlwZSA9PT0gXCJURVhUXCIgJiYgbi5uYW1lID09PSBcIkJhZGdlVGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2VUZXh0LmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uLm51bWJlci50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2UhOugiOyehCDsnIQg67GD7KeAIO2FjeyKpO2KuCDrs4Dqsr06ICR7YW5ub3RhdGlvbi5udW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBVSeyXkCDsl4XrjbDsnbTtirjrkJwg7KO87ISdIOyghOyytCDsoITshqFcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkFOTk9UQVRJT05TX0xPQURFRFwiLFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucywgLy8gZ2V0QWxsQW5ub3RhdGlvbnMg7ZWo7IiYIOuMgOyLoCBhbm5vdGF0aW9ucyDrsLDsl7Qg7KeB7KCRIOyCrOyaqVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuyjvOyEnSDsnqzsoJXroKwg7JmE66OMXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuyjvOyEnSDsnqzsoJXroKwg7KSRIOyYpOulmCDrsJzsg506XCIsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgaGV4VG9SZ2IgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3IudXRpbFwiO1xuaW1wb3J0IHsgZnJhbWVCYWRnZXMgfSBmcm9tIFwiLi4vbW9kZWxzL2Fubm90YXRpb24ubW9kZWxcIjtcbi8vIO2UhOugiOyehOyXkCDrsYPsp4Ag7LaU6rCAIO2VqOyImCAtIO2VreyDgSDstZzsg4HsnIQg7ZSE66CI7J6E7J2EIOq4sOykgOycvOuhnCDsg53shLFcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCYWRnZU9uRnJhbWUoZnJhbWVOb2RlLCBhbm5vdGF0aW9uTnVtYmVyLCBjb2xvcikge1xuICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgbGV0IHJvb3RGcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gZnJhbWVOb2RlO1xuICAgIC8vIOu2gOuqqCDssrTsnbjsnYQg64Gd6rmM7KeAIOyYrOudvOqwgOupsCDqsIDsnqUg7IOB7JyE7J2YIO2UhOugiOyehCDssL7quLBcbiAgICB3aGlsZSAoY3VycmVudE5vZGUucGFyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICByb290RnJhbWVOb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgIH1cbiAgICAvLyDrsYPsp4Ag7Luo7YWM7J2064SIIOyDneyEsVxuICAgIGNvbnN0IGJhZGdlQ29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBiYWRnZUNvbnRhaW5lci5uYW1lID0gYEJhZGdlICR7YW5ub3RhdGlvbk51bWJlcn1gO1xuICAgIGJhZGdlQ29udGFpbmVyLmxheW91dE1vZGUgPSBcIk5PTkVcIjtcbiAgICBiYWRnZUNvbnRhaW5lci5yZXNpemUoMjQsIDI0KTtcbiAgICBiYWRnZUNvbnRhaW5lci5maWxscyA9IFtdO1xuICAgIC8vIOyEoO2DneuQnCDrhbjrk5zsnZgg7KCI64yAIOychOy5mOulvCDqs4TsgrBcbiAgICBjb25zdCBzZWxlY3RlZE5vZGUgPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgbGV0IG5vZGVYID0gMDtcbiAgICBsZXQgbm9kZVkgPSAwO1xuICAgIGlmIChzZWxlY3RlZE5vZGUpIHtcbiAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOydmCDsoIjrjIAg7JyE7LmYIOqzhOyCsFxuICAgICAgICBub2RlWCA9IHNlbGVjdGVkTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgbm9kZVkgPSBzZWxlY3RlZE5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg6riw7KSA7Jy866GcIOyDgeuMgCDsnITsuZgg6rOE7IKwXG4gICAgICAgIGNvbnN0IHJvb3RBYnNvbHV0ZVggPSByb290RnJhbWVOb2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICBjb25zdCByb290QWJzb2x1dGVZID0gcm9vdEZyYW1lTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXTtcbiAgICAgICAgLy8g67GD7KeAIOychOy5mCDshKTsoJUgKOyEoO2DneuQnCDroIjsnbTslrTsnZgg7JyE7LmY7JeQIOunnuqyjCDsobDsoJUpXG4gICAgICAgIGJhZGdlQ29udGFpbmVyLnggPSBub2RlWCAtIHJvb3RBYnNvbHV0ZVggKyAxMDtcbiAgICAgICAgYmFkZ2VDb250YWluZXIueSA9IG5vZGVZIC0gcm9vdEFic29sdXRlWSArIDEwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gc2VsZWN0ZWROb2Rl6rCAIOyXhuuKlCDqsr3smrAg7ZSE66CI7J6E7J2YIOyijOyDgeuLqOyXkCDrsLDsuZhcbiAgICAgICAgYmFkZ2VDb250YWluZXIueCA9IDEwO1xuICAgICAgICBiYWRnZUNvbnRhaW5lci55ID0gMTA7XG4gICAgfVxuICAgIC8vIOuxg+yngCDsm5DtmJUg67Cw6rK9IOyDneyEsVxuICAgIGNvbnN0IGJhZGdlQ2lyY2xlID0gZmlnbWEuY3JlYXRlRWxsaXBzZSgpO1xuICAgIGJhZGdlQ2lyY2xlLm5hbWUgPSBgQmFkZ2VDaXJjbGVgO1xuICAgIGJhZGdlQ2lyY2xlLnJlc2l6ZSgyNCwgMjQpO1xuICAgIC8vIOyDieyDgSDshKTsoJUg7KCB7JqpXG4gICAgY29uc3QgY29sb3JWYWx1ZXMgPSBoZXhUb1JnYihjb2xvcik7XG4gICAgYmFkZ2VDaXJjbGUuZmlsbHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgcjogY29sb3JWYWx1ZXMuciAvIDI1NSxcbiAgICAgICAgICAgICAgICBnOiBjb2xvclZhbHVlcy5nIC8gMjU1LFxuICAgICAgICAgICAgICAgIGI6IGNvbG9yVmFsdWVzLmIgLyAyNTUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF07XG4gICAgLy8g67GD7KeAIO2FjeyKpO2KuCDsg53shLFcbiAgICBjb25zdCBiYWRnZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgYmFkZ2VUZXh0LmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgYmFkZ2VUZXh0LmZvbnRTaXplID0gMTI7XG4gICAgYmFkZ2VUZXh0LmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07XG4gICAgYmFkZ2VUZXh0LnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiO1xuICAgIC8vIOuxg+yngCDsu6jthYzsnbTrhIjsl5Ag7JuQ7ZiV6rO8IO2FjeyKpO2KuCDstpTqsIBcbiAgICBiYWRnZUNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWRnZUNpcmNsZSk7XG4gICAgYmFkZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFkZ2VUZXh0KTtcbiAgICAvLyDsm5Dqs7wg7YWN7Iqk7Yq47J2YIOychOy5mCDshKTsoJVcbiAgICBiYWRnZUNpcmNsZS54ID0gMDtcbiAgICBiYWRnZUNpcmNsZS55ID0gMDtcbiAgICAvLyDsiKvsnpDsl5Ag65Sw6528IOychOy5mCDsobDsoJVcbiAgICBpZiAoYW5ub3RhdGlvbk51bWJlciA8IDEwKSB7XG4gICAgICAgIGJhZGdlVGV4dC54ID0gOC41O1xuICAgICAgICBiYWRnZVRleHQueSA9IDY7XG4gICAgfVxuICAgIGVsc2UgaWYgKGFubm90YXRpb25OdW1iZXIgPCAxMDApIHtcbiAgICAgICAgYmFkZ2VUZXh0LnggPSA0LjU7XG4gICAgICAgIGJhZGdlVGV4dC55ID0gNjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGJhZGdlVGV4dC5mb250U2l6ZSA9IDEwO1xuICAgICAgICBiYWRnZVRleHQueCA9IDI7XG4gICAgICAgIGJhZGdlVGV4dC55ID0gNztcbiAgICB9XG4gICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOyXkCDrsYPsp4Ag7LaU6rCAXG4gICAgcm9vdEZyYW1lTm9kZS5hcHBlbmRDaGlsZChiYWRnZUNvbnRhaW5lcik7XG4gICAgLy8g7ZSE66CI7J6E7JeQIOyeiOuKlCDri6Trpbgg67GD7KeA65Ok7J2YIOychOy5mCDsobDsoJVcbiAgICBjb25zdCBmcmFtZUlkID0gcm9vdEZyYW1lTm9kZS5pZDsgLy8g7LWc7IOB7JyEIO2UhOugiOyehCBJRCDsgqzsmqlcbiAgICBpZiAoIWZyYW1lQmFkZ2VzW2ZyYW1lSWRdKSB7XG4gICAgICAgIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdID0ge307XG4gICAgfVxuICAgIC8vIOydtOuvuCDsobTsnqztlZjripQg67GD7KeAIOqwnOyImCDtmZXsnbjtlZjqs6Ag7JyE7LmYIOyhsOyglVxuICAgIGNvbnN0IGJhZGdlQ291bnQgPSBPYmplY3Qua2V5cyhmcmFtZUJhZGdlc1tmcmFtZUlkXSkubGVuZ3RoO1xuICAgIGlmIChiYWRnZUNvdW50ID4gMCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWROb2RlKSB7XG4gICAgICAgICAgICAvLyDshKDtg53rkJwg64W465OcIOq4sOykgOycvOuhnCDsnITsuZgg6rOE7IKwXG4gICAgICAgICAgICBjb25zdCByb290QWJzb2x1dGVYID0gcm9vdEZyYW1lTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVYID0gc2VsZWN0ZWROb2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdO1xuICAgICAgICAgICAgLy8g6riw7KG0IOuxg+yngCDsmIbsl5Ag6rCE6rKp7J2EIOuRkOqzoCDrsLDsuZhcbiAgICAgICAgICAgIGJhZGdlQ29udGFpbmVyLnggPSBub2RlWCAtIHJvb3RBYnNvbHV0ZVggKyAxMCArIGJhZGdlQ291bnQgKiAyODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJhZGdlQ29udGFpbmVyLnggPSAxMCArIGJhZGdlQ291bnQgKiAyODtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDrsYPsp4Ag66e17JeQIOyggOyepSAo7LWc7IOB7JyEIO2UhOugiOyehCBJRCDsgqzsmqkpXG4gICAgZnJhbWVCYWRnZXNbZnJhbWVJZF1bYW5ub3RhdGlvbk51bWJlcl0gPSBiYWRnZUNvbnRhaW5lcjtcbiAgICByZXR1cm4gYmFkZ2VDb250YWluZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQmFkZ2VPbkZyYW1lKGZyYW1lTm9kZSwgYW5ub3RhdGlvbk51bWJlcikge1xuICAgIGNvbnN0IGZyYW1lSWQgPSBmcmFtZU5vZGUuaWQ7XG4gICAgLy8g7ZSE66CI7J6E7JeQIO2VtOuLuSDrsYPsp4DqsIAg7J6I64qU7KeAIO2ZleyduFxuICAgIGlmIChmcmFtZUJhZGdlc1tmcmFtZUlkXSAmJiBmcmFtZUJhZGdlc1tmcmFtZUlkXVthbm5vdGF0aW9uTnVtYmVyXSkge1xuICAgICAgICBjb25zdCBiYWRnZUNvbnRhaW5lciA9IGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW2Fubm90YXRpb25OdW1iZXJdO1xuICAgICAgICAvLyDrsYPsp4Ag7KG07J6sIOyXrOu2gCDtmZXsnbggKOydtOuvuCDsgq3soJzrkJDsnYQg7IiY64+EIOyeiOydjClcbiAgICAgICAgY29uc3QgaXNOb2RlSW5Eb2N1bWVudCA9IGZpZ21hLmdldE5vZGVCeUlkKGJhZGdlQ29udGFpbmVyLmlkKTtcbiAgICAgICAgaWYgKGlzTm9kZUluRG9jdW1lbnQpIHtcbiAgICAgICAgICAgIC8vIOuxg+yngCDsgq3soJxcbiAgICAgICAgICAgIGJhZGdlQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYO2UhOugiOyehCAke2ZyYW1lTm9kZS5uYW1lfeydmCDrsYPsp4AgJHthbm5vdGF0aW9uTnVtYmVyfSDsgq3soJwg7JmE66OMYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg7ZSE66CI7J6EICR7ZnJhbWVOb2RlLm5hbWV97J2YIOuxg+yngCAke2Fubm90YXRpb25OdW1iZXJ964qUIOydtOuvuCDsgq3soJzrkKhgKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDrsYPsp4Ag66e17JeQ7IScIOyCreygnFxuICAgICAgICBkZWxldGUgZnJhbWVCYWRnZXNbZnJhbWVJZF1bYW5ub3RhdGlvbk51bWJlcl07XG4gICAgICAgIC8vIO2UhOugiOyehOyXkCDrjZQg7J207IOBIOuxg+yngOqwgCDsl4bsnLzrqbQg66e17JeQ7IScIO2UhOugiOyehCBJRCDsgq3soJxcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGZyYW1lQmFkZ2VzW2ZyYW1lSWRdKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGRlbGV0ZSBmcmFtZUJhZGdlc1tmcmFtZUlkXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8g7ZiE7J6sIO2UhOugiOyehOydmCDrqqjrk6Ag7J6Q7IudIOuFuOuTnOyXkOyEnCDrsYPsp4Ag7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICBjb25zdCBiYWRnZU5vZGUgPSBmcmFtZU5vZGUuZmluZENoaWxkKChuKSA9PiBuLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBuLm5hbWUgPT09IGBCYWRnZSAke2Fubm90YXRpb25OdW1iZXJ9YCk7XG4gICAgaWYgKGJhZGdlTm9kZSkge1xuICAgICAgICAvLyDrsYPsp4Ag7IKt7KCcXG4gICAgICAgIGJhZGdlTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgLy8g7ZSE66CI7J6EIOuxg+yngCDrp7Xsl5Ag7JeG64uk66m0IOy2lOqwgFxuICAgICAgICBpZiAoIWZyYW1lQmFkZ2VzW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICBmcmFtZUJhZGdlc1tmcmFtZUlkXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIOuxg+yngCDrp7Xsl5DshJwg7IKt7KCcICjsnbTrr7gg66e17JeQIOuTseuhneuQnCDqsr3smrDsl5Ag64yA67mEKVxuICAgICAgICBkZWxldGUgZnJhbWVCYWRnZXNbZnJhbWVJZF1bYW5ub3RhdGlvbk51bWJlcl07XG4gICAgICAgIGNvbnNvbGUubG9nKGDtlITroIjsnoQg64K067aAIOqygOyDieycvOuhnCDssL7snYAg67GD7KeAICR7YW5ub3RhdGlvbk51bWJlcn0g7IKt7KCcIOyZhOujjGApO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuIiwiaW1wb3J0IHsgYW5ub3RhdGlvbnMsIGZyYW1lQmFkZ2VzLCBhbm5vdGF0aW9uR3JvdXBzLCBmcmFtZUFubm90YXRpb25Db3VudGVycywgcmVtb3ZlQW5ub3RhdGlvbnNCeUZyYW1lSWQsIHJlbW92ZUFubm90YXRpb25zQnlOdW1iZXIsIGdldEFsbEFubm90YXRpb25zLCB9IGZyb20gXCIuLi9tb2RlbHMvYW5ub3RhdGlvbi5tb2RlbFwiO1xuaW1wb3J0IHsgY2hlY2tTZWxlY3RlZEZyYW1lIH0gZnJvbSBcIi4vZnJhbWUuc2VydmljZVwiO1xuLy8g64W465OcIOyCreygnCDsnbTrsqTtirgg6rCQ7KeAIO2VqOyImFxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU5vZGVSZW1vdmFsKGV2ZW50KSB7XG4gICAgLy8g66y47ISc6rCAIOuzgOqyveuQmOyXiOydhCDrlYzrp4wg7LKY66asXG4gICAgaWYgKCFldmVudC5kb2N1bWVudENoYW5nZXMpXG4gICAgICAgIHJldHVybjtcbiAgICBsZXQgZGF0YUNoYW5nZWQgPSBmYWxzZTtcbiAgICAvLyDrrLjshJwg67OA6rK9IOuCtOyaqSDspJEg7IKt7KCc65CcIOuFuOuTnOqwgCDsnojripTsp4Ag7ZmV7J24XG4gICAgZXZlbnQuZG9jdW1lbnRDaGFuZ2VzLmZvckVhY2goKGNoYW5nZSkgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlLnR5cGUgPT09IFwiREVMRVRFXCIgJiYgY2hhbmdlLm5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWROb2RlID0gY2hhbmdlLm5vZGU7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkTm9kZUlkID0gZGVsZXRlZE5vZGUuaWQ7XG4gICAgICAgICAgICAvLyDsgq3soJzrkJwg64W465OcIOygleuztCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgIC8vIFJlbW92ZWROb2Rl64qUIOygnO2VnOuQnCDsoJXrs7Trp4wg7J6I7Jy866+A66GcLCBpZOulvCDquLDrsJjsnLzroZwg7J6R7JeF7ZW07JW8IO2VqFxuICAgICAgICAgICAgLy8gMS4g7IKt7KCc65CcIOuFuOuTnOydmCBJROqwgCDtlITroIjsnoQgSUTsmYAg7J287LmY7ZWY64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgLy8g7ZSE66CI7J6E7JeQIOuMgO2VnCDso7zshJ3snbQg7J6I64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnNUb1JlbW92ZSA9IGFubm90YXRpb25zLmZpbHRlcigoYSkgPT4gYS5mcmFtZUlkID09PSBkZWxldGVkTm9kZUlkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uc1RvUmVtb3ZlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g7IKt7KCcXG4gICAgICAgICAgICAgICAgcmVtb3ZlQW5ub3RhdGlvbnNCeUZyYW1lSWQoZGVsZXRlZE5vZGVJZCk7XG4gICAgICAgICAgICAgICAgZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDtlITroIjsnoQgSUQgJHtkZWxldGVkTm9kZUlkfSDqtIDroKgg7KO87ISdICR7YW5ub3RhdGlvbnNUb1JlbW92ZS5sZW5ndGh96rCcIOyCreygnOuQqGApO1xuICAgICAgICAgICAgICAgIC8vIO2UhOugiOyehOuzhCDso7zshJ0g7Lm07Jq07YSw7JeQ7ISc64+EIOygnOqxsFxuICAgICAgICAgICAgICAgIGlmIChmcmFtZUFubm90YXRpb25Db3VudGVyc1tkZWxldGVkTm9kZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZnJhbWVBbm5vdGF0aW9uQ291bnRlcnNbZGVsZXRlZE5vZGVJZF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7KO87ISdIOq3uOujuSDrp7Xsl5DshJwg7IKt7KCcXG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3Vwc1tkZWxldGVkTm9kZUlkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBhbm5vdGF0aW9uR3JvdXBzW2RlbGV0ZWROb2RlSWRdO1xuICAgICAgICAgICAgICAgIGRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOuxg+yngCDrp7Xsl5DshJwg7IKt7KCcXG4gICAgICAgICAgICBpZiAoZnJhbWVCYWRnZXNbZGVsZXRlZE5vZGVJZF0pIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgZnJhbWVCYWRnZXNbZGVsZXRlZE5vZGVJZF07XG4gICAgICAgICAgICAgICAgZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gMi4g7KO87ISdIOq3uOujuSDrp7Xsl5DshJwgSUTqsIAg7J287LmY7ZWY64qUIOuFuOuTnOqwgCDsnojripTsp4Ag7ZmV7J24XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhbm5vdGF0aW9uR3JvdXBzKS5mb3JFYWNoKChmcmFtZUlkKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uR3JvdXBzW2ZyYW1lSWRdLmlkID09PSBkZWxldGVkTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoQg6rSA66CoIOyjvOyEnSDsgq3soJxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gKF9hID0gYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5mcmFtZUlkID09PSBmcmFtZUlkKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZyYW1lTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZyYW1lTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQW5ub3RhdGlvbnNCeUZyYW1lSWQoZnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg7ZSE66CI7J6EICcke2ZyYW1lTmFtZX0n7JeQIOuMgO2VnCDso7zshJ0g6re466O57J20IOyCreygnOuQqGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBhbm5vdGF0aW9uR3JvdXBzW2ZyYW1lSWRdO1xuICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyAzLiDso7zshJ0g67KI7Zi466GcIOunpO2VkeuQnCDrsYPsp4DqsIAg7J6I64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgZm9yIChjb25zdCBmcmFtZUlkIGluIGZyYW1lQmFkZ2VzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWRnZU51bWJlciBpbiBmcmFtZUJhZGdlc1tmcmFtZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZnJhbWVCYWRnZXNbZnJhbWVJZF1bYmFkZ2VOdW1iZXJdLmlkID09PSBkZWxldGVkTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDtlbTri7kg67GD7KeAIOuyiO2YuOulvCDqsIDsp4Qg7KO87ISd7J20IOyeiOuKlOyngCDtmZXsnbjtlZjqs6Ag7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uTnVtYmVyID0gcGFyc2VJbnQoYmFkZ2VOdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvblRvUmVtb3ZlID0gYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5udW1iZXIgPT09IGFubm90YXRpb25OdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDrsLDsl7Tsl5DshJwg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQW5ub3RhdGlvbnNCeU51bWJlcihhbm5vdGF0aW9uTnVtYmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuxg+yngCDrsojtmLggJHthbm5vdGF0aW9uTnVtYmVyfeyXkCDtlbTri7ntlZjripQg7KO87ISdIOyCreygnOuQqGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g67GD7KeAIOunteyXkOyEnCDsgq3soJxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmcmFtZUJhZGdlc1tmcmFtZUlkXVtiYWRnZU51bWJlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDrjbDsnbTthLDqsIAg67OA6rK965CY7JeI7Jy866m0IFVJIOyXheuNsOydtO2KuFxuICAgIGlmIChkYXRhQ2hhbmdlZCkge1xuICAgICAgICAvLyDrqqjrk6Ag7KO87ISdIOuLpOyLnCDsoITshqFcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJBTExfQU5OT1RBVElPTlNfTE9BREVEXCIsXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QWxsQW5ub3RhdGlvbnMoKSxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDtmITsnqwg7ISg7YOd65CcIO2UhOugiOyehOydtCDsnojsnLzrqbQg7ZW064u5IO2UhOugiOyehOydmCDso7zshJ3rj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IHsgc2VsZWN0ZWQsIGZyYW1lSWQsIGZyYW1lTmFtZSwgcGFyZW50RnJhbWVJZCwgcGFyZW50RnJhbWVOYW1lIH0gPSBjaGVja1NlbGVjdGVkRnJhbWUoKTtcbiAgICAgICAgaWYgKHNlbGVjdGVkICYmIGZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZyYW1lSWQgPSBwYXJlbnRGcmFtZUlkIHx8IGZyYW1lSWQ7XG4gICAgICAgICAgICBjb25zdCBmcmFtZUFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuZmlsdGVyKChhKSA9PiBhLmZyYW1lSWQgPT09IHRhcmdldEZyYW1lSWQpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiRlJBTUVfU0VMRUNURURcIixcbiAgICAgICAgICAgICAgICBmcmFtZUlkOiB0YXJnZXRGcmFtZUlkLFxuICAgICAgICAgICAgICAgIGZyYW1lTmFtZSxcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogZnJhbWVBbm5vdGF0aW9ucyxcbiAgICAgICAgICAgICAgICBmaWxlVGl0bGU6IGZpZ21hLnJvb3QubmFtZSxcbiAgICAgICAgICAgICAgICBwYWdlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICBwYXJlbnRGcmFtZU5hbWU6IHBhcmVudEZyYW1lTmFtZSB8fCBmcmFtZU5hbWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8vIO2YhOyerCDshKDtg53rkJwg7ZSE66CI7J6E7J20IOyeiOuKlOyngCDtmZXsnbjtlZjqs6AsIOy1nOyDgeychCDtlITroIjsnoQg7KCV67O064+EIOuwmO2ZmFxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrU2VsZWN0ZWRGcmFtZSgpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb247XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHsgc2VsZWN0ZWQ6IGZhbHNlIH07XG4gICAgfVxuICAgIGNvbnN0IG5vZGUgPSBzZWxlY3Rpb25bMF07XG4gICAgbGV0IGZyYW1lTm9kZSA9IG51bGw7XG4gICAgbGV0IHJvb3RGcmFtZU5vZGUgPSBudWxsO1xuICAgIC8vIOyEoO2DneuQnCDrhbjrk5zqsIAg7KeB7KCRIO2UhOugiOyehOyduCDqsr3smrBcbiAgICBpZiAobm9kZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgZnJhbWVOb2RlID0gbm9kZTtcbiAgICB9XG4gICAgLy8g7ZSE66CI7J6E7J20IOyVhOuLjCDri6Trpbgg66CI7J207Ja066W8IOyEoO2Dne2VnCDqsr3smrAg67aA66qoIO2UhOugiOyehCDssL7quLBcbiAgICBlbHNlIHtcbiAgICAgICAgLy8g67aA66qoIOuFuOuTnCDssrTsnbjsnYQg65Sw65286rCA66m07IScIOqwgOyepSDqsIDquYzsmrQg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyDtlITroIjsnoTsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrBcbiAgICAgICAgaWYgKCFmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHNlbGVjdGVkOiBmYWxzZSwgc2VsZWN0ZWROb2RlOiBub2RlIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g7LC+7J2AIO2UhOugiOyehOydmCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgIGxldCBwYXJlbnRGcmFtZSA9IG51bGw7XG4gICAgLy8g67aA66qoIOuFuOuTnOqwgCDtlITroIjsnoTsnbjsp4Ag7ZmV7J24XG4gICAgaWYgKGZyYW1lTm9kZS5wYXJlbnQgJiYgZnJhbWVOb2RlLnBhcmVudC50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgcGFyZW50RnJhbWUgPSBmcmFtZU5vZGUucGFyZW50O1xuICAgIH1cbiAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sCAtIOu2gOuqqOqwgCDtjpjsnbTsp4Dsnbgg7ZSE66CI7J6EXG4gICAgcm9vdEZyYW1lTm9kZSA9IGZyYW1lTm9kZTtcbiAgICBsZXQgY3VycmVudE5vZGUgPSBmcmFtZU5vZGU7XG4gICAgLy8g67aA66qoIOyytOyduOydhCDrlLDrnbwg7Jis65286rCA66mwIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgd2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudCAmJiBjdXJyZW50Tm9kZS5wYXJlbnQudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICByb290RnJhbWVOb2RlID0gY3VycmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdGVkOiB0cnVlLFxuICAgICAgICBmcmFtZU5vZGU6IGZyYW1lTm9kZSxcbiAgICAgICAgZnJhbWVJZDogZnJhbWVOb2RlLmlkLFxuICAgICAgICBmcmFtZU5hbWU6IGZyYW1lTm9kZS5uYW1lLFxuICAgICAgICBwYXJlbnRGcmFtZU5vZGU6IHBhcmVudEZyYW1lLFxuICAgICAgICBwYXJlbnRGcmFtZUlkOiBwYXJlbnRGcmFtZSA9PT0gbnVsbCB8fCBwYXJlbnRGcmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RnJhbWUuaWQsXG4gICAgICAgIHBhcmVudEZyYW1lTmFtZTogcGFyZW50RnJhbWUgPT09IG51bGwgfHwgcGFyZW50RnJhbWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhcmVudEZyYW1lLm5hbWUsXG4gICAgICAgIHNlbGVjdGVkTm9kZTogbm9kZSxcbiAgICAgICAgcm9vdEZyYW1lTm9kZTogcm9vdEZyYW1lTm9kZSxcbiAgICAgICAgcm9vdEZyYW1lSWQ6IHJvb3RGcmFtZU5vZGUgPT09IG51bGwgfHwgcm9vdEZyYW1lTm9kZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcm9vdEZyYW1lTm9kZS5pZCxcbiAgICAgICAgcm9vdEZyYW1lTmFtZTogcm9vdEZyYW1lTm9kZSA9PT0gbnVsbCB8fCByb290RnJhbWVOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb290RnJhbWVOb2RlLm5hbWUsXG4gICAgfTtcbn1cbi8vIO2KueyglSDtlITroIjsnoTsnLzroZwg67ew7Y+s7Yq4IOydtOuPmVxuZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbFRvRnJhbWUoZnJhbWVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZnJhbWVJZCk7XG4gICAgICAgIGlmIChmcmFtZSAmJlxuICAgICAgICAgICAgKGZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIiB8fFxuICAgICAgICAgICAgICAgIGZyYW1lLnR5cGUgPT09IFwiQ09NUE9ORU5UXCIgfHxcbiAgICAgICAgICAgICAgICBmcmFtZS50eXBlID09PSBcIklOU1RBTkNFXCIpKSB7XG4gICAgICAgICAgICAvLyDtlbTri7kg7ZSE66CI7J6E7Jy866GcIOu3sO2PrO2KuCDsnbTrj5lcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZnJhbWVdKTtcbiAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoQg7ISg7YOdICjshKDtg53soIEpXG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbZnJhbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2Nyb2xsaW5nIHRvIGZyYW1lOlwiLCBlcnJvcik7XG4gICAgfVxufVxuIiwiLy8gSGV4IOyDieyDgeqwkuydhCBSR0LroZwg67OA7ZmY7ZWY64qUIO2VqOyImFxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIC8vICPsnYQg7KCc6rGw7ZWY6rOgIDbsnpDrpqwg7IOJ7IOBIOy9lOuTnOulvCDstpTstpxcbiAgICBjb25zdCBjbGVhbkhleCA9IGhleC5jaGFyQXQoMCkgPT09IFwiI1wiID8gaGV4LnN1YnN0cmluZygxKSA6IGhleDtcbiAgICAvLyBSR0Ig6rCSIOy2lOy2nFxuICAgIGNvbnN0IHIgPSBwYXJzZUludChjbGVhbkhleC5zdWJzdHJpbmcoMCwgMiksIDE2KTtcbiAgICBjb25zdCBnID0gcGFyc2VJbnQoY2xlYW5IZXguc3Vic3RyaW5nKDIsIDQpLCAxNik7XG4gICAgY29uc3QgYiA9IHBhcnNlSW50KGNsZWFuSGV4LnN1YnN0cmluZyg0LCA2KSwgMTYpO1xuICAgIHJldHVybiB7IHIsIGcsIGIgfTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyDrqqjrjbgg67CPIOyEnOu5hOyKpCDrtojrn6zsmKTquLBcbmltcG9ydCB7IGdldEFsbEFubm90YXRpb25zLCBhbm5vdGF0aW9uR3JvdXBzLCB9IGZyb20gXCIuL21vZGVscy9hbm5vdGF0aW9uLm1vZGVsXCI7XG5pbXBvcnQgeyBjcmVhdGVBbm5vdGF0aW9uLCB1cGRhdGVBbm5vdGF0aW9uLCBkZWxldGVBbm5vdGF0aW9uLCBzY2FuRG9jdW1lbnRGb3JBbm5vdGF0aW9ucywgcmVvcmRlckFubm90YXRpb25zLCB9IGZyb20gXCIuL3NlcnZpY2VzL2Fubm90YXRpb24uc2VydmljZVwiO1xuaW1wb3J0IHsgY2hlY2tTZWxlY3RlZEZyYW1lLCBzY3JvbGxUb0ZyYW1lIH0gZnJvbSBcIi4vc2VydmljZXMvZnJhbWUuc2VydmljZVwiO1xuaW1wb3J0IHsgaGFuZGxlTm9kZVJlbW92YWwgfSBmcm9tIFwiLi9zZXJ2aWNlcy9kb2N1bWVudC5zZXJ2aWNlXCI7XG4vLyDtlIzrn6zqt7jsnbggVUkg7YGs6riwIOyEpOyglVxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB0aGVtZUNvbG9yczogdHJ1ZSxcbn0pO1xuLy8g7Y+w7Yq4IOuhnOuTnCAo7Y+w7Yq4IOq0gOugqCDsmKTrpZgg67Cp7KeA66W8IOychO2VtCDrr7jrpqwg66Gc65OcKVxuZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4vLyDshKDtg50g67OA6rK9IOydtOuypO2KuCDrpqzsiqTrhIhcbmZpZ21hLm9uKFwic2VsZWN0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3Rpb25JbmZvID0gY2hlY2tTZWxlY3RlZEZyYW1lKCk7XG4gICAgaWYgKHNlbGVjdGlvbkluZm8uc2VsZWN0ZWQgJiZcbiAgICAgICAgc2VsZWN0aW9uSW5mby5mcmFtZUlkICYmXG4gICAgICAgIHNlbGVjdGlvbkluZm8uZnJhbWVOYW1lKSB7XG4gICAgICAgIC8vIO2DgOqynyDtlITroIjsnoQgSUQg6rKw7KCVICjtla3sg4Eg7LWc7IOB7JyEIO2UhOugiOyehCBJRCDsgqzsmqkpXG4gICAgICAgIGNvbnN0IHRhcmdldEZyYW1lSWQgPSBzZWxlY3Rpb25JbmZvLnJvb3RGcmFtZUlkIHx8IHNlbGVjdGlvbkluZm8uZnJhbWVJZDtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJGUkFNRV9TRUxFQ1RFRFwiLFxuICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgIGZyYW1lTmFtZTogc2VsZWN0aW9uSW5mby5mcmFtZU5hbWUsXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QWxsQW5ub3RhdGlvbnMoKSxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICBwYXJlbnRGcmFtZU5hbWU6IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lTmFtZSB8fCBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyDshKDtg53snbQg7JeG7Ja064+EIOuqqOuToCDso7zshJ0g642w7J207YSwIOyghOyGoVxuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiBcIk5PX0ZSQU1FX1NFTEVDVEVEXCIsXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QWxsQW5ub3RhdGlvbnMoKSxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuLy8gVUnroZzrtoDthLAg66mU7Iuc7KeAIOyImOyLoFxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05cIjpcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb24obXNnLmFubm90YXRpb24sIG1zZy5zZXR0aW5ncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVF9TRUxFQ1RFRF9GUkFNRVwiOlxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uSW5mbyA9IGNoZWNrU2VsZWN0ZWRGcmFtZSgpO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGlvbkluZm8uc2VsZWN0ZWQgJiZcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25JbmZvLmZyYW1lSWQgJiZcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIO2DgOqynyDtlITroIjsnoQgSUQg6rKw7KCVICjtla3sg4Eg7LWc7IOB7JyEIO2UhOugiOyehCBJRCDsgqzsmqkpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVJZCA9IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lSWQgfHwgc2VsZWN0aW9uSW5mby5mcmFtZUlkO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJGUkFNRV9TRUxFQ1RFRFwiLFxuICAgICAgICAgICAgICAgICAgICBmcmFtZUlkOiB0YXJnZXRGcmFtZUlkLFxuICAgICAgICAgICAgICAgICAgICBmcmFtZU5hbWU6IHNlbGVjdGlvbkluZm8uZnJhbWVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QWxsQW5ub3RhdGlvbnMoKSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZVRpdGxlOiBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRGcmFtZU5hbWU6IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lTmFtZSB8fCBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOyEoO2DneydtCDsl4bslrTrj4Qg66qo65OgIOyjvOyEnSDrjbDsnbTthLAg7KCE7IahXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIk5PX0ZSQU1FX1NFTEVDVEVEXCIsXG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbGxBbm5vdGF0aW9ucygpLFxuICAgICAgICAgICAgICAgICAgICBmaWxlVGl0bGU6IGZpZ21hLnJvb3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICB5aWVsZCBkZWxldGVBbm5vdGF0aW9uKG1zZy5pZCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlVQREFURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICB5aWVsZCB1cGRhdGVBbm5vdGF0aW9uKG1zZy5hbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUkVPUkRFUl9BTk5PVEFUSU9OU1wiOlxuICAgICAgICAgICAgLy8g7KO87ISdIOyerOygleugrCDsspjrpqxcbiAgICAgICAgICAgIHlpZWxkIHJlb3JkZXJBbm5vdGF0aW9ucyhtc2cuYW5ub3RhdGlvbnMsIG1zZy5mcmFtZUlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU0NST0xMX1RPX0ZSQU1FXCI6XG4gICAgICAgICAgICBzY3JvbGxUb0ZyYW1lKG1zZy5mcmFtZUlkKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU0NST0xMX1RPX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgIC8vIGZyYW1lSWTsl5Ag7ZW064u57ZWY64qUIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7Jy866GcIOu3sO2PrO2KuCDsnbTrj5lcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Hcm91cEZyYW1lID0gYW5ub3RhdGlvbkdyb3Vwc1ttc2cuZnJhbWVJZF07XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsobTsnqztlZjrqbQg7ZW064u5IO2UhOugiOyehOycvOuhnCDrt7Dtj6ztirgg7J2064+ZXG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFthbm5vdGF0aW9uR3JvdXBGcmFtZV0pO1xuICAgICAgICAgICAgICAgIC8vIOyEoO2DneyggeycvOuhnCDtlbTri7kg7ZSE66CI7J6EIOyEoO2DnVxuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFthbm5vdGF0aW9uR3JvdXBGcmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsl4bripQg6rK97JqwLCDsm5Drs7gg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvRnJhbWUobXNnLmZyYW1lSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJTQ1JPTExfVE9fQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgLy8g7Yq57KCVIOyjvOyEnSDslYTsnbTthZzsnLzroZwg7J2064+Z7ZWY64qUIOq4sOuKpVxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gYW5ub3RhdGlvbkdyb3Vwc1ttc2cuZnJhbWVJZF07XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8g7KO87ISdIOq3uOujuSDtlITroIjsnoQg7JWI7JeQ7IScIO2VtOuLuSDrsojtmLjsnZgg7KO87ISdIOyVhOydtO2FnCDssL7quLBcbiAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSXRlbSA9IGFubm90YXRpb25GcmFtZS5maW5kQ2hpbGQoKG4pID0+IG4udHlwZSA9PT0gXCJGUkFNRVwiICYmIG4ubmFtZSA9PT0gYEFubm90YXRpb24gJHttc2cubnVtYmVyfWApO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDssL7snYAg7KO87ISdIOyVhOydtO2FnOycvOuhnCDrt7Dtj6ztirgg7J2064+ZXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbYW5ub3RhdGlvbkl0ZW1dKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7ZW064u5IOyjvOyEnSDslYTsnbTthZwg7ISg7YOdXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFthbm5vdGF0aW9uSXRlbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g7JWE7J207YWc7J2EIOywvuyngCDrqrvtlZwg6rK97JqwLCDqt7jro7kg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2Fubm90YXRpb25GcmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbYW5ub3RhdGlvbkZyYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsl4bripQg6rK97JqwLCDsm5Drs7gg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvRnJhbWUobXNnLmZyYW1lSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG4vLyDrhbjrk5wg7IKt7KCcIOydtOuypO2KuCDrpqzsiqTrhIgg65Ox66GdXG5maWdtYS5vbihcImRvY3VtZW50Y2hhbmdlXCIsIGhhbmRsZU5vZGVSZW1vdmFsKTtcbi8vIOy0iOq4sO2ZlCDtlajsiJhcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g64+E7YGQ66i87Yq47JeQ7IScIOyngeygkSDso7zshJ0g7KCV67O0IOyKpOy6lFxuICAgICAgICBzY2FuRG9jdW1lbnRGb3JBbm5vdGF0aW9ucygpO1xuICAgICAgICAvLyDtla3sg4Eg66i87KCAIOuqqOuToCDso7zshJ0g7KCE7IahICjtlITroIjsnoQg7ISg7YOd6rO8IOq0gOqzhOyXhuydtClcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJBTExfQU5OT1RBVElPTlNfTE9BREVEXCIsXG4gICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QWxsQW5ub3RhdGlvbnMoKSxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICAvLyDshKDtg53rkJwg7ZSE66CI7J6E7J20IOyeiOuKlCDqsr3smrAsIO2VtOuLuSDtlITroIjsnoQg7KCV67O064+EIOyghOyGoVxuICAgICAgICBjb25zdCB7IHNlbGVjdGVkLCBmcmFtZUlkLCBmcmFtZU5hbWUsIHBhcmVudEZyYW1lSWQsIHBhcmVudEZyYW1lTmFtZSB9ID0gY2hlY2tTZWxlY3RlZEZyYW1lKCk7XG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiBmcmFtZUlkICYmIGZyYW1lTmFtZSkge1xuICAgICAgICAgICAgLy8g7YOA6rKfIO2UhOugiOyehCBJRCDqsrDsoJUgKOu2gOuqqOqwgCDsnojsnLzrqbQg67aA66qoLCDsl4bsnLzrqbQg7ZiE7J6sIO2UhOugiOyehClcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZyYW1lSWQgPSBwYXJlbnRGcmFtZUlkIHx8IGZyYW1lSWQ7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJGUkFNRV9TRUxFQ1RFRFwiLFxuICAgICAgICAgICAgICAgIGZyYW1lSWQ6IHRhcmdldEZyYW1lSWQsXG4gICAgICAgICAgICAgICAgZnJhbWVOYW1lLFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbGxBbm5vdGF0aW9ucygpLFxuICAgICAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgICAgIHBhZ2VOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmVudEZyYW1lTmFtZTogcGFyZW50RnJhbWVOYW1lIHx8IGZyYW1lTmFtZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiTk9fRlJBTUVfU0VMRUNURURcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDtlIzrn6zqt7jsnbgg7Iuc7J6RIOyLnCDstIjquLDtmZQg7ZWo7IiYIO2YuOy2nFxuaW5pdGlhbGl6ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9