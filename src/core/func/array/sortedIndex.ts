import size from '../collection/size';
import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';
import sortedIndexBy from './sortedIndexBy';

/**
 * Uses binary search to determine the smallest index by which the value should be inserted into the array
 * to preserve the sort order.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The sorted array to inspect.
 * @param {*} [value] The value to evaluate.
 * @returns {Array} Returns the index at which value should be inserted into array.
 * @example
 *
 * const array = [30, 50, 60, 70];
 *
 * _.sortedIndex(array, 40)
 * // => 1
 */
export default function sortedIndex<T>(values: T[], value: T): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  return sortedIndexBy(values, value, (i) => i);
}
