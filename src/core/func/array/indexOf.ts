import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import isUndefined from '../lang/isUndefined';
import findIndex from './findIndex';

/**
 * Gets the index of the first value found in the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {*} value The value to search for.
 * @param {Number} [fromIndex=0] The value to search for.
 * @returns {Number} Returns the index of the matched value, else -1.
 * @example
 *
 * _.indexOf([1, 2, 1, 2, 5], 2);
 * // => 1
 *
 * _.indexOf([1, 2, 1, 2, 5], 2, 3);
 * // => 3
 */
export default function indexOf<T>(values: T[], value: T, fromIndex: number = 0): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  return values.indexOf(value, fromIndex);
}
