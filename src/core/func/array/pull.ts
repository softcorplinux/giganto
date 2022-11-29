import { Many } from '../../types/common';
import filter from '../collection/filter';
import includes from '../collection/includes';
import isArray from '../lang/isArray';

/**
 * Returns a new array and deletes all the specified values from the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @param {...*} [args] The values to remove.
 * @returns {Array} Returns new array.
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * // => ['b', 'b']
 */
export default function pull<T>(values: T[], ...args: Many<T>[]): typeof args | undefined {
  if (!isArray(values) || !isArray(args)) return undefined;
  return filter(values, (i) => !includes(args, i));
}
