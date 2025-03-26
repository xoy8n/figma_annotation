import {
  Annotation,
  AnnotationSettings,
  MessageToPlugin,
  MessageToUI,
} from "./types";

// 모델 및 서비스 불러오기
import {
  annotations,
  getAllAnnotations,
  frameAnnotationCounters,
  annotationGroups,
  frameBadges,
} from "./models/annotation.model";
import {
  createAnnotation,
  updateAnnotation,
  deleteAnnotation,
  scanDocumentForAnnotations,
  reorderAnnotations,
} from "./services/annotation.service";
import { checkSelectedFrame, scrollToFrame } from "./services/frame.service";
import { handleNodeRemoval } from "./services/document.service";

// 플러그인 UI 크기 설정
figma.showUI(__html__, {
  width: 800,
  height: 600,
  themeColors: true,
});

// 폰트 로드 (폰트 관련 오류 방지를 위해 미리 로드)
figma.loadFontAsync({ family: "Inter", style: "Regular" });

// 선택 변경 이벤트 리스너
figma.on("selectionchange", () => {
  const selectionInfo = checkSelectedFrame();
  if (
    selectionInfo.selected &&
    selectionInfo.frameId &&
    selectionInfo.frameName
  ) {
    // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
    const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;

    figma.ui.postMessage({
      type: "FRAME_SELECTED",
      frameId: targetFrameId,
      frameName: selectionInfo.frameName,
      annotations: getAllAnnotations(), // 모든 주석 전송
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name,
      parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName,
    } as MessageToUI);
  } else {
    // 선택이 없어도 모든 주석 데이터 전송
    figma.ui.postMessage({
      type: "NO_FRAME_SELECTED",
      annotations: getAllAnnotations(), // 모든 주석 전송
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name,
    } as MessageToUI);
  }
});

// UI로부터 메시지 수신
figma.ui.onmessage = async (msg: MessageToPlugin) => {
  switch (msg.type) {
    case "CREATE_ANNOTATION":
      await createAnnotation(msg.annotation, msg.settings);
      break;
    case "GET_SELECTED_FRAME":
      const selectionInfo = checkSelectedFrame();
      if (
        selectionInfo.selected &&
        selectionInfo.frameId &&
        selectionInfo.frameName
      ) {
        // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
        const targetFrameId =
          selectionInfo.rootFrameId || selectionInfo.frameId;

        figma.ui.postMessage({
          type: "FRAME_SELECTED",
          frameId: targetFrameId,
          frameName: selectionInfo.frameName,
          annotations: getAllAnnotations(), // 모든 주석 전송
          fileTitle: figma.root.name,
          pageName: figma.currentPage.name,
          parentFrameName:
            selectionInfo.rootFrameName || selectionInfo.frameName,
        } as MessageToUI);
      } else {
        // 선택이 없어도 모든 주석 데이터 전송
        figma.ui.postMessage({
          type: "NO_FRAME_SELECTED",
          annotations: getAllAnnotations(), // 모든 주석 전송
          fileTitle: figma.root.name,
          pageName: figma.currentPage.name,
        } as MessageToUI);
      }
      break;
    case "DELETE_ANNOTATION":
      await deleteAnnotation(msg.id);
      break;
    case "UPDATE_ANNOTATION":
      await updateAnnotation(msg.annotation);
      break;
    case "REORDER_ANNOTATIONS":
      // 주석 재정렬 처리
      await reorderAnnotations(msg.annotations, msg.frameId);
      break;
    case "SCROLL_TO_FRAME":
      scrollToFrame(msg.frameId);
      break;
    case "SCROLL_TO_ANNOTATION_GROUP":
      // frameId에 해당하는 주석 그룹 프레임으로 뷰포트 이동
      const annotationGroupFrame = annotationGroups[msg.frameId];
      if (annotationGroupFrame) {
        // 주석 그룹 프레임이 존재하면 해당 프레임으로 뷰포트 이동
        figma.viewport.scrollAndZoomIntoView([annotationGroupFrame]);
        // 선택적으로 해당 프레임 선택
        figma.currentPage.selection = [annotationGroupFrame];
      } else {
        // 주석 그룹 프레임이 없는 경우, 원본 프레임으로 이동
        scrollToFrame(msg.frameId);
      }
      break;
    case "SCROLL_TO_ANNOTATION":
      // 특정 주석 아이템으로 이동하는 기능
      const annotationFrame = annotationGroups[msg.frameId];
      if (annotationFrame) {
        // 주석 그룹 프레임 안에서 해당 번호의 주석 아이템 찾기
        const annotationItem = annotationFrame.findChild(
          (n) => n.type === "FRAME" && n.name === `Annotation ${msg.number}`
        ) as FrameNode | null;

        if (annotationItem) {
          // 찾은 주석 아이템으로 뷰포트 이동
          figma.viewport.scrollAndZoomIntoView([annotationItem]);
          // 해당 주석 아이템 선택
          figma.currentPage.selection = [annotationItem];
        } else {
          // 주석 아이템을 찾지 못한 경우, 그룹 프레임으로 이동
          figma.viewport.scrollAndZoomIntoView([annotationFrame]);
          figma.currentPage.selection = [annotationFrame];
        }
      } else {
        // 주석 그룹 프레임이 없는 경우, 원본 프레임으로 이동
        scrollToFrame(msg.frameId);
      }
      break;
  }
};

// 노드 삭제 이벤트 리스너 등록
figma.on("documentchange", handleNodeRemoval);

// 초기화 함수
async function initialize() {
  // 도큐먼트에서 직접 주석 정보 스캔
  scanDocumentForAnnotations();

  // 항상 먼저 모든 주석 전송 (프레임 선택과 관계없이)
  figma.ui.postMessage({
    type: "ALL_ANNOTATIONS_LOADED",
    annotations: getAllAnnotations(),
    fileTitle: figma.root.name,
    pageName: figma.currentPage.name,
  } as MessageToUI);

  // 선택된 프레임이 있는 경우, 해당 프레임 정보도 전송
  const { selected, frameId, frameName, parentFrameId, parentFrameName } =
    checkSelectedFrame();
  if (selected && frameId && frameName) {
    // 타겟 프레임 ID 결정 (부모가 있으면 부모, 없으면 현재 프레임)
    const targetFrameId = parentFrameId || frameId;

    figma.ui.postMessage({
      type: "FRAME_SELECTED",
      frameId: targetFrameId,
      frameName,
      annotations: getAllAnnotations(), // 모든 주석 전송 (선택된 프레임 필터링하지 않음)
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name,
      parentFrameName: parentFrameName || frameName,
    } as MessageToUI);
  } else {
    figma.ui.postMessage({
      type: "NO_FRAME_SELECTED",
    } as MessageToUI);
  }
}

// 플러그인 시작 시 초기화 함수 호출
initialize();
