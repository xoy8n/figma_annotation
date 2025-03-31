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
        if (property === "size") {
            // 폰트 크기 업데이트
            const fontSize = getFontSizeByValue(value);
            const gap = _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[value].gap;
            // 모든 텍스트 노드에 대해 폰트 로드
            yield figma.loadFontAsync({ family: "Inter", style: "Regular" });
            yield figma.loadFontAsync({ family: "Inter", style: "Bold" });
            // 그룹 ID 가져오기
            const parentFrameId = frame.getPluginData("parent_frame_id");
            if (parentFrameId) {
                const group = findGroup(parentFrameId);
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
                            const badgeSize = getBadgeSizeByValue(value);
                            badge.resize(badgeSize, badgeSize);
                            // 배지 내부 텍스트 크기 업데이트
                            const textNode = badge.findOne((node) => node.type === "TEXT");
                            if (textNode) {
                                textNode.fontSize = getBadgeTextSizeByValue(value);
                            }
                        }
                    }
                }
            }
            // 모든 자식 요소의 크기도 업데이트
            for (const child of frame.children) {
                if (child.type === "FRAME" &&
                    child.getPluginData("type") === "annotation") {
                    child.itemSpacing = gap;
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
                        // ... rest of the existing size update code for indexContainer and contentGroup ...
                    }
                }
            }
        }
        else if (property === "cardWidth") {
            // ... rest of the existing cardWidth update code ...
        }
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQ0FBbUM7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlFQUFrQjtBQUMxQztBQUNBLHdDQUF3QyxtQ0FBbUM7QUFDM0Usd0NBQXdDLGdDQUFnQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvY29uc3QudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9pbnRlcmZhY2VzL2VudW1zLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5ub3RhdGlvbkNvbG9yLCBBbm5vdGF0aW9uU2l6ZSB9IGZyb20gXCIuL2VudW1zXCI7XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkRm9udFNpemVzID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAyNCxcbiAgICAgICAgYmFkZ2VUZXh0OiAxNCxcbiAgICAgICAgZGVzcmlwdGlvbjogMTQsXG4gICAgICAgIGdhcDogOCxcbiAgICB9LFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5NRURJVU1dOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMzIsXG4gICAgICAgIGJhZGdlVGV4dDogMTgsXG4gICAgICAgIGRlc3JpcHRpb246IDE4LFxuICAgICAgICBnYXA6IDEwLFxuICAgIH0sXG4gICAgW0Fubm90YXRpb25TaXplLkxBUkdFXToge1xuICAgICAgICBiYWRnZVNpemU6IDM2LFxuICAgICAgICBiYWRnZVRleHQ6IDIxLFxuICAgICAgICBkZXNyaXB0aW9uOiAyMSxcbiAgICAgICAgZ2FwOiAxMixcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRDb2xvcnMgPSB7XG4gICAgW0Fubm90YXRpb25Db2xvci5SRURdOiBcImJnLXN1YlJlZC0wMVwiLFxuICAgIFtBbm5vdGF0aW9uQ29sb3IuUFVSUExFXTogXCJiZy1wcmltYXJ5XCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTEFDS106IFwiYmctYmxhY2tcIixcbn07XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkQ2FyZFdpZHRoID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IDMyMCxcbiAgICBbQW5ub3RhdGlvblNpemUuTUVESVVNXTogNDAwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5MQVJHRV06IDQ4MCxcbn07XG4iLCJleHBvcnQgdmFyIEFubm90YXRpb25TaXplO1xuKGZ1bmN0aW9uIChBbm5vdGF0aW9uU2l6ZSkge1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIlNNQUxMXCJdID0gMCldID0gXCJTTUFMTFwiO1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIk1FRElVTVwiXSA9IDEpXSA9IFwiTUVESVVNXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTEFSR0VcIl0gPSAyKV0gPSBcIkxBUkdFXCI7XG59KShBbm5vdGF0aW9uU2l6ZSB8fCAoQW5ub3RhdGlvblNpemUgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5vdGF0aW9uQ29sb3I7XG4oZnVuY3Rpb24gKEFubm90YXRpb25Db2xvcikge1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiUkVEXCJdID0gMCldID0gXCJSRURcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIlBVUlBMRVwiXSA9IDEpXSA9IFwiUFVSUExFXCI7XG4gICAgQW5ub3RhdGlvbkNvbG9yWyhBbm5vdGF0aW9uQ29sb3JbXCJCTEFDS1wiXSA9IDIpXSA9IFwiQkxBQ0tcIjtcbn0pKEFubm90YXRpb25Db2xvciB8fCAoQW5ub3RhdGlvbkNvbG9yID0ge30pKTtcbmV4cG9ydCB2YXIgQW5ubm90YXRpb25DYXJkV2lkdGg7XG4oZnVuY3Rpb24gKEFubm5vdGF0aW9uQ2FyZFdpZHRoKSB7XG4gICAgQW5ubm90YXRpb25DYXJkV2lkdGhbKEFubm5vdGF0aW9uQ2FyZFdpZHRoW1wiU01BTExcIl0gPSAwKV0gPSBcIlNNQUxMXCI7XG4gICAgQW5ubm90YXRpb25DYXJkV2lkdGhbKEFubm5vdGF0aW9uQ2FyZFdpZHRoW1wiTUVESVVNXCJdID0gMSldID0gXCJNRURJVU1cIjtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJMQVJHRVwiXSA9IDIpXSA9IFwiTEFSR0VcIjtcbn0pKEFubm5vdGF0aW9uQ2FyZFdpZHRoIHx8IChBbm5ub3RhdGlvbkNhcmRXaWR0aCA9IHt9KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNjAwIH0pO1xuLy8g7ZWE7JqU7ZWcIOyDgeyImOyZgCBlbnVtIOqwgOyguOyYpOq4sFxuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbG9yLCBBbm5vdGF0aW9uU2l6ZSwgQW5ubm90YXRpb25DYXJkV2lkdGgsIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnVtc1wiO1xuaW1wb3J0IHsgc3VwcG9ydGVkRm9udFNpemVzLCBzdXBwb3J0ZWRDYXJkV2lkdGgsIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb25zdFwiO1xubGV0IGFubm90YXRpb25Hcm91cHMgPSBbXTtcbi8vIOuFuOuTnOydmCDstZzsg4HsnIQgRnJhbWXsnYQg7LC+64qUIOycoO2LuOumrO2LsCDtlajsiJhcbmZ1bmN0aW9uIGdldFRvcExldmVsRnJhbWUobm9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50LnBhcmVudCAmJiBjdXJyZW50LnBhcmVudC50eXBlICE9PSBcIlBBR0VcIikge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50LnR5cGUpID09PSBcIkZSQU1FXCIgPyBjdXJyZW50IDogbnVsbDtcbn1cbi8vIOq3uOujuSDtlITroIjsnoQg7LC+6riwIO2Gte2VqSDtlajsiJhcbmZ1bmN0aW9uIGZpbmRHcm91cEZyYW1lKGdyb3VwSWQsIGdyb3VwRnJhbWVJZCkge1xuICAgIC8vIDEuIGdyb3VwRnJhbWVJZOuhnCDsp4HsoJEg7LC+6riwXG4gICAgaWYgKGdyb3VwRnJhbWVJZCkge1xuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmIChmcmFtZSAmJiBmcmFtZS50eXBlID09PSBcIkZSQU1FXCIpXG4gICAgICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICAgIC8vIDIuIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgY29uc3QgdG9wRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cElkKTtcbiAgICBpZiAoIXRvcEZyYW1lKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAzLiB0b3BGcmFtZeydmCDsnpDsi53sl5DshJwg7LC+6riwXG4gICAgY29uc3QgZ3JvdXBGcmFtZUluQ2hpbGRyZW4gPSB0b3BGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImdyb3VwXCIpO1xuICAgIGlmIChncm91cEZyYW1lSW5DaGlsZHJlbilcbiAgICAgICAgcmV0dXJuIGdyb3VwRnJhbWVJbkNoaWxkcmVuO1xuICAgIC8vIDQuIOu2gOuqqOydmCDsnpDsi53sl5DshJwg7LC+6riwXG4gICAgaWYgKHRvcEZyYW1lLnBhcmVudCkge1xuICAgICAgICBjb25zdCBncm91cEZyYW1lSW5QYXJlbnQgPSB0b3BGcmFtZS5wYXJlbnQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpID09PSBncm91cElkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWVJblBhcmVudClcbiAgICAgICAgICAgIHJldHVybiBncm91cEZyYW1lSW5QYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8g7Lm065OcIOuEiOu5hCDqsIDsoLjsmKTquLBcbmZ1bmN0aW9uIGdldENhcmRXaWR0aEJ5VmFsdWUod2lkdGhWYWx1ZSkge1xuICAgIGlmICh3aWR0aFZhbHVlID49IDAgJiZcbiAgICAgICAgd2lkdGhWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm5vdGF0aW9uQ2FyZFdpZHRoKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbd2lkdGhWYWx1ZV07XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbQW5ubm90YXRpb25DYXJkV2lkdGguU01BTExdOyAvLyDquLDrs7jqsJJcbn1cbi8vIOy5tOuTnCDrhIjruYQg6rOE7IKw7ZWY6riwICjsnoXroKXqsJIg65iQ64qUIOq4sOuzuOqwkiDsgqzsmqkpXG5mdW5jdGlvbiBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gY2FyZFdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGdldENhcmRXaWR0aEJ5VmFsdWUoY2FyZFdpZHRoVmFsdWUpXG4gICAgICAgIDogZ2V0Q2FyZFdpZHRoQnlWYWx1ZShBbm5ub3RhdGlvbkNhcmRXaWR0aC5TTUFMTCk7XG59XG4vLyDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDrmJDripQg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gZmluZE9yQ3JlYXRlR3JvdXBGcmFtZShncm91cCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIDEuIOq4sOyhtCDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgLy8gMi4g7LC+7KeAIOuqu+2VnCDqsr3smrAg7IOI66GcIOyDneyEsVxuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKCF0b3BGcmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIiwgZ3JvdXAuaWQpO1xuICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChncm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgICAgICAvLyDrtoDrqqgg7ZSE66CI7J6E7J2YIOyasOy4oSDsg4Hri6jsl5DshJwg7JW96rCEIOyViOyqveycvOuhnCDsnITsuZhcbiAgICAgICAgICAgIGdyb3VwRnJhbWUueCA9IHRvcEZyYW1lLndpZHRoIC0gY2FyZFdpZHRoIC0gMjA7IC8vIOyasOy4oeyXkOyEnCDsubTrk5wg64SI67mE66eM7YG8IOyViOyqveycvOuhnFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS55ID0gMjA7IC8vIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWE656Y66GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgICAgICAvLyBncm91cEZyYW1lLmZpbGxzID0gW1xuICAgICAgICAgICAgLy8gICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LCBvcGFjaXR5OiAwLjggfSxcbiAgICAgICAgICAgIC8vIF07XG4gICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglSAtIOyEuOuhnCDrsLDsuZhcbiAgICAgICAgICAgIGdyb3VwRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBpZiAodG9wRnJhbWUucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDrtoDrqqjqsIAg7JeG7Jy866m0IO2YhOyerCDtjpjsnbTsp4Dsl5Ag7LaU6rCAXG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDqt7jro7kg7KCV67O0IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZ3JvdXAuZ3JvdXBGcmFtZUlkID0gZ3JvdXBGcmFtZS5pZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZTtcbiAgICB9KTtcbn1cbi8vIOq3uOujuSDrsI8g7KO87ISdIOyhsO2ajCDtlajsiJhcbmZ1bmN0aW9uIGZpbmRHcm91cChncm91cElkKSB7XG4gICAgcmV0dXJuIGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gZ3JvdXBJZCk7XG59XG4vLyDso7zshJ0g7LC+6riwIO2VqOyImFxuZnVuY3Rpb24gZmluZEFubm90YXRpb24oZ3JvdXBJZCwgYW5ub3RhdGlvbklkKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIGdyb3VwLmFubm90YXRpb25zLmZpbmQoKGEpID0+IGEuaWQgPT09IGFubm90YXRpb25JZCk7XG59XG4vLyDsg4nsg4Eg6rCSIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0Q29sb3JCeVZhbHVlKGNvbG9yVmFsdWUpIHtcbiAgICAvLyDsg4nsg4Eg6rCS7JeQIOuUsOudvCBSR0Ig6rCSIOuwmO2ZmFxuICAgIHN3aXRjaCAoY29sb3JWYWx1ZSkge1xuICAgICAgICBjYXNlIEFubm90YXRpb25Db2xvci5SRUQ6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjkzLCBnOiAwLjM3LCBiOiAwLjM3IH07IC8vIFJFRFxuICAgICAgICBjYXNlIEFubm90YXRpb25Db2xvci5QVVJQTEU6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjcsIGc6IDAuNSwgYjogMC45IH07IC8vIFBVUlBMRVxuICAgICAgICBjYXNlIEFubm90YXRpb25Db2xvci5CTEFDSzpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAsIGc6IDAsIGI6IDAgfTsgLy8gQkxBQ0tcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuNywgZzogMC41LCBiOiAwLjkgfTsgLy8g6riw67O46rCSOiBQVVJQTEVcbiAgICB9XG59XG4vLyDtj7Dtirgg7YGs6riwIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0Rm9udFNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uZGVzcmlwdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uZGVzcmlwdGlvbjsgLy8g6riw67O46rCSXG59XG4vLyDrsLDsp4Ag7YGs6riwIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0QmFkZ2VTaXplQnlWYWx1ZShzaXplVmFsdWUpIHtcbiAgICBpZiAoc2l6ZVZhbHVlID49IDAgJiYgc2l6ZVZhbHVlIDwgT2JqZWN0LmtleXMoQW5ub3RhdGlvblNpemUpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tzaXplVmFsdWVdLmJhZGdlU2l6ZTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uYmFkZ2VTaXplOyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngCDthY3siqTtirgg7YGs6riwIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5iYWRnZVRleHQ7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbQW5ub3RhdGlvblNpemUuU01BTExdLmJhZGdlVGV4dDsgLy8g6riw67O46rCSXG59XG4vLyDrsLDsp4Drpbwg7IOd7ISx7ZWY64qUIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkJhZGdlKG5vZGUsIGluZGV4LCBhbm5vdGF0aW9uSWQsIGNvbG9yKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIC8vIOuwsOyngCDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGJhZGdlID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgYmFkZ2UubmFtZSA9IGBCYWRnZSAke2luZGV4fWA7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9iYWRnZVwiKTtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwiYmFkZ2VfaW5kZXhcIiwgaW5kZXgudG9TdHJpbmcoKSk7XG4gICAgICAgIC8vIOuwsOyngCDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIGJhZGdlLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgYmFkZ2UucHJpbWFyeUF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgYmFkZ2UuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgYmFkZ2UuY29ybmVyUmFkaXVzID0gOTk5OTsgLy8g7JuQ7ZiV7Jy866GcIOunjOuTpOq4sFxuICAgICAgICAvLyDrsLDsp4Ag7YGs6riwIOyEpOyglSAtIHN1cHBvcnRlZEZvbnRTaXplc+yXkOyEnCDqsIDsoLjsmLRcbiAgICAgICAgY29uc3QgYmFkZ2VTaXplID0gZ2V0QmFkZ2VTaXplQnlWYWx1ZShjb2xvcik7XG4gICAgICAgIGJhZGdlLnJlc2l6ZShiYWRnZVNpemUsIGJhZGdlU2l6ZSk7XG4gICAgICAgIC8vIOuwsOyngCDsg4nsg4Eg7ISk7KCVXG4gICAgICAgIGxldCBiYWRnZUNvbG9yID0gZ2V0Q29sb3JCeVZhbHVlKEFubm90YXRpb25Db2xvci5QVVJQTEUpOyAvLyDquLDrs7gg67O065287IOJXG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBiYWRnZUNvbG9yID0gZ2V0Q29sb3JCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBiYWRnZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGJhZGdlQ29sb3IgfV07XG4gICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7YWN7Iqk7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleFRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGluZGV4VGV4dC5jaGFyYWN0ZXJzID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IO2BrOq4sCDshKTsoJUgLSBzdXBwb3J0ZWRGb250U2l6ZXPsl5DshJwg6rCA7KC47Ji0XG4gICAgICAgIGluZGV4VGV4dC5mb250U2l6ZSA9IGdldEJhZGdlVGV4dFNpemVCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgaW5kZXhUZXh0LmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07IC8vIO2dsOyDiSDthY3siqTtirhcbiAgICAgICAgLy8g67Cw7KeA7JeQIO2FjeyKpO2KuCDstpTqsIBcbiAgICAgICAgYmFkZ2UuYXBwZW5kQ2hpbGQoaW5kZXhUZXh0KTtcbiAgICAgICAgLy8g67Cw7KeAIOychOy5mCDshKTsoJUgLSDshKDtg53tlZwg64W465OcIOychOyXkCDrsLDsuZhcbiAgICAgICAgYmFkZ2UueCA9IG5vZGUueDtcbiAgICAgICAgYmFkZ2UueSA9IG5vZGUueSAtIGJhZGdlLmhlaWdodCAtIDU7IC8vIOuFuOuTnCDsnITsl5Ag7JW96rCEIOqwhOqyqeydhCDrkZDqs6Ag67Cw7LmYXG4gICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKTtcbiAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOyXkCDrsLDsp4Ag7LaU6rCAXG4gICAgICAgIGlmICh0b3BGcmFtZSkge1xuICAgICAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDrmJDripQg67aA66qo6rCAIOyXhuuKlCDqsr3smrAg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFkZ2U7XG4gICAgfSk7XG59XG4vLyDrsLDsp4Ag7J24642x7IqkIOyXheuNsOydtO2KuCDtlajsiJhcbmZ1bmN0aW9uIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cElkKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IGdyb3VwSWQpO1xuICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zb2xlLmxvZyhcIuuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4IOyLnOyekTpcIiwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBcIuqwnOydmCDso7zshJ1cIik7XG4gICAgLy8g66qo65OgIOuFuOuTnOyXkOyEnCDsnbQg6re466O57JeQIO2VtOuLue2VmOuKlCDrsLDsp4Ag7LC+6riwXG4gICAgZmlnbWEuY3VycmVudFBhZ2VcbiAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiKVxuICAgICAgICAuZm9yRWFjaCgoYmFkZ2UpID0+IHtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkID0gYmFkZ2UuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKTtcbiAgICAgICAgLy8g7ZW064u5IOq3uOujueyXkCDsho3tlZwg67Cw7KeA66eMIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9ucyA9IGdyb3VwLmFubm90YXRpb25zO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uSW5kZXggPSBhbm5vdGF0aW9ucy5maW5kSW5kZXgoKGEpID0+IGEuaWQgPT09IGFubm90YXRpb25JZCk7XG4gICAgICAgIGlmIChhbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4DsnZgg7YWN7Iqk7Yq4IOyXheuNsOydtO2KuCAoMeu2gO2EsCDsi5zsnpHtlZjripQg7J24642x7IqkIOyCrOyaqSlcbiAgICAgICAgICAgIGlmIChiYWRnZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGJhZGdlLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdJbmRleCA9IGFubm90YXRpb25JbmRleCArIDE7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDrsLDsp4Ag7JeF642w7J207Yq4OiAke2Fubm90YXRpb25JZH0gPT4gJHtuZXdJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IG5ld0luZGV4LnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCAoYW5ub3RhdGlvbkluZGV4ICsgMSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIOuwsOyngCDsgq3soJwg7ZWo7IiYXG5mdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uQmFkZ2UoYW5ub3RhdGlvbklkKSB7XG4gICAgZmlnbWEuY3VycmVudFBhZ2VcbiAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gYW5ub3RhdGlvbklkKVxuICAgICAgICAuZm9yRWFjaCgoYmFkZ2UpID0+IGJhZGdlLnJlbW92ZSgpKTtcbn1cbi8vIOyjvOyEnSDtlITroIjsnoQg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlQW5ub3RhdGlvbkZyYW1lKGFubm90YXRpb25JZCwgaW5kZXgsIGNhcmRXaWR0aFZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIC8vIOyjvOyEnSDsu6jthYzsnbTrhIgg7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubmFtZSA9IGBBbm5vdGF0aW9uICR7aW5kZXh9YDtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgLy8g7Luo7YWM7J2064SIIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgLy8gYW5ub3RhdGlvbkZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgZzogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VXZWlnaHQgPSAxOyAvLyDshKAg65GQ6ruYOiAxcHhcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZVRvcFdlaWdodCA9IDA7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5zdHJva2VBbGlnbiA9IFwiSU5TSURFXCI7IC8vIO2FjOuRkOumrCDsnITsuZggKElOU0lERSB8IE9VVFNJREUgfCBDRU5URVIpXG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSk7XG4gICAgICAgIC8vIOuEiOu5hOunjCDqs6DsoJXtlZjqs6Ag64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVzaXplKGNhcmRXaWR0aCAtIDIwLCBhbm5vdGF0aW9uRnJhbWUuaGVpZ2h0KTsgLy8g7KKM7JqwIO2MqOuUqSDqs6DroKRcbiAgICAgICAgcmV0dXJuIGFubm90YXRpb25GcmFtZTtcbiAgICB9KTtcbn1cbi8vIOuCtOyaqSDqt7jro7kg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlQ29udGVudEdyb3VwKGFubm90YXRpb25JZCwgZnJhbWVXaWR0aCkge1xuICAgIC8vIOyduOuNseyKpOyZgCDshKTrqoXsnYQg64u07J2EIOq3uOujuSDsg53shLFcbiAgICBjb25zdCBjb250ZW50R3JvdXAgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGNvbnRlbnRHcm91cC5uYW1lID0gXCJBbm5vdGF0aW9uIENvbnRlbnRcIjtcbiAgICBjb250ZW50R3JvdXAuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgY29udGVudEdyb3VwLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAvLyDqt7jro7kg7Iqk7YOA7J28IOyEpOyglVxuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGNvbnRlbnRHcm91cC5pdGVtU3BhY2luZyA9IDQ7XG4gICAgY29udGVudEdyb3VwLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbAgKO2IrOuqhSDrsLDqsr0g7Jyg7KeAKVxuICAgIC8vIOuEiOu5hCDqs4TsgrAgLSDsoITssrQg64SI67mE7J2YIOyVvSA4MCXrpbwg7LCo7KeA7ZWY64+E66GdIOyhsOyglVxuICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IE1hdGgucm91bmQoZnJhbWVXaWR0aCAqIDAuOCk7XG4gICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICByZXR1cm4gY29udGVudEdyb3VwO1xufVxuLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVJbmRleENvbnRhaW5lcihhbm5vdGF0aW9uSWQsIGZyYW1lV2lkdGgpIHtcbiAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOyDneyEsVxuICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBpbmRleENvbnRhaW5lci5uYW1lID0gXCJBbm5vdGF0aW9uIEluZGV4XCI7XG4gICAgaW5kZXhDb250YWluZXIuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICBpbmRleENvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgIGluZGV4Q29udGFpbmVyLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgaW5kZXhDb250YWluZXIuaXRlbVNwYWNpbmcgPSA0O1xuICAgIGluZGV4Q29udGFpbmVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgaW5kZXhDb250YWluZXIuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICBpbmRleENvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgIF07IC8vIOuwsOqyveyDiSDshKTsoJVcbiAgICAvLyDrhIjruYQg6rOE7IKwIC0g7KCE7LK0IOuEiOu5hOydmCDslb0gMjAl66W8IOywqOyngO2VmOuPhOuhnSDsobDsoJVcbiAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZVdpZHRoICogMC4yKTtcbiAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgIGluZGV4Q29udGFpbmVyLnJlc2l6ZShpbmRleFdpZHRoLCBpbmRleENvbnRhaW5lci5oZWlnaHQpO1xuICAgIHJldHVybiBpbmRleENvbnRhaW5lcjtcbn1cbi8vIOyduOuNseyKpCDrhbjrk5wg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlSW5kZXhOb2RlKGFubm90YXRpb25JZCwgaW5kZXgsIHNpemVWYWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIO2PsO2KuCDroZzrk5xcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleH1gO1xuICAgICAgICBpbmRleE5vZGUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICBpbmRleE5vZGUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIGluZGV4Tm9kZS5mb250U2l6ZSA9XG4gICAgICAgICAgICBzaXplVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gZ2V0Rm9udFNpemVCeVZhbHVlKHNpemVWYWx1ZSlcbiAgICAgICAgICAgICAgICA6IGdldEZvbnRTaXplQnlWYWx1ZShBbm5vdGF0aW9uU2l6ZS5TTUFMTCk7IC8vIOq4sOuzuOqwkiDsgqzsmqlcbiAgICAgICAgaW5kZXhOb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIO2FjeyKpO2KuCDsoJXroKwg7ISk7KCVXG4gICAgICAgIGluZGV4Tm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgaW5kZXhOb2RlLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgcmV0dXJuIGluZGV4Tm9kZTtcbiAgICB9KTtcbn1cbi8vIOyEpOuqhSDthY3siqTtirgg64W465OcIOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uTm9kZShhbm5vdGF0aW9uSWQsIHRleHQgPSBcIk5ldyBBbm5vdGF0aW9uXCIsIHNpemVWYWx1ZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g6riw67O4IO2PsO2KuOunjCDrqLzsoIAg66Gc65OcIChhcHBseVJpY2hUZXh0Rm9ybWF0dGluZ+yXkOyEnCDstpTqsIAg7Y+w7Yq4IOuhnOuTnClcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICAgICAgdGV4dE5vZGUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0ZXh0Tm9kZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgdGV4dE5vZGUuZm9udFNpemUgPVxuICAgICAgICAgICAgc2l6ZVZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGdldEZvbnRTaXplQnlWYWx1ZShzaXplVmFsdWUpXG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0ZWRGb250U2l6ZXNbQW5ub3RhdGlvblNpemUuU01BTExdLmRlc3JpcHRpb247XG4gICAgICAgIHRleHROb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIOumrOy5mCDthY3siqTtirgg7ISk66qFIOuNsOydtO2EsOqwgCDsnojsnLzrqbQg7ISc7IudIOyggeyaqVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25EYXRhICYmXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudCAmJlxuICAgICAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgeWllbGQgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcodGV4dE5vZGUsIGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHROb2RlO1xuICAgIH0pO1xufVxuLy8g7KO87ISdIOq1rOyEsSDsmpTshowg7IOd7ISxIO2Gte2VqSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKGFubm90YXRpb25JZCwgaW5kZXgsIGNvbG9yVmFsdWUsIHNpemVWYWx1ZSwgY2FyZFdpZHRoVmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gMS4g7KO87ISdIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgZnJhbWUgPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uRnJhbWUoYW5ub3RhdGlvbklkLCBpbmRleCwgY2FyZFdpZHRoVmFsdWUpO1xuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpO1xuICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtIDIwIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgLy8gMi4g7J24642x7IqkIOy7qO2FjOydtOuEiCDsg53shLFcbiAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjcmVhdGVJbmRleENvbnRhaW5lcihhbm5vdGF0aW9uSWQsIGF2YWlsYWJsZVdpZHRoKTtcbiAgICAgICAgLy8gMy4g64K07JqpIOq3uOujuSDsg53shLFcbiAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY3JlYXRlQ29udGVudEdyb3VwKGFubm90YXRpb25JZCwgYXZhaWxhYmxlV2lkdGgpO1xuICAgICAgICAvLyA0LiDsnbjrjbHsiqQg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleE5vZGUgPSB5aWVsZCBjcmVhdGVJbmRleE5vZGUoYW5ub3RhdGlvbklkLCBpbmRleCwgc2l6ZVZhbHVlKTtcbiAgICAgICAgLy8gNS4g7ISk66qFIO2FjeyKpO2KuCDrhbjrk5wg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluaXRpYWxUZXh0ID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgID8gZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pXG4gICAgICAgICAgICA6IFwiTmV3IEFubm90YXRpb25cIjtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSB5aWVsZCBjcmVhdGVEZXNjcmlwdGlvbk5vZGUoYW5ub3RhdGlvbklkLCBpbml0aWFsVGV4dCwgc2l6ZVZhbHVlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIDYuIO2FjeyKpO2KuCDrhbjrk5wg7YGs6riwIOyhsOyglVxuICAgICAgICB0ZXh0Tm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICB0ZXh0Tm9kZS5yZXNpemUoY29udGVudEdyb3VwLndpZHRoIC0gKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpLCB0ZXh0Tm9kZS5oZWlnaHQpO1xuICAgICAgICAvLyDsnbjrjbHsiqQg64W465OcIO2BrOq4sCDsobDsoJVcbiAgICAgICAgaW5kZXhOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGluZGV4Tm9kZS5yZXNpemUoaW5kZXhDb250YWluZXIud2lkdGgsIHRleHROb2RlLmhlaWdodCk7XG4gICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5zrpbwg7IiY7KeBIOykkeyVmeyXkCDrsLDsuZhcbiAgICAgICAgaW5kZXhOb2RlLnkgPSAodGV4dE5vZGUuaGVpZ2h0IC0gaW5kZXhOb2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAvLyA3LiDrhbjrk5wg6rWs7ISxXG4gICAgICAgIGluZGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGluZGV4Tm9kZSk7XG4gICAgICAgIGNvbnRlbnRHcm91cC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgIC8vIO2UhOugiOyehOyXkCDsnbjrjbHsiqQg7Luo7YWM7J2064SI7JmAIOuCtOyaqSDqt7jro7kg7LaU6rCAXG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGluZGV4Q29udGFpbmVyKTtcbiAgICAgICAgZnJhbWUuYXBwZW5kQ2hpbGQoY29udGVudEdyb3VwKTtcbiAgICAgICAgcmV0dXJuIHsgZnJhbWUsIGdyb3VwOiBjb250ZW50R3JvdXAsIGluZGV4Tm9kZSwgdGV4dE5vZGUgfTtcbiAgICB9KTtcbn1cbi8vIOuplOyLnOyngCDsnZHri7Ug7KCE7IahIOycoO2LuOumrO2LsCDtlajsiJhcbmZ1bmN0aW9uIHNlbmRSZXNwb25zZSh0eXBlLCByZXN1bHQsIGRhdGEgPSB7fSwgZXJyb3JNZXNzYWdlKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oeyByZXN1bHQgfSwgZGF0YSk7XG4gICAgaWYgKCFyZXN1bHQgJiYgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlO1xuICAgIH1cbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2UgfSk7XG59XG4vLyDthY3siqTtirgg7LaU7LacIO2VqOyImFxuZnVuY3Rpb24gZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICBpZiAoIWRlc2NyaXB0aW9uIHx8ICFkZXNjcmlwdGlvbi5jb250ZW50KVxuICAgICAgICByZXR1cm4gXCJOZXcgQW5ub3RhdGlvblwiO1xuICAgIGxldCB0ZXh0ID0gXCJcIjtcbiAgICBmdW5jdGlvbiBleHRyYWN0VGV4dChub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnRleHQpIHtcbiAgICAgICAgICAgIHRleHQgKz0gbm9kZS50ZXh0ICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUuY29udGVudCAmJiBBcnJheS5pc0FycmF5KG5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgIG5vZGUuY29udGVudC5mb3JFYWNoKGV4dHJhY3RUZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDqsIEg7IOB7JyEIOugiOuyqCBjb250ZW50IO2VreuqqeydhCDsspjrpqztlZjqs6Ag7KSE67CU6r+IIOy2lOqwgFxuICAgIGlmIChBcnJheS5pc0FycmF5KGRlc2NyaXB0aW9uLmNvbnRlbnQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHRleHQubGVuZ3RoO1xuICAgICAgICAgICAgLy8g64W465OcIOuCtOyaqSDstpTstpxcbiAgICAgICAgICAgIGlmIChjb250ZW50Tm9kZS50eXBlID09PSBcImJ1bGxldExpc3RcIiB8fFxuICAgICAgICAgICAgICAgIGNvbnRlbnROb2RlLnR5cGUgPT09IFwicGFyYWdyYXBoXCIpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0VGV4dChjb250ZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDri6Trpbgg7YOA7J6F7J2YIOuFuOuTnOuPhCDsspjrpqxcbiAgICAgICAgICAgICAgICBleHRyYWN0VGV4dChjb250ZW50Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDqsIEg7Luo7YWQ7LigIO2VreuqqSDrkqTsl5Ag7KSE67CU6r+IIOy2lOqwgCjrp4jsp4Drp4kg7ZWt66qpIOygnOyZuClcbiAgICAgICAgICAgIGlmIChpbmRleCA8IGRlc2NyaXB0aW9uLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRleHQgKz0gXCJcXG5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnRyaW0oKSB8fCBcIk5ldyBBbm5vdGF0aW9uXCI7XG59XG4vLyDrqqjrk6Ag7KO87ISdIOyalOyGjOydmCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuZnVuY3Rpb24gdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSkge1xuICAgIC8vIGFubm90YXRpb24g7YOA7J6F7J2YIO2UhOugiOyehOunjCDtlYTthLDrp4FcbiAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWVzID0gZ3JvdXBGcmFtZS5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKTtcbiAgICAvLyDtlYTthLDrp4HrkJwg7KO87ISdIO2UhOugiOyehOuTpOydmCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgIGFubm90YXRpb25GcmFtZXMuZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7LC+6riwXG4gICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgIGlmIChpbmRleENvbnRhaW5lcikge1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICBpZiAoaW5kZXhOb2RlKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOq4sOyhtCDroIjsnbTslYTsm4Mg6rWs7KGwIOyngOybkCAo7J207KCEIOuyhOyghOqzvOydmCDtmLjtmZjshLEpXG4gICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehCDsnbTrpoQg7JeF642w7J207Yq4XG4gICAgICAgIGNoaWxkLm5hbWUgPSBgQW5ub3RhdGlvbiAke2luZGV4ICsgMX1gO1xuICAgIH0pO1xufVxuLy8gVGl0bGUg6re466O5IOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlR3JvdXAoZ3JvdXBJZCwgZnJhbWVXaWR0aCwgZGVzY3JpcHRpb25UZXh0ID0gXCJEZXNjcmlwdGlvblwiKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7YOA7J207YuAIOy7qO2FjOydtOuEiCDsg53shLFcbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5uYW1lID0gXCJUaXRsZVwiO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgdGl0bGVDb250YWluZXIuc2V0UGx1Z2luRGF0YShcImdyb3VwSWRcIiwgZ3JvdXBJZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgdGl0bGVDb250YWluZXIubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgdGl0bGVDb250YWluZXIuaXRlbVNwYWNpbmcgPSA0O1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTsgLy8g67Cw6rK97IOJIOyEpOyglVxuICAgICAgICAvL2JvcmRlcuyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICByOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VXZWlnaHQgPSAxOyAvLyDshKAg65GQ6ruYOiAxcHhcbiAgICAgICAgdGl0bGVDb250YWluZXIuc3Ryb2tlQWxpZ24gPSBcIklOU0lERVwiOyAvLyDthYzrkZDrpqwg7JyE7LmYIChJTlNJREUgfCBPVVRTSURFIHwgQ0VOVEVSKVxuICAgICAgICAvLyDrhIjruYQg7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5yZXNpemUoZnJhbWVXaWR0aCwgdGl0bGVDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmNoYXJhY3RlcnMgPSBkZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcInRpdGxlX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZm9udFNpemUgPSAxNDtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIO2FjeyKpO2KuCDsoJXroKwg7ISk7KCVXG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuEiOu5hCDshKTsoJVcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5yZXNpemUoZnJhbWVXaWR0aCAtICh0aXRsZUNvbnRhaW5lci5wYWRkaW5nTGVmdCArIHRpdGxlQ29udGFpbmVyLnBhZGRpbmdSaWdodCksIDM2KTtcbiAgICAgICAgLy8g7Luo7YWM7J2064SI7JeQIO2FjeyKpO2KuCDrhbjrk5wg7LaU6rCAXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XG4gICAgICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbiAgICB9KTtcbn1cbi8vIENSRUFURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiUGxlYXNlIHNlbGVjdCBhIGxheWVyIG9uIHRoZSBjYW52YXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXRvcEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiVG9wLWxldmVsIGZyYW1lIG5vdCBmb3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3R3JvdXBJZCA9IHRvcEZyYW1lLmlkO1xuICAgICAgICBjb25zdCBuZXdHcm91cE5hbWUgPSB0b3BGcmFtZS5uYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZmluZEdyb3VwKG5ld0dyb3VwSWQpO1xuICAgICAgICAvLyBBTk5PVEFUSU9OX0dST1VQIOyDneyEsVxuICAgICAgICBsZXQgYW5ub3RhdGlvbkdyb3VwRnJhbWU7XG4gICAgICAgIGlmIChleGlzdGluZ0dyb3VwKSB7XG4gICAgICAgICAgICAvLyDquLDsobQg6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXBGcmFtZSA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBleGlzdGluZ0dyb3VwRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDsmIjsg4HsuZgg66q77ZWY6rKMIOq3uOujuSDtlITroIjsnoTsnbQg7JeG64uk66m0IOyDiOuhnCDsg53shLFcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUubmFtZSA9IFwiQU5OT1RBVElPTl9HUk9VUFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoZXhpc3RpbmdHcm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vIOyKpO2DgOydvCDrsI8g7JyE7LmYIOyEpOyglSAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oSDsg4Hri6jsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSB0b3BGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnkgPSAyMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCAzMDApO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglSAtIOyEuOuhnCDrsLDsuZhcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nQm90dG9tID0gMTA7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyDsg4HsnIQg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICAgICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgICAgICAgICAvLyBUaXRsZSDqt7jro7kg7IOd7ISxIOuwjyDstpTqsIBcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIChhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IHlpZWxkIGNyZWF0ZVRpdGxlR3JvdXAoZXhpc3RpbmdHcm91cC5pZCwgYXZhaWxhYmxlV2lkdGgsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVHcm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsg4gg7KO87ISdIOuplOuqqOumrCDqsJ3ssrQg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIOq3uOujueyXkCDso7zshJ0g7LaU6rCAICjrqZTrqqjrpqwpXG4gICAgICAgICAgICBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgZXhpc3RpbmdHcm91cC5jb2xvciwgZXhpc3RpbmdHcm91cC5zaXplLCBleGlzdGluZ0dyb3VwLmNhcmRXaWR0aCwgbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uoc2VsZWN0aW9uLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZXhpc3RpbmdHcm91cC5jb2xvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICAgICAgdXBkYXRlZEdyb3VwOiBuZXdHcm91cElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g8J+GlSDsg4gg6re466O5IOyDneyEsVxuICAgICAgICAvLyAxLiDso7zshJ0g6re466O5IO2UhOugiOyehCDsg53shLFcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIiwgdG9wRnJhbWUuaWQpO1xuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoKF9hID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhcmRXaWR0aCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDrsI8g7JyE7LmYIOyEpOyglSAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oSDsg4Hri6jsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUueSA9IDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCAzMDApO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maWxscyA9IFtdOyAvLyDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nVG9wID0gMTA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0ID0gMTA7XG4gICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgLy8gVGl0bGUg6re466O5IOyDneyEsSDrsI8g7LaU6rCAXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC1cbiAgICAgICAgICAgIChhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIGNvbnN0IHRpdGxlR3JvdXAgPSB5aWVsZCBjcmVhdGVUaXRsZUdyb3VwKHRvcEZyYW1lLmlkLCBhdmFpbGFibGVXaWR0aCwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVHcm91cCk7XG4gICAgICAgIC8vIOq4sOuzuCDso7zshJ0g7IOd7ISxXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICgoX2IgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGVzY3JpcHRpb24pIHx8IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6re466O57JeQIHBsdWdpbkRhdGEg7ISk7KCVXG4gICAgICAgIHRvcEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZnJhbWVcIik7XG4gICAgICAgIHRvcEZyYW1lLnNldFBsdWdpbkRhdGEoXCJoYXNfYW5ub3RhdGlvbl9ncm91cFwiLCBcInRydWVcIik7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJncm91cF9pZFwiLCBkZWZhdWx0QW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwID0gT2JqZWN0LmFzc2lnbih7IGlkOiBuZXdHcm91cElkLCBuYW1lOiBuZXdHcm91cE5hbWUsIHJlbGF0ZWRQYWdlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGZpZ21hLmN1cnJlbnRQYWdlLmlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICB9LCBhbm5vdGF0aW9uczogW2RlZmF1bHRBbm5vdGF0aW9uXSwgb2Jzb2xldGU6IGZhbHNlLCBncm91cEZyYW1lSWQ6IGFubm90YXRpb25Hcm91cEZyYW1lLmlkIH0sIG1zZy5jb25maWcpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBzLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKGRlZmF1bHRBbm5vdGF0aW9uLmlkLCAxLCAoX2MgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29sb3IsIChfZCA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zaXplLCAoX2UgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuY2FyZFdpZHRoLCBkZWZhdWx0QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIDEsIGRlZmF1bHRBbm5vdGF0aW9uLmlkLCAoX2YgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY29sb3IpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RvcEZyYW1lXSk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9uR3JvdXBzLFxuICAgICAgICAgICAgdXBkYXRlZEdyb3VwOiBuZXdHcm91cElkLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIENSRUFURV9BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDsg4gg7KO87ISdIOqwneyytCDsg53shLFcbiAgICAgICAgY29uc3QgbmV3QW5ub3RhdGlvbiA9IHtcbiAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJkb2NcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIC8vIOq3uOujueyXkCDso7zshJ0g7LaU6rCAXG4gICAgICAgIGdyb3VwLmFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XG4gICAgICAgIC8vIOq3uOujuSDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSB5aWVsZCBmaW5kT3JDcmVhdGVHcm91cEZyYW1lKGdyb3VwKTtcbiAgICAgICAgaWYgKCFncm91cEZyYW1lKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi7KO87ISdIOq3uOujuSDtlITroIjsnoTsnYQg7LC+6rGw64KYIOyDneyEse2VoCDsiJgg7JeG7Iq164uI64ukXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IHsgZnJhbWU6IGFubm90YXRpb25GcmFtZSB9ID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMobmV3QW5ub3RhdGlvbi5pZCwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBncm91cC5jb2xvciwgZ3JvdXAuc2l6ZSwgZ3JvdXAuY2FyZFdpZHRoLCBuZXdBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydhCDqt7jro7kg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBncm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25GcmFtZSk7XG4gICAgICAgIC8vIO2YhOyerCDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgICAgICBpZiAoc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uoc2VsZWN0aW9uLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIG5ld0Fubm90YXRpb24uaWQsIGdyb3VwLmNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKFwiQ1JFQVRFX0FOTk9UQVRJT05cIiwgdHJ1ZSwge1xuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gREVMRVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOq3uOujuSDrgrTsl5DshJwg7KO87ISdIOygnOqxsFxuICAgICAgICBncm91cC5hbm5vdGF0aW9ucyA9IGdyb3VwLmFubm90YXRpb25zLmZpbHRlcigoYSkgPT4gYS5pZCAhPT0gbXNnLmFubm90YXRpb24uaWQpO1xuICAgICAgICAvLyBGaWdtYSDsupTrsoTsiqTsl5DshJzrj4Qg7IKt7KCcXG4gICAgICAgIGxldCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmIChncm91cEZyYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWUgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gbXNnLmFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgaWYgKGFubm90YXRpb25GcmFtZSkge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOuCqOyVhOyeiOuKlCDso7zshJ0g7ZSE66CI7J6E65Ok7J2YIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDrsLDsp4Drj4Qg7ZWo6ruYIOyCreygnFxuICAgICAgICByZW1vdmVBbm5vdGF0aW9uQmFkZ2UobXNnLmFubm90YXRpb24uaWQpO1xuICAgICAgICAvLyDrgqjslYTsnojripQgYW5ub3RhdGlvbuuTpOydmCDrsLDsp4Ag7J24642x7IqkIOyXheuNsOydtO2KuFxuICAgICAgICB1cGRhdGVCYWRnZUluZGljZXMoZ3JvdXAuaWQpO1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIERFTEVURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cFRvRGVsZXRlID0gZmluZEdyb3VwKG1zZy5ncm91cC5pZCk7XG4gICAgICAgIGlmICghZ3JvdXBUb0RlbGV0ZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgaWYgKGdyb3VwVG9EZWxldGUuZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBUb0RlbGV0ZS5ncm91cEZyYW1lSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwRnJhbWUgJiYgZ3JvdXBGcmFtZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDso7zshJ3snZgg67Cw7KeAIOyCreygnFxuICAgICAgICAgICAgICAgIGdyb3VwVG9EZWxldGUuYW5ub3RhdGlvbnMuZm9yRWFjaCgoYW5ub3RhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVBbm5vdGF0aW9uQmFkZ2UoYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgLy8g7YOA7J207YuAIOy7qO2FjOydtOuEiCDssL7quLAg67CPIOyCreygnCAo66qF7Iuc7KCB7Jy866GcIOyymOumrClcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQ29udGFpbmVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6EIOyCreygnFxuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g66mU66qo66as7JeQ7IScIOq3uOujuSDsoJzqsbBcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwcyA9IGFubm90YXRpb25Hcm91cHMuZmlsdGVyKChnKSA9PiBnLmlkICE9PSBtc2cuZ3JvdXAuaWQpO1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIOumrOy5mCDthY3siqTtirgg7ISc7IudIOyggeyaqSDtlajsiJhcbmZ1bmN0aW9uIGFwcGx5UmljaFRleHRGb3JtYXR0aW5nKHRleHROb2RlLCBkZXNjcmlwdGlvbkRhdGEpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBpZiAoIWRlc2NyaXB0aW9uRGF0YSB8fCAhZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIO2VhOyalO2VnCDrqqjrk6Ag7Y+w7Yq4IOuvuOumrCDroZzrk5xcbiAgICAgICAgeWllbGQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSksXG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KSxcbiAgICAgICAgXSk7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7LSI6riw7ZmUXG4gICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSBcIlwiO1xuICAgICAgICAvLyDrqqjrk6Ag7ISc7IudIOygleuztOulvCDrqLzsoIAg7LaU7LacXG4gICAgICAgIGNvbnN0IHJhbmdlcyA9IGV4dHJhY3RGb3JtYXR0aW5nUmFuZ2VzKGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICAgICAgICAvLyDqsIEg67KU7JyE67OE66GcIO2FjeyKpO2KuOyZgCDshJzsi50g7KCB7JqpXG4gICAgICAgIGZvciAoY29uc3QgcmFuZ2Ugb2YgcmFuZ2VzKSB7XG4gICAgICAgICAgICAvLyDthY3siqTtirgg7LaU6rCAXG4gICAgICAgICAgICBpZiAocmFuZ2UudGV4dCAmJiByYW5nZS50ZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSByYW5nZS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5pbnNlcnRDaGFyYWN0ZXJzKGN1cnJlbnRJbmRleCwgcmFuZ2UudGV4dCk7XG4gICAgICAgICAgICAgICAgLy8g6riw67O4IOyKpO2DgOydvCDshKTsoJUgKFJlZ3VsYXIg7Y+w7Yq4LCDqsoDsnYDsg4ksIOuwkeykhCDsl4bsnYwpXG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGb250TmFtZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHk6IFwiSW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRmlsbHMoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFtcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAsIGc6IDAsIGI6IDAgfSB9LFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlVGV4dERlY29yYXRpb24oY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFwiTk9ORVwiKTtcbiAgICAgICAgICAgICAgICAvLyDrs7zrk5zssrQg7KCB7JqpXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLmlzQm9sZCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZvbnROYW1lKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYW1pbHk6IFwiSW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIkJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOuwkeykhCDsoIHsmqlcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2UuaXNVbmRlcmxpbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VUZXh0RGVjb3JhdGlvbihjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgXCJVTkRFUkxJTkVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOyDieyDgSDsoIHsmqlcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2UuY29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmdiQ29sb3IgPSBoZXhUb1JnYihyYW5nZS5jb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZ2JDb2xvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGaWxscyhjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcjogcmdiQ29sb3IuciAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGc6IHJnYkNvbG9yLmcgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiOiByZ2JDb2xvci5iIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjdXJyZW50SW5kZXggKz0gbGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7KSE67CU6r+IIOy2lOqwgFxuICAgICAgICAgICAgaWYgKHJhbmdlLmFkZE5ld0xpbmUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5pbnNlcnRDaGFyYWN0ZXJzKGN1cnJlbnRJbmRleCwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g7YWN7Iqk7Yq46rCAIOu5hOyWtOyeiOycvOuptCDquLDrs7jqsJIg7ISk7KCVXG4gICAgICAgIGlmICh0ZXh0Tm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IFwiTmV3IEFubm90YXRpb25cIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g7Zel7IqkIOyDieyDgSDsvZTrk5zrpbwgUkdC66GcIOuzgO2ZmFxuZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgfVxuICAgICAgICA6IG51bGw7XG59XG5mdW5jdGlvbiBleHRyYWN0Rm9ybWF0dGluZ1JhbmdlcyhkZXNjcmlwdGlvbkRhdGEpIHtcbiAgICBjb25zdCByYW5nZXMgPSBbXTtcbiAgICBmdW5jdGlvbiBwcm9jZXNzTm9kZShub2RlLCBwYXJlbnRNYXJrcyA9IFtdLCBpc0xpc3RJdGVtID0gZmFsc2UpIHtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDsspjrpqwgLSDrhbjrk5zsl5Ag7KeB7KCRIOyeiOuKlCDrp4jtgazrp4wg7KCB7JqpXG4gICAgICAgIGlmIChub2RlLnRleHQpIHtcbiAgICAgICAgICAgIC8vIO2YhOyerCDrhbjrk5zsnZgg66eI7YGs66eMIOyCrOyaqSAo67aA66qoIOuniO2BrCDrrLTsi5wpXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TWFya3MgPSBub2RlLm1hcmtzIHx8IFtdO1xuICAgICAgICAgICAgLy8g66eI7YGsIOu2hOyEnVxuICAgICAgICAgICAgY29uc3QgaXNCb2xkID0gY3VycmVudE1hcmtzLnNvbWUoKG1hcmspID0+IG1hcmsudHlwZSA9PT0gXCJib2xkXCIpO1xuICAgICAgICAgICAgY29uc3QgaXNVbmRlcmxpbmUgPSBjdXJyZW50TWFya3Muc29tZSgobWFyaykgPT4gbWFyay50eXBlID09PSBcInVuZGVybGluZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yTWFyayA9IGN1cnJlbnRNYXJrcy5maW5kKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwidGV4dFN0eWxlXCIgJiYgbWFyay5hdHRycyAmJiBtYXJrLmF0dHJzLmNvbG9yKTtcbiAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrsI8g7ISc7IudIOygleuztCDsoIDsnqVcbiAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBub2RlLnRleHQsXG4gICAgICAgICAgICAgICAgaXNCb2xkLFxuICAgICAgICAgICAgICAgIGlzVW5kZXJsaW5lLFxuICAgICAgICAgICAgICAgIGZvbnRTdHlsZTogaXNCb2xkID8gXCJCb2xkXCIgOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JNYXJrID8gY29sb3JNYXJrLmF0dHJzLmNvbG9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47IC8vIO2FjeyKpO2KuCDrhbjrk5zripQg7J6Q7Iud7J20IOyXhuycvOuvgOuhnCDsl6zquLDshJwg7KKF66OMXG4gICAgICAgIH1cbiAgICAgICAgLy8gYnVsbGV0TGlzdCDsspjrpqxcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJidWxsZXRMaXN0XCIgJiZcbiAgICAgICAgICAgIG5vZGUuY29udGVudCAmJlxuICAgICAgICAgICAgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAvLyBidWxsZXRMaXN07J2YIOqwgSBsaXN0SXRlbSDsspjrpqxcbiAgICAgICAgICAgIG5vZGUuY29udGVudC5mb3JFYWNoKChsaXN0SXRlbU5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gJ+KAoiAnIOy2lOqwgO2VmOyXrCDrtojrpr8g7ZGc7IucXG4gICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIuKAoiBcIixcbiAgICAgICAgICAgICAgICAgICAgaXNCb2xkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaXNVbmRlcmxpbmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdW5kZWZpbmVkLCAvLyDquLDrs7gg7IOJ7IOBIOyCrOyaqVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vIGxpc3RJdGVtIOuCtOyaqSDsspjrpqxcbiAgICAgICAgICAgICAgICBpZiAobGlzdEl0ZW1Ob2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShsaXN0SXRlbU5vZGUuY29udGVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdEl0ZW1Ob2RlLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNvbnRlbnROb2RlLCBbXSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrp4jsp4Drp4kgbGlzdEl0ZW3snbQg7JWE64uI66m0IOykhOuwlOq/iCDstpTqsIBcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPCBub2RlLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTmV3TGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g7J2867CYIOyekOyLnSDrhbjrk5wg7LKY66asXG4gICAgICAgIGlmIChub2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDtla3sg4Eg67mIIOu2gOuqqCDrp4jtgawg67Cw7Je0IOyghOuLrCAo7Iqk7YOA7J28IOyDgeyGjSDslYjtlagpXG4gICAgICAgICAgICAgICAgcHJvY2Vzc05vZGUoY2hpbGQsIFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOqwgSDsg4HsnIQg66CI67KoIOy7qO2FkOy4oCDsspjrpqwg67CPIOykhOuwlOq/iCDstpTqsIBcbiAgICBpZiAoZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbkRhdGEuY29udGVudCkpIHtcbiAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQuZm9yRWFjaCgoY29udGVudE5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAvLyDqsIEg7Luo7YWQ7LigIOuFuOuTnCDsspjrpqxcbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNvbnRlbnROb2RlLCBbXSk7XG4gICAgICAgICAgICAvLyDrp4jsp4Drp4kg7ZWt66qp7J20IOyVhOuLiOuptCDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBkZXNjcmlwdGlvbkRhdGEuY29udGVudC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBhZGROZXdMaW5lOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlcztcbn1cbi8vIFVQREFURV9BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uID0gZmluZEFubm90YXRpb24obXNnLmdyb3VwSWQsIG1zZy5hbm5vdGF0aW9uSWQpO1xuICAgICAgICBpZiAoIWdyb3VwIHx8ICFhbm5vdGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqwg7IOB7YOcIOyXheuNsOydtO2KuFxuICAgICAgICBhbm5vdGF0aW9uW21zZy5rZXldID0gbXNnLnZhbHVlO1xuICAgICAgICAvLyDsi6TsoJwgRmlnbWEg7JqU7IaM64+EIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g7ZW064u5IGFubm90YXRpb24g7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWUgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgIGlmICghYW5ub3RhdGlvbkZyYW1lKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyBkZXNjcmlwdGlvbiDthY3siqTtirgg64W465OcIOywvuyVhCDsl4XrjbDsnbTtirhcbiAgICAgICAgaWYgKG1zZy5rZXkgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gYW5ub3RhdGlvbkZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIC8vIGNvbnRlbnQg6re466O5IOywvuq4sFxuICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gYW5ub3RhdGlvbkZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnRHcm91cClcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgICAgICAvLyBkZXNjcmlwdGlvbiDthY3siqTtirgg64W465OcIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgZGVzY05vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGlmIChkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgIC8vIOumrOy5mCDthY3siqTtirgg7ISc7IudIOyggeyaqVxuICAgICAgICAgICAgICAgIHlpZWxkIGFwcGx5UmljaFRleHRGb3JtYXR0aW5nKGRlc2NOb2RlLCBtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwIC0g6re466O57JeQ7IScIOyEpOygleuQnCBjYXJkV2lkdGgg6rCSIOyCrOyaqVxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChncm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vIO2UhOugiOyehCDrgrTsl5DshJwg7IKs7JqpIOqwgOuKpe2VnCDrhIjruYQg6rOE7IKwXG4gICAgICAgICAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAyMCAtXG4gICAgICAgICAgICAgICAgICAgIChhbm5vdGF0aW9uRnJhbWUucGFkZGluZ0xlZnQgKyBhbm5vdGF0aW9uRnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbuydtCDrs4Dqsr3rkJjrqbQg66CI7J207JWE7JuDIOyhsOyglVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVzaXplKGNhcmRXaWR0aCAtIDIwLCBhbm5vdGF0aW9uRnJhbWUuaGVpZ2h0KTsgLy8g7KKM7JqwIO2MqOuUqSDqs6DroKRcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZXhDb250YWluZXLsmYAgY29udGVudEdyb3VwIOuEiOu5hCDruYTsnKgg6rOE7IKwICgyMDo4MClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhXaWR0aCA9IE1hdGgucm91bmQoYXZhaWxhYmxlV2lkdGggKiAwLjIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50V2lkdGggPSBNYXRoLnJvdW5kKGF2YWlsYWJsZVdpZHRoICogMC44KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZXhDb250YWluZXIg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudCDqt7jro7kg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5yZXNpemUoY29udGVudFdpZHRoIC0gKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465OcIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBpbmRleENvbnRhaW5lci5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5zsnZgg64aS7J2066W8IO2FjeyKpO2KuCDrhbjrk5zsnZgg64aS7J207JmAIOuPmeydvO2VmOqyjCDshKTsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5yZXNpemUoaW5kZXhXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5zsnZgg7IiY7KeBIOychOy5mCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS55ID0gKGluZGV4Q29udGFpbmVyLmhlaWdodCAtIGluZGV4Tm9kZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyBpbmRleENvbnRhaW5lciDrhpLsnbQg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6riw7KG0IOugiOydtOyVhOybgyDtmLjtmZjshLEg7Jyg7KeAIC0g7J24642x7IqkIOy7qO2FjOydtOuEiOqwgCDsl4bripQg6rK97JqwXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoYXZhaWxhYmxlV2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKGF2YWlsYWJsZVdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KSwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gYW5ub3RhdGlvbkdyb3VwRnJhbWUg7YGs6riwIOyhsOyglSAo64SI67mE64qUIGNhcmRXaWR0aOuhnCDqs6DsoJUsIOuGkuydtOuKlCDsnpDrj5kg7KGw7KCVKVxuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgZ3JvdXBGcmFtZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gVVBEQVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g66mU66qo66asIOyDge2DnCDsl4XrjbDsnbTtirhcbiAgICAgICAgZ3JvdXBbbXNnLmtleV0gPSBtc2cudmFsdWU7XG4gICAgICAgIC8vIEZpZ21hIOyalOyGjCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICBpZiAoZnJhbWVOb2RlKSB7XG4gICAgICAgICAgICBmcmFtZU5vZGUuc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6E64+EIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgIGlmIChncm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIC8vIOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBwYXJzZUludChtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZ3JvdXBGcmFtZSwgY29sb3JWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJzaXplXCIgfHwgbXNnLmtleSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVHcm91cEZyYW1lU2l6ZShncm91cEZyYW1lLCBtc2cua2V5LCBtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIFVQREFURV9BTk5PVEFUSU9OX09SREVSIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb25PcmRlcihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB7IGdyb3VwSWQsIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4IH0gPSBtc2c7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqzsg4HsnZgg7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBbLi4uZ3JvdXAuYW5ub3RhdGlvbnNdO1xuICAgICAgICBjb25zdCBbbW92ZWRBbm5vdGF0aW9uXSA9IGFubm90YXRpb25zLnNwbGljZShzb3VyY2VJbmRleCAtIDEsIDEpO1xuICAgICAgICBhbm5vdGF0aW9ucy5zcGxpY2UoZGVzdGluYXRpb25JbmRleCAtIDEsIDAsIG1vdmVkQW5ub3RhdGlvbik7XG4gICAgICAgIGdyb3VwLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG4gICAgICAgIC8vIEZpZ21hIOy6lOuyhOyKpCDsg4HsnZgg7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUgfHwgZ3JvdXBGcmFtZS50eXBlICE9PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDrqqjrk6Ag7J6Q7IudIOyalOyGjCDspJEgYW5ub3RhdGlvbkZyYW1l66eMIO2VhO2EsOungVxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZXMgPSBncm91cEZyYW1lLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICAvLyDrqZTrqqjrpqzsnZgg7KO87ISdIOyInOyEnOyXkCDrp57qsowgYW5ub3RhdGlvbkZyYW1l65Ok7J2EIOyerOygleugrFxuICAgICAgICBpZiAoYW5ub3RhdGlvbkZyYW1lcy5sZW5ndGggPT09IGFubm90YXRpb25zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy8g6rCBIOyjvOyEneyXkCDtlbTri7ntlZjripQg7ZSE66CI7J6EIOywvuyVhOyEnCDsiJzshJzrjIDroZwg7J6s67Cw7LmYXG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5mb3JFYWNoKChhbm5vdGF0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25Ob2RlID0gYW5ub3RhdGlvbkZyYW1lcy5maW5kKChmcmFtZSkgPT4gZnJhbWUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICAgICAgaWYgKGFubm90YXRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRpdGxlIOy7qO2FjOydtOuEiOuKlCDtla3sg4Eg66eoIOychOyXkCDsnKDsp4DtlZjqs6AsIOq3uCDri6TsnYzrtoDthLAg7KO87ISdIO2UhOugiOyehCDrsLDsuZhcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZXggKyAx7J2AIFRpdGxlIOy7qO2FjOydtOuEiCDri6TsnYwg7JyE7LmY67aA7YSwIOyLnOyeke2VnOuLpOuKlCDsnZjrr7hcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5pbnNlcnRDaGlsZChpbmRleCArIDEsIGFubm90YXRpb25Ob2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRpdGxlIOy7qO2FjOydtOuEiOqwgCDsnojri6TrqbQg7ZWt7IOBIOunqCDsnITroZwg7J2064+ZXG4gICAgICAgICAgICBpZiAodGl0bGVDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKDAsIHRpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyInOyEnOqwgCDrsJTrgJAg7ZuEIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKTtcbiAgICAgICAgICAgIC8vIOuwsOyngCDsnbjrjbHsiqTrj4Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICB1cGRhdGVCYWRnZUluZGljZXMoZ3JvdXAuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g6riw7KG0IOuwqeyLnSAo7J6Q7IudIOyalOyGjOyZgCDso7zshJ0g7IiY6rCAIOydvOy5mO2VmOyngCDslYrsnYQg6rK97Jqw7J2YIOyYiOyZuCDsspjrpqwpXG4gICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjrpbwg7KCc7Jm47ZWcIOyjvOyEnSDtlITroIjsnoTrp4wg7ZWE7YSw66eBXG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uTm9kZXMgPSBncm91cEZyYW1lLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3Qgc291cmNlID0gYW5ub3RhdGlvbk5vZGVzW3NvdXJjZUluZGV4IC0gMV07IC8vIDDrtoDthLAg7Iuc7J6R7ZWY64qUIOyduOuNseyKpOuhnCDrs4DtmZhcbiAgICAgICAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjqsIAg7J6I64uk66m0IOq3uCDsnITsuZjrpbwg6rOg66Ck7ZWY7JesIOyCveyehSDsnITsuZgg6rOE7IKwXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zZXJ0QXQgPSB0aXRsZUNvbnRhaW5lciA/IGRlc3RpbmF0aW9uSW5kZXggOiBkZXN0aW5hdGlvbkluZGV4IC0gMTtcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKGluc2VydEF0LCBzb3VyY2UpO1xuICAgICAgICAgICAgICAgIC8vIFRpdGxlIOy7qO2FjOydtOuEiOqwgCDsnojri6TrqbQg7ZWt7IOBIOunqCDsnITroZwg7J2064+ZXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoMCwgdGl0bGVDb250YWluZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDsiJzshJzqsIAg67CU64CQIO2bhCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICAgICAgICAgIC8vIOuwsOyngCDsnbjrjbHsiqTrj4Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgdXBkYXRlQmFkZ2VJbmRpY2VzKGdyb3VwLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIE1PVkVfVE9fU0VMRUNUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZU1vdmVUb1NlbGVjdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtjpjsnbTsp4AgSUTqsIAg7KCc6rO165CcIOqyveyasCDrqLzsoIAg7ZW064u5IO2OmOydtOyngOuhnCDsnbTrj5lcbiAgICAgICAgaWYgKG1zZy5wYWdlSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOb2RlID0gZmlnbWEucm9vdC5maW5kT25lKChub2RlKSA9PiBub2RlLmlkID09PSBtc2cucGFnZUlkKTtcbiAgICAgICAgICAgIGlmIChwYWdlTm9kZSAmJiBwYWdlTm9kZS50eXBlID09PSBcIlBBR0VcIikge1xuICAgICAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gcGFnZU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBOb2RlKSB7XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2dyb3VwTm9kZV0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBDSEVDS19DVVJSRU5UX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBleGlzdHMgPSAhIWdyb3VwTm9kZTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgcmVzdWx0OiBleGlzdHMsXG4gICAgICAgICAgICBncm91cElkOiBtc2cuZ3JvdXBJZCxcbiAgICAgICAgICAgIG9ic29sZXRlOiAhZXhpc3RzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIEdFVF9GUkFNRV9JTUFHRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lSW1hZ2VzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYW5ub3RhdGlvbkdyb3Vwcykge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZSAmJiBmcmFtZU5vZGUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmcmFtZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiUE5HXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJTQ0FMRVwiLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZyYW1lSW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7ZmlnbWEuYmFzZTY0RW5jb2RlKGltYWdlKX1gLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFtZUltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZyYW1lSW1hZ2VzIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDrqZTsi5zsp4Ag7ZW465Ok65+sIOyEpOyglVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU0FWRV9EQVRBXCI6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMT0FEX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEobXNnLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHJhdyA/IEpTT04ucGFyc2UocmF3KSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWQsIFwicGFyc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgdHJ1ZSwgeyBrZXk6IG1zZy5rZXksIGRhdGE6IHBhcnNlZCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDTEVBUl9BTk5PVEFUSU9OX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uR3JvdXBcIiwgXCJbXVwiKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHt9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRklMRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHsgZmlsZU5hbWU6IGZpZ21hLnJvb3QubmFtZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfUEFHRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobikgPT4gbi5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUlkOiBtc2cucGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTogKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS5uYW1lKSB8fCBcIlVua25vd24gUGFnZVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1PVkVfVE9fU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvU2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT05cIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9PUkRFUlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25PcmRlcihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdFVF9GUkFNRV9JTUFHRVwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUdldEZyYW1lSW1hZ2UobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgbWVzc2FnZSB0eXBlOlwiLCBtc2cudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGhhbmRsaW5nIG1lc3NhZ2UgdHlwZSAke3R5cGV9OmAsIGVycm9yKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIGZhbHNlLCB7fSwgU3RyaW5nKGVycm9yKSk7XG4gICAgfVxufSk7XG4vLyDqt7jro7kg7ZSE66CI7J6EIOyDieyDgSDsl4XrjbDsnbTtirgg7ZWo7IiYXG5mdW5jdGlvbiB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZnJhbWUsIGNvbG9yVmFsdWUpIHtcbiAgICBjb25zdCBoZWFkZXJDb2xvciA9IGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKTtcbiAgICAvLyDtlITroIjsnoQg7J6Q7LK0IOyDieyDgSDsl4XrjbDsnbTtirggLSDrsLDqsr3sg4kg7KCc6rGwXG4gICAgZnJhbWUuZmlsbHMgPSBbXTtcbiAgICAvLyBUaXRsZSDqt7jro7kg7LKY66asXG4gICAgY29uc3QgdGl0bGVHcm91cCA9IGZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgIGlmICh0aXRsZUdyb3VwKSB7XG4gICAgICAgIC8vIO2DgOydtO2LgCDqt7jro7kg67Cw6rK97IOJIOycoOyngFxuICAgICAgICB0aXRsZUdyb3VwLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgICAgICBdO1xuICAgIH1cbiAgICAvLyDrqqjrk6Ag7J6Q7IudIOyjvOyEnSDsmpTshozrk6Qg7LKY66asXG4gICAgZnJhbWUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2YIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgIGNoaWxkLmZpbGxzID0gW107XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOuwsOqyveyDiSDsnKDsp4BcbiAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHsgcjogMjQ1IC8gMjU1LCBnOiAyNDUgLyAyNTUsIGI6IDI0NSAvIDI1NSB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsu6jthZDsuKAg6re466O5IOywvuq4sFxuICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAvLyDsu6jthZDsuKAg6re466O5IOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAuZmlsbHMgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIOq3uOujuSBJRCDqsIDsoLjsmKTquLAgKHBhcmVudF9mcmFtZV9pZOyXkCDsoIDsnqXrkJjslrQg7J6I7J2MKVxuICAgIGNvbnN0IHBhcmVudEZyYW1lSWQgPSBmcmFtZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpO1xuICAgIGlmICghcGFyZW50RnJhbWVJZClcbiAgICAgICAgcmV0dXJuO1xuICAgIC8vIO2VtOuLuSDqt7jro7nsnZgg66qo65OgIOyjvOyEnSBJRCDqsIDsoLjsmKTquLBcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChwYXJlbnRGcmFtZUlkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IGdyb3VwLmFubm90YXRpb25zLm1hcCgoYSkgPT4gYS5pZCk7XG4gICAgLy8g7Y6Y7J207KeA7JeQ7IScIO2VtOuLuSDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDrsLDsp4Ag7LC+6riwXG4gICAgZmlnbWEuY3VycmVudFBhZ2VcbiAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgIGFubm90YXRpb25JZHMuaW5jbHVkZXMobm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpKSlcbiAgICAgICAgLmZvckVhY2goKGJhZGdlKSA9PiB7XG4gICAgICAgIGlmIChiYWRnZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIC8vIOuwsOyngCDsg4nsg4Hrp4wg7JeF642w7J207Yq4XG4gICAgICAgICAgICBiYWRnZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGhlYWRlckNvbG9yIH1dO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDqt7jro7kg7ZSE66CI7J6EIO2BrOq4sCDsl4XrjbDsnbTtirgg7ZWo7IiYXG5mdW5jdGlvbiB1cGRhdGVHcm91cEZyYW1lU2l6ZShmcmFtZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIgPyBnZXRDYXJkV2lkdGhCeVZhbHVlKHZhbHVlKSA6IGdldENhcmRXaWR0aCgpO1xuICAgICAgICAvLyDtlITroIjsnoTsnbQg7IaN7ZWcIOu2gOuqqCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IHBhcmVudEZyYW1lSWQgPSBmcmFtZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpO1xuICAgICAgICBpZiAocGFyZW50RnJhbWVJZCAmJiBwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50RnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChwYXJlbnRGcmFtZUlkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRGcmFtZSAmJiBwYXJlbnRGcmFtZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAvLyB4IOyijO2RnCDsl4XrjbDsnbTtirggLSDrtoDrqqgg7ZSE66CI7J6EIOuCtOu2gOydmCDsmrDsuKHsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICAgICAgICAgIGZyYW1lLnggPSBwYXJlbnRGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOuEiOu5hOyZgCDrhpLsnbQg7ISk7KCVICjrhpLsnbTripQg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVKVxuICAgICAgICBmcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICBmcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgIGZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIGZyYW1lLmhlaWdodCk7XG4gICAgICAgIC8vIFRpdGxlIOq3uOujuSDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IHRpdGxlR3JvdXAgPSBmcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICAgICAgaWYgKHRpdGxlR3JvdXApIHtcbiAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgIC8vIFRpdGxlIOq3uOujuSDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICB0aXRsZUdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICB0aXRsZUdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgIHRpdGxlR3JvdXAucmVzaXplKGF2YWlsYWJsZVdpZHRoLCB0aXRsZUdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAvLyBEZXNjcmlwdGlvbiDthY3siqTtirgg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb25Ob2RlID0gdGl0bGVHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgIGlmIChkZXNjcmlwdGlvbk5vZGUpIHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbk5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbk5vZGUucmVzaXplKGF2YWlsYWJsZVdpZHRoIC0gKHRpdGxlR3JvdXAucGFkZGluZ0xlZnQgKyB0aXRsZUdyb3VwLnBhZGRpbmdSaWdodCksIDM2KTtcbiAgICAgICAgICAgICAgICAvLyDtj7Dtirgg7YGs6riwIOyXheuNsOydtO2KuCAoc2l6ZSDsho3shLHsnbQg67OA6rK965CcIOqyveyasClcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2PsO2KuCDroZzrk5xcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gZ2V0Rm9udFNpemVCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOyCrOydtOymiCDqsJLsl5Ag65Sw66W4IOyKpO2DgOydvCDrs4Dqsr1cbiAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcInNpemVcIikge1xuICAgICAgICAgICAgLy8g7Y+w7Yq4IO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGNvbnN0IGZvbnRTaXplID0gZ2V0Rm9udFNpemVCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIGNvbnN0IGdhcCA9IHN1cHBvcnRlZEZvbnRTaXplc1t2YWx1ZV0uZ2FwO1xuICAgICAgICAgICAgLy8g66qo65OgIO2FjeyKpO2KuCDrhbjrk5zsl5Ag64yA7ZW0IO2PsO2KuCDroZzrk5xcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSk7XG4gICAgICAgICAgICAvLyDqt7jro7kgSUQg6rCA7KC47Jik6riwXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRGcmFtZUlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAocGFyZW50RnJhbWVJZCk7XG4gICAgICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2VtOuLuSDqt7jro7nsnZgg66qo65OgIOyjvOyEnSBJRCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbklkcyA9IGdyb3VwLmFubm90YXRpb25zLm1hcCgoYSkgPT4gYS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIO2OmOydtOyngOyXkOyEnCDtlbTri7kg6re466O57JeQIOyGje2VnCDrqqjrk6Ag67Cw7KeAIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYWRnZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6rCBIOuwsOyngCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBiYWRnZSBvZiBiYWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiYWRnZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDrsLDsp4Ag7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhZGdlU2l6ZSA9IGdldEJhZGdlU2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhZGdlLnJlc2l6ZShiYWRnZVNpemUsIGJhZGdlU2l6ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g67Cw7KeAIOuCtOu2gCDthY3siqTtirgg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gYmFkZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRleHROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLmZvbnRTaXplID0gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOuqqOuToCDsnpDsi50g7JqU7IaM7J2YIO2BrOq4sOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZnJhbWUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5pdGVtU3BhY2luZyA9IGdhcDtcbiAgICAgICAgICAgICAgICAgICAgLy8g64SI67mEIOqzoOyglSwg64aS7J20IOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUoY2FyZFdpZHRoIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KSwgY2hpbGQuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiOyZgCDrgrTsmqkg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLiByZXN0IG9mIHRoZSBleGlzdGluZyBzaXplIHVwZGF0ZSBjb2RlIGZvciBpbmRleENvbnRhaW5lciBhbmQgY29udGVudEdyb3VwIC4uLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiKSB7XG4gICAgICAgICAgICAvLyAuLi4gcmVzdCBvZiB0aGUgZXhpc3RpbmcgY2FyZFdpZHRoIHVwZGF0ZSBjb2RlIC4uLlxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=