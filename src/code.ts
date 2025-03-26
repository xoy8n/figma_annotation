import { Messages } from "./services/messageService";
import { createAnnotationGroup } from "./controllers/annotationController";

figma.showUI(__html__, { height: 700, width: 800 });

figma.ui.onmessage = async (msg) => {
  switch (msg.type) {
    case Messages.CREATE_ANNOTATION:
      console.log("CREATE_ANNOTATION");
      break;
    case Messages.UPDATE_ANNOTATION:
      console.log("UPDATE_ANNOTATION");
      break;
    case Messages.DELETE_ANNOTATION:
      console.log("DELETE_ANNOTATION");
      break;
    case Messages.CREATE_ANNOTATION_GROUP:
      console.log("CREATE_ANNOTATION_GROUP");
      break;
    case Messages.UPDATE_ANNOTATION_GROUP:
      console.log("UPDATE_ANNOTATION_GROUP");
      break;
    case Messages.DELETE_ANNOTATION_GROUP:
      console.log("DELETE_ANNOTATION_GROUP");
      break;
    case Messages.MOVE_TO_SELECTION:
      console.log("MOVE_TO_SELECTION");
      break;
    case Messages.GET_FILE_NAME:
      console.log("GET_FILE_NAME");
      break;
    case Messages.GET_PAGE_NAME:
      console.log("GET_PAGE_NAME");
      break;
    case Messages.SELECTION_CHANGE:
      console.log("SELECTION_CHANGE");
      break;
    case Messages.UPDATE_ANNOTATION_ORDER:
      console.log("UPDATE_ANNOTATION_ORDER");
      break;
    case Messages.GET_FRAME_IMAGE:
      console.log("GET_FRAME_IMAGE");
      break;
    case Messages.CHECK_CURRENT_SELECTION:
      console.log("CHECK_CURRENT_SELECTION");
      break;
    case Messages.SAVE_DATA:
      console.log("SAVE_DATA");
      break;
    case Messages.LOAD_DATA:
      console.log("LOAD_DATA");
      break;
    case Messages.CLEAR_ANNOTATION_DATA:
      console.log("CLEAR_ANNOTATION_DATA");
      break;
    default:
      console.log("Unknown message type");
  }
};
