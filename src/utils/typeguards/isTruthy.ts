/**
 * Тайпгард на проверку передаваемого значения на undefined, null, 0, false или пустую строку
 * @param value - Проверяемое значение
 */
export const isTruthy = <T>(value: T): value is Exclude<T, undefined | null | 0 | false | ''> => {
  return !!value;
};
