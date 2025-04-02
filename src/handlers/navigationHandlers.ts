import { findGroup } from "../services/annotationGroupService";
import { sendResponse } from "../utils/messageUtils";
import { getTopLevelFrame } from "../utils/nodeUtils";

/**
 * MOVE_TO_SELECTION 메시지 핸들러
 */
export async function handleMoveToSelection(msg: any) {
  // 페이지 ID가 제공된 경우 먼저 해당 페이지로 이동
  if (msg.pageId) {
    const pageNode = figma.root.findOne((node) => node.id === msg.pageId);
    if (pageNode && pageNode.type === "PAGE") {
      figma.currentPage = pageNode as PageNode;
    }
  }

  // groupNode를 찾은 후 해당 노드의 최상위 프레임으로 이동
  const groupNode = figma.getNodeById(msg.groupId);
  if (groupNode && groupNode.type === "FRAME") {
    // 최상위 프레임 찾기
    const topFrame = getTopLevelFrame(groupNode as SceneNode);
    if (topFrame) {
      figma.viewport.scrollAndZoomIntoView([topFrame]);
    } else {
      // 최상위 프레임을 찾지 못한 경우 그룹 노드로 이동 (기존 동작)
      figma.viewport.scrollAndZoomIntoView([groupNode]);
    }
  } else if (groupNode) {
    // 프레임이 아닌 노드인 경우도 최상위 프레임 찾기 시도
    const topFrame = getTopLevelFrame(groupNode as SceneNode);
    if (topFrame) {
      figma.viewport.scrollAndZoomIntoView([topFrame]);
    } else {
      // 최상위 프레임을 찾지 못한 경우 그룹 노드로 이동 (기존 동작)
      figma.viewport.scrollAndZoomIntoView([groupNode]);
    }
  }
}

/**
 * MOVE_TO_ANNOTATION 메시지 핸들러
 */
export async function handleMoveToAnnotation(msg: any) {
  // 페이지 ID가 제공된 경우 먼저 해당 페이지로 이동
  if (msg.pageId) {
    const pageNode = figma.root.findOne((node) => node.id === msg.pageId);
    if (pageNode && pageNode.type === "PAGE") {
      figma.currentPage = pageNode as PageNode;
    }
  }

  // 해당 주석의 배지 찾기
  const badges = figma.currentPage.findAll(
    (node) =>
      node.getPluginData("type") === "annotation_badge" &&
      node.getPluginData("annotationId") === msg.annotationId
  );

  if (badges.length > 0) {
    // 배지를 뷰포트로 가져오기
    figma.viewport.scrollAndZoomIntoView(badges);
  } else {
    // 배지를 찾지 못한 경우 그룹 프레임으로 이동 (대체 옵션)
    const groupNode = figma.getNodeById(msg.groupId);
    if (groupNode) {
      figma.viewport.scrollAndZoomIntoView([groupNode]);
    }
  }
}

/**
 * CHECK_CURRENT_SELECTION 메시지 핸들러
 */
export async function handleCheckCurrentSelection(msg: any) {
  const groupNode = figma.getNodeById(msg.groupId);
  const exists = !!groupNode;

  return sendResponse(msg.type, true, {
    result: exists,
    groupId: msg.groupId,
    obsolete: !exists,
  });
}

/**
 * GET_FRAME_IMAGE 메시지 핸들러
 */
export async function handleGetFrameImage(msg: any) {
  const frameImages = [];
  const groups = findGroup(null);

  if (!groups || !Array.isArray(groups)) {
    return sendResponse(msg.type, true, { frameImages: [] });
  }

  for (const group of groups) {
    const frameNode = figma.getNodeById(group.id);
    if (frameNode && frameNode.type === "FRAME") {
      const image = await frameNode.exportAsync({
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
  } else {
    return sendResponse(msg.type, true, { frameImages: [] });
  }
}
