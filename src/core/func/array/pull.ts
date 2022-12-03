import { Many } from '../../types/common';
import isArray from '../lang/isArray';
import isEqual from '../lang/isEqual';
import pullAllWith from './pullAllWith';

/**
 * Deletes all the specified values from the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @param {...*} [args] The values to remove.
 * @returns {Array} Returns array.
 * @example
 *
 * const array = ['a', 'b', 'c', 'a', 'b', 'c'];
 *
 * _.pull(array, 'a', 'c');
 * console.log(array);
 * // => ['b', 'b']
 */
export default function pull<T>(values: T[], ...args: Many<T>[]): typeof args | undefined {
  if (!isArray(values) || !isArray(args)) return undefined;
  return pullAllWith(values, args, isEqual);
}
