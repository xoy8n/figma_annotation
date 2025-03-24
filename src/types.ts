// Annotation 시스템에 사용되는 타입 정의

// 주석 정보 인터페이스
export interface Annotation {
  id: string;
  number: number; // 뱃지 번호
  description: string;
  frameId: string;
  frameName: string;
  settings: AnnotationSettings;
  groupFrameId?: string;
}

// UI 설정 옵션
export interface AnnotationSettings {
  color: string;
  fontSize: 'small' | 'medium';
  cardWidth: 'small' | 'medium';
}

// UI에 전달되는 메시지 타입 정의
export type MessageToUI = 
  | { type: 'FRAME_SELECTED'; frameId: string; frameName: string; annotations: Annotation[]; fileTitle: string; pageName: string; parentFrameName?: string; }
  | { type: 'NO_FRAME_SELECTED'; annotations: Annotation[]; fileTitle: string; pageName: string; }
  | { type: 'ANNOTATION_CREATED'; annotation: Annotation; fileTitle: string; pageName: string; parentFrameName?: string; }
  | { type: 'ANNOTATION_UPDATED'; annotation: Annotation; }
  | { type: 'ANNOTATIONS_LOADED'; annotations: Annotation[]; }
  | { type: 'ALL_ANNOTATIONS_LOADED'; annotations: Annotation[]; fileTitle: string; pageName: string; };

export type MessageToPlugin = 
  | { type: 'CREATE_ANNOTATION'; annotation: Partial<Annotation>; settings: AnnotationSettings }
  | { type: 'GET_SELECTED_FRAME' }
  | { type: 'DELETE_ANNOTATION'; id: string }
  | { type: 'UPDATE_ANNOTATION'; annotation: Annotation }
  | { type: 'cancel' }
  | { type: 'SCROLL_TO_FRAME'; frameId: string }
  | { type: 'SCROLL_TO_ANNOTATION_GROUP'; frameId: string }
  | { type: 'SCROLL_TO_ANNOTATION'; annotationId: string; frameId: string; number: number }; 