import size from '../collection/size';
import eq from '../lang/eq';
import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';
import sortedLastIndexBy from './sortedLastIndexBy';

/**
 * This method is similar to _.lastIndexOf, except that it performs a binary search on a sorted array.
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
 * _.sortedLastIndexOf(array, 50);
 * // => 1
 *
 * _.sortedLastIndexOf(array, 41);
 * // => -1
 */
export default function sortedLastIndexOf<T>(values: T[], value: T): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  const index = (sortedLastIndexBy(values, value, (i) => i) ?? NaN) - 1;
  return !isNaN(index) && index! < size(values) && eq(values[index!], value) ? index : -1;
}
