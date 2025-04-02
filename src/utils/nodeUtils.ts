/**
 * 노드의 최상위 Frame을 찾는 유틸리티 함수
 */
export function getTopLevelFrame(node: SceneNode): FrameNode | null {
  let current: BaseNode | null = node;

  while (current && current.parent && current.parent.type !== "PAGE") {
    current = current.parent;
  }

  return current?.type === "FRAME" ? (current as FrameNode) : null;
}

/**
 * 그룹 프레임 찾기 통합 함수
 */
export function findGroupFrame(
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
