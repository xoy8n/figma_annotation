import { getTopLevelFrame } from "../utils/nodeUtils";

// 전역 메모리 상태 관리
let annotationGroups: any[] = [];

/**
 * 그룹 찾기
 * @param groupId 찾을 그룹의 ID
 * @returns 찾은 그룹 또는 undefined
 */
export function findGroup(groupId: string) {
  return annotationGroups.find((g) => g.id === groupId);
}

/**
 * 주석 찾기
 * @param groupId 그룹 ID
 * @param annotationId 주석 ID
 * @returns 찾은 주석 또는 null
 */
export function findAnnotation(groupId: string, annotationId: string) {
  const group = findGroup(groupId);
  if (!group) return null;
  return group.annotations.find((a: any) => a.id === annotationId);
}

/**
 * 주석 추가
 * @param groupId 그룹 ID
 * @param annotation 추가할 주석 객체
 * @returns 성공 여부
 */
export function addAnnotation(groupId: string, annotation: any) {
  const group = findGroup(groupId);
  if (!group) return false;

  group.annotations.push(annotation);
  return true;
}

/**
 * 주석 삭제
 * @param groupId 그룹 ID
 * @param annotationId 삭제할 주석 ID
 * @returns 성공 여부
 */
export function removeAnnotation(groupId: string, annotationId: string) {
  const group = findGroup(groupId);
  if (!group) return false;

  const initialLength = group.annotations.length;
  group.annotations = group.annotations.filter(
    (a: any) => a.id !== annotationId
  );

  return group.annotations.length < initialLength;
}

/**
 * 주석 업데이트
 * @param groupId 그룹 ID
 * @param annotationId 업데이트할 주석 ID
 * @param key 업데이트할 속성 키
 * @param value 업데이트할 값
 * @returns 성공 여부
 */
export function updateAnnotation(
  groupId: string,
  annotationId: string,
  key: string,
  value: any
) {
  const annotation = findAnnotation(groupId, annotationId);
  if (!annotation) return false;

  annotation[key] = value;
  return true;
}

/**
 * 주석 그룹 추가
 * @param group 추가할 그룹 객체
 * @returns 성공 여부
 */
export function addAnnotationGroup(group: any) {
  if (!group || !group.id) return false;

  // 이미 존재하는 그룹인지 확인
  const existingGroup = findGroup(group.id);
  if (existingGroup) return false;

  annotationGroups.push(group);
  return true;
}

/**
 * 주석 그룹 삭제
 * @param groupId 삭제할 그룹 ID
 * @returns 성공 여부
 */
export function removeAnnotationGroup(groupId: string) {
  const initialLength = annotationGroups.length;
  annotationGroups = annotationGroups.filter((g) => g.id !== groupId);

  return annotationGroups.length < initialLength;
}

/**
 * 주석 그룹 업데이트
 * @param groupId 업데이트할 그룹 ID
 * @param key 업데이트할 속성 키
 * @param value 업데이트할 값
 * @returns 성공 여부
 */
export function updateAnnotationGroup(
  groupId: string,
  key: string,
  value: any
) {
  const group = findGroup(groupId);
  if (!group) return false;

  group[key] = value;
  return true;
}

/**
 * 주석 그룹 초기화
 * @param groups 초기 그룹 배열
 */
export function initAnnotationGroups(groups: any[] = []) {
  annotationGroups = groups;
}

/**
 * 모든 주석 그룹 가져오기
 * @returns 주석 그룹 배열
 */
export function getAnnotationGroups() {
  return annotationGroups;
}

/**
 * 주석 순서 업데이트
 * @param groupId 그룹 ID
 * @param sourceIndex 원본 인덱스
 * @param destinationIndex 목적지 인덱스
 * @returns 성공 여부
 */
export function updateAnnotationOrder(
  groupId: string,
  sourceIndex: number,
  destinationIndex: number
) {
  const group = findGroup(groupId);
  if (!group) return false;

  // 인덱스 범위 검사
  if (
    sourceIndex < 1 ||
    sourceIndex > group.annotations.length ||
    destinationIndex < 1 ||
    destinationIndex > group.annotations.length
  ) {
    return false;
  }

  // 메모리상의 주석 순서 업데이트
  const annotations = [...group.annotations];
  const [movedAnnotation] = annotations.splice(sourceIndex - 1, 1);
  annotations.splice(destinationIndex - 1, 0, movedAnnotation);
  group.annotations = annotations;

  return true;
}
