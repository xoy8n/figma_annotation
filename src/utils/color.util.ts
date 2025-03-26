// Hex 색상값을 RGB로 변환하는 함수
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // #을 제거하고 6자리 색상 코드를 추출
  const cleanHex = hex.charAt(0) === "#" ? hex.substring(1) : hex;

  // RGB 값 추출
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);

  return { r, g, b };
}
