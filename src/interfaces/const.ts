import { AnnotationColor, AnnotationSize } from "./enums";
export const supportedFontSizes = {
  [AnnotationSize.SMALL]: {
    badgeSize: 24,
    badgeText: 14,
    desription: 14,
    gap: 8,
  },
  [AnnotationSize.MEDIUM]: {
    badgeSize: 28,
    badgeText: 18,
    desription: 18,
    gap: 10,
  },
  [AnnotationSize.LARGE]: {
    badgeSize: 32,
    badgeText: 21,
    desription: 21,
    gap: 12,
  },
};
export const supportedColors = {
  [AnnotationColor.RED]: "bg-subRed-01",
  [AnnotationColor.BLUE]: "bg-primary",
  [AnnotationColor.BLACK]: "bg-black",
};
export const supportedCardWidth = {
  [AnnotationSize.SMALL]: 320,
  [AnnotationSize.MEDIUM]: 400,
  [AnnotationSize.LARGE]: 480,
};
