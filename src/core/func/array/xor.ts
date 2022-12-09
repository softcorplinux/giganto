import { Many } from '../../types/common';
import filter from '../collection/filter';
import difference from './difference';
import indexOf from './indexOf';

/**
 * Creates an array of unique values, which is the symmetric difference of the specified arrays.
 * The order of the resulting values is determined by the order in which they appear in arrays.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to inspect.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.xor([2, 1], [2, 3]);
 * // => [1, 3]
 */
export default function xor<T>(...args: Many<T>[]): Many<T>[] | undefined {
  const arr = ([] as Many<T>[]).concat(...args);
  return difference(arr, [...new Set(filter(arr, (v, i, a) => indexOf(a, v) !== i))]);
}
