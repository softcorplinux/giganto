import filter from '../collection/filter';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * Creates a fragment of an array with elements taken from the end. Elements are taken until the predicate returns false.
 * The predicate is called with three arguments: (value, index, array). Only value is required, the rest of the
 * predicate arguments are optional.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @param {Function} [predicate] The function called at each iteration.
 * @returns {Array} Returns the slice of array.
 * @example
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 *
 * _.takeRightWhile(users, ({active}) => !active);
 * // => [{ user: 'Nat', active: false }, { user: 'Den', active: false }]
 */
export default function takeRightWhile<T>(
  values: T[],
  predicate: (value: T, index?: number, array?: T[]) => boolean,
): T[] | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;

  let resIndex = -1;
  let index = size(values);

  while (index--) {
    if (!predicate(values[index], index, values)) {
      resIndex = index;
      break;
    }
  }

  return filter(values, (_, index) => index > resIndex);
}
