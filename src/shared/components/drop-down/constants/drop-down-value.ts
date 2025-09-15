export const DROP_DOWN_OPTIONS = {
  DATE: [
    { displayName: '23일', value: '2025-09-23' },
    { displayName: '24일', value: '2025-09-24' },
    { displayName: '25일', value: '2025-09-25' },
  ],
  TIME_HOUR: Array.from({ length: 16 }, (_, i) => {
    const hour = String(i + 9).padStart(2, '0');
    return { displayName: `${hour}시`, value: hour };
  }),
  TIME_MINUTE: ['00', '10', '20', '30', '40', '50'].map((minute) => ({
    displayName: `${minute}분`,
    value: minute,
  })),
};

export const DROP_DOWN_PLACEHOLDER = {
  DATE: '날짜 선택',
  TIME: '시간 선택',
};
