import { AnnotationSize, AnnnotationCardWidth } from "../interfaces/enums";
import { supportedFontSizes, supportedCardWidth } from "../interfaces/const";

/**
 * 카드 너비 값에 따른 실제 너비를 반환합니다.
 */
export function getCardWidthByValue(widthValue: number): number {
  if (
    widthValue >= 0 &&
    widthValue < Object.keys(AnnnotationCardWidth).length / 2
  ) {
    return supportedCardWidth[widthValue];
  }
  return supportedCardWidth[AnnnotationCardWidth.SMALL]; // 기본값
}

/**
 * 카드 너비를 계산합니다. (입력값 또는 기본값 사용)
 */
export function getCardWidth(cardWidthValue?: number): number {
  return cardWidthValue !== undefined
    ? getCardWidthByValue(cardWidthValue)
    : getCardWidthByValue(AnnnotationCardWidth.SMALL);
}

/**
 * 폰트 크기 값에 따른 실제 폰트 크기를 반환합니다.
 */
export function getFontSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].desription;
  }
  return supportedFontSizes[AnnotationSize.SMALL].desription; // 기본값
}

/**
 * 배지 크기 값에 따른 실제 배지 크기를 반환합니다.
 */
export function getBadgeSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].badgeSize;
  }
  return supportedFontSizes[AnnotationSize.SMALL].badgeSize; // 기본값
}

/**
 * 배지 텍스트 크기 값에 따른 실제 텍스트 크기를 반환합니다.
 */
export function getBadgeTextSizeByValue(sizeValue: number): number {
  if (sizeValue >= 0 && sizeValue < Object.keys(AnnotationSize).length / 2) {
    return supportedFontSizes[sizeValue].badgeText;
  }
  return supportedFontSizes[AnnotationSize.SMALL].badgeText; // 기본값
}
