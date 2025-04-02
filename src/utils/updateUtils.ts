import { findGroup } from "../services/annotationGroupService";

/**
 * 모든 주석 요소의 인덱스 번호를 업데이트합니다.
 */
export async function updateAnnotationIndices(groupFrame: FrameNode) {
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

/**
 * 배지 인덱스를 업데이트합니다.
 */
export async function updateBadgeIndices(groupId: string) {
  const group = findGroup(groupId);
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
