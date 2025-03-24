import { Annotation, AnnotationSettings, MessageToPlugin, MessageToUI } from './types';

// 플러그인 UI 크기 설정
figma.showUI(__html__, { 
  width: 800, 
  height: 600,
  themeColors: true
});

// 주석 데이터를 저장하는 배열
let annotations: Annotation[] = [];
// 전역 주석 카운터 대신 프레임별 주석 번호 관리
let frameAnnotationCounters: {[frameId: string]: number} = {};
// 현재 선택된 프레임 ID와 해당 프레임의 주석 그룹을 저장
let annotationGroups: {[frameId: string]: FrameNode} = {};
// 프레임에 추가된 뱃지를 추적하기 위한 맵
let frameBadges: {[frameId: string]: {[annotationNumber: number]: FrameNode}} = {};

// 도큐먼트에서 기존 주석 정보 가져오기
function scanDocumentForAnnotations() {
  // 프레임별 주석 번호 맵
  let frameMaxAnnotationNumbers: {[frameId: string]: number} = {};
  
  // 현재 페이지의 모든 노드 스캔
  function scanNode(node) {
    // 프레임의 주석 그룹이면 처리
    if (node.type === 'FRAME' && node.name.includes('Annotations')) {
      // 주석 그룹 이름에서 원본 프레임 이름 추출
      const frameName = node.name.replace(' Annotations', '');
      
      // 원본 프레임 찾기 시도
      let targetFrameId = '';
      figma.currentPage.findAll(n => {
        if (n.type === 'FRAME' && n.name === frameName) {
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
      
      // 자식 노드 중 주석 항목 검색
      node.children.forEach(child => {
        if (child.type === 'FRAME' && child.name.includes('Annotation ')) {
          // 주석 번호 추출
          const numberMatch = child.name.match(/Annotation (\d+)/);
          if (numberMatch && targetFrameId) {
            const annotationNumber = parseInt(numberMatch[1]);
            
            // 해당 프레임의 최대 주석 번호 업데이트
            if (annotationNumber > frameMaxAnnotationNumbers[targetFrameId]) {
              frameMaxAnnotationNumbers[targetFrameId] = annotationNumber;
            }
            
            // 주석 제목과 설명 추출
            let description = '';
            
            child.children.forEach(annotationItem => {
              if (annotationItem.type === 'TEXT') {
                 if (annotationItem.name === 'description') {
                  description = annotationItem.characters;
                }
              }
            });
            
            // annotations 배열에 주석 추가
            if (description) {
              annotations.push({
                id: Date.now() + '-' + annotationNumber,
                number: annotationNumber,
                description: description,
                frameId: targetFrameId, // 원본 프레임 ID로 매핑
                frameName: frameName,
                settings: {
                  color: "#6E56CF",
                  fontSize: "small",
                  cardWidth: "small"
                }
              });
            }
          }
        }
      });
    }
    
    // 뱃지인지 확인 (현재 페이지에 직접 추가된 뱃지)
    if (node.type === 'FRAME' && node.name.startsWith('Badge ')) {
      const numberMatch = node.name.match(/Badge (\d+)/);
      if (numberMatch) {
        const badgeNumber = parseInt(numberMatch[1]);
        
        // 위치 기반으로 가장 가까운 프레임 찾기
        // 이 부분은 실제 구현 시 더 복잡할 수 있음
        let closestFrame = null;
        let minDistance = Infinity;
        
        figma.currentPage.findAll(n => {
          if (n.type === 'FRAME' && !n.name.includes('Annotations') && !n.name.startsWith('Badge')) {
            // 뱃지와 프레임 간의 거리 계산
            const distance = Math.sqrt(
              Math.pow(node.x - n.x, 2) + 
              Math.pow(node.y - n.y, 2)
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
        if (closestFrame && minDistance < 100) { // 거리 임계값은 조정 가능
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
    if ('children' in node) {
      node.children.forEach(scanNode);
    }
  }
  
  // 현재 페이지부터 스캔 시작
  scanNode(figma.currentPage);
  
  // 프레임별 주석 번호 카운터 업데이트 (각 프레임마다 다음 번호는 최대 번호 + 1)
  Object.keys(frameMaxAnnotationNumbers).forEach(frameId => {
    frameAnnotationCounters[frameId] = frameMaxAnnotationNumbers[frameId] + 1;
  });
  
  console.log('도큐먼트 스캔 완료:', annotations.length, '개 주석 발견');
}

// 현재 선택된 프레임이 있는지 확인하고, 최상위 프레임 정보도 반환
function checkSelectedFrame(): { 
  selected: boolean; 
  frameNode?: FrameNode; 
  frameId?: string; 
  frameName?: string;
  parentFrameNode?: FrameNode;
  parentFrameId?: string;
  parentFrameName?: string;
  selectedNode?: SceneNode;
  rootFrameNode?: FrameNode; // 최상위 프레임 추가
  rootFrameId?: string;      // 최상위 프레임 ID 추가
  rootFrameName?: string;    // 최상위 프레임 이름 추가
} {
  const selection = figma.currentPage.selection;
  
  if (selection.length !== 1) {
    return { selected: false };
  }
  
  const node = selection[0];
  let frameNode: FrameNode | null = null;
  let rootFrameNode: FrameNode | null = null;
  
  // 선택된 노드가 직접 프레임인 경우
  if (node.type === 'FRAME') {
    frameNode = node as FrameNode;
  } 
  // 프레임이 아닌 다른 레이어를 선택한 경우 부모 프레임 찾기
  else {
    // 부모 노드 체인을 따라가면서 가장 가까운 프레임 찾기
    let parent = node.parent;
    while (parent) {
      if (parent.type === 'FRAME') {
        frameNode = parent as FrameNode;
        break;
      }
      parent = parent.parent;
    }
    
    // 프레임을 찾지 못한 경우
    if (!frameNode) {
      return { selected: false, selectedNode: node };
    }
  }
  
  // 찾은 프레임의 부모 프레임 찾기
  let parentFrame: FrameNode | null = null;
  
  // 부모 노드가 프레임인지 확인
  if (frameNode.parent && frameNode.parent.type === 'FRAME') {
    parentFrame = frameNode.parent as FrameNode;
  }
  
  // 최상위 프레임 찾기 - 부모가 페이지인 프레임
  rootFrameNode = frameNode;
  let currentNode = frameNode;
  
  // 부모 체인을 따라 올라가며 최상위 프레임 찾기
  while (currentNode.parent && currentNode.parent.type === 'FRAME') {
    currentNode = currentNode.parent as FrameNode;
    rootFrameNode = currentNode;
  }
  
  return { 
    selected: true, 
    frameNode: frameNode, 
    frameId: frameNode.id, 
    frameName: frameNode.name,
    parentFrameNode: parentFrame,
    parentFrameId: parentFrame?.id,
    parentFrameName: parentFrame?.name,
    selectedNode: node,
    rootFrameNode: rootFrameNode,
    rootFrameId: rootFrameNode?.id,
    rootFrameName: rootFrameNode?.name
  };
}

// 프레임에 뱃지 추가 함수 - 항상 최상위 프레임을 기준으로 생성
function createBadgeOnFrame(frameNode: FrameNode, annotationNumber: number, color: string): FrameNode {
  // 최상위 프레임 찾기
  let rootFrameNode = frameNode;
  let currentNode: BaseNode = frameNode;

  // 부모 체인을 끝까지 올라가며 가장 상위의 프레임 찾기
  while (currentNode.parent) {
    if (currentNode.parent.type === 'FRAME') {
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
  badgeCircle.fills = [{ 
    type: 'SOLID', 
    color: { 
      r: colorValues.r / 255, 
      g: colorValues.g / 255, 
      b: colorValues.b / 255 
    } 
  }];
  
  // 뱃지 텍스트 생성
  const badgeText = figma.createText();
  badgeText.name = `BadgeText`;
  badgeText.characters = annotationNumber.toString();
  badgeText.fontSize = 12;
  badgeText.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];
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
  const frameId = rootFrameNode.id;  // 최상위 프레임 ID 사용
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
      badgeContainer.x = (nodeX - rootAbsoluteX) + 10 + (badgeCount * 28);
    } else {
      badgeContainer.x = 10 + (badgeCount * 28);
    }
  }
  
  // 뱃지 맵에 저장 (최상위 프레임 ID 사용)
  frameBadges[frameId][annotationNumber] = badgeContainer;
  
  return badgeContainer;
}

// 주석 생성 함수
async function createAnnotation(annotationData: Partial<Annotation>, settings: AnnotationSettings) {
  const selectedNode = figma.currentPage.selection[0];
  if (!selectedNode) {
    figma.notify('Please select a frame first');
    return;
  }

  // 최상위 프레임 찾기
  let currentNode: BaseNode = selectedNode;
  let rootFrameNode: FrameNode | null = null;
  
  while (currentNode.parent) {
    if (currentNode.parent.type === 'FRAME') {
      rootFrameNode = currentNode.parent as FrameNode;
    }
    currentNode = currentNode.parent;
  }

  if (!rootFrameNode) {
    figma.notify('No parent frame found');
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
    description: annotationData.description || `Annotation ${nextAnnotationNumber}`,
    settings: settings
  };

  // 주석 그룹 프레임 생성
  const annotationGroupFrame = figma.createFrame();
  annotationGroupFrame.name = `Annotation Group ${nextAnnotationNumber}`;
  annotationGroupFrame.layoutMode = "VERTICAL";
  annotationGroupFrame.primaryAxisAlignItems = "MIN";
  annotationGroupFrame.counterAxisAlignItems = "MIN";
  annotationGroupFrame.itemSpacing = 8;
  annotationGroupFrame.paddingTop = 16;
  annotationGroupFrame.paddingRight = 16;
  annotationGroupFrame.paddingBottom = 16;
  annotationGroupFrame.paddingLeft = 16;
  annotationGroupFrame.fills = [];
  annotationGroupFrame.strokes = [];
  annotationGroupFrame.x = rootFrameNode.x + rootFrameNode.width + 20;
  annotationGroupFrame.y = rootFrameNode.y;
  annotationGroupFrame.resize(300, 200);

  // 주석 텍스트 노드 생성
  const annotationText = figma.createText();
  annotationText.characters = newAnnotation.description;
  annotationText.fontSize = settings.fontSize === 'small' ? 12 : 14;
  annotationText.fills = [{ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }];
  annotationText.textAutoResize = "HEIGHT";
  annotationText.textAlignHorizontal = "LEFT";
  annotationText.textAlignVertical = "TOP";
  annotationText.constraints = { horizontal: "SCALE", vertical: "SCALE" };
  annotationText.layoutAlign = "INHERIT";

  // 주석 텍스트를 그룹 프레임에 추가
  annotationGroupFrame.appendChild(annotationText);

  // 주석 그룹 프레임을 최상위 프레임에 추가
  rootFrameNode.appendChild(annotationGroupFrame);

  // 주석 데이터에 그룹 프레임 ID 추가
  newAnnotation.groupFrameId = annotationGroupFrame.id;

  // 뱃지 생성
  createBadgeOnFrame(selectedNode as FrameNode, nextAnnotationNumber, settings.color);

  // 주석 목록에 추가
  annotations.push(newAnnotation);

  // UI에 새 주석 생성 알림
  figma.ui.postMessage({
    type: "ANNOTATION_CREATED",
    annotation: newAnnotation,
    fileTitle: figma.root.name,
    pageName: figma.currentPage.name,
    parentFrameName: rootFrameNode.name
  });
}

// Hex 색상값을 RGB로 변환하는 함수
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // #을 제거하고 6자리 색상 코드를 추출
  const cleanHex = hex.charAt(0) === '#' ? hex.substring(1) : hex;
  
  // RGB 값 추출
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  
  return { r, g, b };
}

// 선택 변경 이벤트 리스너
figma.on('selectionchange', () => {
  const selectionInfo = checkSelectedFrame();
  
  if (selectionInfo.selected && selectionInfo.frameId && selectionInfo.frameName) {
    // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
    const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
    
    figma.ui.postMessage({
      type: 'FRAME_SELECTED',
      frameId: targetFrameId,
      frameName: selectionInfo.frameName,
      annotations, // 모든 주석 전송
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name,
      parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName
    } as MessageToUI);
  } else {
    // 선택이 없어도 모든 주석 데이터 전송
    figma.ui.postMessage({
      type: 'NO_FRAME_SELECTED',
      annotations, // 모든 주석 전송
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name
    } as MessageToUI);
  }
});

// UI로부터 메시지 수신
figma.ui.onmessage = async (msg: MessageToPlugin) => {
  switch (msg.type) {
    case 'CREATE_ANNOTATION':
      await createAnnotation(msg.annotation, msg.settings);
      break;
    case 'GET_SELECTED_FRAME':
      const selectionInfo = checkSelectedFrame();
      if (selectionInfo.selected && selectionInfo.frameId && selectionInfo.frameName) {
        // 타겟 프레임 ID 결정 (항상 최상위 프레임 ID 사용)
        const targetFrameId = selectionInfo.rootFrameId || selectionInfo.frameId;
        
        figma.ui.postMessage({
          type: 'FRAME_SELECTED',
          frameId: targetFrameId,
          frameName: selectionInfo.frameName,
          annotations, // 모든 주석 전송
          fileTitle: figma.root.name,
          pageName: figma.currentPage.name,
          parentFrameName: selectionInfo.rootFrameName || selectionInfo.frameName
        } as MessageToUI);
      } else {
        // 선택이 없어도 모든 주석 데이터 전송
        figma.ui.postMessage({
          type: 'NO_FRAME_SELECTED',
          annotations, // 모든 주석 전송
          fileTitle: figma.root.name,
          pageName: figma.currentPage.name
        } as MessageToUI);
      }
      break;
    case 'DELETE_ANNOTATION':
      // 주석 삭제 기능 추가 필요
      deleteAnnotation(msg.id);
      break;
    case 'UPDATE_ANNOTATION':
      // 주석 업데이트 기능 추가 필요
      const updatedAnnotation = msg.annotation;
      
      // 주석 배열에서 해당 ID를 가진 주석 찾기
      const annotationIndex = annotations.findIndex(a => a.id === updatedAnnotation.id);
      
      if (annotationIndex !== -1) {
        try {
          // 폰트 로드 - 텍스트 변경 전 필요
          await figma.loadFontAsync({ family: "Inter", style: "Regular" });
          await figma.loadFontAsync({ family: "Inter", style: "Bold" });
          
          // 주석 정보 업데이트
          annotations[annotationIndex] = updatedAnnotation;
          
          // 주석 그룹 프레임 찾기
          const annotationGroupFrame = annotationGroups[updatedAnnotation.frameId];
          if (annotationGroupFrame) {
            // 해당 번호의 주석 아이템 찾기
            const annotationItem = annotationGroupFrame.findChild(n => 
              n.type === 'FRAME' && n.name === `Annotation ${updatedAnnotation.number}`
            ) as FrameNode | null;
            
            if (annotationItem) {
              // 주석 아이템 내부의 설명 텍스트 노드 찾기
              
              const descNode = annotationItem.findChild(n => 
                n.type === 'TEXT' && n.name === 'description'
              ) as TextNode | null;
              
              // 설명 텍스트 업데이트
              if (descNode) {
                descNode.characters = updatedAnnotation.description;
                console.log(`설명 노드 텍스트 업데이트: ${updatedAnnotation.description}`);
              } else {
                console.warn('설명 노드를 찾을 수 없음');
              }
            } else {
              console.warn(`주석 아이템 ${updatedAnnotation.number}을 찾을 수 없음`);
            }
          } else {
            console.warn(`주석 그룹 프레임을 찾을 수 없음: ${updatedAnnotation.frameId}`);
          }
          
          // 업데이트된 주석 정보를 UI에 알림
          figma.ui.postMessage({
            type: 'ANNOTATION_UPDATED',
            annotation: updatedAnnotation
          } as MessageToUI);
          
          // figma.notify(`주석 ID ${updatedAnnotation.id} 업데이트 완료`);
          console.log(`주석 ID ${updatedAnnotation.id} 업데이트 완료`, updatedAnnotation);
        } catch (error) {
          console.error(`주석 업데이트 중 오류 발생:`, error);
          // figma.notify(`주석 업데이트 중 오류가 발생했습니다: ${error}`);
        }
      } else {
        console.error(`주석 ID ${updatedAnnotation.id}를 찾을 수 없음`);
        figma.notify(`주석을 업데이트할 수 없습니다: ID ${updatedAnnotation.id}를 찾을 수 없음`);
      }
      break;
    case 'cancel':
      figma.closePlugin();
      break;
    case 'SCROLL_TO_FRAME':
      scrollToFrame(msg.frameId);
      break;
    case 'SCROLL_TO_ANNOTATION_GROUP':
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
    case 'SCROLL_TO_ANNOTATION':
      // 특정 주석 아이템으로 이동하는 기능
      const annotationFrame = annotationGroups[msg.frameId];
      if (annotationFrame) {
        // 주석 그룹 프레임 안에서 해당 번호의 주석 아이템 찾기
        const annotationItem = annotationFrame.findChild(n => 
          n.type === 'FRAME' && n.name === `Annotation ${msg.number}`
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

// 노드 삭제 이벤트 감지 함수
function handleNodeRemoval(event: DocumentChangeEvent) {
  // 문서가 변경되었을 때만 처리
  if (!event.documentChanges) return;
  
  let dataChanged = false;
  
  // 문서 변경 내용 중 삭제된 노드가 있는지 확인
  event.documentChanges.forEach(change => {
    if (change.type === 'DELETE' && change.node) {
      const deletedNode = change.node;
      const deletedNodeId = deletedNode.id;
      
      // 삭제된 노드 정보 가져오기
      // RemovedNode는 제한된 정보만 있으므로, id를 기반으로 작업해야 함
      
      // 1. 삭제된 노드의 ID가 프레임 ID와 일치하는지 확인
      // 프레임에 대한 주석이 있는지 확인
      const annotationsToRemove = annotations.filter(a => a.frameId === deletedNodeId);
      
      if (annotationsToRemove.length > 0) {
        // 주석 삭제
        annotations = annotations.filter(a => a.frameId !== deletedNodeId);
        dataChanged = true;
        console.log(`프레임 ID ${deletedNodeId} 관련 주석 ${annotationsToRemove.length}개 삭제됨`);
        
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
      Object.keys(annotationGroups).forEach(frameId => {
        if (annotationGroups[frameId].id === deletedNodeId) {
          // 해당 프레임 관련 주석 삭제
          const frameName = annotations.find(a => a.frameId === frameId)?.frameName;
          if (frameName) {
            annotations = annotations.filter(a => a.frameId !== frameId);
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
            const annotationToRemove = annotations.find(a => a.number === annotationNumber);
            if (annotationToRemove) {
              // 주석 배열에서 삭제
              annotations = annotations.filter(a => a.number !== annotationNumber);
              dataChanged = true;
              console.log(`뱃지 번호 ${annotationNumber}에 해당하는 주석 삭제됨`);
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
      type: 'ALL_ANNOTATIONS_LOADED',
      annotations: annotations,
      fileTitle: figma.root.name,
      pageName: figma.currentPage.name
    } as MessageToUI);
    
    // 현재 선택된 프레임이 있으면 해당 프레임의 주석도 업데이트
    const { selected, frameId, frameName, parentFrameId, parentFrameName } = checkSelectedFrame();
    if (selected && frameId) {
      const targetFrameId = parentFrameId || frameId;
      const frameAnnotations = annotations.filter(a => a.frameId === targetFrameId);
      
      figma.ui.postMessage({
        type: 'FRAME_SELECTED',
        frameId: targetFrameId,
        frameName,
        annotations: frameAnnotations,
        fileTitle: figma.root.name,
        pageName: figma.currentPage.name,
        parentFrameName: parentFrameName || frameName
      } as MessageToUI);
    }
  }
}

// 노드 삭제 이벤트 리스너 등록
figma.on('documentchange', handleNodeRemoval);

// 초기화 함수
async function initialize() {
  // 도큐먼트에서 직접 주석 정보 스캔
  scanDocumentForAnnotations();
  
  // 항상 먼저 모든 주석 전송 (프레임 선택과 관계없이)
  figma.ui.postMessage({
    type: 'ALL_ANNOTATIONS_LOADED',
    annotations: annotations,
    fileTitle: figma.root.name,
    pageName: figma.currentPage.name
  } as MessageToUI);
  
  // 선택된 프레임이 있는 경우, 해당 프레임 정보도 전송
  const { selected, frameId, frameName, parentFrameId, parentFrameName } = checkSelectedFrame();
  if (selected && frameId && frameName) {
      // 타겟 프레임 ID 결정 (부모가 있으면 부모, 없으면 현재 프레임)
      const targetFrameId = parentFrameId || frameId;
      
    figma.ui.postMessage({
      type: 'FRAME_SELECTED',
        frameId: targetFrameId,
        frameName,
        annotations, // 모든 주석 전송 (선택된 프레임 필터링하지 않음)
        fileTitle: figma.root.name,
        pageName: figma.currentPage.name,
        parentFrameName: parentFrameName || frameName
    } as MessageToUI);
  } else {
    figma.ui.postMessage({
      type: 'NO_FRAME_SELECTED'
    } as MessageToUI);
  }
}

// 플러그인 시작 시 초기화 함수 호출
initialize();

// 특정 프레임으로 뷰포트 이동
function scrollToFrame(frameId: string) {
  try {
    const frame = figma.getNodeById(frameId);
    if (frame && (frame.type === 'FRAME' || frame.type === 'COMPONENT' || frame.type === 'INSTANCE')) {
      // 해당 프레임으로 뷰포트 이동
      figma.viewport.scrollAndZoomIntoView([frame]);
      
      // 해당 프레임 선택 (선택적)
      figma.currentPage.selection = [frame];
    }
  } catch (error) {
    console.error('Error scrolling to frame:', error);
  }
}

// 주석 삭제 함수
async function deleteAnnotation(annotationId: string) {
  const annotationIndex = annotations.findIndex(a => a.id === annotationId);
  if (annotationIndex === -1) return;

  const annotation = annotations[annotationIndex];

  // 주석 그룹 프레임 삭제
  const groupFrame = figma.getNodeById(annotation.groupFrameId) as FrameNode;
  if (groupFrame) {
    groupFrame.remove();
  }

  // 뱃지 삭제
  const badgeNode = figma.currentPage.findChild(n => 
    n.type === 'FRAME' && n.name === `Badge ${annotation.number}`
  ) as FrameNode | null;
  
  if (badgeNode) {
    badgeNode.remove();
  }

  // 주석 데이터에서 제거
  annotations.splice(annotationIndex, 1);

  // UI에 주석 삭제 알림
  figma.ui.postMessage({
    type: "ANNOTATION_DELETED",
    id: annotationId
  });
}