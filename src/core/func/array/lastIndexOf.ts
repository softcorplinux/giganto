import isArray from '../lang/isArray';
import isUndefined from '../lang/isUndefined';

/**
 * This method is similar to _.indexOf, except that it iterates through the array elements from right to left.
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
 * _.lastIndexOf([1, 2, 1, 2, 5], 2);
 * // => 3
 */
export default function lastIndexOf<T>(values: T[], value: T): number | undefined {
  if (!isArray(values) || isUndefined(value)) return undefined;
  return values.lastIndexOf(value);
}
