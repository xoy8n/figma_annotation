import { AnnotationColor, AnnotationSize } from "./enums";
export const supportedFontSizes = {
  [AnnotationSize.SMALL]: {
    badgeSize: 24,
    badgeText: 14,
    gropuTitle: 16,
    annotationTitle: 14,
    desription: 14,
    padding: 20,
    gap: 8,
  },
  [AnnotationSize.MEDIUM]: {
    badgeSize: 32,
    badgeText: 18,
    gropuTitle: 20,
    annotationTitle: 18,
    desription: 18,
    padding: 24,
    gap: 10,
  },
  [AnnotationSize.LARGE]: {
    badgeSize: 36,
    badgeText: 21,
    gropuTitle: 23,
    annotationTitle: 21,
    desription: 21,
    padding: 32,
    gap: 12,
  },
};
export const supportedColors = {
  [AnnotationColor.RED]: "bg-subRed-01",
  [AnnotationColor.PURPLE]: "bg-primary",
  [AnnotationColor.BLACK]: "bg-black",
};
export const supportedCardWidth = {
  [AnnotationSize.SMALL]: 320,
  [AnnotationSize.MEDIUM]: 400,
  [AnnotationSize.LARGE]: 480,
};
