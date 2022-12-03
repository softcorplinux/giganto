import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import differenceWith from './differenceWith';

/**
 * Creates a new array of values, excluding matches from the args argument.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {Array} [args] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.difference([2, 1], [2, 3]);
 * // => [1]
 */
export default function difference<T>(values: T[], args: T[]): T[] | undefined {
  if (!isArray(values) || !isArray(args)) return undefined;
  return differenceWith(values, args, (a, b) => isEqual(a, b));
}
