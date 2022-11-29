import { Many } from '../../types/common';
import isArray from '../lang/isArray';
import pull from './pull';

/**
 * This method is similar to _.pull, deletes all the specified values from the array.
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
 * _.pullAll(array, ['a', 'c']);
 * console.log(array);
 * // => ['b', 'b']
 */
export default function pullAll<T>(values: T[], args: Many<T>[]): typeof args | undefined {
  if (!isArray(values) || !isArray(args)) return undefined;
  return pull(values, ...args);
}
