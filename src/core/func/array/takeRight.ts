import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Creates a fragment of an array with n elements taken from the end.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @param {Number} [num=1] The number of elements to take.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.takeRight([1, 2, 3]);
 * // => [3]
 *
 * _.takeRight([1, 2, 3], 2);
 * // => [2, 3]
 *
 * _.takeRight([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.takeRight([1, 2, 3], 0);
 * // => []
 */
export default function takeRight<T>(values: T[], num: number = 1): T[] | undefined {
  if (!isArray(values)) return undefined;
  const length = size(values);
  return values.slice(length < num ? 0 : length - num, length);
}
