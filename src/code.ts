figma.showUI(__html__, { width: 600, height: 600 });

type PluginMessage = {
  type: string;
  [key: string]: any;
};

let annotationGroups: any[] = [];

figma.ui.onmessage = async (msg: PluginMessage) => {
  const { type } = msg;

  switch (type) {
    case "CREATE_ANNOTATION_GROUP": {
      const selection = figma.currentPage.selection[0];

      function getTopLevelFrame(node: SceneNode): FrameNode | null {
        let current: BaseNode | null = node;

        while (current && current.parent && current.parent.type !== "PAGE") {
          current = current.parent;
        }

        return current?.type === "FRAME" ? (current as FrameNode) : null;
      }

      if (!selection) {
        figma.ui.postMessage({
          type,
          message: {
            result: false,
            errorMessage: "Please select a layer on the canvas.",
          },
        });
        return;
      }

      const topFrame = getTopLevelFrame(selection);

      if (!topFrame) {
        figma.ui.postMessage({
          type,
          message: {
            result: false,
            errorMessage: "Top-level frame not found.",
          },
        });
        return;
      }

      const newGroupId = topFrame.id;
      const newGroupName = topFrame.name;

      const existingGroup = annotationGroups.find((g) => g.id === newGroupId);

      if (existingGroup) {
        const newAnnotation = {
          id: `annotation-${Date.now()}`,
          description: {
            type: "doc",
            content: [],
          },
        };

        existingGroup.annotations.push(newAnnotation);

        figma.ui.postMessage({
          type: "CREATE_ANNOTATION", // UI가 처리하기 쉽게 type 맞춰줌
          message: {
            result: true,
            annotations: annotationGroups,
          },
        });
        return;
      }

      // 🆕 새 그룹 생성
      const defaultAnnotation = {
        id: `annotation-${Date.now()}`,
        description: msg.config.description || { type: "doc", content: [] }, // 전달된 설명 사용
      };

      const newGroup = {
        id: newGroupId,
        name: newGroupName,
        relatedPage: {
          id: figma.currentPage.id,
          name: figma.currentPage.name,
        },
        annotations: [defaultAnnotation],
        obsolete: false,
        ...msg.config,
      };

      annotationGroups.push(newGroup);

      figma.viewport.scrollAndZoomIntoView([topFrame]);

      figma.ui.postMessage({
        type,
        message: {
          result: true,
          annotations: annotationGroups,
          updatedGroup: newGroupId,
        },
      });

      break;
    }

    case "CREATE_ANNOTATION": {
      const group = annotationGroups.find((g) => g.id === msg.groupId);
      if (!group) return;

      const newAnnotation = {
        id: `annotation-${Date.now()}`,
        description: {
          type: "doc",
          content: [],
        },
      };

      group.annotations.push(newAnnotation);

      figma.ui.postMessage({
        type,
        message: {
          result: true,
          annotations: annotationGroups,
        },
      });
      break;
    }

    case "UPDATE_ANNOTATION": {
      const group = annotationGroups.find((g) => g.id === msg.groupId);
      const annotation = group?.annotations.find(
        (a) => a.id === msg.annotationId
      );
      if (annotation) {
        annotation[msg.key] = msg.value;
      }
      figma.ui.postMessage({ type, message: { result: true } });
      break;
    }

    case "UPDATE_ANNOTATION_GROUP": {
      const group = annotationGroups.find((g) => g.id === msg.groupId);
      if (group) {
        group[msg.key] = msg.value;
      }
      figma.ui.postMessage({ type, message: { result: true } });
      break;
    }

    case "DELETE_ANNOTATION": {
      const group = annotationGroups.find((g) => g.id === msg.groupId);
      if (group) {
        group.annotations = group.annotations.filter(
          (a) => a.id !== msg.annotation.id
        );
      }
      figma.ui.postMessage({ type, message: { result: true } });
      break;
    }

    case "DELETE_ANNOTATION_GROUP":
      annotationGroups = annotationGroups.filter((g) => g.id !== msg.group.id);
      figma.ui.postMessage({ type, message: { result: true } });
      break;

    case "SAVE_DATA":
      try {
        await figma.root.setPluginData(msg.key, JSON.stringify(msg.data));
        figma.ui.postMessage({ type, message: { result: true } });
      } catch (error) {
        figma.ui.postMessage({
          type,
          message: { result: false, errorMessage: String(error) },
        });
      }
      break;

    case "LOAD_DATA":
      try {
        const raw = figma.root.getPluginData(msg.key);
        const parsed = raw ? JSON.parse(raw) : [];
        console.log(parsed, "parsed");
        annotationGroups = parsed;
        figma.ui.postMessage({
          type,
          message: { result: true, key: msg.key, data: parsed },
        });
      } catch (error) {
        figma.ui.postMessage({
          type,
          message: { result: false, errorMessage: String(error) },
        });
      }
      break;

    case "CLEAR_ANNOTATION_DATA":
      await figma.root.setPluginData("annotationGroup", "[]");
      annotationGroups = [];
      figma.ui.postMessage({ type, message: {} });
      break;

    case "GET_FILE_NAME":
      figma.ui.postMessage({
        type,
        message: { fileName: figma.root.name },
      });
      break;

    case "GET_PAGE_NAME": {
      const page = figma.root.findOne((n) => n.id === msg.pageId);
      figma.ui.postMessage({
        type,
        message: {
          pageId: msg.pageId,
          pageName: page?.name || "Unknown Page",
        },
      });
      break;
    }

    case "MOVE_TO_SELECTION": {
      const groupNode = figma.getNodeById(msg.groupId);
      if (groupNode) {
        figma.viewport.scrollAndZoomIntoView([groupNode]);
      }
      break;
    }

    case "CHECK_CURRENT_SELECTION": {
      const groupNode = figma.getNodeById(msg.groupId);
      const exists = !!groupNode;
      figma.ui.postMessage({
        type,
        message: {
          result: exists,
          groupId: msg.groupId,
          obsolete: !exists,
        },
      });
      break;
    }

    case "UPDATE_ANNOTATION_ORDER": {
      const { groupId, sourceIndex, destinationIndex } = msg;
      const frame = figma.getNodeById(groupId);

      if (frame && frame.type === "FRAME") {
        const children = [...frame.children];
        const target = children[sourceIndex];
        if (target) {
          frame.insertChild(destinationIndex, target);
        }
      }

      figma.ui.postMessage({
        type,
        message: { result: true },
      });
      break;
    }

    default:
      console.log("Unhandled message type:", msg.type);
  }
};
