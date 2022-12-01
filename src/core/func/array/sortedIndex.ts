import size from '../collection/size';
import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';

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
  let length = size(values);
  let index = 0;

  while (index < length) {
    const pos = (length + index) >>> 1;
    const computed = values[pos];
    !isUndefined(computed) && computed < value ? (index = pos + 1) : (length = pos);
  }

  return length;
}
