import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import intersectionWith from './intersectionWith';

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
  return intersectionWith(values, args, (a, b) => isEqual(a, b));
}
