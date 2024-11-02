/**
 * Тайпгард на проверку передаваемого значения на undefined или null
 * @param value - Проверяемое значение
 */
export const isNotNill = <T>(value: T): value is Exclude<T, undefined | null> => {
  return value !== undefined && value !== null;
};
