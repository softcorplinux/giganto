import filter from '../collection/filter';
import isArray from '../lang/isArray';

/**
 * Creates a new array of values, including matches from the args argument.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {Array} [args] The values to include.
 * @returns {Array} Returns the new array of intersecting values.
 * @example
 *
 * _.intersection([2, 1], [2, 3]);
 * // => [2]
 */
export default function intersection<T>(values: T[], args: T[]): T[] | undefined {
  if (!isArray(values) || !isArray(args)) return undefined;
  const setA = new Set(values);
  const setB = new Set(args);
  return [...new Set(filter([...setA], (i) => setB.has(i)))];
}
