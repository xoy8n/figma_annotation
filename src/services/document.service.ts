import { MessageToUI } from "../types";
import {
  annotations,
  frameBadges,
  annotationGroups,
  frameAnnotationCounters,
  removeAnnotationsByFrameId,
  removeAnnotationsByNumber,
  getAllAnnotations,
} from "../models/annotation.model";
import { checkSelectedFrame } from "./frame.service";

// 노드 삭제 이벤트 감지 함수
export function handleNodeRemoval(event: DocumentChangeEvent) {
  // 문서가 변경되었을 때만 처리
  if (!event.documentChanges) return;

  let dataChanged = false;

  // 문서 변경 내용 중 삭제된 노드가 있는지 확인
  event.documentChanges.forEach((change) => {
    if (change.type === "DELETE" && change.node) {
      const deletedNode = change.node;
      const deletedNodeId = deletedNode.id;

      // 삭제된 노드 정보 가져오기
      // RemovedNode는 제한된 정보만 있으므로, id를 기반으로 작업해야 함

      // 1. 삭제된 노드의 ID가 프레임 ID와 일치하는지 확인
      // 프레임에 대한 주석이 있는지 확인
      const annotationsToRemove = annotations.filter(
        (a) => a.frameId === deletedNodeId
      );

      if (annotationsToRemove.length > 0) {
        // 주석 삭제
        removeAnnotationsByFrameId(deletedNodeId);
        dataChanged = true;
        console.log(
          `프레임 ID ${deletedNodeId} 관련 주석 ${annotationsToRemove.length}개 삭제됨`
        );

        // 프레임별 주석 카운터에서도 제거
        if (frameAnnotationCounters[deletedNodeId]) {
          delete frameAnnotationCounters[deletedNodeId];
        }
      }

      // 주석 그룹 맵에서 삭제
      if (annotationGroups[deletedNodeId]) {
        delete annotationGroups[deletedNodeId];
        dataChanged = true;
      }

      // 뱃지 맵에서 삭제
      if (frameBadges[deletedNodeId]) {
        delete frameBadges[deletedNodeId];
        dataChanged = true;
      }

      // 2. 주석 그룹 맵에서 ID가 일치하는 노드가 있는지 확인
      Object.keys(annotationGroups).forEach((frameId) => {
        if (annotationGroups[frameId].id === deletedNodeId) {
          // 해당 프레임 관련 주석 삭제
          const frameName = annotations.find(
            (a) => a.frameId === frameId
          )?.frameName;
          if (frameName) {
            removeAnnotationsByFrameId(frameId);
            dataChanged = true;
            console.log(`프레임 '${frameName}'에 대한 주석 그룹이 삭제됨`);
          }
          delete annotationGroups[frameId];
          dataChanged = true;
        }
      });

      // 3. 주석 번호로 매핑된 뱃지가 있는지 확인
      for (const frameId in frameBadges) {
        for (const badgeNumber in frameBadges[frameId]) {
          if (frameBadges[frameId][badgeNumber].id === deletedNodeId) {
            // 해당 뱃지 번호를 가진 주석이 있는지 확인하고 삭제
            const annotationNumber = parseInt(badgeNumber);
            const annotationToRemove = annotations.find(
              (a) => a.number === annotationNumber
            );
            if (annotationToRemove) {
              // 주석 배열에서 삭제
              removeAnnotationsByNumber(annotationNumber);
              dataChanged = true;
              console.log(
                `뱃지 번호 ${annotationNumber}에 해당하는 주석 삭제됨`
              );
            }

            // 뱃지 맵에서 삭제
            delete frameBadges[frameId][badgeNumber];
            dataChanged = true;
          }
        }
      }
    }
  });

  // 데이터가 변경되었으면 UI 업데이트
  if (dataChanged) {
    // 모든 주석 다시 전송
    figma.ui.postMessage({
      type: "ALL_ANNOTATIONS_LOADED",
      annotations: getAllAnnotations(),
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name,
    } as MessageToUI);

    // 현재 선택된 프레임이 있으면 해당 프레임의 주석도 업데이트
    const { selected, frameId, frameName, parentFrameId, parentFrameName } =
      checkSelectedFrame();
    if (selected && frameId) {
      const targetFrameId = parentFrameId || frameId;
      const frameAnnotations = annotations.filter(
        (a) => a.frameId === targetFrameId
      );

      figma.ui.postMessage({
        type: "FRAME_SELECTED",
        frameId: targetFrameId,
        frameName,
        annotations: frameAnnotations,
        fileTitle: figma.root.name,
        pageName: figma.currentPage.name,
        parentFrameName: parentFrameName || frameName,
      } as MessageToUI);
    }
  }
}
