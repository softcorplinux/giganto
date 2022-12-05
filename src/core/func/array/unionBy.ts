import { Many, RestCallback } from '../../types/common';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import last from './last';
import union from './union';

/**
 * This method is similar to _.union, except that it uses an iteration that is called for each element of each
 * array to generate a criterion by which uniqueness is calculated. The resulting values are selected
 * from the first array in which this value occurs. Predicate is called with one argument value: T
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to inspect.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of combined values.
 * @example
 *
 * _.unionBy([2.1], [1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 * _.unionBy( users, [{ user: 'Nat', active: true }], [{ user: 'Lat', active: false }], ({ active }) => active);
 * // => [{ user: 'Ben', active: false }, { user: 'Vic', active: true }]
 */
export default function unionBy<T>(...args: RestCallback<T>): Many<T>[] | undefined {
  if (!isArray(args)) return undefined;

  const predicate = last(args) as (value: T) => any;

  if (!predicate || !isFunction(predicate)) return undefined;

  const arr = union(...(args as Many<T>[]));
  const set = new Set();
  const length = size(arr) - 1;
  let index = -1;
  const response: Many<T>[] = [];

  while (++index < length) {
    const value = predicate(arr[index]);

    if (!set.has(value)) {
      set.add(value);
      response.push(arr[index]);
    }
  }

  return response;
}
