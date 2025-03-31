/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
        badgeSize: 32,
        badgeText: 18,
        desription: 18,
        gap: 10,
    },
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.LARGE]: {
        badgeSize: 36,
        badgeText: 21,
        desription: 21,
        gap: 12,
    },
};
const supportedColors = {
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.RED]: "bg-subRed-01",
    [_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.PURPLE]: "bg-primary",
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
    AnnotationColor[(AnnotationColor["PURPLE"] = 1)] = "PURPLE";
    AnnotationColor[(AnnotationColor["BLACK"] = 2)] = "BLACK";
})(AnnotationColor || (AnnotationColor = {}));
var AnnnotationCardWidth;
(function (AnnnotationCardWidth) {
    AnnnotationCardWidth[(AnnnotationCardWidth["SMALL"] = 0)] = "SMALL";
    AnnnotationCardWidth[(AnnnotationCardWidth["MEDIUM"] = 1)] = "MEDIUM";
    AnnnotationCardWidth[(AnnnotationCardWidth["LARGE"] = 2)] = "LARGE";
})(AnnnotationCardWidth || (AnnnotationCardWidth = {}));


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
/* harmony import */ var _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/enums */ "./src/interfaces/enums.ts");
/* harmony import */ var _interfaces_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/const */ "./src/interfaces/const.ts");
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
// 필요한 상수와 enum 가져오기


let annotationGroups = [];
// 노드의 최상위 Frame을 찾는 유틸리티 함수
function getTopLevelFrame(node) {
    let current = node;
    while (current && current.parent && current.parent.type !== "PAGE") {
        current = current.parent;
    }
    return (current === null || current === void 0 ? void 0 : current.type) === "FRAME" ? current : null;
}
// 그룹 프레임 찾기 통합 함수
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
// 카드 너비 가져오기
function getCardWidthByValue(widthValue) {
    if (widthValue >= 0 &&
        widthValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedCardWidth[widthValue];
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedCardWidth[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth.SMALL]; // 기본값
}
// 카드 너비 계산하기 (입력값 또는 기본값 사용)
function getCardWidth(cardWidthValue) {
    return cardWidthValue !== undefined
        ? getCardWidthByValue(cardWidthValue)
        : getCardWidthByValue(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnnotationCardWidth.SMALL);
}
// 그룹 프레임 찾기 또는 생성 함수
function findOrCreateGroupFrame(group) {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. 기존 그룹 프레임 찾기 시도
        let groupFrame = findGroupFrame(group.id, group.groupFrameId);
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
            const cardWidth = getCardWidth(group.cardWidth);
            // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
            // 부모 프레임의 우측 상단에서 약간 안쪽으로 위치
            groupFrame.x = topFrame.width - cardWidth - 20; // 우측에서 카드 너비만큼 안쪽으로
            groupFrame.y = 20; // 상단에서 약간 아래로
            groupFrame.resize(cardWidth, 300);
            // groupFrame.fills = [
            //   { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
            // ];
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
// 그룹 및 주석 조회 함수
function findGroup(groupId) {
    return annotationGroups.find((g) => g.id === groupId);
}
// 주석 찾기 함수
function findAnnotation(groupId, annotationId) {
    const group = findGroup(groupId);
    if (!group)
        return null;
    return group.annotations.find((a) => a.id === annotationId);
}
// 색상 값 가져오기
function getColorByValue(colorValue) {
    // 색상 값에 따라 RGB 값 반환
    switch (colorValue) {
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.RED:
            return { r: 0.93, g: 0.37, b: 0.37 }; // RED
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.PURPLE:
            return { r: 0.7, g: 0.5, b: 0.9 }; // PURPLE
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLACK:
            return { r: 0, g: 0, b: 0 }; // BLACK
        default:
            return { r: 0.7, g: 0.5, b: 0.9 }; // 기본값: PURPLE
    }
}
// 폰트 크기 가져오기
function getFontSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].desription;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].desription; // 기본값
}
// 배지 크기 가져오기
function getBadgeSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].badgeSize;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].badgeSize; // 기본값
}
// 배지 텍스트 크기 가져오기
function getBadgeTextSizeByValue(sizeValue) {
    if (sizeValue >= 0 && sizeValue < Object.keys(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize).length / 2) {
        return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[sizeValue].badgeText;
    }
    return _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].badgeText; // 기본값
}
// 배지를 생성하는 함수
function createAnnotationBadge(node, index, annotationId, color) {
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
        // 배지 크기 설정 - supportedFontSizes에서 가져옴
        const badgeSize = getBadgeSizeByValue(color);
        badge.resize(badgeSize, badgeSize);
        // 배지 색상 설정
        let badgeColor = getColorByValue(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.PURPLE); // 기본 보라색
        if (color !== undefined) {
            badgeColor = getColorByValue(color);
        }
        badge.fills = [{ type: "SOLID", color: badgeColor }];
        // 인덱스 번호 텍스트 생성
        const indexText = figma.createText();
        indexText.characters = index.toString();
        // 텍스트 크기 설정 - supportedFontSizes에서 가져옴
        indexText.fontSize = getBadgeTextSizeByValue(color);
        indexText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // 흰색 텍스트
        // 배지에 텍스트 추가
        badge.appendChild(indexText);
        // 배지 위치 설정 - 선택한 노드 위에 배치
        badge.x = node.x;
        badge.y = node.y - badge.height - 5; // 노드 위에 약간 간격을 두고 배치
        // 최상위 프레임 찾기
        const topFrame = getTopLevelFrame(node);
        // 최상위 프레임에 배지 추가
        if (topFrame) {
            topFrame.appendChild(badge);
        }
        else {
            // 최상위 프레임 또는 부모가 없는 경우 현재 페이지에 추가
            figma.currentPage.appendChild(badge);
        }
        return badge;
    });
}
// 배지 인덱스 업데이트 함수
function updateBadgeIndices(groupId) {
    const group = annotationGroups.find((g) => g.id === groupId);
    if (!group)
        return;
    console.log("배지 인덱스 업데이트 시작:", group.annotations.length, "개의 주석");
    // 모든 노드에서 이 그룹에 해당하는 배지 찾기
    figma.currentPage
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
}
// 배지 삭제 함수
function removeAnnotationBadge(annotationId) {
    figma.currentPage
        .findAll((node) => node.getPluginData("type") === "annotation_badge" &&
        node.getPluginData("annotationId") === annotationId)
        .forEach((badge) => badge.remove());
}
// 주석 프레임 생성 함수
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
        // annotationFrame.itemSpacing = 8;
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
        const cardWidth = getCardWidth(cardWidthValue);
        // 너비만 고정하고 높이는 내용에 맞게 자동 조정
        annotationFrame.layoutSizingHorizontal = "FIXED";
        annotationFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
        annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려
        return annotationFrame;
    });
}
// 내용 그룹 생성 함수
function createContentGroup(annotationId, frameWidth) {
    // 인덱스와 설명을 담을 그룹 생성
    const contentGroup = figma.createFrame();
    contentGroup.name = "Annotation Content";
    contentGroup.setPluginData("type", "annotation_content");
    contentGroup.setPluginData("annotationId", annotationId);
    // 그룹 스타일 설정
    contentGroup.layoutMode = "VERTICAL";
    contentGroup.itemSpacing = 4;
    contentGroup.fills = []; // 배경색 제거 (투명 배경 유지)
    // 너비 계산 - 전체 너비의 약 80%를 차지하도록 조정
    const contentWidth = Math.round(frameWidth * 0.8);
    contentGroup.layoutSizingHorizontal = "FIXED";
    contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
    contentGroup.resize(contentWidth, contentGroup.height);
    return contentGroup;
}
// 인덱스 컨테이너 생성 함수
function createIndexContainer(annotationId, frameWidth) {
    // 인덱스 컨테이너 생성
    const indexContainer = figma.createFrame();
    indexContainer.name = "Annotation Index";
    indexContainer.setPluginData("type", "annotation_index_container");
    indexContainer.setPluginData("annotationId", annotationId);
    // 스타일 설정
    indexContainer.layoutMode = "VERTICAL";
    indexContainer.itemSpacing = 4;
    indexContainer.primaryAxisAlignItems = "CENTER"; // 세로 중앙 정렬
    indexContainer.counterAxisAlignItems = "CENTER"; // 가로 중앙 정렬
    indexContainer.fills = [
        { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
    ]; // 배경색 설정
    // 너비 계산 - 전체 너비의 약 20%를 차지하도록 조정
    const indexWidth = Math.round(frameWidth * 0.2);
    indexContainer.layoutSizingHorizontal = "FIXED";
    indexContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
    indexContainer.resize(indexWidth, indexContainer.height);
    return indexContainer;
}
// 인덱스 노드 생성 함수
function createIndexNode(annotationId, index, sizeValue) {
    return __awaiter(this, void 0, void 0, function* () {
        // 폰트 로드
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const indexNode = figma.createText();
        indexNode.characters = `${index}`;
        indexNode.setPluginData("type", "annotation_index");
        indexNode.setPluginData("annotationId", annotationId);
        // 스타일 설정
        indexNode.fontSize =
            sizeValue !== undefined
                ? getFontSizeByValue(sizeValue)
                : getFontSizeByValue(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL); // 기본값 사용
        indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        // 텍스트 정렬 설정
        indexNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
        indexNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬
        return indexNode;
    });
}
// 설명 텍스트 노드 생성 함수
function createDescriptionNode(annotationId, text = "New Annotation", sizeValue, descriptionData) {
    return __awaiter(this, void 0, void 0, function* () {
        // 기본 폰트만 먼저 로드 (applyRichTextFormatting에서 추가 폰트 로드)
        yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
        const textNode = figma.createText();
        textNode.characters = text;
        textNode.setPluginData("type", "annotation_description");
        textNode.setPluginData("annotationId", annotationId);
        // 스타일 설정
        textNode.fontSize =
            sizeValue !== undefined
                ? getFontSizeByValue(sizeValue)
                : _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationSize.SMALL].desription;
        textNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
        // 리치 텍스트 설명 데이터가 있으면 서식 적용
        if (descriptionData &&
            descriptionData.content &&
            descriptionData.content.length > 0) {
            yield applyRichTextFormatting(textNode, descriptionData);
        }
        return textNode;
    });
}
// 주석 구성 요소 생성 통합 함수
function createAnnotationComponents(annotationId, index, colorValue, sizeValue, cardWidthValue, description) {
    return __awaiter(this, void 0, void 0, function* () {
        // 1. 주석 프레임 생성
        const frame = yield createAnnotationFrame(annotationId, index, cardWidthValue);
        // 카드 너비 계산
        const cardWidth = getCardWidth(cardWidthValue);
        const availableWidth = cardWidth - 20 - (frame.paddingLeft + frame.paddingRight);
        // 2. 인덱스 컨테이너 생성
        const indexContainer = createIndexContainer(annotationId, availableWidth);
        // 3. 내용 그룹 생성
        const contentGroup = createContentGroup(annotationId, availableWidth);
        // 4. 인덱스 노드 생성
        const indexNode = yield createIndexNode(annotationId, index, sizeValue);
        // 5. 설명 텍스트 노드 생성
        const initialText = description
            ? extractTextFromDescription(description)
            : "New Annotation";
        const textNode = yield createDescriptionNode(annotationId, initialText, sizeValue, description);
        // 6. 텍스트 노드 크기 조정
        textNode.layoutSizingHorizontal = "FIXED";
        textNode.resize(contentGroup.width - (contentGroup.paddingLeft + contentGroup.paddingRight), textNode.height);
        // 인덱스 노드 크기 조정
        indexNode.layoutSizingHorizontal = "FIXED";
        indexNode.resize(indexContainer.width, textNode.height);
        // 인덱스 노드를 수직 중앙에 배치
        indexNode.y = (textNode.height - indexNode.height) / 2;
        // 7. 노드 구성
        indexContainer.appendChild(indexNode);
        contentGroup.appendChild(textNode);
        // 프레임에 인덱스 컨테이너와 내용 그룹 추가
        frame.appendChild(indexContainer);
        frame.appendChild(contentGroup);
        return { frame, group: contentGroup, indexNode, textNode };
    });
}
// 메시지 응답 전송 유틸리티 함수
function sendResponse(type, result, data = {}, errorMessage) {
    const message = Object.assign({ result }, data);
    if (!result && errorMessage) {
        message.errorMessage = errorMessage;
    }
    figma.ui.postMessage({ type, message });
}
// 텍스트 추출 함수
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
// 모든 주석 요소의 인덱스 번호 업데이트
function updateAnnotationIndices(groupFrame) {
    // annotation 타입의 프레임만 필터링
    const annotationFrames = groupFrame.children.filter((node) => node.type === "FRAME" && node.getPluginData("type") === "annotation");
    // 필터링된 주석 프레임들의 인덱스 번호 업데이트
    annotationFrames.forEach((child, index) => {
        // 인덱스 컨테이너 찾기
        const indexContainer = child.findOne((node) => node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_index_container");
        if (indexContainer) {
            // 인덱스 번호 업데이트
            const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                node.getPluginData("type") === "annotation_index");
            if (indexNode) {
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
                    indexNode.characters = `${index + 1}`;
                }
            }
        }
        // 주석 프레임 이름 업데이트
        child.name = `Annotation ${index + 1}`;
    });
}
// Title 그룹 생성 함수
function createTitleGroup(groupId, frameWidth, descriptionText = "Description") {
    return __awaiter(this, void 0, void 0, function* () {
        // 타이틀 컨테이너 생성
        const titleContainer = figma.createFrame();
        titleContainer.name = "Title";
        titleContainer.setPluginData("type", "title_container");
        titleContainer.setPluginData("groupId", groupId);
        // 스타일 설정
        titleContainer.layoutMode = "VERTICAL";
        titleContainer.itemSpacing = 4;
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
// CREATE_ANNOTATION_GROUP 메시지 핸들러
function handleCreateAnnotationGroup(msg) {
    var _a, _b, _c, _d, _e, _f;
    return __awaiter(this, void 0, void 0, function* () {
        const selection = figma.currentPage.selection[0];
        if (!selection) {
            return sendResponse(msg.type, false, {}, "Please select a layer on the canvas.");
        }
        const topFrame = getTopLevelFrame(selection);
        if (!topFrame) {
            return sendResponse(msg.type, false, {}, "Top-level frame not found.");
        }
        const newGroupId = topFrame.id;
        const newGroupName = topFrame.name;
        const existingGroup = findGroup(newGroupId);
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
                annotationGroupFrame = figma.createFrame();
                annotationGroupFrame.name = "ANNOTATION_GROUP";
                annotationGroupFrame.setPluginData("type", "group");
                // 카드 너비 계산
                const cardWidth = getCardWidth(existingGroup.cardWidth);
                // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
                annotationGroupFrame.x = topFrame.width - cardWidth - 20;
                annotationGroupFrame.y = 20;
                annotationGroupFrame.resize(cardWidth, 300);
                annotationGroupFrame.fills = []; // 배경색 제거
                // 레이아웃 모드 설정 - 세로 배치
                annotationGroupFrame.layoutMode = "VERTICAL";
                annotationGroupFrame.paddingTop = 10;
                annotationGroupFrame.paddingBottom = 10;
                annotationGroupFrame.paddingLeft = 10;
                annotationGroupFrame.paddingRight = 10;
                // 상위 프레임에 추가
                topFrame.appendChild(annotationGroupFrame);
                // Title 그룹 생성 및 추가
                const availableWidth = cardWidth -
                    (annotationGroupFrame.paddingLeft + annotationGroupFrame.paddingRight);
                const titleGroup = yield createTitleGroup(existingGroup.id, availableWidth, "Description");
                annotationGroupFrame.appendChild(titleGroup);
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
            const { frame: annotationFrame } = yield createAnnotationComponents(newAnnotation.id, existingGroup.annotations.length, existingGroup.color, existingGroup.size, existingGroup.cardWidth, newAnnotation.description);
            // 주석 프레임을 그룹 프레임에 추가
            annotationGroupFrame.appendChild(annotationFrame);
            // 선택된 노드에 배지 생성
            yield createAnnotationBadge(selection, existingGroup.annotations.length, newAnnotation.id, existingGroup.color);
            return sendResponse(msg.type, true, {
                annotations: annotationGroups,
                updatedGroup: newGroupId,
            });
        }
        // 🆕 새 그룹 생성
        // 1. 주석 그룹 프레임 생성
        annotationGroupFrame = figma.createFrame();
        annotationGroupFrame.name = "ANNOTATION_GROUP";
        annotationGroupFrame.setPluginData("type", "group");
        annotationGroupFrame.setPluginData("parent_frame_id", topFrame.id);
        // 카드 너비 계산
        const cardWidth = getCardWidth((_a = msg.config) === null || _a === void 0 ? void 0 : _a.cardWidth);
        // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
        annotationGroupFrame.x = topFrame.width - cardWidth - 20;
        annotationGroupFrame.y = 20;
        annotationGroupFrame.resize(cardWidth, 300);
        annotationGroupFrame.fills = []; // 배경색 제거
        // 레이아웃 모드 설정 - 세로 배치
        annotationGroupFrame.layoutMode = "VERTICAL";
        annotationGroupFrame.paddingTop = 10;
        annotationGroupFrame.paddingBottom = 10;
        annotationGroupFrame.paddingLeft = 10;
        annotationGroupFrame.paddingRight = 10;
        // 상위 프레임에 추가
        topFrame.appendChild(annotationGroupFrame);
        // Title 그룹 생성 및 추가
        const availableWidth = cardWidth -
            (annotationGroupFrame.paddingLeft + annotationGroupFrame.paddingRight);
        const titleGroup = yield createTitleGroup(topFrame.id, availableWidth, "Description");
        annotationGroupFrame.appendChild(titleGroup);
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
        annotationGroups.push(newGroup);
        // 주석 UI 컴포넌트 생성
        const { frame: annotationFrame } = yield createAnnotationComponents(defaultAnnotation.id, 1, (_c = msg.config) === null || _c === void 0 ? void 0 : _c.color, (_d = msg.config) === null || _d === void 0 ? void 0 : _d.size, (_e = msg.config) === null || _e === void 0 ? void 0 : _e.cardWidth, defaultAnnotation.description);
        // 주석 프레임을 그룹 프레임에 추가
        annotationGroupFrame.appendChild(annotationFrame);
        // 선택된 노드에 배지 생성
        yield createAnnotationBadge(selection, 1, defaultAnnotation.id, (_f = msg.config) === null || _f === void 0 ? void 0 : _f.color);
        figma.viewport.scrollAndZoomIntoView([topFrame]);
        return sendResponse(msg.type, true, {
            annotations: annotationGroups,
            updatedGroup: newGroupId,
        });
    });
}
// CREATE_ANNOTATION 메시지 핸들러
function handleCreateAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = findGroup(msg.groupId);
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
        group.annotations.push(newAnnotation);
        // 그룹 프레임 찾기
        const groupFrame = yield findOrCreateGroupFrame(group);
        if (!groupFrame) {
            console.error("주석 그룹 프레임을 찾거나 생성할 수 없습니다");
            return;
        }
        // 주석 UI 컴포넌트 생성
        const { frame: annotationFrame } = yield createAnnotationComponents(newAnnotation.id, group.annotations.length, group.color, group.size, group.cardWidth, newAnnotation.description);
        // 주석 프레임을 그룹 프레임에 추가
        groupFrame.appendChild(annotationFrame);
        // 현재 선택된 노드에 배지 생성
        const selection = figma.currentPage.selection[0];
        if (selection) {
            yield createAnnotationBadge(selection, group.annotations.length, newAnnotation.id, group.color);
        }
        return sendResponse("CREATE_ANNOTATION", true, {
            annotations: annotationGroups,
        });
    });
}
// DELETE_ANNOTATION 메시지 핸들러
function handleDeleteAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = findGroup(msg.groupId);
        if (!group)
            return sendResponse(msg.type, false);
        // 그룹 내에서 주석 제거
        group.annotations = group.annotations.filter((a) => a.id !== msg.annotation.id);
        // Figma 캔버스에서도 삭제
        let groupFrame = findGroupFrame(group.id, group.groupFrameId);
        if (groupFrame) {
            const annotationFrame = groupFrame.findOne((node) => node.getPluginData("annotationId") === msg.annotation.id);
            if (annotationFrame) {
                annotationFrame.remove();
            }
            // 남아있는 주석 프레임들의 인덱스 번호 업데이트
            updateAnnotationIndices(groupFrame);
        }
        // 배지도 함께 삭제
        removeAnnotationBadge(msg.annotation.id);
        // 남아있는 annotation들의 배지 인덱스 업데이트
        updateBadgeIndices(group.id);
        return sendResponse(msg.type, true);
    });
}
// DELETE_ANNOTATION_GROUP 메시지 핸들러
function handleDeleteAnnotationGroup(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupToDelete = findGroup(msg.group.id);
        if (!groupToDelete)
            return sendResponse(msg.type, false);
        if (groupToDelete.groupFrameId) {
            const groupFrame = figma.getNodeById(groupToDelete.groupFrameId);
            if (groupFrame && groupFrame.type === "FRAME") {
                // 그룹에 속한 모든 주석의 배지 삭제
                groupToDelete.annotations.forEach((annotation) => {
                    removeAnnotationBadge(annotation.id);
                });
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
        annotationGroups = annotationGroups.filter((g) => g.id !== msg.group.id);
        return sendResponse(msg.type, true);
    });
}
// 리치 텍스트 서식 적용 함수
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
                    const rgbColor = hexToRgb(range.color);
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
// 헥스 색상 코드를 RGB로 변환
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
// UPDATE_ANNOTATION 메시지 핸들러
function handleUpdateAnnotation(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = findGroup(msg.groupId);
        const annotation = findAnnotation(msg.groupId, msg.annotationId);
        if (!group || !annotation)
            return sendResponse(msg.type, false);
        // 메모리 상태 업데이트
        annotation[msg.key] = msg.value;
        // 실제 Figma 요소도 업데이트
        const groupFrame = findGroupFrame(group.id, group.groupFrameId);
        if (!groupFrame)
            return sendResponse(msg.type, false);
        // 해당 annotation 프레임 찾기
        const annotationFrame = groupFrame.findOne((node) => node.getPluginData("annotationId") === msg.annotationId);
        if (!annotationFrame)
            return sendResponse(msg.type, false);
        // description 텍스트 노드 찾아 업데이트
        if (msg.key === "description") {
            // 인덱스 컨테이너 찾기
            const indexContainer = annotationFrame.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_index_container");
            // content 그룹 찾기
            const contentGroup = annotationFrame.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_content");
            if (!contentGroup)
                return sendResponse(msg.type, false);
            // description 텍스트 노드 찾기
            const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                node.getPluginData("type") === "annotation_description");
            if (descNode) {
                // 리치 텍스트 서식 적용
                yield applyRichTextFormatting(descNode, msg.value);
                // 카드 너비 계산 - 그룹에서 설정된 cardWidth 값 사용
                const cardWidth = getCardWidth(group.cardWidth);
                // 프레임 내에서 사용 가능한 너비 계산
                const availableWidth = cardWidth -
                    20 -
                    (annotationFrame.paddingLeft + annotationFrame.paddingRight);
                // description이 변경되면 레이아웃 조정
                annotationFrame.layoutSizingHorizontal = "FIXED";
                annotationFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
                annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려
                if (indexContainer) {
                    // indexContainer와 contentGroup 너비 비율 계산 (20:80)
                    const indexWidth = Math.round(availableWidth * 0.2);
                    const contentWidth = Math.round(availableWidth * 0.8);
                    // indexContainer 크기 조정
                    indexContainer.layoutSizingHorizontal = "FIXED";
                    indexContainer.resize(indexWidth, indexContainer.height);
                    // content 그룹 크기 조정
                    contentGroup.layoutSizingHorizontal = "FIXED";
                    contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
                    contentGroup.resize(contentWidth, contentGroup.height);
                    // 텍스트 노드 크기 조정
                    descNode.layoutSizingHorizontal = "FIXED";
                    descNode.resize(contentWidth - (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                    // 인덱스 노드 찾기
                    const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                        node.getPluginData("type") === "annotation_index");
                    if (indexNode) {
                        // 인덱스 노드의 높이를 텍스트 노드의 높이와 동일하게 설정
                        indexNode.resize(indexWidth, descNode.height);
                        // 인덱스 노드의 수직 위치 조정
                        indexNode.y = (indexContainer.height - indexNode.height) / 2;
                    }
                    // indexContainer 높이 조정
                    indexContainer.layoutSizingVertical = "HUG";
                    indexContainer.resize(indexWidth, contentGroup.height);
                }
                else {
                    // 기존 레이아웃 호환성 유지 - 인덱스 컨테이너가 없는 경우
                    contentGroup.layoutSizingHorizontal = "FIXED";
                    contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
                    contentGroup.resize(availableWidth, contentGroup.height);
                    // 텍스트 노드 크기 조정
                    descNode.layoutSizingHorizontal = "FIXED";
                    descNode.resize(availableWidth -
                        (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                }
                // annotationGroupFrame 크기 조정 (너비는 cardWidth로 고정, 높이는 자동 조정)
                groupFrame.layoutSizingHorizontal = "FIXED";
                groupFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
                groupFrame.resize(cardWidth, groupFrame.height);
            }
        }
        return sendResponse(msg.type, true);
    });
}
// UPDATE_ANNOTATION_GROUP 메시지 핸들러
function handleUpdateAnnotationGroup(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const group = findGroup(msg.groupId);
        if (!group)
            return sendResponse(msg.type, false);
        // 메모리 상태 업데이트
        group[msg.key] = msg.value;
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
                    updateGroupFrameColor(groupFrame, colorValue);
                }
                // 크기 업데이트
                if (msg.key === "size" || msg.key === "cardWidth") {
                    yield updateGroupFrameSize(groupFrame, msg.key, msg.value);
                }
            }
        }
        return sendResponse(msg.type, true);
    });
}
// UPDATE_ANNOTATION_ORDER 메시지 핸들러
function handleUpdateAnnotationOrder(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const { groupId, sourceIndex, destinationIndex } = msg;
        const group = findGroup(groupId);
        if (!group)
            return sendResponse(msg.type, false);
        // 메모리상의 주석 순서 업데이트
        const annotations = [...group.annotations];
        const [movedAnnotation] = annotations.splice(sourceIndex - 1, 1);
        annotations.splice(destinationIndex - 1, 0, movedAnnotation);
        group.annotations = annotations;
        // Figma 캔버스 상의 주석 순서 업데이트
        const groupFrame = findGroupFrame(group.id, group.groupFrameId);
        if (!groupFrame || groupFrame.type !== "FRAME") {
            return sendResponse(msg.type, false);
        }
        // 모든 자식 요소 중 annotationFrame만 필터링
        const titleContainer = groupFrame.findOne((node) => node.type === "FRAME" && node.getPluginData("type") === "title_container");
        const annotationFrames = groupFrame.children.filter((node) => node.type === "FRAME" && node.getPluginData("type") === "annotation");
        // 메모리의 주석 순서에 맞게 annotationFrame들을 재정렬
        if (annotationFrames.length === annotations.length) {
            // 각 주석에 해당하는 프레임 찾아서 순서대로 재배치
            annotations.forEach((annotation, index) => {
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
            updateAnnotationIndices(groupFrame);
            // 배지 인덱스도 업데이트
            updateBadgeIndices(group.id);
        }
        else {
            // 기존 방식 (자식 요소와 주석 수가 일치하지 않을 경우의 예외 처리)
            // Title 컨테이너를 제외한 주석 프레임만 필터링
            const annotationNodes = groupFrame.children.filter((node) => node.getPluginData("type") === "annotation");
            const source = annotationNodes[sourceIndex - 1]; // 0부터 시작하는 인덱스로 변환
            if (source) {
                // Title 컨테이너가 있다면 그 위치를 고려하여 삽입 위치 계산
                const insertAt = titleContainer ? destinationIndex : destinationIndex - 1;
                groupFrame.insertChild(insertAt, source);
                // Title 컨테이너가 있다면 항상 맨 위로 이동
                if (titleContainer) {
                    groupFrame.insertChild(0, titleContainer);
                }
                // 순서가 바뀐 후 인덱스 번호 업데이트
                updateAnnotationIndices(groupFrame);
                // 배지 인덱스도 업데이트
                updateBadgeIndices(group.id);
            }
        }
        return sendResponse(msg.type, true);
    });
}
// MOVE_TO_SELECTION 메시지 핸들러
function handleMoveToSelection(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        // 페이지 ID가 제공된 경우 먼저 해당 페이지로 이동
        if (msg.pageId) {
            const pageNode = figma.root.findOne((node) => node.id === msg.pageId);
            if (pageNode && pageNode.type === "PAGE") {
                figma.currentPage = pageNode;
            }
        }
        const groupNode = figma.getNodeById(msg.groupId);
        if (groupNode) {
            figma.viewport.scrollAndZoomIntoView([groupNode]);
        }
        // 이 핸들러는 UI로 응답을 반환하지 않음
    });
}
// CHECK_CURRENT_SELECTION 메시지 핸들러
function handleCheckCurrentSelection(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const groupNode = figma.getNodeById(msg.groupId);
        const exists = !!groupNode;
        return sendResponse(msg.type, true, {
            result: exists,
            groupId: msg.groupId,
            obsolete: !exists,
        });
    });
}
// GET_FRAME_IMAGE 메시지 핸들러
function handleGetFrameImage(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const frameImages = [];
        for (const group of annotationGroups) {
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
            return sendResponse(msg.type, true, { frameImages });
        }
    });
}
// 메시지 핸들러 설정
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    const { type } = msg;
    try {
        switch (type) {
            case "CREATE_ANNOTATION_GROUP":
                yield handleCreateAnnotationGroup(msg);
                break;
            case "CREATE_ANNOTATION":
                yield handleCreateAnnotation(msg);
                break;
            case "UPDATE_ANNOTATION":
                yield handleUpdateAnnotation(msg);
                break;
            case "UPDATE_ANNOTATION_GROUP":
                yield handleUpdateAnnotationGroup(msg);
                break;
            case "DELETE_ANNOTATION":
                yield handleDeleteAnnotation(msg);
                break;
            case "DELETE_ANNOTATION_GROUP":
                yield handleDeleteAnnotationGroup(msg);
                break;
            case "SAVE_DATA":
                try {
                    yield figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
                    sendResponse(type, true);
                }
                catch (error) {
                    sendResponse(type, false, {}, String(error));
                }
                break;
            case "LOAD_DATA":
                try {
                    const raw = figma.root.getPluginData(msg.key);
                    const parsed = raw ? JSON.parse(raw) : [];
                    console.log(parsed, "parsed");
                    annotationGroups = parsed;
                    sendResponse(type, true, { key: msg.key, data: parsed });
                }
                catch (error) {
                    sendResponse(type, false, {}, String(error));
                }
                break;
            case "CLEAR_ANNOTATION_DATA":
                yield figma.root.setPluginData("annotationGroup", "[]");
                annotationGroups = [];
                sendResponse(type, true, {});
                break;
            case "GET_FILE_NAME":
                sendResponse(type, true, { fileName: figma.root.name });
                break;
            case "GET_PAGE_NAME":
                const page = figma.root.findOne((n) => n.id === msg.pageId);
                sendResponse(type, true, {
                    pageId: msg.pageId,
                    pageName: (page === null || page === void 0 ? void 0 : page.name) || "Unknown Page",
                });
                break;
            case "MOVE_TO_SELECTION":
                yield handleMoveToSelection(msg);
                break;
            case "CHECK_CURRENT_SELECTION":
                yield handleCheckCurrentSelection(msg);
                break;
            case "UPDATE_ANNOTATION_ORDER":
                yield handleUpdateAnnotationOrder(msg);
                break;
            case "GET_FRAME_IMAGE":
                yield handleGetFrameImage(msg);
                break;
            default:
                console.log("Unhandled message type:", msg.type);
        }
    }
    catch (error) {
        console.error(`Error handling message type ${type}:`, error);
        sendResponse(type, false, {}, String(error));
    }
});
// 그룹 프레임 색상 업데이트 함수
function updateGroupFrameColor(frame, colorValue) {
    const headerColor = getColorByValue(colorValue);
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
    const group = findGroup(parentFrameId);
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
// 그룹 프레임 크기 업데이트 함수
function updateGroupFrameSize(frame, property, value) {
    return __awaiter(this, void 0, void 0, function* () {
        // 카드 너비 계산
        const cardWidth = property === "cardWidth" ? getCardWidthByValue(value) : getCardWidth();
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
                    const fontSize = getFontSizeByValue(value);
                    descriptionNode.fontSize = fontSize;
                }
            }
        }
        // 사이즈 값에 따른 스타일 변경
        if (property === "cardWidth") {
            // 모든 자식 요소의 너비도 업데이트
            for (const child of frame.children) {
                if (child.type === "FRAME" &&
                    child.getPluginData("type") === "annotation") {
                    // 사용 가능한 너비 계산 (annotationFrame 내에서)
                    const annotationAvailableWidth = cardWidth - (frame.paddingLeft + frame.paddingRight);
                    // annotationFrame 크기 조정
                    child.layoutSizingHorizontal = "FIXED";
                    child.layoutSizingVertical = "HUG";
                    child.resize(annotationAvailableWidth, child.height);
                    // 인덱스 컨테이너 찾기
                    const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_index_container");
                    // 내용 그룹 찾기
                    const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_content");
                    if (indexContainer && contentGroup) {
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = annotationAvailableWidth - (child.paddingLeft + child.paddingRight);
                        // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (30:70)
                        const indexWidth = Math.round(frameAvailableWidth * 0.2);
                        const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당
                        // 인덱스 컨테이너 크기 조정
                        indexContainer.layoutSizingHorizontal = "FIXED";
                        indexContainer.layoutSizingVertical = "HUG";
                        indexContainer.resize(indexWidth, indexContainer.height);
                        // 내용 그룹 크기 조정
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.resize(contentWidth, contentGroup.height);
                        // 설명 텍스트 찾기
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
                            const textAvailableWidth = contentWidth -
                                (contentGroup.paddingLeft + contentGroup.paddingRight);
                            descNode.layoutSizingHorizontal = "FIXED";
                            descNode.resize(textAvailableWidth, descNode.height);
                        }
                        // 인덱스 노드 찾기
                        const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_index");
                        if (indexNode && descNode) {
                            // 인덱스 노드의 높이를 텍스트 노드의 높이와 동일하게 설정
                            const indexNodeAvailableWidth = indexWidth -
                                (indexContainer.paddingLeft + indexContainer.paddingRight);
                            indexNode.resize(indexNodeAvailableWidth, descNode.height);
                            // 인덱스 노드를 수직 중앙에 배치
                            indexNode.y = (indexContainer.height - indexNode.height) / 2;
                        }
                    }
                    else if (contentGroup) {
                        // 이전 구조와의 호환성 유지 (기존 레이아웃)
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = annotationAvailableWidth - (child.paddingLeft + child.paddingRight);
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.resize(frameAvailableWidth, contentGroup.height);
                        // 설명 텍스트 찾기
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
                            const textAvailableWidth = frameAvailableWidth -
                                (contentGroup.paddingLeft + contentGroup.paddingRight);
                            descNode.layoutSizingHorizontal = "FIXED";
                            descNode.resize(textAvailableWidth, descNode.height);
                        }
                    }
                }
            }
        }
        else if (property === "size") {
            // 폰트 크기 업데이트
            const fontSize = getFontSizeByValue(value);
            const gap = _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[value].gap;
            const padding = _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[value];
            // 모든 텍스트 노드에 대해 폰트 로드
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            for (const child of frame.children) {
                if (child.type === "FRAME" &&
                    child.getPluginData("type") === "annotation") {
                    child.itemSpacing = gap;
                    // 너비 고정, 높이 자동 조정
                    child.layoutSizingHorizontal = "FIXED";
                    child.layoutSizingVertical = "HUG";
                    child.resize(cardWidth - (frame.paddingLeft + frame.paddingRight), child.height);
                    // 인덱스 컨테이너 찾기
                    const indexContainer = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_index_container");
                    // 내용 그룹 찾기
                    const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                        node.getPluginData("type") === "annotation_content");
                    if (indexContainer && contentGroup) {
                        contentGroup.itemSpacing = gap / 2;
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = child.width - (child.paddingLeft + child.paddingRight);
                        // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (30:70)
                        const indexWidth = Math.round(frameAvailableWidth * 0.2);
                        const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당
                        // 내용 그룹 크기 조정
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.resize(contentWidth, contentGroup.height);
                        // 설명 텍스트 업데이트
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            descNode.fontSize = fontSize;
                            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
                            const textAvailableWidth = contentWidth -
                                (contentGroup.paddingLeft + contentGroup.paddingRight);
                            descNode.layoutSizingHorizontal = "FIXED";
                            descNode.resize(textAvailableWidth, descNode.height);
                        }
                        // 인덱스 컨테이너 크기 조정
                        indexContainer.layoutSizingHorizontal = "FIXED";
                        indexContainer.layoutSizingVertical = "HUG";
                        indexContainer.resize(indexWidth, contentGroup.height);
                        // 인덱스 노드 찾기
                        const indexNode = indexContainer.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_index");
                        if (indexNode && descNode) {
                            // 인덱스 노드 업데이트
                            indexNode.fontSize = fontSize;
                            // 인덱스 노드 크기 조정 (indexContainer 패딩 고려)
                            const indexNodeAvailableWidth = indexWidth -
                                (indexContainer.paddingLeft + indexContainer.paddingRight);
                            indexNode.resize(indexNodeAvailableWidth, descNode.height);
                            // 인덱스 노드를 수직 중앙에 배치
                            indexNode.y = (indexContainer.height - indexNode.height) / 2;
                        }
                    }
                    else if (contentGroup) {
                        contentGroup.itemSpacing = gap / 2;
                        // 너비 고정, 높이 자동 조정
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.resize(child.width - (child.paddingLeft + child.paddingRight), contentGroup.height);
                        // 설명 텍스트 업데이트
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            descNode.fontSize = fontSize;
                            descNode.layoutSizingHorizontal = "FIXED";
                            descNode.resize(contentGroup.width -
                                (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                        }
                    }
                }
            }
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaW50ZXJmYWNlcy9jb25zdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IsIEFubm90YXRpb25TaXplIH0gZnJvbSBcIi4vZW51bXNcIjtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRGb250U2l6ZXMgPSB7XG4gICAgW0Fubm90YXRpb25TaXplLlNNQUxMXToge1xuICAgICAgICBiYWRnZVNpemU6IDI0LFxuICAgICAgICBiYWRnZVRleHQ6IDE0LFxuICAgICAgICBkZXNyaXB0aW9uOiAxNCxcbiAgICAgICAgZ2FwOiA4LFxuICAgIH0sXG4gICAgW0Fubm90YXRpb25TaXplLk1FRElVTV06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAzMixcbiAgICAgICAgYmFkZ2VUZXh0OiAxOCxcbiAgICAgICAgZGVzcmlwdGlvbjogMTgsXG4gICAgICAgIGdhcDogMTAsXG4gICAgfSxcbiAgICBbQW5ub3RhdGlvblNpemUuTEFSR0VdOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMzYsXG4gICAgICAgIGJhZGdlVGV4dDogMjEsXG4gICAgICAgIGRlc3JpcHRpb246IDIxLFxuICAgICAgICBnYXA6IDEyLFxuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbG9ycyA9IHtcbiAgICBbQW5ub3RhdGlvbkNvbG9yLlJFRF06IFwiYmctc3ViUmVkLTAxXCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5QVVJQTEVdOiBcImJnLXByaW1hcnlcIixcbiAgICBbQW5ub3RhdGlvbkNvbG9yLkJMQUNLXTogXCJiZy1ibGFja1wiLFxufTtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRDYXJkV2lkdGggPSB7XG4gICAgW0Fubm90YXRpb25TaXplLlNNQUxMXTogMzIwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5NRURJVU1dOiA0MDAsXG4gICAgW0Fubm90YXRpb25TaXplLkxBUkdFXTogNDgwLFxufTtcbiIsImV4cG9ydCB2YXIgQW5ub3RhdGlvblNpemU7XG4oZnVuY3Rpb24gKEFubm90YXRpb25TaXplKSB7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiU01BTExcIl0gPSAwKV0gPSBcIlNNQUxMXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTUVESVVNXCJdID0gMSldID0gXCJNRURJVU1cIjtcbiAgICBBbm5vdGF0aW9uU2l6ZVsoQW5ub3RhdGlvblNpemVbXCJMQVJHRVwiXSA9IDIpXSA9IFwiTEFSR0VcIjtcbn0pKEFubm90YXRpb25TaXplIHx8IChBbm5vdGF0aW9uU2l6ZSA9IHt9KSk7XG5leHBvcnQgdmFyIEFubm90YXRpb25Db2xvcjtcbihmdW5jdGlvbiAoQW5ub3RhdGlvbkNvbG9yKSB7XG4gICAgQW5ub3RhdGlvbkNvbG9yWyhBbm5vdGF0aW9uQ29sb3JbXCJSRURcIl0gPSAwKV0gPSBcIlJFRFwiO1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiUFVSUExFXCJdID0gMSldID0gXCJQVVJQTEVcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIkJMQUNLXCJdID0gMildID0gXCJCTEFDS1wiO1xufSkoQW5ub3RhdGlvbkNvbG9yIHx8IChBbm5vdGF0aW9uQ29sb3IgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5ub3RhdGlvbkNhcmRXaWR0aDtcbihmdW5jdGlvbiAoQW5ubm90YXRpb25DYXJkV2lkdGgpIHtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJTTUFMTFwiXSA9IDApXSA9IFwiU01BTExcIjtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJNRURJVU1cIl0gPSAxKV0gPSBcIk1FRElVTVwiO1xuICAgIEFubm5vdGF0aW9uQ2FyZFdpZHRoWyhBbm5ub3RhdGlvbkNhcmRXaWR0aFtcIkxBUkdFXCJdID0gMildID0gXCJMQVJHRVwiO1xufSkoQW5ubm90YXRpb25DYXJkV2lkdGggfHwgKEFubm5vdGF0aW9uQ2FyZFdpZHRoID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfSk7XG4vLyDtlYTsmpTtlZwg7IOB7IiY7JmAIGVudW0g6rCA7KC47Jik6riwXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IsIEFubm90YXRpb25TaXplLCBBbm5ub3RhdGlvbkNhcmRXaWR0aCwgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2VudW1zXCI7XG5pbXBvcnQgeyBzdXBwb3J0ZWRGb250U2l6ZXMsIHN1cHBvcnRlZENhcmRXaWR0aCwgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbnN0XCI7XG5sZXQgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuLy8g64W465Oc7J2YIOy1nOyDgeychCBGcmFtZeydhCDssL7ripQg7Jyg7Yu466as7YuwIO2VqOyImFxuZnVuY3Rpb24gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBub2RlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQucGFyZW50ICYmIGN1cnJlbnQucGFyZW50LnR5cGUgIT09IFwiUEFHRVwiKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnQudHlwZSkgPT09IFwiRlJBTUVcIiA/IGN1cnJlbnQgOiBudWxsO1xufVxuLy8g6re466O5IO2UhOugiOyehCDssL7quLAg7Ya17ZWpIO2VqOyImFxuZnVuY3Rpb24gZmluZEdyb3VwRnJhbWUoZ3JvdXBJZCwgZ3JvdXBGcmFtZUlkKSB7XG4gICAgLy8gMS4gZ3JvdXBGcmFtZUlk66GcIOyngeygkSDssL7quLBcbiAgICBpZiAoZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGZyYW1lICYmIGZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIilcbiAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gICAgLy8gMi4g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICBjb25zdCB0b3BGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwSWQpO1xuICAgIGlmICghdG9wRnJhbWUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vIDMuIHRvcEZyYW1l7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBjb25zdCBncm91cEZyYW1lSW5DaGlsZHJlbiA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgaWYgKGdyb3VwRnJhbWVJbkNoaWxkcmVuKVxuICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZUluQ2hpbGRyZW47XG4gICAgLy8gNC4g67aA66qo7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBpZiAodG9wRnJhbWUucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWVJblBhcmVudCA9IHRvcEZyYW1lLnBhcmVudC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIikgPT09IGdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBGcmFtZUluUGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwRnJhbWVJblBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vLyDsubTrk5wg64SI67mEIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0Q2FyZFdpZHRoQnlWYWx1ZSh3aWR0aFZhbHVlKSB7XG4gICAgaWYgKHdpZHRoVmFsdWUgPj0gMCAmJlxuICAgICAgICB3aWR0aFZhbHVlIDwgT2JqZWN0LmtleXMoQW5ubm90YXRpb25DYXJkV2lkdGgpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZENhcmRXaWR0aFt3aWR0aFZhbHVlXTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZENhcmRXaWR0aFtBbm5ub3RhdGlvbkNhcmRXaWR0aC5TTUFMTF07IC8vIOq4sOuzuOqwklxufVxuLy8g7Lm065OcIOuEiOu5hCDqs4TsgrDtlZjquLAgKOyeheugpeqwkiDrmJDripQg6riw67O46rCSIOyCrOyaqSlcbmZ1bmN0aW9uIGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSkge1xuICAgIHJldHVybiBjYXJkV2lkdGhWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZ2V0Q2FyZFdpZHRoQnlWYWx1ZShjYXJkV2lkdGhWYWx1ZSlcbiAgICAgICAgOiBnZXRDYXJkV2lkdGhCeVZhbHVlKEFubm5vdGF0aW9uQ2FyZFdpZHRoLlNNQUxMKTtcbn1cbi8vIOq3uOujuSDtlITroIjsnoQg7LC+6riwIOuYkOuKlCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBmaW5kT3JDcmVhdGVHcm91cEZyYW1lKGdyb3VwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gMS4g6riw7KG0IOq3uOujuSDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICBsZXQgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAvLyAyLiDssL7sp4Ag66q77ZWcIOqyveyasCDsg4jroZwg7IOd7ISxXG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5pZCk7XG4gICAgICAgICAgICBpZiAoIXRvcEZyYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBncm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCBncm91cC5pZCk7XG4gICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGdyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAvLyDsiqTtg4Dsnbwg67CPIOychOy5mCDshKTsoJUgLSDrtoDrqqgg7ZSE66CI7J6EIOuCtOu2gOydmCDsmrDsuKEg7IOB64uo7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgIC8vIOu2gOuqqCDtlITroIjsnoTsnZgg7Jqw7LihIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWI7Kq97Jy866GcIOychOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDsgLy8g7Jqw7Lih7JeQ7IScIOy5tOuTnCDrhIjruYTrp4ztgbwg7JWI7Kq97Jy866GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnkgPSAyMDsgLy8g7IOB64uo7JeQ7IScIOyVveqwhCDslYTrnpjroZxcbiAgICAgICAgICAgIGdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgMzAwKTtcbiAgICAgICAgICAgIC8vIGdyb3VwRnJhbWUuZmlsbHMgPSBbXG4gICAgICAgICAgICAvLyAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0sIG9wYWNpdHk6IDAuOCB9LFxuICAgICAgICAgICAgLy8gXTtcbiAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOu2gOuqqOqwgCDsl4bsnLzrqbQg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOq3uOujuSDsoJXrs7Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICBncm91cC5ncm91cEZyYW1lSWQgPSBncm91cEZyYW1lLmlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cEZyYW1lO1xuICAgIH0pO1xufVxuLy8g6re466O5IOuwjyDso7zshJ0g7KGw7ZqMIO2VqOyImFxuZnVuY3Rpb24gZmluZEdyb3VwKGdyb3VwSWQpIHtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkdyb3Vwcy5maW5kKChnKSA9PiBnLmlkID09PSBncm91cElkKTtcbn1cbi8vIOyjvOyEnSDssL7quLAg7ZWo7IiYXG5mdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZ3JvdXAuYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbn1cbi8vIOyDieyDgSDqsJIg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSkge1xuICAgIC8vIOyDieyDgSDqsJLsl5Ag65Sw6528IFJHQiDqsJIg67CY7ZmYXG4gICAgc3dpdGNoIChjb2xvclZhbHVlKSB7XG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlJFRDpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuOTMsIGc6IDAuMzcsIGI6IDAuMzcgfTsgLy8gUkVEXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlBVUlBMRTpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuNywgZzogMC41LCBiOiAwLjkgfTsgLy8gUFVSUExFXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLkJMQUNLOlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCB9OyAvLyBCTEFDS1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMC43LCBnOiAwLjUsIGI6IDAuOSB9OyAvLyDquLDrs7jqsJI6IFBVUlBMRVxuICAgIH1cbn1cbi8vIO2PsO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5kZXNyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5kZXNyaXB0aW9uOyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uYmFkZ2VTaXplO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5iYWRnZVNpemU7IC8vIOq4sOuzuOqwklxufVxuLy8g67Cw7KeAIO2FjeyKpO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZShzaXplVmFsdWUpIHtcbiAgICBpZiAoc2l6ZVZhbHVlID49IDAgJiYgc2l6ZVZhbHVlIDwgT2JqZWN0LmtleXMoQW5ub3RhdGlvblNpemUpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tzaXplVmFsdWVdLmJhZGdlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uYmFkZ2VUZXh0OyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngOulvCDsg53shLHtlZjripQg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uobm9kZSwgaW5kZXgsIGFubm90YXRpb25JZCwgY29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g67Cw7KeAIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBiYWRnZS5uYW1lID0gYEJhZGdlICR7aW5kZXh9YDtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2JhZGdlXCIpO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgLy8g67Cw7KeAIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgYmFkZ2UubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBiYWRnZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3JuZXJSYWRpdXMgPSA5OTk5OyAvLyDsm5DtmJXsnLzroZwg66eM65Ok6riwXG4gICAgICAgIC8vIOuwsOyngCDtgazquLAg7ISk7KCVIC0gc3VwcG9ydGVkRm9udFNpemVz7JeQ7IScIOqwgOyguOyYtFxuICAgICAgICBjb25zdCBiYWRnZVNpemUgPSBnZXRCYWRnZVNpemVCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgYmFkZ2UucmVzaXplKGJhZGdlU2l6ZSwgYmFkZ2VTaXplKTtcbiAgICAgICAgLy8g67Cw7KeAIOyDieyDgSDshKTsoJVcbiAgICAgICAgbGV0IGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoQW5ub3RhdGlvbkNvbG9yLlBVUlBMRSk7IC8vIOq4sOuzuCDrs7Trnbzsg4lcbiAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGJhZGdlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogYmFkZ2VDb2xvciB9XTtcbiAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDthY3siqTtirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluZGV4VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgaW5kZXhUZXh0LmNoYXJhY3RlcnMgPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAvLyDthY3siqTtirgg7YGs6riwIOyEpOyglSAtIHN1cHBvcnRlZEZvbnRTaXplc+yXkOyEnCDqsIDsoLjsmLRcbiAgICAgICAgaW5kZXhUZXh0LmZvbnRTaXplID0gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUoY29sb3IpO1xuICAgICAgICBpbmRleFRleHQuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTsgLy8g7Z2w7IOJIO2FjeyKpO2KuFxuICAgICAgICAvLyDrsLDsp4Dsl5Ag7YWN7Iqk7Yq4IOy2lOqwgFxuICAgICAgICBiYWRnZS5hcHBlbmRDaGlsZChpbmRleFRleHQpO1xuICAgICAgICAvLyDrsLDsp4Ag7JyE7LmYIOyEpOyglSAtIOyEoO2Dne2VnCDrhbjrk5wg7JyE7JeQIOuwsOy5mFxuICAgICAgICBiYWRnZS54ID0gbm9kZS54O1xuICAgICAgICBiYWRnZS55ID0gbm9kZS55IC0gYmFkZ2UuaGVpZ2h0IC0gNTsgLy8g64W465OcIOychOyXkCDslb3qsIQg6rCE6rKp7J2EIOuRkOqzoCDrsLDsuZhcbiAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKG5vZGUpO1xuICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6E7JeQIOuwsOyngCDstpTqsIBcbiAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOuYkOuKlCDrtoDrqqjqsIAg7JeG64qUIOqyveyasCDtmITsnqwg7Y6Y7J207KeA7JeQIOy2lOqwgFxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWRnZTtcbiAgICB9KTtcbn1cbi8vIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlQmFkZ2VJbmRpY2VzKGdyb3VwSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKFwi67Cw7KeAIOyduOuNseyKpCDsl4XrjbDsnbTtirgg7Iuc7J6ROlwiLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIFwi6rCc7J2YIOyjvOyEnVwiKTtcbiAgICAvLyDrqqjrk6Ag64W465Oc7JeQ7IScIOydtCDqt7jro7nsl5Ag7ZW064u57ZWY64qUIOuwsOyngCDssL7quLBcbiAgICBmaWdtYS5jdXJyZW50UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWQgPSBiYWRnZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpO1xuICAgICAgICAvLyDtlbTri7kg6re466O57JeQIOyGje2VnCDrsLDsp4Drp4wg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnM7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIOuwsOyngOydmCDthY3siqTtirgg7JeF642w7J207Yq4ICgx67aA7YSwIOyLnOyeke2VmOuKlCDsnbjrjbHsiqQg7IKs7JqpKVxuICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gYmFkZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRleHROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYW5ub3RhdGlvbkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuwsOyngCDsl4XrjbDsnbTtirg6ICR7YW5ub3RhdGlvbklkfSA9PiAke25ld0luZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gbmV3SW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImJhZGdlX2luZGV4XCIsIChhbm5vdGF0aW9uSW5kZXggKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g67Cw7KeAIOyCreygnCDtlajsiJhcbmZ1bmN0aW9uIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uSWQpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uSWQpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2UucmVtb3ZlKCkpO1xufVxuLy8g7KO87ISdIO2UhOugiOyehCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uRnJhbWUoYW5ub3RhdGlvbklkLCBpbmRleCwgY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g7KO87ISdIOy7qO2FjOydtOuEiCDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5uYW1lID0gYEFubm90YXRpb24gJHtpbmRleH1gO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsu6jthYzsnbTrhIgg7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAvLyBhbm5vdGF0aW9uRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuZmlsbHMgPSBbXTsgLy8g67Cw6rK97IOJIOygnOqxsFxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBnOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZVdlaWdodCA9IDE7IC8vIOyEoCDrkZDqu5g6IDFweFxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlVG9wV2VpZ2h0ID0gMDtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZUFsaWduID0gXCJJTlNJREVcIjsgLy8g7YWM65GQ66asIOychOy5mCAoSU5TSURFIHwgT1VUU0lERSB8IENFTlRFUilcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g64SI67mE66eMIOqzoOygle2VmOqzoCDrhpLsnbTripQg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUoY2FyZFdpZHRoIC0gMjAsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpOyAvLyDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbkZyYW1lO1xuICAgIH0pO1xufVxuLy8g64K07JqpIOq3uOujuSDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50R3JvdXAoYW5ub3RhdGlvbklkLCBmcmFtZVdpZHRoKSB7XG4gICAgLy8g7J24642x7Iqk7JmAIOyEpOuqheydhCDri7TsnYQg6re466O5IOyDneyEsVxuICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGVudEdyb3VwLm5hbWUgPSBcIkFubm90YXRpb24gQ29udGVudFwiO1xuICAgIGNvbnRlbnRHcm91cC5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICBjb250ZW50R3JvdXAuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgIC8vIOq3uOujuSDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgY29udGVudEdyb3VwLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgY29udGVudEdyb3VwLml0ZW1TcGFjaW5nID0gNDtcbiAgICBjb250ZW50R3JvdXAuZmlsbHMgPSBbXTsgLy8g67Cw6rK97IOJIOygnOqxsCAo7Yis66qFIOuwsOqyvSDsnKDsp4ApXG4gICAgLy8g64SI67mEIOqzhOyCsCAtIOyghOyytCDrhIjruYTsnZgg7JW9IDgwJeulvCDssKjsp4DtlZjrj4TroZ0g7KGw7KCVXG4gICAgY29uc3QgY29udGVudFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZVdpZHRoICogMC44KTtcbiAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgIHJldHVybiBjb250ZW50R3JvdXA7XG59XG4vLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUluZGV4Q29udGFpbmVyKGFubm90YXRpb25JZCwgZnJhbWVXaWR0aCkge1xuICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7IOd7ISxXG4gICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGluZGV4Q29udGFpbmVyLm5hbWUgPSBcIkFubm90YXRpb24gSW5kZXhcIjtcbiAgICBpbmRleENvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgIGluZGV4Q29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgaW5kZXhDb250YWluZXIubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBpbmRleENvbnRhaW5lci5pdGVtU3BhY2luZyA9IDQ7XG4gICAgaW5kZXhDb250YWluZXIucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICBpbmRleENvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgIGluZGV4Q29udGFpbmVyLmZpbGxzID0gW1xuICAgICAgICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMjQ1IC8gMjU1LCBnOiAyNDUgLyAyNTUsIGI6IDI0NSAvIDI1NSB9IH0sXG4gICAgXTsgLy8g67Cw6rK97IOJIOyEpOyglVxuICAgIC8vIOuEiOu5hCDqs4TsgrAgLSDsoITssrQg64SI67mE7J2YIOyVvSAyMCXrpbwg7LCo7KeA7ZWY64+E66GdIOyhsOyglVxuICAgIGNvbnN0IGluZGV4V2lkdGggPSBNYXRoLnJvdW5kKGZyYW1lV2lkdGggKiAwLjIpO1xuICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgcmV0dXJuIGluZGV4Q29udGFpbmVyO1xufVxuLy8g7J24642x7IqkIOuFuOuTnCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVJbmRleE5vZGUoYW5ub3RhdGlvbklkLCBpbmRleCwgc2l6ZVZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y+w7Yq4IOuhnOuTnFxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBpbmRleE5vZGUuY2hhcmFjdGVycyA9IGAke2luZGV4fWA7XG4gICAgICAgIGluZGV4Tm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgIGluZGV4Tm9kZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgaW5kZXhOb2RlLmZvbnRTaXplID1cbiAgICAgICAgICAgIHNpemVWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKVxuICAgICAgICAgICAgICAgIDogZ2V0Rm9udFNpemVCeVZhbHVlKEFubm90YXRpb25TaXplLlNNQUxMKTsgLy8g6riw67O46rCSIOyCrOyaqVxuICAgICAgICBpbmRleE5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOygleugrCDshKTsoJVcbiAgICAgICAgaW5kZXhOb2RlLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICBpbmRleE5vZGUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICByZXR1cm4gaW5kZXhOb2RlO1xuICAgIH0pO1xufVxuLy8g7ISk66qFIO2FjeyKpO2KuCDrhbjrk5wg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb25Ob2RlKGFubm90YXRpb25JZCwgdGV4dCA9IFwiTmV3IEFubm90YXRpb25cIiwgc2l6ZVZhbHVlLCBkZXNjcmlwdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDquLDrs7gg7Y+w7Yq466eMIOuovOyggCDroZzrk5wgKGFwcGx5UmljaFRleHRGb3JtYXR0aW5n7JeQ7IScIOy2lOqwgCDtj7Dtirgg66Gc65OcKVxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSB0ZXh0O1xuICAgICAgICB0ZXh0Tm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRleHROb2RlLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICB0ZXh0Tm9kZS5mb250U2l6ZSA9XG4gICAgICAgICAgICBzaXplVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gZ2V0Rm9udFNpemVCeVZhbHVlKHNpemVWYWx1ZSlcbiAgICAgICAgICAgICAgICA6IHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uZGVzcmlwdGlvbjtcbiAgICAgICAgdGV4dE5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g66as7LmYIO2FjeyKpO2KuCDshKTrqoUg642w7J207YSw6rCAIOyeiOycvOuptCDshJzsi50g7KCB7JqpXG4gICAgICAgIGlmIChkZXNjcmlwdGlvbkRhdGEgJiZcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50ICYmXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB5aWVsZCBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyh0ZXh0Tm9kZSwgZGVzY3JpcHRpb25EYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGV4dE5vZGU7XG4gICAgfSk7XG59XG4vLyDso7zshJ0g6rWs7ISxIOyalOyGjCDsg53shLEg7Ya17ZWpIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMoYW5ub3RhdGlvbklkLCBpbmRleCwgY29sb3JWYWx1ZSwgc2l6ZVZhbHVlLCBjYXJkV2lkdGhWYWx1ZSwgZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyAxLiDso7zshJ0g7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBjb25zdCBmcmFtZSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25GcmFtZShhbm5vdGF0aW9uSWQsIGluZGV4LCBjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC0gMjAgLSAoZnJhbWUucGFkZGluZ0xlZnQgKyBmcmFtZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAvLyAyLiDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNyZWF0ZUluZGV4Q29udGFpbmVyKGFubm90YXRpb25JZCwgYXZhaWxhYmxlV2lkdGgpO1xuICAgICAgICAvLyAzLiDrgrTsmqkg6re466O5IOyDneyEsVxuICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjcmVhdGVDb250ZW50R3JvdXAoYW5ub3RhdGlvbklkLCBhdmFpbGFibGVXaWR0aCk7XG4gICAgICAgIC8vIDQuIOyduOuNseyKpCDrhbjrk5wg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IHlpZWxkIGNyZWF0ZUluZGV4Tm9kZShhbm5vdGF0aW9uSWQsIGluZGV4LCBzaXplVmFsdWUpO1xuICAgICAgICAvLyA1LiDshKTrqoUg7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgY29uc3QgaW5pdGlhbFRleHQgPSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgPyBleHRyYWN0VGV4dEZyb21EZXNjcmlwdGlvbihkZXNjcmlwdGlvbilcbiAgICAgICAgICAgIDogXCJOZXcgQW5ub3RhdGlvblwiO1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IHlpZWxkIGNyZWF0ZURlc2NyaXB0aW9uTm9kZShhbm5vdGF0aW9uSWQsIGluaXRpYWxUZXh0LCBzaXplVmFsdWUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8gNi4g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVXG4gICAgICAgIHRleHROb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIHRleHROb2RlLnJlc2l6ZShjb250ZW50R3JvdXAud2lkdGggLSAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCksIHRleHROb2RlLmhlaWdodCk7XG4gICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5wg7YGs6riwIOyhsOyglVxuICAgICAgICBpbmRleE5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgaW5kZXhOb2RlLnJlc2l6ZShpbmRleENvbnRhaW5lci53aWR0aCwgdGV4dE5vZGUuaGVpZ2h0KTtcbiAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOulvCDsiJjsp4Eg7KSR7JWZ7JeQIOuwsOy5mFxuICAgICAgICBpbmRleE5vZGUueSA9ICh0ZXh0Tm9kZS5oZWlnaHQgLSBpbmRleE5vZGUuaGVpZ2h0KSAvIDI7XG4gICAgICAgIC8vIDcuIOuFuOuTnCDqtazshLFcbiAgICAgICAgaW5kZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5kZXhOb2RlKTtcbiAgICAgICAgY29udGVudEdyb3VwLmFwcGVuZENoaWxkKHRleHROb2RlKTtcbiAgICAgICAgLy8g7ZSE66CI7J6E7JeQIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDstpTqsIBcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoaW5kZXhDb250YWluZXIpO1xuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChjb250ZW50R3JvdXApO1xuICAgICAgICByZXR1cm4geyBmcmFtZSwgZ3JvdXA6IGNvbnRlbnRHcm91cCwgaW5kZXhOb2RlLCB0ZXh0Tm9kZSB9O1xuICAgIH0pO1xufVxuLy8g66mU7Iuc7KeAIOydkeuLtSDsoITshqEg7Jyg7Yu466as7YuwIO2VqOyImFxuZnVuY3Rpb24gc2VuZFJlc3BvbnNlKHR5cGUsIHJlc3VsdCwgZGF0YSA9IHt9LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gT2JqZWN0LmFzc2lnbih7IHJlc3VsdCB9LCBkYXRhKTtcbiAgICBpZiAoIXJlc3VsdCAmJiBlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZS5lcnJvck1lc3NhZ2UgPSBlcnJvck1lc3NhZ2U7XG4gICAgfVxuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZSB9KTtcbn1cbi8vIO2FjeyKpO2KuCDstpTstpwg7ZWo7IiYXG5mdW5jdGlvbiBleHRyYWN0VGV4dEZyb21EZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgIGlmICghZGVzY3JpcHRpb24gfHwgIWRlc2NyaXB0aW9uLmNvbnRlbnQpXG4gICAgICAgIHJldHVybiBcIk5ldyBBbm5vdGF0aW9uXCI7XG4gICAgbGV0IHRleHQgPSBcIlwiO1xuICAgIGZ1bmN0aW9uIGV4dHJhY3RUZXh0KG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUudGV4dCkge1xuICAgICAgICAgICAgdGV4dCArPSBub2RlLnRleHQgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50LmZvckVhY2goZXh0cmFjdFRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOqwgSDsg4HsnIQg66CI67KoIGNvbnRlbnQg7ZWt66qp7J2EIOyymOumrO2VmOqzoCDspITrsJTqv4gg7LaU6rCAXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb24uY29udGVudCkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudC5mb3JFYWNoKChjb250ZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAvLyDrhbjrk5wg64K07JqpIOy2lOy2nFxuICAgICAgICAgICAgaWYgKGNvbnRlbnROb2RlLnR5cGUgPT09IFwiYnVsbGV0TGlzdFwiIHx8XG4gICAgICAgICAgICAgICAgY29udGVudE5vZGUudHlwZSA9PT0gXCJwYXJhZ3JhcGhcIikge1xuICAgICAgICAgICAgICAgIGV4dHJhY3RUZXh0KGNvbnRlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOuLpOuluCDtg4DsnoXsnZgg64W465Oc64+EIOyymOumrFxuICAgICAgICAgICAgICAgIGV4dHJhY3RUZXh0KGNvbnRlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOqwgSDsu6jthZDsuKAg7ZWt66qpIOuSpOyXkCDspITrsJTqv4gg7LaU6rCAKOuniOyngOuniSDtla3rqqkg7KCc7Jm4KVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgZGVzY3JpcHRpb24uY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGV4dCArPSBcIlxcblwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQudHJpbSgpIHx8IFwiTmV3IEFubm90YXRpb25cIjtcbn1cbi8vIOuqqOuToCDso7zshJ0g7JqU7IaM7J2YIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG5mdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKSB7XG4gICAgLy8gYW5ub3RhdGlvbiDtg4DsnoXsnZgg7ZSE66CI7J6E66eMIO2VhO2EsOungVxuICAgIGNvbnN0IGFubm90YXRpb25GcmFtZXMgPSBncm91cEZyYW1lLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpO1xuICAgIC8vIO2VhO2EsOungeuQnCDso7zshJ0g7ZSE66CI7J6E65Ok7J2YIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgYW5ub3RhdGlvbkZyYW1lcy5mb3JFYWNoKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gaW5kZXhDb250YWluZXIuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpbmRleE5vZGUuY2hhcmFjdGVycyA9IGAke2luZGV4ICsgMX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g6riw7KG0IOugiOydtOyVhOybgyDqtazsobAg7KeA7JuQICjsnbTsoIQg67KE7KCE6rO87J2YIO2YuO2ZmOyEsSlcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUuY2hhcmFjdGVycyA9IGAke2luZGV4ICsgMX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6EIOydtOumhCDsl4XrjbDsnbTtirhcbiAgICAgICAgY2hpbGQubmFtZSA9IGBBbm5vdGF0aW9uICR7aW5kZXggKyAxfWA7XG4gICAgfSk7XG59XG4vLyBUaXRsZSDqt7jro7kg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlVGl0bGVHcm91cChncm91cElkLCBmcmFtZVdpZHRoLCBkZXNjcmlwdGlvblRleHQgPSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag7Luo7YWM7J2064SIIOyDneyEsVxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLm5hbWUgPSBcIlRpdGxlXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwiZ3JvdXBJZFwiLCBncm91cElkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5pdGVtU3BhY2luZyA9IDQ7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOqwgOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgICAgICBdOyAvLyDrsLDqsr3sg4kg7ISk7KCVXG4gICAgICAgIC8vYm9yZGVy7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnN0cm9rZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnN0cm9rZVdlaWdodCA9IDE7IC8vIOyEoCDrkZDqu5g6IDFweFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VBbGlnbiA9IFwiSU5TSURFXCI7IC8vIO2FjOuRkOumrCDsnITsuZggKElOU0lERSB8IE9VVFNJREUgfCBDRU5URVIpXG4gICAgICAgIC8vIOuEiOu5hCDshKTsoJVcbiAgICAgICAgdGl0bGVDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgdGl0bGVDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnJlc2l6ZShmcmFtZVdpZHRoLCB0aXRsZUNvbnRhaW5lci5oZWlnaHQpO1xuICAgICAgICAvLyBEZXNjcmlwdGlvbiDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuY2hhcmFjdGVycyA9IGRlc2NyaXB0aW9uVGV4dDtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwidGl0bGVfZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5mb250U2l6ZSA9IDE0O1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9XTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOygleugrCDshKTsoJVcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnRleHRBbGlnbkhvcml6b250YWwgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICBkZXNjcmlwdGlvbk5vZGUudGV4dEFsaWduVmVydGljYWwgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICAvLyDthY3siqTtirgg64SI67mEIOyEpOyglVxuICAgICAgICBkZXNjcmlwdGlvbk5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnJlc2l6ZShmcmFtZVdpZHRoIC0gKHRpdGxlQ29udGFpbmVyLnBhZGRpbmdMZWZ0ICsgdGl0bGVDb250YWluZXIucGFkZGluZ1JpZ2h0KSwgMzYpO1xuICAgICAgICAvLyDsu6jthYzsnbTrhIjsl5Ag7YWN7Iqk7Yq4IOuFuOuTnCDstpTqsIBcbiAgICAgICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Ob2RlKTtcbiAgICAgICAgcmV0dXJuIHRpdGxlQ29udGFpbmVyO1xuICAgIH0pO1xufVxuLy8gQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlLCB7fSwgXCJQbGVhc2Ugc2VsZWN0IGEgbGF5ZXIgb24gdGhlIGNhbnZhcy5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKHNlbGVjdGlvbik7XG4gICAgICAgIGlmICghdG9wRnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlLCB7fSwgXCJUb3AtbGV2ZWwgZnJhbWUgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdHcm91cElkID0gdG9wRnJhbWUuaWQ7XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwTmFtZSA9IHRvcEZyYW1lLm5hbWU7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXAgPSBmaW5kR3JvdXAobmV3R3JvdXBJZCk7XG4gICAgICAgIC8vIEFOTk9UQVRJT05fR1JPVVAg7IOd7ISxXG4gICAgICAgIGxldCBhbm5vdGF0aW9uR3JvdXBGcmFtZTtcbiAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgICAgICAgIC8vIOq4sOyhtCDqt7jro7kg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cEZyYW1lID0gdG9wRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0dyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGV4aXN0aW5nR3JvdXBGcmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOyYiOyDgey5mCDrqrvtlZjqsowg6re466O5IO2UhOugiOyehOydtCDsl4bri6TrqbQg7IOI66GcIOyDneyEsVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChleGlzdGluZ0dyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUueCA9IHRvcEZyYW1lLndpZHRoIC0gY2FyZFdpZHRoIC0gMjA7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUueSA9IDIwO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuZmlsbHMgPSBbXTsgLy8g67Cw6rK97IOJIOygnOqxsFxuICAgICAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1RvcCA9IDEwO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCA9IDEwO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCA9IDEwO1xuICAgICAgICAgICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkdyb3VwRnJhbWUpO1xuICAgICAgICAgICAgICAgIC8vIFRpdGxlIOq3uOujuSDsg53shLEg67CPIOy2lOqwgFxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgKGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdMZWZ0ICsgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0geWllbGQgY3JlYXRlVGl0bGVHcm91cChleGlzdGluZ0dyb3VwLmlkLCBhdmFpbGFibGVXaWR0aCwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyDiCDso7zshJ0g66mU66qo66asIOqwneyytCDsg53shLFcbiAgICAgICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g6re466O57JeQIOyjvOyEnSDstpTqsIAgKOuplOuqqOumrClcbiAgICAgICAgICAgIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKG5ld0Fubm90YXRpb24uaWQsIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBleGlzdGluZ0dyb3VwLmNvbG9yLCBleGlzdGluZ0dyb3VwLnNpemUsIGV4aXN0aW5nR3JvdXAuY2FyZFdpZHRoLCBuZXdBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25GcmFtZSk7XG4gICAgICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmNvbG9yKTtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDwn4aVIOyDiCDqt7jro7kg7IOd7ISxXG4gICAgICAgIC8vIDEuIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCB0b3BGcmFtZS5pZCk7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aCgoX2EgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FyZFdpZHRoKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSB0b3BGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS55ID0gMjA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgLy8g66CI7J207JWE7JuDIOuqqOuTnCDshKTsoJUgLSDshLjroZwg67Cw7LmYXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0JvdHRvbSA9IDEwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCA9IDEwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxMDtcbiAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkdyb3VwRnJhbWUpO1xuICAgICAgICAvLyBUaXRsZSDqt7jro7kg7IOd7ISxIOuwjyDstpTqsIBcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLVxuICAgICAgICAgICAgKGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdMZWZ0ICsgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IHlpZWxkIGNyZWF0ZVRpdGxlR3JvdXAodG9wRnJhbWUuaWQsIGF2YWlsYWJsZVdpZHRoLCBcIkRlc2NyaXB0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUdyb3VwKTtcbiAgICAgICAgLy8g6riw67O4IOyjvOyEnSDsg53shLFcbiAgICAgICAgY29uc3QgZGVmYXVsdEFubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKChfYiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZXNjcmlwdGlvbikgfHwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDqt7jro7nsl5AgcGx1Z2luRGF0YSDshKTsoJVcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJmcmFtZVwiKTtcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcImhhc19hbm5vdGF0aW9uX2dyb3VwXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcImdyb3VwX2lkXCIsIGRlZmF1bHRBbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgY29uc3QgbmV3R3JvdXAgPSBPYmplY3QuYXNzaWduKHsgaWQ6IG5ld0dyb3VwSWQsIG5hbWU6IG5ld0dyb3VwTmFtZSwgcmVsYXRlZFBhZ2U6IHtcbiAgICAgICAgICAgICAgICBpZDogZmlnbWEuY3VycmVudFBhZ2UuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZSxcbiAgICAgICAgICAgIH0sIGFubm90YXRpb25zOiBbZGVmYXVsdEFubm90YXRpb25dLCBvYnNvbGV0ZTogZmFsc2UsIGdyb3VwRnJhbWVJZDogYW5ub3RhdGlvbkdyb3VwRnJhbWUuaWQgfSwgbXNnLmNvbmZpZyk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cHMucHVzaChuZXdHcm91cCk7XG4gICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IHsgZnJhbWU6IGFubm90YXRpb25GcmFtZSB9ID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMoZGVmYXVsdEFubm90YXRpb24uaWQsIDEsIChfYyA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgKF9kID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNpemUsIChfZSA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYXJkV2lkdGgsIGRlZmF1bHRBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydhCDqt7jro7kg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgeWllbGQgY3JlYXRlQW5ub3RhdGlvbkJhZGdlKHNlbGVjdGlvbiwgMSwgZGVmYXVsdEFubm90YXRpb24uaWQsIChfZiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jb2xvcik7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdG9wRnJhbWVdKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gQ1JFQVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIOyDiCDso7zshJ0g6rCd7LK0IOyDneyEsVxuICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6re466O57JeQIOyjvOyEnSDstpTqsIBcbiAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IHlpZWxkIGZpbmRPckNyZWF0ZUdyb3VwRnJhbWUoZ3JvdXApO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLso7zshJ0g6re466O5IO2UhOugiOyehOydhCDssL7qsbDrgpgg7IOd7ISx7ZWgIOyImCDsl4bsirXri4jri6RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g7KO87ISdIFVJIOy7tO2PrOuEjO2KuCDsg53shLFcbiAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIGdyb3VwLmNvbG9yLCBncm91cC5zaXplLCBncm91cC5jYXJkV2lkdGgsIG5ld0Fubm90YXRpb24uZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIGdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgLy8g7ZiE7J6sIOyEoO2DneuQnCDrhbjrk5zsl5Ag67Cw7KeAIOyDneyEsVxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZ3JvdXAuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJDUkVBVEVfQU5OT1RBVElPTlwiLCB0cnVlLCB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBERUxFVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g6re466O5IOuCtOyXkOyEnCDso7zshJ0g7KCc6rGwXG4gICAgICAgIGdyb3VwLmFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnMuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIC8vIEZpZ21hIOy6lOuyhOyKpOyXkOyEnOuPhCDsgq3soJxcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g64Ko7JWE7J6I64qUIOyjvOyEnSDtlITroIjsnoTrk6TsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuwsOyngOuPhCDtlajqu5gg7IKt7KCcXG4gICAgICAgIHJlbW92ZUFubm90YXRpb25CYWRnZShtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIC8vIOuCqOyVhOyeiOuKlCBhbm5vdGF0aW9u65Ok7J2YIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4XG4gICAgICAgIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gREVMRVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVG9EZWxldGUgPSBmaW5kR3JvdXAobXNnLmdyb3VwLmlkKTtcbiAgICAgICAgaWYgKCFncm91cFRvRGVsZXRlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICBpZiAoZ3JvdXBUb0RlbGV0ZS5ncm91cEZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cFRvRGVsZXRlLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBGcmFtZSAmJiBncm91cEZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIC8vIOq3uOujueyXkCDsho3tlZwg66qo65OgIOyjvOyEneydmCDrsLDsp4Ag7IKt7KCcXG4gICAgICAgICAgICAgICAgZ3JvdXBUb0RlbGV0ZS5hbm5vdGF0aW9ucy5mb3JFYWNoKChhbm5vdGF0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyDtg4DsnbTti4Ag7Luo7YWM7J2064SIIOywvuq4sCDrsI8g7IKt7KCcICjrqoXsi5zsoIHsnLzroZwg7LKY66asKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOq3uOujuSDtlITroIjsnoQg7IKt7KCcXG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDrqZTrqqjrpqzsl5DshJwg6re466O5IOygnOqxsFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gYW5ub3RhdGlvbkdyb3Vwcy5maWx0ZXIoKGcpID0+IGcuaWQgIT09IG1zZy5ncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8g66as7LmYIO2FjeyKpO2KuCDshJzsi50g7KCB7JqpIO2VqOyImFxuZnVuY3Rpb24gYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcodGV4dE5vZGUsIGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGlmICghZGVzY3JpcHRpb25EYXRhIHx8ICFkZXNjcmlwdGlvbkRhdGEuY29udGVudClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g7ZWE7JqU7ZWcIOuqqOuToCDtj7Dtirgg66+466asIOuhnOuTnFxuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KSxcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDstIjquLDtmZRcbiAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IFwiXCI7XG4gICAgICAgIC8vIOuqqOuToCDshJzsi50g7KCV67O066W8IOuovOyggCDstpTstpxcbiAgICAgICAgY29uc3QgcmFuZ2VzID0gZXh0cmFjdEZvcm1hdHRpbmdSYW5nZXMoZGVzY3JpcHRpb25EYXRhKTtcbiAgICAgICAgbGV0IGN1cnJlbnRJbmRleCA9IDA7XG4gICAgICAgIC8vIOqwgSDrspTsnITrs4TroZwg7YWN7Iqk7Yq47JmAIOyEnOyLnSDsoIHsmqlcbiAgICAgICAgZm9yIChjb25zdCByYW5nZSBvZiByYW5nZXMpIHtcbiAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDstpTqsIBcbiAgICAgICAgICAgIGlmIChyYW5nZS50ZXh0ICYmIHJhbmdlLnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHJhbmdlLnRleHQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmluc2VydENoYXJhY3RlcnMoY3VycmVudEluZGV4LCByYW5nZS50ZXh0KTtcbiAgICAgICAgICAgICAgICAvLyDquLDrs7gg7Iqk7YOA7J28IOyEpOyglSAoUmVndWxhciDtj7DtirgsIOqygOydgOyDiSwg67CR7KSEIOyXhuydjClcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZvbnROYW1lKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJJbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGaWxscyhjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgW1xuICAgICAgICAgICAgICAgICAgICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH0sXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VUZXh0RGVjb3JhdGlvbihjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgXCJOT05FXCIpO1xuICAgICAgICAgICAgICAgIC8vIOuzvOuTnOyytCDsoIHsmqlcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2UuaXNCb2xkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRm9udE5hbWUoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseTogXCJJbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiQm9sZFwiLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g67CR7KSEIOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5pc1VuZGVybGluZSkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZVRleHREZWNvcmF0aW9uKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBcIlVOREVSTElORVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7IOJ7IOBIOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5jb2xvcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZ2JDb2xvciA9IGhleFRvUmdiKHJhbmdlLmNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJnYkNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZpbGxzKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByOiByZ2JDb2xvci5yIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZzogcmdiQ29sb3IuZyAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGI6IHJnYkNvbG9yLmIgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCArPSBsZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICBpZiAocmFuZ2UuYWRkTmV3TGluZSkge1xuICAgICAgICAgICAgICAgIHRleHROb2RlLmluc2VydENoYXJhY3RlcnMoY3VycmVudEluZGV4LCBcIlxcblwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDthY3siqTtirjqsIAg67mE7Ja07J6I7Jy866m0IOq4sOuzuOqwkiDshKTsoJVcbiAgICAgICAgaWYgKHRleHROb2RlLmNoYXJhY3RlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gXCJOZXcgQW5ub3RhdGlvblwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDtl6XsiqQg7IOJ7IOBIOy9lOuTnOulvCBSR0LroZwg67OA7ZmYXG5mdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgID8ge1xuICAgICAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB9XG4gICAgICAgIDogbnVsbDtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RGb3JtYXR0aW5nUmFuZ2VzKGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIGNvbnN0IHJhbmdlcyA9IFtdO1xuICAgIGZ1bmN0aW9uIHByb2Nlc3NOb2RlKG5vZGUsIHBhcmVudE1hcmtzID0gW10sIGlzTGlzdEl0ZW0gPSBmYWxzZSkge1xuICAgICAgICAvLyDthY3siqTtirgg64W465OcIOyymOumrCAtIOuFuOuTnOyXkCDsp4HsoJEg7J6I64qUIOuniO2BrOunjCDsoIHsmqlcbiAgICAgICAgaWYgKG5vZGUudGV4dCkge1xuICAgICAgICAgICAgLy8g7ZiE7J6sIOuFuOuTnOydmCDrp4jtgazrp4wg7IKs7JqpICjrtoDrqqgg66eI7YGsIOustOyLnClcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRNYXJrcyA9IG5vZGUubWFya3MgfHwgW107XG4gICAgICAgICAgICAvLyDrp4jtgawg67aE7ISdXG4gICAgICAgICAgICBjb25zdCBpc0JvbGQgPSBjdXJyZW50TWFya3Muc29tZSgobWFyaykgPT4gbWFyay50eXBlID09PSBcImJvbGRcIik7XG4gICAgICAgICAgICBjb25zdCBpc1VuZGVybGluZSA9IGN1cnJlbnRNYXJrcy5zb21lKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwidW5kZXJsaW5lXCIpO1xuICAgICAgICAgICAgY29uc3QgY29sb3JNYXJrID0gY3VycmVudE1hcmtzLmZpbmQoKG1hcmspID0+IG1hcmsudHlwZSA9PT0gXCJ0ZXh0U3R5bGVcIiAmJiBtYXJrLmF0dHJzICYmIG1hcmsuYXR0cnMuY29sb3IpO1xuICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuwjyDshJzsi50g7KCV67O0IOyggOyepVxuICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgIHRleHQ6IG5vZGUudGV4dCxcbiAgICAgICAgICAgICAgICBpc0JvbGQsXG4gICAgICAgICAgICAgICAgaXNVbmRlcmxpbmUsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiBpc0JvbGQgPyBcIkJvbGRcIiA6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvck1hcmsgPyBjb2xvck1hcmsuYXR0cnMuY29sb3IgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjsgLy8g7YWN7Iqk7Yq4IOuFuOuTnOuKlCDsnpDsi53snbQg7JeG7Jy866+A66GcIOyXrOq4sOyEnCDsooXro4xcbiAgICAgICAgfVxuICAgICAgICAvLyBidWxsZXRMaXN0IOyymOumrFxuICAgICAgICBpZiAobm9kZS50eXBlID09PSBcImJ1bGxldExpc3RcIiAmJlxuICAgICAgICAgICAgbm9kZS5jb250ZW50ICYmXG4gICAgICAgICAgICBBcnJheS5pc0FycmF5KG5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgIC8vIGJ1bGxldExpc3TsnZgg6rCBIGxpc3RJdGVtIOyymOumrFxuICAgICAgICAgICAgbm9kZS5jb250ZW50LmZvckVhY2goKGxpc3RJdGVtTm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAn4oCiICcg7LaU6rCA7ZWY7JesIOu2iOumvyDtkZzsi5xcbiAgICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwi4oCiIFwiLFxuICAgICAgICAgICAgICAgICAgICBpc0JvbGQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpc1VuZGVybGluZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB1bmRlZmluZWQsIC8vIOq4sOuzuCDsg4nsg4Eg7IKs7JqpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8gbGlzdEl0ZW0g64K07JqpIOyymOumrFxuICAgICAgICAgICAgICAgIGlmIChsaXN0SXRlbU5vZGUuY29udGVudCAmJiBBcnJheS5pc0FycmF5KGxpc3RJdGVtTm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0SXRlbU5vZGUuY29udGVudC5mb3JFYWNoKChjb250ZW50Tm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc05vZGUoY29udGVudE5vZGUsIFtdLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOuniOyngOuniSBsaXN0SXRlbeydtCDslYTri4jrqbQg7KSE67CU6r+IIOy2lOqwgFxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5vZGUuY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGROZXdMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDsnbzrsJgg7J6Q7IudIOuFuOuTnCDsspjrpqxcbiAgICAgICAgaWYgKG5vZGUuY29udGVudCAmJiBBcnJheS5pc0FycmF5KG5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUuY29udGVudC5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIO2VreyDgSDruYgg67aA66qoIOuniO2BrCDrsLDsl7Qg7KCE64usICjsiqTtg4Dsnbwg7IOB7IaNIOyViO2VqClcbiAgICAgICAgICAgICAgICBwcm9jZXNzTm9kZShjaGlsZCwgW10pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6rCBIOyDgeychCDroIjrsqgg7Luo7YWQ7LigIOyymOumrCDrsI8g7KSE67CU6r+IIOy2lOqwgFxuICAgIGlmIChkZXNjcmlwdGlvbkRhdGEuY29udGVudCAmJiBBcnJheS5pc0FycmF5KGRlc2NyaXB0aW9uRGF0YS5jb250ZW50KSkge1xuICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudC5mb3JFYWNoKChjb250ZW50Tm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIC8vIOqwgSDsu6jthZDsuKAg64W465OcIOyymOumrFxuICAgICAgICAgICAgcHJvY2Vzc05vZGUoY29udGVudE5vZGUsIFtdKTtcbiAgICAgICAgICAgIC8vIOuniOyngOuniSDtla3rqqnsnbQg7JWE64uI66m0IOykhOuwlOq/iCDstpTqsIBcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGRlc2NyaXB0aW9uRGF0YS5jb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGFkZE5ld0xpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcmFuZ2VzO1xufVxuLy8gVVBEQVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb24gPSBmaW5kQW5ub3RhdGlvbihtc2cuZ3JvdXBJZCwgbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgIGlmICghZ3JvdXAgfHwgIWFubm90YXRpb24pXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOuplOuqqOumrCDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgICAgIGFubm90YXRpb25bbXNnLmtleV0gPSBtc2cudmFsdWU7XG4gICAgICAgIC8vIOyLpOygnCBGaWdtYSDsmpTshozrj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKCFncm91cEZyYW1lKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDtlbTri7kgYW5ub3RhdGlvbiDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKCFhbm5vdGF0aW9uRnJhbWUpXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDrhbjrk5wg7LC+7JWEIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBhbm5vdGF0aW9uRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgLy8gY29udGVudCDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBhbm5vdGF0aW9uRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgIGlmICghY29udGVudEdyb3VwKVxuICAgICAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDrhbjrk5wg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8g66as7LmYIO2FjeyKpO2KuCDshJzsi50g7KCB7JqpXG4gICAgICAgICAgICAgICAgeWllbGQgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcoZGVzY05vZGUsIG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrAgLSDqt7jro7nsl5DshJwg7ISk7KCV65CcIGNhcmRXaWR0aCDqsJIg7IKs7JqpXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGdyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAgICAgLy8g7ZSE66CI7J6EIOuCtOyXkOyEnCDsgqzsmqkg6rCA64ql7ZWcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIDIwIC1cbiAgICAgICAgICAgICAgICAgICAgKGFubm90YXRpb25GcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25GcmFtZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIGRlc2NyaXB0aW9u7J20IOuzgOqyveuQmOuptCDroIjsnbTslYTsm4Mg7KGw7KCVXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUoY2FyZFdpZHRoIC0gMjAsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpOyAvLyDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleENvbnRhaW5lcuyZgCBjb250ZW50R3JvdXAg64SI67mEIOu5hOycqCDqs4TsgrAgKDIwOjgwKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChhdmFpbGFibGVXaWR0aCAqIDAuMik7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IE1hdGgucm91bmQoYXZhaWxhYmxlV2lkdGggKiAwLjgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleENvbnRhaW5lciDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLnJlc2l6ZShpbmRleFdpZHRoLCBpbmRleENvbnRhaW5lci5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250ZW50IOq3uOujuSDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnJlc2l6ZShjb250ZW50V2lkdGggLSAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCksIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5wg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOydmCDrhpLsnbTrpbwg7YWN7Iqk7Yq4IOuFuOuTnOydmCDrhpLsnbTsmYAg64+Z7J287ZWY6rKMIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnJlc2l6ZShpbmRleFdpZHRoLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOydmCDsiJjsp4Eg7JyE7LmYIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnkgPSAoaW5kZXhDb250YWluZXIuaGVpZ2h0IC0gaW5kZXhOb2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGV4Q29udGFpbmVyIOuGkuydtCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDquLDsobQg66CI7J207JWE7JuDIO2YuO2ZmOyEsSDsnKDsp4AgLSDsnbjrjbHsiqQg7Luo7YWM7J2064SI6rCAIOyXhuuKlCDqsr3smrBcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShhdmFpbGFibGVXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5yZXNpemUoYXZhaWxhYmxlV2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhbm5vdGF0aW9uR3JvdXBGcmFtZSDtgazquLAg7KGw7KCVICjrhIjruYTripQgY2FyZFdpZHRo66GcIOqzoOyglSwg64aS7J2064qUIOyekOuPmSDsobDsoJUpXG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCBncm91cEZyYW1lLmhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyBVUERBVEVfQU5OT1RBVElPTl9HUk9VUCDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uR3JvdXAobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqwg7IOB7YOcIOyXheuNsOydtO2KuFxuICAgICAgICBncm91cFttc2cua2V5XSA9IG1zZy52YWx1ZTtcbiAgICAgICAgLy8gRmlnbWEg7JqU7IaMIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBmcmFtZU5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5pZCk7XG4gICAgICAgIGlmIChmcmFtZU5vZGUpIHtcbiAgICAgICAgICAgIGZyYW1lTm9kZS5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOq3uOujuSDtlITroIjsnoTrj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGlmIChncm91cC5ncm91cEZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEobXNnLmtleSwgSlNPTi5zdHJpbmdpZnkobXNnLnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgLy8g7IOJ7IOBIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGlmIChtc2cua2V5ID09PSBcImNvbG9yXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JWYWx1ZSA9IHBhcnNlSW50KG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUdyb3VwRnJhbWVDb2xvcihncm91cEZyYW1lLCBjb2xvclZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGlmIChtc2cua2V5ID09PSBcInNpemVcIiB8fCBtc2cua2V5ID09PSBcImNhcmRXaWR0aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUdyb3VwRnJhbWVTaXplKGdyb3VwRnJhbWUsIG1zZy5rZXksIG1zZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gVVBEQVRFX0FOTk9UQVRJT05fT1JERVIg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbk9yZGVyKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IHsgZ3JvdXBJZCwgc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXggfSA9IG1zZztcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOuplOuqqOumrOyDgeydmCDso7zshJ0g7Iic7IScIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IFsuLi5ncm91cC5hbm5vdGF0aW9uc107XG4gICAgICAgIGNvbnN0IFttb3ZlZEFubm90YXRpb25dID0gYW5ub3RhdGlvbnMuc3BsaWNlKHNvdXJjZUluZGV4IC0gMSwgMSk7XG4gICAgICAgIGFubm90YXRpb25zLnNwbGljZShkZXN0aW5hdGlvbkluZGV4IC0gMSwgMCwgbW92ZWRBbm5vdGF0aW9uKTtcbiAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMgPSBhbm5vdGF0aW9ucztcbiAgICAgICAgLy8gRmlnbWEg7LqU67KE7IqkIOyDgeydmCDso7zshJ0g7Iic7IScIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSB8fCBncm91cEZyYW1lLnR5cGUgIT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuqqOuToCDsnpDsi50g7JqU7IaMIOykkSBhbm5vdGF0aW9uRnJhbWXrp4wg7ZWE7YSw66eBXG4gICAgICAgIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lcyA9IGdyb3VwRnJhbWUuY2hpbGRyZW4uZmlsdGVyKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIik7XG4gICAgICAgIC8vIOuplOuqqOumrOydmCDso7zshJ0g7Iic7ISc7JeQIOunnuqyjCBhbm5vdGF0aW9uRnJhbWXrk6TsnYQg7J6s7KCV66CsXG4gICAgICAgIGlmIChhbm5vdGF0aW9uRnJhbWVzLmxlbmd0aCA9PT0gYW5ub3RhdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyDqsIEg7KO87ISd7JeQIO2VtOuLue2VmOuKlCDtlITroIjsnoQg7LC+7JWE7IScIOyInOyEnOuMgOuhnCDsnqzrsLDsuZhcbiAgICAgICAgICAgIGFubm90YXRpb25zLmZvckVhY2goKGFubm90YXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbk5vZGUgPSBhbm5vdGF0aW9uRnJhbWVzLmZpbmQoKGZyYW1lKSA9PiBmcmFtZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAoYW5ub3RhdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI64qUIO2VreyDgSDrp6gg7JyE7JeQIOycoOyngO2VmOqzoCwg6re4IOuLpOydjOu2gO2EsCDso7zshJ0g7ZSE66CI7J6EIOuwsOy5mFxuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleCArIDHsnYAgVGl0bGUg7Luo7YWM7J2064SIIOuLpOydjCDsnITsuZjrtoDthLAg7Iuc7J6R7ZWc64uk64qUIOydmOuvuFxuICAgICAgICAgICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKGluZGV4ICsgMSwgYW5ub3RhdGlvbk5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI6rCAIOyeiOuLpOuptCDtla3sg4Eg66eoIOychOuhnCDsnbTrj5lcbiAgICAgICAgICAgIGlmICh0aXRsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoMCwgdGl0bGVDb250YWluZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7Iic7ISc6rCAIOuwlOuAkCDtm4Qg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICAgICAgLy8g67Cw7KeAIOyduOuNseyKpOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDquLDsobQg67Cp7IudICjsnpDsi50g7JqU7IaM7JmAIOyjvOyEnSDsiJjqsIAg7J287LmY7ZWY7KeAIOyViuydhCDqsr3smrDsnZgg7JiI7Jm4IOyymOumrClcbiAgICAgICAgICAgIC8vIFRpdGxlIOy7qO2FjOydtOuEiOulvCDsoJzsmbjtlZwg7KO87ISdIO2UhOugiOyehOunjCDtlYTthLDrp4FcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Ob2RlcyA9IGdyb3VwRnJhbWUuY2hpbGRyZW4uZmlsdGVyKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIik7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBhbm5vdGF0aW9uTm9kZXNbc291cmNlSW5kZXggLSAxXTsgLy8gMOu2gO2EsCDsi5zsnpHtlZjripQg7J24642x7Iqk66GcIOuzgO2ZmFxuICAgICAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgICAgIC8vIFRpdGxlIOy7qO2FjOydtOuEiOqwgCDsnojri6TrqbQg6re4IOychOy5mOulvCDqs6DroKTtlZjsl6wg7IK97J6FIOychOy5mCDqs4TsgrBcbiAgICAgICAgICAgICAgICBjb25zdCBpbnNlcnRBdCA9IHRpdGxlQ29udGFpbmVyID8gZGVzdGluYXRpb25JbmRleCA6IGRlc3RpbmF0aW9uSW5kZXggLSAxO1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoaW5zZXJ0QXQsIHNvdXJjZSk7XG4gICAgICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI6rCAIOyeiOuLpOuptCDtla3sg4Eg66eoIOychOuhnCDsnbTrj5lcbiAgICAgICAgICAgICAgICBpZiAodGl0bGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5pbnNlcnRDaGlsZCgwLCB0aXRsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOyInOyEnOqwgCDrsJTrgJAg7ZuEIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICAgICAgLy8g67Cw7KeAIOyduOuNseyKpOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICB1cGRhdGVCYWRnZUluZGljZXMoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gTU9WRV9UT19TRUxFQ1RJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlTW92ZVRvU2VsZWN0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIO2OmOydtOyngCBJROqwgCDsoJzqs7XrkJwg6rK97JqwIOuovOyggCDtlbTri7kg7Y6Y7J207KeA66GcIOydtOuPmVxuICAgICAgICBpZiAobXNnLnBhZ2VJZCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZU5vZGUgPSBmaWdtYS5yb290LmZpbmRPbmUoKG5vZGUpID0+IG5vZGUuaWQgPT09IG1zZy5wYWdlSWQpO1xuICAgICAgICAgICAgaWYgKHBhZ2VOb2RlICYmIHBhZ2VOb2RlLnR5cGUgPT09IFwiUEFHRVwiKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBwYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmIChncm91cE5vZGUpIHtcbiAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZ3JvdXBOb2RlXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g7J20IO2VuOuTpOufrOuKlCBVSeuhnCDsnZHri7XsnYQg67CY7ZmY7ZWY7KeAIOyViuydjFxuICAgIH0pO1xufVxuLy8gQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tDdXJyZW50U2VsZWN0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5ncm91cElkKTtcbiAgICAgICAgY29uc3QgZXhpc3RzID0gISFncm91cE5vZGU7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgIHJlc3VsdDogZXhpc3RzLFxuICAgICAgICAgICAgZ3JvdXBJZDogbXNnLmdyb3VwSWQsXG4gICAgICAgICAgICBvYnNvbGV0ZTogIWV4aXN0cyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBHRVRfRlJBTUVfSU1BR0Ug66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlR2V0RnJhbWVJbWFnZShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBmcmFtZUltYWdlcyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGdyb3VwIG9mIGFubm90YXRpb25Hcm91cHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwLmlkKTtcbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGUgJiYgZnJhbWVOb2RlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0geWllbGQgZnJhbWVOb2RlLmV4cG9ydEFzeW5jKHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBcIlBOR1wiLFxuICAgICAgICAgICAgICAgICAgICBjb25zdHJhaW50OiB7IHR5cGU6IFwiU0NBTEVcIiwgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBmcmFtZUltYWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJZDogZ3JvdXAuaWQsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YTogYGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCwke2ZpZ21hLmJhc2U2NEVuY29kZShpbWFnZSl9YCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJhbWVJbWFnZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwgeyBmcmFtZUltYWdlcyB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g66mU7Iuc7KeAIO2VuOuTpOufrCDshKTsoJVcbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gbXNnO1xuICAgIHRyeSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkNSRUFURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05cIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05cIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZURlbGV0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJERUxFVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZURlbGV0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlNBVkVfREFUQVwiOlxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cuZGF0YSkpO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgZmFsc2UsIHt9LCBTdHJpbmcoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTE9BRF9EQVRBXCI6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmF3ID0gZmlnbWEucm9vdC5nZXRQbHVnaW5EYXRhKG1zZy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSByYXcgPyBKU09OLnBhcnNlKHJhdykgOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyc2VkLCBcInBhcnNlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwcyA9IHBhcnNlZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHsga2V5OiBtc2cua2V5LCBkYXRhOiBwYXJzZWQgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgZmFsc2UsIHt9LCBTdHJpbmcoZXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ0xFQVJfQU5OT1RBVElPTl9EQVRBXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbkdyb3VwXCIsIFwiW11cIik7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlLCB7fSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR0VUX0ZJTEVfTkFNRVwiOlxuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlLCB7IGZpbGVOYW1lOiBmaWdtYS5yb290Lm5hbWUgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiR0VUX1BBR0VfTkFNRVwiOlxuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2UgPSBmaWdtYS5yb290LmZpbmRPbmUoKG4pID0+IG4uaWQgPT09IG1zZy5wYWdlSWQpO1xuICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VJZDogbXNnLnBhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU6IChwYWdlID09PSBudWxsIHx8IHBhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhZ2UubmFtZSkgfHwgXCJVbmtub3duIFBhZ2VcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJNT1ZFX1RPX1NFTEVDVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZU1vdmVUb1NlbGVjdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNIRUNLX0NVUlJFTlRfU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ2hlY2tDdXJyZW50U2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fT1JERVJcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRlJBTUVfSU1BR0VcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIG1lc3NhZ2UgdHlwZTpcIiwgbXNnLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBoYW5kbGluZyBtZXNzYWdlIHR5cGUgJHt0eXBlfTpgLCBlcnJvcik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgIH1cbn0pO1xuLy8g6re466O5IO2UhOugiOyehCDsg4nsg4Eg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlR3JvdXBGcmFtZUNvbG9yKGZyYW1lLCBjb2xvclZhbHVlKSB7XG4gICAgY29uc3QgaGVhZGVyQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSk7XG4gICAgLy8g7ZSE66CI7J6EIOyekOyytCDsg4nsg4Eg7JeF642w7J207Yq4IC0g67Cw6rK97IOJIOygnOqxsFxuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgLy8gVGl0bGUg6re466O5IOyymOumrFxuICAgIGNvbnN0IHRpdGxlR3JvdXAgPSBmcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICBpZiAodGl0bGVHcm91cCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag6re466O5IOuwsOqyveyDiSDsnKDsp4BcbiAgICAgICAgdGl0bGVHcm91cC5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8g66qo65OgIOyekOyLnSDso7zshJ0g7JqU7IaM65OkIOyymOumrFxuICAgIGZyYW1lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydmCDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICBjaGlsZC5maWxscyA9IFtdO1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDrsLDqsr3sg4kg7Jyg7KeAXG4gICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmZpbGxzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDqt7jro7kgSUQg6rCA7KC47Jik6riwIChwYXJlbnRfZnJhbWVfaWTsl5Ag7KCA7J6l65CY7Ja0IOyeiOydjClcbiAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICBpZiAoIXBhcmVudEZyYW1lSWQpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyDtlbTri7kg6re466O57J2YIOuqqOuToCDso7zshJ0gSUQg6rCA7KC47Jik6riwXG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAocGFyZW50RnJhbWVJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBncm91cC5hbm5vdGF0aW9ucy5tYXAoKGEpID0+IGEuaWQpO1xuICAgIC8vIO2OmOydtOyngOyXkOyEnCDtlbTri7kg6re466O57JeQIOyGje2VnCDrqqjrk6Ag67Cw7KeAIOywvuq4sFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlXG4gICAgICAgIC5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSkpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4ge1xuICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7IOJ7IOB66eMIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgYmFkZ2UuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBoZWFkZXJDb2xvciB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g6re466O5IO2UhOugiOyehCDtgazquLAg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlR3JvdXBGcmFtZVNpemUoZnJhbWUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiID8gZ2V0Q2FyZFdpZHRoQnlWYWx1ZSh2YWx1ZSkgOiBnZXRDYXJkV2lkdGgoKTtcbiAgICAgICAgLy8g7ZSE66CI7J6E7J20IOyGje2VnCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICAgICAgaWYgKHBhcmVudEZyYW1lSWQgJiYgcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQocGFyZW50RnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50RnJhbWUgJiYgcGFyZW50RnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8geCDsooztkZwg7JeF642w7J207Yq4IC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7Lih7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgICAgICBmcmFtZS54ID0gcGFyZW50RnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDrhIjruYTsmYAg64aS7J20IOyEpOyglSAo64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglSlcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICBmcmFtZS5yZXNpemUoY2FyZFdpZHRoLCBmcmFtZS5oZWlnaHQpO1xuICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgIGlmICh0aXRsZUdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICB0aXRsZUdyb3VwLnJlc2l6ZShhdmFpbGFibGVXaWR0aCwgdGl0bGVHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IHRpdGxlR3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnJlc2l6ZShhdmFpbGFibGVXaWR0aCAtICh0aXRsZUdyb3VwLnBhZGRpbmdMZWZ0ICsgdGl0bGVHcm91cC5wYWRkaW5nUmlnaHQpLCAzNik7XG4gICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IO2BrOq4sCDsl4XrjbDsnbTtirggKHNpemUg7IaN7ISx7J20IOuzgOqyveuQnCDqsr3smrApXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcInNpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDsgqzsnbTspogg6rCS7JeQIOuUsOuluCDsiqTtg4Dsnbwg67OA6rK9XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshozsnZgg64SI67mE64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIOuCtOyXkOyEnClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5ub3RhdGlvbkZyYW1lIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUoYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIO2MqOuUqSDqs6DroKQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUF2YWlsYWJsZVdpZHRoID0gYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDrhIjruYQg67mE7JyoIOqzhOyCsCAoMzA6NzApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZUF2YWlsYWJsZVdpZHRoICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGZyYW1lQXZhaWxhYmxlV2lkdGggLSBpbmRleFdpZHRoOyAvLyDsoJXtmZXtlZwg6rOE7IKw7J2EIOychO2VtCDrgpjrqLjsp4Ag64SI67mEIO2VoOuLuVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVIChjb250ZW50R3JvdXAg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXZhaWxhYmxlV2lkdGggPSBjb250ZW50V2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5yZXNpemUodGV4dEF2YWlsYWJsZVdpZHRoLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlICYmIGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOydmCDrhpLsnbTrpbwg7YWN7Iqk7Yq4IOuFuOuTnOydmCDrhpLsnbTsmYAg64+Z7J287ZWY6rKMIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZUF2YWlsYWJsZVdpZHRoID0gaW5kZXhXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleENvbnRhaW5lci5wYWRkaW5nTGVmdCArIGluZGV4Q29udGFpbmVyLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnJlc2l6ZShpbmRleE5vZGVBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc66W8IOyImOyngSDspJHslZnsl5Ag67Cw7LmYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnkgPSAoaW5kZXhDb250YWluZXIuaGVpZ2h0IC0gaW5kZXhOb2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J207KCEIOq1rOyhsOyZgOydmCDtmLjtmZjshLEg7Jyg7KeAICjquLDsobQg66CI7J207JWE7JuDKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IKs7JqpIOqwgOuKpe2VnCDrhIjruYQg6rOE7IKwIChhbm5vdGF0aW9uRnJhbWUg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQXZhaWxhYmxlV2lkdGggPSBhbm5vdGF0aW9uQXZhaWxhYmxlV2lkdGggLSAoY2hpbGQucGFkZGluZ0xlZnQgKyBjaGlsZC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShmcmFtZUF2YWlsYWJsZVdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVIChjb250ZW50R3JvdXAg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXZhaWxhYmxlV2lkdGggPSBmcmFtZUF2YWlsYWJsZVdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKHRleHRBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJzaXplXCIpIHtcbiAgICAgICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICBjb25zdCBnYXAgPSBzdXBwb3J0ZWRGb250U2l6ZXNbdmFsdWVdLmdhcDtcbiAgICAgICAgICAgIGNvbnN0IHBhZGRpbmcgPSBzdXBwb3J0ZWRGb250U2l6ZXNbdmFsdWVdO1xuICAgICAgICAgICAgLy8g66qo65OgIO2FjeyKpO2KuCDrhbjrk5zsl5Ag64yA7ZW0IO2PsO2KuCDroZzrk5xcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGZyYW1lLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuaXRlbVNwYWNpbmcgPSBnYXA7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJUsIOuGkuydtCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCksIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuCtOyaqSDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyICYmIGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLml0ZW1TcGFjaW5nID0gZ2FwIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIO2MqOuUqSDqs6DroKQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUF2YWlsYWJsZVdpZHRoID0gY2hpbGQud2lkdGggLSAoY2hpbGQucGFkZGluZ0xlZnQgKyBjaGlsZC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiOyZgCDrgrTsmqkg6re466O5IOuEiOu5hCDruYTsnKgg6rOE7IKwICgzMDo3MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4V2lkdGggPSBNYXRoLnJvdW5kKGZyYW1lQXZhaWxhYmxlV2lkdGggKiAwLjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gZnJhbWVBdmFpbGFibGVXaWR0aCAtIGluZGV4V2lkdGg7IC8vIOygle2Zle2VnCDqs4TsgrDsnYQg7JyE7ZW0IOuCmOuouOyngCDrhIjruYQg7ZWg64u5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIO2BrOq4sCDsobDsoJUgKGNvbnRlbnRHcm91cCDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRBdmFpbGFibGVXaWR0aCA9IGNvbnRlbnRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnJlc2l6ZSh0ZXh0QXZhaWxhYmxlV2lkdGgsIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465OcIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gaW5kZXhDb250YWluZXIuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUgJiYgZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465OcIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5wg7YGs6riwIOyhsOyglSAoaW5kZXhDb250YWluZXIg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGVBdmFpbGFibGVXaWR0aCA9IGluZGV4V2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaW5kZXhDb250YWluZXIucGFkZGluZ0xlZnQgKyBpbmRleENvbnRhaW5lci5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5yZXNpemUoaW5kZXhOb2RlQXZhaWxhYmxlV2lkdGgsIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOulvCDsiJjsp4Eg7KSR7JWZ7JeQIOuwsOy5mFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS55ID0gKGluZGV4Q29udGFpbmVyLmhlaWdodCAtIGluZGV4Tm9kZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5pdGVtU3BhY2luZyA9IGdhcCAvIDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrhIjruYQg6rOg7KCVLCDrhpLsnbQg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShjaGlsZC53aWR0aCAtIChjaGlsZC5wYWRkaW5nTGVmdCArIGNoaWxkLnBhZGRpbmdSaWdodCksIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7ISk66qFIO2FjeyKpO2KuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKGNvbnRlbnRHcm91cC53aWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KSwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9