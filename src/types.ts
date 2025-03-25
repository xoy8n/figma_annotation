//description 인터페이스
// export interface Annotation {
//   id: string;
//   number: number; // 뱃지 번호
//   description: string;
//   frameId: string;
//   frameName: string;
// }

// //Figma -> UI에 전달되는 메시지 타입 정의
// export type MessageToUI =
//   | {
//       type: "FRAME_SELECTED";
//       frameId: string;
//       frameName: string;
//       annotations: Annotation[];
//       parentFrameName?: string;
//     }
//   | {
//       type: "update-annotation";
//       annotation: Annotation;
//     };
