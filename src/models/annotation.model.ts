import { Annotation, AnnotationSettings } from "../types";

// 주석 데이터를 저장하는 배열
export let annotations: Annotation[] = [];

// 전역 주석 카운터 대신 프레임별 주석 번호 관리
export let frameAnnotationCounters: { [frameId: string]: number } = {};

// 현재 선택된 프레임 ID와 해당 프레임의 주석 그룹을 저장
export let annotationGroups: { [frameId: string]: FrameNode } = {};

// 프레임에 추가된 뱃지를 추적하기 위한 맵
export let frameBadges: {
  [frameId: string]: { [annotationNumber: number]: FrameNode };
} = {};

// 주석 배열 업데이트 함수
export function updateAnnotation(updatedAnnotation: Annotation): void {
  const index = annotations.findIndex((a) => a.id === updatedAnnotation.id);
  if (index !== -1) {
    annotations[index] = updatedAnnotation;
  }
}

// 주석 추가 함수
export function addAnnotation(annotation: Annotation): void {
  annotations.push(annotation);
}

// 주석 제거 함수
export function removeAnnotation(annotationId: string): Annotation | undefined {
  const index = annotations.findIndex((a) => a.id === annotationId);
  if (index !== -1) {
    const removed = annotations[index];
    annotations.splice(index, 1);
    return removed;
  }
  return undefined;
}

// 프레임 ID로 주석 필터링
export function getAnnotationsByFrameId(frameId: string): Annotation[] {
  return annotations.filter((a) => a.frameId === frameId);
}

// 주석 모두 가져오기
export function getAllAnnotations(): Annotation[] {
  return [...annotations];
}

// 주석 초기화
export function clearAnnotations(): void {
  annotations = [];
  frameAnnotationCounters = {};
  annotationGroups = {};
  frameBadges = {};
}

// 프레임 ID로 주석 필터링하여 제거
export function removeAnnotationsByFrameId(frameId: string): void {
  annotations = annotations.filter((a) => a.frameId !== frameId);
}

// 주석 번호로 주석 필터링하여 제거
export function removeAnnotationsByNumber(number: number): void {
  annotations = annotations.filter((a) => a.number !== number);
}

// 주석 배열 직접 설정
export function setAnnotations(newAnnotations: Annotation[]): void {
  annotations = [...newAnnotations];
}
