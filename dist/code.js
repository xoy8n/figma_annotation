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
            groupFrame.fills = [
                { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
            ];
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
        annotationFrame.layoutMode = "VERTICAL";
        annotationFrame.itemSpacing = 8;
        annotationFrame.fills = [
            { type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } },
        ];
        annotationFrame.cornerRadius = 8;
        // 카드 너비 계산
        const cardWidth = getCardWidth(cardWidthValue);
        // 너비 고정
        annotationFrame.layoutSizingHorizontal = "FIXED";
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
    contentGroup.fills = []; // 투명 배경
    // 너비 고정
    contentGroup.layoutSizingHorizontal = "FIXED";
    contentGroup.resize(frameWidth, contentGroup.height);
    return contentGroup;
}
// 인덱스 노드 생성 함수
function createIndexNode(annotationId, index, colorValue) {
    const indexNode = figma.createText();
    indexNode.characters = `${index}`;
    indexNode.setPluginData("type", "annotation_index");
    indexNode.setPluginData("annotationId", annotationId);
    // 스타일 설정
    indexNode.fontSize = 14;
    indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    // 색상 설정이 있으면 적용
    if (colorValue !== undefined) {
        const color = getColorByValue(colorValue);
        indexNode.fills = [{ type: "SOLID", color }];
    }
    return indexNode;
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
        textNode.fills = [{ type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } }];
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
        // 2. 내용 그룹 생성
        const contentGroupWidth = cardWidth - 20 - (frame.paddingLeft + frame.paddingRight);
        const group = createContentGroup(annotationId, contentGroupWidth);
        // 3. 인덱스 노드 생성
        const indexNode = createIndexNode(annotationId, index, colorValue);
        // 4. 설명 텍스트 노드 생성
        const initialText = description
            ? extractTextFromDescription(description)
            : "New Annotation";
        const textNode = yield createDescriptionNode(annotationId, initialText, sizeValue, description);
        // 5. 텍스트 노드 크기 조정
        const textNodeWidth = contentGroupWidth - (group.paddingLeft + group.paddingRight);
        textNode.layoutSizingHorizontal = "FIXED";
        textNode.resize(textNodeWidth, textNode.height);
        // 6. 노드 구성
        group.appendChild(indexNode);
        group.appendChild(textNode);
        frame.appendChild(group);
        return { frame, group, indexNode, textNode };
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
    if (Array.isArray(description.content)) {
        description.content.forEach(extractText);
    }
    return text.trim() || "New Annotation";
}
// 모든 주석 요소의 인덱스 번호 업데이트
function updateAnnotationIndices(groupFrame) {
    // 모든 주석 요소의 인덱스 번호 업데이트
    groupFrame.children.forEach((child, index) => {
        if (child.type === "FRAME" &&
            child.getPluginData("type") === "annotation") {
            // 내용 그룹 찾기
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
            // 주석 프레임 이름 업데이트
            child.name = `Annotation ${index + 1}`;
        }
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
                annotationGroupFrame.fills = [
                    { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
                ];
                // 레이아웃 모드 설정 - 세로 배치
                annotationGroupFrame.layoutMode = "VERTICAL";
                annotationGroupFrame.paddingTop = 10;
                annotationGroupFrame.paddingBottom = 10;
                annotationGroupFrame.paddingLeft = 10;
                annotationGroupFrame.paddingRight = 10;
                // 상위 프레임에 추가
                topFrame.appendChild(annotationGroupFrame);
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
        annotationGroupFrame.fills = [
            { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
        ];
        // 레이아웃 모드 설정 - 세로 배치
        annotationGroupFrame.layoutMode = "VERTICAL";
        annotationGroupFrame.paddingTop = 10;
        annotationGroupFrame.paddingBottom = 10;
        annotationGroupFrame.paddingLeft = 10;
        annotationGroupFrame.paddingRight = 10;
        // 상위 프레임에 추가
        topFrame.appendChild(annotationGroupFrame);
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
            if (groupFrame) {
                groupFrame.remove();
            }
            // 그룹에 속한 모든 annotation의 배지 삭제
            groupToDelete.annotations.forEach((annotation) => {
                removeAnnotationBadge(annotation.id);
            });
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
        // 필요한 모든 폰트를 먼저 로드 (Regular, Bold)
        yield Promise.all([
            figma.loadFontAsync({ family: "Inter", style: "Regular" }),
            figma.loadFontAsync({ family: "Inter", style: "Bold" }),
        ]);
        // 텍스트 내용 추출 - 기존 extractTextFromDescription 활용
        const plainText = extractTextFromDescription(descriptionData);
        // 모든 스타일 초기화를 위해 characters를 다시 설정
        textNode.characters = plainText;
        // 전체 텍스트를 기본 스타일로 설정
        textNode.setRangeFontName(0, plainText.length, {
            family: "Inter",
            style: "Regular",
        });
        textNode.setRangeTextDecoration(0, plainText.length, "NONE");
        textNode.setRangeFills(0, plainText.length, [
            { type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } },
        ]);
        // Bold, Underline, Color 등의 서식을 적용하기 위해 텍스트 범위 정보 추출
        const formattingRanges = extractFormattingRanges(descriptionData);
        // Bold 스타일 적용
        if (formattingRanges.bold.length > 0) {
            formattingRanges.bold.forEach((range) => {
                textNode.setRangeFontName(range.start, range.end, {
                    family: "Inter",
                    style: "Bold",
                });
            });
        }
        // Underline 스타일 적용
        formattingRanges.underline.forEach((range) => {
            textNode.setRangeTextDecoration(range.start, range.end, "UNDERLINE");
        });
        // Color 스타일 적용
        formattingRanges.color.forEach((colorRange) => {
            const r = parseInt(colorRange.color.slice(1, 3), 16) / 255;
            const g = parseInt(colorRange.color.slice(3, 5), 16) / 255;
            const b = parseInt(colorRange.color.slice(5, 7), 16) / 255;
            textNode.setRangeFills(colorRange.start, colorRange.end, [
                { type: "SOLID", color: { r, g, b } },
            ]);
        });
        // 리스트 스타일 적용 (Figma에서 직접적인 리스트 지원이 제한적이므로 • 문자로 대체)
        if (formattingRanges.bulletList.length > 0) {
            // 여기서는 간단히 구현합니다. 실제로는 좀 더 복잡한 변환이 필요할 수 있습니다.
            const updatedText = formattingRanges.bulletList.reduce((text, item) => {
                return text.slice(0, item.start) + "• " + text.slice(item.start);
            }, textNode.characters);
            textNode.characters = updatedText;
        }
    });
}
// 서식 범위 추출 함수
function extractFormattingRanges(descriptionData) {
    let currentPosition = 0;
    const ranges = {
        bold: [],
        underline: [],
        color: [],
        bulletList: [],
    };
    function processNode(node, parentMarks = []) {
        // 현재 노드의 마크와 부모로부터 상속받은 마크 합치기
        const marks = [...parentMarks];
        if (node.marks) {
            marks.push(...node.marks);
        }
        // 텍스트 노드 처리
        if (node.text) {
            const start = currentPosition;
            const length = node.text.length;
            const end = start + length;
            // Bold 마크 확인
            if (marks.some((mark) => mark.type === "bold")) {
                ranges.bold.push({ start, end });
            }
            // Underline 마크 확인
            if (marks.some((mark) => mark.type === "underline")) {
                ranges.underline.push({ start, end });
            }
            // Color 마크 확인
            const colorMark = marks.find((mark) => mark.type === "textStyle" && mark.attrs && mark.attrs.color);
            if (colorMark) {
                ranges.color.push({
                    start,
                    end,
                    color: colorMark.attrs.color,
                });
            }
            currentPosition += length;
        }
        // bullet list 노드 확인
        if (node.type === "bulletList") {
            // 현재 위치를 리스트 시작 위치로 기록
            ranges.bulletList.push({ start: currentPosition });
        }
        // 자식 노드 처리 (재귀)
        if (node.content && Array.isArray(node.content)) {
            node.content.forEach((childNode) => {
                processNode(childNode, marks);
            });
        }
    }
    if (descriptionData.content) {
        descriptionData.content.forEach((node) => {
            processNode(node);
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
        // content 그룹 찾기
        const contentGroup = annotationFrame.findOne((node) => node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_content");
        if (!contentGroup)
            return sendResponse(msg.type, false);
        // description 텍스트 노드 찾아 업데이트
        if (msg.key === "description") {
            // 폰트 로드는 applyRichTextFormatting 내부에서 처리
            const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                node.getPluginData("type") === "annotation_description");
            if (descNode) {
                // 리치 텍스트 서식 적용
                yield applyRichTextFormatting(descNode, msg.value);
                // 카드 너비 계산 - 그룹에서 설정된 cardWidth 값 사용
                const cardWidth = getCardWidth(group.cardWidth);
                // description이 변경되면 레이아웃 조정
                annotationFrame.layoutSizingHorizontal = "FIXED";
                annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려
                // content 그룹의 너비도 고정
                contentGroup.layoutSizingHorizontal = "FIXED";
                contentGroup.resize(cardWidth -
                    20 -
                    (annotationFrame.paddingLeft + annotationFrame.paddingRight), contentGroup.height);
                // text 노드의 너비도 고정
                descNode.layoutSizingHorizontal = "FIXED";
                descNode.resize(cardWidth -
                    20 -
                    (annotationFrame.paddingLeft + annotationFrame.paddingRight) -
                    (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                // annotationGroupFrame 크기 조정 (너비는 cardWidth로 고정, 높이만 변경)
                groupFrame.layoutSizingHorizontal = "FIXED";
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
                    updateGroupFrameSize(groupFrame, msg.key, msg.value);
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
        const children = [...groupFrame.children];
        const target = children[sourceIndex - 1]; // 0부터 시작하는 인덱스로 변환
        if (target) {
            groupFrame.insertChild(destinationIndex - 1, target);
            // 순서가 바뀐 후 인덱스 번호 업데이트
            updateAnnotationIndices(groupFrame);
            // 배지 인덱스도 업데이트
            updateBadgeIndices(group.id);
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
    // 프레임 자체 색상 업데이트
    frame.fills = [
        {
            type: "SOLID",
            color: { r: 1, g: 1, b: 1 },
            opacity: 0.8,
        },
    ];
    // 모든 자식 주석 요소들 색상 업데이트
    frame.children.forEach((child) => {
        if (child.type === "FRAME" &&
            child.getPluginData("type") === "annotation") {
            // 인덱스 번호 배경색 업데이트
            const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                node.getPluginData("type") === "annotation_content");
            if (contentGroup) {
                const indexNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                    node.getPluginData("type") === "annotation_index");
                if (indexNode) {
                    indexNode.fills = [
                        {
                            type: "SOLID",
                            color: headerColor,
                        },
                    ];
                }
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
            // 배지 색상 업데이트
            badge.fills = [{ type: "SOLID", color: headerColor }];
        }
    });
}
// 그룹 프레임 크기 업데이트 함수
function updateGroupFrameSize(frame, property, value) {
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
    // 너비 설정
    frame.layoutSizingHorizontal = "FIXED";
    frame.resize(cardWidth, frame.height);
    // 사이즈 값에 따른 스타일 변경
    if (property === "cardWidth") {
        // 모든 자식 요소의 너비도 업데이트
        frame.children.forEach((child) => {
            if (child.type === "FRAME" &&
                child.getPluginData("type") === "annotation") {
                child.layoutSizingHorizontal = "FIXED";
                child.resize(cardWidth, child.height);
                // content 그룹 찾기
                const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "annotation_content");
                if (contentGroup) {
                    contentGroup.layoutSizingHorizontal = "FIXED";
                    contentGroup.resize(cardWidth - (child.paddingLeft + child.paddingRight), contentGroup.height);
                    // 설명 텍스트 찾기
                    const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                        node.getPluginData("type") === "annotation_description");
                    if (descNode) {
                        descNode.layoutSizingHorizontal = "FIXED";
                        descNode.resize(cardWidth -
                            (child.paddingLeft + child.paddingRight) -
                            (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                    }
                }
            }
        });
    }
    else if (property === "size") {
        // 폰트 크기 업데이트
        const fontSize = getFontSizeByValue(value);
        const gap = _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[value].gap;
        const padding = _interfaces_const__WEBPACK_IMPORTED_MODULE_1__.supportedFontSizes[value];
        frame.children.forEach((child) => {
            if (child.type === "FRAME" &&
                child.getPluginData("type") === "annotation") {
                child.itemSpacing = gap;
                // 너비 고정
                child.layoutSizingHorizontal = "FIXED";
                child.resize(cardWidth, child.height);
                // 내용 그룹 찾기
                const contentGroup = child.findOne((node) => node.type === "FRAME" &&
                    node.getPluginData("type") === "annotation_content");
                if (contentGroup) {
                    contentGroup.itemSpacing = gap / 2;
                    // 너비 고정
                    contentGroup.layoutSizingHorizontal = "FIXED";
                    contentGroup.resize(cardWidth - (child.paddingLeft + child.paddingRight), contentGroup.height);
                    // 설명 텍스트 업데이트
                    const descNode = contentGroup.findOne((node) => node.type === "TEXT" &&
                        node.getPluginData("type") === "annotation_description");
                    if (descNode) {
                        descNode.fontSize = fontSize;
                        descNode.layoutSizingHorizontal = "FIXED";
                        descNode.resize(cardWidth -
                            (child.paddingLeft + child.paddingRight) -
                            (contentGroup.paddingLeft + contentGroup.paddingRight), descNode.height);
                    }
                }
            }
        });
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1DQUFtQztBQUNoRTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQWtCO0FBQ3RDLHdCQUF3QixpRUFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2ludGVyZmFjZXMvY29uc3QudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9pbnRlcmZhY2VzL2VudW1zLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0Ly4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5ub3RhdGlvbkNvbG9yLCBBbm5vdGF0aW9uU2l6ZSB9IGZyb20gXCIuL2VudW1zXCI7XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkRm9udFNpemVzID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IHtcbiAgICAgICAgYmFkZ2VTaXplOiAyNCxcbiAgICAgICAgYmFkZ2VUZXh0OiAxNCxcbiAgICAgICAgZGVzcmlwdGlvbjogMTQsXG4gICAgICAgIGdhcDogOCxcbiAgICB9LFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5NRURJVU1dOiB7XG4gICAgICAgIGJhZGdlU2l6ZTogMzIsXG4gICAgICAgIGJhZGdlVGV4dDogMTgsXG4gICAgICAgIGRlc3JpcHRpb246IDE4LFxuICAgICAgICBnYXA6IDEwLFxuICAgIH0sXG4gICAgW0Fubm90YXRpb25TaXplLkxBUkdFXToge1xuICAgICAgICBiYWRnZVNpemU6IDM2LFxuICAgICAgICBiYWRnZVRleHQ6IDIxLFxuICAgICAgICBkZXNyaXB0aW9uOiAyMSxcbiAgICAgICAgZ2FwOiAxMixcbiAgICB9LFxufTtcbmV4cG9ydCBjb25zdCBzdXBwb3J0ZWRDb2xvcnMgPSB7XG4gICAgW0Fubm90YXRpb25Db2xvci5SRURdOiBcImJnLXN1YlJlZC0wMVwiLFxuICAgIFtBbm5vdGF0aW9uQ29sb3IuUFVSUExFXTogXCJiZy1wcmltYXJ5XCIsXG4gICAgW0Fubm90YXRpb25Db2xvci5CTEFDS106IFwiYmctYmxhY2tcIixcbn07XG5leHBvcnQgY29uc3Qgc3VwcG9ydGVkQ2FyZFdpZHRoID0ge1xuICAgIFtBbm5vdGF0aW9uU2l6ZS5TTUFMTF06IDMyMCxcbiAgICBbQW5ub3RhdGlvblNpemUuTUVESVVNXTogNDAwLFxuICAgIFtBbm5vdGF0aW9uU2l6ZS5MQVJHRV06IDQ4MCxcbn07XG4iLCJleHBvcnQgdmFyIEFubm90YXRpb25TaXplO1xuKGZ1bmN0aW9uIChBbm5vdGF0aW9uU2l6ZSkge1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIlNNQUxMXCJdID0gMCldID0gXCJTTUFMTFwiO1xuICAgIEFubm90YXRpb25TaXplWyhBbm5vdGF0aW9uU2l6ZVtcIk1FRElVTVwiXSA9IDEpXSA9IFwiTUVESVVNXCI7XG4gICAgQW5ub3RhdGlvblNpemVbKEFubm90YXRpb25TaXplW1wiTEFSR0VcIl0gPSAyKV0gPSBcIkxBUkdFXCI7XG59KShBbm5vdGF0aW9uU2l6ZSB8fCAoQW5ub3RhdGlvblNpemUgPSB7fSkpO1xuZXhwb3J0IHZhciBBbm5vdGF0aW9uQ29sb3I7XG4oZnVuY3Rpb24gKEFubm90YXRpb25Db2xvcikge1xuICAgIEFubm90YXRpb25Db2xvclsoQW5ub3RhdGlvbkNvbG9yW1wiUkVEXCJdID0gMCldID0gXCJSRURcIjtcbiAgICBBbm5vdGF0aW9uQ29sb3JbKEFubm90YXRpb25Db2xvcltcIlBVUlBMRVwiXSA9IDEpXSA9IFwiUFVSUExFXCI7XG4gICAgQW5ub3RhdGlvbkNvbG9yWyhBbm5vdGF0aW9uQ29sb3JbXCJCTEFDS1wiXSA9IDIpXSA9IFwiQkxBQ0tcIjtcbn0pKEFubm90YXRpb25Db2xvciB8fCAoQW5ub3RhdGlvbkNvbG9yID0ge30pKTtcbmV4cG9ydCB2YXIgQW5ubm90YXRpb25DYXJkV2lkdGg7XG4oZnVuY3Rpb24gKEFubm5vdGF0aW9uQ2FyZFdpZHRoKSB7XG4gICAgQW5ubm90YXRpb25DYXJkV2lkdGhbKEFubm5vdGF0aW9uQ2FyZFdpZHRoW1wiU01BTExcIl0gPSAwKV0gPSBcIlNNQUxMXCI7XG4gICAgQW5ubm90YXRpb25DYXJkV2lkdGhbKEFubm5vdGF0aW9uQ2FyZFdpZHRoW1wiTUVESVVNXCJdID0gMSldID0gXCJNRURJVU1cIjtcbiAgICBBbm5ub3RhdGlvbkNhcmRXaWR0aFsoQW5ubm90YXRpb25DYXJkV2lkdGhbXCJMQVJHRVwiXSA9IDIpXSA9IFwiTEFSR0VcIjtcbn0pKEFubm5vdGF0aW9uQ2FyZFdpZHRoIHx8IChBbm5ub3RhdGlvbkNhcmRXaWR0aCA9IHt9KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiA2MDAsIGhlaWdodDogNjAwIH0pO1xuLy8g7ZWE7JqU7ZWcIOyDgeyImOyZgCBlbnVtIOqwgOyguOyYpOq4sFxuaW1wb3J0IHsgQW5ub3RhdGlvbkNvbG9yLCBBbm5vdGF0aW9uU2l6ZSwgQW5ubm90YXRpb25DYXJkV2lkdGgsIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9lbnVtc1wiO1xuaW1wb3J0IHsgc3VwcG9ydGVkRm9udFNpemVzLCBzdXBwb3J0ZWRDYXJkV2lkdGgsIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9jb25zdFwiO1xubGV0IGFubm90YXRpb25Hcm91cHMgPSBbXTtcbi8vIOuFuOuTnOydmCDstZzsg4HsnIQgRnJhbWXsnYQg7LC+64qUIOycoO2LuOumrO2LsCDtlajsiJhcbmZ1bmN0aW9uIGdldFRvcExldmVsRnJhbWUobm9kZSkge1xuICAgIGxldCBjdXJyZW50ID0gbm9kZTtcbiAgICB3aGlsZSAoY3VycmVudCAmJiBjdXJyZW50LnBhcmVudCAmJiBjdXJyZW50LnBhcmVudC50eXBlICE9PSBcIlBBR0VcIikge1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiAoY3VycmVudCA9PT0gbnVsbCB8fCBjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjdXJyZW50LnR5cGUpID09PSBcIkZSQU1FXCIgPyBjdXJyZW50IDogbnVsbDtcbn1cbi8vIOq3uOujuSDtlITroIjsnoQg7LC+6riwIO2Gte2VqSDtlajsiJhcbmZ1bmN0aW9uIGZpbmRHcm91cEZyYW1lKGdyb3VwSWQsIGdyb3VwRnJhbWVJZCkge1xuICAgIC8vIDEuIGdyb3VwRnJhbWVJZOuhnCDsp4HsoJEg7LC+6riwXG4gICAgaWYgKGdyb3VwRnJhbWVJZCkge1xuICAgICAgICBjb25zdCBmcmFtZSA9IGZpZ21hLmdldE5vZGVCeUlkKGdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmIChmcmFtZSAmJiBmcmFtZS50eXBlID09PSBcIkZSQU1FXCIpXG4gICAgICAgICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICAgIC8vIDIuIOy1nOyDgeychCDtlITroIjsnoQg7LC+6riwXG4gICAgY29uc3QgdG9wRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cElkKTtcbiAgICBpZiAoIXRvcEZyYW1lKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAvLyAzLiB0b3BGcmFtZeydmCDsnpDsi53sl5DshJwg7LC+6riwXG4gICAgY29uc3QgZ3JvdXBGcmFtZUluQ2hpbGRyZW4gPSB0b3BGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImdyb3VwXCIpO1xuICAgIGlmIChncm91cEZyYW1lSW5DaGlsZHJlbilcbiAgICAgICAgcmV0dXJuIGdyb3VwRnJhbWVJbkNoaWxkcmVuO1xuICAgIC8vIDQuIOu2gOuqqOydmCDsnpDsi53sl5DshJwg7LC+6riwXG4gICAgaWYgKHRvcEZyYW1lLnBhcmVudCkge1xuICAgICAgICBjb25zdCBncm91cEZyYW1lSW5QYXJlbnQgPSB0b3BGcmFtZS5wYXJlbnQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiZ3JvdXBcIiAmJlxuICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwicGFyZW50X2ZyYW1lX2lkXCIpID09PSBncm91cElkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWVJblBhcmVudClcbiAgICAgICAgICAgIHJldHVybiBncm91cEZyYW1lSW5QYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuLy8g7Lm065OcIOuEiOu5hCDqsIDsoLjsmKTquLBcbmZ1bmN0aW9uIGdldENhcmRXaWR0aEJ5VmFsdWUod2lkdGhWYWx1ZSkge1xuICAgIGlmICh3aWR0aFZhbHVlID49IDAgJiZcbiAgICAgICAgd2lkdGhWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm5vdGF0aW9uQ2FyZFdpZHRoKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbd2lkdGhWYWx1ZV07XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0ZWRDYXJkV2lkdGhbQW5ubm90YXRpb25DYXJkV2lkdGguU01BTExdOyAvLyDquLDrs7jqsJJcbn1cbi8vIOy5tOuTnCDrhIjruYQg6rOE7IKw7ZWY6riwICjsnoXroKXqsJIg65iQ64qUIOq4sOuzuOqwkiDsgqzsmqkpXG5mdW5jdGlvbiBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gY2FyZFdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGdldENhcmRXaWR0aEJ5VmFsdWUoY2FyZFdpZHRoVmFsdWUpXG4gICAgICAgIDogZ2V0Q2FyZFdpZHRoQnlWYWx1ZShBbm5ub3RhdGlvbkNhcmRXaWR0aC5TTUFMTCk7XG59XG4vLyDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDrmJDripQg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gZmluZE9yQ3JlYXRlR3JvdXBGcmFtZShncm91cCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIDEuIOq4sOyhtCDqt7jro7kg7ZSE66CI7J6EIOywvuq4sCDsi5zrj4RcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgLy8gMi4g7LC+7KeAIOuqu+2VnCDqsr3smrAg7IOI66GcIOyDneyEsVxuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvcEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKCF0b3BGcmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgZ3JvdXBGcmFtZS5uYW1lID0gXCJBTk5PVEFUSU9OX0dST1VQXCI7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBncm91cEZyYW1lLnNldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIiwgZ3JvdXAuaWQpO1xuICAgICAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aChncm91cC5jYXJkV2lkdGgpO1xuICAgICAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgICAgICAvLyDrtoDrqqgg7ZSE66CI7J6E7J2YIOyasOy4oSDsg4Hri6jsl5DshJwg7JW96rCEIOyViOyqveycvOuhnCDsnITsuZhcbiAgICAgICAgICAgIGdyb3VwRnJhbWUueCA9IHRvcEZyYW1lLndpZHRoIC0gY2FyZFdpZHRoIC0gMjA7IC8vIOyasOy4oeyXkOyEnCDsubTrk5wg64SI67mE66eM7YG8IOyViOyqveycvOuhnFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS55ID0gMjA7IC8vIOyDgeuLqOyXkOyEnCDslb3qsIQg7JWE656Y66GcXG4gICAgICAgICAgICBncm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgICAgICBncm91cEZyYW1lLmZpbGxzID0gW1xuICAgICAgICAgICAgICAgIHsgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAxLCBnOiAxLCBiOiAxIH0sIG9wYWNpdHk6IDAuOCB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgLy8g7IOB7JyEIO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGlmICh0b3BGcmFtZS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOu2gOuqqOqwgCDsl4bsnLzrqbQg7ZiE7J6sIO2OmOydtOyngOyXkCDstpTqsIBcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChncm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOq3uOujuSDsoJXrs7Qg7JeF642w7J207Yq4XG4gICAgICAgICAgICBncm91cC5ncm91cEZyYW1lSWQgPSBncm91cEZyYW1lLmlkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cEZyYW1lO1xuICAgIH0pO1xufVxuLy8g6re466O5IOuwjyDso7zshJ0g7KGw7ZqMIO2VqOyImFxuZnVuY3Rpb24gZmluZEdyb3VwKGdyb3VwSWQpIHtcbiAgICByZXR1cm4gYW5ub3RhdGlvbkdyb3Vwcy5maW5kKChnKSA9PiBnLmlkID09PSBncm91cElkKTtcbn1cbi8vIOyjvOyEnSDssL7quLAg7ZWo7IiYXG5mdW5jdGlvbiBmaW5kQW5ub3RhdGlvbihncm91cElkLCBhbm5vdGF0aW9uSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChncm91cElkKTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZ3JvdXAuYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbn1cbi8vIOyDieyDgSDqsJIg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRDb2xvckJ5VmFsdWUoY29sb3JWYWx1ZSkge1xuICAgIC8vIOyDieyDgSDqsJLsl5Ag65Sw6528IFJHQiDqsJIg67CY7ZmYXG4gICAgc3dpdGNoIChjb2xvclZhbHVlKSB7XG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlJFRDpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuOTMsIGc6IDAuMzcsIGI6IDAuMzcgfTsgLy8gUkVEXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLlBVUlBMRTpcbiAgICAgICAgICAgIHJldHVybiB7IHI6IDAuNywgZzogMC41LCBiOiAwLjkgfTsgLy8gUFVSUExFXG4gICAgICAgIGNhc2UgQW5ub3RhdGlvbkNvbG9yLkJMQUNLOlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMCwgZzogMCwgYjogMCB9OyAvLyBCTEFDS1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHsgcjogMC43LCBnOiAwLjUsIGI6IDAuOSB9OyAvLyDquLDrs7jqsJI6IFBVUlBMRVxuICAgIH1cbn1cbi8vIO2PsO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRGb250U2l6ZUJ5VmFsdWUoc2l6ZVZhbHVlKSB7XG4gICAgaWYgKHNpemVWYWx1ZSA+PSAwICYmIHNpemVWYWx1ZSA8IE9iamVjdC5rZXlzKEFubm90YXRpb25TaXplKS5sZW5ndGggLyAyKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0ZWRGb250U2l6ZXNbc2l6ZVZhbHVlXS5kZXNyaXB0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5kZXNyaXB0aW9uOyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVNpemVCeVZhbHVlKHNpemVWYWx1ZSkge1xuICAgIGlmIChzaXplVmFsdWUgPj0gMCAmJiBzaXplVmFsdWUgPCBPYmplY3Qua2V5cyhBbm5vdGF0aW9uU2l6ZSkubGVuZ3RoIC8gMikge1xuICAgICAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW3NpemVWYWx1ZV0uYmFkZ2VTaXplO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydGVkRm9udFNpemVzW0Fubm90YXRpb25TaXplLlNNQUxMXS5iYWRnZVNpemU7IC8vIOq4sOuzuOqwklxufVxuLy8g67Cw7KeAIO2FjeyKpO2KuCDtgazquLAg6rCA7KC47Jik6riwXG5mdW5jdGlvbiBnZXRCYWRnZVRleHRTaXplQnlWYWx1ZShzaXplVmFsdWUpIHtcbiAgICBpZiAoc2l6ZVZhbHVlID49IDAgJiYgc2l6ZVZhbHVlIDwgT2JqZWN0LmtleXMoQW5ub3RhdGlvblNpemUpLmxlbmd0aCAvIDIpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tzaXplVmFsdWVdLmJhZGdlVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRlZEZvbnRTaXplc1tBbm5vdGF0aW9uU2l6ZS5TTUFMTF0uYmFkZ2VUZXh0OyAvLyDquLDrs7jqsJJcbn1cbi8vIOuwsOyngOulvCDsg53shLHtlZjripQg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uQmFkZ2Uobm9kZSwgaW5kZXgsIGFubm90YXRpb25JZCwgY29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g67Cw7KeAIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgYmFkZ2UgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBiYWRnZS5uYW1lID0gYEJhZGdlICR7aW5kZXh9YDtcbiAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2JhZGdlXCIpO1xuICAgICAgICBiYWRnZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIGJhZGdlLnNldFBsdWdpbkRhdGEoXCJiYWRnZV9pbmRleFwiLCBpbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgLy8g67Cw7KeAIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgYmFkZ2UubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBiYWRnZS5wcmltYXJ5QXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBiYWRnZS5jb3JuZXJSYWRpdXMgPSA5OTk5OyAvLyDsm5DtmJXsnLzroZwg66eM65Ok6riwXG4gICAgICAgIC8vIOuwsOyngCDtgazquLAg7ISk7KCVIC0gc3VwcG9ydGVkRm9udFNpemVz7JeQ7IScIOqwgOyguOyYtFxuICAgICAgICBjb25zdCBiYWRnZVNpemUgPSBnZXRCYWRnZVNpemVCeVZhbHVlKGNvbG9yKTtcbiAgICAgICAgYmFkZ2UucmVzaXplKGJhZGdlU2l6ZSwgYmFkZ2VTaXplKTtcbiAgICAgICAgLy8g67Cw7KeAIOyDieyDgSDshKTsoJVcbiAgICAgICAgbGV0IGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoQW5ub3RhdGlvbkNvbG9yLlBVUlBMRSk7IC8vIOq4sOuzuCDrs7Trnbzsg4lcbiAgICAgICAgaWYgKGNvbG9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJhZGdlQ29sb3IgPSBnZXRDb2xvckJ5VmFsdWUoY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIGJhZGdlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogYmFkZ2VDb2xvciB9XTtcbiAgICAgICAgLy8g7J24642x7IqkIOuyiO2YuCDthY3siqTtirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluZGV4VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgaW5kZXhUZXh0LmNoYXJhY3RlcnMgPSBpbmRleC50b1N0cmluZygpO1xuICAgICAgICAvLyDthY3siqTtirgg7YGs6riwIOyEpOyglSAtIHN1cHBvcnRlZEZvbnRTaXplc+yXkOyEnCDqsIDsoLjsmLRcbiAgICAgICAgaW5kZXhUZXh0LmZvbnRTaXplID0gZ2V0QmFkZ2VUZXh0U2l6ZUJ5VmFsdWUoY29sb3IpO1xuICAgICAgICBpbmRleFRleHQuZmlsbHMgPSBbeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSB9XTsgLy8g7Z2w7IOJIO2FjeyKpO2KuFxuICAgICAgICAvLyDrsLDsp4Dsl5Ag7YWN7Iqk7Yq4IOy2lOqwgFxuICAgICAgICBiYWRnZS5hcHBlbmRDaGlsZChpbmRleFRleHQpO1xuICAgICAgICAvLyDrsLDsp4Ag7JyE7LmYIOyEpOyglSAtIOyEoO2Dne2VnCDrhbjrk5wg7JyE7JeQIOuwsOy5mFxuICAgICAgICBiYWRnZS54ID0gbm9kZS54O1xuICAgICAgICBiYWRnZS55ID0gbm9kZS55IC0gYmFkZ2UuaGVpZ2h0IC0gNTsgLy8g64W465OcIOychOyXkCDslb3qsIQg6rCE6rKp7J2EIOuRkOqzoCDrsLDsuZhcbiAgICAgICAgLy8g7LWc7IOB7JyEIO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKG5vZGUpO1xuICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6E7JeQIOuwsOyngCDstpTqsIBcbiAgICAgICAgaWYgKHRvcEZyYW1lKSB7XG4gICAgICAgICAgICB0b3BGcmFtZS5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDstZzsg4HsnIQg7ZSE66CI7J6EIOuYkOuKlCDrtoDrqqjqsIAg7JeG64qUIOqyveyasCDtmITsnqwg7Y6Y7J207KeA7JeQIOy2lOqwgFxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWRnZTtcbiAgICB9KTtcbn1cbi8vIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4IO2VqOyImFxuZnVuY3Rpb24gdXBkYXRlQmFkZ2VJbmRpY2VzKGdyb3VwSWQpIHtcbiAgICBjb25zdCBncm91cCA9IGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cClcbiAgICAgICAgcmV0dXJuO1xuICAgIGNvbnNvbGUubG9nKFwi67Cw7KeAIOyduOuNseyKpCDsl4XrjbDsnbTtirgg7Iuc7J6ROlwiLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIFwi6rCc7J2YIOyjvOyEnVwiKTtcbiAgICAvLyDrqqjrk6Ag64W465Oc7JeQ7IScIOydtCDqt7jro7nsl5Ag7ZW064u57ZWY64qUIOuwsOyngCDssL7quLBcbiAgICBmaWdtYS5jdXJyZW50UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4ge1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uSWQgPSBiYWRnZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpO1xuICAgICAgICAvLyDtlbTri7kg6re466O57JeQIOyGje2VnCDrsLDsp4Drp4wg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnM7XG4gICAgICAgIGNvbnN0IGFubm90YXRpb25JbmRleCA9IGFubm90YXRpb25zLmZpbmRJbmRleCgoYSkgPT4gYS5pZCA9PT0gYW5ub3RhdGlvbklkKTtcbiAgICAgICAgaWYgKGFubm90YXRpb25JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIC8vIOuwsOyngOydmCDthY3siqTtirgg7JeF642w7J207Yq4ICgx67aA7YSwIOyLnOyeke2VmOuKlCDsnbjrjbHsiqQg7IKs7JqpKVxuICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHROb2RlID0gYmFkZ2UuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRleHROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0luZGV4ID0gYW5ub3RhdGlvbkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYOuwsOyngCDsl4XrjbDsnbTtirg6ICR7YW5ub3RhdGlvbklkfSA9PiAke25ld0luZGV4fWApO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gbmV3SW5kZXgudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmFkZ2Uuc2V0UGx1Z2luRGF0YShcImJhZGdlX2luZGV4XCIsIChhbm5vdGF0aW9uSW5kZXggKyAxKS50b1N0cmluZygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8g67Cw7KeAIOyCreygnCDtlajsiJhcbmZ1bmN0aW9uIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uSWQpIHtcbiAgICBmaWdtYS5jdXJyZW50UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBhbm5vdGF0aW9uSWQpXG4gICAgICAgIC5mb3JFYWNoKChiYWRnZSkgPT4gYmFkZ2UucmVtb3ZlKCkpO1xufVxuLy8g7KO87ISdIO2UhOugiOyehCDsg53shLEg7ZWo7IiYXG5mdW5jdGlvbiBjcmVhdGVBbm5vdGF0aW9uRnJhbWUoYW5ub3RhdGlvbklkLCBpbmRleCwgY2FyZFdpZHRoVmFsdWUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KTtcbiAgICAgICAgLy8g7KO87ISdIOy7qO2FjOydtOuEiCDtlITroIjsnoQg7IOd7ISxXG4gICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25GcmFtZS5uYW1lID0gYEFubm90YXRpb24gJHtpbmRleH1gO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uXCIpO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiLCBhbm5vdGF0aW9uSWQpO1xuICAgICAgICAvLyDsu6jthYzsnbTrhIgg7Iqk7YOA7J28IOyEpOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAuOTgsIGc6IDAuOTgsIGI6IDAuOTggfSB9LFxuICAgICAgICBdO1xuICAgICAgICBhbm5vdGF0aW9uRnJhbWUuY29ybmVyUmFkaXVzID0gODtcbiAgICAgICAgLy8g7Lm065OcIOuEiOu5hCDqs4TsgrBcbiAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGNhcmRXaWR0aFZhbHVlKTtcbiAgICAgICAgLy8g64SI67mEIOqzoOyglVxuICAgICAgICBhbm5vdGF0aW9uRnJhbWUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlc2l6ZShjYXJkV2lkdGggLSAyMCwgYW5ub3RhdGlvbkZyYW1lLmhlaWdodCk7IC8vIOyijOyasCDtjKjrlKkg6rOg66CkXG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9uRnJhbWU7XG4gICAgfSk7XG59XG4vLyDrgrTsmqkg6re466O5IOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRHcm91cChhbm5vdGF0aW9uSWQsIGZyYW1lV2lkdGgpIHtcbiAgICAvLyDsnbjrjbHsiqTsmYAg7ISk66qF7J2EIOuLtOydhCDqt7jro7kg7IOd7ISxXG4gICAgY29uc3QgY29udGVudEdyb3VwID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBjb250ZW50R3JvdXAubmFtZSA9IFwiQW5ub3RhdGlvbiBDb250ZW50XCI7XG4gICAgY29udGVudEdyb3VwLnNldFBsdWdpbkRhdGEoXCJ0eXBlXCIsIFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgIGNvbnRlbnRHcm91cC5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgLy8g6re466O5IOyKpO2DgOydvCDshKTsoJVcbiAgICBjb250ZW50R3JvdXAubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBjb250ZW50R3JvdXAuaXRlbVNwYWNpbmcgPSA0O1xuICAgIGNvbnRlbnRHcm91cC5maWxscyA9IFtdOyAvLyDtiKzrqoUg67Cw6rK9XG4gICAgLy8g64SI67mEIOqzoOyglVxuICAgIGNvbnRlbnRHcm91cC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgIGNvbnRlbnRHcm91cC5yZXNpemUoZnJhbWVXaWR0aCwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgcmV0dXJuIGNvbnRlbnRHcm91cDtcbn1cbi8vIOyduOuNseyKpCDrhbjrk5wg7IOd7ISxIO2VqOyImFxuZnVuY3Rpb24gY3JlYXRlSW5kZXhOb2RlKGFubm90YXRpb25JZCwgaW5kZXgsIGNvbG9yVmFsdWUpIHtcbiAgICBjb25zdCBpbmRleE5vZGUgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleH1gO1xuICAgIGluZGV4Tm9kZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgaW5kZXhOb2RlLnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIiwgYW5ub3RhdGlvbklkKTtcbiAgICAvLyDsiqTtg4Dsnbwg7ISk7KCVXG4gICAgaW5kZXhOb2RlLmZvbnRTaXplID0gMTQ7XG4gICAgaW5kZXhOb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLCBnOiAwLCBiOiAwIH0gfV07XG4gICAgLy8g7IOJ7IOBIOyEpOygleydtCDsnojsnLzrqbQg7KCB7JqpXG4gICAgaWYgKGNvbG9yVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBjb2xvciA9IGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKTtcbiAgICAgICAgaW5kZXhOb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvciB9XTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4Tm9kZTtcbn1cbi8vIOyEpOuqhSDthY3siqTtirgg64W465OcIOyDneyEsSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uTm9kZShhbm5vdGF0aW9uSWQsIHRleHQgPSBcIk5ldyBBbm5vdGF0aW9uXCIsIHNpemVWYWx1ZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g6riw67O4IO2PsO2KuOunjCDrqLzsoIAg66Gc65OcIChhcHBseVJpY2hUZXh0Rm9ybWF0dGluZ+yXkOyEnCDstpTqsIAg7Y+w7Yq4IOuhnOuTnClcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyh7IGZhbWlseTogXCJJbnRlclwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfSk7XG4gICAgICAgIGNvbnN0IHRleHROb2RlID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICB0ZXh0Tm9kZS5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICAgICAgdGV4dE5vZGUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJhbm5vdGF0aW9uX2Rlc2NyaXB0aW9uXCIpO1xuICAgICAgICB0ZXh0Tm9kZS5zZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIsIGFubm90YXRpb25JZCk7XG4gICAgICAgIC8vIOyKpO2DgOydvCDshKTsoJVcbiAgICAgICAgdGV4dE5vZGUuZm9udFNpemUgPVxuICAgICAgICAgICAgc2l6ZVZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICA/IGdldEZvbnRTaXplQnlWYWx1ZShzaXplVmFsdWUpXG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0ZWRGb250U2l6ZXNbQW5ub3RhdGlvblNpemUuU01BTExdLmRlc3JpcHRpb247XG4gICAgICAgIHRleHROb2RlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogeyByOiAwLjMsIGc6IDAuMywgYjogMC4zIH0gfV07XG4gICAgICAgIC8vIOumrOy5mCDthY3siqTtirgg7ISk66qFIOuNsOydtO2EsOqwgCDsnojsnLzrqbQg7ISc7IudIOyggeyaqVxuICAgICAgICBpZiAoZGVzY3JpcHRpb25EYXRhICYmXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkRhdGEuY29udGVudCAmJlxuICAgICAgICAgICAgZGVzY3JpcHRpb25EYXRhLmNvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgeWllbGQgYXBwbHlSaWNoVGV4dEZvcm1hdHRpbmcodGV4dE5vZGUsIGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHROb2RlO1xuICAgIH0pO1xufVxuLy8g7KO87ISdIOq1rOyEsSDsmpTshowg7IOd7ISxIO2Gte2VqSDtlajsiJhcbmZ1bmN0aW9uIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKGFubm90YXRpb25JZCwgaW5kZXgsIGNvbG9yVmFsdWUsIHNpemVWYWx1ZSwgY2FyZFdpZHRoVmFsdWUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gMS4g7KO87ISdIO2UhOugiOyehCDsg53shLFcbiAgICAgICAgY29uc3QgZnJhbWUgPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uRnJhbWUoYW5ub3RhdGlvbklkLCBpbmRleCwgY2FyZFdpZHRoVmFsdWUpO1xuICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoY2FyZFdpZHRoVmFsdWUpO1xuICAgICAgICAvLyAyLiDrgrTsmqkg6re466O5IOyDneyEsVxuICAgICAgICBjb25zdCBjb250ZW50R3JvdXBXaWR0aCA9IGNhcmRXaWR0aCAtIDIwIC0gKGZyYW1lLnBhZGRpbmdMZWZ0ICsgZnJhbWUucGFkZGluZ1JpZ2h0KTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBjcmVhdGVDb250ZW50R3JvdXAoYW5ub3RhdGlvbklkLCBjb250ZW50R3JvdXBXaWR0aCk7XG4gICAgICAgIC8vIDMuIOyduOuNseyKpCDrhbjrk5wg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluZGV4Tm9kZSA9IGNyZWF0ZUluZGV4Tm9kZShhbm5vdGF0aW9uSWQsIGluZGV4LCBjb2xvclZhbHVlKTtcbiAgICAgICAgLy8gNC4g7ISk66qFIO2FjeyKpO2KuCDrhbjrk5wg7IOd7ISxXG4gICAgICAgIGNvbnN0IGluaXRpYWxUZXh0ID0gZGVzY3JpcHRpb25cbiAgICAgICAgICAgID8gZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24oZGVzY3JpcHRpb24pXG4gICAgICAgICAgICA6IFwiTmV3IEFubm90YXRpb25cIjtcbiAgICAgICAgY29uc3QgdGV4dE5vZGUgPSB5aWVsZCBjcmVhdGVEZXNjcmlwdGlvbk5vZGUoYW5ub3RhdGlvbklkLCBpbml0aWFsVGV4dCwgc2l6ZVZhbHVlLCBkZXNjcmlwdGlvbik7XG4gICAgICAgIC8vIDUuIO2FjeyKpO2KuCDrhbjrk5wg7YGs6riwIOyhsOyglVxuICAgICAgICBjb25zdCB0ZXh0Tm9kZVdpZHRoID0gY29udGVudEdyb3VwV2lkdGggLSAoZ3JvdXAucGFkZGluZ0xlZnQgKyBncm91cC5wYWRkaW5nUmlnaHQpO1xuICAgICAgICB0ZXh0Tm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICB0ZXh0Tm9kZS5yZXNpemUodGV4dE5vZGVXaWR0aCwgdGV4dE5vZGUuaGVpZ2h0KTtcbiAgICAgICAgLy8gNi4g64W465OcIOq1rOyEsVxuICAgICAgICBncm91cC5hcHBlbmRDaGlsZChpbmRleE5vZGUpO1xuICAgICAgICBncm91cC5hcHBlbmRDaGlsZCh0ZXh0Tm9kZSk7XG4gICAgICAgIGZyYW1lLmFwcGVuZENoaWxkKGdyb3VwKTtcbiAgICAgICAgcmV0dXJuIHsgZnJhbWUsIGdyb3VwLCBpbmRleE5vZGUsIHRleHROb2RlIH07XG4gICAgfSk7XG59XG4vLyDrqZTsi5zsp4Ag7J2R64u1IOyghOyGoSDsnKDti7jrpqzti7Ag7ZWo7IiYXG5mdW5jdGlvbiBzZW5kUmVzcG9uc2UodHlwZSwgcmVzdWx0LCBkYXRhID0ge30sIGVycm9yTWVzc2FnZSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHsgcmVzdWx0IH0sIGRhdGEpO1xuICAgIGlmICghcmVzdWx0ICYmIGVycm9yTWVzc2FnZSkge1xuICAgICAgICBtZXNzYWdlLmVycm9yTWVzc2FnZSA9IGVycm9yTWVzc2FnZTtcbiAgICB9XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlLCBtZXNzYWdlIH0pO1xufVxuLy8g7YWN7Iqk7Yq4IOy2lOy2nCDtlajsiJhcbmZ1bmN0aW9uIGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKCFkZXNjcmlwdGlvbiB8fCAhZGVzY3JpcHRpb24uY29udGVudClcbiAgICAgICAgcmV0dXJuIFwiTmV3IEFubm90YXRpb25cIjtcbiAgICBsZXQgdGV4dCA9IFwiXCI7XG4gICAgZnVuY3Rpb24gZXh0cmFjdFRleHQobm9kZSkge1xuICAgICAgICBpZiAobm9kZS50ZXh0KSB7XG4gICAgICAgICAgICB0ZXh0ICs9IG5vZGUudGV4dCArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLmNvbnRlbnQgJiYgQXJyYXkuaXNBcnJheShub2RlLmNvbnRlbnQpKSB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnQuZm9yRWFjaChleHRyYWN0VGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVzY3JpcHRpb24uY29udGVudCkpIHtcbiAgICAgICAgZGVzY3JpcHRpb24uY29udGVudC5mb3JFYWNoKGV4dHJhY3RUZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQudHJpbSgpIHx8IFwiTmV3IEFubm90YXRpb25cIjtcbn1cbi8vIOuqqOuToCDso7zshJ0g7JqU7IaM7J2YIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG5mdW5jdGlvbiB1cGRhdGVBbm5vdGF0aW9uSW5kaWNlcyhncm91cEZyYW1lKSB7XG4gICAgLy8g66qo65OgIOyjvOyEnSDsmpTshozsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICBncm91cEZyYW1lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICBjaGlsZC5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIOuCtOyaqSDqt7jro7kg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgaWYgKGNvbnRlbnRHcm91cCkge1xuICAgICAgICAgICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXhOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2luZGV4XCIpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhOb2RlLmNoYXJhY3RlcnMgPSBgJHtpbmRleCArIDF9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6EIOydtOumhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGNoaWxkLm5hbWUgPSBgQW5ub3RhdGlvbiAke2luZGV4ICsgMX1gO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBDUkVBVEVfQU5OT1RBVElPTl9HUk9VUCDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAobXNnKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UsIHt9LCBcIlBsZWFzZSBzZWxlY3QgYSBsYXllciBvbiB0aGUgY2FudmFzLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b3BGcmFtZSA9IGdldFRvcExldmVsRnJhbWUoc2VsZWN0aW9uKTtcbiAgICAgICAgaWYgKCF0b3BGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UsIHt9LCBcIlRvcC1sZXZlbCBmcmFtZSBub3QgZm91bmQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG5ld0dyb3VwSWQgPSB0b3BGcmFtZS5pZDtcbiAgICAgICAgY29uc3QgbmV3R3JvdXBOYW1lID0gdG9wRnJhbWUubmFtZTtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cCA9IGZpbmRHcm91cChuZXdHcm91cElkKTtcbiAgICAgICAgLy8gQU5OT1RBVElPTl9HUk9VUCDsg53shLFcbiAgICAgICAgbGV0IGFubm90YXRpb25Hcm91cEZyYW1lO1xuICAgICAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgICAgICAgLy8g6riw7KG0IOq3uOujuSDtlITroIjsnoQg7LC+6riwXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0dyb3VwRnJhbWUgPSB0b3BGcmFtZS5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJiBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImdyb3VwXCIpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lID0gZXhpc3RpbmdHcm91cEZyYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g7JiI7IOB7LmYIOuqu+2VmOqyjCDqt7jro7kg7ZSE66CI7J6E7J20IOyXhuuLpOuptCDsg4jroZwg7IOd7ISxXG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKFwidHlwZVwiLCBcImdyb3VwXCIpO1xuICAgICAgICAgICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFdpZHRoID0gZ2V0Q2FyZFdpZHRoKGV4aXN0aW5nR3JvdXAuY2FyZFdpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyDsiqTtg4Dsnbwg67CPIOychOy5mCDshKTsoJUgLSDrtoDrqqgg7ZSE66CI7J6EIOuCtOu2gOydmCDsmrDsuKEg7IOB64uo7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS54ID0gdG9wRnJhbWUud2lkdGggLSBjYXJkV2lkdGggLSAyMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS55ID0gMjA7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgMzAwKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5maWxscyA9IFtcbiAgICAgICAgICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSwgb3BhY2l0eTogMC44IH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAvLyDroIjsnbTslYTsm4Mg66qo65OcIOyEpOyglSAtIOyEuOuhnCDrsLDsuZhcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdUb3AgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nQm90dG9tID0gMTA7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nUmlnaHQgPSAxMDtcbiAgICAgICAgICAgICAgICAvLyDsg4HsnIQg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICAgICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOyDiCDso7zshJ0g66mU66qo66asIOqwneyytCDsg53shLFcbiAgICAgICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8g6re466O57JeQIOyjvOyEnSDstpTqsIAgKOuplOuqqOumrClcbiAgICAgICAgICAgIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgICAgICBjb25zdCB7IGZyYW1lOiBhbm5vdGF0aW9uRnJhbWUgfSA9IHlpZWxkIGNyZWF0ZUFubm90YXRpb25Db21wb25lbnRzKG5ld0Fubm90YXRpb24uaWQsIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBleGlzdGluZ0dyb3VwLmNvbG9yLCBleGlzdGluZ0dyb3VwLnNpemUsIGV4aXN0aW5nR3JvdXAuY2FyZFdpZHRoLCBuZXdBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIC8vIOyjvOyEnSDtlITroIjsnoTsnYQg6re466O5IO2UhOugiOyehOyXkCDstpTqsIBcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25GcmFtZSk7XG4gICAgICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMubGVuZ3RoLCBuZXdBbm5vdGF0aW9uLmlkLCBleGlzdGluZ0dyb3VwLmNvbG9yKTtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDwn4aVIOyDiCDqt7jro7kg7IOd7ISxXG4gICAgICAgIC8vIDEuIOyjvOyEnSDqt7jro7kg7ZSE66CI7J6EIOyDneyEsVxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLm5hbWUgPSBcIkFOTk9UQVRJT05fR1JPVVBcIjtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJncm91cFwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcInBhcmVudF9mcmFtZV9pZFwiLCB0b3BGcmFtZS5pZCk7XG4gICAgICAgIC8vIOy5tOuTnCDrhIjruYQg6rOE7IKwXG4gICAgICAgIGNvbnN0IGNhcmRXaWR0aCA9IGdldENhcmRXaWR0aCgoX2EgPSBtc2cuY29uZmlnKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FyZFdpZHRoKTtcbiAgICAgICAgLy8g7Iqk7YOA7J28IOuwjyDsnITsuZgg7ISk7KCVIC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7LihIOyDgeuLqOyXkCDsnITsuZjtlZjrj4TroZ0g7ISk7KCVXG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnggPSB0b3BGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS55ID0gMjA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIDMwMCk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLmZpbGxzID0gW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDEsIGc6IDEsIGI6IDEgfSwgb3BhY2l0eTogMC44IH0sXG4gICAgICAgIF07XG4gICAgICAgIC8vIOugiOydtOyVhOybgyDrqqjrk5wg7ISk7KCVIC0g7IS466GcIOuwsOy5mFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5wYWRkaW5nVG9wID0gMTA7XG4gICAgICAgIGFubm90YXRpb25Hcm91cEZyYW1lLnBhZGRpbmdCb3R0b20gPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ0xlZnQgPSAxMDtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUucGFkZGluZ1JpZ2h0ID0gMTA7XG4gICAgICAgIC8vIOyDgeychCDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIHRvcEZyYW1lLmFwcGVuZENoaWxkKGFubm90YXRpb25Hcm91cEZyYW1lKTtcbiAgICAgICAgLy8g6riw67O4IOyjvOyEnSDsg53shLFcbiAgICAgICAgY29uc3QgZGVmYXVsdEFubm90YXRpb24gPSB7XG4gICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogKChfYiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5kZXNjcmlwdGlvbikgfHwge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyDqt7jro7nsl5AgcGx1Z2luRGF0YSDshKTsoJVcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcInR5cGVcIiwgXCJmcmFtZVwiKTtcbiAgICAgICAgdG9wRnJhbWUuc2V0UGx1Z2luRGF0YShcImhhc19hbm5vdGF0aW9uX2dyb3VwXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgYW5ub3RhdGlvbkdyb3VwRnJhbWUuc2V0UGx1Z2luRGF0YShcImdyb3VwX2lkXCIsIGRlZmF1bHRBbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgY29uc3QgbmV3R3JvdXAgPSBPYmplY3QuYXNzaWduKHsgaWQ6IG5ld0dyb3VwSWQsIG5hbWU6IG5ld0dyb3VwTmFtZSwgcmVsYXRlZFBhZ2U6IHtcbiAgICAgICAgICAgICAgICBpZDogZmlnbWEuY3VycmVudFBhZ2UuaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZmlnbWEuY3VycmVudFBhZ2UubmFtZSxcbiAgICAgICAgICAgIH0sIGFubm90YXRpb25zOiBbZGVmYXVsdEFubm90YXRpb25dLCBvYnNvbGV0ZTogZmFsc2UsIGdyb3VwRnJhbWVJZDogYW5ub3RhdGlvbkdyb3VwRnJhbWUuaWQgfSwgbXNnLmNvbmZpZyk7XG4gICAgICAgIGFubm90YXRpb25Hcm91cHMucHVzaChuZXdHcm91cCk7XG4gICAgICAgIC8vIOyjvOyEnSBVSSDsu7Ttj6zrhIztirgg7IOd7ISxXG4gICAgICAgIGNvbnN0IHsgZnJhbWU6IGFubm90YXRpb25GcmFtZSB9ID0geWllbGQgY3JlYXRlQW5ub3RhdGlvbkNvbXBvbmVudHMoZGVmYXVsdEFubm90YXRpb24uaWQsIDEsIChfYyA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jb2xvciwgKF9kID0gbXNnLmNvbmZpZykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnNpemUsIChfZSA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5jYXJkV2lkdGgsIGRlZmF1bHRBbm5vdGF0aW9uLmRlc2NyaXB0aW9uKTtcbiAgICAgICAgLy8g7KO87ISdIO2UhOugiOyehOydhCDqt7jro7kg7ZSE66CI7J6E7JeQIOy2lOqwgFxuICAgICAgICBhbm5vdGF0aW9uR3JvdXBGcmFtZS5hcHBlbmRDaGlsZChhbm5vdGF0aW9uRnJhbWUpO1xuICAgICAgICAvLyDshKDtg53rkJwg64W465Oc7JeQIOuwsOyngCDsg53shLFcbiAgICAgICAgeWllbGQgY3JlYXRlQW5ub3RhdGlvbkJhZGdlKHNlbGVjdGlvbiwgMSwgZGVmYXVsdEFubm90YXRpb24uaWQsIChfZiA9IG1zZy5jb25maWcpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jb2xvcik7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbdG9wRnJhbWVdKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8gQ1JFQVRFX0FOTk9UQVRJT04g66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlQ3JlYXRlQW5ub3RhdGlvbihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBncm91cCA9IGZpbmRHcm91cChtc2cuZ3JvdXBJZCk7XG4gICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIOyDiCDso7zshJ0g6rCd7LK0IOyDneyEsVxuICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6re466O57JeQIOyjvOyEnSDstpTqsIBcbiAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgLy8g6re466O5IO2UhOugiOyehCDssL7quLBcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IHlpZWxkIGZpbmRPckNyZWF0ZUdyb3VwRnJhbWUoZ3JvdXApO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLso7zshJ0g6re466O5IO2UhOugiOyehOydhCDssL7qsbDrgpgg7IOd7ISx7ZWgIOyImCDsl4bsirXri4jri6RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g7KO87ISdIFVJIOy7tO2PrOuEjO2KuCDsg53shLFcbiAgICAgICAgY29uc3QgeyBmcmFtZTogYW5ub3RhdGlvbkZyYW1lIH0gPSB5aWVsZCBjcmVhdGVBbm5vdGF0aW9uQ29tcG9uZW50cyhuZXdBbm5vdGF0aW9uLmlkLCBncm91cC5hbm5vdGF0aW9ucy5sZW5ndGgsIGdyb3VwLmNvbG9yLCBncm91cC5zaXplLCBncm91cC5jYXJkV2lkdGgsIG5ld0Fubm90YXRpb24uZGVzY3JpcHRpb24pO1xuICAgICAgICAvLyDso7zshJ0g7ZSE66CI7J6E7J2EIOq3uOujuSDtlITroIjsnoTsl5Ag7LaU6rCAXG4gICAgICAgIGdyb3VwRnJhbWUuYXBwZW5kQ2hpbGQoYW5ub3RhdGlvbkZyYW1lKTtcbiAgICAgICAgLy8g7ZiE7J6sIOyEoO2DneuQnCDrhbjrk5zsl5Ag67Cw7KeAIOyDneyEsVxuICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgIGlmIChzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUFubm90YXRpb25CYWRnZShzZWxlY3Rpb24sIGdyb3VwLmFubm90YXRpb25zLmxlbmd0aCwgbmV3QW5ub3RhdGlvbi5pZCwgZ3JvdXAuY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UoXCJDUkVBVEVfQU5OT1RBVElPTlwiLCB0cnVlLCB7XG4gICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyBERUxFVEVfQU5OT1RBVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVBbm5vdGF0aW9uKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g6re466O5IOuCtOyXkOyEnCDso7zshJ0g7KCc6rGwXG4gICAgICAgIGdyb3VwLmFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnMuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIC8vIEZpZ21hIOy6lOuyhOyKpOyXkOyEnOuPhCDsgq3soJxcbiAgICAgICAgbGV0IGdyb3VwRnJhbWUgPSBmaW5kR3JvdXBGcmFtZShncm91cC5pZCwgZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgaWYgKGdyb3VwRnJhbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb25GcmFtZSA9IGdyb3VwRnJhbWUuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwiYW5ub3RhdGlvbklkXCIpID09PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbkZyYW1lKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkZyYW1lLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g64Ko7JWE7J6I64qUIOyjvOyEnSDtlITroIjsnoTrk6TsnZgg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuwsOyngOuPhCDtlajqu5gg7IKt7KCcXG4gICAgICAgIHJlbW92ZUFubm90YXRpb25CYWRnZShtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgIC8vIOuCqOyVhOyeiOuKlCBhbm5vdGF0aW9u65Ok7J2YIOuwsOyngCDsnbjrjbHsiqQg7JeF642w7J207Yq4XG4gICAgICAgIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gREVMRVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwVG9EZWxldGUgPSBmaW5kR3JvdXAobXNnLmdyb3VwLmlkKTtcbiAgICAgICAgaWYgKCFncm91cFRvRGVsZXRlKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICBpZiAoZ3JvdXBUb0RlbGV0ZS5ncm91cEZyYW1lSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwRnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChncm91cFRvRGVsZXRlLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBGcmFtZSkge1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDqt7jro7nsl5Ag7IaN7ZWcIOuqqOuToCBhbm5vdGF0aW9u7J2YIOuwsOyngCDsgq3soJxcbiAgICAgICAgICAgIGdyb3VwVG9EZWxldGUuYW5ub3RhdGlvbnMuZm9yRWFjaCgoYW5ub3RhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlbW92ZUFubm90YXRpb25CYWRnZShhbm5vdGF0aW9uLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOuplOuqqOumrOyXkOyEnCDqt7jro7kg7KCc6rGwXG4gICAgICAgIGFubm90YXRpb25Hcm91cHMgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbHRlcigoZykgPT4gZy5pZCAhPT0gbXNnLmdyb3VwLmlkKTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLnSDsoIHsmqkg7ZWo7IiYXG5mdW5jdGlvbiBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyh0ZXh0Tm9kZSwgZGVzY3JpcHRpb25EYXRhKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgaWYgKCFkZXNjcmlwdGlvbkRhdGEgfHwgIWRlc2NyaXB0aW9uRGF0YS5jb250ZW50KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDtlYTsmpTtlZwg66qo65OgIO2PsO2KuOulvCDrqLzsoIAg66Gc65OcIChSZWd1bGFyLCBCb2xkKVxuICAgICAgICB5aWVsZCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBmaWdtYS5sb2FkRm9udEFzeW5jKHsgZmFtaWx5OiBcIkludGVyXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9KSxcbiAgICAgICAgICAgIGZpZ21hLmxvYWRGb250QXN5bmMoeyBmYW1pbHk6IFwiSW50ZXJcIiwgc3R5bGU6IFwiQm9sZFwiIH0pLFxuICAgICAgICBdKTtcbiAgICAgICAgLy8g7YWN7Iqk7Yq4IOuCtOyaqSDstpTstpwgLSDquLDsobQgZXh0cmFjdFRleHRGcm9tRGVzY3JpcHRpb24g7Zmc7JqpXG4gICAgICAgIGNvbnN0IHBsYWluVGV4dCA9IGV4dHJhY3RUZXh0RnJvbURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uRGF0YSk7XG4gICAgICAgIC8vIOuqqOuToCDsiqTtg4Dsnbwg7LSI6riw7ZmU66W8IOychO2VtCBjaGFyYWN0ZXJz66W8IOuLpOyLnCDshKTsoJVcbiAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHBsYWluVGV4dDtcbiAgICAgICAgLy8g7KCE7LK0IO2FjeyKpO2KuOulvCDquLDrs7gg7Iqk7YOA7J2866GcIOyEpOyglVxuICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZvbnROYW1lKDAsIHBsYWluVGV4dC5sZW5ndGgsIHtcbiAgICAgICAgICAgIGZhbWlseTogXCJJbnRlclwiLFxuICAgICAgICAgICAgc3R5bGU6IFwiUmVndWxhclwiLFxuICAgICAgICB9KTtcbiAgICAgICAgdGV4dE5vZGUuc2V0UmFuZ2VUZXh0RGVjb3JhdGlvbigwLCBwbGFpblRleHQubGVuZ3RoLCBcIk5PTkVcIik7XG4gICAgICAgIHRleHROb2RlLnNldFJhbmdlRmlsbHMoMCwgcGxhaW5UZXh0Lmxlbmd0aCwgW1xuICAgICAgICAgICAgeyB0eXBlOiBcIlNPTElEXCIsIGNvbG9yOiB7IHI6IDAuMywgZzogMC4zLCBiOiAwLjMgfSB9LFxuICAgICAgICBdKTtcbiAgICAgICAgLy8gQm9sZCwgVW5kZXJsaW5lLCBDb2xvciDrk7HsnZgg7ISc7Iud7J2EIOyggeyaqe2VmOq4sCDsnITtlbQg7YWN7Iqk7Yq4IOuylOychCDsoJXrs7Qg7LaU7LacXG4gICAgICAgIGNvbnN0IGZvcm1hdHRpbmdSYW5nZXMgPSBleHRyYWN0Rm9ybWF0dGluZ1JhbmdlcyhkZXNjcmlwdGlvbkRhdGEpO1xuICAgICAgICAvLyBCb2xkIOyKpO2DgOydvCDsoIHsmqlcbiAgICAgICAgaWYgKGZvcm1hdHRpbmdSYW5nZXMuYm9sZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3JtYXR0aW5nUmFuZ2VzLmJvbGQuZm9yRWFjaCgocmFuZ2UpID0+IHtcbiAgICAgICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZvbnROYW1lKHJhbmdlLnN0YXJ0LCByYW5nZS5lbmQsIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5OiBcIkludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIkJvbGRcIixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFVuZGVybGluZSDsiqTtg4Dsnbwg7KCB7JqpXG4gICAgICAgIGZvcm1hdHRpbmdSYW5nZXMudW5kZXJsaW5lLmZvckVhY2goKHJhbmdlKSA9PiB7XG4gICAgICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZVRleHREZWNvcmF0aW9uKHJhbmdlLnN0YXJ0LCByYW5nZS5lbmQsIFwiVU5ERVJMSU5FXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gQ29sb3Ig7Iqk7YOA7J28IOyggeyaqVxuICAgICAgICBmb3JtYXR0aW5nUmFuZ2VzLmNvbG9yLmZvckVhY2goKGNvbG9yUmFuZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChjb2xvclJhbmdlLmNvbG9yLnNsaWNlKDEsIDMpLCAxNikgLyAyNTU7XG4gICAgICAgICAgICBjb25zdCBnID0gcGFyc2VJbnQoY29sb3JSYW5nZS5jb2xvci5zbGljZSgzLCA1KSwgMTYpIC8gMjU1O1xuICAgICAgICAgICAgY29uc3QgYiA9IHBhcnNlSW50KGNvbG9yUmFuZ2UuY29sb3Iuc2xpY2UoNSwgNyksIDE2KSAvIDI1NTtcbiAgICAgICAgICAgIHRleHROb2RlLnNldFJhbmdlRmlsbHMoY29sb3JSYW5nZS5zdGFydCwgY29sb3JSYW5nZS5lbmQsIFtcbiAgICAgICAgICAgICAgICB7IHR5cGU6IFwiU09MSURcIiwgY29sb3I6IHsgciwgZywgYiB9IH0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIOumrOyKpO2KuCDsiqTtg4Dsnbwg7KCB7JqpIChGaWdtYeyXkOyEnCDsp4HsoJHsoIHsnbgg66as7Iqk7Yq4IOyngOybkOydtCDsoJztlZzsoIHsnbTrr4DroZwg4oCiIOusuOyekOuhnCDrjIDssrQpXG4gICAgICAgIGlmIChmb3JtYXR0aW5nUmFuZ2VzLmJ1bGxldExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g7Jes6riw7ISc64qUIOqwhOuLqO2eiCDqtaztmITtlanri4jri6QuIOyLpOygnOuhnOuKlCDsooAg642UIOuzteyeoe2VnCDrs4DtmZjsnbQg7ZWE7JqU7ZWgIOyImCDsnojsirXri4jri6QuXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkVGV4dCA9IGZvcm1hdHRpbmdSYW5nZXMuYnVsbGV0TGlzdC5yZWR1Y2UoKHRleHQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGV4dC5zbGljZSgwLCBpdGVtLnN0YXJ0KSArIFwi4oCiIFwiICsgdGV4dC5zbGljZShpdGVtLnN0YXJ0KTtcbiAgICAgICAgICAgIH0sIHRleHROb2RlLmNoYXJhY3RlcnMpO1xuICAgICAgICAgICAgdGV4dE5vZGUuY2hhcmFjdGVycyA9IHVwZGF0ZWRUZXh0O1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDshJzsi50g67KU7JyEIOy2lOy2nCDtlajsiJhcbmZ1bmN0aW9uIGV4dHJhY3RGb3JtYXR0aW5nUmFuZ2VzKGRlc2NyaXB0aW9uRGF0YSkge1xuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xuICAgIGNvbnN0IHJhbmdlcyA9IHtcbiAgICAgICAgYm9sZDogW10sXG4gICAgICAgIHVuZGVybGluZTogW10sXG4gICAgICAgIGNvbG9yOiBbXSxcbiAgICAgICAgYnVsbGV0TGlzdDogW10sXG4gICAgfTtcbiAgICBmdW5jdGlvbiBwcm9jZXNzTm9kZShub2RlLCBwYXJlbnRNYXJrcyA9IFtdKSB7XG4gICAgICAgIC8vIO2YhOyerCDrhbjrk5zsnZgg66eI7YGs7JmAIOu2gOuqqOuhnOu2gO2EsCDsg4Hsho3rsJvsnYAg66eI7YGsIO2Vqey5mOq4sFxuICAgICAgICBjb25zdCBtYXJrcyA9IFsuLi5wYXJlbnRNYXJrc107XG4gICAgICAgIGlmIChub2RlLm1hcmtzKSB7XG4gICAgICAgICAgICBtYXJrcy5wdXNoKC4uLm5vZGUubWFya3MpO1xuICAgICAgICB9XG4gICAgICAgIC8vIO2FjeyKpO2KuCDrhbjrk5wg7LKY66asXG4gICAgICAgIGlmIChub2RlLnRleHQpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gY3VycmVudFBvc2l0aW9uO1xuICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gbm9kZS50ZXh0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgbGVuZ3RoO1xuICAgICAgICAgICAgLy8gQm9sZCDrp4jtgawg7ZmV7J24XG4gICAgICAgICAgICBpZiAobWFya3Muc29tZSgobWFyaykgPT4gbWFyay50eXBlID09PSBcImJvbGRcIikpIHtcbiAgICAgICAgICAgICAgICByYW5nZXMuYm9sZC5wdXNoKHsgc3RhcnQsIGVuZCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVuZGVybGluZSDrp4jtgawg7ZmV7J24XG4gICAgICAgICAgICBpZiAobWFya3Muc29tZSgobWFyaykgPT4gbWFyay50eXBlID09PSBcInVuZGVybGluZVwiKSkge1xuICAgICAgICAgICAgICAgIHJhbmdlcy51bmRlcmxpbmUucHVzaCh7IHN0YXJ0LCBlbmQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb2xvciDrp4jtgawg7ZmV7J24XG4gICAgICAgICAgICBjb25zdCBjb2xvck1hcmsgPSBtYXJrcy5maW5kKChtYXJrKSA9PiBtYXJrLnR5cGUgPT09IFwidGV4dFN0eWxlXCIgJiYgbWFyay5hdHRycyAmJiBtYXJrLmF0dHJzLmNvbG9yKTtcbiAgICAgICAgICAgIGlmIChjb2xvck1hcmspIHtcbiAgICAgICAgICAgICAgICByYW5nZXMuY29sb3IucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBlbmQsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvck1hcmsuYXR0cnMuY29sb3IsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gKz0gbGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJ1bGxldCBsaXN0IOuFuOuTnCDtmZXsnbhcbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJidWxsZXRMaXN0XCIpIHtcbiAgICAgICAgICAgIC8vIO2YhOyerCDsnITsuZjrpbwg66as7Iqk7Yq4IOyLnOyekSDsnITsuZjroZwg6riw66GdXG4gICAgICAgICAgICByYW5nZXMuYnVsbGV0TGlzdC5wdXNoKHsgc3RhcnQ6IGN1cnJlbnRQb3NpdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDsnpDsi50g64W465OcIOyymOumrCAo7J6s6reAKVxuICAgICAgICBpZiAobm9kZS5jb250ZW50ICYmIEFycmF5LmlzQXJyYXkobm9kZS5jb250ZW50KSkge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50LmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2Nlc3NOb2RlKGNoaWxkTm9kZSwgbWFya3MpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRlc2NyaXB0aW9uRGF0YS5jb250ZW50KSB7XG4gICAgICAgIGRlc2NyaXB0aW9uRGF0YS5jb250ZW50LmZvckVhY2goKG5vZGUpID0+IHtcbiAgICAgICAgICAgIHByb2Nlc3NOb2RlKG5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJhbmdlcztcbn1cbi8vIFVQREFURV9BTk5PVEFUSU9OIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBmaW5kR3JvdXAobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBhbm5vdGF0aW9uID0gZmluZEFubm90YXRpb24obXNnLmdyb3VwSWQsIG1zZy5hbm5vdGF0aW9uSWQpO1xuICAgICAgICBpZiAoIWdyb3VwIHx8ICFhbm5vdGF0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqwg7IOB7YOcIOyXheuNsOydtO2KuFxuICAgICAgICBhbm5vdGF0aW9uW21zZy5rZXldID0gbXNnLnZhbHVlO1xuICAgICAgICAvLyDsi6TsoJwgRmlnbWEg7JqU7IaM64+EIOyXheuNsOydtO2KuFxuICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmluZEdyb3VwRnJhbWUoZ3JvdXAuaWQsIGdyb3VwLmdyb3VwRnJhbWVJZCk7XG4gICAgICAgIGlmICghZ3JvdXBGcmFtZSlcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g7ZW064u5IGFubm90YXRpb24g7ZSE66CI7J6EIOywvuq4sFxuICAgICAgICBjb25zdCBhbm5vdGF0aW9uRnJhbWUgPSBncm91cEZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUuZ2V0UGx1Z2luRGF0YShcImFubm90YXRpb25JZFwiKSA9PT0gbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgIGlmICghYW5ub3RhdGlvbkZyYW1lKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyBjb250ZW50IOq3uOujuSDssL7quLBcbiAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gYW5ub3RhdGlvbkZyYW1lLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgaWYgKCFjb250ZW50R3JvdXApXG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCBmYWxzZSk7XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uIO2FjeyKpO2KuCDrhbjrk5wg7LC+7JWEIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgICAgICAvLyDtj7Dtirgg66Gc65Oc64qUIGFwcGx5UmljaFRleHRGb3JtYXR0aW5nIOuCtOu2gOyXkOyEnCDsspjrpqxcbiAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fZGVzY3JpcHRpb25cIik7XG4gICAgICAgICAgICBpZiAoZGVzY05vZGUpIHtcbiAgICAgICAgICAgICAgICAvLyDrpqzsuZgg7YWN7Iqk7Yq4IOyEnOyLnSDsoIHsmqlcbiAgICAgICAgICAgICAgICB5aWVsZCBhcHBseVJpY2hUZXh0Rm9ybWF0dGluZyhkZXNjTm9kZSwgbXNnLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsCAtIOq3uOujueyXkOyEnCDshKTsoJXrkJwgY2FyZFdpZHRoIOqwkiDsgqzsmqlcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkV2lkdGggPSBnZXRDYXJkV2lkdGgoZ3JvdXAuY2FyZFdpZHRoKTtcbiAgICAgICAgICAgICAgICAvLyBkZXNjcmlwdGlvbuydtCDrs4Dqsr3rkJjrqbQg66CI7J207JWE7JuDIOyhsOyglVxuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25GcmFtZS5yZXNpemUoY2FyZFdpZHRoIC0gMjAsIGFubm90YXRpb25GcmFtZS5oZWlnaHQpOyAvLyDsoozsmrAg7Yyo65SpIOqzoOugpFxuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQg6re466O57J2YIOuEiOu5hOuPhCDqs6DsoJVcbiAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50R3JvdXAucmVzaXplKGNhcmRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgIDIwIC1cbiAgICAgICAgICAgICAgICAgICAgKGFubm90YXRpb25GcmFtZS5wYWRkaW5nTGVmdCArIGFubm90YXRpb25GcmFtZS5wYWRkaW5nUmlnaHQpLCBjb250ZW50R3JvdXAuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAvLyB0ZXh0IOuFuOuTnOydmCDrhIjruYTrj4Qg6rOg7KCVXG4gICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBkZXNjTm9kZS5yZXNpemUoY2FyZFdpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgMjAgLVxuICAgICAgICAgICAgICAgICAgICAoYW5ub3RhdGlvbkZyYW1lLnBhZGRpbmdMZWZ0ICsgYW5ub3RhdGlvbkZyYW1lLnBhZGRpbmdSaWdodCkgLVxuICAgICAgICAgICAgICAgICAgICAoY29udGVudEdyb3VwLnBhZGRpbmdMZWZ0ICsgY29udGVudEdyb3VwLnBhZGRpbmdSaWdodCksIGRlc2NOb2RlLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8gYW5ub3RhdGlvbkdyb3VwRnJhbWUg7YGs6riwIOyhsOyglSAo64SI67mE64qUIGNhcmRXaWR0aOuhnCDqs6DsoJUsIOuGkuydtOunjCDrs4Dqsr0pXG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGdyb3VwRnJhbWUucmVzaXplKGNhcmRXaWR0aCwgZ3JvdXBGcmFtZS5oZWlnaHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIHRydWUpO1xuICAgIH0pO1xufVxuLy8gVVBEQVRFX0FOTk9UQVRJT05fR1JPVVAg66mU7Iuc7KeAIO2VuOuTpOufrFxuZnVuY3Rpb24gaGFuZGxlVXBkYXRlQW5ub3RhdGlvbkdyb3VwKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKCFncm91cClcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgLy8g66mU66qo66asIOyDge2DnCDsl4XrjbDsnbTtirhcbiAgICAgICAgZ3JvdXBbbXNnLmtleV0gPSBtc2cudmFsdWU7XG4gICAgICAgIC8vIEZpZ21hIOyalOyGjCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICBpZiAoZnJhbWVOb2RlKSB7XG4gICAgICAgICAgICBmcmFtZU5vZGUuc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cudmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDqt7jro7kg7ZSE66CI7J6E64+EIOyXheuNsOydtO2KuFxuICAgICAgICBpZiAoZ3JvdXAuZ3JvdXBGcmFtZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBncm91cEZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuZ3JvdXBGcmFtZUlkKTtcbiAgICAgICAgICAgIGlmIChncm91cEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBGcmFtZS5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIC8vIOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJjb2xvclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yVmFsdWUgPSBwYXJzZUludChtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZ3JvdXBGcmFtZSwgY29sb3JWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIO2BrOq4sCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgICAgICBpZiAobXNnLmtleSA9PT0gXCJzaXplXCIgfHwgbXNnLmtleSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVHcm91cEZyYW1lU2l6ZShncm91cEZyYW1lLCBtc2cua2V5LCBtc2cudmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlKTtcbiAgICB9KTtcbn1cbi8vIFVQREFURV9BTk5PVEFUSU9OX09SREVSIOuplOyLnOyngCDtlbjrk6Trn6xcbmZ1bmN0aW9uIGhhbmRsZVVwZGF0ZUFubm90YXRpb25PcmRlcihtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB7IGdyb3VwSWQsIHNvdXJjZUluZGV4LCBkZXN0aW5hdGlvbkluZGV4IH0gPSBtc2c7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKGdyb3VwSWQpO1xuICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgZmFsc2UpO1xuICAgICAgICAvLyDrqZTrqqjrpqzsg4HsnZgg7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgYW5ub3RhdGlvbnMgPSBbLi4uZ3JvdXAuYW5ub3RhdGlvbnNdO1xuICAgICAgICBjb25zdCBbbW92ZWRBbm5vdGF0aW9uXSA9IGFubm90YXRpb25zLnNwbGljZShzb3VyY2VJbmRleCAtIDEsIDEpO1xuICAgICAgICBhbm5vdGF0aW9ucy5zcGxpY2UoZGVzdGluYXRpb25JbmRleCAtIDEsIDAsIG1vdmVkQW5ub3RhdGlvbik7XG4gICAgICAgIGdyb3VwLmFubm90YXRpb25zID0gYW5ub3RhdGlvbnM7XG4gICAgICAgIC8vIEZpZ21hIOy6lOuyhOyKpCDsg4HsnZgg7KO87ISdIOyInOyEnCDsl4XrjbDsnbTtirhcbiAgICAgICAgY29uc3QgZ3JvdXBGcmFtZSA9IGZpbmRHcm91cEZyYW1lKGdyb3VwLmlkLCBncm91cC5ncm91cEZyYW1lSWQpO1xuICAgICAgICBpZiAoIWdyb3VwRnJhbWUgfHwgZ3JvdXBGcmFtZS50eXBlICE9PSBcIkZSQU1FXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBzZW5kUmVzcG9uc2UobXNnLnR5cGUsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IFsuLi5ncm91cEZyYW1lLmNoaWxkcmVuXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gY2hpbGRyZW5bc291cmNlSW5kZXggLSAxXTsgLy8gMOu2gO2EsCDsi5zsnpHtlZjripQg7J24642x7Iqk66GcIOuzgO2ZmFxuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBncm91cEZyYW1lLmluc2VydENoaWxkKGRlc3RpbmF0aW9uSW5kZXggLSAxLCB0YXJnZXQpO1xuICAgICAgICAgICAgLy8g7Iic7ISc6rCAIOuwlOuAkCDtm4Qg7J24642x7IqkIOuyiO2YuCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUFubm90YXRpb25JbmRpY2VzKGdyb3VwRnJhbWUpO1xuICAgICAgICAgICAgLy8g67Cw7KeAIOyduOuNseyKpOuPhCDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIHVwZGF0ZUJhZGdlSW5kaWNlcyhncm91cC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSk7XG4gICAgfSk7XG59XG4vLyBNT1ZFX1RPX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVNb3ZlVG9TZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8g7Y6Y7J207KeAIElE6rCAIOygnOqzteuQnCDqsr3smrAg66i87KCAIO2VtOuLuSDtjpjsnbTsp4DroZwg7J2064+ZXG4gICAgICAgIGlmIChtc2cucGFnZUlkKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlTm9kZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobm9kZSkgPT4gbm9kZS5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBpZiAocGFnZU5vZGUgJiYgcGFnZU5vZGUudHlwZSA9PT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IHBhZ2VOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGdyb3VwTm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5ncm91cElkKTtcbiAgICAgICAgaWYgKGdyb3VwTm9kZSkge1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDsnbQg7ZW465Ok65+s64qUIFVJ66GcIOydkeuLteydhCDrsJjtmZjtlZjsp4Ag7JWK7J2MXG4gICAgfSk7XG59XG4vLyBDSEVDS19DVVJSRU5UX1NFTEVDVElPTiDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICBjb25zdCBleGlzdHMgPSAhIWdyb3VwTm9kZTtcbiAgICAgICAgcmV0dXJuIHNlbmRSZXNwb25zZShtc2cudHlwZSwgdHJ1ZSwge1xuICAgICAgICAgICAgcmVzdWx0OiBleGlzdHMsXG4gICAgICAgICAgICBncm91cElkOiBtc2cuZ3JvdXBJZCxcbiAgICAgICAgICAgIG9ic29sZXRlOiAhZXhpc3RzLFxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIEdFVF9GUkFNRV9JTUFHRSDrqZTsi5zsp4Ag7ZW465Ok65+sXG5mdW5jdGlvbiBoYW5kbGVHZXRGcmFtZUltYWdlKG1zZykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lSW1hZ2VzID0gW107XG4gICAgICAgIGZvciAoY29uc3QgZ3JvdXAgb2YgYW5ub3RhdGlvbkdyb3Vwcykge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXAuaWQpO1xuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZSAmJiBmcmFtZU5vZGUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB5aWVsZCBmcmFtZU5vZGUuZXhwb3J0QXN5bmMoe1xuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFwiUE5HXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQ6IHsgdHlwZTogXCJTQ0FMRVwiLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGZyYW1lSW1hZ2VzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBncm91cC5pZCxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VEYXRhOiBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LCR7ZmlnbWEuYmFzZTY0RW5jb2RlKGltYWdlKX1gLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChmcmFtZUltYWdlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc2VuZFJlc3BvbnNlKG1zZy50eXBlLCB0cnVlLCB7IGZyYW1lSW1hZ2VzIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyDrqZTsi5zsp4Ag7ZW465Ok65+sIOyEpOyglVxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgdHJ5IHtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDcmVhdGVBbm5vdGF0aW9uR3JvdXAobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUNyZWF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25Hcm91cChtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlRGVsZXRlQW5ub3RhdGlvbkdyb3VwKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiU0FWRV9EQVRBXCI6XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKG1zZy5rZXksIEpTT04uc3RyaW5naWZ5KG1zZy5kYXRhKSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMT0FEX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEobXNnLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHJhdyA/IEpTT04ucGFyc2UocmF3KSA6IFtdO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWQsIFwicGFyc2VkXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gcGFyc2VkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UodHlwZSwgdHJ1ZSwgeyBrZXk6IG1zZy5rZXksIGRhdGE6IHBhcnNlZCB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh0eXBlLCBmYWxzZSwge30sIFN0cmluZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDTEVBUl9BTk5PVEFUSU9OX0RBVEFcIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uR3JvdXBcIiwgXCJbXVwiKTtcbiAgICAgICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gW107XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHt9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfRklMRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHsgZmlsZU5hbWU6IGZpZ21hLnJvb3QubmFtZSB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJHRVRfUEFHRV9OQU1FXCI6XG4gICAgICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobikgPT4gbi5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIHRydWUsIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUlkOiBtc2cucGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTogKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS5uYW1lKSB8fCBcIlVua25vd24gUGFnZVwiLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIk1PVkVfVE9fU0VMRUNUSU9OXCI6XG4gICAgICAgICAgICAgICAgeWllbGQgaGFuZGxlTW92ZVRvU2VsZWN0aW9uKG1zZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT05cIjpcbiAgICAgICAgICAgICAgICB5aWVsZCBoYW5kbGVDaGVja0N1cnJlbnRTZWxlY3Rpb24obXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9PUkRFUlwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZVVwZGF0ZUFubm90YXRpb25PcmRlcihtc2cpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkdFVF9GUkFNRV9JTUFHRVwiOlxuICAgICAgICAgICAgICAgIHlpZWxkIGhhbmRsZUdldEZyYW1lSW1hZ2UobXNnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgbWVzc2FnZSB0eXBlOlwiLCBtc2cudHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGhhbmRsaW5nIG1lc3NhZ2UgdHlwZSAke3R5cGV9OmAsIGVycm9yKTtcbiAgICAgICAgc2VuZFJlc3BvbnNlKHR5cGUsIGZhbHNlLCB7fSwgU3RyaW5nKGVycm9yKSk7XG4gICAgfVxufSk7XG4vLyDqt7jro7kg7ZSE66CI7J6EIOyDieyDgSDsl4XrjbDsnbTtirgg7ZWo7IiYXG5mdW5jdGlvbiB1cGRhdGVHcm91cEZyYW1lQ29sb3IoZnJhbWUsIGNvbG9yVmFsdWUpIHtcbiAgICBjb25zdCBoZWFkZXJDb2xvciA9IGdldENvbG9yQnlWYWx1ZShjb2xvclZhbHVlKTtcbiAgICAvLyDtlITroIjsnoQg7J6Q7LK0IOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICBmcmFtZS5maWxscyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgY29sb3I6IHsgcjogMSwgZzogMSwgYjogMSB9LFxuICAgICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICB9LFxuICAgIF07XG4gICAgLy8g66qo65OgIOyekOyLnSDso7zshJ0g7JqU7IaM65OkIOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICBmcmFtZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICBjaGlsZC5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uXCIpIHtcbiAgICAgICAgICAgIC8vIOyduOuNseyKpCDrsojtmLgg67Cw6rK97IOJIOyXheuNsOydtO2KuFxuICAgICAgICAgICAgY29uc3QgY29udGVudEdyb3VwID0gY2hpbGQuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIkZSQU1FXCIgJiZcbiAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleE5vZGUgPSBjb250ZW50R3JvdXAuZmluZE9uZSgobm9kZSkgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25faW5kZXhcIik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleE5vZGUuZmlsbHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBoZWFkZXJDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8g6re466O5IElEIOqwgOyguOyYpOq4sCAocGFyZW50X2ZyYW1lX2lk7JeQIOyggOyepeuQmOyWtCDsnojsnYwpXG4gICAgY29uc3QgcGFyZW50RnJhbWVJZCA9IGZyYW1lLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIik7XG4gICAgaWYgKCFwYXJlbnRGcmFtZUlkKVxuICAgICAgICByZXR1cm47XG4gICAgLy8g7ZW064u5IOq3uOujueydmCDrqqjrk6Ag7KO87ISdIElEIOqwgOyguOyYpOq4sFxuICAgIGNvbnN0IGdyb3VwID0gZmluZEdyb3VwKHBhcmVudEZyYW1lSWQpO1xuICAgIGlmICghZ3JvdXApXG4gICAgICAgIHJldHVybjtcbiAgICBjb25zdCBhbm5vdGF0aW9uSWRzID0gZ3JvdXAuYW5ub3RhdGlvbnMubWFwKChhKSA9PiBhLmlkKTtcbiAgICAvLyDtjpjsnbTsp4Dsl5DshJwg7ZW064u5IOq3uOujueyXkCDsho3tlZwg66qo65OgIOuwsOyngCDssL7quLBcbiAgICBmaWdtYS5jdXJyZW50UGFnZVxuICAgICAgICAuZmluZEFsbCgobm9kZSkgPT4gbm9kZS5nZXRQbHVnaW5EYXRhKFwidHlwZVwiKSA9PT0gXCJhbm5vdGF0aW9uX2JhZGdlXCIgJiZcbiAgICAgICAgYW5ub3RhdGlvbklkcy5pbmNsdWRlcyhub2RlLmdldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uSWRcIikpKVxuICAgICAgICAuZm9yRWFjaCgoYmFkZ2UpID0+IHtcbiAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgLy8g67Cw7KeAIOyDieyDgSDsl4XrjbDsnbTtirhcbiAgICAgICAgICAgIGJhZGdlLmZpbGxzID0gW3sgdHlwZTogXCJTT0xJRFwiLCBjb2xvcjogaGVhZGVyQ29sb3IgfV07XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIOq3uOujuSDtlITroIjsnoQg7YGs6riwIOyXheuNsOydtO2KuCDtlajsiJhcbmZ1bmN0aW9uIHVwZGF0ZUdyb3VwRnJhbWVTaXplKGZyYW1lLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgICAvLyDsubTrk5wg64SI67mEIOqzhOyCsFxuICAgIGNvbnN0IGNhcmRXaWR0aCA9IHByb3BlcnR5ID09PSBcImNhcmRXaWR0aFwiID8gZ2V0Q2FyZFdpZHRoQnlWYWx1ZSh2YWx1ZSkgOiBnZXRDYXJkV2lkdGgoKTtcbiAgICAvLyDtlITroIjsnoTsnbQg7IaN7ZWcIOu2gOuqqCDtlITroIjsnoQg7LC+6riwXG4gICAgY29uc3QgcGFyZW50RnJhbWVJZCA9IGZyYW1lLmdldFBsdWdpbkRhdGEoXCJwYXJlbnRfZnJhbWVfaWRcIik7XG4gICAgaWYgKHBhcmVudEZyYW1lSWQgJiYgcHJvcGVydHkgPT09IFwiY2FyZFdpZHRoXCIpIHtcbiAgICAgICAgY29uc3QgcGFyZW50RnJhbWUgPSBmaWdtYS5nZXROb2RlQnlJZChwYXJlbnRGcmFtZUlkKTtcbiAgICAgICAgaWYgKHBhcmVudEZyYW1lICYmIHBhcmVudEZyYW1lLnR5cGUgPT09IFwiRlJBTUVcIikge1xuICAgICAgICAgICAgLy8geCDsooztkZwg7JeF642w7J207Yq4IC0g67aA66qoIO2UhOugiOyehCDrgrTrtoDsnZgg7Jqw7Lih7JeQIOychOy5mO2VmOuPhOuhnSDshKTsoJVcbiAgICAgICAgICAgIGZyYW1lLnggPSBwYXJlbnRGcmFtZS53aWR0aCAtIGNhcmRXaWR0aCAtIDIwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOuEiOu5hCDshKTsoJVcbiAgICBmcmFtZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgIGZyYW1lLnJlc2l6ZShjYXJkV2lkdGgsIGZyYW1lLmhlaWdodCk7XG4gICAgLy8g7IKs7J207KaIIOqwkuyXkCDrlLDrpbgg7Iqk7YOA7J28IOuzgOqyvVxuICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJjYXJkV2lkdGhcIikge1xuICAgICAgICAvLyDrqqjrk6Ag7J6Q7IudIOyalOyGjOydmCDrhIjruYTrj4Qg7JeF642w7J207Yq4XG4gICAgICAgIGZyYW1lLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoY2hpbGQudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgY2hpbGQuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICBjaGlsZC5yZXNpemUoY2FyZFdpZHRoLCBjaGlsZC5oZWlnaHQpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnRlbnQg6re466O5IOywvuq4sFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRlbnRHcm91cCA9IGNoaWxkLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJGUkFNRVwiICYmXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9jb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50R3JvdXApIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY2FyZFdpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KSwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7LC+6riwXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUucmVzaXplKGNhcmRXaWR0aCAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRlbnRHcm91cC5wYWRkaW5nTGVmdCArIGNvbnRlbnRHcm91cC5wYWRkaW5nUmlnaHQpLCBkZXNjTm9kZS5oZWlnaHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcGVydHkgPT09IFwic2l6ZVwiKSB7XG4gICAgICAgIC8vIO2PsO2KuCDtgazquLAg7JeF642w7J207Yq4XG4gICAgICAgIGNvbnN0IGZvbnRTaXplID0gZ2V0Rm9udFNpemVCeVZhbHVlKHZhbHVlKTtcbiAgICAgICAgY29uc3QgZ2FwID0gc3VwcG9ydGVkRm9udFNpemVzW3ZhbHVlXS5nYXA7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSBzdXBwb3J0ZWRGb250U2l6ZXNbdmFsdWVdO1xuICAgICAgICBmcmFtZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNoaWxkLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgIGNoaWxkLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25cIikge1xuICAgICAgICAgICAgICAgIGNoaWxkLml0ZW1TcGFjaW5nID0gZ2FwO1xuICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJVcbiAgICAgICAgICAgICAgICBjaGlsZC5sYXlvdXRTaXppbmdIb3Jpem9udGFsID0gXCJGSVhFRFwiO1xuICAgICAgICAgICAgICAgIGNoaWxkLnJlc2l6ZShjYXJkV2lkdGgsIGNoaWxkLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgLy8g64K07JqpIOq3uOujuSDssL7quLBcbiAgICAgICAgICAgICAgICBjb25zdCBjb250ZW50R3JvdXAgPSBjaGlsZC5maW5kT25lKChub2RlKSA9PiBub2RlLnR5cGUgPT09IFwiRlJBTUVcIiAmJlxuICAgICAgICAgICAgICAgICAgICBub2RlLmdldFBsdWdpbkRhdGEoXCJ0eXBlXCIpID09PSBcImFubm90YXRpb25fY29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudEdyb3VwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5pdGVtU3BhY2luZyA9IGdhcCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIC8vIOuEiOu5hCDqs6DsoJVcbiAgICAgICAgICAgICAgICAgICAgY29udGVudEdyb3VwLmxheW91dFNpemluZ0hvcml6b250YWwgPSBcIkZJWEVEXCI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRHcm91cC5yZXNpemUoY2FyZFdpZHRoIC0gKGNoaWxkLnBhZGRpbmdMZWZ0ICsgY2hpbGQucGFkZGluZ1JpZ2h0KSwgY29udGVudEdyb3VwLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOyEpOuqhSDthY3siqTtirgg7JeF642w7J207Yq4XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NOb2RlID0gY29udGVudEdyb3VwLmZpbmRPbmUoKG5vZGUpID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0UGx1Z2luRGF0YShcInR5cGVcIikgPT09IFwiYW5ub3RhdGlvbl9kZXNjcmlwdGlvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc2NOb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjTm9kZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY05vZGUubGF5b3V0U2l6aW5nSG9yaXpvbnRhbCA9IFwiRklYRURcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NOb2RlLnJlc2l6ZShjYXJkV2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGlsZC5wYWRkaW5nTGVmdCArIGNoaWxkLnBhZGRpbmdSaWdodCkgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250ZW50R3JvdXAucGFkZGluZ0xlZnQgKyBjb250ZW50R3JvdXAucGFkZGluZ1JpZ2h0KSwgZGVzY05vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9