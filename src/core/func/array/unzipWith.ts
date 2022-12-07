import { Many } from '../../types/common';
import zipWith from './zipWith';

/**
 * This method is similar to _.unzip, except that it takes a predicate to specify how the regrouped values
 * should be combined. Predict is called with the elements of each group ...args:T[].
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array of grouped elements to process.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of regrouped elements.
 * @example
 *
 * const array = zip([1, 2], [10, 20], [100, 200]);
 * // => [[1, 10, 100], [2, 20, 200]]
 *
 * _.unzipWith(array, (a, b) => a + b);
 * // => [3, 30, 300]
 */
export default function unzipWith<T>(values: Many<T[]>[], predicate: (...args: T[]) => any): Many<any[]>[] | undefined {
  return zipWith(...values, predicate);
}
