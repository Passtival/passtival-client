/**
 * ISO 날짜 문자열을 M/D HH:mm 형식으로 포맷팅합니다.
 * @param isoString - ISO 8601 형식의 날짜 문자열
 * @returns M/D HH:mm 형식의 문자열 (예: "9/23 15:00")
 */
export const getFormattedDateTime = (isoString: string): string => {
  const date = new Date(isoString);
  const month = date.getMonth() + 1; // 0부터 시작하므로 +1
  const day = date.getDate();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${month}/${day} ${hours}:${minutes}`;
};
