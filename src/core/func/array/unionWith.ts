import { Many, RestCallback } from '../../types/common';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import last from './last';
import union from './union';

/**
 * This method is similar to _.union, except that it accepts a comparator that is called to compare array elements.
 * Returns only a unique value. Predicate is called with one argument args: T
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
 * const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 * const others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.unionWith(objects, others, ({ x }) => isEqual(x, 2));
 * // => [{x: 2, y: 1}]
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 * _.unionWith(users, [{ user: 'Nat', active: true }], [{ user: 'Lat', active: false }], ({ user }) => user.startsWith('N') && user.endsWith('t'));
 * // => [{ user: 'Nat', active: false }, { user: 'Nat', active: true }]
 */
export default function unionWith<T>(...args: RestCallback<T>): Many<T>[] | undefined {
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
    const stringify = JSON.stringify(arr[index]);

    if (value && !set.has(stringify)) {
      set.add(stringify);
      response.push(arr[index]);
    }
  }

  return response;
}
