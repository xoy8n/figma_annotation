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
                console.log(parsed, "parsed");
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
            const { groupId, sourceIndex, destinationIndex } = msg;
            const frame = figma.getNodeById(groupId);
            if (frame && frame.type === "FRAME") {
                const children = [...frame.children];
                const target = children[sourceIndex];
                if (target) {
                    frame.insertChild(destinationIndex, target);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vd2VicGFjay1yZWFjdC8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL3dlYnBhY2stcmVhY3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXJlYWN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogNjAwLCBoZWlnaHQ6IDYwMCB9KTtcbmxldCBhbm5vdGF0aW9uR3JvdXBzID0gW107XG5maWdtYS51aS5vbm1lc3NhZ2UgPSAobXNnKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgY29uc3QgeyB0eXBlIH0gPSBtc2c7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJDUkVBVEVfQU5OT1RBVElPTl9HUk9VUFwiOiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF07XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRUb3BMZXZlbEZyYW1lKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IG5vZGU7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQgJiYgY3VycmVudC5wYXJlbnQgJiYgY3VycmVudC5wYXJlbnQudHlwZSAhPT0gXCJQQUdFXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gKGN1cnJlbnQgPT09IG51bGwgfHwgY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY3VycmVudC50eXBlKSA9PT0gXCJGUkFNRVwiID8gY3VycmVudCA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGlvbikge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogXCJQbGVhc2Ugc2VsZWN0IGEgbGF5ZXIgb24gdGhlIGNhbnZhcy5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0b3BGcmFtZSA9IGdldFRvcExldmVsRnJhbWUoc2VsZWN0aW9uKTtcbiAgICAgICAgICAgIGlmICghdG9wRnJhbWUpIHtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IFwiVG9wLWxldmVsIGZyYW1lIG5vdCBmb3VuZC5cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBuZXdHcm91cElkID0gdG9wRnJhbWUuaWQ7XG4gICAgICAgICAgICBjb25zdCBuZXdHcm91cE5hbWUgPSB0b3BGcmFtZS5uYW1lO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdHcm91cCA9IGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gbmV3R3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdHcm91cCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0Fubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBgYW5ub3RhdGlvbi0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZG9jXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nR3JvdXAuYW5ub3RhdGlvbnMucHVzaChuZXdBbm5vdGF0aW9uKTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiQ1JFQVRFX0FOTk9UQVRJT05cIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g8J+GlSDsg4gg6re466O5IOyDneyEsVxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEFubm90YXRpb24gPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGBhbm5vdGF0aW9uLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBtc2cuY29uZmlnLmRlc2NyaXB0aW9uIHx8IHsgdHlwZTogXCJkb2NcIiwgY29udGVudDogW10gfSwgLy8g7KCE64us65CcIOyEpOuqhSDsgqzsmqlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBuZXdHcm91cCA9IE9iamVjdC5hc3NpZ24oeyBpZDogbmV3R3JvdXBJZCwgbmFtZTogbmV3R3JvdXBOYW1lLCByZWxhdGVkUGFnZToge1xuICAgICAgICAgICAgICAgICAgICBpZDogZmlnbWEuY3VycmVudFBhZ2UuaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUsXG4gICAgICAgICAgICAgICAgfSwgYW5ub3RhdGlvbnM6IFtkZWZhdWx0QW5ub3RhdGlvbl0sIG9ic29sZXRlOiBmYWxzZSB9LCBtc2cuY29uZmlnKTtcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cHMucHVzaChuZXdHcm91cCk7XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoW3RvcEZyYW1lXSk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYW5ub3RhdGlvbnM6IGFubm90YXRpb25Hcm91cHMsXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRHcm91cDogbmV3R3JvdXBJZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiQ1JFQVRFX0FOTk9UQVRJT05cIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG1zZy5ncm91cElkKTtcbiAgICAgICAgICAgIGlmICghZ3JvdXApXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgbmV3QW5ub3RhdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBpZDogYGFubm90YXRpb24tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJkb2NcIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogW10sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBncm91cC5hbm5vdGF0aW9ucy5wdXNoKG5ld0Fubm90YXRpb24pO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGFubm90YXRpb25zOiBhbm5vdGF0aW9uR3JvdXBzLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTlwiOiB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gbXNnLmdyb3VwSWQpO1xuICAgICAgICAgICAgY29uc3QgYW5ub3RhdGlvbiA9IGdyb3VwID09PSBudWxsIHx8IGdyb3VwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBncm91cC5hbm5vdGF0aW9ucy5maW5kKChhKSA9PiBhLmlkID09PSBtc2cuYW5ub3RhdGlvbklkKTtcbiAgICAgICAgICAgIGlmIChhbm5vdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgYW5ub3RhdGlvblttc2cua2V5XSA9IG1zZy52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZTogeyByZXN1bHQ6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJVUERBVEVfQU5OT1RBVElPTl9HUk9VUFwiOiB7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGFubm90YXRpb25Hcm91cHMuZmluZCgoZykgPT4gZy5pZCA9PT0gbXNnLmdyb3VwSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICAgICAgZ3JvdXBbbXNnLmtleV0gPSBtc2cudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlIH0gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiREVMRVRFX0FOTk9UQVRJT05cIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXAgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbmQoKGcpID0+IGcuaWQgPT09IG1zZy5ncm91cElkKTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLmFubm90YXRpb25zID0gZ3JvdXAuYW5ub3RhdGlvbnMuZmlsdGVyKChhKSA9PiBhLmlkICE9PSBtc2cuYW5ub3RhdGlvbi5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHR5cGUsIG1lc3NhZ2U6IHsgcmVzdWx0OiB0cnVlIH0gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiREVMRVRFX0FOTk9UQVRJT05fR1JPVVBcIjpcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cHMgPSBhbm5vdGF0aW9uR3JvdXBzLmZpbHRlcigoZykgPT4gZy5pZCAhPT0gbXNnLmdyb3VwLmlkKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZTogeyByZXN1bHQ6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiU0FWRV9EQVRBXCI6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShtc2cua2V5LCBKU09OLnN0cmluZ2lmeShtc2cuZGF0YSkpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZTogeyByZXN1bHQ6IHRydWUgfSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogeyByZXN1bHQ6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IFN0cmluZyhlcnJvcikgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTE9BRF9EQVRBXCI6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhdyA9IGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShtc2cua2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSByYXcgPyBKU09OLnBhcnNlKHJhdykgOiBbXTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJzZWQsIFwicGFyc2VkXCIpO1xuICAgICAgICAgICAgICAgIGFubm90YXRpb25Hcm91cHMgPSBwYXJzZWQ7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB7IHJlc3VsdDogdHJ1ZSwga2V5OiBtc2cua2V5LCBkYXRhOiBwYXJzZWQgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogeyByZXN1bHQ6IGZhbHNlLCBlcnJvck1lc3NhZ2U6IFN0cmluZyhlcnJvcikgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQ0xFQVJfQU5OT1RBVElPTl9EQVRBXCI6XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJhbm5vdGF0aW9uR3JvdXBcIiwgXCJbXVwiKTtcbiAgICAgICAgICAgIGFubm90YXRpb25Hcm91cHMgPSBbXTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgdHlwZSwgbWVzc2FnZToge30gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVF9GSUxFX05BTUVcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHsgZmlsZU5hbWU6IGZpZ21hLnJvb3QubmFtZSB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIkdFVF9QQUdFX05BTUVcIjoge1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IGZpZ21hLnJvb3QuZmluZE9uZSgobikgPT4gbi5pZCA9PT0gbXNnLnBhZ2VJZCk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VJZDogbXNnLnBhZ2VJZCxcbiAgICAgICAgICAgICAgICAgICAgcGFnZU5hbWU6IChwYWdlID09PSBudWxsIHx8IHBhZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBhZ2UubmFtZSkgfHwgXCJVbmtub3duIFBhZ2VcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiTU9WRV9UT19TRUxFQ1RJT05cIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICAgICAgaWYgKGdyb3VwTm9kZSkge1xuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhbZ3JvdXBOb2RlXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiQ0hFQ0tfQ1VSUkVOVF9TRUxFQ1RJT05cIjoge1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBOb2RlID0gZmlnbWEuZ2V0Tm9kZUJ5SWQobXNnLmdyb3VwSWQpO1xuICAgICAgICAgICAgY29uc3QgZXhpc3RzID0gISFncm91cE5vZGU7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdDogZXhpc3RzLFxuICAgICAgICAgICAgICAgICAgICBncm91cElkOiBtc2cuZ3JvdXBJZCxcbiAgICAgICAgICAgICAgICAgICAgb2Jzb2xldGU6ICFleGlzdHMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBcIlVQREFURV9BTk5PVEFUSU9OX09SREVSXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IHsgZ3JvdXBJZCwgc291cmNlSW5kZXgsIGRlc3RpbmF0aW9uSW5kZXggfSA9IG1zZztcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lID0gZmlnbWEuZ2V0Tm9kZUJ5SWQoZ3JvdXBJZCk7XG4gICAgICAgICAgICBpZiAoZnJhbWUgJiYgZnJhbWUudHlwZSA9PT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBbLi4uZnJhbWUuY2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGNoaWxkcmVuW3NvdXJjZUluZGV4XTtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZyYW1lLmluc2VydENoaWxkKGRlc3RpbmF0aW9uSW5kZXgsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogeyByZXN1bHQ6IHRydWUgfSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVW5oYW5kbGVkIG1lc3NhZ2UgdHlwZTpcIiwgbXNnLnR5cGUpO1xuICAgIH1cbn0pO1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=