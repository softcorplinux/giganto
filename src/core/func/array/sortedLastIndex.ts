import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';
import sortedLastIndexBy from './sortedLastIndexBy';

/**
 * This method is similar to _.sortedIndex, except that it returns the highest index by which the value should be
 * inserted into the array to preserve the sort order.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The sorted array to inspect.
 * @param {*} value The value to evaluate.
 * @returns {Number} Returns the index at which value should be inserted into array.
 * @example
 *
 * const array = [4, 5, 5, 5, 6];
 *
 * _.sortedIndexBy(array, 5);
 * // => 4
 */
export default function sortedLastIndex<T>(values: T[], value: T): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  return sortedLastIndexBy(values, value, (i) => i);
}
