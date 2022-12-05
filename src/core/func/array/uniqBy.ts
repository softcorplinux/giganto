import { Many, RestCallback } from '../../types/common';
import unionBy from './unionBy';

/**
 * This method is similar to _.uniq, except that it takes a predicate, which is called for each element in the
 * array to generate a criterion by which uniqueness is calculated. The order of the resulting values
 * is determined by the order in which they appear in the array. Predict is called with a single argument values: T
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
 * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
 * // => [2.1, 1.2]
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 * _.uniqBy(users, ({ active }) => active)
 * // => [{ user: 'Ben', active: false }, { user: 'Vic', active: true }]
 */
export default function uniqBy<T>(values: Many<T>[], predicate: (value: T) => any): Many<T>[] | undefined {
  return unionBy(...([values, predicate] as RestCallback<T>));
}
