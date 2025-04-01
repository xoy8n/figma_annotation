figma.showUI(__html__, { width: 600, height: 600 });

type PluginMessage = {
  type: string;
  [key: string]: any;
};

// 필요한 상수와 enum 가져오기
import {
  AnnotationColor,
  AnnotationSize,
  AnnnotationCardWidth,
} from "./interfaces/enums";
import {
  supportedFontSizes,
  supportedColors,
  supportedCardWidth,
} from "./interfaces/const";

let annotationGroups: any[] = [];

// 노드의 최상위 Frame을 찾는 유틸리티 함수
function getTopLevelFrame(node: SceneNode): FrameNode | null {
  let current: BaseNode | null = node;

  while (current && current.parent && current.parent.type !== "PAGE") {
    current = current.parent;
  }

  return current?.type === "FRAME" ? (current as FrameNode) : null;
}

// 그룹 프레임 찾기 통합 함수
function findGroupFrame(
  groupId: string,
  groupFrameId?: string
): FrameNode | null {
  // 1. groupFrameId로 직접 찾기
  if (groupFrameId) {
    const frame = figma.getNodeById(groupFrameId);
    if (frame && frame.type === "FRAME") return frame as FrameNode;
  }

  // 2. 최상위 프레임 찾기
  const topFrame = figma.getNodeById(groupId) as FrameNode;
  if (!topFrame) return null;

  // 3. topFrame의 자식에서 찾기
  const groupFrameInChildren = topFrame.findOne(
    (node) => node.type === "FRAME" && node.getPluginData("type") === "group"
  ) as FrameNode | null;

  if (groupFrameInChildren) return groupFrameInChildren;

  // 4. 부모의 자식에서 찾기
  if (topFrame.parent) {
    const groupFrameInParent = topFrame.parent.findOne(
      (node) =>
        node.type === "FRAME" &&
        node.getPluginData("type") === "group" &&
        node.getPluginData("parent_frame_id") === groupId
    ) as FrameNode | null;

    if (groupFrameInParent) return groupFrameInParent;
  }

  return null;
}

// 카드 너비 가져오기
function getCardWidthByValue(widthValue: number): number {
  if (
    widthValue >= 0 &&
    widthValue < Object.keys(AnnnotationCardWidth).length / 2
  ) {
    return supportedCardWidth[widthValue];
  }
  return supportedCardWidth[AnnnotationCardWidth.SMALL]; // 기본값
}

// 카드 너비 계산하기 (입력값 또는 기본값 사용)
function getCardWidth(cardWidthValue?: number): number {
  return cardWidthValue !== undefined
    ? getCardWidthByValue(cardWidthValue)
    : getCardWidthByValue(AnnnotationCardWidth.SMALL);
}

// 그룹 프레임 찾기 또는 생성 함수
async function findOrCreateGroupFrame(group: any): Promise<FrameNode | null> {
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

// 그룹 및 주석 조회 함수
function findGroup(groupId: string) {
  return annotationGroups.find((g) => g.id === groupId);
}

// 주석 찾기 함수
function findAnnotation(groupId: string, annotationId: string) {
  const group = findGroup(groupId);
  if (!group) return null;
  return group.annotations.find((a) => a.id === annotationId);
}

// 색상 값 가져오기
function getColorByValue(colorValue: number): {
  r: number;
  g: number;
  b: number;
} {
  // 색상 값에 따라 RGB 값 반환
  switch (colorValue) {
    case AnnotationColor.RED:
      return { r: 0.93, g: 0.37, b: 0.37 }; // RED
    case AnnotationColor.BLUE:
      return { r: 0.0, g: 0.1, b: 1.0 }; // BLUE
    case AnnotationColor.BLACK:
      return { r: 0, g: 0, b: 0 }; // BLACK
    default:
      return { r: 0.0, g: 0.1, b: 1.0 }; // 기본값: BLUE
  }
}

// 폰트 크기 가져오기
function getFontSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].desription;
  }
  return supportedFontSizes[AnnotationSize.SMALL].desription; // 기본값
}

// 배지 크기 가져오기
function getBadgeSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].badgeSize;
  }
  return supportedFontSizes[AnnotationSize.SMALL].badgeSize; // 기본값
}

// 배지 텍스트 크기 가져오기
function getBadgeTextSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].badgeText;
  }
  return supportedFontSizes[AnnotationSize.SMALL].badgeText; // 기본값
}

// 배지를 생성하는 함수
async function createAnnotationBadge(
  node: SceneNode,
  index: number,
  annotationId: string,
  color: any
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

  // 배지 크기 설정 - supportedFontSizes에서 가져옴
  const badgeSize = getBadgeSizeByValue(color);
  badge.resize(badgeSize, badgeSize);

  // 배지 색상 설정
  let badgeColor = getColorByValue(AnnotationColor.BLUE); // 기본 보라색
  if (color !== undefined) {
    badgeColor = getColorByValue(color);
  }

  badge.fills = [{ type: "SOLID", color: badgeColor }];

  // 인덱스 번호 텍스트 생성
  const indexText = figma.createText();
  indexText.characters = index.toString();

  // 텍스트 크기 설정 - supportedFontSizes에서 가져옴
  indexText.fontSize = getBadgeTextSizeByValue(color);
  indexText.fills = [{ type: "SOLID", color: { r: 1, g: 1, b: 1 } }]; // 흰색 텍스트

  // 배지에 텍스트 추가
  badge.appendChild(indexText);

  // 배지 위치 설정 - 선택한 노드 위에 배치
  badge.x = node.x;
  badge.y = node.y - badge.height - 5; // 노드 위에 약간 간격을 두고 배치

  // 최상위 프레임 찾기
  const topFrame = getTopLevelFrame(node);

  // 최상위 프레임에 배지 추가
  if (topFrame) {
    topFrame.appendChild(badge);
  } else {
    // 최상위 프레임 또는 부모가 없는 경우 현재 페이지에 추가
    figma.currentPage.appendChild(badge);
  }

  return badge;
}

// 배지 인덱스 업데이트 함수
async function updateBadgeIndices(groupId: string) {
  const group = annotationGroups.find((g) => g.id === groupId);
  if (!group) return;

  console.log(
    "배지 인덱스 업데이트 시작:",
    group.annotations.length,
    "개의 주석"
  );

  // 그룹과 관련된 페이지 찾기
  let targetPage: PageNode | null = null;
  if (group.relatedPage && group.relatedPage.id) {
    // 관련 페이지가 있으면 해당 페이지 찾기
    const pageNode = figma.root.findOne(
      (node) => node.type === "PAGE" && node.id === group.relatedPage.id
    ) as PageNode;

    if (pageNode) {
      targetPage = pageNode;
    }
  }

  // 관련 페이지가 없거나 찾지 못한 경우 현재 페이지 사용
  if (!targetPage) {
    targetPage = figma.currentPage;
  }

  // 해당 페이지에서 배지 찾기
  targetPage
    .findAll((node) => node.getPluginData("type") === "annotation_badge")
    .forEach((badge) => {
      const annotationId = badge.getPluginData("annotationId");

      // 해당 그룹에 속한 배지만 업데이트
      const annotations = group.annotations;
      const annotationIndex = annotations.findIndex(
        (a) => a.id === annotationId
      );

      if (annotationIndex !== -1) {
        // 배지의 텍스트 업데이트 (1부터 시작하는 인덱스 사용)
        if (badge.type === "FRAME") {
          const textNode = badge.findOne(
            (node) => node.type === "TEXT"
          ) as TextNode;

          if (textNode) {
            const newIndex = annotationIndex + 1;
            console.log(`배지 업데이트: ${annotationId} => ${newIndex}`);
            textNode.characters = newIndex.toString();
          }

          badge.setPluginData("badge_index", (annotationIndex + 1).toString());
        }
      }
    });
}

// 배지 삭제 함수
async function removeAnnotationBadge(annotationId: string, groupId?: string) {
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

// 주석 프레임 생성 함수
async function createAnnotationFrame(
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
  annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려

  return annotationFrame;
}

// 내용 그룹 생성 함수
function createContentGroup(
  annotationId: string,
  frameWidth: number
): FrameNode {
  // 인덱스와 설명을 담을 그룹 생성
  const contentGroup = figma.createFrame();
  contentGroup.name = "Annotation Content";
  contentGroup.setPluginData("type", "annotation_content");
  contentGroup.setPluginData("annotationId", annotationId);

  // 그룹 스타일 설정
  contentGroup.layoutMode = "VERTICAL";
  contentGroup.verticalPadding = 10;
  contentGroup.horizontalPadding = 10;
  contentGroup.fills = []; // 배경색 제거 (투명 배경 유지)

  // 너비 계산 - 전체 너비의 약 80%를 차지하도록 조정
  const contentWidth = Math.round(frameWidth * 0.8);
  contentGroup.layoutSizingHorizontal = "FIXED";
  contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  contentGroup.resize(contentWidth, contentGroup.height);

  return contentGroup;
}

// 인덱스 컨테이너 생성 함수
function createIndexContainer(
  annotationId: string,
  frameWidth: number
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

  // 너비 계산 - 전체 너비의 약 20%를 차지하도록 조정
  const indexWidth = Math.round(frameWidth * 0.2);
  indexContainer.layoutSizingHorizontal = "FIXED";
  indexContainer.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
  indexContainer.resize(indexWidth, indexContainer.height);

  return indexContainer;
}

// 인덱스 노드 생성 함수
async function createIndexNode(
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
  indexNode.fontSize =
    sizeValue !== undefined
      ? getFontSizeByValue(sizeValue)
      : getFontSizeByValue(AnnotationSize.SMALL); // 기본값 사용
  indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

  // 텍스트 정렬 설정
  indexNode.textAlignHorizontal = "CENTER"; // 가로 중앙 정렬
  indexNode.textAlignVertical = "CENTER"; // 세로 중앙 정렬

  return indexNode;
}

// 설명 텍스트 노드 생성 함수
async function createDescriptionNode(
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
  textNode.fontSize =
    sizeValue !== undefined
      ? getFontSizeByValue(sizeValue)
      : supportedFontSizes[AnnotationSize.SMALL].desription;
  textNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

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

// 주석 구성 요소 생성 통합 함수
async function createAnnotationComponents(
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
  // 1. 주석 프레임 생성
  const frame = await createAnnotationFrame(
    annotationId,
    index,
    cardWidthValue
  );

  // 카드 너비 계산
  const cardWidth = getCardWidth(cardWidthValue);
  const availableWidth =
    cardWidth - 20 - (frame.paddingLeft + frame.paddingRight);

  // 2. 인덱스 컨테이너 생성
  const indexContainer = createIndexContainer(annotationId, availableWidth);

  // 3. 내용 그룹 생성
  const contentGroup = createContentGroup(annotationId, availableWidth);

  // 4. 인덱스 노드 생성
  const indexNode = await createIndexNode(annotationId, index, sizeValue);

  // 5. 설명 텍스트 노드 생성
  const initialText = description
    ? extractTextFromDescription(description)
    : "New Annotation";
  const textNode = await createDescriptionNode(
    annotationId,
    initialText,
    sizeValue,
    description
  );

  // 6. 텍스트 노드 크기 조정
  textNode.layoutSizingHorizontal = "FIXED";
  textNode.resize(
    contentGroup.width - (contentGroup.paddingLeft + contentGroup.paddingRight),
    textNode.height
  );

  // 인덱스 노드 크기 조정
  indexNode.layoutSizingHorizontal = "FIXED";
  indexNode.resize(indexContainer.width, textNode.height);

  // 인덱스 노드를 수직 중앙에 배치
  indexNode.y = (textNode.height - indexNode.height) / 2;

  // 7. 노드 구성
  indexContainer.appendChild(indexNode);
  contentGroup.appendChild(textNode);

  // 프레임에 인덱스 컨테이너와 내용 그룹 추가
  frame.appendChild(indexContainer);
  frame.appendChild(contentGroup);

  return { frame, group: contentGroup, indexNode, textNode };
}

// 메시지 응답 전송 유틸리티 함수
function sendResponse(
  type: string,
  result: boolean,
  data: any = {},
  errorMessage?: string
) {
  const message = {
    result,
    ...data,
  };

  if (!result && errorMessage) {
    message.errorMessage = errorMessage;
  }

  figma.ui.postMessage({ type, message });
}

// 텍스트 추출 함수
function extractTextFromDescription(description: any): string {
  if (!description || !description.content) return "New Annotation";

  let text = "";

  function extractText(node: any) {
    if (node.text) {
      text += node.text + " ";
    }

    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(extractText);
    }
  }

  // 각 상위 레벨 content 항목을 처리하고 줄바꿈 추가
  if (Array.isArray(description.content)) {
    description.content.forEach((contentNode, index) => {
      const startPos = text.length;

      // 노드 내용 추출
      if (
        contentNode.type === "bulletList" ||
        contentNode.type === "paragraph"
      ) {
        extractText(contentNode);
      } else {
        // 다른 타입의 노드도 처리
        extractText(contentNode);
      }

      // 각 컨텐츠 항목 뒤에 줄바꿈 추가(마지막 항목 제외)
      if (index < description.content.length - 1) {
        text += "\n";
      }
    });
  }

  return text.trim() || "New Annotation";
}

// 모든 주석 요소의 인덱스 번호 업데이트
async function updateAnnotationIndices(groupFrame: FrameNode) {
  // annotation 타입의 프레임만 필터링
  const annotationFrames = groupFrame.children.filter(
    (node) =>
      node.type === "FRAME" && node.getPluginData("type") === "annotation"
  ) as FrameNode[];

  // 필터링된 주석 프레임들의 인덱스 번호 업데이트
  for (let index = 0; index < annotationFrames.length; index++) {
    const child = annotationFrames[index];

    // 인덱스 컨테이너 찾기
    const indexContainer = child.findOne(
      (node) =>
        node.type === "FRAME" &&
        node.getPluginData("type") === "annotation_index_container"
    ) as FrameNode;

    if (indexContainer) {
      // 인덱스 번호 업데이트
      const indexNode = indexContainer.findOne(
        (node) =>
          node.type === "TEXT" &&
          node.getPluginData("type") === "annotation_index"
      ) as TextNode;

      if (indexNode) {
        // 폰트 로드 추가
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });
        indexNode.characters = `${index + 1}`;
      }
    } else {
      // 기존 레이아웃 구조 지원 (이전 버전과의 호환성)
      const contentGroup = child.findOne(
        (node) =>
          node.type === "FRAME" &&
          node.getPluginData("type") === "annotation_content"
      ) as FrameNode;

      if (contentGroup) {
        // 인덱스 번호 업데이트
        const indexNode = contentGroup.findOne(
          (node) =>
            node.type === "TEXT" &&
            node.getPluginData("type") === "annotation_index"
        ) as TextNode;

        if (indexNode) {
          // 폰트 로드 추가
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          indexNode.characters = `${index + 1}`;
        }
      }
    }

    // 주석 프레임 이름 업데이트
    child.name = `Annotation ${index + 1}`;
  }
}

// Title 그룹 생성 함수
async function createTitleGroup(
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

// CREATE_ANNOTATION_GROUP 메시지 핸들러
async function handleCreateAnnotationGroup(msg: PluginMessage) {
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
  const newGroupName = topFrame.name;

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
      annotationGroupFrame = figma.createFrame();
      annotationGroupFrame.name = "ANNOTATION_GROUP";
      annotationGroupFrame.setPluginData("type", "group");

      // 카드 너비 계산
      const cardWidth = getCardWidth(existingGroup.cardWidth);

      // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
      annotationGroupFrame.x = topFrame.width - cardWidth - 20;
      annotationGroupFrame.y = 20;
      annotationGroupFrame.resize(cardWidth, 300);
      annotationGroupFrame.fills = []; // 배경색 제거

      // 레이아웃 모드 설정 - 세로 배치
      annotationGroupFrame.layoutMode = "VERTICAL";
      annotationGroupFrame.paddingTop = 10;
      annotationGroupFrame.paddingBottom = 10;
      annotationGroupFrame.paddingLeft = 10;
      annotationGroupFrame.paddingRight = 10;

      // 상위 프레임에 추가
      topFrame.appendChild(annotationGroupFrame);

      // Title 그룹 생성 및 추가
      const availableWidth =
        cardWidth -
        (annotationGroupFrame.paddingLeft + annotationGroupFrame.paddingRight);
      const titleGroup = await createTitleGroup(
        existingGroup.id,
        availableWidth,
        "Description"
      );
      annotationGroupFrame.appendChild(titleGroup);
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
      annotations: annotationGroups,
      updatedGroup: newGroupId,
    });
  }

  // 🆕 새 그룹 생성
  // 1. 주석 그룹 프레임 생성
  annotationGroupFrame = figma.createFrame();
  annotationGroupFrame.name = "ANNOTATION_GROUP";
  annotationGroupFrame.setPluginData("type", "group");
  annotationGroupFrame.setPluginData("parent_frame_id", topFrame.id);

  // 카드 너비 계산
  const cardWidth = getCardWidth(msg.config?.cardWidth);

  // 스타일 및 위치 설정 - 부모 프레임 내부의 우측 상단에 위치하도록 설정
  annotationGroupFrame.x = topFrame.width - cardWidth - 20;
  annotationGroupFrame.y = 20;
  annotationGroupFrame.resize(cardWidth, 300);
  annotationGroupFrame.fills = []; // 배경색 제거

  // 레이아웃 모드 설정 - 세로 배치
  annotationGroupFrame.layoutMode = "VERTICAL";
  annotationGroupFrame.paddingTop = 10;
  annotationGroupFrame.paddingBottom = 10;
  annotationGroupFrame.paddingLeft = 10;
  annotationGroupFrame.paddingRight = 10;

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

  annotationGroups.push(newGroup);

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
    annotations: annotationGroups,
    updatedGroup: newGroupId,
  });
}

// CREATE_ANNOTATION 메시지 핸들러
async function handleCreateAnnotation(msg: PluginMessage) {
  const group = findGroup(msg.groupId);
  if (!group) return;

  // 새 주석 객체 생성
  const newAnnotation = {
    id: `annotation-${Date.now()}`,
    description: {
      type: "doc",
      content: [],
    },
  };

  // 그룹에 주석 추가
  group.annotations.push(newAnnotation);

  // 그룹 프레임 찾기
  const groupFrame = await findOrCreateGroupFrame(group);

  if (!groupFrame) {
    console.error("주석 그룹 프레임을 찾거나 생성할 수 없습니다");
    return;
  }

  // 주석 UI 컴포넌트 생성
  const { frame: annotationFrame } = await createAnnotationComponents(
    newAnnotation.id,
    group.annotations.length,
    group.color,
    group.size,
    group.cardWidth,
    newAnnotation.description
  );

  // 주석 프레임을 그룹 프레임에 추가
  groupFrame.appendChild(annotationFrame);

  // 현재 선택된 노드에 배지 생성
  const selection = figma.currentPage.selection[0];
  if (selection) {
    await createAnnotationBadge(
      selection,
      group.annotations.length,
      newAnnotation.id,
      group.color
    );
  }

  return sendResponse("CREATE_ANNOTATION", true, {
    annotations: annotationGroups,
  });
}

// DELETE_ANNOTATION 메시지 핸들러
async function handleDeleteAnnotation(msg: PluginMessage) {
  const group = findGroup(msg.groupId);
  if (!group) return sendResponse(msg.type, false);

  // 그룹 내에서 주석 제거
  group.annotations = group.annotations.filter(
    (a) => a.id !== msg.annotation.id
  );

  // Figma 캔버스에서도 삭제
  let groupFrame = findGroupFrame(group.id, group.groupFrameId);

  if (groupFrame) {
    const annotationFrame = groupFrame.findOne(
      (node) => node.getPluginData("annotationId") === msg.annotation.id
    );

    if (annotationFrame) {
      annotationFrame.remove();
    }

    // 남아있는 주석 프레임들의 인덱스 번호 업데이트
    await updateAnnotationIndices(groupFrame);
  }

  // 배지도 함께 삭제
  await removeAnnotationBadge(msg.annotation.id, msg.groupId);

  // 남아있는 annotation들의 배지 인덱스 업데이트
  await updateBadgeIndices(group.id);

  return sendResponse(msg.type, true);
}

// DELETE_ANNOTATION_GROUP 메시지 핸들러
async function handleDeleteAnnotationGroup(msg: PluginMessage) {
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
  annotationGroups = annotationGroups.filter((g) => g.id !== msg.group.id);

  return sendResponse(msg.type, true);
}

// 리치 텍스트 서식 적용 함수
async function applyRichTextFormatting(
  textNode: TextNode,
  descriptionData: any
) {
  if (!descriptionData || !descriptionData.content) return;

  // 필요한 모든 폰트 미리 로드
  await Promise.all([
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Bold" }),
  ]);

  // 텍스트 노드 초기화
  textNode.characters = "";

  // 모든 서식 정보를 먼저 추출
  const ranges = extractFormattingRanges(descriptionData);
  let currentIndex = 0;

  // 각 범위별로 텍스트와 서식 적용
  for (const range of ranges) {
    // 텍스트 추가
    if (range.text && range.text.length > 0) {
      const length = range.text.length;
      textNode.insertCharacters(currentIndex, range.text);

      // 기본 스타일 설정 (Regular 폰트, 검은색, 밑줄 없음)
      textNode.setRangeFontName(currentIndex, currentIndex + length, {
        family: "Inter",
        style: "Regular",
      });

      textNode.setRangeFills(currentIndex, currentIndex + length, [
        { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
      ]);

      textNode.setRangeTextDecoration(
        currentIndex,
        currentIndex + length,
        "NONE"
      );

      // 볼드체 적용
      if (range.isBold) {
        textNode.setRangeFontName(currentIndex, currentIndex + length, {
          family: "Inter",
          style: "Bold",
        });
      }

      // 밑줄 적용
      if (range.isUnderline) {
        textNode.setRangeTextDecoration(
          currentIndex,
          currentIndex + length,
          "UNDERLINE"
        );
      }

      // 색상 적용
      if (range.color) {
        const rgbColor = hexToRgb(range.color);
        if (rgbColor) {
          textNode.setRangeFills(currentIndex, currentIndex + length, [
            {
              type: "SOLID",
              color: {
                r: rgbColor.r / 255,
                g: rgbColor.g / 255,
                b: rgbColor.b / 255,
              },
            },
          ]);
        }
      }

      currentIndex += length;
    }

    // 줄바꿈 추가
    if (range.addNewLine) {
      textNode.insertCharacters(currentIndex, "\n");
      currentIndex += 1;
    }
  }

  // 텍스트가 비어있으면 기본값 설정
  if (textNode.characters.length === 0) {
    textNode.characters = "New Annotation";
  }
}

// 헥스 색상 코드를 RGB로 변환
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function extractFormattingRanges(descriptionData: any) {
  const ranges: {
    text: string;
    isBold?: boolean;
    isUnderline?: boolean;
    isItalic?: boolean;
    fontStyle?: string;
    color?: string;
    addNewLine?: boolean;
  }[] = [];

  function processNode(
    node: any,
    parentMarks: any[] = [],
    isListItem: boolean = false
  ) {
    // 텍스트 노드 처리 - 노드에 직접 있는 마크만 적용
    if (node.text) {
      // 현재 노드의 마크만 사용 (부모 마크 무시)
      const currentMarks = node.marks || [];

      // 마크 분석
      const isBold = currentMarks.some((mark) => mark.type === "bold");
      const isUnderline = currentMarks.some(
        (mark) => mark.type === "underline"
      );
      const colorMark = currentMarks.find(
        (mark) => mark.type === "textStyle" && mark.attrs && mark.attrs.color
      );

      // 텍스트 및 서식 정보 저장
      ranges.push({
        text: node.text,
        isBold,
        isUnderline,
        fontStyle: isBold ? "Bold" : "Regular",
        color: colorMark ? colorMark.attrs.color : undefined,
      });

      return; // 텍스트 노드는 자식이 없으므로 여기서 종료
    }

    // bulletList 처리
    if (
      node.type === "bulletList" &&
      node.content &&
      Array.isArray(node.content)
    ) {
      // bulletList의 각 listItem 처리
      node.content.forEach((listItemNode: any, index: number) => {
        // '• ' 추가하여 불릿 표시
        ranges.push({
          text: "• ",
          isBold: false,
          isUnderline: false,
          color: undefined, // 기본 색상 사용
        });

        // listItem 내용 처리
        if (listItemNode.content && Array.isArray(listItemNode.content)) {
          listItemNode.content.forEach((contentNode: any) => {
            processNode(contentNode, [], true);
          });
        }

        // 마지막 listItem이 아니면 줄바꿈 추가
        if (index < node.content.length - 1) {
          ranges.push({
            text: "",
            addNewLine: true,
          });
        }
      });

      return;
    }

    // 일반 자식 노드 처리
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((child: any) => {
        // 항상 빈 부모 마크 배열 전달 (스타일 상속 안함)
        processNode(child, []);
      });
    }
  }

  // 각 상위 레벨 컨텐츠 처리 및 줄바꿈 추가
  if (descriptionData.content && Array.isArray(descriptionData.content)) {
    descriptionData.content.forEach((contentNode: any, index: number) => {
      // 각 컨텐츠 노드 처리
      processNode(contentNode, []);

      // 마지막 항목이 아니면 줄바꿈 추가
      if (index < descriptionData.content.length - 1) {
        ranges.push({
          text: "",
          addNewLine: true,
        });
      }
    });
  }

  return ranges;
}

// UPDATE_ANNOTATION 메시지 핸들러
async function handleUpdateAnnotation(msg: PluginMessage) {
  const group = findGroup(msg.groupId);
  const annotation = findAnnotation(msg.groupId, msg.annotationId);

  if (!group || !annotation) return sendResponse(msg.type, false);

  // 메모리 상태 업데이트
  annotation[msg.key] = msg.value;

  // 실제 Figma 요소도 업데이트
  const groupFrame = findGroupFrame(group.id, group.groupFrameId);

  if (!groupFrame) return sendResponse(msg.type, false);

  // 해당 annotation 프레임 찾기
  const annotationFrame = groupFrame.findOne(
    (node) => node.getPluginData("annotationId") === msg.annotationId
  ) as FrameNode;

  if (!annotationFrame) return sendResponse(msg.type, false);

  // description 텍스트 노드 찾아 업데이트
  if (msg.key === "description") {
    // 인덱스 컨테이너 찾기
    const indexContainer = annotationFrame.findOne(
      (node) =>
        node.type === "FRAME" &&
        node.getPluginData("type") === "annotation_index_container"
    ) as FrameNode;

    // content 그룹 찾기
    const contentGroup = annotationFrame.findOne(
      (node) =>
        node.type === "FRAME" &&
        node.getPluginData("type") === "annotation_content"
    ) as FrameNode;

    if (!contentGroup) return sendResponse(msg.type, false);

    // description 텍스트 노드 찾기
    const descNode = contentGroup.findOne(
      (node) =>
        node.type === "TEXT" &&
        node.getPluginData("type") === "annotation_description"
    ) as TextNode;

    if (descNode) {
      // 리치 텍스트 서식 적용
      await applyRichTextFormatting(descNode, msg.value);

      // 카드 너비 계산 - 그룹에서 설정된 cardWidth 값 사용
      const cardWidth = getCardWidth(group.cardWidth);

      // 프레임 내에서 사용 가능한 너비 계산
      const availableWidth =
        cardWidth -
        20 -
        (annotationFrame.paddingLeft + annotationFrame.paddingRight);

      // description이 변경되면 레이아웃 조정
      annotationFrame.layoutSizingHorizontal = "FIXED";
      annotationFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
      annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려

      if (indexContainer) {
        // indexContainer와 contentGroup 너비 비율 계산 (20:80)
        const indexWidth = Math.round(availableWidth * 0.2);
        const contentWidth = Math.round(availableWidth * 0.8);

        // indexContainer 크기 조정
        indexContainer.layoutSizingHorizontal = "FIXED";
        indexContainer.resize(indexWidth, indexContainer.height);

        // content 그룹 크기 조정
        contentGroup.layoutSizingHorizontal = "FIXED";
        contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
        contentGroup.resize(contentWidth, contentGroup.height);

        // 텍스트 노드 크기 조정
        descNode.layoutSizingHorizontal = "FIXED";
        descNode.resize(
          contentWidth - (contentGroup.paddingLeft + contentGroup.paddingRight),
          descNode.height
        );

        // 인덱스 노드 찾기
        const indexNode = indexContainer.findOne(
          (node) =>
            node.type === "TEXT" &&
            node.getPluginData("type") === "annotation_index"
        ) as TextNode;

        if (indexNode) {
          // 인덱스 노드의 높이를 텍스트 노드의 높이와 동일하게 설정
          indexNode.resize(indexWidth, descNode.height);

          // 인덱스 노드의 수직 위치 조정
          indexNode.y = (indexContainer.height - indexNode.height) / 2;
        }

        // indexContainer 높이 조정
        indexContainer.layoutSizingVertical = "HUG";
        indexContainer.resize(indexWidth, contentGroup.height);
      } else {
        // 기존 레이아웃 호환성 유지 - 인덱스 컨테이너가 없는 경우
        contentGroup.layoutSizingHorizontal = "FIXED";
        contentGroup.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
        contentGroup.resize(availableWidth, contentGroup.height);

        // 텍스트 노드 크기 조정
        descNode.layoutSizingHorizontal = "FIXED";
        descNode.resize(
          availableWidth -
            (contentGroup.paddingLeft + contentGroup.paddingRight),
          descNode.height
        );
      }

      // annotationGroupFrame 크기 조정 (너비는 cardWidth로 고정, 높이는 자동 조정)
      groupFrame.layoutSizingHorizontal = "FIXED";
      groupFrame.layoutSizingVertical = "HUG"; // 높이를 내용에 맞게 자동 조정
      groupFrame.resize(cardWidth, groupFrame.height);
    }
  }

  return sendResponse(msg.type, true);
}

// UPDATE_ANNOTATION_GROUP 메시지 핸들러
async function handleUpdateAnnotationGroup(msg: PluginMessage) {
  const group = findGroup(msg.groupId);
  if (!group) return sendResponse(msg.type, false);

  // 메모리 상태 업데이트
  group[msg.key] = msg.value;

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

// UPDATE_ANNOTATION_ORDER 메시지 핸들러
async function handleUpdateAnnotationOrder(msg: PluginMessage) {
  const { groupId, sourceIndex, destinationIndex } = msg;
  const group = findGroup(groupId);

  if (!group) return sendResponse(msg.type, false);

  // 메모리상의 주석 순서 업데이트
  const annotations = [...group.annotations];
  const [movedAnnotation] = annotations.splice(sourceIndex - 1, 1);
  annotations.splice(destinationIndex - 1, 0, movedAnnotation);
  group.annotations = annotations;

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
  if (annotationFrames.length === annotations.length) {
    // 각 주석에 해당하는 프레임 찾아서 순서대로 재배치
    annotations.forEach((annotation, index) => {
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
  } else {
    // 기존 방식 (자식 요소와 주석 수가 일치하지 않을 경우의 예외 처리)
    // Title 컨테이너를 제외한 주석 프레임만 필터링
    const annotationNodes = groupFrame.children.filter(
      (node) => node.getPluginData("type") === "annotation"
    ) as FrameNode[];

    const source = annotationNodes[sourceIndex - 1]; // 0부터 시작하는 인덱스로 변환

    if (source) {
      // Title 컨테이너가 있다면 그 위치를 고려하여 삽입 위치 계산
      const insertAt = titleContainer ? destinationIndex : destinationIndex - 1;
      groupFrame.insertChild(insertAt, source);

      // Title 컨테이너가 있다면 항상 맨 위로 이동
      if (titleContainer) {
        groupFrame.insertChild(0, titleContainer);
      }

      // 순서가 바뀐 후 인덱스 번호 업데이트
      await updateAnnotationIndices(groupFrame);

      // 배지 인덱스도 업데이트
      await updateBadgeIndices(group.id);
    }
  }

  return sendResponse(msg.type, true);
}

// MOVE_TO_SELECTION 메시지 핸들러
async function handleMoveToSelection(msg: PluginMessage) {
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

// CHECK_CURRENT_SELECTION 메시지 핸들러
async function handleCheckCurrentSelection(msg: PluginMessage) {
  const groupNode = figma.getNodeById(msg.groupId);
  const exists = !!groupNode;

  return sendResponse(msg.type, true, {
    result: exists,
    groupId: msg.groupId,
    obsolete: !exists,
  });
}

// GET_FRAME_IMAGE 메시지 핸들러
async function handleGetFrameImage(msg: PluginMessage) {
  const frameImages = [];
  for (const group of annotationGroups) {
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
  }
}

// 메시지 핸들러 설정
figma.ui.onmessage = async (msg: PluginMessage) => {
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
        try {
          await figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
          sendResponse(type, true);
        } catch (error) {
          sendResponse(type, false, {}, String(error));
        }
        break;
      case "LOAD_DATA":
        try {
          const raw = figma.root.getPluginData(msg.key);
          const parsed = raw ? JSON.parse(raw) : [];
          console.log(parsed, "parsed");
          annotationGroups = parsed;
          sendResponse(type, true, { key: msg.key, data: parsed });
        } catch (error) {
          sendResponse(type, false, {}, String(error));
        }
        break;
      case "CLEAR_ANNOTATION_DATA":
        await figma.root.setPluginData("annotationGroup", "[]");
        annotationGroups = [];
        sendResponse(type, true, {});
        break;
      case "GET_FILE_NAME":
        sendResponse(type, true, { fileName: figma.root.name });
        break;
      case "GET_PAGE_NAME":
        const page = figma.root.findOne((n) => n.id === msg.pageId);
        sendResponse(type, true, {
          pageId: msg.pageId,
          pageName: page?.name || "Unknown Page",
        });
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
      default:
        console.log("Unhandled message type:", msg.type);
    }
  } catch (error) {
    console.error(`Error handling message type ${type}:`, error);
    sendResponse(type, false, {}, String(error));
  }
};

// 그룹 프레임 색상 업데이트 함수
function updateGroupFrameColor(frame: FrameNode, colorValue: number) {
  const headerColor = getColorByValue(colorValue);

  // 프레임 자체 색상 업데이트 - 배경색 제거
  frame.fills = [];

  // Title 그룹 처리
  const titleGroup = frame.findOne(
    (node) =>
      node.type === "FRAME" && node.getPluginData("type") === "title_container"
  ) as FrameNode;

  if (titleGroup) {
    // 타이틀 그룹 배경색 유지
    titleGroup.fills = [
      { type: "SOLID", color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 } },
    ];
  }

  // 모든 자식 주석 요소들 처리
  frame.children.forEach((child) => {
    if (
      child.type === "FRAME" &&
      child.getPluginData("type") === "annotation"
    ) {
      // 주석 프레임의 배경색 제거
      child.fills = [];

      // 인덱스 컨테이너 찾기
      const indexContainer = child.findOne(
        (node) =>
          node.type === "FRAME" &&
          node.getPluginData("type") === "annotation_index_container"
      ) as FrameNode;

      if (indexContainer) {
        // 인덱스 컨테이너 배경색 유지
        indexContainer.fills = [
          {
            type: "SOLID",
            color: { r: 245 / 255, g: 245 / 255, b: 245 / 255 },
          },
        ];
      }

      // 컨텐츠 그룹 찾기
      const contentGroup = child.findOne(
        (node) =>
          node.type === "FRAME" &&
          node.getPluginData("type") === "annotation_content"
      ) as FrameNode;

      if (contentGroup) {
        // 컨텐츠 그룹 배경색 제거
        contentGroup.fills = [];
      }
    }
  });

  // 그룹 ID 가져오기 (parent_frame_id에 저장되어 있음)
  const parentFrameId = frame.getPluginData("parent_frame_id");
  if (!parentFrameId) return;

  // 해당 그룹의 모든 주석 ID 가져오기
  const group = findGroup(parentFrameId);
  if (!group) return;

  const annotationIds = group.annotations.map((a) => a.id);

  // 페이지에서 해당 그룹에 속한 모든 배지 찾기
  figma.currentPage
    .findAll(
      (node) =>
        node.getPluginData("type") === "annotation_badge" &&
        annotationIds.includes(node.getPluginData("annotationId"))
    )
    .forEach((badge) => {
      if (badge.type === "FRAME") {
        // 배지 색상만 업데이트
        badge.fills = [{ type: "SOLID", color: headerColor }];
      }
    });
}

// 그룹 프레임 크기 업데이트 함수
async function updateGroupFrameSize(
  frame: FrameNode,
  property: string,
  value: number
) {
  // 카드 너비 계산
  const cardWidth =
    property === "cardWidth" ? getCardWidthByValue(value) : getCardWidth();

  // 프레임이 속한 부모 프레임 찾기
  const parentFrameId = frame.getPluginData("parent_frame_id");
  if (parentFrameId && property === "cardWidth") {
    const parentFrame = figma.getNodeById(parentFrameId) as FrameNode;
    if (parentFrame && parentFrame.type === "FRAME") {
      // x 좌표 업데이트 - 부모 프레임 내부의 우측에 위치하도록 설정
      frame.x = parentFrame.width - cardWidth - 20;
    }
  }

  // 너비와 높이 설정 (높이는 내용에 맞게 자동 조정)
  frame.layoutSizingHorizontal = "FIXED";
  frame.layoutSizingVertical = "HUG";
  frame.resize(cardWidth, frame.height);

  // Title 그룹 크기 업데이트
  const titleGroup = frame.findOne(
    (node) =>
      node.type === "FRAME" && node.getPluginData("type") === "title_container"
  ) as FrameNode;

  if (titleGroup) {
    const availableWidth = cardWidth - (frame.paddingLeft + frame.paddingRight);

    // Title 그룹 크기 조정
    titleGroup.layoutSizingHorizontal = "FIXED";
    titleGroup.layoutSizingVertical = "HUG";
    titleGroup.resize(availableWidth, titleGroup.height);

    // Description 텍스트 크기 조정
    const descriptionNode = titleGroup.findOne(
      (node) =>
        node.type === "TEXT" &&
        node.getPluginData("type") === "title_description"
    ) as TextNode;

    if (descriptionNode) {
      descriptionNode.layoutSizingHorizontal = "FIXED";
      descriptionNode.resize(
        availableWidth - (titleGroup.paddingLeft + titleGroup.paddingRight),
        36
      );

      // 폰트 크기 업데이트 (size 속성이 변경된 경우)
      if (property === "size") {
        // 폰트 로드
        await figma.loadFontAsync({ family: "Inter", style: "Regular" });

        const fontSize = getFontSizeByValue(value);
        descriptionNode.fontSize = fontSize;
      }
    }
  }

  // 사이즈 값에 따른 스타일 변경
  if (property === "size") {
    // 폰트 크기 업데이트
    const fontSize = getFontSizeByValue(value);

    // 모든 텍스트 노드에 대해 폰트 로드
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    // 그룹 ID 가져오기
    const parentFrameId = frame.getPluginData("parent_frame_id");
    if (parentFrameId) {
      const group = findGroup(parentFrameId);
      if (group) {
        // 해당 그룹의 모든 주석 ID 가져오기
        const annotationIds = group.annotations.map((a) => a.id);

        // 페이지에서 해당 그룹에 속한 모든 배지 찾기
        const badges = figma.currentPage.findAll(
          (node) =>
            node.getPluginData("type") === "annotation_badge" &&
            annotationIds.includes(node.getPluginData("annotationId"))
        );

        // 각 배지 업데이트
        for (const badge of badges) {
          if (badge.type === "FRAME") {
            // 배지 크기 업데이트
            const badgeSize = getBadgeSizeByValue(value);
            badge.resize(badgeSize, badgeSize);

            // 배지 내부 텍스트 크기 업데이트
            const textNode = badge.findOne(
              (node) => node.type === "TEXT"
            ) as TextNode;
            if (textNode) {
              textNode.fontSize = getBadgeTextSizeByValue(value);
            }
          }
        }
      }
    }

    // 모든 자식 요소의 크기도 업데이트
    for (const child of frame.children) {
      if (
        child.type === "FRAME" &&
        child.getPluginData("type") === "annotation"
      ) {
        // 너비 고정, 높이 자동 조정
        child.layoutSizingHorizontal = "FIXED";
        child.layoutSizingVertical = "HUG";
        child.resize(
          cardWidth - (frame.paddingLeft + frame.paddingRight),
          child.height
        );

        // 인덱스 컨테이너와 내용 그룹 찾기
        const indexContainer = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_index_container"
        ) as FrameNode;

        const contentGroup = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_content"
        ) as FrameNode;

        if (indexContainer && contentGroup) {
          // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
          const frameAvailableWidth =
            child.width - (child.paddingLeft + child.paddingRight);

          // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (20:80)
          const indexWidth = Math.round(frameAvailableWidth * 0.2);
          const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당

          // 내용 그룹 크기 조정
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.resize(contentWidth, contentGroup.height);

          // 설명 텍스트 업데이트
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            // 폰트 크기 업데이트
            descNode.fontSize = fontSize;

            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
            const textAvailableWidth =
              contentWidth -
              (contentGroup.paddingLeft + contentGroup.paddingRight);

            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(textAvailableWidth, descNode.height);
          }

          // 인덱스 컨테이너 크기 조정
          indexContainer.layoutSizingHorizontal = "FIXED";
          indexContainer.layoutSizingVertical = "HUG";
          indexContainer.resize(indexWidth, indexContainer.height);

          // 인덱스 노드 찾기
          const indexNode = indexContainer.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_index"
          ) as TextNode;

          if (indexNode && descNode) {
            // 인덱스 노드 업데이트
            indexNode.fontSize = fontSize;

            // 인덱스 노드 크기 조정 (indexContainer 패딩 고려)
            const indexNodeAvailableWidth =
              indexWidth -
              (indexContainer.paddingLeft + indexContainer.paddingRight);

            indexNode.resize(indexNodeAvailableWidth, descNode.height);

            // 인덱스 노드를 수직 중앙에 배치
            indexNode.y = (indexContainer.height - indexNode.height) / 2;
          }

          // contentGroup의 높이에 맞게 indexContainer 높이 조정
          indexContainer.resize(indexWidth, contentGroup.height);
        } else if (contentGroup) {
          // 이전 구조와의 호환성 유지 (기존 레이아웃)
          // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
          const frameAvailableWidth =
            cardWidth - (frame.paddingLeft + frame.paddingRight);

          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.resize(frameAvailableWidth, contentGroup.height);

          // 설명 텍스트 찾기
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
            const textAvailableWidth =
              frameAvailableWidth -
              (contentGroup.paddingLeft + contentGroup.paddingRight);

            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(textAvailableWidth, descNode.height);
          }
        }
      }
    }
  } else if (property === "cardWidth") {
    // 모든 자식 요소의 너비도 업데이트
    for (const child of frame.children) {
      if (
        child.type === "FRAME" &&
        child.getPluginData("type") === "annotation"
      ) {
        // 사용 가능한 너비 계산 (annotationFrame 내에서)
        const annotationAvailableWidth =
          cardWidth - (frame.paddingLeft + frame.paddingRight);

        // annotationFrame 크기 조정
        child.layoutSizingHorizontal = "FIXED";
        child.layoutSizingVertical = "HUG";
        child.resize(annotationAvailableWidth, child.height);

        // 인덱스 컨테이너 찾기
        const indexContainer = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_index_container"
        ) as FrameNode;

        // 내용 그룹 찾기
        const contentGroup = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_content"
        ) as FrameNode;

        if (indexContainer && contentGroup) {
          // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
          const frameAvailableWidth =
            annotationAvailableWidth - (child.paddingLeft + child.paddingRight);

          // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (30:70)
          const indexWidth = Math.round(frameAvailableWidth * 0.2);
          const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당

          // 인덱스 컨테이너 크기 조정
          indexContainer.layoutSizingHorizontal = "FIXED";
          indexContainer.layoutSizingVertical = "HUG";
          indexContainer.resize(indexWidth, indexContainer.height);

          // 내용 그룹 크기 조정
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.resize(contentWidth, contentGroup.height);

          // 설명 텍스트 찾기
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
            const textAvailableWidth =
              contentWidth -
              (contentGroup.paddingLeft + contentGroup.paddingRight);

            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(textAvailableWidth, descNode.height);
          }

          // 인덱스 노드 찾기
          const indexNode = indexContainer.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_index"
          ) as TextNode;

          if (indexNode && descNode) {
            // 인덱스 노드의 높이를 텍스트 노드의 높이와 동일하게 설정
            const indexNodeAvailableWidth =
              indexWidth -
              (indexContainer.paddingLeft + indexContainer.paddingRight);

            indexNode.resize(indexNodeAvailableWidth, descNode.height);

            // 인덱스 노드를 수직 중앙에 배치
            indexNode.y = (indexContainer.height - indexNode.height) / 2;
          }

          // contentGroup의 높이에 맞게 indexContainer 높이 조정
          indexContainer.resize(indexWidth, contentGroup.height);
        } else if (contentGroup) {
          // 이전 구조와의 호환성 유지 (기존 레이아웃)
          // 사용 가능한 너비 계산 (annotationFrame 패딩 고려)
          const frameAvailableWidth =
            annotationAvailableWidth - (child.paddingLeft + child.paddingRight);

          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.resize(frameAvailableWidth, contentGroup.height);

          // 설명 텍스트 찾기
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            // 텍스트 노드 크기 조정 (contentGroup 패딩 고려)
            const textAvailableWidth =
              frameAvailableWidth -
              (contentGroup.paddingLeft + contentGroup.paddingRight);

            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(textAvailableWidth, descNode.height);
          }
        }
      }
    }
  }
}

// MOVE_TO_ANNOTATION 메시지 핸들러
async function handleMoveToAnnotation(msg: PluginMessage) {
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
