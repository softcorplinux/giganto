import filter from '../collection/filter';
import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Creates a fragment of an array with n elements deleted from the end.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @param {Number} [num=1] The number of elements to drop.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * _.dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * _.dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * _.dropRight([1, 2, 3], 5);
 * // => []
 *
 * _.dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */
export default function dropRight<T>(values: T[], num: number = 1): T[] | undefined {
  if (!isArray(values)) return undefined;
  const length = size(values) - 1;
  return filter(values, (_, key) => key <= length - num);
}
