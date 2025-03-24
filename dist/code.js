/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// 플러그인 UI 크기 설정
figma.showUI(__html__, {
    width: 800,
    height: 600,
    themeColors: true
});
// 주석 데이터를 저장하는 배열
let annotations = [];
// 전역 주석 카운터 대신 프레임별 주석 번호 관리
let frameAnnotationCounters = {};
// 현재 선택된 프레임 ID와 해당 프레임의 주석 그룹을 저장
let annotationGroups = {};
// 프레임에 추가된 뱃지를 추적하기 위한 맵
let frameBadges = {};
// 도큐먼트에서 기존 주석 정보 가져오기
function scanDocumentForAnnotations() {
    // 프레임별 주석 번호 맵
    let frameMaxAnnotationNumbers = {};
    // 현재 페이지의 모든 노드 스캔
    function scanNode(node) {
        // 프레임의 주석 그룹이면 처리
        if (node.type === 'FRAME' && node.name.includes('Annotations')) {
            // 주석 그룹 이름에서 원본 프레임 이름 추출
            const frameName = node.name.replace(' Annotations', '');
            // 원본 프레임 찾기 시도
            let targetFrameId = '';
            figma.currentPage.findAll(n => {
                if (n.type === 'FRAME' && n.name === frameName) {
                    targetFrameId = n.id;
                    return true;
                }
                return false;
            });
            // 프레임 ID를 찾은 경우에만 매핑
            if (targetFrameId) {
                // 주석 그룹을 관리 맵에 추가 (원본 프레임 ID로 매핑)
                annotationGroups[targetFrameId] = node;
                // 해당 프레임에 대한 최대 주석 번호 초기화
                if (!frameMaxAnnotationNumbers[targetFrameId]) {
                    frameMaxAnnotationNumbers[targetFrameId] = 0;
                }
            }
            // 자식 노드 중 주석 항목 검색
            node.children.forEach(child => {
                if (child.type === 'FRAME' && child.name.includes('Annotation ')) {
                    // 주석 번호 추출
                    const numberMatch = child.name.match(/Annotation (\d+)/);
                    if (numberMatch && targetFrameId) {
                        const annotationNumber = parseInt(numberMatch[1]);
                        // 해당 프레임의 최대 주석 번호 업데이트
                        if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
                            frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
                        }
                        // 주석 제목과 설명 추출
                        let description = '';
                        child.children.forEach(annotationItem => {
                            if (annotationItem.type === 'TEXT') {
                                if (annotationItem.name === 'description') {
                                    description = annotationItem.characters;
                                }
                            }
                        });
                        // annotations 배열에 주석 추가
                        if (description) {
                            annotations.push({
                                id: Date.now() + '-' + annotationNumber,
                                number: annotationNumber,
                                description: description,
                                frameId: targetFrameId,
                                frameName: frameName,
                                settings: {
                                    color: "#6E56CF",
                                    fontSize: "small",
                                    cardWidth: "small"
                                }
                            });
                        }
                    }
                }
            });
        }
        // 뱃지인지 확인 (현재 페이지에 직접 추가된 뱃지)
        if (node.type === 'FRAME' && node.name.startsWith('Badge ')) {
            const numberMatch = node.name.match(/Badge (\d+)/);
            if (numberMatch) {
                const badgeNumber = parseInt(numberMatch[1]);
                // 위치 기반으로 가장 가까운 프레임 찾기
                // 이 부분은 실제 구현 시 더 복잡할 수 있음
                let closestFrame = null;
                let minDistance = Infinity;
                figma.currentPage.findAll(n => {
                    if (n.type === 'FRAME' && !n.name.includes('Annotations') && !n.name.startsWith('Badge')) {
                        // 뱃지와 프레임 간의 거리 계산
                        const distance = Math.sqrt(Math.pow(node.x - n.x, 2) +
                            Math.pow(node.y - n.y, 2));
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
                if (closestFrame && minDistance < 100) { // 거리 임계값은 조정 가능
                    const frameId = closestFrame.id;
                    if (!frameBadges[frameId]) {
                        frameBadges[frameId] = {};
                    }
                    frameBadges[frameId][badgeNumber] = node;
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
        if ('children' in node) {
            node.children.forEach(scanNode);
        }
    }
    // 현재 페이지부터 스캔 시작
    scanNode(figma.currentPage);
    // 프레임별 주석 번호 카운터 업데이트 (각 프레임마다 다음 번호는 최대 번호 + 1)
    Object.keys(frameMaxAnnotationNumbers).forEach(frameId => {
        frameAnnotationCounters[frameId] = frameMaxAnnotationNumbers[frameId] + 1;
    });
    console.log('도큐먼트 스캔 완료:', annotations.length, '개 주석 발견');
}
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
    if (node.type === 'FRAME') {
        frameNode = node;
    }
    // 프레임이 아닌 다른 레이어를 선택한 경우 부모 프레임 찾기
    else {
        // 부모 노드 체인을 따라가면서 가장 가까운 프레임 찾기
        let parent = node.parent;
        while (parent) {
            if (parent.type === 'FRAME') {
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
    if (frameNode.parent && frameNode.parent.type === 'FRAME') {
        parentFrame = frameNode.parent;
    }
    // 최상위 프레임 찾기 - 부모가 페이지인 프레임
    rootFrameNode = frameNode;
    let currentNode = frameNode;
    // 부모 체인을 따라 올라가며 최상위 프레임 찾기
    while (currentNode.parent && currentNode.parent.type === 'FRAME') {
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
        rootFrameName: rootFrameNode === null || rootFrameNode === void 0 ? void 0 : rootFrameNode.name
    };
}
// 프레임에 뱃지 추가 함수 - 항상 최상위 프레임을 기준으로 생성
function createBadgeOnFrame(frameNode, annotationNumber, color) {
    // 최상위 프레임 찾기
    let rootFrameNode = frameNode;
    let currentNode = frameNode;
    // 부모 체인을 끝까지 올라가며 가장 상위의 프레임 찾기
    while (currentNode.parent) {
        if (currentNode.parent.type === 'FRAME') {
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
    const colorValues = hexToRgb(color);
    badgeCircle.fills = [{
            type: 'SOLID',
            color: {
                r: colorValues.r / 255,
                g: colorValues.g / 255,
                b: colorValues.b / 255
            }
        }];
    // 뱃지 텍스트 생성
    const badgeText = figma.createText();
    badgeText.name = `BadgeText`;
    badgeText.characters = annotationNumber.toString();
    badgeText.fontSize = 12;
    badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
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
    if (!frameBadges[frameId]) {
        frameBadges[frameId] = {};
    }
    // 이미 존재하는 뱃지 개수 확인하고 위치 조정
    const badgeCount = Object.keys(frameBadges[frameId]).length;
    if (badgeCount > 0) {
        if (selectedNode) {
            // 선택된 노드 기준으로 위치 계산
            const rootAbsoluteX = rootFrameNode.absoluteTransform[0][2];
            const nodeX = selectedNode.absoluteTransform[0][2];
            // 기존 뱃지 옆에 간격을 두고 배치
            badgeContainer.x = (nodeX - rootAbsoluteX) + 10 + (badgeCount * 28);
        }
        else {
            badgeContainer.x = 10 + (badgeCount * 28);
        }
    }
    // 뱃지 맵에 저장 (최상위 프레임 ID 사용)
    frameBadges[frameId][annotationNumber] = badgeContainer;
    return badgeContainer;
}
// 주석 생성 함수
function createAnnotation(annotationData, settings) {
    return __awaiter(this, void 0, void 0, function* () {
        const selectedNode = figma.currentPage.selection[0];
        if (!selectedNode) {
            figma.notify('Please select a frame first');
            return;
        }
        // 최상위 프레임 찾기
        let currentNode = selectedNode;
        let rootFrameNode = null;
        while (currentNode.parent) {
            if (currentNode.parent.type === 'FRAME') {
                rootFrameNode = currentNode.parent;
            }
            currentNode = currentNode.parent;
        }
        if (!rootFrameNode) {
            figma.notify('No parent frame found');
            return;
        }
        // 다음 주석 번호 계산
        const nextAnnotationNumber = annotations.length + 1;
        // 새로운 주석 객체 생성
        const newAnnotation = {
            id: `annotation-${Date.now()}`,
            number: nextAnnotationNumber,
            frameId: rootFrameNode.id,
            frameName: rootFrameNode.name,
            description: annotationData.description || `Annotation ${nextAnnotationNumber}`,
            settings: settings
        };
        // 주석 그룹 프레임 생성
        const annotationGroupFrame = figma.createFrame();
        annotationGroupFrame.name = `Annotation Group ${nextAnnotationNumber}`;
        annotationGroupFrame.layoutMode = "VERTICAL";
        annotationGroupFrame.primaryAxisAlignItems = "MIN";
        annotationGroupFrame.counterAxisAlignItems = "MIN";
        annotationGroupFrame.itemSpacing = 8;
        annotationGroupFrame.paddingTop = 16;
        annotationGroupFrame.paddingRight = 16;
        annotationGroupFrame.paddingBottom = 16;
        annotationGroupFrame.paddingLeft = 16;
        annotationGroupFrame.fills = [];
        annotationGroupFrame.strokes = [];
        annotationGroupFrame.x = rootFrameNode.x + rootFrameNode.width + 20;
        annotationGroupFrame.y = rootFrameNode.y;
        annotationGroupFrame.resize(300, 200);
        // 주석 텍스트 노드 생성
        const annotationText = figma.createText();
        annotationText.characters = newAnnotation.description;
        annotationText.fontSize = settings.fontSize === 'small' ? 12 : 14;
        annotationText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
        annotationText.textAutoResize = "HEIGHT";
        annotationText.textAlignHorizontal = "LEFT";
        annotationText.textAlignVertical = "TOP";
        annotationText.constraints = { horizontal: "SCALE", vertical: "SCALE" };
        annotationText.layoutAlign = "INHERIT";
        // 주석 텍스트를 그룹 프레임에 추가
        annotationGroupFrame.appendChild(annotationText);
        // 주석 그룹 프레임을 최상위 프레임에 추가
        rootFrameNode.appendChild(annotationGroupFrame);
        // 주석 데이터에 그룹 프레임 ID 추가
        newAnnotation.groupFrameId = annotationGroupFrame.id;
        // 뱃지 생성
        createBadgeOnFrame(selectedNode, nextAnnotationNumber, settings.color);
        // 주석 목록에 추가
        annotations.push(newAnnotation);
        // UI에 새 주석 생성 알림
        figma.ui.postMessage({
            type: "ANNOTATION_CREATED",
            annotation: newAnnotation,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
            parentFrameName: rootFrameNode.name
        });
    });
}
// Hex 색상값을 RGB로 변환하는 함수
function hexToRgb(hex) {
    // #을 제거하고 6자리 색상 코드를 추출
    const cleanHex = hex.charAt(0) === '#' ? hex.substring(1) : hex;
    // RGB 값 추출
    const r = parseInt(cleanHex.substring(0, 2), 16);
    const g = parseInt(cleanHex.substring(2, 4), 16);
    const b = parseInt(cleanHex.substring(4, 6), 16);
    return { r, g, b };
}
// 선택 변경 이벤트 리스너
figma.on('selectionchange', () => {
    const selectionInfo = checkSelectedFrame();
    if (selectionInfo.selected && selectionInfo.frameId && selectionInfo.frameName) {
        // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
        const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
        figma.ui.postMessage({
            type: 'FRAME_SELECTED',
            frameId: targetFrameId,
            frameName: selectionInfo.frameName,
            annotations,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name,
            parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName
        });
    }
    else {
        // 선택이 없어도 모든 주석 데이터 전송
        figma.ui.postMessage({
            type: 'NO_FRAME_SELECTED',
            annotations,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name
        });
    }
});
// UI로부터 메시지 수신
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (msg.type) {
        case 'CREATE_ANNOTATION':
            yield createAnnotation(msg.annotation, msg.settings);
            break;
        case 'GET_SELECTED_FRAME':
            const selectionInfo = checkSelectedFrame();
            if (selectionInfo.selected && selectionInfo.frameId && selectionInfo.frameName) {
                // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
                const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
                figma.ui.postMessage({
                    type: 'FRAME_SELECTED',
                    frameId: targetFrameId,
                    frameName: selectionInfo.frameName,
                    annotations,
                    fileTitle: figma.root.name,
                    pageName: figma.currentPage.name,
                    parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName
                });
            }
            else {
                // 선택이 없어도 모든 주석 데이터 전송
                figma.ui.postMessage({
                    type: 'NO_FRAME_SELECTED',
                    annotations,
                    fileTitle: figma.root.name,
                    pageName: figma.currentPage.name
                });
            }
            break;
        case 'DELETE_ANNOTATION':
            // 주석 삭제 기능 추가 필요
            deleteAnnotation(msg.id);
            break;
        case 'UPDATE_ANNOTATION':
            // 주석 업데이트 기능 추가 필요
            const updatedAnnotation = msg.annotation;
            // 주석 배열에서 해당 ID를 가진 주석 찾기
            const annotationIndex = annotations.findIndex(a => a.id === updatedAnnotation.id);
            if (annotationIndex !== -1) {
                try {
                    // 폰트 로드 - 텍스트 변경 전 필요
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
                    // 주석 정보 업데이트
                    annotations[annotationIndex] = updatedAnnotation;
                    // 주석 그룹 프레임 찾기
                    const annotationGroupFrame = annotationGroups[updatedAnnotation.frameId];
                    if (annotationGroupFrame) {
                        // 해당 번호의 주석 아이템 찾기
                        const annotationItem = annotationGroupFrame.findChild(n => n.type === 'FRAME' && n.name === `Annotation ${updatedAnnotation.number}`);
                        if (annotationItem) {
                            // 주석 아이템 내부의 설명 텍스트 노드 찾기
                            const descNode = annotationItem.findChild(n => n.type === 'TEXT' && n.name === 'description');
                            // 설명 텍스트 업데이트
                            if (descNode) {
                                descNode.characters = updatedAnnotation.description;
                                console.log(`설명 노드 텍스트 업데이트: ${updatedAnnotation.description}`);
                            }
                            else {
                                console.warn('설명 노드를 찾을 수 없음');
                            }
                        }
                        else {
                            console.warn(`주석 아이템 ${updatedAnnotation.number}을 찾을 수 없음`);
                        }
                    }
                    else {
                        console.warn(`주석 그룹 프레임을 찾을 수 없음: ${updatedAnnotation.frameId}`);
                    }
                    // 업데이트된 주석 정보를 UI에 알림
                    figma.ui.postMessage({
                        type: 'ANNOTATION_UPDATED',
                        annotation: updatedAnnotation
                    });
                    // figma.notify(`주석 ID ${updatedAnnotation.id} 업데이트 완료`);
                    console.log(`주석 ID ${updatedAnnotation.id} 업데이트 완료`, updatedAnnotation);
                }
                catch (error) {
                    console.error(`주석 업데이트 중 오류 발생:`, error);
                    // figma.notify(`주석 업데이트 중 오류가 발생했습니다: ${error}`);
                }
            }
            else {
                console.error(`주석 ID ${updatedAnnotation.id}를 찾을 수 없음`);
                figma.notify(`주석을 업데이트할 수 없습니다: ID ${updatedAnnotation.id}를 찾을 수 없음`);
            }
            break;
        case 'cancel':
            figma.closePlugin();
            break;
        case 'SCROLL_TO_FRAME':
            scrollToFrame(msg.frameId);
            break;
        case 'SCROLL_TO_ANNOTATION_GROUP':
            // frameId에 해당하는 주석 그룹 프레임으로 뷰포트 이동
            const annotationGroupFrame = annotationGroups[msg.frameId];
            if (annotationGroupFrame) {
                // 주석 그룹 프레임이 존재하면 해당 프레임으로 뷰포트 이동
                figma.viewport.scrollAndZoomIntoView([annotationGroupFrame]);
                // 선택적으로 해당 프레임 선택
                figma.currentPage.selection = [annotationGroupFrame];
            }
            else {
                // 주석 그룹 프레임이 없는 경우, 원본 프레임으로 이동
                scrollToFrame(msg.frameId);
            }
            break;
        case 'SCROLL_TO_ANNOTATION':
            // 특정 주석 아이템으로 이동하는 기능
            const annotationFrame = annotationGroups[msg.frameId];
            if (annotationFrame) {
                // 주석 그룹 프레임 안에서 해당 번호의 주석 아이템 찾기
                const annotationItem = annotationFrame.findChild(n => n.type === 'FRAME' && n.name === `Annotation ${msg.number}`);
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
                scrollToFrame(msg.frameId);
            }
            break;
    }
});
// 노드 삭제 이벤트 감지 함수
function handleNodeRemoval(event) {
    // 문서가 변경되었을 때만 처리
    if (!event.documentChanges)
        return;
    let dataChanged = false;
    // 문서 변경 내용 중 삭제된 노드가 있는지 확인
    event.documentChanges.forEach(change => {
        if (change.type === 'DELETE' && change.node) {
            const deletedNode = change.node;
            const deletedNodeId = deletedNode.id;
            // 삭제된 노드 정보 가져오기
            // RemovedNode는 제한된 정보만 있으므로, id를 기반으로 작업해야 함
            // 1. 삭제된 노드의 ID가 프레임 ID와 일치하는지 확인
            // 프레임에 대한 주석이 있는지 확인
            const annotationsToRemove = annotations.filter(a => a.frameId === deletedNodeId);
            if (annotationsToRemove.length > 0) {
                // 주석 삭제
                annotations = annotations.filter(a => a.frameId !== deletedNodeId);
                dataChanged = true;
                console.log(`프레임 ID ${deletedNodeId} 관련 주석 ${annotationsToRemove.length}개 삭제됨`);
                // 프레임별 주석 카운터에서도 제거
                if (frameAnnotationCounters[deletedNodeId]) {
                    delete frameAnnotationCounters[deletedNodeId];
                }
            }
            // 주석 그룹 맵에서 삭제
            if (annotationGroups[deletedNodeId]) {
                delete annotationGroups[deletedNodeId];
                dataChanged = true;
            }
            // 뱃지 맵에서 삭제
            if (frameBadges[deletedNodeId]) {
                delete frameBadges[deletedNodeId];
                dataChanged = true;
            }
            // 2. 주석 그룹 맵에서 ID가 일치하는 노드가 있는지 확인
            Object.keys(annotationGroups).forEach(frameId => {
                var _a;
                if (annotationGroups[frameId].id === deletedNodeId) {
                    // 해당 프레임 관련 주석 삭제
                    const frameName = (_a = annotations.find(a => a.frameId === frameId)) === null || _a === void 0 ? void 0 : _a.frameName;
                    if (frameName) {
                        annotations = annotations.filter(a => a.frameId !== frameId);
                        dataChanged = true;
                        console.log(`프레임 '${frameName}'에 대한 주석 그룹이 삭제됨`);
                    }
                    delete annotationGroups[frameId];
                    dataChanged = true;
                }
            });
            // 3. 주석 번호로 매핑된 뱃지가 있는지 확인
            for (const frameId in frameBadges) {
                for (const badgeNumber in frameBadges[frameId]) {
                    if (frameBadges[frameId][badgeNumber].id === deletedNodeId) {
                        // 해당 뱃지 번호를 가진 주석이 있는지 확인하고 삭제
                        const annotationNumber = parseInt(badgeNumber);
                        const annotationToRemove = annotations.find(a => a.number === annotationNumber);
                        if (annotationToRemove) {
                            // 주석 배열에서 삭제
                            annotations = annotations.filter(a => a.number !== annotationNumber);
                            dataChanged = true;
                            console.log(`뱃지 번호 ${annotationNumber}에 해당하는 주석 삭제됨`);
                        }
                        // 뱃지 맵에서 삭제
                        delete frameBadges[frameId][badgeNumber];
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
            type: 'ALL_ANNOTATIONS_LOADED',
            annotations: annotations,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name
        });
        // 현재 선택된 프레임이 있으면 해당 프레임의 주석도 업데이트
        const { selected, frameId, frameName, parentFrameId, parentFrameName } = checkSelectedFrame();
        if (selected && frameId) {
            const targetFrameId = parentFrameId || frameId;
            const frameAnnotations = annotations.filter(a => a.frameId === targetFrameId);
            figma.ui.postMessage({
                type: 'FRAME_SELECTED',
                frameId: targetFrameId,
                frameName,
                annotations: frameAnnotations,
                fileTitle: figma.root.name,
                pageName: figma.currentPage.name,
                parentFrameName: parentFrameName || frameName
            });
        }
    }
}
// 노드 삭제 이벤트 리스너 등록
figma.on('documentchange', handleNodeRemoval);
// 초기화 함수
function initialize() {
    return __awaiter(this, void 0, void 0, function* () {
        // 도큐먼트에서 직접 주석 정보 스캔
        scanDocumentForAnnotations();
        // 항상 먼저 모든 주석 전송 (프레임 선택과 관계없이)
        figma.ui.postMessage({
            type: 'ALL_ANNOTATIONS_LOADED',
            annotations: annotations,
            fileTitle: figma.root.name,
            pageName: figma.currentPage.name
        });
        // 선택된 프레임이 있는 경우, 해당 프레임 정보도 전송
        const { selected, frameId, frameName, parentFrameId, parentFrameName } = checkSelectedFrame();
        if (selected && frameId && frameName) {
            // 타겟 프레임 ID 결정 (부모가 있으면 부모, 없으면 현재 프레임)
            const targetFrameId = parentFrameId || frameId;
            figma.ui.postMessage({
                type: 'FRAME_SELECTED',
                frameId: targetFrameId,
                frameName,
                annotations,
                fileTitle: figma.root.name,
                pageName: figma.currentPage.name,
                parentFrameName: parentFrameName || frameName
            });
        }
        else {
            figma.ui.postMessage({
                type: 'NO_FRAME_SELECTED'
            });
        }
    });
}
// 플러그인 시작 시 초기화 함수 호출
initialize();
// 특정 프레임으로 뷰포트 이동
function scrollToFrame(frameId) {
    try {
        const frame = figma.getNodeById(frameId);
        if (frame && (frame.type === 'FRAME' || frame.type === 'COMPONENT' || frame.type === 'INSTANCE')) {
            // 해당 프레임으로 뷰포트 이동
            figma.viewport.scrollAndZoomIntoView([frame]);
            // 해당 프레임 선택 (선택적)
            figma.currentPage.selection = [frame];
        }
    }
    catch (error) {
        console.error('Error scrolling to frame:', error);
    }
}
// 주석 삭제 함수
function deleteAnnotation(annotationId) {
    return __awaiter(this, void 0, void 0, function* () {
        const annotationIndex = annotations.findIndex(a => a.id === annotationId);
        if (annotationIndex === -1)
            return;
        const annotation = annotations[annotationIndex];
        // 주석 그룹 프레임 삭제
        const groupFrame = figma.getNodeById(annotation.groupFrameId);
        if (groupFrame) {
            groupFrame.remove();
        }
        // 뱃지 삭제
        const badgeNode = figma.currentPage.findChild(n => n.type === 'FRAME' && n.name === `Badge ${annotation.number}`);
        if (badgeNode) {
            badgeNode.remove();
        }
        // 주석 데이터에서 제거
        annotations.splice(annotationIndex, 1);
        // UI에 주석 삭제 알림
        figma.ui.postMessage({
            type: "ANNOTATION_DELETED",
            id: annotationId
        });
    });
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdCQUF3QixvQkFBb0I7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLHFCQUFxQjtBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxxQkFBcUI7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx3QkFBd0Isb0JBQW9CO0FBQzlFO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GLGdEQUFnRCxnQ0FBZ0M7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0lBQWtJLHlCQUF5QjtBQUMzSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsOEJBQThCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCx5QkFBeUI7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsNERBQTRELDBCQUEwQjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLDZDQUE2QyxzQkFBc0I7QUFDbkUseUNBQXlDLHNCQUFzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsTUFBTTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMscUJBQXFCO0FBQzVELHFEQUFxRCxxQkFBcUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUhBQXFILFdBQVc7QUFDaEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsZUFBZSxRQUFRLDJCQUEyQjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsVUFBVTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGlCQUFpQjtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsK0RBQStEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxnQkFBZ0IsK0RBQStEO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxR0FBcUcsa0JBQWtCO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDVSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG4vLyDtlIzrn6zqt7jsnbggVUkg7YGs6riwIOyEpOyglVxuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7XG4gICAgd2lkdGg6IDgwMCxcbiAgICBoZWlnaHQ6IDYwMCxcbiAgICB0aGVtZUNvbG9yczogdHJ1ZVxufSk7XG4vLyDso7zshJ0g642w7J207YSw66W8IOyggOyepe2VmOuKlCDrsLDsl7RcbmxldCBhbm5vdGF0aW9ucyA9IFtdO1xuLy8g7KCE7JetIOyjvOyEnSDsubTsmrTthLAg64yA7IugIO2UhOugiOyehOuzhCDso7zshJ0g67KI7Zi4IOq0gOumrFxubGV0IGZyYW1lQW5ub3RhdGlvbkNvdW50ZXJzID0ge307XG4vLyDtmITsnqwg7ISg7YOd65CcIO2UhOugiOyehCBJROyZgCDtlbTri7kg7ZSE66CI7J6E7J2YIOyjvOyEnSDqt7jro7nsnYQg7KCA7J6lXG5sZXQgYW5ub3RhdGlvbkdyb3VwcyA9IHt9O1xuLy8g7ZSE66CI7J6E7JeQIOy2lOqwgOuQnCDrsYPsp4Drpbwg7LaU7KCB7ZWY6riwIOychO2VnCDrp7VcbmxldCBmcmFtZUJhZGdlcyA9IHt9O1xuLy8g64+E7YGQ66i87Yq47JeQ7IScIOq4sOyhtCDso7zshJ0g7KCV67O0IOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gc2NhbkRvY3VtZW50Rm9yQW5ub3RhdGlvbnMoKSB7XG4gICAgLy8g7ZSE66CI7J6E67OEIOyjvOyEnSDrsojtmLgg66e1XG4gICAgbGV0IGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnMgPSB7fTtcbiAgICAvLyDtmITsnqwg7Y6Y7J207KeA7J2YIOuqqOuToCDrhbjrk5wg7Iqk7LqUXG4gICAgZnVuY3Rpb24gc2Nhbk5vZGUobm9kZSkge1xuICAgICAgICAvLyDtlITroIjsnoTsnZgg7KO87ISdIOq3uOujueydtOuptCDsspjrpqxcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ0ZSQU1FJyAmJiBub2RlLm5hbWUuaW5jbHVkZXMoJ0Fubm90YXRpb25zJykpIHtcbiAgICAgICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7J2066aE7JeQ7IScIOybkOuzuCDtlITroIjsnoQg7J2066aEIOy2lOy2nFxuICAgICAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gbm9kZS5uYW1lLnJlcGxhY2UoJyBBbm5vdGF0aW9ucycsICcnKTtcbiAgICAgICAgICAgIC8vIOybkOuzuCDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICAgICAgbGV0IHRhcmdldEZyYW1lSWQgPSAnJztcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwobiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG4udHlwZSA9PT0gJ0ZSQU1FJyAmJiBuLm5hbWUgPT09IGZyYW1lTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRGcmFtZUlkID0gbi5pZDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g7ZSE66CI7J6EIElE66W8IOywvuydgCDqsr3smrDsl5Drp4wg66ek7ZWRXG4gICAgICAgICAgICBpZiAodGFyZ2V0RnJhbWVJZCkge1xuICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDqt7jro7nsnYQg6rSA66asIOunteyXkCDstpTqsIAgKOybkOuzuCDtlITroIjsnoQgSUTroZwg66ek7ZWRKVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cHNbdGFyZ2V0RnJhbWVJZF0gPSBub2RlO1xuICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoTsl5Ag64yA7ZWcIOy1nOuMgCDso7zshJ0g67KI7Zi4IOy0iOq4sO2ZlFxuICAgICAgICAgICAgICAgIGlmICghZnJhbWVNYXhBbm5vdGF0aW9uTnVtYmVyc1t0YXJnZXRGcmFtZUlkXSkge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW3RhcmdldEZyYW1lSWRdID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsnpDsi50g64W465OcIOykkSDso7zshJ0g7ZWt66qpIOqygOyDiVxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gJ0ZSQU1FJyAmJiBjaGlsZC5uYW1lLmluY2x1ZGVzKCdBbm5vdGF0aW9uICcpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDrsojtmLgg7LaU7LacXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlck1hdGNoID0gY2hpbGQubmFtZS5tYXRjaCgvQW5ub3RhdGlvbiAoXFxkKykvKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlck1hdGNoICYmIHRhcmdldEZyYW1lSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25OdW1iZXIgPSBwYXJzZUludChudW1iZXJNYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDtlbTri7kg7ZSE66CI7J6E7J2YIOy1nOuMgCDso7zshJ0g67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25OdW1iZXIgPiBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW3RhcmdldEZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVNYXhBbm5vdGF0aW9uTnVtYmVyc1t0YXJnZXRGcmFtZUlkXSA9IGFubm90YXRpb25OdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g7KCc66qp6rO8IOyEpOuqhSDstpTstpxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuY2hpbGRyZW4uZm9yRWFjaChhbm5vdGF0aW9uSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25JdGVtLnR5cGUgPT09ICdURVhUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkl0ZW0ubmFtZSA9PT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gPSBhbm5vdGF0aW9uSXRlbS5jaGFyYWN0ZXJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbm5vdGF0aW9ucyDrsLDsl7Tsl5Ag7KO87ISdIOy2lOqwgFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBEYXRlLm5vdygpICsgJy0nICsgYW5ub3RhdGlvbk51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBhbm5vdGF0aW9uTnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lSWQ6IHRhcmdldEZyYW1lSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTmFtZTogZnJhbWVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzZFNTZDRlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwic21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRXaWR0aDogXCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuxg+yngOyduOyngCDtmZXsnbggKO2YhOyerCDtjpjsnbTsp4Dsl5Ag7KeB7KCRIOy2lOqwgOuQnCDrsYPsp4ApXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdGUkFNRScgJiYgbm9kZS5uYW1lLnN0YXJ0c1dpdGgoJ0JhZGdlICcpKSB7XG4gICAgICAgICAgICBjb25zdCBudW1iZXJNYXRjaCA9IG5vZGUubmFtZS5tYXRjaCgvQmFkZ2UgKFxcZCspLyk7XG4gICAgICAgICAgICBpZiAobnVtYmVyTWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBiYWRnZU51bWJlciA9IHBhcnNlSW50KG51bWJlck1hdGNoWzFdKTtcbiAgICAgICAgICAgICAgICAvLyDsnITsuZgg6riw67CY7Jy866GcIOqwgOyepSDqsIDquYzsmrQg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICAgICAgICAgIC8vIOydtCDrtoDrtoTsnYAg7Iuk7KCcIOq1rO2YhCDsi5wg642UIOuzteyeoe2VoCDsiJgg7J6I7J2MXG4gICAgICAgICAgICAgICAgbGV0IGNsb3Nlc3RGcmFtZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGV0IG1pbkRpc3RhbmNlID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbChuID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG4udHlwZSA9PT0gJ0ZSQU1FJyAmJiAhbi5uYW1lLmluY2x1ZGVzKCdBbm5vdGF0aW9ucycpICYmICFuLm5hbWUuc3RhcnRzV2l0aCgnQmFkZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g67GD7KeA7JmAIO2UhOugiOyehCDqsITsnZgg6rGw66asIOqzhOyCsFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlzdGFuY2UgPSBNYXRoLnNxcnQoTWF0aC5wb3cobm9kZS54IC0gbi54LCAyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWF0aC5wb3cobm9kZS55IC0gbi55LCAyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDqsIDsnqUg6rCA6rmM7Jq0IO2UhOugiOyehCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZSA8IG1pbkRpc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RnJhbWUgPSBuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDqsIDsnqUg6rCA6rmM7Jq0IO2UhOugiOyehOydtCDsnojqs6AsIOqxsOumrOqwgCDstqnrtoTtnogg6rCA6rmM7Jqw66m0IOunpO2VkVxuICAgICAgICAgICAgICAgIGlmIChjbG9zZXN0RnJhbWUgJiYgbWluRGlzdGFuY2UgPCAxMDApIHsgLy8g6rGw66asIOyehOqzhOqwkuydgCDsobDsoJUg6rCA64qlXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lSWQgPSBjbG9zZXN0RnJhbWUuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZnJhbWVCYWRnZXNbZnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdID0ge307XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZnJhbWVCYWRnZXNbZnJhbWVJZF1bYmFkZ2VOdW1iZXJdID0gbm9kZTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7ZSE66CI7J6E67OEIOyjvOyEnSDrsojtmLgg7Lm07Jq07YSwIOy0iOq4sO2ZlFxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbZnJhbWVJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbZnJhbWVJZF0gPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOy1nOuMgCDso7zshJ0g67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFkZ2VOdW1iZXIgPiBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZU1heEFubm90YXRpb25OdW1iZXJzW2ZyYW1lSWRdID0gYmFkZ2VOdW1iZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g7J6s6reA7KCB7Jy866GcIOyekOyLnSDrhbjrk5wg7Iqk7LqUXG4gICAgICAgIGlmICgnY2hpbGRyZW4nIGluIG5vZGUpIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChzY2FuTm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g7ZiE7J6sIO2OmOydtOyngOu2gO2EsCDsiqTsupQg7Iuc7J6RXG4gICAgc2Nhbk5vZGUoZmlnbWEuY3VycmVudFBhZ2UpO1xuICAgIC8vIO2UhOugiOyehOuzhCDso7zshJ0g67KI7Zi4IOy5tOyatO2EsCDsl4XrjbDsnbTtirggKOqwgSDtlITroIjsnoTrp4jri6Qg64uk7J2MIOuyiO2YuOuKlCDstZzrjIAg67KI7Zi4ICsgMSlcbiAgICBPYmplY3Qua2V5cyhmcmFtZU1heEFubm90YXRpb25OdW1iZXJzKS5mb3JFYWNoKGZyYW1lSWQgPT4ge1xuICAgICAgICBmcmFtZUFubm90YXRpb25Db3VudGVyc1tmcmFtZUlkXSA9IGZyYW1lTWF4QW5ub3RhdGlvbk51bWJlcnNbZnJhbWVJZF0gKyAxO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCfrj4TtgZDrqLztirgg7Iqk7LqUIOyZhOujjDonLCBhbm5vdGF0aW9ucy5sZW5ndGgsICfqsJwg7KO87ISdIOuwnOqyrCcpO1xufVxuLy8g7ZiE7J6sIOyEoO2DneuQnCDtlITroIjsnoTsnbQg7J6I64qU7KeAIO2ZleyduO2VmOqzoCwg7LWc7IOB7JyEIO2UhOugiOyehCDsoJXrs7Trj4Qg67CY7ZmYXG5mdW5jdGlvbiBjaGVja1NlbGVjdGVkRnJhbWUoKSB7XG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uO1xuICAgIGlmIChzZWxlY3Rpb24ubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIHJldHVybiB7IHNlbGVjdGVkOiBmYWxzZSB9O1xuICAgIH1cbiAgICBjb25zdCBub2RlID0gc2VsZWN0aW9uWzBdO1xuICAgIGxldCBmcmFtZU5vZGUgPSBudWxsO1xuICAgIGxldCByb290RnJhbWVOb2RlID0gbnVsbDtcbiAgICAvLyDshKDtg53rkJwg64W465Oc6rCAIOyngeygkSDtlITroIjsnoTsnbgg6rK97JqwXG4gICAgaWYgKG5vZGUudHlwZSA9PT0gJ0ZSQU1FJykge1xuICAgICAgICBmcmFtZU5vZGUgPSBub2RlO1xuICAgIH1cbiAgICAvLyDtlITroIjsnoTsnbQg7JWE64uMIOuLpOuluCDroIjsnbTslrTrpbwg7ISg7YOd7ZWcIOqyveyasCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgIGVsc2Uge1xuICAgICAgICAvLyDrtoDrqqgg64W465OcIOyytOyduOydhCDrlLDrnbzqsIDrqbTshJwg6rCA7J6lIOqwgOq5jOyatCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICAgICAgd2hpbGUgKHBhcmVudCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICAgICAgZnJhbWVOb2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICAvLyDtlITroIjsnoTsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrBcbiAgICAgICAgaWYgKCFmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IHNlbGVjdGVkOiBmYWxzZSwgc2VsZWN0ZWROb2RlOiBub2RlIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g7LC+7J2AIO2UhOugiOyehOydmCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgIGxldCBwYXJlbnRGcmFtZSA9IG51bGw7XG4gICAgLy8g67aA66qoIOuFuOuTnOqwgCDtlITroIjsnoTsnbjsp4Ag7ZmV7J24XG4gICAgaWYgKGZyYW1lTm9kZS5wYXJlbnQgJiYgZnJhbWVOb2RlLnBhcmVudC50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgIHBhcmVudEZyYW1lID0gZnJhbWVOb2RlLnBhcmVudDtcbiAgICB9XG4gICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLAgLSDrtoDrqqjqsIAg7Y6Y7J207KeA7J24IO2UhOugiOyehFxuICAgIHJvb3RGcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gZnJhbWVOb2RlO1xuICAgIC8vIOu2gOuqqCDssrTsnbjsnYQg65Sw6528IOyYrOudvOqwgOupsCDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sFxuICAgIHdoaWxlIChjdXJyZW50Tm9kZS5wYXJlbnQgJiYgY3VycmVudE5vZGUucGFyZW50LnR5cGUgPT09ICdGUkFNRScpIHtcbiAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnQ7XG4gICAgICAgIHJvb3RGcmFtZU5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICAgIGZyYW1lTm9kZTogZnJhbWVOb2RlLFxuICAgICAgICBmcmFtZUlkOiBmcmFtZU5vZGUuaWQsXG4gICAgICAgIGZyYW1lTmFtZTogZnJhbWVOb2RlLm5hbWUsXG4gICAgICAgIHBhcmVudEZyYW1lTm9kZTogcGFyZW50RnJhbWUsXG4gICAgICAgIHBhcmVudEZyYW1lSWQ6IHBhcmVudEZyYW1lID09PSBudWxsIHx8IHBhcmVudEZyYW1lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJlbnRGcmFtZS5pZCxcbiAgICAgICAgcGFyZW50RnJhbWVOYW1lOiBwYXJlbnRGcmFtZSA9PT0gbnVsbCB8fCBwYXJlbnRGcmFtZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RnJhbWUubmFtZSxcbiAgICAgICAgc2VsZWN0ZWROb2RlOiBub2RlLFxuICAgICAgICByb290RnJhbWVOb2RlOiByb290RnJhbWVOb2RlLFxuICAgICAgICByb290RnJhbWVJZDogcm9vdEZyYW1lTm9kZSA9PT0gbnVsbCB8fCByb290RnJhbWVOb2RlID09PSB2b2lkIDAgPyB2b2lkIDAgOiByb290RnJhbWVOb2RlLmlkLFxuICAgICAgICByb290RnJhbWVOYW1lOiByb290RnJhbWVOb2RlID09PSBudWxsIHx8IHJvb3RGcmFtZU5vZGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJvb3RGcmFtZU5vZGUubmFtZVxuICAgIH07XG59XG4vLyDtlITroIjsnoTsl5Ag67GD7KeAIOy2lOqwgCDtlajsiJggLSDtla3sg4Eg7LWc7IOB7JyEIO2UhOugiOyehOydhCDquLDspIDsnLzroZwg7IOd7ISxXG5mdW5jdGlvbiBjcmVhdGVCYWRnZU9uRnJhbWUoZnJhbWVOb2RlLCBhbm5vdGF0aW9uTnVtYmVyLCBjb2xvcikge1xuICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgbGV0IHJvb3RGcmFtZU5vZGUgPSBmcmFtZU5vZGU7XG4gICAgbGV0IGN1cnJlbnROb2RlID0gZnJhbWVOb2RlO1xuICAgIC8vIOu2gOuqqCDssrTsnbjsnYQg64Gd6rmM7KeAIOyYrOudvOqwgOupsCDqsIDsnqUg7IOB7JyE7J2YIO2UhOugiOyehCDssL7quLBcbiAgICB3aGlsZSAoY3VycmVudE5vZGUucGFyZW50KSB7XG4gICAgICAgIGlmIChjdXJyZW50Tm9kZS5wYXJlbnQudHlwZSA9PT0gJ0ZSQU1FJykge1xuICAgICAgICAgICAgcm9vdEZyYW1lTm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcbiAgICB9XG4gICAgLy8g67GD7KeAIOy7qO2FjOydtOuEiCDsg53shLFcbiAgICBjb25zdCBiYWRnZUNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgYmFkZ2VDb250YWluZXIubmFtZSA9IGBCYWRnZSAke2Fubm90YXRpb25OdW1iZXJ9YDtcbiAgICBiYWRnZUNvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJOT05FXCI7XG4gICAgYmFkZ2VDb250YWluZXIucmVzaXplKDI0LCAyNCk7XG4gICAgYmFkZ2VDb250YWluZXIuZmlsbHMgPSBbXTtcbiAgICAvLyDshKDtg53rkJwg64W465Oc7J2YIOygiOuMgCDsnITsuZjrpbwg6rOE7IKwXG4gICAgY29uc3Qgc2VsZWN0ZWROb2RlID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgIGxldCBub2RlWCA9IDA7XG4gICAgbGV0IG5vZGVZID0gMDtcbiAgICBpZiAoc2VsZWN0ZWROb2RlKSB7XG4gICAgICAgIC8vIOyEoO2DneuQnCDrhbjrk5zsnZgg7KCI64yAIOychOy5mCDqs4TsgrBcbiAgICAgICAgbm9kZVggPSBzZWxlY3RlZE5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl07XG4gICAgICAgIG5vZGVZID0gc2VsZWN0ZWROb2RlLmFic29sdXRlVHJhbnNmb3JtWzFdWzJdO1xuICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOq4sOykgOycvOuhnCDsg4HrjIAg7JyE7LmYIOqzhOyCsFxuICAgICAgICBjb25zdCByb290QWJzb2x1dGVYID0gcm9vdEZyYW1lTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgY29uc3Qgcm9vdEFic29sdXRlWSA9IHJvb3RGcmFtZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMV1bMl07XG4gICAgICAgIC8vIOuxg+yngCDsnITsuZgg7ISk7KCVICjshKDtg53rkJwg66CI7J207Ja07J2YIOychOy5mOyXkCDrp57qsowg7KGw7KCVKVxuICAgICAgICBiYWRnZUNvbnRhaW5lci54ID0gbm9kZVggLSByb290QWJzb2x1dGVYICsgMTA7XG4gICAgICAgIGJhZGdlQ29udGFpbmVyLnkgPSBub2RlWSAtIHJvb3RBYnNvbHV0ZVkgKyAxMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHNlbGVjdGVkTm9kZeqwgCDsl4bripQg6rK97JqwIO2UhOugiOyehOydmCDsoozsg4Hri6jsl5Ag67Cw7LmYXG4gICAgICAgIGJhZGdlQ29udGFpbmVyLnggPSAxMDtcbiAgICAgICAgYmFkZ2VDb250YWluZXIueSA9IDEwO1xuICAgIH1cbiAgICAvLyDrsYPsp4Ag7JuQ7ZiVIOuwsOqyvSDsg53shLFcbiAgICBjb25zdCBiYWRnZUNpcmNsZSA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICBiYWRnZUNpcmNsZS5uYW1lID0gYEJhZGdlQ2lyY2xlYDtcbiAgICBiYWRnZUNpcmNsZS5yZXNpemUoMjQsIDI0KTtcbiAgICAvLyDsg4nsg4Eg7ISk7KCVIOyggeyaqVxuICAgIGNvbnN0IGNvbG9yVmFsdWVzID0gaGV4VG9SZ2IoY29sb3IpO1xuICAgIGJhZGdlQ2lyY2xlLmZpbGxzID0gW3tcbiAgICAgICAgICAgIHR5cGU6ICdTT0xJRCcsXG4gICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgIHI6IGNvbG9yVmFsdWVzLnIgLyAyNTUsXG4gICAgICAgICAgICAgICAgZzogY29sb3JWYWx1ZXMuZyAvIDI1NSxcbiAgICAgICAgICAgICAgICBiOiBjb2xvclZhbHVlcy5iIC8gMjU1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1dO1xuICAgIC8vIOuxg+yngCDthY3siqTtirgg7IOd7ISxXG4gICAgY29uc3QgYmFkZ2VUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIGJhZGdlVGV4dC5uYW1lID0gYEJhZGdlVGV4dGA7XG4gICAgYmFkZ2VUZXh0LmNoYXJhY3RlcnMgPSBhbm5vdGF0aW9uTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgYmFkZ2VUZXh0LmZvbnRTaXplID0gMTI7XG4gICAgYmFkZ2VUZXh0LmZpbGxzID0gW3sgdHlwZTogJ1NPTElEJywgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dO1xuICAgIGJhZGdlVGV4dC50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjtcbiAgICAvLyDrsYPsp4Ag7Luo7YWM7J2064SI7JeQIOybkO2YleqzvCDthY3siqTtirgg7LaU6rCAXG4gICAgYmFkZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFkZ2VDaXJjbGUpO1xuICAgIGJhZGdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhZGdlVGV4dCk7XG4gICAgLy8g7JuQ6rO8IO2FjeyKpO2KuOydmCDsnITsuZgg7ISk7KCVXG4gICAgYmFkZ2VDaXJjbGUueCA9IDA7XG4gICAgYmFkZ2VDaXJjbGUueSA9IDA7XG4gICAgLy8g7Iir7J6Q7JeQIOuUsOudvCDsnITsuZgg7KGw7KCVXG4gICAgaWYgKGFubm90YXRpb25OdW1iZXIgPCAxMCkge1xuICAgICAgICBiYWRnZVRleHQueCA9IDguNTtcbiAgICAgICAgYmFkZ2VUZXh0LnkgPSA2O1xuICAgIH1cbiAgICBlbHNlIGlmIChhbm5vdGF0aW9uTnVtYmVyIDwgMTAwKSB7XG4gICAgICAgIGJhZGdlVGV4dC54ID0gNC41O1xuICAgICAgICBiYWRnZVRleHQueSA9IDY7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBiYWRnZVRleHQuZm9udFNpemUgPSAxMDtcbiAgICAgICAgYmFkZ2VUZXh0LnggPSAyO1xuICAgICAgICBiYWRnZVRleHQueSA9IDc7XG4gICAgfVxuICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsl5Ag67GD7KeAIOy2lOqwgFxuICAgIHJvb3RGcmFtZU5vZGUuYXBwZW5kQ2hpbGQoYmFkZ2VDb250YWluZXIpO1xuICAgIC8vIO2UhOugiOyehOyXkCDsnojripQg64uk66W4IOuxg+yngOuTpOydmCDsnITsuZgg7KGw7KCVXG4gICAgY29uc3QgZnJhbWVJZCA9IHJvb3RGcmFtZU5vZGUuaWQ7IC8vIOy1nOyDgeychCDtlITroIjsnoQgSUQg7IKs7JqpXG4gICAgaWYgKCFmcmFtZUJhZGdlc1tmcmFtZUlkXSkge1xuICAgICAgICBmcmFtZUJhZGdlc1tmcmFtZUlkXSA9IHt9O1xuICAgIH1cbiAgICAvLyDsnbTrr7gg7KG07J6s7ZWY64qUIOuxg+yngCDqsJzsiJgg7ZmV7J247ZWY6rOgIOychOy5mCDsobDsoJVcbiAgICBjb25zdCBiYWRnZUNvdW50ID0gT2JqZWN0LmtleXMoZnJhbWVCYWRnZXNbZnJhbWVJZF0pLmxlbmd0aDtcbiAgICBpZiAoYmFkZ2VDb3VudCA+IDApIHtcbiAgICAgICAgaWYgKHNlbGVjdGVkTm9kZSkge1xuICAgICAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnCDquLDspIDsnLzroZwg7JyE7LmYIOqzhOyCsFxuICAgICAgICAgICAgY29uc3Qgcm9vdEFic29sdXRlWCA9IHJvb3RGcmFtZU5vZGUuYWJzb2x1dGVUcmFuc2Zvcm1bMF1bMl07XG4gICAgICAgICAgICBjb25zdCBub2RlWCA9IHNlbGVjdGVkTm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXTtcbiAgICAgICAgICAgIC8vIOq4sOyhtCDrsYPsp4Ag7JiG7JeQIOqwhOqyqeydhCDrkZDqs6Ag67Cw7LmYXG4gICAgICAgICAgICBiYWRnZUNvbnRhaW5lci54ID0gKG5vZGVYIC0gcm9vdEFic29sdXRlWCkgKyAxMCArIChiYWRnZUNvdW50ICogMjgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmFkZ2VDb250YWluZXIueCA9IDEwICsgKGJhZGdlQ291bnQgKiAyOCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g67GD7KeAIOunteyXkCDsoIDsnqUgKOy1nOyDgeychCDtlITroIjsnoQgSUQg7IKs7JqpKVxuICAgIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdW2Fubm90YXRpb25OdW1iZXJdID0gYmFkZ2VDb250YWluZXI7XG4gICAgcmV0dXJuIGJhZGdlQ29udGFpbmVyO1xufVxuLy8g7KO87ISdIOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb24oYW5ub3RhdGlvbkRhdGEsIHNldHRpbmdzKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWROb2RlID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgICAgICBpZiAoIXNlbGVjdGVkTm9kZSkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KCdQbGVhc2Ugc2VsZWN0IGEgZnJhbWUgZmlyc3QnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBsZXQgY3VycmVudE5vZGUgPSBzZWxlY3RlZE5vZGU7XG4gICAgICAgIGxldCByb290RnJhbWVOb2RlID0gbnVsbDtcbiAgICAgICAgd2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudCkge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnROb2RlLnBhcmVudC50eXBlID09PSAnRlJBTUUnKSB7XG4gICAgICAgICAgICAgICAgcm9vdEZyYW1lTm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROb2RlID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICghcm9vdEZyYW1lTm9kZSkge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KCdObyBwYXJlbnQgZnJhbWUgZm91bmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDri6TsnYwg7KO87ISdIOuyiO2YuCDqs4TsgrBcbiAgICAgICAgY29uc3QgbmV4dEFubm90YXRpb25OdW1iZXIgPSBhbm5vdGF0aW9ucy5sZW5ndGggKyAxO1xuICAgICAgICAvLyDsg4jroZzsmrQg7KO87ISdIOqwneyytCDsg53shLFcbiAgICAgICAgY29uc3QgbmV3QW5ub3RhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG51bWJlcjogbmV4dEFubm90YXRpb25OdW1iZXIsXG4gICAgICAgICAgICBmcmFtZUlkOiByb290RnJhbWVOb2RlLmlkLFxuICAgICAgICAgICAgZnJhbWVOYW1lOiByb290RnJhbWVOb2RlLm5hbWUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYW5ub3RhdGlvbkRhdGEuZGVzY3JpcHRpb24gfHwgYEFubm90YXRpb24gJHtuZXh0QW5ub3RhdGlvbk51bWJlcn1gLFxuICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXG4gICAgICAgIH07XG4gICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBgQW5ub3RhdGlvbiBHcm91cCAke25leHRBbm5vdGF0aW9uTnVtYmVyfWA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiTUlOXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiTUlOXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1RvcCA9IDE2O1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxNjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0JvdHRvbSA9IDE2O1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCA9IDE2O1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5zdHJva2VzID0gW107XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSByb290RnJhbWVOb2RlLnggKyByb290RnJhbWVOb2RlLndpZHRoICsgMjA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnkgPSByb290RnJhbWVOb2RlLnk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnJlc2l6ZSgzMDAsIDIwMCk7XG4gICAgICAgIC8vIOyjvOyEnSDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uVGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgYW5ub3RhdGlvblRleHQuY2hhcmFjdGVycyA9IG5ld0Fubm90YXRpb24uZGVzY3JpcHRpb247XG4gICAgICAgIGFubm90YXRpb25UZXh0LmZvbnRTaXplID0gc2V0dGluZ3MuZm9udFNpemUgPT09ICdzbWFsbCcgPyAxMiA6IDE0O1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC5maWxscyA9IFt7IHR5cGU6ICdTT0xJRCcsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgYW5ub3RhdGlvblRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJMRUZUXCI7XG4gICAgICAgIGFubm90YXRpb25UZXh0LnRleHRBbGlnblZlcnRpY2FsID0gXCJUT1BcIjtcbiAgICAgICAgYW5ub3RhdGlvblRleHQuY29uc3RyYWludHMgPSB7IGhvcml6b250YWw6IFwiU0NBTEVcIiwgdmVydGljYWw6IFwiU0NBTEVcIiB9O1xuICAgICAgICBhbm5vdGF0aW9uVGV4dC5sYXlvdXRBbGlnbiA9IFwiSU5IRVJJVFwiO1xuICAgICAgICAvLyDso7zshJ0g7YWN7Iqk7Yq466W8IOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25UZXh0KTtcbiAgICAgICAgLy8g7KO87ISdIOq3uOujuSDtlITroIjsnoTsnYQg7LWc7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgcm9vdEZyYW1lTm9kZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uR3JvdXBGcmFtZSk7XG4gICAgICAgIC8vIOyjvOyEnSDrjbDsnbTthLDsl5Ag6re466O5IO2UhOugiOyehCBJRCDstpTqsIBcbiAgICAgICAgbmV3QW5ub3RhdGlvbi5ncm91cEZyYW1lSWQgPSBhbm5vdGF0aW9uR3JvdXBGcmFtZS5pZDtcbiAgICAgICAgLy8g67GD7KeAIOyDneyEsVxuICAgICAgICBjcmVhdGVCYWRnZU9uRnJhbWUoc2VsZWN0ZWROb2RlLCBuZXh0QW5ub3RhdGlvbk51bWJlciwgc2V0dGluZ3MuY29sb3IpO1xuICAgICAgICAvLyDso7zshJ0g66qp66Gd7JeQIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKG5ld0Fubm90YXRpb24pO1xuICAgICAgICAvLyBVSeyXkCDsg4gg7KO87ISdIOyDneyEsSDslYzrprxcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJBTk5PVEFUSU9OX0NSRUFURURcIixcbiAgICAgICAgICAgIGFubm90YXRpb246IG5ld0Fubm90YXRpb24sXG4gICAgICAgICAgICBmaWxlVGl0bGU6IGZpZ21hLnJvb3QubmFtZSxcbiAgICAgICAgICAgIHBhZ2VOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lLFxuICAgICAgICAgICAgcGFyZW50RnJhbWVOYW1lOiByb290RnJhbWVOb2RlLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBIZXgg7IOJ7IOB6rCS7J2EIFJHQuuhnCDrs4DtmZjtlZjripQg7ZWo7IiYXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICAvLyAj7J2EIOygnOqxsO2VmOqzoCA27J6Q66asIOyDieyDgSDsvZTrk5zrpbwg7LaU7LacXG4gICAgY29uc3QgY2xlYW5IZXggPSBoZXguY2hhckF0KDApID09PSAnIycgPyBoZXguc3Vic3RyaW5nKDEpIDogaGV4O1xuICAgIC8vIFJHQiDqsJIg7LaU7LacXG4gICAgY29uc3QgciA9IHBhcnNlSW50KGNsZWFuSGV4LnN1YnN0cmluZygwLCAyKSwgMTYpO1xuICAgIGNvbnN0IGcgPSBwYXJzZUludChjbGVhbkhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICBjb25zdCBiID0gcGFyc2VJbnQoY2xlYW5IZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgcmV0dXJuIHsgciwgZywgYiB9O1xufVxuLy8g7ISg7YOdIOuzgOqyvSDsnbTrsqTtirgg66as7Iqk64SIXG5maWdtYS5vbignc2VsZWN0aW9uY2hhbmdlJywgKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGlvbkluZm8gPSBjaGVja1NlbGVjdGVkRnJhbWUoKTtcbiAgICBpZiAoc2VsZWN0aW9uSW5mby5zZWxlY3RlZCAmJiBzZWxlY3Rpb25JbmZvLmZyYW1lSWQgJiYgc2VsZWN0aW9uSW5mby5mcmFtZU5hbWUpIHtcbiAgICAgICAgLy8g7YOA6rKfIO2UhOugiOyehCBJRCDqsrDsoJUgKO2VreyDgSDstZzsg4HsnIQg7ZSE66CI7J6EIElEIOyCrOyaqSlcbiAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVJZCA9IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lSWQgfHwgc2VsZWN0aW9uSW5mby5mcmFtZUlkO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnRlJBTUVfU0VMRUNURUQnLFxuICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgIGZyYW1lTmFtZTogc2VsZWN0aW9uSW5mby5mcmFtZU5hbWUsXG4gICAgICAgICAgICBhbm5vdGF0aW9ucyxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICBwYXJlbnRGcmFtZU5hbWU6IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lTmFtZSB8fCBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIOyEoO2DneydtCDsl4bslrTrj4Qg66qo65OgIOyjvOyEnSDrjbDsnbTthLAg7KCE7IahXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdOT19GUkFNRV9TRUxFQ1RFRCcsXG4gICAgICAgICAgICBhbm5vdGF0aW9ucyxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4vLyBVSeuhnOu2gO2EsCDrqZTsi5zsp4Ag7IiY7IugXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgJ0NSRUFURV9BTk5PVEFUSU9OJzpcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb24obXNnLmFubm90YXRpb24sIG1zZy5zZXR0aW5ncyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnR0VUX1NFTEVDVEVEX0ZSQU1FJzpcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGlvbkluZm8gPSBjaGVja1NlbGVjdGVkRnJhbWUoKTtcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb25JbmZvLnNlbGVjdGVkICYmIHNlbGVjdGlvbkluZm8uZnJhbWVJZCAmJiBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIO2DgOqynyDtlITroIjsnoQgSUQg6rKw7KCVICjtla3sg4Eg7LWc7IOB7JyEIO2UhOugiOyehCBJRCDsgqzsmqkpXG4gICAgICAgICAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVJZCA9IHNlbGVjdGlvbkluZm8ucm9vdEZyYW1lSWQgfHwgc2VsZWN0aW9uSW5mby5mcmFtZUlkO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0ZSQU1FX1NFTEVDVEVEJyxcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVOYW1lOiBzZWxlY3Rpb25JbmZvLmZyYW1lTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50RnJhbWVOYW1lOiBzZWxlY3Rpb25JbmZvLnJvb3RGcmFtZU5hbWUgfHwgc2VsZWN0aW9uSW5mby5mcmFtZU5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOyEoO2DneydtCDsl4bslrTrj4Qg66qo65OgIOyjvOyEnSDrjbDsnbTthLAg7KCE7IahXG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnTk9fRlJBTUVfU0VMRUNURUQnLFxuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgZmlsZVRpdGxlOiBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnREVMRVRFX0FOTk9UQVRJT04nOlxuICAgICAgICAgICAgLy8g7KO87ISdIOyCreygnCDquLDriqUg7LaU6rCAIO2VhOyalFxuICAgICAgICAgICAgZGVsZXRlQW5ub3RhdGlvbihtc2cuaWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1VQREFURV9BTk5PVEFUSU9OJzpcbiAgICAgICAgICAgIC8vIOyjvOyEnSDsl4XrjbDsnbTtirgg6riw64qlIOy2lOqwgCDtlYTsmpRcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRBbm5vdGF0aW9uID0gbXNnLmFubm90YXRpb247XG4gICAgICAgICAgICAvLyDso7zshJ0g67Cw7Je07JeQ7IScIO2VtOuLuSBJROulvCDqsIDsp4Qg7KO87ISdIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkluZGV4ID0gYW5ub3RhdGlvbnMuZmluZEluZGV4KGEgPT4gYS5pZCA9PT0gdXBkYXRlZEFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcIC0g7YWN7Iqk7Yq4IOuzgOqyvSDsoIQg7ZWE7JqUXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7KO87ISdIOygleuztCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnNbYW5ub3RhdGlvbkluZGV4XSA9IHVwZGF0ZWRBbm5vdGF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBhbm5vdGF0aW9uR3JvdXBzW3VwZGF0ZWRBbm5vdGF0aW9uLmZyYW1lSWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDrsojtmLjsnZgg7KO87ISdIOyVhOydtO2FnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JdGVtID0gYW5ub3RhdGlvbkdyb3VwRnJhbWUuZmluZENoaWxkKG4gPT4gbi50eXBlID09PSAnRlJBTUUnICYmIG4ubmFtZSA9PT0gYEFubm90YXRpb24gJHt1cGRhdGVkQW5ub3RhdGlvbi5udW1iZXJ9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g7JWE7J207YWcIOuCtOu2gOydmCDshKTrqoUg7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGFubm90YXRpb25JdGVtLmZpbmRDaGlsZChuID0+IG4udHlwZSA9PT0gJ1RFWFQnICYmIG4ubmFtZSA9PT0gJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ISk66qFIO2FjeyKpO2KuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUuY2hhcmFjdGVycyA9IHVwZGF0ZWRBbm5vdGF0aW9uLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg7ISk66qFIOuFuOuTnCDthY3siqTtirgg7JeF642w7J207Yq4OiAke3VwZGF0ZWRBbm5vdGF0aW9uLmRlc2NyaXB0aW9ufWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfshKTrqoUg64W465Oc66W8IOywvuydhCDsiJgg7JeG7J2MJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDso7zshJ0g7JWE7J207YWcICR7dXBkYXRlZEFubm90YXRpb24ubnVtYmVyfeydhCDssL7snYQg7IiYIOyXhuydjGApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGDso7zshJ0g6re466O5IO2UhOugiOyehOydhCDssL7snYQg7IiYIOyXhuydjDogJHt1cGRhdGVkQW5ub3RhdGlvbi5mcmFtZUlkfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIOyXheuNsOydtO2KuOuQnCDso7zshJ0g7KCV67O066W8IFVJ7JeQIOyVjOumvFxuICAgICAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQU5OT1RBVElPTl9VUERBVEVEJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb246IHVwZGF0ZWRBbm5vdGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBmaWdtYS5ub3RpZnkoYOyjvOyEnSBJRCAke3VwZGF0ZWRBbm5vdGF0aW9uLmlkfSDsl4XrjbDsnbTtirgg7JmE66OMYCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDso7zshJ0gSUQgJHt1cGRhdGVkQW5ub3RhdGlvbi5pZH0g7JeF642w7J207Yq4IOyZhOujjGAsIHVwZGF0ZWRBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYOyjvOyEnSDsl4XrjbDsnbTtirgg7KSRIOyYpOulmCDrsJzsg506YCwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyBmaWdtYS5ub3RpZnkoYOyjvOyEnSDsl4XrjbDsnbTtirgg7KSRIOyYpOulmOqwgCDrsJzsg53tlojsirXri4jri6Q6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihg7KO87ISdIElEICR7dXBkYXRlZEFubm90YXRpb24uaWR966W8IOywvuydhCDsiJgg7JeG7J2MYCk7XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KGDso7zshJ3snYQg7JeF642w7J207Yq47ZWgIOyImCDsl4bsirXri4jri6Q6IElEICR7dXBkYXRlZEFubm90YXRpb24uaWR966W8IOywvuydhCDsiJgg7JeG7J2MYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2FuY2VsJzpcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnU0NST0xMX1RPX0ZSQU1FJzpcbiAgICAgICAgICAgIHNjcm9sbFRvRnJhbWUobXNnLmZyYW1lSWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NDUk9MTF9UT19BTk5PVEFUSU9OX0dST1VQJzpcbiAgICAgICAgICAgIC8vIGZyYW1lSWTsl5Ag7ZW064u57ZWY64qUIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7Jy866GcIOu3sO2PrO2KuCDsnbTrj5lcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Hcm91cEZyYW1lID0gYW5ub3RhdGlvbkdyb3Vwc1ttc2cuZnJhbWVJZF07XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsobTsnqztlZjrqbQg7ZW064u5IO2UhOugiOyehOycvOuhnCDrt7Dtj6ztirgg7J2064+ZXG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFthbm5vdGF0aW9uR3JvdXBGcmFtZV0pO1xuICAgICAgICAgICAgICAgIC8vIOyEoO2DneyggeycvOuhnCDtlbTri7kg7ZSE66CI7J6EIOyEoO2DnVxuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFthbm5vdGF0aW9uR3JvdXBGcmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsl4bripQg6rK97JqwLCDsm5Drs7gg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvRnJhbWUobXNnLmZyYW1lSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1NDUk9MTF9UT19BTk5PVEFUSU9OJzpcbiAgICAgICAgICAgIC8vIO2KueyglSDso7zshJ0g7JWE7J207YWc7Jy866GcIOydtOuPme2VmOuKlCDquLDriqVcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGFubm90YXRpb25Hcm91cHNbbXNnLmZyYW1lSWRdO1xuICAgICAgICAgICAgaWYgKGFubm90YXRpb25GcmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6EIOyViOyXkOyEnCDtlbTri7kg67KI7Zi47J2YIOyjvOyEnSDslYTsnbTthZwg7LC+6riwXG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkl0ZW0gPSBhbm5vdGF0aW9uRnJhbWUuZmluZENoaWxkKG4gPT4gbi50eXBlID09PSAnRlJBTUUnICYmIG4ubmFtZSA9PT0gYEFubm90YXRpb24gJHttc2cubnVtYmVyfWApO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uSXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDssL7snYAg7KO87ISdIOyVhOydtO2FnOycvOuhnCDrt7Dtj6ztirgg7J2064+ZXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbYW5ub3RhdGlvbkl0ZW1dKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7ZW064u5IOyjvOyEnSDslYTsnbTthZwg7ISg7YOdXG4gICAgICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbiA9IFthbm5vdGF0aW9uSXRlbV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDso7zshJ0g7JWE7J207YWc7J2EIOywvuyngCDrqrvtlZwg6rK97JqwLCDqt7jro7kg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2Fubm90YXRpb25GcmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbYW5ub3RhdGlvbkZyYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDso7zshJ0g6re466O5IO2UhOugiOyehOydtCDsl4bripQg6rK97JqwLCDsm5Drs7gg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvRnJhbWUobXNnLmZyYW1lSWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG4vLyDrhbjrk5wg7IKt7KCcIOydtOuypO2KuCDqsJDsp4Ag7ZWo7IiYXG5mdW5jdGlvbiBoYW5kbGVOb2RlUmVtb3ZhbChldmVudCkge1xuICAgIC8vIOusuOyEnOqwgCDrs4Dqsr3rkJjsl4jsnYQg65WM66eMIOyymOumrFxuICAgIGlmICghZXZlbnQuZG9jdW1lbnRDaGFuZ2VzKVxuICAgICAgICByZXR1cm47XG4gICAgbGV0IGRhdGFDaGFuZ2VkID0gZmFsc2U7XG4gICAgLy8g66y47IScIOuzgOqyvSDrgrTsmqkg7KSRIOyCreygnOuQnCDrhbjrk5zqsIAg7J6I64qU7KeAIO2ZleyduFxuICAgIGV2ZW50LmRvY3VtZW50Q2hhbmdlcy5mb3JFYWNoKGNoYW5nZSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2UudHlwZSA9PT0gJ0RFTEVURScgJiYgY2hhbmdlLm5vZGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZWROb2RlID0gY2hhbmdlLm5vZGU7XG4gICAgICAgICAgICBjb25zdCBkZWxldGVkTm9kZUlkID0gZGVsZXRlZE5vZGUuaWQ7XG4gICAgICAgICAgICAvLyDsgq3soJzrkJwg64W465OcIOygleuztCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgIC8vIFJlbW92ZWROb2Rl64qUIOygnO2VnOuQnCDsoJXrs7Trp4wg7J6I7Jy866+A66GcLCBpZOulvCDquLDrsJjsnLzroZwg7J6R7JeF7ZW07JW8IO2VqFxuICAgICAgICAgICAgLy8gMS4g7IKt7KCc65CcIOuFuOuTnOydmCBJROqwgCDtlITroIjsnoQgSUTsmYAg7J287LmY7ZWY64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgLy8g7ZSE66CI7J6E7JeQIOuMgO2VnCDso7zshJ3snbQg7J6I64qU7KeAIO2ZleyduFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnNUb1JlbW92ZSA9IGFubm90YXRpb25zLmZpbHRlcihhID0+IGEuZnJhbWVJZCA9PT0gZGVsZXRlZE5vZGVJZCk7XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbnNUb1JlbW92ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8g7KO87ISdIOyCreygnFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuZmlsdGVyKGEgPT4gYS5mcmFtZUlkICE9PSBkZWxldGVkTm9kZUlkKTtcbiAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYO2UhOugiOyehCBJRCAke2RlbGV0ZWROb2RlSWR9IOq0gOugqCDso7zshJ0gJHthbm5vdGF0aW9uc1RvUmVtb3ZlLmxlbmd0aH3qsJwg7IKt7KCc65CoYCk7XG4gICAgICAgICAgICAgICAgLy8g7ZSE66CI7J6E67OEIOyjvOyEnSDsubTsmrTthLDsl5DshJzrj4Qg7KCc6rGwXG4gICAgICAgICAgICAgICAgaWYgKGZyYW1lQW5ub3RhdGlvbkNvdW50ZXJzW2RlbGV0ZWROb2RlSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBmcmFtZUFubm90YXRpb25Db3VudGVyc1tkZWxldGVkTm9kZUlkXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDso7zshJ0g6re466O5IOunteyXkOyEnCDsgq3soJxcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uR3JvdXBzW2RlbGV0ZWROb2RlSWRdKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIGFubm90YXRpb25Hcm91cHNbZGVsZXRlZE5vZGVJZF07XG4gICAgICAgICAgICAgICAgZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g67GD7KeAIOunteyXkOyEnCDsgq3soJxcbiAgICAgICAgICAgIGlmIChmcmFtZUJhZGdlc1tkZWxldGVkTm9kZUlkXSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBmcmFtZUJhZGdlc1tkZWxldGVkTm9kZUlkXTtcbiAgICAgICAgICAgICAgICBkYXRhQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAyLiDso7zshJ0g6re466O5IOunteyXkOyEnCBJROqwgCDsnbzsuZjtlZjripQg64W465Oc6rCAIOyeiOuKlOyngCDtmZXsnbhcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFubm90YXRpb25Hcm91cHMpLmZvckVhY2goZnJhbWVJZCA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uR3JvdXBzW2ZyYW1lSWRdLmlkID09PSBkZWxldGVkTm9kZUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoQg6rSA66CoIOyjvOyEnSDsgq3soJxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVOYW1lID0gKF9hID0gYW5ub3RhdGlvbnMuZmluZChhID0+IGEuZnJhbWVJZCA9PT0gZnJhbWVJZCkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mcmFtZU5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zID0gYW5ub3RhdGlvbnMuZmlsdGVyKGEgPT4gYS5mcmFtZUlkICE9PSBmcmFtZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDtlITroIjsnoQgJyR7ZnJhbWVOYW1lfSfsl5Ag64yA7ZWcIOyjvOyEnSDqt7jro7nsnbQg7IKt7KCc65CoYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGFubm90YXRpb25Hcm91cHNbZnJhbWVJZF07XG4gICAgICAgICAgICAgICAgICAgIGRhdGFDaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIDMuIOyjvOyEnSDrsojtmLjroZwg66ek7ZWR65CcIOuxg+yngOqwgCDsnojripTsp4Ag7ZmV7J24XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZyYW1lSWQgaW4gZnJhbWVCYWRnZXMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhZGdlTnVtYmVyIGluIGZyYW1lQmFkZ2VzW2ZyYW1lSWRdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZUJhZGdlc1tmcmFtZUlkXVtiYWRnZU51bWJlcl0uaWQgPT09IGRlbGV0ZWROb2RlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDrsYPsp4Ag67KI7Zi466W8IOqwgOynhCDso7zshJ3snbQg7J6I64qU7KeAIO2ZleyduO2VmOqzoCDsgq3soJxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25OdW1iZXIgPSBwYXJzZUludChiYWRnZU51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uVG9SZW1vdmUgPSBhbm5vdGF0aW9ucy5maW5kKGEgPT4gYS5udW1iZXIgPT09IGFubm90YXRpb25OdW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25Ub1JlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyjvOyEnSDrsLDsl7Tsl5DshJwg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoYSA9PiBhLm51bWJlciAhPT0gYW5ub3RhdGlvbk51bWJlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDrsYPsp4Ag67KI7Zi4ICR7YW5ub3RhdGlvbk51bWJlcn3sl5Ag7ZW064u57ZWY64qUIOyjvOyEnSDsgq3soJzrkKhgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuxg+yngCDrp7Xsl5DshJwg7IKt7KCcXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgZnJhbWVCYWRnZXNbZnJhbWVJZF1bYmFkZ2VOdW1iZXJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8g642w7J207YSw6rCAIOuzgOqyveuQmOyXiOycvOuptCBVSSDsl4XrjbDsnbTtirhcbiAgICBpZiAoZGF0YUNoYW5nZWQpIHtcbiAgICAgICAgLy8g66qo65OgIOyjvOyEnSDri6Tsi5wg7KCE7IahXG4gICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdBTExfQU5OT1RBVElPTlNfTE9BREVEJyxcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9ucyxcbiAgICAgICAgICAgIGZpbGVUaXRsZTogZmlnbWEucm9vdC5uYW1lLFxuICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIO2YhOyerCDshKDtg53rkJwg7ZSE66CI7J6E7J20IOyeiOycvOuptCDtlbTri7kg7ZSE66CI7J6E7J2YIOyjvOyEneuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgZnJhbWVJZCwgZnJhbWVOYW1lLCBwYXJlbnRGcmFtZUlkLCBwYXJlbnRGcmFtZU5hbWUgfSA9IGNoZWNrU2VsZWN0ZWRGcmFtZSgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgZnJhbWVJZCkge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0RnJhbWVJZCA9IHBhcmVudEZyYW1lSWQgfHwgZnJhbWVJZDtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lQW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucy5maWx0ZXIoYSA9PiBhLmZyYW1lSWQgPT09IHRhcmdldEZyYW1lSWQpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGUkFNRV9TRUxFQ1RFRCcsXG4gICAgICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgICAgICBmcmFtZU5hbWUsXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGZyYW1lQW5ub3RhdGlvbnMsXG4gICAgICAgICAgICAgICAgZmlsZVRpdGxlOiBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50RnJhbWVOYW1lOiBwYXJlbnRGcmFtZU5hbWUgfHwgZnJhbWVOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIOuFuOuTnCDsgq3soJwg7J2067Kk7Yq4IOumrOyKpOuEiCDrk7HroZ1cbmZpZ21hLm9uKCdkb2N1bWVudGNoYW5nZScsIGhhbmRsZU5vZGVSZW1vdmFsKTtcbi8vIOy0iOq4sO2ZlCDtlajsiJhcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g64+E7YGQ66i87Yq47JeQ7IScIOyngeygkSDso7zshJ0g7KCV67O0IOyKpOy6lFxuICAgICAgICBzY2FuRG9jdW1lbnRGb3JBbm5vdGF0aW9ucygpO1xuICAgICAgICAvLyDtla3sg4Eg66i87KCAIOuqqOuToCDso7zshJ0g7KCE7IahICjtlITroIjsnoQg7ISg7YOd6rO8IOq0gOqzhOyXhuydtClcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ0FMTF9BTk5PVEFUSU9OU19MT0FERUQnLFxuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25zLFxuICAgICAgICAgICAgZmlsZVRpdGxlOiBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgICAgICBwYWdlTmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g7ISg7YOd65CcIO2UhOugiOyehOydtCDsnojripQg6rK97JqwLCDtlbTri7kg7ZSE66CI7J6EIOygleuztOuPhCDsoITshqFcbiAgICAgICAgY29uc3QgeyBzZWxlY3RlZCwgZnJhbWVJZCwgZnJhbWVOYW1lLCBwYXJlbnRGcmFtZUlkLCBwYXJlbnRGcmFtZU5hbWUgfSA9IGNoZWNrU2VsZWN0ZWRGcmFtZSgpO1xuICAgICAgICBpZiAoc2VsZWN0ZWQgJiYgZnJhbWVJZCAmJiBmcmFtZU5hbWUpIHtcbiAgICAgICAgICAgIC8vIO2DgOqynyDtlITroIjsnoQgSUQg6rKw7KCVICjrtoDrqqjqsIAg7J6I7Jy866m0IOu2gOuqqCwg7JeG7Jy866m0IO2YhOyerCDtlITroIjsnoQpXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRGcmFtZUlkID0gcGFyZW50RnJhbWVJZCB8fCBmcmFtZUlkO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdGUkFNRV9TRUxFQ1RFRCcsXG4gICAgICAgICAgICAgICAgZnJhbWVJZDogdGFyZ2V0RnJhbWVJZCxcbiAgICAgICAgICAgICAgICBmcmFtZU5hbWUsXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnMsXG4gICAgICAgICAgICAgICAgZmlsZVRpdGxlOiBmaWdtYS5yb290Lm5hbWUsXG4gICAgICAgICAgICAgICAgcGFnZU5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgcGFyZW50RnJhbWVOYW1lOiBwYXJlbnRGcmFtZU5hbWUgfHwgZnJhbWVOYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnTk9fRlJBTUVfU0VMRUNURUQnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g7ZSM65+s6re47J24IOyLnOyekSDsi5wg7LSI6riw7ZmUIO2VqOyImCDtmLjstpxcbmluaXRpYWxpemUoKTtcbi8vIO2KueyglSDtlITroIjsnoTsnLzroZwg67ew7Y+s7Yq4IOydtOuPmVxuZnVuY3Rpb24gc2Nyb2xsVG9GcmFtZShmcmFtZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChmcmFtZUlkKTtcbiAgICAgICAgaWYgKGZyYW1lICYmIChmcmFtZS50eXBlID09PSAnRlJBTUUnIHx8IGZyYW1lLnR5cGUgPT09ICdDT01QT05FTlQnIHx8IGZyYW1lLnR5cGUgPT09ICdJTlNUQU5DRScpKSB7XG4gICAgICAgICAgICAvLyDtlbTri7kg7ZSE66CI7J6E7Jy866GcIOu3sO2PrO2KuCDsnbTrj5lcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZnJhbWVdKTtcbiAgICAgICAgICAgIC8vIO2VtOuLuSDtlITroIjsnoQg7ISg7YOdICjshKDtg53soIEpXG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbZnJhbWVdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzY3JvbGxpbmcgdG8gZnJhbWU6JywgZXJyb3IpO1xuICAgIH1cbn1cbi8vIOyjvOyEnSDsgq3soJwg7ZWo7IiYXG5mdW5jdGlvbiBkZWxldGVBbm5vdGF0aW9uKGFubm90YXRpb25JZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleChhID0+IGEuaWQgPT09IGFubm90YXRpb25JZCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uSW5kZXggPT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uID0gYW5ub3RhdGlvbnNbYW5ub3RhdGlvbkluZGV4XTtcbiAgICAgICAgLy8g7KO87ISdIOq3uOujuSDtlITroIjsnoQg7IKt7KCcXG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChhbm5vdGF0aW9uLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmIChncm91cEZyYW1lKSB7XG4gICAgICAgICAgICBncm91cEZyYW1lLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuxg+yngCDsgq3soJxcbiAgICAgICAgY29uc3QgYmFkZ2VOb2RlID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZENoaWxkKG4gPT4gbi50eXBlID09PSAnRlJBTUUnICYmIG4ubmFtZSA9PT0gYEJhZGdlICR7YW5ub3RhdGlvbi5udW1iZXJ9YCk7XG4gICAgICAgIGlmIChiYWRnZU5vZGUpIHtcbiAgICAgICAgICAgIGJhZGdlTm9kZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDso7zshJ0g642w7J207YSw7JeQ7IScIOygnOqxsFxuICAgICAgICBhbm5vdGF0aW9ucy5zcGxpY2UoYW5ub3RhdGlvbkluZGV4LCAxKTtcbiAgICAgICAgLy8gVUnsl5Ag7KO87ISdIOyCreygnCDslYzrprxcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogXCJBTk5PVEFUSU9OX0RFTEVURURcIixcbiAgICAgICAgICAgIGlkOiBhbm5vdGF0aW9uSWRcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5leHBvcnQge307XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=