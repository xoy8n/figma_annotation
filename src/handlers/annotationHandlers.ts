import {
  findGroup,
  findAnnotation,
  addAnnotation,
  removeAnnotation,
  updateAnnotation,
  getAnnotationGroups,
} from "../services/annotationGroupService";
import { sendResponse } from "../utils/messageUtils";
import { createAnnotationComponents } from "../canvas/annotationElements";
import { findGroupFrame } from "../utils/nodeUtils";
import { findOrCreateGroupFrame } from "../services/annotationFrameService";
import {
  createAnnotationBadge,
  removeAnnotationBadge,
} from "../canvas/annotationElements";
import {
  updateAnnotationIndices,
  updateBadgeIndices,
} from "../utils/updateUtils";
import { applyRichTextFormatting } from "../utils/textUtils";

/**
 * CREATE_ANNOTATION 메시지 핸들러
 */
export async function handleCreateAnnotation(msg: any) {
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
  addAnnotation(msg.groupId, newAnnotation);

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
    annotations: getAnnotationGroups(),
  });
}

/**
 * DELETE_ANNOTATION 메시지 핸들러
 */
export async function handleDeleteAnnotation(msg: any) {
  const group = findGroup(msg.groupId);
  if (!group) return sendResponse(msg.type, false);

  // 그룹 내에서 주석 제거
  removeAnnotation(msg.groupId, msg.annotation.id);

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

/**
 * UPDATE_ANNOTATION 메시지 핸들러
 */
export async function handleUpdateAnnotation(msg: any) {
  const group = findGroup(msg.groupId);
  const annotation = findAnnotation(msg.groupId, msg.annotationId);

  if (!group || !annotation) return sendResponse(msg.type, false);

  // 메모리 상태 업데이트
  updateAnnotation(msg.groupId, msg.annotationId, msg.key, msg.value);

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

      // 레이아웃 업데이트를 위한 지연 처리
      setTimeout(() => {
        if (indexContainer && contentGroup) {
          // 레이아웃 속성 재설정하여 강제 업데이트

          // 1. 프레임 레이아웃 재설정
          annotationFrame.layoutMode = "HORIZONTAL";
          annotationFrame.primaryAxisSizingMode = "FIXED";
          annotationFrame.counterAxisSizingMode = "AUTO";
          annotationFrame.layoutSizingVertical = "HUG";

          // 2. 인덱스 컨테이너 레이아웃 재설정
          indexContainer.layoutSizingVertical = "FILL";

          // 3. 컨텐츠 그룹 레이아웃 재설정
          contentGroup.layoutMode = "VERTICAL";
          contentGroup.primaryAxisSizingMode = "AUTO";
          contentGroup.counterAxisSizingMode = "FIXED";
          contentGroup.layoutGrow = 1;

          // 4. 텍스트 노드 레이아웃 재설정
          descNode.layoutSizingHorizontal = "FILL";
          descNode.textAutoResize = "HEIGHT";

          // 5. 필요한 경우 레이아웃 강제 업데이트를 위한 트릭 적용
          // 약간의 크기 변경 후 원래 크기로 복원하여 레이아웃 재계산 유도
          const originalWidth = annotationFrame.width;
          annotationFrame.resize(originalWidth + 1, annotationFrame.height);
          annotationFrame.resize(originalWidth, annotationFrame.height);
        }
      }, 100);
    }
  }

  return sendResponse(msg.type, true);
}

/**
 * SYNC_ALL_ANNOTATIONS 메시지 핸들러
 * 모든 주석 그룹의 텍스트 내용을 Figma 캔버스에서 동기화합니다.
 */
export async function handleSyncAllAnnotations(msg: any) {
  const allGroups = getAnnotationGroups();
  if (!allGroups || allGroups.length === 0) {
    return sendResponse(msg.type, true, {
      annotations: getAnnotationGroups(),
    });
  }

  // 모든 그룹을 순회하며 내용 동기화
  for (const group of allGroups) {
    const groupFrame = findGroupFrame(group.id, group.groupFrameId);
    if (!groupFrame) continue;

    // 그룹 내 모든 주석 프레임 순회
    for (const annotation of group.annotations) {
      const annotationFrame = groupFrame.findOne(
        (node) => node.getPluginData("annotationId") === annotation.id
      ) as FrameNode;

      if (!annotationFrame) continue;

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

      if (!contentGroup) continue;

      // description 텍스트 노드 찾기
      const descNode = contentGroup.findOne(
        (node) =>
          node.type === "TEXT" &&
          node.getPluginData("type") === "annotation_description"
      ) as TextNode;

      if (descNode) {
        try {
          // 텍스트 노드의 모든 폰트 로드 (이 부분이 중요합니다!)
          if (descNode.hasMissingFont) {
            console.warn(
              "텍스트 노드에 누락된 폰트가 있습니다. 기본 폰트를 로드합니다."
            );
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          } else {
            // 텍스트 노드의 모든 폰트 로드
            const fontNames = descNode.getRangeAllFontNames(
              0,
              descNode.characters.length
            );
            await Promise.all(fontNames.map(figma.loadFontAsync));
          }

          // 텍스트 노드의 텍스트와 서식을 분석하여 Tiptap 호환 형식으로 변환
          const descriptionData = convertFigmaTextToTiptapFormat(descNode);

          // 메모리 상태 업데이트
          updateAnnotation(
            group.id,
            annotation.id,
            "description",
            descriptionData
          );

          // 레이아웃 업데이트를 위한 지연 처리
          setTimeout(async () => {
            if (indexContainer && contentGroup && descNode) {
              try {
                // 텍스트 속성 변경 전에 다시 한번 폰트 로드 확인
                const fontNames = descNode.getRangeAllFontNames(
                  0,
                  descNode.characters.length
                );
                await Promise.all(fontNames.map(figma.loadFontAsync));

                // 레이아웃 속성 재설정하여 강제 업데이트

                // 1. 프레임 레이아웃 재설정
                annotationFrame.layoutMode = "HORIZONTAL";
                annotationFrame.primaryAxisSizingMode = "FIXED";
                annotationFrame.counterAxisSizingMode = "AUTO";
                annotationFrame.layoutSizingVertical = "HUG";

                // 2. 인덱스 컨테이너 레이아웃 재설정
                indexContainer.layoutSizingVertical = "FILL";

                // 3. 컨텐츠 그룹 레이아웃 재설정
                contentGroup.layoutMode = "VERTICAL";
                contentGroup.primaryAxisSizingMode = "AUTO";
                contentGroup.counterAxisSizingMode = "FIXED";
                contentGroup.layoutGrow = 1;

                // 4. 텍스트 노드 레이아웃 재설정 (폰트 로드 후)
                descNode.layoutSizingHorizontal = "FILL";
                descNode.textAutoResize = "HEIGHT";

                // 5. 레이아웃 강제 업데이트를 위한 트릭 적용
                const originalWidth = annotationFrame.width;
                annotationFrame.resize(
                  originalWidth + 1,
                  annotationFrame.height
                );
                annotationFrame.resize(originalWidth, annotationFrame.height);
              } catch (error) {
                console.error("레이아웃 업데이트 중 오류 발생:", error);
              }
            }
          }, 100);
        } catch (error) {
          console.error("폰트 로드 중 오류 발생:", error);
        }
      }
    }
  }

  return sendResponse(msg.type, true, {
    annotations: getAnnotationGroups(),
  });
}

/**
 * Figma 텍스트 노드의 내용을 Tiptap 호환 형식으로 변환합니다.
 */
function convertFigmaTextToTiptapFormat(figmaTextNode: TextNode) {
  // 기본 문서 구조 생성
  const tiptapDoc = {
    type: "doc",
    content: [],
  };

  // 텍스트가 없으면 빈 문서 반환
  if (!figmaTextNode.characters || figmaTextNode.characters.length === 0) {
    tiptapDoc.content.push({
      type: "paragraph",
      content: [],
    });
    return tiptapDoc;
  }

  // 텍스트 전체 문자열
  const fullText = figmaTextNode.characters;

  // 줄바꿈 위치 찾기
  const lineBreaks = [];
  let nextLineBreak = fullText.indexOf("\n");
  while (nextLineBreak !== -1) {
    lineBreaks.push(nextLineBreak);
    nextLineBreak = fullText.indexOf("\n", nextLineBreak + 1);
  }

  // 줄 시작과 끝 위치 계산
  const lines = [];
  let startPos = 0;

  for (const breakPos of lineBreaks) {
    lines.push({
      start: startPos,
      end: breakPos,
      text: fullText.substring(startPos, breakPos),
    });
    startPos = breakPos + 1; // '\n' 다음부터 시작
  }

  // 마지막 줄 추가
  if (startPos < fullText.length) {
    lines.push({
      start: startPos,
      end: fullText.length,
      text: fullText.substring(startPos),
    });
  }

  // 빈 문자열이라면 빈 줄 하나 추가
  if (lines.length === 0) {
    lines.push({
      start: 0,
      end: 0,
      text: "",
    });
  }

  // 각 줄을 단락으로 변환
  for (const line of lines) {
    // 각 줄은 하나의 단락이 됨
    const paragraph = {
      type: "paragraph",
      content: [],
    };

    if (line.text.length > 0) {
      // 현재 줄에서 스타일 변경 지점 찾기
      let currentPos = line.start;

      while (currentPos < line.end) {
        // 현재 위치의 스타일 속성 가져오기
        const fontName = figmaTextNode.getRangeFontName(
          currentPos,
          currentPos + 1
        );
        const fills = figmaTextNode.getRangeFills(currentPos, currentPos + 1);
        const textDecoration = figmaTextNode.getRangeTextDecoration(
          currentPos,
          currentPos + 1
        );

        // 같은 스타일을 가진 범위 찾기
        let endPos = currentPos + 1;
        while (endPos < line.end) {
          const nextFontName = figmaTextNode.getRangeFontName(
            endPos,
            endPos + 1
          );
          const nextFills = figmaTextNode.getRangeFills(endPos, endPos + 1);
          const nextTextDecoration = figmaTextNode.getRangeTextDecoration(
            endPos,
            endPos + 1
          );

          // 스타일이 변경되면 범위 종료
          if (
            JSON.stringify(fontName) !== JSON.stringify(nextFontName) ||
            JSON.stringify(fills) !== JSON.stringify(nextFills) ||
            textDecoration !== nextTextDecoration
          ) {
            break;
          }

          endPos++;
        }

        // 텍스트 조각 추출 (절대 위치 기준)
        const textChunk = fullText.substring(currentPos, endPos);

        // 텍스트 노드 생성
        const tiptapTextNode = {
          type: "text",
          text: textChunk,
          marks: [],
        };

        // 볼드 스타일 확인
        if (
          fontName &&
          typeof fontName !== "symbol" &&
          "style" in fontName &&
          fontName.style === "Bold"
        ) {
          tiptapTextNode.marks.push({ type: "bold" });
        }

        // 밑줄 스타일 확인
        if (textDecoration === "UNDERLINE") {
          tiptapTextNode.marks.push({ type: "underline" });
        }

        // 색상 스타일 확인 (첫번째 fill만 고려)
        if (
          fills &&
          typeof fills !== "symbol" &&
          Array.isArray(fills) &&
          fills.length > 0 &&
          fills[0].type === "SOLID"
        ) {
          const color = fills[0].color;
          // RGB를 16진수로 변환
          const hexColor = rgbToHex(
            Math.round(color.r * 255),
            Math.round(color.g * 255),
            Math.round(color.b * 255)
          );

          if (hexColor !== "#000000") {
            // 검은색이 아닌 경우에만 색상 정보 추가
            tiptapTextNode.marks.push({
              type: "textStyle",
              attrs: { color: hexColor },
            });
          }
        }

        // 텍스트가 있는 경우에만 단락에 추가
        if (textChunk.trim().length > 0) {
          paragraph.content.push(tiptapTextNode);
        }

        // 다음 위치로 이동
        currentPos = endPos;
      }
    }

    // 빈 단락이더라도 문서에 추가 (Tiptap에서 중요)
    tiptapDoc.content.push(paragraph);
  }

  // 디버깅용 로그
  console.log("변환된 Tiptap 문서:", JSON.stringify(tiptapDoc));
  return tiptapDoc;
}

/**
 * RGB 색상값을 16진수 문자열로 변환합니다.
 */
function rgbToHex(r: number, g: number, b: number): string {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
