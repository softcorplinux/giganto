import { Many } from '../../types/common';
import zipWith from './zipWith';

/**
 * Creates an array of grouped elements, the first of which contains the first elements of the specified arrays,
 * the second of which contains the second elements of the specified arrays, and so on.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to process.
 * @returns {Array} Returns the new array of grouped elements.
 * @example
 *
 * _.zip(['a', 'b'], [1, 2, 3], [true, false]);
 * // => [['a', 1, true], ['b', 2, false], [undefined, 3, undefined]]
 */
export default function zip(...args: Many<any[]>[]): Many<any[]>[] {
  return zipWith(...args, (...i) => i) as Many<any[]>[];
}
