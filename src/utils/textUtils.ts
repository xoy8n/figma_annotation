import { hexToRgb } from "./colorUtils";

/**
 * 설명 객체로부터 일반 텍스트를 추출합니다.
 */
export function extractTextFromDescription(description: any): string {
  if (!description || !description.content) return "New Annotation";

  let text = "";

  function extractText(node: any) {
    if (node.text) {
      text += node.text + " ";
    }

    if (node.content && Array.isArray(node.content)) {
      node.content.forEach(extractText);
    }
  }

  // 각 상위 레벨 content 항목을 처리하고 줄바꿈 추가
  if (Array.isArray(description.content)) {
    description.content.forEach((contentNode, index) => {
      const startPos = text.length;

      // 노드 내용 추출
      if (
        contentNode.type === "bulletList" ||
        contentNode.type === "paragraph"
      ) {
        extractText(contentNode);
      } else {
        // 다른 타입의 노드도 처리
        extractText(contentNode);
      }

      // 각 컨텐츠 항목 뒤에 줄바꿈 추가(마지막 항목 제외)
      if (index < description.content.length - 1) {
        text += "\n";
      }
    });
  }

  return text.trim() || "New Annotation";
}

/**
 * 리치 텍스트 형식 정보를 추출합니다.
 */
export function extractFormattingRanges(descriptionData: any) {
  const ranges: {
    text: string;
    isBold?: boolean;
    isUnderline?: boolean;
    isItalic?: boolean;
    fontStyle?: string;
    color?: string;
    addNewLine?: boolean;
  }[] = [];

  function processNode(
    node: any,
    parentMarks: any[] = [],
    isListItem: boolean = false
  ) {
    // 텍스트 노드 처리 - 노드에 직접 있는 마크만 적용
    if (node.text) {
      // 현재 노드의 마크만 사용 (부모 마크 무시)
      const currentMarks = node.marks || [];

      // 마크 분석
      const isBold = currentMarks.some((mark) => mark.type === "bold");
      const isUnderline = currentMarks.some(
        (mark) => mark.type === "underline"
      );
      const colorMark = currentMarks.find(
        (mark) => mark.type === "textStyle" && mark.attrs && mark.attrs.color
      );

      // 텍스트 및 서식 정보 저장
      ranges.push({
        text: node.text,
        isBold,
        isUnderline,
        fontStyle: isBold ? "Bold" : "Regular",
        color: colorMark ? colorMark.attrs.color : undefined,
      });

      return; // 텍스트 노드는 자식이 없으므로 여기서 종료
    }

    // bulletList 처리
    if (
      node.type === "bulletList" &&
      node.content &&
      Array.isArray(node.content)
    ) {
      // bulletList의 각 listItem 처리
      node.content.forEach((listItemNode: any, index: number) => {
        // '• ' 추가하여 불릿 표시
        ranges.push({
          text: "• ",
          isBold: false,
          isUnderline: false,
          color: undefined, // 기본 색상 사용
        });

        // listItem 내용 처리
        if (listItemNode.content && Array.isArray(listItemNode.content)) {
          listItemNode.content.forEach((contentNode: any) => {
            processNode(contentNode, [], true);
          });
        }

        // 마지막 listItem이 아니면 줄바꿈 추가
        if (index < node.content.length - 1) {
          ranges.push({
            text: "",
            addNewLine: true,
          });
        }
      });

      return;
    }

    // 일반 자식 노드 처리
    if (node.content && Array.isArray(node.content)) {
      node.content.forEach((child: any) => {
        // 항상 빈 부모 마크 배열 전달 (스타일 상속 안함)
        processNode(child, []);
      });
    }
  }

  // 각 상위 레벨 컨텐츠 처리 및 줄바꿈 추가
  if (descriptionData.content && Array.isArray(descriptionData.content)) {
    descriptionData.content.forEach((contentNode: any, index: number) => {
      // 각 컨텐츠 노드 처리
      processNode(contentNode, []);

      // 마지막 항목이 아니면 줄바꿈 추가
      if (index < descriptionData.content.length - 1) {
        ranges.push({
          text: "",
          addNewLine: true,
        });
      }
    });
  }

  return ranges;
}

/**
 * 텍스트 노드에 리치 텍스트 서식을 적용합니다.
 */
export async function applyRichTextFormatting(
  textNode: TextNode,
  descriptionData: any
) {
  if (!descriptionData || !descriptionData.content) return;

  // 필요한 모든 폰트 미리 로드
  await Promise.all([
    figma.loadFontAsync({ family: "Inter", style: "Regular" }),
    figma.loadFontAsync({ family: "Inter", style: "Bold" }),
  ]);

  // 텍스트 노드 초기화
  textNode.characters = "";

  // 모든 서식 정보를 먼저 추출
  const ranges = extractFormattingRanges(descriptionData);
  let currentIndex = 0;

  // 각 범위별로 텍스트와 서식 적용
  for (const range of ranges) {
    // 텍스트 추가
    if (range.text && range.text.length > 0) {
      const length = range.text.length;
      textNode.insertCharacters(currentIndex, range.text);

      // 기본 스타일 설정 (Regular 폰트, 검은색, 밑줄 없음)
      textNode.setRangeFontName(currentIndex, currentIndex + length, {
        family: "Inter",
        style: "Regular",
      });

      textNode.setRangeFills(currentIndex, currentIndex + length, [
        { type: "SOLID", color: { r: 0, g: 0, b: 0 } },
      ]);

      textNode.setRangeTextDecoration(
        currentIndex,
        currentIndex + length,
        "NONE"
      );

      // 볼드체 적용
      if (range.isBold) {
        textNode.setRangeFontName(currentIndex, currentIndex + length, {
          family: "Inter",
          style: "Bold",
        });
      }

      // 밑줄 적용
      if (range.isUnderline) {
        textNode.setRangeTextDecoration(
          currentIndex,
          currentIndex + length,
          "UNDERLINE"
        );
      }

      // 색상 적용
      if (range.color) {
        const rgbColor = hexToRgb(range.color);
        if (rgbColor) {
          textNode.setRangeFills(currentIndex, currentIndex + length, [
            {
              type: "SOLID",
              color: {
                r: rgbColor.r / 255,
                g: rgbColor.g / 255,
                b: rgbColor.b / 255,
              },
            },
          ]);
        }
      }

      currentIndex += length;
    }

    // 줄바꿈 추가
    if (range.addNewLine) {
      textNode.insertCharacters(currentIndex, "\n");
      currentIndex += 1;
    }
  }

  // 텍스트가 비어있으면 기본값 설정
  if (textNode.characters.length === 0) {
    textNode.characters = "New Annotation";
  }
}
