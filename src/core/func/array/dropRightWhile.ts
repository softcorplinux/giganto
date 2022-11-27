import filter from '../collection/filter';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * Creates an array fragment that excludes elements removed from the end.
 * Elements are discarded until the predicate returns false. The predicate is called with three arguments: (value, index, array).
 * Only value is required, the rest of the predicate arguments are optional.
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
 *  { 'user': 'Vic',  'active': true },
 *  { 'user': 'Nat',    'active': false },
 *  { 'user': 'Den', 'active': false }
 * ];
 *
 * _.dropRightWhile(users, ({active}) => !active);
 * // => [{ 'user': 'Vic',  'active': true }]
 */
export default function dropRightWhile<T>(
  values: T[],
  predicate: (value: T, index?: number, array?: T[]) => boolean,
  thisArg?: any,
): T[] | undefined {
  if (!isArray(values) || !predicate || !isFunction(predicate)) return undefined;
  return filter(values, (value, index, array) => !predicate(value, index, array));
}
