/**
 * UI에게 응답을 전송하는 유틸리티 함수
 */
export function sendResponse(
  type: string,
  result: boolean,
  data: any = {},
  errorMessage?: string
) {
  const message = {
    result,
    ...data,
  };

  if (!result && errorMessage) {
    message.errorMessage = errorMessage;
  }

  figma.ui.postMessage({ type, message });
}
