import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.findIndex, except that it iterates through the elements of the collection from right to left.
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
 * _.findLastIndex(users, ({ user }) => user !== 'Den');
 * // => 2
 */
export default function findLastIndex<T>(
  values: T[],
  predicate: (value: T, index?: number, array?: T[]) => boolean,
): number | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;

  let response = -1;
  let index = size(values);

  while (index--) {
    if (predicate(values[index], index, values)) {
      response = index;
      break;
    }
  }

  return response;
}
