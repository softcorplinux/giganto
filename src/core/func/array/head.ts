import isArray from '../lang/isArray';

/**
 * Returns the first element of the array.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to query.
 * @returns {*} Returns the first element of array.
 * @example
 *
 * const users = [
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false },
 * ];
 *
 * _.head(users);
 * // => { user: 'Vic', active: true }
 */
export default function head<T>(values: T[]): T | undefined {
  if (!isArray(values)) return undefined;
  return values[0];
}
