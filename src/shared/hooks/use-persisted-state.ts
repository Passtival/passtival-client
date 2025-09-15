import { useState, useEffect } from 'react';

/**
 * 페이지 간 상태를 유지하는 커스텀 훅
 * @param key - 저장소에 사용할 키 (페이지별로 고유해야 함)
 * @param defaultValue - 기본값
 * @param storage - 사용할 저장소 (기본값: sessionStorage)
 */
export const usePersistedState = <T>(
  key: string,
  defaultValue: T,
  storage: Storage = sessionStorage,
) => {
  const [state, setState] = useState<T>(() => {
    // 저장소에서 값 가져오기
    try {
      const storedValue = storage.getItem(key);
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }
    } catch (error) {
      console.warn(
        `"${key}"에 대한 저장된 값을 파싱하는데 실패했습니다:`,
        error,
      );
    }

    // 기본값 사용
    return defaultValue;
  });

  // 상태가 변경될 때 저장소에 저장
  useEffect(() => {
    try {
      storage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.warn(`"${key}"에 값을 저장하는데 실패했습니다:`, error);
    }
  }, [key, state, storage]);

  return [state, setState] as const;
};
