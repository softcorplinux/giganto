import { Many, RestCallback } from '../../types/common';
import filter from '../collection/filter';
import map from '../collection/map';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import differenceBy from './differenceBy';
import indexOf from './indexOf';

/**
 * This method is similar to _.xor, except that it takes a predicate, which is called for each element of
 * each array to generate a criterion by which they are compared. The order of the resulting values is
 * determined by the order in which they appear in arrays. Predict is called with a single argument args: T.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {...*} args The arrays to inspect.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2, 3.4]
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 * _.xorBy(users, [{ user: 'Nat', active: false }, { user: 'Vic', active: true }], ({ user }) => user);
 * // => [{ user: 'Ben', active: false }, { user: 'Den', active: false }]
 */
export default function xorBy<T>(...args: RestCallback<T>): Many<T>[] | undefined {
  if (!isArray(args)) return undefined;
  const [predicate] = args.splice(-1);

  if (!predicate || !isFunction(predicate)) return undefined;

  const arr = ([] as T[]).concat(...(args as T[]));
  const updated = map<T>(arr, (v) => (predicate as (value: T) => any)(v)) ?? [];

  return differenceBy<T>(
    arr,
    [...new Set(filter(arr, (v, i) => indexOf(updated, (predicate as (value: T) => any)(v)) !== i))],
    predicate as (value: T) => any,
  );
}
