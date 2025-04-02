import { sendResponse } from "../utils/messageUtils";
import {
  initAnnotationGroups,
  getAnnotationGroups,
} from "../services/annotationGroupService";

/**
 * SAVE_DATA 메시지 핸들러
 */
export async function handleSaveData(msg: any) {
  try {
    await figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
    sendResponse(msg.type, true);
  } catch (error) {
    sendResponse(msg.type, false, {}, String(error));
  }
}

/**
 * LOAD_DATA 메시지 핸들러
 */
export async function handleLoadData(msg: any) {
  try {
    const raw = figma.root.getPluginData(msg.key);
    const parsed = raw ? JSON.parse(raw) : [];
    console.log(parsed, "parsed");
    initAnnotationGroups(parsed);
    sendResponse(msg.type, true, { key: msg.key, data: parsed });
  } catch (error) {
    sendResponse(msg.type, false, {}, String(error));
  }
}

/**
 * CLEAR_ANNOTATION_DATA 메시지 핸들러
 */
export async function handleClearAnnotationData(msg: any) {
  await figma.root.setPluginData("annotationGroup", "[]");
  initAnnotationGroups([]);
  sendResponse(msg.type, true, {});
}

/**
 * GET_FILE_NAME 메시지 핸들러
 */
export function handleGetFileName(msg: any) {
  sendResponse(msg.type, true, { fileName: figma.root.name });
}

/**
 * GET_PAGE_NAME 메시지 핸들러
 */
export function handleGetPageName(msg: any) {
  const page = figma.root.findOne((n) => n.id === msg.pageId);
  sendResponse(msg.type, true, {
    pageId: msg.pageId,
    pageName: page?.name || "Unknown Page",
  });
}
