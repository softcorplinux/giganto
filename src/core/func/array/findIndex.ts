import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.find, except that it returns the index of the first element, the predicate returns true
 * instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to inspect.
 * @param {Function} [predicate] The function called at each iteration.
 * @returns {Array} Returns the index of the found element, else -1.
 * @example
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false },
 * ];
 *
 * _.findIndex(users, ({ user }) => user === 'Vic')
 * // => 1
 */
export default function findIndex<T>(
  values: T[],
  predicate: (value: T, index?: number, array?: T[]) => boolean,
): number | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;
  return values.findIndex(predicate);
}
