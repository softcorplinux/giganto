import filter from '../collection/filter';
import isArray from '../lang/isArray';

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
  const setA = new Set(values);
  const setB = new Set(args);
  return [...new Set(filter([...setA], (i) => !setB.has(i)))];
}
