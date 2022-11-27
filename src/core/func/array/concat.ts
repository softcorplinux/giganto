import { Dictionary, Many, PartialShallow } from '../../types/common';
import isArray from '../lang/isArray';

/**
 * Creates a new array combining an array with any additional values.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to concatenate.
 * @param {...*} [args] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * const array = [1, { user: 'Vic' }];
 *
 * _.concat(array, 2, [3], [[4]], { user: 'Nat' });
 * // => [1, { user: 'Vic' }, 2, [3], [[4]], { user: 'Nat' }]
 *
 * console.log(array)
 * // => [1, { user: 'Vic' }]
 */
export default function concat<T, E extends PartialShallow<E> | Dictionary<E>>(
  values: T[],
  ...args: Many<E>[] | E[]
): (T | E | ConcatArray<E>)[] | undefined {
  if (!isArray(values)) return undefined;
  return [...values, ...args];
}
