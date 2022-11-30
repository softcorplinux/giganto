import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * Removes all elements from the array for which the predicate returns true, and returns an array of deleted elements.
 * The predicate is called with three arguments: (value, index, array).
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 *
 * const evens = _.remove(users, ({active}) => !active);
 *
 * console.log(users);
 * // => [{ user: 'Vic', active: true }]
 *
 * console.log(evens);
 * // => [{ user: 'Ben', active: false }, { user: 'Nat', active: false }, { user: 'Den', active: false }]
 */
export default function remove<T>(
  values: T[],
  predicate: (value: T, index: number, array: T[]) => any,
): T[] | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;
  let index = size(values);
  const response = [];

  while (index--) {
    if (predicate(values[index], index, values)) {
      response.unshift(values[index]);
      values.splice(index, 1);
    }
  }

  return response;
}
