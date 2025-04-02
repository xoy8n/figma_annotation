import { AnnotationColor } from "../interfaces/enums";
import { supportedColors } from "../interfaces/const";

/**
 * 색상 값에 따라 RGB 값을 반환합니다.
 */
export function getColorByValue(colorValue: number): {
  r: number;
  g: number;
  b: number;
} {
  switch (colorValue) {
    case AnnotationColor.RED:
      return { r: 0.93, g: 0.37, b: 0.37 }; // RED
    case AnnotationColor.BLUE:
      return { r: 0.0, g: 0.1, b: 1.0 }; // BLUE
    case AnnotationColor.BLACK:
      return { r: 0, g: 0, b: 0 }; // BLACK
    default:
      return { r: 0.0, g: 0.1, b: 1.0 }; // 기본값: BLUE
  }
}

/**
 * 헥스 색상 코드를 RGB로 변환합니다.
 */
export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
