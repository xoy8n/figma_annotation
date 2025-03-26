// Annotation 시스템에 사용되는 타입 정의

// 주석 정보 인터페이스
export interface Annotation {
  id: string;
  number: number; // 뱃지 번호
  description: string;
  frameId: string;
  frameName: string;
  pageName: string; // 페이지 이름 추가
  groupFrameId?: string;
  settings: AnnotationSettings;
}

// UI 설정 옵션
export interface AnnotationSettings {
  color: string;
  fontSize: "small" | "medium" | "large";
  cardWidth: "small" | "medium" | "large";
}

// UI에 전달되는 메시지 타입 정의
export interface MessageToUI {
  type:
    | "FRAME_SELECTED"
    | "NO_FRAME_SELECTED"
    | "ANNOTATION_CREATED"
    | "ANNOTATION_UPDATED"
    | "ANNOTATION_DELETED"
    | "ANNOTATIONS_LOADED"
    | "ALL_ANNOTATIONS_LOADED";
  frameId?: string;
  frameName?: string;
  annotations?: Annotation[];
  annotation?: Annotation;
  id?: string;
  fileTitle?: string;
  pageName?: string;
  parentFrameName?: string;
  allPages?: string[]; // 전체 페이지 목록 추가
}

export interface MessageToPlugin {
  type:
    | "CREATE_ANNOTATION"
    | "DELETE_ANNOTATION"
    | "UPDATE_ANNOTATION"
    | "GET_SELECTED_FRAME"
    | "GET_ALL_ANNOTATIONS"
    | "SCROLL_TO_FRAME"
    | "SCROLL_TO_ANNOTATION"
    | "SCROLL_TO_ANNOTATION_GROUP"
    | "REORDER_ANNOTATIONS";
  annotation?: Partial<Annotation>;
  id?: string;
  frameId?: string;
  annotationId?: string;
  number?: number;
  settings?: AnnotationSettings;
  annotations?: Annotation[];
}
