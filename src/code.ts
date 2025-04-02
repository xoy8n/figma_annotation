figma.showUI(__html__, { width: 600, height: 600 });

// 주석/그룹 핸들러
import {
  handleCreateAnnotation,
  handleDeleteAnnotation,
  handleUpdateAnnotation,
  handleSyncAllAnnotations,
} from "./handlers/annotationHandlers";

// 그룹 핸들러
import {
  handleCreateAnnotationGroup,
  handleDeleteAnnotationGroup,
  handleUpdateAnnotationGroup,
  handleUpdateAnnotationOrder,
} from "./handlers/groupHandlers";

// 데이터 핸들러
import {
  handleSaveData,
  handleLoadData,
  handleClearAnnotationData,
  handleGetFileName,
  handleGetPageName,
} from "./handlers/dataHandlers";

// 네비게이션 핸들러
import {
  handleMoveToSelection,
  handleMoveToAnnotation,
  handleCheckCurrentSelection,
  handleGetFrameImage,
} from "./handlers/navigationHandlers";

// 메시지 핸들러 설정
figma.ui.onmessage = async (msg: { type: string; [key: string]: any }) => {
  const { type } = msg;

  try {
    switch (type) {
      case "CREATE_ANNOTATION_GROUP":
        await handleCreateAnnotationGroup(msg);
        break;
      case "CREATE_ANNOTATION":
        await handleCreateAnnotation(msg);
        break;
      case "UPDATE_ANNOTATION":
        await handleUpdateAnnotation(msg);
        break;
      case "UPDATE_ANNOTATION_GROUP":
        await handleUpdateAnnotationGroup(msg);
        break;
      case "DELETE_ANNOTATION":
        await handleDeleteAnnotation(msg);
        break;
      case "DELETE_ANNOTATION_GROUP":
        await handleDeleteAnnotationGroup(msg);
        break;
      case "SAVE_DATA":
        await handleSaveData(msg);
        break;
      case "LOAD_DATA":
        await handleLoadData(msg);
        break;
      case "CLEAR_ANNOTATION_DATA":
        await handleClearAnnotationData(msg);
        break;
      case "GET_FILE_NAME":
        handleGetFileName(msg);
        break;
      case "GET_PAGE_NAME":
        handleGetPageName(msg);
        break;
      case "MOVE_TO_SELECTION":
        await handleMoveToSelection(msg);
        break;
      case "MOVE_TO_ANNOTATION":
        await handleMoveToAnnotation(msg);
        break;
      case "CHECK_CURRENT_SELECTION":
        await handleCheckCurrentSelection(msg);
        break;
      case "UPDATE_ANNOTATION_ORDER":
        await handleUpdateAnnotationOrder(msg);
        break;
      case "GET_FRAME_IMAGE":
        await handleGetFrameImage(msg);
        break;
      case "SYNC_ALL_ANNOTATIONS":
        await handleSyncAllAnnotations(msg);
        break;
      default:
        console.log("Unhandled message type:", type);
    }
  } catch (error) {
    console.error(`Error handling message type ${type}:`, error);
  }
};
