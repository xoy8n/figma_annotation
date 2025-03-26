/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services/messageService.ts":
/*!****************************************!*\
  !*** ./src/services/messageService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* binding */ Messages),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage)
/* harmony export */ });
var Messages;
(function (Messages) {
    Messages["CREATE_ANNOTATION"] = "CREATE_ANNOTATION";
    Messages["UPDATE_ANNOTATION"] = "UPDATE_ANNOTATION";
    Messages["SAVE_DATA"] = "SAVE_DATA";
    Messages["LOAD_DATA"] = "LOAD_DATA";
    Messages["CLEAR_ANNOTATION_DATA"] = "CLEAR_ANNOTATION_DATA";
    Messages["DELETE_ANNOTATION"] = "DELETE_ANNOTATION";
    Messages["UPDATE_ANNOTATION_GROUP"] = "UPDATE_ANNOTATION_GROUP";
    Messages["DELETE_ANNOTATION_GROUP"] = "DELETE_ANNOTATION_GROUP";
    Messages["MOVE_TO_SELECTION"] = "MOVE_TO_SELECTION";
    Messages["GET_FILE_NAME"] = "GET_FILE_NAME";
    Messages["GET_PAGE_NAME"] = "GET_PAGE_NAME";
    Messages["SELECTION_CHANGE"] = "SELECTION_CHANGE";
    Messages["UPDATE_ANNOTATION_ORDER"] = "UPDATE_ANNOTATION_ORDER";
    Messages["CREATE_ANNOTATION_GROUP"] = "CREATE_ANNOTATION_GROUP";
    Messages["GET_FRAME_IMAGE"] = "GET_FRAME_IMAGE";
    Messages["CHECK_CURRENT_SELECTION"] = "CHECK_CURRENT_SELECTION";
})(Messages || (Messages = {}));
const sendMessage = (type, param = {}) => {
    parent.postMessage({ pluginMessage: Object.assign({ type }, param) }, "*");
};


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
/* harmony import */ var _services_messageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/messageService */ "./src/services/messageService.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

figma.showUI(__html__, { height: 700, width: 800 });
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (msg.type) {
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.CREATE_ANNOTATION:
            console.log("CREATE_ANNOTATION");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.UPDATE_ANNOTATION:
            console.log("UPDATE_ANNOTATION");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.DELETE_ANNOTATION:
            console.log("DELETE_ANNOTATION");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.CREATE_ANNOTATION_GROUP:
            console.log("CREATE_ANNOTATION_GROUP");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.UPDATE_ANNOTATION_GROUP:
            console.log("UPDATE_ANNOTATION_GROUP");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.DELETE_ANNOTATION_GROUP:
            console.log("DELETE_ANNOTATION_GROUP");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.MOVE_TO_SELECTION:
            console.log("MOVE_TO_SELECTION");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.GET_FILE_NAME:
            console.log("GET_FILE_NAME");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.GET_PAGE_NAME:
            console.log("GET_PAGE_NAME");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.SELECTION_CHANGE:
            console.log("SELECTION_CHANGE");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.UPDATE_ANNOTATION_ORDER:
            console.log("UPDATE_ANNOTATION_ORDER");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.GET_FRAME_IMAGE:
            console.log("GET_FRAME_IMAGE");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.CHECK_CURRENT_SELECTION:
            console.log("CHECK_CURRENT_SELECTION");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.SAVE_DATA:
            console.log("SAVE_DATA");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.LOAD_DATA:
            console.log("LOAD_DATA");
            break;
        case _services_messageService__WEBPACK_IMPORTED_MODULE_0__.Messages.CLEAR_ANNOTATION_DATA:
            console.log("CLEAR_ANNOTATION_DATA");
            break;
        default:
            console.log("Unknown message type");
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDRCQUE0QjtBQUN0QixxQ0FBcUM7QUFDNUMseUJBQXlCLCtCQUErQixNQUFNLFVBQVU7QUFDeEU7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3Qiw0QkFBNEIsK0RBQStELGlCQUFpQjtBQUM1RztBQUNBLG9DQUFvQyxNQUFNLCtCQUErQixZQUFZO0FBQ3JGLG1DQUFtQyxNQUFNLG1DQUFtQyxZQUFZO0FBQ3hGLGdDQUFnQztBQUNoQztBQUNBLEtBQUs7QUFDTDtBQUNxRDtBQUNyRCx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLDhEQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9zZXJ2aWNlcy9tZXNzYWdlU2VydmljZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC8uL3NyYy9jb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgTWVzc2FnZXM7XG4oZnVuY3Rpb24gKE1lc3NhZ2VzKSB7XG4gICAgTWVzc2FnZXNbXCJDUkVBVEVfQU5OT1RBVElPTlwiXSA9IFwiQ1JFQVRFX0FOTk9UQVRJT05cIjtcbiAgICBNZXNzYWdlc1tcIlVQREFURV9BTk5PVEFUSU9OXCJdID0gXCJVUERBVEVfQU5OT1RBVElPTlwiO1xuICAgIE1lc3NhZ2VzW1wiU0FWRV9EQVRBXCJdID0gXCJTQVZFX0RBVEFcIjtcbiAgICBNZXNzYWdlc1tcIkxPQURfREFUQVwiXSA9IFwiTE9BRF9EQVRBXCI7XG4gICAgTWVzc2FnZXNbXCJDTEVBUl9BTk5PVEFUSU9OX0RBVEFcIl0gPSBcIkNMRUFSX0FOTk9UQVRJT05fREFUQVwiO1xuICAgIE1lc3NhZ2VzW1wiREVMRVRFX0FOTk9UQVRJT05cIl0gPSBcIkRFTEVURV9BTk5PVEFUSU9OXCI7XG4gICAgTWVzc2FnZXNbXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiXSA9IFwiVVBEQVRFX0FOTk9UQVRJT05fR1JPVVBcIjtcbiAgICBNZXNzYWdlc1tcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCJdID0gXCJERUxFVEVfQU5OT1RBVElPTl9HUk9VUFwiO1xuICAgIE1lc3NhZ2VzW1wiTU9WRV9UT19TRUxFQ1RJT05cIl0gPSBcIk1PVkVfVE9fU0VMRUNUSU9OXCI7XG4gICAgTWVzc2FnZXNbXCJHRVRfRklMRV9OQU1FXCJdID0gXCJHRVRfRklMRV9OQU1FXCI7XG4gICAgTWVzc2FnZXNbXCJHRVRfUEFHRV9OQU1FXCJdID0gXCJHRVRfUEFHRV9OQU1FXCI7XG4gICAgTWVzc2FnZXNbXCJTRUxFQ1RJT05fQ0hBTkdFXCJdID0gXCJTRUxFQ1RJT05fQ0hBTkdFXCI7XG4gICAgTWVzc2FnZXNbXCJVUERBVEVfQU5OT1RBVElPTl9PUkRFUlwiXSA9IFwiVVBEQVRFX0FOTk9UQVRJT05fT1JERVJcIjtcbiAgICBNZXNzYWdlc1tcIkNSRUFURV9BTk5PVEFUSU9OX0dST1VQXCJdID0gXCJDUkVBVEVfQU5OT1RBVElPTl9HUk9VUFwiO1xuICAgIE1lc3NhZ2VzW1wiR0VUX0ZSQU1FX0lNQUdFXCJdID0gXCJHRVRfRlJBTUVfSU1BR0VcIjtcbiAgICBNZXNzYWdlc1tcIkNIRUNLX0NVUlJFTlRfU0VMRUNUSU9OXCJdID0gXCJDSEVDS19DVVJSRU5UX1NFTEVDVElPTlwiO1xufSkoTWVzc2FnZXMgfHwgKE1lc3NhZ2VzID0ge30pKTtcbmV4cG9ydCBjb25zdCBzZW5kTWVzc2FnZSA9ICh0eXBlLCBwYXJhbSA9IHt9KSA9PiB7XG4gICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgcGx1Z2luTWVzc2FnZTogT2JqZWN0LmFzc2lnbih7IHR5cGUgfSwgcGFyYW0pIH0sIFwiKlwiKTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgTWVzc2FnZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9tZXNzYWdlU2VydmljZVwiO1xuZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IGhlaWdodDogNzAwLCB3aWR0aDogODAwIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkNSRUFURV9BTk5PVEFUSU9OOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEVfQU5OT1RBVElPTlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLlVQREFURV9BTk5PVEFUSU9OOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUERBVEVfQU5OT1RBVElPTlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkRFTEVURV9BTk5PVEFUSU9OOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUxFVEVfQU5OT1RBVElPTlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkNSRUFURV9BTk5PVEFUSU9OX0dST1VQOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDUkVBVEVfQU5OT1RBVElPTl9HUk9VUFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLlVQREFURV9BTk5PVEFUSU9OX0dST1VQOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkRFTEVURV9BTk5PVEFUSU9OX0dST1VQOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJERUxFVEVfQU5OT1RBVElPTl9HUk9VUFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLk1PVkVfVE9fU0VMRUNUSU9OOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJNT1ZFX1RPX1NFTEVDVElPTlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkdFVF9GSUxFX05BTUU6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVF9GSUxFX05BTUVcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBNZXNzYWdlcy5HRVRfUEFHRV9OQU1FOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVRfUEFHRV9OQU1FXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWVzc2FnZXMuU0VMRUNUSU9OX0NIQU5HRTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU0VMRUNUSU9OX0NIQU5HRVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLlVQREFURV9BTk5PVEFUSU9OX09SREVSOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVUERBVEVfQU5OT1RBVElPTl9PUkRFUlwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkdFVF9GUkFNRV9JTUFHRTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUX0ZSQU1FX0lNQUdFXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWVzc2FnZXMuQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT046XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNIRUNLX0NVUlJFTlRfU0VMRUNUSU9OXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTWVzc2FnZXMuU0FWRV9EQVRBOlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTQVZFX0RBVEFcIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBNZXNzYWdlcy5MT0FEX0RBVEE6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxPQURfREFUQVwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1lc3NhZ2VzLkNMRUFSX0FOTk9UQVRJT05fREFUQTpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0xFQVJfQU5OT1RBVElPTl9EQVRBXCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVua25vd24gbWVzc2FnZSB0eXBlXCIpO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9