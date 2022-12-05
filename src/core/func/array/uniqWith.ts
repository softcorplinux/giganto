import { Many, RestCallback } from '../../types/common';
import unionWith from './unionWith';

/**
 * This method is similar to _.uniq, except that it accepts a comparator that is called to compare array elements.
 * The order of the resulting values is determined by the order in which they appear in the array.
 * Returns only a unique value. Predicate is called with one argument values: T
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * const objects = [{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 1, y: 1 }, { x: 1, y: 2 }];
 *
 * _.uniqWith(objects, ({ y }) => isEqual(y, 2));
 * // => [{ x: 1, y: 2 }]
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false },
 *  { user: 'Nat', active: true },
 *  { user: 'Nat', active: false }
 * ];
 * _.uniqWith(users, ({ user }) => user.startsWith('N') && user.endsWith('t'));
 * // => [{ user: 'Nat', active: false }, { user: 'Nat', active: true }]
 */
export default function uniqWith<T>(values: Many<T>[], predicate: (value: T) => any): Many<T>[] | undefined {
  return unionWith(...([values, predicate] as RestCallback<T>));
}
