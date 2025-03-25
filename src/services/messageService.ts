export var Messages;
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
export const sendMessage = (type, param = {}) => {
  parent.postMessage({ pluginMessage: Object.assign({ type }, param) }, "*");
};
