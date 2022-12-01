import isArray from '../lang/isArray';

/**
 * Returns an array in reverse order.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @returns {Array} Returns array.
 * @example
 *
 * const array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
export default function reverse<T>(values: T[]): T[] | undefined {
  if (!isArray(values)) return undefined;
  return values.reverse();
}
