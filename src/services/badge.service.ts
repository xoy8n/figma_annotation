import { hexToRgb } from "../utils/color.util";
import { frameBadges } from "../models/annotation.model";

// 프레임에 뱃지 추가 함수 - 항상 최상위 프레임을 기준으로 생성
export function createBadgeOnFrame(
  frameNode: FrameNode,
  annotationNumber: number,
  color: string
): FrameNode {
  // 최상위 프레임 찾기
  let rootFrameNode = frameNode;
  let currentNode: BaseNode = frameNode;

  // 부모 체인을 끝까지 올라가며 가장 상위의 프레임 찾기
  while (currentNode.parent) {
    if (currentNode.parent.type === "FRAME") {
      rootFrameNode = currentNode.parent as FrameNode;
    }
    currentNode = currentNode.parent;
  }

  // 뱃지 컨테이너 생성
  const badgeContainer = figma.createFrame();
  badgeContainer.name = `Badge ${annotationNumber}`;
  badgeContainer.layoutMode = "NONE";
  badgeContainer.resize(24, 24);
  badgeContainer.fills = [];

  // 선택된 노드의 절대 위치를 계산
  const selectedNode = figma.currentPage.selection[0];
  let nodeX = 0;
  let nodeY = 0;

  if (selectedNode) {
    // 선택된 노드의 절대 위치 계산
    nodeX = selectedNode.absoluteTransform[0][2];
    nodeY = selectedNode.absoluteTransform[1][2];

    // 최상위 프레임 기준으로 상대 위치 계산
    const rootAbsoluteX = rootFrameNode.absoluteTransform[0][2];
    const rootAbsoluteY = rootFrameNode.absoluteTransform[1][2];

    // 뱃지 위치 설정 (선택된 레이어의 위치에 맞게 조정)
    badgeContainer.x = nodeX - rootAbsoluteX + 10;
    badgeContainer.y = nodeY - rootAbsoluteY + 10;
  } else {
    // selectedNode가 없는 경우 프레임의 좌상단에 배치
    badgeContainer.x = 10;
    badgeContainer.y = 10;
  }

  // 뱃지 원형 배경 생성
  const badgeCircle = figma.createEllipse();
  badgeCircle.name = `BadgeCircle`;
  badgeCircle.resize(24, 24);

  // 색상 설정 적용
  const colorValues = hexToRgb(color);
  badgeCircle.fills = [
    {
      type: "SOLID",
      color: {
        r: colorValues.r / 255,
        g: colorValues.g / 255,
        b: colorValues.b / 255,
      },
    },
  ];

  // 뱃지 텍스트 생성
  const badgeText = figma.createText();
  badgeText.characters = annotationNumber.toString();
  badgeText.fontSize = 12;
  badgeText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }];
  badgeText.textAlignHorizontal = "CENTER";

  // 뱃지 컨테이너에 원형과 텍스트 추가
  badgeContainer.appendChild(badgeCircle);
  badgeContainer.appendChild(badgeText);

  // 원과 텍스트의 위치 설정
  badgeCircle.x = 0;
  badgeCircle.y = 0;

  // 숫자에 따라 위치 조정
  if (annotationNumber < 10) {
    badgeText.x = 8.5;
    badgeText.y = 6;
  } else if (annotationNumber < 100) {
    badgeText.x = 4.5;
    badgeText.y = 6;
  } else {
    badgeText.fontSize = 10;
    badgeText.x = 2;
    badgeText.y = 7;
  }

  // 최상위 프레임에 뱃지 추가
  rootFrameNode.appendChild(badgeContainer);

  // 프레임에 있는 다른 뱃지들의 위치 조정
  const frameId = rootFrameNode.id; // 최상위 프레임 ID 사용
  if (!frameBadges[frameId]) {
    frameBadges[frameId] = {};
  }

  // 이미 존재하는 뱃지 개수 확인하고 위치 조정
  const badgeCount = Object.keys(frameBadges[frameId]).length;
  if (badgeCount > 0) {
    if (selectedNode) {
      // 선택된 노드 기준으로 위치 계산
      const rootAbsoluteX = rootFrameNode.absoluteTransform[0][2];
      const nodeX = selectedNode.absoluteTransform[0][2];

      // 기존 뱃지 옆에 간격을 두고 배치
      badgeContainer.x = nodeX - rootAbsoluteX + 10 + badgeCount * 28;
    } else {
      badgeContainer.x = 10 + badgeCount * 28;
    }
  }

  // 뱃지 맵에 저장 (최상위 프레임 ID 사용)
  frameBadges[frameId][annotationNumber] = badgeContainer;

  return badgeContainer;
}

export function deleteBadgeOnFrame(
  frameNode: FrameNode,
  annotationNumber: number
) {
  const frameId = frameNode.id;

  // 프레임에 해당 뱃지가 있는지 확인
  if (frameBadges[frameId] && frameBadges[frameId][annotationNumber]) {
    const badgeContainer = frameBadges[frameId][annotationNumber];

    // 뱃지 존재 여부 확인 (이미 삭제됐을 수도 있음)
    const isNodeInDocument = figma.getNodeById(badgeContainer.id);

    if (isNodeInDocument) {
      // 뱃지 삭제
      badgeContainer.remove();
      console.log(
        `프레임 ${frameNode.name}의 뱃지 ${annotationNumber} 삭제 완료`
      );
    } else {
      console.log(
        `프레임 ${frameNode.name}의 뱃지 ${annotationNumber}는 이미 삭제됨`
      );
    }

    // 뱃지 맵에서 삭제
    delete frameBadges[frameId][annotationNumber];

    // 프레임에 더 이상 뱃지가 없으면 맵에서 프레임 ID 삭제
    if (Object.keys(frameBadges[frameId]).length === 0) {
      delete frameBadges[frameId];
    }

    return true;
  }

  // 현재 프레임의 모든 자식 노드에서 뱃지 프레임 찾기 시도
  const badgeNode = frameNode.findChild(
    (n) => n.type === "FRAME" && n.name === `Badge ${annotationNumber}`
  ) as FrameNode | null;

  if (badgeNode) {
    // 뱃지 삭제
    badgeNode.remove();

    // 프레임 뱃지 맵에 없다면 추가
    if (!frameBadges[frameId]) {
      frameBadges[frameId] = {};
    }

    // 뱃지 맵에서 삭제 (이미 맵에 등록된 경우에 대비)
    delete frameBadges[frameId][annotationNumber];
    console.log(`프레임 내부 검색으로 찾은 뱃지 ${annotationNumber} 삭제 완료`);
    return true;
  }

  return false;
}
