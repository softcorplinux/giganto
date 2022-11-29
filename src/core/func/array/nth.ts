import size from '../collection/size';
import isArray from '../lang/isArray';
import isInteger from '../lang/isInteger';

/**
 * Returns an element with the index n of the array. If n is negative, the nth element from the end is returned.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to fill.
 * @param {number} [num=0] The index of the element to return.
 * @returns {Array} Returns the nth element of array.
 * @example
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false },
 * ];
 *
 * _.nth(users, 2);
 * // => { user: 'Nat', active: false }
 *
 * _.nth(users, -3);
 * // => { user: 'Vic', active: true }
 */
export default function nth<T, U>(values: T[], num: number = 0): T | undefined {
  if (!isArray(values) || !isInteger(num)) return undefined;
  const length = size(values);

  if (num < 0) {
    num += length;
  }

  return values[num];
}
