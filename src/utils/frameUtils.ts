import { getColorByValue } from "./colorUtils";
import {
  getBadgeSizeByValue,
  getBadgeTextSizeByValue,
  getFontSizeByValue,
  getCardWidth,
} from "./sizeUtils";
import { findGroup } from "../services/annotationGroupService";

/**
 * 그룹 프레임 색상을 업데이트합니다.
 */
export function updateGroupFrameColor(frame: FrameNode, colorValue: number) {
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

/**
 * 그룹 프레임 크기를 업데이트합니다.
 */
export async function updateGroupFrameSize(
  frame: FrameNode,
  property: string,
  value: number
) {
  // 카드 너비 계산
  const cardWidth =
    property === "cardWidth" ? getCardWidth(value) : getCardWidth();

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

          // 인덱스 컨테이너와 내용 그룹 너비 비율 계산 (10:90)
          const indexWidth = Math.round(frameAvailableWidth * 0.1);
          const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당

          // 인덱스 컨테이너 설정
          indexContainer.layoutSizingHorizontal = "FIXED";
          indexContainer.layoutSizingVertical = "FILL"; // 중요: 항상 FILL로 설정
          indexContainer.resize(indexWidth, indexContainer.height);

          // 내용 그룹 크기 조정
          contentGroup.layoutMode = "VERTICAL";
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.layoutGrow = 1;
          contentGroup.resize(contentWidth, contentGroup.height);

          // 내부 요소들 재설정
          const indexNode = indexContainer.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_index"
          ) as TextNode;

          if (indexNode) {
            indexNode.fontSize = fontSize;
          }

          // 설명 텍스트 업데이트
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            // 기본 텍스트 크기 업데이트
            descNode.layoutSizingHorizontal = "FILL";
            descNode.textAutoResize = "HEIGHT";
            descNode.fontSize = fontSize;
          }

          // 수정 후 레이아웃 재계산을 위한 트릭 적용
          const originalWidth = child.width;
          child.resize(originalWidth + 1, child.height);
          child.resize(originalWidth, child.height);
        }
      }
    }
  }

  // cardWidth 변경 시에도 모든 주석 프레임의 레이아웃 속성 재설정
  if (property === "cardWidth") {
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
          const indexWidth = Math.round(frameAvailableWidth * 0.1);
          const contentWidth = frameAvailableWidth - indexWidth; // 정확한 계산을 위해 나머지 너비 할당

          // 인덱스 컨테이너 설정
          indexContainer.layoutSizingHorizontal = "FIXED";
          indexContainer.layoutSizingVertical = "FILL"; // 중요: 항상 FILL로 설정
          indexContainer.resize(indexWidth, indexContainer.height);

          // 내용 그룹 크기 조정
          contentGroup.layoutMode = "VERTICAL";
          contentGroup.layoutSizingHorizontal = "FIXED";
          contentGroup.layoutSizingVertical = "HUG";
          contentGroup.layoutGrow = 1;
          contentGroup.resize(contentWidth, contentGroup.height);

          // 텍스트 노드 설정
          const descNode = contentGroup.findOne(
            (node) =>
              node.type === "TEXT" &&
              node.getPluginData("type") === "annotation_description"
          ) as TextNode;

          if (descNode) {
            descNode.layoutSizingHorizontal = "FILL";
            descNode.textAutoResize = "HEIGHT";
          }

          // 수정 후 레이아웃 재계산을 위한 트릭 적용
          const originalWidth = child.width;
          child.resize(originalWidth + 1, child.height);
          child.resize(originalWidth, child.height);
        }
      }
    }
  }
}
