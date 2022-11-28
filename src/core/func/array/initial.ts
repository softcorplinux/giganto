import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Returns all elements of the array excluding the last one.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.initial([1, 2, 3]);
 * // => [1, 2]
 */
export default function initial<T>(values: T[]): T[] | undefined {
  if (!isArray(values)) return undefined;
  return values.slice(0, size(values) - 1);
}
