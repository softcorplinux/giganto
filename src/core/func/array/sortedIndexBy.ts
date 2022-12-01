import size from '../collection/size';
import isArray from '../lang/isArray';
import isFunction from '../lang/isFunction';
import isUndefined from '../lang/isUndefined';

/**
 * This method is similar to _.sortedIndex, except that it takes a predicate, which is called for the value and each
 * element of the array to calculate their sort rank. Predict is called with a single argument value: T.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Array
 * @param {Array} values The sorted array to inspect.
 * @param {*} [value] The value to evaluate.
 * @param {Function} [predicate] The predicate called for each element.
 * @returns {Array} Returns the index at which value should be inserted into array.
 * @example
 *
 * const users = [
 *  { user: 'Ben', age: 30 },
 *  { user: 'Nat', age: 50 },
 *  { user: 'Den', age: 60 }
 * ];
 *
 * _.sortedIndexBy(users, { user: 'Vic', age: 40 }, ({ age }) => age);
 * // => 1
 */
export default function sortedIndexBy<T>(values: T[], value: T, predicate: (value: T) => any): number | undefined {
  if (!isArray(values) || isUndefined(value) || !predicate || !isFunction(predicate)) return undefined;
  let length = size(values);
  let index = 0;
  value = predicate(value);

  while (index < length) {
    const pos = (length + index) >>> 1;
    const computed = predicate(values[pos]);
    !isUndefined(computed) && computed < value ? (index = pos + 1) : (length = pos);
  }

  return length;
}
