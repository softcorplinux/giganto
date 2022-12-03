import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Gets everything except the first element of the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.tail([1, 2, 3]);
 * // => [2, 3]
 */
export default function tail<T>(values: T[]): T[] | undefined {
  if (!isArray(values)) return undefined;
  return values.slice(1, size(values));
}
