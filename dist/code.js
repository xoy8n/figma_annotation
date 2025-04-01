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
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLUE:
            return { r: 0.0, g: 0.1, b: 1.0 }; // BLUE
        case _interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLACK:
            return { r: 0, g: 0, b: 0 }; // BLACK
        default:
            return { r: 0.0, g: 0.1, b: 1.0 }; // 기본값: BLUE
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
        let badgeColor = getColorByValue(_interfaces_enums__WEBPACK_IMPORTED_MODULE_0__.AnnotationColor.BLUE); // 기본 보라색
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
    return __awaiter(this, void 0, void 0, function* () {
        const group = annotationGroups.find((g) => g.id === groupId);
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
// 배지 삭제 함수
function removeAnnotationBadge(annotationId, groupId) {
    return __awaiter(this, void 0, void 0, function* () {
        let targetPage = figma.currentPage;
        // 그룹 ID가 제공된 경우 해당 그룹의 페이지 찾기
        if (groupId) {
            const group = findGroup(groupId);
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
    contentGroup.verticalPadding = 10;
    contentGroup.horizontalPadding = 10;
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
            yield updateAnnotationIndices(groupFrame);
        }
        // 배지도 함께 삭제
        yield removeAnnotationBadge(msg.annotation.id, msg.groupId);
        // 남아있는 annotation들의 배지 인덱스 업데이트
        yield updateBadgeIndices(group.id);
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
                for (const annotation of groupToDelete.annotations) {
                    yield removeAnnotationBadge(annotation.id, msg.group.id);
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
            yield updateAnnotationIndices(groupFrame);
            // 배지 인덱스도 업데이트
            yield updateBadgeIndices(group.id);
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
                yield updateAnnotationIndices(groupFrame);
                // 배지 인덱스도 업데이트
                yield updateBadgeIndices(group.id);
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
        // groupNode를 찾은 후 해당 노드의 최상위 프레임으로 이동
        const groupNode = figma.getNodeById(msg.groupId);
        if (groupNode && groupNode.type === "FRAME") {
            // 최상위 프레임 찾기
            const topFrame = getTopLevelFrame(groupNode);
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
            const topFrame = getTopLevelFrame(groupNode);
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
            case "MOVE_TO_ANNOTATION":
                yield handleMoveToAnnotation(msg);
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
                        // 내용 그룹 크기 조정
                        contentGroup.layoutSizingHorizontal = "FIXED";
                        contentGroup.layoutSizingVertical = "HUG";
                        contentGroup.resize(contentWidth, contentGroup.height);
                        // 설명 텍스트 업데이트
                        const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                            node.getPluginData("type") === "annotation_description");
                        if (descNode) {
                            // 폰트 크기 업데이트
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
                        indexContainer.resize(indexWidth, indexContainer.height);
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
                        // contentGroup의 높이에 맞게 indexContainer 높이 조정
                        indexContainer.resize(indexWidth, contentGroup.height);
                    }
                    else if (contentGroup) {
                        // 이전 구조와의 호환성 유지 (기존 레이아웃)
                        // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
                        const frameAvailableWidth = cardWidth - (frame.paddingLeft + frame.paddingRight);
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
        else if (property === "cardWidth") {
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
                        // contentGroup의 높이에 맞게 indexContainer 높이 조정
                        indexContainer.resize(indexWidth, contentGroup.height);
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
    });
}
// MOVE_TO_ANNOTATION 메시지 핸들러
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvaW50ZXJmYWNlcy9jb25zdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stcmVhY3QvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IsIEFubm90YXRpb25TaXplIH0gZnJvbSBcIi4vZW51bXNcIjtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRGb250U2l6ZXMgPSB7XG4gICAgW0Fubm90YXRpb25TaXplLlNNQUxMXToge1xuICAgICAgICBiYWRnZVNpemU6IDI0LFxuICAgICAgICBiYWRnZVRleHQ6IDE0LFxuICAgICAgICBkZXNyaXB0aW9uOiAxNCxcbiAgICAgICAgZ2FwOiA4LFxuICAgIH0sXG4gICAgW0Fubm90YXRpb25TaXplLk1FRElVTV06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAzMixcbiAgICAgICAgYmFkZ2VUZXh0OiAxOCxcbiAgICAgICAgZGVzcmlwdGlvbjogMTgsXG4gICAgICAgIGdhcDogMTAsXG4gICAgfSxcbiAgICBbQW5ub3RhdGlvblNpemUuTEFSR0VdOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMzYsXG4gICAgICAgIGJhZGdlVGV4dDogMjEsXG4gICAgICAgIGRlc3JpcHRpb246IDIxLFxuICAgICAgICBnYXA6IDEyLFxuICAgIH0sXG59O1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRlZENvbG9ycyA9IHtcbiAgICBbQW5ub3RhdGlvbkNvbG9yLlJFRF06IFwiYmctc3ViUmVkLTAxXCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTFVFXTogXCJiZy1wcmltYXJ5XCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTEFDS106IFwiYmctYmxhY2tcIixcbn07XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkQ2FyZFdpZHRoID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IDMyMCxcbiAgICBbQW5ub3RhdGlvblNpemUuTUVESVVNXTogNDAwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5MQVJHRV06IDQ4MCxcbn07XG4iLCJleHBvcnQgdmFyIEFubm90YXRpb25TaXplO1xuKGZ1bmN0aW9uIChBbm5vdGF0aW9uU2l6ZSkge1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIlNNQUxMXCJdID0gMCldID0gXCJTTUFMTFwiO1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIk1FRElVTVwiXSA9IDEpXSA9IFwiTUVESVVNXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTEFSR0VcIl0gPSAyKV0gPSBcIkxBUkdFXCI7XG59KShBbm5vdGF0aW9uU2l6ZSB8fCAoQW5ub3RhdGlvblNpemUgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5vdGF0aW9uQ29sb3I7XG4oZnVuY3Rpb24gKEFubm90YXRpb25Db2xvcikge1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiUkVEXCJdID0gMCldID0gXCJSRURcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIkJMVUVcIl0gPSAxKV0gPSBcIkJMVUVcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIkJMQUNLXCJdID0gMildID0gXCJCTEFDS1wiO1xufSkoQW5ub3RhdGlvbkNvbG9yIHx8IChBbm5vdGF0aW9uQ29sb3IgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5ub3RhdGlvbkNhcmRXaWR0aDtcbihmdW5jdGlvbiAoQW5ubm90YXRpb25DYXJkV2lkdGgpIHtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJTTUFMTFwiXSA9IDApXSA9IFwiU01BTExcIjtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJNRURJVU1cIl0gPSAxKV0gPSBcIk1FRElVTVwiO1xuICAgIEFubm5vdGF0aW9uQ2FyZFdpZHRoWyhBbm5ub3RhdGlvbkNhcmRXaWR0aFtcIkxBUkdFXCJdID0gMildID0gXCJMQVJHRVwiO1xufSkoQW5ubm90YXRpb25DYXJkV2lkdGggfHwgKEFubm5vdGF0aW9uQ2FyZFdpZHRoID0ge30pKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfSk7XG4vLyDtlYTsmpTtlZwg7IOB7IiY7JmAIGVudW0g6rCA7KC47Jik6riwXG5pbXBvcnQgeyBBbm5vdGF0aW9uQ29sb3IsIEFubm90YXRpb25TaXplLCBBbm5ub3RhdGlvbkNhcmRXaWR0aCwgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2VudW1zXCI7XG5pbXBvcnQgeyBzdXBwb3J0ZWRGb250U2l6ZXMsIHN1cHBvcnRlZENhcmRXaWR0aCwgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2NvbnN0XCI7XG5sZXQgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuLy8g64W465Oc7J2YIOy1nOyDgeychCBGcmFtZeydhCDssL7ripQg7Jyg7Yu466as7YuwIO2VqOyImFxuZnVuY3Rpb24gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKSB7XG4gICAgbGV0IGN1cnJlbnQgPSBub2RlO1xuICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQucGFyZW50ICYmIGN1cnJlbnQucGFyZW50LnR5cGUgIT09IFwiUEFHRVwiKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnQudHlwZSkgPT09IFwiRlJBTUVcIiA/IGN1cnJlbnQgOiBudWxsO1xufVxuLy8g6re466O5IO2UhOugiOyehCDssL7quLAg7Ya17ZWpIO2VqOyImFxuZnVuY3Rpb24gZmluZEdyb3VwRnJhbWUoZ3JvdXBJZCwgZ3JvdXBGcmFtZUlkKSB7XG4gICAgLy8gMS4gZ3JvdXBGcmFtZUlk66GcIOyngeygkSDssL7quLBcbiAgICBpZiAoZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGZyYW1lICYmIGZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIilcbiAgICAgICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gICAgLy8gMi4g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICBjb25zdCB0b3BGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwSWQpO1xuICAgIGlmICghdG9wRnJhbWUpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIC8vIDMuIHRvcEZyYW1l7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBjb25zdCBncm91cEZyYW1lSW5DaGlsZHJlbiA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgaWYgKGdyb3VwRnJhbWVJbkNoaWxkcmVuKVxuICAgICAgICByZXR1cm4gZ3JvdXBGcmFtZUluQ2hpbGRyZW47XG4gICAgLy8gNC4g67aA66qo7J2YIOyekOyLneyXkOyEnCDssL7quLBcbiAgICBpZiAodG9wRnJhbWUucGFyZW50KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWVJblBhcmVudCA9IHRvcEZyYW1lLnBhcmVudC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJncm91cFwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIikgPT09IGdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBGcmFtZUluUGFyZW50KVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwRnJhbWVJblBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG4vLyDsubTrk5wg64SI67mEIOqwgOyguOyYpOq4sFxuZnVuY3Rpb24gZ2V0Q2FyZFdpZHRoQnlWYWx1ZSh3aWR0aFZhbHVlKSB7XG4gICAgaWYgKHdpZHRoVmFsdWUgPj0gMCAmJlxuICAgICAgICB3aWR0aFZhbHVlIDwgT2JqZWN0LmtleXMoQW5ubm90YXRpb25DYXJkV2lkdGgpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZENhcmRXaWR0aFt3aWR0aFZhbHVlXTtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZENhcmRXaWR0aFtBbm5ub3RhdGlvbkNhcmRXaWR0aC5TTUFMTF07IC8vIOq4sOuzuOqwklxufVxuLy8g7Lm065OcIOuEiOu5hCDqs4TsgrDtlZjquLAgKOyeheugpeqwkiDrmJDripQg6riw67O46rCSIOyCrOyaqSlcbmZ1bmN0aW9uIGdldENhcmRXaWR0aChjYXJkV2lkdGhWYWx1ZSkge1xuICAgIHJldHVybiBjYXJkV2lkdGhWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgID8gZ2V0Q2FyZFdpZHRoQnlWYWx1ZShjYXJkV2lkdGhWYWx1ZSlcbiAgICAgICAgOiBnZXRDYXJkV2lkdGhCeVZhbHVlKEFubm5vdGF0aW9uQ2FyZFdpZHRoLlNNQUxMKTtcbn1cbi8vIOq3uOujuSDtlITroIjsnoQg7LC+6riwIOuYkOuKlCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBmaW5kT3JDcmVhdGVHcm91cEZyYW1lKGdyb3VwKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gMS4g6riw7KG0IOq3uOujuSDtlITroIjsnoQg7LC+6riwIOyLnOuPhFxuICAgICAgICBsZXQgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICAvLyAyLiDssL7sp4Ag66q77ZWcIOqyveyasCDsg4jroZwg7IOd7ISxXG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cC5pZCk7XG4gICAgICAgICAgICBpZiAoIXRvcEZyYW1lKVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBncm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCBncm91cC5pZCk7XG4gICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGdyb3VwLmNhcmRXaWR0aCk7XG4gICAgICAgICAgICAvLyDsiqTtg4Dsnbwg67CPIOychOy5mCDshKTsoJUgLSDrtoDrqqgg7ZSE66CI7J6EIOuCtOu2gOydmCDsmrDsuKEg7IOB64uo7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgIC8vIOu2gOuqqCDtlITroIjsnoTsnZgg7Jqw7LihIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWI7Kq97Jy866GcIOychOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDsgLy8g7Jqw7Lih7JeQ7IScIOy5tOuTnCDrhIjruYTrp4ztgbwg7JWI7Kq97Jy866GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnkgPSAyMDsgLy8g7IOB64uo7JeQ7IScIOyVveqwhCDslYTrnpjroZxcbiAgICAgICAgICAgIGdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgMzAwKTtcbiAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOu2gOuqqOqwgCDsl4bsnLzrqbQg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOq3uOujuSDsoJXrs7Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICBncm91cC5ncm91cEZyYW1lSWQgPSBncm91cEZyYW1lLmlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cEZyYW1lO1xuICAgIH0pO1xufVxuLy8g6re466O5IOuwjyDso7zshJ0g7KGw7ZqMIO2VqOyImFxuZnVuY3Rpb24gZmluZEdyb3VwKGdyb3VwSWQpIHtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkdyb3Vwcy5maW5kKChnKSA9PiBnLmlkID09PSBncm91cElkKTtcbn1cbi8vIOyjvOyEnSDssL7quLAg7ZWo7IiYXG5mdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZ3JvdXAuYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbn1cbi8vIOyDieyDgSDqsJIg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSkge1xuICAgIC8vIOyDieyDgSDqsJLsl5Ag65Sw6528IFJHQiDqsJIg67CY7ZmYXG4gICAgc3dpdGNoIChjb2xvclZhbHVlKSB7XG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlJFRDpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuOTMsIGc6IDAuMzcsIGI6IDAuMzcgfTsgLy8gUkVEXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLkJMVUU6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjAsIGc6IDAuMSwgYjogMS4wIH07IC8vIEJMVUVcbiAgICAgICAgY2FzZSBBbm5vdGF0aW9uQ29sb3IuQkxBQ0s6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLCBnOiAwLCBiOiAwIH07IC8vIEJMQUNLXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4geyByOiAwLjAsIGc6IDAuMSwgYjogMS4wIH07IC8vIOq4sOuzuOqwkjogQkxVRVxuICAgIH1cbn1cbi8vIO2PsO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5kZXNyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5kZXNyaXB0aW9uOyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uYmFkZ2VTaXplO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5iYWRnZVNpemU7IC8vIOq4sOuzuOqwklxufVxuLy8g67Cw7KeAIO2FjeyKpO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZShzaXplVmFsdWUpIHtcbiAgICBpZiAoc2l6ZVZhbHVlID49IDAgJiYgc2l6ZVZhbHVlIDwgT2JqZWN0LmtleXMoQW5ub3RhdGlvblNpemUpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tzaXplVmFsdWVdLmJhZGdlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uYmFkZ2VUZXh0OyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngOulvCDsg53shLHtlZjripQg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uobm9kZSwgaW5kZXgsIGFubm90YXRpb25JZCwgY29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g67Cw7KeAIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBiYWRnZS5uYW1lID0gYEJhZGdlICR7aW5kZXh9YDtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2JhZGdlXCIpO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgLy8g67Cw7KeAIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgYmFkZ2UubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBiYWRnZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3JuZXJSYWRpdXMgPSA5OTk5OyAvLyDsm5DtmJXsnLzroZwg66eM65Ok6riwXG4gICAgICAgIC8vIOuwsOyngCDtgazquLAg7ISk7KCVIC0gc3VwcG9ydGVkRm9udFNpemVz7JeQ7IScIOqwgOyguOyYtFxuICAgICAgICBjb25zdCBiYWRnZVNpemUgPSBnZXRCYWRnZVNpemVCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgYmFkZ2UucmVzaXplKGJhZGdlU2l6ZSwgYmFkZ2VTaXplKTtcbiAgICAgICAgLy8g67Cw7KeAIOyDieyDgSDshKTsoJVcbiAgICAgICAgbGV0IGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoQW5ub3RhdGlvbkNvbG9yLkJMVUUpOyAvLyDquLDrs7gg67O065287IOJXG4gICAgICAgIGlmIChjb2xvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBiYWRnZUNvbG9yID0gZ2V0Q29sb3JCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICBiYWRnZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IGJhZGdlQ29sb3IgfV07XG4gICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7YWN7Iqk7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCBpbmRleFRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGluZGV4VGV4dC5jaGFyYWN0ZXJzID0gaW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IO2BrOq4sCDshKTsoJUgLSBzdXBwb3J0ZWRGb250U2l6ZXPsl5DshJwg6rCA7KC47Ji0XG4gICAgICAgIGluZGV4VGV4dC5mb250U2l6ZSA9IGdldEJhZGdlVGV4dFNpemVCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgaW5kZXhUZXh0LmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0gfV07IC8vIO2dsOyDiSDthY3siqTtirhcbiAgICAgICAgLy8g67Cw7KeA7JeQIO2FjeyKpO2KuCDstpTqsIBcbiAgICAgICAgYmFkZ2UuYXBwZW5kQ2hpbGQoaW5kZXhUZXh0KTtcbiAgICAgICAgLy8g67Cw7KeAIOychOy5mCDshKTsoJUgLSDshKDtg53tlZwg64W465OcIOychOyXkCDrsLDsuZhcbiAgICAgICAgYmFkZ2UueCA9IG5vZGUueDtcbiAgICAgICAgYmFkZ2UueSA9IG5vZGUueSAtIGJhZGdlLmhlaWdodCAtIDU7IC8vIOuFuOuTnCDsnITsl5Ag7JW96rCEIOqwhOqyqeydhCDrkZDqs6Ag67Cw7LmYXG4gICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKTtcbiAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOyXkCDrsLDsp4Ag7LaU6rCAXG4gICAgICAgIGlmICh0b3BGcmFtZSkge1xuICAgICAgICAgICAgdG9wRnJhbWUuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDrmJDripQg67aA66qo6rCAIOyXhuuKlCDqsr3smrAg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFkZ2U7XG4gICAgfSk7XG59XG4vLyDrsLDsp4Ag7J24642x7IqkIOyXheuNsOydtO2KuCDtlajsiJhcbmZ1bmN0aW9uIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IGdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4IOyLnOyekTpcIiwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBcIuqwnOydmCDso7zshJ1cIik7XG4gICAgICAgIC8vIOq3uOujueqzvCDqtIDroKjrkJwg7Y6Y7J207KeAIOywvuq4sFxuICAgICAgICBsZXQgdGFyZ2V0UGFnZSA9IG51bGw7XG4gICAgICAgIGlmIChncm91cC5yZWxhdGVkUGFnZSAmJiBncm91cC5yZWxhdGVkUGFnZS5pZCkge1xuICAgICAgICAgICAgLy8g6rSA66CoIO2OmOydtOyngOqwgCDsnojsnLzrqbQg7ZW064u5IO2OmOydtOyngCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VOb2RlID0gZmlnbWEucm9vdC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiUEFHRVwiICYmIG5vZGUuaWQgPT09IGdyb3VwLnJlbGF0ZWRQYWdlLmlkKTtcbiAgICAgICAgICAgIGlmIChwYWdlTm9kZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldFBhZ2UgPSBwYWdlTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDqtIDroKgg7Y6Y7J207KeA6rCAIOyXhuqxsOuCmCDssL7sp4Ag66q77ZWcIOqyveyasCDtmITsnqwg7Y6Y7J207KeAIOyCrOyaqVxuICAgICAgICBpZiAoIXRhcmdldFBhZ2UpIHtcbiAgICAgICAgICAgIHRhcmdldFBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgfVxuICAgICAgICAvLyDtlbTri7kg7Y6Y7J207KeA7JeQ7IScIOuwsOyngCDssL7quLBcbiAgICAgICAgdGFyZ2V0UGFnZVxuICAgICAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiKVxuICAgICAgICAgICAgLmZvckVhY2goKGJhZGdlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWQgPSBiYWRnZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpO1xuICAgICAgICAgICAgLy8g7ZW064u5IOq3uOujueyXkCDsho3tlZwg67Cw7KeA66eMIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBncm91cC5hbm5vdGF0aW9ucztcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgLy8g67Cw7KeA7J2YIO2FjeyKpO2KuCDsl4XrjbDsnbTtirggKDHrtoDthLAg7Iuc7J6R7ZWY64qUIOyduOuNseyKpCDsgqzsmqkpXG4gICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGJhZGdlLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYW5ub3RhdGlvbkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDrsLDsp4Ag7JeF642w7J207Yq4OiAke2Fubm90YXRpb25JZH0gPT4gJHtuZXdJbmRleH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSBuZXdJbmRleC50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCAoYW5ub3RhdGlvbkluZGV4ICsgMSkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIOuwsOyngCDsgq3soJwg7ZWo7IiYXG5mdW5jdGlvbiByZW1vdmVBbm5vdGF0aW9uQmFkZ2UoYW5ub3RhdGlvbklkLCBncm91cElkKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHRhcmdldFBhZ2UgPSBmaWdtYS5jdXJyZW50UGFnZTtcbiAgICAgICAgLy8g6re466O5IElE6rCAIOygnOqzteuQnCDqsr3smrAg7ZW064u5IOq3uOujueydmCDtjpjsnbTsp4Ag7LC+6riwXG4gICAgICAgIGlmIChncm91cElkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICAgICAgICAgIGlmIChncm91cCAmJiBncm91cC5yZWxhdGVkUGFnZSAmJiBncm91cC5yZWxhdGVkUGFnZS5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VOb2RlID0gZmlnbWEucm9vdC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiUEFHRVwiICYmIG5vZGUuaWQgPT09IGdyb3VwLnJlbGF0ZWRQYWdlLmlkKTtcbiAgICAgICAgICAgICAgICBpZiAocGFnZU5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDtlbTri7kg7Y6Y7J207KeA7JeQ7IScIOuwsOyngCDssL7quLBcbiAgICAgICAgdGFyZ2V0UGFnZVxuICAgICAgICAgICAgLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IGFubm90YXRpb25JZClcbiAgICAgICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2UucmVtb3ZlKCkpO1xuICAgIH0pO1xufVxuLy8g7KO87ISdIO2UhOugiOyehCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uRnJhbWUoYW5ub3RhdGlvbklkLCBpbmRleCwgY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g7KO87ISdIOy7qO2FjOydtOuEiCDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5uYW1lID0gYEFubm90YXRpb24gJHtpbmRleH1gO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsu6jthYzsnbTrhIgg7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuZmlsbHMgPSBbXTsgLy8g67Cw6rK97IOJIOygnOqxsFxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgcjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICBnOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGI6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZVdlaWdodCA9IDE7IC8vIOyEoCDrkZDqu5g6IDFweFxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc3Ryb2tlVG9wV2VpZ2h0ID0gMDtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnN0cm9rZUFsaWduID0gXCJJTlNJREVcIjsgLy8g7YWM65GQ66asIOychOy5mCAoSU5TSURFIHwgT1VUU0lERSB8IENFTlRFUilcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g64SI67mE66eMIOqzoOygle2VmOqzoCDrhpLsnbTripQg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUoY2FyZFdpZHRoIC0gMjAsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpOyAvLyDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICByZXR1cm4gYW5ub3RhdGlvbkZyYW1lO1xuICAgIH0pO1xufVxuLy8g64K07JqpIOq3uOujuSDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50R3JvdXAoYW5ub3RhdGlvbklkLCBmcmFtZVdpZHRoKSB7XG4gICAgLy8g7J24642x7Iqk7JmAIOyEpOuqheydhCDri7TsnYQg6re466O5IOyDneyEsVxuICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgY29udGVudEdyb3VwLm5hbWUgPSBcIkFubm90YXRpb24gQ29udGVudFwiO1xuICAgIGNvbnRlbnRHcm91cC5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICBjb250ZW50R3JvdXAuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgIC8vIOq3uOujuSDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgY29udGVudEdyb3VwLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgY29udGVudEdyb3VwLnZlcnRpY2FsUGFkZGluZyA9IDEwO1xuICAgIGNvbnRlbnRHcm91cC5ob3Jpem9udGFsUGFkZGluZyA9IDEwO1xuICAgIGNvbnRlbnRHcm91cC5maWxscyA9IFtdOyAvLyDrsLDqsr3sg4kg7KCc6rGwICjtiKzrqoUg67Cw6rK9IOycoOyngClcbiAgICAvLyDrhIjruYQg6rOE7IKwIC0g7KCE7LK0IOuEiOu5hOydmCDslb0gODAl66W8IOywqOyngO2VmOuPhOuhnSDsobDsoJVcbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBNYXRoLnJvdW5kKGZyYW1lV2lkdGggKiAwLjgpO1xuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICBjb250ZW50R3JvdXAucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgcmV0dXJuIGNvbnRlbnRHcm91cDtcbn1cbi8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlSW5kZXhDb250YWluZXIoYW5ub3RhdGlvbklkLCBmcmFtZVdpZHRoKSB7XG4gICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDsg53shLFcbiAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgaW5kZXhDb250YWluZXIubmFtZSA9IFwiQW5ub3RhdGlvbiBJbmRleFwiO1xuICAgIGluZGV4Q29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgaW5kZXhDb250YWluZXIuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICBpbmRleENvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGluZGV4Q29udGFpbmVyLnByaW1hcnlBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgaW5kZXhDb250YWluZXIuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICBpbmRleENvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSB9LFxuICAgIF07IC8vIOuwsOqyveyDiSDshKTsoJVcbiAgICBpbmRleENvbnRhaW5lci52ZXJ0aWNhbFBhZGRpbmcgPSAxMDtcbiAgICBpbmRleENvbnRhaW5lci5ob3Jpem9udGFsUGFkZGluZyA9IDEwO1xuICAgIGluZGV4Q29udGFpbmVyLnN0cm9rZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgcjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICBiOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIF07XG4gICAgaW5kZXhDb250YWluZXIuc3Ryb2tlV2VpZ2h0ID0gMDtcbiAgICBpbmRleENvbnRhaW5lci5zdHJva2VSaWdodFdlaWdodCA9IDE7XG4gICAgLy8g64SI67mEIOqzhOyCsCAtIOyghOyytCDrhIjruYTsnZgg7JW9IDIwJeulvCDssKjsp4DtlZjrj4TroZ0g7KGw7KCVXG4gICAgY29uc3QgaW5kZXhXaWR0aCA9IE1hdGgucm91bmQoZnJhbWVXaWR0aCAqIDAuMik7XG4gICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICByZXR1cm4gaW5kZXhDb250YWluZXI7XG59XG4vLyDsnbjrjbHsiqQg64W465OcIOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUluZGV4Tm9kZShhbm5vdGF0aW9uSWQsIGluZGV4LCBzaXplVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGluZGV4Tm9kZS5jaGFyYWN0ZXJzID0gYCR7aW5kZXh9YDtcbiAgICAgICAgaW5kZXhOb2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9pbmRleFwiKTtcbiAgICAgICAgaW5kZXhOb2RlLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBpbmRleE5vZGUuZm9udFNpemUgPVxuICAgICAgICAgICAgc2l6ZVZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGdldEZvbnRTaXplQnlWYWx1ZShzaXplVmFsdWUpXG4gICAgICAgICAgICAgICAgOiBnZXRGb250U2l6ZUJ5VmFsdWUoQW5ub3RhdGlvblNpemUuU01BTEwpOyAvLyDquLDrs7jqsJIg7IKs7JqpXG4gICAgICAgIGluZGV4Tm9kZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xuICAgICAgICAvLyDthY3siqTtirgg7KCV66CsIOyEpOyglVxuICAgICAgICBpbmRleE5vZGUudGV4dEFsaWduSG9yaXpvbnRhbCA9IFwiQ0VOVEVSXCI7IC8vIOqwgOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIGluZGV4Tm9kZS50ZXh0QWxpZ25WZXJ0aWNhbCA9IFwiQ0VOVEVSXCI7IC8vIOyEuOuhnCDspJHslZkg7KCV66CsXG4gICAgICAgIHJldHVybiBpbmRleE5vZGU7XG4gICAgfSk7XG59XG4vLyDshKTrqoUg7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbk5vZGUoYW5ub3RhdGlvbklkLCB0ZXh0ID0gXCJOZXcgQW5ub3RhdGlvblwiLCBzaXplVmFsdWUsIGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOq4sOuzuCDtj7Dtirjrp4wg66i87KCAIOuhnOuTnCAoYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmfsl5DshJwg7LaU6rCAIO2PsO2KuCDroZzrk5wpXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICBjb25zdCB0ZXh0Tm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgICAgIHRleHROb2RlLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGV4dE5vZGUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgICAgIHRleHROb2RlLmZvbnRTaXplID1cbiAgICAgICAgICAgIHNpemVWYWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgPyBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKVxuICAgICAgICAgICAgICAgIDogc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5kZXNyaXB0aW9uO1xuICAgICAgICB0ZXh0Tm9kZS5maWxscyA9IFt7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgcjogMCwgZzogMCwgYjogMCB9IH1dO1xuICAgICAgICAvLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEpOuqhSDrjbDsnbTthLDqsIAg7J6I7Jy866m0IOyEnOyLnSDsoIHsmqlcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uRGF0YSAmJlxuICAgICAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQgJiZcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHlpZWxkIGFwcGx5UmljaFRleHRGb3JtYXR0aW5nKHRleHROb2RlLCBkZXNjcmlwdGlvbkRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0Tm9kZTtcbiAgICB9KTtcbn1cbi8vIOyjvOyEnSDqtazshLEg7JqU7IaMIOyDneyEsSDthrXtlakg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhhbm5vdGF0aW9uSWQsIGluZGV4LCBjb2xvclZhbHVlLCBzaXplVmFsdWUsIGNhcmRXaWR0aFZhbHVlLCBkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIDEuIOyjvOyEnSDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGZyYW1lID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkZyYW1lKGFubm90YXRpb25JZCwgaW5kZXgsIGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLSAyMCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIC8vIDIuIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY3JlYXRlSW5kZXhDb250YWluZXIoYW5ub3RhdGlvbklkLCBhdmFpbGFibGVXaWR0aCk7XG4gICAgICAgIC8vIDMuIOuCtOyaqSDqt7jro7kg7IOd7ISxXG4gICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNyZWF0ZUNvbnRlbnRHcm91cChhbm5vdGF0aW9uSWQsIGF2YWlsYWJsZVdpZHRoKTtcbiAgICAgICAgLy8gNC4g7J24642x7IqkIOuFuOuTnCDsg53shLFcbiAgICAgICAgY29uc3QgaW5kZXhOb2RlID0geWllbGQgY3JlYXRlSW5kZXhOb2RlKGFubm90YXRpb25JZCwgaW5kZXgsIHNpemVWYWx1ZSk7XG4gICAgICAgIC8vIDUuIOyEpOuqhSDthY3siqTtirgg64W465OcIOyDneyEsVxuICAgICAgICBjb25zdCBpbml0aWFsVGV4dCA9IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICA/IGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgOiBcIk5ldyBBbm5vdGF0aW9uXCI7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0geWllbGQgY3JlYXRlRGVzY3JpcHRpb25Ob2RlKGFubm90YXRpb25JZCwgaW5pdGlhbFRleHQsIHNpemVWYWx1ZSwgZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyA2LiDthY3siqTtirgg64W465OcIO2BrOq4sCDsobDsoJVcbiAgICAgICAgdGV4dE5vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgdGV4dE5vZGUucmVzaXplKGNvbnRlbnRHcm91cC53aWR0aCAtIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KSwgdGV4dE5vZGUuaGVpZ2h0KTtcbiAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnCDtgazquLAg7KGw7KCVXG4gICAgICAgIGluZGV4Tm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICBpbmRleE5vZGUucmVzaXplKGluZGV4Q29udGFpbmVyLndpZHRoLCB0ZXh0Tm9kZS5oZWlnaHQpO1xuICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc66W8IOyImOyngSDspJHslZnsl5Ag67Cw7LmYXG4gICAgICAgIGluZGV4Tm9kZS55ID0gKHRleHROb2RlLmhlaWdodCAtIGluZGV4Tm9kZS5oZWlnaHQpIC8gMjtcbiAgICAgICAgLy8gNy4g64W465OcIOq1rOyEsVxuICAgICAgICBpbmRleENvbnRhaW5lci5hcHBlbmRDaGlsZChpbmRleE5vZGUpO1xuICAgICAgICBjb250ZW50R3JvdXAuYXBwZW5kQ2hpbGQodGV4dE5vZGUpO1xuICAgICAgICAvLyDtlITroIjsnoTsl5Ag7J24642x7IqkIOy7qO2FjOydtOuEiOyZgCDrgrTsmqkg6re466O5IOy2lOqwgFxuICAgICAgICBmcmFtZS5hcHBlbmRDaGlsZChpbmRleENvbnRhaW5lcik7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGNvbnRlbnRHcm91cCk7XG4gICAgICAgIHJldHVybiB7IGZyYW1lLCBncm91cDogY29udGVudEdyb3VwLCBpbmRleE5vZGUsIHRleHROb2RlIH07XG4gICAgfSk7XG59XG4vLyDrqZTsi5zsp4Ag7J2R64u1IOyghOyGoSDsnKDti7jrpqzti7Ag7ZWo7IiYXG5mdW5jdGlvbiBzZW5kUmVzcG9uc2UodHlwZSwgcmVzdWx0LCBkYXRhID0ge30sIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHsgcmVzdWx0IH0sIGRhdGEpO1xuICAgIGlmICghcmVzdWx0ICYmIGVycm9yTWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlLCBtZXNzYWdlIH0pO1xufVxuLy8g7YWN7Iqk7Yq4IOy2lOy2nCDtlajsiJhcbmZ1bmN0aW9uIGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhZGVzY3JpcHRpb24uY29udGVudClcbiAgICAgICAgcmV0dXJuIFwiTmV3IEFubm90YXRpb25cIjtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgZnVuY3Rpb24gZXh0cmFjdFRleHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IG5vZGUudGV4dCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaChleHRyYWN0VGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6rCBIOyDgeychCDroIjrsqggY29udGVudCDtla3rqqnsnYQg7LKY66as7ZWY6rOgIOykhOuwlOq/iCDstpTqsIBcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkZXNjcmlwdGlvbi5jb250ZW50KSkge1xuICAgICAgICBkZXNjcmlwdGlvbi5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3MgPSB0ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIC8vIOuFuOuTnCDrgrTsmqkg7LaU7LacXG4gICAgICAgICAgICBpZiAoY29udGVudE5vZGUudHlwZSA9PT0gXCJidWxsZXRMaXN0XCIgfHxcbiAgICAgICAgICAgICAgICBjb250ZW50Tm9kZS50eXBlID09PSBcInBhcmFncmFwaFwiKSB7XG4gICAgICAgICAgICAgICAgZXh0cmFjdFRleHQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g64uk66W4IO2DgOyeheydmCDrhbjrk5zrj4Qg7LKY66asXG4gICAgICAgICAgICAgICAgZXh0cmFjdFRleHQoY29udGVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6rCBIOy7qO2FkOy4oCDtla3rqqkg65Kk7JeQIOykhOuwlOq/iCDstpTqsIAo66eI7KeA66eJIO2VreuqqSDsoJzsmbgpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBkZXNjcmlwdGlvbi5jb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0ZXh0ICs9IFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGV4dC50cmltKCkgfHwgXCJOZXcgQW5ub3RhdGlvblwiO1xufVxuLy8g66qo65OgIOyjvOyEnSDsmpTshozsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbmZ1bmN0aW9uIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBhbm5vdGF0aW9uIO2DgOyeheydmCDtlITroIjsnoTrp4wg7ZWE7YSw66eBXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZXMgPSBncm91cEZyYW1lLmNoaWxkcmVuLmZpbHRlcigobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICAvLyDtlYTthLDrp4HrkJwg7KO87ISdIO2UhOugiOyehOuTpOydmCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYW5ub3RhdGlvbkZyYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gYW5ub3RhdGlvbkZyYW1lc1tpbmRleF07XG4gICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IOuhnOuTnCDstpTqsIBcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5jaGFyYWN0ZXJzID0gYCR7aW5kZXggKyAxfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g6riw7KG0IOugiOydtOyVhOybgyDqtazsobAg7KeA7JuQICjsnbTsoIQg67KE7KCE6rO87J2YIO2YuO2ZmOyEsSlcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2PsO2KuCDroZzrk5wg7LaU6rCAXG4gICAgICAgICAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Tm9kZS5jaGFyYWN0ZXJzID0gYCR7aW5kZXggKyAxfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6EIOydtOumhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPSBgQW5ub3RhdGlvbiAke2luZGV4ICsgMX1gO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBUaXRsZSDqt7jro7kg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlVGl0bGVHcm91cChncm91cElkLCBmcmFtZVdpZHRoLCBkZXNjcmlwdGlvblRleHQgPSBcIkRlc2NyaXB0aW9uXCIpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag7Luo7YWM7J2064SIIOyDneyEsVxuICAgICAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLm5hbWUgPSBcIlRpdGxlXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zZXRQbHVnaW5EYXRhKFwiZ3JvdXBJZFwiLCBncm91cElkKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDshLjroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiOyAvLyDqsIDroZwg7KSR7JWZIOygleugrFxuICAgICAgICB0aXRsZUNvbnRhaW5lci5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTsgLy8g67Cw6rK97IOJIOyEpOyglVxuICAgICAgICAvL2JvcmRlcuyEpOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICByOiAyMjQgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGc6IDIyNCAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgYjogMjI0IC8gMjU1LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0aXRsZUNvbnRhaW5lci5zdHJva2VXZWlnaHQgPSAxOyAvLyDshKAg65GQ6ruYOiAxcHhcbiAgICAgICAgdGl0bGVDb250YWluZXIuc3Ryb2tlQWxpZ24gPSBcIklOU0lERVwiOyAvLyDthYzrkZDrpqwg7JyE7LmYIChJTlNJREUgfCBPVVRTSURFIHwgQ0VOVEVSKVxuICAgICAgICAvLyDrhIjruYQg7ISk7KCVXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICB0aXRsZUNvbnRhaW5lci5yZXNpemUoZnJhbWVXaWR0aCwgdGl0bGVDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDsg53shLFcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmNoYXJhY3RlcnMgPSBkZXNjcmlwdGlvblRleHQ7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcInRpdGxlX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbk5vZGUuZm9udFNpemUgPSAxNDtcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgICAgIC8vIO2FjeyKpO2KuCDsoJXroKwg7ISk7KCVXG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS50ZXh0QWxpZ25Ib3Jpem9udGFsID0gXCJDRU5URVJcIjsgLy8g6rCA66GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnRleHRBbGlnblZlcnRpY2FsID0gXCJDRU5URVJcIjsgLy8g7IS466GcIOykkeyVmSDsoJXroKxcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuEiOu5hCDshKTsoJVcbiAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgIGRlc2NyaXB0aW9uTm9kZS5yZXNpemUoZnJhbWVXaWR0aCAtICh0aXRsZUNvbnRhaW5lci5wYWRkaW5nTGVmdCArIHRpdGxlQ29udGFpbmVyLnBhZGRpbmdSaWdodCksIDM2KTtcbiAgICAgICAgLy8g7Luo7YWM7J2064SI7JeQIO2FjeyKpO2KuCDrhbjrk5wg7LaU6rCAXG4gICAgICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTm9kZSk7XG4gICAgICAgIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbiAgICB9KTtcbn1cbi8vIENSRUFURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmICghc2VsZWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiUGxlYXNlIHNlbGVjdCBhIGxheWVyIG9uIHRoZSBjYW52YXMuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShzZWxlY3Rpb24pO1xuICAgICAgICBpZiAoIXRvcEZyYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSwge30sIFwiVG9wLWxldmVsIGZyYW1lIG5vdCBmb3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3R3JvdXBJZCA9IHRvcEZyYW1lLmlkO1xuICAgICAgICBjb25zdCBuZXdHcm91cE5hbWUgPSB0b3BGcmFtZS5uYW1lO1xuICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwID0gZmluZEdyb3VwKG5ld0dyb3VwSWQpO1xuICAgICAgICAvLyBBTk5PVEFUSU9OX0dST1VQIOyDneyEsVxuICAgICAgICBsZXQgYW5ub3RhdGlvbkdyb3VwRnJhbWU7XG4gICAgICAgIGlmIChleGlzdGluZ0dyb3VwKSB7XG4gICAgICAgICAgICAvLyDquLDsobQg6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXBGcmFtZSA9IHRvcEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBleGlzdGluZ0dyb3VwRnJhbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDsmIjsg4HsuZgg66q77ZWY6rKMIOq3uOujuSDtlITroIjsnoTsnbQg7JeG64uk66m0IOyDiOuhnCDsg53shLFcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUubmFtZSA9IFwiQU5OT1RBVElPTl9HUk9VUFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoZXhpc3RpbmdHcm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgICAgIC8vIOyKpO2DgOydvCDrsI8g7JyE7LmYIOyEpOyglSAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oSDsg4Hri6jsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSB0b3BGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnkgPSAyMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCAzMDApO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmZpbGxzID0gW107IC8vIOuwsOqyveyDiSDsoJzqsbBcbiAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglSAtIOyEuOuhnCDrsLDsuZhcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nQm90dG9tID0gMTA7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyDsg4HsnIQg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICAgICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgICAgICAgICAvLyBUaXRsZSDqt7jro7kg7IOd7ISxIOuwjyDstpTqsIBcbiAgICAgICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIChhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVHcm91cCA9IHlpZWxkIGNyZWF0ZVRpdGxlR3JvdXAoZXhpc3RpbmdHcm91cC5pZCwgYXZhaWxhYmxlV2lkdGgsIFwiRGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVHcm91cCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsg4gg7KO87ISdIOuplOuqqOumrCDqsJ3ssrQg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIOq3uOujueyXkCDso7zshJ0g7LaU6rCAICjrqZTrqqjrpqwpXG4gICAgICAgICAgICBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgZXhpc3RpbmdHcm91cC5jb2xvciwgZXhpc3RpbmdHcm91cC5zaXplLCBleGlzdGluZ0dyb3VwLmNhcmRXaWR0aCwgbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uoc2VsZWN0aW9uLCBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZXhpc3RpbmdHcm91cC5jb2xvcik7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICAgICAgdXBkYXRlZEdyb3VwOiBuZXdHcm91cElkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g8J+GlSDsg4gg6re466O5IOyDneyEsVxuICAgICAgICAvLyAxLiDso7zshJ0g6re466O5IO2UhOugiOyehCDsg53shLFcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIiwgdG9wRnJhbWUuaWQpO1xuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoKF9hID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhcmRXaWR0aCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDrsI8g7JyE7LmYIOyEpOyglSAtIOu2gOuqqCDtlITroIjsnoQg64K067aA7J2YIOyasOy4oSDsg4Hri6jsl5Ag7JyE7LmY7ZWY64+E66GdIOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUueSA9IDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5yZXNpemUoY2FyZFdpZHRoLCAzMDApO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maWxscyA9IFtdOyAvLyDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nVG9wID0gMTA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0ID0gMTA7XG4gICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgLy8gVGl0bGUg6re466O5IOyDneyEsSDrsI8g7LaU6rCAXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC1cbiAgICAgICAgICAgIChhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgIGNvbnN0IHRpdGxlR3JvdXAgPSB5aWVsZCBjcmVhdGVUaXRsZUdyb3VwKHRvcEZyYW1lLmlkLCBhdmFpbGFibGVXaWR0aCwgXCJEZXNjcmlwdGlvblwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVHcm91cCk7XG4gICAgICAgIC8vIOq4sOuzuCDso7zshJ0g7IOd7ISxXG4gICAgICAgIGNvbnN0IGRlZmF1bHRBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICgoX2IgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuZGVzY3JpcHRpb24pIHx8IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6re466O57JeQIHBsdWdpbkRhdGEg7ISk7KCVXG4gICAgICAgIHRvcEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZnJhbWVcIik7XG4gICAgICAgIHRvcEZyYW1lLnNldFBsdWdpbkRhdGEoXCJoYXNfYW5ub3RhdGlvbl9ncm91cFwiLCBcInRydWVcIik7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJncm91cF9pZFwiLCBkZWZhdWx0QW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwID0gT2JqZWN0LmFzc2lnbih7IGlkOiBuZXdHcm91cElkLCBuYW1lOiBuZXdHcm91cE5hbWUsIHJlbGF0ZWRQYWdlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGZpZ21hLmN1cnJlbnRQYWdlLmlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICB9LCBhbm5vdGF0aW9uczogW2RlZmF1bHRBbm5vdGF0aW9uXSwgb2Jzb2xldGU6IGZhbHNlLCBncm91cEZyYW1lSWQ6IGFubm90YXRpb25Hcm91cEZyYW1lLmlkIH0sIG1zZy5jb25maWcpO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBzLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKGRlZmF1bHRBbm5vdGF0aW9uLmlkLCAxLCAoX2MgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY29sb3IsIChfZCA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5zaXplLCAoX2UgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UuY2FyZFdpZHRoLCBkZWZhdWx0QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgLy8g7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIDEsIGRlZmF1bHRBbm5vdGF0aW9uLmlkLCAoX2YgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY29sb3IpO1xuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgICAgIHVwZGF0ZWRHcm91cDogbmV3R3JvdXBJZCxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBDUkVBVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8g7IOIIOyjvOyEnSDqsJ3ssrQg7IOd7ISxXG4gICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDqt7jro7nsl5Ag7KO87ISdIOy2lOqwgFxuICAgICAgICBncm91cC5hbm5vdGF0aW9ucy5wdXNoKG5ld0Fubm90YXRpb24pO1xuICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0geWllbGQgZmluZE9yQ3JlYXRlR3JvdXBGcmFtZShncm91cCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuyjvOyEnSDqt7jro7kg7ZSE66CI7J6E7J2EIOywvuqxsOuCmCDsg53shLHtlaAg7IiYIOyXhuyKteuLiOuLpFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyDso7zshJ0gVUkg7Lu07Y+s64SM7Yq4IOyDneyEsVxuICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKG5ld0Fubm90YXRpb24uaWQsIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgZ3JvdXAuY29sb3IsIGdyb3VwLnNpemUsIGdyb3VwLmNhcmRXaWR0aCwgbmV3QW5ub3RhdGlvbi5kZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgZ3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAvLyDtmITsnqwg7ISg7YOd65CcIOuFuOuTnOyXkCDrsLDsp4Ag7IOd7ISxXG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvblswXTtcbiAgICAgICAgaWYgKHNlbGVjdGlvbikge1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlQW5ub3RhdGlvbkJhZGdlKHNlbGVjdGlvbiwgZ3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBuZXdBbm5vdGF0aW9uLmlkLCBncm91cC5jb2xvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShcIkNSRUFURV9BTk5PVEFUSU9OXCIsIHRydWUsIHtcbiAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9uR3JvdXBzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIERFTEVURV9BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZUFubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDqt7jro7kg64K07JeQ7IScIOyjvOyEnSDsoJzqsbBcbiAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMgPSBncm91cC5hbm5vdGF0aW9ucy5maWx0ZXIoKGEpID0+IGEuaWQgIT09IG1zZy5hbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgLy8gRmlnbWEg7LqU67KE7Iqk7JeQ7ISc64+EIOyCreygnFxuICAgICAgICBsZXQgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IG1zZy5hbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDrgqjslYTsnojripQg7KO87ISdIO2UhOugiOyehOuTpOydmCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g67Cw7KeA64+EIO2VqOq7mCDsgq3soJxcbiAgICAgICAgeWllbGQgcmVtb3ZlQW5ub3RhdGlvbkJhZGdlKG1zZy5hbm5vdGF0aW9uLmlkLCBtc2cuZ3JvdXBJZCk7XG4gICAgICAgIC8vIOuCqOyVhOyeiOuKlCBhbm5vdGF0aW9u65Ok7J2YIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4XG4gICAgICAgIHlpZWxkIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gREVMRVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVG9EZWxldGUgPSBmaW5kR3JvdXAobXNnLmdyb3VwLmlkKTtcbiAgICAgICAgaWYgKCFncm91cFRvRGVsZXRlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICBpZiAoZ3JvdXBUb0RlbGV0ZS5ncm91cEZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cFRvRGVsZXRlLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBGcmFtZSAmJiBncm91cEZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIC8vIOq3uOujueyXkCDsho3tlZwg66qo65OgIOyjvOyEneydmCDrsLDsp4Ag7IKt7KCcXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhbm5vdGF0aW9uIG9mIGdyb3VwVG9EZWxldGUuYW5ub3RhdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgcmVtb3ZlQW5ub3RhdGlvbkJhZGdlKGFubm90YXRpb24uaWQsIG1zZy5ncm91cC5pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2DgOydtO2LgCDsu6jthYzsnbTrhIgg7LC+6riwIOuwjyDsgq3soJwgKOuqheyLnOyggeycvOuhnCDsspjrpqwpXG4gICAgICAgICAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDsgq3soJxcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOuplOuqqOumrOyXkOyEnCDqt7jro7kg7KCc6rGwXG4gICAgICAgIGFubm90YXRpb25Hcm91cHMgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbHRlcigoZykgPT4gZy5pZCAhPT0gbXNnLmdyb3VwLmlkKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLnSDsoIHsmqkg7ZWo7IiYXG5mdW5jdGlvbiBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyh0ZXh0Tm9kZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkRhdGEgfHwgIWRlc2NyaXB0aW9uRGF0YS5jb250ZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDtlYTsmpTtlZwg66qo65OgIO2PsO2KuCDrr7jrpqwg66Gc65OcXG4gICAgICAgIHlpZWxkIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pLFxuICAgICAgICAgICAgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJCb2xkXCIgfSksXG4gICAgICAgIF0pO1xuICAgICAgICAvLyDthY3siqTtirgg64W465OcIOy0iOq4sO2ZlFxuICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gXCJcIjtcbiAgICAgICAgLy8g66qo65OgIOyEnOyLnSDsoJXrs7Trpbwg66i87KCAIOy2lOy2nFxuICAgICAgICBjb25zdCByYW5nZXMgPSBleHRyYWN0Rm9ybWF0dGluZ1JhbmdlcyhkZXNjcmlwdGlvbkRhdGEpO1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgLy8g6rCBIOuylOychOuzhOuhnCDthY3siqTtirjsmYAg7ISc7IudIOyggeyaqVxuICAgICAgICBmb3IgKGNvbnN0IHJhbmdlIG9mIHJhbmdlcykge1xuICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOy2lOqwgFxuICAgICAgICAgICAgaWYgKHJhbmdlLnRleHQgJiYgcmFuZ2UudGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gcmFuZ2UudGV4dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhjdXJyZW50SW5kZXgsIHJhbmdlLnRleHQpO1xuICAgICAgICAgICAgICAgIC8vIOq4sOuzuCDsiqTtg4Dsnbwg7ISk7KCVIChSZWd1bGFyIO2PsO2KuCwg6rKA7J2A7IOJLCDrsJHspIQg7JeG7J2MKVxuICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRm9udE5hbWUoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIkludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIlJlZ3VsYXJcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZpbGxzKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBbXG4gICAgICAgICAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfSxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZVRleHREZWNvcmF0aW9uKGN1cnJlbnRJbmRleCwgY3VycmVudEluZGV4ICsgbGVuZ3RoLCBcIk5PTkVcIik7XG4gICAgICAgICAgICAgICAgLy8g67O865Oc7LK0IOyggeyaqVxuICAgICAgICAgICAgICAgIGlmIChyYW5nZS5pc0JvbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VGb250TmFtZShjdXJyZW50SW5kZXgsIGN1cnJlbnRJbmRleCArIGxlbmd0aCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIkludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJCb2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDrsJHspIQg7KCB7JqpXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLmlzVW5kZXJsaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlVGV4dERlY29yYXRpb24oY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFwiVU5ERVJMSU5FXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDsg4nsg4Eg7KCB7JqpXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlLmNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJnYkNvbG9yID0gaGV4VG9SZ2IocmFuZ2UuY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmdiQ29sb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRmlsbHMoY3VycmVudEluZGV4LCBjdXJyZW50SW5kZXggKyBsZW5ndGgsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI6IHJnYkNvbG9yLnIgLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnOiByZ2JDb2xvci5nIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYjogcmdiQ29sb3IuYiAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ICs9IGxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOykhOuwlOq/iCDstpTqsIBcbiAgICAgICAgICAgIGlmIChyYW5nZS5hZGROZXdMaW5lKSB7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGUuaW5zZXJ0Q2hhcmFjdGVycyhjdXJyZW50SW5kZXgsIFwiXFxuXCIpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIO2FjeyKpO2KuOqwgCDruYTslrTsnojsnLzrqbQg6riw67O46rCSIOyEpOyglVxuICAgICAgICBpZiAodGV4dE5vZGUuY2hhcmFjdGVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRleHROb2RlLmNoYXJhY3RlcnMgPSBcIk5ldyBBbm5vdGF0aW9uXCI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIO2XpeyKpCDsg4nsg4Eg7L2U65Oc66W8IFJHQuuhnCDrs4DtmZhcbmZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgPyB7XG4gICAgICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsO1xufVxuZnVuY3Rpb24gZXh0cmFjdEZvcm1hdHRpbmdSYW5nZXMoZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgY29uc3QgcmFuZ2VzID0gW107XG4gICAgZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSwgcGFyZW50TWFya3MgPSBbXSwgaXNMaXN0SXRlbSA9IGZhbHNlKSB7XG4gICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7LKY66asIC0g64W465Oc7JeQIOyngeygkSDsnojripQg66eI7YGs66eMIOyggeyaqVxuICAgICAgICBpZiAobm9kZS50ZXh0KSB7XG4gICAgICAgICAgICAvLyDtmITsnqwg64W465Oc7J2YIOuniO2BrOunjCDsgqzsmqkgKOu2gOuqqCDrp4jtgawg66y07IucKVxuICAgICAgICAgICAgY29uc3QgY3VycmVudE1hcmtzID0gbm9kZS5tYXJrcyB8fCBbXTtcbiAgICAgICAgICAgIC8vIOuniO2BrCDrtoTshJ1cbiAgICAgICAgICAgIGNvbnN0IGlzQm9sZCA9IGN1cnJlbnRNYXJrcy5zb21lKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwiYm9sZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlzVW5kZXJsaW5lID0gY3VycmVudE1hcmtzLnNvbWUoKG1hcmspID0+IG1hcmsudHlwZSA9PT0gXCJ1bmRlcmxpbmVcIik7XG4gICAgICAgICAgICBjb25zdCBjb2xvck1hcmsgPSBjdXJyZW50TWFya3MuZmluZCgobWFyaykgPT4gbWFyay50eXBlID09PSBcInRleHRTdHlsZVwiICYmIG1hcmsuYXR0cnMgJiYgbWFyay5hdHRycy5jb2xvcik7XG4gICAgICAgICAgICAvLyDthY3siqTtirgg67CPIOyEnOyLnSDsoJXrs7Qg7KCA7J6lXG4gICAgICAgICAgICByYW5nZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGV4dDogbm9kZS50ZXh0LFxuICAgICAgICAgICAgICAgIGlzQm9sZCxcbiAgICAgICAgICAgICAgICBpc1VuZGVybGluZSxcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6IGlzQm9sZCA/IFwiQm9sZFwiIDogXCJSZWd1bGFyXCIsXG4gICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yTWFyayA/IGNvbG9yTWFyay5hdHRycy5jb2xvciA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuOyAvLyDthY3siqTtirgg64W465Oc64qUIOyekOyLneydtCDsl4bsnLzrr4DroZwg7Jes6riw7IScIOyiheujjFxuICAgICAgICB9XG4gICAgICAgIC8vIGJ1bGxldExpc3Qg7LKY66asXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwiYnVsbGV0TGlzdFwiICYmXG4gICAgICAgICAgICBub2RlLmNvbnRlbnQgJiZcbiAgICAgICAgICAgIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgLy8gYnVsbGV0TGlzdOydmCDqsIEgbGlzdEl0ZW0g7LKY66asXG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaCgobGlzdEl0ZW1Ob2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICfigKIgJyDstpTqsIDtlZjsl6wg67aI66a/IO2RnOyLnFxuICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCLigKIgXCIsXG4gICAgICAgICAgICAgICAgICAgIGlzQm9sZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGlzVW5kZXJsaW5lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHVuZGVmaW5lZCwgLy8g6riw67O4IOyDieyDgSDsgqzsmqlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyBsaXN0SXRlbSDrgrTsmqkg7LKY66asXG4gICAgICAgICAgICAgICAgaWYgKGxpc3RJdGVtTm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobGlzdEl0ZW1Ob2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RJdGVtTm9kZS5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9jZXNzTm9kZShjb250ZW50Tm9kZSwgW10sIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g66eI7KeA66eJIGxpc3RJdGVt7J20IOyVhOuLiOuptCDspITrsJTqv4gg7LaU6rCAXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4IDwgbm9kZS5jb250ZW50Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZE5ld0xpbmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOydvOuwmCDsnpDsi50g64W465OcIOyymOumrFxuICAgICAgICBpZiAobm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50LmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g7ZWt7IOBIOu5iCDrtoDrqqgg66eI7YGsIOuwsOyXtCDsoITri6wgKOyKpO2DgOydvCDsg4Hsho0g7JWI7ZWoKVxuICAgICAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNoaWxkLCBbXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDqsIEg7IOB7JyEIOugiOuyqCDsu6jthZDsuKAg7LKY66asIOuwjyDspITrsJTqv4gg7LaU6rCAXG4gICAgaWYgKGRlc2NyaXB0aW9uRGF0YS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQpKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50LmZvckVhY2goKGNvbnRlbnROb2RlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8g6rCBIOy7qO2FkOy4oCDrhbjrk5wg7LKY66asXG4gICAgICAgICAgICBwcm9jZXNzTm9kZShjb250ZW50Tm9kZSwgW10pO1xuICAgICAgICAgICAgLy8g66eI7KeA66eJIO2VreuqqeydtCDslYTri4jrqbQg7KSE67CU6r+IIOy2lOqwgFxuICAgICAgICAgICAgaWYgKGluZGV4IDwgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHJhbmdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgYWRkTmV3TGluZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByYW5nZXM7XG59XG4vLyBVUERBVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IGZpbmRBbm5vdGF0aW9uKG1zZy5ncm91cElkLCBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKCFncm91cCB8fCAhYW5ub3RhdGlvbilcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g66mU66qo66asIOyDge2DnCDsl4XrjbDsnbTtirhcbiAgICAgICAgYW5ub3RhdGlvblttc2cua2V5XSA9IG1zZy52YWx1ZTtcbiAgICAgICAgLy8g7Iuk7KCcIEZpZ21hIOyalOyGjOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIO2VtOuLuSBhbm5vdGF0aW9uIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbkZyYW1lID0gZ3JvdXBGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IG1zZy5hbm5vdGF0aW9uSWQpO1xuICAgICAgICBpZiAoIWFubm90YXRpb25GcmFtZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8gZGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDssL7slYQg7JeF642w7J207Yq4XG4gICAgICAgIGlmIChtc2cua2V5ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIgg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9pbmRleF9jb250YWluZXJcIik7XG4gICAgICAgICAgICAvLyBjb250ZW50IOq3uOujuSDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGFubm90YXRpb25GcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgaWYgKCFjb250ZW50R3JvdXApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAgICAgLy8gZGVzY3JpcHRpb24g7YWN7Iqk7Yq4IOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLnSDsoIHsmqlcbiAgICAgICAgICAgICAgICB5aWVsZCBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyhkZXNjTm9kZSwgbXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsCAtIOq3uOujueyXkOyEnCDshKTsoJXrkJwgY2FyZFdpZHRoIOqwkiDsgqzsmqlcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoZ3JvdXAuY2FyZFdpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyDtlITroIjsnoQg64K07JeQ7IScIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsFxuICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgMjAgLVxuICAgICAgICAgICAgICAgICAgICAoYW5ub3RhdGlvbkZyYW1lLnBhZGRpbmdMZWZ0ICsgYW5ub3RhdGlvbkZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gZGVzY3JpcHRpb27snbQg67OA6rK965CY66m0IOugiOydtOyVhOybgyDsobDsoJVcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiOyAvLyDrhpLsnbTrpbwg64K07Jqp7JeQIOunnuqyjCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShjYXJkV2lkdGggLSAyMCwgYW5ub3RhdGlvbkZyYW1lLmhlaWdodCk7IC8vIOyijOyasCDtjKjrlKkg6rOg66CkXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGV4Q29udGFpbmVy7JmAIGNvbnRlbnRHcm91cCDrhIjruYQg67mE7JyoIOqzhOyCsCAoMjA6ODApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4V2lkdGggPSBNYXRoLnJvdW5kKGF2YWlsYWJsZVdpZHRoICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudFdpZHRoID0gTWF0aC5yb3VuZChhdmFpbGFibGVXaWR0aCAqIDAuOCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGV4Q29udGFpbmVyIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShjb250ZW50V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKGNvbnRlbnRXaWR0aCAtIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KSwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gaW5kZXhDb250YWluZXIuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc7J2YIOuGkuydtOulvCDthY3siqTtirgg64W465Oc7J2YIOuGkuydtOyZgCDrj5nsnbztlZjqsowg7ISk7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUucmVzaXplKGluZGV4V2lkdGgsIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc7J2YIOyImOyngSDsnITsuZgg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUueSA9IChpbmRleENvbnRhaW5lci5oZWlnaHQgLSBpbmRleE5vZGUuaGVpZ2h0KSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaW5kZXhDb250YWluZXIg64aS7J20IOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLnJlc2l6ZShpbmRleFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOq4sOyhtCDroIjsnbTslYTsm4Mg7Zi47ZmY7ISxIOycoOyngCAtIOyduOuNseyKpCDsu6jthYzsnbTrhIjqsIAg7JeG64qUIOqyveyasFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjsgLy8g64aS7J2066W8IOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAucmVzaXplKGF2YWlsYWJsZVdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnJlc2l6ZShhdmFpbGFibGVXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCksIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGFubm90YXRpb25Hcm91cEZyYW1lIO2BrOq4sCDsobDsoJUgKOuEiOu5hOuKlCBjYXJkV2lkdGjroZwg6rOg7KCVLCDrhpLsnbTripQg7J6Q64+ZIOyhsOyglSlcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7IC8vIOuGkuydtOulvCDrgrTsmqnsl5Ag66ee6rKMIOyekOuPmSDsobDsoJVcbiAgICAgICAgICAgICAgICBncm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIGdyb3VwRnJhbWUuaGVpZ2h0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIFVQREFURV9BTk5PVEFUSU9OX0dST1VQIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIOuplOuqqOumrCDsg4Htg5wg7JeF642w7J207Yq4XG4gICAgICAgIGdyb3VwW21zZy5rZXldID0gbXNnLnZhbHVlO1xuICAgICAgICAvLyBGaWdtYSDsmpTshowg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGZyYW1lTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwLmlkKTtcbiAgICAgICAgaWYgKGZyYW1lTm9kZSkge1xuICAgICAgICAgICAgZnJhbWVOb2RlLnNldFBsdWdpbkRhdGEobXNnLmtleSwgSlNPTi5zdHJpbmdpZnkobXNnLnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6re466O5IO2UhOugiOyehOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgaWYgKGdyb3VwLmdyb3VwRnJhbWVJZCkge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cudmFsdWUpKTtcbiAgICAgICAgICAgICAgICAvLyDsg4nsg4Eg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5rZXkgPT09IFwiY29sb3JcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2xvclZhbHVlID0gcGFyc2VJbnQobXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlR3JvdXBGcmFtZUNvbG9yKGdyb3VwRnJhbWUsIGNvbG9yVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgaWYgKG1zZy5rZXkgPT09IFwic2l6ZVwiIHx8IG1zZy5rZXkgPT09IFwiY2FyZFdpZHRoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgdXBkYXRlR3JvdXBGcmFtZVNpemUoZ3JvdXBGcmFtZSwgbXNnLmtleSwgbXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyBVUERBVEVfQU5OT1RBVElPTl9PUkRFUiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgeyBncm91cElkLCBzb3VyY2VJbmRleCwgZGVzdGluYXRpb25JbmRleCB9ID0gbXNnO1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g66mU66qo66as7IOB7J2YIOyjvOyEnSDsiJzshJwg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gWy4uLmdyb3VwLmFubm90YXRpb25zXTtcbiAgICAgICAgY29uc3QgW21vdmVkQW5ub3RhdGlvbl0gPSBhbm5vdGF0aW9ucy5zcGxpY2Uoc291cmNlSW5kZXggLSAxLCAxKTtcbiAgICAgICAgYW5ub3RhdGlvbnMuc3BsaWNlKGRlc3RpbmF0aW9uSW5kZXggLSAxLCAwLCBtb3ZlZEFubm90YXRpb24pO1xuICAgICAgICBncm91cC5hbm5vdGF0aW9ucyA9IGFubm90YXRpb25zO1xuICAgICAgICAvLyBGaWdtYSDsupTrsoTsiqQg7IOB7J2YIOyjvOyEnSDsiJzshJwg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKCFncm91cEZyYW1lIHx8IGdyb3VwRnJhbWUudHlwZSAhPT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshowg7KSRIGFubm90YXRpb25GcmFtZeunjCDtlYTthLDrp4FcbiAgICAgICAgY29uc3QgdGl0bGVDb250YWluZXIgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfY29udGFpbmVyXCIpO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWVzID0gZ3JvdXBGcmFtZS5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgLy8g66mU66qo66as7J2YIOyjvOyEnSDsiJzshJzsl5Ag66ee6rKMIGFubm90YXRpb25GcmFtZeuTpOydhCDsnqzsoJXroKxcbiAgICAgICAgaWYgKGFubm90YXRpb25GcmFtZXMubGVuZ3RoID09PSBhbm5vdGF0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIOqwgSDso7zshJ3sl5Ag7ZW064u57ZWY64qUIO2UhOugiOyehCDssL7slYTshJwg7Iic7ISc64yA66GcIOyerOuwsOy5mFxuICAgICAgICAgICAgYW5ub3RhdGlvbnMuZm9yRWFjaCgoYW5ub3RhdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uTm9kZSA9IGFubm90YXRpb25GcmFtZXMuZmluZCgoZnJhbWUpID0+IGZyYW1lLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikgPT09IGFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjripQg7ZWt7IOBIOunqCDsnITsl5Ag7Jyg7KeA7ZWY6rOgLCDqt7gg64uk7J2M67aA7YSwIOyjvOyEnSDtlITroIjsnoQg67Cw7LmYXG4gICAgICAgICAgICAgICAgICAgIC8vIGluZGV4ICsgMeydgCBUaXRsZSDsu6jthYzsnbTrhIgg64uk7J2MIOychOy5mOu2gO2EsCDsi5zsnpHtlZzri6TripQg7J2Y66+4XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUuaW5zZXJ0Q2hpbGQoaW5kZXggKyAxLCBhbm5vdGF0aW9uTm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjqsIAg7J6I64uk66m0IO2VreyDgSDrp6gg7JyE66GcIOydtOuPmVxuICAgICAgICAgICAgaWYgKHRpdGxlQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5pbnNlcnRDaGlsZCgwLCB0aXRsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDsiJzshJzqsIAg67CU64CQIO2bhCDsnbjrjbHsiqQg67KI7Zi4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQW5ub3RhdGlvbkluZGljZXMoZ3JvdXBGcmFtZSk7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7J24642x7Iqk64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgeWllbGQgdXBkYXRlQmFkZ2VJbmRpY2VzKGdyb3VwLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOq4sOyhtCDrsKnsi50gKOyekOyLnSDsmpTshozsmYAg7KO87ISdIOyImOqwgCDsnbzsuZjtlZjsp4Ag7JWK7J2EIOqyveyasOydmCDsmIjsmbgg7LKY66asKVxuICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI66W8IOygnOyZuO2VnCDso7zshJ0g7ZSE66CI7J6E66eMIO2VhO2EsOungVxuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbk5vZGVzID0gZ3JvdXBGcmFtZS5jaGlsZHJlbi5maWx0ZXIoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZSA9IGFubm90YXRpb25Ob2Rlc1tzb3VyY2VJbmRleCAtIDFdOyAvLyAw67aA7YSwIOyLnOyeke2VmOuKlCDsnbjrjbHsiqTroZwg67OA7ZmYXG4gICAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gVGl0bGUg7Luo7YWM7J2064SI6rCAIOyeiOuLpOuptCDqt7gg7JyE7LmY66W8IOqzoOugpO2VmOyXrCDsgr3snoUg7JyE7LmYIOqzhOyCsFxuICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydEF0ID0gdGl0bGVDb250YWluZXIgPyBkZXN0aW5hdGlvbkluZGV4IDogZGVzdGluYXRpb25JbmRleCAtIDE7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5pbnNlcnRDaGlsZChpbnNlcnRBdCwgc291cmNlKTtcbiAgICAgICAgICAgICAgICAvLyBUaXRsZSDsu6jthYzsnbTrhIjqsIAg7J6I64uk66m0IO2VreyDgSDrp6gg7JyE66GcIOydtOuPmVxuICAgICAgICAgICAgICAgIGlmICh0aXRsZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKDAsIHRpdGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g7Iic7ISc6rCAIOuwlOuAkCDtm4Qg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICB5aWVsZCB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKTtcbiAgICAgICAgICAgICAgICAvLyDrsLDsp4Ag7J24642x7Iqk64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgIHlpZWxkIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyBNT1ZFX1RPX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVNb3ZlVG9TZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y6Y7J207KeAIElE6rCAIOygnOqzteuQnCDqsr3smrAg66i87KCAIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXG4gICAgICAgIGlmIChtc2cucGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBpZiAocGFnZU5vZGUgJiYgcGFnZU5vZGUudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGdyb3VwTm9kZeulvCDssL7snYAg7ZuEIO2VtOuLuSDrhbjrk5zsnZgg7LWc7IOB7JyEIO2UhOugiOyehOycvOuhnCDsnbTrj5lcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBpZiAoZ3JvdXBOb2RlICYmIGdyb3VwTm9kZS50eXBlID09PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgICAgICAgICBjb25zdCB0b3BGcmFtZSA9IGdldFRvcExldmVsRnJhbWUoZ3JvdXBOb2RlKTtcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdG9wRnJhbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOy1nOyDgeychCDtlITroIjsnoTsnYQg7LC+7KeAIOuqu+2VnCDqsr3smrAg6re466O5IOuFuOuTnOuhnCDsnbTrj5kgKOq4sOyhtCDrj5nsnpEpXG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChncm91cE5vZGUpIHtcbiAgICAgICAgICAgIC8vIO2UhOugiOyehOydtCDslYTri4wg64W465Oc7J24IOqyveyasOuPhCDstZzsg4HsnIQg7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZ2V0VG9wTGV2ZWxGcmFtZShncm91cE5vZGUpO1xuICAgICAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFt0b3BGcmFtZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehOydhCDssL7sp4Ag66q77ZWcIOqyveyasCDqt7jro7kg64W465Oc66GcIOydtOuPmSAo6riw7KG0IOuPmeyekSlcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW2dyb3VwTm9kZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBDSEVDS19DVVJSRU5UX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBleGlzdHMgPSAhIWdyb3VwTm9kZTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgcmVzdWx0OiBleGlzdHMsXG4gICAgICAgICAgICBncm91cElkOiBtc2cuZ3JvdXBJZCxcbiAgICAgICAgICAgIG9ic29sZXRlOiAhZXhpc3RzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIEdFVF9GUkFNRV9JTUFHRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lSW1hZ2VzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYW5ub3RhdGlvbkdyb3Vwcykge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZSAmJiBmcmFtZU5vZGUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmcmFtZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiUE5HXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJTQ0FMRVwiLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZyYW1lSW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7ZmlnbWEuYmFzZTY0RW5jb2RlKGltYWdlKX1gLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFtZUltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZyYW1lSW1hZ2VzIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDrqZTsi5zsp4Ag7ZW465Ok65+sIOyEpOyglVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU0FWRV9EQVRBXCI6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMT0FEX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEobXNnLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHJhdyA/IEpTT04ucGFyc2UocmF3KSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWQsIFwicGFyc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgdHJ1ZSwgeyBrZXk6IG1zZy5rZXksIGRhdGE6IHBhcnNlZCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDTEVBUl9BTk5PVEFUSU9OX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uR3JvdXBcIiwgXCJbXVwiKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHt9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRklMRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHsgZmlsZU5hbWU6IGZpZ21hLnJvb3QubmFtZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfUEFHRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobikgPT4gbi5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUlkOiBtc2cucGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTogKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS5uYW1lKSB8fCBcIlVua25vd24gUGFnZVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1PVkVfVE9fU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvU2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTU9WRV9UT19BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkNIRUNLX0NVUlJFTlRfU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlQ2hlY2tDdXJyZW50U2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fT1JERVJcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVVcGRhdGVBbm5vdGF0aW9uT3JkZXIobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRlJBTUVfSU1BR0VcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIG1lc3NhZ2UgdHlwZTpcIiwgbXNnLnR5cGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBoYW5kbGluZyBtZXNzYWdlIHR5cGUgJHt0eXBlfTpgLCBlcnJvcik7XG4gICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgIH1cbn0pO1xuLy8g6re466O5IO2UhOugiOyehCDsg4nsg4Eg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlR3JvdXBGcmFtZUNvbG9yKGZyYW1lLCBjb2xvclZhbHVlKSB7XG4gICAgY29uc3QgaGVhZGVyQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSk7XG4gICAgLy8g7ZSE66CI7J6EIOyekOyytCDsg4nsg4Eg7JeF642w7J207Yq4IC0g67Cw6rK97IOJIOygnOqxsFxuICAgIGZyYW1lLmZpbGxzID0gW107XG4gICAgLy8gVGl0bGUg6re466O5IOyymOumrFxuICAgIGNvbnN0IHRpdGxlR3JvdXAgPSBmcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcInRpdGxlX2NvbnRhaW5lclwiKTtcbiAgICBpZiAodGl0bGVHcm91cCkge1xuICAgICAgICAvLyDtg4DsnbTti4Ag6re466O5IOuwsOqyveyDiSDsnKDsp4BcbiAgICAgICAgdGl0bGVHcm91cC5maWxscyA9IFtcbiAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAyNDUgLyAyNTUsIGc6IDI0NSAvIDI1NSwgYjogMjQ1IC8gMjU1IH0gfSxcbiAgICAgICAgXTtcbiAgICB9XG4gICAgLy8g66qo65OgIOyekOyLnSDso7zshJ0g7JqU7IaM65OkIOyymOumrFxuICAgIGZyYW1lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydmCDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICBjaGlsZC5maWxscyA9IFtdO1xuICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGluZGV4Q29udGFpbmVyID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgaWYgKGluZGV4Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDrsLDqsr3sg4kg7Jyg7KeAXG4gICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7IHI6IDI0NSAvIDI1NSwgZzogMjQ1IC8gMjU1LCBiOiAyNDUgLyAyNTUgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgLy8g7Luo7YWQ7LigIOq3uOujuSDrsLDqsr3sg4kg7KCc6rGwXG4gICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmZpbGxzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyDqt7jro7kgSUQg6rCA7KC47Jik6riwIChwYXJlbnRfZnJhbWVfaWTsl5Ag7KCA7J6l65CY7Ja0IOyeiOydjClcbiAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICBpZiAoIXBhcmVudEZyYW1lSWQpXG4gICAgICAgIHJldHVybjtcbiAgICAvLyDtlbTri7kg6re466O57J2YIOuqqOuToCDso7zshJ0gSUQg6rCA7KC47Jik6riwXG4gICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAocGFyZW50RnJhbWVJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGFubm90YXRpb25JZHMgPSBncm91cC5hbm5vdGF0aW9ucy5tYXAoKGEpID0+IGEuaWQpO1xuICAgIC8vIO2OmOydtOyngOyXkOyEnCDtlbTri7kg6re466O57JeQIOyGje2VnCDrqqjrk6Ag67Cw7KeAIOywvuq4sFxuICAgIGZpZ21hLmN1cnJlbnRQYWdlXG4gICAgICAgIC5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSkpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4ge1xuICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Ag7IOJ7IOB66eMIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgYmFkZ2UuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiBoZWFkZXJDb2xvciB9XTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g6re466O5IO2UhOugiOyehCDtgazquLAg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlR3JvdXBGcmFtZVNpemUoZnJhbWUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiID8gZ2V0Q2FyZFdpZHRoQnlWYWx1ZSh2YWx1ZSkgOiBnZXRDYXJkV2lkdGgoKTtcbiAgICAgICAgLy8g7ZSE66CI7J6E7J20IOyGje2VnCDrtoDrqqgg7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBwYXJlbnRGcmFtZUlkID0gZnJhbWUuZ2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiKTtcbiAgICAgICAgaWYgKHBhcmVudEZyYW1lSWQgJiYgcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQocGFyZW50RnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50RnJhbWUgJiYgcGFyZW50RnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgLy8geCDsooztkZwg7JeF642w7J207Yq4IC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7Lih7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgICAgICBmcmFtZS54ID0gcGFyZW50RnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDrhIjruYTsmYAg64aS7J20IOyEpOyglSAo64aS7J2064qUIOuCtOyaqeyXkCDrp57qsowg7J6Q64+ZIOyhsOyglSlcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgZnJhbWUubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICBmcmFtZS5yZXNpemUoY2FyZFdpZHRoLCBmcmFtZS5oZWlnaHQpO1xuICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCB0aXRsZUdyb3VwID0gZnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiYgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJ0aXRsZV9jb250YWluZXJcIik7XG4gICAgICAgIGlmICh0aXRsZUdyb3VwKSB7XG4gICAgICAgICAgICBjb25zdCBhdmFpbGFibGVXaWR0aCA9IGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAvLyBUaXRsZSDqt7jro7kg7YGs6riwIOyhsOyglVxuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgdGl0bGVHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICB0aXRsZUdyb3VwLnJlc2l6ZShhdmFpbGFibGVXaWR0aCwgdGl0bGVHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgLy8gRGVzY3JpcHRpb24g7YWN7Iqk7Yq4IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTm9kZSA9IHRpdGxlR3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwidGl0bGVfZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY3JpcHRpb25Ob2RlKSB7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25Ob2RlLnJlc2l6ZShhdmFpbGFibGVXaWR0aCAtICh0aXRsZUdyb3VwLnBhZGRpbmdMZWZ0ICsgdGl0bGVHcm91cC5wYWRkaW5nUmlnaHQpLCAzNik7XG4gICAgICAgICAgICAgICAgLy8g7Y+w7Yq4IO2BrOq4sCDsl4XrjbDsnbTtirggKHNpemUg7IaN7ISx7J20IOuzgOqyveuQnCDqsr3smrApXG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09PSBcInNpemVcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyDtj7Dtirgg66Gc65OcXG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiUmVndWxhclwiIH0pO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uTm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDsgqzsnbTspogg6rCS7JeQIOuUsOuluCDsiqTtg4Dsnbwg67OA6rK9XG4gICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJzaXplXCIpIHtcbiAgICAgICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICBjb25zdCBmb250U2l6ZSA9IGdldEZvbnRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAvLyDrqqjrk6Ag7YWN7Iqk7Yq4IOuFuOuTnOyXkCDrjIDtlbQg7Y+w7Yq4IOuhnOuTnFxuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIkJvbGRcIiB9KTtcbiAgICAgICAgICAgIC8vIOq3uOujuSBJRCDqsIDsoLjsmKTquLBcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudEZyYW1lSWQgPSBmcmFtZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpO1xuICAgICAgICAgICAgaWYgKHBhcmVudEZyYW1lSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChwYXJlbnRGcmFtZUlkKTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g7ZW064u5IOq3uOujueydmCDrqqjrk6Ag7KO87ISdIElEIOqwgOyguOyYpOq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWRzID0gZ3JvdXAuYW5ub3RhdGlvbnMubWFwKChhKSA9PiBhLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g7Y6Y7J207KeA7JeQ7IScIO2VtOuLuSDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCDrsLDsp4Ag7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJhZGdlcyA9IGZpZ21hLmN1cnJlbnRQYWdlLmZpbmRBbGwoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9iYWRnZVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uSWRzLmluY2x1ZGVzKG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDqsIEg67Cw7KeAIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGJhZGdlIG9mIGJhZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOuwsOyngCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYmFkZ2VTaXplID0gZ2V0QmFkZ2VTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2UucmVzaXplKGJhZGdlU2l6ZSwgYmFkZ2VTaXplKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDrsLDsp4Ag64K067aAIO2FjeyKpO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dE5vZGUgPSBiYWRnZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGV4dE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dE5vZGUuZm9udFNpemUgPSBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshozsnZgg7YGs6riw64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJUsIOuGkuydtCDsnpDrj5kg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucmVzaXplKGNhcmRXaWR0aCAtIChmcmFtZS5wYWRkaW5nTGVmdCArIGZyYW1lLnBhZGRpbmdSaWdodCksIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXhDb250YWluZXIgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4X2NvbnRhaW5lclwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhDb250YWluZXIgJiYgY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsgqzsmqkg6rCA64ql7ZWcIOuEiOu5hCDqs4TsgrAgKGFubm90YXRpb25GcmFtZSDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJhbWVBdmFpbGFibGVXaWR0aCA9IGNoaWxkLndpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDrhIjruYQg67mE7JyoIOqzhOyCsCAoMjA6ODApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZUF2YWlsYWJsZVdpZHRoICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGZyYW1lQXZhaWxhYmxlV2lkdGggLSBpbmRleFdpZHRoOyAvLyDsoJXtmZXtlZwg6rOE7IKw7J2EIOychO2VtCDrgpjrqLjsp4Ag64SI67mEIO2VoOuLuVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g64K07JqpIOq3uOujuSDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAucmVzaXplKGNvbnRlbnRXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDshKTrqoUg7YWN7Iqk7Yq4IOyXheuNsOydtO2KuFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY05vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUuZm9udFNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDthY3siqTtirgg64W465OcIO2BrOq4sCDsobDsoJUgKGNvbnRlbnRHcm91cCDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRBdmFpbGFibGVXaWR0aCA9IGNvbnRlbnRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnJlc2l6ZSh0ZXh0QXZhaWxhYmxlV2lkdGgsIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4Q29udGFpbmVyLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdWZXJ0aWNhbCA9IFwiSFVHXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5yZXNpemUoaW5kZXhXaWR0aCwgaW5kZXhDb250YWluZXIuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5wg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBpbmRleENvbnRhaW5lci5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSAmJiBkZXNjTm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrhbjrk5wg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnCDtgazquLAg7KGw7KCVIChpbmRleENvbnRhaW5lciDtjKjrlKkg6rOg66CkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZUF2YWlsYWJsZVdpZHRoID0gaW5kZXhXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleENvbnRhaW5lci5wYWRkaW5nTGVmdCArIGluZGV4Q29udGFpbmVyLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnJlc2l6ZShpbmRleE5vZGVBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc66W8IOyImOyngSDspJHslZnsl5Ag67Cw7LmYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnkgPSAoaW5kZXhDb250YWluZXIuaGVpZ2h0IC0gaW5kZXhOb2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudEdyb3Vw7J2YIOuGkuydtOyXkCDrp57qsowgaW5kZXhDb250YWluZXIg64aS7J20IOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J207KCEIOq1rOyhsOyZgOydmCDtmLjtmZjshLEg7Jyg7KeAICjquLDsobQg66CI7J207JWE7JuDKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IKs7JqpIOqwgOuKpe2VnCDrhIjruYQg6rOE7IKwIChhbm5vdGF0aW9uRnJhbWUg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQXZhaWxhYmxlV2lkdGggPSBjYXJkV2lkdGggLSAoZnJhbWUucGFkZGluZ0xlZnQgKyBmcmFtZS5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShmcmFtZUF2YWlsYWJsZVdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVIChjb250ZW50R3JvdXAg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXZhaWxhYmxlV2lkdGggPSBmcmFtZUF2YWlsYWJsZVdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKHRleHRBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgLy8g66qo65OgIOyekOyLnSDsmpTshozsnZgg64SI67mE64+EIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBmcmFtZS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZC50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIOuCtOyXkOyEnClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoID0gY2FyZFdpZHRoIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gYW5ub3RhdGlvbkZyYW1lIO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUoYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg7Luo7YWM7J2064SIIOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleENvbnRhaW5lciA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhfY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2NvbnRlbnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleENvbnRhaW5lciAmJiBjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyCrOyaqSDqsIDriqXtlZwg64SI67mEIOqzhOyCsCAoYW5ub3RhdGlvbkZyYW1lIO2MqOuUqSDqs6DroKQpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmFtZUF2YWlsYWJsZVdpZHRoID0gYW5ub3RhdGlvbkF2YWlsYWJsZVdpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDsu6jthYzsnbTrhIjsmYAg64K07JqpIOq3uOujuSDrhIjruYQg67mE7JyoIOqzhOyCsCAoMzA6NzApXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleFdpZHRoID0gTWF0aC5yb3VuZChmcmFtZUF2YWlsYWJsZVdpZHRoICogMC4yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRXaWR0aCA9IGZyYW1lQXZhaWxhYmxlV2lkdGggLSBpbmRleFdpZHRoOyAvLyDsoJXtmZXtlZwg6rOE7IKw7J2EIOychO2VtCDrgpjrqLjsp4Ag64SI67mEIO2VoOuLuVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOy7qO2FjOydtOuEiCDtgazquLAg7KGw7KCVXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleENvbnRhaW5lci5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGluZGV4Q29udGFpbmVyLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDrgrTsmqkg6re466O5IO2BrOq4sCDsobDsoJVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ1ZlcnRpY2FsID0gXCJIVUdcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY29udGVudFdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVIChjb250ZW50R3JvdXAg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXZhaWxhYmxlV2lkdGggPSBjb250ZW50V2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5yZXNpemUodGV4dEF2YWlsYWJsZVdpZHRoLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnCDssL7quLBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGluZGV4Q29udGFpbmVyLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXhOb2RlICYmIGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J24642x7IqkIOuFuOuTnOydmCDrhpLsnbTrpbwg7YWN7Iqk7Yq4IOuFuOuTnOydmCDrhpLsnbTsmYAg64+Z7J287ZWY6rKMIOyEpOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4Tm9kZUF2YWlsYWJsZVdpZHRoID0gaW5kZXhXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleENvbnRhaW5lci5wYWRkaW5nTGVmdCArIGluZGV4Q29udGFpbmVyLnBhZGRpbmdSaWdodCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnJlc2l6ZShpbmRleE5vZGVBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDsnbjrjbHsiqQg64W465Oc66W8IOyImOyngSDspJHslZnsl5Ag67Cw7LmYXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLnkgPSAoaW5kZXhDb250YWluZXIuaGVpZ2h0IC0gaW5kZXhOb2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29udGVudEdyb3Vw7J2YIOuGkuydtOyXkCDrp57qsowgaW5kZXhDb250YWluZXIg64aS7J20IOyhsOyglVxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhDb250YWluZXIucmVzaXplKGluZGV4V2lkdGgsIGNvbnRlbnRHcm91cC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7J207KCEIOq1rOyhsOyZgOydmCDtmLjtmZjshLEg7Jyg7KeAICjquLDsobQg66CI7J207JWE7JuDKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g7IKs7JqpIOqwgOuKpe2VnCDrhIjruYQg6rOE7IKwIChhbm5vdGF0aW9uRnJhbWUg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyYW1lQXZhaWxhYmxlV2lkdGggPSBhbm5vdGF0aW9uQXZhaWxhYmxlV2lkdGggLSAoY2hpbGQucGFkZGluZ0xlZnQgKyBjaGlsZC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nVmVydGljYWwgPSBcIkhVR1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLnJlc2l6ZShmcmFtZUF2YWlsYWJsZVdpZHRoLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjTm9kZSA9IGNvbnRlbnRHcm91cC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g7YWN7Iqk7Yq4IOuFuOuTnCDtgazquLAg7KGw7KCVIChjb250ZW50R3JvdXAg7Yyo65SpIOqzoOugpClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0QXZhaWxhYmxlV2lkdGggPSBmcmFtZUF2YWlsYWJsZVdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKHRleHRBdmFpbGFibGVXaWR0aCwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gTU9WRV9UT19BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZU1vdmVUb0Fubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y6Y7J207KeAIElE6rCAIOygnOqzteuQnCDqsr3smrAg66i87KCAIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXG4gICAgICAgIGlmIChtc2cucGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBpZiAocGFnZU5vZGUgJiYgcGFnZU5vZGUudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIO2VtOuLuSDso7zshJ3snZgg67Cw7KeAIOywvuq4sFxuICAgICAgICBjb25zdCBiYWRnZXMgPSBmaWdtYS5jdXJyZW50UGFnZS5maW5kQWxsKChub2RlKSA9PiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fYmFkZ2VcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKGJhZGdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Drpbwg67ew7Y+s7Yq466GcIOqwgOyguOyYpOq4sFxuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGJhZGdlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDrsLDsp4Drpbwg7LC+7KeAIOuqu+2VnCDqsr3smrAg6re466O5IO2UhOugiOyehOycvOuhnCDsnbTrj5kgKOuMgOyytCDsmLXshZgpXG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBOb2RlKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9