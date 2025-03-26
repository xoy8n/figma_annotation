// 현재 선택된 프레임이 있는지 확인하고, 최상위 프레임 정보도 반환
export function checkSelectedFrame(): {
  selected: boolean;
  frameNode?: FrameNode;
  frameId?: string;
  frameName?: string;
  parentFrameNode?: FrameNode;
  parentFrameId?: string;
  parentFrameName?: string;
  selectedNode?: SceneNode;
  rootFrameNode?: FrameNode; // 최상위 프레임 추가
  rootFrameId?: string; // 최상위 프레임 ID 추가
  rootFrameName?: string; // 최상위 프레임 이름 추가
} {
  const selection = figma.currentPage.selection;

  if (selection.length !== 1) {
    return { selected: false };
  }

  const node = selection[0];
  let frameNode: FrameNode | null = null;
  let rootFrameNode: FrameNode | null = null;

  // 선택된 노드가 직접 프레임인 경우
  if (node.type === "FRAME") {
    frameNode = node as FrameNode;
  }
  // 프레임이 아닌 다른 레이어를 선택한 경우 부모 프레임 찾기
  else {
    // 부모 노드 체인을 따라가면서 가장 가까운 프레임 찾기
    let parent = node.parent;
    while (parent) {
      if (parent.type === "FRAME") {
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
  if (frameNode.parent && frameNode.parent.type === "FRAME") {
    parentFrame = frameNode.parent as FrameNode;
  }

  // 최상위 프레임 찾기 - 부모가 페이지인 프레임
  rootFrameNode = frameNode;
  let currentNode = frameNode;

  // 부모 체인을 따라 올라가며 최상위 프레임 찾기
  while (currentNode.parent && currentNode.parent.type === "FRAME") {
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
    rootFrameName: rootFrameNode?.name,
  };
}

// 특정 프레임으로 뷰포트 이동
export function scrollToFrame(frameId: string) {
  try {
    const frame = figma.getNodeById(frameId);
    if (
      frame &&
      (frame.type === "FRAME" ||
        frame.type === "COMPONENT" ||
        frame.type === "INSTANCE")
    ) {
      // 해당 프레임으로 뷰포트 이동
      figma.viewport.scrollAndZoomIntoView([frame]);

      // 해당 프레임 선택 (선택적)
      figma.currentPage.selection = [frame];
    }
  } catch (error) {
    console.error("Error scrolling to frame:", error);
  }
}
