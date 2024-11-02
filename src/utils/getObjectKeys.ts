/**
 * Функция вытаскивает из объекта ключи и передает в виде строкового массива
 * @param e - Объект
 */
export const getObjectKeys = <E extends Record<string, unknown>>(
  e: E,
): Array<keyof E> => {
  const results: Array<keyof E> = Object.keys(e);
  return results;
};
