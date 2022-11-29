import size from '../collection/size';
import isArray from '../lang/isArray';

/**
 * Returns the last element of the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @returns {*} Returns the last element of array.
 * @example
 *
 * const users = [
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false },
 * ];
 *
 * _.last(users);
 * // => { user: 'Den', active: false }
 */
export default function last<T>(values: T[]): T | undefined {
  if (!isArray(values)) return undefined;
  return values[size(values) - 1];
}
