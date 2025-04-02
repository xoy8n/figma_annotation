import {
  findGroup,
  addAnnotationGroup,
  removeAnnotationGroup,
  updateAnnotationGroup,
  getAnnotationGroups,
} from "../services/annotationGroupService";
import { sendResponse } from "../utils/messageUtils";
import { getTopLevelFrame, findGroupFrame } from "../utils/nodeUtils";
import { createAnnotationGroupFrame } from "../services/annotationFrameService";
import { getCardWidth } from "../utils/sizeUtils";
import {
  createAnnotationComponents,
  createAnnotationBadge,
  removeAnnotationBadge,
} from "../canvas/annotationElements";
import {
  updateGroupFrameColor,
  updateGroupFrameSize,
} from "../utils/frameUtils";
import { updateAnnotationOrder } from "../services/annotationGroupService";
import {
  updateAnnotationIndices,
  updateBadgeIndices,
} from "../utils/updateUtils";

/**
 * CREATE_ANNOTATION_GROUP 메시지 핸들러
 */
export async function handleCreateAnnotationGroup(msg: any) {
  const selection = figma.currentPage.selection[0];

  if (!selection) {
    return sendResponse(
      msg.type,
      false,
      {},
      "Please select a layer on the canvas."
    );
  }

  const topFrame = getTopLevelFrame(selection);

  if (!topFrame) {
    return sendResponse(msg.type, false, {}, "Top-level frame not found.");
  }

  const newGroupId = topFrame.id;
  let newGroupName = topFrame.name;

  const existingGroup = findGroup(newGroupId);

  // ANNOTATION_GROUP 생성
  let annotationGroupFrame: FrameNode;

  if (existingGroup) {
    // 기존 그룹 프레임 찾기
    const existingGroupFrame = topFrame.findOne(
      (node) => node.type === "FRAME" && node.getPluginData("type") === "group"
    ) as FrameNode;

    if (existingGroupFrame) {
      annotationGroupFrame = existingGroupFrame;
    } else {
      // 예상치 못하게 그룹 프레임이 없다면 새로 생성
      const cardWidth = getCardWidth(existingGroup.cardWidth);
      annotationGroupFrame = await createAnnotationGroupFrame(
        topFrame,
        cardWidth
      );
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
    const { frame: annotationFrame } = await createAnnotationComponents(
      newAnnotation.id,
      existingGroup.annotations.length,
      existingGroup.color,
      existingGroup.size,
      existingGroup.cardWidth,
      newAnnotation.description
    );

    // 주석 프레임을 그룹 프레임에 추가
    annotationGroupFrame.appendChild(annotationFrame);

    // 선택된 노드에 배지 생성
    await createAnnotationBadge(
      selection,
      existingGroup.annotations.length,
      newAnnotation.id,
      existingGroup.color
    );

    return sendResponse(msg.type, true, {
      annotations: getAnnotationGroups(),
      updatedGroup: newGroupId,
    });
  }

  // 🆕 새 그룹 생성
  const cardWidth = getCardWidth(msg.config?.cardWidth);
  annotationGroupFrame = await createAnnotationGroupFrame(topFrame, cardWidth);

  // 기본 주석 생성
  const defaultAnnotation = {
    id: `annotation-${Date.now()}`,
    description: msg.config?.description || {
      type: "doc",
      content: [],
    },
  };

  // 그룹에 pluginData 설정
  topFrame.setPluginData("type", "frame");
  topFrame.setPluginData("has_annotation_group", "true");
  annotationGroupFrame.setPluginData("group_id", defaultAnnotation.id);

  const newGroup = {
    id: newGroupId,
    name: newGroupName,
    relatedPage: {
      id: figma.currentPage.id,
      name: figma.currentPage.name,
    },
    annotations: [defaultAnnotation],
    obsolete: false,
    groupFrameId: annotationGroupFrame.id,
    ...msg.config,
  };

  addAnnotationGroup(newGroup);

  // 주석 UI 컴포넌트 생성
  const { frame: annotationFrame } = await createAnnotationComponents(
    defaultAnnotation.id,
    1,
    msg.config?.color,
    msg.config?.size,
    msg.config?.cardWidth,
    defaultAnnotation.description
  );

  // 주석 프레임을 그룹 프레임에 추가
  annotationGroupFrame.appendChild(annotationFrame);

  // 선택된 노드에 배지 생성
  await createAnnotationBadge(
    selection,
    1,
    defaultAnnotation.id,
    msg.config?.color
  );

  return sendResponse(msg.type, true, {
    annotations: getAnnotationGroups(),
    updatedGroup: newGroupId,
  });
}

/**
 * DELETE_ANNOTATION_GROUP 메시지 핸들러
 */
export async function handleDeleteAnnotationGroup(msg: any) {
  const groupToDelete = findGroup(msg.group.id);
  if (!groupToDelete) return sendResponse(msg.type, false);

  if (groupToDelete.groupFrameId) {
    const groupFrame = figma.getNodeById(
      groupToDelete.groupFrameId
    ) as FrameNode;
    if (groupFrame && groupFrame.type === "FRAME") {
      // 그룹에 속한 모든 주석의 배지 삭제
      for (const annotation of groupToDelete.annotations) {
        await removeAnnotationBadge(annotation.id, msg.group.id);
      }

      // 타이틀 컨테이너 찾기 및 삭제 (명시적으로 처리)
      const titleContainer = groupFrame.findOne(
        (node) =>
          node.type === "FRAME" &&
          node.getPluginData("type") === "title_container"
      );

      if (titleContainer) {
        titleContainer.remove();
      }

      // 그룹 프레임 삭제
      groupFrame.remove();
    }
  }

  // 메모리에서 그룹 제거
  removeAnnotationGroup(msg.group.id);

  return sendResponse(msg.type, true);
}

/**
 * UPDATE_ANNOTATION_GROUP 메시지 핸들러
 */
export async function handleUpdateAnnotationGroup(msg: any) {
  const group = findGroup(msg.groupId);
  if (!group) return sendResponse(msg.type, false);

  // 메모리 상태 업데이트
  updateAnnotationGroup(msg.groupId, msg.key, msg.value);

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
        updateGroupFrameColor(groupFrame as FrameNode, colorValue);
      }

      // 크기 업데이트
      if (msg.key === "size" || msg.key === "cardWidth") {
        await updateGroupFrameSize(groupFrame as FrameNode, msg.key, msg.value);
      }
    }
  }

  return sendResponse(msg.type, true);
}

/**
 * UPDATE_ANNOTATION_ORDER 메시지 핸들러
 */
export async function handleUpdateAnnotationOrder(msg: any) {
  const { groupId, sourceIndex, destinationIndex } = msg;

  // 메모리상의 주석 순서 업데이트
  const success = updateAnnotationOrder(groupId, sourceIndex, destinationIndex);

  if (!success) {
    return sendResponse(msg.type, false);
  }

  const group = findGroup(groupId);
  // Figma 캔버스 상의 주석 순서 업데이트
  const groupFrame = findGroupFrame(group.id, group.groupFrameId);

  if (!groupFrame || groupFrame.type !== "FRAME") {
    return sendResponse(msg.type, false);
  }

  // 모든 자식 요소 중 annotationFrame만 필터링
  const titleContainer = groupFrame.findOne(
    (node) =>
      node.type === "FRAME" && node.getPluginData("type") === "title_container"
  ) as FrameNode;

  const annotationFrames = groupFrame.children.filter(
    (node) =>
      node.type === "FRAME" && node.getPluginData("type") === "annotation"
  ) as FrameNode[];

  // 메모리의 주석 순서에 맞게 annotationFrame들을 재정렬
  if (annotationFrames.length === group.annotations.length) {
    // 각 주석에 해당하는 프레임 찾아서 순서대로 재배치
    group.annotations.forEach((annotation, index) => {
      const annotationNode = annotationFrames.find(
        (frame) => frame.getPluginData("annotationId") === annotation.id
      );

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
    await updateAnnotationIndices(groupFrame);

    // 배지 인덱스도 업데이트
    await updateBadgeIndices(group.id);
  }

  return sendResponse(msg.type, true);
}
