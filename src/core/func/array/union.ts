import { Many } from '../../model/common';

/**
 * Creates a new array of unique values.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} args The arrays to inspect.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.union([2], [1, 2, 5, 2]);
 * // => [2, 1, 5]
 *
 * _.union(2, 2, 3, 3, 1);
 * // => [2, 3, 1]
 *
 * _.union(2, 2, 3, 3, 1, [4], [1]);
 * // => [2, 3, 1, 4]
 */
export default function union<T>(...args: Many<T>[]): T[] {
  return [...new Set(([] as T[]).concat(...args))];
}
