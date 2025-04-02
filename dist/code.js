/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas/annotationElements.ts":
/*!******************************************!*\
  !*** ./src/canvas/annotationElements.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnnotationBadge: () => (/* binding */ createAnnotationBadge),
/* harmony export */   createAnnotationComponents: () => (/* binding */ createAnnotationComponents),
/* harmony export */   createAnnotationFrame: () => (/* binding */ createAnnotationFrame),
/* harmony export */   createContentGroup: () => (/* binding */ createContentGroup),
/* harmony export */   createDescriptionNode: () => (/* binding */ createDescriptionNode),
/* harmony export */   createIndexContainer: () => (/* binding */ createIndexContainer),
/* harmony export */   createIndexNode: () => (/* binding */ createIndexNode),
/* harmony export */   createTitleGroup: () => (/* binding */ createTitleGroup),
/* harmony export */   removeAnnotationBadge: () => (/* binding */ removeAnnotationBadge)
/* harmony export */ });
/* harmony import */ var _utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sizeUtils */ "./src/utils/sizeUtils.ts");
/* harmony import */ var _utils_colorUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/colorUtils */ "./src/utils/colorUtils.ts");
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
/* harmony import */ var _utils_textUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/textUtils */ "./src/utils/textUtils.ts");
/* harmony import */ var _utils_nodeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/nodeUtils */ "./src/utils/nodeUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * 주석 프레임 생성 함수
 */
function createAnnotationFrame(annotationId, index, cardWidthValue) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        // 주석 컨테이너 프레임 생성
        const annotationFrame = figma.createFrame();
        annotationFrame.name = `Annotation ${index}`;
        annotationFrame.setPluginData("type", "annotation");
        annotationFrame.setPluginData("annotationId", annotationId);
        // 컨테이너 스타일 설정
        annotationFrame.layoutMode = "HORIZONTAL";
        annotationFrame.fills = []; // 배경색 제거
        annotationFrame.strokes = [
            {
                type: "SOLID",
                color: {
                    r: 224 / 255,
                    g: 224 / 255,
                    b: 224 / 255,
                },
            },
        ];
        annotationFrame.strokeWeight = 1; // 선 두께: 1px
        annotationFrame.strokeTopWeight = 0;
        annotationFrame.strokeAlign = "INSIDE"; // 테두리 위치 (INSIDE | OUTSIDE | CENTER)
        // 카드 너비 계산
        const cardWidth = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getCardWidth)(cardWidthValue);
        // 너비만 고정하고 높이는 내용에 맞게 자동 조정
        annotationFrame.layoutSizingHorizontal = "FIXED";
        annotationFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
        annotationFrame.resize(cardWidth, annotationFrame.height); // 좌우 패딩 고려
        return annotationFrame;
    });
}
/**
 * 내용 그룹 생성 함수
 */
function createContentGroup(annotationId, contentWidth) {
    // 인덱스와 설명을 담을 그룹 생성
    const contentGroup = figma.createFrame();
    contentGroup.name = "Annotation Content";
    contentGroup.setPluginData("type", "annotation_content");
    contentGroup.setPluginData("annotationId", annotationId);
    // 그룹 스타일 설정
    contentGroup.layoutMode = "VERTICAL";
    contentGroup.primaryAxisSizingMode = "AUTO"; // 높이는 내용에 맞게 자동 조정
    contentGroup.counterAxisSizingMode = "FIXED"; // 너비는 고정
    contentGroup.verticalPadding = 10;
    contentGroup.horizontalPadding = 10;
    contentGroup.fills = []; // 배경색 제거 (투명 배경 유지)
    // 너비 설정 - 전달받은 너비를 그대로 사용
    contentGroup.layoutSizingHorizontal = "FIXED";
    contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
    contentGroup.resize(contentWidth, contentGroup.height);
    return contentGroup;
}
/**
 * 인덱스 컨테이너 생성 함수
 */
function createIndexContainer(annotationId, indexWidth) {
    // 인덱스 컨테이너 생성
    const indexContainer = figma.createFrame();
    indexContainer.name = "Annotation Index";
    indexContainer.setPluginData("type", "annotation_index_container");
    indexContainer.setPluginData("annotationId", annotationId);
    // 스타일 설정
    indexContainer.layoutMode = "VERTICAL";
    indexContainer.primaryAxisAlignItems = "CENTER"; // 세로 중앙 정렬
    indexContainer.counterAxisAlignItems = "CENTER"; // 가로 중앙 정렬
    indexContainer.fills = [
        { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
    ]; // 배경색 설정
    indexContainer.verticalPadding = 10;
    indexContainer.horizontalPadding = 10;
    indexContainer.strokes = [
        {
            type: "SOLID",
            color: {
                r: 224 / 255,
                g: 224 / 255,
                b: 224 / 255,
            },
        },
    ];
    indexContainer.strokeWeight = 0;
    indexContainer.strokeRightWeight = 1;
    // 너비 설정 - 전달받은 너비를 그대로 사용
    indexContainer.layoutSizingHorizontal = "FIXED";
    indexContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
    indexContainer.resize(indexWidth, indexContainer.height);
    return indexContainer;
}
/**
 * 인덱스 노드 생성 함수
 */
function createIndexNode(annotationId, index, sizeValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // 폰트 로드
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const indexNode = figma.createText();
        indexNode.characters = `${index}`;
        indexNode.setPluginData("type", "annotation_index");
        indexNode.setPluginData("annotationId", annotationId);
        // 스타일 설정
        indexNode.fontSize = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getFontSizeByValue)(sizeValue); // 기본값 또는 지정된 값 사용
        indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        // 텍스트 정렬 설정
        indexNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
        indexNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬
        return indexNode;
    });
}
/**
 * 설명 텍스트 노드 생성 함수
 */
function createDescriptionNode(annotationId, text = "New Annotation", sizeValue, descriptionData) {
    return __awaiter(this, void 0, void 0, function* () {
        // 기본 폰트만 먼저 로드 (applyRichTextFormatting에서 추가 폰트 로드)
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const textNode = figma.createText();
        textNode.characters = text;
        textNode.setPluginData("type", "annotation_description");
        textNode.setPluginData("annotationId", annotationId);
        // 스타일 설정
        textNode.fontSize = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getFontSizeByValue)(sizeValue);
        textNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        // 높이만 자동으로 조정되도록 설정
        textNode.textAutoResize = "HEIGHT";
        // 리치 텍스트 설명 데이터가 있으면 서식 적용
        if (descriptionData &&
            descriptionData.content &&
            descriptionData.content.length > 0) {
            yield (0,_utils_textUtils__WEBPACK_IMPORTED_MODULE_3__.applyRichTextFormatting)(textNode, descriptionData);
        }
        return textNode;
    });
}
/**
 * Title 그룹 생성 함수
 */
function createTitleGroup(groupId, frameWidth, descriptionText = "Description") {
    return __awaiter(this, void 0, void 0, function* () {
        // 타이틀 컨테이너 생성
        const titleContainer = figma.createFrame();
        titleContainer.name = "Title";
        titleContainer.setPluginData("type", "title_container");
        titleContainer.setPluginData("groupId", groupId);
        // 스타일 설정
        titleContainer.layoutMode = "VERTICAL";
        titleContainer.primaryAxisAlignItems = "CENTER"; // 세로 중앙 정렬
        titleContainer.counterAxisAlignItems = "CENTER"; // 가로 중앙 정렬
        titleContainer.fills = [
            { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
        ]; // 배경색 설정
        //border설정
        titleContainer.strokes = [
            {
                type: "SOLID",
                color: {
                    r: 224 / 255,
                    g: 224 / 255,
                    b: 224 / 255,
                },
            },
        ];
        titleContainer.strokeWeight = 1; // 선 두께: 1px
        titleContainer.strokeAlign = "INSIDE"; // 테두리 위치 (INSIDE | OUTSIDE | CENTER)
        // 너비 설정
        titleContainer.layoutSizingHorizontal = "FIXED";
        titleContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
        titleContainer.resize(frameWidth, titleContainer.height);
        // Description 텍스트 노드 생성
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const descriptionNode = figma.createText();
        descriptionNode.characters = descriptionText;
        descriptionNode.setPluginData("type", "title_description");
        descriptionNode.fontSize = 14;
        descriptionNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        // 텍스트 정렬 설정
        descriptionNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
        descriptionNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬
        // 텍스트 너비 설정
        descriptionNode.layoutSizingHorizontal = "FIXED";
        descriptionNode.resize(frameWidth - (titleContainer.paddingLeft + titleContainer.paddingRight), 36);
        // 컨테이너에 텍스트 노드 추가
        titleContainer.appendChild(descriptionNode);
        return titleContainer;
    });
}
/**
 * 기존 배지의 크기를 확인하는 함수
 */
function getExistingBadgeSize(node) {
    const parentFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_4__.getTopLevelFrame)(node);
    if (!parentFrame)
        return undefined;
    // 같은 프레임 내의 다른 배지 찾기
    const existingBadges = parentFrame.findAll((n) => n.type === "FRAME" &&
        n.getPluginData("type") === "annotation_badge" &&
        n !== node);
    if (existingBadges.length > 0) {
        // 첫 번째 배지의 크기 반환
        return existingBadges[0].width;
    }
    return undefined;
}
/**
 * 배지를 생성하는 함수
 */
function createAnnotationBadge(node, index, annotationId, colorValue, sizeValue) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        // 배지 프레임 생성
        const badge = figma.createFrame();
        badge.name = `Badge ${index}`;
        badge.setPluginData("type", "annotation_badge");
        badge.setPluginData("annotationId", annotationId);
        badge.setPluginData("badge_index", index.toString());
        // 배지 스타일 설정
        badge.layoutMode = "HORIZONTAL";
        badge.primaryAxisAlignItems = "CENTER";
        badge.counterAxisAlignItems = "CENTER";
        badge.cornerRadius = 9999; // 원형으로 만들기
        // 배지 크기 설정 - 기존 배지 크기 확인
        const existingBadgeSize = getExistingBadgeSize(node);
        const badgeSize = existingBadgeSize || (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getBadgeSizeByValue)(sizeValue);
        badge.resize(badgeSize, badgeSize);
        // 배지 색상 설정
        const badgeColor = (0,_utils_colorUtils__WEBPACK_IMPORTED_MODULE_1__.getColorByValue)(colorValue); // 기본 또는 지정된 색상
        badge.fills = [{ type: "SOLID", color: badgeColor }];
        // 인덱스 번호 텍스트 생성
        const indexText = figma.createText();
        indexText.characters = index.toString();
        // 텍스트 크기 설정 - 배지 크기에 비례하여 설정
        const textSize = Math.round(badgeSize * 0.6); // 배지 크기의 60%로 설정
        indexText.fontSize = textSize;
        indexText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // 흰색 텍스트
        // 배지에 텍스트 추가
        badge.appendChild(indexText);
        // 최상위 프레임 찾기 (페이지 바로 아래 프레임)
        const topFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_4__.getTopLevelFrame)(node);
        if (topFrame) {
            // 노드의 절대 좌표(페이지 기준) 계산
            const absoluteX = getAbsolutePosition(node).x;
            const absoluteY = getAbsolutePosition(node).y;
            // 최상위 프레임의 절대 좌표(페이지 기준) 계산
            const topFrameAbsoluteX = getAbsolutePosition(topFrame).x;
            const topFrameAbsoluteY = getAbsolutePosition(topFrame).y;
            // 최상위 프레임을 기준으로 한 노드의 상대 좌표
            const relativeToTopFrameX = absoluteX - topFrameAbsoluteX;
            const relativeToTopFrameY = absoluteY - topFrameAbsoluteY;
            // 배지 위치 설정
            badge.x = relativeToTopFrameX - badge.width / 2;
            badge.y = relativeToTopFrameY - badge.height / 2;
            // 최상위 프레임에 배지 추가
            topFrame.appendChild(badge);
        }
        else {
            // 최상위 프레임을 찾지 못한 경우 기존 로직 사용
            badge.x = node.x;
            badge.y = node.y - badge.height;
            // 현재 페이지에 배지 추가
            figma.currentPage.appendChild(badge);
        }
        return badge;
    });
}
/**
 * 노드의 절대 위치(페이지 기준)를 계산하는 함수
 */
function getAbsolutePosition(node) {
    let x = 0;
    let y = 0;
    // 자기 자신의 x, y 값 포함
    if ("x" in node) {
        x += node.x;
    }
    if ("y" in node) {
        y += node.y;
    }
    // 부모의 좌표를 재귀적으로 더함
    let parent = node.parent;
    while (parent && parent.type !== "PAGE") {
        if ("x" in parent) {
            x += parent.x;
        }
        if ("y" in parent) {
            y += parent.y;
        }
        parent = parent.parent;
    }
    return { x, y };
}
/**
 * 배지 삭제 함수
 */
function removeAnnotationBadge(annotationId, groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetPage = figma.currentPage;
        // 그룹 ID가 제공된 경우 해당 그룹의 페이지 찾기
        if (groupId) {
            const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_2__.findGroup)(groupId);
            if (group && group.relatedPage && group.relatedPage.id) {
                const pageNode = figma.root.findOne((node) => node.type === "PAGE" && node.id === group.relatedPage.id);
                if (pageNode) {
                    targetPage = pageNode;
                }
            }
        }
        // 해당 페이지에서 배지 찾기
        targetPage
            .findAll((node) => node.getPluginData("type") === "annotation_badge" &&
            node.getPluginData("annotationId") === annotationId)
            .forEach((badge) => badge.remove());
    });
}
/**
 * 주석 구성 요소 생성 통합 함수
 */
function createAnnotationComponents(annotationId, index, colorValue, sizeValue, cardWidthValue, description) {
    return __awaiter(this, void 0, void 0, function* () {
        // 카드 너비 계산
        const cardWidth = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getCardWidth)(cardWidthValue);
        // 주석 프레임 생성
        const annotationFrame = yield createAnnotationFrame(annotationId, index, cardWidthValue);
        // 정확한 비율 계산 - 전체 너비에서 패딩 고려
        const totalContentWidth = cardWidth; // 프레임의 좌우 패딩 고려
        const indexWidth = Math.round(totalContentWidth * 0.2); // 정확히 20%
        const contentWidth = totalContentWidth - indexWidth; // 나머지 80%
        // 인덱스 컨테이너 생성 - 정확한 너비 전달
        const indexContainer = createIndexContainer(annotationId, indexWidth);
        // 컨텐츠 그룹 생성 - 정확한 너비 전달
        const contentGroup = createContentGroup(annotationId, contentWidth);
        // 인덱스 번호 노드 생성
        const indexNode = yield createIndexNode(annotationId, index, sizeValue);
        // 설명 텍스트 노드 생성
        const textNode = yield createDescriptionNode(annotationId, (description === null || description === void 0 ? void 0 : description.content)
            ? (0,_utils_textUtils__WEBPACK_IMPORTED_MODULE_3__.extractTextFromDescription)(description)
            : "New Annotation", sizeValue, description);
        // 1. 먼저 모든 자식 노드를 부모에 추가
        indexContainer.appendChild(indexNode);
        contentGroup.appendChild(textNode);
        // 2. 부모 프레임에 컨테이너들 추가
        annotationFrame.appendChild(indexContainer);
        annotationFrame.appendChild(contentGroup);
        // 3. 부모 프레임의 레이아웃 모드 설정
        annotationFrame.layoutMode = "HORIZONTAL";
        annotationFrame.primaryAxisSizingMode = "FIXED";
        annotationFrame.counterAxisSizingMode = "AUTO";
        // 4. 자식 컨테이너들의 속성 설정 (부모 프레임에 추가된 후에 설정)
        // contentGroup 설정
        contentGroup.layoutMode = "VERTICAL";
        contentGroup.primaryAxisSizingMode = "AUTO";
        contentGroup.counterAxisSizingMode = "FIXED";
        contentGroup.layoutGrow = 1;
        contentGroup.resize(contentWidth, contentGroup.height);
        // indexContainer 설정
        indexContainer.layoutSizingVertical = "FILL"; // 부모 높이에 맞춤
        indexContainer.layoutSizingHorizontal = "FIXED"; // 너비 고정
        indexContainer.resize(indexWidth, indexContainer.height);
        // 5. 텍스트 노드 설정 (contentGroup에 추가된 후에 설정)
        textNode.layoutSizingHorizontal = "FILL";
        textNode.textAutoResize = "HEIGHT";
        // 컬러 적용 (배경색 및 스타일링)
        if (colorValue !== undefined) {
            const color = (0,_utils_colorUtils__WEBPACK_IMPORTED_MODULE_1__.getColorByValue)(colorValue);
            // 여기에 색상 적용 로직 추가
        }
        return {
            frame: annotationFrame,
            group: contentGroup,
            indexNode,
            textNode,
        };
    });
}


/***/ }),

/***/ "./src/handlers/annotationHandlers.ts":
/*!********************************************!*\
  !*** ./src/handlers/annotationHandlers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCreateAnnotation: () => (/* binding */ handleCreateAnnotation),
/* harmony export */   handleDeleteAnnotation: () => (/* binding */ handleDeleteAnnotation),
/* harmony export */   handleSyncAllAnnotations: () => (/* binding */ handleSyncAllAnnotations),
/* harmony export */   handleUpdateAnnotation: () => (/* binding */ handleUpdateAnnotation)
/* harmony export */ });
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/messageUtils */ "./src/utils/messageUtils.ts");
/* harmony import */ var _canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/annotationElements */ "./src/canvas/annotationElements.ts");
/* harmony import */ var _utils_nodeUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/nodeUtils */ "./src/utils/nodeUtils.ts");
/* harmony import */ var _services_annotationFrameService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/annotationFrameService */ "./src/services/annotationFrameService.ts");
/* harmony import */ var _utils_updateUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/updateUtils */ "./src/utils/updateUtils.ts");
/* harmony import */ var _utils_textUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/textUtils */ "./src/utils/textUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








/**
 * CREATE_ANNOTATION 메시지 핸들러
 */
function handleCreateAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(msg.groupId);
        if (!group)
            return;
        // 새 주석 객체 생성
        const newAnnotation = {
            id: `annotation-${Date.now()}`,
            description: {
                type: "doc",
                content: [],
            },
        };
        // 그룹에 주석 추가
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.addAnnotation)(msg.groupId, newAnnotation);
        // 그룹 프레임 찾기
        const groupFrame = yield (0,_services_annotationFrameService__WEBPACK_IMPORTED_MODULE_4__.findOrCreateGroupFrame)(group);
        if (!groupFrame) {
            console.error("주석 그룹 프레임을 찾거나 생성할 수 없습니다");
            return;
        }
        // 주석 UI 컴포넌트 생성
        const { frame: annotationFrame } = yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__.createAnnotationComponents)(newAnnotation.id, group.annotations.length, group.color, group.size, group.cardWidth, newAnnotation.description);
        // 주석 프레임을 그룹 프레임에 추가
        groupFrame.appendChild(annotationFrame);
        // 현재 선택된 노드에 배지 생성
        const selection = figma.currentPage.selection[0];
        if (selection) {
            yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__.createAnnotationBadge)(selection, group.annotations.length, newAnnotation.id, group.color);
        }
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)("CREATE_ANNOTATION", true, {
            annotations: (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)(),
        });
    });
}
/**
 * DELETE_ANNOTATION 메시지 핸들러
 */
function handleDeleteAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(msg.groupId);
        if (!group)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        // 그룹 내에서 주석 제거
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.removeAnnotation)(msg.groupId, msg.annotation.id);
        // Figma 캔버스에서도 삭제
        let groupFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_3__.findGroupFrame)(group.id, group.groupFrameId);
        if (groupFrame) {
            const annotationFrame = groupFrame.findOne((node) => node.getPluginData("annotationId") === msg.annotation.id);
            if (annotationFrame) {
                annotationFrame.remove();
            }
            // 남아있는 주석 프레임들의 인덱스 번호 업데이트
            yield (0,_utils_updateUtils__WEBPACK_IMPORTED_MODULE_5__.updateAnnotationIndices)(groupFrame);
        }
        // 배지도 함께 삭제
        yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__.removeAnnotationBadge)(msg.annotation.id, msg.groupId);
        // 남아있는 annotation들의 배지 인덱스 업데이트
        yield (0,_utils_updateUtils__WEBPACK_IMPORTED_MODULE_5__.updateBadgeIndices)(group.id);
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true);
    });
}
/**
 * UPDATE_ANNOTATION 메시지 핸들러
 */
function handleUpdateAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(msg.groupId);
        const annotation = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findAnnotation)(msg.groupId, msg.annotationId);
        if (!group || !annotation)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        // 메모리 상태 업데이트
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.updateAnnotation)(msg.groupId, msg.annotationId, msg.key, msg.value);
        // 실제 Figma 요소도 업데이트
        const groupFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_3__.findGroupFrame)(group.id, group.groupFrameId);
        if (!groupFrame)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        // 해당 annotation 프레임 찾기
        const annotationFrame = groupFrame.findOne((node) => node.getPluginData("annotationId") === msg.annotationId);
        if (!annotationFrame)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        // description 텍스트 노드 찾아 업데이트
        if (msg.key === "description") {
            // 인덱스 컨테이너 찾기
            const indexContainer = annotationFrame.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_index_container");
            // content 그룹 찾기
            const contentGroup = annotationFrame.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_content");
            if (!contentGroup)
                return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
            // description 텍스트 노드 찾기
            const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                node.getPluginData("type") === "annotation_description");
            if (descNode) {
                // 리치 텍스트 서식 적용
                yield (0,_utils_textUtils__WEBPACK_IMPORTED_MODULE_6__.applyRichTextFormatting)(descNode, msg.value);
                // 레이아웃 업데이트를 위한 지연 처리
                setTimeout(() => {
                    if (indexContainer && contentGroup) {
                        // 레이아웃 속성 재설정하여 강제 업데이트
                        // 1. 프레임 레이아웃 재설정
                        annotationFrame.layoutMode = "HORIZONTAL";
                        annotationFrame.primaryAxisSizingMode = "FIXED";
                        annotationFrame.counterAxisSizingMode = "AUTO";
                        annotationFrame.layoutSizingVertical = "HUG";
                        // 2. 인덱스 컨테이너 레이아웃 재설정
                        indexContainer.layoutSizingVertical = "FILL";
                        // 3. 컨텐츠 그룹 레이아웃 재설정
                        contentGroup.layoutMode = "VERTICAL";
                        contentGroup.primaryAxisSizingMode = "AUTO";
                        contentGroup.counterAxisSizingMode = "FIXED";
                        contentGroup.layoutGrow = 1;
                        // 4. 텍스트 노드 레이아웃 재설정
                        descNode.layoutSizingHorizontal = "FILL";
                        descNode.textAutoResize = "HEIGHT";
                        // 5. 필요한 경우 레이아웃 강제 업데이트를 위한 트릭 적용
                        // 약간의 크기 변경 후 원래 크기로 복원하여 레이아웃 재계산 유도
                        const originalWidth = annotationFrame.width;
                        annotationFrame.resize(originalWidth + 1, annotationFrame.height);
                        annotationFrame.resize(originalWidth, annotationFrame.height);
                    }
                }, 100);
            }
        }
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true);
    });
}
/**
 * SYNC_ALL_ANNOTATIONS 메시지 핸들러
 * 모든 주석 그룹의 텍스트 내용을 Figma 캔버스에서 동기화합니다.
 */
function handleSyncAllAnnotations(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const allGroups = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)();
        if (!allGroups || allGroups.length === 0) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, {
                annotations: (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)(),
            });
        }
        // 모든 그룹을 순회하며 내용 동기화
        for (const group of allGroups) {
            const groupFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_3__.findGroupFrame)(group.id, group.groupFrameId);
            if (!groupFrame)
                continue;
            // 그룹 내 모든 주석 프레임 순회
            for (const annotation of group.annotations) {
                const annotationFrame = groupFrame.findOne((node) => node.getPluginData("annotationId") === annotation.id);
                if (!annotationFrame)
                    continue;
                // 인덱스 컨테이너 찾기
                const indexContainer = annotationFrame.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "annotation_index_container");
                // content 그룹 찾기
                const contentGroup = annotationFrame.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "annotation_content");
                if (!contentGroup)
                    continue;
                // description 텍스트 노드 찾기
                const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                    node.getPluginData("type") === "annotation_description");
                if (descNode) {
                    try {
                        // 텍스트 노드의 모든 폰트 로드 (이 부분이 중요합니다!)
                        if (descNode.hasMissingFont) {
                            console.warn("텍스트 노드에 누락된 폰트가 있습니다. 기본 폰트를 로드합니다.");
                            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                        }
                        else {
                            // 텍스트 노드의 모든 폰트 로드
                            const fontNames = descNode.getRangeAllFontNames(0, descNode.characters.length);
                            yield Promise.all(fontNames.map(figma.loadFontAsync));
                        }
                        // 텍스트 노드의 텍스트와 서식을 분석하여 Tiptap 호환 형식으로 변환
                        const descriptionData = convertFigmaTextToTiptapFormat(descNode);
                        // 메모리 상태 업데이트
                        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.updateAnnotation)(group.id, annotation.id, "description", descriptionData);
                        // 레이아웃 업데이트를 위한 지연 처리
                        setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                            if (indexContainer && contentGroup && descNode) {
                                try {
                                    // 텍스트 속성 변경 전에 다시 한번 폰트 로드 확인
                                    const fontNames = descNode.getRangeAllFontNames(0, descNode.characters.length);
                                    yield Promise.all(fontNames.map(figma.loadFontAsync));
                                    // 레이아웃 속성 재설정하여 강제 업데이트
                                    // 1. 프레임 레이아웃 재설정
                                    annotationFrame.layoutMode = "HORIZONTAL";
                                    annotationFrame.primaryAxisSizingMode = "FIXED";
                                    annotationFrame.counterAxisSizingMode = "AUTO";
                                    annotationFrame.layoutSizingVertical = "HUG";
                                    // 2. 인덱스 컨테이너 레이아웃 재설정
                                    indexContainer.layoutSizingVertical = "FILL";
                                    // 3. 컨텐츠 그룹 레이아웃 재설정
                                    contentGroup.layoutMode = "VERTICAL";
                                    contentGroup.primaryAxisSizingMode = "AUTO";
                                    contentGroup.counterAxisSizingMode = "FIXED";
                                    contentGroup.layoutGrow = 1;
                                    // 4. 텍스트 노드 레이아웃 재설정 (폰트 로드 후)
                                    descNode.layoutSizingHorizontal = "FILL";
                                    descNode.textAutoResize = "HEIGHT";
                                    // 5. 레이아웃 강제 업데이트를 위한 트릭 적용
                                    const originalWidth = annotationFrame.width;
                                    annotationFrame.resize(originalWidth + 1, annotationFrame.height);
                                    annotationFrame.resize(originalWidth, annotationFrame.height);
                                }
                                catch (error) {
                                    console.error("레이아웃 업데이트 중 오류 발생:", error);
                                }
                            }
                        }), 100);
                    }
                    catch (error) {
                        console.error("폰트 로드 중 오류 발생:", error);
                    }
                }
            }
        }
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, {
            annotations: (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)(),
        });
    });
}
/**
 * Figma 텍스트 노드의 내용을 Tiptap 호환 형식으로 변환합니다.
 */
function convertFigmaTextToTiptapFormat(figmaTextNode) {
    // 기본 문서 구조 생성
    const tiptapDoc = {
        type: "doc",
        content: [],
    };
    // 텍스트가 없으면 빈 문서 반환
    if (!figmaTextNode.characters || figmaTextNode.characters.length === 0) {
        tiptapDoc.content.push({
            type: "paragraph",
            content: [],
        });
        return tiptapDoc;
    }
    // 텍스트 전체 문자열
    const fullText = figmaTextNode.characters;
    // 줄바꿈 위치 찾기
    const lineBreaks = [];
    let nextLineBreak = fullText.indexOf("\n");
    while (nextLineBreak !== -1) {
        lineBreaks.push(nextLineBreak);
        nextLineBreak = fullText.indexOf("\n", nextLineBreak + 1);
    }
    // 줄 시작과 끝 위치 계산
    const lines = [];
    let startPos = 0;
    for (const breakPos of lineBreaks) {
        lines.push({
            start: startPos,
            end: breakPos,
            text: fullText.substring(startPos, breakPos),
        });
        startPos = breakPos + 1; // '\n' 다음부터 시작
    }
    // 마지막 줄 추가
    if (startPos < fullText.length) {
        lines.push({
            start: startPos,
            end: fullText.length,
            text: fullText.substring(startPos),
        });
    }
    // 빈 문자열이라면 빈 줄 하나 추가
    if (lines.length === 0) {
        lines.push({
            start: 0,
            end: 0,
            text: "",
        });
    }
    // 각 줄을 단락으로 변환
    for (const line of lines) {
        // 각 줄은 하나의 단락이 됨
        const paragraph = {
            type: "paragraph",
            content: [],
        };
        if (line.text.length > 0) {
            // 현재 줄에서 스타일 변경 지점 찾기
            let currentPos = line.start;
            while (currentPos < line.end) {
                // 현재 위치의 스타일 속성 가져오기
                const fontName = figmaTextNode.getRangeFontName(currentPos, currentPos + 1);
                const fills = figmaTextNode.getRangeFills(currentPos, currentPos + 1);
                const textDecoration = figmaTextNode.getRangeTextDecoration(currentPos, currentPos + 1);
                // 같은 스타일을 가진 범위 찾기
                let endPos = currentPos + 1;
                while (endPos < line.end) {
                    const nextFontName = figmaTextNode.getRangeFontName(endPos, endPos + 1);
                    const nextFills = figmaTextNode.getRangeFills(endPos, endPos + 1);
                    const nextTextDecoration = figmaTextNode.getRangeTextDecoration(endPos, endPos + 1);
                    // 스타일이 변경되면 범위 종료
                    if (JSON.stringify(fontName) !== JSON.stringify(nextFontName) ||
                        JSON.stringify(fills) !== JSON.stringify(nextFills) ||
                        textDecoration !== nextTextDecoration) {
                        break;
                    }
                    endPos++;
                }
                // 텍스트 조각 추출 (절대 위치 기준)
                const textChunk = fullText.substring(currentPos, endPos);
                // 텍스트 노드 생성
                const tiptapTextNode = {
                    type: "text",
                    text: textChunk,
                    marks: [],
                };
                // 볼드 스타일 확인
                if (fontName &&
                    typeof fontName !== "symbol" &&
                    "style" in fontName &&
                    fontName.style === "Bold") {
                    tiptapTextNode.marks.push({ type: "bold" });
                }
                // 밑줄 스타일 확인
                if (textDecoration === "UNDERLINE") {
                    tiptapTextNode.marks.push({ type: "underline" });
                }
                // 색상 스타일 확인 (첫번째 fill만 고려)
                if (fills &&
                    typeof fills !== "symbol" &&
                    Array.isArray(fills) &&
                    fills.length > 0 &&
                    fills[0].type === "SOLID") {
                    const color = fills[0].color;
                    // RGB를 16진수로 변환
                    const hexColor = rgbToHex(Math.round(color.r * 255), Math.round(color.g * 255), Math.round(color.b * 255));
                    if (hexColor !== "#000000") {
                        // 검은색이 아닌 경우에만 색상 정보 추가
                        tiptapTextNode.marks.push({
                            type: "textStyle",
                            attrs: { color: hexColor },
                        });
                    }
                }
                // 텍스트가 있는 경우에만 단락에 추가
                if (textChunk.trim().length > 0) {
                    paragraph.content.push(tiptapTextNode);
                }
                // 다음 위치로 이동
                currentPos = endPos;
            }
        }
        // 빈 단락이더라도 문서에 추가 (Tiptap에서 중요)
        tiptapDoc.content.push(paragraph);
    }
    // 디버깅용 로그
    console.log("변환된 Tiptap 문서:", JSON.stringify(tiptapDoc));
    return tiptapDoc;
}
/**
 * RGB 색상값을 16진수 문자열로 변환합니다.
 */
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


/***/ }),

/***/ "./src/handlers/dataHandlers.ts":
/*!**************************************!*\
  !*** ./src/handlers/dataHandlers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleClearAnnotationData: () => (/* binding */ handleClearAnnotationData),
/* harmony export */   handleGetFileName: () => (/* binding */ handleGetFileName),
/* harmony export */   handleGetPageName: () => (/* binding */ handleGetPageName),
/* harmony export */   handleLoadData: () => (/* binding */ handleLoadData),
/* harmony export */   handleSaveData: () => (/* binding */ handleSaveData)
/* harmony export */ });
/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/messageUtils */ "./src/utils/messageUtils.ts");
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * SAVE_DATA 메시지 핸들러
 */
function handleSaveData(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
            (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, true);
        }
        catch (error) {
            (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, false, {}, String(error));
        }
    });
}
/**
 * LOAD_DATA 메시지 핸들러
 */
function handleLoadData(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const raw = figma.root.getPluginData(msg.key);
            const parsed = raw ? JSON.parse(raw) : [];
            console.log(parsed, "parsed");
            (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_1__.initAnnotationGroups)(parsed);
            (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, true, { key: msg.key, data: parsed });
        }
        catch (error) {
            (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, false, {}, String(error));
        }
    });
}
/**
 * CLEAR_ANNOTATION_DATA 메시지 핸들러
 */
function handleClearAnnotationData(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.root.setPluginData("annotationGroup", "[]");
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_1__.initAnnotationGroups)([]);
        (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, true, {});
    });
}
/**
 * GET_FILE_NAME 메시지 핸들러
 */
function handleGetFileName(msg) {
    (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, true, { fileName: figma.root.name });
}
/**
 * GET_PAGE_NAME 메시지 핸들러
 */
function handleGetPageName(msg) {
    const page = figma.root.findOne((n) => n.id === msg.pageId);
    (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_0__.sendResponse)(msg.type, true, {
        pageId: msg.pageId,
        pageName: (page === null || page === void 0 ? void 0 : page.name) || "Unknown Page",
    });
}


/***/ }),

/***/ "./src/handlers/groupHandlers.ts":
/*!***************************************!*\
  !*** ./src/handlers/groupHandlers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCreateAnnotationGroup: () => (/* binding */ handleCreateAnnotationGroup),
/* harmony export */   handleDeleteAnnotationGroup: () => (/* binding */ handleDeleteAnnotationGroup),
/* harmony export */   handleUpdateAnnotationGroup: () => (/* binding */ handleUpdateAnnotationGroup),
/* harmony export */   handleUpdateAnnotationOrder: () => (/* binding */ handleUpdateAnnotationOrder)
/* harmony export */ });
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/messageUtils */ "./src/utils/messageUtils.ts");
/* harmony import */ var _utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/nodeUtils */ "./src/utils/nodeUtils.ts");
/* harmony import */ var _services_annotationFrameService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/annotationFrameService */ "./src/services/annotationFrameService.ts");
/* harmony import */ var _utils_sizeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/sizeUtils */ "./src/utils/sizeUtils.ts");
/* harmony import */ var _canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../canvas/annotationElements */ "./src/canvas/annotationElements.ts");
/* harmony import */ var _utils_frameUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/frameUtils */ "./src/utils/frameUtils.ts");
/* harmony import */ var _utils_updateUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/updateUtils */ "./src/utils/updateUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};









/**
 * CREATE_ANNOTATION_GROUP 메시지 핸들러
 */
function handleCreateAnnotationGroup(msg) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const selection = figma.currentPage.selection[0];
        if (!selection) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false, {}, "Please select a layer on the canvas.");
        }
        const topFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__.getTopLevelFrame)(selection);
        if (!topFrame) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false, {}, "Top-level frame not found.");
        }
        const newGroupId = topFrame.id;
        const newGroupName = topFrame.name;
        const existingGroup = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(newGroupId);
        // ANNOTATION_GROUP 생성
        let annotationGroupFrame;
        if (existingGroup) {
            // 기존 그룹 프레임 찾기
            const existingGroupFrame = topFrame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "group");
            if (existingGroupFrame) {
                annotationGroupFrame = existingGroupFrame;
            }
            else {
                // 예상치 못하게 그룹 프레임이 없다면 새로 생성
                const cardWidth = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_4__.getCardWidth)(existingGroup.cardWidth);
                annotationGroupFrame = yield (0,_services_annotationFrameService__WEBPACK_IMPORTED_MODULE_3__.createAnnotationGroupFrame)(topFrame, cardWidth);
            }
            // 새 주석 메모리 객체 생성
            const newAnnotation = {
                id: `annotation-${Date.now()}`,
                description: {
                    type: "doc",
                    content: [],
                },
            };
            // 그룹에 주석 추가 (메모리)
            existingGroup.annotations.push(newAnnotation);
            // 주석 UI 컴포넌트 생성
            const { frame: annotationFrame } = yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__.createAnnotationComponents)(newAnnotation.id, existingGroup.annotations.length, existingGroup.color, existingGroup.size, existingGroup.cardWidth, newAnnotation.description);
            // 주석 프레임을 그룹 프레임에 추가
            annotationGroupFrame.appendChild(annotationFrame);
            // 선택된 노드에 배지 생성
            yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__.createAnnotationBadge)(selection, existingGroup.annotations.length, newAnnotation.id, existingGroup.color);
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, {
                annotations: (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)(),
                updatedGroup: newGroupId,
            });
        }
        // 🆕 새 그룹 생성
        const cardWidth = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_4__.getCardWidth)((_a = msg.config) === null || _a === void 0 ? void 0 : _a.cardWidth);
        annotationGroupFrame = yield (0,_services_annotationFrameService__WEBPACK_IMPORTED_MODULE_3__.createAnnotationGroupFrame)(topFrame, cardWidth);
        // 기본 주석 생성
        const defaultAnnotation = {
            id: `annotation-${Date.now()}`,
            description: ((_b = msg.config) === null || _b === void 0 ? void 0 : _b.description) || {
                type: "doc",
                content: [],
            },
        };
        // 그룹에 pluginData 설정
        topFrame.setPluginData("type", "frame");
        topFrame.setPluginData("has_annotation_group", "true");
        annotationGroupFrame.setPluginData("group_id", defaultAnnotation.id);
        const newGroup = Object.assign({ id: newGroupId, name: newGroupName, relatedPage: {
                id: figma.currentPage.id,
                name: figma.currentPage.name,
            }, annotations: [defaultAnnotation], obsolete: false, groupFrameId: annotationGroupFrame.id }, msg.config);
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.addAnnotationGroup)(newGroup);
        // 주석 UI 컴포넌트 생성
        const { frame: annotationFrame } = yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__.createAnnotationComponents)(defaultAnnotation.id, 1, (_c = msg.config) === null || _c === void 0 ? void 0 : _c.color, (_d = msg.config) === null || _d === void 0 ? void 0 : _d.size, (_e = msg.config) === null || _e === void 0 ? void 0 : _e.cardWidth, defaultAnnotation.description);
        // 주석 프레임을 그룹 프레임에 추가
        annotationGroupFrame.appendChild(annotationFrame);
        // 선택된 노드에 배지 생성
        yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__.createAnnotationBadge)(selection, 1, defaultAnnotation.id, (_f = msg.config) === null || _f === void 0 ? void 0 : _f.color);
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, {
            annotations: (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.getAnnotationGroups)(),
            updatedGroup: newGroupId,
        });
    });
}
/**
 * DELETE_ANNOTATION_GROUP 메시지 핸들러
 */
function handleDeleteAnnotationGroup(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupToDelete = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(msg.group.id);
        if (!groupToDelete)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        if (groupToDelete.groupFrameId) {
            const groupFrame = figma.getNodeById(groupToDelete.groupFrameId);
            if (groupFrame && groupFrame.type === "FRAME") {
                // 그룹에 속한 모든 주석의 배지 삭제
                for (const annotation of groupToDelete.annotations) {
                    yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_5__.removeAnnotationBadge)(annotation.id, msg.group.id);
                }
                // 타이틀 컨테이너 찾기 및 삭제 (명시적으로 처리)
                const titleContainer = groupFrame.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "title_container");
                if (titleContainer) {
                    titleContainer.remove();
                }
                // 그룹 프레임 삭제
                groupFrame.remove();
            }
        }
        // 메모리에서 그룹 제거
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.removeAnnotationGroup)(msg.group.id);
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true);
    });
}
/**
 * UPDATE_ANNOTATION_GROUP 메시지 핸들러
 */
function handleUpdateAnnotationGroup(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(msg.groupId);
        if (!group)
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        // 메모리 상태 업데이트
        (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.updateAnnotationGroup)(msg.groupId, msg.key, msg.value);
        // Figma 요소 업데이트
        const frameNode = figma.getNodeById(group.id);
        if (frameNode) {
            frameNode.setPluginData(msg.key, JSON.stringify(msg.value));
        }
        // 그룹 프레임도 업데이트
        if (group.groupFrameId) {
            const groupFrame = figma.getNodeById(group.groupFrameId);
            if (groupFrame) {
                groupFrame.setPluginData(msg.key, JSON.stringify(msg.value));
                // 색상 업데이트
                if (msg.key === "color") {
                    const colorValue = parseInt(msg.value);
                    (0,_utils_frameUtils__WEBPACK_IMPORTED_MODULE_6__.updateGroupFrameColor)(groupFrame, colorValue);
                }
                // 크기 업데이트
                if (msg.key === "size" || msg.key === "cardWidth") {
                    yield (0,_utils_frameUtils__WEBPACK_IMPORTED_MODULE_6__.updateGroupFrameSize)(groupFrame, msg.key, msg.value);
                }
            }
        }
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true);
    });
}
/**
 * UPDATE_ANNOTATION_ORDER 메시지 핸들러
 */
function handleUpdateAnnotationOrder(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const { groupId, sourceIndex, destinationIndex } = msg;
        // 메모리상의 주석 순서 업데이트
        const success = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.updateAnnotationOrder)(groupId, sourceIndex, destinationIndex);
        if (!success) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        }
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(groupId);
        // Figma 캔버스 상의 주석 순서 업데이트
        const groupFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__.findGroupFrame)(group.id, group.groupFrameId);
        if (!groupFrame || groupFrame.type !== "FRAME") {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, false);
        }
        // 모든 자식 요소 중 annotationFrame만 필터링
        const titleContainer = groupFrame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "title_container");
        const annotationFrames = groupFrame.children.filter((node) => node.type === "FRAME" && node.getPluginData("type") === "annotation");
        // 메모리의 주석 순서에 맞게 annotationFrame들을 재정렬
        if (annotationFrames.length === group.annotations.length) {
            // 각 주석에 해당하는 프레임 찾아서 순서대로 재배치
            group.annotations.forEach((annotation, index) => {
                const annotationNode = annotationFrames.find((frame) => frame.getPluginData("annotationId") === annotation.id);
                if (annotationNode) {
                    // Title 컨테이너는 항상 맨 위에 유지하고, 그 다음부터 주석 프레임 배치
                    // index + 1은 Title 컨테이너 다음 위치부터 시작한다는 의미
                    groupFrame.insertChild(index + 1, annotationNode);
                }
            });
            // Title 컨테이너가 있다면 항상 맨 위로 이동
            if (titleContainer) {
                groupFrame.insertChild(0, titleContainer);
            }
            // 순서가 바뀐 후 인덱스 번호 업데이트
            yield (0,_utils_updateUtils__WEBPACK_IMPORTED_MODULE_7__.updateAnnotationIndices)(groupFrame);
            // 배지 인덱스도 업데이트
            yield (0,_utils_updateUtils__WEBPACK_IMPORTED_MODULE_7__.updateBadgeIndices)(group.id);
        }
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true);
    });
}


/***/ }),

/***/ "./src/handlers/navigationHandlers.ts":
/*!********************************************!*\
  !*** ./src/handlers/navigationHandlers.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleCheckCurrentSelection: () => (/* binding */ handleCheckCurrentSelection),
/* harmony export */   handleGetFrameImage: () => (/* binding */ handleGetFrameImage),
/* harmony export */   handleMoveToAnnotation: () => (/* binding */ handleMoveToAnnotation),
/* harmony export */   handleMoveToSelection: () => (/* binding */ handleMoveToSelection)
/* harmony export */ });
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
/* harmony import */ var _utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/messageUtils */ "./src/utils/messageUtils.ts");
/* harmony import */ var _utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/nodeUtils */ "./src/utils/nodeUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * MOVE_TO_SELECTION 메시지 핸들러
 */
function handleMoveToSelection(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        // 페이지 ID가 제공된 경우 먼저 해당 페이지로 이동
        if (msg.pageId) {
            const pageNode = figma.root.findOne((node) => node.id === msg.pageId);
            if (pageNode && pageNode.type === "PAGE") {
                figma.currentPage = pageNode;
            }
        }
        // groupNode를 찾은 후 해당 노드의 최상위 프레임으로 이동
        const groupNode = figma.getNodeById(msg.groupId);
        if (groupNode && groupNode.type === "FRAME") {
            // 최상위 프레임 찾기
            const topFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__.getTopLevelFrame)(groupNode);
            if (topFrame) {
                figma.viewport.scrollAndZoomIntoView([topFrame]);
            }
            else {
                // 최상위 프레임을 찾지 못한 경우 그룹 노드로 이동 (기존 동작)
                figma.viewport.scrollAndZoomIntoView([groupNode]);
            }
        }
        else if (groupNode) {
            // 프레임이 아닌 노드인 경우도 최상위 프레임 찾기 시도
            const topFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_2__.getTopLevelFrame)(groupNode);
            if (topFrame) {
                figma.viewport.scrollAndZoomIntoView([topFrame]);
            }
            else {
                // 최상위 프레임을 찾지 못한 경우 그룹 노드로 이동 (기존 동작)
                figma.viewport.scrollAndZoomIntoView([groupNode]);
            }
        }
    });
}
/**
 * MOVE_TO_ANNOTATION 메시지 핸들러
 */
function handleMoveToAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        // 페이지 ID가 제공된 경우 먼저 해당 페이지로 이동
        if (msg.pageId) {
            const pageNode = figma.root.findOne((node) => node.id === msg.pageId);
            if (pageNode && pageNode.type === "PAGE") {
                figma.currentPage = pageNode;
            }
        }
        // 해당 주석의 배지 찾기
        const badges = figma.currentPage.findAll((node) => node.getPluginData("type") === "annotation_badge" &&
            node.getPluginData("annotationId") === msg.annotationId);
        if (badges.length > 0) {
            // 배지를 뷰포트로 가져오기
            figma.viewport.scrollAndZoomIntoView(badges);
        }
        else {
            // 배지를 찾지 못한 경우 그룹 프레임으로 이동 (대체 옵션)
            const groupNode = figma.getNodeById(msg.groupId);
            if (groupNode) {
                figma.viewport.scrollAndZoomIntoView([groupNode]);
            }
        }
    });
}
/**
 * CHECK_CURRENT_SELECTION 메시지 핸들러
 */
function handleCheckCurrentSelection(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupNode = figma.getNodeById(msg.groupId);
        const exists = !!groupNode;
        return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, {
            result: exists,
            groupId: msg.groupId,
            obsolete: !exists,
        });
    });
}
/**
 * GET_FRAME_IMAGE 메시지 핸들러
 */
function handleGetFrameImage(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const frameImages = [];
        const groups = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(null);
        if (!groups || !Array.isArray(groups)) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, { frameImages: [] });
        }
        for (const group of groups) {
            const frameNode = figma.getNodeById(group.id);
            if (frameNode && frameNode.type === "FRAME") {
                const image = yield frameNode.exportAsync({
                    format: "PNG",
                    constraint: { type: "SCALE", value: 2 },
                });
                frameImages.push({
                    groupId: group.id,
                    imageData: `data:image/png;base64,${figma.base64Encode(image)}`,
                });
            }
        }
        if (frameImages.length > 0) {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, { frameImages });
        }
        else {
            return (0,_utils_messageUtils__WEBPACK_IMPORTED_MODULE_1__.sendResponse)(msg.type, true, { frameImages: [] });
        }
    });
}


/***/ }),

/***/ "./src/interfaces/const.ts":
/*!*********************************!*\
  !*** ./src/interfaces/const.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   supportedCardWidth: () => (/* binding */ supportedCardWidth),
/* harmony export */   supportedColors: () => (/* binding */ supportedColors),
/* harmony export */   supportedFontSizes: () => (/* binding */ supportedFontSizes)
/* harmony export */ });
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enums */ "./src/interfaces/enums.ts");

const supportedFontSizes = {
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL]: {
        badgeSize: 24,
        badgeText: 14,
        desription: 14,
        gap: 8,
    },
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.MEDIUM]: {
        badgeSize: 28,
        badgeText: 18,
        desription: 18,
        gap: 10,
    },
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.LARGE]: {
        badgeSize: 32,
        badgeText: 21,
        desription: 21,
        gap: 12,
    },
};
const supportedColors = {
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.RED]: "bg-subRed-01",
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLUE]: "bg-primary",
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLACK]: "bg-black",
};
const supportedCardWidth = {
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL]: 320,
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.MEDIUM]: 400,
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.LARGE]: 480,
};


/***/ }),

/***/ "./src/interfaces/enums.ts":
/*!*********************************!*\
  !*** ./src/interfaces/enums.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnnnotationCardWidth: () => (/* binding */ AnnnotationCardWidth),
/* harmony export */   AnnotationColor: () => (/* binding */ AnnotationColor),
/* harmony export */   AnnotationSize: () => (/* binding */ AnnotationSize)
/* harmony export */ });
var AnnotationSize;
(function (AnnotationSize) {
    AnnotationSize[(AnnotationSize["SMALL"] = 0)] = "SMALL";
    AnnotationSize[(AnnotationSize["MEDIUM"] = 1)] = "MEDIUM";
    AnnotationSize[(AnnotationSize["LARGE"] = 2)] = "LARGE";
})(AnnotationSize || (AnnotationSize = {}));
var AnnotationColor;
(function (AnnotationColor) {
    AnnotationColor[(AnnotationColor["RED"] = 0)] = "RED";
    AnnotationColor[(AnnotationColor["BLUE"] = 1)] = "BLUE";
    AnnotationColor[(AnnotationColor["BLACK"] = 2)] = "BLACK";
})(AnnotationColor || (AnnotationColor = {}));
var AnnnotationCardWidth;
(function (AnnnotationCardWidth) {
    AnnnotationCardWidth[(AnnnotationCardWidth["SMALL"] = 0)] = "SMALL";
    AnnnotationCardWidth[(AnnnotationCardWidth["MEDIUM"] = 1)] = "MEDIUM";
    AnnnotationCardWidth[(AnnnotationCardWidth["LARGE"] = 2)] = "LARGE";
})(AnnnotationCardWidth || (AnnnotationCardWidth = {}));


/***/ }),

/***/ "./src/services/annotationFrameService.ts":
/*!************************************************!*\
  !*** ./src/services/annotationFrameService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createAnnotationGroupFrame: () => (/* binding */ createAnnotationGroupFrame),
/* harmony export */   findOrCreateGroupFrame: () => (/* binding */ findOrCreateGroupFrame)
/* harmony export */ });
/* harmony import */ var _utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/sizeUtils */ "./src/utils/sizeUtils.ts");
/* harmony import */ var _utils_nodeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/nodeUtils */ "./src/utils/nodeUtils.ts");
/* harmony import */ var _canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../canvas/annotationElements */ "./src/canvas/annotationElements.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * 그룹 프레임을 찾거나 생성합니다.
 */
function findOrCreateGroupFrame(group) {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. 기존 그룹 프레임 찾기 시도
        let groupFrame = (0,_utils_nodeUtils__WEBPACK_IMPORTED_MODULE_1__.findGroupFrame)(group.id, group.groupFrameId);
        // 2. 찾지 못한 경우 새로 생성
        if (!groupFrame) {
            const topFrame = figma.getNodeById(group.id);
            if (!topFrame)
                return null;
            groupFrame = figma.createFrame();
            groupFrame.name = "ANNOTATION_GROUP";
            groupFrame.setPluginData("type", "group");
            groupFrame.setPluginData("parent_frame_id", group.id);
            // 카드 너비 계산
            const cardWidth = (0,_utils_sizeUtils__WEBPACK_IMPORTED_MODULE_0__.getCardWidth)(group.cardWidth);
            // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
            // 부모 프레임의 우측 상단에서 약간 안쪽으로 위치
            groupFrame.x = topFrame.width - cardWidth - 20; // 우측에서 카드 너비만큼 안쪽으로
            groupFrame.y = 20; // 상단에서 약간 아래로
            groupFrame.resize(cardWidth, 300);
            // 레이아웃 모드 설정 - 세로 배치
            groupFrame.layoutMode = "VERTICAL";
            // 상위 프레임에 추가
            if (topFrame.parent) {
                topFrame.appendChild(groupFrame);
            }
            else {
                // 부모가 없으면 현재 페이지에 추가
                figma.currentPage.appendChild(groupFrame);
            }
            // 그룹 정보 업데이트
            group.groupFrameId = groupFrame.id;
        }
        return groupFrame;
    });
}
/**
 * 새 주석 그룹 프레임을 생성합니다.
 */
function createAnnotationGroupFrame(topFrame, cardWidth) {
    return __awaiter(this, void 0, void 0, function* () {
        const annotationGroupFrame = figma.createFrame();
        annotationGroupFrame.name = "ANNOTATION_GROUP";
        annotationGroupFrame.setPluginData("type", "group");
        annotationGroupFrame.setPluginData("parent_frame_id", topFrame.id);
        // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
        annotationGroupFrame.x = topFrame.width - cardWidth - 20;
        annotationGroupFrame.y = 20;
        annotationGroupFrame.resize(cardWidth, 300);
        annotationGroupFrame.fills = []; // 배경색 제거
        // 레이아웃 모드 설정 - 세로 배치
        annotationGroupFrame.layoutMode = "VERTICAL";
        // annotationGroupFrame.paddingTop = 10;
        // annotationGroupFrame.paddingBottom = 10;
        // annotationGroupFrame.paddingLeft = 10;
        // annotationGroupFrame.paddingRight = 10;
        // 상위 프레임에 추가
        topFrame.appendChild(annotationGroupFrame);
        // Title 그룹 생성 및 추가
        const availableWidth = cardWidth -
            (annotationGroupFrame.paddingLeft + annotationGroupFrame.paddingRight);
        const titleGroup = yield (0,_canvas_annotationElements__WEBPACK_IMPORTED_MODULE_2__.createTitleGroup)(topFrame.id, availableWidth, "Description");
        annotationGroupFrame.appendChild(titleGroup);
        return annotationGroupFrame;
    });
}


/***/ }),

/***/ "./src/services/annotationGroupService.ts":
/*!************************************************!*\
  !*** ./src/services/annotationGroupService.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAnnotation: () => (/* binding */ addAnnotation),
/* harmony export */   addAnnotationGroup: () => (/* binding */ addAnnotationGroup),
/* harmony export */   findAnnotation: () => (/* binding */ findAnnotation),
/* harmony export */   findGroup: () => (/* binding */ findGroup),
/* harmony export */   getAnnotationGroups: () => (/* binding */ getAnnotationGroups),
/* harmony export */   initAnnotationGroups: () => (/* binding */ initAnnotationGroups),
/* harmony export */   removeAnnotation: () => (/* binding */ removeAnnotation),
/* harmony export */   removeAnnotationGroup: () => (/* binding */ removeAnnotationGroup),
/* harmony export */   updateAnnotation: () => (/* binding */ updateAnnotation),
/* harmony export */   updateAnnotationGroup: () => (/* binding */ updateAnnotationGroup),
/* harmony export */   updateAnnotationOrder: () => (/* binding */ updateAnnotationOrder)
/* harmony export */ });
// 전역 메모리 상태 관리
let annotationGroups = [];
/**
 * 그룹 찾기
 * @param groupId 찾을 그룹의 ID
 * @returns 찾은 그룹 또는 undefined
 */
function findGroup(groupId) {
    return annotationGroups.find((g) => g.id === groupId);
}
/**
 * 주석 찾기
 * @param groupId 그룹 ID
 * @param annotationId 주석 ID
 * @returns 찾은 주석 또는 null
 */
function findAnnotation(groupId, annotationId) {
    const group = findGroup(groupId);
    if (!group)
        return null;
    return group.annotations.find((a) => a.id === annotationId);
}
/**
 * 주석 추가
 * @param groupId 그룹 ID
 * @param annotation 추가할 주석 객체
 * @returns 성공 여부
 */
function addAnnotation(groupId, annotation) {
    const group = findGroup(groupId);
    if (!group)
        return false;
    group.annotations.push(annotation);
    return true;
}
/**
 * 주석 삭제
 * @param groupId 그룹 ID
 * @param annotationId 삭제할 주석 ID
 * @returns 성공 여부
 */
function removeAnnotation(groupId, annotationId) {
    const group = findGroup(groupId);
    if (!group)
        return false;
    const initialLength = group.annotations.length;
    group.annotations = group.annotations.filter((a) => a.id !== annotationId);
    return group.annotations.length < initialLength;
}
/**
 * 주석 업데이트
 * @param groupId 그룹 ID
 * @param annotationId 업데이트할 주석 ID
 * @param key 업데이트할 속성 키
 * @param value 업데이트할 값
 * @returns 성공 여부
 */
function updateAnnotation(groupId, annotationId, key, value) {
    const annotation = findAnnotation(groupId, annotationId);
    if (!annotation)
        return false;
    annotation[key] = value;
    return true;
}
/**
 * 주석 그룹 추가
 * @param group 추가할 그룹 객체
 * @returns 성공 여부
 */
function addAnnotationGroup(group) {
    if (!group || !group.id)
        return false;
    // 이미 존재하는 그룹인지 확인
    const existingGroup = findGroup(group.id);
    if (existingGroup)
        return false;
    annotationGroups.push(group);
    return true;
}
/**
 * 주석 그룹 삭제
 * @param groupId 삭제할 그룹 ID
 * @returns 성공 여부
 */
function removeAnnotationGroup(groupId) {
    const initialLength = annotationGroups.length;
    annotationGroups = annotationGroups.filter((g) => g.id !== groupId);
    return annotationGroups.length < initialLength;
}
/**
 * 주석 그룹 업데이트
 * @param groupId 업데이트할 그룹 ID
 * @param key 업데이트할 속성 키
 * @param value 업데이트할 값
 * @returns 성공 여부
 */
function updateAnnotationGroup(groupId, key, value) {
    const group = findGroup(groupId);
    if (!group)
        return false;
    group[key] = value;
    return true;
}
/**
 * 주석 그룹 초기화
 * @param groups 초기 그룹 배열
 */
function initAnnotationGroups(groups = []) {
    annotationGroups = groups;
}
/**
 * 모든 주석 그룹 가져오기
 * @returns 주석 그룹 배열
 */
function getAnnotationGroups() {
    return annotationGroups;
}
/**
 * 주석 순서 업데이트
 * @param groupId 그룹 ID
 * @param sourceIndex 원본 인덱스
 * @param destinationIndex 목적지 인덱스
 * @returns 성공 여부
 */
function updateAnnotationOrder(groupId, sourceIndex, destinationIndex) {
    const group = findGroup(groupId);
    if (!group)
        return false;
    // 인덱스 범위 검사
    if (sourceIndex < 1 ||
        sourceIndex > group.annotations.length ||
        destinationIndex < 1 ||
        destinationIndex > group.annotations.length) {
        return false;
    }
    // 메모리상의 주석 순서 업데이트
    const annotations = [...group.annotations];
    const [movedAnnotation] = annotations.splice(sourceIndex - 1, 1);
    annotations.splice(destinationIndex - 1, 0, movedAnnotation);
    group.annotations = annotations;
    return true;
}


/***/ }),

/***/ "./src/utils/colorUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/colorUtils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorByValue: () => (/* binding */ getColorByValue),
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb)
/* harmony export */ });
/* harmony import */ var _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/enums */ "./src/interfaces/enums.ts");

/**
 * 색상 값에 따라 RGB 값을 반환합니다.
 */
function getColorByValue(colorValue) {
    switch (colorValue) {
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.RED:
            return { r: 0.93, g: 0.37, b: 0.37 }; // RED
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLUE:
            return { r: 0.0, g: 0.1, b: 1.0 }; // BLUE
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLACK:
            return { r: 0, g: 0, b: 0 }; // BLACK
        default:
            return { r: 0.0, g: 0.1, b: 1.0 }; // 기본값: BLUE
    }
}
/**
 * 헥스 색상 코드를 RGB로 변환합니다.
 */
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
}


/***/ }),

/***/ "./src/utils/frameUtils.ts":
/*!*********************************!*\
  !*** ./src/utils/frameUtils.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateGroupFrameColor: () => (/* binding */ updateGroupFrameColor),
/* harmony export */   updateGroupFrameSize: () => (/* binding */ updateGroupFrameSize)
/* harmony export */ });
/* harmony import */ var _colorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorUtils */ "./src/utils/colorUtils.ts");
/* harmony import */ var _sizeUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizeUtils */ "./src/utils/sizeUtils.ts");
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



/**
 * 그룹 프레임 색상을 업데이트합니다.
 */
function updateGroupFrameColor(frame, colorValue) {
    const headerColor = (0,_colorUtils__WEBPACK_IMPORTED_MODULE_0__.getColorByValue)(colorValue);
    // 프레임 자체 색상 업데이트 - 배경색 제거
    frame.fills = [];
    // Title 그룹 처리
    const titleGroup = frame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "title_container");
    if (titleGroup) {
        // 타이틀 그룹 배경색 유지
        titleGroup.fills = [
            { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
        ];
    }
    // 모든 자식 주석 요소들 처리
    frame.children.forEach((child) => {
        if (child.type === "FRAME" &&
            child.getPluginData("type") === "annotation") {
            // 주석 프레임의 배경색 제거
            child.fills = [];
            // 인덱스 컨테이너 찾기
            const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_index_container");
            if (indexContainer) {
                // 인덱스 컨테이너 배경색 유지
                indexContainer.fills = [
                    {
                        type: "SOLID",
                        color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 },
                    },
                ];
            }
            // 컨텐츠 그룹 찾기
            const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_content");
            if (contentGroup) {
                // 컨텐츠 그룹 배경색 제거
                contentGroup.fills = [];
            }
        }
    });
    // 그룹 ID 가져오기 (parent_frame_id에 저장되어 있음)
    const parentFrameId = frame.getPluginData("parent_frame_id");
    if (!parentFrameId)
        return;
    // 해당 그룹의 모든 주석 ID 가져오기
    const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_2__.findGroup)(parentFrameId);
    if (!group)
        return;
    const annotationIds = group.annotations.map((a) => a.id);
    // 페이지에서 해당 그룹에 속한 모든 배지 찾기
    figma.currentPage
        .findAll((node) => node.getPluginData("type") === "annotation_badge" &&
        annotationIds.includes(node.getPluginData("annotationId")))
        .forEach((badge) => {
        if (badge.type === "FRAME") {
            // 배지 색상만 업데이트
            badge.fills = [{ type: "SOLID", color: headerColor }];
        }
    });
}
/**
 * 그룹 프레임 크기를 업데이트합니다.
 */
function updateGroupFrameSize(frame, property, value) {
    return __awaiter(this, void 0, void 0, function* () {
        // 카드 너비 계산
        const cardWidth = property === "cardWidth" ? (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getCardWidth)(value) : (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getCardWidth)();
        // 프레임이 속한 부모 프레임 찾기
        const parentFrameId = frame.getPluginData("parent_frame_id");
        if (parentFrameId && property === "cardWidth") {
            const parentFrame = figma.getNodeById(parentFrameId);
            if (parentFrame && parentFrame.type === "FRAME") {
                // x 좌표 업데이트 - 부모 프레임 내부의 우측에 위치하도록 설정
                frame.x = parentFrame.width - cardWidth - 20;
            }
        }
        // 너비와 높이 설정 (높이는 내용에 맞게 자동 조정)
        frame.layoutSizingHorizontal = "FIXED";
        frame.layoutSizingVertical = "HUG";
        frame.resize(cardWidth, frame.height);
        // Title 그룹 크기 업데이트
        const titleGroup = frame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "title_container");
        if (titleGroup) {
            const availableWidth = cardWidth - (frame.paddingLeft + frame.paddingRight);
            // Title 그룹 크기 조정
            titleGroup.layoutSizingHorizontal = "FIXED";
            titleGroup.layoutSizingVertical = "HUG";
            titleGroup.resize(availableWidth, titleGroup.height);
            // Description 텍스트 크기 조정
            const descriptionNode = titleGroup.findOne((node) => node.type === "TEXT" &&
                node.getPluginData("type") === "title_description");
            if (descriptionNode) {
                descriptionNode.layoutSizingHorizontal = "FIXED";
                descriptionNode.resize(availableWidth - (titleGroup.paddingLeft + titleGroup.paddingRight), 36);
                // 폰트 크기 업데이트 (size 속성이 변경된 경우)
                if (property === "size") {
                    // 폰트 로드
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    const fontSize = (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getFontSizeByValue)(value);
                    descriptionNode.fontSize = fontSize;
                }
            }
        }
        // 사이즈 값에 따른 스타일 변경
        if (property === "size") {
            // 폰트 크기 업데이트
            const fontSize = (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getFontSizeByValue)(value);
            // 모든 텍스트 노드에 대해 폰트 로드
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            // 그룹 ID 가져오기
            const parentFrameId = frame.getPluginData("parent_frame_id");
            if (parentFrameId) {
                const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_2__.findGroup)(parentFrameId);
                if (group) {
                    // 해당 그룹의 모든 주석 ID 가져오기
                    const annotationIds = group.annotations.map((a) => a.id);
                    // 페이지에서 해당 그룹에 속한 모든 배지 찾기
                    const badges = figma.currentPage.findAll((node) => node.getPluginData("type") === "annotation_badge" &&
                        annotationIds.includes(node.getPluginData("annotationId")));
                    // 각 배지 업데이트
                    for (const badge of badges) {
                        if (badge.type === "FRAME") {
                            // 배지 크기 업데이트
                            const badgeSize = (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getBadgeSizeByValue)(value);
                            badge.resize(badgeSize, badgeSize);
                            // 배지 내부 텍스트 크기 업데이트
                            const textNode = badge.findOne((node) => node.type === "TEXT");
                            if (textNode) {
                                textNode.fontSize = (0,_sizeUtils__WEBPACK_IMPORTED_MODULE_1__.getBadgeTextSizeByValue)(value);
                            }
                        }
                    }
                }
            }
            // 모든 자식 요소의 크기도 업데이트
            for (const child of frame.children) {
                if (child.type === "FRAME" &&
                    child.getPluginData("type") === "annotation") {
                    // 너비 고정, 높이 자동 조정
                    child.layoutSizingHorizontal = "FIXED";
                    child.layoutSizingVertical = "HUG";
                    child.resize(cardWidth - (frame.paddingLeft + frame.paddingRight), child.height);
                    // 인덱스 컨테이너와 내용 그룹 찾기
                    const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_index_container");
                    const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_content");
                    if (indexContainer && contentGroup) {
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = child.width - (child.paddingLeft + child.paddingRight);
                        // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (20:80)
                        const indexWidth = Math.round(frameAvailableWidth * 0.2);
                        const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당
                        // 인덱스 컨테이너 설정
                        indexContainer.layoutSizingHorizontal = "FIXED";
                        indexContainer.layoutSizingVertical = "FILL"; // 중요: 항상 FILL로 설정
                        indexContainer.resize(indexWidth, indexContainer.height);
                        // 내용 그룹 크기 조정
                        contentGroup.layoutMode = "VERTICAL";
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.layoutGrow = 1;
                        contentGroup.resize(contentWidth, contentGroup.height);
                        // 내부 요소들 재설정
                        const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_index");
                        if (indexNode) {
                            indexNode.fontSize = fontSize;
                        }
                        // 설명 텍스트 업데이트
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            // 기본 텍스트 크기 업데이트
                            descNode.layoutSizingHorizontal = "FILL";
                            descNode.textAutoResize = "HEIGHT";
                            descNode.fontSize = fontSize;
                        }
                        // 수정 후 레이아웃 재계산을 위한 트릭 적용
                        const originalWidth = child.width;
                        child.resize(originalWidth + 1, child.height);
                        child.resize(originalWidth, child.height);
                    }
                }
            }
        }
        // cardWidth 변경 시에도 모든 주석 프레임의 레이아웃 속성 재설정
        if (property === "cardWidth") {
            // 모든 자식 요소의 크기도 업데이트
            for (const child of frame.children) {
                if (child.type === "FRAME" &&
                    child.getPluginData("type") === "annotation") {
                    // 너비 고정, 높이 자동 조정
                    child.layoutSizingHorizontal = "FIXED";
                    child.layoutSizingVertical = "HUG";
                    child.resize(cardWidth - (frame.paddingLeft + frame.paddingRight), child.height);
                    // 인덱스 컨테이너와 내용 그룹 찾기
                    const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_index_container");
                    const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_content");
                    if (indexContainer && contentGroup) {
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = child.width - (child.paddingLeft + child.paddingRight);
                        // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (20:80)
                        const indexWidth = Math.round(frameAvailableWidth * 0.2);
                        const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당
                        // 인덱스 컨테이너 설정
                        indexContainer.layoutSizingHorizontal = "FIXED";
                        indexContainer.layoutSizingVertical = "FILL"; // 중요: 항상 FILL로 설정
                        indexContainer.resize(indexWidth, indexContainer.height);
                        // 내용 그룹 크기 조정
                        contentGroup.layoutMode = "VERTICAL";
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.layoutGrow = 1;
                        contentGroup.resize(contentWidth, contentGroup.height);
                        // 텍스트 노드 설정
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            descNode.layoutSizingHorizontal = "FILL";
                            descNode.textAutoResize = "HEIGHT";
                        }
                        // 수정 후 레이아웃 재계산을 위한 트릭 적용
                        const originalWidth = child.width;
                        child.resize(originalWidth + 1, child.height);
                        child.resize(originalWidth, child.height);
                    }
                }
            }
        }
    });
}


/***/ }),

/***/ "./src/utils/messageUtils.ts":
/*!***********************************!*\
  !*** ./src/utils/messageUtils.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendResponse: () => (/* binding */ sendResponse)
/* harmony export */ });
/**
 * UI에게 응답을 전송하는 유틸리티 함수
 */
function sendResponse(type, result, data = {}, errorMessage) {
    const message = Object.assign({ result }, data);
    if (!result && errorMessage) {
        message.errorMessage = errorMessage;
    }
    figma.ui.postMessage({ type, message });
}


/***/ }),

/***/ "./src/utils/nodeUtils.ts":
/*!********************************!*\
  !*** ./src/utils/nodeUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findGroupFrame: () => (/* binding */ findGroupFrame),
/* harmony export */   getTopLevelFrame: () => (/* binding */ getTopLevelFrame)
/* harmony export */ });
/**
 * 노드의 최상위 Frame을 찾는 유틸리티 함수
 */
function getTopLevelFrame(node) {
    let current = node;
    while (current && current.parent && current.parent.type !== "PAGE") {
        current = current.parent;
    }
    return (current === null || current === void 0 ? void 0 : current.type) === "FRAME" ? current : null;
}
/**
 * 그룹 프레임 찾기 통합 함수
 */
function findGroupFrame(groupId, groupFrameId) {
    // 1. groupFrameId로 직접 찾기
    if (groupFrameId) {
        const frame = figma.getNodeById(groupFrameId);
        if (frame && frame.type === "FRAME")
            return frame;
    }
    // 2. 최상위 프레임 찾기
    const topFrame = figma.getNodeById(groupId);
    if (!topFrame)
        return null;
    // 3. topFrame의 자식에서 찾기
    const groupFrameInChildren = topFrame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "group");
    if (groupFrameInChildren)
        return groupFrameInChildren;
    // 4. 부모의 자식에서 찾기
    if (topFrame.parent) {
        const groupFrameInParent = topFrame.parent.findOne((node) => node.type === "FRAME" &&
            node.getPluginData("type") === "group" &&
            node.getPluginData("parent_frame_id") === groupId);
        if (groupFrameInParent)
            return groupFrameInParent;
    }
    return null;
}


/***/ }),

/***/ "./src/utils/sizeUtils.ts":
/*!********************************!*\
  !*** ./src/utils/sizeUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBadgeSizeByValue: () => (/* binding */ getBadgeSizeByValue),
/* harmony export */   getBadgeTextSizeByValue: () => (/* binding */ getBadgeTextSizeByValue),
/* harmony export */   getCardWidth: () => (/* binding */ getCardWidth),
/* harmony export */   getCardWidthByValue: () => (/* binding */ getCardWidthByValue),
/* harmony export */   getFontSizeByValue: () => (/* binding */ getFontSizeByValue)
/* harmony export */ });
/* harmony import */ var _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interfaces/enums */ "./src/interfaces/enums.ts");
/* harmony import */ var _interfaces_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/const */ "./src/interfaces/const.ts");


/**
 * 카드 너비 값에 따른 실제 너비를 반환합니다.
 */
function getCardWidthByValue(widthValue) {
    if (widthValue >= 0 &&
        widthValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedCardWidth[widthValue];
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedCardWidth[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth.SMALL]; // 기본값
}
/**
 * 카드 너비를 계산합니다. (입력값 또는 기본값 사용)
 */
function getCardWidth(cardWidthValue) {
    return cardWidthValue !== undefined
        ? getCardWidthByValue(cardWidthValue)
        : getCardWidthByValue(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth.SMALL);
}
/**
 * 폰트 크기 값에 따른 실제 폰트 크기를 반환합니다.
 */
function getFontSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].desription;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].desription; // 기본값
}
/**
 * 배지 크기 값에 따른 실제 배지 크기를 반환합니다.
 */
function getBadgeSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].badgeSize;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].badgeSize; // 기본값
}
/**
 * 배지 텍스트 크기 값에 따른 실제 텍스트 크기를 반환합니다.
 */
function getBadgeTextSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].badgeText;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].badgeText; // 기본값
}


/***/ }),

/***/ "./src/utils/textUtils.ts":
/*!********************************!*\
  !*** ./src/utils/textUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyRichTextFormatting: () => (/* binding */ applyRichTextFormatting),
/* harmony export */   extractFormattingRanges: () => (/* binding */ extractFormattingRanges),
/* harmony export */   extractTextFromDescription: () => (/* binding */ extractTextFromDescription)
/* harmony export */ });
/* harmony import */ var _colorUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorUtils */ "./src/utils/colorUtils.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * 설명 객체로부터 일반 텍스트를 추출합니다.
 */
function extractTextFromDescription(description) {
    if (!description || !description.content)
        return "New Annotation";
    let text = "";
    function extractText(node) {
        if (node.text) {
            text += node.text + " ";
        }
        if (node.content && Array.isArray(node.content)) {
            node.content.forEach(extractText);
        }
    }
    // 각 상위 레벨 content 항목을 처리하고 줄바꿈 추가
    if (Array.isArray(description.content)) {
        description.content.forEach((contentNode, index) => {
            const startPos = text.length;
            // 노드 내용 추출
            if (contentNode.type === "bulletList" ||
                contentNode.type === "paragraph") {
                extractText(contentNode);
            }
            else {
                // 다른 타입의 노드도 처리
                extractText(contentNode);
            }
            // 각 컨텐츠 항목 뒤에 줄바꿈 추가(마지막 항목 제외)
            if (index < description.content.length - 1) {
                text += "\n";
            }
        });
    }
    return text.trim() || "New Annotation";
}
/**
 * 리치 텍스트 형식 정보를 추출합니다.
 */
function extractFormattingRanges(descriptionData) {
    const ranges = [];
    function processNode(node, parentMarks = [], isListItem = false) {
        // 텍스트 노드 처리 - 노드에 직접 있는 마크만 적용
        if (node.text) {
            // 현재 노드의 마크만 사용 (부모 마크 무시)
            const currentMarks = node.marks || [];
            // 마크 분석
            const isBold = currentMarks.some((mark) => mark.type === "bold");
            const isUnderline = currentMarks.some((mark) => mark.type === "underline");
            const colorMark = currentMarks.find((mark) => mark.type === "textStyle" && mark.attrs && mark.attrs.color);
            // 텍스트 및 서식 정보 저장
            ranges.push({
                text: node.text,
                isBold,
                isUnderline,
                fontStyle: isBold ? "Bold" : "Regular",
                color: colorMark ? colorMark.attrs.color : undefined,
            });
            return; // 텍스트 노드는 자식이 없으므로 여기서 종료
        }
        // bulletList 처리
        if (node.type === "bulletList" &&
            node.content &&
            Array.isArray(node.content)) {
            // bulletList의 각 listItem 처리
            node.content.forEach((listItemNode, index) => {
                // '• ' 추가하여 불릿 표시
                ranges.push({
                    text: "• ",
                    isBold: false,
                    isUnderline: false,
                    color: undefined, // 기본 색상 사용
                });
                // listItem 내용 처리
                if (listItemNode.content && Array.isArray(listItemNode.content)) {
                    listItemNode.content.forEach((contentNode) => {
                        processNode(contentNode, [], true);
                    });
                }
                // 마지막 listItem이 아니면 줄바꿈 추가
                if (index < node.content.length - 1) {
                    ranges.push({
                        text: "",
                        addNewLine: true,
                    });
                }
            });
            return;
        }
        // 일반 자식 노드 처리
        if (node.content && Array.isArray(node.content)) {
            node.content.forEach((child) => {
                // 항상 빈 부모 마크 배열 전달 (스타일 상속 안함)
                processNode(child, []);
            });
        }
    }
    // 각 상위 레벨 컨텐츠 처리 및 줄바꿈 추가
    if (descriptionData.content && Array.isArray(descriptionData.content)) {
        descriptionData.content.forEach((contentNode, index) => {
            // 각 컨텐츠 노드 처리
            processNode(contentNode, []);
            // 마지막 항목이 아니면 줄바꿈 추가
            if (index < descriptionData.content.length - 1) {
                ranges.push({
                    text: "",
                    addNewLine: true,
                });
            }
        });
    }
    return ranges;
}
/**
 * 텍스트 노드에 리치 텍스트 서식을 적용합니다.
 */
function applyRichTextFormatting(textNode, descriptionData) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!descriptionData || !descriptionData.content)
            return;
        // 필요한 모든 폰트 미리 로드
        yield Promise.all([
            figma.loadFontAsync({ family: "Inter", style: "Regular" }),
            figma.loadFontAsync({ family: "Inter", style: "Bold" }),
        ]);
        // 텍스트 노드 초기화
        textNode.characters = "";
        // 모든 서식 정보를 먼저 추출
        const ranges = extractFormattingRanges(descriptionData);
        let currentIndex = 0;
        // 각 범위별로 텍스트와 서식 적용
        for (const range of ranges) {
            // 텍스트 추가
            if (range.text && range.text.length > 0) {
                const length = range.text.length;
                textNode.insertCharacters(currentIndex, range.text);
                // 기본 스타일 설정 (Regular 폰트, 검은색, 밑줄 없음)
                textNode.setRangeFontName(currentIndex, currentIndex + length, {
                    family: "Inter",
                    style: "Regular",
                });
                textNode.setRangeFills(currentIndex, currentIndex + length, [
                    { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
                ]);
                textNode.setRangeTextDecoration(currentIndex, currentIndex + length, "NONE");
                // 볼드체 적용
                if (range.isBold) {
                    textNode.setRangeFontName(currentIndex, currentIndex + length, {
                        family: "Inter",
                        style: "Bold",
                    });
                }
                // 밑줄 적용
                if (range.isUnderline) {
                    textNode.setRangeTextDecoration(currentIndex, currentIndex + length, "UNDERLINE");
                }
                // 색상 적용
                if (range.color) {
                    const rgbColor = (0,_colorUtils__WEBPACK_IMPORTED_MODULE_0__.hexToRgb)(range.color);
                    if (rgbColor) {
                        textNode.setRangeFills(currentIndex, currentIndex + length, [
                            {
                                type: "SOLID",
                                color: {
                                    r: rgbColor.r / 255,
                                    g: rgbColor.g / 255,
                                    b: rgbColor.b / 255,
                                },
                            },
                        ]);
                    }
                }
                currentIndex += length;
            }
            // 줄바꿈 추가
            if (range.addNewLine) {
                textNode.insertCharacters(currentIndex, "\n");
                currentIndex += 1;
            }
        }
        // 텍스트가 비어있으면 기본값 설정
        if (textNode.characters.length === 0) {
            textNode.characters = "New Annotation";
        }
    });
}


/***/ }),

/***/ "./src/utils/updateUtils.ts":
/*!**********************************!*\
  !*** ./src/utils/updateUtils.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAnnotationIndices: () => (/* binding */ updateAnnotationIndices),
/* harmony export */   updateBadgeIndices: () => (/* binding */ updateBadgeIndices)
/* harmony export */ });
/* harmony import */ var _services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/annotationGroupService */ "./src/services/annotationGroupService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * 모든 주석 요소의 인덱스 번호를 업데이트합니다.
 */
function updateAnnotationIndices(groupFrame) {
    return __awaiter(this, void 0, void 0, function* () {
        // annotation 타입의 프레임만 필터링
        const annotationFrames = groupFrame.children.filter((node) => node.type === "FRAME" && node.getPluginData("type") === "annotation");
        // 필터링된 주석 프레임들의 인덱스 번호 업데이트
        for (let index = 0; index < annotationFrames.length; index++) {
            const child = annotationFrames[index];
            // 인덱스 컨테이너 찾기
            const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_index_container");
            if (indexContainer) {
                // 인덱스 번호 업데이트
                const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                    node.getPluginData("type") === "annotation_index");
                if (indexNode) {
                    // 폰트 로드 추가
                    yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                    indexNode.characters = `${index + 1}`;
                }
            }
            else {
                // 기존 레이아웃 구조 지원 (이전 버전과의 호환성)
                const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "annotation_content");
                if (contentGroup) {
                    // 인덱스 번호 업데이트
                    const indexNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                        node.getPluginData("type") === "annotation_index");
                    if (indexNode) {
                        // 폰트 로드 추가
                        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
                        indexNode.characters = `${index + 1}`;
                    }
                }
            }
            // 주석 프레임 이름 업데이트
            child.name = `Annotation ${index + 1}`;
        }
    });
}
/**
 * 배지 인덱스를 업데이트합니다.
 */
function updateBadgeIndices(groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = (0,_services_annotationGroupService__WEBPACK_IMPORTED_MODULE_0__.findGroup)(groupId);
        if (!group)
            return;
        console.log("배지 인덱스 업데이트 시작:", group.annotations.length, "개의 주석");
        // 그룹과 관련된 페이지 찾기
        let targetPage = null;
        if (group.relatedPage && group.relatedPage.id) {
            // 관련 페이지가 있으면 해당 페이지 찾기
            const pageNode = figma.root.findOne((node) => node.type === "PAGE" && node.id === group.relatedPage.id);
            if (pageNode) {
                targetPage = pageNode;
            }
        }
        // 관련 페이지가 없거나 찾지 못한 경우 현재 페이지 사용
        if (!targetPage) {
            targetPage = figma.currentPage;
        }
        // 해당 페이지에서 배지 찾기
        targetPage
            .findAll((node) => node.getPluginData("type") === "annotation_badge")
            .forEach((badge) => {
            const annotationId = badge.getPluginData("annotationId");
            // 해당 그룹에 속한 배지만 업데이트
            const annotations = group.annotations;
            const annotationIndex = annotations.findIndex((a) => a.id === annotationId);
            if (annotationIndex !== -1) {
                // 배지의 텍스트 업데이트 (1부터 시작하는 인덱스 사용)
                if (badge.type === "FRAME") {
                    const textNode = badge.findOne((node) => node.type === "TEXT");
                    if (textNode) {
                        const newIndex = annotationIndex + 1;
                        console.log(`배지 업데이트: ${annotationId} => ${newIndex}`);
                        textNode.characters = newIndex.toString();
                    }
                    badge.setPluginData("badge_index", (annotationIndex + 1).toString());
                }
            }
        });
    });
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
/* harmony import */ var _handlers_annotationHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handlers/annotationHandlers */ "./src/handlers/annotationHandlers.ts");
/* harmony import */ var _handlers_groupHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers/groupHandlers */ "./src/handlers/groupHandlers.ts");
/* harmony import */ var _handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handlers/dataHandlers */ "./src/handlers/dataHandlers.ts");
/* harmony import */ var _handlers_navigationHandlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handlers/navigationHandlers */ "./src/handlers/navigationHandlers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 600, height: 600 });
// 주석/그룹 핸들러

// 그룹 핸들러

// 데이터 핸들러

// 네비게이션 핸들러

// 메시지 핸들러 설정
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = msg;
    try {
        switch (type) {
            case "CREATE_ANNOTATION_GROUP":
                yield (0,_handlers_groupHandlers__WEBPACK_IMPORTED_MODULE_1__.handleCreateAnnotationGroup)(msg);
                break;
            case "CREATE_ANNOTATION":
                yield (0,_handlers_annotationHandlers__WEBPACK_IMPORTED_MODULE_0__.handleCreateAnnotation)(msg);
                break;
            case "UPDATE_ANNOTATION":
                yield (0,_handlers_annotationHandlers__WEBPACK_IMPORTED_MODULE_0__.handleUpdateAnnotation)(msg);
                break;
            case "UPDATE_ANNOTATION_GROUP":
                yield (0,_handlers_groupHandlers__WEBPACK_IMPORTED_MODULE_1__.handleUpdateAnnotationGroup)(msg);
                break;
            case "DELETE_ANNOTATION":
                yield (0,_handlers_annotationHandlers__WEBPACK_IMPORTED_MODULE_0__.handleDeleteAnnotation)(msg);
                break;
            case "DELETE_ANNOTATION_GROUP":
                yield (0,_handlers_groupHandlers__WEBPACK_IMPORTED_MODULE_1__.handleDeleteAnnotationGroup)(msg);
                break;
            case "SAVE_DATA":
                yield (0,_handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__.handleSaveData)(msg);
                break;
            case "LOAD_DATA":
                yield (0,_handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__.handleLoadData)(msg);
                break;
            case "CLEAR_ANNOTATION_DATA":
                yield (0,_handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__.handleClearAnnotationData)(msg);
                break;
            case "GET_FILE_NAME":
                (0,_handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__.handleGetFileName)(msg);
                break;
            case "GET_PAGE_NAME":
                (0,_handlers_dataHandlers__WEBPACK_IMPORTED_MODULE_2__.handleGetPageName)(msg);
                break;
            case "MOVE_TO_SELECTION":
                yield (0,_handlers_navigationHandlers__WEBPACK_IMPORTED_MODULE_3__.handleMoveToSelection)(msg);
                break;
            case "MOVE_TO_ANNOTATION":
                yield (0,_handlers_navigationHandlers__WEBPACK_IMPORTED_MODULE_3__.handleMoveToAnnotation)(msg);
                break;
            case "CHECK_CURRENT_SELECTION":
                yield (0,_handlers_navigationHandlers__WEBPACK_IMPORTED_MODULE_3__.handleCheckCurrentSelection)(msg);
                break;
            case "UPDATE_ANNOTATION_ORDER":
                yield (0,_handlers_groupHandlers__WEBPACK_IMPORTED_MODULE_1__.handleUpdateAnnotationOrder)(msg);
                break;
            case "GET_FRAME_IMAGE":
                yield (0,_handlers_navigationHandlers__WEBPACK_IMPORTED_MODULE_3__.handleGetFrameImage)(msg);
                break;
            case "SYNC_ALL_ANNOTATIONS":
                yield (0,_handlers_annotationHandlers__WEBPACK_IMPORTED_MODULE_0__.handleSyncAllAnnotations)(msg);
                break;
            default:
                console.log("Unhandled message type:", type);
        }
    }
    catch (error) {
        console.error(`Error handling message type ${type}:`, error);
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDRFQUFnQjtBQUNqRDtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7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QkFBc0Isb0ZBQTJCO0FBQ2pEO0FBQ0E7QUFDQSxzQkFBc0Isb0ZBQXNCO0FBQzVDO0FBQ0E7QUFDQSxzQkFBc0Isb0ZBQTJCO0FBQ2pEO0FBQ0E7QUFDQSxzQkFBc0Isc0VBQWM7QUFDcEM7QUFDQTtBQUNBLHNCQUFzQixzRUFBYztBQUNwQztBQUNBO0FBQ0Esc0JBQXNCLGlGQUF5QjtBQUMvQztBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFpQjtBQUNqQztBQUNBO0FBQ0EsZ0JBQWdCLHlFQUFpQjtBQUNqQztBQUNBO0FBQ0Esc0JBQXNCLG1GQUFxQjtBQUMzQztBQUNBO0FBQ0Esc0JBQXNCLG9GQUFzQjtBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLHlGQUEyQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLG9GQUEyQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLGlGQUFtQjtBQUN6QztBQUNBO0FBQ0Esc0JBQXNCLHNGQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsS0FBSztBQUMxRDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2NhbnZhcy9hbm5vdGF0aW9uRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9oYW5kbGVycy9hbm5vdGF0aW9uSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9oYW5kbGVycy9kYXRhSGFuZGxlcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9oYW5kbGVycy9ncm91cEhhbmRsZXJzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaGFuZGxlcnMvbmF2aWdhdGlvbkhhbmRsZXJzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaW50ZXJmYWNlcy9jb25zdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9zZXJ2aWNlcy9hbm5vdGF0aW9uRnJhbWVTZXJ2aWNlLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL2NvbG9yVXRpbHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy91dGlscy9mcmFtZVV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvbWVzc2FnZVV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvbm9kZVV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvc2l6ZVV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvdGV4dFV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvdXBkYXRlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGdldENhcmRXaWR0aCwgZ2V0Rm9udFNpemVCeVZhbHVlLCBnZXRCYWRnZVNpemVCeVZhbHVlLCB9IGZyb20gXCIuLi91dGlscy9zaXplVXRpbHNcIjtcbmltcG9ydCB7IGdldENvbG9yQnlWYWx1ZSB9IGZyb20gXCIuLi91dGlscy9jb2xvclV0aWxzXCI7XG5pbXBvcnQgeyBmaW5kR3JvdXAgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZVwiO1xuaW1wb3J0IHsgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcsIGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uLCB9IGZyb20gXCIuLi91dGlscy90ZXh0VXRpbHNcIjtcbmltcG9ydCB7IGdldFRvcExldmVsRnJhbWUgfSBmcm9tIFwiLi4vdXRpbHMvbm9kZVV0aWxzXCI7XG4vKipcbiAqIOyjvOyEnSDtlITroIjsnoQg7IOd7ISxIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkZyYW1lKGFubm90YXRpb25JZCwgaW5kZXgsIGNhcmRXaWR0aFZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIC8vIOyjvOyEnSDsu6jthYzsnbTrhIgg7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubmFtZSA9IGBBbm5vdGF0aW9uICR7aW5kZXh9YDtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgLy8g7Luo7YWM7J2064SIIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VXZWlnaHQgPSAxOyAvLyDshKAg65GQ6ruYOiAxcHhcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZVRvcFdlaWdodCA9IDA7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VBbGlnbiA9IFwiSU5TSURFXCI7IC8vIO2FjOuRkOumrCDsnITsuZggKElOU0lERSB8IE9VVFNJREUgfCBDRU5URVIpXG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIC8vIOuEiOu5hOunjCDqs6DsoJXtlZjqs6Ag64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgYW5ub3RhdGlvbkZyYW1lLmhlaWdodCk7IC8vIOyijOyasCDtjKjrlKkg6rOg66CkXG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uRnJhbWU7XG4gICAgfSk7XG59XG4vKipcbiAqIOuCtOyaqSDqt7jro7kg7IOd7ISxIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudEdyb3VwKGFubm90YXRpb25JZCwgY29udGVudFdpZHRoKSB7XG4gICAgLy8g7J24642x7Iqk7JmAIOyEpOuqheydhCDri7TsnYQg6re466O5IOyDneyEsVxuICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGVudEdyb3VwLm5hbWUgPSBcIkFubm90YXRpb24gQ29udGVudFwiO1xuICAgIGNvbnRlbnRHcm91cC5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICBjb250ZW50R3JvdXAuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgIC8vIOq3uOujuSDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgY29udGVudEdyb3VwLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgY29udGVudEdyb3VwLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiOyAvLyDrhpLsnbTripQg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgY29udGVudEdyb3VwLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjsgLy8g64SI67mE64qUIOqzoOyglVxuICAgIGNvbnRlbnRHcm91cC52ZXJ0aWNhbFBhZGRpbmcgPSAxMDtcbiAgICBjb250ZW50R3JvdXAuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMDtcbiAgICBjb250ZW50R3JvdXAuZmlsbHMgPSBbXTsgLy8g67Cw6rK97IOJIOygnOqxsCAo7Yis66qFIOuwsOqyvSDsnKDsp4ApXG4gICAgLy8g64SI67mEIOyEpOyglSAtIOyghOuLrOuwm+ydgCDrhIjruYTrpbwg6re464yA66GcIOyCrOyaqVxuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICBjb250ZW50R3JvdXAucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgcmV0dXJuIGNvbnRlbnRHcm91cDtcbn1cbi8qKlxuICog7J24642x7IqkIOy7qO2FjOydtOuEiCDsg53shLEg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbmRleENvbnRhaW5lcihhbm5vdGF0aW9uSWQsIGluZGV4V2lkdGgpIHtcbiAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyDneyEsVxuICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBpbmRleENvbnRhaW5lci5uYW1lID0gXCJBbm5vdGF0aW9uIEluZGV4XCI7XG4gICAgaW5kZXhDb250YWluZXIuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICBpbmRleENvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgIGluZGV4Q29udGFpbmVyLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgaW5kZXhDb250YWluZXIucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICBpbmRleENvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgIGluZGV4Q29udGFpbmVyLmZpbGxzID0gW1xuICAgICAgICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMjQ1IC8gMjU1LCBnOiAyNDUgLyAyNTUsIGI6IDI0NSAvIDI1NSB9IH0sXG4gICAgXTsgLy8g67Cw6rK97IOJIOyEpOyglVxuICAgIGluZGV4Q29udGFpbmVyLnZlcnRpY2FsUGFkZGluZyA9IDEwO1xuICAgIGluZGV4Q29udGFpbmVyLmhvcml6b250YWxQYWRkaW5nID0gMTA7XG4gICAgaW5kZXhDb250YWluZXIuc3Ryb2tlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICByOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgZzogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIGI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgXTtcbiAgICBpbmRleENvbnRhaW5lci5zdHJva2VXZWlnaHQgPSAwO1xuICAgIGluZGV4Q29udGFpbmVyLnN0cm9rZVJpZ2h0V2VpZ2h0ID0gMTtcbiAgICAvLyDrhIjruYQg7ISk7KCVIC0g7KCE64us67Cb7J2AIOuEiOu5hOulvCDqt7jrjIDroZwg7IKs7JqpXG4gICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICByZXR1cm4gaW5kZXhDb250YWluZXI7XG59XG4vKipcbiAqIOyduOuNseyKpCDrhbjrk5wg7IOd7ISxIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5kZXhOb2RlKGFubm90YXRpb25JZCwgaW5kZXgsIHNpemVWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIO2PsO2KuCDroZzrk5xcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleH1gO1xuICAgICAgICBpbmRleE5vZGUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICBpbmRleE5vZGUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIGluZGV4Tm9kZS5mb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZShzaXplVmFsdWUpOyAvLyDquLDrs7jqsJIg65iQ64qUIOyngOygleuQnCDqsJIg7IKs7JqpXG4gICAgICAgIGluZGV4Tm9kZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xuICAgICAgICAvLyDthY3siqTtirgg7KCV66CsIOyEpOyglVxuICAgICAgICBpbmRleE5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7IC8vIOqwgOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIGluZGV4Tm9kZS50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHJldHVybiBpbmRleE5vZGU7XG4gICAgfSk7XG59XG4vKipcbiAqIOyEpOuqhSDthY3siqTtirgg64W465OcIOyDneyEsSDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uTm9kZShhbm5vdGF0aW9uSWQsIHRleHQgPSBcIk5ldyBBbm5vdGF0aW9uXCIsIHNpemVWYWx1ZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g6riw67O4IO2PsO2KuOunjCDrqLzsoIAg66Gc65OcIChhcHBseVJpY2hUZXh0Rm9ybWF0dGluZ+yXkOyEnCDstpTqsIAg7Y+w7Yq4IOuhnOuTnClcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICAgICAgdGV4dE5vZGUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0ZXh0Tm9kZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgdGV4dE5vZGUuZm9udFNpemUgPSBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKTtcbiAgICAgICAgdGV4dE5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g64aS7J2066eMIOyekOuPmeycvOuhnCDsobDsoJXrkJjrj4TroZ0g7ISk7KCVXG4gICAgICAgIHRleHROb2RlLnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgLy8g66as7LmYIO2FjeyKpO2KuCDshKTrqoUg642w7J207YSw6rCAIOyeiOycvOuptCDshJzsi50g7KCB7JqpXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbkRhdGEgJiZcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50ICYmXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB5aWVsZCBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyh0ZXh0Tm9kZSwgZGVzY3JpcHRpb25EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dE5vZGU7XG4gICAgfSk7XG59XG4vKipcbiAqIFRpdGxlIOq3uOujuSDsg53shLEg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUaXRsZUdyb3VwKGdyb3VwSWQsIGZyYW1lV2lkdGgsIGRlc2NyaXB0aW9uVGV4dCA9IFwiRGVzY3JpcHRpb25cIikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIO2DgOydtO2LgCDsu6jthYzsnbTrhIgg7IOd7ISxXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgdGl0bGVDb250YWluZXIubmFtZSA9IFwiVGl0bGVcIjtcbiAgICAgICAgdGl0bGVDb250YWluZXIuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJncm91cElkXCIsIGdyb3VwSWQpO1xuICAgICAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOqwgOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgICAgICBdOyAvLyDrsLDqsr3sg4kg7ISk7KCVXG4gICAgICAgIC8vYm9yZGVy7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnN0cm9rZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnN0cm9rZVdlaWdodCA9IDE7IC8vIOyEoCDrkZDqu5g6IDFweFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VBbGlnbiA9IFwiSU5TSURFXCI7IC8vIO2FjOuRkOumrCDsnITsuZggKElOU0lERSB8IE9VVFNJREUgfCBDRU5URVIpXG4gICAgICAgIC8vIOuEiOu5hCDshKTsoJVcbiAgICAgICAgdGl0bGVDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgdGl0bGVDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnJlc2l6ZShmcmFtZVdpZHRoLCB0aXRsZUNvbnRhaW5lci5oZWlnaHQpO1xuICAgICAgICAvLyBEZXNjcmlwdGlvbiDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuY2hhcmFjdGVycyA9IGRlc2NyaXB0aW9uVGV4dDtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwidGl0bGVfZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5mb250U2l6ZSA9IDE0O1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOygleugrCDshKTsoJVcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICBkZXNjcmlwdGlvbk5vZGUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICAvLyDthY3siqTtirgg64SI67mEIOyEpOyglVxuICAgICAgICBkZXNjcmlwdGlvbk5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnJlc2l6ZShmcmFtZVdpZHRoIC0gKHRpdGxlQ29udGFpbmVyLnBhZGRpbmdMZWZ0ICsgdGl0bGVDb250YWluZXIucGFkZGluZ1JpZ2h0KSwgMzYpO1xuICAgICAgICAvLyDsu6jthYzsnbTrhIjsl5Ag7YWN7Iqk7Yq4IOuFuOuTnCDstpTqsIBcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ob2RlKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xuICAgIH0pO1xufVxuLyoqXG4gKiDquLDsobQg67Cw7KeA7J2YIO2BrOq4sOulvCDtmZXsnbjtlZjripQg7ZWo7IiYXG4gKi9cbmZ1bmN0aW9uIGdldEV4aXN0aW5nQmFkZ2VTaXplKG5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnRGcmFtZSA9IGdldFRvcExldmVsRnJhbWUobm9kZSk7XG4gICAgaWYgKCFwYXJlbnRGcmFtZSlcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAvLyDqsJnsnYAg7ZSE66CI7J6EIOuCtOydmCDri6Trpbgg67Cw7KeAIOywvuq4sFxuICAgIGNvbnN0IGV4aXN0aW5nQmFkZ2VzID0gcGFyZW50RnJhbWUuZmluZEFsbCgobikgPT4gbi50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgbi5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgbiAhPT0gbm9kZSk7XG4gICAgaWYgKGV4aXN0aW5nQmFkZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8g7LKrIOuyiOynuCDrsLDsp4DsnZgg7YGs6riwIOuwmO2ZmFxuICAgICAgICByZXR1cm4gZXhpc3RpbmdCYWRnZXNbMF0ud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG4vKipcbiAqIOuwsOyngOulvCDsg53shLHtlZjripQg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uobm9kZSwgaW5kZXgsIGFubm90YXRpb25JZCwgY29sb3JWYWx1ZSwgc2l6ZVZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIC8vIOuwsOyngCDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGJhZGdlID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgYmFkZ2UubmFtZSA9IGBCYWRnZSAke2luZGV4fWA7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9iYWRnZVwiKTtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwiYmFkZ2VfaW5kZXhcIiwgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIOuwsOyngCDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIGJhZGdlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgYmFkZ2UucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgYmFkZ2UuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgYmFkZ2UuY29ybmVyUmFkaXVzID0gOTk5OTsgLy8g7JuQ7ZiV7Jy866GcIOunjOuTpOq4sFxuICAgICAgICAvLyDrsLDsp4Ag7YGs6riwIOyEpOyglSAtIOq4sOyhtCDrsLDsp4Ag7YGs6riwIO2ZleyduFxuICAgICAgICBjb25zdCBleGlzdGluZ0JhZGdlU2l6ZSA9IGdldEV4aXN0aW5nQmFkZ2VTaXplKG5vZGUpO1xuICAgICAgICBjb25zdCBiYWRnZVNpemUgPSBleGlzdGluZ0JhZGdlU2l6ZSB8fCBnZXRCYWRnZVNpemVCeVZhbHVlKHNpemVWYWx1ZSk7XG4gICAgICAgIGJhZGdlLnJlc2l6ZShiYWRnZVNpemUsIGJhZGdlU2l6ZSk7XG4gICAgICAgIC8vIOuwsOyngCDsg4nsg4Eg7ISk7KCVXG4gICAgICAgIGNvbnN0IGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSk7IC8vIOq4sOuzuCDrmJDripQg7KeA7KCV65CcIOyDieyDgVxuICAgICAgICBiYWRnZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGJhZGdlQ29sb3IgfV07XG4gICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7YWN7Iqk7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleFRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGluZGV4VGV4dC5jaGFyYWN0ZXJzID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IO2BrOq4sCDshKTsoJUgLSDrsLDsp4Ag7YGs6riw7JeQIOu5hOuhgO2VmOyXrCDshKTsoJVcbiAgICAgICAgY29uc3QgdGV4dFNpemUgPSBNYXRoLnJvdW5kKGJhZGdlU2l6ZSAqIDAuNik7IC8vIOuwsOyngCDtgazquLDsnZggNjAl66GcIOyEpOyglVxuICAgICAgICBpbmRleFRleHQuZm9udFNpemUgPSB0ZXh0U2l6ZTtcbiAgICAgICAgaW5kZXhUZXh0LmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07IC8vIO2dsOyDiSDthY3siqTtirhcbiAgICAgICAgLy8g67Cw7KeA7JeQIO2FjeyKpO2KuCDstpTqsIBcbiAgICAgICAgYmFkZ2UuYXBwZW5kQ2hpbGQoaW5kZXhUZXh0KTtcbiAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLAgKO2OmOydtOyngCDrsJTroZwg7JWE656YIO2UhOugiOyehClcbiAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKG5vZGUpO1xuICAgICAgICBpZiAodG9wRnJhbWUpIHtcbiAgICAgICAgICAgIC8vIOuFuOuTnOydmCDsoIjrjIAg7KKM7ZGcKO2OmOydtOyngCDquLDspIApIOqzhOyCsFxuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVYID0gZ2V0QWJzb2x1dGVQb3NpdGlvbihub2RlKS54O1xuICAgICAgICAgICAgY29uc3QgYWJzb2x1dGVZID0gZ2V0QWJzb2x1dGVQb3NpdGlvbihub2RlKS55O1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOydmCDsoIjrjIAg7KKM7ZGcKO2OmOydtOyngCDquLDspIApIOqzhOyCsFxuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWVBYnNvbHV0ZVggPSBnZXRBYnNvbHV0ZVBvc2l0aW9uKHRvcEZyYW1lKS54O1xuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWVBYnNvbHV0ZVkgPSBnZXRBYnNvbHV0ZVBvc2l0aW9uKHRvcEZyYW1lKS55O1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOydhCDquLDspIDsnLzroZwg7ZWcIOuFuOuTnOydmCDsg4HrjIAg7KKM7ZGcXG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVRvVG9wRnJhbWVYID0gYWJzb2x1dGVYIC0gdG9wRnJhbWVBYnNvbHV0ZVg7XG4gICAgICAgICAgICBjb25zdCByZWxhdGl2ZVRvVG9wRnJhbWVZID0gYWJzb2x1dGVZIC0gdG9wRnJhbWVBYnNvbHV0ZVk7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7JyE7LmYIOyEpOyglVxuICAgICAgICAgICAgYmFkZ2UueCA9IHJlbGF0aXZlVG9Ub3BGcmFtZVggLSBiYWRnZS53aWR0aCAvIDI7XG4gICAgICAgICAgICBiYWRnZS55ID0gcmVsYXRpdmVUb1RvcEZyYW1lWSAtIGJhZGdlLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6E7JeQIOuwsOyngCDstpTqsIBcbiAgICAgICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrAg6riw7KG0IOuhnOyngSDsgqzsmqlcbiAgICAgICAgICAgIGJhZGdlLnggPSBub2RlLng7XG4gICAgICAgICAgICBiYWRnZS55ID0gbm9kZS55IC0gYmFkZ2UuaGVpZ2h0O1xuICAgICAgICAgICAgLy8g7ZiE7J6sIO2OmOydtOyngOyXkCDrsLDsp4Ag7LaU6rCAXG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZGdlO1xuICAgIH0pO1xufVxuLyoqXG4gKiDrhbjrk5zsnZgg7KCI64yAIOychOy5mCjtjpjsnbTsp4Ag6riw7KSAKeulvCDqs4TsgrDtlZjripQg7ZWo7IiYXG4gKi9cbmZ1bmN0aW9uIGdldEFic29sdXRlUG9zaXRpb24obm9kZSkge1xuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG4gICAgLy8g7J6Q6riwIOyekOyLoOydmCB4LCB5IOqwkiDtj6ztlahcbiAgICBpZiAoXCJ4XCIgaW4gbm9kZSkge1xuICAgICAgICB4ICs9IG5vZGUueDtcbiAgICB9XG4gICAgaWYgKFwieVwiIGluIG5vZGUpIHtcbiAgICAgICAgeSArPSBub2RlLnk7XG4gICAgfVxuICAgIC8vIOu2gOuqqOydmCDsooztkZzrpbwg7J6s6reA7KCB7Jy866GcIOuNlO2VqFxuICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcbiAgICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC50eXBlICE9PSBcIlBBR0VcIikge1xuICAgICAgICBpZiAoXCJ4XCIgaW4gcGFyZW50KSB7XG4gICAgICAgICAgICB4ICs9IHBhcmVudC54O1xuICAgICAgICB9XG4gICAgICAgIGlmIChcInlcIiBpbiBwYXJlbnQpIHtcbiAgICAgICAgICAgIHkgKz0gcGFyZW50Lnk7XG4gICAgICAgIH1cbiAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHsgeCwgeSB9O1xufVxuLyoqXG4gKiDrsLDsp4Ag7IKt7KCcIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5ub3RhdGlvbkJhZGdlKGFubm90YXRpb25JZCwgZ3JvdXBJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB0YXJnZXRQYWdlID0gZmlnbWEuY3VycmVudFBhZ2U7XG4gICAgICAgIC8vIOq3uOujuSBJROqwgCDsoJzqs7XrkJwg6rK97JqwIO2VtOuLuSDqt7jro7nsnZgg7Y6Y7J207KeAIOywvuq4sFxuICAgICAgICBpZiAoZ3JvdXBJZCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXAgJiYgZ3JvdXAucmVsYXRlZFBhZ2UgJiYgZ3JvdXAucmVsYXRlZFBhZ2UuaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlBBR0VcIiAmJiBub2RlLmlkID09PSBncm91cC5yZWxhdGVkUGFnZS5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhZ2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFBhZ2UgPSBwYWdlTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g7ZW064u5IO2OmOydtOyngOyXkOyEnCDrsLDsp4Ag7LC+6riwXG4gICAgICAgIHRhcmdldFBhZ2VcbiAgICAgICAgICAgIC5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uSWQpXG4gICAgICAgICAgICAuZm9yRWFjaCgoYmFkZ2UpID0+IGJhZGdlLnJlbW92ZSgpKTtcbiAgICB9KTtcbn1cbi8qKlxuICog7KO87ISdIOq1rOyEsSDsmpTshowg7IOd7ISxIO2Gte2VqSDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKGFubm90YXRpb25JZCwgaW5kZXgsIGNvbG9yVmFsdWUsIHNpemVWYWx1ZSwgY2FyZFdpZHRoVmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkZyYW1lKGFubm90YXRpb25JZCwgaW5kZXgsIGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g7KCV7ZmV7ZWcIOu5hOycqCDqs4TsgrAgLSDsoITssrQg64SI67mE7JeQ7IScIO2MqOuUqSDqs6DroKRcbiAgICAgICAgY29uc3QgdG90YWxDb250ZW50V2lkdGggPSBjYXJkV2lkdGg7IC8vIO2UhOugiOyehOydmCDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZCh0b3RhbENvbnRlbnRXaWR0aCAqIDAuMik7IC8vIOygle2Zle2eiCAyMCVcbiAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gdG90YWxDb250ZW50V2lkdGggLSBpbmRleFdpZHRoOyAvLyDrgpjrqLjsp4AgODAlXG4gICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7IOd7ISxIC0g7KCV7ZmV7ZWcIOuEiOu5hCDsoITri6xcbiAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjcmVhdGVJbmRleENvbnRhaW5lcihhbm5vdGF0aW9uSWQsIGluZGV4V2lkdGgpO1xuICAgICAgICAvLyDsu6jthZDsuKAg6re466O5IOyDneyEsSAtIOygle2Zle2VnCDrhIjruYQg7KCE64usXG4gICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNyZWF0ZUNvbnRlbnRHcm91cChhbm5vdGF0aW9uSWQsIGNvbnRlbnRXaWR0aCk7XG4gICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleE5vZGUgPSB5aWVsZCBjcmVhdGVJbmRleE5vZGUoYW5ub3RhdGlvbklkLCBpbmRleCwgc2l6ZVZhbHVlKTtcbiAgICAgICAgLy8g7ISk66qFIO2FjeyKpO2KuCDrhbjrk5wg7IOd7ISxXG4gICAgICAgIGNvbnN0IHRleHROb2RlID0geWllbGQgY3JlYXRlRGVzY3JpcHRpb25Ob2RlKGFubm90YXRpb25JZCwgKGRlc2NyaXB0aW9uID09PSBudWxsIHx8IGRlc2NyaXB0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZXNjcmlwdGlvbi5jb250ZW50KVxuICAgICAgICAgICAgPyBleHRyYWN0VGV4dEZyb21EZXNjcmlwdGlvbihkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIDogXCJOZXcgQW5ub3RhdGlvblwiLCBzaXplVmFsdWUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gMS4g66i87KCAIOuqqOuToCDsnpDsi50g64W465Oc66W8IOu2gOuqqOyXkCDstpTqsIBcbiAgICAgICAgaW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kZXhOb2RlKTtcbiAgICAgICAgY29udGVudEdyb3VwLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgLy8gMi4g67aA66qoIO2UhOugiOyehOyXkCDsu6jthYzsnbTrhIjrk6Qg7LaU6rCAXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5hcHBlbmRDaGlsZChpbmRleENvbnRhaW5lcik7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5hcHBlbmRDaGlsZChjb250ZW50R3JvdXApO1xuICAgICAgICAvLyAzLiDrtoDrqqgg7ZSE66CI7J6E7J2YIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgLy8gNC4g7J6Q7IudIOy7qO2FjOydtOuEiOuTpOydmCDsho3shLEg7ISk7KCVICjrtoDrqqgg7ZSE66CI7J6E7JeQIOy2lOqwgOuQnCDtm4Tsl5Ag7ISk7KCVKVxuICAgICAgICAvLyBjb250ZW50R3JvdXAg7ISk7KCVXG4gICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBjb250ZW50R3JvdXAucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGNvbnRlbnRHcm91cC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRHcm93ID0gMTtcbiAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAvLyBpbmRleENvbnRhaW5lciDshKTsoJVcbiAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkZJTExcIjsgLy8g67aA66qoIOuGkuydtOyXkCDrp57stqRcbiAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjsgLy8g64SI67mEIOqzoOyglVxuICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgLy8gNS4g7YWN7Iqk7Yq4IOuFuOuTnCDshKTsoJUgKGNvbnRlbnRHcm91cOyXkCDstpTqsIDrkJwg7ZuE7JeQIOyEpOyglSlcbiAgICAgICAgdGV4dE5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklMTFwiO1xuICAgICAgICB0ZXh0Tm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgIC8vIOy7rOufrCDsoIHsmqkgKOuwsOqyveyDiSDrsI8g7Iqk7YOA7J2866eBKVxuICAgICAgICBpZiAoY29sb3JWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKTtcbiAgICAgICAgICAgIC8vIOyXrOq4sOyXkCDsg4nsg4Eg7KCB7JqpIOuhnOyngSDstpTqsIBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZnJhbWU6IGFubm90YXRpb25GcmFtZSxcbiAgICAgICAgICAgIGdyb3VwOiBjb250ZW50R3JvdXAsXG4gICAgICAgICAgICBpbmRleE5vZGUsXG4gICAgICAgICAgICB0ZXh0Tm9kZSxcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZmluZEdyb3VwLCBmaW5kQW5ub3RhdGlvbiwgYWRkQW5ub3RhdGlvbiwgcmVtb3ZlQW5ub3RhdGlvbiwgdXBkYXRlQW5ub3RhdGlvbiwgZ2V0QW5ub3RhdGlvbkdyb3VwcywgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZVwiO1xuaW1wb3J0IHsgc2VuZFJlc3BvbnNlIH0gZnJvbSBcIi4uL3V0aWxzL21lc3NhZ2VVdGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMgfSBmcm9tIFwiLi4vY2FudmFzL2Fubm90YXRpb25FbGVtZW50c1wiO1xuaW1wb3J0IHsgZmluZEdyb3VwRnJhbWUgfSBmcm9tIFwiLi4vdXRpbHMvbm9kZVV0aWxzXCI7XG5pbXBvcnQgeyBmaW5kT3JDcmVhdGVHcm91cEZyYW1lIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25GcmFtZVNlcnZpY2VcIjtcbmltcG9ydCB7IGNyZWF0ZUFubm90YXRpb25CYWRnZSwgcmVtb3ZlQW5ub3RhdGlvbkJhZGdlLCB9IGZyb20gXCIuLi9jYW52YXMvYW5ub3RhdGlvbkVsZW1lbnRzXCI7XG5pbXBvcnQgeyB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcywgdXBkYXRlQmFkZ2VJbmRpY2VzLCB9IGZyb20gXCIuLi91dGlscy91cGRhdGVVdGlsc1wiO1xuaW1wb3J0IHsgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFV0aWxzXCI7XG4vKipcbiAqIENSRUFURV9BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDsg4gg7KO87ISdIOqwneyytCDsg53shLFcbiAgICAgICAgY29uc3QgbmV3QW5ub3RhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb2NcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIOq3uOujueyXkCDso7zshJ0g7LaU6rCAXG4gICAgICAgIGFkZEFubm90YXRpb24obXNnLmdyb3VwSWQsIG5ld0Fubm90YXRpb24pO1xuICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0geWllbGQgZmluZE9yQ3JlYXRlR3JvdXBGcmFtZShncm91cCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7J2EIOywvuqxsOuCmCDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKG5ld0Fubm90YXRpb24uaWQsIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgZ3JvdXAuY29sb3IsIGdyb3VwLnNpemUsIGdyb3VwLmNhcmRXaWR0aCwgbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgZ3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAvLyDtmITsnqwg7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlQW5ub3RhdGlvbkJhZGdlKHNlbGVjdGlvbiwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBuZXdBbm5vdGF0aW9uLmlkLCBncm91cC5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShcIkNSRUFURV9BTk5PVEFUSU9OXCIsIHRydWUsIHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbm5vdGF0aW9uR3JvdXBzKCksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBERUxFVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g6re466O5IOuCtOyXkOyEnCDso7zshJ0g7KCc6rGwXG4gICAgICAgIHJlbW92ZUFubm90YXRpb24obXNnLmdyb3VwSWQsIG1zZy5hbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgLy8gRmlnbWEg7LqU67KE7Iqk7JeQ7ISc64+EIOyCreygnFxuICAgICAgICBsZXQgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IG1zZy5hbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDrgqjslYTsnojripQg7KO87ISdIO2UhOugiOyehOuTpOydmCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g67Cw7KeA64+EIO2VqOq7mCDsgq3soJxcbiAgICAgICAgeWllbGQgcmVtb3ZlQW5ub3RhdGlvbkJhZGdlKG1zZy5hbm5vdGF0aW9uLmlkLCBtc2cuZ3JvdXBJZCk7XG4gICAgICAgIC8vIOuCqOyVhOyeiOuKlCBhbm5vdGF0aW9u65Ok7J2YIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4XG4gICAgICAgIHlpZWxkIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBVUERBVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IGZpbmRBbm5vdGF0aW9uKG1zZy5ncm91cElkLCBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKCFncm91cCB8fCAhYW5ub3RhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g66mU66qo66asIOyDge2DnCDsl4XrjbDsnbTtirhcbiAgICAgICAgdXBkYXRlQW5ub3RhdGlvbihtc2cuZ3JvdXBJZCwgbXNnLmFubm90YXRpb25JZCwgbXNnLmtleSwgbXNnLnZhbHVlKTtcbiAgICAgICAgLy8g7Iuk7KCcIEZpZ21hIOyalOyGjOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIO2VtOuLuSBhbm5vdGF0aW9uIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IG1zZy5hbm5vdGF0aW9uSWQpO1xuICAgICAgICBpZiAoIWFubm90YXRpb25GcmFtZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8gZGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDssL7slYQg7JeF642w7J207Yq4XG4gICAgICAgIGlmIChtc2cua2V5ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICAvLyBjb250ZW50IOq3uOujuSDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgaWYgKCFjb250ZW50R3JvdXApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLnSDsoIHsmqlcbiAgICAgICAgICAgICAgICB5aWVsZCBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyhkZXNjTm9kZSwgbXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg7JeF642w7J207Yq466W8IOychO2VnCDsp4Dsl7Ag7LKY66asXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDsho3shLEg7J6s7ISk7KCV7ZWY7JesIOqwleygnCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIO2UhOugiOyehCDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOugiOydtOyVhOybgyDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJGSUxMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiDsu6jthZDsuKAg6re466O5IOugiOydtOyVhOybgyDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRHcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQuIO2FjeyKpO2KuCDrhbjrk5wg66CI7J207JWE7JuDIOyerOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklMTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4g7ZWE7JqU7ZWcIOqyveyasCDroIjsnbTslYTsm4Mg6rCV7KCcIOyXheuNsOydtO2KuOulvCDsnITtlZwg7Yq466atIOyggeyaqVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7JW96rCE7J2YIO2BrOq4sCDrs4Dqsr0g7ZuEIOybkOuemCDtgazquLDroZwg67O17JuQ7ZWY7JesIOugiOydtOyVhOybgyDsnqzqs4TsgrAg7Jyg64+EXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gYW5ub3RhdGlvbkZyYW1lLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShvcmlnaW5hbFdpZHRoICsgMSwgYW5ub3RhdGlvbkZyYW1lLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVzaXplKG9yaWdpbmFsV2lkdGgsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8qKlxuICogU1lOQ19BTExfQU5OT1RBVElPTlMg66mU7Iuc7KeAIO2VuOuTpOufrFxuICog66qo65OgIOyjvOyEnSDqt7jro7nsnZgg7YWN7Iqk7Yq4IOuCtOyaqeydhCBGaWdtYSDsupTrsoTsiqTsl5DshJwg64+Z6riw7ZmU7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU3luY0FsbEFubm90YXRpb25zKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFsbEdyb3VwcyA9IGdldEFubm90YXRpb25Hcm91cHMoKTtcbiAgICAgICAgaWYgKCFhbGxHcm91cHMgfHwgYWxsR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbm5vdGF0aW9uR3JvdXBzKCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDrqqjrk6Ag6re466O57J2EIOyInO2ajO2VmOupsCDrgrTsmqkg64+Z6riw7ZmUXG4gICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYWxsR3JvdXBzKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAoIWdyb3VwRnJhbWUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyDqt7jro7kg64K0IOuqqOuToCDso7zshJ0g7ZSE66CI7J6EIOyInO2ajFxuICAgICAgICAgICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIGdyb3VwLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IGFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIGlmICghYW5ub3RhdGlvbkZyYW1lKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gYW5ub3RhdGlvbkZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgLy8gY29udGVudCDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gYW5ub3RhdGlvbkZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmICghY29udGVudEdyb3VwKVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiDthY3siqTtirgg64W465OcIOywvuq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGlmIChkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnOydmCDrqqjrk6Ag7Y+w7Yq4IOuhnOuTnCAo7J20IOu2gOu2hOydtCDspJHsmpTtlanri4jri6QhKVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlLmhhc01pc3NpbmdGb250KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFwi7YWN7Iqk7Yq4IOuFuOuTnOyXkCDriITrnb3rkJwg7Y+w7Yq46rCAIOyeiOyKteuLiOuLpC4g6riw67O4IO2PsO2KuOulvCDroZzrk5ztlanri4jri6QuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnOydmCDrqqjrk6Ag7Y+w7Yq4IOuhnOuTnFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbnROYW1lcyA9IGRlc2NOb2RlLmdldFJhbmdlQWxsRm9udE5hbWVzKDAsIGRlc2NOb2RlLmNoYXJhY3RlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChmb250TmFtZXMubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5zsnZgg7YWN7Iqk7Yq47JmAIOyEnOyLneydhCDrtoTshJ3tlZjsl6wgVGlwdGFwIO2YuO2ZmCDtmJXsi53snLzroZwg67OA7ZmYXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRhdGEgPSBjb252ZXJ0RmlnbWFUZXh0VG9UaXB0YXBGb3JtYXQoZGVzY05vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g66mU66qo66asIOyDge2DnCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb24oZ3JvdXAuaWQsIGFubm90YXRpb24uaWQsIFwiZGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb25EYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDsl4XrjbDsnbTtirjrpbwg7JyE7ZWcIOyngOyXsCDsspjrpqxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXAgJiYgZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDsho3shLEg67OA6rK9IOyghOyXkCDri6Tsi5wg7ZWc67KIIO2PsO2KuCDroZzrk5wg7ZmV7J24XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250TmFtZXMgPSBkZXNjTm9kZS5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBkZXNjTm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChmb250TmFtZXMubWFwKGZpZ21hLmxvYWRGb250QXN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDsho3shLEg7J6s7ISk7KCV7ZWY7JesIOqwleygnCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDEuIO2UhOugiOyehCDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAyLiDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOugiOydtOyVhOybgyDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJGSUxMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAzLiDsu6jthZDsuKAg6re466O5IOugiOydtOyVhOybgyDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRHcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDQuIO2FjeyKpO2KuCDrhbjrk5wg66CI7J207JWE7JuDIOyerOyEpOyglSAo7Y+w7Yq4IOuhnOuTnCDtm4QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSUxMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA1LiDroIjsnbTslYTsm4Mg6rCV7KCcIOyXheuNsOydtO2KuOulvCDsnITtlZwg7Yq466atIOyggeyaqVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IGFubm90YXRpb25GcmFtZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUob3JpZ2luYWxXaWR0aCArIDEsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShvcmlnaW5hbFdpZHRoLCBhbm5vdGF0aW9uRnJhbWUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLroIjsnbTslYTsm4Mg7JeF642w7J207Yq4IOykkSDsmKTrpZgg67Cc7IOdOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSwgMTAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLtj7Dtirgg66Gc65OcIOykkSDsmKTrpZgg67Cc7IOdOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGdldEFubm90YXRpb25Hcm91cHMoKSxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEZpZ21hIO2FjeyKpO2KuCDrhbjrk5zsnZgg64K07Jqp7J2EIFRpcHRhcCDtmLjtmZgg7ZiV7Iud7Jy866GcIOuzgO2ZmO2VqeuLiOuLpC5cbiAqL1xuZnVuY3Rpb24gY29udmVydEZpZ21hVGV4dFRvVGlwdGFwRm9ybWF0KGZpZ21hVGV4dE5vZGUpIHtcbiAgICAvLyDquLDrs7gg66y47IScIOq1rOyhsCDsg53shLFcbiAgICBjb25zdCB0aXB0YXBEb2MgPSB7XG4gICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgIH07XG4gICAgLy8g7YWN7Iqk7Yq46rCAIOyXhuycvOuptCDruYgg66y47IScIOuwmO2ZmFxuICAgIGlmICghZmlnbWFUZXh0Tm9kZS5jaGFyYWN0ZXJzIHx8IGZpZ21hVGV4dE5vZGUuY2hhcmFjdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGlwdGFwRG9jLmNvbnRlbnQucHVzaCh7XG4gICAgICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGlwdGFwRG9jO1xuICAgIH1cbiAgICAvLyDthY3siqTtirgg7KCE7LK0IOusuOyekOyXtFxuICAgIGNvbnN0IGZ1bGxUZXh0ID0gZmlnbWFUZXh0Tm9kZS5jaGFyYWN0ZXJzO1xuICAgIC8vIOykhOuwlOq/iCDsnITsuZgg7LC+6riwXG4gICAgY29uc3QgbGluZUJyZWFrcyA9IFtdO1xuICAgIGxldCBuZXh0TGluZUJyZWFrID0gZnVsbFRleHQuaW5kZXhPZihcIlxcblwiKTtcbiAgICB3aGlsZSAobmV4dExpbmVCcmVhayAhPT0gLTEpIHtcbiAgICAgICAgbGluZUJyZWFrcy5wdXNoKG5leHRMaW5lQnJlYWspO1xuICAgICAgICBuZXh0TGluZUJyZWFrID0gZnVsbFRleHQuaW5kZXhPZihcIlxcblwiLCBuZXh0TGluZUJyZWFrICsgMSk7XG4gICAgfVxuICAgIC8vIOykhCDsi5zsnpHqs7wg64GdIOychOy5mCDqs4TsgrBcbiAgICBjb25zdCBsaW5lcyA9IFtdO1xuICAgIGxldCBzdGFydFBvcyA9IDA7XG4gICAgZm9yIChjb25zdCBicmVha1BvcyBvZiBsaW5lQnJlYWtzKSB7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0UG9zLFxuICAgICAgICAgICAgZW5kOiBicmVha1BvcyxcbiAgICAgICAgICAgIHRleHQ6IGZ1bGxUZXh0LnN1YnN0cmluZyhzdGFydFBvcywgYnJlYWtQb3MpLFxuICAgICAgICB9KTtcbiAgICAgICAgc3RhcnRQb3MgPSBicmVha1BvcyArIDE7IC8vICdcXG4nIOuLpOydjOu2gO2EsCDsi5zsnpFcbiAgICB9XG4gICAgLy8g66eI7KeA66eJIOykhCDstpTqsIBcbiAgICBpZiAoc3RhcnRQb3MgPCBmdWxsVGV4dC5sZW5ndGgpIHtcbiAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogc3RhcnRQb3MsXG4gICAgICAgICAgICBlbmQ6IGZ1bGxUZXh0Lmxlbmd0aCxcbiAgICAgICAgICAgIHRleHQ6IGZ1bGxUZXh0LnN1YnN0cmluZyhzdGFydFBvcyksXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDruYgg66y47J6Q7Je07J20652866m0IOu5iCDspIQg7ZWY64KYIOy2lOqwgFxuICAgIGlmIChsaW5lcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbGluZXMucHVzaCh7XG4gICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgIGVuZDogMCxcbiAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyDqsIEg7KSE7J2EIOuLqOudveycvOuhnCDrs4DtmZhcbiAgICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICAgICAgLy8g6rCBIOykhOydgCDtlZjrgpjsnZgg64uo65297J20IOuQqFxuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSB7XG4gICAgICAgICAgICB0eXBlOiBcInBhcmFncmFwaFwiLFxuICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgIH07XG4gICAgICAgIGlmIChsaW5lLnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g7ZiE7J6sIOykhOyXkOyEnCDsiqTtg4Dsnbwg67OA6rK9IOyngOygkCDssL7quLBcbiAgICAgICAgICAgIGxldCBjdXJyZW50UG9zID0gbGluZS5zdGFydDtcbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50UG9zIDwgbGluZS5lbmQpIHtcbiAgICAgICAgICAgICAgICAvLyDtmITsnqwg7JyE7LmY7J2YIOyKpO2DgOydvCDsho3shLEg6rCA7KC47Jik6riwXG4gICAgICAgICAgICAgICAgY29uc3QgZm9udE5hbWUgPSBmaWdtYVRleHROb2RlLmdldFJhbmdlRm9udE5hbWUoY3VycmVudFBvcywgY3VycmVudFBvcyArIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGxzID0gZmlnbWFUZXh0Tm9kZS5nZXRSYW5nZUZpbGxzKGN1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0RGVjb3JhdGlvbiA9IGZpZ21hVGV4dE5vZGUuZ2V0UmFuZ2VUZXh0RGVjb3JhdGlvbihjdXJyZW50UG9zLCBjdXJyZW50UG9zICsgMSk7XG4gICAgICAgICAgICAgICAgLy8g6rCZ7J2AIOyKpO2DgOydvOydhCDqsIDsp4Qg67KU7JyEIOywvuq4sFxuICAgICAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjdXJyZW50UG9zICsgMTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoZW5kUG9zIDwgbGluZS5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dEZvbnROYW1lID0gZmlnbWFUZXh0Tm9kZS5nZXRSYW5nZUZvbnROYW1lKGVuZFBvcywgZW5kUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRGaWxscyA9IGZpZ21hVGV4dE5vZGUuZ2V0UmFuZ2VGaWxscyhlbmRQb3MsIGVuZFBvcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0VGV4dERlY29yYXRpb24gPSBmaWdtYVRleHROb2RlLmdldFJhbmdlVGV4dERlY29yYXRpb24oZW5kUG9zLCBlbmRQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7Iqk7YOA7J287J20IOuzgOqyveuQmOuptCDrspTsnIQg7KKF66OMXG4gICAgICAgICAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShmb250TmFtZSkgIT09IEpTT04uc3RyaW5naWZ5KG5leHRGb250TmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGZpbGxzKSAhPT0gSlNPTi5zdHJpbmdpZnkobmV4dEZpbGxzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb24gIT09IG5leHRUZXh0RGVjb3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZW5kUG9zKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDsobDqsIEg7LaU7LacICjsoIjrjIAg7JyE7LmYIOq4sOykgClcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Q2h1bmsgPSBmdWxsVGV4dC5zdWJzdHJpbmcoY3VycmVudFBvcywgZW5kUG9zKTtcbiAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpcHRhcFRleHROb2RlID0ge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGV4dENodW5rLFxuICAgICAgICAgICAgICAgICAgICBtYXJrczogW10sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyDrs7zrk5wg7Iqk7YOA7J28IO2ZleyduFxuICAgICAgICAgICAgICAgIGlmIChmb250TmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZm9udE5hbWUgIT09IFwic3ltYm9sXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiIGluIGZvbnROYW1lICYmXG4gICAgICAgICAgICAgICAgICAgIGZvbnROYW1lLnN0eWxlID09PSBcIkJvbGRcIikge1xuICAgICAgICAgICAgICAgICAgICB0aXB0YXBUZXh0Tm9kZS5tYXJrcy5wdXNoKHsgdHlwZTogXCJib2xkXCIgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOuwkeykhCDsiqTtg4Dsnbwg7ZmV7J24XG4gICAgICAgICAgICAgICAgaWYgKHRleHREZWNvcmF0aW9uID09PSBcIlVOREVSTElORVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpcHRhcFRleHROb2RlLm1hcmtzLnB1c2goeyB0eXBlOiBcInVuZGVybGluZVwiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDsg4nsg4Eg7Iqk7YOA7J28IO2ZleyduCAo7LKr67KI7Ke4IGZpbGzrp4wg6rOg66CkKVxuICAgICAgICAgICAgICAgIGlmIChmaWxscyAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZmlsbHMgIT09IFwic3ltYm9sXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShmaWxscykgJiZcbiAgICAgICAgICAgICAgICAgICAgZmlsbHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBmaWxsc1swXS50eXBlID09PSBcIlNPTElEXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBmaWxsc1swXS5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgLy8gUkdC66W8IDE27KeE7IiY66GcIOuzgO2ZmFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZXhDb2xvciA9IHJnYlRvSGV4KE1hdGgucm91bmQoY29sb3IuciAqIDI1NSksIE1hdGgucm91bmQoY29sb3IuZyAqIDI1NSksIE1hdGgucm91bmQoY29sb3IuYiAqIDI1NSkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGV4Q29sb3IgIT09IFwiIzAwMDAwMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDqsoDsnYDsg4nsnbQg7JWE64uMIOqyveyasOyXkOunjCDsg4nsg4Eg7KCV67O0IOy2lOqwgFxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwdGFwVGV4dE5vZGUubWFya3MucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0U3R5bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xvcjogaGV4Q29sb3IgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuOqwgCDsnojripQg6rK97Jqw7JeQ66eMIOuLqOudveyXkCDstpTqsIBcbiAgICAgICAgICAgICAgICBpZiAodGV4dENodW5rLnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFncmFwaC5jb250ZW50LnB1c2godGlwdGFwVGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDri6TsnYwg7JyE7LmY66GcIOydtOuPmVxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgPSBlbmRQb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g67mIIOuLqOudveydtOuNlOudvOuPhCDrrLjshJzsl5Ag7LaU6rCAIChUaXB0YXDsl5DshJwg7KSR7JqUKVxuICAgICAgICB0aXB0YXBEb2MuY29udGVudC5wdXNoKHBhcmFncmFwaCk7XG4gICAgfVxuICAgIC8vIOuUlOuyhOq5heyaqSDroZzqt7hcbiAgICBjb25zb2xlLmxvZyhcIuuzgO2ZmOuQnCBUaXB0YXAg66y47IScOlwiLCBKU09OLnN0cmluZ2lmeSh0aXB0YXBEb2MpKTtcbiAgICByZXR1cm4gdGlwdGFwRG9jO1xufVxuLyoqXG4gKiBSR0Ig7IOJ7IOB6rCS7J2EIDE27KeE7IiYIOusuOyekOyXtOuhnCDrs4DtmZjtlanri4jri6QuXG4gKi9cbmZ1bmN0aW9uIHJnYlRvSGV4KHIsIGcsIGIpIHtcbiAgICByZXR1cm4gXCIjXCIgKyAoKDEgPDwgMjQpICsgKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiKS50b1N0cmluZygxNikuc2xpY2UoMSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCIuLi91dGlscy9tZXNzYWdlVXRpbHNcIjtcbmltcG9ydCB7IGluaXRBbm5vdGF0aW9uR3JvdXBzLCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbm5vdGF0aW9uR3JvdXBTZXJ2aWNlXCI7XG4vKipcbiAqIFNBVkVfREFUQSDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVTYXZlRGF0YShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy5kYXRhKSk7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIExPQURfREFUQSDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVMb2FkRGF0YShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmF3ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKG1zZy5rZXkpO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcmF3ID8gSlNPTi5wYXJzZShyYXcpIDogW107XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWQsIFwicGFyc2VkXCIpO1xuICAgICAgICAgICAgaW5pdEFubm90YXRpb25Hcm91cHMocGFyc2VkKTtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwgeyBrZXk6IG1zZy5rZXksIGRhdGE6IHBhcnNlZCB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UsIHt9LCBTdHJpbmcoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDTEVBUl9BTk5PVEFUSU9OX0RBVEEg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2xlYXJBbm5vdGF0aW9uRGF0YShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uR3JvdXBcIiwgXCJbXVwiKTtcbiAgICAgICAgaW5pdEFubm90YXRpb25Hcm91cHMoW10pO1xuICAgICAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHt9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogR0VUX0ZJTEVfTkFNRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHZXRGaWxlTmFtZShtc2cpIHtcbiAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHsgZmlsZU5hbWU6IGZpZ21hLnJvb3QubmFtZSB9KTtcbn1cbi8qKlxuICogR0VUX1BBR0VfTkFNRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHZXRQYWdlTmFtZShtc2cpIHtcbiAgICBjb25zdCBwYWdlID0gZmlnbWEucm9vdC5maW5kT25lKChuKSA9PiBuLmlkID09PSBtc2cucGFnZUlkKTtcbiAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgcGFnZUlkOiBtc2cucGFnZUlkLFxuICAgICAgICBwYWdlTmFtZTogKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS5uYW1lKSB8fCBcIlVua25vd24gUGFnZVwiLFxuICAgIH0pO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBmaW5kR3JvdXAsIGFkZEFubm90YXRpb25Hcm91cCwgcmVtb3ZlQW5ub3RhdGlvbkdyb3VwLCB1cGRhdGVBbm5vdGF0aW9uR3JvdXAsIGdldEFubm90YXRpb25Hcm91cHMsIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCIuLi91dGlscy9tZXNzYWdlVXRpbHNcIjtcbmltcG9ydCB7IGdldFRvcExldmVsRnJhbWUsIGZpbmRHcm91cEZyYW1lIH0gZnJvbSBcIi4uL3V0aWxzL25vZGVVdGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQW5ub3RhdGlvbkdyb3VwRnJhbWUgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkZyYW1lU2VydmljZVwiO1xuaW1wb3J0IHsgZ2V0Q2FyZFdpZHRoIH0gZnJvbSBcIi4uL3V0aWxzL3NpemVVdGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMsIGNyZWF0ZUFubm90YXRpb25CYWRnZSwgcmVtb3ZlQW5ub3RhdGlvbkJhZGdlLCB9IGZyb20gXCIuLi9jYW52YXMvYW5ub3RhdGlvbkVsZW1lbnRzXCI7XG5pbXBvcnQgeyB1cGRhdGVHcm91cEZyYW1lQ29sb3IsIHVwZGF0ZUdyb3VwRnJhbWVTaXplLCB9IGZyb20gXCIuLi91dGlscy9mcmFtZVV0aWxzXCI7XG5pbXBvcnQgeyB1cGRhdGVBbm5vdGF0aW9uT3JkZXIgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZVwiO1xuaW1wb3J0IHsgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMsIHVwZGF0ZUJhZGdlSW5kaWNlcywgfSBmcm9tIFwiLi4vdXRpbHMvdXBkYXRlVXRpbHNcIjtcbi8qKlxuICogQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlLCB7fSwgXCJQbGVhc2Ugc2VsZWN0IGEgbGF5ZXIgb24gdGhlIGNhbnZhcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKHNlbGVjdGlvbik7XG4gICAgICAgIGlmICghdG9wRnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlLCB7fSwgXCJUb3AtbGV2ZWwgZnJhbWUgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdHcm91cElkID0gdG9wRnJhbWUuaWQ7XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwTmFtZSA9IHRvcEZyYW1lLm5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXAgPSBmaW5kR3JvdXAobmV3R3JvdXBJZCk7XG4gICAgICAgIC8vIEFOTk9UQVRJT05fR1JPVVAg7IOd7ISxXG4gICAgICAgIGxldCBhbm5vdGF0aW9uR3JvdXBGcmFtZTtcbiAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgICAgICAgIC8vIOq4sOyhtCDqt7jro7kg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cEZyYW1lID0gdG9wRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0dyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGV4aXN0aW5nR3JvdXBGcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOyYiOyDgey5mCDrqrvtlZjqsowg6re466O5IO2UhOugiOyehOydtCDsl4bri6TrqbQg7IOI66GcIOyDneyEsVxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChleGlzdGluZ0dyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uR3JvdXBGcmFtZSh0b3BGcmFtZSwgY2FyZFdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyDiCDso7zshJ0g66mU66qo66asIOqwneyytCDsg53shLFcbiAgICAgICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g6re466O57JeQIOyjvOyEnSDstpTqsIAgKOuplOuqqOumrClcbiAgICAgICAgICAgIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKG5ld0Fubm90YXRpb24uaWQsIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBleGlzdGluZ0dyb3VwLmNvbG9yLCBleGlzdGluZ0dyb3VwLnNpemUsIGV4aXN0aW5nR3JvdXAuY2FyZFdpZHRoLCBuZXdBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25GcmFtZSk7XG4gICAgICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmNvbG9yKTtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QW5ub3RhdGlvbkdyb3VwcygpLFxuICAgICAgICAgICAgICAgIHVwZGF0ZWRHcm91cDogbmV3R3JvdXBJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIPCfhpUg7IOIIOq3uOujuSDsg53shLFcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKChfYSA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYXJkV2lkdGgpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Hcm91cEZyYW1lKHRvcEZyYW1lLCBjYXJkV2lkdGgpO1xuICAgICAgICAvLyDquLDrs7gg7KO87ISdIOyDneyEsVxuICAgICAgICBjb25zdCBkZWZhdWx0QW5ub3RhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoKF9iID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmRlc2NyaXB0aW9uKSB8fCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb2NcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIOq3uOujueyXkCBwbHVnaW5EYXRhIOyEpOyglVxuICAgICAgICB0b3BGcmFtZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImZyYW1lXCIpO1xuICAgICAgICB0b3BGcmFtZS5zZXRQbHVnaW5EYXRhKFwiaGFzX2Fubm90YXRpb25fZ3JvdXBcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKFwiZ3JvdXBfaWRcIiwgZGVmYXVsdEFubm90YXRpb24uaWQpO1xuICAgICAgICBjb25zdCBuZXdHcm91cCA9IE9iamVjdC5hc3NpZ24oeyBpZDogbmV3R3JvdXBJZCwgbmFtZTogbmV3R3JvdXBOYW1lLCByZWxhdGVkUGFnZToge1xuICAgICAgICAgICAgICAgIGlkOiBmaWdtYS5jdXJyZW50UGFnZS5pZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lLFxuICAgICAgICAgICAgfSwgYW5ub3RhdGlvbnM6IFtkZWZhdWx0QW5ub3RhdGlvbl0sIG9ic29sZXRlOiBmYWxzZSwgZ3JvdXBGcmFtZUlkOiBhbm5vdGF0aW9uR3JvdXBGcmFtZS5pZCB9LCBtc2cuY29uZmlnKTtcbiAgICAgICAgYWRkQW5ub3RhdGlvbkdyb3VwKG5ld0dyb3VwKTtcbiAgICAgICAgLy8g7KO87ISdIFVJIOy7tO2PrOuEjO2KuCDsg53shLFcbiAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhkZWZhdWx0QW5ub3RhdGlvbi5pZCwgMSwgKF9jID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmNvbG9yLCAoX2QgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Quc2l6ZSwgKF9lID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmNhcmRXaWR0aCwgZGVmYXVsdEFubm90YXRpb24uZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25GcmFtZSk7XG4gICAgICAgIC8vIOyEoO2DneuQnCDrhbjrk5zsl5Ag67Cw7KeAIOyDneyEsVxuICAgICAgICB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uoc2VsZWN0aW9uLCAxLCBkZWZhdWx0QW5ub3RhdGlvbi5pZCwgKF9mID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2YgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9mLmNvbG9yKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGdldEFubm90YXRpb25Hcm91cHMoKSxcbiAgICAgICAgICAgIHVwZGF0ZWRHcm91cDogbmV3R3JvdXBJZCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIERFTEVURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cFRvRGVsZXRlID0gZmluZEdyb3VwKG1zZy5ncm91cC5pZCk7XG4gICAgICAgIGlmICghZ3JvdXBUb0RlbGV0ZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgaWYgKGdyb3VwVG9EZWxldGUuZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBUb0RlbGV0ZS5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwRnJhbWUgJiYgZ3JvdXBGcmFtZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDso7zshJ3snZgg67Cw7KeAIOyCreygnFxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBncm91cFRvRGVsZXRlLmFubm90YXRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uLmlkLCBtc2cuZ3JvdXAuaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDtg4DsnbTti4Ag7Luo7YWM7J2064SIIOywvuq4sCDrsI8g7IKt7KCcICjrqoXsi5zsoIHsnLzroZwg7LKY66asKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOq3uOujuSDtlITroIjsnoQg7IKt7KCcXG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDrqZTrqqjrpqzsl5DshJwg6re466O5IOygnOqxsFxuICAgICAgICByZW1vdmVBbm5vdGF0aW9uR3JvdXAobXNnLmdyb3VwLmlkKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vKipcbiAqIFVQREFURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOuplOuqqOumrCDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgICAgIHVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cuZ3JvdXBJZCwgbXNnLmtleSwgbXNnLnZhbHVlKTtcbiAgICAgICAgLy8gRmlnbWEg7JqU7IaMIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5pZCk7XG4gICAgICAgIGlmIChmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIGZyYW1lTm9kZS5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOq3uOujuSDtlITroIjsnoTrj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGlmIChncm91cC5ncm91cEZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEobXNnLmtleSwgSlNPTi5zdHJpbmdpZnkobXNnLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgLy8g7IOJ7IOBIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGlmIChtc2cua2V5ID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IHBhcnNlSW50KG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdyb3VwRnJhbWVDb2xvcihncm91cEZyYW1lLCBjb2xvclZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGlmIChtc2cua2V5ID09PSBcInNpemVcIiB8fCBtc2cua2V5ID09PSBcImNhcmRXaWR0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUdyb3VwRnJhbWVTaXplKGdyb3VwRnJhbWUsIG1zZy5rZXksIG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBVUERBVEVfQU5OT1RBVElPTl9PUkRFUiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgeyBncm91cElkLCBzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCB9ID0gbXNnO1xuICAgICAgICAvLyDrqZTrqqjrpqzsg4HsnZgg7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9IHVwZGF0ZUFubm90YXRpb25PcmRlcihncm91cElkLCBzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCk7XG4gICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgICAgICAvLyBGaWdtYSDsupTrsoTsiqQg7IOB7J2YIOyjvOyEnSDsiJzshJwg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKCFncm91cEZyYW1lIHx8IGdyb3VwRnJhbWUudHlwZSAhPT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshowg7KSRIGFubm90YXRpb25GcmFtZeunjCDtlYTthLDrp4FcbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWVzID0gZ3JvdXBGcmFtZS5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgLy8g66mU66qo66as7J2YIOyjvOyEnSDsiJzshJzsl5Ag66ee6rKMIGFubm90YXRpb25GcmFtZeuTpOydhCDsnqzsoJXroKxcbiAgICAgICAgaWYgKGFubm90YXRpb25GcmFtZXMubGVuZ3RoID09PSBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOqwgSDso7zshJ3sl5Ag7ZW064u57ZWY64qUIO2UhOugiOyehCDssL7slYTshJwg7Iic7ISc64yA66GcIOyerOuwsOy5mFxuICAgICAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMuZm9yRWFjaCgoYW5ub3RhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uTm9kZSA9IGFubm90YXRpb25GcmFtZXMuZmluZCgoZnJhbWUpID0+IGZyYW1lLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IGFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjripQg7ZWt7IOBIOunqCDsnITsl5Ag7Jyg7KeA7ZWY6rOgLCDqt7gg64uk7J2M67aA7YSwIOyjvOyEnSDtlITroIjsnoQg67Cw7LmYXG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGV4ICsgMeydgCBUaXRsZSDsu6jthYzsnbTrhIgg64uk7J2MIOychOy5mOu2gO2EsCDsi5zsnpHtlZzri6TripQg7J2Y66+4XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoaW5kZXggKyAxLCBhbm5vdGF0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjqsIAg7J6I64uk66m0IO2VreyDgSDrp6gg7JyE66GcIOydtOuPmVxuICAgICAgICAgICAgaWYgKHRpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5pbnNlcnRDaGlsZCgwLCB0aXRsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsiJzshJzqsIAg67CU64CQIO2bhCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7J24642x7Iqk64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQmFkZ2VJbmRpY2VzKGdyb3VwLmlkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZmluZEdyb3VwIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCIuLi91dGlscy9tZXNzYWdlVXRpbHNcIjtcbmltcG9ydCB7IGdldFRvcExldmVsRnJhbWUgfSBmcm9tIFwiLi4vdXRpbHMvbm9kZVV0aWxzXCI7XG4vKipcbiAqIE1PVkVfVE9fU0VMRUNUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdmVUb1NlbGVjdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtjpjsnbTsp4AgSUTqsIAg7KCc6rO165CcIOqyveyasCDrqLzsoIAg7ZW064u5IO2OmOydtOyngOuhnCDsnbTrj5lcbiAgICAgICAgaWYgKG1zZy5wYWdlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOb2RlID0gZmlnbWEucm9vdC5maW5kT25lKChub2RlKSA9PiBub2RlLmlkID09PSBtc2cucGFnZUlkKTtcbiAgICAgICAgICAgIGlmIChwYWdlTm9kZSAmJiBwYWdlTm9kZS50eXBlID09PSBcIlBBR0VcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gcGFnZU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZ3JvdXBOb2Rl66W8IOywvuydgCDtm4Qg7ZW064u5IOuFuOuTnOydmCDstZzsg4HsnIQg7ZSE66CI7J6E7Jy866GcIOydtOuPmVxuICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmIChncm91cE5vZGUgJiYgZ3JvdXBOb2RlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShncm91cE5vZGUpO1xuICAgICAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFt0b3BGcmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOydhCDssL7sp4Ag66q77ZWcIOqyveyasCDqt7jro7kg64W465Oc66GcIOydtOuPmSAo6riw7KG0IOuPmeyekSlcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2dyb3VwTm9kZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGdyb3VwTm9kZSkge1xuICAgICAgICAgICAgLy8g7ZSE66CI7J6E7J20IOyVhOuLjCDrhbjrk5zsnbgg6rK97Jqw64+EIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKGdyb3VwTm9kZSk7XG4gICAgICAgICAgICBpZiAodG9wRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RvcEZyYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6E7J2EIOywvuyngCDrqrvtlZwg6rK97JqwIOq3uOujuSDrhbjrk5zroZwg7J2064+ZICjquLDsobQg64+Z7J6RKVxuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZ3JvdXBOb2RlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogTU9WRV9UT19BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZU1vdmVUb0Fubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y6Y7J207KeAIElE6rCAIOygnOqzteuQnCDqsr3smrAg66i87KCAIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXG4gICAgICAgIGlmIChtc2cucGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBpZiAocGFnZU5vZGUgJiYgcGFnZU5vZGUudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIO2VtOuLuSDso7zshJ3snZgg67Cw7KeAIOywvuq4sFxuICAgICAgICBjb25zdCBiYWRnZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKGJhZGdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Drpbwg67ew7Y+s7Yq466GcIOqwgOyguOyYpOq4sFxuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGJhZGdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Drpbwg7LC+7KeAIOuqu+2VnCDqsr3smrAg6re466O5IO2UhOugiOyehOycvOuhnCDsnbTrj5kgKOuMgOyytCDsmLXshZgpXG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBOb2RlKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBDSEVDS19DVVJSRU5UX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBleGlzdHMgPSAhIWdyb3VwTm9kZTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgcmVzdWx0OiBleGlzdHMsXG4gICAgICAgICAgICBncm91cElkOiBtc2cuZ3JvdXBJZCxcbiAgICAgICAgICAgIG9ic29sZXRlOiAhZXhpc3RzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogR0VUX0ZSQU1FX0lNQUdFIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUdldEZyYW1lSW1hZ2UobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZnJhbWVJbWFnZXMgPSBbXTtcbiAgICAgICAgY29uc3QgZ3JvdXBzID0gZmluZEdyb3VwKG51bGwpO1xuICAgICAgICBpZiAoIWdyb3VwcyB8fCAhQXJyYXkuaXNBcnJheShncm91cHMpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZyYW1lSW1hZ2VzOiBbXSB9KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGdyb3Vwcykge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZSAmJiBmcmFtZU5vZGUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmcmFtZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiUE5HXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJTQ0FMRVwiLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZyYW1lSW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7ZmlnbWEuYmFzZTY0RW5jb2RlKGltYWdlKX1gLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFtZUltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZyYW1lSW1hZ2VzIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwgeyBmcmFtZUltYWdlczogW10gfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25Db2xvciwgQW5ub3RhdGlvblNpemUgfSBmcm9tIFwiLi9lbnVtc1wiO1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZEZvbnRTaXplcyA9IHtcbiAgICBbQW5ub3RhdGlvblNpemUuU01BTExdOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMjQsXG4gICAgICAgIGJhZGdlVGV4dDogMTQsXG4gICAgICAgIGRlc3JpcHRpb246IDE0LFxuICAgICAgICBnYXA6IDgsXG4gICAgfSxcbiAgICBbQW5ub3RhdGlvblNpemUuTUVESVVNXToge1xuICAgICAgICBiYWRnZVNpemU6IDI4LFxuICAgICAgICBiYWRnZVRleHQ6IDE4LFxuICAgICAgICBkZXNyaXB0aW9uOiAxOCxcbiAgICAgICAgZ2FwOiAxMCxcbiAgICB9LFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5MQVJHRV06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAzMixcbiAgICAgICAgYmFkZ2VUZXh0OiAyMSxcbiAgICAgICAgZGVzcmlwdGlvbjogMjEsXG4gICAgICAgIGdhcDogMTIsXG4gICAgfSxcbn07XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkQ29sb3JzID0ge1xuICAgIFtBbm5vdGF0aW9uQ29sb3IuUkVEXTogXCJiZy1zdWJSZWQtMDFcIixcbiAgICBbQW5ub3RhdGlvbkNvbG9yLkJMVUVdOiBcImJnLXByaW1hcnlcIixcbiAgICBbQW5ub3RhdGlvbkNvbG9yLkJMQUNLXTogXCJiZy1ibGFja1wiLFxufTtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRDYXJkV2lkdGggPSB7XG4gICAgW0Fubm90YXRpb25TaXplLlNNQUxMXTogMzIwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5NRURJVU1dOiA0MDAsXG4gICAgW0Fubm90YXRpb25TaXplLkxBUkdFXTogNDgwLFxufTtcbiIsImV4cG9ydCB2YXIgQW5ub3RhdGlvblNpemU7XG4oZnVuY3Rpb24gKEFubm90YXRpb25TaXplKSB7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiU01BTExcIl0gPSAwKV0gPSBcIlNNQUxMXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTUVESVVNXCJdID0gMSldID0gXCJNRURJVU1cIjtcbiAgICBBbm5vdGF0aW9uU2l6ZVsoQW5ub3RhdGlvblNpemVbXCJMQVJHRVwiXSA9IDIpXSA9IFwiTEFSR0VcIjtcbn0pKEFubm90YXRpb25TaXplIHx8IChBbm5vdGF0aW9uU2l6ZSA9IHt9KSk7XG5leHBvcnQgdmFyIEFubm90YXRpb25Db2xvcjtcbihmdW5jdGlvbiAoQW5ub3RhdGlvbkNvbG9yKSB7XG4gICAgQW5ub3RhdGlvbkNvbG9yWyhBbm5vdGF0aW9uQ29sb3JbXCJSRURcIl0gPSAwKV0gPSBcIlJFRFwiO1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiQkxVRVwiXSA9IDEpXSA9IFwiQkxVRVwiO1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiQkxBQ0tcIl0gPSAyKV0gPSBcIkJMQUNLXCI7XG59KShBbm5vdGF0aW9uQ29sb3IgfHwgKEFubm90YXRpb25Db2xvciA9IHt9KSk7XG5leHBvcnQgdmFyIEFubm5vdGF0aW9uQ2FyZFdpZHRoO1xuKGZ1bmN0aW9uIChBbm5ub3RhdGlvbkNhcmRXaWR0aCkge1xuICAgIEFubm5vdGF0aW9uQ2FyZFdpZHRoWyhBbm5ub3RhdGlvbkNhcmRXaWR0aFtcIlNNQUxMXCJdID0gMCldID0gXCJTTUFMTFwiO1xuICAgIEFubm5vdGF0aW9uQ2FyZFdpZHRoWyhBbm5ub3RhdGlvbkNhcmRXaWR0aFtcIk1FRElVTVwiXSA9IDEpXSA9IFwiTUVESVVNXCI7XG4gICAgQW5ubm90YXRpb25DYXJkV2lkdGhbKEFubm5vdGF0aW9uQ2FyZFdpZHRoW1wiTEFSR0VcIl0gPSAyKV0gPSBcIkxBUkdFXCI7XG59KShBbm5ub3RhdGlvbkNhcmRXaWR0aCB8fCAoQW5ubm90YXRpb25DYXJkV2lkdGggPSB7fSkpO1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDYXJkV2lkdGggfSBmcm9tIFwiLi4vdXRpbHMvc2l6ZVV0aWxzXCI7XG5pbXBvcnQgeyBmaW5kR3JvdXBGcmFtZSB9IGZyb20gXCIuLi91dGlscy9ub2RlVXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZVRpdGxlR3JvdXAgfSBmcm9tIFwiLi4vY2FudmFzL2Fubm90YXRpb25FbGVtZW50c1wiO1xuLyoqXG4gKiDqt7jro7kg7ZSE66CI7J6E7J2EIOywvuqxsOuCmCDsg53shLHtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kT3JDcmVhdGVHcm91cEZyYW1lKGdyb3VwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gMS4g6riw7KG0IOq3uOujuSDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICBsZXQgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAvLyAyLiDssL7sp4Ag66q77ZWcIOqyveyasCDsg4jroZwg7IOd7ISxXG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5pZCk7XG4gICAgICAgICAgICBpZiAoIXRvcEZyYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBncm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCBncm91cC5pZCk7XG4gICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGdyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAvLyDsiqTtg4Dsnbwg67CPIOychOy5mCDshKTsoJUgLSDrtoDrqqgg7ZSE66CI7J6EIOuCtOu2gOydmCDsmrDsuKEg7IOB64uo7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgIC8vIOu2gOuqqCDtlITroIjsnoTsnZgg7Jqw7LihIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWI7Kq97Jy866GcIOychOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDsgLy8g7Jqw7Lih7JeQ7IScIOy5tOuTnCDrhIjruYTrp4ztgbwg7JWI7Kq97Jy866GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnkgPSAyMDsgLy8g7IOB64uo7JeQ7IScIOyVveqwhCDslYTrnpjroZxcbiAgICAgICAgICAgIGdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgMzAwKTtcbiAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOu2gOuqqOqwgCDsl4bsnLzrqbQg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOq3uOujuSDsoJXrs7Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICBncm91cC5ncm91cEZyYW1lSWQgPSBncm91cEZyYW1lLmlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cEZyYW1lO1xuICAgIH0pO1xufVxuLyoqXG4gKiDsg4gg7KO87ISdIOq3uOujuSDtlITroIjsnoTsnYQg7IOd7ISx7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkdyb3VwRnJhbWUodG9wRnJhbWUsIGNhcmRXaWR0aCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25Hcm91cEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUubmFtZSA9IFwiQU5OT1RBVElPTl9HUk9VUFwiO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImdyb3VwXCIpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIsIHRvcEZyYW1lLmlkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSB0b3BGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS55ID0gMjA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgLy8g66CI7J207JWE7JuDIOuqqOuTnCDshKTsoJUgLSDshLjroZwg67Cw7LmYXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIC8vIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMDtcbiAgICAgICAgLy8gYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0JvdHRvbSA9IDEwO1xuICAgICAgICAvLyBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCA9IDEwO1xuICAgICAgICAvLyBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxMDtcbiAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkdyb3VwRnJhbWUpO1xuICAgICAgICAvLyBUaXRsZSDqt7jro7kg7IOd7ISxIOuwjyDstpTqsIBcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLVxuICAgICAgICAgICAgKGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdMZWZ0ICsgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IHlpZWxkIGNyZWF0ZVRpdGxlR3JvdXAodG9wRnJhbWUuaWQsIGF2YWlsYWJsZVdpZHRoLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKTtcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25Hcm91cEZyYW1lO1xuICAgIH0pO1xufVxuIiwiLy8g7KCE7JetIOuplOuqqOumrCDsg4Htg5wg6rSA66asXG5sZXQgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuLyoqXG4gKiDqt7jro7kg7LC+6riwXG4gKiBAcGFyYW0gZ3JvdXBJZCDssL7snYQg6re466O57J2YIElEXG4gKiBAcmV0dXJucyDssL7snYAg6re466O5IOuYkOuKlCB1bmRlZmluZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRHcm91cChncm91cElkKSB7XG4gICAgcmV0dXJuIGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gZ3JvdXBJZCk7XG59XG4vKipcbiAqIOyjvOyEnSDssL7quLBcbiAqIEBwYXJhbSBncm91cElkIOq3uOujuSBJRFxuICogQHBhcmFtIGFubm90YXRpb25JZCDso7zshJ0gSURcbiAqIEByZXR1cm5zIOywvuydgCDso7zshJ0g65iQ64qUIG51bGxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRBbm5vdGF0aW9uKGdyb3VwSWQsIGFubm90YXRpb25JZCkge1xuICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHJldHVybiBncm91cC5hbm5vdGF0aW9ucy5maW5kKChhKSA9PiBhLmlkID09PSBhbm5vdGF0aW9uSWQpO1xufVxuLyoqXG4gKiDso7zshJ0g7LaU6rCAXG4gKiBAcGFyYW0gZ3JvdXBJZCDqt7jro7kgSURcbiAqIEBwYXJhbSBhbm5vdGF0aW9uIOy2lOqwgO2VoCDso7zshJ0g6rCd7LK0XG4gKiBAcmV0dXJucyDshLHqs7Ug7Jes67aAXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRBbm5vdGF0aW9uKGdyb3VwSWQsIGFubm90YXRpb24pIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZ3JvdXAuYW5ub3RhdGlvbnMucHVzaChhbm5vdGF0aW9uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICog7KO87ISdIOyCreygnFxuICogQHBhcmFtIGdyb3VwSWQg6re466O5IElEXG4gKiBAcGFyYW0gYW5ub3RhdGlvbklkIOyCreygnO2VoCDso7zshJ0gSURcbiAqIEByZXR1cm5zIOyEseqztSDsl6zrtoBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFubm90YXRpb24oZ3JvdXBJZCwgYW5ub3RhdGlvbklkKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGg7XG4gICAgZ3JvdXAuYW5ub3RhdGlvbnMgPSBncm91cC5hbm5vdGF0aW9ucy5maWx0ZXIoKGEpID0+IGEuaWQgIT09IGFubm90YXRpb25JZCk7XG4gICAgcmV0dXJuIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCA8IGluaXRpYWxMZW5ndGg7XG59XG4vKipcbiAqIOyjvOyEnSDsl4XrjbDsnbTtirhcbiAqIEBwYXJhbSBncm91cElkIOq3uOujuSBJRFxuICogQHBhcmFtIGFubm90YXRpb25JZCDsl4XrjbDsnbTtirjtlaAg7KO87ISdIElEXG4gKiBAcGFyYW0ga2V5IOyXheuNsOydtO2KuO2VoCDsho3shLEg7YKkXG4gKiBAcGFyYW0gdmFsdWUg7JeF642w7J207Yq47ZWgIOqwklxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uSWQsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBhbm5vdGF0aW9uID0gZmluZEFubm90YXRpb24oZ3JvdXBJZCwgYW5ub3RhdGlvbklkKTtcbiAgICBpZiAoIWFubm90YXRpb24pXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBhbm5vdGF0aW9uW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICog7KO87ISdIOq3uOujuSDstpTqsIBcbiAqIEBwYXJhbSBncm91cCDstpTqsIDtlaAg6re466O5IOqwneyytFxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQW5ub3RhdGlvbkdyb3VwKGdyb3VwKSB7XG4gICAgaWYgKCFncm91cCB8fCAhZ3JvdXAuaWQpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyDsnbTrr7gg7KG07J6s7ZWY64qUIOq3uOujueyduOyngCDtmZXsnbhcbiAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZmluZEdyb3VwKGdyb3VwLmlkKTtcbiAgICBpZiAoZXhpc3RpbmdHcm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGFubm90YXRpb25Hcm91cHMucHVzaChncm91cCk7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIOyjvOyEnSDqt7jro7kg7IKt7KCcXG4gKiBAcGFyYW0gZ3JvdXBJZCDsgq3soJztlaAg6re466O5IElEXG4gKiBAcmV0dXJucyDshLHqs7Ug7Jes67aAXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uR3JvdXAoZ3JvdXBJZCkge1xuICAgIGNvbnN0IGluaXRpYWxMZW5ndGggPSBhbm5vdGF0aW9uR3JvdXBzLmxlbmd0aDtcbiAgICBhbm5vdGF0aW9uR3JvdXBzID0gYW5ub3RhdGlvbkdyb3Vwcy5maWx0ZXIoKGcpID0+IGcuaWQgIT09IGdyb3VwSWQpO1xuICAgIHJldHVybiBhbm5vdGF0aW9uR3JvdXBzLmxlbmd0aCA8IGluaXRpYWxMZW5ndGg7XG59XG4vKipcbiAqIOyjvOyEnSDqt7jro7kg7JeF642w7J207Yq4XG4gKiBAcGFyYW0gZ3JvdXBJZCDsl4XrjbDsnbTtirjtlaAg6re466O5IElEXG4gKiBAcGFyYW0ga2V5IOyXheuNsOydtO2KuO2VoCDsho3shLEg7YKkXG4gKiBAcGFyYW0gdmFsdWUg7JeF642w7J207Yq47ZWgIOqwklxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbkdyb3VwKGdyb3VwSWQsIGtleSwgdmFsdWUpIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgZ3JvdXBba2V5XSA9IHZhbHVlO1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiDso7zshJ0g6re466O5IOy0iOq4sO2ZlFxuICogQHBhcmFtIGdyb3VwcyDstIjquLAg6re466O5IOuwsOyXtFxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEFubm90YXRpb25Hcm91cHMoZ3JvdXBzID0gW10pIHtcbiAgICBhbm5vdGF0aW9uR3JvdXBzID0gZ3JvdXBzO1xufVxuLyoqXG4gKiDrqqjrk6Ag7KO87ISdIOq3uOujuSDqsIDsoLjsmKTquLBcbiAqIEByZXR1cm5zIOyjvOyEnSDqt7jro7kg67Cw7Je0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbm5vdGF0aW9uR3JvdXBzKCkge1xuICAgIHJldHVybiBhbm5vdGF0aW9uR3JvdXBzO1xufVxuLyoqXG4gKiDso7zshJ0g7Iic7IScIOyXheuNsOydtO2KuFxuICogQHBhcmFtIGdyb3VwSWQg6re466O5IElEXG4gKiBAcGFyYW0gc291cmNlSW5kZXgg7JuQ67O4IOyduOuNseyKpFxuICogQHBhcmFtIGRlc3RpbmF0aW9uSW5kZXgg66qp7KCB7KeAIOyduOuNseyKpFxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbk9yZGVyKGdyb3VwSWQsIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4KSB7XG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIC8vIOyduOuNseyKpCDrspTsnIQg6rKA7IKsXG4gICAgaWYgKHNvdXJjZUluZGV4IDwgMSB8fFxuICAgICAgICBzb3VyY2VJbmRleCA+IGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCB8fFxuICAgICAgICBkZXN0aW5hdGlvbkluZGV4IDwgMSB8fFxuICAgICAgICBkZXN0aW5hdGlvbkluZGV4ID4gZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8g66mU66qo66as7IOB7J2YIOyjvOyEnSDsiJzshJwg7JeF642w7J207Yq4XG4gICAgY29uc3QgYW5ub3RhdGlvbnMgPSBbLi4uZ3JvdXAuYW5ub3RhdGlvbnNdO1xuICAgIGNvbnN0IFttb3ZlZEFubm90YXRpb25dID0gYW5ub3RhdGlvbnMuc3BsaWNlKHNvdXJjZUluZGV4IC0gMSwgMSk7XG4gICAgYW5ub3RhdGlvbnMuc3BsaWNlKGRlc3RpbmF0aW9uSW5kZXggLSAxLCAwLCBtb3ZlZEFubm90YXRpb24pO1xuICAgIGdyb3VwLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnVtc1wiO1xuLyoqXG4gKiDsg4nsg4Eg6rCS7JeQIOuUsOudvCBSR0Ig6rCS7J2EIOuwmO2ZmO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKSB7XG4gICAgc3dpdGNoIChjb2xvclZhbHVlKSB7XG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlJFRDpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuOTMsIGc6IDAuMzcsIGI6IDAuMzcgfTsgLy8gUkVEXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLkJMVUU6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjAsIGc6IDAuMSwgYjogMS4wIH07IC8vIEJMVUVcbiAgICAgICAgY2FzZSBBbm5vdGF0aW9uQ29sb3IuQkxBQ0s6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLCBnOiAwLCBiOiAwIH07IC8vIEJMQUNLXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjAsIGc6IDAuMSwgYjogMS4wIH07IC8vIOq4sOuzuOqwkjogQkxVRVxuICAgIH1cbn1cbi8qKlxuICog7Zel7IqkIOyDieyDgSDsvZTrk5zrpbwgUkdC66GcIOuzgO2ZmO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDb2xvckJ5VmFsdWUgfSBmcm9tIFwiLi9jb2xvclV0aWxzXCI7XG5pbXBvcnQgeyBnZXRCYWRnZVNpemVCeVZhbHVlLCBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZSwgZ2V0Rm9udFNpemVCeVZhbHVlLCBnZXRDYXJkV2lkdGgsIH0gZnJvbSBcIi4vc2l6ZVV0aWxzXCI7XG5pbXBvcnQgeyBmaW5kR3JvdXAgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZVwiO1xuLyoqXG4gKiDqt7jro7kg7ZSE66CI7J6EIOyDieyDgeydhCDsl4XrjbDsnbTtirjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZnJhbWUsIGNvbG9yVmFsdWUpIHtcbiAgICBjb25zdCBoZWFkZXJDb2xvciA9IGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKTtcbiAgICAvLyDtlITroIjsnoQg7J6Q7LK0IOyDieyDgSDsl4XrjbDsnbTtirggLSDrsLDqsr3sg4kg7KCc6rGwXG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICAvLyBUaXRsZSDqt7jro7kg7LKY66asXG4gICAgY29uc3QgdGl0bGVHcm91cCA9IGZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgIGlmICh0aXRsZUdyb3VwKSB7XG4gICAgICAgIC8vIO2DgOydtO2LgCDqt7jro7kg67Cw6rK97IOJIOycoOyngFxuICAgICAgICB0aXRsZUdyb3VwLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvLyDrqqjrk6Ag7J6Q7IudIOyjvOyEnSDsmpTshozrk6Qg7LKY66asXG4gICAgZnJhbWUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2YIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgIGNoaWxkLmZpbGxzID0gW107XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOuwsOqyveyDiSDsnKDsp4BcbiAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMjQ1IC8gMjU1LCBnOiAyNDUgLyAyNTUsIGI6IDI0NSAvIDI1NSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsu6jthZDsuKAg6re466O5IOywvuq4sFxuICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAvLyDsu6jthZDsuKAg6re466O5IOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAuZmlsbHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOq3uOujuSBJRCDqsIDsoLjsmKTquLAgKHBhcmVudF9mcmFtZV9pZOyXkCDsoIDsnqXrkJjslrQg7J6I7J2MKVxuICAgIGNvbnN0IHBhcmVudEZyYW1lSWQgPSBmcmFtZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpO1xuICAgIGlmICghcGFyZW50RnJhbWVJZClcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIO2VtOuLuSDqt7jro7nsnZgg66qo65OgIOyjvOyEnSBJRCDqsIDsoLjsmKTquLBcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChwYXJlbnRGcmFtZUlkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IGdyb3VwLmFubm90YXRpb25zLm1hcCgoYSkgPT4gYS5pZCk7XG4gICAgLy8g7Y6Y7J207KeA7JeQ7IScIO2VtOuLuSDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDrsLDsp4Ag7LC+6riwXG4gICAgZmlnbWEuY3VycmVudFBhZ2VcbiAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgIGFubm90YXRpb25JZHMuaW5jbHVkZXMobm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpKSlcbiAgICAgICAgLmZvckVhY2goKGJhZGdlKSA9PiB7XG4gICAgICAgIGlmIChiYWRnZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIC8vIOuwsOyngCDsg4nsg4Hrp4wg7JeF642w7J207Yq4XG4gICAgICAgICAgICBiYWRnZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGhlYWRlckNvbG9yIH1dO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIOq3uOujuSDtlITroIjsnoQg7YGs6riw66W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUdyb3VwRnJhbWVTaXplKGZyYW1lLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIiA/IGdldENhcmRXaWR0aCh2YWx1ZSkgOiBnZXRDYXJkV2lkdGgoKTtcbiAgICAgICAgLy8g7ZSE66CI7J6E7J20IOyGje2VnCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICAgICAgaWYgKHBhcmVudEZyYW1lSWQgJiYgcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQocGFyZW50RnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50RnJhbWUgJiYgcGFyZW50RnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8geCDsooztkZwg7JeF642w7J207Yq4IC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7Lih7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgICAgICBmcmFtZS54ID0gcGFyZW50RnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDrhIjruYTsmYAg64aS7J20IOyEpOyglSAo64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglSlcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICBmcmFtZS5yZXNpemUoY2FyZFdpZHRoLCBmcmFtZS5oZWlnaHQpO1xuICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgIGlmICh0aXRsZUdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICB0aXRsZUdyb3VwLnJlc2l6ZShhdmFpbGFibGVXaWR0aCwgdGl0bGVHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IHRpdGxlR3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnJlc2l6ZShhdmFpbGFibGVXaWR0aCAtICh0aXRsZUdyb3VwLnBhZGRpbmdMZWZ0ICsgdGl0bGVHcm91cC5wYWRkaW5nUmlnaHQpLCAzNik7XG4gICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IO2BrOq4sCDsl4XrjbDsnbTtirggKHNpemUg7IaN7ISx7J20IOuzgOqyveuQnCDqsr3smrApXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcInNpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDsgqzsnbTspogg6rCS7JeQIOuUsOuluCDsiqTtg4Dsnbwg67OA6rK9XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJzaXplXCIpIHtcbiAgICAgICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyDrqqjrk6Ag7YWN7Iqk7Yq4IOuFuOuTnOyXkCDrjIDtlbQg7Y+w7Yq4IOuhnOuTnFxuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgICAgIC8vIOq3uOujuSBJRCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEZyYW1lSWQgPSBmcmFtZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpO1xuICAgICAgICAgICAgaWYgKHBhcmVudEZyYW1lSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChwYXJlbnRGcmFtZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g7ZW064u5IOq3uOujueydmCDrqqjrk6Ag7KO87ISdIElEIOqwgOyguOyYpOq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWRzID0gZ3JvdXAuYW5ub3RhdGlvbnMubWFwKChhKSA9PiBhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7Y6Y7J207KeA7JeQ7IScIO2VtOuLuSDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDrsLDsp4Ag7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhZGdlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDqsIEg67Cw7KeAIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhZGdlIG9mIGJhZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuwsOyngCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFkZ2VTaXplID0gZ2V0QmFkZ2VTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UucmVzaXplKGJhZGdlU2l6ZSwgYmFkZ2VTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDrsLDsp4Ag64K067aAIO2FjeyKpO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBiYWRnZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuZm9udFNpemUgPSBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshozsnZgg7YGs6riw64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJUsIOuGkuydtCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCksIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIgJiYgY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsgqzsmqkg6rCA64ql7ZWcIOuEiOu5hCDqs4TsgrAgKGFubm90YXRpb25GcmFtZSDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVBdmFpbGFibGVXaWR0aCA9IGNoaWxkLndpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDrhIjruYQg67mE7JyoIOqzhOyCsCAoMjA6ODApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZUF2YWlsYWJsZVdpZHRoICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGZyYW1lQXZhaWxhYmxlV2lkdGggLSBpbmRleFdpZHRoOyAvLyDsoJXtmZXtlZwg6rOE7IKw7J2EIOychO2VtCDrgpjrqLjsp4Ag64SI67mEIO2VoOuLuVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiRklMTFwiOyAvLyDspJHsmpQ6IO2VreyDgSBGSUxM66GcIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dEdyb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g64K067aAIOyalOyGjOuTpCDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDshKTrqoUg7YWN7Iqk7Yq4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY05vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOq4sOuzuCDthY3siqTtirgg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJTExcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyImOyglSDtm4Qg66CI7J207JWE7JuDIOyerOqzhOyCsOydhCDsnITtlZwg7Yq466atIOyggeyaqVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IGNoaWxkLndpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKG9yaWdpbmFsV2lkdGggKyAxLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKG9yaWdpbmFsV2lkdGgsIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2FyZFdpZHRoIOuzgOqyvSDsi5zsl5Drj4Qg66qo65OgIOyjvOyEnSDtlITroIjsnoTsnZgg66CI7J207JWE7JuDIOyGjeyEsSDsnqzshKTsoJVcbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiKSB7XG4gICAgICAgICAgICAvLyDrqqjrk6Ag7J6Q7IudIOyalOyGjOydmCDtgazquLDrj4Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGZyYW1lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g64SI67mEIOqzoOyglSwg64aS7J20IOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUoY2FyZFdpZHRoIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KSwgY2hpbGQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiOyZgCDrgrTsmqkg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIO2MqOuUqSDqs6DroKQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUF2YWlsYWJsZVdpZHRoID0gY2hpbGQud2lkdGggLSAoY2hpbGQucGFkZGluZ0xlZnQgKyBjaGlsZC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiOyZgCDrgrTsmqkg6re466O5IOuEiOu5hCDruYTsnKgg6rOE7IKwICgyMDo4MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4V2lkdGggPSBNYXRoLnJvdW5kKGZyYW1lQXZhaWxhYmxlV2lkdGggKiAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gZnJhbWVBdmFpbGFibGVXaWR0aCAtIGluZGV4V2lkdGg7IC8vIOygle2Zle2VnCDqs4TsgrDsnYQg7JyE7ZW0IOuCmOuouOyngCDrhIjruYQg7ZWg64u5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJGSUxMXCI7IC8vIOykkeyalDog7ZWt7IOBIEZJTEzroZwg7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuCtOyaqSDqt7jro7kg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0R3JvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY05vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJTExcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsiJjsoJUg7ZuEIOugiOydtOyVhOybgyDsnqzqs4TsgrDsnYQg7JyE7ZWcIO2KuOumrSDsoIHsmqlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBjaGlsZC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShvcmlnaW5hbFdpZHRoICsgMSwgY2hpbGQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShvcmlnaW5hbFdpZHRoLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIFVJ7JeQ6rKMIOydkeuLteydhCDsoITshqHtlZjripQg7Jyg7Yu466as7YuwIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VuZFJlc3BvbnNlKHR5cGUsIHJlc3VsdCwgZGF0YSA9IHt9LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7IHJlc3VsdCB9LCBkYXRhKTtcbiAgICBpZiAoIXJlc3VsdCAmJiBlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZSB9KTtcbn1cbiIsIi8qKlxuICog64W465Oc7J2YIOy1nOyDgeychCBGcmFtZeydhCDssL7ripQg7Jyg7Yu466as7YuwIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBub2RlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQucGFyZW50ICYmIGN1cnJlbnQucGFyZW50LnR5cGUgIT09IFwiUEFHRVwiKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnQudHlwZSkgPT09IFwiRlJBTUVcIiA/IGN1cnJlbnQgOiBudWxsO1xufVxuLyoqXG4gKiDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDthrXtlakg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kR3JvdXBGcmFtZShncm91cElkLCBncm91cEZyYW1lSWQpIHtcbiAgICAvLyAxLiBncm91cEZyYW1lSWTroZwg7KeB7KCRIOywvuq4sFxuICAgIGlmIChncm91cEZyYW1lSWQpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoZnJhbWUgJiYgZnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKVxuICAgICAgICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgICAvLyAyLiDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sFxuICAgIGNvbnN0IHRvcEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBJZCk7XG4gICAgaWYgKCF0b3BGcmFtZSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgLy8gMy4gdG9wRnJhbWXsnZgg7J6Q7Iud7JeQ7IScIOywvuq4sFxuICAgIGNvbnN0IGdyb3VwRnJhbWVJbkNoaWxkcmVuID0gdG9wRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiKTtcbiAgICBpZiAoZ3JvdXBGcmFtZUluQ2hpbGRyZW4pXG4gICAgICAgIHJldHVybiBncm91cEZyYW1lSW5DaGlsZHJlbjtcbiAgICAvLyA0LiDrtoDrqqjsnZgg7J6Q7Iud7JeQ7IScIOywvuq4sFxuICAgIGlmICh0b3BGcmFtZS5wYXJlbnQpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZUluUGFyZW50ID0gdG9wRnJhbWUucGFyZW50LmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImdyb3VwXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKSA9PT0gZ3JvdXBJZCk7XG4gICAgICAgIGlmIChncm91cEZyYW1lSW5QYXJlbnQpXG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZUluUGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImltcG9ydCB7IEFubm90YXRpb25TaXplLCBBbm5ub3RhdGlvbkNhcmRXaWR0aCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2VudW1zXCI7XG5pbXBvcnQgeyBzdXBwb3J0ZWRGb250U2l6ZXMsIHN1cHBvcnRlZENhcmRXaWR0aCB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2NvbnN0XCI7XG4vKipcbiAqIOy5tOuTnCDrhIjruYQg6rCS7JeQIOuUsOuluCDsi6TsoJwg64SI67mE66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmRXaWR0aEJ5VmFsdWUod2lkdGhWYWx1ZSkge1xuICAgIGlmICh3aWR0aFZhbHVlID49IDAgJiZcbiAgICAgICAgd2lkdGhWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm5vdGF0aW9uQ2FyZFdpZHRoKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbd2lkdGhWYWx1ZV07XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbQW5ubm90YXRpb25DYXJkV2lkdGguU01BTExdOyAvLyDquLDrs7jqsJJcbn1cbi8qKlxuICog7Lm065OcIOuEiOu5hOulvCDqs4TsgrDtlanri4jri6QuICjsnoXroKXqsJIg65iQ64qUIOq4sOuzuOqwkiDsgqzsmqkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gY2FyZFdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGdldENhcmRXaWR0aEJ5VmFsdWUoY2FyZFdpZHRoVmFsdWUpXG4gICAgICAgIDogZ2V0Q2FyZFdpZHRoQnlWYWx1ZShBbm5ub3RhdGlvbkNhcmRXaWR0aC5TTUFMTCk7XG59XG4vKipcbiAqIO2PsO2KuCDtgazquLAg6rCS7JeQIOuUsOuluCDsi6TsoJwg7Y+w7Yq4IO2BrOq4sOulvCDrsJjtmZjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5kZXNyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5kZXNyaXB0aW9uOyAvLyDquLDrs7jqsJJcbn1cbi8qKlxuICog67Cw7KeAIO2BrOq4sCDqsJLsl5Ag65Sw66W4IOyLpOygnCDrsLDsp4Ag7YGs6riw66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhZGdlU2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5iYWRnZVNpemU7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbQW5ub3RhdGlvblNpemUuU01BTExdLmJhZGdlU2l6ZTsgLy8g6riw67O46rCSXG59XG4vKipcbiAqIOuwsOyngCDthY3siqTtirgg7YGs6riwIOqwkuyXkCDrlLDrpbgg7Iuk7KCcIO2FjeyKpO2KuCDtgazquLDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5iYWRnZVRleHQ7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbQW5ub3RhdGlvblNpemUuU01BTExdLmJhZGdlVGV4dDsgLy8g6riw67O46rCSXG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGhleFRvUmdiIH0gZnJvbSBcIi4vY29sb3JVdGlsc1wiO1xuLyoqXG4gKiDshKTrqoUg6rCd7LK066Gc67aA7YSwIOydvOuwmCDthY3siqTtirjrpbwg7LaU7Lac7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFkZXNjcmlwdGlvbi5jb250ZW50KVxuICAgICAgICByZXR1cm4gXCJOZXcgQW5ub3RhdGlvblwiO1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBmdW5jdGlvbiBleHRyYWN0VGV4dChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnRleHQpIHtcbiAgICAgICAgICAgIHRleHQgKz0gbm9kZS50ZXh0ICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY29udGVudCAmJiBBcnJheS5pc0FycmF5KG5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUuY29udGVudC5mb3JFYWNoKGV4dHJhY3RUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDqsIEg7IOB7JyEIOugiOuyqCBjb250ZW50IO2VreuqqeydhCDsspjrpqztlZjqs6Ag7KSE67CU6r+IIOy2lOqwgFxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlc2NyaXB0aW9uLmNvbnRlbnQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHRleHQubGVuZ3RoO1xuICAgICAgICAgICAgLy8g64W465OcIOuCtOyaqSDstpTstpxcbiAgICAgICAgICAgIGlmIChjb250ZW50Tm9kZS50eXBlID09PSBcImJ1bGxldExpc3RcIiB8fFxuICAgICAgICAgICAgICAgIGNvbnRlbnROb2RlLnR5cGUgPT09IFwicGFyYWdyYXBoXCIpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0VGV4dChjb250ZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDri6Trpbgg7YOA7J6F7J2YIOuFuOuTnOuPhCDsspjrpqxcbiAgICAgICAgICAgICAgICBleHRyYWN0VGV4dChjb250ZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDqsIEg7Luo7YWQ7LigIO2VreuqqSDrkqTsl5Ag7KSE67CU6r+IIOy2lOqwgCjrp4jsp4Drp4kg7ZWt66qpIOygnOyZuClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGRlc2NyaXB0aW9uLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnRyaW0oKSB8fCBcIk5ldyBBbm5vdGF0aW9uXCI7XG59XG4vKipcbiAqIOumrOy5mCDthY3siqTtirgg7ZiV7IudIOygleuztOulvCDstpTstpztlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRyYWN0Rm9ybWF0dGluZ1JhbmdlcyhkZXNjcmlwdGlvbkRhdGEpIHtcbiAgICBjb25zdCByYW5nZXMgPSBbXTtcbiAgICBmdW5jdGlvbiBwcm9jZXNzTm9kZShub2RlLCBwYXJlbnRNYXJrcyA9IFtdLCBpc0xpc3RJdGVtID0gZmFsc2UpIHtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDsspjrpqwgLSDrhbjrk5zsl5Ag7KeB7KCRIOyeiOuKlCDrp4jtgazrp4wg7KCB7JqpXG4gICAgICAgIGlmIChub2RlLnRleHQpIHtcbiAgICAgICAgICAgIC8vIO2YhOyerCDrhbjrk5zsnZgg66eI7YGs66eMIOyCrOyaqSAo67aA66qoIOuniO2BrCDrrLTsi5wpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TWFya3MgPSBub2RlLm1hcmtzIHx8IFtdO1xuICAgICAgICAgICAgLy8g66eI7YGsIOu2hOyEnVxuICAgICAgICAgICAgY29uc3QgaXNCb2xkID0gY3VycmVudE1hcmtzLnNvbWUoKG1hcmspID0+IG1hcmsudHlwZSA9PT0gXCJib2xkXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNVbmRlcmxpbmUgPSBjdXJyZW50TWFya3Muc29tZSgobWFyaykgPT4gbWFyay50eXBlID09PSBcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTWFyayA9IGN1cnJlbnRNYXJrcy5maW5kKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwidGV4dFN0eWxlXCIgJiYgbWFyay5hdHRycyAmJiBtYXJrLmF0dHJzLmNvbG9yKTtcbiAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrsI8g7ISc7IudIOygleuztCDsoIDsnqVcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBub2RlLnRleHQsXG4gICAgICAgICAgICAgICAgaXNCb2xkLFxuICAgICAgICAgICAgICAgIGlzVW5kZXJsaW5lLFxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogaXNCb2xkID8gXCJCb2xkXCIgOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JNYXJrID8gY29sb3JNYXJrLmF0dHJzLmNvbG9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47IC8vIO2FjeyKpO2KuCDrhbjrk5zripQg7J6Q7Iud7J20IOyXhuycvOuvgOuhnCDsl6zquLDshJwg7KKF66OMXG4gICAgICAgIH1cbiAgICAgICAgLy8gYnVsbGV0TGlzdCDsspjrpqxcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJidWxsZXRMaXN0XCIgJiZcbiAgICAgICAgICAgIG5vZGUuY29udGVudCAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAvLyBidWxsZXRMaXN07J2YIOqwgSBsaXN0SXRlbSDsspjrpqxcbiAgICAgICAgICAgIG5vZGUuY29udGVudC5mb3JFYWNoKChsaXN0SXRlbU5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gJ+KAoiAnIOy2lOqwgO2VmOyXrCDrtojrpr8g7ZGc7IucXG4gICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuKAoiBcIixcbiAgICAgICAgICAgICAgICAgICAgaXNCb2xkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXNVbmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdW5kZWZpbmVkLCAvLyDquLDrs7gg7IOJ7IOBIOyCrOyaqVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtIOuCtOyaqSDsspjrpqxcbiAgICAgICAgICAgICAgICBpZiAobGlzdEl0ZW1Ob2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShsaXN0SXRlbU5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNvbnRlbnROb2RlLCBbXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrp4jsp4Drp4kgbGlzdEl0ZW3snbQg7JWE64uI66m0IOykhOuwlOq/iCDstpTqsIBcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBub2RlLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3TGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g7J2867CYIOyekOyLnSDrhbjrk5wg7LKY66asXG4gICAgICAgIGlmIChub2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDtla3sg4Eg67mIIOu2gOuqqCDrp4jtgawg67Cw7Je0IOyghOuLrCAo7Iqk7YOA7J28IOyDgeyGjSDslYjtlagpXG4gICAgICAgICAgICAgICAgcHJvY2Vzc05vZGUoY2hpbGQsIFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOqwgSDsg4HsnIQg66CI67KoIOy7qO2FkOy4oCDsspjrpqwg67CPIOykhOuwlOq/iCDstpTqsIBcbiAgICBpZiAoZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbkRhdGEuY29udGVudCkpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyDqsIEg7Luo7YWQ7LigIOuFuOuTnCDsspjrpqxcbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNvbnRlbnROb2RlLCBbXSk7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4kg7ZWt66qp7J20IOyVhOuLiOuptCDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBkZXNjcmlwdGlvbkRhdGEuY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhZGROZXdMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlcztcbn1cbi8qKlxuICog7YWN7Iqk7Yq4IOuFuOuTnOyXkCDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLneydhCDsoIHsmqntlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyh0ZXh0Tm9kZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkRhdGEgfHwgIWRlc2NyaXB0aW9uRGF0YS5jb250ZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDtlYTsmpTtlZwg66qo65OgIO2PsO2KuCDrr7jrpqwg66Gc65OcXG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pLFxuICAgICAgICAgICAgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSksXG4gICAgICAgIF0pO1xuICAgICAgICAvLyDthY3siqTtirgg64W465OcIOy0iOq4sO2ZlFxuICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gXCJcIjtcbiAgICAgICAgLy8g66qo65OgIOyEnOyLnSDsoJXrs7Trpbwg66i87KCAIOy2lOy2nFxuICAgICAgICBjb25zdCByYW5nZXMgPSBleHRyYWN0Rm9ybWF0dGluZ1JhbmdlcyhkZXNjcmlwdGlvbkRhdGEpO1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgLy8g6rCBIOuylOychOuzhOuhnCDthY3siqTtirjsmYAg7ISc7IudIOyggeyaqVxuICAgICAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOy2lOqwgFxuICAgICAgICAgICAgaWYgKHJhbmdlLnRleHQgJiYgcmFuZ2UudGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcmFuZ2UudGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhjdXJyZW50SW5kZXgsIHJhbmdlLnRleHQpO1xuICAgICAgICAgICAgICAgIC8vIOq4sOuzuCDsiqTtg4Dsnbwg7ISk7KCVIChSZWd1bGFyIO2PsO2KuCwg6rKA7J2A7IOJLCDrsJHspIQg7JeG7J2MKVxuICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRm9udE5hbWUoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIkludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZpbGxzKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZVRleHREZWNvcmF0aW9uKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBcIk5PTkVcIik7XG4gICAgICAgICAgICAgICAgLy8g67O865Oc7LK0IOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5pc0JvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGb250TmFtZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIkludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJCb2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrsJHspIQg7KCB7JqpXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLmlzVW5kZXJsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlVGV4dERlY29yYXRpb24oY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFwiVU5ERVJMSU5FXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDsg4nsg4Eg7KCB7JqpXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJnYkNvbG9yID0gaGV4VG9SZ2IocmFuZ2UuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmdiQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRmlsbHMoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IHJnYkNvbG9yLnIgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiByZ2JDb2xvci5nIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogcmdiQ29sb3IuYiAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICs9IGxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOykhOuwlOq/iCDstpTqsIBcbiAgICAgICAgICAgIGlmIChyYW5nZS5hZGROZXdMaW5lKSB7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhjdXJyZW50SW5kZXgsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIO2FjeyKpO2KuOqwgCDruYTslrTsnojsnLzrqbQg6riw67O46rCSIOyEpOyglVxuICAgICAgICBpZiAodGV4dE5vZGUuY2hhcmFjdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSBcIk5ldyBBbm5vdGF0aW9uXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZmluZEdyb3VwIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbi8qKlxuICog66qo65OgIOyjvOyEnSDsmpTshozsnZgg7J24642x7IqkIOuyiO2YuOulvCDsl4XrjbDsnbTtirjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gYW5ub3RhdGlvbiDtg4DsnoXsnZgg7ZSE66CI7J6E66eMIO2VhO2EsOungVxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWVzID0gZ3JvdXBGcmFtZS5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgLy8g7ZWE7YSw66eB65CcIOyjvOyEnSDtlITroIjsnoTrk6TsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFubm90YXRpb25GcmFtZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGFubm90YXRpb25GcmFtZXNbaW5kZXhdO1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBpbmRleENvbnRhaW5lci5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2PsO2KuCDroZzrk5wg7LaU6rCAXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUuY2hhcmFjdGVycyA9IGAke2luZGV4ICsgMX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDroIjsnbTslYTsm4Mg6rWs7KGwIOyngOybkCAo7J207KCEIOuyhOyghOqzvOydmCDtmLjtmZjshLEpXG4gICAgICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcIOy2lOqwgFxuICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUuY2hhcmFjdGVycyA9IGAke2luZGV4ICsgMX1gO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehCDsnbTrpoQg7JeF642w7J207Yq4XG4gICAgICAgICAgICBjaGlsZC5uYW1lID0gYEFubm90YXRpb24gJHtpbmRleCArIDF9YDtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiDrsLDsp4Ag7J24642x7Iqk66W8IOyXheuNsOydtO2KuO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nKFwi67Cw7KeAIOyduOuNseyKpCDsl4XrjbDsnbTtirgg7Iuc7J6ROlwiLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIFwi6rCc7J2YIOyjvOyEnVwiKTtcbiAgICAgICAgLy8g6re466O56rO8IOq0gOugqOuQnCDtjpjsnbTsp4Ag7LC+6riwXG4gICAgICAgIGxldCB0YXJnZXRQYWdlID0gbnVsbDtcbiAgICAgICAgaWYgKGdyb3VwLnJlbGF0ZWRQYWdlICYmIGdyb3VwLnJlbGF0ZWRQYWdlLmlkKSB7XG4gICAgICAgICAgICAvLyDqtIDroKgg7Y6Y7J207KeA6rCAIOyeiOycvOuptCDtlbTri7kg7Y6Y7J207KeAIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgcGFnZU5vZGUgPSBmaWdtYS5yb290LmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJQQUdFXCIgJiYgbm9kZS5pZCA9PT0gZ3JvdXAucmVsYXRlZFBhZ2UuaWQpO1xuICAgICAgICAgICAgaWYgKHBhZ2VOb2RlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOq0gOugqCDtjpjsnbTsp4DqsIAg7JeG6rGw64KYIOywvuyngCDrqrvtlZwg6rK97JqwIO2YhOyerCDtjpjsnbTsp4Ag7IKs7JqpXG4gICAgICAgIGlmICghdGFyZ2V0UGFnZSkge1xuICAgICAgICAgICAgdGFyZ2V0UGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgICAgICB9XG4gICAgICAgIC8vIO2VtOuLuSDtjpjsnbTsp4Dsl5DshJwg67Cw7KeAIOywvuq4sFxuICAgICAgICB0YXJnZXRQYWdlXG4gICAgICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIpXG4gICAgICAgICAgICAuZm9yRWFjaCgoYmFkZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JZCA9IGJhZGdlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIik7XG4gICAgICAgICAgICAvLyDtlbTri7kg6re466O57JeQIOyGje2VnCDrsLDsp4Drp4wg7JeF642w7J207Yq4XG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGdyb3VwLmFubm90YXRpb25zO1xuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkluZGV4ID0gYW5ub3RhdGlvbnMuZmluZEluZGV4KChhKSA9PiBhLmlkID09PSBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyDrsLDsp4DsnZgg7YWN7Iqk7Yq4IOyXheuNsOydtO2KuCAoMeu2gO2EsCDsi5zsnpHtlZjripQg7J24642x7IqkIOyCrOyaqSlcbiAgICAgICAgICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gYmFkZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3SW5kZXggPSBhbm5vdGF0aW9uSW5kZXggKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuwsOyngCDsl4XrjbDsnbTtirg6ICR7YW5ub3RhdGlvbklkfSA9PiAke25ld0luZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IG5ld0luZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImJhZGdlX2luZGV4XCIsIChhbm5vdGF0aW9uSW5kZXggKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMCB9KTtcbi8vIOyjvOyEnS/qt7jro7kg7ZW465Ok65+sXG5pbXBvcnQgeyBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uLCBoYW5kbGVEZWxldGVBbm5vdGF0aW9uLCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uLCBoYW5kbGVTeW5jQWxsQW5ub3RhdGlvbnMsIH0gZnJvbSBcIi4vaGFuZGxlcnMvYW5ub3RhdGlvbkhhbmRsZXJzXCI7XG4vLyDqt7jro7kg7ZW465Ok65+sXG5pbXBvcnQgeyBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAsIGhhbmRsZURlbGV0ZUFubm90YXRpb25Hcm91cCwgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbkdyb3VwLCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIsIH0gZnJvbSBcIi4vaGFuZGxlcnMvZ3JvdXBIYW5kbGVyc1wiO1xuLy8g642w7J207YSwIO2VuOuTpOufrFxuaW1wb3J0IHsgaGFuZGxlU2F2ZURhdGEsIGhhbmRsZUxvYWREYXRhLCBoYW5kbGVDbGVhckFubm90YXRpb25EYXRhLCBoYW5kbGVHZXRGaWxlTmFtZSwgaGFuZGxlR2V0UGFnZU5hbWUsIH0gZnJvbSBcIi4vaGFuZGxlcnMvZGF0YUhhbmRsZXJzXCI7XG4vLyDrhKTruYTqsozsnbTshZgg7ZW465Ok65+sXG5pbXBvcnQgeyBoYW5kbGVNb3ZlVG9TZWxlY3Rpb24sIGhhbmRsZU1vdmVUb0Fubm90YXRpb24sIGhhbmRsZUNoZWNrQ3VycmVudFNlbGVjdGlvbiwgaGFuZGxlR2V0RnJhbWVJbWFnZSwgfSBmcm9tIFwiLi9oYW5kbGVycy9uYXZpZ2F0aW9uSGFuZGxlcnNcIjtcbi8vIOuplOyLnOyngCDtlbjrk6Trn6wg7ISk7KCVXG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IG1zZztcbiAgICB0cnkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNyZWF0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNSRUFURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlVQREFURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlVQREFURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiREVMRVRFX0FOTk9UQVRJT05cIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVEZWxldGVBbm5vdGF0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiREVMRVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVEZWxldGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTQVZFX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVTYXZlRGF0YShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxPQURfREFUQVwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUxvYWREYXRhKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ0xFQVJfQU5OT1RBVElPTl9EQVRBXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ2xlYXJBbm5vdGF0aW9uRGF0YShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdFVF9GSUxFX05BTUVcIjpcbiAgICAgICAgICAgICAgICBoYW5kbGVHZXRGaWxlTmFtZShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdFVF9QQUdFX05BTUVcIjpcbiAgICAgICAgICAgICAgICBoYW5kbGVHZXRQYWdlTmFtZShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1PVkVfVE9fU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvU2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTU9WRV9UT19BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNIRUNLX0NVUlJFTlRfU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ2hlY2tDdXJyZW50U2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fT1JERVJcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRlJBTUVfSU1BR0VcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU1lOQ19BTExfQU5OT1RBVElPTlNcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVTeW5jQWxsQW5ub3RhdGlvbnMobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgbWVzc2FnZSB0eXBlOlwiLCB0eXBlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgaGFuZGxpbmcgbWVzc2FnZSB0eXBlICR7dHlwZX06YCwgZXJyb3IpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9