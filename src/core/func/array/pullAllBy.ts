import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';

/**
 * This method is similar to _.pullAll, except that it takes a predicate, which is called for each
 * element of the array and values to generate a criterion by which they are compared.
 * Predicate is called with a single argument args: T.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The array to modify.
 * @param {Array} [args] The values to remove.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns array.
 * @example
 *
 * const users = [
 *  { user: 'Ben', active: false },
 *  { user: 'Vic', active: true },
 *  { user: 'Nat', active: false },
 *  { user: 'Den', active: false }
 * ];
 *
 * _.pullAllBy(users, [{ user: 'Vic', active: true }, { user: 'Nat', active: false }], ({ user }) => user);
 * console.log(users);
 * // => [{ user: 'Ben', active: false }, { user: 'Den', active: false }]
 */
export default function pullAllBy<T>(values: T[], args: T[], predicate: (value: T) => any): T[] | undefined {
  if (!isArray(values) || !isArray(args) || !predicate || !isFunction(predicate)) return undefined;
  let index = size(values);
  const setB = new Set(args.map((i) => predicate(i)));

  while (index--) {
    if (setB.has(predicate(values[index]))) {
      values.splice(index, 1);
    }
  }

  return values;
}
