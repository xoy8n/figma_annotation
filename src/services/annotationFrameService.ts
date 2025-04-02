import { getCardWidth } from "../utils/sizeUtils";
import { findGroup } from "./annotationGroupService";
import { findGroupFrame } from "../utils/nodeUtils";
import { createTitleGroup } from "../canvas/annotationElements";

/**
 * 그룹 프레임을 찾거나 생성합니다.
 */
export async function findOrCreateGroupFrame(
  group: any
): Promise<FrameNode | null> {
  // 1. 기존 그룹 프레임 찾기 시도
  let groupFrame = findGroupFrame(group.id, group.groupFrameId);

  // 2. 찾지 못한 경우 새로 생성
  if (!groupFrame) {
    const topFrame = figma.getNodeById(group.id) as FrameNode;
    if (!topFrame) return null;

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

    // 레이아웃 모드 설정 - 세로 배치
    groupFrame.layoutMode = "VERTICAL";

    // 상위 프레임에 추가
    if (topFrame.parent) {
      topFrame.appendChild(groupFrame);
    } else {
      // 부모가 없으면 현재 페이지에 추가
      figma.currentPage.appendChild(groupFrame);
    }

    // 그룹 정보 업데이트
    group.groupFrameId = groupFrame.id;
  }

  return groupFrame;
}

/**
 * 새 주석 그룹 프레임을 생성합니다.
 */
export async function createAnnotationGroupFrame(
  topFrame: FrameNode,
  cardWidth: number
): Promise<FrameNode> {
  const annotationGroupFrame = figma.createFrame();
  annotationGroupFrame.name = "ANNOTATION_GROUP";
  annotationGroupFrame.setPluginData("type", "group");
  annotationGroupFrame.setPluginData("parent_frame_id", topFrame.id);

  // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
  annotationGroupFrame.x = topFrame.width - cardWidth - 20;
  annotationGroupFrame.y = 20;
  annotationGroupFrame.resize(cardWidth, 300);
  annotationGroupFrame.fills = []; // 배경색 제거

  // 레이아웃 모드 설정 - 세로 배치
  annotationGroupFrame.layoutMode = "VERTICAL";
  // annotationGroupFrame.paddingTop = 10;
  // annotationGroupFrame.paddingBottom = 10;
  // annotationGroupFrame.paddingLeft = 10;
  // annotationGroupFrame.paddingRight = 10;

  // 상위 프레임에 추가
  topFrame.appendChild(annotationGroupFrame);

  // Title 그룹 생성 및 추가
  const availableWidth =
    cardWidth -
    (annotationGroupFrame.paddingLeft + annotationGroupFrame.paddingRight);
  const titleGroup = await createTitleGroup(
    topFrame.id,
    availableWidth,
    "Description"
  );
  annotationGroupFrame.appendChild(titleGroup);

  return annotationGroupFrame;
}
