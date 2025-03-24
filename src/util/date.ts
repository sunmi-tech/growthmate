/**
 * 오늘 날짜를 반환합니다.
 * @returns 오늘 날짜 2025-03-20 
 */
export const getToday = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
}