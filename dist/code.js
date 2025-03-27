/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 600, height: 600 });
let annotationGroups = [];
figma.ui.onmessage = (msg) => __awaiter(this, void 0, void 0, function* () {
    const { type } = msg;
    switch (type) {
        case "CREATE_ANNOTATION_GROUP": {
            const selection = figma.currentPage.selection[0];
            function getTopLevelFrame(node) {
                let current = node;
                while (current && current.parent && current.parent.type !== "PAGE") {
                    current = current.parent;
                }
                return (current === null || current === void 0 ? void 0 : current.type) === "FRAME" ? current : null;
            }
            if (!selection) {
                figma.ui.postMessage({
                    type,
                    message: {
                        result: false,
                        errorMessage: "Please select a layer on the canvas.",
                    },
                });
                return;
            }
            const topFrame = getTopLevelFrame(selection);
            if (!topFrame) {
                figma.ui.postMessage({
                    type,
                    message: {
                        result: false,
                        errorMessage: "Top-level frame not found.",
                    },
                });
                return;
            }
            const newGroupId = topFrame.id;
            const newGroupName = topFrame.name;
            const existingGroup = annotationGroups.find((g) => g.id === newGroupId);
            if (existingGroup) {
                const newAnnotation = {
                    id: `annotation-${Date.now()}`,
                    description: {
                        type: "doc",
                        content: [],
                    },
                };
                existingGroup.annotations.push(newAnnotation);
                figma.ui.postMessage({
                    type: "CREATE_ANNOTATION",
                    message: {
                        result: true,
                        annotations: annotationGroups,
                    },
                });
                return;
            }
            // 🆕 새 그룹 생성
            const defaultAnnotation = {
                id: `annotation-${Date.now()}`,
                description: msg.config.description || { type: "doc", content: [] }, // 전달된 설명 사용
            };
            const newGroup = Object.assign({ id: newGroupId, name: newGroupName, relatedPage: {
                    id: figma.currentPage.id,
                    name: figma.currentPage.name,
                }, annotations: [defaultAnnotation], obsolete: false }, msg.config);
            annotationGroups.push(newGroup);
            figma.viewport.scrollAndZoomIntoView([topFrame]);
            figma.ui.postMessage({
                type,
                message: {
                    result: true,
                    annotations: annotationGroups,
                    updatedGroup: newGroupId,
                },
            });
            break;
        }
        case "CREATE_ANNOTATION": {
            const group = annotationGroups.find((g) => g.id === msg.groupId);
            if (!group)
                return;
            const newAnnotation = {
                id: `annotation-${Date.now()}`,
                description: {
                    type: "doc",
                    content: [],
                },
            };
            group.annotations.push(newAnnotation);
            figma.ui.postMessage({
                type,
                message: {
                    result: true,
                    annotations: annotationGroups,
                },
            });
            break;
        }
        case "UPDATE_ANNOTATION": {
            const group = annotationGroups.find((g) => g.id === msg.groupId);
            const annotation = group === null || group === void 0 ? void 0 : group.annotations.find((a) => a.id === msg.annotationId);
            if (annotation) {
                annotation[msg.key] = msg.value;
            }
            figma.ui.postMessage({ type, message: { result: true } });
            break;
        }
        case "UPDATE_ANNOTATION_GROUP": {
            const group = annotationGroups.find((g) => g.id === msg.groupId);
            if (group) {
                group[msg.key] = msg.value;
            }
            figma.ui.postMessage({ type, message: { result: true } });
            break;
        }
        case "DELETE_ANNOTATION": {
            const group = annotationGroups.find((g) => g.id === msg.groupId);
            if (group) {
                group.annotations = group.annotations.filter((a) => a.id !== msg.annotation.id);
            }
            figma.ui.postMessage({ type, message: { result: true } });
            break;
        }
        case "DELETE_ANNOTATION_GROUP":
            annotationGroups = annotationGroups.filter((g) => g.id !== msg.group.id);
            figma.ui.postMessage({ type, message: { result: true } });
            break;
        case "SAVE_DATA":
            try {
                yield figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
                figma.ui.postMessage({ type, message: { result: true } });
            }
            catch (error) {
                figma.ui.postMessage({
                    type,
                    message: { result: false, errorMessage: String(error) },
                });
            }
            break;
        case "LOAD_DATA":
            try {
                const raw = figma.root.getPluginData(msg.key);
                const parsed = raw ? JSON.parse(raw) : [];
                annotationGroups = parsed;
                figma.ui.postMessage({
                    type,
                    message: { result: true, key: msg.key, data: parsed },
                });
            }
            catch (error) {
                figma.ui.postMessage({
                    type,
                    message: { result: false, errorMessage: String(error) },
                });
            }
            break;
        case "CLEAR_ANNOTATION_DATA":
            yield figma.root.setPluginData("annotationGroup", "[]");
            annotationGroups = [];
            figma.ui.postMessage({ type, message: {} });
            break;
        case "GET_FILE_NAME":
            figma.ui.postMessage({
                type,
                message: { fileName: figma.root.name },
            });
            break;
        case "GET_PAGE_NAME": {
            const page = figma.root.findOne((n) => n.id === msg.pageId);
            figma.ui.postMessage({
                type,
                message: {
                    pageId: msg.pageId,
                    pageName: (page === null || page === void 0 ? void 0 : page.name) || "Unknown Page",
                },
            });
            break;
        }
        case "MOVE_TO_SELECTION": {
            const groupNode = figma.getNodeById(msg.groupId);
            if (groupNode) {
                figma.viewport.scrollAndZoomIntoView([groupNode]);
            }
            break;
        }
        case "CHECK_CURRENT_SELECTION": {
            const groupNode = figma.getNodeById(msg.groupId);
            const exists = !!groupNode;
            figma.ui.postMessage({
                type,
                message: {
                    result: exists,
                    groupId: msg.groupId,
                    obsolete: !exists,
                },
            });
            break;
        }
        case "UPDATE_ANNOTATION_ORDER": {
            const group = annotationGroups.find((g) => g.id === msg.groupId);
            if (group) {
                const arr = group.annotations;
                const movedItem = arr.splice(msg.sourceIndex - 1, 1)[0];
                arr.splice(msg.destinationIndex - 1, 0, movedItem);
            }
            figma.ui.postMessage({
                type,
                message: { result: true },
            });
            break;
        }
        default:
            console.log("Unhandled message type:", msg.type);
    }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1yZWFjdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDYwMCwgaGVpZ2h0OiA2MDAgfSk7XG5sZXQgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIGNvbnN0IHsgdHlwZSB9ID0gbXNnO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05fR1JPVVBcIjoge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0VG9wTGV2ZWxGcmFtZShub2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBub2RlO1xuICAgICAgICAgICAgICAgIHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQucGFyZW50ICYmIGN1cnJlbnQucGFyZW50LnR5cGUgIT09IFwiUEFHRVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIChjdXJyZW50ID09PSBudWxsIHx8IGN1cnJlbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGN1cnJlbnQudHlwZSkgPT09IFwiRlJBTUVcIiA/IGN1cnJlbnQgOiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiUGxlYXNlIHNlbGVjdCBhIGxheWVyIG9uIHRoZSBjYW52YXMuXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdG9wRnJhbWUgPSBnZXRUb3BMZXZlbEZyYW1lKHNlbGVjdGlvbik7XG4gICAgICAgICAgICBpZiAoIXRvcEZyYW1lKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBcIlRvcC1sZXZlbCBmcmFtZSBub3QgZm91bmQuXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBJZCA9IHRvcEZyYW1lLmlkO1xuICAgICAgICAgICAgY29uc3QgbmV3R3JvdXBOYW1lID0gdG9wRnJhbWUubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nR3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG5ld0dyb3VwSWQpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nR3JvdXApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImRvY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0dyb3VwLmFubm90YXRpb25zLnB1c2gobmV3QW5ub3RhdGlvbik7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIkNSRUFURV9BTk5PVEFUSU9OXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9uR3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIPCfhpUg7IOIIOq3uOujuSDsg53shLFcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBbm5vdGF0aW9uID0ge1xuICAgICAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbXNnLmNvbmZpZy5kZXNjcmlwdGlvbiB8fCB7IHR5cGU6IFwiZG9jXCIsIGNvbnRlbnQ6IFtdIH0sIC8vIOyghOuLrOuQnCDshKTrqoUg7IKs7JqpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgbmV3R3JvdXAgPSBPYmplY3QuYXNzaWduKHsgaWQ6IG5ld0dyb3VwSWQsIG5hbWU6IG5ld0dyb3VwTmFtZSwgcmVsYXRlZFBhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGZpZ21hLmN1cnJlbnRQYWdlLmlkLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWdtYS5jdXJyZW50UGFnZS5uYW1lLFxuICAgICAgICAgICAgICAgIH0sIGFubm90YXRpb25zOiBbZGVmYXVsdEFubm90YXRpb25dLCBvYnNvbGV0ZTogZmFsc2UgfSwgbXNnLmNvbmZpZyk7XG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzLnB1c2gobmV3R3JvdXApO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFt0b3BGcmFtZV0pO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9uR3JvdXBzLFxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVkR3JvdXA6IG5ld0dyb3VwSWQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkNSRUFURV9BTk5PVEFUSU9OXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYW5ub3RhdGlvbkdyb3Vwcy5maW5kKChnKSA9PiBnLmlkID09PSBtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoIWdyb3VwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFtdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZ3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBhbm5vdGF0aW9uczogYW5ub3RhdGlvbkdyb3VwcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05cIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG1zZy5ncm91cElkKTtcbiAgICAgICAgICAgIGNvbnN0IGFubm90YXRpb24gPSBncm91cCA9PT0gbnVsbCB8fCBncm91cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ3JvdXAuYW5ub3RhdGlvbnMuZmluZCgoYSkgPT4gYS5pZCA9PT0gbXNnLmFubm90YXRpb25JZCk7XG4gICAgICAgICAgICBpZiAoYW5ub3RhdGlvbikge1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25bbXNnLmtleV0gPSBtc2cudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlIH0gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fR1JPVVBcIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG1zZy5ncm91cElkKTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwW21zZy5rZXldID0gbXNnLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlLCBtZXNzYWdlOiB7IHJlc3VsdDogdHJ1ZSB9IH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IGdyb3VwID0gYW5ub3RhdGlvbkdyb3Vwcy5maW5kKChnKSA9PiBnLmlkID09PSBtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXApIHtcbiAgICAgICAgICAgICAgICBncm91cC5hbm5vdGF0aW9ucyA9IGdyb3VwLmFubm90YXRpb25zLmZpbHRlcigoYSkgPT4gYS5pZCAhPT0gbXNnLmFubm90YXRpb24uaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlLCBtZXNzYWdlOiB7IHJlc3VsdDogdHJ1ZSB9IH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIkRFTEVURV9BTk5PVEFUSU9OX0dST1VQXCI6XG4gICAgICAgICAgICBhbm5vdGF0aW9uR3JvdXBzID0gYW5ub3RhdGlvbkdyb3Vwcy5maWx0ZXIoKGcpID0+IGcuaWQgIT09IG1zZy5ncm91cC5pZCk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlIH0gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlNBVkVfREFUQVwiOlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEobXNnLmtleSwgSlNPTi5zdHJpbmdpZnkobXNnLmRhdGEpKTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlIH0gfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHsgcmVzdWx0OiBmYWxzZSwgZXJyb3JNZXNzYWdlOiBTdHJpbmcoZXJyb3IpIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkxPQURfREFUQVwiOlxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByYXcgPSBmaWdtYS5yb290LmdldFBsdWdpbkRhdGEobXNnLmtleSk7XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gcmF3ID8gSlNPTi5wYXJzZShyYXcpIDogW107XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwcyA9IHBhcnNlZDtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlLCBrZXk6IG1zZy5rZXksIGRhdGE6IHBhcnNlZCB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7IHJlc3VsdDogZmFsc2UsIGVycm9yTWVzc2FnZTogU3RyaW5nKGVycm9yKSB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJDTEVBUl9BTk5PVEFUSU9OX0RBVEFcIjpcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcImFubm90YXRpb25Hcm91cFwiLCBcIltdXCIpO1xuICAgICAgICAgICAgYW5ub3RhdGlvbkdyb3VwcyA9IFtdO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyB0eXBlLCBtZXNzYWdlOiB7fSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR0VUX0ZJTEVfTkFNRVwiOlxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogeyBmaWxlTmFtZTogZmlnbWEucm9vdC5uYW1lIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiR0VUX1BBR0VfTkFNRVwiOiB7XG4gICAgICAgICAgICBjb25zdCBwYWdlID0gZmlnbWEucm9vdC5maW5kT25lKChuKSA9PiBuLmlkID09PSBtc2cucGFnZUlkKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZUlkOiBtc2cucGFnZUlkLFxuICAgICAgICAgICAgICAgICAgICBwYWdlTmFtZTogKHBhZ2UgPT09IG51bGwgfHwgcGFnZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFnZS5uYW1lKSB8fCBcIlVua25vd24gUGFnZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJNT1ZFX1RPX1NFTEVDVElPTlwiOiB7XG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZ3JvdXBOb2RlKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KFtncm91cE5vZGVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJDSEVDS19DVVJSRU5UX1NFTEVDVElPTlwiOiB7XG4gICAgICAgICAgICBjb25zdCBncm91cE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuZ3JvdXBJZCk7XG4gICAgICAgICAgICBjb25zdCBleGlzdHMgPSAhIWdyb3VwTm9kZTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBleGlzdHMsXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSWQ6IG1zZy5ncm91cElkLFxuICAgICAgICAgICAgICAgICAgICBvYnNvbGV0ZTogIWV4aXN0cyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiVVBEQVRFX0FOTk9UQVRJT05fT1JERVJcIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG1zZy5ncm91cElkKTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyciA9IGdyb3VwLmFubm90YXRpb25zO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVkSXRlbSA9IGFyci5zcGxpY2UobXNnLnNvdXJjZUluZGV4IC0gMSwgMSlbMF07XG4gICAgICAgICAgICAgICAgYXJyLnNwbGljZShtc2cuZGVzdGluYXRpb25JbmRleCAtIDEsIDAsIG1vdmVkSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7IHJlc3VsdDogdHJ1ZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmhhbmRsZWQgbWVzc2FnZSB0eXBlOlwiLCBtc2cudHlwZSk7XG4gICAgfVxufSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL2NvZGUudHNcIl0oKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==