import { Annotation, AnnotationSettings, MessageToUI } from "../types";
import {
  annotations,
  annotationGroups,
  frameBadges,
  addAnnotation,
  removeAnnotation,
  updateAnnotation as updateAnnotationModel,
  clearAnnotations,
} from "../models/annotation.model";
import DOMPurify from "dompurify";
import { createBadgeOnFrame, deleteBadgeOnFrame } from "./badge.service";

// 주석 생성 함수
export async function createAnnotation(
  annotationData: Partial<Annotation>,
  settings: AnnotationSettings
) {
  const selectedNode = figma.currentPage.selection[0];
  console.log();
  if (!selectedNode) {
    figma.notify("Please select a frame first");
    return;
  }

  // 최상위 프레임 찾기
  let currentNode: BaseNode = selectedNode;
  let rootFrameNode: FrameNode | null = null;

  while (currentNode.parent) {
    if (currentNode.parent.type === "FRAME") {
      rootFrameNode = currentNode.parent as FrameNode;
    }
    currentNode = currentNode.parent;
  }

  if (!rootFrameNode) {
    figma.notify("No parent frame found");
    return;
  }

  // 다음 주석 번호 계산
  const nextAnnotationNumber = annotations.length + 1;

  // 새로운 주석 객체 생성
  const newAnnotation: Annotation = {
    id: `annotation-${Date.now()}`,
    number: nextAnnotationNumber,
    frameId: rootFrameNode.id,
    frameName: rootFrameNode.name,
    pageName: figma.currentPage.name,
    description:
      annotationData.description || `Annotation ${nextAnnotationNumber}`,
    settings: settings,
  };

  // 부모 주석 프레임 확인 또는 생성
  let parentAnnotationFrame: FrameNode | null = null;
  const annotationFrameName = `${rootFrameNode.name} Annotations`;

  // 이미 존재하는 부모 주석 프레임 찾기
  const existingParentFrame = rootFrameNode.children.find(
    (node) => node.type === "FRAME" && node.name === annotationFrameName
  ) as FrameNode | undefined;

  if (existingParentFrame) {
    // 기존 부모 프레임 사용
    parentAnnotationFrame = existingParentFrame;
  } else {
    // 새로운 부모 주석 프레임 생성
    parentAnnotationFrame = figma.createFrame();
    parentAnnotationFrame.name = annotationFrameName;
    parentAnnotationFrame.layoutMode = "VERTICAL";
    parentAnnotationFrame.primaryAxisAlignItems = "MIN";
    parentAnnotationFrame.counterAxisAlignItems = "MIN";
    parentAnnotationFrame.itemSpacing = 5;
    parentAnnotationFrame.fills = [];
    parentAnnotationFrame.strokes = [];
    parentAnnotationFrame.resize(320, 220);
    parentAnnotationFrame.x = rootFrameNode.width - parentAnnotationFrame.width;
    parentAnnotationFrame.y = rootFrameNode.y + parentAnnotationFrame.height;

    // Description 텍스트 헤더 추가
    const descriptionHeader = figma.createText();
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });
    descriptionHeader.fontName = { family: "Inter", style: "Bold" };
    descriptionHeader.characters = "Description";
    descriptionHeader.fontSize = 16;
    descriptionHeader.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
    descriptionHeader.textAlignHorizontal = "CENTER";

    // 헤더를 부모 프레임에 추가
    parentAnnotationFrame.appendChild(descriptionHeader);

    // 부모 주석 프레임을 최상위 프레임에 추가
    rootFrameNode.appendChild(parentAnnotationFrame);
  }

  // 주석 그룹 프레임 생성
  const annotationGroupFrame = figma.createFrame();
  annotationGroupFrame.name = `Annotation Group ${nextAnnotationNumber}`;
  annotationGroupFrame.layoutMode = "HORIZONTAL";
  annotationGroupFrame.primaryAxisAlignItems = "MIN";
  annotationGroupFrame.counterAxisAlignItems = "CENTER";
  annotationGroupFrame.itemSpacing = 12;
  annotationGroupFrame.paddingTop = 12;
  annotationGroupFrame.paddingRight = 16;
  annotationGroupFrame.paddingBottom = 12;
  annotationGroupFrame.paddingLeft = 16;
  annotationGroupFrame.fills = [];
  annotationGroupFrame.strokes = [];
  annotationGroupFrame.resize(300, 50); // 최소 높이로 시작

  // 번호 텍스트 노드 생성
  const numberText = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
  numberText.fontName = { family: "Inter", style: "Bold" };
  numberText.characters = nextAnnotationNumber.toString();
  numberText.fontSize = 16;
  numberText.fills = [{ type: "SOLID", color: { r: 0.43, g: 0.33, b: 0.81 } }]; // #6E56CF
  numberText.textAlignHorizontal = "CENTER";
  numberText.textAlignVertical = "CENTER";
  numberText.resize(24, 24);

  // 번호 노드를 그룹 프레임에 추가
  annotationGroupFrame.appendChild(numberText);

  // 주석 텍스트를 담을 컨테이너 생성
  const textContainer = figma.createFrame();
  textContainer.name = "Text Container";
  textContainer.layoutMode = "VERTICAL";
  textContainer.primaryAxisAlignItems = "MIN";
  textContainer.counterAxisAlignItems = "MIN";
  textContainer.itemSpacing = 0;
  textContainer.fills = [];
  textContainer.layoutGrow = 1;

  // 주석 텍스트 노드 생성
  const annotationText = figma.createText();
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  annotationText.characters = newAnnotation.description;
  annotationText.fontSize = settings.fontSize === "small" ? 12 : 14;
  annotationText.fills = [{ type: "SOLID", color: { r: 0, g: 0, b: 0 } }];
  annotationText.textAutoResize = "HEIGHT";
  annotationText.textAlignHorizontal = "LEFT";
  annotationText.textAlignVertical = "TOP";
  annotationText.constraints = { horizontal: "SCALE", vertical: "SCALE" };
  annotationText.layoutAlign = "STRETCH";

  // 주석 텍스트를 컨테이너에 추가
  textContainer.appendChild(annotationText);

  // 텍스트 컨테이너를 그룹 프레임에 추가
  annotationGroupFrame.appendChild(textContainer);

  // 텍스트 길이에 따라 프레임 높이 조정
  const paddingVertical =
    annotationGroupFrame.paddingTop + annotationGroupFrame.paddingBottom;
  const textWidth = 300 - paddingVertical - 24 - 12 - 16; // 전체 너비 - 패딩 - 번호 너비 - 간격 - 여유 공간
  annotationText.resize(textWidth, annotationText.height);

  // 텍스트 높이에 맞게 그룹 프레임 높이 조정
  setTimeout(() => {
    const newHeight = annotationText.height + paddingVertical;
    annotationGroupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px
  }, 50);

  // 주석 그룹 프레임을 부모 주석 프레임에 추가
  parentAnnotationFrame.appendChild(annotationGroupFrame);

  newAnnotation.groupFrameId = annotationGroupFrame.id;

  // 뱃지 생성
  createBadgeOnFrame(
    selectedNode as FrameNode,
    nextAnnotationNumber,
    settings.color
  );

  // 주석 목록에 추가
  addAnnotation(newAnnotation);

  // UI에 새 주석 생성 알림
  figma.ui.postMessage({
    type: "ANNOTATION_CREATED",
    annotation: newAnnotation,
    fileTitle: figma.root.name,
    pageName: figma.currentPage.name,
    parentFrameName: rootFrameNode.name,
  });
}

// 주석 삭제 함수
export async function deleteAnnotation(annotationId: string) {
  const removedAnnotation = removeAnnotation(annotationId);
  if (!removedAnnotation) return;

  // 주석 그룹 프레임 삭제
  const groupFrame = figma.getNodeById(
    removedAnnotation.groupFrameId
  ) as FrameNode;
  if (groupFrame) {
    // 그룹 프레임의 부모(Annotations 프레임) 찾기
    const parentFrame = groupFrame.parent as FrameNode;

    // 그룹 프레임 삭제
    groupFrame.remove();

    // 부모 프레임에 자식이 1개 이하(Description 헤더만 있을 때)면 부모 프레임도 삭제
    if (parentFrame && parentFrame.children.length <= 1) {
      parentFrame.remove();
    }
  }

  // 삭제할 주석의 뱃지 삭제
  const badgeNode = figma.currentPage.findChild(
    (n) => n.type === "FRAME" && n.name === `Badge ${removedAnnotation.number}`
  ) as FrameNode | null;

  if (badgeNode) {
    badgeNode.remove();
  }

  // 프레임 위에 있는 뱃지 삭제
  const targetFrame = figma.currentPage.findChild(
    (n) => n.type === "FRAME" && n.name === removedAnnotation.frameName
  ) as FrameNode;

  if (targetFrame) {
    deleteBadgeOnFrame(targetFrame, removedAnnotation.number);
  } else {
    // 프레임을 찾지 못한 경우, 현재 페이지의 모든 프레임에서 해당 뱃지 확인
    figma.currentPage.findAll((node) => {
      if (
        node.type === "FRAME" &&
        !node.name.includes("Annotations") &&
        !node.name.startsWith("Badge")
      ) {
        // 해당 프레임 ID에 관련된 뱃지가 있는지 확인
        if (
          frameBadges[node.id] &&
          frameBadges[node.id][removedAnnotation.number]
        ) {
          deleteBadgeOnFrame(node as FrameNode, removedAnnotation.number);
          return true;
        }
      }
      return false;
    });
  }

  // 남은 주석들의 번호 재정렬
  const remainingAnnotations = annotations.sort((a, b) => a.number - b.number);
  const updatedAnnotations = [];

  // 각 주석의 번호를 1부터 순차적으로 재할당
  remainingAnnotations.forEach((annotation, index) => {
    const newNumber = index + 1;
    const oldNumber = annotation.number;

    if (oldNumber !== newNumber) {
      console.log(`주석 번호 변경: ${oldNumber} -> ${newNumber}`);

      // 주석 번호 업데이트
      annotation.number = newNumber;

      // 주석 그룹 프레임 업데이트
      const annotationGroupFrame = figma.getNodeById(
        annotation.groupFrameId
      ) as FrameNode;
      if (annotationGroupFrame) {
        // 그룹 프레임 이름 업데이트
        annotationGroupFrame.name = `Annotation Group ${newNumber}`;
        console.log(`주석 그룹 프레임 이름 변경: ${annotationGroupFrame.name}`);

        // 그룹 프레임 안의 번호 텍스트 업데이트
        const numberText = annotationGroupFrame.findChild(
          (n) =>
            n.type === "TEXT" &&
            n.fontSize === 16 &&
            !n.name.includes("Container")
        ) as TextNode | null;

        if (numberText) {
          numberText.characters = newNumber.toString();
          console.log(
            `그룹 프레임 내 번호 텍스트 변경: ${oldNumber} -> ${newNumber}`
          );
        } else {
          console.log(`그룹 프레임 내 번호 텍스트를 찾을 수 없음`);
        }
      }

      // 독립 뱃지 프레임 찾기 (이전 번호로 찾아야 함)
      const badgeFrame = figma.currentPage.findChild(
        (n) => n.type === "FRAME" && n.name === `Badge ${oldNumber}`
      ) as FrameNode | null;

      if (badgeFrame) {
        // 뱃지 이름 업데이트
        badgeFrame.name = `Badge ${newNumber}`;
        console.log(`뱃지 이름 변경: Badge ${oldNumber} -> Badge ${newNumber}`);

        // 뱃지 텍스트 업데이트
        const badgeText = badgeFrame.findChild(
          (n) => n.type === "TEXT" && n.name === "BadgeText"
        ) as TextNode | null;

        if (badgeText) {
          badgeText.characters = newNumber.toString();
          console.log(`뱃지 텍스트 변경: ${oldNumber} -> ${newNumber}`);
        }
      } else {
        console.log(`뱃지를 찾을 수 없음: Badge ${oldNumber}`);
      }

      // 프레임 위에 있는 뱃지 업데이트 (frameBadges 맵 사용)
      const frameId = annotation.frameId;
      if (frameBadges[frameId] && frameBadges[frameId][oldNumber]) {
        // 뱃지 프레임 참조 가져오기
        const frameBadge = frameBadges[frameId][oldNumber];

        // 뱃지 이름 업데이트
        frameBadge.name = `Badge ${newNumber}`;

        // 뱃지 내부 텍스트 찾기 및 업데이트
        const badgeText = frameBadge.findChild(
          (n) => n.type === "TEXT" && n.name === "BadgeText"
        ) as TextNode | null;

        if (badgeText) {
          badgeText.characters = newNumber.toString();
          console.log(
            `프레임 위 뱃지 텍스트 변경: ${oldNumber} -> ${newNumber}`
          );
        }

        // 새 번호로 뱃지 맵 업데이트
        frameBadges[frameId][newNumber] = frameBadges[frameId][oldNumber];
        delete frameBadges[frameId][oldNumber];
        console.log(`프레임 뱃지 맵 업데이트: ${oldNumber} -> ${newNumber}`);
      }

      // 업데이트된 주석 추가
      updatedAnnotations.push(annotation);
    }
  });

  // UI에 주석 삭제 알림
  figma.ui.postMessage({
    type: "ANNOTATION_DELETED",
    id: annotationId,
  });

  // 변경된 주석들에 대한 정보도 UI에 전송
  updatedAnnotations.forEach((annotation) => {
    figma.ui.postMessage({
      type: "ANNOTATION_UPDATED",
      annotation: annotation,
    });
  });
}

// 주석 업데이트 함수
export async function updateAnnotation(updatedAnnotation: Annotation) {
  try {
    // 폰트 로드 - 텍스트 변경 전 필요
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });

    // 주석 정보 업데이트
    updateAnnotationModel(updatedAnnotation);

    // 주석 그룹 프레임 찾기
    const groupFrame = figma.getNodeById(
      updatedAnnotation.groupFrameId
    ) as FrameNode | null;

    if (groupFrame) {
      // 텍스트 컨테이너 찾기
      const textContainer = groupFrame.findChild(
        (n) => n.type === "FRAME" && n.name === "Text Container"
      ) as FrameNode | null;

      if (textContainer) {
        // 텍스트 컨테이너 내의 텍스트 노드 찾기
        const textNode = textContainer.findChild(
          (n) => n.type === "TEXT"
        ) as TextNode | null;

        // 텍스트 노드를 찾았다면 텍스트 내용 업데이트
        if (textNode) {
          textNode.characters = updatedAnnotation.description;

          // 텍스트 내용이 업데이트된 후, 텍스트를 기반으로 그룹 프레임 크기 조정
          // 텍스트 노드의 높이에 패딩 값을 고려하여 그룹 프레임 높이 계산
          const paddingVertical =
            groupFrame.paddingTop + groupFrame.paddingBottom;
          const numberWidth = 24; // 번호 텍스트 너비
          const itemSpacing = groupFrame.itemSpacing || 12;
          const textWidth =
            300 - paddingVertical - numberWidth - itemSpacing - 16; // 여유 공간 제외

          // 텍스트 너비 설정
          textNode.resize(textWidth, textNode.height);

          // 텍스트 자동 리사이즈가 적용될 시간을 주기 위해 약간의 지연
          setTimeout(() => {
            // 텍스트 높이에 맞춰 그룹 프레임 높이 조정
            const newHeight = textNode.height + paddingVertical;
            groupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px 유지
          }, 50);
        } else {
          console.warn("텍스트 컨테이너에서 텍스트 노드를 찾을 수 없음");
        }
      } else {
        // 이전 구조의 경우 직접 텍스트 노드 찾기
        const textNode = groupFrame.findChild(
          (n) => n.type === "TEXT" && n.fontSize !== 16 // 번호 텍스트는 16px, 설명 텍스트는 아님
        ) as TextNode | null;

        if (textNode) {
          textNode.characters = updatedAnnotation.description;

          // 이전 구조에서도 텍스트 기반 높이 조정
          const paddingVertical =
            groupFrame.paddingTop + groupFrame.paddingBottom;

          // 텍스트 자동 리사이즈가 적용될 시간을 주기 위해 약간의 지연
          setTimeout(() => {
            // 텍스트 높이에 맞춰 그룹 프레임 높이 조정
            const newHeight = textNode.height + paddingVertical;
            groupFrame.resize(300, Math.max(50, newHeight)); // 최소 높이 50px 유지
          }, 50);
        } else {
          console.warn("주석 그룹 프레임에서 텍스트 노드를 찾을 수 없음");
        }
      }
    } else {
      console.warn(
        `주석 그룹 프레임을 찾을 수 없음: ${updatedAnnotation.groupFrameId}`
      );
    }

    // 업데이트된 주석 정보를 UI에 알림
    figma.ui.postMessage({
      type: "ANNOTATION_UPDATED",
      annotation: updatedAnnotation,
    } as MessageToUI);

    console.log(
      `주석 ID ${updatedAnnotation.id} 업데이트 완료`,
      updatedAnnotation
    );
  } catch (error) {
    console.error(`주석 업데이트 중 오류 발생:`, error);
  }
}

// 도큐먼트에서 기존 주석 정보 가져오기
export function scanDocumentForAnnotations() {
  // 프레임별 주석 번호 맵
  let frameMaxAnnotationNumbers: { [frameId: string]: number } = {};

  // 모든 페이지를 대상으로 주석 스캔
  function scanAllPages() {
    // 기존 주석 데이터 초기화
    clearAnnotations();

    // 모든 페이지를 순회하며 스캔
    figma.root.children.forEach((page) => {
      scanPage(page);
    });

    console.log(
      `전체 ${figma.root.children.length}개 페이지에서 ${annotations.length}개 주석 발견`
    );
  }

  // 페이지 내 주석 스캔
  function scanPage(page) {
    console.log(`페이지 '${page.name}' 스캔 중...`);

    // 페이지의 모든 노드 스캔
    function scanNode(node) {
      // 부모 주석 프레임이면 처리 (예: "프레임이름 Annotations")
      if (node.type === "FRAME" && node.name.includes("Annotations")) {
        // 주석 그룹 이름에서 원본 프레임 이름 추출
        const frameName = node.name.replace(" Annotations", "");

        // 원본 프레임 찾기 시도
        let targetFrameId = "";
        page.findAll((n) => {
          if (n.type === "FRAME" && n.name === frameName) {
            targetFrameId = n.id;
            return true;
          }
          return false;
        });

        // 프레임 ID를 찾은 경우에만 매핑
        if (targetFrameId) {
          // 주석 그룹을 관리 맵에 추가 (원본 프레임 ID로 매핑)
          annotationGroups[targetFrameId] = node as FrameNode;

          // 해당 프레임에 대한 최대 주석 번호 초기화
          if (!frameMaxAnnotationNumbers[targetFrameId]) {
            frameMaxAnnotationNumbers[targetFrameId] = 0;
          }
        }

        // 자식 노드에서 주석 그룹 찾기 (새로운 구조 지원)
        node.children.forEach((child) => {
          // Description 텍스트 헤더는 건너뛰기
          if (child.type === "TEXT" && child.characters === "Description") {
            return;
          }

          if (
            child.type === "FRAME" &&
            child.name.includes("Annotation Group ")
          ) {
            // 주석 번호 추출
            const numberMatch = child.name.match(/Annotation Group (\d+)/);
            if (numberMatch && targetFrameId) {
              const annotationNumber = parseInt(numberMatch[1]);

              // 해당 프레임의 최대 주석 번호 업데이트
              if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
                frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
              }

              // 주석 설명 추출 (새 구조 - 텍스트 컨테이너 내부의 텍스트 노드)
              let description = "";

              // 텍스트 컨테이너 찾기
              const textContainer = child.findChild(
                (n) => n.type === "FRAME" && n.name === "Text Container"
              ) as FrameNode | null;

              if (textContainer) {
                // 텍스트 컨테이너 내의 텍스트 노드 찾기
                const textNode = textContainer.findChild(
                  (n) => n.type === "TEXT"
                ) as TextNode | null;
                if (textNode) {
                  description = textNode.characters;
                }
              } else {
                // 이전 구조의 직접 텍스트 노드 지원
                child.children.forEach((node) => {
                  if (node.type === "TEXT") {
                    description = node.characters;
                  }
                });
              }

              // annotations 배열에 주석 추가
              if (description) {
                addAnnotation({
                  id: Date.now() + "-" + annotationNumber,
                  number: annotationNumber,
                  description: description,
                  frameId: targetFrameId,
                  frameName: frameName,
                  pageName: page.name,
                  groupFrameId: child.id,
                  settings: {
                    color: "#6E56CF",
                    fontSize: "small",
                    cardWidth: "small",
                  },
                });
              }
            }
          }
        });

        return; // 부모 주석 프레임은 처리했으므로 여기서 반환
      }

      // 기존 구조 지원 (직접적인 주석 항목인 경우 - 이전 버전과의 호환성 유지)
      if (node.type === "FRAME" && node.name.includes("Annotation ")) {
        // 주석이 속한 프레임 찾기 (부모가 프레임인 경우)
        if (node.parent && node.parent.type === "FRAME") {
          const parentFrame = node.parent as FrameNode;
          let targetFrameId = "";
          let frameName = "";

          // 부모 프레임이 Annotations 그룹인지 확인
          if (parentFrame.name.includes("Annotations")) {
            // 원본 프레임 이름 추출
            frameName = parentFrame.name.replace(" Annotations", "");

            // 원본 프레임 찾기
            page.findAll((n) => {
              if (n.type === "FRAME" && n.name === frameName) {
                targetFrameId = n.id;
                return true;
              }
              return false;
            });
          }

          if (targetFrameId) {
            // 주석 번호 추출
            const numberMatch = node.name.match(/Annotation (\d+)/);
            if (numberMatch) {
              const annotationNumber = parseInt(numberMatch[1]);

              // 해당 프레임의 최대 주석 번호 업데이트
              if (!frameMaxAnnotationNumbers[targetFrameId]) {
                frameMaxAnnotationNumbers[targetFrameId] = 0;
              }
              if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
                frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
              }

              // 주석 제목과 설명 추출
              let description = "";
              node.children.forEach((annotationItem) => {
                if (annotationItem.type === "TEXT") {
                  if (annotationItem.name === "description") {
                    description = annotationItem.characters;
                  }
                }
              });

              // annotations 배열에 주석 추가
              if (description) {
                addAnnotation({
                  id: Date.now() + "-" + annotationNumber,
                  number: annotationNumber,
                  description: description,
                  frameId: targetFrameId,
                  frameName: frameName,
                  pageName: page.name,
                  groupFrameId: node.id,
                  settings: {
                    color: "#6E56CF",
                    fontSize: "small",
                    cardWidth: "small",
                  },
                });
              }
            }
          }
        }
      }

      // 뱃지인지 확인 (현재 페이지에 직접 추가된 뱃지)
      if (node.type === "FRAME" && node.name.startsWith("Badge ")) {
        const numberMatch = node.name.match(/Badge (\d+)/);
        if (numberMatch) {
          const badgeNumber = parseInt(numberMatch[1]);

          // 위치 기반으로 가장 가까운 프레임 찾기
          let closestFrame = null;
          let minDistance = Infinity;

          page.findAll((n) => {
            if (
              n.type === "FRAME" &&
              !n.name.includes("Annotations") &&
              !n.name.startsWith("Badge")
            ) {
              // 뱃지와 프레임 간의 거리 계산
              const distance = Math.sqrt(
                Math.pow(node.x - n.x, 2) + Math.pow(node.y - n.y, 2)
              );

              // 가장 가까운 프레임 업데이트
              if (distance < minDistance) {
                minDistance = distance;
                closestFrame = n;
              }

              return false;
            }
            return false;
          });

          // 가장 가까운 프레임이 있고, 거리가 충분히 가까우면 매핑
          if (closestFrame && minDistance < 100) {
            // 거리 임계값은 조정 가능
            const frameId = closestFrame.id;
            if (!frameBadges[frameId]) {
              frameBadges[frameId] = {};
            }
            frameBadges[frameId][badgeNumber] = node as FrameNode;

            // 프레임별 주석 번호 카운터 초기화
            if (!frameMaxAnnotationNumbers[frameId]) {
              frameMaxAnnotationNumbers[frameId] = 0;
            }
            // 최대 주석 번호 업데이트
            if (badgeNumber > frameMaxAnnotationNumbers[frameId]) {
              frameMaxAnnotationNumbers[frameId] = badgeNumber;
            }
          }
        }
      }

      // 재귀적으로 자식 노드 스캔
      if ("children" in node) {
        node.children.forEach(scanNode);
      }
    }

    // 페이지의 모든 노드 스캔 시작
    scanNode(page);
  }

  // 모든 페이지 스캔 시작
  scanAllPages();
}

// 주석 재정렬 함수
export async function reorderAnnotations(
  updatedAnnotations: Annotation[],
  frameId: string
) {
  try {
    // 폰트 로드
    await figma.loadFontAsync({ family: "Inter", style: "Regular" });
    await figma.loadFontAsync({ family: "Inter", style: "Bold" });

    console.log(`재정렬 시작: ${updatedAnnotations.length}개 주석`);

    // 모든 주석 업데이트
    for (const annotation of updatedAnnotations) {
      // 기존 모델 데이터 업데이트
      updateAnnotationModel(annotation);

      // 주석 그룹 프레임 업데이트
      const annotationGroupFrame = figma.getNodeById(
        annotation.groupFrameId
      ) as FrameNode;

      if (annotationGroupFrame) {
        // 그룹 프레임 이름 업데이트
        annotationGroupFrame.name = `Annotation Group ${annotation.number}`;

        // 그룹 프레임 안의 번호 텍스트 업데이트
        const numberText = annotationGroupFrame.findChild(
          (n) =>
            n.type === "TEXT" &&
            n.fontSize === 16 &&
            !n.name.includes("Container")
        ) as TextNode | null;

        if (numberText) {
          numberText.characters = annotation.number.toString();
          console.log(`그룹 프레임 내 번호 텍스트 변경: ${annotation.number}`);
        }
      }

      // 독립 뱃지 프레임 찾기
      const badgeFrame = figma.currentPage.findChild(
        (n) => n.type === "FRAME" && n.name === `Badge ${annotation.number}`
      ) as FrameNode | null;

      if (badgeFrame) {
        // 뱃지 텍스트 업데이트
        const badgeText = badgeFrame.findChild(
          (n) => n.type === "TEXT" && n.name === "BadgeText"
        ) as TextNode | null;

        if (badgeText) {
          badgeText.characters = annotation.number.toString();
          console.log(`뱃지 텍스트 변경: ${annotation.number}`);
        }
      }

      // 프레임 위에 있는 뱃지 업데이트
      if (frameBadges[frameId] && frameBadges[frameId][annotation.number]) {
        const frameBadge = frameBadges[frameId][annotation.number];

        // 뱃지 내부 텍스트 찾기 및 업데이트
        const badgeText = frameBadge.findChild(
          (n) => n.type === "TEXT" && n.name === "BadgeText"
        ) as TextNode | null;

        if (badgeText) {
          badgeText.characters = annotation.number.toString();
          console.log(`프레임 위 뱃지 텍스트 변경: ${annotation.number}`);
        }
      }
    }

    // UI에 업데이트된 주석 전체 전송
    figma.ui.postMessage({
      type: "ANNOTATIONS_LOADED",
      annotations: annotations, // getAllAnnotations 함수 대신 annotations 배열 직접 사용
    });

    console.log("주석 재정렬 완료");
  } catch (error) {
    console.error("주석 재정렬 중 오류 발생:", error);
  }
}
