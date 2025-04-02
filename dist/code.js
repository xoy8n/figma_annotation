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
    contentGroup.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // 흰색 배경으로 변경 (#FFFFFF)
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
        const indexWidth = Math.round(totalContentWidth * 0.1); // 정확히 10%
        const contentWidth = totalContentWidth - indexWidth; // 나머지 90%
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
                        // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (10:90)
                        const indexWidth = Math.round(frameAvailableWidth * 0.1);
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
                        const indexWidth = Math.round(frameAvailableWidth * 0.1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyw0RUFBZ0I7QUFDakQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxhQUFhLDhEQUFlO0FBQzVCLHFCQUFxQiw2QkFBNkI7QUFDbEQsYUFBYSw4REFBZTtBQUM1QixxQkFBcUIsMEJBQTBCO0FBQy9DLGFBQWEsOERBQWU7QUFDNUIscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsZ0NBQWdDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUMrQztBQUMrRDtBQUMvQztBQUMvRDtBQUNBO0FBQ0E7QUFDTztBQUNQLHdCQUF3Qiw0REFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsd0JBQXdCLDRDQUE0QztBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQywwQ0FBMEM7QUFDM0UscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsMkVBQVM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsbUNBQW1DO0FBQ2hFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0EscURBQXFELHdEQUFZLFVBQVUsd0RBQVk7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELG1DQUFtQztBQUNuRixxQ0FBcUMsOERBQWtCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDhEQUFrQjtBQUMvQztBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0Usd0NBQXdDLGdDQUFnQztBQUN4RTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsMkVBQVM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsK0RBQW1CO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELG1FQUF1QjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQStFO0FBQy9FO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtFQUErRTtBQUMvRTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN4UEE7QUFDQTtBQUNBO0FBQ08sNkNBQTZDO0FBQ3BELG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckMyRTtBQUNFO0FBQzdFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxpQ0FBaUMsbUVBQW9CO0FBQ3JELGVBQWUsaUVBQWtCO0FBQ2pDO0FBQ0EsV0FBVyxpRUFBa0IsQ0FBQyxtRUFBb0IsU0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLDhCQUE4QixtRUFBb0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLGtEQUFrRCw2REFBYztBQUNoRSxlQUFlLGlFQUFrQjtBQUNqQztBQUNBLFdBQVcsaUVBQWtCLENBQUMsNkRBQWMsb0JBQW9CO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxrREFBa0QsNkRBQWM7QUFDaEUsZUFBZSxpRUFBa0I7QUFDakM7QUFDQSxXQUFXLGlFQUFrQixDQUFDLDZEQUFjLG1CQUFtQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1Asa0RBQWtELDZEQUFjO0FBQ2hFLGVBQWUsaUVBQWtCO0FBQ2pDO0FBQ0EsV0FBVyxpRUFBa0IsQ0FBQyw2REFBYyxtQkFBbUI7QUFDL0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLG1DQUFtQztBQUNyRSxrQ0FBa0MsZ0NBQWdDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0Esc0JBQXNCLHdCQUF3QixvQkFBb0I7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMscURBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25NQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUNBQW1DO0FBQ25GLDhDQUE4QyxVQUFVO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxtQ0FBbUM7QUFDdkYsa0RBQWtELFVBQVU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsVUFBVTtBQUNqRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQSxzQkFBc0IsMkVBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELGNBQWMsS0FBSyxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7O1VDakdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ2tKO0FBQ2xKO0FBQytKO0FBQy9KO0FBQzJJO0FBQzNJO0FBQ2lKO0FBQ2pKO0FBQ0E7QUFDQSxZQUFZLE9BQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9GQUEyQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLG9GQUFzQjtBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLG9GQUFzQjtBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLG9GQUEyQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLG9GQUFzQjtBQUM1QztBQUNBO0FBQ0Esc0JBQXNCLG9GQUEyQjtBQUNqRDtBQUNBO0FBQ0Esc0JBQXNCLHNFQUFjO0FBQ3BDO0FBQ0E7QUFDQSxzQkFBc0Isc0VBQWM7QUFDcEM7QUFDQTtBQUNBLHNCQUFzQixpRkFBeUI7QUFDL0M7QUFDQTtBQUNBLGdCQUFnQix5RUFBaUI7QUFDakM7QUFDQTtBQUNBLGdCQUFnQix5RUFBaUI7QUFDakM7QUFDQTtBQUNBLHNCQUFzQixtRkFBcUI7QUFDM0M7QUFDQTtBQUNBLHNCQUFzQixvRkFBc0I7QUFDNUM7QUFDQTtBQUNBLHNCQUFzQix5RkFBMkI7QUFDakQ7QUFDQTtBQUNBLHNCQUFzQixvRkFBMkI7QUFDakQ7QUFDQTtBQUNBLHNCQUFzQixpRkFBbUI7QUFDekM7QUFDQTtBQUNBLHNCQUFzQixzRkFBd0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELEtBQUs7QUFDMUQ7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9jYW52YXMvYW5ub3RhdGlvbkVsZW1lbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaGFuZGxlcnMvYW5ub3RhdGlvbkhhbmRsZXJzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaGFuZGxlcnMvZGF0YUhhbmRsZXJzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaGFuZGxlcnMvZ3JvdXBIYW5kbGVycy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2hhbmRsZXJzL25hdmlnYXRpb25IYW5kbGVycy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvY29uc3QudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9pbnRlcmZhY2VzL2VudW1zLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvc2VydmljZXMvYW5ub3RhdGlvbkZyYW1lU2VydmljZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy91dGlscy9jb2xvclV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvdXRpbHMvZnJhbWVVdGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL21lc3NhZ2VVdGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL25vZGVVdGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL3NpemVVdGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL3RleHRVdGlscy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL3V0aWxzL3VwZGF0ZVV0aWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBnZXRDYXJkV2lkdGgsIGdldEZvbnRTaXplQnlWYWx1ZSwgZ2V0QmFkZ2VTaXplQnlWYWx1ZSwgfSBmcm9tIFwiLi4vdXRpbHMvc2l6ZVV0aWxzXCI7XG5pbXBvcnQgeyBnZXRDb2xvckJ5VmFsdWUgfSBmcm9tIFwiLi4vdXRpbHMvY29sb3JVdGlsc1wiO1xuaW1wb3J0IHsgZmluZEdyb3VwIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbmltcG9ydCB7IGFwcGx5UmljaFRleHRGb3JtYXR0aW5nLCBleHRyYWN0VGV4dEZyb21EZXNjcmlwdGlvbiwgfSBmcm9tIFwiLi4vdXRpbHMvdGV4dFV0aWxzXCI7XG5pbXBvcnQgeyBnZXRUb3BMZXZlbEZyYW1lIH0gZnJvbSBcIi4uL3V0aWxzL25vZGVVdGlsc1wiO1xuLyoqXG4gKiDso7zshJ0g7ZSE66CI7J6EIOyDneyEsSDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25GcmFtZShhbm5vdGF0aW9uSWQsIGluZGV4LCBjYXJkV2lkdGhWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAvLyDso7zshJ0g7Luo7YWM7J2064SIIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLm5hbWUgPSBgQW5ub3RhdGlvbiAke2luZGV4fWA7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25cIik7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIC8vIOy7qO2FjOydtOuEiCDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5maWxscyA9IFtdOyAvLyDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICByOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlV2VpZ2h0ID0gMTsgLy8g7ISgIOuRkOq7mDogMXB4XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VUb3BXZWlnaHQgPSAwO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlQWxpZ24gPSBcIklOU0lERVwiOyAvLyDthYzrkZDrpqwg7JyE7LmYIChJTlNJREUgfCBPVVRTSURFIHwgQ0VOVEVSKVxuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpO1xuICAgICAgICAvLyDrhIjruYTrp4wg6rOg7KCV7ZWY6rOgIOuGkuydtOuKlCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpOyAvLyDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbkZyYW1lO1xuICAgIH0pO1xufVxuLyoqXG4gKiDrgrTsmqkg6re466O5IOyDneyEsSDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRHcm91cChhbm5vdGF0aW9uSWQsIGNvbnRlbnRXaWR0aCkge1xuICAgIC8vIOyduOuNseyKpOyZgCDshKTrqoXsnYQg64u07J2EIOq3uOujuSDsg53shLFcbiAgICBjb25zdCBjb250ZW50R3JvdXAgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGNvbnRlbnRHcm91cC5uYW1lID0gXCJBbm5vdGF0aW9uIENvbnRlbnRcIjtcbiAgICBjb250ZW50R3JvdXAuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgY29udGVudEdyb3VwLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAvLyDqt7jro7kg7Iqk7YOA7J28IOyEpOyglVxuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGNvbnRlbnRHcm91cC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjsgLy8g64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgIGNvbnRlbnRHcm91cC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7IC8vIOuEiOu5hOuKlCDqs6DsoJVcbiAgICBjb250ZW50R3JvdXAudmVydGljYWxQYWRkaW5nID0gMTA7XG4gICAgY29udGVudEdyb3VwLmhvcml6b250YWxQYWRkaW5nID0gMTA7XG4gICAgY29udGVudEdyb3VwLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07IC8vIO2dsOyDiSDrsLDqsr3snLzroZwg67OA6rK9ICgjRkZGRkZGKVxuICAgIC8vIOuEiOu5hCDshKTsoJUgLSDsoITri6zrsJvsnYAg64SI67mE66W8IOq3uOuMgOuhnCDsgqzsmqlcbiAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgIHJldHVybiBjb250ZW50R3JvdXA7XG59XG4vKipcbiAqIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7IOd7ISxIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5kZXhDb250YWluZXIoYW5ub3RhdGlvbklkLCBpbmRleFdpZHRoKSB7XG4gICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDsg53shLFcbiAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgaW5kZXhDb250YWluZXIubmFtZSA9IFwiQW5ub3RhdGlvbiBJbmRleFwiO1xuICAgIGluZGV4Q29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgaW5kZXhDb250YWluZXIuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICBpbmRleENvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGluZGV4Q29udGFpbmVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgaW5kZXhDb250YWluZXIuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICBpbmRleENvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgIF07IC8vIOuwsOqyveyDiSDshKTsoJVcbiAgICBpbmRleENvbnRhaW5lci52ZXJ0aWNhbFBhZGRpbmcgPSAxMDtcbiAgICBpbmRleENvbnRhaW5lci5ob3Jpem9udGFsUGFkZGluZyA9IDEwO1xuICAgIGluZGV4Q29udGFpbmVyLnN0cm9rZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgcjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF07XG4gICAgaW5kZXhDb250YWluZXIuc3Ryb2tlV2VpZ2h0ID0gMDtcbiAgICBpbmRleENvbnRhaW5lci5zdHJva2VSaWdodFdlaWdodCA9IDE7XG4gICAgLy8g64SI67mEIOyEpOyglSAtIOyghOuLrOuwm+ydgCDrhIjruYTrpbwg6re464yA66GcIOyCrOyaqVxuICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgcmV0dXJuIGluZGV4Q29udGFpbmVyO1xufVxuLyoqXG4gKiDsnbjrjbHsiqQg64W465OcIOyDneyEsSDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluZGV4Tm9kZShhbm5vdGF0aW9uSWQsIGluZGV4LCBzaXplVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGluZGV4Tm9kZS5jaGFyYWN0ZXJzID0gYCR7aW5kZXh9YDtcbiAgICAgICAgaW5kZXhOb2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgaW5kZXhOb2RlLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBpbmRleE5vZGUuZm9udFNpemUgPSBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKTsgLy8g6riw67O46rCSIOuYkOuKlCDsp4DsoJXrkJwg6rCSIOyCrOyaqVxuICAgICAgICBpbmRleE5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOygleugrCDshKTsoJVcbiAgICAgICAgaW5kZXhOb2RlLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICBpbmRleE5vZGUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICByZXR1cm4gaW5kZXhOb2RlO1xuICAgIH0pO1xufVxuLyoqXG4gKiDshKTrqoUg7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLEg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbk5vZGUoYW5ub3RhdGlvbklkLCB0ZXh0ID0gXCJOZXcgQW5ub3RhdGlvblwiLCBzaXplVmFsdWUsIGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOq4sOuzuCDtj7Dtirjrp4wg66i87KCAIOuhnOuTnCAoYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmfsl5DshJwg7LaU6rCAIO2PsO2KuCDroZzrk5wpXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgICAgIHRleHROb2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGV4dE5vZGUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIHRleHROb2RlLmZvbnRTaXplID0gZ2V0Rm9udFNpemVCeVZhbHVlKHNpemVWYWx1ZSk7XG4gICAgICAgIHRleHROb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIOuGkuydtOunjCDsnpDrj5nsnLzroZwg7KGw7KCV65CY64+E66GdIOyEpOyglVxuICAgICAgICB0ZXh0Tm9kZS50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgIC8vIOumrOy5mCDthY3siqTtirgg7ISk66qFIOuNsOydtO2EsOqwgCDsnojsnLzrqbQg7ISc7IudIOyggeyaqVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25EYXRhICYmXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudCAmJlxuICAgICAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgeWllbGQgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcodGV4dE5vZGUsIGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHROb2RlO1xuICAgIH0pO1xufVxuLyoqXG4gKiBUaXRsZSDqt7jro7kg7IOd7ISxIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGl0bGVHcm91cChncm91cElkLCBmcmFtZVdpZHRoLCBkZXNjcmlwdGlvblRleHQgPSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag7Luo7YWM7J2064SIIOyDneyEsVxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLm5hbWUgPSBcIlRpdGxlXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwiZ3JvdXBJZFwiLCBncm91cElkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTsgLy8g67Cw6rK97IOJIOyEpOyglVxuICAgICAgICAvL2JvcmRlcuyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICByOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VXZWlnaHQgPSAxOyAvLyDshKAg65GQ6ruYOiAxcHhcbiAgICAgICAgdGl0bGVDb250YWluZXIuc3Ryb2tlQWxpZ24gPSBcIklOU0lERVwiOyAvLyDthYzrkZDrpqwg7JyE7LmYIChJTlNJREUgfCBPVVRTSURFIHwgQ0VOVEVSKVxuICAgICAgICAvLyDrhIjruYQg7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5yZXNpemUoZnJhbWVXaWR0aCwgdGl0bGVDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmNoYXJhY3RlcnMgPSBkZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcInRpdGxlX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZm9udFNpemUgPSAxNDtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIO2FjeyKpO2KuCDsoJXroKwg7ISk7KCVXG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuEiOu5hCDshKTsoJVcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5yZXNpemUoZnJhbWVXaWR0aCAtICh0aXRsZUNvbnRhaW5lci5wYWRkaW5nTGVmdCArIHRpdGxlQ29udGFpbmVyLnBhZGRpbmdSaWdodCksIDM2KTtcbiAgICAgICAgLy8g7Luo7YWM7J2064SI7JeQIO2FjeyKpO2KuCDrhbjrk5wg7LaU6rCAXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XG4gICAgICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbiAgICB9KTtcbn1cbi8qKlxuICog6riw7KG0IOuwsOyngOydmCDtgazquLDrpbwg7ZmV7J247ZWY64qUIO2VqOyImFxuICovXG5mdW5jdGlvbiBnZXRFeGlzdGluZ0JhZGdlU2l6ZShub2RlKSB7XG4gICAgY29uc3QgcGFyZW50RnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKG5vZGUpO1xuICAgIGlmICghcGFyZW50RnJhbWUpXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgLy8g6rCZ7J2AIO2UhOugiOyehCDrgrTsnZgg64uk66W4IOuwsOyngCDssL7quLBcbiAgICBjb25zdCBleGlzdGluZ0JhZGdlcyA9IHBhcmVudEZyYW1lLmZpbmRBbGwoKG4pID0+IG4udHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgIG4uZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgIG4gIT09IG5vZGUpO1xuICAgIGlmIChleGlzdGluZ0JhZGdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIOyyqyDrsojsp7gg67Cw7KeA7J2YIO2BrOq4sCDrsJjtmZhcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nQmFkZ2VzWzBdLndpZHRoO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuLyoqXG4gKiDrsLDsp4Drpbwg7IOd7ISx7ZWY64qUIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkJhZGdlKG5vZGUsIGluZGV4LCBhbm5vdGF0aW9uSWQsIGNvbG9yVmFsdWUsIHNpemVWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAvLyDrsLDsp4Ag7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBjb25zdCBiYWRnZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGJhZGdlLm5hbWUgPSBgQmFkZ2UgJHtpbmRleH1gO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25fYmFkZ2VcIik7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImJhZGdlX2luZGV4XCIsIGluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgICAvLyDrsLDsp4Ag7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBiYWRnZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGJhZGdlLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIGJhZGdlLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIGJhZGdlLmNvcm5lclJhZGl1cyA9IDk5OTk7IC8vIOybkO2YleycvOuhnCDrp4zrk6TquLBcbiAgICAgICAgLy8g67Cw7KeAIO2BrOq4sCDshKTsoJUgLSDquLDsobQg67Cw7KeAIO2BrOq4sCDtmZXsnbhcbiAgICAgICAgY29uc3QgZXhpc3RpbmdCYWRnZVNpemUgPSBnZXRFeGlzdGluZ0JhZGdlU2l6ZShub2RlKTtcbiAgICAgICAgY29uc3QgYmFkZ2VTaXplID0gZXhpc3RpbmdCYWRnZVNpemUgfHwgZ2V0QmFkZ2VTaXplQnlWYWx1ZShzaXplVmFsdWUpO1xuICAgICAgICBiYWRnZS5yZXNpemUoYmFkZ2VTaXplLCBiYWRnZVNpemUpO1xuICAgICAgICAvLyDrsLDsp4Ag7IOJ7IOBIOyEpOyglVxuICAgICAgICBjb25zdCBiYWRnZUNvbG9yID0gZ2V0Q29sb3JCeVZhbHVlKGNvbG9yVmFsdWUpOyAvLyDquLDrs7gg65iQ64qUIOyngOygleuQnCDsg4nsg4FcbiAgICAgICAgYmFkZ2UuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBiYWRnZUNvbG9yIH1dO1xuICAgICAgICAvLyDsnbjrjbHsiqQg67KI7Zi4IO2FjeyKpO2KuCDsg53shLFcbiAgICAgICAgY29uc3QgaW5kZXhUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBpbmRleFRleHQuY2hhcmFjdGVycyA9IGluZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDtgazquLAg7ISk7KCVIC0g67Cw7KeAIO2BrOq4sOyXkCDruYTroYDtlZjsl6wg7ISk7KCVXG4gICAgICAgIGNvbnN0IHRleHRTaXplID0gTWF0aC5yb3VuZChiYWRnZVNpemUgKiAwLjYpOyAvLyDrsLDsp4Ag7YGs6riw7J2YIDYwJeuhnCDshKTsoJVcbiAgICAgICAgaW5kZXhUZXh0LmZvbnRTaXplID0gdGV4dFNpemU7XG4gICAgICAgIGluZGV4VGV4dC5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9IH1dOyAvLyDtnbDsg4kg7YWN7Iqk7Yq4XG4gICAgICAgIC8vIOuwsOyngOyXkCDthY3siqTtirgg7LaU6rCAXG4gICAgICAgIGJhZGdlLmFwcGVuZENoaWxkKGluZGV4VGV4dCk7XG4gICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwICjtjpjsnbTsp4Ag67CU66GcIOyVhOuemCDtlITroIjsnoQpXG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKTtcbiAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICAvLyDrhbjrk5zsnZgg7KCI64yAIOyijO2RnCjtjpjsnbTsp4Ag6riw7KSAKSDqs4TsgrBcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlWCA9IGdldEFic29sdXRlUG9zaXRpb24obm9kZSkueDtcbiAgICAgICAgICAgIGNvbnN0IGFic29sdXRlWSA9IGdldEFic29sdXRlUG9zaXRpb24obm9kZSkueTtcbiAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsnZgg7KCI64yAIOyijO2RnCjtjpjsnbTsp4Ag6riw7KSAKSDqs4TsgrBcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lQWJzb2x1dGVYID0gZ2V0QWJzb2x1dGVQb3NpdGlvbih0b3BGcmFtZSkueDtcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lQWJzb2x1dGVZID0gZ2V0QWJzb2x1dGVQb3NpdGlvbih0b3BGcmFtZSkueTtcbiAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsnYQg6riw7KSA7Jy866GcIO2VnCDrhbjrk5zsnZgg7IOB64yAIOyijO2RnFxuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVUb1RvcEZyYW1lWCA9IGFic29sdXRlWCAtIHRvcEZyYW1lQWJzb2x1dGVYO1xuICAgICAgICAgICAgY29uc3QgcmVsYXRpdmVUb1RvcEZyYW1lWSA9IGFic29sdXRlWSAtIHRvcEZyYW1lQWJzb2x1dGVZO1xuICAgICAgICAgICAgLy8g67Cw7KeAIOychOy5mCDshKTsoJVcbiAgICAgICAgICAgIGJhZGdlLnggPSByZWxhdGl2ZVRvVG9wRnJhbWVYIC0gYmFkZ2Uud2lkdGggLyAyO1xuICAgICAgICAgICAgYmFkZ2UueSA9IHJlbGF0aXZlVG9Ub3BGcmFtZVkgLSBiYWRnZS5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOyXkCDrsLDsp4Ag7LaU6rCAXG4gICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6E7J2EIOywvuyngCDrqrvtlZwg6rK97JqwIOq4sOyhtCDroZzsp4Eg7IKs7JqpXG4gICAgICAgICAgICBiYWRnZS54ID0gbm9kZS54O1xuICAgICAgICAgICAgYmFkZ2UueSA9IG5vZGUueSAtIGJhZGdlLmhlaWdodDtcbiAgICAgICAgICAgIC8vIO2YhOyerCDtjpjsnbTsp4Dsl5Ag67Cw7KeAIOy2lOqwgFxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWRnZTtcbiAgICB9KTtcbn1cbi8qKlxuICog64W465Oc7J2YIOygiOuMgCDsnITsuZgo7Y6Y7J207KeAIOq4sOykgCnrpbwg6rOE7IKw7ZWY64qUIO2VqOyImFxuICovXG5mdW5jdGlvbiBnZXRBYnNvbHV0ZVBvc2l0aW9uKG5vZGUpIHtcbiAgICBsZXQgeCA9IDA7XG4gICAgbGV0IHkgPSAwO1xuICAgIC8vIOyekOq4sCDsnpDsi6DsnZggeCwgeSDqsJIg7Y+s7ZWoXG4gICAgaWYgKFwieFwiIGluIG5vZGUpIHtcbiAgICAgICAgeCArPSBub2RlLng7XG4gICAgfVxuICAgIGlmIChcInlcIiBpbiBub2RlKSB7XG4gICAgICAgIHkgKz0gbm9kZS55O1xuICAgIH1cbiAgICAvLyDrtoDrqqjsnZgg7KKM7ZGc66W8IOyerOq3gOyggeycvOuhnCDrjZTtlahcbiAgICBsZXQgcGFyZW50ID0gbm9kZS5wYXJlbnQ7XG4gICAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQudHlwZSAhPT0gXCJQQUdFXCIpIHtcbiAgICAgICAgaWYgKFwieFwiIGluIHBhcmVudCkge1xuICAgICAgICAgICAgeCArPSBwYXJlbnQueDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoXCJ5XCIgaW4gcGFyZW50KSB7XG4gICAgICAgICAgICB5ICs9IHBhcmVudC55O1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB7IHgsIHkgfTtcbn1cbi8qKlxuICog67Cw7KeAIOyCreygnCDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uSWQsIGdyb3VwSWQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IGZpZ21hLmN1cnJlbnRQYWdlO1xuICAgICAgICAvLyDqt7jro7kgSUTqsIAg7KCc6rO165CcIOqyveyasCDtlbTri7kg6re466O57J2YIO2OmOydtOyngCDssL7quLBcbiAgICAgICAgaWYgKGdyb3VwSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwICYmIGdyb3VwLnJlbGF0ZWRQYWdlICYmIGdyb3VwLnJlbGF0ZWRQYWdlLmlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZU5vZGUgPSBmaWdtYS5yb290LmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJQQUdFXCIgJiYgbm9kZS5pZCA9PT0gZ3JvdXAucmVsYXRlZFBhZ2UuaWQpO1xuICAgICAgICAgICAgICAgIGlmIChwYWdlTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXRQYWdlID0gcGFnZU5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIO2VtOuLuSDtjpjsnbTsp4Dsl5DshJwg67Cw7KeAIOywvuq4sFxuICAgICAgICB0YXJnZXRQYWdlXG4gICAgICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gYW5ub3RhdGlvbklkKVxuICAgICAgICAgICAgLmZvckVhY2goKGJhZGdlKSA9PiBiYWRnZS5yZW1vdmUoKSk7XG4gICAgfSk7XG59XG4vKipcbiAqIOyjvOyEnSDqtazshLEg7JqU7IaMIOyDneyEsSDthrXtlakg7ZWo7IiYXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhhbm5vdGF0aW9uSWQsIGluZGV4LCBjb2xvclZhbHVlLCBzaXplVmFsdWUsIGNhcmRXaWR0aFZhbHVlLCBkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25GcmFtZShhbm5vdGF0aW9uSWQsIGluZGV4LCBjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIC8vIOygle2Zle2VnCDruYTsnKgg6rOE7IKwIC0g7KCE7LK0IOuEiOu5hOyXkOyEnCDtjKjrlKkg6rOg66CkXG4gICAgICAgIGNvbnN0IHRvdGFsQ29udGVudFdpZHRoID0gY2FyZFdpZHRoOyAvLyDtlITroIjsnoTsnZgg7KKM7JqwIO2MqOuUqSDqs6DroKRcbiAgICAgICAgY29uc3QgaW5kZXhXaWR0aCA9IE1hdGgucm91bmQodG90YWxDb250ZW50V2lkdGggKiAwLjEpOyAvLyDsoJXtmZXtnoggMTAlXG4gICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IHRvdGFsQ29udGVudFdpZHRoIC0gaW5kZXhXaWR0aDsgLy8g64KY66i47KeAIDkwJVxuICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyDneyEsSAtIOygle2Zle2VnCDrhIjruYQg7KCE64usXG4gICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY3JlYXRlSW5kZXhDb250YWluZXIoYW5ub3RhdGlvbklkLCBpbmRleFdpZHRoKTtcbiAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDsg53shLEgLSDsoJXtmZXtlZwg64SI67mEIOyghOuLrFxuICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjcmVhdGVDb250ZW50R3JvdXAoYW5ub3RhdGlvbklkLCBjb250ZW50V2lkdGgpO1xuICAgICAgICAvLyDsnbjrjbHsiqQg67KI7Zi4IOuFuOuTnCDsg53shLFcbiAgICAgICAgY29uc3QgaW5kZXhOb2RlID0geWllbGQgY3JlYXRlSW5kZXhOb2RlKGFubm90YXRpb25JZCwgaW5kZXgsIHNpemVWYWx1ZSk7XG4gICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IHlpZWxkIGNyZWF0ZURlc2NyaXB0aW9uTm9kZShhbm5vdGF0aW9uSWQsIChkZXNjcmlwdGlvbiA9PT0gbnVsbCB8fCBkZXNjcmlwdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVzY3JpcHRpb24uY29udGVudClcbiAgICAgICAgICAgID8gZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pXG4gICAgICAgICAgICA6IFwiTmV3IEFubm90YXRpb25cIiwgc2l6ZVZhbHVlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIDEuIOuovOyggCDrqqjrk6Ag7J6Q7IudIOuFuOuTnOulvCDrtoDrqqjsl5Ag7LaU6rCAXG4gICAgICAgIGluZGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZGV4Tm9kZSk7XG4gICAgICAgIGNvbnRlbnRHcm91cC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgIC8vIDIuIOu2gOuqqCDtlITroIjsnoTsl5Ag7Luo7YWM7J2064SI65OkIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuYXBwZW5kQ2hpbGQoaW5kZXhDb250YWluZXIpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuYXBwZW5kQ2hpbGQoY29udGVudEdyb3VwKTtcbiAgICAgICAgLy8gMy4g67aA66qoIO2UhOugiOyehOydmCDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIC8vIDQuIOyekOyLnSDsu6jthYzsnbTrhIjrk6TsnZgg7IaN7ISxIOyEpOyglSAo67aA66qoIO2UhOugiOyehOyXkCDstpTqsIDrkJwg7ZuE7JeQIOyEpOyglSlcbiAgICAgICAgLy8gY29udGVudEdyb3VwIOyEpOyglVxuICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgY29udGVudEdyb3VwLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjb250ZW50R3JvdXAuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0R3JvdyA9IDE7XG4gICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgLy8gaW5kZXhDb250YWluZXIg7ISk7KCVXG4gICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJGSUxMXCI7IC8vIOu2gOuqqCDrhpLsnbTsl5Ag66ee7LakXG4gICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7IC8vIOuEiOu5hCDqs6DsoJVcbiAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgIC8vIDUuIO2FjeyKpO2KuCDrhbjrk5wg7ISk7KCVIChjb250ZW50R3JvdXDsl5Ag7LaU6rCA65CcIO2bhOyXkCDshKTsoJUpXG4gICAgICAgIHRleHROb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJTExcIjtcbiAgICAgICAgdGV4dE5vZGUudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAvLyDsu6zrn6wg7KCB7JqpICjrsLDqsr3sg4kg67CPIOyKpO2DgOydvOungSlcbiAgICAgICAgaWYgKGNvbG9yVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSk7XG4gICAgICAgICAgICAvLyDsl6zquLDsl5Ag7IOJ7IOBIOyggeyaqSDroZzsp4Eg7LaU6rCAXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUsXG4gICAgICAgICAgICBncm91cDogY29udGVudEdyb3VwLFxuICAgICAgICAgICAgaW5kZXhOb2RlLFxuICAgICAgICAgICAgdGV4dE5vZGUsXG4gICAgICAgIH07XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGZpbmRHcm91cCwgZmluZEFubm90YXRpb24sIGFkZEFubm90YXRpb24sIHJlbW92ZUFubm90YXRpb24sIHVwZGF0ZUFubm90YXRpb24sIGdldEFubm90YXRpb25Hcm91cHMsIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbmltcG9ydCB7IHNlbmRSZXNwb25zZSB9IGZyb20gXCIuLi91dGlscy9tZXNzYWdlVXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzIH0gZnJvbSBcIi4uL2NhbnZhcy9hbm5vdGF0aW9uRWxlbWVudHNcIjtcbmltcG9ydCB7IGZpbmRHcm91cEZyYW1lIH0gZnJvbSBcIi4uL3V0aWxzL25vZGVVdGlsc1wiO1xuaW1wb3J0IHsgZmluZE9yQ3JlYXRlR3JvdXBGcmFtZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbm5vdGF0aW9uRnJhbWVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBjcmVhdGVBbm5vdGF0aW9uQmFkZ2UsIHJlbW92ZUFubm90YXRpb25CYWRnZSwgfSBmcm9tIFwiLi4vY2FudmFzL2Fubm90YXRpb25FbGVtZW50c1wiO1xuaW1wb3J0IHsgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMsIHVwZGF0ZUJhZGdlSW5kaWNlcywgfSBmcm9tIFwiLi4vdXRpbHMvdXBkYXRlVXRpbHNcIjtcbmltcG9ydCB7IGFwcGx5UmljaFRleHRGb3JtYXR0aW5nIH0gZnJvbSBcIi4uL3V0aWxzL3RleHRVdGlsc1wiO1xuLyoqXG4gKiBDUkVBVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g7IOIIOyjvOyEnSDqsJ3ssrQg7IOd7ISxXG4gICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDqt7jro7nsl5Ag7KO87ISdIOy2lOqwgFxuICAgICAgICBhZGRBbm5vdGF0aW9uKG1zZy5ncm91cElkLCBuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IHlpZWxkIGZpbmRPckNyZWF0ZUdyb3VwRnJhbWUoZ3JvdXApO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLso7zshJ0g6re466O5IO2UhOugiOyehOydhCDssL7qsbDrgpgg7IOd7ISx7ZWgIOyImCDsl4bsirXri4jri6RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g7KO87ISdIFVJIOy7tO2PrOuEjO2KuCDsg53shLFcbiAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIGdyb3VwLmNvbG9yLCBncm91cC5zaXplLCBncm91cC5jYXJkV2lkdGgsIG5ld0Fubm90YXRpb24uZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIGdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgLy8g7ZiE7J6sIOyEoO2DneuQnCDrhbjrk5zsl5Ag67Cw7KeAIOyDneyEsVxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZ3JvdXAuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJDUkVBVEVfQU5OT1RBVElPTlwiLCB0cnVlLCB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QW5ub3RhdGlvbkdyb3VwcygpLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogREVMRVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOq3uOujuSDrgrTsl5DshJwg7KO87ISdIOygnOqxsFxuICAgICAgICByZW1vdmVBbm5vdGF0aW9uKG1zZy5ncm91cElkLCBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIC8vIEZpZ21hIOy6lOuyhOyKpOyXkOyEnOuPhCDsgq3soJxcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g64Ko7JWE7J6I64qUIOyjvOyEnSDtlITroIjsnoTrk6TsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuwsOyngOuPhCDtlajqu5gg7IKt7KCcXG4gICAgICAgIHlpZWxkIHJlbW92ZUFubm90YXRpb25CYWRnZShtc2cuYW5ub3RhdGlvbi5pZCwgbXNnLmdyb3VwSWQpO1xuICAgICAgICAvLyDrgqjslYTsnojripQgYW5ub3RhdGlvbuuTpOydmCDrsLDsp4Ag7J24642x7IqkIOyXheuNsOydtO2KuFxuICAgICAgICB5aWVsZCB1cGRhdGVCYWRnZUluZGljZXMoZ3JvdXAuaWQpO1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8qKlxuICogVVBEQVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb24gPSBmaW5kQW5ub3RhdGlvbihtc2cuZ3JvdXBJZCwgbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgIGlmICghZ3JvdXAgfHwgIWFubm90YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOuplOuqqOumrCDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgICAgIHVwZGF0ZUFubm90YXRpb24obXNnLmdyb3VwSWQsIG1zZy5hbm5vdGF0aW9uSWQsIG1zZy5rZXksIG1zZy52YWx1ZSk7XG4gICAgICAgIC8vIOyLpOygnCBGaWdtYSDsmpTshozrj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKCFncm91cEZyYW1lKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDtlbTri7kgYW5ub3RhdGlvbiDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKCFhbm5vdGF0aW9uRnJhbWUpXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDrhbjrk5wg7LC+7JWEIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBhbm5vdGF0aW9uRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgLy8gY29udGVudCDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBhbm5vdGF0aW9uRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgIGlmICghY29udGVudEdyb3VwKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDrhbjrk5wg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8g66as7LmYIO2FjeyKpO2KuCDshJzsi50g7KCB7JqpXG4gICAgICAgICAgICAgICAgeWllbGQgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcoZGVzY05vZGUsIG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8g66CI7J207JWE7JuDIOyXheuNsOydtO2KuOulvCDsnITtlZwg7KeA7JewIOyymOumrFxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIgJiYgY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg7IaN7ISxIOyerOyEpOygle2VmOyXrCDqsJXsoJwg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiDtlITroIjsnoQg66CI7J207JWE7JuDIOyerOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g7J24642x7IqkIOy7qO2FjOydtOuEiCDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiRklMTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4g7Luo7YWQ7LigIOq3uOujuSDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0R3JvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyA0LiDthY3siqTtirgg64W465OcIOugiOydtOyVhOybgyDsnqzshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJTExcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDUuIO2VhOyalO2VnCDqsr3smrAg66CI7J207JWE7JuDIOqwleygnCDsl4XrjbDsnbTtirjrpbwg7JyE7ZWcIO2KuOumrSDsoIHsmqlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyVveqwhOydmCDtgazquLAg67OA6rK9IO2bhCDsm5Drnpgg7YGs6riw66GcIOuzteybkO2VmOyXrCDroIjsnbTslYTsm4Mg7J6s6rOE7IKwIOycoOuPhFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxXaWR0aCA9IGFubm90YXRpb25GcmFtZS53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUob3JpZ2luYWxXaWR0aCArIDEsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShvcmlnaW5hbFdpZHRoLCBhbm5vdGF0aW9uRnJhbWUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vKipcbiAqIFNZTkNfQUxMX0FOTk9UQVRJT05TIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqIOuqqOuToCDso7zshJ0g6re466O57J2YIO2FjeyKpO2KuCDrgrTsmqnsnYQgRmlnbWEg7LqU67KE7Iqk7JeQ7IScIOuPmeq4sO2ZlO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZVN5bmNBbGxBbm5vdGF0aW9ucyhtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbGxHcm91cHMgPSBnZXRBbm5vdGF0aW9uR3JvdXBzKCk7XG4gICAgICAgIGlmICghYWxsR3JvdXBzIHx8IGFsbEdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogZ2V0QW5ub3RhdGlvbkdyb3VwcygpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g66qo65OgIOq3uOujueydhCDsiJztmoztlZjrqbAg64K07JqpIOuPmeq4sO2ZlFxuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGFsbEdyb3Vwcykge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKCFncm91cEZyYW1lKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8g6re466O5IOuCtCDrqqjrk6Ag7KO87ISdIO2UhOugiOyehCDsiJztmoxcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5ub3RhdGlvbiBvZiBncm91cC5hbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIWFubm90YXRpb25GcmFtZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRlbnRHcm91cClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5zsnZgg66qo65OgIO2PsO2KuCDroZzrk5wgKOydtCDrtoDrtoTsnbQg7KSR7JqU7ZWp64uI64ukISlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjTm9kZS5oYXNNaXNzaW5nRm9udCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIu2FjeyKpO2KuCDrhbjrk5zsl5Ag64iE652965CcIO2PsO2KuOqwgCDsnojsirXri4jri6QuIOq4sOuzuCDtj7Dtirjrpbwg66Gc65Oc7ZWp64uI64ukLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5zsnZgg66qo65OgIO2PsO2KuCDroZzrk5xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250TmFtZXMgPSBkZXNjTm9kZS5nZXRSYW5nZUFsbEZvbnROYW1lcygwLCBkZXNjTm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoZm9udE5hbWVzLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465Oc7J2YIO2FjeyKpO2KuOyZgCDshJzsi53snYQg67aE7ISd7ZWY7JesIFRpcHRhcCDtmLjtmZgg7ZiV7Iud7Jy866GcIOuzgO2ZmFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25EYXRhID0gY29udmVydEZpZ21hVGV4dFRvVGlwdGFwRm9ybWF0KGRlc2NOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuplOuqqOumrCDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVBbm5vdGF0aW9uKGdyb3VwLmlkLCBhbm5vdGF0aW9uLmlkLCBcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg7JeF642w7J207Yq466W8IOychO2VnCDsp4Dsl7Ag7LKY66asXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIgJiYgY29udGVudEdyb3VwICYmIGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg7IaN7ISxIOuzgOqyvSDsoITsl5Ag64uk7IucIO2VnOuyiCDtj7Dtirgg66Gc65OcIO2ZleyduFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9udE5hbWVzID0gZGVzY05vZGUuZ2V0UmFuZ2VBbGxGb250TmFtZXMoMCwgZGVzY05vZGUuY2hhcmFjdGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoZm9udE5hbWVzLm1hcChmaWdtYS5sb2FkRm9udEFzeW5jKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg7IaN7ISxIOyerOyEpOygle2VmOyXrCDqsJXsoJwg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAxLiDtlITroIjsnoQg66CI7J207JWE7JuDIOyerOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMi4g7J24642x7IqkIOy7qO2FjOydtOuEiCDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiRklMTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gMy4g7Luo7YWQ7LigIOq3uOujuSDroIjsnbTslYTsm4Mg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0R3JvdyA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA0LiDthY3siqTtirgg64W465OcIOugiOydtOyVhOybgyDsnqzshKTsoJUgKO2PsO2KuCDroZzrk5wg7ZuEKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklMTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNS4g66CI7J207JWE7JuDIOqwleygnCDsl4XrjbDsnbTtirjrpbwg7JyE7ZWcIO2KuOumrSDsoIHsmqlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBhbm5vdGF0aW9uRnJhbWUud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVzaXplKG9yaWdpbmFsV2lkdGggKyAxLCBhbm5vdGF0aW9uRnJhbWUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUob3JpZ2luYWxXaWR0aCwgYW5ub3RhdGlvbkZyYW1lLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi66CI7J207JWE7JuDIOyXheuNsOydtO2KuCDspJEg7Jik66WYIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi7Y+w7Yq4IOuhnOuTnCDspJEg7Jik66WYIOuwnOyDnTpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbm5vdGF0aW9uR3JvdXBzKCksXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBGaWdtYSDthY3siqTtirgg64W465Oc7J2YIOuCtOyaqeydhCBUaXB0YXAg7Zi47ZmYIO2YleyLneycvOuhnCDrs4DtmZjtlanri4jri6QuXG4gKi9cbmZ1bmN0aW9uIGNvbnZlcnRGaWdtYVRleHRUb1RpcHRhcEZvcm1hdChmaWdtYVRleHROb2RlKSB7XG4gICAgLy8g6riw67O4IOusuOyEnCDqtazsobAg7IOd7ISxXG4gICAgY29uc3QgdGlwdGFwRG9jID0ge1xuICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICBjb250ZW50OiBbXSxcbiAgICB9O1xuICAgIC8vIO2FjeyKpO2KuOqwgCDsl4bsnLzrqbQg67mIIOusuOyEnCDrsJjtmZhcbiAgICBpZiAoIWZpZ21hVGV4dE5vZGUuY2hhcmFjdGVycyB8fCBmaWdtYVRleHROb2RlLmNoYXJhY3RlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRpcHRhcERvYy5jb250ZW50LnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRpcHRhcERvYztcbiAgICB9XG4gICAgLy8g7YWN7Iqk7Yq4IOyghOyytCDrrLjsnpDsl7RcbiAgICBjb25zdCBmdWxsVGV4dCA9IGZpZ21hVGV4dE5vZGUuY2hhcmFjdGVycztcbiAgICAvLyDspITrsJTqv4gg7JyE7LmYIOywvuq4sFxuICAgIGNvbnN0IGxpbmVCcmVha3MgPSBbXTtcbiAgICBsZXQgbmV4dExpbmVCcmVhayA9IGZ1bGxUZXh0LmluZGV4T2YoXCJcXG5cIik7XG4gICAgd2hpbGUgKG5leHRMaW5lQnJlYWsgIT09IC0xKSB7XG4gICAgICAgIGxpbmVCcmVha3MucHVzaChuZXh0TGluZUJyZWFrKTtcbiAgICAgICAgbmV4dExpbmVCcmVhayA9IGZ1bGxUZXh0LmluZGV4T2YoXCJcXG5cIiwgbmV4dExpbmVCcmVhayArIDEpO1xuICAgIH1cbiAgICAvLyDspIQg7Iuc7J6R6rO8IOuBnSDsnITsuZgg6rOE7IKwXG4gICAgY29uc3QgbGluZXMgPSBbXTtcbiAgICBsZXQgc3RhcnRQb3MgPSAwO1xuICAgIGZvciAoY29uc3QgYnJlYWtQb3Mgb2YgbGluZUJyZWFrcykge1xuICAgICAgICBsaW5lcy5wdXNoKHtcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydFBvcyxcbiAgICAgICAgICAgIGVuZDogYnJlYWtQb3MsXG4gICAgICAgICAgICB0ZXh0OiBmdWxsVGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MsIGJyZWFrUG9zKSxcbiAgICAgICAgfSk7XG4gICAgICAgIHN0YXJ0UG9zID0gYnJlYWtQb3MgKyAxOyAvLyAnXFxuJyDri6TsnYzrtoDthLAg7Iuc7J6RXG4gICAgfVxuICAgIC8vIOuniOyngOuniSDspIQg7LaU6rCAXG4gICAgaWYgKHN0YXJ0UG9zIDwgZnVsbFRleHQubGVuZ3RoKSB7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0UG9zLFxuICAgICAgICAgICAgZW5kOiBmdWxsVGV4dC5sZW5ndGgsXG4gICAgICAgICAgICB0ZXh0OiBmdWxsVGV4dC5zdWJzdHJpbmcoc3RhcnRQb3MpLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g67mIIOusuOyekOyXtOydtOudvOuptCDruYgg7KSEIO2VmOuCmCDstpTqsIBcbiAgICBpZiAobGluZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGxpbmVzLnB1c2goe1xuICAgICAgICAgICAgc3RhcnQ6IDAsXG4gICAgICAgICAgICBlbmQ6IDAsXG4gICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8g6rCBIOykhOydhCDri6jrnb3snLzroZwg67OA7ZmYXG4gICAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgICAgIC8vIOqwgSDspITsnYAg7ZWY64KY7J2YIOuLqOudveydtCDrkKhcbiAgICAgICAgY29uc3QgcGFyYWdyYXBoID0ge1xuICAgICAgICAgICAgdHlwZTogXCJwYXJhZ3JhcGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICB9O1xuICAgICAgICBpZiAobGluZS50ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIC8vIO2YhOyerCDspITsl5DshJwg7Iqk7YOA7J28IOuzgOqyvSDsp4DsoJAg7LC+6riwXG4gICAgICAgICAgICBsZXQgY3VycmVudFBvcyA9IGxpbmUuc3RhcnQ7XG4gICAgICAgICAgICB3aGlsZSAoY3VycmVudFBvcyA8IGxpbmUuZW5kKSB7XG4gICAgICAgICAgICAgICAgLy8g7ZiE7J6sIOychOy5mOydmCDsiqTtg4Dsnbwg7IaN7ISxIOqwgOyguOyYpOq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvbnROYW1lID0gZmlnbWFUZXh0Tm9kZS5nZXRSYW5nZUZvbnROYW1lKGN1cnJlbnRQb3MsIGN1cnJlbnRQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxscyA9IGZpZ21hVGV4dE5vZGUuZ2V0UmFuZ2VGaWxscyhjdXJyZW50UG9zLCBjdXJyZW50UG9zICsgMSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dERlY29yYXRpb24gPSBmaWdtYVRleHROb2RlLmdldFJhbmdlVGV4dERlY29yYXRpb24oY3VycmVudFBvcywgY3VycmVudFBvcyArIDEpO1xuICAgICAgICAgICAgICAgIC8vIOqwmeydgCDsiqTtg4DsnbzsnYQg6rCA7KeEIOuylOychCDssL7quLBcbiAgICAgICAgICAgICAgICBsZXQgZW5kUG9zID0gY3VycmVudFBvcyArIDE7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGVuZFBvcyA8IGxpbmUuZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRGb250TmFtZSA9IGZpZ21hVGV4dE5vZGUuZ2V0UmFuZ2VGb250TmFtZShlbmRQb3MsIGVuZFBvcyArIDEpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0RmlsbHMgPSBmaWdtYVRleHROb2RlLmdldFJhbmdlRmlsbHMoZW5kUG9zLCBlbmRQb3MgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dFRleHREZWNvcmF0aW9uID0gZmlnbWFUZXh0Tm9kZS5nZXRSYW5nZVRleHREZWNvcmF0aW9uKGVuZFBvcywgZW5kUG9zICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyKpO2DgOydvOydtCDrs4Dqsr3rkJjrqbQg67KU7JyEIOyiheujjFxuICAgICAgICAgICAgICAgICAgICBpZiAoSlNPTi5zdHJpbmdpZnkoZm9udE5hbWUpICE9PSBKU09OLnN0cmluZ2lmeShuZXh0Rm9udE5hbWUpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShmaWxscykgIT09IEpTT04uc3RyaW5naWZ5KG5leHRGaWxscykgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uICE9PSBuZXh0VGV4dERlY29yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVuZFBvcysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg7KGw6rCBIOy2lOy2nCAo7KCI64yAIOychOy5mCDquLDspIApXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dENodW5rID0gZnVsbFRleHQuc3Vic3RyaW5nKGN1cnJlbnRQb3MsIGVuZFBvcyk7XG4gICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgICAgICAgICBjb25zdCB0aXB0YXBUZXh0Tm9kZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRleHRDaHVuayxcbiAgICAgICAgICAgICAgICAgICAgbWFya3M6IFtdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8g67O865OcIOyKpO2DgOydvCDtmZXsnbhcbiAgICAgICAgICAgICAgICBpZiAoZm9udE5hbWUgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGZvbnROYW1lICE9PSBcInN5bWJvbFwiICYmXG4gICAgICAgICAgICAgICAgICAgIFwic3R5bGVcIiBpbiBmb250TmFtZSAmJlxuICAgICAgICAgICAgICAgICAgICBmb250TmFtZS5zdHlsZSA9PT0gXCJCb2xkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwdGFwVGV4dE5vZGUubWFya3MucHVzaCh7IHR5cGU6IFwiYm9sZFwiIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrsJHspIQg7Iqk7YOA7J28IO2ZleyduFxuICAgICAgICAgICAgICAgIGlmICh0ZXh0RGVjb3JhdGlvbiA9PT0gXCJVTkRFUkxJTkVcIikge1xuICAgICAgICAgICAgICAgICAgICB0aXB0YXBUZXh0Tm9kZS5tYXJrcy5wdXNoKHsgdHlwZTogXCJ1bmRlcmxpbmVcIiB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7IOJ7IOBIOyKpO2DgOydvCDtmZXsnbggKOyyq+uyiOynuCBmaWxs66eMIOqzoOugpClcbiAgICAgICAgICAgICAgICBpZiAoZmlsbHMgJiZcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGZpbGxzICE9PSBcInN5bWJvbFwiICYmXG4gICAgICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoZmlsbHMpICYmXG4gICAgICAgICAgICAgICAgICAgIGZpbGxzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgZmlsbHNbMF0udHlwZSA9PT0gXCJTT0xJRFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gZmlsbHNbMF0uY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJHQuulvCAxNuynhOyImOuhnCDrs4DtmZhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGV4Q29sb3IgPSByZ2JUb0hleChNYXRoLnJvdW5kKGNvbG9yLnIgKiAyNTUpLCBNYXRoLnJvdW5kKGNvbG9yLmcgKiAyNTUpLCBNYXRoLnJvdW5kKGNvbG9yLmIgKiAyNTUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhleENvbG9yICE9PSBcIiMwMDAwMDBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g6rKA7J2A7IOJ7J20IOyVhOuLjCDqsr3smrDsl5Drp4wg7IOJ7IOBIOygleuztCDstpTqsIBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcHRhcFRleHROb2RlLm1hcmtzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFN0eWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sb3I6IGhleENvbG9yIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDthY3siqTtirjqsIAg7J6I64qUIOqyveyasOyXkOunjCDri6jrnb3sl5Ag7LaU6rCAXG4gICAgICAgICAgICAgICAgaWYgKHRleHRDaHVuay50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJhZ3JhcGguY29udGVudC5wdXNoKHRpcHRhcFRleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g64uk7J2MIOychOy5mOuhnCDsnbTrj5lcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zID0gZW5kUG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOu5iCDri6jrnb3snbTrjZTrnbzrj4Qg66y47ISc7JeQIOy2lOqwgCAoVGlwdGFw7JeQ7IScIOykkeyalClcbiAgICAgICAgdGlwdGFwRG9jLmNvbnRlbnQucHVzaChwYXJhZ3JhcGgpO1xuICAgIH1cbiAgICAvLyDrlJTrsoTquYXsmqkg66Gc6re4XG4gICAgY29uc29sZS5sb2coXCLrs4DtmZjrkJwgVGlwdGFwIOusuOyEnDpcIiwgSlNPTi5zdHJpbmdpZnkodGlwdGFwRG9jKSk7XG4gICAgcmV0dXJuIHRpcHRhcERvYztcbn1cbi8qKlxuICogUkdCIOyDieyDgeqwkuydhCAxNuynhOyImCDrrLjsnpDsl7TroZwg67OA7ZmY7ZWp64uI64ukLlxuICovXG5mdW5jdGlvbiByZ2JUb0hleChyLCBnLCBiKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgKCgxIDw8IDI0KSArIChyIDw8IDE2KSArIChnIDw8IDgpICsgYikudG9TdHJpbmcoMTYpLnNsaWNlKDEpO1xufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzZW5kUmVzcG9uc2UgfSBmcm9tIFwiLi4vdXRpbHMvbWVzc2FnZVV0aWxzXCI7XG5pbXBvcnQgeyBpbml0QW5ub3RhdGlvbkdyb3VwcywgfSBmcm9tIFwiLi4vc2VydmljZXMvYW5ub3RhdGlvbkdyb3VwU2VydmljZVwiO1xuLyoqXG4gKiBTQVZFX0RBVEEg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlU2F2ZURhdGEobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cuZGF0YSkpO1xuICAgICAgICAgICAgc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UsIHt9LCBTdHJpbmcoZXJyb3IpKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiBMT0FEX0RBVEEg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlTG9hZERhdGEobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJhdyA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShtc2cua2V5KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHJhdyA/IEpTT04ucGFyc2UocmF3KSA6IFtdO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkLCBcInBhcnNlZFwiKTtcbiAgICAgICAgICAgIGluaXRBbm5vdGF0aW9uR3JvdXBzKHBhcnNlZCk7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHsga2V5OiBtc2cua2V5LCBkYXRhOiBwYXJzZWQgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlLCB7fSwgU3RyaW5nKGVycm9yKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ0xFQVJfQU5OT1RBVElPTl9EQVRBIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsZWFyQW5ub3RhdGlvbkRhdGEobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbkdyb3VwXCIsIFwiW11cIik7XG4gICAgICAgIGluaXRBbm5vdGF0aW9uR3JvdXBzKFtdKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7fSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdFVF9GSUxFX05BTUUg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlR2V0RmlsZU5hbWUobXNnKSB7XG4gICAgc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZpbGVOYW1lOiBmaWdtYS5yb290Lm5hbWUgfSk7XG59XG4vKipcbiAqIEdFVF9QQUdFX05BTUUg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlR2V0UGFnZU5hbWUobXNnKSB7XG4gICAgY29uc3QgcGFnZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobikgPT4gbi5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7XG4gICAgICAgIHBhZ2VJZDogbXNnLnBhZ2VJZCxcbiAgICAgICAgcGFnZU5hbWU6IChwYWdlID09PSBudWxsIHx8IHBhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhZ2UubmFtZSkgfHwgXCJVbmtub3duIFBhZ2VcIixcbiAgICB9KTtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZmluZEdyb3VwLCBhZGRBbm5vdGF0aW9uR3JvdXAsIHJlbW92ZUFubm90YXRpb25Hcm91cCwgdXBkYXRlQW5ub3RhdGlvbkdyb3VwLCBnZXRBbm5vdGF0aW9uR3JvdXBzLCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbm5vdGF0aW9uR3JvdXBTZXJ2aWNlXCI7XG5pbXBvcnQgeyBzZW5kUmVzcG9uc2UgfSBmcm9tIFwiLi4vdXRpbHMvbWVzc2FnZVV0aWxzXCI7XG5pbXBvcnQgeyBnZXRUb3BMZXZlbEZyYW1lLCBmaW5kR3JvdXBGcmFtZSB9IGZyb20gXCIuLi91dGlscy9ub2RlVXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUFubm90YXRpb25Hcm91cEZyYW1lIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25GcmFtZVNlcnZpY2VcIjtcbmltcG9ydCB7IGdldENhcmRXaWR0aCB9IGZyb20gXCIuLi91dGlscy9zaXplVXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzLCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2UsIHJlbW92ZUFubm90YXRpb25CYWRnZSwgfSBmcm9tIFwiLi4vY2FudmFzL2Fubm90YXRpb25FbGVtZW50c1wiO1xuaW1wb3J0IHsgdXBkYXRlR3JvdXBGcmFtZUNvbG9yLCB1cGRhdGVHcm91cEZyYW1lU2l6ZSwgfSBmcm9tIFwiLi4vdXRpbHMvZnJhbWVVdGlsc1wiO1xuaW1wb3J0IHsgdXBkYXRlQW5ub3RhdGlvbk9yZGVyIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbmltcG9ydCB7IHVwZGF0ZUFubm90YXRpb25JbmRpY2VzLCB1cGRhdGVCYWRnZUluZGljZXMsIH0gZnJvbSBcIi4uL3V0aWxzL3VwZGF0ZVV0aWxzXCI7XG4vKipcbiAqIENSRUFURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiUGxlYXNlIHNlbGVjdCBhIGxheWVyIG9uIHRoZSBjYW52YXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXRvcEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiVG9wLWxldmVsIGZyYW1lIG5vdCBmb3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3R3JvdXBJZCA9IHRvcEZyYW1lLmlkO1xuICAgICAgICBjb25zdCBuZXdHcm91cE5hbWUgPSB0b3BGcmFtZS5uYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZmluZEdyb3VwKG5ld0dyb3VwSWQpO1xuICAgICAgICAvLyBBTk5PVEFUSU9OX0dST1VQIOyDneyEsVxuICAgICAgICBsZXQgYW5ub3RhdGlvbkdyb3VwRnJhbWU7XG4gICAgICAgIGlmIChleGlzdGluZ0dyb3VwKSB7XG4gICAgICAgICAgICAvLyDquLDsobQg6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXBGcmFtZSA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBleGlzdGluZ0dyb3VwRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDsmIjsg4HsuZgg66q77ZWY6rKMIOq3uOujuSDtlITroIjsnoTsnbQg7JeG64uk66m0IOyDiOuhnCDsg53shLFcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoZXhpc3RpbmdHcm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkdyb3VwRnJhbWUodG9wRnJhbWUsIGNhcmRXaWR0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsg4gg7KO87ISdIOuplOuqqOumrCDqsJ3ssrQg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIOq3uOujueyXkCDso7zshJ0g7LaU6rCAICjrqZTrqqjrpqwpXG4gICAgICAgICAgICBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgZXhpc3RpbmdHcm91cC5jb2xvciwgZXhpc3RpbmdHcm91cC5zaXplLCBleGlzdGluZ0dyb3VwLmNhcmRXaWR0aCwgbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uoc2VsZWN0aW9uLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZXhpc3RpbmdHcm91cC5jb2xvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGdldEFubm90YXRpb25Hcm91cHMoKSxcbiAgICAgICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDwn4aVIOyDiCDqt7jro7kg7IOd7ISxXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aCgoX2EgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FyZFdpZHRoKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uR3JvdXBGcmFtZSh0b3BGcmFtZSwgY2FyZFdpZHRoKTtcbiAgICAgICAgLy8g6riw67O4IOyjvOyEnSDsg53shLFcbiAgICAgICAgY29uc3QgZGVmYXVsdEFubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKChfYiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZXNjcmlwdGlvbikgfHwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDqt7jro7nsl5AgcGx1Z2luRGF0YSDshKTsoJVcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJmcmFtZVwiKTtcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcImhhc19hbm5vdGF0aW9uX2dyb3VwXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcImdyb3VwX2lkXCIsIGRlZmF1bHRBbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgY29uc3QgbmV3R3JvdXAgPSBPYmplY3QuYXNzaWduKHsgaWQ6IG5ld0dyb3VwSWQsIG5hbWU6IG5ld0dyb3VwTmFtZSwgcmVsYXRlZFBhZ2U6IHtcbiAgICAgICAgICAgICAgICBpZDogZmlnbWEuY3VycmVudFBhZ2UuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZSxcbiAgICAgICAgICAgIH0sIGFubm90YXRpb25zOiBbZGVmYXVsdEFubm90YXRpb25dLCBvYnNvbGV0ZTogZmFsc2UsIGdyb3VwRnJhbWVJZDogYW5ub3RhdGlvbkdyb3VwRnJhbWUuaWQgfSwgbXNnLmNvbmZpZyk7XG4gICAgICAgIGFkZEFubm90YXRpb25Hcm91cChuZXdHcm91cCk7XG4gICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IHsgZnJhbWU6IGFubm90YXRpb25GcmFtZSB9ID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMoZGVmYXVsdEFubm90YXRpb24uaWQsIDEsIChfYyA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgKF9kID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNpemUsIChfZSA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYXJkV2lkdGgsIGRlZmF1bHRBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydhCDqt7jro7kg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgeWllbGQgY3JlYXRlQW5ub3RhdGlvbkJhZGdlKHNlbGVjdGlvbiwgMSwgZGVmYXVsdEFubm90YXRpb24uaWQsIChfZiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jb2xvcik7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBnZXRBbm5vdGF0aW9uR3JvdXBzKCksXG4gICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBERUxFVEVfQU5OT1RBVElPTl9HUk9VUCDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVEZWxldGVBbm5vdGF0aW9uR3JvdXAobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBUb0RlbGV0ZSA9IGZpbmRHcm91cChtc2cuZ3JvdXAuaWQpO1xuICAgICAgICBpZiAoIWdyb3VwVG9EZWxldGUpXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIGlmIChncm91cFRvRGVsZXRlLmdyb3VwRnJhbWVJZCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwVG9EZWxldGUuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgIGlmIChncm91cEZyYW1lICYmIGdyb3VwRnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g6re466O57JeQIOyGje2VnCDrqqjrk6Ag7KO87ISd7J2YIOuwsOyngCDsgq3soJxcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFubm90YXRpb24gb2YgZ3JvdXBUb0RlbGV0ZS5hbm5vdGF0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCByZW1vdmVBbm5vdGF0aW9uQmFkZ2UoYW5ub3RhdGlvbi5pZCwgbXNnLmdyb3VwLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7YOA7J207YuAIOy7qO2FjOydtOuEiCDssL7quLAg67CPIOyCreygnCAo66qF7Iuc7KCB7Jy866GcIOyymOumrClcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6EIOyCreygnFxuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g66mU66qo66as7JeQ7IScIOq3uOujuSDsoJzqsbBcbiAgICAgICAgcmVtb3ZlQW5ub3RhdGlvbkdyb3VwKG1zZy5ncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLyoqXG4gKiBVUERBVEVfQU5OT1RBVElPTl9HUk9VUCDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uR3JvdXAobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqwg7IOB7YOcIOyXheuNsOydtO2KuFxuICAgICAgICB1cGRhdGVBbm5vdGF0aW9uR3JvdXAobXNnLmdyb3VwSWQsIG1zZy5rZXksIG1zZy52YWx1ZSk7XG4gICAgICAgIC8vIEZpZ21hIOyalOyGjCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICBpZiAoZnJhbWVOb2RlKSB7XG4gICAgICAgICAgICBmcmFtZU5vZGUuc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6E64+EIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgIGlmIChncm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIC8vIOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBwYXJzZUludChtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZ3JvdXBGcmFtZSwgY29sb3JWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJzaXplXCIgfHwgbXNnLmtleSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVHcm91cEZyYW1lU2l6ZShncm91cEZyYW1lLCBtc2cua2V5LCBtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8qKlxuICogVVBEQVRFX0FOTk9UQVRJT05fT1JERVIg66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbk9yZGVyKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHsgZ3JvdXBJZCwgc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXggfSA9IG1zZztcbiAgICAgICAgLy8g66mU66qo66as7IOB7J2YIOyjvOyEnSDsiJzshJwg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSB1cGRhdGVBbm5vdGF0aW9uT3JkZXIoZ3JvdXBJZCwgc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXgpO1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICAgICAgLy8gRmlnbWEg7LqU67KE7IqkIOyDgeydmCDso7zshJ0g7Iic7IScIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSB8fCBncm91cEZyYW1lLnR5cGUgIT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuqqOuToCDsnpDsi50g7JqU7IaMIOykkSBhbm5vdGF0aW9uRnJhbWXrp4wg7ZWE7YSw66eBXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lcyA9IGdyb3VwRnJhbWUuY2hpbGRyZW4uZmlsdGVyKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIik7XG4gICAgICAgIC8vIOuplOuqqOumrOydmCDso7zshJ0g7Iic7ISc7JeQIOunnuqyjCBhbm5vdGF0aW9uRnJhbWXrk6TsnYQg7J6s7KCV66CsXG4gICAgICAgIGlmIChhbm5vdGF0aW9uRnJhbWVzLmxlbmd0aCA9PT0gZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDqsIEg7KO87ISd7JeQIO2VtOuLue2VmOuKlCDtlITroIjsnoQg7LC+7JWE7IScIOyInOyEnOuMgOuhnCDsnqzrsLDsuZhcbiAgICAgICAgICAgIGdyb3VwLmFubm90YXRpb25zLmZvckVhY2goKGFubm90YXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbk5vZGUgPSBhbm5vdGF0aW9uRnJhbWVzLmZpbmQoKGZyYW1lKSA9PiBmcmFtZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI64qUIO2VreyDgSDrp6gg7JyE7JeQIOycoOyngO2VmOqzoCwg6re4IOuLpOydjOu2gO2EsCDso7zshJ0g7ZSE66CI7J6EIOuwsOy5mFxuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleCArIDHsnYAgVGl0bGUg7Luo7YWM7J2064SIIOuLpOydjCDsnITsuZjrtoDthLAg7Iuc7J6R7ZWc64uk64qUIOydmOuvuFxuICAgICAgICAgICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKGluZGV4ICsgMSwgYW5ub3RhdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI6rCAIOyeiOuLpOuptCDtla3sg4Eg66eoIOychOuhnCDsnbTrj5lcbiAgICAgICAgICAgIGlmICh0aXRsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoMCwgdGl0bGVDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7Iic7ISc6rCAIOuwlOuAkCDtm4Qg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICAgICAgLy8g67Cw7KeAIOyduOuNseyKpOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGZpbmRHcm91cCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbm5vdGF0aW9uR3JvdXBTZXJ2aWNlXCI7XG5pbXBvcnQgeyBzZW5kUmVzcG9uc2UgfSBmcm9tIFwiLi4vdXRpbHMvbWVzc2FnZVV0aWxzXCI7XG5pbXBvcnQgeyBnZXRUb3BMZXZlbEZyYW1lIH0gZnJvbSBcIi4uL3V0aWxzL25vZGVVdGlsc1wiO1xuLyoqXG4gKiBNT1ZFX1RPX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3ZlVG9TZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y6Y7J207KeAIElE6rCAIOygnOqzteuQnCDqsr3smrAg66i87KCAIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXG4gICAgICAgIGlmIChtc2cucGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBpZiAocGFnZU5vZGUgJiYgcGFnZU5vZGUudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdyb3VwTm9kZeulvCDssL7snYAg7ZuEIO2VtOuLuSDrhbjrk5zsnZgg7LWc7IOB7JyEIO2UhOugiOyehOycvOuhnCDsnbTrj5lcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBOb2RlICYmIGdyb3VwTm9kZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgICAgICBjb25zdCB0b3BGcmFtZSA9IGdldFRvcExldmVsRnJhbWUoZ3JvdXBOb2RlKTtcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdG9wRnJhbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrAg6re466O5IOuFuOuTnOuhnCDsnbTrj5kgKOq4sOyhtCDrj5nsnpEpXG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChncm91cE5vZGUpIHtcbiAgICAgICAgICAgIC8vIO2UhOugiOyehOydtCDslYTri4wg64W465Oc7J24IOqyveyasOuPhCDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShncm91cE5vZGUpO1xuICAgICAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFt0b3BGcmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOydhCDssL7sp4Ag66q77ZWcIOqyveyasCDqt7jro7kg64W465Oc66GcIOydtOuPmSAo6riw7KG0IOuPmeyekSlcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2dyb3VwTm9kZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIE1PVkVfVE9fQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNb3ZlVG9Bbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIO2OmOydtOyngCBJROqwgCDsoJzqs7XrkJwg6rK97JqwIOuovOyggCDtlbTri7kg7Y6Y7J207KeA66GcIOydtOuPmVxuICAgICAgICBpZiAobXNnLnBhZ2VJZCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZU5vZGUgPSBmaWdtYS5yb290LmZpbmRPbmUoKG5vZGUpID0+IG5vZGUuaWQgPT09IG1zZy5wYWdlSWQpO1xuICAgICAgICAgICAgaWYgKHBhZ2VOb2RlICYmIHBhZ2VOb2RlLnR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBwYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDtlbTri7kg7KO87ISd7J2YIOuwsOyngCDssL7quLBcbiAgICAgICAgY29uc3QgYmFkZ2VzID0gZmlnbWEuY3VycmVudFBhZ2UuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgIGlmIChiYWRnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g67Cw7KeA66W8IOu3sO2PrO2KuOuhnCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhiYWRnZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g67Cw7KeA66W8IOywvuyngCDrqrvtlZwg6rK97JqwIOq3uOujuSDtlITroIjsnoTsnLzroZwg7J2064+ZICjrjIDssrQg7Ji17IWYKVxuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwTm9kZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZ3JvdXBOb2RlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICogQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlQ2hlY2tDdXJyZW50U2VsZWN0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5ncm91cElkKTtcbiAgICAgICAgY29uc3QgZXhpc3RzID0gISFncm91cE5vZGU7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgIHJlc3VsdDogZXhpc3RzLFxuICAgICAgICAgICAgZ3JvdXBJZDogbXNnLmdyb3VwSWQsXG4gICAgICAgICAgICBvYnNvbGV0ZTogIWV4aXN0cyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vKipcbiAqIEdFVF9GUkFNRV9JTUFHRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lSW1hZ2VzID0gW107XG4gICAgICAgIGNvbnN0IGdyb3VwcyA9IGZpbmRHcm91cChudWxsKTtcbiAgICAgICAgaWYgKCFncm91cHMgfHwgIUFycmF5LmlzQXJyYXkoZ3JvdXBzKSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwgeyBmcmFtZUltYWdlczogW10gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBncm91cCBvZiBncm91cHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwLmlkKTtcbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGUgJiYgZnJhbWVOb2RlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0geWllbGQgZnJhbWVOb2RlLmV4cG9ydEFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIlBOR1wiLFxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50OiB7IHR5cGU6IFwiU0NBTEVcIiwgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmcmFtZUltYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZ3JvdXAuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YTogYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke2ZpZ21hLmJhc2U2NEVuY29kZShpbWFnZSl9YCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhbWVJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwgeyBmcmFtZUltYWdlcyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHsgZnJhbWVJbWFnZXM6IFtdIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IsIEFubm90YXRpb25TaXplIH0gZnJvbSBcIi4vZW51bXNcIjtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRGb250U2l6ZXMgPSB7XG4gICAgW0Fubm90YXRpb25TaXplLlNNQUxMXToge1xuICAgICAgICBiYWRnZVNpemU6IDI0LFxuICAgICAgICBiYWRnZVRleHQ6IDE0LFxuICAgICAgICBkZXNyaXB0aW9uOiAxNCxcbiAgICAgICAgZ2FwOiA4LFxuICAgIH0sXG4gICAgW0Fubm90YXRpb25TaXplLk1FRElVTV06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAyOCxcbiAgICAgICAgYmFkZ2VUZXh0OiAxOCxcbiAgICAgICAgZGVzcmlwdGlvbjogMTgsXG4gICAgICAgIGdhcDogMTAsXG4gICAgfSxcbiAgICBbQW5ub3RhdGlvblNpemUuTEFSR0VdOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMzIsXG4gICAgICAgIGJhZGdlVGV4dDogMjEsXG4gICAgICAgIGRlc3JpcHRpb246IDIxLFxuICAgICAgICBnYXA6IDEyLFxuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbG9ycyA9IHtcbiAgICBbQW5ub3RhdGlvbkNvbG9yLlJFRF06IFwiYmctc3ViUmVkLTAxXCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTFVFXTogXCJiZy1wcmltYXJ5XCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTEFDS106IFwiYmctYmxhY2tcIixcbn07XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkQ2FyZFdpZHRoID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IDMyMCxcbiAgICBbQW5ub3RhdGlvblNpemUuTUVESVVNXTogNDAwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5MQVJHRV06IDQ4MCxcbn07XG4iLCJleHBvcnQgdmFyIEFubm90YXRpb25TaXplO1xuKGZ1bmN0aW9uIChBbm5vdGF0aW9uU2l6ZSkge1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIlNNQUxMXCJdID0gMCldID0gXCJTTUFMTFwiO1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIk1FRElVTVwiXSA9IDEpXSA9IFwiTUVESVVNXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTEFSR0VcIl0gPSAyKV0gPSBcIkxBUkdFXCI7XG59KShBbm5vdGF0aW9uU2l6ZSB8fCAoQW5ub3RhdGlvblNpemUgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5vdGF0aW9uQ29sb3I7XG4oZnVuY3Rpb24gKEFubm90YXRpb25Db2xvcikge1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiUkVEXCJdID0gMCldID0gXCJSRURcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIkJMVUVcIl0gPSAxKV0gPSBcIkJMVUVcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIkJMQUNLXCJdID0gMildID0gXCJCTEFDS1wiO1xufSkoQW5ub3RhdGlvbkNvbG9yIHx8IChBbm5vdGF0aW9uQ29sb3IgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5ub3RhdGlvbkNhcmRXaWR0aDtcbihmdW5jdGlvbiAoQW5ubm90YXRpb25DYXJkV2lkdGgpIHtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJTTUFMTFwiXSA9IDApXSA9IFwiU01BTExcIjtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJNRURJVU1cIl0gPSAxKV0gPSBcIk1FRElVTVwiO1xuICAgIEFubm5vdGF0aW9uQ2FyZFdpZHRoWyhBbm5ub3RhdGlvbkNhcmRXaWR0aFtcIkxBUkdFXCJdID0gMildID0gXCJMQVJHRVwiO1xufSkoQW5ubm90YXRpb25DYXJkV2lkdGggfHwgKEFubm5vdGF0aW9uQ2FyZFdpZHRoID0ge30pKTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q2FyZFdpZHRoIH0gZnJvbSBcIi4uL3V0aWxzL3NpemVVdGlsc1wiO1xuaW1wb3J0IHsgZmluZEdyb3VwRnJhbWUgfSBmcm9tIFwiLi4vdXRpbHMvbm9kZVV0aWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVUaXRsZUdyb3VwIH0gZnJvbSBcIi4uL2NhbnZhcy9hbm5vdGF0aW9uRWxlbWVudHNcIjtcbi8qKlxuICog6re466O5IO2UhOugiOyehOydhCDssL7qsbDrgpgg7IOd7ISx7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZE9yQ3JlYXRlR3JvdXBGcmFtZShncm91cCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIDEuIOq4sOyhtCDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgLy8gMi4g7LC+7KeAIOuqu+2VnCDqsr3smrAg7IOI66GcIOyDneyEsVxuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKCF0b3BGcmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIiwgZ3JvdXAuaWQpO1xuICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChncm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgICAgICAvLyDrtoDrqqgg7ZSE66CI7J6E7J2YIOyasOy4oSDsg4Hri6jsl5DshJwg7JW96rCEIOyViOyqveycvOuhnCDsnITsuZhcbiAgICAgICAgICAgIGdyb3VwRnJhbWUueCA9IHRvcEZyYW1lLndpZHRoIC0gY2FyZFdpZHRoIC0gMjA7IC8vIOyasOy4oeyXkOyEnCDsubTrk5wg64SI67mE66eM7YG8IOyViOyqveycvOuhnFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS55ID0gMjA7IC8vIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWE656Y66GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglSAtIOyEuOuhnCDrsLDsuZhcbiAgICAgICAgICAgIGdyb3VwRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBpZiAodG9wRnJhbWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDrtoDrqqjqsIAg7JeG7Jy866m0IO2YhOyerCDtjpjsnbTsp4Dsl5Ag7LaU6rCAXG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDqt7jro7kg7KCV67O0IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZ3JvdXAuZ3JvdXBGcmFtZUlkID0gZ3JvdXBGcmFtZS5pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZTtcbiAgICB9KTtcbn1cbi8qKlxuICog7IOIIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7J2EIOyDneyEse2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25Hcm91cEZyYW1lKHRvcEZyYW1lLCBjYXJkV2lkdGgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCB0b3BGcmFtZS5pZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDrsI8g7JyE7LmYIOyEpOyglSAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oSDsg4Hri6jsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUueSA9IDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCAzMDApO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maWxscyA9IFtdOyAvLyDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAvLyBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nVG9wID0gMTA7XG4gICAgICAgIC8vIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMDtcbiAgICAgICAgLy8gYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgLy8gYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0ID0gMTA7XG4gICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgLy8gVGl0bGUg6re466O5IOyDneyEsSDrsI8g7LaU6rCAXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC1cbiAgICAgICAgICAgIChhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIGNvbnN0IHRpdGxlR3JvdXAgPSB5aWVsZCBjcmVhdGVUaXRsZUdyb3VwKHRvcEZyYW1lLmlkLCBhdmFpbGFibGVXaWR0aCwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVHcm91cCk7XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uR3JvdXBGcmFtZTtcbiAgICB9KTtcbn1cbiIsIi8vIOyghOyXrSDrqZTrqqjrpqwg7IOB7YOcIOq0gOumrFxubGV0IGFubm90YXRpb25Hcm91cHMgPSBbXTtcbi8qKlxuICog6re466O5IOywvuq4sFxuICogQHBhcmFtIGdyb3VwSWQg7LC+7J2EIOq3uOujueydmCBJRFxuICogQHJldHVybnMg7LC+7J2AIOq3uOujuSDrmJDripQgdW5kZWZpbmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kR3JvdXAoZ3JvdXBJZCkge1xuICAgIHJldHVybiBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IGdyb3VwSWQpO1xufVxuLyoqXG4gKiDso7zshJ0g7LC+6riwXG4gKiBAcGFyYW0gZ3JvdXBJZCDqt7jro7kgSURcbiAqIEBwYXJhbSBhbm5vdGF0aW9uSWQg7KO87ISdIElEXG4gKiBAcmV0dXJucyDssL7snYAg7KO87ISdIOuYkOuKlCBudWxsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZ3JvdXAuYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbn1cbi8qKlxuICog7KO87ISdIOy2lOqwgFxuICogQHBhcmFtIGdyb3VwSWQg6re466O5IElEXG4gKiBAcGFyYW0gYW5ub3RhdGlvbiDstpTqsIDtlaAg7KO87ISdIOqwneyytFxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGdyb3VwLmFubm90YXRpb25zLnB1c2goYW5ub3RhdGlvbik7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIOyjvOyEnSDsgq3soJxcbiAqIEBwYXJhbSBncm91cElkIOq3uOujuSBJRFxuICogQHBhcmFtIGFubm90YXRpb25JZCDsgq3soJztlaAg7KO87ISdIElEXG4gKiBAcmV0dXJucyDshLHqs7Ug7Jes67aAXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uKGdyb3VwSWQsIGFubm90YXRpb25JZCkge1xuICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBpbml0aWFsTGVuZ3RoID0gZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoO1xuICAgIGdyb3VwLmFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnMuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBhbm5vdGF0aW9uSWQpO1xuICAgIHJldHVybiBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGggPCBpbml0aWFsTGVuZ3RoO1xufVxuLyoqXG4gKiDso7zshJ0g7JeF642w7J207Yq4XG4gKiBAcGFyYW0gZ3JvdXBJZCDqt7jro7kgSURcbiAqIEBwYXJhbSBhbm5vdGF0aW9uSWQg7JeF642w7J207Yq47ZWgIOyjvOyEnSBJRFxuICogQHBhcmFtIGtleSDsl4XrjbDsnbTtirjtlaAg7IaN7ISxIO2CpFxuICogQHBhcmFtIHZhbHVlIOyXheuNsOydtO2KuO2VoCDqsJJcbiAqIEByZXR1cm5zIOyEseqztSDsl6zrtoBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFubm90YXRpb24oZ3JvdXBJZCwgYW5ub3RhdGlvbklkLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgYW5ub3RhdGlvbiA9IGZpbmRBbm5vdGF0aW9uKGdyb3VwSWQsIGFubm90YXRpb25JZCk7XG4gICAgaWYgKCFhbm5vdGF0aW9uKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgYW5ub3RhdGlvbltrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIOyjvOyEnSDqt7jro7kg7LaU6rCAXG4gKiBAcGFyYW0gZ3JvdXAg7LaU6rCA7ZWgIOq3uOujuSDqsJ3ssrRcbiAqIEByZXR1cm5zIOyEseqztSDsl6zrtoBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZEFubm90YXRpb25Hcm91cChncm91cCkge1xuICAgIGlmICghZ3JvdXAgfHwgIWdyb3VwLmlkKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8g7J2066+4IOyhtOyerO2VmOuKlCDqt7jro7nsnbjsp4Ag7ZmV7J24XG4gICAgY29uc3QgZXhpc3RpbmdHcm91cCA9IGZpbmRHcm91cChncm91cC5pZCk7XG4gICAgaWYgKGV4aXN0aW5nR3JvdXApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICBhbm5vdGF0aW9uR3JvdXBzLnB1c2goZ3JvdXApO1xuICAgIHJldHVybiB0cnVlO1xufVxuLyoqXG4gKiDso7zshJ0g6re466O5IOyCreygnFxuICogQHBhcmFtIGdyb3VwSWQg7IKt7KCc7ZWgIOq3uOujuSBJRFxuICogQHJldHVybnMg7ISx6rO1IOyXrOu2gFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQW5ub3RhdGlvbkdyb3VwKGdyb3VwSWQpIHtcbiAgICBjb25zdCBpbml0aWFsTGVuZ3RoID0gYW5ub3RhdGlvbkdyb3Vwcy5sZW5ndGg7XG4gICAgYW5ub3RhdGlvbkdyb3VwcyA9IGFubm90YXRpb25Hcm91cHMuZmlsdGVyKChnKSA9PiBnLmlkICE9PSBncm91cElkKTtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkdyb3Vwcy5sZW5ndGggPCBpbml0aWFsTGVuZ3RoO1xufVxuLyoqXG4gKiDso7zshJ0g6re466O5IOyXheuNsOydtO2KuFxuICogQHBhcmFtIGdyb3VwSWQg7JeF642w7J207Yq47ZWgIOq3uOujuSBJRFxuICogQHBhcmFtIGtleSDsl4XrjbDsnbTtirjtlaAg7IaN7ISxIO2CpFxuICogQHBhcmFtIHZhbHVlIOyXheuNsOydtO2KuO2VoCDqsJJcbiAqIEByZXR1cm5zIOyEseqztSDsl6zrtoBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFubm90YXRpb25Hcm91cChncm91cElkLCBrZXksIHZhbHVlKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIGdyb3VwW2tleV0gPSB2YWx1ZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICog7KO87ISdIOq3uOujuSDstIjquLDtmZRcbiAqIEBwYXJhbSBncm91cHMg7LSI6riwIOq3uOujuSDrsLDsl7RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRBbm5vdGF0aW9uR3JvdXBzKGdyb3VwcyA9IFtdKSB7XG4gICAgYW5ub3RhdGlvbkdyb3VwcyA9IGdyb3Vwcztcbn1cbi8qKlxuICog66qo65OgIOyjvOyEnSDqt7jro7kg6rCA7KC47Jik6riwXG4gKiBAcmV0dXJucyDso7zshJ0g6re466O5IOuwsOyXtFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QW5ub3RhdGlvbkdyb3VwcygpIHtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkdyb3Vwcztcbn1cbi8qKlxuICog7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAqIEBwYXJhbSBncm91cElkIOq3uOujuSBJRFxuICogQHBhcmFtIHNvdXJjZUluZGV4IOybkOuzuCDsnbjrjbHsiqRcbiAqIEBwYXJhbSBkZXN0aW5hdGlvbkluZGV4IOuqqeyggeyngCDsnbjrjbHsiqRcbiAqIEByZXR1cm5zIOyEseqztSDsl6zrtoBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUFubm90YXRpb25PcmRlcihncm91cElkLCBzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCkge1xuICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAvLyDsnbjrjbHsiqQg67KU7JyEIOqygOyCrFxuICAgIGlmIChzb3VyY2VJbmRleCA8IDEgfHxcbiAgICAgICAgc291cmNlSW5kZXggPiBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGggfHxcbiAgICAgICAgZGVzdGluYXRpb25JbmRleCA8IDEgfHxcbiAgICAgICAgZGVzdGluYXRpb25JbmRleCA+IGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIOuplOuqqOumrOyDgeydmCDso7zshJ0g7Iic7IScIOyXheuNsOydtO2KuFxuICAgIGNvbnN0IGFubm90YXRpb25zID0gWy4uLmdyb3VwLmFubm90YXRpb25zXTtcbiAgICBjb25zdCBbbW92ZWRBbm5vdGF0aW9uXSA9IGFubm90YXRpb25zLnNwbGljZShzb3VyY2VJbmRleCAtIDEsIDEpO1xuICAgIGFubm90YXRpb25zLnNwbGljZShkZXN0aW5hdGlvbkluZGV4IC0gMSwgMCwgbW92ZWRBbm5vdGF0aW9uKTtcbiAgICBncm91cC5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgQW5ub3RhdGlvbkNvbG9yIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZW51bXNcIjtcbi8qKlxuICog7IOJ7IOBIOqwkuyXkCDrlLDrnbwgUkdCIOqwkuydhCDrsJjtmZjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSkge1xuICAgIHN3aXRjaCAoY29sb3JWYWx1ZSkge1xuICAgICAgICBjYXNlIEFubm90YXRpb25Db2xvci5SRUQ6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjkzLCBnOiAwLjM3LCBiOiAwLjM3IH07IC8vIFJFRFxuICAgICAgICBjYXNlIEFubm90YXRpb25Db2xvci5CTFVFOlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMC4wLCBnOiAwLjEsIGI6IDEuMCB9OyAvLyBCTFVFXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLkJMQUNLOlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCB9OyAvLyBCTEFDS1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMC4wLCBnOiAwLjEsIGI6IDEuMCB9OyAvLyDquLDrs7jqsJI6IEJMVUVcbiAgICB9XG59XG4vKipcbiAqIO2XpeyKpCDsg4nsg4Eg7L2U65Oc66W8IFJHQuuhnCDrs4DtmZjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB9XG4gICAgICAgIDogbnVsbDtcbn1cbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgZ2V0Q29sb3JCeVZhbHVlIH0gZnJvbSBcIi4vY29sb3JVdGlsc1wiO1xuaW1wb3J0IHsgZ2V0QmFkZ2VTaXplQnlWYWx1ZSwgZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUsIGdldEZvbnRTaXplQnlWYWx1ZSwgZ2V0Q2FyZFdpZHRoLCB9IGZyb20gXCIuL3NpemVVdGlsc1wiO1xuaW1wb3J0IHsgZmluZEdyb3VwIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Fubm90YXRpb25Hcm91cFNlcnZpY2VcIjtcbi8qKlxuICog6re466O5IO2UhOugiOyehCDsg4nsg4HsnYQg7JeF642w7J207Yq47ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlR3JvdXBGcmFtZUNvbG9yKGZyYW1lLCBjb2xvclZhbHVlKSB7XG4gICAgY29uc3QgaGVhZGVyQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSk7XG4gICAgLy8g7ZSE66CI7J6EIOyekOyytCDsg4nsg4Eg7JeF642w7J207Yq4IC0g67Cw6rK97IOJIOygnOqxsFxuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgLy8gVGl0bGUg6re466O5IOyymOumrFxuICAgIGNvbnN0IHRpdGxlR3JvdXAgPSBmcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICBpZiAodGl0bGVHcm91cCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag6re466O5IOuwsOqyveyDiSDsnKDsp4BcbiAgICAgICAgdGl0bGVHcm91cC5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8g66qo65OgIOyekOyLnSDso7zshJ0g7JqU7IaM65OkIOyymOumrFxuICAgIGZyYW1lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydmCDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICBjaGlsZC5maWxscyA9IFtdO1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDrsLDqsr3sg4kg7Jyg7KeAXG4gICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmZpbGxzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDqt7jro7kgSUQg6rCA7KC47Jik6riwIChwYXJlbnRfZnJhbWVfaWTsl5Ag7KCA7J6l65CY7Ja0IOyeiOydjClcbiAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICBpZiAoIXBhcmVudEZyYW1lSWQpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyDtlbTri7kg6re466O57J2YIOuqqOuToCDso7zshJ0gSUQg6rCA7KC47Jik6riwXG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAocGFyZW50RnJhbWVJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBncm91cC5hbm5vdGF0aW9ucy5tYXAoKGEpID0+IGEuaWQpO1xuICAgIC8vIO2OmOydtOyngOyXkOyEnCDtlbTri7kg6re466O57JeQIOyGje2VnCDrqqjrk6Ag67Cw7KeAIOywvuq4sFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlXG4gICAgICAgIC5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSkpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4ge1xuICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7IOJ7IOB66eMIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgYmFkZ2UuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBoZWFkZXJDb2xvciB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKiDqt7jro7kg7ZSE66CI7J6EIO2BrOq4sOulvCDsl4XrjbDsnbTtirjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVHcm91cEZyYW1lU2l6ZShmcmFtZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIgPyBnZXRDYXJkV2lkdGgodmFsdWUpIDogZ2V0Q2FyZFdpZHRoKCk7XG4gICAgICAgIC8vIO2UhOugiOyehOydtCDsho3tlZwg67aA66qoIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgcGFyZW50RnJhbWVJZCA9IGZyYW1lLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIik7XG4gICAgICAgIGlmIChwYXJlbnRGcmFtZUlkICYmIHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKHBhcmVudEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudEZyYW1lICYmIHBhcmVudEZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIC8vIHgg7KKM7ZGcIOyXheuNsOydtO2KuCAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oeyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgICAgICAgICAgZnJhbWUueCA9IHBhcmVudEZyYW1lLndpZHRoIC0gY2FyZFdpZHRoIC0gMjA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g64SI67mE7JmAIOuGkuydtCDshKTsoJUgKOuGkuydtOuKlCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJUpXG4gICAgICAgIGZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgZnJhbWUucmVzaXplKGNhcmRXaWR0aCwgZnJhbWUuaGVpZ2h0KTtcbiAgICAgICAgLy8gVGl0bGUg6re466O5IO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IGZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICBpZiAodGl0bGVHcm91cCkge1xuICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLSAoZnJhbWUucGFkZGluZ0xlZnQgKyBmcmFtZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgLy8gVGl0bGUg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgIHRpdGxlR3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgIHRpdGxlR3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgdGl0bGVHcm91cC5yZXNpemUoYXZhaWxhYmxlV2lkdGgsIHRpdGxlR3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgIC8vIERlc2NyaXB0aW9uIO2FjeyKpO2KuCDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbk5vZGUgPSB0aXRsZUdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKGRlc2NyaXB0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTm9kZS5yZXNpemUoYXZhaWxhYmxlV2lkdGggLSAodGl0bGVHcm91cC5wYWRkaW5nTGVmdCArIHRpdGxlR3JvdXAucGFkZGluZ1JpZ2h0KSwgMzYpO1xuICAgICAgICAgICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4IChzaXplIOyGjeyEseydtCDrs4Dqsr3rkJwg6rK97JqwKVxuICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJzaXplXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IOuhnOuTnFxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBnZXRGb250U2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g7IKs7J207KaIIOqwkuyXkCDrlLDrpbgg7Iqk7YOA7J28IOuzgOqyvVxuICAgICAgICBpZiAocHJvcGVydHkgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgICAgICAvLyDtj7Dtirgg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY29uc3QgZm9udFNpemUgPSBnZXRGb250U2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgLy8g66qo65OgIO2FjeyKpO2KuCDrhbjrk5zsl5Ag64yA7ZW0IO2PsO2KuCDroZzrk5xcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgICAgICAgICAvLyDqt7jro7kgSUQg6rCA7KC47Jik6riwXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRGcmFtZUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAocGFyZW50RnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDqt7jro7nsnZgg66qo65OgIOyjvOyEnSBJRCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IGdyb3VwLmFubm90YXRpb25zLm1hcCgoYSkgPT4gYS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2OmOydtOyngOyXkOyEnCDtlbTri7kg6re466O57JeQIOyGje2VnCDrqqjrk6Ag67Cw7KeAIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWRnZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCBIOuwsOyngCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWRnZSBvZiBiYWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWRnZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDrsLDsp4Ag7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhZGdlU2l6ZSA9IGdldEJhZGdlU2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLnJlc2l6ZShiYWRnZVNpemUsIGJhZGdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g67Cw7KeAIOuCtOu2gCDthY3siqTtirgg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gYmFkZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLmZvbnRTaXplID0gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOuqqOuToCDsnpDsi50g7JqU7IaM7J2YIO2BrOq4sOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZnJhbWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAvLyDrhIjruYQg6rOg7KCVLCDrhpLsnbQg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShjYXJkV2lkdGggLSAoZnJhbWUucGFkZGluZ0xlZnQgKyBmcmFtZS5wYWRkaW5nUmlnaHQpLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SI7JmAIOuCtOyaqSDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyICYmIGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IKs7JqpIOqwgOuKpe2VnCDrhIjruYQg6rOE7IKwIChhbm5vdGF0aW9uRnJhbWUg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQXZhaWxhYmxlV2lkdGggPSBjaGlsZC53aWR0aCAtIChjaGlsZC5wYWRkaW5nTGVmdCArIGNoaWxkLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SI7JmAIOuCtOyaqSDqt7jro7kg64SI67mEIOu5hOycqCDqs4TsgrAgKDEwOjkwKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhXaWR0aCA9IE1hdGgucm91bmQoZnJhbWVBdmFpbGFibGVXaWR0aCAqIDAuMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSBmcmFtZUF2YWlsYWJsZVdpZHRoIC0gaW5kZXhXaWR0aDsgLy8g7KCV7ZmV7ZWcIOqzhOyCsOydhCDsnITtlbQg64KY66i47KeAIOuEiOu5hCDtlaDri7lcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkZJTExcIjsgLy8g7KSR7JqUOiDtla3sg4EgRklMTOuhnCDshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLnJlc2l6ZShpbmRleFdpZHRoLCBpbmRleENvbnRhaW5lci5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g64K07JqpIOq3uOujuSDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRHcm93ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuCtOu2gCDsmpTshozrk6Qg7J6s7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBpbmRleENvbnRhaW5lci5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ISk66qFIO2FjeyKpO2KuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDquLDrs7gg7YWN7Iqk7Yq4IO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSUxMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsiJjsoJUg7ZuEIOugiOydtOyVhOybgyDsnqzqs4TsgrDsnYQg7JyE7ZWcIO2KuOumrSDsoIHsmqlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsV2lkdGggPSBjaGlsZC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShvcmlnaW5hbFdpZHRoICsgMSwgY2hpbGQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShvcmlnaW5hbFdpZHRoLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNhcmRXaWR0aCDrs4Dqsr0g7Iuc7JeQ64+EIOuqqOuToCDso7zshJ0g7ZSE66CI7J6E7J2YIOugiOydtOyVhOybgyDsho3shLEg7J6s7ISk7KCVXG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshozsnZgg7YGs6riw64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJUsIOuGkuydtCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCksIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIgJiYgY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsgqzsmqkg6rCA64ql7ZWcIOuEiOu5hCDqs4TsgrAgKGFubm90YXRpb25GcmFtZSDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVBdmFpbGFibGVXaWR0aCA9IGNoaWxkLndpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDrhIjruYQg67mE7JyoIOqzhOyCsCAoMjA6ODApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZUF2YWlsYWJsZVdpZHRoICogMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGZyYW1lQXZhaWxhYmxlV2lkdGggLSBpbmRleFdpZHRoOyAvLyDsoJXtmZXtlZwg6rOE7IKw7J2EIOychO2VtCDrgpjrqLjsp4Ag64SI67mEIO2VoOuLuVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiRklMTFwiOyAvLyDspJHsmpQ6IO2VreyDgSBGSUxM66GcIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dEdyb3cgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSUxMXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IiY7KCVIO2bhCDroIjsnbTslYTsm4Mg7J6s6rOE7IKw7J2EIOychO2VnCDtirjrpq0g7KCB7JqpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbFdpZHRoID0gY2hpbGQud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUob3JpZ2luYWxXaWR0aCArIDEsIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUob3JpZ2luYWxXaWR0aCwgY2hpbGQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBVSeyXkOqyjCDsnZHri7XsnYQg7KCE7Iah7ZWY64qUIOycoO2LuOumrO2LsCDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRSZXNwb25zZSh0eXBlLCByZXN1bHQsIGRhdGEgPSB7fSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oeyByZXN1bHQgfSwgZGF0YSk7XG4gICAgaWYgKCFyZXN1bHQgJiYgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2UgfSk7XG59XG4iLCIvKipcbiAqIOuFuOuTnOydmCDstZzsg4HsnIQgRnJhbWXsnYQg7LC+64qUIOycoO2LuOumrO2LsCDtlajsiJhcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRvcExldmVsRnJhbWUobm9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50LnBhcmVudCAmJiBjdXJyZW50LnBhcmVudC50eXBlICE9PSBcIlBBR0VcIikge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50LnR5cGUpID09PSBcIkZSQU1FXCIgPyBjdXJyZW50IDogbnVsbDtcbn1cbi8qKlxuICog6re466O5IO2UhOugiOyehCDssL7quLAg7Ya17ZWpIO2VqOyImFxuICovXG5leHBvcnQgZnVuY3Rpb24gZmluZEdyb3VwRnJhbWUoZ3JvdXBJZCwgZ3JvdXBGcmFtZUlkKSB7XG4gICAgLy8gMS4gZ3JvdXBGcmFtZUlk66GcIOyngeygkSDssL7quLBcbiAgICBpZiAoZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGZyYW1lICYmIGZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIilcbiAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gICAgLy8gMi4g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICBjb25zdCB0b3BGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwSWQpO1xuICAgIGlmICghdG9wRnJhbWUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vIDMuIHRvcEZyYW1l7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBjb25zdCBncm91cEZyYW1lSW5DaGlsZHJlbiA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgaWYgKGdyb3VwRnJhbWVJbkNoaWxkcmVuKVxuICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZUluQ2hpbGRyZW47XG4gICAgLy8gNC4g67aA66qo7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBpZiAodG9wRnJhbWUucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWVJblBhcmVudCA9IHRvcEZyYW1lLnBhcmVudC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIikgPT09IGdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBGcmFtZUluUGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwRnJhbWVJblBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCJpbXBvcnQgeyBBbm5vdGF0aW9uU2l6ZSwgQW5ubm90YXRpb25DYXJkV2lkdGggfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9lbnVtc1wiO1xuaW1wb3J0IHsgc3VwcG9ydGVkRm9udFNpemVzLCBzdXBwb3J0ZWRDYXJkV2lkdGggfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9jb25zdFwiO1xuLyoqXG4gKiDsubTrk5wg64SI67mEIOqwkuyXkCDrlLDrpbgg7Iuk7KCcIOuEiOu5hOulvCDrsJjtmZjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJkV2lkdGhCeVZhbHVlKHdpZHRoVmFsdWUpIHtcbiAgICBpZiAod2lkdGhWYWx1ZSA+PSAwICYmXG4gICAgICAgIHdpZHRoVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5ub3RhdGlvbkNhcmRXaWR0aCkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkQ2FyZFdpZHRoW3dpZHRoVmFsdWVdO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkQ2FyZFdpZHRoW0Fubm5vdGF0aW9uQ2FyZFdpZHRoLlNNQUxMXTsgLy8g6riw67O46rCSXG59XG4vKipcbiAqIOy5tOuTnCDrhIjruYTrpbwg6rOE7IKw7ZWp64uI64ukLiAo7J6F66Cl6rCSIOuYkOuKlCDquLDrs7jqsJIg7IKs7JqpKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKSB7XG4gICAgcmV0dXJuIGNhcmRXaWR0aFZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBnZXRDYXJkV2lkdGhCeVZhbHVlKGNhcmRXaWR0aFZhbHVlKVxuICAgICAgICA6IGdldENhcmRXaWR0aEJ5VmFsdWUoQW5ubm90YXRpb25DYXJkV2lkdGguU01BTEwpO1xufVxuLyoqXG4gKiDtj7Dtirgg7YGs6riwIOqwkuyXkCDrlLDrpbgg7Iuk7KCcIO2PsO2KuCDtgazquLDrpbwg67CY7ZmY7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rm9udFNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uZGVzcmlwdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uZGVzcmlwdGlvbjsgLy8g6riw67O46rCSXG59XG4vKipcbiAqIOuwsOyngCDtgazquLAg6rCS7JeQIOuUsOuluCDsi6TsoJwg67Cw7KeAIO2BrOq4sOulvCDrsJjtmZjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWRnZVNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uYmFkZ2VTaXplO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5iYWRnZVNpemU7IC8vIOq4sOuzuOqwklxufVxuLyoqXG4gKiDrsLDsp4Ag7YWN7Iqk7Yq4IO2BrOq4sCDqsJLsl5Ag65Sw66W4IOyLpOygnCDthY3siqTtirgg7YGs6riw66W8IOuwmO2ZmO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJhZGdlVGV4dFNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uYmFkZ2VUZXh0O1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5iYWRnZVRleHQ7IC8vIOq4sOuzuOqwklxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBoZXhUb1JnYiB9IGZyb20gXCIuL2NvbG9yVXRpbHNcIjtcbi8qKlxuICog7ISk66qFIOqwneyytOuhnOu2gO2EsCDsnbzrsJgg7YWN7Iqk7Yq466W8IOy2lOy2nO2VqeuLiOuLpC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhZGVzY3JpcHRpb24uY29udGVudClcbiAgICAgICAgcmV0dXJuIFwiTmV3IEFubm90YXRpb25cIjtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgZnVuY3Rpb24gZXh0cmFjdFRleHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IG5vZGUudGV4dCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaChleHRyYWN0VGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6rCBIOyDgeychCDroIjrsqggY29udGVudCDtla3rqqnsnYQg7LKY66as7ZWY6rOgIOykhOuwlOq/iCDstpTqsIBcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbi5jb250ZW50KSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIC8vIOuFuOuTnCDrgrTsmqkg7LaU7LacXG4gICAgICAgICAgICBpZiAoY29udGVudE5vZGUudHlwZSA9PT0gXCJidWxsZXRMaXN0XCIgfHxcbiAgICAgICAgICAgICAgICBjb250ZW50Tm9kZS50eXBlID09PSBcInBhcmFncmFwaFwiKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdFRleHQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g64uk66W4IO2DgOyeheydmCDrhbjrk5zrj4Qg7LKY66asXG4gICAgICAgICAgICAgICAgZXh0cmFjdFRleHQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6rCBIOy7qO2FkOy4oCDtla3rqqkg65Kk7JeQIOykhOuwlOq/iCDstpTqsIAo66eI7KeA66eJIO2VreuqqSDsoJzsmbgpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBkZXNjcmlwdGlvbi5jb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC50cmltKCkgfHwgXCJOZXcgQW5ub3RhdGlvblwiO1xufVxuLyoqXG4gKiDrpqzsuZgg7YWN7Iqk7Yq4IO2YleyLnSDsoJXrs7Trpbwg7LaU7Lac7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdEZvcm1hdHRpbmdSYW5nZXMoZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgY29uc3QgcmFuZ2VzID0gW107XG4gICAgZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSwgcGFyZW50TWFya3MgPSBbXSwgaXNMaXN0SXRlbSA9IGZhbHNlKSB7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7LKY66asIC0g64W465Oc7JeQIOyngeygkSDsnojripQg66eI7YGs66eMIOyggeyaqVxuICAgICAgICBpZiAobm9kZS50ZXh0KSB7XG4gICAgICAgICAgICAvLyDtmITsnqwg64W465Oc7J2YIOuniO2BrOunjCDsgqzsmqkgKOu2gOuqqCDrp4jtgawg66y07IucKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudE1hcmtzID0gbm9kZS5tYXJrcyB8fCBbXTtcbiAgICAgICAgICAgIC8vIOuniO2BrCDrtoTshJ1cbiAgICAgICAgICAgIGNvbnN0IGlzQm9sZCA9IGN1cnJlbnRNYXJrcy5zb21lKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwiYm9sZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVW5kZXJsaW5lID0gY3VycmVudE1hcmtzLnNvbWUoKG1hcmspID0+IG1hcmsudHlwZSA9PT0gXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICBjb25zdCBjb2xvck1hcmsgPSBjdXJyZW50TWFya3MuZmluZCgobWFyaykgPT4gbWFyay50eXBlID09PSBcInRleHRTdHlsZVwiICYmIG1hcmsuYXR0cnMgJiYgbWFyay5hdHRycy5jb2xvcik7XG4gICAgICAgICAgICAvLyDthY3siqTtirgg67CPIOyEnOyLnSDsoJXrs7Qg7KCA7J6lXG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbm9kZS50ZXh0LFxuICAgICAgICAgICAgICAgIGlzQm9sZCxcbiAgICAgICAgICAgICAgICBpc1VuZGVybGluZSxcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6IGlzQm9sZCA/IFwiQm9sZFwiIDogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yTWFyayA/IGNvbG9yTWFyay5hdHRycy5jb2xvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyDthY3siqTtirgg64W465Oc64qUIOyekOyLneydtCDsl4bsnLzrr4DroZwg7Jes6riw7IScIOyiheujjFxuICAgICAgICB9XG4gICAgICAgIC8vIGJ1bGxldExpc3Qg7LKY66asXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiYnVsbGV0TGlzdFwiICYmXG4gICAgICAgICAgICBub2RlLmNvbnRlbnQgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgLy8gYnVsbGV0TGlzdOydmCDqsIEgbGlzdEl0ZW0g7LKY66asXG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaCgobGlzdEl0ZW1Ob2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICfigKIgJyDstpTqsIDtlZjsl6wg67aI66a/IO2RnOyLnFxuICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLigKIgXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzQm9sZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzVW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCwgLy8g6riw67O4IOyDieyDgSDsgqzsmqlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBsaXN0SXRlbSDrgrTsmqkg7LKY66asXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RJdGVtTm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobGlzdEl0ZW1Ob2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtTm9kZS5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzTm9kZShjb250ZW50Tm9kZSwgW10sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g66eI7KeA66eJIGxpc3RJdGVt7J20IOyVhOuLiOuptCDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbm9kZS5jb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld0xpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOydvOuwmCDsnpDsi50g64W465OcIOyymOumrFxuICAgICAgICBpZiAobm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g7ZWt7IOBIOu5iCDrtoDrqqgg66eI7YGsIOuwsOyXtCDsoITri6wgKOyKpO2DgOydvCDsg4Hsho0g7JWI7ZWoKVxuICAgICAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNoaWxkLCBbXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDqsIEg7IOB7JyEIOugiOuyqCDsu6jthZDsuKAg7LKY66asIOuwjyDspITrsJTqv4gg7LaU6rCAXG4gICAgaWYgKGRlc2NyaXB0aW9uRGF0YS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8g6rCBIOy7qO2FkOy4oCDrhbjrk5wg7LKY66asXG4gICAgICAgICAgICBwcm9jZXNzTm9kZShjb250ZW50Tm9kZSwgW10pO1xuICAgICAgICAgICAgLy8g66eI7KeA66eJIO2VreuqqeydtCDslYTri4jrqbQg7KSE67CU6r+IIOy2lOqwgFxuICAgICAgICAgICAgaWYgKGluZGV4IDwgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV3TGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByYW5nZXM7XG59XG4vKipcbiAqIO2FjeyKpO2KuCDrhbjrk5zsl5Ag66as7LmYIO2FjeyKpO2KuCDshJzsi53snYQg7KCB7Jqp7ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcodGV4dE5vZGUsIGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghZGVzY3JpcHRpb25EYXRhIHx8ICFkZXNjcmlwdGlvbkRhdGEuY29udGVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g7ZWE7JqU7ZWcIOuqqOuToCDtj7Dtirgg66+466asIOuhnOuTnFxuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KSxcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDstIjquLDtmZRcbiAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IFwiXCI7XG4gICAgICAgIC8vIOuqqOuToCDshJzsi50g7KCV67O066W8IOuovOyggCDstpTstpxcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gZXh0cmFjdEZvcm1hdHRpbmdSYW5nZXMoZGVzY3JpcHRpb25EYXRhKTtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIC8vIOqwgSDrspTsnITrs4TroZwg7YWN7Iqk7Yq47JmAIOyEnOyLnSDsoIHsmqlcbiAgICAgICAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDstpTqsIBcbiAgICAgICAgICAgIGlmIChyYW5nZS50ZXh0ICYmIHJhbmdlLnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHJhbmdlLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmluc2VydENoYXJhY3RlcnMoY3VycmVudEluZGV4LCByYW5nZS50ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyDquLDrs7gg7Iqk7YOA7J28IOyEpOyglSAoUmVndWxhciDtj7DtirgsIOqygOydgOyDiSwg67CR7KSEIOyXhuydjClcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZvbnROYW1lKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJJbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGaWxscyhjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgW1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VUZXh0RGVjb3JhdGlvbihjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgXCJOT05FXCIpO1xuICAgICAgICAgICAgICAgIC8vIOuzvOuTnOyytCDsoIHsmqlcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2UuaXNCb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRm9udE5hbWUoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJJbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiQm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g67CR7KSEIOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5pc1VuZGVybGluZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZVRleHREZWNvcmF0aW9uKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBcIlVOREVSTElORVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7IOJ7IOBIOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZ2JDb2xvciA9IGhleFRvUmdiKHJhbmdlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYkNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZpbGxzKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiByZ2JDb2xvci5yIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogcmdiQ29sb3IuZyAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IHJnYkNvbG9yLmIgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCArPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICBpZiAocmFuZ2UuYWRkTmV3TGluZSkge1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmluc2VydENoYXJhY3RlcnMoY3VycmVudEluZGV4LCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDthY3siqTtirjqsIAg67mE7Ja07J6I7Jy866m0IOq4sOuzuOqwkiDshKTsoJVcbiAgICAgICAgaWYgKHRleHROb2RlLmNoYXJhY3RlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gXCJOZXcgQW5ub3RhdGlvblwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IGZpbmRHcm91cCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9hbm5vdGF0aW9uR3JvdXBTZXJ2aWNlXCI7XG4vKipcbiAqIOuqqOuToCDso7zshJ0g7JqU7IaM7J2YIOyduOuNseyKpCDrsojtmLjrpbwg7JeF642w7J207Yq47ZWp64uI64ukLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIGFubm90YXRpb24g7YOA7J6F7J2YIO2UhOugiOyehOunjCDtlYTthLDrp4FcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lcyA9IGdyb3VwRnJhbWUuY2hpbGRyZW4uZmlsdGVyKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIik7XG4gICAgICAgIC8vIO2VhO2EsOungeuQnCDso7zshJ0g7ZSE66CI7J6E65Ok7J2YIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhbm5vdGF0aW9uRnJhbWVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBhbm5vdGF0aW9uRnJhbWVzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gaW5kZXhDb250YWluZXIuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcIOy2lOqwgFxuICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDquLDsobQg66CI7J207JWE7JuDIOq1rOyhsCDsp4Dsm5AgKOydtOyghCDrsoTsoITqs7zsnZgg7Zi47ZmY7ISxKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IOuhnOuTnCDstpTqsIBcbiAgICAgICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoQg7J2066aEIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY2hpbGQubmFtZSA9IGBBbm5vdGF0aW9uICR7aW5kZXggKyAxfWA7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8qKlxuICog67Cw7KeAIOyduOuNseyKpOulvCDsl4XrjbDsnbTtirjtlanri4jri6QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCYWRnZUluZGljZXMoZ3JvdXBJZCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4IOyLnOyekTpcIiwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBcIuqwnOydmCDso7zshJ1cIik7XG4gICAgICAgIC8vIOq3uOujueqzvCDqtIDroKjrkJwg7Y6Y7J207KeAIOywvuq4sFxuICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChncm91cC5yZWxhdGVkUGFnZSAmJiBncm91cC5yZWxhdGVkUGFnZS5pZCkge1xuICAgICAgICAgICAgLy8g6rSA66CoIO2OmOydtOyngOqwgCDsnojsnLzrqbQg7ZW064u5IO2OmOydtOyngCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOb2RlID0gZmlnbWEucm9vdC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiUEFHRVwiICYmIG5vZGUuaWQgPT09IGdyb3VwLnJlbGF0ZWRQYWdlLmlkKTtcbiAgICAgICAgICAgIGlmIChwYWdlTm9kZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFBhZ2UgPSBwYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDqtIDroKgg7Y6Y7J207KeA6rCAIOyXhuqxsOuCmCDssL7sp4Ag66q77ZWcIOqyveyasCDtmITsnqwg7Y6Y7J207KeAIOyCrOyaqVxuICAgICAgICBpZiAoIXRhcmdldFBhZ2UpIHtcbiAgICAgICAgICAgIHRhcmdldFBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDtlbTri7kg7Y6Y7J207KeA7JeQ7IScIOuwsOyngCDssL7quLBcbiAgICAgICAgdGFyZ2V0UGFnZVxuICAgICAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiKVxuICAgICAgICAgICAgLmZvckVhY2goKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWQgPSBiYWRnZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpO1xuICAgICAgICAgICAgLy8g7ZW064u5IOq3uOujueyXkCDsho3tlZwg67Cw7KeA66eMIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBncm91cC5hbm5vdGF0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8g67Cw7KeA7J2YIO2FjeyKpO2KuCDsl4XrjbDsnbTtirggKDHrtoDthLAg7Iuc7J6R7ZWY64qUIOyduOuNseyKpCDsgqzsmqkpXG4gICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGJhZGdlLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYW5ub3RhdGlvbkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDrsLDsp4Ag7JeF642w7J207Yq4OiAke2Fubm90YXRpb25JZH0gPT4gJHtuZXdJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSBuZXdJbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCAoYW5ub3RhdGlvbkluZGV4ICsgMSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfSk7XG4vLyDso7zshJ0v6re466O5IO2VuOuTpOufrFxuaW1wb3J0IHsgaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbiwgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbiwgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbiwgaGFuZGxlU3luY0FsbEFubm90YXRpb25zLCB9IGZyb20gXCIuL2hhbmRsZXJzL2Fubm90YXRpb25IYW5kbGVyc1wiO1xuLy8g6re466O5IO2VuOuTpOufrFxuaW1wb3J0IHsgaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbkdyb3VwLCBoYW5kbGVEZWxldGVBbm5vdGF0aW9uR3JvdXAsIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cCwgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbk9yZGVyLCB9IGZyb20gXCIuL2hhbmRsZXJzL2dyb3VwSGFuZGxlcnNcIjtcbi8vIOuNsOydtO2EsCDtlbjrk6Trn6xcbmltcG9ydCB7IGhhbmRsZVNhdmVEYXRhLCBoYW5kbGVMb2FkRGF0YSwgaGFuZGxlQ2xlYXJBbm5vdGF0aW9uRGF0YSwgaGFuZGxlR2V0RmlsZU5hbWUsIGhhbmRsZUdldFBhZ2VOYW1lLCB9IGZyb20gXCIuL2hhbmRsZXJzL2RhdGFIYW5kbGVyc1wiO1xuLy8g64Sk67mE6rKM7J207IWYIO2VuOuTpOufrFxuaW1wb3J0IHsgaGFuZGxlTW92ZVRvU2VsZWN0aW9uLCBoYW5kbGVNb3ZlVG9Bbm5vdGF0aW9uLCBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24sIGhhbmRsZUdldEZyYW1lSW1hZ2UsIH0gZnJvbSBcIi4vaGFuZGxlcnMvbmF2aWdhdGlvbkhhbmRsZXJzXCI7XG4vLyDrqZTsi5zsp4Ag7ZW465Ok65+sIOyEpOyglVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU0FWRV9EQVRBXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlU2F2ZURhdGEobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMT0FEX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVMb2FkRGF0YShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNMRUFSX0FOTk9UQVRJT05fREFUQVwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNsZWFyQW5ub3RhdGlvbkRhdGEobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRklMRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgaGFuZGxlR2V0RmlsZU5hbWUobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfUEFHRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgaGFuZGxlR2V0UGFnZU5hbWUobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNT1ZFX1RPX1NFTEVDVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZU1vdmVUb1NlbGVjdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1PVkVfVE9fQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZU1vdmVUb0Fubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDSEVDS19DVVJSRU5UX1NFTEVDVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNoZWNrQ3VycmVudFNlbGVjdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlVQREFURV9BTk5PVEFUSU9OX09SREVSXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlVXBkYXRlQW5ub3RhdGlvbk9yZGVyKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR0VUX0ZSQU1FX0lNQUdFXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlR2V0RnJhbWVJbWFnZShtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNZTkNfQUxMX0FOTk9UQVRJT05TXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlU3luY0FsbEFubm90YXRpb25zKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIG1lc3NhZ2UgdHlwZTpcIiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGhhbmRsaW5nIG1lc3NhZ2UgdHlwZSAke3R5cGV9OmAsIGVycm9yKTtcbiAgICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==