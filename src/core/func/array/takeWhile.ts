import filter from '../collection/filter';
import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * Creates a fragment of an array with elements taken from the beginning. Elements are taken until the predicate returns false.
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
 *  { user: 'Ben', active: true },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: true }
 * ];
 *
 * _.takeWhile(users, ({active}) => active);
 * // => [{ user: 'Ben', active: true }, { user: 'Vic', active: true }]
 */
export default function takeWhile<T>(
  values: T[],
  predicate: (value: T, index?: number, array?: T[]) => boolean,
): T[] | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;

  const length = size(values);
  let resIndex = length;
  let index = -1;

  while (++index < length) {
    if (!predicate(values[index], index, values)) {
      resIndex = index;
      break;
    }
  }

  return filter(values, (_, index) => index < resIndex);
}
