import {
  getCardWidth,
  getFontSizeByValue,
  getBadgeSizeByValue,
  getBadgeTextSizeByValue,
} from "../utils/sizeUtils";
import { getColorByValue } from "../utils/colorUtils";
import { findGroup } from "../services/annotationGroupService";
import {
  applyRichTextFormatting,
  extractTextFromDescription,
} from "../utils/textUtils";
import { getTopLevelFrame } from "../utils/nodeUtils";

/**
 * 주석 프레임 생성 함수
 */
export async function createAnnotationFrame(
  annotationId: string,
  index: number,
  cardWidthValue?: number
): Promise<FrameNode> {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // 주석 컨테이너 프레임 생성
  const annotationFrame = figma.createFrame();
  annotationFrame.name = `Annotation ${index}`;
  annotationFrame.setPluginData("type", "annotation");
  annotationFrame.setPluginData("annotationId", annotationId);

  // 컨테이너 스타일 설정
  annotationFrame.layoutMode = "HORIZONTAL";
  annotationFrame.fills = []; // 배경색 제거
  annotationFrame.strokes = [
    {
      type: "SOLID",
      color: {
        r: 224 / 255,
        g: 224 / 255,
        b: 224 / 255,
      },
    },
  ];
  annotationFrame.strokeWeight = 1; // 선 두께: 1px
  annotationFrame.strokeTopWeight = 0;
  annotationFrame.strokeAlign = "INSIDE"; // 테두리 위치 (INSIDE | OUTSIDE | CENTER)

  // 카드 너비 계산
  const cardWidth = getCardWidth(cardWidthValue);

  // 너비만 고정하고 높이는 내용에 맞게 자동 조정
  annotationFrame.layoutSizingHorizontal = "FIXED";
  annotationFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  annotationFrame.resize(cardWidth, annotationFrame.height); // 좌우 패딩 고려

  return annotationFrame;
}

/**
 * 내용 그룹 생성 함수
 */
export function createContentGroup(
  annotationId: string,
  contentWidth: number
): FrameNode {
  // 인덱스와 설명을 담을 그룹 생성
  const contentGroup = figma.createFrame();
  contentGroup.name = "Annotation Content";
  contentGroup.setPluginData("type", "annotation_content");
  contentGroup.setPluginData("annotationId", annotationId);

  // 그룹 스타일 설정
  contentGroup.layoutMode = "VERTICAL";
  contentGroup.primaryAxisSizingMode = "AUTO"; // 높이는 내용에 맞게 자동 조정
  contentGroup.counterAxisSizingMode = "FIXED"; // 너비는 고정
  contentGroup.verticalPadding = 10;
  contentGroup.horizontalPadding = 10;
  contentGroup.fills = []; // 배경색 제거 (투명 배경 유지)

  // 너비 설정 - 전달받은 너비를 그대로 사용
  contentGroup.layoutSizingHorizontal = "FIXED";
  contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  contentGroup.resize(contentWidth, contentGroup.height);

  return contentGroup;
}

/**
 * 인덱스 컨테이너 생성 함수
 */
export function createIndexContainer(
  annotationId: string,
  indexWidth: number
): FrameNode {
  // 인덱스 컨테이너 생성
  const indexContainer = figma.createFrame();
  indexContainer.name = "Annotation Index";
  indexContainer.setPluginData("type", "annotation_index_container");
  indexContainer.setPluginData("annotationId", annotationId);

  // 스타일 설정
  indexContainer.layoutMode = "VERTICAL";
  indexContainer.primaryAxisAlignItems = "CENTER"; // 세로 중앙 정렬
  indexContainer.counterAxisAlignItems = "CENTER"; // 가로 중앙 정렬
  indexContainer.fills = [
    { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
  ]; // 배경색 설정
  indexContainer.verticalPadding = 10;
  indexContainer.horizontalPadding = 10;

  indexContainer.strokes = [
    {
      type: "SOLID",
      color: {
        r: 224 / 255,
        g: 224 / 255,
        b: 224 / 255,
      },
    },
  ];
  indexContainer.strokeWeight = 0;
  indexContainer.strokeRightWeight = 1;

  // 너비 설정 - 전달받은 너비를 그대로 사용
  indexContainer.layoutSizingHorizontal = "FIXED";
  indexContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  indexContainer.resize(indexWidth, indexContainer.height);

  return indexContainer;
}

/**
 * 인덱스 노드 생성 함수
 */
export async function createIndexNode(
  annotationId: string,
  index: number,
  sizeValue?: number
): Promise<TextNode> {
  // 폰트 로드
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const indexNode = figma.createText();
  indexNode.characters = `${index}`;
  indexNode.setPluginData("type", "annotation_index");
  indexNode.setPluginData("annotationId", annotationId);

  // 스타일 설정
  indexNode.fontSize = getFontSizeByValue(sizeValue); // 기본값 또는 지정된 값 사용
  indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

  // 텍스트 정렬 설정
  indexNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
  indexNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬

  return indexNode;
}

/**
 * 설명 텍스트 노드 생성 함수
 */
export async function createDescriptionNode(
  annotationId: string,
  text: string = "New Annotation",
  sizeValue?: number,
  descriptionData?: any
): Promise<TextNode> {
  // 기본 폰트만 먼저 로드 (applyRichTextFormatting에서 추가 폰트 로드)
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  const textNode = figma.createText();
  textNode.characters = text;
  textNode.setPluginData("type", "annotation_description");
  textNode.setPluginData("annotationId", annotationId);

  // 스타일 설정
  textNode.fontSize = getFontSizeByValue(sizeValue);
  textNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

  // 높이만 자동으로 조정되도록 설정
  textNode.textAutoResize = "HEIGHT";

  // 리치 텍스트 설명 데이터가 있으면 서식 적용
  if (
    descriptionData &&
    descriptionData.content &&
    descriptionData.content.length > 0
  ) {
    await applyRichTextFormatting(textNode, descriptionData);
  }

  return textNode;
}

/**
 * Title 그룹 생성 함수
 */
export async function createTitleGroup(
  groupId: string,
  frameWidth: number,
  descriptionText: string = "Description"
): Promise<FrameNode> {
  // 타이틀 컨테이너 생성
  const titleContainer = figma.createFrame();
  titleContainer.name = "Title";
  titleContainer.setPluginData("type", "title_container");
  titleContainer.setPluginData("groupId", groupId);

  // 스타일 설정
  titleContainer.layoutMode = "VERTICAL";
  titleContainer.primaryAxisAlignItems = "CENTER"; // 세로 중앙 정렬
  titleContainer.counterAxisAlignItems = "CENTER"; // 가로 중앙 정렬
  titleContainer.fills = [
    { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
  ]; // 배경색 설정
  //border설정
  titleContainer.strokes = [
    {
      type: "SOLID",
      color: {
        r: 224 / 255,
        g: 224 / 255,
        b: 224 / 255,
      },
    },
  ];
  titleContainer.strokeWeight = 1; // 선 두께: 1px
  titleContainer.strokeAlign = "INSIDE"; // 테두리 위치 (INSIDE | OUTSIDE | CENTER)

  // 너비 설정
  titleContainer.layoutSizingHorizontal = "FIXED";
  titleContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  titleContainer.resize(frameWidth, titleContainer.height);

  // Description 텍스트 노드 생성
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  const descriptionNode = figma.createText();
  descriptionNode.characters = descriptionText;
  descriptionNode.setPluginData("type", "title_description");
  descriptionNode.fontSize = 14;
  descriptionNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

  // 텍스트 정렬 설정
  descriptionNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
  descriptionNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬

  // 텍스트 너비 설정
  descriptionNode.layoutSizingHorizontal = "FIXED";
  descriptionNode.resize(
    frameWidth - (titleContainer.paddingLeft + titleContainer.paddingRight),
    36
  );

  // 컨테이너에 텍스트 노드 추가
  titleContainer.appendChild(descriptionNode);

  return titleContainer;
}

/**
 * 기존 배지의 크기를 확인하는 함수
 */
function getExistingBadgeSize(node: SceneNode): number | undefined {
  const parentFrame = getTopLevelFrame(node);
  if (!parentFrame) return undefined;

  // 같은 프레임 내의 다른 배지 찾기
  const existingBadges = parentFrame.findAll(
    (n) =>
      n.type === "FRAME" &&
      n.getPluginData("type") === "annotation_badge" &&
      n !== node
  ) as FrameNode[];

  if (existingBadges.length > 0) {
    // 첫 번째 배지의 크기 반환
    return existingBadges[0].width;
  }

  return undefined;
}

/**
 * 배지를 생성하는 함수
 */
export async function createAnnotationBadge(
  node: SceneNode,
  index: number,
  annotationId: string,
  colorValue?: number,
  sizeValue?: number
): Promise<SceneNode> {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // 배지 프레임 생성
  const badge = figma.createFrame();
  badge.name = `Badge ${index}`;
  badge.setPluginData("type", "annotation_badge");
  badge.setPluginData("annotationId", annotationId);
  badge.setPluginData("badge_index", index.toString());

  // 배지 스타일 설정
  badge.layoutMode = "HORIZONTAL";
  badge.primaryAxisAlignItems = "CENTER";
  badge.counterAxisAlignItems = "CENTER";
  badge.cornerRadius = 9999; // 원형으로 만들기

  // 배지 크기 설정 - 기존 배지 크기 확인
  const existingBadgeSize = getExistingBadgeSize(node);
  const badgeSize = existingBadgeSize || getBadgeSizeByValue(sizeValue);
  badge.resize(badgeSize, badgeSize);

  // 배지 색상 설정
  const badgeColor = getColorByValue(colorValue); // 기본 또는 지정된 색상
  badge.fills = [{ type: "SOLID", color: badgeColor }];

  // 인덱스 번호 텍스트 생성
  const indexText = figma.createText();
  indexText.characters = index.toString();

  // 텍스트 크기 설정 - 배지 크기에 비례하여 설정
  const textSize = Math.round(badgeSize * 0.6); // 배지 크기의 60%로 설정
  indexText.fontSize = textSize;
  indexText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // 흰색 텍스트

  // 배지에 텍스트 추가
  badge.appendChild(indexText);

  // 최상위 프레임 찾기 (페이지 바로 아래 프레임)
  const topFrame = getTopLevelFrame(node);

  if (topFrame) {
    // 노드의 절대 좌표(페이지 기준) 계산
    const absoluteX = getAbsolutePosition(node).x;
    const absoluteY = getAbsolutePosition(node).y;

    // 최상위 프레임의 절대 좌표(페이지 기준) 계산
    const topFrameAbsoluteX = getAbsolutePosition(topFrame).x;
    const topFrameAbsoluteY = getAbsolutePosition(topFrame).y;

    // 최상위 프레임을 기준으로 한 노드의 상대 좌표
    const relativeToTopFrameX = absoluteX - topFrameAbsoluteX;
    const relativeToTopFrameY = absoluteY - topFrameAbsoluteY;

    // 배지 위치 설정
    badge.x = relativeToTopFrameX - badge.width / 2;
    badge.y = relativeToTopFrameY - badge.height / 2;

    // 최상위 프레임에 배지 추가
    topFrame.appendChild(badge);
  } else {
    // 최상위 프레임을 찾지 못한 경우 기존 로직 사용
    badge.x = node.x;
    badge.y = node.y - badge.height;

    // 현재 페이지에 배지 추가
    figma.currentPage.appendChild(badge);
  }

  return badge;
}

/**
 * 노드의 절대 위치(페이지 기준)를 계산하는 함수
 */
function getAbsolutePosition(node: SceneNode): { x: number; y: number } {
  let x = 0;
  let y = 0;

  // 자기 자신의 x, y 값 포함
  if ("x" in node) {
    x += node.x;
  }
  if ("y" in node) {
    y += node.y;
  }

  // 부모의 좌표를 재귀적으로 더함
  let parent = node.parent;
  while (parent && parent.type !== "PAGE") {
    if ("x" in parent) {
      x += parent.x;
    }
    if ("y" in parent) {
      y += parent.y;
    }
    parent = parent.parent;
  }

  return { x, y };
}

/**
 * 배지 삭제 함수
 */
export async function removeAnnotationBadge(
  annotationId: string,
  groupId?: string
) {
  let targetPage = figma.currentPage;

  // 그룹 ID가 제공된 경우 해당 그룹의 페이지 찾기
  if (groupId) {
    const group = findGroup(groupId);
    if (group && group.relatedPage && group.relatedPage.id) {
      const pageNode = figma.root.findOne(
        (node) => node.type === "PAGE" && node.id === group.relatedPage.id
      ) as PageNode;

      if (pageNode) {
        targetPage = pageNode;
      }
    }
  }

  // 해당 페이지에서 배지 찾기
  targetPage
    .findAll(
      (node) =>
        node.getPluginData("type") === "annotation_badge" &&
        node.getPluginData("annotationId") === annotationId
    )
    .forEach((badge) => badge.remove());
}

/**
 * 주석 구성 요소 생성 통합 함수
 */
export async function createAnnotationComponents(
  annotationId: string,
  index: number,
  colorValue?: number,
  sizeValue?: number,
  cardWidthValue?: number,
  description?: any
): Promise<{
  frame: FrameNode;
  group: FrameNode;
  indexNode: TextNode;
  textNode: TextNode;
}> {
  // 카드 너비 계산
  const cardWidth = getCardWidth(cardWidthValue);

  // 주석 프레임 생성
  const annotationFrame = await createAnnotationFrame(
    annotationId,
    index,
    cardWidthValue
  );

  // 정확한 비율 계산 - 전체 너비에서 패딩 고려
  const totalContentWidth = cardWidth; // 프레임의 좌우 패딩 고려
  const indexWidth = Math.round(totalContentWidth * 0.2); // 정확히 20%
  const contentWidth = totalContentWidth - indexWidth; // 나머지 80%

  // 인덱스 컨테이너 생성 - 정확한 너비 전달
  const indexContainer = createIndexContainer(annotationId, indexWidth);

  // 컨텐츠 그룹 생성 - 정확한 너비 전달
  const contentGroup = createContentGroup(annotationId, contentWidth);

  // 인덱스 번호 노드 생성
  const indexNode = await createIndexNode(annotationId, index, sizeValue);

  // 설명 텍스트 노드 생성
  const textNode = await createDescriptionNode(
    annotationId,
    description?.content
      ? extractTextFromDescription(description)
      : "New Annotation",
    sizeValue,
    description
  );

  // 1. 먼저 모든 자식 노드를 부모에 추가
  indexContainer.appendChild(indexNode);
  contentGroup.appendChild(textNode);

  // 2. 부모 프레임에 컨테이너들 추가
  annotationFrame.appendChild(indexContainer);
  annotationFrame.appendChild(contentGroup);

  // 3. 부모 프레임의 레이아웃 모드 설정
  annotationFrame.layoutMode = "HORIZONTAL";
  annotationFrame.primaryAxisSizingMode = "FIXED";
  annotationFrame.counterAxisSizingMode = "AUTO";

  // 4. 자식 컨테이너들의 속성 설정 (부모 프레임에 추가된 후에 설정)
  // contentGroup 설정
  contentGroup.layoutMode = "VERTICAL";
  contentGroup.primaryAxisSizingMode = "AUTO";
  contentGroup.counterAxisSizingMode = "FIXED";
  contentGroup.layoutGrow = 1;
  contentGroup.resize(contentWidth, contentGroup.height);

  // indexContainer 설정
  indexContainer.layoutSizingVertical = "FILL"; // 부모 높이에 맞춤
  indexContainer.layoutSizingHorizontal = "FIXED"; // 너비 고정
  indexContainer.resize(indexWidth, indexContainer.height);

  // 5. 텍스트 노드 설정 (contentGroup에 추가된 후에 설정)
  textNode.layoutSizingHorizontal = "FILL";
  textNode.textAutoResize = "HEIGHT";

  // 컬러 적용 (배경색 및 스타일링)
  if (colorValue !== undefined) {
    const color = getColorByValue(colorValue);
    // 여기에 색상 적용 로직 추가
  }

  return {
    frame: annotationFrame,
    group: contentGroup,
    indexNode,
    textNode,
  };
}
