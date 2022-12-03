import isArray from '../lang/isArray';

/**
 * Creates a fragment of an array with n elements taken from the beginning.
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
 * _.take([1, 2, 3]);
 * // => [1]
 *
 * _.take([1, 2, 3], 2);
 * // => [1, 2]
 *
 * _.take([1, 2, 3], 5);
 * // => [1, 2, 3]
 *
 * _.take([1, 2, 3], 0);
 * // => []
 */
export default function take<T>(values: T[], num: number = 1): T[] | undefined {
  if (!isArray(values)) return undefined;
  return values.slice(0, num < 0 ? 0 : num);
}
