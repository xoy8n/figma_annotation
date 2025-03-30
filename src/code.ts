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
    groupFrame.fills = [
      { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
    ];

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
    case AnnotationColor.PURPLE:
      return { r: 0.7, g: 0.5, b: 0.9 }; // PURPLE
    case AnnotationColor.BLACK:
      return { r: 0, g: 0, b: 0 }; // BLACK
    default:
      return { r: 0.7, g: 0.5, b: 0.9 }; // 기본값: PURPLE
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
  let badgeColor = getColorByValue(AnnotationColor.PURPLE); // 기본 보라색
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
function updateBadgeIndices(groupId: string) {
  const group = annotationGroups.find((g) => g.id === groupId);
  if (!group) return;

  console.log(
    "배지 인덱스 업데이트 시작:",
    group.annotations.length,
    "개의 주석"
  );

  // 모든 노드에서 이 그룹에 해당하는 배지 찾기
  figma.currentPage
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
function removeAnnotationBadge(annotationId: string) {
  figma.currentPage
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
  annotationFrame.layoutMode = "VERTICAL";
  annotationFrame.itemSpacing = 8;
  annotationFrame.fills = [
    { type: "SOLID", color: { r: 0.98, g: 0.98, b: 0.98 } },
  ];
  annotationFrame.cornerRadius = 8;

  // 카드 너비 계산
  const cardWidth = getCardWidth(cardWidthValue);

  // 너비 고정
  annotationFrame.layoutSizingHorizontal = "FIXED";
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
  contentGroup.itemSpacing = 4;
  contentGroup.fills = []; // 투명 배경

  // 너비 고정
  contentGroup.layoutSizingHorizontal = "FIXED";
  contentGroup.resize(frameWidth, contentGroup.height);

  return contentGroup;
}

// 인덱스 노드 생성 함수
function createIndexNode(
  annotationId: string,
  index: number,
  colorValue?: number
): TextNode {
  const indexNode = figma.createText();
  indexNode.characters = `${index}`;
  indexNode.setPluginData("type", "annotation_index");
  indexNode.setPluginData("annotationId", annotationId);

  // 스타일 설정
  indexNode.fontSize = 14;
  indexNode.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];

  // 색상 설정이 있으면 적용
  if (colorValue !== undefined) {
    const color = getColorByValue(colorValue);
    indexNode.fills = [{ type: "SOLID", color }];
  }

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
  textNode.fills = [{ type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } }];

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

  // 2. 내용 그룹 생성
  const contentGroupWidth =
    cardWidth - 20 - (frame.paddingLeft + frame.paddingRight);
  const group = createContentGroup(annotationId, contentGroupWidth);

  // 3. 인덱스 노드 생성
  const indexNode = createIndexNode(annotationId, index, colorValue);

  // 4. 설명 텍스트 노드 생성
  const initialText = description
    ? extractTextFromDescription(description)
    : "New Annotation";
  const textNode = await createDescriptionNode(
    annotationId,
    initialText,
    sizeValue,
    description
  );

  // 5. 텍스트 노드 크기 조정
  const textNodeWidth =
    contentGroupWidth - (group.paddingLeft + group.paddingRight);
  textNode.layoutSizingHorizontal = "FIXED";
  textNode.resize(textNodeWidth, textNode.height);

  // 6. 노드 구성
  group.appendChild(indexNode);
  group.appendChild(textNode);
  frame.appendChild(group);

  return { frame, group, indexNode, textNode };
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

  if (Array.isArray(description.content)) {
    description.content.forEach(extractText);
  }

  return text.trim() || "New Annotation";
}

// 모든 주석 요소의 인덱스 번호 업데이트
function updateAnnotationIndices(groupFrame: FrameNode) {
  // 모든 주석 요소의 인덱스 번호 업데이트
  groupFrame.children.forEach((child, index) => {
    if (
      child.type === "FRAME" &&
      child.getPluginData("type") === "annotation"
    ) {
      // 내용 그룹 찾기
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
          indexNode.characters = `${index + 1}`;
        }
      }

      // 주석 프레임 이름 업데이트
      child.name = `Annotation ${index + 1}`;
    }
  });
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
      annotationGroupFrame.fills = [
        { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
      ];

      // 레이아웃 모드 설정 - 세로 배치
      annotationGroupFrame.layoutMode = "VERTICAL";
      annotationGroupFrame.paddingTop = 10;
      annotationGroupFrame.paddingBottom = 10;
      annotationGroupFrame.paddingLeft = 10;
      annotationGroupFrame.paddingRight = 10;

      // 상위 프레임에 추가
      topFrame.appendChild(annotationGroupFrame);
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
  annotationGroupFrame.fills = [
    { type: "SOLID", color: { r: 1, g: 1, b: 1 }, opacity: 0.8 },
  ];

  // 레이아웃 모드 설정 - 세로 배치
  annotationGroupFrame.layoutMode = "VERTICAL";
  annotationGroupFrame.paddingTop = 10;
  annotationGroupFrame.paddingBottom = 10;
  annotationGroupFrame.paddingLeft = 10;
  annotationGroupFrame.paddingRight = 10;

  // 상위 프레임에 추가
  topFrame.appendChild(annotationGroupFrame);

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

  figma.viewport.scrollAndZoomIntoView([topFrame]);

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
    updateAnnotationIndices(groupFrame);
  }

  // 배지도 함께 삭제
  removeAnnotationBadge(msg.annotation.id);

  // 남아있는 annotation들의 배지 인덱스 업데이트
  updateBadgeIndices(group.id);

  return sendResponse(msg.type, true);
}

// DELETE_ANNOTATION_GROUP 메시지 핸들러
async function handleDeleteAnnotationGroup(msg: PluginMessage) {
  const groupToDelete = findGroup(msg.group.id);
  if (!groupToDelete) return sendResponse(msg.type, false);

  if (groupToDelete.groupFrameId) {
    const groupFrame = figma.getNodeById(groupToDelete.groupFrameId);
    if (groupFrame) {
      groupFrame.remove();
    }

    // 그룹에 속한 모든 annotation의 배지 삭제
    groupToDelete.annotations.forEach((annotation) => {
      removeAnnotationBadge(annotation.id);
    });
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

  // 필요한 모든 폰트를 먼저 로드 (Regular, Bold)
  await Promise.all([
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Bold" }),
  ]);

  // 텍스트 내용 추출 - 기존 extractTextFromDescription 활용
  const plainText = extractTextFromDescription(descriptionData);

  // 모든 스타일 초기화를 위해 characters를 다시 설정
  textNode.characters = plainText;

  // 전체 텍스트를 기본 스타일로 설정
  textNode.setRangeFontName(0, plainText.length, {
    family: "Inter",
    style: "Regular",
  });
  textNode.setRangeTextDecoration(0, plainText.length, "NONE");
  textNode.setRangeFills(0, plainText.length, [
    { type: "SOLID", color: { r: 0.3, g: 0.3, b: 0.3 } },
  ]);

  // Bold, Underline, Color 등의 서식을 적용하기 위해 텍스트 범위 정보 추출
  const formattingRanges = extractFormattingRanges(descriptionData);

  // Bold 스타일 적용
  if (formattingRanges.bold.length > 0) {
    formattingRanges.bold.forEach((range) => {
      textNode.setRangeFontName(range.start, range.end, {
        family: "Inter",
        style: "Bold",
      });
    });
  }

  // Underline 스타일 적용
  formattingRanges.underline.forEach((range) => {
    textNode.setRangeTextDecoration(range.start, range.end, "UNDERLINE");
  });

  // Color 스타일 적용
  formattingRanges.color.forEach((colorRange) => {
    const r = parseInt(colorRange.color.slice(1, 3), 16) / 255;
    const g = parseInt(colorRange.color.slice(3, 5), 16) / 255;
    const b = parseInt(colorRange.color.slice(5, 7), 16) / 255;

    textNode.setRangeFills(colorRange.start, colorRange.end, [
      { type: "SOLID", color: { r, g, b } },
    ]);
  });

  // 리스트 스타일 적용 (Figma에서 직접적인 리스트 지원이 제한적이므로 • 문자로 대체)
  if (formattingRanges.bulletList.length > 0) {
    // 여기서는 간단히 구현합니다. 실제로는 좀 더 복잡한 변환이 필요할 수 있습니다.
    const updatedText = formattingRanges.bulletList.reduce((text, item) => {
      return text.slice(0, item.start) + "• " + text.slice(item.start);
    }, textNode.characters);

    textNode.characters = updatedText;
  }
}

// 서식 범위 추출 함수
function extractFormattingRanges(descriptionData: any) {
  let currentPosition = 0;
  const ranges = {
    bold: [],
    underline: [],
    color: [],
    bulletList: [],
  };

  function processNode(node: any, parentMarks: any[] = []) {
    // 현재 노드의 마크와 부모로부터 상속받은 마크 합치기
    const marks = [...parentMarks];
    if (node.marks) {
      marks.push(...node.marks);
    }

    // 텍스트 노드 처리
    if (node.text) {
      const start = currentPosition;
      const length = node.text.length;
      const end = start + length;

      // Bold 마크 확인
      if (marks.some((mark) => mark.type === "bold")) {
        ranges.bold.push({ start, end });
      }

      // Underline 마크 확인
      if (marks.some((mark) => mark.type === "underline")) {
        ranges.underline.push({ start, end });
      }

      // Color 마크 확인
      const colorMark = marks.find(
        (mark) => mark.type === "textStyle" && mark.attrs && mark.attrs.color
      );
      if (colorMark) {
        ranges.color.push({
          start,
          end,
          color: colorMark.attrs.color,
        });
      }

      currentPosition += length;
    }

    // bullet list 노드 확인
    if (node.type === "bulletList") {
      // 현재 위치를 리스트 시작 위치로 기록
      ranges.bulletList.push({ start: currentPosition });
    }

    // 자식 노드 처리 (재귀)
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((childNode) => {
        processNode(childNode, marks);
      });
    }
  }

  if (descriptionData.content) {
    descriptionData.content.forEach((node) => {
      processNode(node);
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

  // content 그룹 찾기
  const contentGroup = annotationFrame.findOne(
    (node) =>
      node.type === "FRAME" &&
      node.getPluginData("type") === "annotation_content"
  ) as FrameNode;

  if (!contentGroup) return sendResponse(msg.type, false);

  // description 텍스트 노드 찾아 업데이트
  if (msg.key === "description") {
    // 폰트 로드는 applyRichTextFormatting 내부에서 처리

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

      // description이 변경되면 레이아웃 조정
      annotationFrame.layoutSizingHorizontal = "FIXED";
      annotationFrame.resize(cardWidth - 20, annotationFrame.height); // 좌우 패딩 고려

      // content 그룹의 너비도 고정
      contentGroup.layoutSizingHorizontal = "FIXED";
      contentGroup.resize(
        cardWidth -
          20 -
          (annotationFrame.paddingLeft + annotationFrame.paddingRight),
        contentGroup.height
      );

      // text 노드의 너비도 고정
      descNode.layoutSizingHorizontal = "FIXED";
      descNode.resize(
        cardWidth -
          20 -
          (annotationFrame.paddingLeft + annotationFrame.paddingRight) -
          (contentGroup.paddingLeft + contentGroup.paddingRight),
        descNode.height
      );

      // annotationGroupFrame 크기 조정 (너비는 cardWidth로 고정, 높이만 변경)
      groupFrame.layoutSizingHorizontal = "FIXED";
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
        updateGroupFrameSize(groupFrame as FrameNode, msg.key, msg.value);
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

  const children = [...groupFrame.children];
  const target = children[sourceIndex - 1]; // 0부터 시작하는 인덱스로 변환

  if (target) {
    groupFrame.insertChild(destinationIndex - 1, target);

    // 순서가 바뀐 후 인덱스 번호 업데이트
    updateAnnotationIndices(groupFrame);

    // 배지 인덱스도 업데이트
    updateBadgeIndices(group.id);
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

  const groupNode = figma.getNodeById(msg.groupId);
  if (groupNode) {
    figma.viewport.scrollAndZoomIntoView([groupNode]);
  }

  // 이 핸들러는 UI로 응답을 반환하지 않음
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

  // 프레임 자체 색상 업데이트
  frame.fills = [
    {
      type: "SOLID",
      color: { r: 1, g: 1, b: 1 },
      opacity: 0.8,
    },
  ];

  // 모든 자식 주석 요소들 색상 업데이트
  frame.children.forEach((child) => {
    if (
      child.type === "FRAME" &&
      child.getPluginData("type") === "annotation"
    ) {
      // 인덱스 번호 배경색 업데이트
      const contentGroup = child.findOne(
        (node) =>
          node.type === "FRAME" &&
          node.getPluginData("type") === "annotation_content"
      ) as FrameNode;

      if (contentGroup) {
        const indexNode = contentGroup.findOne(
          (node) =>
            node.type === "TEXT" &&
            node.getPluginData("type") === "annotation_index"
        ) as TextNode;

        if (indexNode) {
          indexNode.fills = [
            {
              type: "SOLID",
              color: headerColor,
            },
          ];
        }
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
        // 배지 색상 업데이트
        badge.fills = [{ type: "SOLID", color: headerColor }];
      }
    });
}

// 그룹 프레임 크기 업데이트 함수
function updateGroupFrameSize(
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

  // 너비 설정
  frame.layoutSizingHorizontal = "FIXED";
  frame.resize(cardWidth, frame.height);

  // 사이즈 값에 따른 스타일 변경
  if (property === "cardWidth") {
    // 모든 자식 요소의 너비도 업데이트
    frame.children.forEach((child) => {
      if (
        child.type === "FRAME" &&
        child.getPluginData("type") === "annotation"
      ) {
        child.layoutSizingHorizontal = "FIXED";
        child.resize(cardWidth, child.height);

        // content 그룹 찾기
        const contentGroup = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_content"
        ) as FrameNode;

        if (contentGroup) {
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.resize(
            cardWidth - (child.paddingLeft + child.paddingRight),
            contentGroup.height
          );

          // 설명 텍스트 찾기
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(
              cardWidth -
                (child.paddingLeft + child.paddingRight) -
                (contentGroup.paddingLeft + contentGroup.paddingRight),
              descNode.height
            );
          }
        }
      }
    });
  } else if (property === "size") {
    // 폰트 크기 업데이트
    const fontSize = getFontSizeByValue(value);
    const gap = supportedFontSizes[value].gap;
    const padding = supportedFontSizes[value];

    frame.children.forEach((child) => {
      if (
        child.type === "FRAME" &&
        child.getPluginData("type") === "annotation"
      ) {
        child.itemSpacing = gap;

        // 너비 고정
        child.layoutSizingHorizontal = "FIXED";
        child.resize(cardWidth, child.height);

        // 내용 그룹 찾기
        const contentGroup = child.findOne(
          (node) =>
            node.type === "FRAME" &&
            node.getPluginData("type") === "annotation_content"
        ) as FrameNode;

        if (contentGroup) {
          contentGroup.itemSpacing = gap / 2;

          // 너비 고정
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.resize(
            cardWidth - (child.paddingLeft + child.paddingRight),
            contentGroup.height
          );

          // 설명 텍스트 업데이트
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            descNode.fontSize = fontSize;
            descNode.layoutSizingHorizontal = "FIXED";
            descNode.resize(
              cardWidth -
                (child.paddingLeft + child.paddingRight) -
                (contentGroup.paddingLeft + contentGroup.paddingRight),
              descNode.height
            );
          }
        }
      }
    });
  }
}
