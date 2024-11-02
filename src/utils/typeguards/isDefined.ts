/**
 * Тайпгард на проверку передаваемого значения на undefined
 * @param value - Проверяемое значение
 */
export const isDefined = <T>(value: T): value is Exclude<T, undefined> => {
  return value !== undefined;
};
