import filter from '../collection/filter';
import includes from '../collection/includes';
import isArray from '../lang/isArray';

/**
 * Creates an array that excludes all specified values.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {...*} args The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.without([2, 1, 2, 3], 1, 2);
 * // => [3]
 */
export default function without<T>(values: T[], ...args: T[]) {
  if (!isArray(values)) return undefined;
  return filter(values, (i) => !includes(args, i));
}
