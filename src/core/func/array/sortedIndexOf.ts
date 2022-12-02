import size from '../collection/size';
import eq from '../lang/eq';
import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';
import sortedIndexBy from './sortedIndexBy';

/**
 * This method is similar to _.indexOf, except that it performs a binary search on a sorted array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {*} value The value to search for.
 * @returns {Number} Returns the index of the matched value, else -1.
 * @example
 *
 * const array = [40, 50, 50, 50, 60];
 *
 * _.sortedIndexOf(array, 50);
 * // => 1
 *
 * _.sortedIndexOf(array, 41);
 * // => -1
 */
export default function sortedIndexOf<T>(values: T[], value: T): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  const index = sortedIndexBy(values, value, (i) => i);
  return !isUndefined(index) && index! < size(values) && eq(values[index!], value) ? index : -1;
}
